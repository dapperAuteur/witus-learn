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
// EVERY PRIMARY DOCUMENT IN THIS FILE WAS READ DIRECTLY, not summarized from search results:
//   · 7 U.S.C. § 361a and § 361c(d), read on uscode.house.gov. The § 361c(d)(4) exception is the
//     opening hook and it was verified before it was used: the four jurisdictions it names are
//     exactly the members of § 361a's definition of "State" that are not states.
//   · U.S. Const. art. I, § 8, cl. 17; art. II, § 1, cl. 2; art. IV, § 3, cl. 2; amend. XXIII,
//     read from the National Archives transcripts.
//   · 8 U.S.C. §§ 1101(a)(29), (a)(36), (a)(38), 1402, 1406, 1407, 1408, read on uscode.house.gov.
//   · 48 U.S.C. §§ 1661, 1801, 2101, 2121, 2141, 2142, read on uscode.house.gov.
//   · Downes v. Bidwell, 182 U.S. 244 (1901) and Balzac v. Porto Rico, 258 U.S. 298 (1922), read
//     on Cornell's Legal Information Institute.
//   · United States v. Vaello Madero, No. 20-303 (U.S. Apr. 21, 2022), the SLIP OPINION from supremecourt.gov,
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
//     the cultural-protection defense stated in the words of the people who make it.
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

*United States v. Vaello Madero*, No. 20-303 (U.S. Apr. 21, 2022) (slip op.) (Gorsuch, J., concurring). Supreme Court of the United States. https://www.supremecourt.gov/opinions/21pdf/20-303_6khn.pdf`,
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

*United States v. Vaello Madero*, No. 20-303 (U.S. Apr. 21, 2022) (slip op.) (Gorsuch, J., concurring). Supreme Court of the United States. https://www.supremecourt.gov/opinions/21pdf/20-303_6khn.pdf`,
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
            options: ["Withholds the difference", "Refers the shortfall to the Department of Justice for collection with interest", "Suspends the State's experiment station from the federal research program for a year", "Requires the State to submit a corrective plan of work before the next fiscal year"],
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
            options: ["A tax case", "A challenge to a territorial legislature's power to redraw its own districts", "A habeas corpus petition filed by a detainee held outside the United States", "A land dispute between a territorial government and the Department of the Interior"],
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
            options: ["A United Nations trusteeship", "A period of direct rule by the United States Navy under an executive order", "Administration by the Philippines under a treaty of mutual defense", "A plebiscite in which the islands rejected statehood by a two-thirds margin"],
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
            options: ["That republican traditions barred governing colonies", "That the acquisitions should be sold back to Spain at the price paid for them", "That the Constitution applied only to territories with an organized legislature", "That the new possessions should be admitted as states within a fixed term of years"],
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
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2 — The Insular Cases
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "downes-v-bidwell",
      title: "5 · Downes v. Bidwell, and a word the Constitution never uses",
      section: "Section 2 · The Insular Cases",
      body: `The case that built the category was about fruit.

In November 1900 a merchant shipped "oranges consigned to the plaintiff at New York, and brought thither from the port of San Juan in the island of Porto Rico" (Downes v. Bidwell, 1901). The New York customs collector charged duty on them under the Foraker Act, which Congress had passed that April to erect a civil government on the island and to tax goods moving to and from it. The bill came to **$659.35**. The importer paid it and sued, on the ground that the Constitution says "all Duties, Imposts and Excises shall be uniform throughout the United States" and Puerto Rico was now inside the United States.

**The Court had to decide a prior question before it could decide the tax question: does the Constitution apply in Puerto Rico at all?** It fractured. No opinion commanded a majority, and the two leading opinions reached the same result by different roads. That is why the doctrine is strange: it was assembled out of pieces.

**Justice Brown's opinion** took the direct route. Applying the Constitution made sense, he wrote, in "contiguous territor[ies] inhabited only by people of the same race, or by scattered bodies of native Indians", but not in islands "inhabited by alien races, differing from us in religion, customs, laws, methods of taxation, and modes of thought", where "the administration of government and justice, according to Anglo-Saxon principles, may for a time be impossible" (Downes v. Bidwell, 1901, at 282, 287). The Constitution would reach Puerto Rico if and when Congress said so.

Brown also named the stake out loud. "A false step at this time might be fatal to the development of . . . the American Empire" (Downes v. Bidwell, 1901, at 286, as quoted in Fitisemanu v. United States, 2021).

**Justice White's concurrence** supplied the machinery that survived. He argued that the Constitution's application depended on "the situation of the territory and its relations to the United States" (Downes v. Bidwell, 1901, at 293). Congress could **incorporate** a territory into the United States, expressly or by clear implication, and in an incorporated territory the Constitution applied fully. Where Congress had not, only "fundamental" guarantees reached inside. Puerto Rico, on his account, remained "foreign to the United States" in the relevant sense because Congress had not indicated an intention to incorporate it.

Do not let the tidier language hide what White was arguing. He rested the distinction on a claimed national right to acquire and exploit "an unknown island, peopled with an uncivilized race . . . for commercial and strategic reasons", a right that "could not be practically exercised if the result would be to endow" full constitutional protection "on those absolutely unfit to receive [them]" (Downes v. Bidwell, 1901, at 306).

**The holding, in the Court's own words:** "the island of Porto Rico is a territory appurtenant and belonging to the United States, but not a part of the United States within the revenue clauses of the Constitution" (Downes v. Bidwell, 1901). Belonging to, and not part of. The duty stood.

**The dissenters said in 1901 what critics say now.** Chief Justice Fuller was astonished that Congress could keep a territory "like a disembodied shade, in an intermediate state of ambiguous existence for an indefinite period". Justice Harlan wrote that the Court was "engraft[ing] upon our republican institutions a colonial system such as exists under monarchical governments", and he could not find White's middle ground anywhere in the document: "I am constrained to say that this idea of 'incorporation' has some occult meaning which my mind does not apprehend" (Downes v. Bidwell, 1901, at 372, 380, 391, as quoted in Vaello Madero, 2022, Gorsuch, J., concurring, slip op. at 4).

Three years later a majority adopted White's theory in *Dorr v. United States* (Vaello Madero, 2022, Gorsuch, J., concurring, slip op. at 4). The word **incorporated** entered American constitutional law and has never left it, and it appears nowhere in the Constitution.

:::reveal What was actually being shipped in Downes v. Bidwell, and what was the duty? ||| Oranges from San Juan to New York, on which the collector charged $659.35.

:::reveal State the Downes holding in the Court's own phrasing. ||| That Puerto Rico is a territory appurtenant and belonging to the United States, but not a part of the United States within the revenue clauses of the Constitution.

:::reveal What did Justice Harlan say about the idea of incorporation? ||| That it has some occult meaning which his mind did not apprehend, because he could find it nowhere in the Constitution.

## Vocabulary
- **Insular Cases**: the line of Supreme Court decisions beginning in 1901 that sorted United States territories into incorporated and unincorporated, and held that the Constitution reaches the second kind only in part.
- **Incorporation (territorial)**: Justice White's concept that Congress may bring a territory inside the Constitution's full reach, expressly or by clear implication, and that until it does only some guarantees apply.
- **Uniformity Clause**: Article I, Section 8, Clause 1, requiring that duties, imposts and excises be uniform throughout the United States, which is the provision the importer invoked.
- **Foraker Act**: the 1900 statute that created a civil government for Puerto Rico and imposed the duties challenged in this case.
- **Fundamental right (Insular sense)**: in this doctrine, a constitutional guarantee held to apply even in an unincorporated territory, with no test in the Constitution for deciding which guarantees qualify.

## Sources
*Downes v. Bidwell*, 182 U.S. 244 (1901). Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/supremecourt/text/182/244

*Fitisemanu v. United States*, Nos. 20-4017 & 20-4019 (10th Cir. June 15, 2021). U.S. Government Publishing Office. https://www.govinfo.gov/content/pkg/USCOURTS-ca10-20-04017/pdf/USCOURTS-ca10-20-04017-0.pdf

*United States v. Vaello Madero*, No. 20-303 (U.S. Apr. 21, 2022) (slip op.) (Gorsuch, J., concurring). Supreme Court of the United States. https://www.supremecourt.gov/opinions/21pdf/20-303_6khn.pdf`,
    },
    {
      slug: "balzac-and-the-jury",
      title: "6 · Balzac, and the right that did not follow",
      section: "Section 2 · The Insular Cases",
      body: `Twenty-one years after the oranges, the doctrine met a harder test, and it held.

Jesus M. Balzac edited a daily newspaper in Arecibo called *El Baluarte*. In 1918 he was prosecuted for criminal libel over two articles, published on 16 and 23 April. He demanded a jury trial. Puerto Rico's own code did not provide one for a misdemeanor, so he argued that the Sixth Amendment did, because by then he was a United States citizen: the Jones Act of 1917 had made the people of Puerto Rico citizens five years before his appeal reached Washington.

**The Court, through Chief Justice Taft, said no on both halves of the argument.**

On the first half, the citizenship did not change the island's status. Nothing in the 1917 Act declared an intention to incorporate Puerto Rico, and the Court would not infer one: "We cannot find any intention to depart from this policy in making Porto Ricans American citizens, explained as this is by the desire to put them as individuals on an exact equality with citizens from the American homeland" (Balzac v. Porto Rico, 1922). Citizenship attached to persons. Incorporation attached to places, and Congress had not done it.

On the second half, the Court drew the line that has bothered people ever since:

> "It is locality that is determinative of the application of the Constitution, in such matters as judicial procedure, and not the status of the people who live in it." (Balzac v. Porto Rico, 1922)

Read that twice. **A citizen of the United States in San Juan and a citizen of the United States in Ohio had different constitutional rights in a courtroom, and the reason was where the courtroom was.**

The Court then explained why a jury was not owed. "The jury system needs citizens trained to the exercise of the reponsibilities of jurors. In common-law countries centuries of tradition have prepared a conception of the impartial attitude jurors must assume" (Balzac v. Porto Rico, 1922). Justice Gorsuch summarized how the opinion applied that reasoning: on the Court's account Puerto Rico's localities included "compact and ancient communities" that had not yet developed the "impartial attitude" or "conscious duty of participation" the "Anglo-Saxon" jury trial required (Vaello Madero, 2022, Gorsuch, J., concurring, slip op. at 5).

**Three consequences to carry forward.**

**One, the doctrine got its shape here.** *Downes* said the Constitution does not apply in full. *Balzac* said even a right as central as trial by jury does not qualify as fundamental for these purposes. After *Balzac*, the practical rule was that very few constitutional limits could be relied on in an unincorporated territory without a clear statement from Congress.

**Two, the case is still good law.** Neither *Downes* nor *Balzac* has been overruled. In 2020, when parties in a Puerto Rico case asked the Supreme Court to overrule the Insular Cases, the Court declined to reach the question and added that "whatever their continued validity we will not extend them in these cases" (Financial Oversight and Management Board for Puerto Rico v. Aurelius Investment, LLC, 2020). Not extended, not overruled, still there.

**Three, this is why citizenship is not the end of the argument.** It is tempting to think the whole problem would dissolve if Congress simply made everyone a citizen. *Balzac* is the case that says otherwise, in terms: locality is determinative, not the status of the people who live in it. Section 3 is about the one place where Congress has not even taken that step.

:::reveal What was Balzac prosecuted for, and what did he demand? ||| Criminal libel over two articles in his Arecibo newspaper, and he demanded a jury trial under the Sixth Amendment.

:::reveal What did Balzac hold about the effect of the 1917 grant of citizenship? ||| That it did not incorporate Puerto Rico, because the Court would not infer an intention to incorporate that Congress had not declared.

:::reveal Quote the principle Balzac used to decide whose constitutional rights apply where. ||| It is locality that is determinative of the application of the Constitution, in such matters as judicial procedure, and not the status of the people who live in it.

## Vocabulary
- **Jones Act of 1917**: the statute that conferred United States citizenship on the people of Puerto Rico, and which the Court held did not incorporate the island.
- **Locality rule**: the Balzac principle that the place, rather than the citizenship of the person, decides which constitutional procedures apply.
- **Criminal libel**: the offence Balzac was charged with, a misdemeanor under the island's code for which local law provided no jury.
- **Clear statement**: the requirement, drawn from Balzac, that incorporation not be assumed and that Congress say so if it means it.
- **Good law**: a decision that has never been overruled and that lower courts remain bound to apply, which both Downes and Balzac still are.

## Sources
*Balzac v. Porto Rico*, 258 U.S. 298 (1922). Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/supremecourt/text/258/298

*Financial Oversight and Management Board for Puerto Rico v. Aurelius Investment, LLC*, No. 18-1334 (U.S. June 1, 2020). Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/supremecourt/text/18-1334

*United States v. Vaello Madero*, No. 20-303 (U.S. Apr. 21, 2022) (slip op.) (Gorsuch, J., concurring). Supreme Court of the United States. https://www.supremecourt.gov/opinions/21pdf/20-303_6khn.pdf`,
    },
    {
      slug: "the-critics-by-name",
      title: "7 · The critics, by name, and the defense they answer",
      section: "Section 2 · The Insular Cases",
      body: `A course can say "these cases are criticized" and teach nothing. Here is who says what, in their own words, so you can weigh it.

**Justice Gorsuch, concurring in *United States v. Vaello Madero* (2022).** He opens without hedging:

> "A century ago in the Insular Cases, this Court held that the federal government could rule Puerto Rico and other Territories largely without regard to the Constitution. It is past time to acknowledge the gravity of this error and admit what we know to be true: The Insular Cases have no foundation in the Constitution and rest instead on racial stereotypes. They deserve no place in our law." (Vaello Madero, 2022, Gorsuch, J., concurring, slip op. at 1)

He is specific about the source. "The Insular Cases can claim support in academic work of the period, ugly racial stereotypes, and the theories of social Darwinists. But they have no home in our Constitution or its original understanding" (slip op. at 5). And he names the academics: Christopher Langdell, James Bradley Thayer and Abbott Lawrence Lowell, whose 1899 *Harvard Law Review* articles argued that constitutional limits "do not apply" to possessions acquired by conquest or cession and "are inapplicable except among a people whose social and political evolution has been consonant with our own" (slip op. at 2).

He closes: "the time has come to recognize that the Insular Cases rest on a rotten foundation. And I hope the day comes soon when the Court squarely overrules them" (slip op. at 10).

**Justice Sotomayor, dissenting in the same case,** attacks a different target, the outcome rather than the doctrine: "Congress' decision to exclude millions of U.S. citizens who reside in Puerto Rico from the SSI program fails even this deferential test", and she calls the result "irrational and antithetical to the very nature of the SSI program and the equal protection of citizens guaranteed by the Constitution" (Vaello Madero, 2022, Sotomayor, J., dissenting, slip op. at 1).

**Judge Juan Torruella of the First Circuit,** who spent a judicial career on this, described the Insular Cases as "anchored on theories of dubious legal or historical validity, contrived by academics interested in promoting an expansionist agenda" (Igartua de la Rosa v. United States, 2005, Torruella, J., dissenting, as quoted in Fitisemanu v. United States, 2021).

**And the Tenth Circuit panel that ruled AGAINST extending citizenship** said much the same about the cases it was applying. Its opinion calls the Insular Cases "disreputable to modern eyes" in purpose and reasoning, notes that the Court "repeatedly voiced concern that native inhabitants of the unincorporated territories were simply unfit for the American constitutional regime", and quotes both White's "absolutely unfit to receive it" and Brown's "differences of race" (Fitisemanu v. United States, 2021). **You can think the doctrine is shameful and still think a court is not the body to undo it. That is the actual live disagreement, and it is not the one most summaries describe.**

**Now the defense, stated fairly, because it is held by people with a real stake.** A modern argument says the unincorporated status has become protective: it is what lets a territory keep legal arrangements that would not survive uniform constitutional scrutiny, such as communal land tenure and hereditary chieftaincy in American Samoa. The Tenth Circuit took this seriously and it is a large part of why the case came out as it did.

Justice Gorsuch answered that argument directly, and it is worth having both halves. He noted the "amicus briefs from the Governor of Puerto Rico, territorial advocacy groups, and the U. S. Virgin Islands expressing vehement disagreement with the Insular Cases", and wrote that "recent attempts to repurpose the Insular Cases merely drape the worst of their logic in new garb", because "the Constitution's restraints on federal power do not turn on a court's unschooled assessment of a Territory's local customs" (Vaello Madero, 2022, Gorsuch, J., concurring, slip op. at 9 n.4).

**What no responsible summary should do is collapse this into one axis.** There is a disagreement about the doctrine, a disagreement about who should fix it, and a disagreement about what fixing it would do to particular places. Section 3 is where all three collide in one case.

:::reveal What did Justice Gorsuch say the Insular Cases rest on, in place of the Constitution? ||| Racial stereotypes, along with the academic work of the period and the theories of social Darwinists.

:::reveal Who wrote the 1899 Harvard Law Review articles Justice Gorsuch names as the doctrine's intellectual source? ||| Christopher Langdell, James Bradley Thayer and Abbott Lawrence Lowell.

:::reveal What is the modern defense of unincorporated status, and how did Justice Gorsuch answer it? ||| That the status protects local arrangements a uniform Constitution would disturb; he answered that repurposing the cases drapes the worst of their logic in new garb.

## Vocabulary
- **Concurrence**: an opinion by a justice who agrees with the Court's result but writes separately, which is how the sharpest criticism of the Insular Cases reached the pages of the United States Reports.
- **Social Darwinism**: the late nineteenth-century doctrine ranking peoples by supposed evolutionary fitness, named by Justice Gorsuch as one of the intellectual supports for the Insular Cases.
- **Amicus brief**: a filing by a non-party with an interest in the outcome, which is how territorial governments and advocacy groups put their positions before the Court in these cases.
- **The protective argument**: the modern claim that unincorporated status shields local legal arrangements from uniform constitutional scrutiny.
- **Judicial versus legislative repair**: the live disagreement about whether a court should overturn the doctrine or Congress should legislate around it, which cuts across agreement that the doctrine is wrong.

## Sources
*Fitisemanu v. United States*, Nos. 20-4017 & 20-4019 (10th Cir. June 15, 2021). U.S. Government Publishing Office. https://www.govinfo.gov/content/pkg/USCOURTS-ca10-20-04017/pdf/USCOURTS-ca10-20-04017-0.pdf

*United States v. Vaello Madero*, No. 20-303 (U.S. Apr. 21, 2022) (slip op.) (Gorsuch, J., concurring; Sotomayor, J., dissenting). Supreme Court of the United States. https://www.supremecourt.gov/opinions/21pdf/20-303_6khn.pdf`,
    },
    {
      slug: "quiz-the-insular-cases",
      title: "8 · Knowledge check: the Insular Cases",
      section: "Section 2 · The Insular Cases",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What goods were at the center of Downes v. Bidwell?",
            options: ["Oranges", "Refined sugar shipped from Ponce to Baltimore in the spring of 1900", "Cigars manufactured in Havana and landed at the port of New Orleans", "Coffee carried from Guam to San Francisco under the terms of the Foraker Act"],
            correctIndex: 0,
            explanation: "The record describes oranges consigned to the plaintiff at New York and brought from the port of San Juan in November 1900.",
            sourceLessonSlug: "downes-v-bidwell",
          },
          {
            prompt: "What duty amount did the collector charge on that shipment?",
            options: ["$659.35", "$1,250.00, the standard rate then applied to fruit from a foreign port", "$28,081, the sum later disputed in a twenty-first century benefits case", "$25,000,000, the price paid for a different island group in 1917"],
            correctIndex: 0,
            explanation: "The importer paid it and sued, which is how a fruit invoice became the founding case of an entire constitutional doctrine.",
            sourceLessonSlug: "downes-v-bidwell",
          },
          {
            prompt: "Which constitutional provision did the importer invoke?",
            options: ["The Uniformity Clause", "The Privileges and Immunities Clause of Article IV, Section 2", "The Commerce Clause, in its provision about commerce among the several states", "The Import-Export Clause forbidding states to lay duties on imports"],
            correctIndex: 0,
            explanation: "Article I, Section 8, Clause 1 requires that duties, imposts and excises be uniform throughout the United States.",
            sourceLessonSlug: "downes-v-bidwell",
          },
          {
            prompt: "What prior question did the Court have to answer before it could decide the tax question?",
            options: ["Whether the Constitution applied in Puerto Rico at all", "Whether the Foraker Act had been properly presented to the President for signature", "Whether a customs collector may be sued in his personal rather than official capacity", "Whether Puerto Rico's own courts had jurisdiction over a shipment landed in New York"],
            correctIndex: 0,
            explanation: "The uniformity requirement only bites if Puerto Rico is inside the United States for that purpose, so the status question came first.",
            sourceLessonSlug: "downes-v-bidwell",
          },
          {
            prompt: "How did the Court divide in Downes v. Bidwell?",
            options: ["It fractured, with no opinion commanding a majority", "It was unanimous, with a single opinion joined by every sitting justice", "It split five to four with one clear majority opinion and one clear dissent", "It issued a short unsigned order without any opinion explaining the result"],
            correctIndex: 0,
            explanation: "The two leading opinions reached the same result by different routes, which is why the doctrine was assembled out of pieces.",
            sourceLessonSlug: "downes-v-bidwell",
          },
          {
            prompt: "In Justice Brown's opinion, where did applying the Constitution make sense?",
            options: ["In contiguous territories inhabited by people of the same race", "In any territory whose legislature had petitioned Congress for admission as a state", "In territories where a federal court had already been established and staffed", "In territories acquired by purchase rather than by conquest or by cession"],
            correctIndex: 0,
            explanation: "His phrasing was contiguous territories inhabited only by people of the same race, or by scattered bodies of native Indians.",
            sourceLessonSlug: "downes-v-bidwell",
          },
          {
            prompt: "What did Justice Brown say about islands inhabited by what he called alien races?",
            options: ["That government on Anglo-Saxon principles might be impossible", "That their inhabitants should be naturalized individually rather than collectively by statute", "That Congress should govern them through the treaty power rather than under Article IV", "That the Constitution applied there but the courts could not enforce it for a generation"],
            correctIndex: 0,
            explanation: "He wrote that the administration of government and justice, according to Anglo-Saxon principles, may for a time be impossible.",
            sourceLessonSlug: "downes-v-bidwell",
          },
          {
            prompt: "What did Justice Brown say a false step at that time might be fatal to?",
            options: ["The development of the American Empire", "The credit of the United States in the markets of Europe and the Far East", "The prospect of admitting Hawaii and Alaska to the Union as states", "The settlement of the peace terms Spain had signed in December 1898"],
            correctIndex: 0,
            explanation: "The phrase appears in his opinion and the Tenth Circuit quoted it in 2021 while describing the purpose of the Insular Cases as disreputable.",
            sourceLessonSlug: "downes-v-bidwell",
          },
          {
            prompt: "What did Justice White say the Constitution's application depended on?",
            options: ["The situation of the territory and its relations to the United States", "Whether the territory's population had reached sixty thousand free inhabitants", "Whether the President had appointed a governor for the territory by that date", "Whether the treaty of acquisition had been ratified by a two-thirds Senate vote"],
            correctIndex: 0,
            explanation: "That formulation is where the incorporated and unincorporated distinction begins, and it is his own phrase.",
            sourceLessonSlug: "downes-v-bidwell",
          },
          {
            prompt: "On Justice White's theory, what reaches an unincorporated territory?",
            options: ["Only the fundamental parts of the Constitution", "Every provision of the Constitution except those Congress has expressly suspended", "Only the provisions the territorial legislature has adopted by its own enactment", "Only the provisions that were in force at the moment the territory was acquired"],
            correctIndex: 0,
            explanation: "The Constitution never says which guarantees are fundamental, which is the gap critics have pointed at ever since.",
            sourceLessonSlug: "downes-v-bidwell",
          },
          {
            prompt: "What claimed national right did Justice White rest the distinction on?",
            options: ["A right to acquire and exploit newly acquired islands", "A right to raise revenue from the possessions to pay the costs of the recent war", "A right to exclude the inhabitants of a possession from entry into the United States", "A right to garrison any acquired territory without the consent of its inhabitants"],
            correctIndex: 0,
            explanation: "He wrote of a right that could not be practically exercised if it endowed full constitutional protection on those he called absolutely unfit to receive it.",
            sourceLessonSlug: "downes-v-bidwell",
          },
          {
            prompt: "State the Downes holding in the Court's own phrasing.",
            options: ["Appurtenant and belonging to, but not a part of, the United States", "Fully within the United States for all purposes except the raising of federal revenue", "A foreign country for tariff purposes and a domestic jurisdiction for all other purposes", "A state in every constitutional sense except representation in the federal Congress"],
            correctIndex: 0,
            explanation: "The opinion says the island is a territory appurtenant and belonging to the United States, but not a part of it within the revenue clauses.",
            sourceLessonSlug: "downes-v-bidwell",
          },
          {
            prompt: "What did Chief Justice Fuller say Congress could do to a territory under the Court's reasoning?",
            options: ["Keep it like a disembodied shade in an ambiguous existence", "Sell it to a foreign power without the consent of the people who lived there", "Tax it without limit while denying its residents access to the federal courts", "Deny its inhabitants any nationality at all until it chose to grant them one"],
            correctIndex: 0,
            explanation: "His phrase was an intermediate state of ambiguous existence for an indefinite period, and it has aged into an accurate description.",
            sourceLessonSlug: "downes-v-bidwell",
          },
          {
            prompt: "What did Justice Harlan say the Court was grafting onto republican institutions?",
            options: ["A colonial system such as exists under monarchical governments", "A doctrine of implied powers wider than anything the framers had contemplated", "A rule of construction that would eventually swallow the Tenth Amendment whole", "A distinction between the rights of citizens and the rights of naturalized persons"],
            correctIndex: 0,
            explanation: "He dissented in the Insular Cases year after year, and his objection was that the Constitution contains no such system.",
            sourceLessonSlug: "downes-v-bidwell",
          },
          {
            prompt: "What did Justice Harlan say about the idea of incorporation?",
            options: ["That it had some occult meaning his mind did not apprehend", "That it belonged in a statute rather than in a judicial opinion of the Supreme Court", "That it should be limited to territories acquired before the ratification of the Constitution", "That it would be workable if Congress were required to declare it within ten years"],
            correctIndex: 0,
            explanation: "He could find the concept nowhere in the Constitution's terms, which remains the central objection to it.",
            sourceLessonSlug: "downes-v-bidwell",
          },
          {
            prompt: "In which later case did a majority of the Court adopt Justice White's incorporation theory?",
            options: ["Dorr v. United States", "Balzac v. Porto Rico, decided in 1922 on a criminal libel appeal from Arecibo", "Thompson v. Utah, decided in the same year as the Spanish-American War", "Loughborough v. Blake, the 1820 case about a tax levied on the District"],
            correctIndex: 0,
            explanation: "It was decided in 1904, three years after Downes, and it is where the fractured opinions became a rule.",
            sourceLessonSlug: "downes-v-bidwell",
          },
          {
            prompt: "Where in the Constitution does the word 'incorporated' appear, as a description of a territory?",
            options: ["Nowhere", "In Article IV, Section 3, Clause 2, immediately after the words needful Rules", "In Article I, Section 8, Clause 17, in the passage about the seat of government", "In the Fourteenth Amendment, in the clause about persons born or naturalized"],
            correctIndex: 0,
            explanation: "That absence is why Justice Harlan called the idea occult and why Justice Gorsuch says the cases have no foundation in the document.",
            sourceLessonSlug: "downes-v-bidwell",
          },
          {
            prompt: "What was the Foraker Act?",
            options: ["The 1900 statute creating a civil government for Puerto Rico", "The 1917 statute conferring United States citizenship on the people of Puerto Rico", "The 1950 statute establishing an organic government for the island of Guam", "The 1976 statute approving a covenant with the Northern Mariana Islands"],
            correctIndex: 0,
            explanation: "It also imposed the duties on goods moving to and from the island, which is what the importer challenged.",
            sourceLessonSlug: "downes-v-bidwell",
          },
          {
            prompt: "What was Jesus M. Balzac's occupation?",
            options: ["Newspaper editor", "Customs broker handling shipments between San Juan and New York", "Member of the Puerto Rican legislature elected under the Jones Act", "Lawyer representing the government of Puerto Rico in criminal matters"],
            correctIndex: 0,
            explanation: "He edited a daily called El Baluarte in Arecibo, and the prosecution arose out of two articles he published in 1918.",
            sourceLessonSlug: "balzac-and-the-jury",
          },
          {
            prompt: "What was Balzac charged with?",
            options: ["Criminal libel", "Sedition against the government of the United States during wartime", "Failure to pay the duties imposed on imports under the Foraker Act", "Publishing an unlicensed newspaper in violation of a territorial ordinance"],
            correctIndex: 0,
            explanation: "The charges rested on two articles published on 16 and 23 April 1918, and the offence was a misdemeanor under the island's code.",
            sourceLessonSlug: "balzac-and-the-jury",
          },
          {
            prompt: "What did Balzac demand that local law did not give him?",
            options: ["A jury trial", "A translation of the proceedings into Spanish at the government's expense", "A transfer of his case to a federal district court sitting in the mainland", "An appeal directly to the Supreme Court without passing through a lower court"],
            correctIndex: 0,
            explanation: "The island's code provided no jury for a misdemeanor, so he argued that the Sixth Amendment supplied one.",
            sourceLessonSlug: "balzac-and-the-jury",
          },
          {
            prompt: "Who delivered the opinion of the Court in Balzac v. Porto Rico?",
            options: ["Chief Justice Taft", "Justice Brown, who had written the leading opinion in the 1901 tax case", "Justice White, whose incorporation theory the opinion applied to the facts", "Justice Harlan, who had dissented in every one of the earlier Insular Cases"],
            correctIndex: 0,
            explanation: "The opinion is his, and it is the case that carried the doctrine into the era after Puerto Ricans became citizens.",
            sourceLessonSlug: "balzac-and-the-jury",
          },
          {
            prompt: "What did Balzac hold about the effect of the 1917 grant of citizenship?",
            options: ["It did not incorporate Puerto Rico", "It incorporated Puerto Rico but left the jury guarantee to the territorial legislature", "It incorporated Puerto Rico only for the purposes of the revenue and tariff clauses", "It made Puerto Rico a state for every purpose except representation in Congress"],
            correctIndex: 0,
            explanation: "The Court would not infer an intention to incorporate that Congress had not declared, and read the citizenship as putting individuals on an equality instead.",
            sourceLessonSlug: "balzac-and-the-jury",
          },
          {
            prompt: "According to Balzac, what determines which constitutional procedures apply?",
            options: ["Locality", "The citizenship status of the person standing trial in the particular case", "The seriousness of the offence charged, measured by the maximum sentence", "Whether the territory has an organic act passed by the Congress of the United States"],
            correctIndex: 0,
            explanation: "The Court said it is locality that is determinative of the application of the Constitution, not the status of the people who live in it.",
            sourceLessonSlug: "balzac-and-the-jury",
          },
          {
            prompt: "What reason did the Court give for holding that the jury guarantee did not reach Puerto Rico?",
            options: ["That the jury system needs citizens trained to a juror's responsibilities", "That the island's criminal code already provided an equivalent procedure before a panel of judges", "That the Sixth Amendment by its terms applies only in the several states and not elsewhere", "That the defendant had waived the right by publishing the articles under his own name"],
            correctIndex: 0,
            explanation: "The opinion reasoned that centuries of tradition in common-law countries had prepared a conception of the impartial attitude jurors must assume.",
            sourceLessonSlug: "balzac-and-the-jury",
          },
          {
            prompt: "What is the status of Downes and Balzac today?",
            options: ["Both are still good law", "Both were overruled by the Supreme Court in the Puerto Rico oversight case of 2020", "Downes was overruled in 1957 and Balzac was narrowed to criminal cases only", "Both were superseded by statute when Congress conferred citizenship in 1917"],
            correctIndex: 0,
            explanation: "Neither has been overruled, and lower courts still feel bound to apply their terms.",
            sourceLessonSlug: "balzac-and-the-jury",
          },
          {
            prompt: "What did the Supreme Court say about the Insular Cases in the 2020 Aurelius decision?",
            options: ["It would not extend them", "It overruled them in full and directed lower courts to disregard their reasoning", "It reaffirmed them expressly as the governing law of the unincorporated territories", "It held that they had been superseded by the Territory Clause as originally understood"],
            correctIndex: 0,
            explanation: "The Court declined to reach the request to overrule them and said that whatever their continued validity it would not extend them in those cases.",
            sourceLessonSlug: "balzac-and-the-jury",
          },
          {
            prompt: "Why does Balzac matter for anyone who thinks citizenship would solve the problem?",
            options: ["Because it says the place decides, not the person", "Because it holds that citizenship may be revoked once a territory is incorporated", "Because it requires Congress to confer citizenship before it may impose any tax", "Because it makes territorial status depend on the number of citizens resident there"],
            correctIndex: 0,
            explanation: "Puerto Ricans were already citizens when the Court decided the case, and the jury right still did not follow.",
            sourceLessonSlug: "balzac-and-the-jury",
          },
          {
            prompt: "How did Justice Gorsuch open his concurrence in Vaello Madero?",
            options: ["By saying it is past time to acknowledge the gravity of the error", "By explaining why the Court should leave the Insular Cases undisturbed for now", "By recounting the history of the Supplemental Security Income program since 1972", "By setting out the equal protection test the majority had applied to the statute"],
            correctIndex: 0,
            explanation: "He wrote that the cases have no foundation in the Constitution and rest instead on racial stereotypes, and that they deserve no place in our law.",
            sourceLessonSlug: "the-critics-by-name",
          },
          {
            prompt: "What did Justice Gorsuch say the Insular Cases rest on, in place of the Constitution?",
            options: ["Racial stereotypes", "A misreading of the Articles of Confederation carried forward by inertia", "An emergency wartime power that lapsed with the peace treaty of December 1898", "A line of English colonial precedents the framers had deliberately rejected"],
            correctIndex: 0,
            explanation: "His full phrasing adds the academic work of the period and the theories of social Darwinists, and denies the cases any home in the Constitution.",
            sourceLessonSlug: "the-critics-by-name",
          },
          {
            prompt: "Which phrase did Justice Gorsuch use to describe the foundation of the Insular Cases?",
            options: ["A rotten foundation", "A necessary compromise between empire and republic that has outlived its usefulness", "A workable rule of construction that later courts have applied too broadly", "An unwritten understanding shared by the framers of the Fourteenth Amendment"],
            correctIndex: 0,
            explanation: "He added that he hoped the day would come soon when the Court squarely overrules them.",
            sourceLessonSlug: "the-critics-by-name",
          },
          {
            prompt: "Which three academics does Justice Gorsuch name as the doctrine's intellectual source?",
            options: ["Langdell, Thayer and Lowell", "Story, Cooley and Kent, whose treatises the Court had relied on since the 1830s", "Holmes, Pound and Cardozo, writing in the first decades of the twentieth century", "Marshall, Taney and Field, all of them sitting justices rather than professors"],
            correctIndex: 0,
            explanation: "Their 1899 articles in one law review argued that constitutional limits do not apply to possessions acquired by conquest or cession.",
            sourceLessonSlug: "the-critics-by-name",
          },
          {
            prompt: "In which publication did the three named academics make their 1899 argument?",
            options: ["The Harvard Law Review", "The Congressional Record of the Fifty-Fifth Congress, second session", "The annual report of the Secretary of War on the new possessions", "The proceedings of the American Society of International Law"],
            correctIndex: 0,
            explanation: "Justice Gorsuch traces the doctrine to a series of articles there, and quotes each of the three.",
            sourceLessonSlug: "the-critics-by-name",
          },
          {
            prompt: "What did Justice Sotomayor's dissent in Vaello Madero attack?",
            options: ["The outcome for the citizens excluded from the program", "The Insular Cases themselves, which she said should be overruled that day", "The Court's jurisdiction to hear an appeal from the First Circuit at all", "The government's decision to sue a benefits recipient for repayment"],
            correctIndex: 0,
            explanation: "She wrote that excluding millions of citizens resident in Puerto Rico from the program fails even the deferential test the Court applied.",
            sourceLessonSlug: "the-critics-by-name",
          },
          {
            prompt: "How did Judge Torruella of the First Circuit describe the Insular Cases?",
            options: ["Anchored on theories of dubious legal or historical validity", "A necessary accommodation between the demands of empire and the text of the charter", "A settled body of law that only a constitutional amendment could properly disturb", "A misapplication of the Fourteenth Amendment to places outside the several states"],
            correctIndex: 0,
            explanation: "He added that they were contrived by academics interested in promoting an expansionist agenda, and the Tenth Circuit quoted him.",
            sourceLessonSlug: "the-critics-by-name",
          },
          {
            prompt: "What did the Tenth Circuit panel in Fitisemanu say about the cases it was applying?",
            options: ["That their purpose and reasoning are disreputable to modern eyes", "That they were correctly decided and should be extended to citizenship questions", "That they had been implicitly overruled and the panel was free to disregard them", "That they applied only to revenue questions and not to any question of personal status"],
            correctIndex: 0,
            explanation: "The same opinion notes that the Court repeatedly voiced concern that native inhabitants were unfit for the American constitutional regime.",
            sourceLessonSlug: "the-critics-by-name",
          },
          {
            prompt: "What is the live disagreement that most summaries of this subject miss?",
            options: ["Whether a court or Congress should undo the doctrine", "Whether the Insular Cases were racist in their reasoning or merely in their result", "Whether Downes or Balzac is the more important of the two decisions", "Whether the Constitution contains the word incorporated anywhere in its text"],
            correctIndex: 0,
            explanation: "A judge can think the doctrine shameful and still think a court is the wrong body to undo it, which is exactly what happened in Fitisemanu.",
            sourceLessonSlug: "the-critics-by-name",
          },
          {
            prompt: "What is the modern protective argument for unincorporated status?",
            options: ["That it shields local arrangements from uniform constitutional scrutiny", "That it guarantees a territory a larger share of federal formula funds each year", "That it prevents Congress from imposing federal taxes on territorial residents", "That it preserves a territory's right to a plebiscite whenever it requests one"],
            correctIndex: 0,
            explanation: "Communal land tenure and hereditary chieftaincy in American Samoa are the examples the Tenth Circuit took seriously.",
            sourceLessonSlug: "the-critics-by-name",
          },
          {
            prompt: "How did Justice Gorsuch answer the protective argument?",
            options: ["That it drapes the worst of the old logic in new garb", "That the territories should be admitted as states before the question can arise", "That the argument is correct but belongs before Congress rather than a court", "That the Court had already accepted it in the 2020 Puerto Rico oversight case"],
            correctIndex: 0,
            explanation: "He wrote that constitutional restraints do not turn on a court's unschooled assessment of a territory's local customs.",
            sourceLessonSlug: "the-critics-by-name",
          },
          {
            prompt: "Which parties filed briefs expressing disagreement with the Insular Cases, in Justice Gorsuch's account?",
            options: ["The Governor of Puerto Rico and the U.S. Virgin Islands", "The American Samoa Government and the territory's member of Congress", "The Attorney General of the United States and the Social Security Administration", "The National Governors Association and the Council of State Governments"],
            correctIndex: 0,
            explanation: "He lists them alongside territorial advocacy groups, which is why the protective argument cannot be described as the territorial position.",
            sourceLessonSlug: "the-critics-by-name",
          },
          {
            prompt: "What is a concurrence?",
            options: ["An opinion agreeing with the result but written separately", "An opinion joined by every justice who heard argument in the case", "A dissent filed after the Court has announced its judgment from the bench", "A brief filed by a party who is not directly involved in the litigation"],
            correctIndex: 0,
            explanation: "It is how the sharpest criticism of the Insular Cases reached the United States Reports without changing the outcome of the case.",
            sourceLessonSlug: "the-critics-by-name",
          },
          {
            prompt: "What is an amicus brief?",
            options: ["A filing by a non-party with an interest in the outcome", "A summary of the case prepared for the justices by the Reporter of Decisions", "A brief filed by the losing party asking for rehearing before the full court", "The written record of oral argument transcribed by the Court's own reporters"],
            correctIndex: 0,
            explanation: "It is the mechanism by which territorial governments and advocacy groups placed their positions before the Court in these cases.",
            sourceLessonSlug: "the-critics-by-name",
          },
          {
            prompt: "What was social Darwinism, in the context Justice Gorsuch invokes it?",
            options: ["A doctrine ranking peoples by supposed evolutionary fitness", "A school of economics arguing that colonies must pay for their own administration", "A method of statutory interpretation favoring the intentions of the enacting Congress", "A theory of international law holding that conquest transfers legal obligations"],
            correctIndex: 0,
            explanation: "He names it as one of the intellectual supports for the Insular Cases, alongside the academic work of the period and ugly racial stereotypes.",
            sourceLessonSlug: "the-critics-by-name",
          },
          {
            prompt: "Why does this course quote the critics at length rather than summarizing them?",
            options: ["So the criticism can be weighed rather than taken on trust", "Because the opinions are too long to summarize accurately in a single lesson", "Because paraphrasing a judicial opinion is forbidden by the Court's own rules", "Because the critics disagree with each other about almost every point of law"],
            correctIndex: 0,
            explanation: "Saying that cases are criticized teaches nothing; naming who says what, in their own words, lets a learner judge it.",
            sourceLessonSlug: "the-critics-by-name",
          },
          {
            prompt: "What is a 'fundamental' right in the Insular Cases sense?",
            options: ["A guarantee held to apply even in an unincorporated territory", "A right listed in the first eight amendments to the Constitution of the United States", "A right the territorial legislature has adopted into its own local code of laws", "A right the Supreme Court has enforced against a state under the Fourteenth Amendment"],
            correctIndex: 0,
            explanation: "The Constitution supplies no test for deciding which guarantees qualify, which is a large part of the objection to the doctrine.",
            sourceLessonSlug: "downes-v-bidwell",
          },
          {
            prompt: "What did the Court in Balzac say the citizenship grant was explained by?",
            options: ["A desire to put Puerto Ricans on an equality as individuals", "A need to raise troops for the war then being fought in Europe", "An intention to prepare the island for admission to the Union as a state", "A treaty obligation the United States had assumed toward Spain in 1898"],
            correctIndex: 0,
            explanation: "The opinion reads the 1917 Act as putting persons on an exact equality with citizens from the American homeland, not as changing the island's status.",
            sourceLessonSlug: "balzac-and-the-jury",
          },
          {
            prompt: "After Balzac, what did a litigant in an unincorporated territory practically need in order to rely on a constitutional limit?",
            options: ["A clear statement from Congress", "A ruling from the territory's own supreme court applying the provision locally", "Proof that the provision had been in force at the moment of acquisition", "A certificate from the Secretary of the Interior that the territory was organized"],
            correctIndex: 0,
            explanation: "Very few limits could be relied on without one, which is what the doctrine amounted to in practice.",
            sourceLessonSlug: "balzac-and-the-jury",
          },
          {
            prompt: "In what year was Balzac v. Porto Rico decided?",
            options: ["1922", "1904, in the decision that first adopted the incorporation theory for a majority", "1901, alongside the other cases arising out of the Foraker Act duties", "1957, when a plurality of the Court first admitted discomfort with the doctrine"],
            correctIndex: 0,
            explanation: "It came twenty-one years after Downes and five years after Congress conferred citizenship.",
            sourceLessonSlug: "balzac-and-the-jury",
          },
          {
            prompt: "Which of these did the Downes dissenters and the modern critics both object to?",
            options: ["That incorporation appears nowhere in the Constitution", "That the duties charged on Puerto Rican goods were set at too high a rate", "That the Court had decided a tax case without hearing full oral argument", "That Congress rather than the Court should have written the tariff schedule"],
            correctIndex: 0,
            explanation: "Justice Harlan called it occult in 1901 and Justice Gorsuch said the cases have no foundation in the Constitution in 2022, and it is the same objection.",
            sourceLessonSlug: "the-critics-by-name",
          },
          {
            prompt: "What does it mean to say the Insular Cases were 'assembled out of pieces'?",
            options: ["No single opinion in Downes commanded a majority of the Court", "The doctrine was written by Congress and later adopted by the Supreme Court", "Each of the cases addressed a different territory under a different statute", "The cases were decided over eight decades by justices who never sat together"],
            correctIndex: 0,
            explanation: "Two leading opinions reached the same result by different routes and a later case picked one of them, which is how the rule emerged.",
            sourceLessonSlug: "downes-v-bidwell",
          },
          {
            prompt: "Which of these is the most accurate description of what Downes decided about the duty?",
            options: ["The duty stood", "The duty was refunded to the importer with interest from the date of payment", "The duty was upheld only for shipments made before the Foraker Act took effect", "The duty was struck down but Congress was invited to re-enact it in a new form"],
            correctIndex: 0,
            explanation: "Because Puerto Rico was held not to be part of the United States within the revenue clauses, the uniformity requirement did not reach the case.",
            sourceLessonSlug: "downes-v-bidwell",
          },
          {
            prompt: "Which best describes the relationship between Downes and Balzac?",
            options: ["Downes said not in full, Balzac said not even a jury", "Downes concerned criminal procedure and Balzac concerned duties on imported goods", "Balzac overruled Downes and substituted a narrower rule about revenue clauses", "Both were decided on the same day by the same divided Court in 1901"],
            correctIndex: 0,
            explanation: "The first held the Constitution does not apply in full and the second held that even trial by jury is not fundamental enough for these purposes.",
            sourceLessonSlug: "balzac-and-the-jury",
          },
          {
            prompt: "What did the 1899 academic articles say about constitutional limitations in acquired possessions?",
            options: ["That they do not apply", "That they apply immediately but may be suspended for a term of years by Congress", "That they apply only to persons who were citizens before the acquisition occurred", "That they apply in full but are enforceable only in the courts of the possession"],
            correctIndex: 0,
            explanation: "One of the three wrote that possessions acquired by conquest or cession do not become a part of the United States and that constitutional limitations do not apply.",
            sourceLessonSlug: "the-critics-by-name",
          },
          {
            prompt: "According to the 1899 argument Justice Gorsuch quotes, to whom were such rules said to be applicable?",
            options: ["Only a people whose evolution had been consonant with our own", "Only the inhabitants of territories contiguous to the continental United States", "Only persons who had been naturalized under an Act of the Congress", "Only residents of territories that had been organized by an organic act"],
            correctIndex: 0,
            explanation: "That phrasing is quoted directly in the concurrence, and it is why the criticism is specifically about race rather than about drafting.",
            sourceLessonSlug: "the-critics-by-name",
          },
          {
            prompt: "What does it mean that a decision is 'good law'?",
            options: ["It has not been overruled and lower courts must apply it", "It was decided unanimously and therefore carries extra weight as precedent", "It has been codified by Congress into a statute of the United States", "It was correct when decided and remains morally defensible today"],
            correctIndex: 0,
            explanation: "Downes and Balzac are both good law in exactly this sense, which is why criticism from the bench has not yet changed any outcome.",
            sourceLessonSlug: "balzac-and-the-jury",
          },
          {
            prompt: "Why did the Court in Balzac refuse to infer that Congress had incorporated Puerto Rico?",
            options: ["Because the 1917 Act declared no such purpose", "Because the island's own legislature had voted against incorporation in 1916", "Because the Treaty of Paris expressly reserved the question to the President", "Because incorporation may only occur when a territory is admitted as a state"],
            correctIndex: 0,
            explanation: "The Court treated incorporation as something Congress must say rather than something a court may find between the lines.",
            sourceLessonSlug: "balzac-and-the-jury",
          },
          {
            prompt: "What was the practical situation Balzac produced for two American citizens?",
            options: ["Different courtroom rights depending on where the courtroom was", "Different tax obligations depending on where the citizen earned the income", "Different citizenship depending on whether a parent had been born on the mainland", "Different voting rights depending on whether the citizen was registered to a party"],
            correctIndex: 0,
            explanation: "The locality rule is exactly that: the place decides, and the status of the people who live in it does not.",
            sourceLessonSlug: "balzac-and-the-jury",
          },
          {
            prompt: "Which of these is NOT something Justice Gorsuch attributes to the Insular Cases?",
            options: ["A basis in the original understanding of the Constitution", "Support in the academic work of the period around the Spanish-American War", "Reliance on ugly racial stereotypes about the inhabitants of the new possessions", "A debt to the theories of social Darwinists writing in the same decades"],
            correctIndex: 0,
            explanation: "He says exactly the opposite: that the cases have no home in our Constitution or its original understanding.",
            sourceLessonSlug: "the-critics-by-name",
          },
          {
            prompt: "What did Justice White call Puerto Rico, in the sense relevant to the revenue clauses?",
            options: ["Foreign to the United States", "A state in all but name pending action by the Congress of the United States", "An organized territory entitled to the same treatment as the western territories", "A dependency of Spain until the treaty of cession had been fully executed"],
            correctIndex: 0,
            explanation: "He reached that conclusion because Congress had not, in his view, done enough to indicate an intention to incorporate the island.",
            sourceLessonSlug: "downes-v-bidwell",
          },
          {
            prompt: "Why is it misleading to call the Insular Cases a single decision?",
            options: ["They are a line of decisions beginning in 1901", "They were all decided in the same term by the same nine justices of the Court", "They were consolidated into one appeal and decided in a single written opinion", "They were a set of advisory opinions requested by the Congress of the United States"],
            correctIndex: 0,
            explanation: "Downes, Dorr, Mankichi and Balzac are separate cases, and the doctrine took its final shape across them.",
            sourceLessonSlug: "downes-v-bidwell",
          },
          {
            prompt: "Which pair of words does the Downes holding turn on?",
            options: ["Belonging to, and part of", "Organized and unorganised, as applied to a territory of the United States", "Foreign and domestic, as those words are used in the tariff schedules", "Citizen and national, as those words are used in the immigration statutes"],
            correctIndex: 0,
            explanation: "The island belongs to the United States and is not part of it, and an entire doctrine was built in the gap between the two phrases.",
            sourceLessonSlug: "downes-v-bidwell",
          },
          {
            prompt: "What did Justice Gorsuch say he hoped would happen to the Insular Cases?",
            options: ["That the Court would squarely overrule them soon", "That Congress would codify them so that lower courts would apply them consistently", "That the Court would confine them to revenue cases and leave the rest undisturbed", "That the territories would be admitted as states so the question would be moot"],
            correctIndex: 0,
            explanation: "He joined the Court's opinion because no party asked for it in that case, while saying the day for overruling should come soon.",
            sourceLessonSlug: "the-critics-by-name",
          },
          {
            prompt: "How does the Fitisemanu opinion complicate the claim that criticism of the Insular Cases predicts how a case comes out?",
            options: ["The panel criticized the cases and still ruled against the plaintiffs", "The panel praised the cases and still ruled in favor of the plaintiffs", "The panel refused to apply the cases and decided on statutory grounds instead", "The panel certified the question to the Supreme Court without deciding it"],
            correctIndex: 0,
            explanation: "Believing a doctrine is shameful and believing a court should be the one to undo it are two different positions.",
            sourceLessonSlug: "the-critics-by-name",
          },
          {
            prompt: "Which of these best captures the Insular Cases' effect on constitutional geography?",
            options: ["Some American soil is inside the Constitution and some is not", "Every American possession is inside the Constitution once Congress taxes it", "The Constitution reaches every place the United States governs, at the same depth", "Constitutional rights follow the citizen wherever the citizen happens to travel"],
            correctIndex: 0,
            explanation: "That is the practical content of the incorporated and unincorporated distinction, and it is why the atoll and the island compare so badly.",
            sourceLessonSlug: "downes-v-bidwell",
          },
          {
            prompt: "What did Justice Gorsuch call the attempts to justify the Insular Cases as protective of local culture?",
            options: ["Revisionist", "Persuasive, though not sufficient to save the cases from being overruled", "Consistent with the original understanding of the Territory Clause", "The position of the territorial governments that had appeared before the Court"],
            correctIndex: 0,
            explanation: "He described them in a footnote as a revisionist account and said the amicus briefs from territorial governments pointed the other way.",
            sourceLessonSlug: "the-critics-by-name",
          },
          {
            prompt: "Which of these is a fair statement about the Insular Cases and race?",
            options: ["A sitting justice has written that they rest on racial stereotypes", "The opinions avoided any discussion of race and rested purely on revenue law", "The racial reasoning appeared only in the dissents and not in the controlling opinions", "The Court has formally repudiated the racial reasoning while keeping the result"],
            correctIndex: 0,
            explanation: "The language is in the opinions themselves, and Justice Gorsuch quoted it back at length in 2022.",
            sourceLessonSlug: "the-critics-by-name",
          },
          {
            prompt: "What kind of court was Fitisemanu decided in?",
            options: ["A federal court of appeals", "The Supreme Court of the United States, on a writ of certiorari", "The Supreme Court of American Samoa, applying the territory's own constitution", "A federal district court in Utah, whose judgment became final without appeal"],
            correctIndex: 0,
            explanation: "It was the Tenth Circuit, sitting on appeal from a district court in Utah, and its opinion applied rather than overruled the Insular Cases.",
            sourceLessonSlug: "the-critics-by-name",
          },
          {
            prompt: "In Balzac, what did the Court say about the tradition behind the jury system?",
            options: ["That centuries of tradition prepared a conception of the juror's attitude", "That the jury system was too expensive to administer in a small island territory", "That the jury system had been abolished in Puerto Rico by the Spanish authorities", "That the jury system would be introduced once the island's literacy rate improved"],
            correctIndex: 0,
            explanation: "The opinion used that tradition to reason that the guarantee was not fundamental for purposes of the doctrine.",
            sourceLessonSlug: "balzac-and-the-jury",
          },
          {
            prompt: "How many years separate Downes from Balzac?",
            options: ["Twenty-one", "Five, the interval between the Foraker Act and the Jones Act of 1917", "Fifty, the interval between the Treaty of Paris and the Organic Act of Guam", "Three, the interval between Downes and the case that adopted incorporation"],
            correctIndex: 0,
            explanation: "1901 to 1922, and in between Congress made the people of the island citizens, which is what made the second case a real test.",
            sourceLessonSlug: "balzac-and-the-jury",
          },
          {
            prompt: "Which is the strongest evidence that the protective argument is not simply 'the territorial position'?",
            options: ["Territorial governments filed briefs against the Insular Cases", "The Supreme Court has never received a brief from any territorial government", "The Tenth Circuit rejected the protective argument in its 2021 opinion", "Congress has legislated to abolish the incorporated and unincorporated distinction"],
            correctIndex: 0,
            explanation: "The Governor of Puerto Rico, the Virgin Islands and territorial advocacy groups expressed vehement disagreement with the cases, on the record.",
            sourceLessonSlug: "the-critics-by-name",
          },
          {
            prompt: "Which court decided Downes v. Bidwell?",
            options: ["The Supreme Court of the United States", "The United States Court of Appeals for the First Circuit, sitting in Boston", "The United States Circuit Court for the Southern District of New York", "The Supreme Court of Puerto Rico, whose judgment was then affirmed on appeal"],
            correctIndex: 0,
            explanation: "It reached the Court from a suit against the New York customs collector, and the fractured opinions are all in the United States Reports.",
            sourceLessonSlug: "downes-v-bidwell",
          },
          {
            prompt: "What did the Foraker Act tax?",
            options: ["Goods moving to and from Puerto Rico", "Property owned by residents of the island above a fixed assessed value", "Wages earned by federal employees stationed in the new possessions", "Vessels registered in Puerto Rico and calling at continental ports"],
            correctIndex: 0,
            explanation: "That is what made the case a revenue dispute and what put the uniformity requirement in issue.",
            sourceLessonSlug: "downes-v-bidwell",
          },
          {
            prompt: "What did Balzac argue supplied him a jury when local law did not?",
            options: ["The Sixth Amendment", "The Jones Act of 1917, which he read as guaranteeing criminal procedure", "The Foraker Act, which had established the island's court system in 1900", "The Treaty of Paris, under which Spain had preserved existing legal rights"],
            correctIndex: 0,
            explanation: "He had become a citizen by then, and the Court's answer was that the citizenship did not carry the guarantee to the island.",
            sourceLessonSlug: "balzac-and-the-jury",
          },
          {
            prompt: "Why does this course say the Insular Cases produced a 'strange' doctrine?",
            options: ["It was built from opinions that did not agree with each other", "It was written by Congress and never reviewed by any federal court", "It applied to only one territory and was never extended to any other", "It was adopted unanimously and then repudiated within a single decade"],
            correctIndex: 0,
            explanation: "Two leading opinions in a fractured case reached one result by different roads, and the theory that survived was not the one that decided the case.",
            sourceLessonSlug: "downes-v-bidwell",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3 — American Samoa
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "nationals-but-not-citizens",
      title: "9 · Nationals, but not citizens",
      section: "Section 3 · American Samoa",
      body: `There is a status in American law between citizen and foreigner, tens of thousands of people hold it, and almost nobody outside American Samoa knows it exists.

Start with the section heading, because it says the whole thing: **8 U.S.C. § 1408, "Nationals but not citizens of the United States at birth."** Its first paragraph:

> "Unless otherwise provided in section 1401 of this title, the following shall be nationals, but not citizens, of the United States at birth: (1) A person born in an outlying possession of the United States on or after the date of formal acquisition of such possession" (8 U.S.C. § 1408, n.d.)

**Everything turns on one defined phrase, and the definition is short.** At 8 U.S.C. § 1101(a)(29): "The term 'outlying possessions of the United States' means American Samoa and Swains Island" (8 U.S.C. § 1101, n.d.).

That is the entire list. **American Samoa is the only inhabited place in this course whose people are not citizens at birth, and the statute reaches it by defining it as something other than the United States.**

**Read the neighboring definitions in the same section and the mechanism becomes visible.**

| Definition in 8 U.S.C. § 1101(a) | What it covers |
| --- | --- |
| (a)(29) outlying possessions | American Samoa and Swains Island |
| (a)(36) "State" | includes the District of Columbia, Puerto Rico, Guam, the Virgin Islands and the Northern Mariana Islands |
| (a)(38) "United States", geographically | the continental United States, Alaska, Hawaii, Puerto Rico, Guam, the Virgin Islands and the Northern Mariana Islands |

Look at what is in the second and third rows and what is not. Four territories and the District are inside the immigration statute's "United States". American Samoa is not. Recall Section 1: in the **Hatch Act**, "State" reaches Puerto Rico, Guam and the Virgin Islands but not American Samoa or the Northern Marianas. **The lists are different in different statutes, they are drawn by Congress, and American Samoa is the place most often left off.**

**So what does a United States national actually have, and lack?** The Tenth Circuit set it out with the statutory citations attached, in a case brought by three American Samoans living in Utah (Fitisemanu v. United States, 2021).

A national is, in the court's words, "entitled to work and travel freely in the United States and receive certain advantages in the naturalization process" (Fitisemanu v. United States, 2021). One of those advantages is in the Code: under 8 U.S.C. § 1436 a person "not a citizen who owes permanent allegiance to the United States" may become a resident of a state and naturalize, and time spent in an outlying possession counts toward the residence and physical-presence requirements (8 U.S.C. § 1436, n.d.).

A national may not:

- **Vote**, in the state where they live. The court cited Utah's constitution and election code for the plaintiffs' own case.
- **Run for federal or state office.** Article I, Section 2 and Article II, Section 1 require citizenship for the House and the presidency.
- **Serve on a federal jury**, under 28 U.S.C. § 1865(b)(1).
- **Serve as a commissioned military officer**, under 10 U.S.C. § 532(a)(1).

**Hold that last one against a fact from the same opinion.** The panel noted that "American Samoans have particularly high enlistment rates in the American military" (Fitisemanu v. United States, 2021). A person may enlist, deploy, and be killed in uniform, and may not be commissioned as an officer in the force they serve in, because of the definition in § 1101(a)(29).

**None of this is an oversight and none of it is automatic.** Congress made the people of Guam citizens in 1950 and the people of the Virgin Islands citizens in stages in 1927 and 1932. It has never done so for American Samoa. The next two lessons are about what happened when three people asked a court to do it instead, and about why the answer is much less obvious than it looks.

:::reveal What does 8 U.S.C. § 1408 call people born in an outlying possession? ||| Nationals, but not citizens, of the United States at birth.

:::reveal What does the immigration statute define as the outlying possessions of the United States? ||| American Samoa and Swains Island, and nothing else.

:::reveal Name two things a United States national may not do that a citizen may. ||| Vote in the state where they live, and serve on a federal jury; they also may not run for federal or state office or be commissioned as a military officer.

## Vocabulary
- **United States national**: a person who owes permanent allegiance to the United States and is not a citizen, which at birth today means a person born in American Samoa or Swains Island.
- **Outlying possession**: the immigration statute's term for a place outside its geographic definition of the United States, defined at 8 U.S.C. § 1101(a)(29) as American Samoa and Swains Island.
- **Citizenship at birth**: citizenship acquired by the fact of birth in a place or to particular parents, rather than by application, which is what § 1408 withholds.
- **Naturalization**: the process by which a non-citizen becomes a citizen, made shorter for nationals by 8 U.S.C. § 1436 but still an application rather than a birthright.
- **Permanent allegiance**: the obligation a national owes the United States, which is the legal hinge that makes a national something other than a foreigner.

## Sources
8 U.S.C. § 1101. (n.d.). *Definitions*. Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title8-section1101&num=0&edition=prelim

8 U.S.C. § 1408. (n.d.). *Nationals but not citizens of the United States at birth*. Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title8-section1408&num=0&edition=prelim

8 U.S.C. § 1436. (n.d.). *Nationals but not citizens; residence within outlying possessions*. Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title8-section1436&num=0&edition=prelim

*Fitisemanu v. United States*, Nos. 20-4017 & 20-4019 (10th Cir. June 15, 2021). U.S. Government Publishing Office. https://www.govinfo.gov/content/pkg/USCOURTS-ca10-20-04017/pdf/USCOURTS-ca10-20-04017-0.pdf`,
    },
    {
      slug: "fitisemanu-and-who-opposed-it",
      title: "10 · Fitisemanu, and who stood on which side",
      section: "Section 3 · American Samoa",
      body: `This is the lesson most accounts of this subject get wrong, and the error is not about the law. It is about who was in the room.

**The plaintiffs.** John Fitisemanu, Pale Tuli and Rosavita Tuli, joined by the Southern Utah Pacific Islander Coalition. All three were born in American Samoa and live in Utah. Because § 1408 makes them nationals rather than citizens, they cannot vote where they live, cannot run for office, cannot sit on a federal jury and cannot be commissioned as officers (Fitisemanu v. United States, 2021). They sued for a declaration that the Fourteenth Amendment's Citizenship Clause already makes them citizens: "All persons born or naturalized in the United States, and subject to the jurisdiction thereof, are citizens of the United States and of the State wherein they reside."

**They won in the district court in Utah.** The judgment was appealed.

**Now read the caption of the appeal, because it is the fact that changes the story.** The appellants were the United States, the Department of State and two of its officers. And alongside them, as **Intervenor Defendants-Appellants**, were "THE HONORABLE AUMUA AMATA; AMERICAN SAMOA GOVERNMENT" (Fitisemanu v. United States, 2021).

**The government of American Samoa and American Samoa's own member of Congress intervened against the American Samoans who were suing for citizenship.** Their argument, in the panel's words, was that "not only is the current arrangement constitutional, but that imposition of birthright citizenship would be against their people's will and would risk upending certain core traditional practices" (Fitisemanu v. United States, 2021). They called what the plaintiffs sought "citizenship by judicial fiat".

**The Tenth Circuit reversed** on 15 June 2021. Judge Lucero wrote for the panel:

> "It is evident that the wishes of the territory's democratically elected representatives, who remind us that their people have not formed a consensus in favor of American citizenship and urge us not to impose citizenship on an unwilling people from a courthouse thousands of miles away, have not been taken into adequate consideration. Such consideration properly falls under the purview of Congress." (Fitisemanu v. United States, 2021)

Note what the holding is and is not. It is **not** that American Samoans may not be citizens. It is that the Citizenship Clause does not make them citizens automatically, that Congress has the preeminent role, and that a court should not act over the stated objection of the territory's elected government.

**Chief Judge Tymkovich concurred**, and his opinion is worth knowing because it is the honest version of "we cannot tell". He started from text, structure and history rather than from the Insular Cases, and concluded that "the precise geographic scope of the Citizenship Clause cannot be divined from the text and constitutional structure", and that the historical evidence, much of it floor statements by individual legislators, did not resolve it either. He also flagged that at ratification the United States had no material overseas possessions, so "the territories" in 1868 meant the contiguous ones (Fitisemanu v. United States, 2021, Tymkovich, C.J., concurring).

**Judge Bacharach dissented**, opening with a line from Justice Brandeis that "the only title in our democracy superior to that of President is the title of citizen". His central objection was evidentiary: there was, he wrote, a "dearth of evidence reflecting opposition to U.S. citizenship", and the majority had let a claim about consent do work the record did not support (Fitisemanu v. United States, 2021, Bacharach, J., dissenting).

**The Supreme Court declined to hear it.** On the docket for No. 21-1394 the entry for 17 October 2022 reads, in full, "Petition DENIED." (Supreme Court of the United States, n.d.). The Tenth Circuit's judgment stands, and the D.C. Circuit had reached the same result in *Tuaua v. United States* in 2015.

**So the shape of the disagreement is this, and it is not left against right.** Three American Samoans want citizenship. American Samoa's elected government does not want a court to grant it. A judge who called the governing precedent disreputable ruled for the territory's government. A judge who dissented said the consent claim was not proved. The next lesson is about what the territory's government says it is protecting, and it is not nothing.

:::reveal Who were the intervenor defendants opposing the plaintiffs in Fitisemanu? ||| The American Samoa Government and the Honorable Aumua Amata, the territory's own member of Congress.

:::reveal What did the Tenth Circuit hold, precisely? ||| That the Citizenship Clause does not itself extend birthright citizenship to American Samoa, and that the question falls under Congress's purview rather than a court's.

:::reveal What happened when the plaintiffs asked the Supreme Court to take the case? ||| The docket for No. 21-1394 records that on 17 October 2022 the petition was denied.

## Vocabulary
- **Citizenship Clause**: the first sentence of the Fourteenth Amendment, which makes all persons born or naturalized in the United States and subject to its jurisdiction citizens, and whose geographic reach is the question in this case.
- **Intervenor**: a party who is not originally sued but joins a case because the outcome will affect it, which is how the American Samoa Government entered on the side opposing the plaintiffs.
- **Summary judgment**: a ruling on the law without a trial, which is what the plaintiffs won in the district court and lost on appeal.
- **Certiorari**: the discretionary review the Supreme Court grants or denies; a denial decides nothing about the merits and leaves the lower court's judgment in place.
- **Citizenship by judicial fiat**: the intervenors' own phrase for what they opposed, which is a claim about who should decide rather than about what the answer should be.

## Sources
*Fitisemanu v. United States*, Nos. 20-4017 & 20-4019 (10th Cir. June 15, 2021). U.S. Government Publishing Office. https://www.govinfo.gov/content/pkg/USCOURTS-ca10-20-04017/pdf/USCOURTS-ca10-20-04017-0.pdf

Supreme Court of the United States. (n.d.). *Docket for 21-1394, Fitisemanu v. United States*. https://www.supremecourt.gov/search.aspx?filename=/docket/docketfiles/html/public/21-1394.html`,
    },
    {
      slug: "faa-samoa-and-the-choice",
      title: "11 · Fa'a Samoa, and a choice nobody else gets to make",
      section: "Section 3 · American Samoa",
      body: `The intervenors said citizenship could endanger something. This lesson is about what, stated concretely, and then about the evidence on both sides of whether American Samoans want it.

**What fa'a Samoa is, in the Tenth Circuit's description.** Social life is organized around large extended families called **'aiga**, each led by **matai**, holders of hereditary chieftain titles. The matai regulate village life and "are the only individuals permitted to serve in the upper house of the American Samoan legislature". Land is held collectively: "more than 90% of American Samoan land belong[s] to the 'aiga rather than to any one individual." And there are, in the court's words, "racial restrictions on land ownership requiring landowners to be at least 50% American Samoan", under the territory's own code at Am. Samoa Code Ann. § 37.0204 (Fitisemanu v. United States, 2021).

**Now line those up against the Constitution and the problem is obvious.** A legislative chamber reserved to hereditary title-holders is hard to square with equal protection. A blood-quantum rule for landholding is a racial classification. Communal ownership sits awkwardly beside the Takings Clause. The panel put it plainly: "Intervenors worry that these and other traditional elements of the American Samoan culture could run afoul of constitutional protections should the plaintiffs in this case prevail" (Fitisemanu v. United States, 2021).

**That worry is a live claim and not a rhetorical one, and it is also not obviously right.** Nothing in the Citizenship Clause repeals a land statute, and rights litigation would still have to be brought and won case by case. What is true is that the doctrinal shield the territory currently relies on is the same doctrine Justice Gorsuch calls rotten. **Whether that shield is worth keeping is the question, and the people it shields are the ones answering it.**

**The evidence on what American Samoans actually want is thin, and it points both ways. Here is all of it the court had.**

**Against citizenship.** The elected government intervened to oppose it. A study the territory itself commissioned, the Future Political Status Study Committee's *Final Report* of January 2007, found at page 64 that "Public views expressed to the Commission indicate the anti-citizenship attitude remain[s] strong" (as quoted in Fitisemanu v. United States, 2021). The panel concluded that the representatives' position "appears to be a reliable expression of their people's attitude".

**For citizenship, from the same record.** When American Samoans first learned they were not considered citizens, the panel notes, **many advocated for it**: the effort produced the American Samoan Commission in 1930, which recommended that Congress grant citizenship, and "The United States Senate passed legislation to this effect, but the effort failed in the House" (Fitisemanu v. United States, 2021). The same 2007 report observed at page 65 that "some" American Samoans living elsewhere in the United States had "recommended that American Samoa change to a political status which guarantees U.S. citizenship" (as quoted in Fitisemanu, Bacharach, J., dissenting). Judge Bacharach called the record a "dearth of evidence reflecting opposition".

**And the fact that resolves the caricature.** The same delegate who intervened against the lawsuit has repeatedly introduced bills in Congress to make citizenship easier to get. H.R. 1208 in the 116th Congress, introduced by Mrs. Radewagen of American Samoa on 13 February 2019, would waive the English and civics examinations for nationals who have lived in a state or outlying possession continuously since birth, and would authorize a referendum asking American Samoans whether nationals should receive automatic citizenship (H.R. 1208, 2019). Judge Bacharach cited that bill and two others in his dissent.

**So the position being defended is not "American Samoans should not be citizens." It is closer to "this should be decided in American Samoa and in Congress, and not by a federal court in Utah."** Reasonable people hold the other view, including three American Samoans who went to court to say so and a federal judge who agreed with them.

**A course can honestly report all of that. It cannot honestly resolve it, and this one does not.** What you should carry out of this section is the structure of the disagreement: a status that denies rights, a defense of that status made by the people it applies to, and a real dispute about whether that defense reflects what those people want. Anyone who tells you this one is simple has left out a party.

:::reveal What share of land in American Samoa is held communally, and by whom? ||| More than ninety percent, held by the 'aiga rather than by any individual.

:::reveal Give one piece of evidence on each side of what American Samoans want. ||| Against: the 2007 status report found anti-citizenship attitudes remained strong. For: the 1930 American Samoan Commission asked Congress for citizenship and the Senate passed a bill that died in the House.

:::reveal What did the same delegate who intervened against the lawsuit do in Congress? ||| Introduced bills to ease naturalization for American Samoan nationals and to authorize a referendum on automatic citizenship.

## Vocabulary
- **Fa'a Samoa**: the Samoan way, the body of custom and practice the intervenors argued would be at risk, including the matai system and communal land.
- **'Aiga**: the large extended family that is the basic unit of Samoan social organization and the holder of most land in the territory.
- **Matai**: a holder of a hereditary chieftain title, who regulates village life and alone may sit in the upper house of the territory's legislature.
- **Communal land**: land held by an 'aiga rather than an individual, which in American Samoa covers more than nine tenths of the territory.
- **Blood quantum rule**: a legal requirement expressed as a fraction of ancestry, here the territory's rule that a landowner be at least half American Samoan.

## Sources
*Fitisemanu v. United States*, Nos. 20-4017 & 20-4019 (10th Cir. June 15, 2021). U.S. Government Publishing Office. https://www.govinfo.gov/content/pkg/USCOURTS-ca10-20-04017/pdf/USCOURTS-ca10-20-04017-0.pdf

H.R. 1208, 116th Cong. (2019). U.S. Government Publishing Office. https://www.govinfo.gov/content/pkg/BILLS-116hr1208ih/html/BILLS-116hr1208ih.htm`,
    },
    {
      slug: "quiz-american-samoa",
      title: "12 · Knowledge check: American Samoa",
      section: "Section 3 · American Samoa",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What is the heading of 8 U.S.C. § 1408?",
            options: ["Nationals but not citizens of the United States at birth", "Persons living in and born in the outlying possessions of the United States", "Citizenship of persons born in unincorporated territories after formal acquisition", "Allegiance and residence requirements for inhabitants of ceded island territories"],
            correctIndex: 0,
            explanation: "The heading states the status directly, and the first paragraph applies it to anyone born in an outlying possession after its formal acquisition.",
            sourceLessonSlug: "nationals-but-not-citizens",
          },
          {
            prompt: "What does 8 U.S.C. § 1101(a)(29) define as the outlying possessions of the United States?",
            options: ["American Samoa and Swains Island", "American Samoa, Guam and the Commonwealth of the Northern Mariana Islands", "Every unincorporated territory that has not been granted an organic act by Congress", "Puerto Rico, Guam, the Virgin Islands and any island held for military purposes"],
            correctIndex: 0,
            explanation: "That is the entire list, and it is the definition that makes § 1408 reach American Samoa and nowhere else inhabited.",
            sourceLessonSlug: "nationals-but-not-citizens",
          },
          {
            prompt: "Which place is left out of the immigration statute's geographic definition of the 'United States'?",
            options: ["American Samoa", "The Commonwealth of the Northern Mariana Islands, which entered by covenant in 1976", "The District of Columbia, which is a federal district rather than a state", "The United States Virgin Islands, which were purchased rather than ceded"],
            correctIndex: 0,
            explanation: "Section 1101(a)(38) names the continental United States, Alaska, Hawaii, Puerto Rico, Guam, the Virgin Islands and the Northern Marianas, and stops there.",
            sourceLessonSlug: "nationals-but-not-citizens",
          },
          {
            prompt: "Which jurisdictions does 8 U.S.C. § 1101(a)(36) include in the term 'State'?",
            options: ["The District, Puerto Rico, Guam, the Virgin Islands and the Northern Marianas", "Only the fifty states, with the territories addressed by separate definitions elsewhere", "Every place under United States sovereignty, including the outlying possessions", "The fifty states and American Samoa, but not the District of Columbia"],
            correctIndex: 0,
            explanation: "American Samoa is absent from this list too, which is the pattern the whole section is about.",
            sourceLessonSlug: "nationals-but-not-citizens",
          },
          {
            prompt: "How do the Hatch Act and the immigration statute compare on which places count?",
            options: ["Their lists differ, and American Samoa is left off both", "Both use the same list, drawn from the Territory Clause of the Constitution", "The Hatch Act list is longer because it includes the outlying possessions", "The immigration list is the narrower one because it excludes the District"],
            correctIndex: 0,
            explanation: "The Hatch Act reaches Puerto Rico, Guam and the Virgin Islands; the immigration statute adds the Northern Marianas; neither reaches American Samoa.",
            sourceLessonSlug: "nationals-but-not-citizens",
          },
          {
            prompt: "Under 8 U.S.C. § 1436, what may a national who owes permanent allegiance do?",
            options: ["Become a resident of a state and naturalize", "Vote in federal elections while continuing to reside in an outlying possession", "Be commissioned as an officer after five years of continuous military service", "Claim citizenship automatically after ten years of residence in any state"],
            correctIndex: 0,
            explanation: "Time spent in an outlying possession counts toward the residence and physical-presence requirements, which shortens the road without making it a birthright.",
            sourceLessonSlug: "nationals-but-not-citizens",
          },
          {
            prompt: "Which of these may a United States national NOT do?",
            options: ["Serve on a federal jury", "Live and work anywhere in the United States without any immigration restriction", "Travel freely between American Samoa and the continental United States", "Apply for naturalization with credit for time spent in an outlying possession"],
            correctIndex: 0,
            explanation: "The bar is in 28 U.S.C. § 1865(b)(1), one of four disabilities the Tenth Circuit listed with its statutory citation.",
            sourceLessonSlug: "nationals-but-not-citizens",
          },
          {
            prompt: "Under 10 U.S.C. § 532(a)(1), what is closed to a United States national?",
            options: ["A commission as a military officer", "Enlistment in any branch of the armed forces of the United States", "Service in a National Guard unit organized under state authority", "Employment as a civilian in any department of the federal government"],
            correctIndex: 0,
            explanation: "A national may enlist and deploy, and the same opinion records that American Samoans have particularly high enlistment rates.",
            sourceLessonSlug: "nationals-but-not-citizens",
          },
          {
            prompt: "What did the Tenth Circuit note about American Samoan military service?",
            options: ["Particularly high enlistment rates", "That enlistment is barred to nationals under the same statute that bars commissions", "That service in the armed forces confers citizenship automatically after discharge", "That the territory supplies more officers per capita than any state in the Union"],
            correctIndex: 0,
            explanation: "It sits beside the officer bar in the same opinion, which is what makes the pairing worth stopping on.",
            sourceLessonSlug: "nationals-but-not-citizens",
          },
          {
            prompt: "Which body has made the people of other territories citizens, and when it chose to?",
            options: ["Congress", "The Supreme Court, applying the Citizenship Clause to each territory in turn", "The President, by proclamation under the Territory Clause of Article IV", "Each territorial legislature, by adopting its own citizenship ordinance"],
            correctIndex: 0,
            explanation: "Guam in 1950 and the Virgin Islands in 1927 and 1932, and it has never taken that step for American Samoa.",
            sourceLessonSlug: "nationals-but-not-citizens",
          },
          {
            prompt: "What is 'permanent allegiance', in this context?",
            options: ["The obligation a national owes the United States", "A pledge taken by an applicant at the conclusion of a naturalization ceremony", "The duty of a territory's government to enforce federal law within its borders", "A treaty commitment given by the traditional leaders who signed a deed of cession"],
            correctIndex: 0,
            explanation: "It is the legal hinge that makes a national something other than a foreigner, and 8 U.S.C. § 1436 uses the phrase.",
            sourceLessonSlug: "nationals-but-not-citizens",
          },
          {
            prompt: "What is the difference between citizenship at birth and naturalization?",
            options: ["One follows from the birth itself, the other requires an application", "One is granted by Congress and the other by the Supreme Court on petition", "One may be revoked by statute and the other may not be revoked at all", "One applies in the states and the other applies only in the territories"],
            correctIndex: 0,
            explanation: "Section 1408 withholds the first from people born in an outlying possession, and § 1436 makes the second somewhat easier for them.",
            sourceLessonSlug: "nationals-but-not-citizens",
          },
          {
            prompt: "Who were the three individual plaintiffs in Fitisemanu?",
            options: ["John Fitisemanu, Pale Tuli and Rosavita Tuli", "Three residents of American Samoa who had never left the territory", "Three matai title-holders bringing suit on behalf of their extended families", "Three members of the American Samoan legislature acting in their official capacity"],
            correctIndex: 0,
            explanation: "All three were born in American Samoa and live in Utah, joined by the Southern Utah Pacific Islander Coalition.",
            sourceLessonSlug: "fitisemanu-and-who-opposed-it",
          },
          {
            prompt: "Where do the Fitisemanu plaintiffs live?",
            options: ["Utah", "American Samoa, in villages governed by the traditional matai system", "The District of Columbia, where the litigation was originally filed", "Hawaii, the nearest state to the territory where they were born"],
            correctIndex: 0,
            explanation: "That is why the case is about voting: as nationals they cannot vote in the state where they actually live.",
            sourceLessonSlug: "fitisemanu-and-who-opposed-it",
          },
          {
            prompt: "What did the plaintiffs ask the court to declare?",
            options: ["That the Citizenship Clause already makes them citizens", "That Congress must pass a statute conferring citizenship within a fixed period", "That the Insular Cases be overruled and the territory admitted as a state", "That American Samoa be reclassified as an incorporated territory by the court"],
            correctIndex: 0,
            explanation: "Their claim rested on the Fourteenth Amendment's first sentence, not on any request for new legislation.",
            sourceLessonSlug: "fitisemanu-and-who-opposed-it",
          },
          {
            prompt: "What happened in the district court in Utah?",
            options: ["The plaintiffs won", "The case was dismissed for lack of standing before reaching the merits", "The court certified the constitutional question directly to the Supreme Court", "The court ruled for the government and the plaintiffs appealed to the Tenth Circuit"],
            correctIndex: 0,
            explanation: "They were granted summary judgment, and it was that judgment the federal government and the intervenors appealed.",
            sourceLessonSlug: "fitisemanu-and-who-opposed-it",
          },
          {
            prompt: "Who intervened on the side opposing the plaintiffs?",
            options: ["The American Samoa Government and the territory's member of Congress", "The governments of Guam and the Commonwealth of the Northern Mariana Islands", "The American Civil Liberties Union and the Virgin Islands Bar Association", "The State of Utah, whose election code the plaintiffs had challenged"],
            correctIndex: 0,
            explanation: "The caption lists the Honorable Aumua Amata and the American Samoa Government as intervenor defendants-appellants.",
            sourceLessonSlug: "fitisemanu-and-who-opposed-it",
          },
          {
            prompt: "What was the intervenors' argument?",
            options: ["That imposed citizenship would be against their people's will", "That the plaintiffs had abandoned their claim by moving away from the territory", "That the Fourteenth Amendment had never been ratified by the territorial legislature", "That citizenship should be conferred but only after a treaty with New Zealand"],
            correctIndex: 0,
            explanation: "They added that it would risk upending core traditional practices, and called what was sought citizenship by judicial fiat.",
            sourceLessonSlug: "fitisemanu-and-who-opposed-it",
          },
          {
            prompt: "What phrase did the intervenors use for what they opposed?",
            options: ["Citizenship by judicial fiat", "An unconstitutional taking of communal property without just compensation", "A violation of the deeds of cession signed in 1900 and 1904 by the chiefs", "An impermissible extension of the Insular Cases beyond their original reasoning"],
            correctIndex: 0,
            explanation: "It is a claim about who should decide the question rather than a claim about what the answer should be.",
            sourceLessonSlug: "fitisemanu-and-who-opposed-it",
          },
          {
            prompt: "Who wrote the opinion for the Tenth Circuit panel?",
            options: ["Judge Lucero", "Chief Judge Tymkovich, who also filed a separate concurring opinion", "Judge Bacharach, whose reasoning the other two judges joined in full", "The panel issued an unsigned opinion without identifying its author"],
            correctIndex: 0,
            explanation: "Tymkovich concurred separately and Bacharach dissented, so all three judges wrote.",
            sourceLessonSlug: "fitisemanu-and-who-opposed-it",
          },
          {
            prompt: "What did Judge Lucero say had not been taken into adequate consideration?",
            options: ["The wishes of the territory's elected representatives", "The military service records of the three individual plaintiffs", "The 1929 statute by which Congress accepted the deeds of cession", "The number of American Samoans already naturalized under § 1436"],
            correctIndex: 0,
            explanation: "The opinion says they urged the court not to impose citizenship on an unwilling people from a courthouse thousands of miles away.",
            sourceLessonSlug: "fitisemanu-and-who-opposed-it",
          },
          {
            prompt: "Where did the panel say consideration of the territory's wishes properly falls?",
            options: ["Under the purview of Congress", "With the Supreme Court, on a petition for a writ of certiorari", "With the President, acting through the Department of the Interior", "With the American Samoan judiciary, applying the territory's own constitution"],
            correctIndex: 0,
            explanation: "That is why the case is about who decides as much as it is about what the Citizenship Clause means.",
            sourceLessonSlug: "fitisemanu-and-who-opposed-it",
          },
          {
            prompt: "What did the Tenth Circuit's holding NOT say?",
            options: ["That American Samoans may not become citizens", "That the Citizenship Clause does not itself extend birthright citizenship there", "That Congress plays the preeminent role in citizenship for unincorporated lands", "That prevailing circumstances in the territory bear on the reach of the Clause"],
            correctIndex: 0,
            explanation: "The holding is about the automatic operation of the Clause and about which branch decides, not about whether citizenship is permissible.",
            sourceLessonSlug: "fitisemanu-and-who-opposed-it",
          },
          {
            prompt: "What did Chief Judge Tymkovich conclude about the constitutional text and structure?",
            options: ["They cannot settle the Clause's geographic scope", "They clearly extend the Clause to every place under United States sovereignty", "They confine the Clause to the states and exclude the District of Columbia", "They require a court to defer to the Insular Cases before consulting the text"],
            correctIndex: 0,
            explanation: "He reached the Insular Cases only after finding that text, structure and history did not resolve the question.",
            sourceLessonSlug: "fitisemanu-and-who-opposed-it",
          },
          {
            prompt: "What weakness did Chief Judge Tymkovich identify in the historical evidence for the plaintiffs?",
            options: ["Much of it consisted of floor statements by individual legislators", "It rested entirely on decisions of state courts rather than federal ones", "It came from a period after the Fourteenth Amendment had been ratified", "It had been introduced too late in the litigation to be considered on appeal"],
            correctIndex: 0,
            explanation: "He noted such statements rank among the least illuminating forms of legislative history, and that in 1868 the United States had no material overseas possessions.",
            sourceLessonSlug: "fitisemanu-and-who-opposed-it",
          },
          {
            prompt: "Which justice did Judge Bacharach quote in the opening of his dissent?",
            options: ["Justice Brandeis", "Justice Harlan, who had dissented in every one of the Insular Cases", "Chief Justice Taft, who wrote the Court's opinion in the 1922 jury case", "Justice Gorsuch, whose concurrence came a year after this dissent was filed"],
            correctIndex: 0,
            explanation: "The line is that the only title in our democracy superior to that of President is the title of citizen.",
            sourceLessonSlug: "fitisemanu-and-who-opposed-it",
          },
          {
            prompt: "What was Judge Bacharach's central objection to the majority's reasoning?",
            options: ["The record showed a dearth of evidence of opposition", "The majority had applied the Insular Cases when it should have overruled them", "The majority had no jurisdiction to hear an appeal from a summary judgment", "The majority had ignored the territory's own constitution and its bill of rights"],
            correctIndex: 0,
            explanation: "His complaint was evidentiary: the consent claim was doing work the record did not support.",
            sourceLessonSlug: "fitisemanu-and-who-opposed-it",
          },
          {
            prompt: "What did the Supreme Court do with the petition in Fitisemanu?",
            options: ["Denied it", "Granted it and set the case for argument in the October 2022 term", "Vacated the judgment and remanded for reconsideration in light of Vaello Madero", "Dismissed it as improvidently granted after hearing oral argument"],
            correctIndex: 0,
            explanation: "The docket entry for 17 October 2022 in No. 21-1394 reads, in full, Petition DENIED.",
            sourceLessonSlug: "fitisemanu-and-who-opposed-it",
          },
          {
            prompt: "What does a denial of certiorari decide?",
            options: ["Nothing about the merits", "That the lower court's reasoning is approved by a majority of the justices", "That the constitutional question may not be raised again in any circuit", "That the case must be reheard by the full court of appeals sitting en banc"],
            correctIndex: 0,
            explanation: "It leaves the Tenth Circuit's judgment in place without endorsing it, which is why the question remains open in principle.",
            sourceLessonSlug: "fitisemanu-and-who-opposed-it",
          },
          {
            prompt: "Which earlier case had reached the same result as Fitisemanu?",
            options: ["Tuaua v. United States", "Balzac v. Porto Rico, decided by the Supreme Court in 1922", "Dorr v. United States, in which a majority adopted the incorporation theory", "Loughborough v. Blake, the 1820 decision about taxation of the District"],
            correctIndex: 0,
            explanation: "The D.C. Circuit decided it in 2015, so two federal appellate courts have now declined to extend the Clause to American Samoa.",
            sourceLessonSlug: "fitisemanu-and-who-opposed-it",
          },
          {
            prompt: "What is an intervenor?",
            options: ["A party who joins a case because the outcome will affect it", "A lawyer appointed by a court to argue a position no party has taken", "A witness whose testimony is compelled by subpoena in a civil action", "A non-party who files a brief but takes no position on the outcome"],
            correctIndex: 0,
            explanation: "It is how the American Samoa Government entered the case on the side opposing the American Samoan plaintiffs.",
            sourceLessonSlug: "fitisemanu-and-who-opposed-it",
          },
          {
            prompt: "What is the first sentence of the Fourteenth Amendment that the plaintiffs relied on called?",
            options: ["The Citizenship Clause", "The Privileges or Immunities Clause of the Fourteenth Amendment", "The Equal Protection Clause, which reaches persons rather than citizens", "The Due Process Clause, whose equal protection component the Court applies"],
            correctIndex: 0,
            explanation: "It makes all persons born or naturalized in the United States and subject to its jurisdiction citizens, and its geographic reach was the question.",
            sourceLessonSlug: "fitisemanu-and-who-opposed-it",
          },
          {
            prompt: "What is 'aiga, in American Samoa?",
            options: ["A large extended family", "A village council composed of elected representatives from each household", "A parcel of land registered in the name of a single individual owner", "A ceremonial gathering at which chieftain titles are conferred by vote"],
            correctIndex: 0,
            explanation: "It is the basic unit of Samoan social organization, led by matai and holding most of the territory's land.",
            sourceLessonSlug: "faa-samoa-and-the-choice",
          },
          {
            prompt: "What is a matai?",
            options: ["A holder of a hereditary chieftain title", "An elected magistrate who presides over the territory's district courts", "An officer of the federal government appointed by the Secretary of the Interior", "A registered owner of communal land under the territory's land code"],
            correctIndex: 0,
            explanation: "Matai regulate village life and are the only individuals permitted to serve in the upper house of the territory's legislature.",
            sourceLessonSlug: "faa-samoa-and-the-choice",
          },
          {
            prompt: "Who alone may serve in the upper house of the American Samoan legislature?",
            options: ["Matai", "Any registered voter who has resided in the territory for five years", "Citizens of the United States residing permanently in American Samoa", "Members chosen by the Secretary of the Interior from a territorial list"],
            correctIndex: 0,
            explanation: "That restriction is one of the traditional arrangements the intervenors argued could not survive uniform constitutional scrutiny.",
            sourceLessonSlug: "faa-samoa-and-the-choice",
          },
          {
            prompt: "What proportion of American Samoan land is held communally?",
            options: ["More than ninety percent", "Roughly half, with the remainder held by the territorial government", "About a quarter, mostly in the villages of the Manu'a island group", "None, because the deeds of cession transferred all land to the United States"],
            correctIndex: 0,
            explanation: "The Tenth Circuit put it as more than 90% belonging to the 'aiga rather than to any one individual.",
            sourceLessonSlug: "faa-samoa-and-the-choice",
          },
          {
            prompt: "What does Am. Samoa Code Ann. § 37.0204 require of a landowner?",
            options: ["At least fifty percent American Samoan ancestry", "Residence in the territory for at least ten consecutive years before purchase", "Membership in an 'aiga whose matai has consented to the transfer in writing", "United States citizenship acquired by naturalization rather than at birth"],
            correctIndex: 0,
            explanation: "The Tenth Circuit described it as a racial restriction on land ownership, which is exactly why the intervenors feared constitutional scrutiny.",
            sourceLessonSlug: "faa-samoa-and-the-choice",
          },
          {
            prompt: "Which constitutional provisions did the intervenors fear traditional practices would run afoul of?",
            options: ["Equal protection, takings and establishment", "The Uniformity Clause and the Import-Export Clause of Article I", "The Territory Clause and the clause admitting new states to the Union", "The Sixth Amendment jury guarantee and the Seventh Amendment civil jury"],
            correctIndex: 0,
            explanation: "A chamber reserved to hereditary title-holders, a blood-quantum land rule and communal ownership each sit awkwardly beside one of them.",
            sourceLessonSlug: "faa-samoa-and-the-choice",
          },
          {
            prompt: "What does this course say about whether the intervenors' worry is obviously correct?",
            options: ["It is a live claim but not obviously right", "It is settled law that citizenship would void the territory's land code", "It has been rejected by every court that has considered it since 2015", "It was abandoned by the intervenors before the appeal was argued"],
            correctIndex: 0,
            explanation: "Nothing in the Citizenship Clause repeals a land statute, and rights litigation would still have to be brought and won case by case.",
            sourceLessonSlug: "faa-samoa-and-the-choice",
          },
          {
            prompt: "What did the 2007 Future Political Status Study Committee report find at page 64?",
            options: ["That anti-citizenship attitudes remained strong", "That a clear majority of residents favored immediate admission as a state", "That the territory's land code would survive the extension of citizenship", "That no view on citizenship could be discerned from the public consultations"],
            correctIndex: 0,
            explanation: "The panel relied on it as evidence that the elected representatives' position reflected their people's attitude.",
            sourceLessonSlug: "faa-samoa-and-the-choice",
          },
          {
            prompt: "What did the same 2007 report observe at page 65?",
            options: ["That some American Samoans elsewhere wanted a status guaranteeing citizenship", "That the matai system would have to be abolished before statehood could be sought", "That the territory's population had grown in every decade since the cession", "That the United Nations had recommended a status referendum within five years"],
            correctIndex: 0,
            explanation: "Judge Bacharach cited it, which is why the same document appears on both sides of this question.",
            sourceLessonSlug: "faa-samoa-and-the-choice",
          },
          {
            prompt: "What happened when American Samoans first learned they were not considered citizens?",
            options: ["Many advocated for citizenship", "The territorial government petitioned for independence from the United States", "The traditional leaders asked Congress to rescind the deeds of cession", "The question was left untouched until the litigation of the present century"],
            correctIndex: 0,
            explanation: "The effort produced the American Samoan Commission in 1930, which recommended that Congress grant citizenship.",
            sourceLessonSlug: "faa-samoa-and-the-choice",
          },
          {
            prompt: "What became of the 1930 Commission's recommendation?",
            options: ["The Senate passed a bill and the House did not", "Congress enacted it and citizenship took effect in the following year", "The President vetoed the bill and the veto was sustained in both chambers", "The Supreme Court held the proposal unconstitutional before it was voted on"],
            correctIndex: 0,
            explanation: "The Tenth Circuit records that the Senate passed legislation to that effect but the effort failed in the House.",
            sourceLessonSlug: "faa-samoa-and-the-choice",
          },
          {
            prompt: "What has the delegate who intervened against the lawsuit also done in Congress?",
            options: ["Introduced bills making citizenship easier to obtain", "Sponsored a resolution asking the Supreme Court to overrule the Insular Cases", "Voted against every appropriation for the territory's own government", "Petitioned the Secretary of the Interior to revoke the territory's land code"],
            correctIndex: 0,
            explanation: "Judge Bacharach cited three such bills, and the one from 2019 would also authorize a referendum on automatic citizenship.",
            sourceLessonSlug: "faa-samoa-and-the-choice",
          },
          {
            prompt: "What would H.R. 1208 of the 116th Congress waive for qualifying nationals?",
            options: ["The English and civics examinations", "The requirement of continuous residence in a state before naturalizing", "The oath of allegiance ordinarily taken at a naturalization ceremony", "The filing fee charged for an application for naturalization"],
            correctIndex: 0,
            explanation: "It applies to nationals who have resided continuously in a state or outlying possession from birth to the approval of the application.",
            sourceLessonSlug: "faa-samoa-and-the-choice",
          },
          {
            prompt: "What else would that 2019 bill authorize?",
            options: ["A referendum on whether nationals should receive automatic citizenship", "A federal commission to redraw the territory's land ownership rules", "A grant to fund the territory's participation in presidential elections", "A transfer of the territory's administration from Interior to the State Department"],
            correctIndex: 0,
            explanation: "That is the fact that makes the caricature collapse: the same person opposed a court deciding and proposed letting American Samoans decide.",
            sourceLessonSlug: "faa-samoa-and-the-choice",
          },
          {
            prompt: "How does this course characterize the position the intervenors were defending?",
            options: ["That the decision belongs in American Samoa and in Congress", "That American Samoans should never become citizens under any circumstances", "That the Insular Cases were correctly decided and should be extended", "That the territory should seek independence rather than any closer union"],
            correctIndex: 0,
            explanation: "It is a claim about the forum and the process, and reasonable people including the plaintiffs and a federal judge hold the other view.",
            sourceLessonSlug: "faa-samoa-and-the-choice",
          },
          {
            prompt: "What does this course refuse to do about the American Samoa dispute?",
            options: ["Resolve it", "Report the evidence that cuts against the territory's elected government", "Name the parties who intervened on the side opposing the plaintiffs", "State the disabilities that attach to national status under federal law"],
            correctIndex: 0,
            explanation: "It reports the structure of the disagreement and the evidence on both sides, and says that anyone who calls this simple has left out a party.",
            sourceLessonSlug: "faa-samoa-and-the-choice",
          },
          {
            prompt: "What is the doctrinal awkwardness in the protective argument, as this course states it?",
            options: ["The shield is the same doctrine a sitting justice calls rotten", "The shield only operates in territories that have citizenship at birth", "The shield was created by Congress and may be withdrawn without notice", "The shield has already been abolished by the Supreme Court in Aurelius"],
            correctIndex: 0,
            explanation: "Unincorporated status is what keeps uniform constitutional scrutiny at bay, and it is the Insular Cases that supply it.",
            sourceLessonSlug: "faa-samoa-and-the-choice",
          },
          {
            prompt: "Which of these is a fair description of the Fitisemanu plaintiffs' complaint?",
            options: ["They cannot vote where they live", "They were denied entry to the United States at a port of arrival", "They were taxed by the federal government without any representation", "They were refused permission to purchase communal land in the territory"],
            correctIndex: 0,
            explanation: "Non-citizen nationals resident in a state cannot vote there, cannot run for office, cannot sit on a federal jury and cannot be commissioned.",
            sourceLessonSlug: "fitisemanu-and-who-opposed-it",
          },
          {
            prompt: "Why is the caption of the Fitisemanu appeal worth reading carefully?",
            options: ["It shows the territory's own institutions opposing the plaintiffs", "It lists every amicus curiae who filed in support of the federal government", "It records the date on which the deeds of cession were accepted by Congress", "It names the Supreme Court justices who later voted to deny certiorari"],
            correctIndex: 0,
            explanation: "Reading the case without the intervenors produces exactly the wrong story about who wants what.",
            sourceLessonSlug: "fitisemanu-and-who-opposed-it",
          },
          {
            prompt: "What did the panel say about whether the representatives' position reflected their people's views?",
            options: ["That it appeared to be a reliable expression of it", "That it was contradicted by every survey conducted in the territory since 1930", "That the question was irrelevant because Congress alone may confer citizenship", "That the record contained no evidence about public opinion in either direction"],
            correctIndex: 0,
            explanation: "That judgment rested on limited evidence, and it is precisely the point the dissent attacked.",
            sourceLessonSlug: "faa-samoa-and-the-choice",
          },
          {
            prompt: "Which document did BOTH the majority and the dissent draw on in Fitisemanu?",
            options: ["The 2007 Future Political Status Study Committee report", "The Immigration and Nationality Act's definition of outlying possessions", "The deeds of cession signed by Samoan leaders in 1900 and 1904", "The Covenant establishing the Commonwealth of the Northern Mariana Islands"],
            correctIndex: 0,
            explanation: "The majority quoted page 64 on anti-citizenship attitudes and the dissent quoted page 65 on Samoans elsewhere seeking citizenship.",
            sourceLessonSlug: "faa-samoa-and-the-choice",
          },
          {
            prompt: "Under the American Samoan constitution, what does the territory recognize?",
            options: ["Freedom of speech, freedom of religion and due process", "A right to vote in United States presidential elections from the territory", "A guarantee of jury trial in every criminal prosecution brought locally", "An entitlement to two voting members in the United States House"],
            correctIndex: 0,
            explanation: "The Tenth Circuit noted these among other basic civil rights in the territory's own bill of rights, alongside the traditional structures.",
            sourceLessonSlug: "faa-samoa-and-the-choice",
          },
          {
            prompt: "What is a blood quantum rule?",
            options: ["A legal requirement expressed as a fraction of ancestry", "A rule limiting how much land a single family may hold at one time", "A test of residence measured in continuous years within a territory", "A restriction on marriage between residents and non-residents of a territory"],
            correctIndex: 0,
            explanation: "American Samoa's is the requirement that a landowner be at least half American Samoan, at § 37.0204 of the territory's code.",
            sourceLessonSlug: "faa-samoa-and-the-choice",
          },
          {
            prompt: "Which of these is NOT one of the four disabilities the Tenth Circuit listed for nationals?",
            options: ["Inability to hold a job in the private sector in any state", "Inability to vote in the state where the person resides", "Inability to run for federal or for state elective office", "Inability to be commissioned as a military officer"],
            correctIndex: 0,
            explanation: "The court said nationals are entitled to work and travel freely in the United States, so employment is not among the bars.",
            sourceLessonSlug: "nationals-but-not-citizens",
          },
          {
            prompt: "Why does § 1408 reach American Samoa rather than Guam?",
            options: ["Because only American Samoa is an outlying possession", "Because Guam was acquired by treaty and American Samoa by deed of cession", "Because Guam has an organic act and American Samoa has never had one", "Because Guam's population is larger than American Samoa's population"],
            correctIndex: 0,
            explanation: "Section 1101(a)(29) names American Samoa and Swains Island, and Guam appears instead in the definitions of State and United States.",
            sourceLessonSlug: "nationals-but-not-citizens",
          },
          {
            prompt: "What is the practical effect of being outside the immigration statute's definition of the United States?",
            options: ["Birth there does not produce citizenship under that statute", "Residents may not enter the continental United States without a visa", "The territory's laws are not subject to review in the federal courts", "The territory may not send any representative to the Congress at all"],
            correctIndex: 0,
            explanation: "It is a definitional exclusion doing the work, which is why the whole question can be changed by an Act of Congress.",
            sourceLessonSlug: "nationals-but-not-citizens",
          },
          {
            prompt: "How does this course describe the amount of evidence about American Samoan public opinion?",
            options: ["Thin, and pointing both ways", "Extensive, and uniformly against the extension of citizenship", "Extensive, and uniformly in favor of the extension of citizenship", "Nonexistent, because no survey has ever been conducted in the territory"],
            correctIndex: 0,
            explanation: "The 2007 report, the 1930 Commission history and the delegate's own bills are read together rather than selectively.",
            sourceLessonSlug: "faa-samoa-and-the-choice",
          },
          {
            prompt: "What did the plaintiffs' status prevent them from doing in the armed forces?",
            options: ["Holding a commission", "Enlisting in any branch of the service at any rank whatsoever", "Serving outside the boundaries of the United States and its possessions", "Receiving veterans benefits after an honorable discharge from service"],
            correctIndex: 0,
            explanation: "The bar is in 10 U.S.C. § 532(a)(1), and it sits beside the panel's note about high enlistment rates.",
            sourceLessonSlug: "nationals-but-not-citizens",
          },
          {
            prompt: "In which year did the Tenth Circuit decide Fitisemanu?",
            options: ["2021", "2015, the same year the D.C. Circuit decided the parallel case", "2022, the year the Supreme Court denied the petition for certiorari", "2019, the year the delegate introduced her naturalization bill"],
            correctIndex: 0,
            explanation: "The opinion was filed on 15 June 2021, and the Supreme Court denied review the following year.",
            sourceLessonSlug: "fitisemanu-and-who-opposed-it",
          },
          {
            prompt: "What kind of judgment did the plaintiffs win below and lose on appeal?",
            options: ["Summary judgment", "A jury verdict returned after a trial in the District of Utah", "A consent decree agreed to by the federal government before trial", "A preliminary injunction pending resolution of the constitutional question"],
            correctIndex: 0,
            explanation: "It is a ruling on the law without a trial, which is what the appeal reversed.",
            sourceLessonSlug: "fitisemanu-and-who-opposed-it",
          },
          {
            prompt: "Which statute would have to change for people born in American Samoa to be citizens at birth by legislation?",
            options: ["The immigration statute's definitions and § 1408", "The Territory Clause of Article IV of the United States Constitution", "The Act of 1929 by which Congress accepted the deeds of cession", "The Hatch Act's definition of a State at 7 U.S.C. § 361a"],
            correctIndex: 0,
            explanation: "Congress did exactly that kind of thing for Guam and the Virgin Islands, which is why the question is legislative as well as judicial.",
            sourceLessonSlug: "nationals-but-not-citizens",
          },
          {
            prompt: "How should a careful reader describe American Samoans' relationship to their status?",
            options: ["Divided, with real disagreement among them", "Uniformly opposed to citizenship and satisfied with the present arrangement", "Uniformly in favor of citizenship and blocked only by the federal courts", "Indifferent, because the status makes no practical difference to daily life"],
            correctIndex: 0,
            explanation: "Three of them sued for citizenship, their elected government opposed a court granting it, and their delegate proposed a referendum on it.",
            sourceLessonSlug: "faa-samoa-and-the-choice",
          },
          {
            prompt: "Which of these is the strongest single fact against reading Fitisemanu as a straightforward denial of rights?",
            options: ["The territory's own government asked the court to rule that way", "The Supreme Court denied certiorari without any recorded dissent", "The panel described the Insular Cases as disreputable to modern eyes", "The plaintiffs had moved away from the territory before filing suit"],
            correctIndex: 0,
            explanation: "The parties opposing the American Samoan plaintiffs included the American Samoa Government and the territory's member of Congress.",
            sourceLessonSlug: "fitisemanu-and-who-opposed-it",
          },
          {
            prompt: "What is the relationship between the 1930 effort and the 2007 report?",
            options: ["They record opinion at two different times and point differently", "They were produced by the same commission twenty-seven years apart", "Both concluded that American Samoans opposed United States citizenship", "Both were rejected by Congress without any recorded floor vote"],
            correctIndex: 0,
            explanation: "In 1930 a Samoan commission asked for citizenship; in 2007 a Samoan study found anti-citizenship attitudes strong, and the course reports both.",
            sourceLessonSlug: "faa-samoa-and-the-choice",
          },
          {
            prompt: "Why does the course say that the Citizenship Clause would not automatically repeal the territory's land code?",
            options: ["Because rights litigation would still have to be brought and won", "Because the Constitution exempts communal property from all federal scrutiny", "Because the territory's code was approved by Congress in the 1929 statute", "Because the Insular Cases would continue to apply to land questions only"],
            correctIndex: 0,
            explanation: "The worry is real without being a certainty, and the course says so rather than picking whichever version fits a conclusion.",
            sourceLessonSlug: "faa-samoa-and-the-choice",
          },
          {
            prompt: "Which of these best captures the disabilities of national status in one sentence?",
            options: ["Free to live and work here, unable to vote or hold office", "Unable to enter the United States without a visa issued in advance", "Entitled to all constitutional rights except the right to a jury trial", "Treated as a foreign national for every purpose of federal law"],
            correctIndex: 0,
            explanation: "The Tenth Circuit's own summary pairs free movement and work with the loss of the vote, office, federal juries and a commission.",
            sourceLessonSlug: "nationals-but-not-citizens",
          },
          {
            prompt: "What did the deeds-of-cession statute do about citizenship, as Section 1 established?",
            options: ["Nothing", "Conferred it on all inhabitants as of the date of acceptance in 1929", "Conferred it only on those born after the acceptance of the cessions", "Delegated the question to the Secretary of the Interior by regulation"],
            correctIndex: 0,
            explanation: "48 U.S.C. § 1661 accepts the cessions and provides for government, and Congress has never added the citizenship step.",
            sourceLessonSlug: "nationals-but-not-citizens",
          },
          {
            prompt: "Which of these describes the Southern Utah Pacific Islander Coalition's role?",
            options: ["It was a plaintiff alongside the three individuals", "It filed an amicus brief supporting the American Samoa Government", "It intervened on the side of the federal government on appeal", "It was the state agency that had refused to register the plaintiffs to vote"],
            correctIndex: 0,
            explanation: "The caption lists it with John Fitisemanu, Pale Tuli and Rosavita Tuli as plaintiffs-appellees.",
            sourceLessonSlug: "fitisemanu-and-who-opposed-it",
          },
          {
            prompt: "Why does the course pair the officer bar with the enlistment rate?",
            options: ["Because the same status permits the service and forbids the rank", "Because both figures come from the Census Bureau's 2020 count", "Because the enlistment rate is what persuaded the panel to rule as it did", "Because Congress cited both when it accepted the deeds of cession"],
            correctIndex: 0,
            explanation: "A person may enlist, deploy and be killed in uniform and may not be commissioned in the force they serve in.",
            sourceLessonSlug: "nationals-but-not-citizens",
          },
          {
            prompt: "What would you need to know before saying that American Samoans want or do not want citizenship?",
            options: ["Which American Samoans, and on what evidence", "Only the position of the territory's elected representatives in Congress", "Only the result of the most recent federal court decision on the question", "Only whether the territory's land code would survive constitutional review"],
            correctIndex: 0,
            explanation: "The record contains a 1930 commission asking for it, a 2007 study finding opposition, three plaintiffs suing for it and a delegate proposing a referendum.",
            sourceLessonSlug: "faa-samoa-and-the-choice",
          },
          {
            prompt: "What does the phrase 'from a courthouse thousands of miles away' refer to?",
            options: ["The intervenors' objection to a Utah court deciding their status", "The distance between American Samoa and the Supreme Court in Washington", "The location of the Tenth Circuit's chambers relative to the territory", "The plaintiffs' argument that distance should not affect constitutional rights"],
            correctIndex: 0,
            explanation: "The panel quoted the elected representatives urging it not to impose citizenship on an unwilling people from such a courthouse.",
            sourceLessonSlug: "fitisemanu-and-who-opposed-it",
          },
          {
            prompt: "Which court decided Tuaua v. United States?",
            options: ["The D.C. Circuit", "The Tenth Circuit, sitting in Denver five years before Fitisemanu", "The Supreme Court of the United States, on a writ of certiorari", "The High Court of American Samoa, applying the territory's constitution"],
            correctIndex: 0,
            explanation: "It reached the same result in 2015, so two federal appellate courts have declined to extend the Citizenship Clause to American Samoa.",
            sourceLessonSlug: "fitisemanu-and-who-opposed-it",
          },
          {
            prompt: "What did Chief Judge Tymkovich say the United States lacked at the time the Fourteenth Amendment was ratified?",
            options: ["Material overseas possessions", "A statute defining who counted as a national of the United States", "Any federal court with jurisdiction over territorial disputes", "A settled practice of admitting territories as states of the Union"],
            correctIndex: 0,
            explanation: "So references to the territories in 1868 pointed at the contiguous ones, which is why he thought the historical evidence did not resolve the case.",
            sourceLessonSlug: "fitisemanu-and-who-opposed-it",
          },
          {
            prompt: "What is the single defined phrase that decides American Samoa's citizenship status?",
            options: ["Outlying possession", "Unincorporated territory, as that term is used in the Insular Cases", "Insular area, as that term appears in the agricultural statutes", "Covered territory, as that term is used in the Puerto Rico oversight law"],
            correctIndex: 0,
            explanation: "Section 1408 turns entirely on it, and § 1101(a)(29) defines it as American Samoa and Swains Island.",
            sourceLessonSlug: "nationals-but-not-citizens",
          },
          {
            prompt: "Which island is named alongside American Samoa in the outlying-possessions definition?",
            options: ["Swains Island", "Palmyra Atoll, the only remaining incorporated territory of the United States", "Wake Island, administered by the Department of the Air Force", "Navassa Island, claimed under the nineteenth-century guano legislation"],
            correctIndex: 0,
            explanation: "The definition at 8 U.S.C. § 1101(a)(29) names exactly those two places and nothing else.",
            sourceLessonSlug: "nationals-but-not-citizens",
          },
          {
            prompt: "What makes American Samoa unique among the inhabited places in this course?",
            options: ["Its people are not citizens at birth", "It is the only one whose land was purchased rather than ceded by treaty", "It is the only one without any elected legislature of its own", "It is the only one that sends no representative at all to Congress"],
            correctIndex: 0,
            explanation: "Congress conferred citizenship on Puerto Rico, Guam, the Virgin Islands and the Northern Marianas, and has never done so here.",
            sourceLessonSlug: "nationals-but-not-citizens",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4 — The vote that is not there
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "a-seat-without-a-vote",
      title: "13 · A seat without a vote",
      section: "Section 4 · The vote that is not there",
      body: `Every inhabited territory and the District send someone to the House of Representatives. None of them sends a Member.

**Six offices, five statutes and one Act of 1917.** The House's own manual records how each was created (Rules of the House of Representatives, 118th Cong., Rule III, § 675):

| Jurisdiction | Office | Established by |
| --- | --- | --- |
| District of Columbia | Delegate | Public Law 91-405 (84 Stat. 845) |
| Guam | Delegate | Public Law 92-271 (86 Stat. 118) |
| U.S. Virgin Islands | Delegate | Public Law 92-271 (86 Stat. 118) |
| American Samoa | Delegate | Public Law 95-556 (92 Stat. 2078), first filled in 1980 |
| Northern Mariana Islands | Delegate | Public Law 110-229 (122 Stat. 868) |
| Puerto Rico | Resident Commissioner | Act of 2 March 1917 (39 Stat. 963), with a four-year term |

Puerto Rico's office is the odd one, and it is odd in a way worth noticing: 48 U.S.C. § 891 says the qualified electors "shall choose a Resident Commissioner to the United States at each general election, whose term of office shall be four years" (48 U.S.C. § 891, n.d.). Four years, not two. Every Delegate serves a two-year term like a Member.

**What these six can do is more than most people assume.** Under Rule III, clause 3(a):

> "In a Committee of the Whole House on the State of the Union, each Delegate and the Resident Commissioner shall possess the same powers and privileges as Members of the House. Each Delegate and the Resident Commissioner shall be elected to serve on standing committees in the same manner as Members and shall possess in such committees the same powers and privileges as the other members of the committee." (Rules of the House of Representatives, 118th Cong., Rule III, cl. 3(a))

So they sit on committees, and they vote there, on the same terms as anyone else. On the floor a Delegate may debate, call a Member to order, make any motion a Member may make except the motion to reconsider, raise a point of order, and be appointed a teller. One has even moved an impeachment (Rules of the House of Representatives, 118th Cong., Rule III, § 675).

**And then the line.** In the manual's own words: "the law forbids a Delegate to vote". Not on final passage, not on anything the House itself decides.

**The Committee of the Whole vote is real and, by design, cannot decide anything.** Under clause 6(h) of Rule XVIII, a question resolved in the Committee of the Whole "by a margin within which the votes of Delegates and the Resident Commissioner were decisive" is immediately reconsidered in the House, where they cannot vote (Rules of the House of Representatives, 118th Cong., Rule III, § 675). When that arrangement was challenged, the D.C. Circuit upheld it in *Michel v. Anderson* on the premise that the immediate revote "rendered their votes merely symbolic and not an investment of true legislative power" (as stated in Rules of the House of Representatives, 118th Cong., Rule III, § 675). **A court had to find the vote meaningless in order to find it lawful.**

**The privilege also switches on and off with each Congress, and that is itself a fact about this subject.** The manual records the sequence: granted in the 103rd Congress in 1993, revoked in the 104th in 1995, reinstated in the 110th in 2007, revoked in the 112th in 2011, reinstated in the 116th in 2019. The 119th Congress adopted the rules of the 118th, and its rules resolution amends neither Rule III nor clause 6 of Rule XVIII (H.R. Res. 5, 2025). So the Committee of the Whole vote stands as this is written. **Check the current rules package before relying on it: this is exactly the kind of value that can change every two years without anyone announcing it.**

**One more disability, small and revealing.** A discharge petition, the device that forces a bill out of a hostile committee, "may not be signed by a Delegate or the Resident Commissioner, even by unanimous consent", because "a majority of the total membership of the House" is read to mean 218 Members and they are not counted in it (Rules of the House of Representatives, 118th Cong., Rule III, § 675).

**And the Senate is simply absent from this lesson,** because there is nothing to describe. Article I, Section 3 says "The Senate of the United States shall be composed of two Senators from each State", and the Seventeenth Amendment repeats the formula with the senators elected by the people of the state (U.S. Const. art. I, § 3, cl. 1; U.S. Const. amend. XVII). No state, no senator. There is no delegate equivalent, no committee seat, no symbolic vote. **For several million people the entire upper chamber does not exist.**

:::reveal What is the term of Puerto Rico's Resident Commissioner, and how does it differ from a Delegate's? ||| Four years, where every Delegate serves two.

:::reveal Where may a Delegate vote, and where may a Delegate not? ||| In standing committees and in the Committee of the Whole, but not in the House itself, where the law forbids a Delegate to vote.

:::reveal On what premise did the D.C. Circuit uphold the Delegates' Committee of the Whole vote? ||| That the immediate revote whenever their votes were decisive rendered those votes merely symbolic and not an investment of true legislative power.

## Vocabulary
- **Delegate**: a non-voting member of the House elected by a territory or the District, holding committee rights and no vote in the House itself.
- **Resident Commissioner**: Puerto Rico's equivalent office, created in 1917 and unique in carrying a four-year term.
- **Committee of the Whole**: the House sitting under a different set of procedures to consider legislation, and the only floor setting in which a Delegate may cast a vote.
- **Automatic revote**: the rule requiring a question to be put again in the House whenever the Delegates' votes were decisive in the Committee of the Whole, which is what makes their vote lawful and what makes it symbolic.
- **Discharge petition**: the signature device that forces a bill out of committee, whose threshold of 218 excludes Delegates and the Resident Commissioner entirely.

## Sources
48 U.S.C. § 891. (n.d.). *Resident Commissioner; election*. Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title48-section891&num=0&edition=prelim

H.R. Res. 5, 119th Cong. (2025). *Adopting the Rules of the House of Representatives for the One Hundred Nineteenth Congress*. U.S. Government Publishing Office. https://www.govinfo.gov/content/pkg/BILLS-119hres5eh/html/BILLS-119hres5eh.htm

*Rules of the House of Representatives*, 118th Cong., Rule III (H. Doc. 117-161). U.S. Government Publishing Office. https://www.govinfo.gov/content/pkg/HMAN-118/html/HMAN-118-pg401.htm

U.S. Const. art. I, § 3, cl. 1; U.S. Const. amend. XVII. National Archives. https://www.archives.gov/founding-docs/constitution-transcript`,
    },
    {
      slug: "no-electors",
      title: "14 · No electors, and the amendment that made one exception",
      section: "Section 4 · The vote that is not there",
      body: `Americans in the territories do not vote for President. The reason is one clause, and it is not about them at all.

**Article II, Section 1, Clause 2:**

> "Each State shall appoint, in such Manner as the Legislature thereof may direct, a Number of Electors, equal to the whole Number of Senators and Representatives to which the State may be entitled in the Congress" (U.S. Const. art. II, § 1, cl. 2)

**Each State.** The President is not elected by the people of the United States directly. The President is elected by electors that states appoint. A place that is not a state appoints none, and no statute can supply any, because both the number and the source are fixed in the constitutional text.

**Which is exactly why the District needed an amendment, and got one.** The Twenty-Third Amendment, passed by Congress on 16 June 1960 and ratified on 29 March 1961:

> "The District constituting the seat of Government of the United States shall appoint in such manner as the Congress may direct: A number of electors of President and Vice President equal to the whole number of Senators and Representatives in Congress to which the District would be entitled if it were a State, but in no event more than the least populous State" (U.S. Const. amend. XXIII, § 1)

Read the last clause twice. **The District's electoral votes are capped at whatever the smallest state has**, which has meant three for the entire life of the amendment. Even the remedy was written with a ceiling on it.

**No parallel amendment exists for any territory.** Puerto Rico, Guam, the Virgin Islands, American Samoa and the Northern Marianas appoint no electors, and the number of people that covers is not small. Puerto Rico alone counted 3,285,874 residents in the 2020 Census (U.S. Census Bureau, 2021a), more people than live in twenty-one states, and not one of them casts a vote for President from home.

**Three things people routinely get wrong here, worth fixing now.**

**One: this is about residence, not about citizenship or ancestry.** A citizen born in San Juan who moves to Orlando registers and votes for President like any other Floridian. A citizen born in Ohio who moves to San Juan stops voting for President. **The person did not change. The place did.** That is the Balzac principle from Section 2, still running a century later.

**Two: presidential primaries are not the general election.** The territories do send delegates to the parties' nominating conventions. A party convention is a private organizational process, not the constitutional election, and a convention delegate is not an elector under Article II. Confusing the two makes the arrangement look far more representative than it is.

**Three: the Delegate in the House and the elector under Article II are different creatures,** made by different instruments and doing different jobs. Congress created the Delegates by ordinary statute, which means Congress could alter them tomorrow. Congress cannot create an elector by statute for anyone, which is why the District's three votes required amending the Constitution and why no territory has any.

**So the ledger for a resident of a territory, as it stands.** No senator. One member of the House who may vote in committee and not on passage. No vote for President. The number of federal officials any of them helps choose who may vote on the floor of anything is zero.

:::reveal Under Article II, who appoints presidential electors? ||| Each State, in the manner its legislature directs, so a place that is not a state appoints none.

:::reveal What does the Twenty-Third Amendment cap the District's electors at? ||| No more than the least populous state has, which has meant three throughout the amendment's life.

:::reveal What happens to a citizen's presidential vote when they move from a state to Puerto Rico? ||| They stop voting for President, because the entitlement follows the place of residence rather than the person.

## Vocabulary
- **Elector**: a person appointed by a state under Article II to cast one of the votes that actually elects the President, and an office no territory can hold.
- **Twenty-Third Amendment**: the 1961 amendment giving the District presidential electors, capped at the number held by the least populous state.
- **Nominating convention**: a political party's own process for choosing a presidential candidate, which territories do take part in and which is not the constitutional election.
- **Residence rule**: the practical effect of Article II, that the ability to vote for President attaches to where a citizen lives rather than to the citizen.
- **Statutory versus constitutional office**: the Delegates exist because Congress passed laws and could be changed by law, while electors exist only by constitutional text and cannot be created by statute.

## Sources
U.S. Census Bureau. (2021a, August 25). *Puerto Rico population declined 11.8% from 2010 to 2020*. https://www.census.gov/library/stories/state-by-state/puerto-rico.html

U.S. Const. amend. XXIII. National Archives. https://www.archives.gov/founding-docs/amendments-11-27

U.S. Const. art. II, § 1, cl. 2. National Archives. https://www.archives.gov/founding-docs/constitution-transcript`,
    },
    {
      slug: "the-district-is-different",
      title: "15 · The District is different, and the difference cuts both ways",
      section: "Section 4 · The vote that is not there",
      body: `It is tempting to file the District of Columbia under "same problem, smaller island". It is a different problem, and the differences run in both directions.

**Different clause.** The territories are governed under Article IV. The District is governed under Article I, Section 8, Clause 17, which gives Congress power "To exercise exclusive Legislation in all Cases whatsoever, over such District" (U.S. Const. art. I, § 8, cl. 17). "In all Cases whatsoever" is stronger language than "needful Rules and Regulations", and it is a power over a place the Constitution itself calls into being rather than over property the United States happens to hold.

**Different constitutional status for the people.** Nobody argues that the District is unincorporated or that the Constitution reaches it only in part. In 1820, in *Loughborough v. Blake*, Chief Justice Marshall applied the requirement of uniform duties to a tax on the District without hesitation. The Insular Cases are not about the District at all, which is why its residents have never had to argue about whether they are owed a jury.

**Different tax position, and this is the difference that produces the slogan.** A bona fide resident of Puerto Rico generally excludes Puerto Rico source income from federal gross income under 26 U.S.C. § 933, which exempts it "from taxation under this subtitle", with an express carve-out for pay received "for services performed as an employee of the United States or any agency thereof" (26 U.S.C. § 933, n.d.). **No such provision exists for the District.** A District resident pays federal income tax on the same terms as a resident of Maryland and has no vote on the floor of either chamber. That is the literal content of "taxation without representation", and it is why the District's argument and Puerto Rico's argument are not the same argument. In *Vaello Madero* the Supreme Court treated the territories' lighter federal tax treatment as a rational basis for treating them differently in a benefits program, which is the subject of the next section. That reasoning has no purchase in the District.

**Different presidential vote.** The District has three electors under the Twenty-Third Amendment. The territories have none.

**Same absence in Congress.** The District has a Delegate, created by Public Law 91-405, with exactly the powers the previous lesson described and no vote in the House. It has no senator either.

**And one thing the District has that no territory has: an elected local government whose every act Congress reviews.** The Home Rule Act created the Council, and D.C. Code § 1-206.02 sets the terms. An act of the Council takes effect "upon the expiration of the 30-calendar-day period (excluding Saturdays, Sundays, and holidays)" unless "there has been enacted into law a joint resolution disapproving such act", with a 60-day period for amendments to criminal law (D.C. Code § 1-206.02, n.d.). The same section forbids the Council to legislate on a list of subjects, among them the organization of the courts, building heights above the limits in force in 1973, and anything "which is not restricted in its application exclusively in or to the District".

**Hold both halves of that together, because it is the honest summary.** The District governs itself more than a territory does in some respects and less in others. It elects a council and a mayor whose laws a body its residents cannot vote for may undo inside thirty days. That is not the territories' problem, which is a doctrine about which parts of the Constitution apply at all. It is a different problem: full constitutional status, full federal taxation, and a legislature on probation.

**The reason to teach them together is not that they are the same.** It is that both are answers to the question this course opened with, and both were produced by the same silence in the two clauses of Section 1. Neither clause says how long, neither promises a vote, and neither says what happens to the people in the meantime.

:::reveal Which constitutional clause governs the District, and how is its language stronger than the Territory Clause? ||| Article I, Section 8, Clause 17, which grants exclusive Legislation in all Cases whatsoever rather than needful Rules and Regulations.

:::reveal What is the tax difference between a District resident and a bona fide resident of Puerto Rico? ||| The District resident pays federal income tax on the same terms as anyone in a state, while 26 U.S.C. § 933 exempts Puerto Rico source income for a bona fide resident.

:::reveal How long does Congress have to disapprove an act of the D.C. Council, and what is the longer period? ||| Thirty calendar days excluding weekends and holidays, and sixty days for amendments to criminal law.

## Vocabulary
- **Home Rule Act**: the statute creating the District's elected Council and Mayor, subject to the congressional review the same law preserves.
- **Congressional review period**: the window during which an act of the D.C. Council may be undone by a joint resolution of disapproval enacted into law.
- **Bona fide resident**: the tax status that triggers the Puerto Rico source income exclusion in 26 U.S.C. § 933, and the reason the territories' tax position differs from the District's.
- **Joint resolution of disapproval**: the instrument by which Congress nullifies a District act, which must be enacted into law like any other measure.
- **Taxation without representation**: in the District's case a literal description, since its residents are subject to the federal income tax and elect nobody who may vote on it.

## Sources
26 U.S.C. § 933. (n.d.). *Income from sources within Puerto Rico*. Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title26-section933&num=0&edition=prelim

D.C. Code § 1-206.02. (n.d.). *Limitations on the Council*. Council of the District of Columbia. https://code.dccouncil.gov/us/dc/council/code/sections/1-206.02

U.S. Const. art. I, § 8, cl. 17. National Archives. https://www.archives.gov/founding-docs/constitution-transcript`,
    },
    {
      slug: "quiz-the-vote-that-is-not-there",
      title: "16 · Knowledge check: the vote that is not there",
      section: "Section 4 · The vote that is not there",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What office does Puerto Rico send to the House of Representatives?",
            options: ["A Resident Commissioner", "A Delegate, on the same terms as Guam and the Virgin Islands", "Two Representatives apportioned by population under the decennial census", "An observer appointed by the Governor rather than elected by the voters"],
            correctIndex: 0,
            explanation: "The office was created by the Act of 2 March 1917 and is the only one of the six that carries a four-year term.",
            sourceLessonSlug: "a-seat-without-a-vote",
          },
          {
            prompt: "How long is the Resident Commissioner's term?",
            options: ["Four years", "Two years, the same as every other member of the House of Representatives", "Six years, matching the term of a United States senator", "One year, renewable by the territorial legislature without a general election"],
            correctIndex: 0,
            explanation: "48 U.S.C. § 891 sets it at four years from the third of January following the general election.",
            sourceLessonSlug: "a-seat-without-a-vote",
          },
          {
            prompt: "Which statute established the office of Delegate from the District of Columbia?",
            options: ["Public Law 91-405", "Public Law 92-271, which also created the Guam and Virgin Islands offices", "Public Law 110-229, which created the Northern Marianas office", "The Act of 2 March 1917, which created the Resident Commissioner"],
            correctIndex: 0,
            explanation: "The House manual records it at 84 Stat. 845, separate from the statutes that created the territorial delegates.",
            sourceLessonSlug: "a-seat-without-a-vote",
          },
          {
            prompt: "Which single statute created the Delegate offices for both Guam and the Virgin Islands?",
            options: ["Public Law 92-271", "Public Law 95-556, which also created the American Samoa office in 1978", "Public Law 91-405, which had created the District's office two years earlier", "The Organic Act of Guam, enacted on 1 August 1950"],
            correctIndex: 0,
            explanation: "The House manual cites it at 86 Stat. 118 for both territories.",
            sourceLessonSlug: "a-seat-without-a-vote",
          },
          {
            prompt: "When was American Samoa's Delegate office first filled?",
            options: ["1980", "1972, when the Guam and Virgin Islands offices were first filled", "1929, when Congress accepted the deeds of cession", "2008, the year the Northern Marianas office was created"],
            correctIndex: 0,
            explanation: "Public Law 95-556 created the office and the manual records that it was first filled at the general federal election of 1980.",
            sourceLessonSlug: "a-seat-without-a-vote",
          },
          {
            prompt: "Which territory's Delegate office is the most recently created of the six?",
            options: ["The Northern Mariana Islands", "American Samoa, whose office dates from Public Law 95-556", "Guam, whose office was created alongside the Virgin Islands", "The District of Columbia, whose office dates from Public Law 91-405"],
            correctIndex: 0,
            explanation: "Public Law 110-229, at 122 Stat. 868, created it, more than three decades after the Covenant took effect.",
            sourceLessonSlug: "a-seat-without-a-vote",
          },
          {
            prompt: "Under Rule III, clause 3(a), what powers does a Delegate have in standing committees?",
            options: ["The same as other members of the committee", "Debate only, with no ability to vote on any question before the committee", "A vote that counts only if the committee chair certifies it in advance", "Observer status, with a right to file written views but not to attend markups"],
            correctIndex: 0,
            explanation: "The rule says they are elected to serve on standing committees in the same manner as Members and hold the same powers and privileges there.",
            sourceLessonSlug: "a-seat-without-a-vote",
          },
          {
            prompt: "In which floor setting may a Delegate cast a vote?",
            options: ["The Committee of the Whole", "On final passage of a bill after the Committee of the Whole rises", "On a motion to recommit a bill with instructions to a standing committee", "On the election of the Speaker at the opening of a new Congress"],
            correctIndex: 0,
            explanation: "Rule III, clause 3(a) gives Delegates the same powers and privileges as Members there, and only there.",
            sourceLessonSlug: "a-seat-without-a-vote",
          },
          {
            prompt: "What does the House manual say the law does about a Delegate voting in the House itself?",
            options: ["It forbids it", "It permits it whenever the Speaker grants unanimous consent in advance", "It permits it on procedural questions but not on the passage of legislation", "It leaves the question to each Congress to settle in its own rules package"],
            correctIndex: 0,
            explanation: "The manual's phrasing is that the law forbids a Delegate to vote, which is separate from what the House rules allow in committee.",
            sourceLessonSlug: "a-seat-without-a-vote",
          },
          {
            prompt: "What happens under clause 6(h) of Rule XVIII when Delegates' votes are decisive?",
            options: ["The question is immediately reconsidered in the House", "The vote stands, and the Speaker records the margin in the Congressional Record", "The Committee of the Whole adjourns until the following legislative day", "The bill is returned to the standing committee that reported it"],
            correctIndex: 0,
            explanation: "The revote takes place in the House, where Delegates and the Resident Commissioner may not vote at all.",
            sourceLessonSlug: "a-seat-without-a-vote",
          },
          {
            prompt: "On what premise did the D.C. Circuit uphold the Delegates' Committee of the Whole vote in Michel v. Anderson?",
            options: ["That the votes were merely symbolic", "That the Constitution permits Congress to enlarge the House by statute", "That the territories had consented to the arrangement through their legislatures", "That the Speaker retained discretion to disregard any decisive delegate vote"],
            correctIndex: 0,
            explanation: "The immediate revote meant the votes were not an investment of true legislative power, and that is what made them lawful.",
            sourceLessonSlug: "a-seat-without-a-vote",
          },
          {
            prompt: "What is the striking feature of the Michel v. Anderson reasoning?",
            options: ["The vote had to be meaningless in order to be lawful", "The court held that Delegates were Members for every constitutional purpose", "The court required Congress to grant the Delegates a vote on final passage", "The court struck the rule down and the House reinstated it by resolution"],
            correctIndex: 0,
            explanation: "The lawfulness of the privilege rested on the automatic revote draining it of effect.",
            sourceLessonSlug: "a-seat-without-a-vote",
          },
          {
            prompt: "In which Congress was the Delegates' Committee of the Whole vote first granted?",
            options: ["The 103rd", "The 91st, when the District's Delegate office was first created by statute", "The 116th, when the privilege was most recently reinstated by the House", "The 110th, when it was reinstated after a twelve-year absence"],
            correctIndex: 0,
            explanation: "It came in 1993, was revoked in 1995, reinstated in 2007, revoked in 2011 and reinstated in 2019.",
            sourceLessonSlug: "a-seat-without-a-vote",
          },
          {
            prompt: "What does the on-and-off history of the Committee of the Whole vote tell a reader?",
            options: ["It is a rules privilege that each Congress may withdraw", "It is a constitutional right that survives changes in the House rules", "It has been settled law since the office of Delegate was first created", "It applies only to the Resident Commissioner and never to the Delegates"],
            correctIndex: 0,
            explanation: "Granted in 1993, revoked in 1995, reinstated in 2007, revoked in 2011 and reinstated in 2019, so the current rules package has to be checked.",
            sourceLessonSlug: "a-seat-without-a-vote",
          },
          {
            prompt: "What did the 119th Congress do about Rule III and clause 6 of Rule XVIII?",
            options: ["It adopted the previous Congress's rules without amending either", "It repealed the Committee of the Whole vote for Delegates once again", "It extended the Committee of the Whole vote to votes on final passage", "It abolished the office of Resident Commissioner and created a Delegate instead"],
            correctIndex: 0,
            explanation: "H. Res. 5 adopts the 118th Congress's rules with amendments listed elsewhere, and neither of these rules is among them.",
            sourceLessonSlug: "a-seat-without-a-vote",
          },
          {
            prompt: "Which motion may a Delegate NOT make on the floor of the House?",
            options: ["The motion to reconsider", "A point of order against a bill being considered out of order", "A motion to adjourn at the close of the legislative day", "A motion that any other Member of the House is entitled to make"],
            correctIndex: 0,
            explanation: "The manual records that a Delegate may make any motion a Member may make except that one.",
            sourceLessonSlug: "a-seat-without-a-vote",
          },
          {
            prompt: "Why may a Delegate not sign a discharge petition?",
            options: ["The threshold of 218 counts only Members", "Because a discharge petition may only be signed by members of the committee involved", "Because the Speaker must approve every signature before it is recorded", "Because the rule was repealed for Delegates in the 112th Congress and never restored"],
            correctIndex: 0,
            explanation: "A majority of the total membership of the House is construed as 218 Members, not including Delegates or the Resident Commissioner.",
            sourceLessonSlug: "a-seat-without-a-vote",
          },
          {
            prompt: "How many senators do the territories and the District have between them?",
            options: ["None", "One each, seated without a vote in the same manner as a House Delegate", "Two, shared among the five territories on a rotating four-year basis", "Three, matching the number of electors the District casts for President"],
            correctIndex: 0,
            explanation: "Article I, Section 3 composes the Senate of two senators from each State, and there is no delegate equivalent in that chamber.",
            sourceLessonSlug: "a-seat-without-a-vote",
          },
          {
            prompt: "How does Article I, Section 3 compose the Senate?",
            options: ["Two Senators from each State", "One Senator for every million residents counted in the decennial census", "Two Senators from each State and one from each organized territory", "A number of Senators fixed by Congress from time to time by statute"],
            correctIndex: 0,
            explanation: "The Seventeenth Amendment repeats the formula and changes only who elects them, so no state means no senator.",
            sourceLessonSlug: "a-seat-without-a-vote",
          },
          {
            prompt: "What did the Seventeenth Amendment change about the Senate?",
            options: ["Who elects the senators", "The number of senators allotted to each state of the Union", "The length of a senator's term of office in the upper chamber", "Whether territories could be represented in the Senate at all"],
            correctIndex: 0,
            explanation: "It moved the choice from state legislatures to the people of each state and left the two-per-state formula untouched.",
            sourceLessonSlug: "a-seat-without-a-vote",
          },
          {
            prompt: "Under Article II, Section 1, Clause 2, who appoints presidential electors?",
            options: ["Each State", "The people of the United States, voting directly for President and Vice President", "The Congress, by joint resolution following each decennial census", "Each State and each organized territory of the United States"],
            correctIndex: 0,
            explanation: "The clause names the states and fixes the number by the size of each state's congressional delegation.",
            sourceLessonSlug: "no-electors",
          },
          {
            prompt: "How many electors does Article II give a territory?",
            options: ["None", "One for each Delegate the territory sends to the House of Representatives", "A number equal to the least populous state, as with the District", "A number set by Congress in the statute creating the territory's government"],
            correctIndex: 0,
            explanation: "The clause runs to states only, and no statute can supply an elector because both the number and the source are constitutional.",
            sourceLessonSlug: "no-electors",
          },
          {
            prompt: "When was the Twenty-Third Amendment ratified?",
            options: ["1961", "1973, the year Congress passed the District of Columbia Home Rule Act", "1913, the same year the Seventeenth Amendment took effect", "1917, the year Congress conferred citizenship on Puerto Rico"],
            correctIndex: 0,
            explanation: "Congress passed it on 16 June 1960 and it was ratified on 29 March 1961.",
            sourceLessonSlug: "no-electors",
          },
          {
            prompt: "What ceiling does the Twenty-Third Amendment place on the District's electors?",
            options: ["No more than the least populous state", "No more than half the number a state of similar population would receive", "No more than three, stated as a fixed number in the text of the amendment", "No more than the number of Delegates the District elects to the House"],
            correctIndex: 0,
            explanation: "The text caps it at the least populous state's number, which has meant three for the whole life of the amendment.",
            sourceLessonSlug: "no-electors",
          },
          {
            prompt: "How does the Twenty-Third Amendment describe the manner of appointing the District's electors?",
            options: ["In such manner as the Congress may direct", "In such manner as the Council of the District of Columbia may direct", "By popular vote of the qualified electors resident in the District", "By the President, with the advice and consent of the Senate"],
            correctIndex: 0,
            explanation: "The text hands the manner to Congress, which is the same body the District cannot vote for.",
            sourceLessonSlug: "no-electors",
          },
          {
            prompt: "What was Puerto Rico's population in the 2020 Census?",
            options: ["3,285,874", "1,264,065, the number of ballots cast in its most recent status vote", "689,545, the figure recorded for the District of Columbia", "153,836, the figure recorded for the territory of Guam"],
            correctIndex: 0,
            explanation: "The Census Bureau reported it alongside a decline of 11.8 percent from the 2010 count.",
            sourceLessonSlug: "no-electors",
          },
          {
            prompt: "What happens to a citizen who moves from Ohio to San Juan?",
            options: ["They stop voting for President", "They keep voting for President by absentee ballot in their former state", "They lose United States citizenship after one year of continuous residence", "They gain a vote for the Resident Commissioner and keep their presidential vote"],
            correctIndex: 0,
            explanation: "The entitlement attaches to the place of residence rather than to the person, which is the Balzac principle still operating.",
            sourceLessonSlug: "no-electors",
          },
          {
            prompt: "What happens to a citizen who moves from San Juan to Orlando?",
            options: ["They register and vote for President like any other Floridian", "They must apply for naturalization before they may register to vote", "They keep voting in Puerto Rico's elections for Resident Commissioner", "They must wait one full presidential cycle before becoming eligible"],
            correctIndex: 0,
            explanation: "Nothing about the person changed, which is the cleanest demonstration that the rule is about place.",
            sourceLessonSlug: "no-electors",
          },
          {
            prompt: "Do the territories take part in presidential nominating conventions?",
            options: ["Yes, and a convention is not the constitutional election", "No, because party rules exclude jurisdictions without electoral votes", "Yes, and their convention delegates are counted as electors under Article II", "Only Puerto Rico does, because of the four-year term of its Resident Commissioner"],
            correctIndex: 0,
            explanation: "A party convention is a private organizational process, and confusing it with the general election makes the arrangement look more representative than it is.",
            sourceLessonSlug: "no-electors",
          },
          {
            prompt: "What is the key difference between a Delegate and an elector, in how each exists?",
            options: ["One is created by statute and the other only by the Constitution", "One is elected by voters and the other is appointed by the President", "One serves two years and the other serves for a single presidential term", "One may vote in committee and the other may vote on final passage"],
            correctIndex: 0,
            explanation: "Congress could alter the Delegates tomorrow and cannot create an elector for anyone, which is why the District's three votes needed an amendment.",
            sourceLessonSlug: "no-electors",
          },
          {
            prompt: "How many federal officials with a floor vote does a territorial resident help choose?",
            options: ["None", "One, the Delegate who represents the territory in the House", "Two, the Delegate and the territory's own governor", "Three, matching the electors the District casts for President"],
            correctIndex: 0,
            explanation: "No senator, a House member who cannot vote on passage, and no presidential elector.",
            sourceLessonSlug: "no-electors",
          },
          {
            prompt: "Which article governs the District of Columbia?",
            options: ["Article I", "Article IV, the same article that governs the territories of the United States", "Article II, because the seat of government houses the executive branch", "Article III, because the District contains the federal courts of the nation"],
            correctIndex: 0,
            explanation: "Section 8, Clause 17 of Article I, which is a different source of power from the Territory Clause.",
            sourceLessonSlug: "the-district-is-different",
          },
          {
            prompt: "How does the District Clause's language compare with the Territory Clause's?",
            options: ["It is stronger, granting legislation in all Cases whatsoever", "It is weaker, requiring the consent of the District's residents before legislating", "It is identical, using the same words needful Rules and Regulations", "It is narrower, applying only to the erection of forts and arsenals"],
            correctIndex: 0,
            explanation: "The Territory Clause grants power to make all needful Rules and Regulations, which is not the same phrase at all.",
            sourceLessonSlug: "the-district-is-different",
          },
          {
            prompt: "Is the District an unincorporated territory?",
            options: ["No, and nobody argues that it is", "Yes, and the Insular Cases apply to it in the same way they apply to Guam", "Yes, but only for the purposes of the revenue clauses of the Constitution", "The question has never been decided by any federal court since 1820"],
            correctIndex: 0,
            explanation: "The Insular Cases are not about the District, and Loughborough v. Blake applied the uniformity requirement there in 1820 without hesitation.",
            sourceLessonSlug: "the-district-is-different",
          },
          {
            prompt: "What does 26 U.S.C. § 933 do?",
            options: ["Exempts Puerto Rico source income of a bona fide resident", "Exempts every resident of every United States territory from federal income tax", "Imposes a special federal excise tax on goods shipped from Puerto Rico", "Requires Puerto Rico to match federal benefits spending dollar for dollar"],
            correctIndex: 0,
            explanation: "It excludes that income from gross income, with an express carve-out for pay earned as an employee of the United States or its agencies.",
            sourceLessonSlug: "the-district-is-different",
          },
          {
            prompt: "Which income does 26 U.S.C. § 933 expressly refuse to exempt?",
            options: ["Pay for services performed as an employee of the United States", "Investment income earned from securities issued outside the territory", "Rental income from property located anywhere in the fifty states", "Pension income received from a former employer on the mainland"],
            correctIndex: 0,
            explanation: "The carve-out is written into the section, which is why the exemption is narrower than the common summary of it.",
            sourceLessonSlug: "the-district-is-different",
          },
          {
            prompt: "How does a District resident's federal income tax position compare with a Maryland resident's?",
            options: ["It is the same", "It is lighter, because the District is not a state of the Union", "It is heavier, because the District pays a supplemental federal levy", "It depends on whether the resident works for the federal government"],
            correctIndex: 0,
            explanation: "No provision exempts District income, which is what makes taxation without representation a literal description there.",
            sourceLessonSlug: "the-district-is-different",
          },
          {
            prompt: "Why does the Vaello Madero tax rationale have no purchase in the District?",
            options: ["District residents are not exempt from federal income tax", "District residents already elect three members with full voting rights", "The Supreme Court expressly excluded the District from that decision", "The District is governed under Article IV rather than under Article I"],
            correctIndex: 0,
            explanation: "The Court treated the territories' lighter federal tax treatment as a rational basis for different benefits treatment, and the District has no such treatment.",
            sourceLessonSlug: "the-district-is-different",
          },
          {
            prompt: "How long does an act of the D.C. Council normally wait before taking effect?",
            options: ["Thirty calendar days excluding weekends and holidays", "Ninety days from the date the Mayor signs it into local law", "Until Congress passes a joint resolution expressly approving it", "Until the next regular session of Congress convenes in January"],
            correctIndex: 0,
            explanation: "It takes effect at the end of that period unless a joint resolution disapproving it has been enacted into law.",
            sourceLessonSlug: "the-district-is-different",
          },
          {
            prompt: "What is the longer congressional review period under D.C. Code § 1-206.02?",
            options: ["Sixty days, for amendments to criminal law", "One hundred and twenty days, for any act affecting the District's budget", "Forty-five days, for acts concerning the organization of the local courts", "Thirty legislative days, for acts affecting the height of buildings"],
            correctIndex: 0,
            explanation: "Criminal-law amendments get the longer window, which is a distinct provision from the ordinary thirty-day rule.",
            sourceLessonSlug: "the-district-is-different",
          },
          {
            prompt: "Which of these may the D.C. Council NOT legislate about?",
            options: ["The organization of the courts", "The licensing of businesses operating within the boundaries of the District", "The salaries paid to employees of the District government", "The hours during which District public schools must remain open"],
            correctIndex: 0,
            explanation: "That subject sits on the list of limitations in D.C. Code § 1-206.02, alongside building heights and matters not restricted exclusively to the District.",
            sourceLessonSlug: "the-district-is-different",
          },
          {
            prompt: "What instrument does Congress use to nullify an act of the D.C. Council?",
            options: ["A joint resolution of disapproval enacted into law", "A concurrent resolution adopted by both chambers without presentment", "An order of the Speaker of the House transmitted to the Mayor", "A ruling of the federal district court for the District of Columbia"],
            correctIndex: 0,
            explanation: "It must be enacted into law like any other measure, which is why the review is a real but demanding check.",
            sourceLessonSlug: "the-district-is-different",
          },
          {
            prompt: "What does the District have that no territory has?",
            options: ["Presidential electors", "A Delegate in the House of Representatives with committee voting rights", "An elected legislature of its own with power over local matters", "Residents who are citizens of the United States at birth"],
            correctIndex: 0,
            explanation: "Three of them, under the Twenty-Third Amendment, and the territories have none.",
            sourceLessonSlug: "the-district-is-different",
          },
          {
            prompt: "What do the District and the territories have in common in Congress?",
            options: ["A House member who cannot vote on passage and no senator", "A Resident Commissioner elected to a four-year term of office", "Two senators seated without a vote on the floor of the chamber", "Presidential electors capped at the number held by the smallest state"],
            correctIndex: 0,
            explanation: "The District's Delegate was created by Public Law 91-405 and holds exactly the powers the territorial Delegates hold.",
            sourceLessonSlug: "the-district-is-different",
          },
          {
            prompt: "How does this course summarize the District's position against a territory's?",
            options: ["More self-government in some respects and less in others", "Identical in every respect except the three presidential electors", "Strictly better, because the Insular Cases do not apply to the District", "Strictly worse, because Congress may legislate for it in all cases whatsoever"],
            correctIndex: 0,
            explanation: "It elects a council and a mayor whose laws a body its residents cannot vote for may undo within thirty days.",
            sourceLessonSlug: "the-district-is-different",
          },
          {
            prompt: "Why does this course teach the District alongside the territories?",
            options: ["Both answer the same question left open by two silent clauses", "Because the Supreme Court has treated them identically since 1901", "Because both were acquired from foreign powers by treaty in 1898", "Because both are governed under Article IV of the Constitution"],
            correctIndex: 0,
            explanation: "Neither the Territory Clause nor the District Clause says how long, promises a vote, or says what happens to the people in the meantime.",
            sourceLessonSlug: "the-district-is-different",
          },
          {
            prompt: "What is a bona fide resident, for the purposes of the Puerto Rico income exclusion?",
            options: ["Someone who is a resident of Puerto Rico for an entire taxable year", "Anyone born in Puerto Rico, whether or not they still live there", "Anyone holding property in Puerto Rico worth more than a statutory minimum", "Anyone employed by the government of Puerto Rico in any capacity"],
            correctIndex: 0,
            explanation: "26 U.S.C. § 933 also reaches citizens who were bona fide residents for at least two years before changing residence away from the island.",
            sourceLessonSlug: "the-district-is-different",
          },
          {
            prompt: "Which of these is the accurate reading of 'taxation without representation' in the District?",
            options: ["A literal description of its residents' position", "A slogan with no legal content that the courts have consistently rejected", "A description that applies equally to residents of Puerto Rico and Guam", "A reference to the local taxes the Council imposes without congressional approval"],
            correctIndex: 0,
            explanation: "They pay the federal income tax on the same terms as anyone in a state and elect nobody who may vote on the floor of either chamber.",
            sourceLessonSlug: "the-district-is-different",
          },
          {
            prompt: "Which case applied the uniformity requirement to a tax on the District?",
            options: ["Loughborough v. Blake", "Downes v. Bidwell, decided a century later on a shipment of oranges", "Michel v. Anderson, in which the D.C. Circuit upheld the Delegates' vote", "Balzac v. Porto Rico, which concerned a criminal libel prosecution"],
            correctIndex: 0,
            explanation: "Chief Justice Marshall decided it in 1820, long before the Insular Cases invented the incorporated and unincorporated distinction.",
            sourceLessonSlug: "the-district-is-different",
          },
          {
            prompt: "Which of these does a Delegate share with a Member of the House?",
            options: ["The ability to be appointed a teller", "The ability to vote on the final passage of a bill on the House floor", "The ability to sign a discharge petition to force a bill out of committee", "The ability to be counted toward the 218 that makes a majority of the House"],
            correctIndex: 0,
            explanation: "The manual lists debate, calling a Member to order, points of order and service as a teller among the powers a Delegate holds.",
            sourceLessonSlug: "a-seat-without-a-vote",
          },
          {
            prompt: "Which is the correct statement about the six non-voting offices?",
            options: ["All were created by statute except the Resident Commissioner's four-year term", "All were created by constitutional amendment after the Civil War", "All were created by a single Act of Congress passed in 1972", "All carry two-year terms and identical powers under the House rules"],
            correctIndex: 0,
            explanation: "Five public laws created the Delegates and the Act of 2 March 1917 created the Resident Commissioner, uniquely with a four-year term.",
            sourceLessonSlug: "a-seat-without-a-vote",
          },
          {
            prompt: "What did the Act of 17 May 1932 change?",
            options: ["The spelling of Puerto Rico in federal law", "The term of the Resident Commissioner from two years to four", "The status of Puerto Rico from a territory to a commonwealth", "The number of Delegates the territories could send to the House"],
            correctIndex: 0,
            explanation: "It replaced the older spelling Porto Rico, which is why a 1922 Supreme Court case carries the older name in its caption.",
            sourceLessonSlug: "a-seat-without-a-vote",
          },
          {
            prompt: "Which chamber has no mechanism at all for territorial representation?",
            options: ["The Senate", "The House of Representatives, which seats no territorial members", "The Committee of the Whole, which excludes Delegates from every vote", "The Electoral College, which seats three District electors"],
            correctIndex: 0,
            explanation: "There is no delegate equivalent, no committee seat and no symbolic vote in the Senate.",
            sourceLessonSlug: "a-seat-without-a-vote",
          },
          {
            prompt: "Why can Congress not fix the presidential-vote problem by statute?",
            options: ["Article II fixes both the number of electors and their source", "Because the Twenty-Third Amendment forbids Congress to legislate on electors", "Because the Supreme Court held the question to be a political one in 1901", "Because the territories have declined every offer of electoral votes"],
            correctIndex: 0,
            explanation: "That is precisely why the District's three votes required amending the Constitution rather than passing a law.",
            sourceLessonSlug: "no-electors",
          },
          {
            prompt: "What does the phrase 'even the remedy was written with a ceiling on it' refer to?",
            options: ["The Twenty-Third Amendment's cap at the least populous state", "The thirty-day congressional review period for acts of the D.C. Council", "The four-year term of the Resident Commissioner from Puerto Rico", "The automatic revote whenever a Delegate's vote proves decisive"],
            correctIndex: 0,
            explanation: "The District would be entitled to more electors on population alone, and the text forbids it.",
            sourceLessonSlug: "no-electors",
          },
          {
            prompt: "What did Article II tie the number of a state's electors to?",
            options: ["The size of its congressional delegation", "The population recorded in the most recent decennial census", "The land area of the state as surveyed at the time of admission", "The number of counties or parishes the state has organized"],
            correctIndex: 0,
            explanation: "Senators plus Representatives, which is why a place with neither has none.",
            sourceLessonSlug: "no-electors",
          },
          {
            prompt: "How many states does Puerto Rico's 2020 population exceed?",
            options: ["Twenty-one", "Five, all of them in the mountain west of the continental United States", "Thirty-four, more than two thirds of the states of the Union", "None, because every state is larger than any territory"],
            correctIndex: 0,
            explanation: "The comparison comes straight from the Census Bureau's own apportionment table, and none of those residents votes for President.",
            sourceLessonSlug: "no-electors",
          },
          {
            prompt: "Which of these best states why the Senate is absent from this section's discussion?",
            options: ["There is nothing to describe", "Because the Senate's rules on territorial representation change every Congress", "Because territorial senators serve without a vote in the same way Delegates do", "Because the Seventeenth Amendment removed territorial representation in 1913"],
            correctIndex: 0,
            explanation: "No state means no senator, and unlike the House there is not even a symbolic seat to explain.",
            sourceLessonSlug: "a-seat-without-a-vote",
          },
          {
            prompt: "What does the Home Rule Act give the District?",
            options: ["An elected Council and Mayor", "Two senators and a voting member of the House of Representatives", "Exemption from federal income tax for its bona fide residents", "The power to legislate on any subject without congressional review"],
            correctIndex: 0,
            explanation: "It also preserves the congressional review that lets a joint resolution undo any act the Council passes.",
            sourceLessonSlug: "the-district-is-different",
          },
          {
            prompt: "Which subject does D.C. Code § 1-206.02 place beyond the Council's reach because of its effect outside the District?",
            options: ["Any act not restricted exclusively in or to the District", "Any act imposing a local sales tax on retail transactions", "Any act creating a new agency of the District government", "Any act setting the salaries of District school teachers"],
            correctIndex: 0,
            explanation: "The section also names the functions or property of the United States, which is a broad limit on what local self-government can reach.",
            sourceLessonSlug: "the-district-is-different",
          },
          {
            prompt: "Which is true of building heights in the District?",
            options: ["The Council may not exceed the limits in force in 1973", "The Council sets them freely under the Home Rule Act", "They are fixed by the Twenty-Third Amendment and cannot be altered", "They are set by the Secretary of the Interior under the Territory Clause"],
            correctIndex: 0,
            explanation: "It is one of the enumerated subjects the Home Rule Act keeps out of the Council's hands.",
            sourceLessonSlug: "the-district-is-different",
          },
          {
            prompt: "How should you describe what the Committee of the Whole is?",
            options: ["The House sitting under a different set of procedures", "A standing committee with jurisdiction over territorial affairs", "A joint body of the House and Senate that considers appropriations", "A panel of Delegates that meets separately from the House itself"],
            correctIndex: 0,
            explanation: "It is the only floor setting in which a Delegate may cast a vote, and the automatic revote is what keeps that vote from deciding anything.",
            sourceLessonSlug: "a-seat-without-a-vote",
          },
          {
            prompt: "What does 'the law forbids a Delegate to vote' distinguish itself from?",
            options: ["What the House rules allow in committee", "What the Constitution requires of every member of the House", "What the Supreme Court held in Michel v. Anderson about symbolic votes", "What each territory's own organic act says about its representation"],
            correctIndex: 0,
            explanation: "The statutory bar applies to voting in the House, and the committee and Committee of the Whole privileges come from the House rules instead.",
            sourceLessonSlug: "a-seat-without-a-vote",
          },
          {
            prompt: "In which Congress was the Committee of the Whole vote most recently reinstated?",
            options: ["The 116th", "The 110th, which had reinstated it after the 104th Congress revoked it", "The 119th, which restored it after a repeal in the previous Congress", "The 103rd, which granted it for the first time in 1993"],
            correctIndex: 0,
            explanation: "It came back in 2019 after being revoked in 2011, and the two Congresses since have left it in place.",
            sourceLessonSlug: "a-seat-without-a-vote",
          },
          {
            prompt: "What should a careful reader do before relying on the Delegates' current voting rights?",
            options: ["Check the current Congress's rules package", "Consult the Insular Cases for the governing constitutional rule", "Read the organic act of the territory the Delegate represents", "Look up the Delegate's committee assignments for the session"],
            correctIndex: 0,
            explanation: "The privilege has been granted and withdrawn five times since 1993, so it is exactly the kind of value that goes stale.",
            sourceLessonSlug: "a-seat-without-a-vote",
          },
          {
            prompt: "Which of these is a fair description of what a Delegate can accomplish?",
            options: ["Shape a bill in committee and not decide it on the floor", "Cast the deciding vote on final passage when the House is narrowly divided", "Force a bill out of a hostile committee by signing a discharge petition", "Vote for the Speaker at the opening of each new Congress"],
            correctIndex: 0,
            explanation: "Committee voting rights are real legislative power, and the House floor is where the line falls.",
            sourceLessonSlug: "a-seat-without-a-vote",
          },
          {
            prompt: "Which two documents does this course rely on for the current state of the House rules?",
            options: ["The 118th Congress manual and the 119th Congress rules resolution", "The Constitution and the Supreme Court's opinion in Michel v. Anderson", "The organic acts of Guam and the Northern Mariana Islands", "The Home Rule Act and the D.C. Code's limitations section"],
            correctIndex: 0,
            explanation: "The manual supplies the rule text and history, and the resolution shows which rules the current Congress amended.",
            sourceLessonSlug: "a-seat-without-a-vote",
          },
          {
            prompt: "Why is the Puerto Rico income exclusion narrower than its usual summary?",
            options: ["Federal employment pay is expressly carved out of it", "It applies only in years when the territory runs a budget surplus", "It applies only to residents who were born on the island", "It expires automatically at the end of each ten-year period"],
            correctIndex: 0,
            explanation: "The section excludes amounts received for services performed as an employee of the United States or any agency of it.",
            sourceLessonSlug: "the-district-is-different",
          },
          {
            prompt: "Which of these does the District NOT have?",
            options: ["A senator", "An elected Mayor chosen by the residents of the District", "Three electors for President and Vice President", "A Delegate who may vote in the Committee of the Whole"],
            correctIndex: 0,
            explanation: "Article I, Section 3 composes the Senate of two senators from each State, and the District is not one.",
            sourceLessonSlug: "the-district-is-different",
          },
          {
            prompt: "Which phrase from the District Clause is quoted most often in this course?",
            options: ["Exclusive Legislation in all Cases whatsoever", "Needful Rules and Regulations respecting the Territory", "Appurtenant and belonging to the United States", "Nationals but not citizens of the United States at birth"],
            correctIndex: 0,
            explanation: "It is the language that makes the District's governance a stronger federal power than the Territory Clause supplies.",
            sourceLessonSlug: "the-district-is-different",
          },
          {
            prompt: "What is the practical result of the automatic revote rule?",
            options: ["A Delegate's vote never changes an outcome", "A Delegate's vote is counted twice in the House journal", "A Delegate's vote is recorded but not published in the Record", "A Delegate's vote may be cast only with the Speaker's permission"],
            correctIndex: 0,
            explanation: "Whenever it would have been decisive, the question is put again in the House where the Delegate cannot vote at all.",
            sourceLessonSlug: "a-seat-without-a-vote",
          },
          {
            prompt: "Which of these would require a constitutional amendment rather than a statute?",
            options: ["Giving Guam a vote for President", "Giving Guam's Delegate a vote in the Committee of the Whole", "Extending the Resident Commissioner's term to six years", "Creating a second Delegate seat for the Northern Mariana Islands"],
            correctIndex: 0,
            explanation: "Article II fixes both the number of electors and their source, which is why the District's three votes needed the Twenty-Third Amendment.",
            sourceLessonSlug: "no-electors",
          },
          {
            prompt: "Under Rule III, how are Delegates placed on standing committees?",
            options: ["They are elected to them in the same manner as Members", "They are appointed by the Speaker without a vote of the House", "They are assigned by the chair of each committee at the start of a session", "They sit ex officio on the committees with jurisdiction over their territory"],
            correctIndex: 0,
            explanation: "The rule uses the phrase in the same manner as Members, and gives them the same powers there as any other committee member.",
            sourceLessonSlug: "a-seat-without-a-vote",
          },
          {
            prompt: "What did an earlier House practice say about Delegates voting in committee?",
            options: ["They did not vote", "They voted only on questions affecting their own territory", "They voted but their votes were subject to an automatic revote", "They chaired committees but were barred from voting on any question"],
            correctIndex: 0,
            explanation: "The manual records that under an earlier practice Delegates did not vote in committee, though it notes this had not always been so.",
            sourceLessonSlug: "a-seat-without-a-vote",
          },
          {
            prompt: "Which body creates and could abolish the office of Delegate?",
            options: ["Congress", "The Supreme Court, by overruling the Insular Cases", "Each territory's own legislature, by local enactment", "The President, by executive order under the Territory Clause"],
            correctIndex: 0,
            explanation: "Each office rests on a public law, which is what makes the Delegates statutory rather than constitutional creations.",
            sourceLessonSlug: "no-electors",
          },
          {
            prompt: "What is the relationship between the Twenty-Third Amendment and the territories?",
            options: ["It applies only to the District and gives them nothing", "It gives each territory electors equal to its congressional delegation", "It gives the territories electors only in presidential election years", "It was ratified specifically to cover Puerto Rico and the District together"],
            correctIndex: 0,
            explanation: "Its text names the District constituting the seat of Government, and no parallel amendment exists for any territory.",
            sourceLessonSlug: "no-electors",
          },
          {
            prompt: "How does this course describe the District's elected government under the Home Rule Act?",
            options: ["A legislature whose laws a body it cannot vote for may undo", "A legislature with the same powers as any state legislature in the Union", "A purely advisory body whose acts require congressional approval to take effect", "A body appointed by the President with the advice and consent of the Senate"],
            correctIndex: 0,
            explanation: "The review window is thirty calendar days excluding weekends and holidays, and sixty for criminal-law amendments.",
            sourceLessonSlug: "the-district-is-different",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 5 — What the difference costs, and who decides
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "ssi-and-the-separate-channel",
      title: "17 · The separate channel, and one man's $28,081",
      section: "Section 5 · What the difference costs, and who decides",
      body: `Jose Luis Vaello Madero was born in Puerto Rico in 1954. He moved to New York in 1985. In 2012, while living there and after a serious illness, he began receiving Supplemental Security Income. About a year later he moved back to Puerto Rico, and the payments kept arriving by direct deposit.

In June 2016, approaching his sixty-second birthday, he walked into a Social Security office in Puerto Rico to apply for retirement benefits. The Administration learned where he lived. Within two months it cut his SSI to zero, backdated to August 2013, and sent him a letter explaining that he had been **"outside of the United States"** while living in Puerto Rico. In 2017 the United States sued him for the $28,081 it said he had wrongly received (Vaello Madero, 2022, Sotomayor, J., dissenting, slip op. at 3).

**Here is the statute that produced that letter.** SSI, enacted in 1972, pays a guaranteed minimum income to people over sixty-five, blind or disabled. To be eligible a person must be a "resident of the United States", and the statute defines that as **the 50 States and the District of Columbia**. A later statute added the Northern Mariana Islands. Puerto Rico was not added (Vaello Madero, 2022, slip op. at 3).

**And here is the part that should sound familiar from a completely different course in this catalog.** Congress did not simply leave Puerto Rico with nothing. It left the island on the older program SSI had replaced everywhere else: Aid to the Aged, Blind, and Disabled, a capped block grant that predates 1972. The Court's own description is that the federal government provides assistance in Puerto Rico "through a different benefits program, one that is funded in part by the Federal Government and in part by Puerto Rico" (Vaello Madero, 2022, slip op. at 3).

**A federal benefit is created. A class is excluded. A separate and smaller channel is built for the excluded class. Then the smaller channel is allowed to stay smaller.** That is the exact spine of another course here, *The Match*, which follows the same move through the land-grant statutes. If you want that mechanism taught properly, take that course. This lesson only needs you to notice that the same move appears here, and to see the size of the gap.

Justice Sotomayor put numbers on it, from the Resident Commissioner's brief:

| | Puerto Rico, AABD | The states, SSI |
| --- | --- | --- |
| People enrolled | 34,224 in 2021 | not applicable |
| Estimated eligible if SSI applied | over 300,000 (GAO estimate, 2011) | not applicable |
| Average monthly benefit | $82 | $574 in fiscal year 2020 |

(Vaello Madero, 2022, Sotomayor, J., dissenting, slip op. at 3)

**The Supreme Court held for the government, 8 to 1.** Justice Kavanaugh's opinion rests on the Territory Clause and on rational-basis review:

> "The question presented is whether the equal-protection component of the Fifth Amendment's Due Process Clause requires Congress to make Supplemental Security Income benefits available to residents of Puerto Rico to the same extent that Congress makes those benefits available to residents of the States. In light of the text of the Constitution, longstanding historical practice, and this Court's precedents, the answer is no." (Vaello Madero, 2022, slip op. at 1)

The rational basis was the tax treatment from Section 4: because residents of Puerto Rico are exempt from most federal income, gift, estate and excise taxes, Congress may likewise distinguish them for SSI (Vaello Madero, 2022, slip op. at 1). Note what that reasoning does and does not cover. It works for Puerto Rico. It does not work for the District, which pays the tax and has no exemption.

**Justice Sotomayor dissented alone:** "there is no rational basis for Congress to treat needy citizens living anywhere in the United States so differently from others" (Vaello Madero, 2022, Sotomayor, J., dissenting, slip op. at 1).

**And Justice Gorsuch concurred in the judgment while attacking the ground it stood on,** which is the concurrence Section 2 quoted at length. Both sides in the case had accepted that equal protection applies in Puerto Rico, so the Court never had to decide whether the Insular Cases were right. Gorsuch joined anyway, and wrote that he hoped the day would come soon when the Court overruled them (Vaello Madero, 2022, Gorsuch, J., concurring, slip op. at 9 to 10).

**One sentence to carry out of this lesson.** A federal agency told a United States citizen, in writing, that he was outside of the United States while standing on American soil, and the Supreme Court held that this was constitutional.

:::reveal What did the Social Security Administration tell Vaello Madero in its letter? ||| That he was outside of the United States while he was living in Puerto Rico.

:::reveal Which jurisdictions does the SSI statute define as the United States for eligibility? ||| The 50 states and the District of Columbia, with the Northern Mariana Islands added by a later statute.

:::reveal What rational basis did the Court accept for excluding Puerto Rico residents from SSI? ||| That residents of Puerto Rico are exempt from most federal income, gift, estate and excise taxes.

## Vocabulary
- **Supplemental Security Income**: the 1972 federal program paying a guaranteed minimum income to the aged, blind and disabled, funded entirely from federal funds and administered federally.
- **Aid to the Aged, Blind, and Disabled**: the older, capped, jointly funded program SSI replaced in the states and which Congress left in place in Puerto Rico.
- **Block grant**: a capped payment to a government that then sets its own eligibility rules and benefit levels, which is why the average benefit can diverge so far from SSI's.
- **Rational-basis review**: the most deferential standard of equal-protection review, under which a classification survives if any legitimate reason supports it.
- **Concurrence in the judgment**: agreeing with the outcome while rejecting the reasoning, which is what Justice Gorsuch did to the Insular Cases here.

## Sources
*United States v. Vaello Madero*, No. 20-303 (U.S. Apr. 21, 2022) (slip op.). Supreme Court of the United States. https://www.supremecourt.gov/opinions/21pdf/20-303_6khn.pdf`,
    },
    {
      slug: "promesa-and-the-board",
      title: "18 · An unelected board over an elected government",
      section: "Section 5 · What the difference costs, and who decides",
      body: `In 2016 Congress did something to Puerto Rico that it has never done to a state, and it did it in a statute whose acronym means "promise".

**PROMESA**, the Puerto Rico Oversight, Management, and Economic Stability Act, was enacted on 30 June 2016 as Public Law 114-187, 130 Stat. 550 (48 U.S.C. § 2101, n.d.). Its stated purpose is narrow: "to provide a method for a covered territory to achieve fiscal responsibility and access to capital markets" (48 U.S.C. § 2121, n.d.).

**What it created.** A Financial Oversight and Management Board of seven voting members appointed by the President. Six come from lists submitted by named congressional leaders, and the statute is explicit about what that buys:

> "With respect to the appointment of a Board member in Category A, B, C, D, or E, such an appointment shall be by and with the advice and consent of the Senate, unless the President appoints an individual from a list, as provided in this subsection, in which case no Senate confirmation is required." (48 U.S.C. § 2121, n.d.)

The seventh is at the President's discretion. And:

> "The Governor, or the Governor's designee, shall be an ex officio member of the Oversight Board without voting rights." (48 U.S.C. § 2121, n.d.)

**Read those two provisions together.** The only member of the Board the people of Puerto Rico elected is the one who cannot vote on it.

**What the Board can do.** Under 48 U.S.C. § 2141 the Governor submits a proposed Fiscal Plan on the Board's timetable, and if the Governor's plan does not meet the statute's requirements "the Oversight Board shall develop and submit to the Governor and the Legislature a Fiscal Plan" of its own (48 U.S.C. § 2141, n.d.). Budgets work the same way, and § 2142 supplies the sentence that settles who governs. When the Board develops a Territory Budget because the elected branches have not produced a compliant one, that budget is "deemed to be approved by the Governor and the Legislature" and is "in full force and effect beginning on the first day of the applicable fiscal year" (48 U.S.C. § 2142(e)(3), n.d.).

**Deemed to be approved.** An unelected body writes a budget, and the statute declares that the elected government approved it.

**The Board's status was challenged, and the challenge failed in a way that matters for this course.** In *Financial Oversight and Management Board for Puerto Rico v. Aurelius Investment, LLC*, decided 1 June 2020, creditors argued that Board members are "Officers of the United States" who must be confirmed by the Senate. Justice Breyer's opinion for the Court held otherwise: "The Board members are not 'Officers of the United States' [and] the Appointments Clause does not dictate how the Board's members must be selected", because "The Board's members have primarily local powers and duties" (Aurelius Investment, 2020). PROMESA itself says the Board is an entity within the territorial government and "shall not be considered to be a department, agency, establishment, or instrumentality of the Federal Government" (48 U.S.C. § 2121, n.d.).

**So the Board is local enough to escape the Senate and federal enough to override the legislature.** That is not a rhetorical flourish, it is the combination the statute and the holding produce together.

The Court also declined the invitation to revisit the doctrine: "We need not consider the request by some of the parties that we overrule the much-criticized 'Insular Cases' and their progeny" (Aurelius Investment, 2020).

**The case for the Board, stated fairly, because it is not nothing.** Puerto Rico entered 2016 owing debts it could not pay and with no access to municipal bankruptcy, and the reason is a definitional carve-out of exactly the kind Section 1 taught you to look for. The Bankruptcy Code says: "The term 'State' includes the District of Columbia and Puerto Rico, except for the purpose of defining who may be a debtor under chapter 9 of this title" (11 U.S.C. § 101, n.d.). A state's municipalities may restructure under chapter 9. Puerto Rico's could not. PROMESA supplied a restructuring process that did not otherwise exist, along with the oversight its drafters treated as the price of it, and people who defend the statute argue that without a federal mechanism the island's creditors would have fought it out in court while services collapsed.

**The objection, stated just as plainly.** A body that no voter in Puerto Rico chose can override the budget of a government that every voter in Puerto Rico chose, and the constitutional reason it may do so is that Puerto Rico is a territory. **Congress has never imposed this on a state, and under the Territory Clause it does not have to explain why not.**

:::reveal When was PROMESA enacted, and what is its public law number? ||| 30 June 2016, as Public Law 114-187.

:::reveal Which member of the Oversight Board is elected by the people of Puerto Rico, and what can that member do? ||| The Governor or the Governor's designee, who sits ex officio without voting rights.

:::reveal What does 48 U.S.C. § 2142(e)(3) say about a budget the Board writes itself? ||| That it is deemed to be approved by the Governor and the Legislature and is in full force and effect from the first day of the fiscal year.

## Vocabulary
- **PROMESA**: the 2016 statute creating a fiscal oversight structure for a covered territory, codified at 48 U.S.C. § 2101 and following.
- **Financial Oversight and Management Board**: the seven-member body appointed by the President that certifies fiscal plans and budgets for Puerto Rico.
- **Ex officio without voting rights**: the Governor's seat on that Board, which is presence without power and the only elected seat on it.
- **Deemed approved**: the statutory device by which a Board-written budget takes effect as though the elected government had passed it.
- **Appointments Clause**: the constitutional provision requiring Senate confirmation for Officers of the United States, which Aurelius held does not reach these Board members because their duties are primarily local.

## Sources
11 U.S.C. § 101. (n.d.). *Definitions*. Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title11-section101&num=0&edition=prelim

48 U.S.C. § 2101. (n.d.). *Short title*. Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title48-section2101&num=0&edition=prelim

48 U.S.C. § 2121. (n.d.). *Financial Oversight and Management Board*. Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title48-section2121&num=0&edition=prelim

48 U.S.C. § 2141. (n.d.). *Approval of Fiscal Plans*. Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title48-section2141&num=0&edition=prelim

48 U.S.C. § 2142. (n.d.). *Approval of Budgets*. Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title48-section2142&num=0&edition=prelim

*Financial Oversight and Management Board for Puerto Rico v. Aurelius Investment, LLC*, No. 18-1334 (U.S. June 1, 2020). Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/supremecourt/text/18-1334`,
    },
    {
      slug: "counting-the-people",
      title: "19 · Counting the people, and checking the count",
      section: "Section 5 · What the difference costs, and who decides",
      body: `Abstractions about status get concrete fast when you put a number beside them. Here are the numbers, where each comes from, and one important reason to distrust one of them.

**The 2020 Census, from the Census Bureau's own apportionment table** (U.S. Census Bureau, 2021b) and its Island Areas release (U.S. Census Bureau, 2021c):

| Jurisdiction | 2020 Census population |
| --- | --- |
| Puerto Rico | 3,285,874 |
| District of Columbia | 689,545 |
| Guam | 153,836 |
| U.S. Virgin Islands | 87,146 |
| American Samoa | 49,710 |
| Northern Mariana Islands | 47,329 |

**Now do the arithmetic yourself, because it is the point of the lesson and it takes five minutes.**

**One.** Sort the fifty states by their 2020 resident population and count how many fall below Puerto Rico's 3,285,874. The answer is **twenty-one**. Utah, at 3,271,616, is the largest of them; the smallest state above Puerto Rico is Connecticut at 3,605,944. So a jurisdiction with more people than twenty-one states has no senator, no vote on final passage in the House, and no vote for President.

**Two.** Do the same for the District's 689,545. It is larger than **two** states, Vermont at 643,077 and Wyoming at 576,851. Each of those states has two senators, a voting Representative and three electors. The District has three electors and a Delegate who may not vote on passage.

**Three.** Add the five territories and the District together: 3,285,874 plus 689,545 plus 153,836 plus 87,146 plus 49,710 plus 47,329 comes to **4,313,440**. That is more people than lived in Oregon in 2020, and larger than the population of twenty-four states.

**Four, the one that keeps the lesson honest.** The four island areas together come to 338,021, which is why the Census Bureau's own release describes them as "just under 339,000" (U.S. Census Bureau, 2021c). If your addition disagrees with a published figure, do the addition again before you assume the publisher is wrong.

**And now the caveat, which matters more than any of the totals.** In August 2022 the Census Bureau published the results of its post-enumeration survey for Puerto Rico and reported that **the 2020 Census overcounted the island's population by 5.7 percent, roughly 174,000 people** (U.S. Census Bureau, 2022). The official count is still 3,285,874, because a census count is not revised by a coverage estimate. But the Bureau's own best evidence is that the real figure was lower.

**Does that change the conclusion?** Subtract 174,000 and Puerto Rico is at roughly 3.11 million, which still exceeds nineteen states rather than twenty-one. **The argument survives the correction, and a course that did not tell you about the correction would not deserve to be believed on the parts you cannot check.**

**Three habits to take from this lesson.**

- **State the year with every population figure.** These are 2020 Census counts, published in 2021 and 2022. Puerto Rico's population fell 11.8 percent between 2010 and 2020, so a figure without a year is nearly useless here (U.S. Census Bureau, 2021a).
- **Distinguish a count from an estimate.** The decennial count is the official number. The post-enumeration survey is the Bureau's measurement of how wrong the count was. Both are real and they are not the same kind of thing.
- **Report the number that cuts against you.** The overcount is the only figure in this lesson that weakens its own argument, which is exactly why it belongs here.

:::reveal How many states had fewer residents than Puerto Rico in the 2020 Census? ||| Twenty-one, with Utah the largest of them and Connecticut the smallest state above Puerto Rico.

:::reveal What did the Census Bureau's post-enumeration survey find about Puerto Rico's 2020 count? ||| That it overcounted the population by 5.7 percent, roughly 174,000 people.

:::reveal What do the five territories and the District come to together, and how does that compare with a state? ||| 4,313,440, which is more people than lived in Oregon in 2020.

## Vocabulary
- **Decennial census**: the constitutionally required count taken every ten years, whose result is the official population and is not revised afterward.
- **Post-enumeration survey**: an independent survey the Census Bureau runs to measure how far the census over or undercounted, published separately and after the count.
- **Net coverage error**: the survey's estimate of that gap, reported for Puerto Rico as a 5.7 percent overcount for 2020.
- **Apportionment population**: the count used to distribute House seats, which includes the fifty states and excludes the District and Puerto Rico entirely.
- **Island areas**: the Census Bureau's term for American Samoa, Guam, the Northern Marianas and the Virgin Islands, which it counts separately from the fifty states and Puerto Rico.

## Sources
U.S. Census Bureau. (2021a, August 25). *Puerto Rico population declined 11.8% from 2010 to 2020*. https://www.census.gov/library/stories/state-by-state/puerto-rico.html

U.S. Census Bureau. (2021b). *Table 2. Resident population for the 50 states, the District of Columbia, and Puerto Rico: 2020 census*. https://www2.census.gov/programs-surveys/decennial/2020/data/apportionment/apportionment-2020-table02.pdf

U.S. Census Bureau. (2021c, October 28). *First 2020 Census United States island areas data released today*. https://census.gov/library/stories/2021/10/first-2020-census-united-states-island-areas-data-released-today.html

U.S. Census Bureau. (2022, August 16). *2020 post-enumeration survey results: Puerto Rico*. https://census.gov/newsroom/press-releases/2022/2020-post-enumeration-survey-results-puerto-rico.html`,
    },
    {
      slug: "quiz-what-the-difference-costs",
      title: "20 · Knowledge check: what the difference costs",
      section: "Section 5 · What the difference costs, and who decides",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What did the Social Security Administration's letter tell Jose Luis Vaello Madero?",
            options: ["That he was outside of the United States", "That he had failed to report a change of address within the required period", "That his disability no longer met the statutory definition for eligibility", "That his benefits would continue at a reduced rate under a territorial program"],
            correctIndex: 0,
            explanation: "He was living in Puerto Rico at the time, and the Court held that treating him that way was constitutional.",
            sourceLessonSlug: "ssi-and-the-separate-channel",
          },
          {
            prompt: "How much did the United States sue Vaello Madero to recover?",
            options: ["$28,081", "$659.35, the same figure disputed in the 1901 customs case about oranges", "$174,000, the size of the census overcount later reported for the island", "$82 for each month he had received benefits while resident in Puerto Rico"],
            correctIndex: 0,
            explanation: "The government sought that sum plus interest, costs and attorney's fees after backdating the termination to August 2013.",
            sourceLessonSlug: "ssi-and-the-separate-channel",
          },
          {
            prompt: "In what year was the Supplemental Security Income program enacted?",
            options: ["1972", "1935, as part of the original Social Security Act signed that year", "1996, in the welfare reform legislation of that Congress", "1917, the same year Puerto Ricans were granted United States citizenship"],
            correctIndex: 0,
            explanation: "It replaced the older joint federal and state programs in the states and left Puerto Rico on the program it replaced.",
            sourceLessonSlug: "ssi-and-the-separate-channel",
          },
          {
            prompt: "How does the SSI statute define a 'resident of the United States'?",
            options: ["The 50 States and the District of Columbia", "Every place under United States sovereignty, including the outlying possessions", "The 50 States, the District of Columbia and every organized territory", "Any place whose residents pay federal income tax on locally earned income"],
            correctIndex: 0,
            explanation: "A later statute added the Northern Mariana Islands, and Puerto Rico was never added.",
            sourceLessonSlug: "ssi-and-the-separate-channel",
          },
          {
            prompt: "Which territory was later added to the SSI program by statute?",
            options: ["The Northern Mariana Islands", "Puerto Rico, in the same legislation that created the oversight board", "Guam, at the same time its residents were made citizens in 1950", "American Samoa, whose residents are nationals rather than citizens"],
            correctIndex: 0,
            explanation: "The Court noted the addition in a note following 48 U.S.C. § 1801, which is why the exclusion is not simply a rule about territories.",
            sourceLessonSlug: "ssi-and-the-separate-channel",
          },
          {
            prompt: "What program did Congress leave in place in Puerto Rico instead of SSI?",
            options: ["Aid to the Aged, Blind, and Disabled", "Temporary Assistance for Needy Families, funded by an annual block grant", "The Nutrition Assistance Program administered by the territorial government", "Social Security retirement insurance, which Puerto Rico residents already received"],
            correctIndex: 0,
            explanation: "It is the older, capped, jointly funded program that SSI had replaced everywhere else in 1972.",
            sourceLessonSlug: "ssi-and-the-separate-channel",
          },
          {
            prompt: "How did the Supreme Court describe the assistance available in Puerto Rico?",
            options: ["A different program funded in part federally and in part by Puerto Rico", "An identical program administered by the territorial government under contract", "A temporary substitute that Congress intended to replace within five years", "A program with no federal funding at all beyond administrative support"],
            correctIndex: 0,
            explanation: "That description is the shape of a separate and smaller channel built for an excluded class.",
            sourceLessonSlug: "ssi-and-the-separate-channel",
          },
          {
            prompt: "Which other course in this catalog teaches the same underlying mechanism?",
            options: ["The Match", "Tribal Nations and the Government-to-Government Relationship", "State versus Federal Power and the Division of Authority", "How a Bill Becomes Law in the Federal Congress"],
            correctIndex: 0,
            explanation: "It follows the same move through the land-grant statutes: a benefit created, a class excluded, a smaller channel built and then left smaller.",
            sourceLessonSlug: "ssi-and-the-separate-channel",
          },
          {
            prompt: "What was the average monthly AABD benefit in Puerto Rico in 2021, according to the dissent?",
            options: ["$82", "$574, the same figure the average SSI recipient received nationally", "$733, the low end of the payments Vaello Madero had been receiving", "$1,382, the amount a two-person household would have received in a state"],
            correctIndex: 0,
            explanation: "The comparison figure was $574 for the average SSI recipient in fiscal year 2020, which is the gap the dissent was pointing at.",
            sourceLessonSlug: "ssi-and-the-separate-channel",
          },
          {
            prompt: "How many Puerto Rico residents were enrolled in AABD in 2021?",
            options: ["34,224", "over 300,000, the number a federal agency estimated would qualify for SSI", "3,285,874, the island's total population in the 2020 Census", "153,836, the population recorded for the territory of Guam"],
            correctIndex: 0,
            explanation: "A 2011 estimate put the number who would have qualified for SSI at over 300,000, which is roughly nine times as many.",
            sourceLessonSlug: "ssi-and-the-separate-channel",
          },
          {
            prompt: "How did the Supreme Court answer the question presented in Vaello Madero?",
            options: ["No", "Yes, and it ordered SSI extended to residents of Puerto Rico", "It declined to answer and dismissed the case as improvidently granted", "It held that the question was committed to the political branches and unreviewable"],
            correctIndex: 0,
            explanation: "The Court said the equal-protection component of the Fifth Amendment does not require Congress to extend SSI to residents of Puerto Rico.",
            sourceLessonSlug: "ssi-and-the-separate-channel",
          },
          {
            prompt: "What rational basis did the Court accept for the exclusion?",
            options: ["Puerto Rico residents are exempt from most federal taxes", "Puerto Rico has its own constitution approved by Congress in 1952", "Puerto Rico elects a Resident Commissioner rather than a voting Representative", "Puerto Rico had entered a fiscal crisis that made federal payments impractical"],
            correctIndex: 0,
            explanation: "The opinion names income, gift, estate and excise taxes, and that reasoning has no application to the District of Columbia.",
            sourceLessonSlug: "ssi-and-the-separate-channel",
          },
          {
            prompt: "Why does the Vaello Madero tax rationale not extend to the District of Columbia?",
            options: ["District residents pay federal income tax with no exemption", "The District was expressly excluded from the Court's holding in that case", "The District is governed under Article IV rather than under Article I", "District residents already receive SSI under a separate territorial program"],
            correctIndex: 0,
            explanation: "26 U.S.C. § 933 covers Puerto Rico source income and no equivalent provision exists for the District.",
            sourceLessonSlug: "ssi-and-the-separate-channel",
          },
          {
            prompt: "Which justice dissented in Vaello Madero?",
            options: ["Justice Sotomayor", "Justice Gorsuch, who would have overruled the Insular Cases outright", "Justice Kavanaugh, who wrote separately from the Court's opinion", "Justice Thomas, who concurred only in the judgment of the Court"],
            correctIndex: 0,
            explanation: "She wrote that there is no rational basis for treating needy citizens living anywhere in the United States so differently from others.",
            sourceLessonSlug: "ssi-and-the-separate-channel",
          },
          {
            prompt: "Why did the Court in Vaello Madero not have to decide whether the Insular Cases were right?",
            options: ["Both sides accepted that equal protection applies in Puerto Rico", "The parties had settled the constitutional claim before oral argument", "The lower court had already overruled the Insular Cases in its opinion", "Congress had repealed the statutory basis for the doctrine in 2016"],
            correctIndex: 0,
            explanation: "That shared premise is why Justice Gorsuch joined the Court's opinion while urging that the cases be overruled in an appropriate case.",
            sourceLessonSlug: "ssi-and-the-separate-channel",
          },
          {
            prompt: "What is rational-basis review?",
            options: ["The most deferential standard of equal-protection review", "A rule requiring the government to prove a compelling interest for a classification", "A standard applied only to classifications drawn on the basis of race", "A procedural test for deciding whether a court has jurisdiction over a claim"],
            correctIndex: 0,
            explanation: "A classification survives if any legitimate reason supports it, which is why the tax argument was enough for the majority.",
            sourceLessonSlug: "ssi-and-the-separate-channel",
          },
          {
            prompt: "What is a block grant, in the AABD context?",
            options: ["A capped payment to a government that sets its own benefit levels", "A federal payment matched dollar for dollar by the receiving jurisdiction", "A competitive award made to the applicant with the strongest proposal", "A direct payment from the federal treasury to an individual beneficiary"],
            correctIndex: 0,
            explanation: "The cap and the local rule-setting are why the average benefit can diverge so far from SSI's uniform federal payment.",
            sourceLessonSlug: "ssi-and-the-separate-channel",
          },
          {
            prompt: "What does PROMESA stand for?",
            options: ["The Puerto Rico Oversight, Management, and Economic Stability Act", "The Public Reorganization of Municipal Emergency Systems Act", "The Program for Restructuring Obligations of Municipalities and States Act", "The Puerto Rico Municipal Economic Security and Assistance Act"],
            correctIndex: 0,
            explanation: "It was enacted on 30 June 2016 as Public Law 114-187 and is codified at 48 U.S.C. § 2101 and following.",
            sourceLessonSlug: "promesa-and-the-board",
          },
          {
            prompt: "When was PROMESA enacted?",
            options: ["30 June 2016", "24 March 1976, when Congress approved the Northern Marianas Covenant", "2 March 1917, the same date the Resident Commissioner's term was set", "1 June 2020, the day the Supreme Court decided the Aurelius case"],
            correctIndex: 0,
            explanation: "The source credit reads Public Law 114-187, 130 Stat. 550.",
            sourceLessonSlug: "promesa-and-the-board",
          },
          {
            prompt: "What is the stated purpose of the Oversight Board under 48 U.S.C. § 2121?",
            options: ["Fiscal responsibility and access to capital markets", "The eventual admission of the territory to the Union as a state", "The transfer of the territory's debts to the federal treasury", "The supervision of elections and the certification of their results"],
            correctIndex: 0,
            explanation: "The statute's purpose clause is narrow, which is part of why the Court treated the Board's duties as primarily local.",
            sourceLessonSlug: "promesa-and-the-board",
          },
          {
            prompt: "How many voting members does the Oversight Board have?",
            options: ["Seven", "Nine, of whom three must be residents of Puerto Rico", "Five, appointed for staggered terms of six years each", "Eleven, including the Governor and the Resident Commissioner"],
            correctIndex: 0,
            explanation: "All seven are appointed by the President, six of them from lists submitted by named congressional leaders.",
            sourceLessonSlug: "promesa-and-the-board",
          },
          {
            prompt: "When is Senate confirmation NOT required for an Oversight Board member?",
            options: ["When the President appoints from a submitted list", "When the appointee is a resident of Puerto Rico at the time of appointment", "When the appointment is made during a recess of the Senate", "When the Governor of Puerto Rico consents to the appointment in writing"],
            correctIndex: 0,
            explanation: "The statute says such an appointment requires advice and consent unless the President appoints an individual from a list, in which case no confirmation is required.",
            sourceLessonSlug: "promesa-and-the-board",
          },
          {
            prompt: "What is the Governor of Puerto Rico's position on the Oversight Board?",
            options: ["An ex officio member without voting rights", "The chair of the Board, with a casting vote in the event of a tie", "A voting member appointed for the duration of the Governor's term", "Excluded entirely, with no seat or standing before the Board"],
            correctIndex: 0,
            explanation: "The only member the people of Puerto Rico elected is the one who cannot vote on it.",
            sourceLessonSlug: "promesa-and-the-board",
          },
          {
            prompt: "Under 48 U.S.C. § 2141, what happens if the Governor's Fiscal Plan does not meet the statute's requirements?",
            options: ["The Board develops and submits a Fiscal Plan of its own", "The territory reverts to the previous year's plan until a new one is agreed", "The Secretary of the Treasury appoints a receiver for the territory's finances", "The plan takes effect anyway and the Board may object within thirty days"],
            correctIndex: 0,
            explanation: "The Board submits its plan to the Governor and the Legislature, which is the first half of the mechanism.",
            sourceLessonSlug: "promesa-and-the-board",
          },
          {
            prompt: "What does 48 U.S.C. § 2142(e)(3) say about a Territory Budget the Board develops?",
            options: ["It is deemed to be approved by the Governor and the Legislature", "It must be ratified by the territorial legislature within sixty days", "It takes effect only if Congress passes a joint resolution approving it", "It applies only to the portion of the budget funded by federal grants"],
            correctIndex: 0,
            explanation: "It is also in full force and effect beginning on the first day of the applicable fiscal year.",
            sourceLessonSlug: "promesa-and-the-board",
          },
          {
            prompt: "What is striking about the phrase 'deemed to be approved'?",
            options: ["An unelected body writes it and the statute says the elected one approved it", "It requires the Governor to sign the budget before it can take effect", "It gives the Legislature a further year to amend the Board's figures", "It applies only in a fiscal year when the territory is in default"],
            correctIndex: 0,
            explanation: "The device removes the elected branches from a decision while recording their approval of it.",
            sourceLessonSlug: "promesa-and-the-board",
          },
          {
            prompt: "What did the creditors argue in the Aurelius case?",
            options: ["That Board members are Officers of the United States needing confirmation", "That PROMESA violated the Contracts Clause of Article I of the Constitution", "That the Territory Clause does not authorize any federal oversight body", "That the Board had exceeded its statutory authority in certifying a fiscal plan"],
            correctIndex: 0,
            explanation: "The claim was under the Appointments Clause, and it failed because the Court found the Board's duties primarily local.",
            sourceLessonSlug: "promesa-and-the-board",
          },
          {
            prompt: "How did the Supreme Court rule in Aurelius?",
            options: ["Board members are not Officers of the United States", "Board members must be confirmed by the Senate before taking office", "The Board is unconstitutional and its certifications are void", "The question is nonjusticiable and belongs to Congress alone"],
            correctIndex: 0,
            explanation: "Justice Breyer wrote that the Appointments Clause does not dictate how the Board's members must be selected.",
            sourceLessonSlug: "promesa-and-the-board",
          },
          {
            prompt: "What reasoning did the Court give for that conclusion?",
            options: ["The Board's members have primarily local powers and duties", "The Board's members serve without compensation from the federal treasury", "The Board was created by the territory's own legislature rather than Congress", "The Board's decisions are always subject to review in the federal courts"],
            correctIndex: 0,
            explanation: "PROMESA itself says the Board is an entity within the territorial government and not a federal department, agency or instrumentality.",
            sourceLessonSlug: "promesa-and-the-board",
          },
          {
            prompt: "What does this course call the combination the statute and the holding produce?",
            options: ["Local enough to escape the Senate, federal enough to override the legislature", "A body with no real power over the territory's elected institutions", "A temporary arrangement that expires when the territory balances its budget", "An advisory panel whose recommendations the Governor may accept or reject"],
            correctIndex: 0,
            explanation: "The escape from the Appointments Clause rests on locality, and the override of the budget rests on the statute.",
            sourceLessonSlug: "promesa-and-the-board",
          },
          {
            prompt: "What did the Court say in Aurelius about the Insular Cases?",
            options: ["It need not consider the request to overrule them", "It overruled them and directed lower courts to disregard their reasoning", "It reaffirmed them as the governing law of the unincorporated territories", "It extended them for the first time to questions of federal appointments"],
            correctIndex: 0,
            explanation: "The same opinion added that whatever their continued validity it would not extend them in those cases.",
            sourceLessonSlug: "promesa-and-the-board",
          },
          {
            prompt: "Why could Puerto Rico's municipalities not use chapter 9 bankruptcy?",
            options: ["The Bankruptcy Code's definition of State carves Puerto Rico out", "Because the territory had never enacted a local municipal insolvency statute", "Because PROMESA repealed chapter 9 for every territory in 2016", "Because the Supreme Court held the territory ineligible in the Aurelius case"],
            correctIndex: 0,
            explanation: "11 U.S.C. § 101 says State includes the District of Columbia and Puerto Rico except for the purpose of defining who may be a debtor under chapter 9.",
            sourceLessonSlug: "promesa-and-the-board",
          },
          {
            prompt: "What kind of provision is the chapter 9 exclusion, in this course's terms?",
            options: ["A definitional carve-out", "A constitutional limitation arising from the Territory Clause", "A judicial doctrine developed in the Insular Cases after 1901", "A treaty obligation carried over from the 1898 peace settlement"],
            correctIndex: 0,
            explanation: "It is exactly the shape Section 1 taught: a statute defines a term for its own purposes and a territory falls outside it.",
            sourceLessonSlug: "promesa-and-the-board",
          },
          {
            prompt: "What is the case for the Oversight Board, as this course states it?",
            options: ["It supplied a restructuring process that did not otherwise exist", "It guaranteed the territory's debts with the full faith and credit of the United States", "It replaced an elected government that had been found guilty of fraud", "It was requested by a referendum of Puerto Rico's voters in 2016"],
            correctIndex: 0,
            explanation: "Defenders argue that without a federal mechanism creditors would have fought it out in court while services collapsed.",
            sourceLessonSlug: "promesa-and-the-board",
          },
          {
            prompt: "What is the objection to the Oversight Board, as this course states it?",
            options: ["A body no voter chose can override a government every voter chose", "The Board's members are paid more than the elected officials they supervise", "The Board has no authority to certify a fiscal plan under the Territory Clause", "The Board must obtain the Governor's consent before acting on any budget"],
            correctIndex: 0,
            explanation: "The constitutional reason it may do so is that Puerto Rico is a territory, and Congress has never imposed the arrangement on a state.",
            sourceLessonSlug: "promesa-and-the-board",
          },
          {
            prompt: "What was Puerto Rico's population in the 2020 Census?",
            options: ["3,285,874", "3,111,874, the figure after adjusting for the reported overcount", "3,725,789, the figure recorded in the 2010 Census", "4,313,440, the combined total for the territories and the District"],
            correctIndex: 0,
            explanation: "It is the official count and it is not revised by the Bureau's later coverage estimate.",
            sourceLessonSlug: "counting-the-people",
          },
          {
            prompt: "What was the District of Columbia's population in the 2020 Census?",
            options: ["689,545", "576,851, the figure recorded for the state of Wyoming", "643,077, the figure recorded for the state of Vermont", "733,391, the figure recorded for the state of Alaska"],
            correctIndex: 0,
            explanation: "That is larger than two states, each of which has two senators, a voting Representative and three electors.",
            sourceLessonSlug: "counting-the-people",
          },
          {
            prompt: "Which two states had fewer residents than the District in 2020?",
            options: ["Vermont and Wyoming", "Alaska and North Dakota, the two smallest states in the northern tier", "Wyoming and Alaska, the two least densely populated states in the Union", "South Dakota and Delaware, at 886,667 and 989,948 respectively"],
            correctIndex: 0,
            explanation: "Vermont counted 643,077 and Wyoming 576,851, against the District's 689,545.",
            sourceLessonSlug: "counting-the-people",
          },
          {
            prompt: "How many states had fewer residents than Puerto Rico in 2020?",
            options: ["Twenty-one", "Nineteen, the figure that results after adjusting for the census overcount", "Twenty-four, the number smaller than the combined territorial population", "Two, the same number that fall below the District of Columbia"],
            correctIndex: 0,
            explanation: "Utah at 3,271,616 is the largest of them and Connecticut at 3,605,944 is the smallest state above Puerto Rico.",
            sourceLessonSlug: "counting-the-people",
          },
          {
            prompt: "What was Guam's population in the 2020 Census?",
            options: ["153,836", "87,146, the figure recorded for the United States Virgin Islands", "49,710, the figure recorded for American Samoa", "47,329, the figure recorded for the Northern Mariana Islands"],
            correctIndex: 0,
            explanation: "It is the largest of the four island areas the Census Bureau counts separately from the states and Puerto Rico.",
            sourceLessonSlug: "counting-the-people",
          },
          {
            prompt: "What was American Samoa's population in the 2020 Census?",
            options: ["49,710", "47,329, the figure recorded for the Northern Mariana Islands", "87,146, the figure recorded for the United States Virgin Islands", "153,836, the figure recorded for the territory of Guam"],
            correctIndex: 0,
            explanation: "It is the place whose residents are nationals rather than citizens at birth, which is Section 3's subject.",
            sourceLessonSlug: "counting-the-people",
          },
          {
            prompt: "What do the four island areas total in the 2020 Census?",
            options: ["338,021", "4,313,440, the total for the territories and the District combined", "689,545, the same figure recorded for the District of Columbia", "3,285,874, the same figure recorded for Puerto Rico alone"],
            correctIndex: 0,
            explanation: "The Census Bureau's own release describes the combined figure as just under 339,000, which is a useful check on your addition.",
            sourceLessonSlug: "counting-the-people",
          },
          {
            prompt: "What do the five territories and the District come to together?",
            options: ["4,313,440", "3,285,874, which is Puerto Rico's share of the total", "338,021, which is the four island areas added together", "4,237,256, which is the 2020 population of the state of Oregon"],
            correctIndex: 0,
            explanation: "That is more people than lived in Oregon in 2020 and larger than the population of twenty-four states.",
            sourceLessonSlug: "counting-the-people",
          },
          {
            prompt: "Which state does the combined territorial and District population exceed?",
            options: ["Oregon", "Kentucky, which counted 4,505,836 residents in the 2020 Census", "Louisiana, which counted 4,657,757 residents in the 2020 Census", "South Carolina, which counted 5,118,425 residents in the 2020 Census"],
            correctIndex: 0,
            explanation: "Oregon counted 4,237,256, which is below the combined figure of 4,313,440.",
            sourceLessonSlug: "counting-the-people",
          },
          {
            prompt: "What did the Census Bureau's post-enumeration survey report for Puerto Rico?",
            options: ["A 5.7 percent overcount, roughly 174,000 people", "A 5.7 percent undercount, meaning the true population was higher", "That the count was accurate within the survey's margin of error", "That no post-enumeration survey was conducted for the island"],
            correctIndex: 0,
            explanation: "It was released on 16 August 2022, and the official count was not revised because a coverage estimate does not change a census count.",
            sourceLessonSlug: "counting-the-people",
          },
          {
            prompt: "Does the reported overcount change this course's argument?",
            options: ["No, Puerto Rico still exceeds nineteen states", "Yes, Puerto Rico falls below every state once the adjustment is made", "Yes, because the official count is revised downward by the Bureau", "No, because the Bureau withdrew the survey result the following year"],
            correctIndex: 0,
            explanation: "Roughly 3.11 million still exceeds nineteen states rather than twenty-one, and the course reports the correction anyway.",
            sourceLessonSlug: "counting-the-people",
          },
          {
            prompt: "Why does this lesson report a figure that weakens its own argument?",
            options: ["Because a course that hid it would not deserve to be believed elsewhere", "Because the Census Bureau requires the disclosure in any republication", "Because the overcount makes the comparison with the states more favorable", "Because the official count has been formally withdrawn and replaced"],
            correctIndex: 0,
            explanation: "The overcount is the only figure in the lesson that cuts against its conclusion, which is exactly why it belongs there.",
            sourceLessonSlug: "counting-the-people",
          },
          {
            prompt: "What is the difference between a census count and a post-enumeration survey?",
            options: ["One is the official number and the other measures how wrong it was", "One is taken every ten years and the other is taken every five", "One covers the states and the other covers the territories only", "One is conducted by the Census Bureau and the other by the Congress"],
            correctIndex: 0,
            explanation: "Both are real and they are not the same kind of thing, which is why the official figure stands while the coverage estimate exists.",
            sourceLessonSlug: "counting-the-people",
          },
          {
            prompt: "By how much did Puerto Rico's population change between 2010 and 2020?",
            options: ["It fell 11.8 percent", "It rose 11.8 percent, the fastest growth of any United States jurisdiction", "It fell 5.7 percent, the same figure as the reported census overcount", "It remained within one percent of its 2010 level throughout the decade"],
            correctIndex: 0,
            explanation: "That is why a population figure for this island without a year attached is nearly useless.",
            sourceLessonSlug: "counting-the-people",
          },
          {
            prompt: "Which jurisdictions does the 2020 apportionment population exclude?",
            options: ["The District of Columbia and Puerto Rico", "The four island areas, which the Bureau counts in a separate release", "Alaska and Hawaii, which are counted separately from the continental states", "Every jurisdiction that does not elect a voting member of the House"],
            correctIndex: 0,
            explanation: "Apportionment distributes House seats among the fifty states, so neither has any share in it.",
            sourceLessonSlug: "counting-the-people",
          },
          {
            prompt: "What habit does this lesson recommend for every population figure?",
            options: ["State the year", "Round to the nearest ten thousand to avoid a false sense of precision", "Use an estimate rather than a count wherever one is available", "Cite the highest published figure so the comparison is conservative"],
            correctIndex: 0,
            explanation: "These are 2020 Census counts published in 2021 and 2022, and the island's population moved 11.8 percent in the preceding decade.",
            sourceLessonSlug: "counting-the-people",
          },
          {
            prompt: "What should you do if your own addition disagrees with a published total?",
            options: ["Do the addition again before assuming the publisher is wrong", "Publish your figure and note the discrepancy without resolving it", "Adopt the published figure without checking your own arithmetic", "Discard both figures as unreliable and use an estimate instead"],
            correctIndex: 0,
            explanation: "The four island areas sum to 338,021, which is what the Bureau means by just under 339,000.",
            sourceLessonSlug: "counting-the-people",
          },
          {
            prompt: "What is 'net coverage error'?",
            options: ["The survey's estimate of how far a census over or undercounted", "The number of households that failed to return a census form", "The margin by which an apportionment calculation may be adjusted", "The difference between a decennial count and the following year's estimate"],
            correctIndex: 0,
            explanation: "For Puerto Rico in 2020 the Bureau reported it as a 5.7 percent overcount.",
            sourceLessonSlug: "counting-the-people",
          },
          {
            prompt: "Which of these is the correct order of the territories by 2020 population, largest first?",
            options: ["Puerto Rico, Guam, the Virgin Islands, American Samoa, the Northern Marianas", "Puerto Rico, the Virgin Islands, Guam, the Northern Marianas, American Samoa", "Guam, Puerto Rico, American Samoa, the Virgin Islands, the Northern Marianas", "Puerto Rico, Guam, American Samoa, the Northern Marianas, the Virgin Islands"],
            correctIndex: 0,
            explanation: "3,285,874 then 153,836 then 87,146 then 49,710 then 47,329, with American Samoa just ahead of the Northern Marianas.",
            sourceLessonSlug: "counting-the-people",
          },
          {
            prompt: "What did the Aurelius Court say PROMESA itself provides about the Board's status?",
            options: ["It is an entity within the territorial government", "It is an independent agency of the federal executive branch", "It is a court of the United States established under Article III", "It is a joint body of Congress and the territorial legislature"],
            correctIndex: 0,
            explanation: "The statute adds that the Board shall not be considered a department, agency, establishment or instrumentality of the Federal Government.",
            sourceLessonSlug: "promesa-and-the-board",
          },
          {
            prompt: "Which body appoints every member of the Oversight Board?",
            options: ["The President", "The Governor of Puerto Rico, from lists supplied by the legislature", "The Senate, by a two-thirds vote of the members present", "The Secretary of the Treasury, acting under the Territory Clause"],
            correctIndex: 0,
            explanation: "Six come from lists submitted by named congressional leaders and one is at the President's discretion.",
            sourceLessonSlug: "promesa-and-the-board",
          },
          {
            prompt: "What is the Appointments Clause?",
            options: ["The provision requiring Senate confirmation for Officers of the United States", "The provision authorizing Congress to make needful rules for the territories", "The provision giving the President power to fill vacancies during a recess", "The provision requiring that all federal officers be citizens at birth"],
            correctIndex: 0,
            explanation: "Aurelius held it does not reach these Board members, because their powers and duties are primarily local.",
            sourceLessonSlug: "promesa-and-the-board",
          },
          {
            prompt: "What did the Court decline to do in Aurelius, at some parties' request?",
            options: ["Overrule the Insular Cases", "Strike down PROMESA as beyond the Territory Clause power", "Order the Board's members submitted for Senate confirmation", "Extend chapter 9 bankruptcy eligibility to Puerto Rico's municipalities"],
            correctIndex: 0,
            explanation: "It said it need not consider the request and would not extend those much-criticized cases in any event.",
            sourceLessonSlug: "promesa-and-the-board",
          },
          {
            prompt: "Which of these has Congress never done to a state?",
            options: ["Placed an unelected board over its budget", "Required it to match federal research funds dollar for dollar", "Excluded it from a federal benefits program by statutory definition", "Reviewed and disapproved an act of its legislature within thirty days"],
            correctIndex: 0,
            explanation: "The constitutional reason it may do so for Puerto Rico is the Territory Clause, and under that clause it need not explain the difference.",
            sourceLessonSlug: "promesa-and-the-board",
          },
          {
            prompt: "What is the one sentence this course asks you to carry out of the SSI lesson?",
            options: ["A citizen was told in writing he was outside the United States, constitutionally", "A citizen was denied benefits because he had failed to file a change of address", "A citizen recovered his benefits after the Supreme Court ruled in his favor", "A citizen was made a national rather than a citizen by an act of Congress"],
            correctIndex: 0,
            explanation: "He was standing on American soil in Puerto Rico when the agency wrote it, and the Court held the exclusion constitutional.",
            sourceLessonSlug: "ssi-and-the-separate-channel",
          },
          {
            prompt: "How does the SSI exclusion resemble the mechanism in The Match?",
            options: ["A benefit is created, a class excluded, a smaller channel built and left smaller", "A federal grant is offered and the recipient declines to accept the conditions", "A court invents a doctrine and Congress codifies it in a later statute", "A territory is admitted to a definition and then removed from it by amendment"],
            correctIndex: 0,
            explanation: "SSI in 1972 for the states and the District, AABD left in place in Puerto Rico, at $82 against $574 a month.",
            sourceLessonSlug: "ssi-and-the-separate-channel",
          },
          {
            prompt: "Why does this course say the SSI material is evidence rather than its spine?",
            options: ["Its argument stands even with every dollar figure removed", "Because the Supreme Court decided the case on statutory rather than constitutional grounds", "Because the figures come from a brief rather than from an agency report", "Because Congress has since extended SSI to residents of Puerto Rico"],
            correctIndex: 0,
            explanation: "The course's mechanism is a doctrine about status, and the benefits gap is one consequence of it rather than its cause.",
            sourceLessonSlug: "ssi-and-the-separate-channel",
          },
          {
            prompt: "Which court decided the Aurelius case, and when?",
            options: ["The Supreme Court, on 1 June 2020", "The First Circuit, on 15 February 2019, in the decision that was appealed", "The Tenth Circuit, on 15 June 2021, in the same term as Fitisemanu", "The Supreme Court, on 21 April 2022, alongside Vaello Madero"],
            correctIndex: 0,
            explanation: "Justice Breyer wrote for the Court, reversing and remanding the First Circuit's judgment.",
            sourceLessonSlug: "promesa-and-the-board",
          },
          {
            prompt: "What does 'ex officio without voting rights' mean in practice on this Board?",
            options: ["Presence without power", "A vote that counts only when the Board is otherwise evenly divided", "A right to attend meetings only when invited by the Board's chair", "A seat that rotates annually among the territory's elected officials"],
            correctIndex: 0,
            explanation: "It is the Governor's seat, and it is the only elected seat on a body that can override the Governor's budget.",
            sourceLessonSlug: "promesa-and-the-board",
          },
          {
            prompt: "Which statute section supplies the Board's power over budgets?",
            options: ["48 U.S.C. § 2142", "48 U.S.C. § 2121, which establishes the Board and its membership", "48 U.S.C. § 2101, which contains the statute's short title", "11 U.S.C. § 101, which defines State for the Bankruptcy Code"],
            correctIndex: 0,
            explanation: "Section 2141 covers fiscal plans and § 2142 covers budgets, including the deemed-approval provision.",
            sourceLessonSlug: "promesa-and-the-board",
          },
          {
            prompt: "Which of these best describes what the Vaello Madero majority relied on?",
            options: ["The Territory Clause and rational-basis review", "The Citizenship Clause of the Fourteenth Amendment", "The Appointments Clause and the separation of powers", "The Uniformity Clause of Article I, Section 8"],
            correctIndex: 0,
            explanation: "The opinion cites the text of the Constitution, longstanding historical practice and the Court's precedents.",
            sourceLessonSlug: "ssi-and-the-separate-channel",
          },
          {
            prompt: "Which figure in the SSI comparison came from a 2011 federal estimate?",
            options: ["The number who would have qualified for SSI in Puerto Rico", "The average monthly AABD benefit paid on the island", "The number actually enrolled in AABD in the year 2021", "The average monthly SSI benefit paid in fiscal year 2020"],
            correctIndex: 0,
            explanation: "The estimate was over 300,000, against 34,224 actually enrolled a decade later.",
            sourceLessonSlug: "ssi-and-the-separate-channel",
          },
          {
            prompt: "What happened to Vaello Madero's benefits after the agency learned where he lived?",
            options: ["They were cut to zero and backdated to 2013", "They were reduced to the territorial AABD rate of $82 a month", "They continued until the Supreme Court decided the case in 2022", "They were suspended pending an appeal to an administrative law judge"],
            correctIndex: 0,
            explanation: "The retroactive termination is what produced the $28,081 the government later sued to recover.",
            sourceLessonSlug: "ssi-and-the-separate-channel",
          },
          {
            prompt: "In what year did Vaello Madero begin receiving SSI, and where?",
            options: ["2012, in New York", "1985, in New York, immediately after he moved there from the island", "2013, in Puerto Rico, after he had returned to live there", "2016, in Puerto Rico, when he applied for retirement benefits"],
            correctIndex: 0,
            explanation: "He was living in New York and had suffered a serious illness, and he moved back to Puerto Rico about a year later.",
            sourceLessonSlug: "ssi-and-the-separate-channel",
          },
          {
            prompt: "What makes the SSI definition of the United States notable in this course?",
            options: ["It is another statute drawing its own list of places", "It is the only federal statute that uses a geographic definition at all", "It follows the Constitution's own definition of the United States", "It was written by the Social Security Administration rather than Congress"],
            correctIndex: 0,
            explanation: "The Hatch Act, the immigration statutes, the Bankruptcy Code and SSI each draw a different list, which is the pattern this course tracks.",
            sourceLessonSlug: "ssi-and-the-separate-channel",
          },
          {
            prompt: "Which of these is a fair way to describe PROMESA's acronym against its content?",
            options: ["The acronym means promise and the statute creates an oversight board", "The acronym is drawn from the Spanish name of the territory's legislature", "The acronym was chosen by the government of Puerto Rico in 2016", "The acronym refers to the promise of eventual statehood for the island"],
            correctIndex: 0,
            explanation: "The full title is the Puerto Rico Oversight, Management, and Economic Stability Act, enacted as Public Law 114-187.",
            sourceLessonSlug: "promesa-and-the-board",
          },
          {
            prompt: "Which section of the Bankruptcy Code contains the carve-out that mattered here?",
            options: ["11 U.S.C. § 101", "48 U.S.C. § 2121, which establishes the Oversight Board", "26 U.S.C. § 933, which exempts Puerto Rico source income", "7 U.S.C. § 361a, which defines State for the Hatch Act"],
            correctIndex: 0,
            explanation: "Its definition of State includes Puerto Rico except for the purpose of defining who may be a debtor under chapter 9.",
            sourceLessonSlug: "promesa-and-the-board",
          },
          {
            prompt: "What is the honest summary of the Board debate this course offers?",
            options: ["A real problem, a real remedy, and a real democratic cost", "A manufactured crisis with no basis in the territory's actual finances", "A settled question that the Supreme Court resolved in 2020 for good", "A dispute about accounting standards rather than about self-government"],
            correctIndex: 0,
            explanation: "The debt and the bankruptcy exclusion were real, and so is the fact that no voter in Puerto Rico chose the body that can override its budget.",
            sourceLessonSlug: "promesa-and-the-board",
          },
          {
            prompt: "How many of the Oversight Board's seven members come from congressional lists?",
            options: ["Six", "All seven, with no discretion left to the President at all", "Three, with the remaining four confirmed by the Senate in the usual way", "None, because the President selects every member without any list"],
            correctIndex: 0,
            explanation: "The seventh is at the President's discretion, and appointing from a list is what removes the need for Senate confirmation.",
            sourceLessonSlug: "promesa-and-the-board",
          },
          {
            prompt: "What happens to a Board-developed budget on the first day of the fiscal year?",
            options: ["It is in full force and effect", "It goes to the Legislature for a ratifying vote within thirty days", "It takes effect only for the portion of spending funded federally", "It lapses unless the Governor signs it before the year begins"],
            correctIndex: 0,
            explanation: "The statute pairs that with the deeming provision, so the budget both takes effect and counts as approved by the elected branches.",
            sourceLessonSlug: "promesa-and-the-board",
          },
          {
            prompt: "Which of these figures is an official count rather than an estimate?",
            options: ["Puerto Rico's 3,285,874 in the 2020 Census", "The 5.7 percent net coverage error reported in 2022", "The 174,000 people the coverage estimate covers", "The over 300,000 Puerto Rico residents who would have qualified for SSI"],
            correctIndex: 0,
            explanation: "A census count is the official number and a coverage estimate measures how wrong it was without replacing it.",
            sourceLessonSlug: "counting-the-people",
          },
          {
            prompt: "Which state is the largest of those Puerto Rico exceeded in 2020?",
            options: ["Utah", "Connecticut, at 3,605,944, the smallest state above Puerto Rico", "Iowa, at 3,190,369, the second largest of the states below it", "Nevada, at 3,104,614, the third largest of the states below it"],
            correctIndex: 0,
            explanation: "Utah counted 3,271,616, just under Puerto Rico's 3,285,874.",
            sourceLessonSlug: "counting-the-people",
          },
          {
            prompt: "What did the Court say Congress must do when structuring benefits for the territories?",
            options: ["Make policy judgments accounting for national and local considerations", "Provide benefits identical to those available in the several states", "Obtain the consent of each territory's legislature before legislating", "Consult the Oversight Board before extending any program to a territory"],
            correctIndex: 0,
            explanation: "The majority framed the Territory Clause as affording broad authority to legislate differently for the territories than for the states.",
            sourceLessonSlug: "ssi-and-the-separate-channel",
          },
          {
            prompt: "Which taxes does the Vaello Madero opinion say Puerto Rico residents generally do pay?",
            options: ["Social Security, Medicare and unemployment taxes", "Federal estate and gift taxes on property held anywhere in the world", "Federal excise taxes on fuel and on manufactured tobacco products", "Federal income tax on all income from whatever source derived"],
            correctIndex: 0,
            explanation: "The opinion notes they are eligible for Social Security and Medicare, which is why the tax rationale covers some programs and not others.",
            sourceLessonSlug: "ssi-and-the-separate-channel",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 6 — The status question, and reading it yourself
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-status-question",
      title: "21 · The status question, and why the percentages argue",
      section: "Section 6 · The status question, and reading it yourself",
      body: `Puerto Rico has voted on its status seven times. Statehood has led in the four most recent votes. **Anyone who tells you that settles it, in either direction, is skipping the part of the record that makes it complicated.**

This lesson leans on one document for the first three votes: **Congressional Research Service report R44721, updated 6 June 2024.** CRS writes for Congress, is required to be non-partisan, and is public domain, so every sentence below can be checked by anyone. **That version predates the November 2024 plebiscite,** which is why the 2024 figures below come from the Puerto Rico State Elections Commission's own certified results file instead.

**First, the options, as Congress understands them.** CRS lists the choices that have appeared on ballots and in bills: **statehood**, **independence**, **sovereignty in free association with the United States**, and **the current territorial status** (sometimes called commonwealth). Free association and independence both "would entail Puerto Rico becoming an independent country"; free association "suggests an ongoing, mutually negotiated relationship in which the United States might continue to provide some benefits or services", as it does today with several western Pacific nations (Congressional Research Service, 2024, p. 10). A fifth option, **enhanced commonwealth**, has been pressed for decades; the Justice Department determined in 2017 that it "remained inconsistent with the U.S. Constitution" (Congressional Research Service, 2024, p. 8).

**2012.** Two questions. About **54.0%** answered no to the first, on keeping the current status. On the second, about **61.2%** chose statehood. Then the dispute, in the report's own words: "Debate focused on whether almost 500,000 blank answers on the second question should be included in the total, thereby affecting whether any option received a majority." The territorial legislature passed a concurrent resolution, supported by the incoming Governor, contending that the results were "inconclusive" (Congressional Research Service, 2024, p. 8). **A blank ballot is a choice too, and where you put it changes the headline.**

**2017.** The ballot was rewritten twice. The original had only statehood and free association/independence, and the law "specified that only ballots marking one of those options would be counted", which the report identifies as a direct response to the 2012 blank-ballot fight. The Justice Department declined to certify the federal funds Congress had appropriated for a plebiscite, so a third option, the current territorial status, was added. DOJ never formally responded to the change before voting day. **The Independence Party then announced it would boycott, as did the Popular Democratic Party and other groups** (Congressional Research Service, 2024, pp. 10 to 13).

Result: **97.2% statehood, 1.5% free association or independence, 1.3% current territorial status.** And: **turnout was 23%, about 518,000 of 2.3 million registered voters** (Congressional Research Service, 2024, p. 14). Quote the 97.2% without the 23% and you have told a lie with a true number.

**2020.** One question: should Puerto Rico be immediately admitted as a state. **About 52.5% yes, 47.5% no, on turnout of about 52.2%, roughly 1.2 million of 2.4 million registered voters** (Congressional Research Service, 2024, p. 14). A real turnout and a narrow margin. And on the same day, voters elected a pro-statehood Governor, reelected a pro-statehood Resident Commissioner, **and defeated the pro-statehood majority in their own legislature** (Congressional Research Service, 2024, p. 14). Electorates are allowed to be ambivalent.

**2024.** From the Elections Commission's certified island-wide file, dated 11 February 2025 (Comision Estatal de Elecciones de Puerto Rico, 2025):

| | Votes |
| --- | --- |
| Statehood | 620,782 |
| Sovereignty in free association with the United States | 313,259 |
| Independence | 125,171 |
| Blank ballots | 181,243 |
| Overvoted ballots | 23,610 |
| Total ballots | 1,264,065 |
| Registered voters in reported voting places | 1,987,317 |
| Turnout | 63.61% |

**Now do the arithmetic, because this is the whole lesson.** The three options drew 1,059,212 votes between them. Statehood's 620,782 is **58.6% of votes cast on the question**. It is **49.1% of all ballots**. Both figures are true. They are not the same figure, and the difference is 181,243 blank ballots and 23,610 overvotes. There was no current-status option on this ballot.

**The two arguments, as CRS states them.** "Statehood supporters generally argue that statehood has been victorious in multiple recent plebiscites, while opponents counter that previous plebiscite methods have predetermined the statehood outcome, that participation was insufficient, or both" (Congressional Research Service, 2024, p. 14).

**And Congress has not acted.** In December 2022 the House passed H.R. 8393, the Puerto Rico Status Act, by 233 to 191; it would have put independence, sovereignty in free association, and statehood on a ballot, with no status-quo option. The Senate did not take it up. A competing Senate bill would have added a commonwealth option and required a Government Accountability Office study of "readiness for statehood" first (Congressional Research Service, 2024, pp. 15 to 18). Under the Territory Clause, Congress may change the status by statute whenever it chooses, and it may also do nothing indefinitely, which is what it has done.

**So what does the record support?** That a plurality or narrow majority of those who vote prefer statehood, that the size of that preference depends heavily on how the question is asked, that participation has ranged from 23% to 63.6%, and that the island's own parties do not agree on whether any of these votes was legitimate. **Anyone who compresses that into one sentence is selling something.**

:::reveal What was the turnout in the 2017 plebiscite, and why does it matter? ||| About 23 percent, because the Independence Party, the Popular Democratic Party and other groups boycotted, so the 97.2 percent for statehood describes a small and self-selected electorate.

:::reveal What was the dispute about the 2012 result? ||| Whether almost 500,000 blank answers on the second question should count in the total, which determines whether any option reached a majority.

:::reveal In the 2024 plebiscite, what were statehood's two defensible percentages? ||| 58.6 percent of votes cast on the question, and 49.1 percent of all ballots.

## Vocabulary
- **Plebiscite**: a popular vote on a question of status, which Puerto Rico may hold with or without congressional authorization and which binds nobody by itself.
- **Free association**: independence combined with a negotiated ongoing relationship with the United States, an option distinct from both statehood and plain independence.
- **Enhanced commonwealth**: a long-proposed status the Justice Department concluded in 2017 remained inconsistent with the Constitution.
- **Blank ballot**: a ballot returned without a choice on a question, treated by some as a protest vote to be counted in the denominator and by others as an abstention to be excluded.
- **Turnout**: the share of registered voters who cast ballots, without which a percentage for any option describes an unknown fraction of the electorate.

## Sources
Comision Estatal de Elecciones de Puerto Rico. (2025, February 11). *Plebiscito: Resultados isla* [Certified island-wide plebiscite results]. https://elecciones2024.ceepur.org/Escrutinio_General_123/data/PLEBISCITO_Resumen.xml

Congressional Research Service. (2024, June 6). *Political status of Puerto Rico: Brief background and recent developments for Congress* (Report No. R44721). https://crsreports.congress.gov/product/pdf/R/R44721`,
    },
    {
      slug: "not-the-same-as-tribal-sovereignty",
      title: "22 · Not the same as tribal sovereignty, and where they touch",
      section: "Section 6 · The status question, and reading it yourself",
      body: `Two subjects get run together constantly, and the confusion costs both of them their meaning. This lesson draws the line once, carefully, and then names the one place where the comparison is genuinely informative.

**They are different questions about different things.**

| | Territorial status | Tribal sovereignty |
| --- | --- | --- |
| What is at issue | A place under United States sovereignty | A political community that governs itself |
| How the relationship began | Treaty of cession, purchase, deed, or covenant transferring a place | Treaties between the United States and nations already governing themselves |
| Governing clause | Article IV, Section 3, Clause 2 | Treaties and the Indian Commerce Clause, among others |
| Core claim | That the Constitution should apply, and that the place should have a vote | That a pre-existing sovereign retains powers it never gave up |

**Read the second column again, because it is the part people flatten.** A tribal nation is not asking to be admitted to something. Its claim runs the other way: it was a sovereign before the United States existed, it entered into treaties as a sovereign, and it retains the powers it did not cede. **That is not the territorial argument at all.** Puerto Rico is not asserting that it was a nation the United States made a treaty with. It is asserting that a place governed by the United States should have the Constitution and a vote.

**This catalog treats them separately on purpose.** Indigenous sovereignty is the subject of **Tribal Nations and Governance**, which does it properly and at length. Nothing in this course should be read as a summary of that one.

**Citizenship shows how differently the two ran.** Congress made people born in the United States to a member of a tribe citizens at birth, and the statute that now carries the rule adds a protective clause: citizenship "shall not in any manner impair or otherwise affect the right of such person to tribal or other property" (8 U.S.C. § 1401, n.d.). **Congress anticipated the objection Section 3 of this course spent a whole lesson on, and wrote an answer to it into the statute.** Whether such a clause would satisfy the intervenors in *Fitisemanu* is not something this course can tell you, and it is a question worth putting to them rather than answering for them.

**Now the place where the comparison is real, and it is a matter of record rather than analogy.** The two doctrines were built in the same decades, out of the same idea: that the federal government holds powers over certain peoples that are not found in the constitutional text and are largely unreviewable. Lawyers call it **plenary power**. It is not a coincidence that it was invented for Indian affairs, immigration and the territories at roughly the same time by roughly the same Court.

The link is not this course's invention. Justice Gorsuch's concurrence in *Vaello Madero* cites Sarah Cleveland's study of exactly that convergence, whose title names all three at once: *Powers Inherent in Sovereignty: Indians, Aliens, Territories, and the Nineteenth Century Origins of Plenary Power Over Foreign Affairs* (Vaello Madero, 2022, Gorsuch, J., concurring, slip op. at 7). And the language bleeds across in the cases themselves: Justice Brown's opinion in *Downes* reached for "scattered bodies of native Indians" while explaining which territories the Constitution should reach (Downes v. Bidwell, 1901, at 282).

**So the honest statement is narrow and it is worth getting exactly right.** The Insular Cases and the plenary-power Indian law cases share an intellectual origin and a habit of mind. They do not share a legal question, a claimant, or a remedy. **A course that says "it is the same thing" is wrong, and a course that says "they have nothing to do with each other" is also wrong.**

**One last complication to hold rather than resolve.** These categories describe overlapping people. Chamorros in Guam and the Northern Marianas, and Samoans in American Samoa, are Indigenous peoples living in unincorporated territories, so their situation raises both sets of questions at once without merging them. That is a reason to keep the two frameworks distinct, not a reason to pick one.

:::reveal What is the core claim in tribal sovereignty, and how does it differ from the territorial claim? ||| That a pre-existing sovereign retains powers it never ceded, where the territorial claim is that a place the United States governs should have the Constitution and a vote.

:::reveal What protective clause did Congress attach to citizenship for people born to a member of a tribe? ||| That the grant shall not in any manner impair or otherwise affect that person's right to tribal or other property.

:::reveal What do the Insular Cases and the plenary-power Indian law cases genuinely share? ||| An intellectual origin in the same period and the same idea of unreviewable federal power, rather than a legal question, a claimant or a remedy.

## Vocabulary
- **Plenary power**: the doctrine that Congress holds broad and largely unreviewable authority over certain subjects, developed for Indian affairs, immigration and the territories in the same era.
- **Government-to-government relationship**: the framework describing dealings between the United States and tribal nations, resting on treaties with sovereigns that already existed.
- **Indian Commerce Clause**: the constitutional provision giving Congress power to regulate commerce with the Indian tribes, one of the textual anchors of federal Indian law.
- **Pre-existing sovereign**: a nation that governed itself before the United States existed and did not surrender the powers it never ceded, which is the claim territorial status does not make.
- **Overlapping categories**: the fact that Indigenous peoples live in unincorporated territories, so that both frameworks can apply to the same community without becoming one framework.

## Sources
8 U.S.C. § 1401. (n.d.). *Nationals and citizens of United States at birth*. Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title8-section1401&num=0&edition=prelim

*Downes v. Bidwell*, 182 U.S. 244 (1901). Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/supremecourt/text/182/244

*United States v. Vaello Madero*, No. 20-303 (U.S. Apr. 21, 2022) (slip op.) (Gorsuch, J., concurring). Supreme Court of the United States. https://www.supremecourt.gov/opinions/21pdf/20-303_6khn.pdf`,
    },
    {
      slug: "reading-it-yourself",
      title: "23 · Reading it yourself, and what this course refused to print",
      section: "Section 6 · The status question, and reading it yourself",
      body: `Every factual claim in this course came from a document you can open. Here is where they live, and then the list of things this course tested and would not print.

**The five sources that carry almost all of it.**

| Where | What it settles | How to use it |
| --- | --- | --- |
| **uscode.house.gov** | Statutory text, currently in force | Search the section number. Read the definitions section first, always |
| **supremecourt.gov** | Slip opinions, and the docket for any case | Opinions under Opinions of the Court by term; dockets by number, which is how the Fitisemanu denial was confirmed |
| **govinfo.gov** | Federal court opinions as filed, bills, the House rules manual | Search the case name; published circuit opinions appear as USCOURTS packages |
| **census.gov** | Population, and the Bureau's own estimate of its error | Take the decennial count and then look for the post-enumeration survey |
| **crsreports.congress.gov** | Congress's own non-partisan briefing on a contested question | Check the "Updated" date on the cover. These are revised |

**A research exercise worth doing.** Pick any statute that matters to you and find its definitions section. Then ask a single question: **does it include Puerto Rico, Guam, the Virgin Islands, the Northern Marianas, American Samoa, the District, all of them, or some of them?** This course found five different answers in five statutes:

- **7 U.S.C. § 361a** (Hatch Act): the states including the District, Puerto Rico, Guam and the Virgin Islands.
- **8 U.S.C. § 1101(a)(38)** (immigration): everything except American Samoa and Swains Island.
- **11 U.S.C. § 101(52)** (bankruptcy): includes Puerto Rico, except for who may file under chapter 9.
- **42 U.S.C. § 1382c** (SSI): the 50 states and the District, plus the Northern Marianas by a later statute.
- **26 U.S.C. § 933** (tax): a special exclusion for Puerto Rico source income and no equivalent for the District.

**Five statutes, five lists, one Congress.** That is not sloppiness. It is what it looks like when a category exists and no general rule governs it.

**Now the ledger. These are things this course tested and refused to state,** because a course that only tells you what it found is not telling you how much to trust it.

- **A United States Reports volume and page for *Vaello Madero*, *Aurelius* or *Fitisemanu*.** The slip opinions and the published circuit opinion were read in full, and none of the sources consulted supplied a verified reporter page. The citations here therefore use docket number and decision date, which are exact.
- **The number of American Samoans who hold national status.** American Samoa counted 49,710 residents in 2020, but nationals also live in the states and some residents are citizens by parentage, so no figure was defensible. The course says "tens of thousands".
- **What American Samoans want.** The 2007 status report, the 1930 commission, the *Fitisemanu* plaintiffs and the delegate's own bills point in different directions. The course reports all four and declines to average them.
- **Any characterization of the 2024 plebiscite as decisive.** Statehood took 58.6% of votes cast on the question and 49.1% of all ballots. Both are printed; neither is called the answer.
- **The 1846 retrocession of the District's Virginia portion.** True as far as this course knows, and no primary text was read for it, so it was cut rather than asserted.
- **A count of how many people the Insular Cases currently affect.** It depends entirely on which holding you mean, and no source consulted supplied one that survived scrutiny.
- **A third freely associated state named in one CRS sentence.** The report lists the Federated States of Micronesia, "the Republic of Micronesia", and Palau; the middle name appears to be a slip, so this course names only the two it can verify and points you at the sentence.

**And one thing this course states plainly, because the evidence supports it.** No part of this arrangement is an accident. Every list was drafted, every exclusion was voted on, and every one of them can be changed by the same body that wrote it. The Territory Clause sets no deadline, which means the current arrangement continues by decision and not by inertia.

**What to do with that is not a civics question, and this course does not answer it.** What a civics course owes you is the ability to check any sentence in it, disagree with its author, and be right. Every citation here was chosen so that you can.

:::reveal Which section of a statute should you read first when asking whether it covers a territory? ||| The definitions section, because each statute defines terms like State and United States for its own purposes.

:::reveal Why does this course cite cases by docket number and decision date rather than by a reporter page? ||| Because no verified United States Reports page was found for them in the sources consulted, and an exact citation is better than a guessed one.

:::reveal What does the existence of five different statutory lists tell you? ||| That the category is real and no general rule governs it, so each statute decides for itself which non-state jurisdictions it covers.

## Vocabulary
- **Slip opinion**: the first published version of a court's opinion, issued before the bound reporter volume and citable by docket number and date.
- **Docket**: the official record of filings and orders in a case, which is where a denial of certiorari can be confirmed exactly.
- **Definitions section**: the part of a statute that fixes what its terms mean for its own purposes, and the first place to look in this subject.
- **Ledger of refusals**: a published list of claims an author tested and declined to make, which is what lets a reader calibrate trust in the claims that remain.
- **Public domain source**: a document anyone may quote and republish freely, which is why federal statutes, opinions, census releases and CRS reports carry this course.

## Sources
7 U.S.C. § 361a. (n.d.). *Definitions*. Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title7-section361a&num=0&edition=prelim

11 U.S.C. § 101. (n.d.). *Definitions*. Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title11-section101&num=0&edition=prelim

Congressional Research Service. (2024, June 6). *Political status of Puerto Rico: Brief background and recent developments for Congress* (Report No. R44721). https://crsreports.congress.gov/product/pdf/R/R44721

U.S. Census Bureau. (2022, August 16). *2020 post-enumeration survey results: Puerto Rico*. https://census.gov/newsroom/press-releases/2022/2020-post-enumeration-survey-results-puerto-rico.html`,
    },
    {
      slug: "quiz-the-status-question",
      title: "24 · Knowledge check: the status question",
      section: "Section 6 · The status question, and reading it yourself",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "How many times has Puerto Rico voted on its political status?",
            options: ["Seven", "Three, all of them held since the fiscal oversight board was created", "Twelve, once in every general election since the Second World War", "Once, in the plebiscite held alongside the general election of 2020"],
            correctIndex: 0,
            explanation: "The votes were held in 1967, 1993, 1998, 2012, 2017, 2020 and 2024, and statehood has led in the four most recent.",
            sourceLessonSlug: "the-status-question",
          },
          {
            prompt: "Which document does this lesson lean on for the 2012, 2017 and 2020 votes?",
            options: ["A Congressional Research Service report", "A press release issued by the Government of Puerto Rico", "A Supreme Court opinion reviewing the plebiscite results", "A study commissioned by the New Progressive Party"],
            correctIndex: 0,
            explanation: "Report R44721, updated 6 June 2024, which is written for Congress, required to be non-partisan, and in the public domain.",
            sourceLessonSlug: "the-status-question",
          },
          {
            prompt: "Why does this lesson use a different source for the 2024 figures?",
            options: ["The CRS version used predates the November 2024 plebiscite", "The Congressional Research Service does not report election results", "The 2024 results have never been certified by any official body", "The report was withdrawn after the 2024 plebiscite was held"],
            correctIndex: 0,
            explanation: "That version is dated 6 June 2024, so the figures come from the Puerto Rico State Elections Commission's own certified results file instead.",
            sourceLessonSlug: "the-status-question",
          },
          {
            prompt: "Which status options does CRS list as having appeared on ballots and in bills?",
            options: ["Statehood, independence, free association and the current status", "Statehood and independence only, since no other option is constitutional", "Statehood, commonwealth and trusteeship under the United Nations", "Statehood, independence and admission as part of an existing state"],
            correctIndex: 0,
            explanation: "Enhanced commonwealth has also been pressed for decades, and the Justice Department concluded in 2017 that it remained inconsistent with the Constitution.",
            sourceLessonSlug: "the-status-question",
          },
          {
            prompt: "What does free association entail, according to the CRS report?",
            options: ["Puerto Rico becoming an independent country with a negotiated relationship", "Puerto Rico remaining a territory with expanded local self-government", "Puerto Rico being admitted as a state with a special tax arrangement", "Puerto Rico joining an existing state as a new county or parish"],
            correctIndex: 0,
            explanation: "Both free association and independence would make Puerto Rico independent; free association suggests an ongoing, mutually negotiated relationship.",
            sourceLessonSlug: "the-status-question",
          },
          {
            prompt: "What did the Justice Department conclude in 2017 about enhanced commonwealth?",
            options: ["That it remained inconsistent with the Constitution", "That it was the only option Congress could lawfully offer on a ballot", "That it required approval by two thirds of the territorial legislature", "That it had already been adopted by the plebiscite of 2012"],
            correctIndex: 0,
            explanation: "The conclusion also bears on the conditions Congress attached to the plebiscite education funds it appropriated for fiscal year 2014.",
            sourceLessonSlug: "the-status-question",
          },
          {
            prompt: "What did the 2012 plebiscite ask?",
            options: ["Two questions, on the current status and on a preferred alternative", "One question, on whether Puerto Rico should be admitted as a state", "Three questions, on statehood, independence and free association", "One question, on whether to convene a status convention"],
            correctIndex: 0,
            explanation: "Voters answered the second question regardless of how they had answered the first, which is part of why the result was argued about.",
            sourceLessonSlug: "the-status-question",
          },
          {
            prompt: "How did voters answer the first question in 2012?",
            options: ["About 54.0 percent said no to keeping the current status", "About 61.2 percent said yes to keeping the current status", "About 97.2 percent said no to keeping the current status", "The question was struck from the ballot before voting day"],
            correctIndex: 0,
            explanation: "The 61.2 percent figure belongs to the second question, where it was the share choosing statehood.",
            sourceLessonSlug: "the-status-question",
          },
          {
            prompt: "What share chose statehood on the second question in 2012?",
            options: ["About 61.2 percent", "About 54.0 percent, the same figure recorded on the first question", "About 97.2 percent, the figure recorded in the following plebiscite", "About 52.5 percent, the figure recorded in the plebiscite of 2020"],
            correctIndex: 0,
            explanation: "Whether that amounted to a majority of anything depends on how nearly 500,000 blank answers are treated.",
            sourceLessonSlug: "the-status-question",
          },
          {
            prompt: "What was the controversy about the 2012 result?",
            options: ["Whether almost 500,000 blank answers should be in the total", "Whether the ballot had been printed in both Spanish and English", "Whether voters outside Puerto Rico should have been allowed to vote", "Whether the Justice Department had approved the ballot in advance"],
            correctIndex: 0,
            explanation: "Including them changes whether any option received a majority, which is exactly what the dispute was about.",
            sourceLessonSlug: "the-status-question",
          },
          {
            prompt: "What did the territorial legislature say about the 2012 results?",
            options: ["That they were inconclusive", "That they bound Congress to admit Puerto Rico as a state", "That they should be set aside because turnout was under a quarter", "That they required a runoff between the top two options"],
            correctIndex: 0,
            explanation: "The concurrent resolution was supported by the incoming Governor, who had been elected on the same day as the plebiscite.",
            sourceLessonSlug: "the-status-question",
          },
          {
            prompt: "What did the original 2017 ballot law say about which ballots would be counted?",
            options: ["Only those marking statehood or free association and independence", "Only those cast by voters registered before the previous general election", "Only those counted at precincts reporting on the night of the vote", "Only those marking the current territorial status option"],
            correctIndex: 0,
            explanation: "The report identifies that rule as a direct response to the blank-ballot controversy of 2012.",
            sourceLessonSlug: "the-status-question",
          },
          {
            prompt: "Why was the 2017 ballot amended?",
            options: ["The Justice Department declined to certify the federal plebiscite funds", "The territorial supreme court held the original ballot unconstitutional", "The Independence Party petitioned successfully for a third option", "The Oversight Board refused to release funding for the original ballot"],
            correctIndex: 0,
            explanation: "A third option, the current territorial status, was added, and the department never formally responded to the change before voting day.",
            sourceLessonSlug: "the-status-question",
          },
          {
            prompt: "Which parties announced a boycott of the 2017 plebiscite?",
            options: ["The Independence Party and the Popular Democratic Party", "The New Progressive Party and the Independence Party", "All three major parties, which is why turnout fell below a quarter", "No party boycotted, and the low turnout had other causes entirely"],
            correctIndex: 0,
            explanation: "Some other nonparty groups joined them, after the current territorial status option was added to the amended ballot.",
            sourceLessonSlug: "the-status-question",
          },
          {
            prompt: "What share chose statehood in the 2017 plebiscite?",
            options: ["97.2 percent", "61.2 percent, the same share recorded on the second 2012 question", "52.5 percent, the share recorded in the plebiscite of 2020", "58.6 percent, the share recorded in the plebiscite of 2024"],
            correctIndex: 0,
            explanation: "Free association or independence took 1.5 percent and the current territorial status took 1.3 percent.",
            sourceLessonSlug: "the-status-question",
          },
          {
            prompt: "What was the turnout in the 2017 plebiscite?",
            options: ["23 percent", "52.2 percent, the figure recorded in the plebiscite of 2020", "63.61 percent, the figure recorded in the plebiscite of 2024", "97.2 percent, matching the share that chose statehood"],
            correctIndex: 0,
            explanation: "About 518,000 of 2.3 million registered voters, which is why the 97.2 percent figure means very little on its own.",
            sourceLessonSlug: "the-status-question",
          },
          {
            prompt: "What does this lesson say about quoting the 2017 statehood figure without the turnout?",
            options: ["It tells a lie with a true number", "It is acceptable because the percentage was certified by the commission", "It overstates opposition to statehood rather than support for it", "It is the standard practice of the Congressional Research Service"],
            correctIndex: 0,
            explanation: "The 97.2 percent describes a small and self-selected electorate produced by a boycott.",
            sourceLessonSlug: "the-status-question",
          },
          {
            prompt: "What did the 2020 plebiscite ask?",
            options: ["Whether Puerto Rico should be immediately admitted as a state", "Which of three non-territorial options voters preferred", "Whether voters wished to maintain the current political status", "Whether to convene a constitutional convention on status"],
            correctIndex: 0,
            explanation: "It was a single yes-or-no ballot question, which is a different instrument from the multi-option ballots that preceded it.",
            sourceLessonSlug: "the-status-question",
          },
          {
            prompt: "What was the result of the 2020 plebiscite?",
            options: ["About 52.5 percent yes against 47.5 percent no", "About 97.2 percent yes against 1.5 percent no", "About 61.2 percent yes against 38.8 percent no", "About 58.6 percent yes against 41.4 percent no"],
            correctIndex: 0,
            explanation: "It was a narrow margin on a real turnout, which makes it the least disputed of the recent votes on participation grounds.",
            sourceLessonSlug: "the-status-question",
          },
          {
            prompt: "What was the turnout in the 2020 plebiscite?",
            options: ["About 52.2 percent", "About 23 percent, matching the turnout in the previous plebiscite", "About 63.61 percent, matching the turnout in the following plebiscite", "About 99.5 percent of precincts, which is not a turnout figure at all"],
            correctIndex: 0,
            explanation: "Roughly 1.2 million of 2.4 million registered voters, against 23 percent three years earlier.",
            sourceLessonSlug: "the-status-question",
          },
          {
            prompt: "What else did Puerto Rico's voters do on the same day as the 2020 plebiscite?",
            options: ["Defeated the pro-statehood majority in their own legislature", "Elected a Governor who campaigned against statehood outright", "Voted to abolish the office of Resident Commissioner", "Approved a new constitution for the territory by referendum"],
            correctIndex: 0,
            explanation: "They also elected a pro-statehood Governor and reelected a pro-statehood Resident Commissioner, which is what makes the result hard to compress.",
            sourceLessonSlug: "the-status-question",
          },
          {
            prompt: "How many votes did statehood receive in the certified 2024 results?",
            options: ["620,782", "313,259, which was the total for sovereignty in free association", "1,264,065, which was the total number of ballots cast", "181,243, which was the number of blank ballots recorded"],
            correctIndex: 0,
            explanation: "The three options together drew 1,059,212 votes, out of 1,264,065 ballots cast.",
            sourceLessonSlug: "the-status-question",
          },
          {
            prompt: "Which option came second in the 2024 plebiscite?",
            options: ["Sovereignty in free association with the United States", "Independence, which drew more than twice the free association total", "The current territorial status, which was not on the 2024 ballot", "Blank ballots, which outnumbered every named option on the ballot"],
            correctIndex: 0,
            explanation: "It drew 313,259 votes against 125,171 for independence.",
            sourceLessonSlug: "the-status-question",
          },
          {
            prompt: "How many blank ballots were recorded in the 2024 plebiscite?",
            options: ["181,243", "23,610, which is the number of overvoted ballots recorded", "125,171, which is the number of votes for independence", "almost 500,000, the figure disputed after the 2012 plebiscite"],
            correctIndex: 0,
            explanation: "Together with 23,610 overvoted ballots, that is the gap between statehood's two defensible percentages.",
            sourceLessonSlug: "the-status-question",
          },
          {
            prompt: "What was statehood's share of votes cast on the 2024 question?",
            options: ["58.6 percent", "49.1 percent, which is its share of all ballots rather than of votes cast", "63.61 percent, which is the turnout rather than any option's share", "52.5 percent, which is the figure from the 2020 plebiscite"],
            correctIndex: 0,
            explanation: "620,782 divided by the 1,059,212 votes the three options drew between them.",
            sourceLessonSlug: "the-status-question",
          },
          {
            prompt: "What was statehood's share of all ballots cast in 2024?",
            options: ["49.1 percent", "58.6 percent, which is its share of votes cast on the question", "61.2 percent, the share it took on the second 2012 question", "97.2 percent, the share it took in the 2017 plebiscite"],
            correctIndex: 0,
            explanation: "620,782 divided by 1,264,065 total ballots, and both figures are true of the same election.",
            sourceLessonSlug: "the-status-question",
          },
          {
            prompt: "What was the turnout in the 2024 plebiscite?",
            options: ["63.61 percent", "52.2 percent, matching the turnout in the 2020 plebiscite", "23 percent, matching the turnout in the 2017 plebiscite", "49.1 percent, which is a vote share rather than a turnout"],
            correctIndex: 0,
            explanation: "1,264,065 ballots against 1,987,317 registered voters in reported voting places.",
            sourceLessonSlug: "the-status-question",
          },
          {
            prompt: "Which option was absent from the 2024 ballot?",
            options: ["The current territorial status", "Sovereignty in free association with the United States", "Independence, which was reserved for a possible runoff", "Statehood, which the 2020 vote was treated as having settled"],
            correctIndex: 0,
            explanation: "That absence is one reason the percentages need reading carefully rather than quoting.",
            sourceLessonSlug: "the-status-question",
          },
          {
            prompt: "How does CRS state the statehood supporters' argument?",
            options: ["That statehood has won multiple recent plebiscites", "That the Territory Clause obliges Congress to admit Puerto Rico", "That the United Nations requires decolonization by a fixed date", "That the Insular Cases must be overruled before status can change"],
            correctIndex: 0,
            explanation: "The report states both sides in the same paragraph, which is the discipline this lesson borrows.",
            sourceLessonSlug: "the-status-question",
          },
          {
            prompt: "How does CRS state the opponents' argument?",
            options: ["That the methods predetermined the outcome or participation was insufficient", "That statehood would be unconstitutional under the Territory Clause", "That only the Justice Department may certify a plebiscite result", "That the island's population is too small for admission as a state"],
            correctIndex: 0,
            explanation: "Or both, in the report's own phrasing, which is why turnout and ballot design are the recurring points of attack.",
            sourceLessonSlug: "the-status-question",
          },
          {
            prompt: "What happened to H.R. 8393, the Puerto Rico Status Act, in December 2022?",
            options: ["The House passed it 233 to 191 and the Senate did not take it up", "It was signed into law and authorized a plebiscite for November 2023", "It was defeated in the House on a near party-line vote", "It was withdrawn by its sponsor before it reached the floor"],
            correctIndex: 0,
            explanation: "It would have put independence, sovereignty in free association and statehood on a ballot, with no status-quo option.",
            sourceLessonSlug: "the-status-question",
          },
          {
            prompt: "How did the competing Senate status bill differ from the House-passed bill?",
            options: ["It added a commonwealth option and a readiness study", "It would have admitted Puerto Rico as a state without any plebiscite", "It removed the statehood option from the ballot entirely", "It transferred the decision to the Oversight Board created by PROMESA"],
            correctIndex: 0,
            explanation: "The study by the Government Accountability Office would have examined readiness for statehood, including whether a stable majority existed.",
            sourceLessonSlug: "the-status-question",
          },
          {
            prompt: "Under the Territory Clause, what may Congress do about status?",
            options: ["Change it by statute whenever it chooses, or do nothing indefinitely", "Change it only after a plebiscite it has authorized in advance", "Change it only with the consent of the territorial legislature", "Nothing, because status may be changed only by constitutional amendment"],
            correctIndex: 0,
            explanation: "Puerto Rico may also hold status votes without congressional preapproval, and it has.",
            sourceLessonSlug: "the-status-question",
          },
          {
            prompt: "What does this lesson say the record actually supports?",
            options: ["Support that depends heavily on how the question is asked", "A settled and consistent majority for statehood across all seven votes", "A settled and consistent majority against statehood across all seven votes", "That no conclusion can be drawn from any of the seven votes"],
            correctIndex: 0,
            explanation: "Participation has ranged from 23 percent to 63.61 percent, and the island's parties do not agree that any of the votes was legitimate.",
            sourceLessonSlug: "the-status-question",
          },
          {
            prompt: "What is a plebiscite, in this context?",
            options: ["A popular vote on status that binds nobody by itself", "A vote of Congress admitting a territory to the Union", "A referendum required by the Territory Clause every ten years", "A ballot question certified in advance by the Justice Department"],
            correctIndex: 0,
            explanation: "Puerto Rico may hold one with or without congressional authorization, and Congress is not obliged to act on the result.",
            sourceLessonSlug: "the-status-question",
          },
          {
            prompt: "Why does a blank ballot matter so much in this subject?",
            options: ["Where you put it changes whether an option reached a majority", "Because blank ballots are counted as votes for the status quo by law", "Because the Justice Department requires them to be excluded", "Because a blank ballot invalidates the entire precinct's returns"],
            correctIndex: 0,
            explanation: "Almost 500,000 of them are why the 2012 result was called inconclusive by the territory's own legislature.",
            sourceLessonSlug: "the-status-question",
          },
          {
            prompt: "What is the core claim of tribal sovereignty?",
            options: ["That a pre-existing sovereign retains powers it never ceded", "That a place the United States governs should have the Constitution", "That a territory should be admitted to the Union as a state", "That Congress must grant citizenship before self-government is possible"],
            correctIndex: 0,
            explanation: "It runs in the opposite direction from the territorial claim, which asks to be brought inside rather than to have retained what it never gave up.",
            sourceLessonSlug: "not-the-same-as-tribal-sovereignty",
          },
          {
            prompt: "How did the relationship between the United States and tribal nations begin, in the terms this lesson uses?",
            options: ["Treaties with nations already governing themselves", "A treaty of cession transferring a place from a European power", "A deed signed by traditional leaders and accepted by Congress", "A covenant negotiated after a United Nations trusteeship"],
            correctIndex: 0,
            explanation: "That is what makes it a government-to-government relationship rather than a question about the status of a place.",
            sourceLessonSlug: "not-the-same-as-tribal-sovereignty",
          },
          {
            prompt: "Which clause governs territorial status, as against the clauses anchoring federal Indian law?",
            options: ["Article IV, Section 3, Clause 2", "The Indian Commerce Clause of Article I, Section 8", "The Citizenship Clause of the Fourteenth Amendment", "The Appointments Clause of Article II, Section 2"],
            correctIndex: 0,
            explanation: "Federal Indian law rests on treaties and the Indian Commerce Clause among others, which is a different textual foundation.",
            sourceLessonSlug: "not-the-same-as-tribal-sovereignty",
          },
          {
            prompt: "Which course in this catalog owns the subject of Indigenous sovereignty?",
            options: ["Tribal Nations and Governance", "This course, which covers it in Section 6", "The Match, which covers the land-grant statutes", "US Constitution 101, which covers the amendments"],
            correctIndex: 0,
            explanation: "Nothing in this course should be read as a summary of that one, which treats the subject properly and at length.",
            sourceLessonSlug: "not-the-same-as-tribal-sovereignty",
          },
          {
            prompt: "What protective clause accompanies citizenship under 8 U.S.C. § 1401(b)?",
            options: ["That it shall not impair the person's right to tribal or other property", "That it may be renounced within six months of the person's eighteenth birthday", "That it applies only to persons resident on a reservation at birth", "That it requires the consent of the tribe before it takes effect"],
            correctIndex: 0,
            explanation: "Congress anticipated the property objection and wrote an answer to it into the statute itself.",
            sourceLessonSlug: "not-the-same-as-tribal-sovereignty",
          },
          {
            prompt: "What does this lesson say about whether such a clause would satisfy the Fitisemanu intervenors?",
            options: ["It is a question to put to them rather than answer for them", "That it plainly would, which is why the objection was misconceived", "That it plainly would not, because land tenure is not property", "That the Tenth Circuit already decided the question in 2021"],
            correctIndex: 0,
            explanation: "The course refuses to answer on their behalf, which is the same discipline Section 3 applied.",
            sourceLessonSlug: "not-the-same-as-tribal-sovereignty",
          },
          {
            prompt: "What is plenary power, as this lesson uses the term?",
            options: ["Broad federal authority not found in the text and largely unreviewable", "The power of a territorial legislature over purely local subjects", "The authority of the Supreme Court to overrule its own precedents", "The power of Congress to admit new states to the Union"],
            correctIndex: 0,
            explanation: "It was developed for Indian affairs, immigration and the territories in the same period by roughly the same Court.",
            sourceLessonSlug: "not-the-same-as-tribal-sovereignty",
          },
          {
            prompt: "What evidence does this lesson give that the plenary-power link is not its own invention?",
            options: ["Justice Gorsuch's concurrence cites a study naming all three subjects", "The Supreme Court has held the two doctrines to be legally identical", "Congress said so when it accepted the deeds of cession in 1929", "The Tenth Circuit relied on federal Indian law in deciding Fitisemanu"],
            correctIndex: 0,
            explanation: "The study's title names Indians, aliens and territories together as nineteenth-century origins of plenary power.",
            sourceLessonSlug: "not-the-same-as-tribal-sovereignty",
          },
          {
            prompt: "Which phrase from Downes v. Bidwell shows the language bleeding across the two subjects?",
            options: ["Scattered bodies of native Indians", "Appurtenant and belonging to the United States", "Absolutely unfit to receive them", "A false step at this time might be fatal"],
            correctIndex: 0,
            explanation: "Justice Brown reached for it while explaining which territories the Constitution should reach.",
            sourceLessonSlug: "not-the-same-as-tribal-sovereignty",
          },
          {
            prompt: "What is the honest statement about the two doctrines this lesson insists on?",
            options: ["They share an origin and a habit of mind, not a legal question", "They are the same doctrine applied to two different populations", "They have nothing whatever to do with each other historically", "They were merged by the Supreme Court in the Insular Cases"],
            correctIndex: 0,
            explanation: "Saying they are the same thing is wrong, and saying they are unrelated is also wrong.",
            sourceLessonSlug: "not-the-same-as-tribal-sovereignty",
          },
          {
            prompt: "Why does this lesson mention Chamorros and Samoans at the end?",
            options: ["Because the two frameworks can apply to the same community", "Because their tribal status has been recognized by federal statute", "Because they are the only Indigenous peoples in United States territories", "Because their communities have been admitted to the Union as states"],
            correctIndex: 0,
            explanation: "That overlap is a reason to keep the two frameworks distinct rather than a reason to pick one.",
            sourceLessonSlug: "not-the-same-as-tribal-sovereignty",
          },
          {
            prompt: "Which website settles what a statute currently says?",
            options: ["uscode.house.gov", "supremecourt.gov, which publishes the Court's slip opinions", "census.gov, which publishes population counts and coverage estimates", "crsreports.congress.gov, which publishes briefings for Congress"],
            correctIndex: 0,
            explanation: "The Office of the Law Revision Counsel maintains the Code there, and the advice is to read the definitions section first.",
            sourceLessonSlug: "reading-it-yourself",
          },
          {
            prompt: "Where was the denial of certiorari in Fitisemanu confirmed?",
            options: ["On the Supreme Court's own docket for the case", "In the Tenth Circuit's published opinion of June 2021", "In a Congressional Research Service report on territorial status", "In the Federal Register notice for the October 2022 term"],
            correctIndex: 0,
            explanation: "Dockets are searchable by number on supremecourt.gov, and the entry for 17 October 2022 reads Petition DENIED.",
            sourceLessonSlug: "reading-it-yourself",
          },
          {
            prompt: "What should you check on the cover of a CRS report?",
            options: ["The Updated date, because they are revised", "The name of the requesting Member of Congress", "The classification marking at the foot of each page", "The number of pages, which indicates how thorough it is"],
            correctIndex: 0,
            explanation: "A claim sourced to an older version and presented as current is the characteristic failure with these documents.",
            sourceLessonSlug: "reading-it-yourself",
          },
          {
            prompt: "What research exercise does this lesson recommend?",
            options: ["Find a statute's definitions section and see which places it covers", "Count the number of times a territory is named in the Federal Register", "Compare the population of each territory with the smallest state", "Read every Supreme Court opinion citing the Insular Cases in order"],
            correctIndex: 0,
            explanation: "The course found five different answers in five statutes, which is the point of the exercise.",
            sourceLessonSlug: "reading-it-yourself",
          },
          {
            prompt: "How does the bankruptcy statute treat Puerto Rico?",
            options: ["It includes it, except for who may file under chapter 9", "It excludes it entirely from every definition in the Code", "It treats it as a state for all purposes without qualification", "It leaves the question to the territorial legislature to decide"],
            correctIndex: 0,
            explanation: "That single exception is what left the island without access to municipal restructuring before PROMESA.",
            sourceLessonSlug: "reading-it-yourself",
          },
          {
            prompt: "How does the SSI statute define the United States?",
            options: ["The 50 states and the District, with the Northern Marianas added later", "Every jurisdiction under United States sovereignty without exception", "The 50 states only, excluding the District of Columbia as well", "Every place whose residents pay federal income tax on local earnings"],
            correctIndex: 0,
            explanation: "It is one of five different lists this course found, drawn by one Congress across five statutes.",
            sourceLessonSlug: "reading-it-yourself",
          },
          {
            prompt: "What does the existence of five different statutory lists demonstrate?",
            options: ["A real category governed by no general rule", "Careless drafting that Congress has since corrected by amendment", "That the Supreme Court has never defined the term territory", "That the Territory Clause requires a separate list in each statute"],
            correctIndex: 0,
            explanation: "Each statute decides for itself which non-state jurisdictions it covers, which is what the definitions exercise reveals.",
            sourceLessonSlug: "reading-it-yourself",
          },
          {
            prompt: "Why does this course cite cases by docket number and decision date?",
            options: ["No verified reporter page was found in the sources consulted", "Because slip opinions may not be cited by volume under Court rules", "Because docket numbers are more stable than reporter citations", "Because the cases have not yet been published in any reporter"],
            correctIndex: 0,
            explanation: "An exact citation is better than a guessed one, and the docket number and date are both verifiable.",
            sourceLessonSlug: "reading-it-yourself",
          },
          {
            prompt: "Why does the course say 'tens of thousands' rather than a figure for American Samoan nationals?",
            options: ["Nationals also live in the states and some residents are citizens", "Because the Census Bureau does not count American Samoa at all", "Because the number is classified by the Department of the Interior", "Because the figure changes too rapidly to be worth stating"],
            correctIndex: 0,
            explanation: "American Samoa counted 49,710 residents in 2020, but that is not the same as the number who hold national status.",
            sourceLessonSlug: "reading-it-yourself",
          },
          {
            prompt: "Why did the course cut the claim about the District's Virginia portion?",
            options: ["No primary text for it was read", "It was found to be false on examination of the Statutes at Large", "It was irrelevant to any argument the course makes anywhere", "The Census Bureau declined to confirm the boundary change"],
            correctIndex: 0,
            explanation: "It was cut rather than asserted, which is the same rule applied to every other item in the ledger.",
            sourceLessonSlug: "reading-it-yourself",
          },
          {
            prompt: "What did the course notice about a CRS sentence naming freely associated states?",
            options: ["One of the three names appears to be a slip", "That the list omitted the Federated States of Micronesia", "That the report contradicted itself about their independence", "That the sentence had been removed from the current version"],
            correctIndex: 0,
            explanation: "The course names only the two it can verify and points the reader at the sentence rather than repeating the apparent error.",
            sourceLessonSlug: "reading-it-yourself",
          },
          {
            prompt: "What does the course refuse to call the 2024 plebiscite?",
            options: ["Decisive", "Certified, since the Elections Commission published the results", "Contested, since no party has challenged the count itself", "Comparable to the plebiscites held before the year 2012"],
            correctIndex: 0,
            explanation: "Statehood took 58.6 percent of votes cast and 49.1 percent of all ballots, and both are printed without either being called the answer.",
            sourceLessonSlug: "reading-it-yourself",
          },
          {
            prompt: "What is a ledger of refusals, and why does this course print one?",
            options: ["A list of tested claims the author declined to make, to calibrate trust", "A record of every source the author was unable to obtain access to", "A list of corrections issued after the course was first published", "An index of claims that other courses in the catalog dispute"],
            correctIndex: 0,
            explanation: "A course that only tells you what it found is not telling you how much to trust it.",
            sourceLessonSlug: "reading-it-yourself",
          },
          {
            prompt: "What does the course state plainly at the end, on the evidence?",
            options: ["The arrangement continues by decision, not by inertia", "The arrangement is required by the text of the Constitution", "The arrangement will end automatically after a fixed period", "The arrangement was imposed by treaty and cannot be changed"],
            correctIndex: 0,
            explanation: "Every list was drafted and every exclusion voted on, and the same body that wrote them can change them.",
            sourceLessonSlug: "reading-it-yourself",
          },
          {
            prompt: "What does the course say a civics course owes its reader?",
            options: ["The ability to check any sentence, disagree, and be right", "A clear recommendation on which status option to support", "A guarantee that every source will remain online indefinitely", "A summary short enough to be repeated without checking"],
            correctIndex: 0,
            explanation: "Every citation was chosen so that a learner can do exactly that.",
            sourceLessonSlug: "reading-it-yourself",
          },
          {
            prompt: "Which site publishes federal circuit court opinions as filed?",
            options: ["govinfo.gov", "uscode.house.gov, which publishes the United States Code", "census.gov, which publishes the decennial count and its estimates", "crsreports.congress.gov, which publishes reports for Congress"],
            correctIndex: 0,
            explanation: "Published circuit opinions appear there as USCOURTS packages, which is how the Fitisemanu opinion was read for this course.",
            sourceLessonSlug: "reading-it-yourself",
          },
          {
            prompt: "What two things should you take from census.gov, in this lesson's advice?",
            options: ["The decennial count and the post-enumeration survey", "The apportionment table and the list of congressional districts", "The population estimate and the projection for the coming decade", "The count for the states and the separate count for the District"],
            correctIndex: 0,
            explanation: "The count is the official number and the survey is the Bureau's own estimate of how wrong the count was.",
            sourceLessonSlug: "reading-it-yourself",
          },
          {
            prompt: "Which of the five sources settles a contested political question for Congress in a non-partisan form?",
            options: ["crsreports.congress.gov", "supremecourt.gov, which publishes opinions and dockets", "govinfo.gov, which publishes bills and court opinions", "uscode.house.gov, which publishes the statutes in force"],
            correctIndex: 0,
            explanation: "CRS writes for Congress, is required to be non-partisan, and its products are in the public domain.",
            sourceLessonSlug: "reading-it-yourself",
          },
          {
            prompt: "Why is it significant that CRS reports are public domain?",
            options: ["Anyone may quote them and check every quotation", "They are the only documents a court will accept as authority", "They are updated automatically whenever the underlying law changes", "They may be cited without any attribution to their author"],
            correctIndex: 0,
            explanation: "That is why this course leans on one for the contested status question rather than on any advocate's account.",
            sourceLessonSlug: "the-status-question",
          },
          {
            prompt: "What did Congress appropriate $2.5 million for in the fiscal year 2014 omnibus?",
            options: ["Voter education and a plebiscite on Puerto Rico's status", "A Government Accountability Office study of readiness for statehood", "The administration of the Financial Oversight and Management Board", "Compensation for AABD recipients excluded from SSI in Puerto Rico"],
            correctIndex: 0,
            explanation: "The conditions attached appear to exclude the enhanced commonwealth option, and the funds remained unexpended.",
            sourceLessonSlug: "the-status-question",
          },
          {
            prompt: "What happened to those plebiscite education funds?",
            options: ["They remained unexpended", "They were spent on the 2017 plebiscite after the ballot was amended", "They were rescinded by Congress in the following appropriations act", "They were transferred to the Oversight Board created in 2016"],
            correctIndex: 0,
            explanation: "The Justice Department declined to certify them for the 2017 plebiscite, which is why that ballot was rewritten.",
            sourceLessonSlug: "the-status-question",
          },
          {
            prompt: "Which of these is a fair one-sentence summary of the status record?",
            options: ["Statehood leads among those who vote, by a margin the question shapes", "Statehood has been rejected in every plebiscite since the year 2012", "Independence has grown steadily and now leads among younger voters", "The island's parties agree on the meaning of the recent results"],
            correctIndex: 0,
            explanation: "Participation ranged from 23 percent to 63.61 percent and ballot design differed in every vote, which is why the margin moves.",
            sourceLessonSlug: "the-status-question",
          },
          {
            prompt: "What is the relationship between a plebiscite result and congressional action?",
            options: ["A plebiscite binds nobody and Congress may act or not act", "A majority for statehood obliges Congress to admit the territory", "Congress must schedule a vote within one year of any plebiscite", "Only a plebiscite Congress authorized in advance has any legal effect"],
            correctIndex: 0,
            explanation: "Congress may change status by statute whenever it chooses, and it has done nothing since the House vote of December 2022.",
            sourceLessonSlug: "the-status-question",
          },
          {
            prompt: "Which body certified the 2024 plebiscite results this course reports?",
            options: ["The Puerto Rico State Elections Commission", "The Congressional Research Service in report R44721", "The Financial Oversight and Management Board for Puerto Rico", "The Department of Justice, which certified the ballot in advance"],
            correctIndex: 0,
            explanation: "Its island-wide results file is dated 11 February 2025, well after the November 2024 vote.",
            sourceLessonSlug: "the-status-question",
          },
          {
            prompt: "What is the version date of the CRS report this course relies on?",
            options: ["6 June 2024", "11 February 2025, matching the certified election results file", "15 December 2022, the day the House passed the status bill", "17 October 2022, the day certiorari was denied in Fitisemanu"],
            correctIndex: 0,
            explanation: "That date is why the report covers the 2012, 2017 and 2020 votes and not the one held in November 2024.",
            sourceLessonSlug: "the-status-question",
          },
          {
            prompt: "How many votes did the three options draw between them in 2024?",
            options: ["1,059,212", "1,264,065, which is the total number of ballots cast", "1,987,317, which is the number of registered voters", "620,782, which is the number of votes for statehood alone"],
            correctIndex: 0,
            explanation: "That figure is the denominator for the 58.6 percent, and the total ballots figure is the denominator for the 49.1 percent.",
            sourceLessonSlug: "the-status-question",
          },
          {
            prompt: "What does the phrase 'overvoted ballots' mean in the certified results?",
            options: ["Ballots marking more choices than the question allowed", "Ballots cast by voters who had already voted elsewhere", "Ballots counted twice by the electronic tabulation system", "Ballots cast after the polls had officially closed"],
            correctIndex: 0,
            explanation: "There were 23,610 of them in 2024, alongside 181,243 blank ballots and no null ballots recorded.",
            sourceLessonSlug: "the-status-question",
          },
          {
            prompt: "Which statement about the Territory Clause and time is accurate?",
            options: ["It sets no deadline, so the current arrangement continues by decision", "It requires Congress to resolve a territory's status within ten years", "It automatically converts a territory to a state after a century", "It obliges Congress to hold a plebiscite after every decennial census"],
            correctIndex: 0,
            explanation: "Every list was drafted and every exclusion voted on, and inertia is not the reason any of it persists.",
            sourceLessonSlug: "reading-it-yourself",
          },
          {
            prompt: "What did the House-passed status bill omit from its proposed ballot?",
            options: ["An option for maintaining the status quo", "An option for sovereignty in free association with the United States", "An option for independence from the United States", "An option for statehood, which had already won in 2020"],
            correctIndex: 0,
            explanation: "The competing Senate bill would have added a commonwealth option, which is one of the ways the two proposals differed.",
            sourceLessonSlug: "the-status-question",
          },
          {
            prompt: "Which of these is the best reason to read the definitions section of a statute first?",
            options: ["It decides whether the statute reaches a territory at all", "It lists the penalties the statute imposes for a violation", "It names the agency responsible for enforcing the statute", "It states the date on which the statute takes effect"],
            correctIndex: 0,
            explanation: "Five statutes in this course draw five different lists, and each list is in a definitions section.",
            sourceLessonSlug: "reading-it-yourself",
          },
          {
            prompt: "What is a slip opinion?",
            options: ["A court's opinion as first published, before the bound reporter", "A summary of an opinion prepared by the Reporter of Decisions", "An opinion issued without argument on an emergency application", "A dissent circulated before the majority opinion is finalized"],
            correctIndex: 0,
            explanation: "It is citable by docket number and date, which is how this course cites the opinions it read.",
            sourceLessonSlug: "reading-it-yourself",
          },
          {
            prompt: "In which years were Puerto Rico's four most recent status votes held?",
            options: ["2012, 2017, 2020 and 2024", "1967, 1993, 1998 and 2012, before the fiscal crisis began", "2016, 2018, 2020 and 2022, aligned with each general election", "2020, 2021, 2022 and 2024, once in each year after PROMESA"],
            correctIndex: 0,
            explanation: "Statehood led in all four, on ballots that asked materially different questions and drew very different turnout.",
            sourceLessonSlug: "the-status-question",
          },
          {
            prompt: "What is the difference between the 2017 and 2020 ballots that most affects how the results read?",
            options: ["One had three options and a boycott, the other a single question and real turnout", "One was certified by the Justice Department and the other was not", "One counted blank ballots in the total and the other discarded them", "One was authorized by Congress and the other was held without approval"],
            correctIndex: 0,
            explanation: "97.2 percent on 23 percent turnout and 52.5 percent on 52.2 percent turnout are not comparable numbers.",
            sourceLessonSlug: "the-status-question",
          },
          {
            prompt: "Which body may admit Puerto Rico as a state?",
            options: ["Congress", "The Supreme Court, by overruling the Insular Cases in an appropriate case", "The President, by proclamation following a majority in a plebiscite", "The Puerto Rico State Elections Commission, by certifying a result"],
            correctIndex: 0,
            explanation: "Under the Territory Clause it may change status by statute, and no plebiscite obliges it to do so.",
            sourceLessonSlug: "the-status-question",
          },
          {
            prompt: "What did the House-passed status bill propose if no option won a majority?",
            options: ["A runoff between the two options with the most votes", "Automatic adoption of the option with the most votes cast", "A second plebiscite with the status quo added to the ballot", "Referral of the question to the Financial Oversight and Management Board"],
            correctIndex: 0,
            explanation: "The bill set a plebiscite date and a later runoff date, and the Senate never took the measure up.",
            sourceLessonSlug: "the-status-question",
          },
          {
            prompt: "What is the practical warning this course draws from the two 2024 percentages?",
            options: ["A percentage is meaningless without its denominator", "Certified results should be treated with the same caution as estimates", "Blank ballots should always be counted as votes against the leading option", "A plebiscite with a turnout above sixty percent settles the question"],
            correctIndex: 0,
            explanation: "58.6 percent and 49.1 percent describe the same votes, and only the denominator differs.",
            sourceLessonSlug: "the-status-question",
          },
          {
            prompt: "Which framework does a claim about retained sovereignty belong to?",
            options: ["Tribal sovereignty", "Territorial status under Article IV of the Constitution", "The Insular Cases and the incorporation doctrine", "The Twenty-Third Amendment and presidential electors"],
            correctIndex: 0,
            explanation: "The territorial claim asks to be brought inside the Constitution; the tribal claim asserts powers that were never surrendered.",
            sourceLessonSlug: "not-the-same-as-tribal-sovereignty",
          },
          {
            prompt: "What mistake does this course warn against most directly in the tribal comparison?",
            options: ["Treating two different legal questions as one", "Assuming that tribal nations wish to be admitted as states", "Believing the Insular Cases apply to reservations as well as territories", "Reading the Indian Commerce Clause as a source of territorial power"],
            correctIndex: 0,
            explanation: "The doctrines share an origin and a habit of mind, and they do not share a claimant, a question or a remedy.",
            sourceLessonSlug: "not-the-same-as-tribal-sovereignty",
          },
          {
            prompt: "Which of these best describes what this course asks a learner to be able to do?",
            options: ["Check any sentence in it and disagree with it correctly", "Recite the holding of each Insular Case from memory", "Advocate for a particular status option in Puerto Rico", "Predict how the Supreme Court will rule on the next petition"],
            correctIndex: 0,
            explanation: "Every citation was chosen so that a reader can verify it, which is what a civics course owes its reader.",
            sourceLessonSlug: "reading-it-yourself",
          },
        ],
      },
    },
  ],
};
