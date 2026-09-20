import type { AuthoredCourse } from "./authored-course";

// "Who the Rule Leaves Out: Delia Derbyshire, Ruby Payne-Scott, Zitkala-Šá, and the Paper Each Rule Left"
// (Culture & History). Slug to be registered: `who-the-rule-leaves-out`.
//
// RESEARCH TIER: 1. The brief IS the dossier
// (`plans/future-courses/uncredited/2026-09-18-delia-derbyshire-brief.md`, second pass 2026-09-19;
// its section 6 is the verification log), per docs/course-method/README.md. BAM approved the brief
// on 2026-09-19 and amended it on 2026-09-20; see the next block.
//
// PRIVATE, FREE, NO SERIES CODE. BAM, 2026-09-19: private courses carry no CREDIT code. It keeps
// the series SLUG only, the way `whose-name-is-on-the-score` and `who-built-the-blood-bank` do.
// Every `sourceLessonSlug` below is course-internal, so the registered slug does not affect them.
//
// WHAT THE BRIEF PROPOSED AND WHAT BAM DECIDED (two changes, both on 2026-09-20). The brief
// recommended ONE course with THREE cases: Zitkala-Sa's register, Derbyshire's department,
// Payne-Scott's statute. BAM first said to build TWO and point at her shipped standalone course;
// later the same day he reversed that and said to build ALL THREE and to keep her standalone course
// as well, with each pointing at the other. This file is the three-case version, and Section 4 was
// ADDED to a finished two-case course rather than the course being restructured around her.
//
// SO THERE ARE NOW TWO COURSES ON THE SAME CASE, ON PURPOSE. `whose-name-is-on-the-score` is the
// DEPTH: five registration cards read as images, the 1909 Act section by section, the press of 1913,
// the 1935 and 1938 claims, the late handwritten line. Section 4 HERE is the INSTRUMENT: one card,
// one unrecorded assignment and the later claims, set beside a practice and a statute so that the
// three can be compared. Section 4 says that in the lesson text and sends the learner there, lessons
// 1, 13 and 14 say it again, and six quiz questions across three banks carry it. BAM is adding the
// pointer in the other direction, from her course to this one, once this slug exists.
//
// THE ARGUMENT, and it must not be flattened into three biographies: a rule that applied to everyone
// removed one person from the record, and THE RECORD IT LEAVES DIFFERS BY INSTRUMENT. One rule was
// written down and quoted back at the woman it removed, in a letter she could hold (Payne-Scott).
// One was never written down anywhere anyone has read, and is visible only in its effects
// (Derbyshire). One was an ordinary public statute whose ordinary use produced a register entry
// naming somebody else (Zitkala-Sa). Section 5 is built on those three sentences.
//
// TWO MORE BINDING CONDITIONS, carried over with her case from `whose-name-is-on-the-score` and NOT
// optional: (1) Section 4 NEVER describes the Sun Dance ceremony and NEVER describes the opera's
// staging of it. It names the ceremony as the opera's subject, gives Hafen's own reason in her own
// words, and stays on the paperwork; lessons 1 and 10 both state this as a RULE and not a gap.
// (2) NO AUTHORSHIP SHARE IS EVER ASSERTED, for the opera or for the theme. Lesson 11 prints the
// National Park Service's "wrote the libretto and songs" as an EXHIBIT of the claim the course will
// not make, and says which documents fail to support it.
//
// THE BINDING EVIDENCE CONDITION FROM THE BRIEF, which BAM restated on 2026-09-20 and which is
// absolute: NO LESSON SAYS THE BBC HAD A WRITTEN POLICY FORBIDDING CREDIT, because nobody has read
// that document. Lessons say what the papers say, which is three things:
//   1. the Workshop was described as a unit in the BBC's own 1963 engineering monograph, which names
//      no maker of any sound in it;
//   2. a Head of Drama (Sound) could not get the names printed, per his memo of 30 June 1964, quoted
//      in full with its archive reference by a named historian who worked the archive; and
//   3. Derbyshire said in her own words that the BBC would not allow the royalty split.
// Where a secondary source asserts the rule as fact (CBC, 2017: "Because of BBC rules at the time"),
// the lesson attributes it to that source and says the document has not been produced. Lesson 12
// teaches the difference as the course's main skill.
//
// THE SECOND CONDITION, for Payne-Scott: HER OWN LETTER OF 20 FEBRUARY 1950 IS NOT QUOTED. The
// National Archives of Australia's teaching page prints the CHAIRMAN'S letter in full, and his
// letter refers to hers, paraphrases her and answers her. The sentence plans/83 quotes from her
// reply is NOT on that page. Lesson 8 is built on that gap: the course quotes the Chairman quoting
// her, says so in those words, and files a research check.
//
// FETCH OR DO NOT CITE. The brief did the research on 2026-09-18 and 2026-09-19. THIS PASS RE-FETCHED
// AND READ, on 2026-09-20, every source it cites except where noted:
//   - BBC Engineering Monograph No. 51, "Radiophonics in the BBC" (November 1963). PDF downloaded
//     live from World Radio History and read end to end, text extracted from the page streams. Every
//     quotation in lesson 4 was checked against that text, including the staffing paragraph, the
//     acknowledgment, the conclusions and the whole appendix.
//   - Butler (2014), the author's accepted version, via the Internet Archive capture of 2023-12-02
//     (the live Manchester file still 403s). Read in full, notes included. This pass confirmed the
//     Esslin memo, its note 28 reference (DD332), the 1964 information sheet (DD333) with its "with"
//     rather than "and", the 2013 credit in note 17, the Briscoe memo of 4 January 1974 (R97/31/1),
//     the Naked Sun request (T5/1, 702/1), the Daily Mirror piece of 7 December 1963, and the 1965
//     press coverage that named her.
//   - The Jo Hutton interview, via the Internet Archive capture of 2005-09-06. The page itself says
//     the interview was recorded on 24 February 2000, which matches Butler's note 26. Every sentence
//     quoted in lessons 3, 5 and 10 was read on that page.
//   - Hodgson's Guardian obituary (7 July 2001), fetched live. It carries BOTH dates that the
//     Manchester archive's biographical note compresses: "she joined the BBC in 1960 as a studio
//     manager" and "Delia had arrived at the workshop in 1962".
//   - Ayres, A History of the Doctor Who Theme, via the Internet Archive capture of 2011-01-06.
//   - Winter (2015), the York thesis, fetched live as a PDF and searched in the relevant passages.
//   - Butler (2019), fetched live at the DOI.
//   - University of Manchester Library's Archives Hub record GB 133 DDA, via the Internet Archive
//     capture of 2023-02-25.
//   - CBC Radio, As It Happens, 28 November 2017, fetched live.
//   - NPR, 16 October 2017, read on the WBUR mirror of the NPR piece (npr.org timed out this pass).
//     The "Legend has it" sentence and the "Rob Grainer" misspelling were both read there.
//   - National Archives of Australia, the Payne-Scott teaching page, via the Internet Archive
//     capture of 2025-02-16. THE LIVE PAGE COULD NOT BE REACHED FROM HERE on 2026-09-20 either (two
//     fetch attempts and two curl attempts, all timed out), exactly as the brief reported. The full
//     transcript, the "About this record" note and the "Educational value" note were all read in the
//     capture, and every Payne-Scott quotation in Section 3 comes from that reading.
//
// SECTION 4'S SOURCES WERE NOT RE-FETCHED BY THIS PASS, and that is said rather than blurred. The
// Zitkala-Sa material comes from her APPROVED brief's verification log
// (`plans/future-courses/uncredited/2026-09-18-zitkala-sa-brief.md`, section 6, fetched 2026-09-18)
// and from the shipped `whose-name-is-on-the-score`, whose own pass re-read all five registration
// card images on 2026-09-20. Every sentence in Section 4 traces to one of:
//   - the 1912 application card, front and back, read as an image (the typed heading, the DEC 12
//     1912 stamp, the printed form wording, the claimant blank and the author blank);
//   - the Copyright Office blog post of 31 March 2021 (byline Nicole McNew Chen), for "despite her
//     contributions, Zitkala-Sa does not appear on the copyright records for the work" and the
//     caption naming Hanson sole claimant;
//   - Smith (2001), for the December 1912 deposit, the February 1913 premiere, the Musical America
//     headline, the unrecorded assignment of an undivided half interest notarised in Uintah County,
//     the acknowledgment of her role in the pre-1935 press, and the late handwritten line;
//   - Hafen (1998), for the title page, the 1935 and 1938 sole-proprietorship claims, the later
//     assignment to BYU, the memoir's acknowledgment of her as coauthor, the outlawing of the
//     practice on the Uintah and Ouray reservation, and the sovereignty sentence;
//   - the National Park Service page (2022), for her birth date and place, for the libretto-and-songs
//     claim the course refuses, and for that page's own 1938/1928 self-contradiction;
//   - the Copyright Act of 1909, sections 42, 44 and 46, quoted from the Copyright Office's own PDF.
//   Smith's volume is Women & Music 5; PAGE NUMBERS ARE STILL UNCONFIRMED, so the reference carries
//   the volume and no page range, exactly as `whose-name-is-on-the-score` does.
//
// WHAT THIS PASS ADDED TO THE BRIEF by reading the sources itself:
//   - The monograph's own account of who does the creating: "The staff of the Workshop then begin
//     their creation of the required sounds", and "this is a deliberate creative and interpretative
//     process". The BBC describes the creative act and leaves the creator unnamed in the same pages.
//   - The monograph and the interview describe the SAME MACHINE. Section 4.5 of the monograph
//     describes the Leevers-Rich eight-track recorder; Derbyshire calls it "a bit of a white
//     elephant". The document names the equipment and not the operator. Lesson 4 uses this.
//   - The 1964 BBC information sheet says more than its heading. Butler quotes it describing music
//     "constructed note by note, with infinite patience, and without the use of any live
//     instrumentalists whatsoever", and a score carrying "certain rather abstract indications of
//     tonal quality such as 'clouds', 'wind bubble' etc". The BBC described the work in detail in
//     the same document that named no worker.
//   - The Daily Mirror's article of 7 December 1963 named the PRODUCER and not the realiser.
//   - In 1965 several papers named her at length. So the non-naming was specific to the instruments
//     the BBC controlled, which is a sharper claim than "she was unknown", and lesson 5 makes it.
//   - The NAA transcript carries more of the mechanism than the brief quoted: the CSIR Act's section
//     14A(2), the regulation made under it, the note that the regulation "was based on a similar
//     Regulation promulgated under the Public Service Act", and the Chairman's own sentence that on
//     the Superannuation Act "there is no ground for equivocation or varying interpretation".
//   - The NAA page also states what happened next: exposure in 1950, forced retirement from
//     permanent staff, reinstatement on a temporary basis, and resignation in July 1951.
//
// CLAIMS DROPPED FOR LACK OF EVIDENCE are listed at the BOTTOM of this file with the proposed
// research checks and the registration block.
//
// House style, matching scripts/data/drew-blood-bank-course.ts and
// scripts/data/whose-name-is-on-the-score-course.ts: `section` on every lesson; flush-left
// single-line `:::reveal q ||| a`; a `## Vocabulary` block of 3 to 6 lesson-specific terms; APA 7
// `## Sources`; a quiz per teaching section (pool sized to the audit-course density target, serving
// 5, passing 80, shuffled) plus a final pooling 42 and serving 10, placed LAST; every question
// carries `explanation` + `sourceLessonSlug`. Correct options are written SHORT and distractors long
// and specifically wrong, so check-longest-option passes by construction. No em dashes in
// user-visible copy.
export const WHO_THE_RULE_LEAVES_OUT_COURSE: AuthoredCourse = {
  title: "Who the Rule Leaves Out: Delia Derbyshire, Ruby Payne-Scott, Zitkala-Šá, and the Paper Each Rule Left",
  description:
    "Three women were removed from three records by rules that applied to everybody, and the paper each rule left behind is completely different. Delia Derbyshire built the Doctor Who theme by hand at the BBC Radiophonic Workshop in 1963, from oscillators, filtered noise and cut tape, and received no individual credit for it. In November 1963 the BBC published its own printed account of that Workshop, describing in detail how the sounds were made and naming not one of the people who made them. In June 1964 the Head of Drama (Sound) wrote to the Workshop's manager that he wished it were possible for the names of contributors of this calibre to be mentioned, and it was not. Derbyshire said later that the composer offered her half the royalties and that the BBC would not allow it. Nobody, in sixty years, has produced the rule itself in writing. Ruby Payne-Scott was a radiophysicist at the Radiophysics Laboratory in Sydney, and in March 1950 the Chairman of CSIRO wrote her a personal letter that quotes the rule at her twice: a regulation deeming a female officer to have retired from the service upon her marriage, and a clause of the Superannuation Act deeming her to have resigned from the date of it. The National Archives of Australia prints that letter in full, so a learner can read the rule in the employer's own words. Zitkala-Šá made an opera with a music teacher in Utah, and two months before its first production he filed a piano-vocal score with the United States Copyright Office on a card that names him in every blank it has, as claimant and as author. A month after the premiere he signed away an undivided half interest to her, had it notarised, and never recorded it. That is the course: one rule written down and quoted back at the woman it removed, one never written down at all and visible only in the documents that do not name her, and one an ordinary public statute whose ordinary use produced a public entry naming somebody else. It teaches what each instrument can record, what none of them can, and what a correction to each one actually reaches. It keeps four rules throughout. It never says the BBC had a written policy forbidding credit, because nobody has read that document. It never quotes Ruby Payne-Scott's own letter, because the page that prints the Chairman's reply does not print hers. It never describes the Sun Dance ceremony or the opera's staging of it. And it never says how much of any of this work was whose. A companion course in this catalog, Whose Name Is on the Score, spends its whole length on the register case, reading all five registration cards as images and the 1909 Copyright Act section by section. This course teaches that case as an instrument, set beside the other two, and points there for the depth.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1 — The rule, and the paper it leaves
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "a-rule-that-applied-to-everyone",
      title: "1 · A rule that applied to everyone",
      section: "Section 1 · The rule, and the paper it leaves",
      body: `Three women, three records, three countries, across fifty years. In each case a rule that applied to everybody in a category took one particular person out of a record, and in none of the three did anyone take her work and put their own name on it. The man applying the rule was an official following a practice, an official quoting a regulation, or a collaborator filling in a government form. The interesting question is not who to blame. It is what each rule left behind on paper, because that is what a learner can actually read, and it is completely different in all three cases.

**Delia Derbyshire, London, 1963.** She was a studio manager at the BBC, working in the Radiophonic Workshop, a small unit that made sounds for drama. The composer Ron Grainer wrote the theme for a new television programme on a single sheet of manuscript paper and sent it from Portugal, "leaving the Workshop to get on with it" (Ayres, n.d.). Derbyshire, with the assistance of Dick Mills, built every sound of it by hand in August 1963 from oscillators, filtered white noise and cut tape (Ayres, n.d.). She received no individual credit for it at the time, and no royalties (Winter, 2015). She said later that Grainer offered her half of his royalties "but the BBC wouldn't allow it" (Hutton, 2000). The historian who has worked her archive describes the non-crediting as the standard practice of the period, applying to all Workshop staff rather than to her (Butler, 2014). **What nobody has produced, in sixty years, is that rule in writing.**

**Ruby Payne-Scott, Sydney, 1950.** She was a radiophysicist at the Radiophysics Laboratory, where she and Joan Freeman had been the first two women physicists employed, in June 1941 (National Archives of Australia [NAA], n.d.). She had married and had not told her employer. When the marriage became known, the Chairman of CSIRO wrote to her personally on 3 March 1950, and his letter quotes the rule at her twice: a regulation under which "a female officer shall be deemed to have retired from the service of the Council upon her marriage", and a clause of the Superannuation Act under which "a female officer who marries after the commencement of this Section shall for the purposes of this Act be deemed to have resigned from the date of her marriage" (NAA, n.d.). **That letter survives, it is held by a national archive, and the archive prints the whole of it on a page built for students.** A learner can read the rule in the employer's own words in about four minutes.

**Zitkala-Šá, Utah, 1912.** She was a Yankton Dakota writer and musician who made an opera with a local music teacher named William F. Hanson. Two months before its first production, on 12 December 1912, Hanson filed a piano-vocal score with the United States Copyright Office, and the card he filled in names him in every blank it has, as claimant and as author (U.S. Copyright Office, 1912). The Copyright Office's own account of her says it plainly: "despite her contributions, Zitkála-Šá does not appear on the copyright records for the work" (Chen, 2021). **The rule here is a statute anyone can read, and what it produced is a public entry that a stranger can search today.**

**So the course has its subject.** The same mechanism, a rule applied evenly that removed a specific person, comes in three grades of paper. One rule was written down and quoted back at the woman it removed. One was never written down anywhere that anyone has read, and can be seen only in its effects: a BBC publication that describes the work and names no worker, a memo from a Head of Department asking for names to be printed and not getting them, and the recollection of the woman herself. And one produced a public register entry, filed by somebody else, naming him.

**One of these three cases also has a whole course of its own, and this one points at it.** ***Whose Name Is on the Score*** follows Zitkala-Šá's case in depth: it reads **all five registration cards as images**, works through the **1909 Copyright Act section by section**, and reads **the newspapers of 1913**. Section 4 here teaches her case as an **instrument**, set beside the other two, and sends you there for the rest.

**Four rules this course keeps, stated at the front because they are rules and not gaps.**

**Rule one: no lesson here says the BBC had a written policy forbidding credit.** Not one. The claim is everywhere in the secondary literature and in the press, including a national broadcaster reporting flatly that "because of BBC rules at the time, however, she wasn't credited for her contribution to the music" (CBC Radio, 2017). No archive reference is given there, and nobody in the scholarship quotes the rule either. What this course says instead is what the papers say: the Workshop was credited as a unit in the BBC's own printed account of it; a Head of Drama (Sound) could not get the names printed; and Derbyshire said the BBC would not allow the royalty split. Lesson 12 is built on the difference, because it is the most useful thing in the course.

**Rule two: Ruby Payne-Scott's own letter of 20 February 1950 is not quoted here.** The Chairman's reply refers to it, paraphrases it and answers it, and the page that prints his letter does not print hers. So this course quotes him quoting her, and says so every time. A sentence attributed to her in other accounts is not printed in this course at all. Lesson 8 explains why that matters more than it looks.

**Rule three: this course never describes the Sun Dance ceremony, or the opera's staging of it.** The opera took its subject from the Sun Dance, and at the time of the first production the practice was outlawed on the Uintah and Ouray reservation (Hafen, 1998). Hafen, who wrote the fullest scholarly study of the collaboration and writes as a Native woman and academic, says that were the whole opera "reconstructed or performed now, certainly it would violate contemporary notions of artistic and tribal sovereignty and religious respect" (Hafen, 1998). The credit question does not need the ceremony. It needs the paperwork.

**Rule four: this course never says how much of any of this work was whose.** Not for the opera and not for the theme. No fraction, no phrase like "most of the music", no hedge that smuggles one in. The documents can say who filed, who signed, who was named and when. They cannot say that, and Section 4 shows a federal web page making exactly that claim anyway.

:::reveal What is the single shape that all three cases in this course share? ||| A rule that applied to everybody in a category removed one specific person from a record, without anyone taking her work and putting their own name on it.

:::reveal What is the difference between the three cases that this whole course is built on? ||| The paper each rule left. Payne-Scott's rule was written down and quoted back at her, the BBC's practice was never written down anywhere anyone has read, and Zitkala-Šá's left a public register entry filed by somebody else.

:::reveal Which of the three cases also has a whole course of its own, and what does that course add? ||| Zitkala-Šá's. Whose Name Is on the Score reads all five registration cards as images, works through the 1909 Copyright Act section by section, and reads the newspapers of 1913.

## Vocabulary
- **Instrument**: the particular document a credit or a rule is written on, considered together with who reads it and what it obliges anyone to do.
- **Convention**: a practice an employer applies to everyone in a category, whether or not it was ever written down.
- **Realisation**: at the BBC Radiophonic Workshop, the job of turning somebody else's written composition into finished sound. The Manchester archive keeps the word in quotation marks when it describes hers.
- **Deemed**: in the Australian regulation and statute quoted here, treated by law as though something had happened. A married officer was deemed to have retired whether or not she had resigned.

## Sources
Ayres, M. (n.d.). *A history of the Doctor Who theme*. http://markayres.rwsprojects.co.uk/DWTheme.htm
Butler, D. (2014). "Way out - of this world!" Delia Derbyshire, Doctor Who and the British public's awareness of electronic music in the 1960s. *Critical Studies in Television*, *9*(1), 62-76. https://doi.org/10.7227/CST.9.1.5
CBC Radio. (2017, November 28). Doctor Who theme's co-creator Delia Derbyshire awarded posthumous PhD. *As It Happens*. https://www.cbc.ca/radio/asithappens/as-it-happens-tuesday-edition-1.4422830/doctor-who-theme-s-co-creator-delia-derbyshire-awarded-posthumous-phd-1.4423377
Chen, N. M. (2021, March 31). *Zitkála-Šá: On creativity, copyright, and cultural empowerment* [Blog post]. Library of Congress, Copyright Office. https://blogs.loc.gov/copyright/2021/03/zitkla-on-creativity-copyright-and-cultural-empowerment/
Hafen, P. J. (1998). A cultural duet: Zitkala Ša and *The Sun Dance Opera*. *Great Plains Quarterly*, *18*(2), 102-111. https://digitalcommons.unl.edu/greatplainsquarterly/2028/
Hutton, J. (2000). *Radiophonic ladies* [Interview with Delia Derbyshire recorded 24 February 2000]. Sonic Arts Network. http://www.sonicartsnetwork.org/ARTICLES/ARTICLE2000JoHutton.html
National Archives of Australia. (n.d.). *Rules for married women working at CSIRO: Reply to radiophysicist Ruby Payne-Scott* (NAA: A8520, PH/PAY/002) [Learning resource]. Student Research Portal. https://www.naa.gov.au/students-and-teachers/student-research-portal/learning-resource-themes/society-and-culture/gender-and-sexuality/rules-married-women-working-csiro-reply-radiophysicist-ruby-payne-scott
U.S. Copyright Office. (1912). [Application card for *The Sun Dance Opera*, front and back]. Copyright card catalog, 1909-1937. Library of Congress. https://tile.loc.gov/storage-services/service/copyright/hprcatcard/19/09/19/37/HA/M-/HA/RR/N/19091937HAM-HARRN/CC19091937HAM-HARRN.0672a.jpg
Winter, T. (2015). *Delia Derbyshire: Sound and music for the BBC Radiophonic Workshop, 1962-1973* [Doctoral thesis, University of York]. White Rose eTheses Online. https://etheses.whiterose.ac.uk/id/eprint/11590/1/TeresaWinterThesis.pdf`,
    },
    {
      slug: "what-an-instrument-records",
      title: "2 · What an instrument records, and what it cannot",
      section: "Section 1 · The rule, and the paper it leaves",
      body: `Credit sounds like an opinion and behaves like a document. So does a rule. Ask who made a thing, or why somebody left a job, and people answer with a feeling. Ask where the answer is written down, and the feeling turns into a short list of specific pieces of paper, each reaching a different number of people and binding a different number of them. This catalog calls each of those pieces of paper an **instrument**, and the word is borrowed here from *Whose Name Is on the Score*, which uses it for a copyright register.

This course teaches all three of them, one section each for the two new ones and Section 4 for the register, and the comparison is the point.

| Instrument | Where it lives | What it records | What it cannot record |
|---|---|---|---|
| An employer's practice | nowhere, or in a file nobody has read | its own effects, in the documents it shapes | itself, unless somebody wrote it down |
| A statute or regulation | in the published law, and quoted in a letter | exactly what it requires, in words | whether it was applied fairly in one case |
| A public register | in a government office, searchable by anyone | who filed, who claimed, and when | who actually did the work |

Read the third column and then the fourth. Each instrument is good at one thing and blind to another, and the blindness is not a flaw to be complained about. It is the property you have to know in order to use the document at all.

**The hard case is the first row.** A practice that was never written down leaves no direct evidence of itself, which is exactly why people fill the hole with a sentence like "it was BBC policy". So what evidence can exist for it? Four kinds, and this course uses all four.

1. **A document that shows the effect.** The BBC published its own printed account of the Radiophonic Workshop in November 1963, described the work in detail, and named nobody who did it (Brooker, 1963). That is not a rule. It is the rule's footprint, in the employer's own voice, in the right month.
2. **A request that failed.** On 30 June 1964 the Head of Drama (Sound) wrote to the Workshop's manager that he wished it were possible for the names of contributors of this calibre to be mentioned in the credits, and the names were not printed (Butler, 2014). Somebody senior asked, in writing, and could not deliver it. A practice you have to ask permission to break is a practice.
3. **Testimony from the person it affected.** "The boss wouldn't let anybody have any sort of credit" (Hutton, 2000).
4. **The exceptions.** The practice bent at least twice, and a practice that bends is a practice rather than a law. Lesson 6 has both cases.

**Now the falsifiability test**, which is the one thing that separates this from a story that cannot be wrong. *Who Gets Named*, lesson 2, "A mechanism, not a villain", sets three tests for a claim of this kind: is the mechanism named in the literature, does it leave a document, and could evidence show it false? Here is what would show this one false. If Workshop staff were routinely named on screen and in the listings through the early 1960s, the practice did not exist. If Derbyshire alone went unnamed while her colleagues were printed, it was a decision about one person and not a convention. Neither is what the record shows, and Section 2 walks through the documents that settle it.

**The second row is the easy one, and that is itself worth noticing.** A statute does not have to be inferred. It can be quoted, and in Payne-Scott's case it was quoted at her, in a personal letter, by the head of her own organisation, with the Act number and the date of assent attached (NAA, n.d.). Everything a learner has to reconstruct in the Derbyshire case is handed over in one page in the Payne-Scott case. Section 5 asks what follows from that, and the answer is not that one woman was treated worse.

:::reveal What are the four kinds of evidence that can exist for a practice nobody wrote down? ||| A document that shows its effect, a request to break it that failed, testimony from the person it affected, and the exceptions where it bent.

:::reveal What evidence would show that the BBC non-crediting was NOT a general practice? ||| Workshop staff being routinely named on screen and in the printed listings, or Derbyshire alone going unnamed while her named colleagues were printed.

:::reveal What is a public register good at recording, and what is it blind to? ||| It records who filed a claim, who claimed to hold the right, and on what date. It cannot record who actually did the work.

## Vocabulary
- **Practice**: how an organisation habitually behaves, which may be enforced as strictly as a rule while existing in no document.
- **Falsifiable**: stated so that some specific evidence would show it wrong. A claim no evidence could disturb is not a finding.
- **Footprint**: the mark a rule leaves in the documents it shaped, used here when the rule itself cannot be read.
- **Listings**: the printed programme magazine, in Britain the Radio Times, which is a separate credit instrument from the on-screen caption.

## Sources
Brooker, F. C. (1963). *Radiophonics in the BBC* (BBC Engineering Monograph No. 51). British Broadcasting Corporation. https://www.worldradiohistory.com/UK/BBC/BBC-Technical/BBC-Monograph/bbc-monograph-51-OCR.pdf
Butler, D. (2014). "Way out - of this world!" Delia Derbyshire, Doctor Who and the British public's awareness of electronic music in the 1960s. *Critical Studies in Television*, *9*(1), 62-76. https://doi.org/10.7227/CST.9.1.5
Hutton, J. (2000). *Radiophonic ladies* [Interview with Delia Derbyshire recorded 24 February 2000]. Sonic Arts Network. http://www.sonicartsnetwork.org/ARTICLES/ARTICLE2000JoHutton.html
National Archives of Australia. (n.d.). *Rules for married women working at CSIRO: Reply to radiophysicist Ruby Payne-Scott* (NAA: A8520, PH/PAY/002) [Learning resource]. Student Research Portal. https://www.naa.gov.au/students-and-teachers/student-research-portal/learning-resource-themes/society-and-culture/gender-and-sexuality/rules-married-women-working-csiro-reply-radiophysicist-ruby-payne-scott`,
    },
    {
      slug: "section-1-quiz",
      title: "Section 1 quiz · The rule, and the paper it leaves",
      section: "Section 1 · The rule, and the paper it leaves",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What shape do all three cases in this course share?",
            options: [
              "A general rule removed one person from a record",
              "A colleague signed his own name to work that a woman had finished on her own",
              "A court decided that an employer owned the work of everyone it employed",
              "A government office lost the paperwork that would have recorded the second maker",
            ],
            correctIndex: 0,
            explanation:
              "None of the three is a stolen byline. In each, a rule that applied to everybody in a category took one particular person out of a record, and the man applying it was following a practice, quoting a regulation or filling in a form.",
            sourceLessonSlug: "a-rule-that-applied-to-everyone",
          },
          {
            prompt: "What is the difference between the three cases that this course is built on?",
            options: [
              "The paper each rule left behind",
              "The seniority of the person who applied it, since one was a chairman and one a manager",
              "The decade, because one rule dated from the 1940s and the other from the 1970s",
              "Whether the woman kept working afterwards, since one stayed and one was dismissed",
            ],
            correctIndex: 0,
            explanation:
              "Payne-Scott's rule was written down and quoted back at her, the BBC practice was never written down anywhere anyone has read, and Zitkala-Šá's left a public register entry filed by somebody else.",
            sourceLessonSlug: "a-rule-that-applied-to-everyone",
          },
          {
            prompt: "What job did Delia Derbyshire hold at the BBC when she made the Doctor Who theme?",
            options: [
              "Studio manager",
              "Staff composer in the BBC's music department, on a contract that assigned her copyrights",
              "Freelance arranger, hired for the theme and paid a single fee for the recording",
              "Senior engineer in charge of the Radiophonic Workshop's equipment and its maintenance",
            ],
            correctIndex: 0,
            explanation:
              "She was a BBC studio manager working in the Radiophonic Workshop. The job category matters: the BBC did not employ composers in that unit, which is lesson 3.",
            sourceLessonSlug: "a-rule-that-applied-to-everyone",
          },
          {
            prompt: "How did Ron Grainer's theme reach the Radiophonic Workshop?",
            options: [
              "On one sheet of manuscript, sent from Portugal",
              "As a full orchestral score delivered in person by the composer at a session in Maida Vale",
              "As a tape recording of a band playing it, which the Workshop was asked to copy exactly",
              "As a set of written instructions with no notation at all, later reconstructed by the staff",
            ],
            correctIndex: 0,
            explanation:
              "Ayres records that Grainer composed the theme on a single sheet of A4 manuscript and sent it from his home in Portugal, leaving the Workshop to get on with it.",
            sourceLessonSlug: "a-rule-that-applied-to-everyone",
          },
          {
            prompt: "Which phrase does Mark Ayres use for what Grainer left the Workshop to do?",
            options: [
              "Get on with it",
              "Reproduce the score exactly as written, note for note, without any further invention",
              "Provide a demonstration tape that a band of session players could then perform live",
              "Supply the special effects only, while the melody was recorded by conventional means",
            ],
            correctIndex: 0,
            explanation:
              "Ayres: Grainer composed the theme on a single sheet of A4 manuscript and sent it over from his home in Portugal, leaving the Workshop to get on with it.",
            sourceLessonSlug: "a-rule-that-applied-to-everyone",
          },
          {
            prompt: "Who assisted Derbyshire on the original version of the theme, and when was it made?",
            options: [
              "Dick Mills, in August 1963",
              "Brian Hodgson, in November 1963, in the fortnight before the first episode was broadcast",
              "Desmond Briscoe, in 1962, during her first weeks on attachment to the Workshop",
              "Daphne Oram, in 1958, when the Workshop was first set up at the Maida Vale studios",
            ],
            correctIndex: 0,
            explanation:
              "Ayres: Delia Derbyshire, with assistant Dick Mills, created the original version of the theme in August 1963.",
            sourceLessonSlug: "a-rule-that-applied-to-everyone",
          },
          {
            prompt: "What did Derbyshire build the sounds of the theme from?",
            options: [
              "Oscillators, filtered noise and cut tape",
              "A synthesiser keyboard whose presets were chosen to imitate an orchestra of strings",
              "Recordings of an orchestra, slowed down and layered until the instruments were unrecognisable",
              "A library of ready-made effects held by the Workshop and assembled into a new order",
            ],
            correctIndex: 0,
            explanation:
              "Every sound was built by hand. There were no synthesisers available to her in 1963, which is part of why the work took so long and why it is so often described as impossible.",
            sourceLessonSlug: "a-rule-that-applied-to-everyone",
          },
          {
            prompt: "According to Winter, what did Derbyshire and Mills receive at the time for the theme?",
            options: [
              "No individual credit and no royalties",
              "A single one-off payment each, agreed with the composer in place of a share of royalties",
              "A printed credit in the listings magazine but none on screen, and a small royalty share",
              "Full screen credit as arrangers, with the royalties remaining entirely with the composer",
            ],
            correctIndex: 0,
            explanation:
              "Winter: Grainer was credited as the composer and received royalties, in contrast to Derbyshire and Mills, who received no individual credit or royalties at the time.",
            sourceLessonSlug: "a-rule-that-applied-to-everyone",
          },
          {
            prompt: "In her own words, what did Derbyshire say happened to Grainer's offer of half the royalties?",
            options: [
              "The BBC would not allow it",
              "She turned it down herself, because she did not want to be paid twice for the same work",
              "The music publisher refused to register a second name against the composition",
              "It was paid for two years and then stopped when the theme was re-recorded in stereo",
            ],
            correctIndex: 0,
            explanation:
              "Hutton interview: He offered me half of the royalties, but the BBC wouldn't allow it. I was just on an assistant studio manager's salary and that was it.",
            sourceLessonSlug: "a-rule-that-applied-to-everyone",
          },
          {
            prompt: "What has nobody produced in the sixty years since the theme was made?",
            options: [
              "The BBC credit rule in writing",
              "A recording of the original 1963 version, which was wiped by the BBC along with the tapes",
              "Any contemporary press coverage of the Workshop, which was closed to journalists",
              "A single colleague willing to say publicly that she had built the sounds herself",
            ],
            correctIndex: 0,
            explanation:
              "The practice is described by scholars and presupposed by a 1964 memo, but no document stating the rule in the BBC's own words has been read by anyone this course could read.",
            sourceLessonSlug: "a-rule-that-applied-to-everyone",
          },
          {
            prompt: "What was Ruby Payne-Scott's work, and where?",
            options: [
              "Radiophysics, at the Radiophysics Laboratory in Sydney",
              "Broadcast engineering, at the Australian Broadcasting Commission's Sydney studios",
              "Meteorology, at a government weather bureau that shared premises with the university",
              "University teaching in mathematics, with research carried out during vacations only",
            ],
            correctIndex: 0,
            explanation:
              "The National Archives of Australia calls her a radiophysicist at the Radiophysics Laboratory, which sat in the university grounds and belonged to CSIR, and from 1949 to CSIRO.",
            sourceLessonSlug: "a-rule-that-applied-to-everyone",
          },
          {
            prompt: "What does the National Archives of Australia record about Payne-Scott and Joan Freeman in June 1941?",
            options: [
              "They were the laboratory's first women physicists",
              "They were the first women in Australia to be granted a physics degree by any university",
              "They were the first women appointed to the Council of Scientific and Industrial Research",
              "They were the first women physicists in the world to work on radar for a government",
            ],
            correctIndex: 0,
            explanation:
              "The NAA page says the two of them became the first women physicists to be employed by the Radiophysics Laboratory of CSIR at the University of Sydney in June 1941.",
            sourceLessonSlug: "a-rule-that-applied-to-everyone",
          },
          {
            prompt: "On what date did the Chairman of CSIRO write the letter this course reads?",
            options: [
              "3 March 1950",
              "20 February 1950, the same day she sent the written objection that he was answering",
              "3 August 1945, the day the Superannuation Act amendment received assent",
              "17 July 1951, the month she resigned before the birth of her first child",
            ],
            correctIndex: 0,
            explanation:
              "The transcript is headed 3rd March, 1950 and marked PERSONAL. Her own letter of 20 February is the one it answers, and that letter is not printed on the page.",
            sourceLessonSlug: "a-rule-that-applied-to-everyone",
          },
          {
            prompt: "What did the regulation quoted in the Chairman's letter say happened to a female officer on marriage?",
            options: [
              "She was deemed to have retired",
              "She was moved to half pay for a probationary year and then reviewed by the Council",
              "She was required to give three months' notice before the date of the wedding",
              "She was barred from any further promotion but kept her permanent appointment",
            ],
            correctIndex: 0,
            explanation:
              "The regulation deemed a female officer to have retired from the service of the Council upon her marriage, unless the Minister certified special circumstances making her employment desirable.",
            sourceLessonSlug: "a-rule-that-applied-to-everyone",
          },
          {
            prompt: "What did the clause of the Superannuation Act quoted in the letter deem a female officer to have done?",
            options: [
              "Resigned from the date of her marriage",
              "Forfeited the employer's contributions while keeping her own, with interest, until age sixty",
              "Transferred her entitlement to her husband, unless she gave written notice otherwise",
              "Suspended her membership of the scheme until such time as she returned to duty",
            ],
            correctIndex: 0,
            explanation:
              "A female officer who marries after the commencement of this Section shall for the purposes of this Act be deemed to have resigned from the date of her marriage.",
            sourceLessonSlug: "a-rule-that-applied-to-everyone",
          },
          {
            prompt: "Why can a learner read the Payne-Scott rule in about four minutes?",
            options: [
              "A national archive prints the whole letter",
              "The regulation was reprinted on the front page of a Sydney newspaper during the dispute",
              "Her employer published the rule in a staff handbook that libraries still hold in quantity",
              "A court judgment quoted the rule in full and the judgment is available in every law library",
            ],
            correctIndex: 0,
            explanation:
              "The National Archives of Australia prints a full transcript of the Chairman's letter on a page built for students, with the citation A8520, PH/PAY/002 beside it.",
            sourceLessonSlug: "a-rule-that-applied-to-everyone",
          },
          {
            prompt: "Which of the three cases in this course also has a whole course of its own?",
            options: [
              "Zitkala-Šá's, in Whose Name Is on the Score",
              "Delia Derbyshire's, in a course about the BBC Radiophonic Workshop and its credits",
              "Ruby Payne-Scott's, in a course about the Australian marriage bar and the public service",
              "None of them, because each of the three is taught only in this course",
            ],
            correctIndex: 0,
            explanation:
              "That course reads all five registration cards as images, works through the 1909 Copyright Act section by section, and reads the newspapers of 1913. Section 4 here teaches her case as an instrument and sends the learner there for the depth.",
            sourceLessonSlug: "a-rule-that-applied-to-everyone",
          },
          {
            prompt: "What does Section 4 of this course do with Zitkala-Šá's case?",
            options: [
              "Teaches it as an instrument, and points at the other course",
              "Reproduces that course's lessons, so a learner need not read the other course at all",
              "Treats it as disproved, since a register records the claimant rather than the author",
              "Uses it as the final assessment, with questions drawn from that course's own lessons",
            ],
            correctIndex: 0,
            explanation:
              "It teaches the 1912 card, the unrecorded assignment and the later claims as a public register at work. Whose Name Is on the Score carries the depth, including all five cards and the statute.",
            sourceLessonSlug: "a-rule-that-applied-to-everyone",
          },
          {
            prompt: "What is the first rule this course states about the BBC?",
            options: [
              "No lesson says it had a written credit policy",
              "No lesson may quote any BBC document at all, because the corporation's archives are closed",
              "No lesson may name any BBC employee other than Derbyshire, to protect their privacy",
              "No lesson may discuss royalties, because the contracts behind them have never been seen",
            ],
            correctIndex: 0,
            explanation:
              "Nobody has read such a document. The lessons say what the papers say: a publication that names no maker, a memo that asked and failed, and her own account of the royalty refusal.",
            sourceLessonSlug: "a-rule-that-applied-to-everyone",
          },
          {
            prompt: "How does this course handle CBC Radio's sentence that she was not credited because of BBC rules at the time?",
            options: [
              "It attributes the claim to CBC",
              "It repeats the sentence as established fact, since a national broadcaster checked it first",
              "It leaves the sentence out entirely, because a radio programme is never a usable source",
              "It treats the sentence as evidence that the rule was published in the BBC's annual report",
            ],
            correctIndex: 0,
            explanation:
              "The claim is printed with its source named and with the observation that no archive reference is given there and nobody in the scholarship quotes the rule either.",
            sourceLessonSlug: "a-rule-that-applied-to-everyone",
          },
          {
            prompt: "What are the three things this course says instead of asserting a written BBC policy?",
            options: [
              "A publication, a failed request, and her own account",
              "A contract, a rights registration and a payment record, all three held at Caversham",
              "Three interviews given by colleagues after her death, each describing the same refusal",
              "A press release, a union agreement and a schedule of fees agreed with the musicians' union",
            ],
            correctIndex: 0,
            explanation:
              "The Workshop was described as a unit in the BBC's own printed account, a Head of Drama (Sound) could not get the names printed, and Derbyshire said the BBC would not allow the royalty split.",
            sourceLessonSlug: "a-rule-that-applied-to-everyone",
          },
          {
            prompt: "What is the second rule this course states, about Payne-Scott?",
            options: [
              "Her own letter is not quoted",
              "Her scientific results are not described, because the papers behind them were classified",
              "Her employer is never named, because the organisation still exists under that name",
              "Her marriage is not mentioned, because it was a private matter and not an employment one",
            ],
            correctIndex: 0,
            explanation:
              "Her letter of 20 February 1950 is referred to, paraphrased and answered by the Chairman, but it is not printed on the page that prints his. So the course quotes him quoting her and says so.",
            sourceLessonSlug: "a-rule-that-applied-to-everyone",
          },
          {
            prompt: "In the vocabulary of this course, what is an instrument?",
            options: [
              "A document a credit or a rule is written on",
              "A device for making sound, such as the oscillators used to build the theme in 1963",
              "A formal complaint made to an employer about the way a rule has been applied",
              "The government office that keeps the official record of who made a published work",
            ],
            correctIndex: 0,
            explanation:
              "The word is used for the paper, together with who reads it and what it obliges anyone to do. It is borrowed from this catalog's course Whose Name Is on the Score.",
            sourceLessonSlug: "a-rule-that-applied-to-everyone",
          },
          {
            prompt: "What does the word realisation mean in the Radiophonic Workshop's vocabulary?",
            options: [
              "Turning a written composition into finished sound",
              "Publishing a finished recording commercially, in the way the theme was released in 1964",
              "Deciding which member of staff will be credited on a programme before it is broadcast",
              "Recovering usable tape from old programmes so that it can be recorded over again",
            ],
            correctIndex: 0,
            explanation:
              "It is the job Derbyshire did on the theme. The Manchester archive keeps the word in quotation marks when it describes her electronic realisation of Grainer's tune.",
            sourceLessonSlug: "a-rule-that-applied-to-everyone",
          },
          {
            prompt: "In the Australian regulation and statute quoted here, what does deemed mean?",
            options: [
              "Treated by law as though it had happened",
              "Suspected by an employer, and therefore subject to an investigation before any action",
              "Recommended by a minister, but left to the employer to apply case by case",
              "Recorded in a personnel file, whether or not the officer agreed with the entry",
            ],
            correctIndex: 0,
            explanation:
              "A married officer was deemed to have retired whether or not she had resigned, and deemed to have resigned from the date of her marriage for superannuation purposes. The deeming does the work.",
            sourceLessonSlug: "a-rule-that-applied-to-everyone",
          },
          {
            prompt: "Where does this course say the word instrument comes from?",
            options: [
              "The catalog course Whose Name Is on the Score",
              "The 1909 Copyright Act, which uses it for any document that transfers a right in writing",
              "BBC Engineering Monograph No. 51, which uses it for the equipment in the Workshop",
              "The National Archives of Australia, whose teaching page uses it for a personnel file",
            ],
            correctIndex: 0,
            explanation:
              "That course uses the word for a copyright register. This one borrows it and adds two more instruments, an employer's practice and a statute, so the three can be compared.",
            sourceLessonSlug: "what-an-instrument-records",
          },
          {
            prompt: "According to the table in lesson 2, where does an employer's practice live?",
            options: [
              "Nowhere, or in a file nobody has read",
              "In the published staff regulations, which is why it can be quoted at an employee",
              "In the minutes of the board that approved it, which are released after thirty years",
              "In the contract of employment signed by every member of staff on appointment",
            ],
            correctIndex: 0,
            explanation:
              "That is exactly the difficulty. A practice records its own effects in the documents it shapes, but cannot record itself unless somebody wrote it down.",
            sourceLessonSlug: "what-an-instrument-records",
          },
          {
            prompt: "What can a statute or regulation NOT record?",
            options: [
              "Whether it was applied fairly in one case",
              "The words of the requirement it imposes, which have to be reconstructed from practice",
              "The date on which it took effect, which is always left to the department to determine",
              "The class of person it applies to, which is why each case has to be argued separately",
            ],
            correctIndex: 0,
            explanation:
              "A statute states exactly what it requires, in words anyone can read. What it cannot tell you is how it was used in a particular case, which is what a personnel file might show.",
            sourceLessonSlug: "what-an-instrument-records",
          },
          {
            prompt: "What can a public register NOT record?",
            options: [
              "Who actually did the work",
              "The date of filing, which is entered later by a clerk and often left blank",
              "The name of the person claiming the right, which the form does not ask for",
              "Whether the work was published, which is recorded only in the printed catalogue",
            ],
            correctIndex: 0,
            explanation:
              "A register records who filed, who claimed and when. Authorship as a fact about who did the work is a different question, and the form cannot settle it.",
            sourceLessonSlug: "what-an-instrument-records",
          },
          {
            prompt: "What is the first of the four kinds of evidence for a practice nobody wrote down?",
            options: [
              "A document that shows its effect",
              "A sworn statement from a colleague describing the moment the rule was explained to them",
              "A reference to the rule in a later court case about a different employer entirely",
              "A pattern in the pay records showing that one group was paid less than another",
            ],
            correctIndex: 0,
            explanation:
              "The BBC published its own printed account of the Workshop in November 1963, described the work in detail and named nobody who did it. That is the rule's footprint, not the rule.",
            sourceLessonSlug: "what-an-instrument-records",
          },
          {
            prompt: "Why does a failed request count as evidence for a practice?",
            options: [
              "You only ask permission to break a rule",
              "Because a request is always granted unless the employer has a written policy against it",
              "Because the person asking was senior enough to change the rule if it had been informal",
              "Because the request was refused in writing, which is how the practice was recorded",
            ],
            correctIndex: 0,
            explanation:
              "On 30 June 1964 the Head of Drama (Sound) wrote that he wished it were possible for the names to be mentioned in the credits. The names were not printed.",
            sourceLessonSlug: "what-an-instrument-records",
          },
          {
            prompt: "Which sentence of Derbyshire's is the testimony kind of evidence in lesson 2?",
            options: [
              "The boss wouldn't let anybody have any sort of credit",
              "I did the Dr Who theme music mostly on the Jason valve oscillators in room twelve",
              "It was music, it was abstract electronic sound, organised, whatever they wanted to call it",
              "The only way into the workshop was to be a trainee studio manager, so that is what I did",
            ],
            correctIndex: 0,
            explanation:
              "It is the sentence in which the person the practice affected states the practice. The other sentences are hers too, but they describe the work and the job rather than the credit.",
            sourceLessonSlug: "what-an-instrument-records",
          },
          {
            prompt: "What does lesson 2 say follows from the fact that the practice bent at least twice?",
            options: [
              "It was a practice rather than a law",
              "It was never real, since a rule that is broken twice was never being enforced at all",
              "It applied only to television, since the exceptions were both radio productions",
              "It was aimed at Derbyshire alone, since the exceptions named her male colleagues",
            ],
            correctIndex: 0,
            explanation:
              "A law does not bend for a producer who asks nicely. A practice does, occasionally, and the exceptions are in lesson 6.",
            sourceLessonSlug: "what-an-instrument-records",
          },
          {
            prompt: "Which lesson in Who Gets Named sets the three tests this course borrows?",
            options: [
              "A mechanism, not a villain",
              "Who counts as an author, and who gets thanked, which separates authors from acknowledgements",
              "Five ways a name disappears, which sorts the mechanisms by the evidence each leaves",
              "The credited unit is a firm, which shows how a company name replaces a person's name",
            ],
            correctIndex: 0,
            explanation:
              "Its three tests are whether the mechanism is named in the literature, whether it leaves a document, and whether evidence could show it false. This course is the practice of that frame.",
            sourceLessonSlug: "what-an-instrument-records",
          },
          {
            prompt: "What evidence would show the BBC non-crediting was NOT a general practice?",
            options: [
              "Workshop staff routinely named in the credits",
              "A single Radio Times billing naming a member of staff on one documentary in the 1960s",
              "Any BBC memo of the period in which a member of staff asked to be credited by name",
              "Evidence that the composer of the theme received royalties while the Workshop did not",
            ],
            correctIndex: 0,
            explanation:
              "Routine naming would mean there was no practice at all. One exception does not, which is why lesson 6 treats the Blue Veiled Men billing as an exception and not a refutation.",
            sourceLessonSlug: "what-an-instrument-records",
          },
          {
            prompt: "What evidence would show it was a decision about Derbyshire rather than a convention?",
            options: [
              "Her named colleagues printed while she was not",
              "A memo in which a manager praises her work but does not recommend her for promotion",
              "The fact that the composer of the theme was named on screen and she was not",
              "Coverage in the newspapers that named her, since that shows her name could be printed",
            ],
            correctIndex: 0,
            explanation:
              "That is the falsification test that separates a convention from a targeted act. Section 2 shows what the record actually contains.",
            sourceLessonSlug: "what-an-instrument-records",
          },
          {
            prompt: "What makes the Payne-Scott instrument the easy one, in lesson 2's phrase?",
            options: [
              "The rule can be quoted rather than inferred",
              "The employer admitted in the letter that the rule was unfair and should be changed soon",
              "The rule was reported in the press at the time, so several independent accounts exist",
              "The file contains both sides of the correspondence, so nothing has to be reconstructed",
            ],
            correctIndex: 0,
            explanation:
              "The head of her own organisation quoted it at her in a personal letter, with the Act number and the date of assent attached. Everything the Derbyshire case makes you reconstruct is handed over in one page.",
            sourceLessonSlug: "what-an-instrument-records",
          },
          {
            prompt: "What does lesson 2 say the blindness of each instrument is?",
            options: [
              "A property you must know to use it",
              "A flaw introduced by the clerk who filled the form in, and correctable by a later filing",
              "Proof that the document was drafted to conceal something the employer knew",
              "A reason to prefer testimony, which is the only source that can answer every question",
            ],
            correctIndex: 0,
            explanation:
              "Each instrument is good at one thing and blind to another. The blindness is not a complaint to be made about the document; it is the thing you have to know before using it.",
            sourceLessonSlug: "what-an-instrument-records",
          },
          {
            prompt: "In this course's vocabulary, what is a convention?",
            options: [
              "A practice applied to everyone in a category",
              "A meeting at which an industry agrees the credit rules that its members will follow",
              "A clause in a contract that assigns a worker's output to the employer automatically",
              "A rule written into a statute and therefore enforceable in a court by the employee",
            ],
            correctIndex: 0,
            explanation:
              "It may be enforced as strictly as a rule while existing in no document, which is why telling a convention from a decision about one person is the skill this course teaches.",
            sourceLessonSlug: "a-rule-that-applied-to-everyone",
          },
          {
            prompt: "What does falsifiable mean as lesson 2 uses it?",
            options: [
              "Stated so that some evidence would show it wrong",
              "Written in a way that allows an archivist to check the reference against the catalogue",
              "Proved false already, and kept in the course only as an example of a bad claim",
              "Supported by at least two independent sources, so that one error cannot carry it",
            ],
            correctIndex: 0,
            explanation:
              "A claim that no evidence could disturb is not a finding. That is why lesson 2 states in advance what would show the practice claim wrong.",
            sourceLessonSlug: "what-an-instrument-records",
          },
          {
            prompt: "What does this course mean by a footprint?",
            options: [
              "The mark a rule leaves in the documents it shaped",
              "The list of archive files in which a researcher has looked for a rule without finding it",
              "The number of people affected by a practice during the years it was in force",
              "A handwritten note added to a document later, recording who made a decision",
            ],
            correctIndex: 0,
            explanation:
              "The word is used when the rule itself cannot be read. A publication that describes work in detail and names no worker is a footprint of a credit practice.",
            sourceLessonSlug: "what-an-instrument-records",
          },
          {
            prompt: "What are the listings, as this course uses the word?",
            options: [
              "The printed programme magazine",
              "The index of holdings kept by an archive, which tells a researcher what is in each file",
              "The roll of staff employed by a department in a given year, kept for pension purposes",
              "The catalogue of sounds kept by the Workshop so that effects could be found again",
            ],
            correctIndex: 0,
            explanation:
              "In Britain that is the Radio Times, and it is a separate credit instrument from the on-screen caption. A name can appear in one and not the other.",
            sourceLessonSlug: "what-an-instrument-records",
          },
          {
            prompt: "Why does lesson 1 say the interesting question is not who to blame?",
            options: [
              "The rule, not the person, did the removing",
              "Because the officials involved were themselves later punished by their own employers",
              "Because both women said in public that they did not blame the men who applied the rules",
              "Because the documents do not name the officials, so no individual can be identified",
            ],
            correctIndex: 0,
            explanation:
              "In each case the man was following a practice, quoting a regulation or filling in a form. What a learner can read is the paper the rule left, and that is what the course works on.",
            sourceLessonSlug: "a-rule-that-applied-to-everyone",
          },
          {
            prompt: "Which unit did Derbyshire work in at the BBC?",
            options: [
              "The Radiophonic Workshop",
              "The Gramophone Library, which held the recordings that drama productions borrowed from",
              "The Music Department, which commissioned scores from composers outside the corporation",
              "The Engineering Division's research department at Kingswood Warren, outside London",
            ],
            correctIndex: 0,
            explanation:
              "A small unit that made sounds for drama. What kind of unit it was, and what job category its staff held, is the subject of lesson 3.",
            sourceLessonSlug: "a-rule-that-applied-to-everyone",
          },
          {
            prompt: "What does the Chairman's letter attach to the Superannuation Act clause it quotes?",
            options: [
              "The Act number and the date of assent",
              "The name of the minister who signed it and the file number of the departmental copy",
              "A note that the clause had been challenged and was awaiting amendment in Parliament",
              "A printed extract from the regulations, stamped by the Public Service Board that year",
            ],
            correctIndex: 0,
            explanation:
              "Act 15 of 1945, assented to on 3.8.1945. The letter states the source of the rule as well as the rule, which is what makes it checkable.",
            sourceLessonSlug: "what-an-instrument-records",
          },
          {
            prompt: "Which of these is NOT one of the four kinds of evidence lesson 2 lists for an unwritten practice?",
            options: [
              "A statute quoting the practice",
              "A document that shows the effect of the practice on what was printed",
              "Testimony from the person the practice affected, in her own words",
              "The occasions on which the practice bent and somebody was named after all",
            ],
            correctIndex: 0,
            explanation:
              "A statute is the other instrument entirely, and the absence of one is the whole difficulty. The four kinds are an effect, a failed request, testimony and the exceptions.",
            sourceLessonSlug: "what-an-instrument-records",
          },
          {
            prompt: "What did the Chairman's letter say the Minister could do about the marriage rule?",
            options: [
              "Certify special circumstances",
              "Waive the rule permanently for any officer whose work was of national importance",
              "Refer the case to the Public Service Board for a decision within three months",
              "Convert the officer's appointment to a temporary one without loss of superannuation",
            ],
            correctIndex: 0,
            explanation:
              "The regulation deemed a female officer to have retired upon marriage unless the Minister, on the Council's recommendation, certified that there were special circumstances making her employment desirable.",
            sourceLessonSlug: "a-rule-that-applied-to-everyone",
          },
          {
            prompt: "How does lesson 1 describe the BBC's printed account of the Workshop?",
            options: [
              "It names no worker",
              "It names every member of staff in an appendix, with their job grades beside them",
              "It names only the women, because they were the ones journalists asked about",
              "It refuses to describe the work at all, on the grounds that the methods were confidential",
            ],
            correctIndex: 0,
            explanation:
              "It describes the work in detail and names nobody who did it. Lesson 4 reads the document itself, section by section.",
            sourceLessonSlug: "a-rule-that-applied-to-everyone",
          },
          {
            prompt: "Who was Grainer, in the sources this course uses?",
            options: [
              "The composer credited with the theme",
              "The producer who commissioned the programme and chose the Workshop to make its music",
              "The Workshop manager who decided which members of staff would be named on screen",
              "The engineer who built the oscillators the theme was made on, in the Workshop itself",
            ],
            correctIndex: 0,
            explanation:
              "Ayres names him as the composer, published by Erle Music and Warner Chappell. Derbyshire realised his composition, and the royalties stayed with the composer.",
            sourceLessonSlug: "a-rule-that-applied-to-everyone",
          },
          {
            prompt: "What did Derbyshire say she was earning when the royalty offer was made?",
            options: [
              "An assistant studio manager's salary",
              "A freelance fee for each production, paid at the rate agreed with the musicians' union",
              "A composer's retainer, paid quarterly, with a bonus for any work used more than once",
              "Nothing at all, because she was working on the theme in her own time after hours",
            ],
            correctIndex: 0,
            explanation:
              "I was just on an assistant studio manager's salary and that was it. The salary is the point: a staff job, not a commission.",
            sourceLessonSlug: "a-rule-that-applied-to-everyone",
          },
          {
            prompt: "What kind of page prints the Payne-Scott letter?",
            options: [
              "A national archive's page for students",
              "A university's digital library of scanned manuscripts, available to registered readers",
              "A newspaper's archive of its own reporting on the Commonwealth Public Service",
              "A campaign website collecting documents about discrimination against married women",
            ],
            correctIndex: 0,
            explanation:
              "It is a learning resource on the National Archives of Australia's student research portal, and it carries the archival citation alongside the transcript.",
            sourceLessonSlug: "a-rule-that-applied-to-everyone",
          },
          {
            prompt: "What does lesson 1 say the course does with a sentence attributed to Payne-Scott in other accounts?",
            options: [
              "It is not printed here at all",
              "It is printed with a note that the archive has not yet digitised the letter it came from",
              "It is printed as a paraphrase, in the course's own words rather than as a quotation",
              "It is printed in the final assessment only, as an example of a claim a learner should doubt",
            ],
            correctIndex: 0,
            explanation:
              "Her letter of 20 February 1950 has not been read here, so nothing from it is quoted. The course quotes the Chairman quoting her and says so every time.",
            sourceLessonSlug: "a-rule-that-applied-to-everyone",
          },
          {
            prompt: "Which pair of words describes what the rules in this course did to these women?",
            options: [
              "Removed them from a record",
              "Punished them for a breach of contract that each had knowingly committed at work",
              "Promoted them into roles where their own work would be credited to a department",
              "Transferred their rights to an employer who then licensed the work commercially",
            ],
            correctIndex: 0,
            explanation:
              "One was left out of a credit, one was deemed to have retired, and one was left off a registration card. In none of the three did anybody take the work and put their own name on it.",
            sourceLessonSlug: "a-rule-that-applied-to-everyone",
          },
          {
            prompt: "How does lesson 2 describe the relationship between this course and Who Gets Named lesson 2?",
            options: [
              "That lesson gives the frame, this course is the practice",
              "This course replaces it, because its three tests were written before the archives were read",
              "This course disagrees with it, since a mechanism always has a villain behind it somewhere",
              "That lesson is the assessment for this one, and its questions are pooled into the final here",
            ],
            correctIndex: 0,
            explanation:
              "The frame is a mechanism rather than a villain, with three tests. This course applies the tests to two real records and reports what each leaves behind.",
            sourceLessonSlug: "what-an-instrument-records",
          },
          {
            prompt: "In the table in lesson 2, what does a public register record?",
            options: [
              "Who filed, who claimed, and when",
              "The share of the work done by each of the people named on the form as its authors",
              "The correspondence between an employer and an officer about the terms of employment",
              "The effects of a practice on the documents that an organisation printed at the time",
            ],
            correctIndex: 0,
            explanation:
              "It is searchable by anyone, which is its strength, and it cannot record who did the work, which is its blindness.",
            sourceLessonSlug: "what-an-instrument-records",
          },
          {
            prompt: "What does lesson 1 say about the men who applied these rules?",
            options: [
              "None was a villain in a story",
              "Both were later found by an inquiry to have exceeded the authority they actually held",
              "Both refused in writing to change the rule when a colleague asked them to",
              "Neither knew that the rule existed until the woman concerned drew it to their attention",
            ],
            correctIndex: 0,
            explanation:
              "One was following a practice, one was quoting a regulation and one was filling in a government form. The course works on the paper each rule left rather than on blame.",
            sourceLessonSlug: "a-rule-that-applied-to-everyone",
          },
          {
            prompt: "Which of these does this course refuse to build out of two true facts?",
            options: [
              "A refusal scene nobody described",
              "A comparison between two employers in different countries and different decades",
              "A claim that a practice existed, since practices leave no documents of their own",
              "A description of the equipment the theme was made on, which no document records",
            ],
            correctIndex: 0,
            explanation:
              "That Grainer offered to share royalties and that the BBC kept staff uncredited are both supported. A scene in which a named official refuses him is not in any document this course has read.",
            sourceLessonSlug: "a-rule-that-applied-to-everyone",
          },
          {
            prompt: "Who filed the copyright registration for The Sun Dance Opera, and when?",
            options: [
              "William F. Hanson, on 12 December 1912",
              "Zitkala-Šá, on 5 December 1921, when she registered a book of her own with the same office",
              "The Uintah Academy in Vernal, Utah, on behalf of both collaborators, in February 1913",
              "Brigham Young University, in 1935, when the opera was revived on its campus",
            ],
            correctIndex: 0,
            explanation:
              "Two months before the first production. He deposited a piano-vocal score, and the card names him as claimant and as author.",
            sourceLessonSlug: "a-rule-that-applied-to-everyone",
          },
          {
            prompt: "What does the Copyright Office's own account say about her and the records?",
            options: [
              "She does not appear on the copyright records for the work",
              "She appears as the author while Hanson appears as the claimant, which is the usual split",
              "She appears on the renewal card filed in 1929 but not on the original registration",
              "She appears in the printed catalogue of copyright entries but not on the card itself",
            ],
            correctIndex: 0,
            explanation:
              "The post says it despite her contributions, and captions the card image: the record shows Wm. F. Hanson as the sole claimant.",
            sourceLessonSlug: "a-rule-that-applied-to-everyone",
          },
          {
            prompt: "How many rules does this course state at the front, and why are they stated there?",
            options: [
              "Four, because they are rules and not gaps",
              "Two, because the other two apply only to the section about the opera",
              "Six, one for each of the instruments and one for each of the three women",
              "None, because a course should be judged by what it says rather than by its promises",
            ],
            correctIndex: 0,
            explanation:
              "No written BBC policy, no quotation from Payne-Scott's own letter, no description of the Sun Dance or the opera's staging of it, and no authorship shares.",
            sourceLessonSlug: "a-rule-that-applied-to-everyone",
          },
          {
            prompt: "What is the third rule this course keeps?",
            options: [
              "It never describes the Sun Dance ceremony",
              "It never names anyone who is still alive, including the scholars whose work it cites",
              "It never quotes a newspaper, because press accounts of the period are unreliable",
              "It never uses a source that cannot be opened online by the learner reading the lesson",
            ],
            correctIndex: 0,
            explanation:
              "Nor the opera's staging of it. Hafen writes that a performance now would violate contemporary notions of artistic and tribal sovereignty and religious respect, and the credit question does not need the ceremony.",
            sourceLessonSlug: "a-rule-that-applied-to-everyone",
          },
          {
            prompt: "What is the fourth rule this course keeps?",
            options: [
              "It never says how much of the work was whose",
              "It never compares one woman's treatment with another's, since the injuries differ",
              "It never quotes a secondary source where a primary source exists in an archive",
              "It never states a date that appears in only one of the sources it has read",
            ],
            correctIndex: 0,
            explanation:
              "Not for the opera and not for the theme. No fraction, no phrase like most of the music, and no hedge that smuggles one in.",
            sourceLessonSlug: "a-rule-that-applied-to-everyone",
          },
          {
            prompt: "Whose reason does lesson 1 give for the rule about the ceremony?",
            options: [
              "Hafen's",
              "The Copyright Office's, in the post about the registration cards",
              "The National Park Service's, in its page about Zitkala-Šá",
              "Smith's, in her article about the opera and its collaboration",
            ],
            correctIndex: 0,
            explanation:
              "She wrote the fullest scholarly study of the collaboration and writes as a Native woman and academic, and she says a performance now would violate tribal sovereignty and religious respect.",
            sourceLessonSlug: "a-rule-that-applied-to-everyone",
          },
          {
            prompt: "In how many grades of paper does this course say the same mechanism arrives?",
            options: [
              "Three",
              "Two, since the register and the statute are both public documents of the same kind",
              "One, since every credit dispute eventually ends up in a government record",
              "Five, one for each document type named in the table in lesson 2",
            ],
            correctIndex: 0,
            explanation:
              "A rule written down and quoted back at the woman it removed, a practice never written down at all, and a public register entry filed by somebody else.",
            sourceLessonSlug: "a-rule-that-applied-to-everyone",
          },
          {
            prompt: "Which three things does lesson 1 say Whose Name Is on the Score adds?",
            options: [
              "Five cards as images, the 1909 Act, and the 1913 newspapers",
              "The BBC archive files, the Australian personnel file, and the copyright register",
              "A biography of each collaborator, a musical analysis, and a performance history",
              "Interviews with the family, the university's archive, and the surviving scores",
            ],
            correctIndex: 0,
            explanation:
              "That course reads all five registration cards as images, works through the 1909 Copyright Act section by section, and reads the press of 1913. This course teaches her case as an instrument.",
            sourceLessonSlug: "a-rule-that-applied-to-everyone",
          },
          {
            prompt: "What was Zitkala-Šá, in the terms lesson 1 uses?",
            options: [
              "A Yankton Dakota writer and musician",
              "A studio manager employed by a broadcaster to realise other people's compositions",
              "A radiophysicist employed by a government laboratory on classified research",
              "A music teacher in Vernal, Utah, who taught at the Uintah Academy there",
            ],
            correctIndex: 0,
            explanation:
              "She made the opera with a local music teacher, William F. Hanson, and the registration card he filed names him in every blank it has.",
            sourceLessonSlug: "a-rule-that-applied-to-everyone",
          },
          {
            prompt: "Where does lesson 2 say the three instruments are taught in this course?",
            options: [
              "One section each, with the register in Section 4",
              "All three in Section 1, with the later sections giving only the biographies",
              "Two in this course and the third only in another course in the catalog",
              "In the final assessment, which is where the comparison is finally made",
            ],
            correctIndex: 0,
            explanation:
              "Section 2 is the employer's practice, Section 3 is the statute, Section 4 is the public register, and Section 5 compares all three.",
            sourceLessonSlug: "what-an-instrument-records",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2 — Derbyshire and the department
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "one-sheet-of-a4-and-a-service-department",
      title: "3 · One sheet of A4, and a service department",
      section: "Section 2 · Derbyshire and the department",
      body: `Before any claim about credit, the job. Most of what happened here follows from what kind of unit the Radiophonic Workshop was and what job category its staff held, and both are on the record in the words of the people who were in it.

**It was a service department.** Ayres, who catalogued at the Workshop and later deposited Derbyshire's archive, writes that it "was set up as a service department within a broadcasting organisation" and was "staffed by a small number of 'assistants'" working under Desmond Briscoe (Ayres, n.d.). Derbyshire said the same thing about how she got in, and why: "The only way into the workshop was to be a trainee studio manager. This is because the workshop was purely a service department for drama. The BBC made it quite clear that they didn't employ composers and we weren't supposed to be doing music" (Hutton, 2000). Asked what she was doing instead, she answered: "It was music, it was abstract electronic sound, organised."

She was still saying it years later. Butler quotes her on why she eventually left: "But it was set up as a service to the drama department. It was nothing to do with music, and that's it" (Butler, 2014). Her colleague Brian Hodgson gave the unit's work a name that Winter records: "other people's babies" (Winter, 2015).

**Read that as a credit arrangement and the shape appears before any rule is mentioned.** A composer is commissioned and holds a composer's credit and a composer's royalty. A studio manager is on a salary and realises what the composer wrote. On that arrangement the question "why was the staff member not credited as a composer?" partly answers itself: in the employer's categories she was not one, and was not supposed to be making music at all. What the arrangement does **not** explain is why her name could not appear in any form, which is the subject of the next three lessons.

**The dates, and a compression to watch.** Hodgson's obituary of her says "she joined the BBC in 1960 as a studio manager" and, separately, that "Delia had arrived at the workshop in 1962" (Hodgson, 2001). Butler describes her as "based at the Radiophonic Workshop, from 1962 until 1973" (Butler, 2014). Asked how long she worked there she said: "'62 - 73" (Hutton, 2000). The University of Manchester's archive description, though, says that "in 1962 she managed to obtain a post as trainee studio manager at the BBC, and was soon seconded to work at the BBC's Radiophonic Workshop" (University of Manchester Library, n.d.). Those are not the same sentence. Two separate events, joining the BBC and reaching the Workshop, have been folded into one, and the earlier date has gone. Nothing turns on it here, which is exactly why it is a good specimen: compressions happen most easily where nothing seems to be at stake.

**The theme itself.** Verity Lambert, the programme's producer, wanted something with a beat, radiophonic, "familiar yet different" (Ayres, n.d.). Grainer "composed the theme on a single sheet of A4 manuscript, and sent it over from his home in Portugal, leaving the Workshop to get on with it", providing "a very simple composition, in essence just the famous bass line and a swooping melody" (Ayres, n.d.). Derbyshire, with Dick Mills assisting, made the original version in August 1963 (Ayres, n.d.). The BBC's own description of that work, written a year later, says the music "was constructed note by note, with infinite patience, and without the use of any live instrumentalists whatsoever", from a score carrying "certain rather abstract indications of tonal quality such as 'clouds', 'wind bubble'" (quoted in Butler, 2014).

Hold those two sentences together. The employer described the work as painstaking and extraordinary, in its own words, in writing. And it did not name the person who did it.

:::reveal In the BBC's categories, what job was Derbyshire doing on the theme? ||| Realisation. She was a studio manager in a service department for drama, and in her own words the BBC made it clear that they did not employ composers and that the staff were not supposed to be doing music.

:::reveal Which two separate events does the Manchester archive's biographical note fold into one? ||| Joining the BBC, which Hodgson dates to 1960, and reaching the Radiophonic Workshop, which he and Butler and Derbyshire herself all date to 1962.

:::reveal What did Grainer send the Workshop, and from where? ||| One sheet of A4 manuscript, sent from his home in Portugal, carrying what Ayres calls in essence just the famous bass line and a swooping melody.

## Vocabulary
- **Service department**: a unit that exists to make things for other departments' productions rather than to publish work of its own.
- **Attachment**: a temporary transfer of a BBC member of staff to another unit, which is how people reached the Workshop.
- **Assistant**: the job title Ayres puts in quotation marks for Workshop staff, which is a grade rather than a description of the work.
- **Compression**: two separate facts folded into one sentence, so that a date, a step or a person quietly disappears.

## Sources
Ayres, M. (n.d.). *A history of the Doctor Who theme*. http://markayres.rwsprojects.co.uk/DWTheme.htm
Butler, D. (2014). "Way out - of this world!" Delia Derbyshire, Doctor Who and the British public's awareness of electronic music in the 1960s. *Critical Studies in Television*, *9*(1), 62-76. https://doi.org/10.7227/CST.9.1.5
Hodgson, B. (2001, July 7). Delia Derbyshire [Obituary]. *The Guardian*. https://www.theguardian.com/news/2001/jul/07/guardianobituaries1
Hutton, J. (2000). *Radiophonic ladies* [Interview with Delia Derbyshire recorded 24 February 2000]. Sonic Arts Network. http://www.sonicartsnetwork.org/ARTICLES/ARTICLE2000JoHutton.html
University of Manchester Library. (n.d.). *Papers of Delia Derbyshire* (GB 133 DDA) [Collection description]. Archives Hub. https://archiveshub.jisc.ac.uk/data/gb133-dda
Winter, T. (2015). *Delia Derbyshire: Sound and music for the BBC Radiophonic Workshop, 1962-1973* [Doctoral thesis, University of York]. White Rose eTheses Online. https://etheses.whiterose.ac.uk/id/eprint/11590/1/TeresaWinterThesis.pdf`,
    },
    {
      slug: "a-bbc-document-that-names-nobody",
      title: "4 · A BBC document that names nobody",
      section: "Section 2 · Derbyshire and the department",
      body: `In November 1963 the BBC published *Radiophonics in the BBC*, number 51 in its series of Engineering Monographs, by F. C. Brooker, Engineer-in-Charge, London (Sound), price five shillings (Brooker, 1963). It is twenty-one pages long, it is free to download today, and it is the BBC's own printed account of this exact unit, published in the same month the programme began. **It is not a statement of policy, and this course never says it is.** It is the practice, visible in the employer's own voice, and a learner can check every sentence below in about half an hour.

**What it says the Workshop is for.** "The main function of the Radiophonic Workshop is to produce sounds which convey to the listeners' imagination the mood or emotional idea behind the author's theme of his radio or television drama" (Brooker, 1963, section 2.3). Notice who the **author** is in that sentence. It is the writer of the play. The people making the sound are not authors of anything; they are staff.

**What it says about the making.** The monograph does not undersell the work. "The staff of the Workshop then begin their creation of the required sounds." And: "In all of this work it must be remembered that this is a deliberate creative and interpretative process. It is not sufficient to select from a library a number of ready-made sounds and attempt to build them into a meaningful whole. It is very easy to produce unpleasant sounds; much more difficult to attain pleasant and beautiful ones" (Brooker, 1963, section 5.1).

**What it says about the people.** Section 5.2, "Staffing the Radiophonic Workshop", is the passage to read twice. "The present staff of six is shared equally between Central Programme Operations Department which supplies a Senior Studio Manager, assisted by two Studio Managers, and Engineering Division, which supplies a Senior Engineer and his two assistants (an Engineer and a Technical Operator)." They "must all be knowledgeable in the techniques of programme production", must have "an interest in sound, music, and drama", and "above all, they must be creative and ingenious" (Brooker, 1963, section 5.2). Six people are described. Not one is named. They appear as the departments that supply them and the grades they hold.

**What it says at the end.** The conclusions call them "the technicians and programme staff working in this new field" (Brooker, 1963, section 6). The acknowledgment names exactly two people: "The author wishes to thank Mr D. G. Young, Senior Engineer, and Mr Desmond Briscoe, Senior Studio Manager, for their help in preparing this monograph" (Brooker, 1963, section 7). Two names, both senior, both men, both thanked for help with the document rather than credited for the sounds.

**And the appendix, which is the sharpest page in it.** "Programmes using radiophonic sounds" lists more than thirty productions by title, type and service. Where it attributes at all, it attributes to the writer: "Good Friday, Religious Drama (J. Masefield)", "England's Harrowing, Historical Drama (Thomas Hardy)" (Brooker, 1963, Appendix). No member of the Workshop appears anywhere in the list. *Doctor Who* is not in it either, and that is chronologically right rather than suspicious: the monograph is dated November 1963 and the first episode went out on 23 November 1963. **Say that plainly instead of implying an omission.**

**One more detail, because it is the whole lesson in miniature.** Section 4.5 of the monograph describes the Workshop's Leevers-Rich eight-track recorder in technical detail. In the interview, Derbyshire describes the same machine: "We had one Leevers-Rich 8-track machine which was a bit of a white elephant" (Hutton, 2000). The BBC's document names the equipment and not the operator. The operator's account names the equipment and the person using it, because she was the person using it.

**The exercise.** Open the monograph and read it for who is not named. That habit transfers: in any document about work, ask who is named, in what capacity, and what the naming is for. Here the answer is a writer, an engineer, a manager and a machine.

:::reveal Who does BBC Engineering Monograph No. 51 call the author in its statement of the Workshop's function? ||| The writer of the radio or television drama. The people making the sounds appear as staff supplied by two departments.

:::reveal How does the monograph describe the six people who staffed the Workshop? ||| By the departments that supplied them and by their grades: a Senior Studio Manager, two Studio Managers, a Senior Engineer, an Engineer and a Technical Operator. It gives no names.

:::reveal Why is it not evidence of anything that Doctor Who is missing from the monograph's appendix? ||| The monograph is dated November 1963 and the first episode was broadcast on 23 November 1963, so the programme had barely started or had not started when it went to press.

## Vocabulary
- **Engineering Monograph**: one of a numbered BBC series describing technical work done by its Engineering Division, sold to the public for five shillings a copy.
- **Acknowledgment**: a thank-you for help, which is a different instrument from a credit for the work itself.
- **Grade**: a job category such as Studio Manager or Technical Operator, which a document can name instead of naming a person.
- **Attribution**: naming who a work belongs to. In this appendix, attribution goes to dramatists and never to the people who made the sound.

## Sources
Brooker, F. C. (1963). *Radiophonics in the BBC* (BBC Engineering Monograph No. 51). British Broadcasting Corporation. https://www.worldradiohistory.com/UK/BBC/BBC-Technical/BBC-Monograph/bbc-monograph-51-OCR.pdf
Hutton, J. (2000). *Radiophonic ladies* [Interview with Delia Derbyshire recorded 24 February 2000]. Sonic Arts Network. http://www.sonicartsnetwork.org/ARTICLES/ARTICLE2000JoHutton.html`,
    },
    {
      slug: "three-tellings-and-a-scene-nobody-saw",
      title: "5 · Three tellings, and a scene nobody saw",
      section: "Section 2 · Derbyshire and the department",
      body: `There is a famous exchange attached to this story, and working out what is actually known about it is a better lesson than the exchange itself.

**Telling one, a colleague.** Brian Hodgson worked beside her at the Workshop and wrote her obituary. "When Grainer heard the result, his response was 'Did I really write that?' Most of it, Delia replied. She deserved at least half the royalties, insisted the composer. She did not get them. At that time the BBC preferred to keep members of the workshop anonymous and uncredited" (Hodgson, 2001).

**Telling two, the archive's custodian.** Ayres: "The story goes that on listening to playback, he enquired of Delia, 'Did I write that?'. To which she replied, 'Most of it!'. Recognising Delia's immense contribution, he apparently also suggested splitting his performance royalty income with her, but for various reasons this was not possible" (Ayres, n.d.).

**Telling three, a national broadcaster.** NPR: "Legend has it that when Rob Grainer ... first heard Derbyshire's recording, he was so shocked he asked her, 'Did I really write this?' to which she replied, 'Most of it'" (Sherman, 2017). NPR misspells the composer's first name, which is a small thing that tells you how far the anecdote has travelled from any document.

**Now the fourth telling, which is hers.** Interviewed in 2000 and asked directly about the theme, Derbyshire said: "I did the Dr Who theme music mostly on the Jason valve oscillators. Ron Grainer brought me the score. He expected to hire a band to play it, but when he heard what I had done electronically, he'd never imagined it would be so good. He offered me half of the royalties, but the BBC wouldn't allow it. I was just on an assistant studio manager's salary and that was it.... and we got a free radio times. The boss wouldn't let anybody have any sort of credit" (Hutton, 2000). **The "Did I write that?" exchange is not in it.** Her account says what she was offered and what happened to the offer, and nothing about a question he asked her.

**Read the hedges.** "The story goes." "Apparently." "For various reasons this was not possible." "Legend has it." Three of the four tellings mark themselves, and a reader who ignores those marks turns a remembered anecdote into a scene with dialogue.

**Now the harder half, which is the reason this lesson exists.** The same compression happens in a peer-reviewed journal. Butler writes: "For his part, the tune's composer, Ron Grainer, was delighted with Derbyshire's contribution and sought, unsuccessfully for her, a share of the credit and royalties, but he was overruled" (Butler, 2014). His note for that sentence is the Hutton interview, the same page quoted above. On that page the royalty offer and the credit practice are two separate sentences about two different things: an offer made to her, and a rule about everyone. "A share of the credit and royalties" fuses them, and "he was overruled" adds a scene in which somebody refuses him, which no document this course has read records. **Nothing written or said by Ron Grainer himself was found on either research pass.**

The method rule here is the one *Who Made the Record* states in lesson 11, where the course refuses a claim about a photographer because joining two documented facts "would manufacture a confrontation nobody has shown took place". Two true facts, Grainer wanted her to have royalties and the BBC kept staff uncredited, do not add up to a meeting in which a named official says no.

**One more document, from three weeks after the first broadcast.** The *Daily Mirror* of 7 December 1963 was among the first newspapers to try to explain the theme to the public, calling it "a noise with rhythm and melody which continually pulsates in a weird, fluid, and uncanny way", and made no mention of Derbyshire at all, putting the emphasis instead on the producer, Verity Lambert (Butler, 2014). The earliest press account names a woman, and it is not the woman who made the sound.

:::reveal Which telling of the Grainer anecdote does not contain the "Did I write that?" exchange at all? ||| Derbyshire's own, given to Jo Hutton in 2000, which says what she was offered and what happened to the offer and reports no such question.

:::reveal What are the four hedges to notice in the tellings of the anecdote? ||| The story goes, apparently, for various reasons this was not possible, and legend has it.

:::reveal What two separate things does the phrase "a share of the credit and royalties" fuse together? ||| An offer of royalties made to her by the composer, and a general practice about credit that applied to all Workshop staff.

## Vocabulary
- **Telling**: one person's version of an event, considered as a source with a date and a teller rather than as the event.
- **Hedge**: a word such as apparently or reportedly that marks a claim as not established. Dropping it changes the claim.
- **Fusion**: joining two separate documented facts into one sentence that asserts something neither of them says.
- **Scene**: a narrated moment with actors and dialogue. A scene needs a witness or a document, and this one has neither.

## Sources
Ayres, M. (n.d.). *A history of the Doctor Who theme*. http://markayres.rwsprojects.co.uk/DWTheme.htm
Butler, D. (2014). "Way out - of this world!" Delia Derbyshire, Doctor Who and the British public's awareness of electronic music in the 1960s. *Critical Studies in Television*, *9*(1), 62-76. https://doi.org/10.7227/CST.9.1.5
Hodgson, B. (2001, July 7). Delia Derbyshire [Obituary]. *The Guardian*. https://www.theguardian.com/news/2001/jul/07/guardianobituaries1
Hutton, J. (2000). *Radiophonic ladies* [Interview with Delia Derbyshire recorded 24 February 2000]. Sonic Arts Network. http://www.sonicartsnetwork.org/ARTICLES/ARTICLE2000JoHutton.html
Sherman, M. (2017, October 16). Forebears: Delia Derbyshire, electronic music's forgotten pioneer. NPR. https://www.npr.org/2017/10/16/557556328/forebears-delia-derbyshire-electronic-musics-forgotten-pioneer`,
    },
    {
      slug: "the-memo-that-asked",
      title: "6 · The memo that asked, and the practice that bent",
      section: "Section 2 · Derbyshire and the department",
      body: `If the rule itself cannot be read, the next best evidence is somebody senior trying to break it and failing. That document exists, it is dated, and a historian who worked the archive quotes it in full with its reference.

**30 June 1964.** Martin Esslin, Head of Drama (Sound), wrote to Desmond Briscoe to record "my deep appreciation for the excellent work done on [*The Tower*] by Delia Derbyshire and John Harrison":

"This play set them an extremely difficult task and they rose to the challenge with a degree of imaginative intuition and technical mastery which deserves the highest admiration and which will inevitably earn a lion's share of any success the production may eventually achieve. **I only wish that is [sic] were possible for the names of contributors of this calibre to be mentioned in the credits in the Radio Times and on the air.** But failing this I should like to register the fact that I regard their contribution to this production as being at least of equal importance to that of the producer himself" (quoted in Butler, 2014).

Butler's note gives the reference: Delia Derbyshire Archive, Manchester, DD332, memo from Martin Esslin to Desmond Briscoe, "The Tower", 30 June 1964. His gloss is careful, and this course keeps its exact shape: the praise "was not enough to overturn the BBC's standard policy on individual credits" (Butler, 2014).

**Read what the memo proves and what it does not.** It proves that a Head of Department wanted the names printed in the listings and on air, that he could not simply have them printed, and that the alternative left to him was to register the fact in an internal memo. It does not prove there was a written rule, because it does not quote one. It presupposes something, and what it presupposes is exactly what nobody has produced.

**Briscoe's position, which the sources treat carefully.** Butler writes that the issue of individual staff not being credited "seems to have been a case of Briscoe 'following orders' rather than a wilful effort to deny his team recognition", and that "there were multiple opportunities and indeed direct calls for the policy on credits to be overturned" (Butler, 2014). He also warns against casting Briscoe as "the face of BBC patriarchy holding Derbyshire back", which "would risk constructing a somewhat convenient strawman", and notes that when Briscoe was on extended leave in 1966 it was Derbyshire who was placed in charge (Butler, 2014). Derbyshire herself offered him the benefit of the doubt in the 2000 interview, suggesting his motivation "may have been ... that because a lot of the Workshop's stuff was criticised as being too frightening ... he was protecting us by keeping our names secret" (quoted in Butler, 2014).

**Twice, though, the practice bent, and that is what tells you it was a practice.**

1. **It bent for her, once, in the listings.** For "The Blue Veiled Men", an episode of the documentary series *The World About Us*, Winter records that Derbyshire "is credited with making its music, in contrast to the usual anonymity of the Workshop in credits", citing the *Radio Times* billing (Winter, 2015).
2. **It bent for other people's staff, and not for hers.** After "The Naked Sun", a 1969 episode of *Out of the Unknown*, "there were requests by their respective Heads for the lighting, sound and costume supervisors on the production to be given credit, but Briscoe did not lobby on Derbyshire's behalf for her music to receive similar recognition" (Butler, 2014, citing the production files at BBC WAC T5/1, 702/1).

**And the press was never bound by it at all.** In 1965 the *Coventry Evening Telegraph*, the *Daily Express* and the *Lancashire Evening Post* all covered her work by name, and *Tatler* ran the Workshop on a centrefold naming five of its staff, Derbyshire among them (Butler, 2014). That matters for the precision of the claim. She was not unknown and she was not hidden. The instruments that did not carry her name were the ones the BBC controlled: the on-screen credits and the listings.

**A postscript, ten years on.** In January 1974 the *Radio Times* marked the programme's tenth anniversary with a special that gave the Workshop little recognition, and Briscoe wrote to the producer Barry Letts to complain that his staff got no more than "a name drop", adding that they "have, I think, made significant contributions to the success of Dr Who over the years" (Butler, 2014, citing BBC WAC R97/31/1). The man who did not lobby for her in 1969 is lobbying in 1974, to a different employer's department, about a magazine.

**And once it reversed.** For the 1973 film *The Legend of Hell House* she received an on-screen credit alongside Hodgson, and according to Hodgson her contribution to that production was minimal, with most of the music made by Hodgson together with an uncredited Dudley Simpson. Butler calls it "a strange reversal": an on-screen credit arriving for work that was apparently not hers, from an employer she no longer worked for (Butler, 2019).

:::reveal What exactly does the Esslin memo of 30 June 1964 prove? ||| That a Head of Department wanted the names printed in the Radio Times and on air, could not get that done, and recorded his view in an internal memo instead. It does not quote a rule.

:::reveal Name the two occasions on which the credit practice bent. ||| Derbyshire was credited in the Radio Times billing for "The Blue Veiled Men", and after "The Naked Sun" other Heads got credit for their lighting, sound and costume supervisors while Briscoe did not ask for hers.

:::reveal Why does the 1965 press coverage sharpen the claim rather than weaken it? ||| Because it shows she was neither unknown nor hidden. The instruments that did not carry her name were the ones the BBC controlled, the screen credits and the listings.

## Vocabulary
- **Memo**: an internal written note within an organisation, which survives in its files and can be quoted with an archive reference.
- **Billing**: the printed entry for a programme in the listings magazine, naming whoever the magazine chose to name.
- **Strawman**: an opponent invented to be easy to knock down, which Butler warns against when writing about Briscoe.
- **Reversal**: here, a credit arriving for work the person did not do, which is the mirror image of the usual failure.

## Sources
Butler, D. (2014). "Way out - of this world!" Delia Derbyshire, Doctor Who and the British public's awareness of electronic music in the 1960s. *Critical Studies in Television*, *9*(1), 62-76. https://doi.org/10.7227/CST.9.1.5
Butler, D. (2019). Whatever happened to Delia Derbyshire? Delia Derbyshire, visual art, and the myth of her post-BBC activity. *British Art Studies*, (12). https://doi.org/10.17658/issn.2058-5462/issue-12/dbutler
Winter, T. (2015). *Delia Derbyshire: Sound and music for the BBC Radiophonic Workshop, 1962-1973* [Doctoral thesis, University of York]. White Rose eTheses Online. https://etheses.whiterose.ac.uk/id/eprint/11590/1/TeresaWinterThesis.pdf`,
    },
    {
      slug: "section-2-quiz",
      title: "Section 2 quiz · Derbyshire and the department",
      section: "Section 2 · Derbyshire and the department",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "How does Ayres describe what the Radiophonic Workshop was set up as?",
            options: [
              "A service department within a broadcasting organisation",
              "An experimental studio funded by a grant, free to publish music under its own name",
              "A record label owned by the corporation and run for profit alongside its programmes",
              "A training school for engineers, whose output was never intended for broadcast at all",
            ],
            correctIndex: 0,
            explanation:
              "Ayres contrasts it with composers who could experiment freely in their own time. The Workshop existed to make sounds for other departments' productions.",
            sourceLessonSlug: "one-sheet-of-a4-and-a-service-department",
          },
          {
            prompt: "What word does Ayres put in quotation marks for the Workshop's staff?",
            options: [
              "Assistants",
              "Composers, because the corporation refused to let them describe themselves that way",
              "Technicians, because the job was classified under the Engineering Division's grades",
              "Realisers, a term the BBC coined for the people who turned a score into sound",
            ],
            correctIndex: 0,
            explanation:
              "Ayres writes that the Workshop was staffed by a small number of assistants working under Briscoe, keeping the word in quotation marks because it is a grade and not a description of the work.",
            sourceLessonSlug: "one-sheet-of-a4-and-a-service-department",
          },
          {
            prompt: "According to Derbyshire, what was the only way into the Workshop?",
            options: [
              "To be a trainee studio manager",
              "To be recommended by a producer who had already used the Workshop on a production",
              "To pass the Engineering Division's entrance examination and then request a transfer",
              "To be hired as a freelance composer and then offered a staff post after two years",
            ],
            correctIndex: 0,
            explanation:
              "She adds the reason: the workshop was purely a service department for drama, so the posts that existed were studio manager posts.",
            sourceLessonSlug: "one-sheet-of-a4-and-a-service-department",
          },
          {
            prompt: "What did Derbyshire say the BBC made quite clear about composers?",
            options: [
              "That it did not employ them",
              "That it employed them only on annual contracts renewed by the Music Department",
              "That it paid them from a separate budget which the Workshop was not allowed to use",
              "That it credited them on screen only when they were members of a recognised society",
            ],
            correctIndex: 0,
            explanation:
              "The BBC made it quite clear that they didn't employ composers and we weren't supposed to be doing music. The job category is the starting point of the whole credit question.",
            sourceLessonSlug: "one-sheet-of-a4-and-a-service-department",
          },
          {
            prompt: "Asked what she was doing if not music, how did Derbyshire answer?",
            options: [
              "It was abstract electronic sound, organised",
              "It was sound effects work, no different from the spot effects made live in a studio",
              "It was engineering, because the machines decided what the finished result would be",
              "It was arrangement rather than composition, which is why the credit went elsewhere",
            ],
            correctIndex: 0,
            explanation:
              "Her full answer was that it was music, it was abstract electronic sound, organised. She rejected the employer's category while describing the work precisely.",
            sourceLessonSlug: "one-sheet-of-a4-and-a-service-department",
          },
          {
            prompt: "What phrase does Winter record Brian Hodgson using for the Workshop's work?",
            options: [
              "Other people's babies",
              "The back room of the drama department, where nothing was ever finished on its own terms",
              "An orchestra without a conductor, in which every player was also the instrument maker",
              "A factory for noises, which is how the corporation's accountants saw the unit's output",
            ],
            correctIndex: 0,
            explanation:
              "Winter calls it his poetic metaphor for their service role: the staff realised other people's ideas for themes, effects and music rather than publishing work of their own.",
            sourceLessonSlug: "one-sheet-of-a4-and-a-service-department",
          },
          {
            prompt: "On the arrangement lesson 3 describes, who holds the composer's royalty?",
            options: [
              "The commissioned composer",
              "The employer, which collects it centrally and distributes it among the Workshop staff",
              "The producer of the programme, who commissioned the theme in the first place",
              "Whoever is named in the listings magazine for that particular production",
            ],
            correctIndex: 0,
            explanation:
              "A composer is commissioned and holds a composer's credit and royalty. A studio manager is salaried and realises what the composer wrote.",
            sourceLessonSlug: "one-sheet-of-a4-and-a-service-department",
          },
          {
            prompt: "What does lesson 3 say the job arrangement does NOT explain?",
            options: [
              "Why her name could not appear in any form",
              "Why the composer was paid royalties while the staff were paid a salary instead",
              "Why the Workshop was attached to drama rather than to the Music Department",
              "Why the BBC used staff at all rather than hiring musicians for each production",
            ],
            correctIndex: 0,
            explanation:
              "That she was not a composer in the employer's categories explains the composer credit. It does not explain why no name of hers appeared anywhere the BBC controlled.",
            sourceLessonSlug: "one-sheet-of-a4-and-a-service-department",
          },
          {
            prompt: "What date does Hodgson's obituary give for her joining the BBC?",
            options: [
              "1960",
              "1958, the year the Radiophonic Workshop itself was officially set up at Maida Vale",
              "1963, a few months before the theme was made in the August of that year",
              "1966, the year she was placed in charge of the Workshop during Briscoe's leave",
            ],
            correctIndex: 0,
            explanation:
              "She joined the BBC in 1960 as a studio manager, and the same obituary says separately that she arrived at the Workshop in 1962.",
            sourceLessonSlug: "one-sheet-of-a4-and-a-service-department",
          },
          {
            prompt: "What years does Butler give for Derbyshire being based at the Radiophonic Workshop?",
            options: [
              "1962 until 1973",
              "1960 until 1975, covering the whole of her employment by the corporation in London",
              "1958 until 1970, from the founding of the unit to the arrival of the synthesiser",
              "1963 until 1980, matching the years her arrangement was used in the programme",
            ],
            correctIndex: 0,
            explanation:
              "Butler says based at the Radiophonic Workshop, from 1962 until 1973. Derbyshire gave the same answer in her own words: sixty-two to seventy-three.",
            sourceLessonSlug: "one-sheet-of-a4-and-a-service-department",
          },
          {
            prompt: "What is wrong with the Manchester archive's sentence about how she reached the BBC?",
            options: [
              "It folds two separate events into one",
              "It gives the wrong unit, naming the Music Department rather than the Radiophonic Workshop",
              "It gives her job title as composer, which the corporation never used for its staff",
              "It omits the Workshop entirely, describing her only as a trainee studio manager",
            ],
            correctIndex: 0,
            explanation:
              "Joining the BBC in 1960 and reaching the Workshop in 1962 become a single 1962 sentence, and the earlier date disappears.",
            sourceLessonSlug: "one-sheet-of-a4-and-a-service-department",
          },
          {
            prompt: "Why does lesson 3 call that compression a good specimen to study?",
            options: [
              "Nothing much turns on the date",
              "Because the archive later corrected it, which shows how a record is repaired over time",
              "Because it is the only error anyone has found in that archive's published description",
              "Because the compression favours the employer, which is how most credit errors work",
            ],
            correctIndex: 0,
            explanation:
              "Compressions happen most easily where nothing seems to be at stake, which is why they survive so long and why they are worth catching in a harmless case.",
            sourceLessonSlug: "one-sheet-of-a4-and-a-service-department",
          },
          {
            prompt: "What did Verity Lambert ask for, in Ayres's account of the brief for the theme?",
            options: [
              "Something familiar yet different, with a beat",
              "A piece for orchestra and tape that could be re-recorded each season by a new arranger",
              "A short fanfare no longer than fifteen seconds, to sit under the programme's title card",
              "A theme built entirely from recordings of machinery, to match the science fiction setting",
            ],
            correctIndex: 0,
            explanation:
              "Ayres records the brief as something with a beat, radiophonic, familiar yet different. The Workshop then had to make it with the techniques it had.",
            sourceLessonSlug: "one-sheet-of-a4-and-a-service-department",
          },
          {
            prompt: "How does Ayres describe the composition Grainer supplied?",
            options: [
              "In essence just a bass line and a swooping melody",
              "A fully orchestrated score with parts written out for each section of a studio orchestra",
              "A set of graphic instructions on logarithmic graph paper rather than conventional notation",
              "A piano reduction with chord symbols, to be arranged by whoever recorded it",
            ],
            correctIndex: 0,
            explanation:
              "Ayres adds that Grainer kept it simple with an eye to how time-consuming the realisation techniques would be. Few harmonic changes, marked mostly by the bass.",
            sourceLessonSlug: "one-sheet-of-a4-and-a-service-department",
          },
          {
            prompt: "How did the BBC's own 1964 information sheet describe the making of the theme?",
            options: [
              "Constructed note by note, with infinite patience",
              "Improvised in the studio over several sessions by the staff of the Radiophonic Workshop",
              "Performed by a small ensemble and then treated electronically to disguise the instruments",
              "Assembled from the Workshop's library of existing sounds, which saved considerable time",
            ],
            correctIndex: 0,
            explanation:
              "The sheet said the music was constructed note by note, with infinite patience, and without the use of any live instrumentalists whatsoever. It did not name the person who did it.",
            sourceLessonSlug: "one-sheet-of-a4-and-a-service-department",
          },
          {
            prompt: "What kind of markings did the BBC's 1964 information sheet say the score carried?",
            options: [
              "Abstract indications such as clouds and wind bubble",
              "Frequencies in cycles per second for every note, so that each could be tuned exactly",
              "Tape speeds and splice points, written above the stave in the composer's own hand",
              "No markings at all beyond the notes, which is why the realisation took so long",
            ],
            correctIndex: 0,
            explanation:
              "The sheet described the score as not far removed from a regular music score except for certain rather abstract indications of tonal quality such as clouds and wind bubble.",
            sourceLessonSlug: "one-sheet-of-a4-and-a-service-department",
          },
          {
            prompt: "In this course's vocabulary, what is a service department?",
            options: [
              "A unit that makes things for other departments' productions",
              "A department that maintains equipment used by the rest of an organisation's staff",
              "A section of a broadcaster that deals with correspondence from the listening public",
              "A unit whose output is published under its own name rather than a programme's",
            ],
            correctIndex: 0,
            explanation:
              "The definition is the opposite of publishing work of its own, which is exactly the distinction Derbyshire drew when she said the Workshop was nothing to do with music.",
            sourceLessonSlug: "one-sheet-of-a4-and-a-service-department",
          },
          {
            prompt: "What was an attachment at the BBC, as lesson 3 uses the word?",
            options: [
              "A temporary transfer to another unit",
              "A note added to a personnel file recording an employee's request for promotion",
              "A contract clause assigning to the corporation any work made on its premises",
              "A second job held alongside the first, with the pay of both added together",
            ],
            correctIndex: 0,
            explanation:
              "It is how people reached the Workshop. Hodgson's obituary describes Briscoe inviting her to join the department on attachment.",
            sourceLessonSlug: "one-sheet-of-a4-and-a-service-department",
          },
          {
            prompt: "What two facts does lesson 3 tell you to hold together at the end?",
            options: [
              "The employer praised the work and named nobody",
              "The composer was in Portugal and the realiser was in London, so they never met at all",
              "The theme was made in August and broadcast in November, so the work took three months",
              "The BBC paid a salary and the publisher paid a royalty, so two organisations were involved",
            ],
            correctIndex: 0,
            explanation:
              "The BBC described the work as painstaking and extraordinary, in writing, in its own information sheet, and did not name the person who did it.",
            sourceLessonSlug: "one-sheet-of-a4-and-a-service-department",
          },
          {
            prompt: "Who assisted on the original version of the theme, according to Ayres?",
            options: [
              "Dick Mills",
              "John Baker, who worked on the Workshop's rhythmic pieces during the same period",
              "Daphne Oram, who had co-founded the Workshop and returned for the recording",
              "Brian Hodgson, who was then making the sound effects for the same programme",
            ],
            correctIndex: 0,
            explanation:
              "Ayres: Delia Derbyshire, with assistant Dick Mills, created the original version of the theme in August 1963. Winter notes that Mills received no individual credit either.",
            sourceLessonSlug: "one-sheet-of-a4-and-a-service-department",
          },
          {
            prompt: "What is the full title and number of the BBC publication read in lesson 4?",
            options: [
              "Radiophonics in the BBC, Engineering Monograph No. 51",
              "The BBC Radiophonic Workshop: The First 25 Years, published by BBC Publications",
              "Studio Engineering for Sound Broadcasting, in the BBC's training manual series",
              "Radiophonic Music, an annual report of the Engineering Division for 1963",
            ],
            correctIndex: 0,
            explanation:
              "By F. C. Brooker, Engineer-in-Charge, London (Sound), November 1963, price five shillings, twenty-one pages, published by the British Broadcasting Corporation.",
            sourceLessonSlug: "a-bbc-document-that-names-nobody",
          },
          {
            prompt: "When was BBC Engineering Monograph No. 51 published?",
            options: [
              "November 1963",
              "March 1958, when the Radiophonic Workshop was officially set up at Maida Vale",
              "January 1965, a year after the first Dalek serial had made the programme popular",
              "June 1964, the same month as the Esslin memo about credits in the Radio Times",
            ],
            correctIndex: 0,
            explanation:
              "The same month the programme began. That timing is what makes it useful: it is the employer's own account of this unit at exactly the moment in question.",
            sourceLessonSlug: "a-bbc-document-that-names-nobody",
          },
          {
            prompt: "What does this course say the monograph is NOT?",
            options: [
              "A statement of policy",
              "A document written by anyone who worked in the Radiophonic Workshop itself",
              "A publication the BBC ever sold to the public, since it was for internal use only",
              "A reliable description of the equipment, since it was written by an outside journalist",
            ],
            correctIndex: 0,
            explanation:
              "It states no rule about credit. It is the practice made visible in the employer's own voice, which is a different and weaker kind of evidence, and the course says so.",
            sourceLessonSlug: "a-bbc-document-that-names-nobody",
          },
          {
            prompt: "In the monograph's statement of the Workshop's function, who is the author?",
            options: [
              "The writer of the drama",
              "The member of staff who builds the sounds for a particular production",
              "The producer, who commissions the sounds and approves them before transmission",
              "The Engineer-in-Charge, who signs off the finished tape before it is broadcast",
            ],
            correctIndex: 0,
            explanation:
              "The function is to produce sounds which convey the mood or emotional idea behind the author's theme of his radio or television drama. The author is the writer; the sound people are staff.",
            sourceLessonSlug: "a-bbc-document-that-names-nobody",
          },
          {
            prompt: "How does the monograph describe the making of the sounds in section 5.1?",
            options: [
              "A deliberate creative and interpretative process",
              "A routine assembly of library material, carried out to a producer's written instructions",
              "An engineering task in which the equipment settings determine the finished result",
              "A rehearsal process shared with the actors, so that the sounds fit the performance",
            ],
            correctIndex: 0,
            explanation:
              "The monograph insists it is not sufficient to select ready-made sounds from a library, and adds that it is very easy to produce unpleasant sounds and much more difficult to attain pleasant and beautiful ones.",
            sourceLessonSlug: "a-bbc-document-that-names-nobody",
          },
          {
            prompt: "How large was the Workshop's staff, according to the monograph?",
            options: [
              "Six",
              "Twelve, which is why the unit was split across two adjacent rooms at Maida Vale",
              "Three, one for each of the services that the unit supplied with radiophonic sound",
              "Twenty-four, counting the tape reclaimers who worked in the room next door",
            ],
            correctIndex: 0,
            explanation:
              "The present staff of six is shared equally between Central Programme Operations Department and Engineering Division, three from each.",
            sourceLessonSlug: "a-bbc-document-that-names-nobody",
          },
          {
            prompt: "Which two departments supplied the Workshop's staff?",
            options: [
              "Central Programme Operations and Engineering Division",
              "The Drama Department and the Music Department, in equal numbers under one manager",
              "The Gramophone Library and Television Enterprises, which shared the running costs",
              "The Engineering Division alone, which is why every member held an engineering grade",
            ],
            correctIndex: 0,
            explanation:
              "Central Programme Operations Department supplied a Senior Studio Manager and two Studio Managers; Engineering Division supplied a Senior Engineer, an Engineer and a Technical Operator.",
            sourceLessonSlug: "a-bbc-document-that-names-nobody",
          },
          {
            prompt: "What phrase does the monograph use for what the Workshop's staff must above all be?",
            options: [
              "Creative and ingenious",
              "Punctual and accurate, since a drama studio cannot wait for a tape to be finished",
              "Qualified in electronics, which the corporation tested before any appointment was made",
              "Experienced in orchestral music, so that a composer's intentions could be understood",
            ],
            correctIndex: 0,
            explanation:
              "The same paragraph requires knowledge of programme production, an interest in sound, music and drama, and the ability to use electronic equipment flexibly. Then: above all, they must be creative and ingenious.",
            sourceLessonSlug: "a-bbc-document-that-names-nobody",
          },
          {
            prompt: "What does the monograph's conclusions section call the Workshop's people?",
            options: [
              "The technicians and programme staff",
              "The composers and arrangers working in this new field of electronic music",
              "The artists of the corporation, whose work would outlast the programmes it served",
              "The assistants, a term Ayres also uses when describing the unit's staffing",
            ],
            correctIndex: 0,
            explanation:
              "As the technicians and programme staff working in this new field gain more experience, they will probably acquire more of each other's skills. Still no names.",
            sourceLessonSlug: "a-bbc-document-that-names-nobody",
          },
          {
            prompt: "Who is named in the monograph's acknowledgment?",
            options: [
              "D. G. Young and Desmond Briscoe",
              "Delia Derbyshire and Dick Mills, for help with the section on the eight-track recorder",
              "Verity Lambert and Ron Grainer, for permission to describe the theme's construction",
              "Daphne Oram and Maddalena Fagandini, as the unit's two founding studio managers",
            ],
            correctIndex: 0,
            explanation:
              "A Senior Engineer and a Senior Studio Manager, thanked for their help in preparing the monograph. That is an acknowledgment for the document, not a credit for the sounds.",
            sourceLessonSlug: "a-bbc-document-that-names-nobody",
          },
          {
            prompt: "In the monograph's appendix of programmes, who gets attributed?",
            options: [
              "The dramatists",
              "The producers of each programme, listed beside the service that broadcast it",
              "The members of staff who made the sounds for each listed production",
              "Nobody at all, since the appendix gives only titles, types and services",
            ],
            correctIndex: 0,
            explanation:
              "Where the appendix attributes at all it names writers, as in Good Friday, Religious Drama (J. Masefield) and England's Harrowing, Historical Drama (Thomas Hardy).",
            sourceLessonSlug: "a-bbc-document-that-names-nobody",
          },
          {
            prompt: "Why is Doctor Who missing from the monograph's appendix?",
            options: [
              "The monograph predates the first broadcast",
              "The programme's music was made by an outside composer, so the Workshop did not list it",
              "Television programmes were excluded from the appendix, which covered radio only",
              "The BBC had decided not to publicise the theme until the single had been released",
            ],
            correctIndex: 0,
            explanation:
              "The monograph is dated November 1963 and the first episode went out on 23 November 1963. The course says that plainly rather than implying an omission.",
            sourceLessonSlug: "a-bbc-document-that-names-nobody",
          },
          {
            prompt: "Which machine appears in both the monograph and Derbyshire's interview?",
            options: [
              "The Leevers-Rich eight-track recorder",
              "The Oramics machine, which drew waveforms onto strips of film for the operator",
              "The Jason valve oscillators, which the monograph describes in its section on equipment",
              "The gunfire effects generator, which she used for the bass line of the theme",
            ],
            correctIndex: 0,
            explanation:
              "The monograph describes it technically in section 4.5. She called it a bit of a white elephant: an expensive variable speed machine whose sound quality was not very good.",
            sourceLessonSlug: "a-bbc-document-that-names-nobody",
          },
          {
            prompt: "What is the lesson of the Leevers-Rich comparison?",
            options: [
              "The document names the equipment, not the operator",
              "The document is unreliable, because the operator disagreed with its technical description",
              "The operator's account is unreliable, because she was describing it thirty years later",
              "The machine was not in use in 1963, so neither account can describe the theme's making",
            ],
            correctIndex: 0,
            explanation:
              "The operator's account names the equipment and the person using it, because she was the person using it. The employer's account names everything except the people.",
            sourceLessonSlug: "a-bbc-document-that-names-nobody",
          },
          {
            prompt: "What exercise does lesson 4 set?",
            options: [
              "Read the monograph for who is not named",
              "Count the number of programmes in the appendix and compare it with the Workshop's records",
              "Compare the monograph's equipment list with the inventory held at the written archives",
              "Translate the monograph's technical sections into plain language for a general reader",
            ],
            correctIndex: 0,
            explanation:
              "The habit transfers to any document about work: ask who is named, in what capacity, and what the naming is for. Here it is a writer, an engineer, a manager and a machine.",
            sourceLessonSlug: "a-bbc-document-that-names-nobody",
          },
          {
            prompt: "What is an acknowledgment, as lesson 4 distinguishes it?",
            options: [
              "A thank-you for help, not a credit for the work",
              "A formal record that an employer has received a complaint from a member of staff",
              "The line on a broadcast that names the department responsible for the sound",
              "A payment made in place of a credit when the credit itself cannot be given",
            ],
            correctIndex: 0,
            explanation:
              "The two instruments do different jobs. The monograph's acknowledgment thanks two senior men for help preparing the document, and nobody is credited for the sounds it describes.",
            sourceLessonSlug: "a-bbc-document-that-names-nobody",
          },
          {
            prompt: "What is a grade, in the vocabulary of lesson 4?",
            options: [
              "A job category a document can name instead of a person",
              "A mark given to a recording by the Engineering Division before it was broadcast",
              "The seniority level at which an employee is entitled to appear in the credits",
              "The classification of a programme by service, as in Home, Third or Television",
            ],
            correctIndex: 0,
            explanation:
              "Senior Studio Manager, Studio Manager, Senior Engineer, Engineer and Technical Operator are all grades. The monograph describes six people entirely in those terms.",
            sourceLessonSlug: "a-bbc-document-that-names-nobody",
          },
          {
            prompt: "How much did the monograph cost when it was published?",
            options: [
              "Five shillings",
              "Nothing, because it was an internal document circulated only within the corporation",
              "One pound, which was also the price of the annual subscription to the series",
              "Half a crown, the standard price for the BBC's engineering training supplements",
            ],
            correctIndex: 0,
            explanation:
              "Price five shillings, with an annual subscription of one pound post free. It was a public document about a public corporation's work, sold through newsagents and booksellers.",
            sourceLessonSlug: "a-bbc-document-that-names-nobody",
          },
          {
            prompt: "In Hodgson's obituary, what was Grainer's response when he heard the result?",
            options: [
              "Did I really write that?",
              "He asked for the tape to be remade with live players over the electronic parts",
              "He said nothing at the session and wrote to the producer the following week",
              "He asked which of the Workshop's staff had been assigned to the recording",
            ],
            correctIndex: 0,
            explanation:
              "Hodgson then writes: Most of it, Delia replied. He is a colleague who worked beside her, writing in 2001, which is first-hand testimony about a story rather than a document of it.",
            sourceLessonSlug: "three-tellings-and-a-scene-nobody-saw",
          },
          {
            prompt: "What does Hodgson's obituary say about the BBC and the Workshop at that time?",
            options: [
              "It preferred to keep them anonymous and uncredited",
              "It had a written policy forbidding any member of staff from being named on air",
              "It allowed names in the Radio Times but never in the on-screen closing credits",
              "It credited the unit as a whole because the staff themselves had asked for that",
            ],
            correctIndex: 0,
            explanation:
              "Preferred is the word he uses, and it describes a practice rather than quoting a rule. That is exactly the distinction this course keeps.",
            sourceLessonSlug: "three-tellings-and-a-scene-nobody-saw",
          },
          {
            prompt: "Which hedge does Ayres use before the anecdote?",
            options: [
              "The story goes",
              "It is well documented that, which he then supports with a reference to the BBC archives",
              "Delia told me herself, which makes his version a first-hand account of her account",
              "According to the Radio Times of the week the programme began broadcasting",
            ],
            correctIndex: 0,
            explanation:
              "He also writes that Grainer apparently suggested splitting his performance royalty income with her, but that for various reasons this was not possible. Three hedges in two sentences.",
            sourceLessonSlug: "three-tellings-and-a-scene-nobody-saw",
          },
          {
            prompt: "What phrase does Ayres use for what happened to the royalty suggestion?",
            options: [
              "For various reasons this was not possible",
              "The corporation refused it in writing, in a memo held at the written archives centre",
              "The publisher declined to register a second name against the composition",
              "It was agreed and then reversed when the theme was released as a single in 1964",
            ],
            correctIndex: 0,
            explanation:
              "Various reasons names no reason at all. It is a hedge, and it is one of the places where a reader supplies a scene the source does not contain.",
            sourceLessonSlug: "three-tellings-and-a-scene-nobody-saw",
          },
          {
            prompt: "How does NPR introduce the anecdote?",
            options: [
              "Legend has it",
              "Archival records at the BBC show that, which is followed by a file reference",
              "Derbyshire wrote in her diary that, quoting the Manchester archive's juvenile papers",
              "As the composer later told an interviewer, in a recording now held in Manchester",
            ],
            correctIndex: 0,
            explanation:
              "The same piece misspells the composer's first name as Rob, which is a small sign of how far the story has travelled from any document.",
            sourceLessonSlug: "three-tellings-and-a-scene-nobody-saw",
          },
          {
            prompt: "What small error in the NPR piece does lesson 5 point out?",
            options: [
              "The composer's first name is misspelled",
              "The year of the first broadcast is given as 1964 rather than November 1963",
              "The theme is described as the first electronic music ever heard by the British public",
              "Dick Mills is named as the person who made the theme rather than as the assistant",
            ],
            correctIndex: 0,
            explanation:
              "It calls him Rob Grainer. The point is not that the error matters in itself but what it shows about the chain the anecdote has passed down.",
            sourceLessonSlug: "three-tellings-and-a-scene-nobody-saw",
          },
          {
            prompt: "In her own account, what did Derbyshire say Grainer had expected to do with the score?",
            options: [
              "Hire a band to play it",
              "Record it himself in Portugal and send the finished tape to the Workshop for editing",
              "Have the Workshop create the sounds and then add an orchestra over the top of them",
              "Sell it to a publisher first and only then offer it to the programme's producer",
            ],
            correctIndex: 0,
            explanation:
              "He expected to hire a band to play it, but when he heard what I had done electronically, he'd never imagined it would be so good. That is the whole of the surprise in her telling.",
            sourceLessonSlug: "three-tellings-and-a-scene-nobody-saw",
          },
          {
            prompt: "What is absent from Derbyshire's own telling of the theme's making?",
            options: [
              "The Did I write that? exchange",
              "Any mention of the royalties, which she discussed only in a later interview in 1999",
              "The name of the composer, whom she never referred to in any recorded interview",
              "Any description of the equipment, which she said she could no longer remember",
            ],
            correctIndex: 0,
            explanation:
              "Asked directly about the theme in 2000, she said what she was offered and what happened to the offer. The famous question does not appear.",
            sourceLessonSlug: "three-tellings-and-a-scene-nobody-saw",
          },
          {
            prompt: "Which machine did Derbyshire say she used for most of the theme?",
            options: [
              "The Jason valve oscillators",
              "The Leevers-Rich eight-track recorder, which allowed the parts to be layered at once",
              "The Muirhead oscillator, which was accurate enough to tune the bass line precisely",
              "A Hammond organ, which stood in the room alongside an old upright piano",
            ],
            correctIndex: 0,
            explanation:
              "I did the Dr Who theme music mostly on the Jason valve oscillators. She describes twelve of them in room twelve, with eight gating circuits built in-house.",
            sourceLessonSlug: "three-tellings-and-a-scene-nobody-saw",
          },
          {
            prompt: "What does Butler's sentence about Grainer fuse together?",
            options: [
              "An offer of royalties and a rule about credit",
              "Two different interviews given by Derbyshire, one in 1999 and one in 2000",
              "The composer's view and the producer's view of who should have been named",
              "A BBC information sheet and a newspaper article published three weeks apart",
            ],
            correctIndex: 0,
            explanation:
              "He writes that Grainer sought, unsuccessfully for her, a share of the credit and royalties. His cited source keeps those as two separate sentences about two different things.",
            sourceLessonSlug: "three-tellings-and-a-scene-nobody-saw",
          },
          {
            prompt: "What is Butler's cited source for that sentence?",
            options: [
              "The Jo Hutton interview",
              "A memo from Desmond Briscoe held at the BBC Written Archives Centre in Caversham",
              "Mark Ayres's article about the history of the theme, cited at his note 33",
              "An interview with the composer given shortly before his death in the 1980s",
            ],
            correctIndex: 0,
            explanation:
              "Note 20 is the Hutton interview, the same page this course quotes. Reading the source behind the sentence is what shows the compression.",
            sourceLessonSlug: "three-tellings-and-a-scene-nobody-saw",
          },
          {
            prompt: "What does the phrase he was overruled add that no document supports?",
            options: [
              "A scene in which somebody refuses him",
              "A date, since no source says when the offer of royalties was made or withdrawn",
              "A name, since the official who made the decision is identified in the same sentence",
              "A motive, since it suggests the corporation wanted to keep the royalties for itself",
            ],
            correctIndex: 0,
            explanation:
              "Nothing written or said by Grainer himself was found on either research pass, and no document describes a refusal being delivered to him.",
            sourceLessonSlug: "three-tellings-and-a-scene-nobody-saw",
          },
          {
            prompt: "Which catalog lesson gives the method rule that lesson 5 applies?",
            options: [
              "Who Made the Record, lesson 11",
              "Who Gets the Credit, lesson 17, which corrects five claims that do not survive checking",
              "The Name on the Door, lesson 1, on the credited unit being a firm rather than a person",
              "Whose Name Is on the Score, lesson 2, on the class and the claimant under a statute",
            ],
            correctIndex: 0,
            explanation:
              "That lesson refuses a documented-sounding claim because joining two facts would manufacture a confrontation nobody has shown took place. The same rule applies here.",
            sourceLessonSlug: "three-tellings-and-a-scene-nobody-saw",
          },
          {
            prompt: "What did the Daily Mirror of 7 December 1963 do with Derbyshire's name?",
            options: [
              "It did not mention her",
              "It printed it alongside the composer's, which is the earliest credit anyone has found",
              "It printed it incorrectly, giving her as a member of the Engineering Division",
              "It printed it only in a caption under a photograph of the Workshop's equipment",
            ],
            correctIndex: 0,
            explanation:
              "The article described the sound as a noise with rhythm and melody which continually pulsates in a weird, fluid, and uncanny way, and put the emphasis on the producer, Verity Lambert.",
            sourceLessonSlug: "three-tellings-and-a-scene-nobody-saw",
          },
          {
            prompt: "What is a telling, in the vocabulary of lesson 5?",
            options: [
              "One person's version, with a date and a teller",
              "A document produced at the time of an event by somebody who witnessed it",
              "An account that has been checked against at least one other independent source",
              "The first published version of a story, from which all later versions descend",
            ],
            correctIndex: 0,
            explanation:
              "Treating each version as a source with a date and a teller, rather than as the event, is what lets you notice that the subject's own telling does not contain the famous exchange.",
            sourceLessonSlug: "three-tellings-and-a-scene-nobody-saw",
          },
          {
            prompt: "What does a hedge do to a claim, and what happens when it is dropped?",
            options: [
              "It marks the claim as unestablished, and dropping it asserts more",
              "It weakens a source's authority, so a careful writer removes it before quoting",
              "It identifies the person who made the claim, so dropping it removes the attribution",
              "It signals that a document exists but could not be reached by the writer",
            ],
            correctIndex: 0,
            explanation:
              "Apparently, the story goes and legend has it all mark a claim as not established. A retelling that drops them turns a remembered anecdote into a scene with dialogue.",
            sourceLessonSlug: "three-tellings-and-a-scene-nobody-saw",
          },
          {
            prompt: "Why does lesson 5 say a scene needs a witness or a document?",
            options: [
              "A narrated moment with dialogue needs a source",
              "Because a scene is always disputed by the people who took part in it afterwards",
              "Because dialogue cannot be remembered accurately after more than a few days",
              "Because a scene is a literary device and has no place in a history course at all",
            ],
            correctIndex: 0,
            explanation:
              "The refusal scene in this story has neither. Two true facts, an offer and a practice, do not add up to a meeting in which a named official says no.",
            sourceLessonSlug: "three-tellings-and-a-scene-nobody-saw",
          },
          {
            prompt: "Who wrote the memo of 30 June 1964, and what was his post?",
            options: [
              "Martin Esslin, Head of Drama (Sound)",
              "Desmond Briscoe, the manager of the Radiophonic Workshop, writing to his own Head",
              "Verity Lambert, the producer of the programme, writing to the Head of Drama",
              "F. C. Brooker, Engineer-in-Charge, London (Sound), who had written the monograph",
            ],
            correctIndex: 0,
            explanation:
              "He wrote to Briscoe about the radio production The Tower, praising the work of Delia Derbyshire and John Harrison.",
            sourceLessonSlug: "the-memo-that-asked",
          },
          {
            prompt: "What did Esslin write that he wished were possible?",
            options: [
              "That the contributors' names be mentioned in the credits",
              "That the Workshop be given a budget of its own to commission original compositions",
              "That the staff be transferred out of the Engineering Division into the Drama Department",
              "That the production be repeated so that a wider audience could hear the sound work",
            ],
            correctIndex: 0,
            explanation:
              "In the credits in the Radio Times and on the air. Failing that he registered the fact that he regarded their contribution as at least of equal importance to the producer's.",
            sourceLessonSlug: "the-memo-that-asked",
          },
          {
            prompt: "What archive reference does Butler give for the Esslin memo?",
            options: [
              "Delia Derbyshire Archive, Manchester, DD332",
              "BBC Written Archives Centre, Caversham, R97/9/1, the Workshop's administration file",
              "BBC Written Archives Centre, Caversham, T5/1, 702/1, the Naked Sun production files",
              "University of York, White Rose eTheses, appendix 4 of the Winter thesis",
            ],
            correctIndex: 0,
            explanation:
              "The full note reads: memo from Martin Esslin to Desmond Briscoe, The Tower, 30 June 1964. A quotation with a reference is what makes a secondary source checkable.",
            sourceLessonSlug: "the-memo-that-asked",
          },
          {
            prompt: "What does the Esslin memo NOT prove?",
            options: [
              "That a written rule existed",
              "That a Head of Department wanted the names printed in the listings and on air",
              "That the alternative left to him was to record his view in an internal memo",
              "That Derbyshire and John Harrison had worked on the production called The Tower",
            ],
            correctIndex: 0,
            explanation:
              "It presupposes something and quotes nothing. What it presupposes is exactly the document nobody has produced, which is why lesson 12 treats the gap as the course's main lesson.",
            sourceLessonSlug: "the-memo-that-asked",
          },
          {
            prompt: "How does Butler characterise Briscoe's part in the non-crediting?",
            options: [
              "A case of following orders",
              "A deliberate campaign to keep his staff anonymous so that he alone would be known",
              "An oversight that he corrected as soon as a Head of Department complained to him",
              "A decision forced on him by the musicians' union, which objected to staff credits",
            ],
            correctIndex: 0,
            explanation:
              "Butler writes that it seems to have been a case of Briscoe following orders rather than a wilful effort to deny his team recognition, and notes there were multiple opportunities and direct calls for the policy to be overturned.",
            sourceLessonSlug: "the-memo-that-asked",
          },
          {
            prompt: "What does Butler warn against when writing about Briscoe?",
            options: [
              "Constructing a convenient strawman",
              "Relying on the BBC Written Archives, which he says are incomplete for these years",
              "Quoting Derbyshire's later interviews, which he says are unreliable about dates",
              "Treating the Workshop as a single unit, since its staff disagreed among themselves",
            ],
            correctIndex: 0,
            explanation:
              "Casting him as the face of BBC patriarchy holding Derbyshire back would risk it. Butler also notes that when Briscoe was on extended leave in 1966, Derbyshire was placed in charge.",
            sourceLessonSlug: "the-memo-that-asked",
          },
          {
            prompt: "What happened when Briscoe went on extended leave in 1966?",
            options: [
              "Derbyshire was placed in charge",
              "The Workshop was closed for six months and its productions were made by outside composers",
              "The Engineering Division took over the unit and its studio managers were reassigned",
              "Dick Mills was promoted to Senior Studio Manager and ran it until Briscoe returned",
            ],
            correctIndex: 0,
            explanation:
              "Butler records it as a fact that complicates the simple account of a manager holding her back, which is why he warns against the strawman.",
            sourceLessonSlug: "the-memo-that-asked",
          },
          {
            prompt: "What benefit of the doubt did Derbyshire offer Briscoe in 2000?",
            options: [
              "That he was protecting them by keeping their names secret",
              "That he had never been told by his own superiors that staff could be credited at all",
              "That he had asked for credits twice and been refused twice by the Head of Drama",
              "That he had intended to credit the Workshop as a unit rather than its individuals",
            ],
            correctIndex: 0,
            explanation:
              "Her reasoning was that a lot of the Workshop's output was criticised as too frightening, so he may have thought he was protecting the staff by keeping their names out.",
            sourceLessonSlug: "the-memo-that-asked",
          },
          {
            prompt: "For which programme was Derbyshire credited in the Radio Times, according to Winter?",
            options: [
              "The Blue Veiled Men",
              "The Naked Sun, an episode of Out of the Unknown broadcast in 1969",
              "The Tower, the radio production that prompted the Esslin memo of June 1964",
              "Giants of Steam, the railway documentary that the Workshop had scored earlier",
            ],
            correctIndex: 0,
            explanation:
              "An episode of the documentary series The World About Us. Winter says she is credited with making its music, in contrast to the usual anonymity of the Workshop in credits.",
            sourceLessonSlug: "the-memo-that-asked",
          },
          {
            prompt: "What happened over credits after the 1969 production of The Naked Sun?",
            options: [
              "Other Heads asked for their supervisors to be credited",
              "The BBC changed the policy so that all Workshop staff were named from that year on",
              "Briscoe wrote to the producer demanding a credit for Derbyshire and was refused",
              "The programme was cancelled before transmission, so no credits were printed at all",
            ],
            correctIndex: 0,
            explanation:
              "There were requests by their respective Heads for the lighting, sound and costume supervisors to be given credit, and Briscoe did not lobby on Derbyshire's behalf.",
            sourceLessonSlug: "the-memo-that-asked",
          },
          {
            prompt: "Which archive files does Butler cite for the Naked Sun credit requests?",
            options: [
              "BBC WAC T5/1, 702/1",
              "Delia Derbyshire Archive, Manchester, DD333, the BBC information sheet about the theme",
              "BBC WAC R97/25/1, the Radiophonic Workshop scrapbooks of press clippings",
              "BBC WAC N15/17/1, the script and press release material for Time On Our Hands",
            ],
            correctIndex: 0,
            explanation:
              "He cites the production files for The Naked Sun at the BBC Written Archives Centre, Caversham. The reference is what lets somebody else check the claim.",
            sourceLessonSlug: "the-memo-that-asked",
          },
          {
            prompt: "What did the press do with Derbyshire's name in 1965?",
            options: [
              "Several papers covered her work by name",
              "They referred to the Workshop only, following the wording of the BBC's information sheet",
              "They named her once and were asked by the corporation not to do so again",
              "They named her colleagues but not her, which is why the 1965 coverage is useful",
            ],
            correctIndex: 0,
            explanation:
              "The Coventry Evening Telegraph, the Daily Express and the Lancashire Evening Post all covered her by name, and Tatler ran the Workshop on a centrefold naming five of its staff.",
            sourceLessonSlug: "the-memo-that-asked",
          },
          {
            prompt: "Why does the 1965 press coverage make the course's claim more precise?",
            options: [
              "The unnamed instruments were the ones the BBC controlled",
              "It shows the practice had already ended by the middle of the decade",
              "It shows she was named everywhere except in the newspapers her employer owned",
              "It shows the Workshop's staff were free to speak to the press without permission",
            ],
            correctIndex: 0,
            explanation:
              "She was not unknown and she was not hidden. The instruments that did not carry her name were the on-screen credits and the listings.",
            sourceLessonSlug: "the-memo-that-asked",
          },
          {
            prompt: "What did Briscoe complain about to Barry Letts in January 1974?",
            options: [
              "That his staff got only a name drop",
              "That the Radio Times had credited Derbyshire without asking his permission first",
              "That the tenth anniversary special had been made without consulting the Workshop",
              "That the programme's composer was being paid more than the Workshop's whole budget",
            ],
            correctIndex: 0,
            explanation:
              "The Radio Times special gave the Workshop little recognition. Briscoe wrote that his staff had made significant contributions to the success of the programme over the years.",
            sourceLessonSlug: "the-memo-that-asked",
          },
          {
            prompt: "What is the irony lesson 6 points out about the 1974 complaint?",
            options: [
              "The man who had not lobbied in 1969 was lobbying now",
              "The complaint was sent to the wrong department and never reached the magazine",
              "The magazine had already printed the Workshop's names in the previous week's issue",
              "Briscoe had himself written the information sheet that omitted Derbyshire in 1964",
            ],
            correctIndex: 0,
            explanation:
              "In 1969 he did not ask for his own staff to be credited. In 1974 he complained to another department that his staff had been given no more than a name drop.",
            sourceLessonSlug: "the-memo-that-asked",
          },
          {
            prompt: "What does Butler call the 1973 Legend of Hell House credit?",
            options: [
              "A strange reversal",
              "The first correction, since it was the first time her name appeared on a screen",
              "A clerical error by the film's producers, corrected in later prints of the film",
              "The moment the BBC's practice changed, since she was still its employee that year",
            ],
            correctIndex: 0,
            explanation:
              "She received an on-screen credit alongside Hodgson, and according to Hodgson her contribution to that production was minimal, with most of the music made by Hodgson with an uncredited Dudley Simpson.",
            sourceLessonSlug: "the-memo-that-asked",
          },
          {
            prompt: "Who does Butler say made most of the music for The Legend of Hell House?",
            options: [
              "Hodgson, with an uncredited Dudley Simpson",
              "Derbyshire alone, working from a score supplied by the film's director",
              "The BBC Radiophonic Workshop as a unit, which was credited on the film itself",
              "Dick Mills, who had assisted on the theme a decade earlier and was credited for it",
            ],
            correctIndex: 0,
            explanation:
              "That is what makes it a reversal: a credit arriving for work that was apparently not hers, from an employer she no longer worked for.",
            sourceLessonSlug: "the-memo-that-asked",
          },
          {
            prompt: "What is a memo, in the vocabulary of lesson 6?",
            options: [
              "An internal written note within an organisation",
              "A notice circulated to the public explaining how a programme was made",
              "A minute of a meeting, signed by everyone present and kept in the corporate register",
              "A note attached to a personnel file recording a complaint against an employee",
            ],
            correctIndex: 0,
            explanation:
              "It survives in the organisation's files, which is why it can be quoted years later with an archive reference, as Butler quotes the Esslin memo with its Manchester number.",
            sourceLessonSlug: "the-memo-that-asked",
          },
          {
            prompt: "What is a billing, as lesson 6 uses the word?",
            options: [
              "The printed entry for a programme in the listings magazine",
              "The invoice a freelance composer sends for a commissioned piece of music",
              "The order in which names appear in a closing credit sequence on television",
              "The schedule of fees agreed between a broadcaster and a performers' union",
            ],
            correctIndex: 0,
            explanation:
              "Winter's evidence that Derbyshire was credited for The Blue Veiled Men is the Radio Times billing, which is a separate instrument from the on-screen caption.",
            sourceLessonSlug: "the-memo-that-asked",
          },
          {
            prompt: "In lesson 6's vocabulary, what is a reversal?",
            options: [
              "A credit arriving for work the person did not do",
              "A decision by an employer to withdraw a credit that had already been printed",
              "A correction made after somebody's death, which cannot reach the original record",
              "The moment a practice ends and the organisation begins naming its staff",
            ],
            correctIndex: 0,
            explanation:
              "It is the mirror image of the usual failure, and lesson 6 uses the 1973 film credit as the example.",
            sourceLessonSlug: "the-memo-that-asked",
          },
          {
            prompt: "What does lesson 6 say is the next best evidence when a rule cannot be read?",
            options: [
              "Somebody senior trying to break it and failing",
              "A later account written by a historian who has read the organisation's whole archive",
              "The absence of any counter-example in the years the rule is supposed to have applied",
              "A statement by the organisation, issued decades later, admitting that the rule existed",
            ],
            correctIndex: 0,
            explanation:
              "The Esslin memo is that document: dated, quoted in full, and referenced to an archive number by a historian who worked the collection.",
            sourceLessonSlug: "the-memo-that-asked",
          },
          {
            prompt: "What did Esslin say about the contribution compared with the producer's?",
            options: [
              "At least of equal importance",
              "More important than the producer's, which is why he asked for a separate caption",
              "Secondary to the producer's, but deserving of a mention in the listings magazine",
              "Impossible to compare, since the two roles were paid from different budgets",
            ],
            correctIndex: 0,
            explanation:
              "Failing the credit, he wanted to register the fact that he regarded their contribution to the production as being at least of equal importance to that of the producer himself.",
            sourceLessonSlug: "the-memo-that-asked",
          },
          {
            prompt: "Which production prompted the Esslin memo?",
            options: [
              "The Tower",
              "The Naked Sun, an episode of the science fiction anthology Out of the Unknown",
              "Doctor Who, in the weeks after the theme was first broadcast in November 1963",
              "The Blue Veiled Men, the documentary for which she was credited in the listings",
            ],
            correctIndex: 0,
            explanation:
              "A radio production on which Derbyshire worked with John Harrison, and which Esslin said had set them an extremely difficult task.",
            sourceLessonSlug: "the-memo-that-asked",
          },
          {
            prompt: "What did the BBC's 1964 information sheet heading say about the theme?",
            options: [
              "Title music by Ron Grainer with the BBC Radiophonic Workshop",
              "Title music by Ron Grainer and Delia Derbyshire of the BBC Radiophonic Workshop",
              "Title music realised by the BBC Radiophonic Workshop from a score by Ron Grainer",
              "Special sound by the BBC Radiophonic Workshop, with music by Ron Grainer",
            ],
            correctIndex: 0,
            explanation:
              "Butler quotes the heading and notes the sheet made no direct reference to Derbyshire. The preposition is with, joining a composer to a unit rather than to a person.",
            sourceLessonSlug: "one-sheet-of-a4-and-a-service-department",
          },
          {
            prompt: "What does the word with rather than and do in that heading?",
            options: [
              "It joins a composer to a unit, not to a person",
              "It shows that the Workshop was paid separately from the composer for the recording",
              "It records that the unit performed the piece rather than realising it electronically",
              "It marks the Workshop as the copyright owner of the finished recording",
            ],
            correctIndex: 0,
            explanation:
              "The unit is the credited entity, which is the shape The Name on the Door calls a credited unit: a firm, a label, a studio rather than a person.",
            sourceLessonSlug: "one-sheet-of-a4-and-a-service-department",
          },
          {
            prompt: "Who catalogued at the Workshop and later deposited Derbyshire's archive?",
            options: [
              "Mark Ayres",
              "David Butler, the historian who published the article about her and Doctor Who",
              "Teresa Winter, whose doctoral thesis worked through the BBC Written Archives",
              "Desmond Briscoe, who had managed the unit until the middle of the 1970s",
            ],
            correctIndex: 0,
            explanation:
              "The Archives Hub record says the collection was deposited at the University of Manchester by Mark Ayres on permanent loan in 2007, with the aid of Dr David Butler.",
            sourceLessonSlug: "one-sheet-of-a4-and-a-service-department",
          },
          {
            prompt: "What does lesson 4 say a learner can do with the monograph today?",
            options: [
              "Download it free and check every sentence",
              "Request it from the BBC Written Archives Centre with two weeks' notice",
              "Read it only in a reading room, since the series was never digitised",
              "Buy a reprint from the corporation, which still sells the engineering series",
            ],
            correctIndex: 0,
            explanation:
              "That is why it is the spine of this section. The primary document is twenty-one pages long and open to anybody who wants to test what the lesson says about it.",
            sourceLessonSlug: "a-bbc-document-that-names-nobody",
          },
          {
            prompt: "What did Derbyshire say the staff received in place of a credit?",
            options: [
              "A free Radio Times",
              "A bonus payment at the end of each financial year, divided equally among the staff",
              "A mention in the corporation's internal newsletter when a programme did well",
              "A copy of the finished tape, which they were allowed to keep for their own use",
            ],
            correctIndex: 0,
            explanation:
              "And we got a free radio times. The boss wouldn't let anybody have any sort of credit. The sentence sits directly after her account of the royalty offer.",
            sourceLessonSlug: "three-tellings-and-a-scene-nobody-saw",
          },
          {
            prompt: "Which of these does lesson 5 treat as the strongest class of evidence available on the royalty question?",
            options: [
              "Testimony from the person the offer was made to",
              "A colleague's obituary written forty years later from memory of the same event",
              "A peer-reviewed article summarising the colleague's account in a single sentence",
              "A national broadcaster's feature written for the fiftieth anniversary of the programme",
            ],
            correctIndex: 0,
            explanation:
              "It is still not a contract, a memo or a rights record, and no source quotes the composer. But it is the person the offer was made to, in her own words.",
            sourceLessonSlug: "three-tellings-and-a-scene-nobody-saw",
          },
          {
            prompt: "What does lesson 6 say a practice that bends tells you?",
            options: [
              "That it is a practice and not a law",
              "That it was never enforced, and that the anonymity was the staff's own preference",
              "That it applied only to television credits and never to the listings magazine",
              "That the manager who applied it was acting outside the authority he had been given",
            ],
            correctIndex: 0,
            explanation:
              "A law does not bend for a producer who asks nicely. The two occasions in lesson 6 are the Radio Times billing and the requests made after The Naked Sun.",
            sourceLessonSlug: "the-memo-that-asked",
          },
          {
            prompt: "What does the monograph say the Workshop's function is NOT?",
            options: [
              "To create musical compositions as such",
              "To provide sound effects, which were made live in the drama studios instead",
              "To work for television, since the unit had been set up for radio drama alone",
              "To keep a library of its material, which was destroyed after each production",
            ],
            correctIndex: 0,
            explanation:
              "Its summary says radiophonics means producing sounds to convey the mood of a programme, but not the creation of musical compositions as such. That is the employer's own category, in print.",
            sourceLessonSlug: "a-bbc-document-that-names-nobody",
          },
          {
            prompt: "How does lesson 3 describe the difference between a commission and a salary here?",
            options: [
              "A composer holds a credit and a royalty; a salaried realiser holds neither",
              "A composer is paid once and a salaried member of staff is paid for every repeat",
              "A composer works to a brief and a member of staff chooses what to make",
              "A composer is named in the listings and a member of staff is named on screen",
            ],
            correctIndex: 0,
            explanation:
              "That arrangement explains the composer credit without explaining why no name of hers appeared at all, which is what the rest of the section works on.",
            sourceLessonSlug: "one-sheet-of-a4-and-a-service-department",
          },
          {
            prompt: "What did the monograph's summary say the end product almost invariably was?",
            options: [
              "A tape recording",
              "A live performance in a drama studio, cued by the producer during transmission",
              "A gramophone disc, pressed by the corporation for use in later productions",
              "A written score, handed to the drama department for an orchestra to perform",
            ],
            correctIndex: 0,
            explanation:
              "Much of the equipment described in the monograph is therefore concerned with manipulating tape, which is the technique Derbyshire is now best known for.",
            sourceLessonSlug: "a-bbc-document-that-names-nobody",
          },
          {
            prompt: "What kind of source is Hodgson's obituary of Derbyshire?",
            options: [
              "First-hand testimony by a colleague",
              "A BBC document, since the corporation approved obituaries of its former staff",
              "A secondary summary, since it was written from the Manchester archive's papers",
              "An anonymous account, since obituaries in that newspaper carried no byline",
            ],
            correctIndex: 0,
            explanation:
              "He worked beside her at the Workshop and was her partner in Unit Delta Plus. That makes it colleague testimony rather than a record made at the time.",
            sourceLessonSlug: "three-tellings-and-a-scene-nobody-saw",
          },
          {
            prompt: "What did the Workshop keep a library of, and why?",
            options: [
              "Its finished sounds, for archive purposes",
              "The scores of every composer it had worked with, so that royalties could be calculated",
              "Recordings of each member of staff at work, used to train new arrivals to the unit",
              "Copies of the Radio Times billings for every programme the unit had contributed to",
            ],
            correctIndex: 0,
            explanation:
              "The monograph says a library of all the sounds and music produced for transmission is kept, not with the object of using the material again, but purely for archive purposes.",
            sourceLessonSlug: "a-bbc-document-that-names-nobody",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3 — Payne-Scott and the statute
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "a-rule-you-can-read",
      title: "7 · A rule you can read, quoted back at the person it removed",
      section: "Section 3 · Payne-Scott and the statute",
      body: `Everything in Section 2 had to be inferred from documents that show a practice without stating it. This lesson is the opposite experience, and the contrast is the reason these cases are in one course. Here the rule is quoted, in writing, by the head of the organisation, to the woman it applied to, with the statute number attached.

**The document.** A letter of 3 March 1950, marked PERSONAL, addressed to "Miss R. Payne-Scott, Radiophysics Laboratory, University Grounds, CHIPPENDALE, N.S.W.", signed "CHAIRMAN". The National Archives of Australia holds it as part of her personnel file, citation **A8520, PH/PAY/002**, creator CSIRO Head Office, and prints a full transcript of it on a page written for students. The archive identifies the writer as Dr Ian Clunies Ross, Chairman of the Commonwealth Scientific and Industrial Research Organisation, and says the letter answers her written objection "to the treatment of herself and other married women in the Commonwealth Public Service" (National Archives of Australia [NAA], n.d.).

**The rule, in four steps, exactly as the letter lays it out.** This is worth following closely, because it is how rules of this kind actually live.

1. **Not in the Act.** "It is true that neither in the Act constituting C.S.I.R. nor in the Act constituting C.S.I.R.O. does any mention of married women occur."
2. **A power in the Act.** The earlier Act had "a clause (Section 14A(2)) which stated that officers should be engaged subject to such conditions as were prescribed or as the Council, with the approval of the Minister, determined."
3. **A regulation made under that power.** "Under the Act, Regulations were in due course prescribed and one such was to the effect that **a female officer shall be deemed to have retired from the service of the Council upon her marriage**, unless the Minister, upon a recommendation by the Council, certified that there were special circumstances which made her employment desirable." And the letter says where it came from: "The above Regulation was based on a similar Regulation promulgated under the Public Service Act."
4. **A statute that leaves no room at all.** The Superannuation Act clause is quoted directly: "**A female officer who marries after the commencement of this Section shall for the purposes of this Act be deemed to have resigned from the date of her marriage**", with the source attached, "(The above section appears in Act 15 of 1945 which was assented to on 3.8.1945.)" The Chairman then writes: "You will see that with respect to the Superannuation Act there is no ground for equivocation or varying interpretation."

**Notice what step three does, because it is the general lesson.** The rule that removed her is not in the statute that created her employer. It sits in a regulation made under a clause of that statute, copied from another department's regulation. Somebody looking for it in the wrong place would report, correctly and uselessly, that the Act says nothing about married women. The Chairman knew exactly where it lived, and his letter is a map of it.

**The letter also records that the organisation was mid-transition.** Under the current Act, officers hold office on terms determined by the Council subject to the approval of the Public Service Board, and, he writes, "up to date, the Executive has not completed its determination of all terms and conditions", so "at the moment it is carrying on under the old C.S.I.R. terms and conditions". The rule being applied to her in March 1950 was therefore an inherited one, carried forward while new terms were still being drafted.

**The wider setting, in the archive's own words.** "Until the amendment of the Public Service Act in November 1966, women employed in the Australian Public Service were required to resign upon marriage and once married were obliged to accept temporary positions with poor career prospects and no entitlements" (NAA, n.d.). That sentence is the definition of a rule that applied to everyone in a category. It is also the sentence that dates its end, which matters in Section 4.

:::reveal Where did the rule that removed Payne-Scott from permanent staff actually live? ||| In a regulation made under section 14A(2) of the Act constituting CSIR, which the Chairman says was based on a similar regulation under the Public Service Act. The Acts themselves mention married women nowhere.

:::reveal What did the Superannuation Act clause deem a female officer to have done, and what Act carried it? ||| To have resigned from the date of her marriage, for the purposes of that Act. The letter attaches the source: Act 15 of 1945, assented to on 3 August 1945.

:::reveal What does the archive say about the Australian Public Service before November 1966? ||| Women employed in it were required to resign upon marriage, and once married were obliged to accept temporary positions with poor career prospects and no entitlements.

## Vocabulary
- **Regulation**: a rule made under a power granted by an Act, which can carry as much force as the Act while sitting outside it.
- **Personnel file**: an employer's file about one employee, which in a public service is often transferred to a national archive.
- **Permanent officer**: a public servant with tenure and superannuation, as distinct from a temporary employee hired without those entitlements.
- **Assent**: the moment a bill becomes an Act, dated here as 3 August 1945 for the superannuation provision quoted.

## Sources
National Archives of Australia. (n.d.). *Rules for married women working at CSIRO: Reply to radiophysicist Ruby Payne-Scott* (NAA: A8520, PH/PAY/002) [Learning resource]. Student Research Portal. https://www.naa.gov.au/students-and-teachers/student-research-portal/learning-resource-themes/society-and-culture/gender-and-sexuality/rules-married-women-working-csiro-reply-radiophysicist-ruby-payne-scott`,
    },
    {
      slug: "what-the-file-records",
      title: "8 · What the file records, and what it does not",
      section: "Section 3 · Payne-Scott and the statute",
      body: `A file is not a transcript of what happened. It is whatever somebody kept, and in a correspondence between an employer and an employee the two sides are almost never kept equally. This one is a clear case, and the imbalance is teachable.

**What this document records in full.** The rule, the date, the address, the signature, and the Chairman's own reasoning. On her stated view that she felt no moral obligation to report her marriage, he writes: "There can, of course, be two opinions on that point, but I will content myself with pointing out that if everyone thought as you do or acted as you apparently think proper, the administration of C.S.I.R.O. would be greatly complicated, and we would have to introduce a system of rigid scrutiny of the actions of officers instead of relying on their discretion and good sense" (NAA, n.d.).

He adds a specific: "You may remember that it was only in December last that we received a notification from you that you had recently opened an account in a Sydney bank in the name of 'Ruby Violet Payne-Scott'." He records that nobody in his office knew of the marriage, that he cannot think her Chief or the Division's clerical officers knew either, and that the form she refers to does not appear to have been received. He asks for details of that form. And he ends with a request: "In conclusion, I think the simplest way of regularising the whole affair would be for you to tell us the date of your marriage."

**What this document does not record, and what follows.** Her letter of 20 February 1950 is referred to in his first line, paraphrased twice and answered throughout. **It is not printed on the page that prints his.** So everything a reader learns about her argument comes through his summary of it: that she discussed the moral obligation people like herself might feel to report a change of circumstances, and that she said she personally felt no such obligation.

**This course therefore quotes him quoting her, and says so every time.** A sentence attributed to her in other accounts of this episode is not printed anywhere in this course, because the letter it comes from has not been read here. That is not squeamishness. A paraphrase written by the person on the other side of a dispute is evidence of what he understood or chose to record, and treating it as her words hands her argument to him. Whether her letter survives, and what it says, is an open question and it is on this course's research list.

**The rest of what the archive's page states**, which is context rather than the document: she had kept the marriage from her employer for six years; when it became known in 1950 she was forced to retire as a permanent staffer and was reinstated on a temporary basis; and in July 1951, with the birth of her first child imminent, she resigned. She never returned to CSIRO (NAA, n.d.). Read those sentences closely and there is a small wrinkle in the page's own wording: having said she was forced off permanent staff in 1950 and reinstated temporarily, it then describes the 1951 departure as resigning from her permanent position. The transcript settles the 1950 rule; it does not settle her exact status in 1951, and this course does not assert one.

**One more thing the page records about the file.** An ASIO file lists her as "a person of interest" from 1948 to 1959 (NAA, n.d.). This course has not read that file and does not use it, and the reference number given for it elsewhere is unverified here. It is worth a sentence only because it shows what a government's files about a person contain: several separate interests, kept for several separate reasons, none of them a record of her science.

**The general point, which transfers to any file.** Ask three questions of any archived correspondence. Whose paper is this? Whose paper is missing? And is the missing side being quoted through the surviving one? Here the answers are: the employer's, hers, and yes.

:::reveal Why does this course never print the sentence attributed to Payne-Scott from her own letter? ||| Because her letter of 20 February 1950 is not on the page that prints the Chairman's reply, so it has not been read here. Only his paraphrase of her is verified.

:::reveal What did the Chairman say would be the simplest way of regularising the whole affair? ||| For her to tell him the date of her marriage.

:::reveal What three questions does lesson 8 tell you to ask of any archived correspondence? ||| Whose paper is this, whose paper is missing, and is the missing side being quoted through the surviving one.

## Vocabulary
- **Paraphrase**: a restatement of somebody's words by somebody else, which records what the restater understood or chose to keep.
- **Regularising**: the Chairman's own word for bringing her employment back into line with the rule, once the marriage was known.
- **Temporary reinstatement**: being re-employed without the tenure and entitlements of a permanent officer, which is what the archive says followed in 1950.
- **Open question**: a claim this course has not settled, which goes on a research list rather than into a lesson.

## Sources
National Archives of Australia. (n.d.). *Rules for married women working at CSIRO: Reply to radiophysicist Ruby Payne-Scott* (NAA: A8520, PH/PAY/002) [Learning resource]. Student Research Portal. https://www.naa.gov.au/students-and-teachers/student-research-portal/learning-resource-themes/society-and-culture/gender-and-sexuality/rules-married-women-working-csiro-reply-radiophysicist-ruby-payne-scott`,
    },
    {
      slug: "not-a-stolen-byline",
      title: "9 · Why this is not a stolen byline, and why it belongs here anyway",
      section: "Section 3 · Payne-Scott and the statute",
      body: `Say the obvious thing out loud, because blurring it would weaken the course. **Nobody took Ruby Payne-Scott's name off a piece of work.** No colleague signed his name to her results. No employer printed somebody else's name where hers belonged. Her case is an employment bar, not a credit theft, and putting it beside a case about a screen credit only works if the difference is stated rather than smoothed over.

**So why is it here?** Because all three cases in this course are the same mechanism at different strengths, and the set teaches what none of them teaches alone. The table below sets this case against the Derbyshire one; Section 4 adds the third column, a public register.

| | Derbyshire | Payne-Scott |
|---|---|---|
| The category | staff of a service department | married female officer |
| Who applied it | a manager following a practice | a chairman quoting a regulation |
| What it removed her from | the credits and the listings | permanent staff, and superannuation |
| What it left on paper | documents that name nobody | a letter that quotes the rule |
| What could be recovered later | a name in a credit sequence | nothing of what the career would have been |

Read the bottom row twice. The Derbyshire case has a correction available to it, and Section 5 shows the correction being made. The Payne-Scott case does not: an amendment in 1966 changes the rule for everyone afterwards and returns nothing to the person the rule was applied to in 1950.

**Now the reason this case matters to the catalog specifically.** *Who Gets the Credit*, lesson 3, "Five ways a name disappears", sorts the mechanisms by the evidence each leaves behind, and says of the first one, being barred by law, that it "leaves **no document**": a person who cannot apply leaves no application, so nothing is filed and nothing survives. That lesson treats an 1858 legal opinion as the rare case where the barrier itself was written down.

**Payne-Scott's file is a second such case, and a modern one.** The barrier is written down, quoted at the person it barred, dated, signed, and held by a national archive that has transcribed it for schoolchildren. When a mechanism that usually leaves nothing does leave something, that document is worth more than its contents, because it is the only way to see the mechanism at all.

**What the rule cost, in what the record can and cannot show.** It can show the removal from permanent staff in 1950, the temporary reinstatement, and the resignation in July 1951 (NAA, n.d.). It can show the state of the policy for everybody until November 1966. What no document shows is what the next twenty years of her research would have contained, and this course does not guess. The archive's own summary of her work says that in the 1950s she was part of the Australian team that pioneered a means of measuring radio emissions from the Sun and stars, "a breakthrough that would in turn lead to the construction of sophisticated radio telescopes and the birth of radio astronomy" (NAA, n.d.). Her scientific papers were not read for this course, so nothing more specific about her science is claimed here than the archive states.

**The honest summary.** One woman lost a line of credit. One woman lost a career's tenure. Nobody was robbed of a byline in either case, and in both cases the paperwork was in order. That is what makes the pair worth teaching: the machinery worked exactly as designed, and the design is the subject.

:::reveal What is the plain difference between the two cases that lesson 9 states rather than smooths over? ||| Payne-Scott's is an employment bar and not a credit theft. Nobody put his name on her work.

:::reveal Why does Payne-Scott's file matter to the claim in Who Gets the Credit that being barred by law leaves no document? ||| Because it is a second, modern exception to that rule. The barrier itself is written down, quoted at her, dated, signed and publicly transcribed.

:::reveal What does this course refuse to guess about Payne-Scott? ||| What the research she did not do would have contained. The record can show the removal, the temporary status and the resignation, and it cannot show the career that did not happen.

## Vocabulary
- **Employment bar**: a rule preventing a category of person from holding a job or a form of tenure, as distinct from a rule about whose name appears on work.
- **Mechanism**: the specific way a name is removed from a record, which this catalog insists on naming rather than calling everything theft.
- **Tenure**: permanence in a post, with the entitlements attached to it, which is what the marriage rule removed.
- **Prospective**: forward-looking. An amendment that changes a rule for the future returns nothing to the people it was already applied to.

## Sources
National Archives of Australia. (n.d.). *Rules for married women working at CSIRO: Reply to radiophysicist Ruby Payne-Scott* (NAA: A8520, PH/PAY/002) [Learning resource]. Student Research Portal. https://www.naa.gov.au/students-and-teachers/student-research-portal/learning-resource-themes/society-and-culture/gender-and-sexuality/rules-married-women-working-csiro-reply-radiophysicist-ruby-payne-scott`,
    },
    {
      slug: "section-3-quiz",
      title: "Section 3 quiz · Payne-Scott and the statute",
      section: "Section 3 · Payne-Scott and the statute",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Why does this course quote the Chairman rather than her reply?",
            options: [
              "Only his letter has been read",
              "Her reply was destroyed when the file was closed",
              "Her reply repeats his wording, so quoting both would be redundant",
              "The archive releases employer letters but withholds employee ones",
            ],
            correctIndex: 0,
            explanation:
              "The archive page prints a transcript of the Chairman's letter, and that is what this course has read. Her own reply exists in the same file and nobody working on this course has seen it, so the course quotes him quoting her and says so every time.",
            sourceLessonSlug: "what-the-file-records",
          },

          {
            prompt: "What is the archival citation for the letter read in Section 3?",
            options: [
              "A8520, PH/PAY/002",
              "R97/11/2, the Radiophonic Workshop General file held at Caversham for 1953 to 1973",
              "DD332, the memo about The Tower held in the Delia Derbyshire Archive in Manchester",
              "A6119, 167, the security file listed by the archive under a different series",
            ],
            correctIndex: 0,
            explanation:
              "Creator: CSIRO Head Office. Date: 1950. It is part of her personnel file, and the National Archives of Australia prints a full transcript of the letter on a page written for students.",
            sourceLessonSlug: "a-rule-you-can-read",
          },
          {
            prompt: "How is the letter of 3 March 1950 marked and signed?",
            options: [
              "Marked PERSONAL and signed CHAIRMAN",
              "Marked CONFIDENTIAL and signed by the Secretary of the Public Service Board",
              "Marked URGENT and signed by the Chief of the Radiophysics Laboratory in Sydney",
              "Unmarked and unsigned, which is why the archive identifies the author from the file",
            ],
            correctIndex: 0,
            explanation:
              "The archive's note identifies the signatory as Dr Ian Clunies Ross, Chairman of CSIRO. The transcript itself carries the word CHAIRMAN, underlined, where a name would be.",
            sourceLessonSlug: "a-rule-you-can-read",
          },
          {
            prompt: "How is the letter addressed?",
            options: [
              "To Miss R. Payne-Scott at the Radiophysics Laboratory",
              "To Mrs R. Payne-Scott at her home address in Sydney, marked for her attention only",
              "To the Chief of the Radiophysics Laboratory, for onward transmission to the officer",
              "To the Secretary of the Public Service Board, with a copy to the officer concerned",
            ],
            correctIndex: 0,
            explanation:
              "University Grounds, Chippendale, New South Wales. The letter asks her to confirm the date of her marriage, and the form of address is the one the employer had on file.",
            sourceLessonSlug: "a-rule-you-can-read",
          },
          {
            prompt: "What does the archive say the letter is responding to?",
            options: [
              "Her written objection about married women",
              "A request from her for leave of absence before the birth of her first child",
              "A complaint made by her Chief about the standard of her laboratory work",
              "An application she made for a permanent appointment after a period as a temporary",
            ],
            correctIndex: 0,
            explanation:
              "The archive says it responds to Payne-Scott's written objection to the treatment of herself and other married women in the Commonwealth Public Service.",
            sourceLessonSlug: "a-rule-you-can-read",
          },
          {
            prompt: "What does the letter say about married women in the Acts constituting CSIR and CSIRO?",
            options: [
              "Neither Act mentions them at all",
              "Both Acts require a married woman to obtain the Minister's consent before continuing",
              "The earlier Act bars them and the later one is silent, which is why the old terms applied",
              "Both Acts leave the question to the Public Service Board rather than to the Council",
            ],
            correctIndex: 0,
            explanation:
              "That is why the rule has to be traced to a regulation. Looking for it in the Act itself produces a true and useless answer.",
            sourceLessonSlug: "a-rule-you-can-read",
          },
          {
            prompt: "Which clause of the earlier Act does the letter cite as the source of the power?",
            options: [
              "Section 14A(2)",
              "Section 5, which lists the classes of officer the Council was permitted to employ",
              "Section 44, which required an instrument of transfer to be recorded within three months",
              "Section 15 of Act 15 of 1945, which dealt with superannuation for female officers",
            ],
            correctIndex: 0,
            explanation:
              "It stated that officers should be engaged subject to such conditions as were prescribed, or as the Council, with the approval of the Minister, determined. The regulation was made under that power.",
            sourceLessonSlug: "a-rule-you-can-read",
          },
          {
            prompt: "What did the regulation say happened to a female officer upon her marriage?",
            options: [
              "She was deemed to have retired from the service",
              "She was required to apply in writing within one month for permission to continue",
              "She was transferred to the temporary staff automatically, keeping her superannuation",
              "She was given six months in which to decide whether to resign or to seek an exemption",
            ],
            correctIndex: 0,
            explanation:
              "Unless the Minister, upon a recommendation by the Council, certified that there were special circumstances which made her employment desirable. The exception existed and had to be granted.",
            sourceLessonSlug: "a-rule-you-can-read",
          },
          {
            prompt: "Where does the letter say the regulation came from?",
            options: [
              "A similar regulation under the Public Service Act",
              "A determination made by the Council in the year the laboratory was established",
              "A wartime instruction that had never been withdrawn after the war ended",
              "A decision of the Minister, taken on the recommendation of the Public Service Board",
            ],
            correctIndex: 0,
            explanation:
              "The rule was copied across from the wider public service, which is why the archive can describe it as the position for the whole Australian Public Service until 1966.",
            sourceLessonSlug: "a-rule-you-can-read",
          },
          {
            prompt: "Which Act carried the superannuation clause the letter quotes?",
            options: [
              "Act 15 of 1945",
              "The Act constituting CSIRO, passed in 1949 when CSIR was reorganised",
              "The Public Service Act, in the form it took after the amendment of November 1966",
              "The Act constituting CSIR, under which the marriage regulation was prescribed",
            ],
            correctIndex: 0,
            explanation:
              "The letter gives the source in a parenthesis: the section appears in Act 15 of 1945, which was assented to on 3 August 1945.",
            sourceLessonSlug: "a-rule-you-can-read",
          },
          {
            prompt: "What did the Chairman say about the Superannuation Act clause?",
            options: [
              "There is no ground for equivocation or varying interpretation",
              "That it had been criticised in Parliament and would probably be amended within the year",
              "That the Council could set it aside if the Minister certified special circumstances",
              "That it applied only to officers who had joined the scheme before the war",
            ],
            correctIndex: 0,
            explanation:
              "He distinguishes it from the regulation, which carried a ministerial exception. On superannuation he tells her the words leave no room at all.",
            sourceLessonSlug: "a-rule-you-can-read",
          },
          {
            prompt: "What is the general lesson of step three in lesson 7?",
            options: [
              "The rule lived in a regulation, not in the Act",
              "The rule was never written down, which is why the Chairman had to explain it by letter",
              "The rule was made by the Minister personally and applied case by case",
              "The rule had lapsed by 1950 and was applied to her in error by Head Office",
            ],
            correctIndex: 0,
            explanation:
              "Somebody searching the statute would report, correctly and uselessly, that it says nothing about married women. The Chairman's letter is a map of where the rule actually sat.",
            sourceLessonSlug: "a-rule-you-can-read",
          },
          {
            prompt: "What does the letter say about CSIRO's terms and conditions in March 1950?",
            options: [
              "It was carrying on under the old CSIR terms",
              "It had completed new terms which the Public Service Board had already approved",
              "It had suspended all terms pending the outcome of her own objection to them",
              "It had adopted the Public Service Act's terms in full when CSIR became CSIRO",
            ],
            correctIndex: 0,
            explanation:
              "The Executive had not completed its determination of all terms and conditions and had not discussed them finally with the Board, so the inherited rule was the one being applied.",
            sourceLessonSlug: "a-rule-you-can-read",
          },
          {
            prompt: "When was the Public Service Act amended so that women were no longer required to resign on marriage?",
            options: [
              "November 1966",
              "August 1945, when the superannuation provision quoted in the letter received assent",
              "March 1950, in the months after this correspondence reached the Chairman",
              "July 1951, the month in which she resigned before the birth of her first child",
            ],
            correctIndex: 0,
            explanation:
              "The archive states it plainly: until that amendment, women in the Australian Public Service were required to resign upon marriage and once married were obliged to accept temporary positions.",
            sourceLessonSlug: "a-rule-you-can-read",
          },
          {
            prompt: "What does the archive say married women in the public service were obliged to accept?",
            options: [
              "Temporary positions with poor prospects",
              "A reduction in salary of one quarter, applied from the date of the marriage itself",
              "A transfer to a different department, chosen by the Public Service Board",
              "A written undertaking to resign as soon as a permanent officer could replace them",
            ],
            correctIndex: 0,
            explanation:
              "Temporary positions with poor career prospects and no entitlements. The rule did not only remove tenure; it set a ceiling on everything that followed.",
            sourceLessonSlug: "a-rule-you-can-read",
          },
          {
            prompt: "In this course's vocabulary, what is a regulation?",
            options: [
              "A rule made under a power granted by an Act",
              "A decision by a court about how an Act should be applied in a particular case",
              "An internal instruction circulated to managers but never published anywhere",
              "A clause of an Act that applies only to one class of employee",
            ],
            correctIndex: 0,
            explanation:
              "It can carry as much force as the Act while sitting outside it, which is exactly why the letter has to trace four steps to reach the rule.",
            sourceLessonSlug: "a-rule-you-can-read",
          },
          {
            prompt: "What is a permanent officer, as lesson 7 uses the term?",
            options: [
              "A public servant with tenure and superannuation",
              "An officer appointed for life, who cannot be dismissed for any reason whatever",
              "An employee whose post is funded from a recurrent rather than a project budget",
              "A member of staff who has completed a probationary period of at least five years",
            ],
            correctIndex: 0,
            explanation:
              "The distinction with a temporary employee is the whole force of the rule: what was removed in 1950 was tenure and entitlements, not the ability to do the work.",
            sourceLessonSlug: "a-rule-you-can-read",
          },
          {
            prompt: "What does assent mean in lesson 7's vocabulary?",
            options: [
              "The moment a bill becomes an Act",
              "The Minister's agreement that an officer's employment is desirable despite her marriage",
              "The Council's approval of a regulation proposed by its own Executive",
              "An officer's written acceptance of the terms on which she is employed",
            ],
            correctIndex: 0,
            explanation:
              "The letter dates the superannuation provision precisely by it: Act 15 of 1945, assented to on 3 August 1945.",
            sourceLessonSlug: "a-rule-you-can-read",
          },
          {
            prompt: "Why does lesson 7 say this document is the opposite experience to Section 2?",
            options: [
              "The rule is quoted rather than inferred",
              "The employer is defending its practice rather than explaining it to a member of staff",
              "The document is secondary rather than primary, since the archive wrote the summary",
              "The rule is about pay rather than about whose name appears on a piece of work",
            ],
            correctIndex: 0,
            explanation:
              "Everything in Section 2 had to be inferred from documents that show a practice without stating it. Here the head of the organisation writes the rule out and attaches the statute number.",
            sourceLessonSlug: "a-rule-you-can-read",
          },
          {
            prompt: "Which organisation's head office created the file this letter sits in?",
            options: [
              "CSIRO Head Office",
              "The Public Service Board, which kept the personnel files of all Commonwealth officers",
              "The Radiophysics Laboratory, which held its own staff records at the university",
              "The Australian Security Intelligence Organisation, whose file the archive also holds",
            ],
            correctIndex: 0,
            explanation:
              "The archive lists the creator as CSIRO Head Office and the date as 1950. The letter is one item of a personnel file that the national archive now holds.",
            sourceLessonSlug: "a-rule-you-can-read",
          },
          {
            prompt: "What did the Chairman say would happen if everyone acted as he understood her to think proper?",
            options: [
              "The administration would be greatly complicated",
              "The Minister would be forced to withdraw the exception for special circumstances",
              "The organisation would lose its most experienced officers within a single year",
              "Parliament would have to amend the Superannuation Act to close the gap",
            ],
            correctIndex: 0,
            explanation:
              "He adds that the organisation would have to introduce a system of rigid scrutiny of the actions of officers instead of relying on their discretion and good sense.",
            sourceLessonSlug: "what-the-file-records",
          },
          {
            prompt: "How does the Chairman introduce his disagreement with her stated view?",
            options: [
              "There can, of course, be two opinions on that point",
              "By quoting the regulation again, since he says it answers the question by itself",
              "By referring her to the Public Service Board, which had jurisdiction over the dispute",
              "By declining to discuss the question, on the ground that it was not a matter for him",
            ],
            correctIndex: 0,
            explanation:
              "He then says he will content himself with pointing out the administrative consequence. The politeness of the form is part of what makes the document teachable.",
            sourceLessonSlug: "what-the-file-records",
          },
          {
            prompt: "Which specific piece of evidence about her does the Chairman cite in the letter?",
            options: [
              "A bank account opened in her married name",
              "A wedding announcement printed in a Sydney newspaper in the previous December",
              "A statement by her Chief that the marriage had been known in the Division for years",
              "A form completed by her in which the married state was mentioned and then withdrawn",
            ],
            correctIndex: 0,
            explanation:
              "He writes that it was only in December last that his office received notification that she had recently opened an account in a Sydney bank in the name Ruby Violet Payne-Scott.",
            sourceLessonSlug: "what-the-file-records",
          },
          {
            prompt: "What does the Chairman say about who knew of the marriage?",
            options: [
              "His office did not know, and he doubts her Chief did",
              "Her Chief had reported it to Head Office as soon as he learned of it in 1949",
              "The Division's clerical officers had recorded it on a form which Head Office received",
              "The Public Service Board had been notified but had not passed the notice on",
            ],
            correctIndex: 0,
            explanation:
              "He adds that they would have felt bound to acquaint Head Office of it, and that the form she refers to does not appear to have been received. Then he asks for details of that form.",
            sourceLessonSlug: "what-the-file-records",
          },
          {
            prompt: "How does the Chairman propose to settle the matter at the end of the letter?",
            options: [
              "She should tell him the date of her marriage",
              "She should apply to the Minister for a certificate of special circumstances",
              "She should resign at once and reapply for a temporary post in the same laboratory",
              "She should put her objection in writing to the Public Service Board instead",
            ],
            correctIndex: 0,
            explanation:
              "He calls it the simplest way of regularising the whole affair, and says they will then look into the matter and tell her what should be done in her own and their best interests.",
            sourceLessonSlug: "what-the-file-records",
          },
          {
            prompt: "What is missing from the page that prints the Chairman's letter?",
            options: [
              "Her letter of 20 February 1950",
              "The regulation itself, which the Chairman describes but does not quote in the letter",
              "The date, which the archive supplies from the file rather than from the document",
              "The signature, which was cut from the page before the file reached the archive",
            ],
            correctIndex: 0,
            explanation:
              "His first line thanks her for it, and he paraphrases and answers it throughout. The page does not print it, so nothing from it is quoted in this course.",
            sourceLessonSlug: "what-the-file-records",
          },
          {
            prompt: "What does this course do every time it uses the Chairman's account of her argument?",
            options: [
              "It says that he is the one summarising her",
              "It rewrites the summary in her voice, so that the learner hears her side of the dispute",
              "It prints the sentence other accounts attribute to her, with a note about its source",
              "It leaves the summary out, since a paraphrase by the other side proves nothing at all",
            ],
            correctIndex: 0,
            explanation:
              "A paraphrase written by the person on the other side of a dispute is evidence of what he understood or chose to record. Treating it as her words would hand her argument to him.",
            sourceLessonSlug: "what-the-file-records",
          },
          {
            prompt: "What does the archive's page say she did for six years?",
            options: [
              "Kept the marriage from her employer",
              "Worked as a temporary officer while applying repeatedly for a permanent post",
              "Corresponded with Head Office about the regulation before the Chairman replied",
              "Taught at a school in Sydney while continuing her research in her own time",
            ],
            correctIndex: 0,
            explanation:
              "The page says that like countless women she hid her marriage from her employers, and that when the six-year secret was exposed in 1950 she was forced to retire as a permanent staffer.",
            sourceLessonSlug: "what-the-file-records",
          },
          {
            prompt: "What happened to her employment after the marriage became known in 1950?",
            options: [
              "She was reinstated on a temporary basis",
              "She was dismissed outright and never worked for the organisation again after that year",
              "She was granted a ministerial certificate of special circumstances and kept her post",
              "She was transferred to another division of the organisation at the same grade",
            ],
            correctIndex: 0,
            explanation:
              "The archive says she was forced to retire as a permanent staffer and reinstated temporarily, and that in July 1951, with the birth of her first child imminent, she resigned.",
            sourceLessonSlug: "what-the-file-records",
          },
          {
            prompt: "What wrinkle does lesson 8 point out in the archive's own summary?",
            options: [
              "It calls the 1951 departure a resignation from a permanent position",
              "It gives two different dates for the letter, one in the transcript and one in the note",
              "It names two different chairmen, one in the note and one in the educational value text",
              "It says she never returned to CSIRO and then describes work she did there afterwards",
            ],
            correctIndex: 0,
            explanation:
              "Having said she was forced off permanent staff in 1950 and reinstated temporarily. The transcript settles the 1950 rule; the course does not assert her exact status in 1951.",
            sourceLessonSlug: "what-the-file-records",
          },
          {
            prompt: "How does this course treat the ASIO material mentioned on the archive's page?",
            options: [
              "One sentence, and the file itself was not read",
              "As a second case study, with its own lesson about security files and their contents",
              "As the explanation for the employment decision, since the two happened in the same years",
              "It is left out entirely, because a security file is not a record about employment",
            ],
            correctIndex: 0,
            explanation:
              "The page says an ASIO file lists her as a person of interest from 1948 to 1959. The reference number given elsewhere is unverified here, and the course uses none of its contents.",
            sourceLessonSlug: "what-the-file-records",
          },
          {
            prompt: "What are the three questions lesson 8 says to ask of any archived correspondence?",
            options: [
              "Whose paper is this, whose is missing, and is the missing side quoted through it",
              "Who wrote it, who received it, and which archive assigned it its citation number",
              "When was it written, when was it filed, and when was it opened to the public",
              "Is it signed, is it dated, and does the archive hold the envelope it was sent in",
            ],
            correctIndex: 0,
            explanation:
              "In this case the answers are the employer's, hers, and yes. The same three questions work on any file where only one side of an exchange survives.",
            sourceLessonSlug: "what-the-file-records",
          },
          {
            prompt: "In lesson 8's vocabulary, what is a paraphrase?",
            options: [
              "Somebody else's restatement of a person's words",
              "A summary written by an archivist to explain a document to students reading it",
              "A translation of a document into modern language, keeping the original meaning",
              "A quotation with the hedges removed, which is how compressions usually begin",
            ],
            correctIndex: 0,
            explanation:
              "It records what the restater understood or chose to keep. That is useful evidence about the restater and weak evidence about the person restated.",
            sourceLessonSlug: "what-the-file-records",
          },
          {
            prompt: "Whose word is regularising, in this correspondence?",
            options: [
              "The Chairman's",
              "The archive's, used in its note to describe what the letter was trying to achieve",
              "Payne-Scott's, quoted by the Chairman from her letter of 20 February 1950",
              "The Public Service Board's, quoted by the Chairman from the regulation itself",
            ],
            correctIndex: 0,
            explanation:
              "He calls telling him the date of the marriage the simplest way of regularising the whole affair. The word treats her employment, not the rule, as the thing out of order.",
            sourceLessonSlug: "what-the-file-records",
          },
          {
            prompt: "What does this course put on a research list rather than into a lesson?",
            options: [
              "Whether her own letter survives and what it says",
              "Whether the Chairman had authority to apply the regulation to a superannuated officer",
              "Whether the marriage rule was ever applied to a male officer in comparable circumstances",
              "Whether the archive's transcript is accurate, since the original was not seen",
            ],
            correctIndex: 0,
            explanation:
              "An open question is a claim this course has not settled. It goes on the list so that somebody can settle it, rather than into a lesson as a hedge nobody will ever clear.",
            sourceLessonSlug: "what-the-file-records",
          },
          {
            prompt: "What does lesson 9 say plainly about Payne-Scott's case?",
            options: [
              "Nobody took her name off a piece of work",
              "Her results were published by a colleague who added his own name to them later",
              "Her name was removed from the laboratory's list of staff after the marriage was known",
              "Her employer credited the laboratory as a unit rather than naming its researchers",
            ],
            correctIndex: 0,
            explanation:
              "It is an employment bar rather than a credit theft, and putting it beside a case about a screen credit only works if the difference is stated rather than smoothed over.",
            sourceLessonSlug: "not-a-stolen-byline",
          },
          {
            prompt: "In lesson 9's table, what was the category in the Derbyshire case?",
            options: [
              "Staff of a service department",
              "Married female officer, which is the category in the other case as well",
              "Freelance composers working for the corporation on a commission basis",
              "Women employed anywhere in the corporation during the 1960s",
            ],
            correctIndex: 0,
            explanation:
              "The rule attached to the job, not to the person. Payne-Scott's category was married female officer, and that rule attached to marital status.",
            sourceLessonSlug: "not-a-stolen-byline",
          },
          {
            prompt: "In lesson 9's table, who applied the rule in each case?",
            options: [
              "A manager following a practice, and a chairman quoting a regulation",
              "A producer choosing the credits, and a minister certifying special circumstances",
              "An engineer preparing a publication, and a clerk completing a personnel form",
              "A head of drama asking for names, and a public service board refusing them",
            ],
            correctIndex: 0,
            explanation:
              "Neither official invented the rule he applied, which is why the course is about the mechanism rather than about blame.",
            sourceLessonSlug: "not-a-stolen-byline",
          },
          {
            prompt: "What did each rule remove the woman from?",
            options: [
              "The credits and listings, and permanent staff and superannuation",
              "A royalty payment in both cases, one from a publisher and one from a pension fund",
              "A professional society in one case and a government department in the other",
              "The public record in both cases, since neither woman was named in any document",
            ],
            correctIndex: 0,
            explanation:
              "The scale is different and the course says so. One woman lost a line of credit; one woman lost a career's tenure and her entitlements.",
            sourceLessonSlug: "not-a-stolen-byline",
          },
          {
            prompt: "What does lesson 9's bottom row compare?",
            options: [
              "What could be recovered later",
              "Which employer kept the better archive of its own decisions about the two women",
              "Which rule was older, since one dated from the 1940s and the other was never dated",
              "Which woman objected in writing, and whether the objection was answered",
            ],
            correctIndex: 0,
            explanation:
              "A name can be added to a credit sequence fifty years later. Nothing returns the years of a career that the marriage rule ended.",
            sourceLessonSlug: "not-a-stolen-byline",
          },
          {
            prompt: "What does the 1966 amendment do for Payne-Scott?",
            options: [
              "Nothing, because it changes the rule going forward",
              "It restored her superannuation entitlements from the date of her marriage in the 1940s",
              "It reinstated every woman who had been forced to resign since the war ended",
              "It required CSIRO to write to her and apologise for applying the old regulation",
            ],
            correctIndex: 0,
            explanation:
              "An amendment changes a rule for everyone afterwards and returns nothing to the person it was applied to in 1950. That is what prospective means.",
            sourceLessonSlug: "not-a-stolen-byline",
          },
          {
            prompt: "Which lesson in Who Gets the Credit does the Payne-Scott file complicate?",
            options: [
              "Five ways a name disappears",
              "Working inside the corporation, on employee work converted into a corporate identity",
              "Five claims that do not survive checking, which corrects a famous story about a death",
              "Who counts as an author, and who gets thanked, on the difference between the two",
            ],
            correctIndex: 0,
            explanation:
              "That lesson says being barred by law leaves no document, because a person who cannot apply leaves no application. Her file is a written barrier, which is the rare case.",
            sourceLessonSlug: "not-a-stolen-byline",
          },
          {
            prompt: "What did that lesson treat as the rare case where a barrier was written down?",
            options: [
              "An 1858 legal opinion",
              "A 1909 statute setting out the classes in which a work could be registered",
              "A 1945 superannuation provision about officers who marry after its commencement",
              "A 1963 engineering monograph naming the grades that staffed a broadcasting unit",
            ],
            correctIndex: 0,
            explanation:
              "Payne-Scott's file is a second such case and a modern one: the barrier written down, quoted at the person it barred, dated, signed and publicly transcribed.",
            sourceLessonSlug: "not-a-stolen-byline",
          },
          {
            prompt: "Why does lesson 9 say a document like this is worth more than its contents?",
            options: [
              "It is the only way to see a mechanism that usually leaves nothing",
              "It proves the employer acted unlawfully, which no other document in the file does",
              "It carries an archival citation, which makes every claim built on it checkable",
              "It was written for students, so it explains the rule more clearly than a statute would",
            ],
            correctIndex: 0,
            explanation:
              "Most people barred by a rule leave no trace of the barring, because nothing is ever filed. When the barrier itself survives, it stands in for every case that did not leave one.",
            sourceLessonSlug: "not-a-stolen-byline",
          },
          {
            prompt: "What can the record show about the cost of the rule to Payne-Scott?",
            options: [
              "The removal, the temporary status and the resignation",
              "The salary she lost between 1950 and 1966, which the file records year by year",
              "The papers she would have published had she remained on the permanent staff",
              "The promotion she had been recommended for in the year the marriage became known",
            ],
            correctIndex: 0,
            explanation:
              "What no document shows is what the next twenty years of her research would have contained, and this course does not guess.",
            sourceLessonSlug: "not-a-stolen-byline",
          },
          {
            prompt: "What does the archive say about her work in the 1950s?",
            options: [
              "She was part of a team measuring radio emissions from the Sun and stars",
              "She built the first radio telescope in the southern hemisphere at a site near Sydney",
              "She led the laboratory's radar programme after the war and trained its new recruits",
              "She published the first Australian papers on the physics of the upper atmosphere",
            ],
            correctIndex: 0,
            explanation:
              "The archive calls it a breakthrough that would lead to the construction of sophisticated radio telescopes and the birth of radio astronomy. Her own papers were not read for this course.",
            sourceLessonSlug: "not-a-stolen-byline",
          },
          {
            prompt: "Why does this course say so little about the content of her science?",
            options: [
              "Her scientific papers were not read for it",
              "Because her research was classified and the papers have never been released",
              "Because the credit question does not depend on what any of her papers contained",
              "Because the archive's summary contradicts the published histories of the laboratory",
            ],
            correctIndex: 0,
            explanation:
              "Nothing more specific is claimed here than the archive's own summary states. Fetch or do not cite applies to a scientist's work exactly as it applies to a credit.",
            sourceLessonSlug: "not-a-stolen-byline",
          },
          {
            prompt: "What is lesson 9's honest summary of the two cases?",
            options: [
              "The paperwork was in order in both",
              "Both employers broke their own rules and were never held to account for it",
              "Both women were robbed of a byline by a colleague who took the work as his own",
              "Both cases were settled later, one by a credit and one by a change in the law",
            ],
            correctIndex: 0,
            explanation:
              "One woman lost a line of credit, one lost a career's tenure, and the machinery worked exactly as designed. The design is the subject of the course.",
            sourceLessonSlug: "not-a-stolen-byline",
          },
          {
            prompt: "What is an employment bar, as lesson 9 defines it?",
            options: [
              "A rule preventing a category of person from holding a job",
              "A clause preventing an employee from working for a competitor after leaving",
              "A rule about whose name appears on work made by a team of employees",
              "A period during which a former officer may not be re-employed by the same body",
            ],
            correctIndex: 0,
            explanation:
              "It is distinguished from a rule about whose name appears on work, which is the Derbyshire mechanism. Naming the difference is what makes the comparison honest.",
            sourceLessonSlug: "not-a-stolen-byline",
          },
          {
            prompt: "Why does this catalog insist on naming the mechanism?",
            options: [
              "Because stolen covers several different things",
              "Because a mechanism can be sued over, while a story about a villain cannot",
              "Because archives catalogue their holdings by mechanism rather than by person",
              "Because the word credit means different things in music, science and architecture",
            ],
            correctIndex: 0,
            explanation:
              "Different mechanisms call for different evidence, produce different records and would have needed different remedies. Calling everything theft hides all three differences.",
            sourceLessonSlug: "not-a-stolen-byline",
          },
          {
            prompt: "What does prospective mean in lesson 9's vocabulary?",
            options: [
              "Forward-looking, returning nothing to earlier cases",
              "Applying to every officer of a department, whatever their length of service",
              "Written in advance of the conduct it governs, so that nobody can be surprised by it",
              "Subject to a minister's certificate, which can be granted or withheld case by case",
            ],
            correctIndex: 0,
            explanation:
              "The 1966 amendment and the 2013 screen credit are both prospective in their own way, and Section 5 works out what each could and could not reach.",
            sourceLessonSlug: "not-a-stolen-byline",
          },
          {
            prompt: "What is tenure, as this course uses the word?",
            options: [
              "Permanence in a post, with its entitlements",
              "The length of time an officer has served, which decides seniority within a grade",
              "A fixed term of appointment, renewable by the Council with the Minister's approval",
              "The right of an employee to be named on work produced by their department",
            ],
            correctIndex: 0,
            explanation:
              "It is what the marriage rule removed. Temporary reinstatement gave back the work and not the tenure, which is the distinction the archive's summary turns on.",
            sourceLessonSlug: "not-a-stolen-byline",
          },
          {
            prompt: "Which two words describe what the Chairman's letter does that no BBC document does?",
            options: [
              "Quotes the rule",
              "Names the woman, since the BBC documents of the period name nobody at all",
              "Records a refusal, since the BBC documents record only requests that were granted",
              "Dates the practice, since nobody knows when the BBC convention began or ended",
            ],
            correctIndex: 0,
            explanation:
              "The BBC's monograph shows the practice's effect and the Esslin memo presupposes it. Neither states it. The Chairman writes the rule out twice and attaches an Act number.",
            sourceLessonSlug: "a-rule-you-can-read",
          },
          {
            prompt: "What would a researcher who read only the CSIR and CSIRO Acts conclude?",
            options: [
              "That neither Act mentions married women",
              "That the marriage rule was invalid, since no Act authorised it",
              "That the rule applied only to officers in the superannuation scheme",
              "That the Minister had to approve every appointment of a woman personally",
            ],
            correctIndex: 0,
            explanation:
              "True and useless, as lesson 7 puts it. The rule lived in a regulation made under a clause of one Act and copied from the public service, and that is where it had to be looked for.",
            sourceLessonSlug: "a-rule-you-can-read",
          },
          {
            prompt: "Which exception did the marriage regulation contain?",
            options: [
              "A ministerial certificate of special circumstances",
              "An exemption for officers with more than ten years' service in the same division",
              "A right of appeal to the Public Service Board within one month of the marriage",
              "A discretion for the Chief of a Division to retain an officer he considered essential",
            ],
            correctIndex: 0,
            explanation:
              "The Minister, upon a recommendation by the Council, could certify that there were special circumstances which made her employment desirable. The letter says the Superannuation Act carried no such room.",
            sourceLessonSlug: "a-rule-you-can-read",
          },
          {
            prompt: "What does the letter show about where the marriage rule had come from?",
            options: [
              "It was copied from the wider public service",
              "It was written specifically for the Radiophysics Laboratory during the war",
              "It was imposed by the Public Service Board after CSIR became CSIRO in 1949",
              "It originated in the Superannuation Act and was later extended to employment",
            ],
            correctIndex: 0,
            explanation:
              "The regulation was based on a similar regulation promulgated under the Public Service Act, which is why the archive can describe the same position across the whole service.",
            sourceLessonSlug: "a-rule-you-can-read",
          },
          {
            prompt: "What kind of document is a personnel file, in this course's vocabulary?",
            options: [
              "An employer's file about one employee",
              "A public register that anyone may search for the terms of a person's employment",
              "A collection of an employee's own papers, deposited by her family after her death",
              "A summary prepared by an archive when a government department is wound up",
            ],
            correctIndex: 0,
            explanation:
              "In a public service it is often transferred to a national archive, which is how a letter written to one woman in 1950 came to be readable by anyone in the world.",
            sourceLessonSlug: "a-rule-you-can-read",
          },
          {
            prompt: "What did Payne-Scott and Joan Freeman become in June 1941?",
            options: [
              "The laboratory's first women physicists",
              "The first women admitted to the Commonwealth's superannuation scheme as officers",
              "The first two women to be granted permanent appointments anywhere in CSIR",
              "The first Australian physicists to work on radar, which had until then been British work",
            ],
            correctIndex: 0,
            explanation:
              "The archive says the two became the first women physicists employed by the Radiophysics Laboratory of CSIR at the University of Sydney, and that classified defence research followed.",
            sourceLessonSlug: "a-rule-that-applied-to-everyone",
          },
          {
            prompt: "When did CSIR become CSIRO, according to the archive's page?",
            options: [
              "1949",
              "1941, when the Radiophysics Laboratory was established at the University of Sydney",
              "1945, in the same Act that carried the superannuation provision quoted in the letter",
              "1966, when the Public Service Act was amended to end the marriage requirement",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the Chairman's letter has to distinguish the Act constituting CSIR from the Act constituting CSIRO, and explain which terms were being applied in the meantime.",
            sourceLessonSlug: "a-rule-you-can-read",
          },
          {
            prompt: "What does lesson 8 say a file actually is?",
            options: [
              "Whatever somebody kept",
              "A complete record of a dispute, since public servants were required to file every letter",
              "A neutral account, since the archive checks both sides before it transcribes a document",
              "The employer's case, prepared for a hearing that in this instance never took place",
            ],
            correctIndex: 0,
            explanation:
              "It is not a transcript of what happened, and in a correspondence between an employer and an employee the two sides are almost never kept equally.",
            sourceLessonSlug: "what-the-file-records",
          },
          {
            prompt: "What does the imbalance in this file mirror, in the course's larger argument?",
            options: [
              "One side's paper survives and the other's does not",
              "One employer kept records and the other destroyed them when the unit closed",
              "One country's archives are open to the public and the other's are closed",
              "One rule was applied by a man and the other by a committee of officials",
            ],
            correctIndex: 0,
            explanation:
              "The course is about what each instrument leaves behind. Inside this single file, the same asymmetry appears again between the employer's letter and the employee's.",
            sourceLessonSlug: "what-the-file-records",
          },
          {
            prompt: "What does lesson 8 say about the politeness of the Chairman's letter?",
            options: [
              "The form of the document is part of what makes it teachable",
              "It proves that he disagreed privately with the rule he was applying to her",
              "It shows the letter was drafted by a clerk rather than by the Chairman himself",
              "It means the letter cannot be read as an enforcement of the regulation at all",
            ],
            correctIndex: 0,
            explanation:
              "He says there can be two opinions, contents himself with pointing out a consequence, and asks for a date. The rule is enforced throughout in careful and courteous prose.",
            sourceLessonSlug: "what-the-file-records",
          },
          {
            prompt: "Why does lesson 9 begin by stating the obvious difference?",
            options: [
              "Blurring it would weaken the course",
              "Because a reader who has taken the other courses will already expect a stolen byline",
              "Because the archive's own summary describes it as a case of stolen credit",
              "Because the difference is the only thing the two cases have in common",
            ],
            correctIndex: 0,
            explanation:
              "The comparison earns its place by being exact. An employment bar and a missing credit are different injuries, and the course gains nothing by letting them blur.",
            sourceLessonSlug: "not-a-stolen-byline",
          },
          {
            prompt: "What did each case leave on paper, in lesson 9's table?",
            options: [
              "Documents that name nobody, and a letter that quotes the rule",
              "A signed contract in each case, one with a broadcaster and one with a government body",
              "A set of press clippings in one case and a scientific bibliography in the other",
              "Nothing in either case, which is why both had to be reconstructed from testimony",
            ],
            correctIndex: 0,
            explanation:
              "That row is the course in one line. The same mechanism, at different grades of paper, leaves completely different kinds of evidence behind.",
            sourceLessonSlug: "not-a-stolen-byline",
          },
          {
            prompt: "How long does the archive say ASIO listed her as a person of interest?",
            options: [
              "From 1948 to 1959",
              "From 1941 to 1945, during the classified defence research at the laboratory",
              "From 1950 to 1966, the years between the marriage rule and its amendment",
              "For the whole of her employment by CSIR and CSIRO, from 1941 until 1951",
            ],
            correctIndex: 0,
            explanation:
              "The course uses the dates and nothing else. It did not read the file, and the reference number given for that file elsewhere is unverified here.",
            sourceLessonSlug: "what-the-file-records",
          },
          {
            prompt: "What does lesson 8 say a government's files about a person contain?",
            options: [
              "Several separate interests, kept for separate reasons",
              "A single narrative, assembled by the department that employed the person",
              "Only what the person themselves submitted, since nothing else is retained",
              "The complete record of a career, which is why such files settle biographical questions",
            ],
            correctIndex: 0,
            explanation:
              "None of them is a record of her science. A file answers the questions its keeper was asking, which is rarely the question a later reader brings to it.",
            sourceLessonSlug: "what-the-file-records",
          },
          {
            prompt: "Which phrase from the letter shows the employer treating her employment as the thing out of order?",
            options: [
              "Regularising the whole affair",
              "No ground for equivocation or varying interpretation, which describes the statute",
              "Special circumstances which made her employment desirable, from the regulation",
              "Relying on their discretion and good sense, which describes the other officers",
            ],
            correctIndex: 0,
            explanation:
              "The rule is taken as fixed and her position as the irregularity to be corrected, which is exactly how a convention behaves when nobody is questioning it.",
            sourceLessonSlug: "what-the-file-records",
          },
          {
            prompt: "What does the archive say happened after 1951?",
            options: [
              "She never returned to CSIRO",
              "She was reinstated as a permanent officer once the Public Service Act was amended",
              "She continued her research at the laboratory on a part-time temporary basis",
              "She was awarded compensation for the entitlements lost when she was forced to retire",
            ],
            correctIndex: 0,
            explanation:
              "The page records the resignation in July 1951, with the birth of her first child imminent, and says she never returned.",
            sourceLessonSlug: "what-the-file-records",
          },
          {
            prompt: "What kind of page is the source for the whole of Section 3?",
            options: [
              "A national archive's learning resource, with a full transcript",
              "A scholarly article about women in Australian science, published in a journal",
              "An obituary written by a colleague who had worked at the same laboratory",
              "A government report into discrimination in the Commonwealth Public Service",
            ],
            correctIndex: 0,
            explanation:
              "The learning resource text is credited to Education Services Australia and the National Archives of Australia, and the transcript of the 1950 letter is printed in full on it.",
            sourceLessonSlug: "a-rule-you-can-read",
          },
          {
            prompt: "What did the Chairman ask her to supply about the form she had mentioned?",
            options: [
              "Details of it, and to whom and when it was submitted",
              "A signed copy of it, certified by her Chief at the Radiophysics Laboratory",
              "An explanation of why she had completed it before notifying Head Office",
              "Confirmation that it had been destroyed, since Head Office had no record of it",
            ],
            correctIndex: 0,
            explanation:
              "He writes that Head Office does not appear to have received the form in which her married state is mentioned, and would be grateful for details of it.",
            sourceLessonSlug: "what-the-file-records",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4 — Zitkala-Šá and the register
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-card-that-was-filed-first",
      title: "10 · The card that was filed first",
      section: "Section 4 · Zitkala-Šá and the register",
      body: `The third instrument is a **public register**, and it behaves unlike either of the other two. An employer's practice is kept by nobody and readable by nobody. A statute is published and quoted at you. A register is a government office where a private person goes and makes an entry, and the entry stays, searchable by any stranger, for as long as the office does.

**The work.** *The Sun Dance Opera*, an opera in three acts, was first produced at Orpheus Hall in Vernal, Utah, in February 1913, where it filled the hall for three nights (Smith, 2001). Two people made it. Zitkala-Šá was a Yankton Dakota writer and musician, born on the Yankton Indian Reservation on 22 February 1876 (National Park Service [NPS], 2022). William F. Hanson was a local music teacher: Hafen calls him a Duchesne, Utah, music teacher and Smith says he was then teaching at the Uintah Academy in Vernal (Hafen, 1998; Smith, 2001).

**The entry.** On 12 December 1912, two months before that first production, Hanson deposited a piano-vocal score with the Copyright Office (Smith, 2001). The card is public and it can be read today as an image. Its typed heading is "Hanson (WM.F.)", and under it, "Sun (The) dance; opera in 3 acts. Vocal score." It is stamped "1 c. rec'd DEC 12 1912". The printed form is an "Application for Copyright" for a "Dramatic Composition not Reproduced for Sale", with the word "Musical" written in by hand, made "according to the provisions of the Act of March 4, 1909". Against "Name and address of copyright claimant" it reads "Wm F Hanson, Vernal Utah". On the back, against "Name of Author", it reads "Wm F Hanson" (U.S. Copyright Office, 1912). **No other person is named anywhere on either side of the card.**

The Copyright Office's own blog post about her says it plainly: "despite her contributions, Zitkála-Šá does not appear on the copyright records for the work", and captions the image, "The record shows Wm. F. Hanson as the sole claimant" (Chen, 2021).

**Why the form asks twice, and why that matters.** A 1909-Act application asks for the **author** and, separately, for the **copyright claimant**. They are different questions. The author made the work; the claimant holds the copyright at the moment of filing, and may be a publisher, an employer, a buyer or an heir. A card that asks both and receives one name is telling you one of two things, and it does not tell you which: either one person was both, or nobody filled in the difference. What the card does establish, beyond argument, is who filed, what was claimed, and on what date.

**Two rules this section keeps, and they are rules rather than gaps.**

**One: this course never describes the Sun Dance ceremony, and never describes how the opera staged it.** The opera took its subject from the Sun Dance, and at the time of the first production the practice was outlawed on the Uintah and Ouray reservation (Hafen, 1998). Hafen, who wrote the fullest scholarly study of the collaboration and writes as a Native woman and academic, says that were the whole opera "reconstructed or performed now, certainly it would violate contemporary notions of artistic and tribal sovereignty and religious respect" (Hafen, 1998). The credit question does not need the ceremony. It needs the paperwork.

**Two: this course never says how much of the opera was hers.** Not a fraction, not a phrase, not a hedge that smuggles one in. The documents can say who filed, who signed, who was named and when. They cannot say that, and lesson 11 shows a federal web page making exactly that claim anyway.

:::reveal What does the 1912 registration card for The Sun Dance Opera establish, beyond argument? ||| Who filed it, what was claimed, and on what date: a piano-vocal score, claimed by Wm F Hanson of Vernal, Utah, received on 12 December 1912.

:::reveal What two different questions does a 1909-Act application ask? ||| Who the author is, and who the copyright claimant is. One name in both blanks means either that one person was both or that nobody filled in the difference.

:::reveal Name the two rules this section keeps. ||| It never describes the Sun Dance ceremony or the opera's staging of it, and it never says how much of the opera either collaborator wrote.

## Vocabulary
- **Register**: a government record of claims, made by whoever files and searchable afterwards by anyone.
- **Claimant**: on a registration form, the person claiming to hold the copyright, which is a different question from who wrote the work.
- **Deposit**: the copy of a work filed with the Copyright Office as part of registering it.
- **Piano-vocal score**: the form of an opera written out for voices with a piano reduction, which is what was deposited here.

## Sources
Chen, N. M. (2021, March 31). *Zitkála-Šá: On creativity, copyright, and cultural empowerment* [Blog post]. Library of Congress, Copyright Office. https://blogs.loc.gov/copyright/2021/03/zitkla-on-creativity-copyright-and-cultural-empowerment/
Hafen, P. J. (1998). A cultural duet: Zitkala Ša and *The Sun Dance Opera*. *Great Plains Quarterly*, *18*(2), 102-111. https://digitalcommons.unl.edu/greatplainsquarterly/2028/
National Park Service. (2022, September 1). *Zitkala-Ša (Red Bird / Gertrude Simmons Bonnin)*. https://www.nps.gov/people/zitkala-sa.htm
Smith, C. P. (2001). An operatic skeleton on the western frontier: Zitkala-Sa, William F. Hanson, and *The Sun Dance Opera*. *Women & Music*, *5*.
U.S. Copyright Office. (1912). [Application card for *The Sun Dance Opera*, front and back]. Copyright card catalog, 1909-1937. Library of Congress. https://tile.loc.gov/storage-services/service/copyright/hprcatcard/19/09/19/37/HA/M-/HA/RR/N/19091937HAM-HARRN/CC19091937HAM-HARRN.0672a.jpg`,
    },
    {
      slug: "what-the-register-could-not-hold",
      title: "11 · What the register could not hold",
      section: "Section 4 · Zitkala-Šá and the register",
      body: `A register records what is filed with it. Everything else about a work happens somewhere else, and in this case four things did.

**One: the newspapers named her, and the register did not.** Smith, who worked the sources, writes that "Zitkala-Sa's role in the early productions was always fully acknowledged in the surviving newspaper stories before the 1935 revival" (Smith, 2001). She quotes a *Musical America* headline from the premiere coverage: "Braves Aid in Indian Opera at Utah Presentation ... A Full-Blooded Sioux Co-Author." So the press and the register disagreed from the start, and the press reached readers for a day while the register reached institutions for a century. **That is the same split Section 2 found in London fifty years later**, where the papers of 1965 named Derbyshire while the credits did not.

**Two: a right was transferred and never recorded.** Smith again: "Hanson copyrighted his score under his own name. He neglected to assign 'an undivided half interest' in the opera to his Native American collaborator until a month after the first production. (That assignment, notarized in Uintah County, Utah, is not recorded in the Copyright Office.)" (Smith, 2001). Three sections of the 1909 Act make that sentence matter.

- **Section 42**: copyright "may be assigned, granted, or mortgaged by an instrument in writing signed by the proprietor". Between two people, a signature is enough.
- **Section 44**: "every assignment of copyright shall be recorded in the copyright office within three calendar months after its execution in the United States ... in default of which it shall be void as against any subsequent purchaser or mortgagee for a valuable consideration, without notice, whose assignment has been duly recorded."
- **Section 46**: once an assignment has been recorded, "the assignee may substitute his name for that of the assignor in the statutory notice" (Copyright Act of 1909).

Read those together and the register's nature is exact. **Recording is what buys visibility.** A half interest can be real between the two people who signed for it and invisible to everyone else at the same time, and the public notice keeps saying what it always said.

**Three: later claims went the other way.** Hafen records that "his name alone appears on the title page of *The Sun Dance Opera*", that when the opera was revived at Brigham Young University in 1935 and selected for performance in New York in 1938 "Hanson claims sole proprietorship of the opera", and that "indeed, he later assigns copyright to BYU", while "in the memoir he acknowledges Zitkala Sa as coauthor and collaborator" (Hafen, 1998). The New York production came months after her death in 1938 (Hafen, 1998).

**Four: a correction was written by hand, far too late to reach the register.** Smith: "Much later, Hanson thought better of all this. In a shaky hand, he added 'Zitkala Sa & W. F. Hanson' after the opera's title" (Smith, 2001). That correction reaches whoever opens that box in that archive, one reader at a time, which is the smallest reach of any instrument in this course.

**And here is what none of these documents settles.** How much of the opera was hers. A federal web page states that "Zitkala-Ša wrote the libretto and songs" (NPS, 2022). That is an authorship share, asserted on a government site, and no document in this section supports it: not the card, which names one man in both blanks; not the assignment, which divides an interest rather than a credit; not the press, which called her a co-author without dividing the work. Contemporary accounts also disagree with each other, and Smith says of one 1913 account of the collaboration that "several pieces of evidence tend to contradict" it. **This course names the claim and does not repeat it.** The same page, incidentally, gives her death as 26 January 1938 in one place and 1928 in another, which is a useful reminder that a federal page is a source and not an oracle.

**Where to go for the depth.** This section teaches the instrument. A whole course in this catalog teaches the case: ***Whose Name Is on the Score*** reads **all five registration cards as images**, works through the **1909 Act section by section**, and reads **the newspapers of 1913**, along with the 1935 and 1938 claims and the late handwritten line. If the register is the instrument you want to learn to read, that is the course to take next, and it keeps the same two rules this section keeps.

:::reveal Under the 1909 Act, what did recording an assignment buy that signing one did not? ||| Visibility. A signed assignment bound the two people who signed it; recording it was what made it good against a later purchaser and let the new owner's name be substituted in the statutory notice.

:::reveal What did Hanson add to the score by hand, and what does that correction reach? ||| Zitkala Sa and W. F. Hanson after the opera's title. It reaches whoever opens that box in that archive, one reader at a time.

:::reveal What claim does a federal web page make that this course will not repeat? ||| That Zitkala-Šá wrote the libretto and songs. That is an authorship share, and no document in this section supports it.

## Vocabulary
- **Assignment**: a transfer of copyright, which section 42 required to be made by an instrument in writing signed by the proprietor.
- **Recording**: filing an assignment with the Copyright Office, which section 44 required within three calendar months and section 46 made the condition of changing the name in the notice.
- **Undivided half interest**: a share of the whole right rather than of a part of the work, which is what the notarised paper conveyed.
- **Statutory notice**: the copyright line printed on the work itself, naming the owner.

## Sources
Copyright Act of 1909, §§ 42, 44, 46 [Full text]. U.S. Copyright Office. https://www.copyright.gov/history/1909act.pdf
Hafen, P. J. (1998). A cultural duet: Zitkala Ša and *The Sun Dance Opera*. *Great Plains Quarterly*, *18*(2), 102-111. https://digitalcommons.unl.edu/greatplainsquarterly/2028/
National Park Service. (2022, September 1). *Zitkala-Ša (Red Bird / Gertrude Simmons Bonnin)*. https://www.nps.gov/people/zitkala-sa.htm
Smith, C. P. (2001). An operatic skeleton on the western frontier: Zitkala-Sa, William F. Hanson, and *The Sun Dance Opera*. *Women & Music*, *5*.`,
    },
    {
      slug: "section-4-quiz",
      title: "Section 4 quiz · Zitkala-Šá and the register",
      section: "Section 4 · Zitkala-Šá and the register",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "How does lesson 10 describe what a public register is?",
            options: [
              "A government office where a private person makes an entry",
              "An employer's internal file about the work its staff have produced in a given year",
              "A published list of rules that an industry has agreed to apply to its members",
              "A catalogue of works held by a library, compiled by its own staff from the shelves",
            ],
            correctIndex: 0,
            explanation:
              "And the entry stays, searchable by any stranger, for as long as the office does. That is what makes it unlike an employer's practice and unlike a statute.",
            sourceLessonSlug: "the-card-that-was-filed-first",
          },
          {
            prompt: "Where and when was The Sun Dance Opera first produced?",
            options: [
              "Vernal, Utah, in February 1913",
              "New York City, in 1938, by a light opera guild a few months after her death",
              "Provo, Utah, in 1935, when the opera was revived at Brigham Young University",
              "Washington, D.C., in 1921, at a hall hired by a national Indian organisation",
            ],
            correctIndex: 0,
            explanation:
              "At Orpheus Hall, where Smith records that it filled the hall for three nights. The registration had been filed two months earlier.",
            sourceLessonSlug: "the-card-that-was-filed-first",
          },
          {
            prompt: "Who made the opera?",
            options: [
              "Zitkala-Šá and William F. Hanson",
              "Zitkala-Šá alone, with Hanson acting only as her copyist and publisher",
              "William F. Hanson alone, using melodies collected by an anthropologist",
              "A committee at Brigham Young University, which later owned the copyright",
            ],
            correctIndex: 0,
            explanation:
              "She was a Yankton Dakota writer and musician; he was a local music teacher. How much of it was whose is exactly what this course does not say.",
            sourceLessonSlug: "the-card-that-was-filed-first",
          },
          {
            prompt: "On what date was the piano-vocal score deposited with the Copyright Office?",
            options: [
              "12 December 1912",
              "1 February 1913, in the week the opera first opened at Orpheus Hall",
              "5 December 1921, the day she registered a book of her own with the office",
              "15 January 1929, when a renewal was filed under section 24 of the 1909 Act",
            ],
            correctIndex: 0,
            explanation:
              "Two months before the first production. The card is stamped one copy received December 12 1912, with a cash stamp of the same date.",
            sourceLessonSlug: "the-card-that-was-filed-first",
          },
          {
            prompt: "What is the typed heading on the 1912 registration card?",
            options: [
              "Hanson (WM.F.)",
              "Bonnin (Gertrude) and Hanson (WM.F.), joint claimants of a dramatico-musical work",
              "Sun Dance Opera Company, Vernal, Utah, as proprietor of the unpublished score",
              "Uintah Academy, Vernal, Utah, which employed the music teacher at the time",
            ],
            correctIndex: 0,
            explanation:
              "Under it the card reads: Sun (The) dance; opera in 3 acts. Vocal score. The heading is the name the entry is filed under.",
            sourceLessonSlug: "the-card-that-was-filed-first",
          },
          {
            prompt: "What kind of work does the 1912 form say is being registered?",
            options: [
              "A dramatic composition not reproduced for sale",
              "A book, published and offered for sale by a Boston publishing house",
              "A musical arrangement of traditional melodies collected on a reservation",
              "A periodical contribution, registered in the class the Act reserved for magazines",
            ],
            correctIndex: 0,
            explanation:
              "With the word Musical written in by hand, and the application made according to the provisions of the Act of March 4, 1909.",
            sourceLessonSlug: "the-card-that-was-filed-first",
          },
          {
            prompt: "What name appears against copyright claimant on the card?",
            options: [
              "Wm F Hanson, Vernal Utah",
              "Gertrude Bonnin, of the Uintah and Ouray reservation, Utah",
              "Ginn and Company, Boston, which had published her earlier book",
              "Brigham Young University, Provo, Utah, to which the copyright was later assigned",
            ],
            correctIndex: 0,
            explanation:
              "And on the back, against Name of Author, the card reads Wm F Hanson as well. No other person is named anywhere on either side.",
            sourceLessonSlug: "the-card-that-was-filed-first",
          },
          {
            prompt: "What does the Copyright Office's own post say about her and the records?",
            options: [
              "She does not appear on the copyright records for the work",
              "She appears as author on the back of the card but not as claimant on the front",
              "She was refused registration when she applied separately in the following year",
              "She assigned her interest before the registration, which is why she is not named",
            ],
            correctIndex: 0,
            explanation:
              "The post says it despite her contributions, and its caption for the card image reads: the record shows Wm. F. Hanson as the sole claimant.",
            sourceLessonSlug: "the-card-that-was-filed-first",
          },
          {
            prompt: "What two questions does a 1909-Act application ask?",
            options: [
              "Who the author is, and who the claimant is",
              "Who wrote the words, and who wrote the music, so that shares can be recorded",
              "Who filed the form, and who paid the fee that accompanied the deposit",
              "Who owns the work now, and who will own it when the first term expires",
            ],
            correctIndex: 0,
            explanation:
              "The author made the work; the claimant holds the copyright at the moment of filing and may be a publisher, an employer, a buyer or an heir.",
            sourceLessonSlug: "the-card-that-was-filed-first",
          },
          {
            prompt: "What does a card that receives one name in both blanks tell you?",
            options: [
              "One of two things, and not which",
              "That the person named wrote the whole of the work without any collaborator",
              "That the office checked the claim and found no other author to record",
              "That the other collaborator had already assigned away every interest they held",
            ],
            correctIndex: 0,
            explanation:
              "Either one person was both author and claimant, or nobody filled in the difference. What the card does establish is who filed, what was claimed and on what date.",
            sourceLessonSlug: "the-card-that-was-filed-first",
          },
          {
            prompt: "What is the first rule this section keeps?",
            options: [
              "It never describes the Sun Dance ceremony",
              "It never names the collaborator who filed the registration card",
              "It never quotes a secondary source about the opera's first production",
              "It never mentions the opera at all, since the credit record is the subject",
            ],
            correctIndex: 0,
            explanation:
              "Nor the opera's staging of it. The practice was outlawed on the Uintah and Ouray reservation at the time, and Hafen says a performance now would violate tribal sovereignty and religious respect.",
            sourceLessonSlug: "the-card-that-was-filed-first",
          },
          {
            prompt: "Why does lesson 10 say that rule is a rule and not a gap?",
            options: [
              "The credit question needs the paperwork, not the ceremony",
              "Because no source describes the ceremony, so nothing could be written about it",
              "Because the ceremony was not part of the opera, which used a different subject",
              "Because the archive that holds the score has forbidden any description of it",
            ],
            correctIndex: 0,
            explanation:
              "The section states it at the front rather than leaving the absence to be noticed, and gives Hafen's reason in her own words.",
            sourceLessonSlug: "the-card-that-was-filed-first",
          },
          {
            prompt: "What is the second rule this section keeps?",
            options: [
              "It never says how much of the opera was hers",
              "It never quotes the registration card, since the image is hard to read",
              "It never names Hanson, because the course is about the record and not the man",
              "It never cites a federal source, because one of them contradicts itself",
            ],
            correctIndex: 0,
            explanation:
              "Not a fraction, not a phrase, not a hedge that smuggles one in. The documents can say who filed, who signed, who was named and when.",
            sourceLessonSlug: "the-card-that-was-filed-first",
          },
          {
            prompt: "What was deposited with the Copyright Office in December 1912?",
            options: [
              "A piano-vocal score",
              "A full orchestral score, with parts for every instrument used in the production",
              "A libretto only, since the music had not yet been written down at that date",
              "A photograph of the first production, as evidence that the work existed",
            ],
            correctIndex: 0,
            explanation:
              "The form of an opera written out for voices with a piano reduction. Smith records the deposit two months before the initial production.",
            sourceLessonSlug: "the-card-that-was-filed-first",
          },
          {
            prompt: "Where was Zitkala-Šá born, and when?",
            options: [
              "On the Yankton Indian Reservation, on 22 February 1876",
              "In Vernal, Utah, in 1876, where the opera was later first produced",
              "In Washington, D.C., in 1876, where she later registered a book of her own",
              "On the Uintah and Ouray reservation, in 1886, where she lived as an adult",
            ],
            correctIndex: 0,
            explanation:
              "The National Park Service page gives the date and the place. The same page contradicts itself about the year of her death, which lesson 11 uses as a warning.",
            sourceLessonSlug: "the-card-that-was-filed-first",
          },
          {
            prompt: "How do the sources describe William F. Hanson?",
            options: [
              "A local music teacher",
              "A professional opera composer with works already staged in New York",
              "An anthropologist employed to record music on the reservation",
              "A clerk in the Copyright Office who filed registrations on behalf of others",
            ],
            correctIndex: 0,
            explanation:
              "Hafen calls him a Duchesne, Utah, music teacher; Smith says he was then teaching at the Uintah Academy in Vernal. The course prints both rather than choosing.",
            sourceLessonSlug: "the-card-that-was-filed-first",
          },
          {
            prompt: "What does the card establish beyond argument?",
            options: [
              "Who filed, what was claimed, and on what date",
              "Who wrote the music, and who wrote the words that go with it",
              "That the collaboration had already ended by December 1912",
              "That the Copyright Office accepted one claimant after refusing another",
            ],
            correctIndex: 0,
            explanation:
              "That is what a register is good for, and it is where a register stops. It cannot record who did the work.",
            sourceLessonSlug: "the-card-that-was-filed-first",
          },
          {
            prompt: "What is a deposit, in lesson 10's vocabulary?",
            options: [
              "The copy of a work filed as part of registering it",
              "A sum of money lodged with the Copyright Office against the cost of a dispute",
              "A collection of papers placed with an archive on permanent loan by their owner",
              "The entry made in the printed catalogue of copyright entries for a given year",
            ],
            correctIndex: 0,
            explanation:
              "Here it was a piano-vocal score, and the card records that one copy was received on 12 December 1912.",
            sourceLessonSlug: "the-card-that-was-filed-first",
          },
          {
            prompt: "What did the newspapers of 1913 do that the register did not?",
            options: [
              "They acknowledged her role in the early productions",
              "They printed the text of the registration card so that readers could check it",
              "They named Hanson alone, which is where the later accounts took their wording from",
              "They reported the assignment of a half interest in the opera to her",
            ],
            correctIndex: 0,
            explanation:
              "Smith writes that her role in the early productions was always fully acknowledged in the surviving newspaper stories before the 1935 revival.",
            sourceLessonSlug: "what-the-register-could-not-hold",
          },
          {
            prompt: "What does Smith quote as a Musical America headline from the premiere coverage?",
            options: [
              "Braves Aid in Indian Opera at Utah Presentation",
              "Utah Music Teacher Registers Opera With Copyright Office in Washington",
              "Sun Dance Opera Opens Three Nights to Full Houses in Eastern Utah",
              "Composer and Collaborator Divide an Undivided Half Interest in New Work",
            ],
            correctIndex: 0,
            explanation:
              "The same headline continues: a full-blooded Sioux co-author. The press and the register disagreed from the start.",
            sourceLessonSlug: "what-the-register-could-not-hold",
          },
          {
            prompt: "What split does lesson 11 say the 1913 press coverage shares with Section 2?",
            options: [
              "The papers named her while the official record did not",
              "The papers were wrong about the facts while the official record was right",
              "The papers named nobody while the official record named everybody involved",
              "The papers named the producer while the official record named the composer",
            ],
            correctIndex: 0,
            explanation:
              "In London fifty years later the papers of 1965 named Derbyshire while the credits did not. The press reaches readers for a day; the record reaches institutions for a century.",
            sourceLessonSlug: "what-the-register-could-not-hold",
          },
          {
            prompt: "What did Hanson sign a month after the first production?",
            options: [
              "An assignment of an undivided half interest",
              "A contract with a New York light opera guild for a Broadway production",
              "A transfer of the copyright to Brigham Young University, where he later taught",
              "A renewal of the registration, filed within the term the 1909 Act allowed",
            ],
            correctIndex: 0,
            explanation:
              "Smith: he neglected to assign an undivided half interest in the opera to his Native American collaborator until a month after the first production, and that assignment was notarised in Uintah County.",
            sourceLessonSlug: "what-the-register-could-not-hold",
          },
          {
            prompt: "What happened to that assignment afterwards?",
            options: [
              "It was never recorded in the Copyright Office",
              "It was recorded within three months, as section 44 of the Act required",
              "It was cancelled by a later agreement between the two collaborators",
              "It was lodged with a court in Uintah County and has since been lost",
            ],
            correctIndex: 0,
            explanation:
              "Smith says so in a parenthesis. Under the 1909 Act, recording is what buys visibility, and an unrecorded transfer leaves the public notice saying what it always said.",
            sourceLessonSlug: "what-the-register-could-not-hold",
          },
          {
            prompt: "What did section 42 of the 1909 Act require for an assignment?",
            options: [
              "An instrument in writing signed by the proprietor",
              "A filing with the Copyright Office within three calendar months of the transfer",
              "The consent of every author named on the original registration form",
              "A payment of the statutory fee and the deposit of a further copy of the work",
            ],
            correctIndex: 0,
            explanation:
              "Between two people a signature was enough. It is section 44 that deals with recording, and section 46 with whose name may appear in the notice.",
            sourceLessonSlug: "what-the-register-could-not-hold",
          },
          {
            prompt: "What did section 44 say about an assignment that was not recorded in time?",
            options: [
              "It was void against a later purchaser who had recorded",
              "It was void entirely, so the transfer never took effect between the parties",
              "It could be recorded later on payment of a penalty set by the Register",
              "It remained valid for three years and then lapsed automatically",
            ],
            correctIndex: 0,
            explanation:
              "Void as against any subsequent purchaser or mortgagee for a valuable consideration, without notice, whose assignment has been duly recorded. Not void in general.",
            sourceLessonSlug: "what-the-register-could-not-hold",
          },
          {
            prompt: "What did section 46 allow once an assignment had been recorded?",
            options: [
              "The assignee could substitute their name in the statutory notice",
              "The assignor could withdraw the work from the register within thirty days",
              "The Copyright Office could issue a corrected card naming both parties",
              "The assignee could file a fresh registration in their own name alone",
            ],
            correctIndex: 0,
            explanation:
              "That is the sentence that turns recording from a filing chore into a credit mechanism. Do not record, and the notice keeps naming somebody else.",
            sourceLessonSlug: "what-the-register-could-not-hold",
          },
          {
            prompt: "What does lesson 11 say recording buys?",
            options: [
              "Visibility",
              "Ownership, since an unrecorded transfer never passes any right at all",
              "A defence against infringement by anyone who has not searched the register",
              "A renewal term, which could otherwise not be claimed when the first term ended",
            ],
            correctIndex: 0,
            explanation:
              "A half interest can be real between the two people who signed for it and invisible to everyone else at the same time.",
            sourceLessonSlug: "what-the-register-could-not-hold",
          },
          {
            prompt: "What does Hafen record about the title page of the opera?",
            options: [
              "His name alone appears on it",
              "Both names appear on it, which is why the registration card is so surprising",
              "Neither name appears on it, since the score was never formally published",
              "Her name appears on it in a hand that was added many years later",
            ],
            correctIndex: 0,
            explanation:
              "The same passage records that at the 1935 revival and the 1938 New York production he claimed sole proprietorship, and that he later assigned copyright to Brigham Young University.",
            sourceLessonSlug: "what-the-register-could-not-hold",
          },
          {
            prompt: "What does Hafen say Hanson's memoir does?",
            options: [
              "It acknowledges her as coauthor and collaborator",
              "It denies that she had any part in the work beyond playing melodies to him",
              "It reprints the assignment, which is how scholars know the document existed",
              "It explains why the assignment was never recorded in Washington",
            ],
            correctIndex: 0,
            explanation:
              "Which sits beside sole proprietorship claims in 1935 and 1938 and a title page carrying one name. The instruments disagree with each other, and the disagreement is the subject.",
            sourceLessonSlug: "what-the-register-could-not-hold",
          },
          {
            prompt: "When did the New York production take place, relative to her death?",
            options: [
              "Months after it, in 1938",
              "Two years before it, while she was still president of a national organisation",
              "In the same week, which is why the programme carried a dedication to her",
              "A decade after it, when the opera was revived for a new audience",
            ],
            correctIndex: 0,
            explanation:
              "Hafen dates the production to 1938 and says it came just months after her death that year.",
            sourceLessonSlug: "what-the-register-could-not-hold",
          },
          {
            prompt: "What did Hanson add to the score much later?",
            options: [
              "Zitkala Sa and W. F. Hanson, after the title, in a shaky hand",
              "A printed dedication naming her as the source of the melodies in the second act",
              "A note explaining that the assignment had never been recorded in Washington",
              "A second signature, witnessed by a notary in Uintah County, Utah",
            ],
            correctIndex: 0,
            explanation:
              "Smith: much later, Hanson thought better of all this. The correction reaches whoever opens that box in that archive, one reader at a time.",
            sourceLessonSlug: "what-the-register-could-not-hold",
          },
          {
            prompt: "What claim does a federal web page make that lesson 11 refuses to repeat?",
            options: [
              "That she wrote the libretto and songs",
              "That she was never told the work had been registered in one name",
              "That the assignment was recorded and the record has since been lost",
              "That the opera was performed on Broadway during her lifetime",
            ],
            correctIndex: 0,
            explanation:
              "That is an authorship share, asserted on a government site, and no document in the section supports it: not the card, not the assignment, not the press.",
            sourceLessonSlug: "what-the-register-could-not-hold",
          },
          {
            prompt: "Why does lesson 11 say the card does not support that claim?",
            options: [
              "It names one man in both blanks",
              "It names both collaborators, which contradicts any claim about a single author",
              "It records a deposit only, without asking who wrote any part of the work",
              "It was filled in by a clerk who never saw either of the collaborators",
            ],
            correctIndex: 0,
            explanation:
              "The assignment divides an interest rather than a credit, and the press called her a co-author without dividing the work. None of the three settles a share.",
            sourceLessonSlug: "what-the-register-could-not-hold",
          },
          {
            prompt: "What does Smith say about one 1913 account of the collaboration?",
            options: [
              "Several pieces of evidence tend to contradict it",
              "It is the only contemporary account and is therefore the most reliable one",
              "It was written by one of the collaborators and cannot be used as evidence",
              "It was printed in a newspaper that has not survived in any archive",
            ],
            correctIndex: 0,
            explanation:
              "Contemporary accounts disagree with each other, which is another reason this course states what the documents settle and stops there.",
            sourceLessonSlug: "what-the-register-could-not-hold",
          },
          {
            prompt: "What inconsistency does lesson 11 point out on the federal page?",
            options: [
              "It gives her death as 1938 in one place and 1928 in another",
              "It gives two different birthplaces, one in Utah and one in South Dakota",
              "It names two different collaborators for the opera in the same paragraph",
              "It dates the first production to 1912 and the registration to 1913",
            ],
            correctIndex: 0,
            explanation:
              "A useful reminder that a federal page is a source and not an oracle. Hafen and the Library of Congress agree on 1938.",
            sourceLessonSlug: "what-the-register-could-not-hold",
          },
          {
            prompt: "What does Whose Name Is on the Score add that Section 4 does not?",
            options: [
              "All five cards, the 1909 Act section by section, and the 1913 press",
              "The ceremony and the staging, which that course describes and this one does not",
              "An account of how much of the opera each collaborator wrote, settled from the scores",
              "Interviews with descendants of both collaborators, recorded for that course",
            ],
            correctIndex: 0,
            explanation:
              "It keeps the same two rules this section keeps, about the ceremony and about authorship shares, and it is the course to take next if the register is the instrument you want to read.",
            sourceLessonSlug: "what-the-register-could-not-hold",
          },
          {
            prompt: "What is an undivided half interest?",
            options: [
              "A share of the whole right rather than of part of the work",
              "A half share in the royalties only, leaving the credit with the registered claimant",
              "A right to perform the work in one state, with the other half reserved elsewhere",
              "A claim to half of the deposit copies held by the Copyright Office",
            ],
            correctIndex: 0,
            explanation:
              "Which is what the notarised paper conveyed, and what was never recorded, so no stranger searching the register would ever have seen it.",
            sourceLessonSlug: "what-the-register-could-not-hold",
          },
          {
            prompt: "What is the statutory notice, in lesson 11's vocabulary?",
            options: [
              "The copyright line printed on the work itself",
              "The letter the Copyright Office sends to confirm that a registration is complete",
              "A public advertisement that an assignment has been made between two parties",
              "The entry in the printed catalogue of copyright entries for that year",
            ],
            correctIndex: 0,
            explanation:
              "Section 46 lets a recorded assignee substitute their own name for the assignor's in it, which is how recording becomes a credit mechanism.",
            sourceLessonSlug: "what-the-register-could-not-hold",
          },
          {
            prompt: "What is recording, as distinct from assignment?",
            options: [
              "Filing the transfer with the Copyright Office",
              "Making the transfer in writing and having it witnessed by a notary",
              "Registering the work for a second time in the new owner's name",
              "Printing the new owner's name on every copy offered for sale",
            ],
            correctIndex: 0,
            explanation:
              "Section 44 required it within three calendar months. Assignment is the private act; recording is what makes the transfer good against the world.",
            sourceLessonSlug: "what-the-register-could-not-hold",
          },
          {
            prompt: "What is the smallest reach of any instrument in this course?",
            options: [
              "A handwritten line in an archived score",
              "A registration card, which only the Copyright Office ever reads",
              "An internal memo, which stays inside the organisation that wrote it",
              "A newspaper billing, which is read once and thrown away the same week",
            ],
            correctIndex: 0,
            explanation:
              "It reaches whoever opens that box in that archive, one reader at a time, and it never reached the register at all.",
            sourceLessonSlug: "what-the-register-could-not-hold",
          },
          {
            prompt: "What did the 1912 card's cash stamp record?",
            options: [
              "The same date as the receipt of the copy",
              "The fee paid for recording an assignment of a half interest in the work",
              "The date of the first production, which the office entered from a newspaper",
              "The renewal term, which began twenty-eight years after the original filing",
            ],
            correctIndex: 0,
            explanation:
              "One copy received December 12 1912, with a cash stamp of the same date. The card is a receipt as well as a claim.",
            sourceLessonSlug: "the-card-that-was-filed-first",
          },
          {
            prompt: "Under which Act was the 1912 registration made?",
            options: [
              "The Act of March 4, 1909",
              "The Act of 1976, which replaced the earlier registration system entirely",
              "The Superannuation Act of 1945, which governed federal employees' entitlements",
              "The Public Service Act, as amended in November 1966",
            ],
            correctIndex: 0,
            explanation:
              "The form says so in its own printed words. Sections 42, 44 and 46 of that Act are what make the unrecorded assignment matter.",
            sourceLessonSlug: "the-card-that-was-filed-first",
          },
          {
            prompt: "Who could search the register entry today?",
            options: [
              "Any stranger",
              "Only the parties to the registration and their legal representatives",
              "Only researchers with a reader's ticket for the Library of Congress",
              "Nobody, because cards of that period were destroyed after the term expired",
            ],
            correctIndex: 0,
            explanation:
              "The card can be read today as an image, which is what makes it usable in a course. That public availability is a property of the instrument.",
            sourceLessonSlug: "the-card-that-was-filed-first",
          },
          {
            prompt: "Which instrument in this course was filed by a private person rather than kept by an institution?",
            options: [
              "The copyright registration",
              "The BBC engineering monograph, which an employee wrote and the corporation sold",
              "The personnel file, which the employee's own letters were added to",
              "The memo of June 1964, which a Head of Department wrote and sent",
            ],
            correctIndex: 0,
            explanation:
              "Somebody chooses to make a register entry. That is the first of the four properties lesson 13 lists for a register.",
            sourceLessonSlug: "the-card-that-was-filed-first",
          },
          {
            prompt: "What does lesson 11 say happened to the press coverage and the register from the start?",
            options: [
              "They disagreed",
              "They agreed, and the later accounts departed from both of them",
              "The register was corrected to match the press within the following year",
              "The press repeated the register's wording, which is why she was not named",
            ],
            correctIndex: 0,
            explanation:
              "The press reached readers for a day and the register reached institutions for a century, which is the difference between reach and durability.",
            sourceLessonSlug: "what-the-register-could-not-hold",
          },
          {
            prompt: "In what county was the assignment notarised?",
            options: [
              "Uintah County, Utah",
              "Salt Lake County, Utah, where the notary's office was then located",
              "The District of Columbia, at the Copyright Office itself",
              "Utah County, Utah, where Brigham Young University stands",
            ],
            correctIndex: 0,
            explanation:
              "Smith gives the county in the same parenthesis that says the assignment is not recorded in the Copyright Office.",
            sourceLessonSlug: "what-the-register-could-not-hold",
          },
          {
            prompt: "Where did Hanson later assign the copyright, according to Hafen?",
            options: [
              "To Brigham Young University",
              "To the New York light opera guild that staged the 1938 production",
              "To his collaborator's estate, after her death in 1938",
              "To the Copyright Office, which holds it on behalf of the public",
            ],
            correctIndex: 0,
            explanation:
              "Hafen records it alongside the sole proprietorship claims of 1935 and 1938 and the memoir that acknowledges her as coauthor and collaborator.",
            sourceLessonSlug: "what-the-register-could-not-hold",
          },
          {
            prompt: "When was the opera revived at Brigham Young University?",
            options: [
              "1935",
              "1913, in the same season as the first production in Vernal",
              "1921, the year she registered a book of her own in Washington",
              "1969, the year of the composer's death",
            ],
            correctIndex: 0,
            explanation:
              "Hafen says that at the 1935 revival and the 1938 New York selection Hanson claims sole proprietorship of the opera.",
            sourceLessonSlug: "what-the-register-could-not-hold",
          },
          {
            prompt: "What kind of claim is sole proprietorship?",
            options: [
              "A claim to hold the whole right in the work",
              "A statement that one person performed the whole of the work on stage",
              "A declaration that a work has never been published or offered for sale",
              "An application to renew a registration in the last year of its first term",
            ],
            correctIndex: 0,
            explanation:
              "Which sits oddly beside an assignment of an undivided half interest signed in 1913, and the difference between the two is exactly what the register never recorded.",
            sourceLessonSlug: "what-the-register-could-not-hold",
          },
          {
            prompt: "What does Section 4 teach, in the course's own description of it?",
            options: [
              "The register as an instrument, set beside the other two",
              "The whole of the case, so that the standalone course need not be read",
              "The music of the opera, analysed act by act from the surviving scores",
              "The biography of Zitkala-Šá, from her first book to her death in 1938",
            ],
            correctIndex: 0,
            explanation:
              "One card, one unrecorded assignment, the later claims and the late handwritten line. Whose Name Is on the Score carries the depth.",
            sourceLessonSlug: "what-the-register-could-not-hold",
          },
          {
            prompt: "Which of these does the register record?",
            options: [
              "The date a claim was filed",
              "The share of the work done by each collaborator on the piece",
              "Whether the claimant had any agreement with anyone else about the work",
              "Whether a work was performed, and how often, after the registration was made",
            ],
            correctIndex: 0,
            explanation:
              "Who filed, who claimed and when. Everything else about a work happens somewhere else, and in this case four things did.",
            sourceLessonSlug: "what-the-register-could-not-hold",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 5 — Three grades of paper, and what a correction can reach
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "two-grades-of-paper",
      title: "12 · Three grades of paper",
      section: "Section 5 · Three grades of paper, and what a correction can reach",
      body: `Here is the sentence the whole course exists for. **One of these rules was written down and quoted back at the woman it removed. One was never written down anywhere that anyone has read. And one was a public statute whose ordinary use produced a public entry naming somebody else.** Same mechanism, same shape, three completely different kinds of evidence, and a learner who can tell them apart can handle almost any claim of this kind.

The third grade is the one people find hardest to hold, so state it separately. The statute behind Zitkala-Šá's case was not hidden and was not unjust on its face: the 1909 Act says how a work is registered and how a transfer is recorded, and anybody could read it then and can read it now. What removed her from the record was **an ordinary use of an ordinary rule**, one man filling in one form, and a second paper that was signed and never recorded. The result is a public entry that a stranger can search today, naming one person. That grade of paper is neither an inferred practice nor a regulation quoted at somebody. It is an entry.

**First, remove one wrong conclusion.** The written rule is not the crueller one. Payne-Scott could read the regulation that ended her permanent appointment, and reading it changed nothing about the outcome. Being able to see a rule is not the same as being protected from it. What the writing changes is what a later reader can know, which is a fact about the archive and not about the injury.

**Second, notice what the unwritten one does to everyone who writes about it afterwards.** Once a practice has no document, every account has to describe it in somebody's words, and the words drift toward the shape of a rule. Watch the chain in this case, with each link attributed:

- The person affected, in 2000: "The boss wouldn't let anybody have any sort of credit" (Hutton, 2000). A practice, a person, a job.
- A colleague, in 2001: "At that time the BBC preferred to keep members of the workshop anonymous and uncredited" (Hodgson, 2001). Still a preference, and now an institution.
- A historian, in 2014: "The standard practice at this time was for individual Radiophonic Workshop staff not to receive on-screen or printed credit"; and, of the Esslin memo, that praise "was not enough to overturn the BBC's standard policy on individual credits" (Butler, 2014). Practice in one sentence, policy in another.
- The same historian, in 2019: "in keeping with BBC policy at the time" (Butler, 2019).
- A national broadcaster, in 2017: "Because of BBC rules at the time, however, she wasn't credited for her contribution to the music" (CBC Radio, 2017). A rule, flatly, with no reference.

**Nobody in that chain is lying, and the drift is not evidence of bad faith.** It is what happens when a real practice has no text: each writer reaches for a noun, and the nouns get harder as they travel. By the end the claim has a shape that could be checked, and the thing that would check it does not exist in any reader's hands.

**Third, the three moves that make a claim like this honest.** This is the transferable skill, and it works on any organisation.

1. **Name who asserts it.** Not "the BBC had a policy" but "Butler describes it as the BBC's standard policy on individual credits". The claim keeps its author.
2. **Ask what document would settle it, and say where it would be.** Here that is unusually specific. Winter's and Butler's own citations map the BBC Written Archives Centre at Caversham, and the files where a credits instruction would sit are **R97/9/1**, Radiophonic Workshop administration, memoranda and reports, and **R97/11/1** and **R97/11/2**, Radiophonic Workshop General, 1953 to 1973 (Winter, 2015; Butler, 2014). Neither was read for this course, and neither can be read from a desk.
3. **Say what the papers do show, in their own words.** A publication of November 1963 that names no maker. A memo of June 1964 in which a Head of Department wishes the names could be printed. Her own sentence about the royalties. That is a smaller claim than "there was a rule", and every part of it can be opened and read today.

**One more honest note.** Two scholars point to the same unread book at the same page for the credit question: Louis Niebur's *Special Sound*, cited by Winter at page 102 and by Butler at pages 131 and 142 (Winter, 2015; Butler, 2014). It was not obtained for this course. If the rule is quoted anywhere in print, that is the likeliest place, and a learner with a library card is one step from finding out.

:::reveal Why is the written rule not the crueller of the two? ||| Because being able to read a rule does not protect anyone from it. What writing changes is what a later reader can know, which is a fact about the archive rather than about the injury.

:::reveal What happens to a real practice that has no text, as it travels through later accounts? ||| Each writer reaches for a noun, and the nouns harden: a boss who would not allow it becomes a preference, then a standard practice, then a policy, then rules.

:::reveal What are the three moves that make a claim about an unwritten rule honest? ||| Name who asserts it, say what document would settle it and where that document would be, and state what the papers do show in their own words.

## Vocabulary
- **Drift**: the hardening of a claim as it passes from one account to the next, with each writer choosing a slightly stronger word.
- **Attribution chain**: the sequence of who said what, kept intact so that a reader can see where a claim entered the literature.
- **Finding aid**: an archive's list of its files, which is what turns "somewhere in the BBC archives" into two file references a researcher can order.
- **Unread source**: a work that would probably settle a question and has not been obtained, named as such rather than quietly left out.

## Sources
Butler, D. (2014). "Way out - of this world!" Delia Derbyshire, Doctor Who and the British public's awareness of electronic music in the 1960s. *Critical Studies in Television*, *9*(1), 62-76. https://doi.org/10.7227/CST.9.1.5
Butler, D. (2019). Whatever happened to Delia Derbyshire? Delia Derbyshire, visual art, and the myth of her post-BBC activity. *British Art Studies*, (12). https://doi.org/10.17658/issn.2058-5462/issue-12/dbutler
CBC Radio. (2017, November 28). Doctor Who theme's co-creator Delia Derbyshire awarded posthumous PhD. *As It Happens*. https://www.cbc.ca/radio/asithappens/as-it-happens-tuesday-edition-1.4422830/doctor-who-theme-s-co-creator-delia-derbyshire-awarded-posthumous-phd-1.4423377
Hodgson, B. (2001, July 7). Delia Derbyshire [Obituary]. *The Guardian*. https://www.theguardian.com/news/2001/jul/07/guardianobituaries1
Hutton, J. (2000). *Radiophonic ladies* [Interview with Delia Derbyshire recorded 24 February 2000]. Sonic Arts Network. http://www.sonicartsnetwork.org/ARTICLES/ARTICLE2000JoHutton.html
Winter, T. (2015). *Delia Derbyshire: Sound and music for the BBC Radiophonic Workshop, 1962-1973* [Doctoral thesis, University of York]. White Rose eTheses Online. https://etheses.whiterose.ac.uk/id/eprint/11590/1/TeresaWinterThesis.pdf`,
    },
    {
      slug: "a-third-instrument",
      title: "13 · Three instruments, side by side",
      section: "Section 5 · Three grades of paper, and what a correction can reach",
      body: `Three sections, three instruments, and the point of putting them in one course is the row-by-row comparison below rather than any one of the stories.

Section 4 taught the **public register** through one card. Before the comparison, collect what that section showed about the instrument itself, because a register behaves unlike either of the other two.

**A register has four properties none of the other two has.**

1. **It is filed by a claimant rather than kept by an employer.** Somebody chooses to make the entry.
2. **It is public and searchable by anyone**, including a stranger fifty years later with no connection to either party.
3. **It separates questions the other instruments merge.** A registration form of that period asks for the author and, separately, for the copyright claimant, which is a different question with a different answer.
4. **It is silent about the making.** A register records who filed, who claimed and when. It cannot record who did the work, and the fact that one name appears in every blank on a form proves only that one person filled the form in.

**Now the comparison, which is the thing to carry out of this course.**

| | An employer's practice | A statute or regulation | A public register |
|---|---|---|---|
| Where it is | nowhere readable | in published law | in a government office |
| Who can read it | nobody, so far | anyone | anyone |
| What it records | only its effects | exactly what it requires | who filed, and when |
| What it cannot record | itself | how it was applied | who did the work |
| What a correction reaches | later credits only | later cases only | later entries only |

**Read the bottom row across.** None of the three instruments reaches backwards. A credit added in 2013 does not change what was broadcast in 1963. A statute amended in 1966 does not restore a post lost in 1950. A register entry made later does not unmake the entry made first. That is not a defect in these particular instruments. It is what records are: they accumulate, and correction is another entry rather than an erasure.

**And read the middle row for the sharpest contrast in the course.** Two of these instruments can be read by anyone who wants to. The third cannot be read by anyone at all, and that one is the BBC's credit practice, which is the case where the most is written about the rule and the least is known about it.

**Where the register case goes deeper than this course takes it.** Section 4 read one card and one unrecorded assignment, which is what the comparison needs. ***Whose Name Is on the Score***, in this catalog, spends a whole course on that case: **all five registration cards read as images**, the **1909 Copyright Act worked through section by section**, and **the newspapers of 1913** set against the register. It keeps the same two rules Section 4 keeps, about the ceremony and about authorship shares. If the register is the instrument you want to be able to read, that is the next course.

:::reveal What four properties does a public register have that an employer's practice does not? ||| It is filed by a claimant rather than kept by an employer, it is public and searchable by anyone, it separates the author from the claimant, and it is silent about who did the work.

:::reveal What does the bottom row of the comparison table say about all three instruments? ||| None of them reaches backwards. Correction is another entry in the record rather than an erasure of the first one.

:::reveal Which of the three instruments in the table can nobody read? ||| The BBC's credit practice, which is also the one most often described in print as a rule.

:::reveal What does Whose Name Is on the Score add to what Section 4 teaches? ||| All five registration cards read as images, the 1909 Copyright Act section by section, and the newspapers of 1913 set against the register.

## Vocabulary
- **Register**: a public record of claims, kept by a government office and searchable by anyone, as distinct from an employer's internal file.
- **Claimant**: on a registration form, the person claiming to hold the right, which is a different question from who made the work.
- **Accumulation**: the property of a record that new entries are added and old ones stay, so nothing is ever unwritten.
- **Comparison**: here, the method of the course. One case teaches a story; three instruments teach a shape.

## Sources
Copyright Act of 1909, §§ 42, 44, 46 [Full text]. U.S. Copyright Office. https://www.copyright.gov/history/1909act.pdf
National Archives of Australia. (n.d.). *Rules for married women working at CSIRO: Reply to radiophysicist Ruby Payne-Scott* (NAA: A8520, PH/PAY/002) [Learning resource]. Student Research Portal. https://www.naa.gov.au/students-and-teachers/student-research-portal/learning-resource-themes/society-and-culture/gender-and-sexuality/rules-married-women-working-csiro-reply-radiophysicist-ruby-payne-scott
U.S. Copyright Office. (1912). [Application card for *The Sun Dance Opera*, front and back]. Copyright card catalog, 1909-1937. Library of Congress. https://tile.loc.gov/storage-services/service/copyright/hprcatcard/19/09/19/37/HA/M-/HA/RR/N/19091937HAM-HARRN/CC19091937HAM-HARRN.0672a.jpg`,
    },
    {
      slug: "what-a-correction-can-reach",
      title: "14 · What a correction can reach",
      section: "Section 5 · Three grades of paper, and what a correction can reach",
      body: `Both stories have endings, and the endings are instructive precisely because they are partial.

**The credit, fifty years later.** On 23 November 2013 the programme's fiftieth-anniversary special, "The Day of the Doctor", opened with the Derbyshire arrangement, and its closing credits read "Original theme arranged by Delia Derbyshire" (Butler, 2014, note 17). She had died in 2001. The credit is real, it is on the record, and it reaches exactly one broadcast and everything after it.

**The doctorate, four years after that.** In November 2017 Coventry University awarded her an honorary doctorate, accepted on her behalf by Mark Ayres, who told CBC Radio that the recognition had been "a long time coming" (CBC Radio, 2017). In the same interview he put the employer's side of the credit question in one sentence: "She was a BBC employee, so she was employed to do this work and that's the way it was."

**The archive, which is the most durable correction of the three.** Her papers and tapes are at the University of Manchester as GB 133 DDA, deposited by Mark Ayres on permanent loan in 2007 with the aid of Dr David Butler, the sound tapes transferred in 2010 and the paper archive in 2013, including 267 audio tape recordings. The BBC papers about the Workshop are held separately at the BBC Written Archives Centre (University of Manchester Library, n.d.). A credit names; an archive lets somebody check. Every quotation in Section 2 of this course exists because that deposit happened.

**And for the register case, two corrections, one tiny and one public.** Hanson, "much later", added "Zitkala Sa & W. F. Hanson" after the opera's title in a shaky hand (Smith, 2001). That reaches whoever opens that box in that archive, one reader at a time, and it never reached the register: the notarised half interest he signed a month after the first production was never recorded in the Copyright Office (Smith, 2001). The larger correction came from the office that keeps the register. In March 2021 the Copyright Office published an account of her work stating that "despite her contributions, Zitkála-Šá does not appear on the copyright records for the work" (Chen, 2021). The entry on the card is unchanged. What changed is that the institution holding it now says in public what the card leaves out.

**On the other side of the world, a rule changed and a name was attached to a fund.** The Public Service Act was amended in November 1966, ending the requirement that women resign on marriage (NAA, n.d.). Payne-Scott had left in 1951 and never returned. The archive also records that she is remembered in CSIRO's Payne-Scott Award, which assists researchers who have taken career breaks to care for family to re-enter their field, and in an annual lecture delivered by a leading female scientist (NAA, n.d.).

**Now the part that matters, which is what none of this reaches.**

| Correction | What it reaches | What it does not |
|---|---|---|
| The 2013 screen credit | that broadcast and later ones | the 1963 broadcast, and every one in between |
| The honorary doctorate | the public record of her standing | anything she could have held in her lifetime |
| The Manchester archive | what future researchers can check | what was not kept or was never written |
| Hanson's handwritten line | whoever opens that box | the register, and every reader who never will |
| The Copyright Office post | what the office says about the record now | the entry on the card, which is unchanged |
| The 1966 amendment | every woman employed afterwards | the post lost in 1950, or the years after it |
| The Payne-Scott Award | researchers returning from career breaks now | the career the rule interrupted |

*Who Signs the Print*, lesson 22, teaches the same rule in another field: credit corrections are **prospective**. They change what happens next. The record of what happened stays as it was, with the correction added beside it, which is why an archive that keeps both is worth more than a corrected credit on its own.

**What is still open, stated as a list rather than as a feeling.** This course ends with five questions it could not settle, and each one has an address.

1. **A BBC document stating the credit rule in its own words.** Where to look: BBC WAC R97/9/1 and R97/11/1-2, Caversham. Also Niebur's *Special Sound*, page 102, which two scholars cite for this exact question and which was not obtained here.
2. **Whether the royalty split was ever formally requested of the BBC, by whom, and in what form.** No contract, rights record or memo has been found, and nothing written or said by Ron Grainer himself was found on either research pass.
3. **The exact wording of the on-screen credit as broadcast on 23 November 1963.** What is verified here is the BBC's own 1964 information sheet heading, "DR. WHO title music by Ron Grainer with the BBC Radiophonic Workshop" (Butler, 2014, note 32). The printed listings billing for that week was not checked, because the BBC's schedule archive could not be reached.
4. **Ruby Payne-Scott's own letter of 20 February 1950.** Read the item, not the reply that paraphrases it.
5. **Her ASIO file reference**, which is cited in secondary sources and unverified here.
6. **The register case's own open questions**, which are not repeated here: whether the notarised assignment survives, which score omits her name, and the registration number on the 1912 card. They are listed, with their addresses, in ***Whose Name Is on the Score***.

**And the last word goes back to the three instruments.** A practice you cannot read, a statute you can, and a register anyone can search. Two of these cases are taught only here; the third has a course of its own, ***Whose Name Is on the Score***, which reads all five cards, the 1909 Act and the press of 1913, and which is where to go next. The skill this course has been building is one question asked in the right order: not "was she robbed?" but "what instrument was this written on, what can that instrument record, and what would a correction to it actually reach?" Ask it in that order and you will be right more often than the confident version of the story, and you will be able to show your work.

:::reveal What did the closing credits of the 2013 anniversary special say? ||| Original theme arranged by Delia Derbyshire. It reaches that broadcast and everything after it, and not the 1963 broadcast.

:::reveal Why does lesson 14 call the Manchester archive the most durable of the three corrections? ||| Because a credit names somebody while an archive lets somebody check. Every quotation in Section 2 exists because the deposit happened.

:::reveal What is the question this course teaches a learner to ask, in place of "was she robbed?" ||| What instrument was this written on, what can that instrument record, and what would a correction to it actually reach?

## Vocabulary
- **Prospective correction**: a change that applies from now on, leaving the earlier record as it stands with the correction beside it.
- **Honorary doctorate**: a degree awarded in recognition rather than for examined work, which can be conferred after death.
- **Permanent loan**: a deposit of papers with an institution that keeps and services them without owning them outright.
- **Open question**: a claim this course could not settle, published with the address of the document that would settle it.

## Sources
Butler, D. (2014). "Way out - of this world!" Delia Derbyshire, Doctor Who and the British public's awareness of electronic music in the 1960s. *Critical Studies in Television*, *9*(1), 62-76. https://doi.org/10.7227/CST.9.1.5
CBC Radio. (2017, November 28). Doctor Who theme's co-creator Delia Derbyshire awarded posthumous PhD. *As It Happens*. https://www.cbc.ca/radio/asithappens/as-it-happens-tuesday-edition-1.4422830/doctor-who-theme-s-co-creator-delia-derbyshire-awarded-posthumous-phd-1.4423377
Chen, N. M. (2021, March 31). *Zitkála-Šá: On creativity, copyright, and cultural empowerment* [Blog post]. Library of Congress, Copyright Office. https://blogs.loc.gov/copyright/2021/03/zitkla-on-creativity-copyright-and-cultural-empowerment/
National Archives of Australia. (n.d.). *Rules for married women working at CSIRO: Reply to radiophysicist Ruby Payne-Scott* (NAA: A8520, PH/PAY/002) [Learning resource]. Student Research Portal. https://www.naa.gov.au/students-and-teachers/student-research-portal/learning-resource-themes/society-and-culture/gender-and-sexuality/rules-married-women-working-csiro-reply-radiophysicist-ruby-payne-scott
Smith, C. P. (2001). An operatic skeleton on the western frontier: Zitkala-Sa, William F. Hanson, and *The Sun Dance Opera*. *Women & Music*, *5*.
University of Manchester Library. (n.d.). *Papers of Delia Derbyshire* (GB 133 DDA) [Collection description]. Archives Hub. https://archiveshub.jisc.ac.uk/data/gb133-dda`,
    },
    {
      slug: "section-5-quiz",
      title: "Section 5 quiz · Three grades of paper, and what a correction can reach",
      section: "Section 5 · Three grades of paper, and what a correction can reach",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What makes the three cases comparable, given that one is a marriage bar and one is a copyright registration?",
            options: [
              "Each is a rule that left a different kind of paper",
              "Each woman worked in broadcasting at some point in her career",
              "Each rule was overturned by the same court within a decade",
              "Each employer later issued a public apology naming the woman",
            ],
            correctIndex: 0,
            explanation:
              "The course is organised by instrument, not by grievance. A statute, an employer's practice and a public register leave three different traces, and what a later correction can reach depends on which trace exists.",
            sourceLessonSlug: "two-grades-of-paper",
          },

          {
            prompt: "What is the sentence lesson 12 says the whole course exists for?",
            options: [
              "One rule was written, one never was, and one named somebody else",
              "Two employers in two countries decided independently to remove a woman from a record",
              "A credit is a document, and a document can always be corrected once it is found",
              "Every rule that applies to everybody is applied hardest to the person least able to object",
            ],
            correctIndex: 0,
            explanation:
              "Same mechanism, same shape, three completely different kinds of evidence. A learner who can tell them apart can handle almost any claim of this kind.",
            sourceLessonSlug: "two-grades-of-paper",
          },
          {
            prompt: "What wrong conclusion does lesson 12 remove first?",
            options: [
              "That the written rule was the crueller one",
              "That the unwritten practice was invented later by people writing about it",
              "That the two women would have known about each other's cases at the time",
              "That an employer needs a written rule before it can remove somebody from a record",
            ],
            correctIndex: 0,
            explanation:
              "Payne-Scott could read the regulation that ended her permanent appointment, and reading it changed nothing. Being able to see a rule is not being protected from it.",
            sourceLessonSlug: "two-grades-of-paper",
          },
          {
            prompt: "What does lesson 12 say the writing of a rule changes?",
            options: [
              "What a later reader can know",
              "Whether the rule can be challenged, since an unwritten rule cannot be appealed against",
              "How severe the rule is, because a written rule has to be applied to everybody equally",
              "Who applies it, since a written rule is applied by a clerk and an unwritten one by a manager",
            ],
            correctIndex: 0,
            explanation:
              "That is a fact about the archive rather than about the injury, and keeping the two apart is what stops the comparison turning into a competition.",
            sourceLessonSlug: "two-grades-of-paper",
          },
          {
            prompt: "In the drift chain, how did Derbyshire herself describe the non-crediting in 2000?",
            options: [
              "The boss wouldn't let anybody have any sort of credit",
              "The corporation had a policy forbidding any member of the Workshop to be named",
              "The rules of the BBC at that time did not permit staff to receive screen credits",
              "The standard practice was for individual staff not to receive printed credit",
            ],
            correctIndex: 0,
            explanation:
              "A practice, a person and a job. Every later account replaces at least one of those three with something more institutional.",
            sourceLessonSlug: "two-grades-of-paper",
          },
          {
            prompt: "How did Hodgson describe it in 2001?",
            options: [
              "The BBC preferred to keep them anonymous and uncredited",
              "The BBC forbade any credit to a member of the Workshop, in a rule issued in 1958",
              "The manager of the Workshop personally decided who would be named on each production",
              "The corporation's contracts with its staff assigned all credit to the department",
            ],
            correctIndex: 0,
            explanation:
              "Still a preference, and now an institution rather than a boss. The drift is one word at a time.",
            sourceLessonSlug: "two-grades-of-paper",
          },
          {
            prompt: "Which two nouns does Butler use in the same 2014 article?",
            options: [
              "Standard practice, and standard policy",
              "Convention, and contract, describing the same arrangement from two directions",
              "Rule, and regulation, in the sentences about the Esslin memo and its failure",
              "Custom, and instruction, one for radio and one for television credits",
            ],
            correctIndex: 0,
            explanation:
              "The standard practice at this time was for individual staff not to receive credit, and Esslin's praise was not enough to overturn the BBC's standard policy on individual credits.",
            sourceLessonSlug: "two-grades-of-paper",
          },
          {
            prompt: "What phrase does Butler use in the 2019 article?",
            options: [
              "In keeping with BBC policy at the time",
              "Under the terms of the corporation's standing instruction to its heads of department",
              "As required by the agreement between the corporation and the musicians' union",
              "Because of a decision taken when the Workshop was founded in the late 1950s",
            ],
            correctIndex: 0,
            explanation:
              "The same sentence records substantial press coverage often emphasising her role, which is why lesson 6 insists the non-naming was specific to the BBC's own instruments.",
            sourceLessonSlug: "two-grades-of-paper",
          },
          {
            prompt: "What is at the hard end of the drift chain in lesson 12?",
            options: [
              "A broadcaster's flat statement about BBC rules, with no reference",
              "A historian's footnote pointing to an archive file number at Caversham",
              "An internal memo in which a Head of Department asks for names to be printed",
              "A BBC publication that describes the work and names nobody who did it",
            ],
            correctIndex: 0,
            explanation:
              "CBC Radio in 2017: because of BBC rules at the time, however, she wasn't credited for her contribution to the music. By then the claim has a shape that could be checked and nothing to check it against.",
            sourceLessonSlug: "two-grades-of-paper",
          },
          {
            prompt: "What does lesson 12 say about the writers in the drift chain?",
            options: [
              "None of them is lying",
              "Each one knew the document existed and chose not to cite it",
              "Each one relied on the one before without reading any primary source at all",
              "The scholars are reliable and the journalists are not, which is the pattern to expect",
            ],
            correctIndex: 0,
            explanation:
              "The drift is what happens when a real practice has no text. Each writer reaches for a noun, and the nouns get harder as they travel.",
            sourceLessonSlug: "two-grades-of-paper",
          },
          {
            prompt: "What is the first of the three moves lesson 12 teaches?",
            options: [
              "Name who asserts the claim",
              "Search the archive catalogue for any file whose title mentions credits or crediting",
              "Ask the organisation directly, in writing, whether such a rule ever existed",
              "Compare the claim with what other organisations did in the same period",
            ],
            correctIndex: 0,
            explanation:
              "Not the BBC had a policy, but Butler describes it as the BBC's standard policy on individual credits. The claim keeps its author.",
            sourceLessonSlug: "two-grades-of-paper",
          },
          {
            prompt: "What is the second move?",
            options: [
              "Say what document would settle it, and where it would be",
              "Print the strongest version of the claim, so that somebody is provoked into correcting it",
              "Drop the claim until a document turns up, and say nothing about the practice at all",
              "Treat the earliest account as correct, since it is closest in time to the events",
            ],
            correctIndex: 0,
            explanation:
              "Here it is unusually specific, because two scholars' own citations map the files where a credits instruction would sit.",
            sourceLessonSlug: "two-grades-of-paper",
          },
          {
            prompt: "Which BBC archive files does lesson 12 name as the place a credits instruction would sit?",
            options: [
              "R97/9/1 and R97/11/1-2",
              "T5/1, 702/1, the production files for a 1969 episode of Out of the Unknown",
              "N15/17/1, the script and press material for a 1963 documentary about the future",
              "R97/25/1, the Radiophonic Workshop scrapbooks of press clippings and letters",
            ],
            correctIndex: 0,
            explanation:
              "Workshop administration, memoranda and reports, and Radiophonic Workshop General 1953 to 1973, at the BBC Written Archives Centre in Caversham. Neither was read for this course.",
            sourceLessonSlug: "two-grades-of-paper",
          },
          {
            prompt: "What is the third move?",
            options: [
              "Say what the papers do show, in their own words",
              "Repeat the claim with a hedge attached, so that the reader can judge it for themselves",
              "Cite the most recent account, since later writers have seen more of the archive",
              "Explain why the document is missing, which is usually because the file was destroyed",
            ],
            correctIndex: 0,
            explanation:
              "A publication of November 1963 that names no maker, a memo of June 1964 wishing the names could be printed, and her own sentence about the royalties. Smaller, and openable today.",
            sourceLessonSlug: "two-grades-of-paper",
          },
          {
            prompt: "Which unread book do two scholars point to for the credit question?",
            options: [
              "Niebur's Special Sound",
              "Briscoe's history of the Radiophonic Workshop's first twenty-five years",
              "Winter's doctoral thesis, which both Butler and the Manchester archive cite",
              "The BBC Handbook for 1964, which the corporation published annually",
            ],
            correctIndex: 0,
            explanation:
              "Winter cites it at page 102 and Butler at pages 131 and 142. It was not obtained for this course, and if the rule is quoted anywhere in print that is the likeliest place.",
            sourceLessonSlug: "two-grades-of-paper",
          },
          {
            prompt: "What does this course do about that unread book?",
            options: [
              "Names it as unread",
              "Quotes the page that Winter cites, on the strength of her citation of it",
              "Ignores it, since a book that could not be obtained cannot affect the argument",
              "Treats its existence as evidence that the rule was written down somewhere",
            ],
            correctIndex: 0,
            explanation:
              "An unread source is a work that would probably settle a question and has not been obtained, named as such rather than quietly left out.",
            sourceLessonSlug: "two-grades-of-paper",
          },
          {
            prompt: "What is drift, in lesson 12's vocabulary?",
            options: [
              "A claim hardening as it passes between accounts",
              "The movement of a document between archives as institutions merge or close",
              "The gradual loss of detail in a story told repeatedly by the same person",
              "The difference between what a rule says and how an organisation applies it",
            ],
            correctIndex: 0,
            explanation:
              "Each writer chooses a slightly stronger word: a boss who would not allow it, a preference, a standard practice, a policy, rules.",
            sourceLessonSlug: "two-grades-of-paper",
          },
          {
            prompt: "What is an attribution chain?",
            options: [
              "The sequence of who said what, kept intact",
              "The list of people credited on a production, in the order the credits appear",
              "The path a document takes from its creator to the archive that now holds it",
              "The series of permissions needed before an employer may name an employee publicly",
            ],
            correctIndex: 0,
            explanation:
              "Keeping it intact is what lets a reader see where a claim entered the literature, which is exactly what lesson 12 does with the claim about a BBC rule.",
            sourceLessonSlug: "two-grades-of-paper",
          },
          {
            prompt: "What is a finding aid?",
            options: [
              "An archive's list of its files",
              "A note left in a file by a previous researcher, recording what they were looking for",
              "A published index of every document an organisation has ever created",
              "A reference number assigned to a document when it is first transcribed",
            ],
            correctIndex: 0,
            explanation:
              "It is what turns somewhere in the BBC archives into two file references a researcher can order, which is the difference between a complaint and a plan.",
            sourceLessonSlug: "two-grades-of-paper",
          },
          {
            prompt: "Which course goes deeper into the register case than this one does?",
            options: [
              "Whose Name Is on the Score",
              "Who Gets the Credit, whose third lesson sorts the mechanisms by the evidence each leaves",
              "Who Made the Record, which supplies the method rule about manufacturing a confrontation",
              "Who Built the Blood Bank, which takes a flattering story apart without taking the person down",
            ],
            correctIndex: 0,
            explanation:
              "Section 4 here reads one card and one unrecorded assignment, which is what the comparison needs. That course reads all five cards, the 1909 Act section by section, and the press of 1913.",
            sourceLessonSlug: "a-third-instrument",
          },
          {
            prompt: "What is the first property of a register in lesson 13?",
            options: [
              "It is filed by a claimant rather than kept by an employer",
              "It is checked by a government officer before any entry is accepted as accurate",
              "It is corrected automatically whenever a later document contradicts an entry",
              "It is closed to the public for a fixed period after the entry is first made",
            ],
            correctIndex: 0,
            explanation:
              "Somebody chooses to make the entry, which is already a difference from a personnel file or a broadcaster's credit sequence.",
            sourceLessonSlug: "a-third-instrument",
          },
          {
            prompt: "Which two questions does a registration form of that period separate?",
            options: [
              "Who the author is, and who the claimant is",
              "Who wrote the work, and who performed it at its first public presentation",
              "Who filed the form, and who paid the fee that accompanied the filing",
              "Who owns the work now, and who will own it when the first term expires",
            ],
            correctIndex: 0,
            explanation:
              "The author made the work; the claimant holds the copyright at the time of filing. A form that asks both and receives one name tells you one of two things, and not which.",
            sourceLessonSlug: "a-third-instrument",
          },
          {
            prompt: "What does one name in every blank on a registration form prove?",
            options: [
              "That one person filled the form in",
              "That one person made the work, since the form is a sworn statement of authorship",
              "That the other collaborator had assigned their rights before the filing was made",
              "That the office checked the claim and found no competing claimant on the register",
            ],
            correctIndex: 0,
            explanation:
              "A register is silent about the making. It records who filed, who claimed and when, which is exactly what it is good for and exactly where it stops.",
            sourceLessonSlug: "a-third-instrument",
          },
          {
            prompt: "In lesson 13's table, where does a statute live and who can read it?",
            options: [
              "In published law, and anyone",
              "In a government office, and only the parties to the case it decided",
              "In an employer's internal file, and only its officers and their successors",
              "Nowhere readable, which is what it shares with an employer's practice",
            ],
            correctIndex: 0,
            explanation:
              "That is the row that makes the Payne-Scott case usable in a classroom: the rule can be quoted, and the reader does not have to take anyone's word for what it said.",
            sourceLessonSlug: "a-third-instrument",
          },
          {
            prompt: "What does an employer's practice record, in lesson 13's table?",
            options: [
              "Only its effects",
              "Exactly what it requires, in words that can be quoted back at an employee",
              "Who filed a claim and when, which is why it survives in a government office",
              "Nothing at all, which is why the practice claim cannot be tested in any way",
            ],
            correctIndex: 0,
            explanation:
              "It cannot record itself unless somebody wrote it down. The whole of Section 2 is an exercise in reading effects.",
            sourceLessonSlug: "a-third-instrument",
          },
          {
            prompt: "What does the bottom row of lesson 13's table say a correction reaches?",
            options: [
              "Later credits, later cases and later entries only",
              "The original record in each case, once the correcting document is filed beside it",
              "Everything from the date of the original entry onwards, but nothing before it",
              "Nothing at all, since none of the three instruments admits a correction of any kind",
            ],
            correctIndex: 0,
            explanation:
              "None of the three reaches backwards. Records accumulate, and correction is another entry rather than an erasure.",
            sourceLessonSlug: "a-third-instrument",
          },
          {
            prompt: "What does lesson 13 say is the sharpest contrast in the course?",
            options: [
              "Two instruments can be read by anyone, and the third by nobody",
              "Two instruments are held by governments, and the third by a private employer",
              "Two instruments record the making, and the third records only the claim",
              "Two instruments can be corrected, and the third cannot be corrected at all",
            ],
            correctIndex: 0,
            explanation:
              "The unreadable one is the BBC's credit practice, which is the case where the most is written about the rule and the least is known about it.",
            sourceLessonSlug: "a-third-instrument",
          },
          {
            prompt: "What does accumulation mean in lesson 13's vocabulary?",
            options: [
              "New entries are added and old ones stay",
              "An archive grows until it can no longer be searched by a single researcher",
              "A claim gathers support each time another writer repeats it in print",
              "A credit sequence lengthens as more people are added to a production",
            ],
            correctIndex: 0,
            explanation:
              "Nothing is ever unwritten. That is why lesson 14 asks what a correction reaches rather than what it undoes.",
            sourceLessonSlug: "a-third-instrument",
          },
          {
            prompt: "Why does lesson 13 say one case is not enough?",
            options: [
              "One case teaches a story; three instruments teach a shape",
              "Because a comparison of two is always decided by which one the reader met first",
              "Because the third instrument is the only one that records who did the work",
              "Because a register is the instrument most learners will actually have to use",
            ],
            correctIndex: 0,
            explanation:
              "The method of the course is comparison. Three sections carry three instruments, and Section 5 sets them side by side, row by row.",
            sourceLessonSlug: "a-third-instrument",
          },
          {
            prompt: "On what date did the closing credits name Delia Derbyshire?",
            options: [
              "23 November 2013",
              "23 November 1963, when the first episode of the programme was broadcast",
              "28 November 2017, the week the honorary doctorate was conferred at Coventry",
              "3 July 2001, the day of her death, when the programme was off the air",
            ],
            correctIndex: 0,
            explanation:
              "The fiftieth-anniversary special, The Day of the Doctor, opened with her arrangement and closed with the line Original theme arranged by Delia Derbyshire.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "What did the 2013 credit say, in its exact words?",
            options: [
              "Original theme arranged by Delia Derbyshire",
              "Original theme composed by Ron Grainer and Delia Derbyshire of the Radiophonic Workshop",
              "Theme music realised by Delia Derbyshire for the BBC Radiophonic Workshop in 1963",
              "With thanks to Delia Derbyshire, who created the original theme fifty years ago",
            ],
            correctIndex: 0,
            explanation:
              "Butler's note 17 records both the wording and the fact that she had waited fifty years for an on-screen credit, and she had died in 2001.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "Which university awarded her an honorary doctorate in November 2017?",
            options: [
              "Coventry University",
              "The University of Manchester, which holds her papers and tapes in its library",
              "The University of York, where a doctoral thesis about her work was completed",
              "Girton College, Cambridge, where she had read music and mathematics as a student",
            ],
            correctIndex: 0,
            explanation:
              "Mark Ayres accepted it on her behalf and told CBC Radio that the recognition had been a long time coming.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "How did Ayres put the employer's side of the credit question to CBC?",
            options: [
              "She was a BBC employee, so she was employed to do this work",
              "The corporation had a written rule and Briscoe had no choice but to apply it to her",
              "Nobody at the BBC realised at the time that the theme would become so well known",
              "The composer's publisher objected to a second name appearing beside his own",
            ],
            correctIndex: 0,
            explanation:
              "He adds that it is only with the benefit of hindsight that we can see how groundbreaking it was. That is the arrangement lesson 3 describes, stated by somebody who knew the unit.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "Where are Derbyshire's papers and tapes held?",
            options: [
              "The University of Manchester, as GB 133 DDA",
              "The BBC Written Archives Centre, alongside the corporation's Workshop files",
              "The British Library, which holds the BBC Sound Archive and its recordings",
              "The University of York, with the thesis that was written from them",
            ],
            correctIndex: 0,
            explanation:
              "Deposited by Mark Ayres on permanent loan in 2007 with the aid of Dr David Butler, the sound tapes transferred in 2010 and the paper archive in 2013, including 267 audio tape recordings.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "How many audio tape recordings does the Manchester collection include?",
            options: [
              "267",
              "Twelve, one for each of the Jason valve oscillators the Workshop kept in room twelve",
              "Around fifty, which is all that survived the BBC's practice of reclaiming used tape",
              "None, because the sound recordings remained with the corporation when she left",
            ],
            correctIndex: 0,
            explanation:
              "The Archives Hub record gives the number. The paper archive followed in 2013, and the BBC's own Workshop papers are held separately at the Written Archives Centre.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "Why does lesson 14 call the archive the most durable of the three corrections?",
            options: [
              "A credit names; an archive lets somebody check",
              "Because an archive cannot be withdrawn, while a credit can be cut from a later repeat",
              "Because the archive holds the BBC's own files as well as her personal papers",
              "Because a deposit is legally permanent, while an honorary degree is symbolic",
            ],
            correctIndex: 0,
            explanation:
              "Every quotation in Section 2 of this course exists because that deposit happened. A correction that enables checking outlasts a correction that only names.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "What is the Payne-Scott Award, according to the archive?",
            options: [
              "Support for researchers returning after career breaks",
              "A scholarship for women beginning a doctorate in radio astronomy in Australia",
              "A medal awarded by CSIRO for the best paper published by one of its divisions",
              "A fund compensating public servants who were required to resign on marriage",
            ],
            correctIndex: 0,
            explanation:
              "It assists researchers who have taken career breaks to care for family to re-enter their field, and there is also an annual lecture delivered by a leading female scientist.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "In lesson 14's table, what does the 2013 screen credit not reach?",
            options: [
              "The 1963 broadcast and every one in between",
              "Any broadcast after 2013, since the credit applied to that special only",
              "The listings magazine, which printed its own credits independently of the BBC",
              "The composer's royalty, which was unaffected because the credit named an arranger",
            ],
            correctIndex: 0,
            explanation:
              "It reaches that broadcast and later ones. Fifty years of transmissions carry what they always carried.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "In lesson 14's table, what does the 1966 amendment not reach?",
            options: [
              "The post lost in 1950, or the years after it",
              "Women employed by the Commonwealth after the date of the amendment",
              "The superannuation scheme, which was amended separately in the same year",
              "Any officer who had already left the service, whether married or unmarried",
            ],
            correctIndex: 0,
            explanation:
              "It reaches every woman employed afterwards. Payne-Scott had left in 1951 and never returned, which is the definition of a prospective correction.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "What does the Manchester archive reach, in lesson 14's table?",
            options: [
              "What future researchers can check",
              "The credits of every production she worked on, which the archive has now corrected",
              "The royalties, since the deposit included the paperwork needed to claim them",
              "The public record of her standing, which is what an honorary degree reaches",
            ],
            correctIndex: 0,
            explanation:
              "What it does not reach is what was not kept or was never written, which is why the missing BBC rule stays missing even with an archive this good.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "Which catalog lesson teaches the same rule about corrections in another field?",
            options: [
              "Who Signs the Print, lesson 22",
              "Who Gets Named, lesson 13, on authors and acknowledged contributors",
              "The Name on the Door, lesson 1, on the credited unit being a firm",
              "Who Made the Record, lesson 12, on the editor's cut and who decides it",
            ],
            correctIndex: 0,
            explanation:
              "Credit corrections are prospective. They change what happens next, and the record of what happened stays as it was with the correction added beside it.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "What is the first open question lesson 14 lists?",
            options: [
              "A BBC document stating the credit rule in its own words",
              "Whether Derbyshire was paid anything at all for the theme beyond her salary",
              "Whether the Workshop's staff ever asked collectively to be credited on air",
              "Which member of staff first suggested that the theme be released as a single",
            ],
            correctIndex: 0,
            explanation:
              "With two addresses attached: the Caversham files R97/9/1 and R97/11/1-2, and Niebur's Special Sound at page 102, which was not obtained for this course.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "What does lesson 14 say about the royalty question?",
            options: [
              "No contract, rights record or memo has been found",
              "The publisher's records show the offer was made and withdrawn within the year",
              "The BBC's own files record a request and its refusal, but the file is closed",
              "Derbyshire's archive contains her correspondence about it with the composer",
            ],
            correctIndex: 0,
            explanation:
              "And nothing written or said by Ron Grainer himself was found on either research pass, which is why no lesson describes his side of it.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "What is verified about the wording of the BBC's 1964 information sheet?",
            options: [
              "Its heading names Grainer with the BBC Radiophonic Workshop",
              "It names Derbyshire as the realiser in a footnote at the end of the document",
              "It was printed in the listings magazine in the week the single was released",
              "It was written by Desmond Briscoe, whose name appears at the foot of the sheet",
            ],
            correctIndex: 0,
            explanation:
              "Butler's note 32 gives the archive reference and records that the author is unknown and the sheet undated, but at least September 1964.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "Why is the on-screen credit as broadcast in November 1963 still an open question here?",
            options: [
              "The BBC's schedule archive could not be reached",
              "Because no recording of the first episode survives in any archive anywhere",
              "Because the credits were read aloud by an announcer rather than printed on screen",
              "Because the BBC has never released the credit list for that programme's first season",
            ],
            correctIndex: 0,
            explanation:
              "So the printed listings billing for that week was not checked. What is verified is the 1964 information sheet heading, and the course says only that.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "What does lesson 14 say to do about Payne-Scott's own letter?",
            options: [
              "Read the item, not the reply that paraphrases it",
              "Treat the Chairman's summary as her position, since no other version survives",
              "Quote the sentence other accounts attribute to her, with a note about the source",
              "Assume it has been lost, since the archive's page prints only the reply",
            ],
            correctIndex: 0,
            explanation:
              "It is question four on the list, with an address. An open question published with the address of the document that would settle it is the honest form of a gap.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "What is the fifth open question?",
            options: [
              "Her ASIO file reference",
              "Whether the marriage regulation was ever applied to any other named officer",
              "Whether the Minister ever certified special circumstances for a married woman",
              "Whether her resignation letter of July 1951 survives in the personnel file",
            ],
            correctIndex: 0,
            explanation:
              "It is cited in secondary sources and unverified here, which is why the lesson uses the dates the archive's page gives and nothing from the file itself.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "What question does this course teach a learner to ask, in place of asking whether somebody was robbed?",
            options: [
              "What instrument was this written on, and what can it record",
              "Who benefited from the arrangement, and what did they gain that the other lost",
              "Which of the two people involved has the better documented account of events",
              "Whether the organisation would make the same decision today, and why not",
            ],
            correctIndex: 0,
            explanation:
              "And then: what would a correction to that instrument actually reach? Asked in that order, the question can be answered with documents rather than with feeling.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "What is a prospective correction?",
            options: [
              "A change that applies from now on",
              "A correction agreed in advance, before the record that needs it has been made",
              "A change applied to every copy of a record, including the copies already distributed",
              "An amendment that takes effect from the date of the original entry rather than today",
            ],
            correctIndex: 0,
            explanation:
              "It leaves the earlier record as it stands with the correction beside it, which is why an archive that keeps both is worth more than a corrected credit on its own.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "What is a permanent loan, in lesson 14's vocabulary?",
            options: [
              "A deposit kept and serviced without being owned outright",
              "A gift of papers to an institution, which then owns them and may dispose of them",
              "A loan of papers for a fixed exhibition period, after which they return to the owner",
              "An arrangement by which an archive buys a collection in instalments over many years",
            ],
            correctIndex: 0,
            explanation:
              "It is how the Derbyshire collection reached Manchester in 2007, with the tapes following in 2010 and the paper archive in 2013.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "What is an honorary doctorate?",
            options: [
              "A degree awarded in recognition rather than for examined work",
              "A doctorate awarded on the basis of published work rather than a submitted thesis",
              "A degree conferred by a university on one of its own former members of staff",
              "An award made only to living recipients, which is why hers was accepted in 2017",
            ],
            correctIndex: 0,
            explanation:
              "It can be conferred after death, which is what happened at Coventry in November 2017, sixteen years after she died.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "Which three instruments does the last paragraph of the course name?",
            options: [
              "A practice, a statute, and a register",
              "A memo, a monograph and an obituary, which are the three kinds of source used here",
              "A credit, a royalty and a pension, which are the three things the rules removed",
              "An archive, an amendment and an award, which are the three corrections described",
            ],
            correctIndex: 0,
            explanation:
              "A practice you cannot read, a statute you can, and a register anyone can search, which is taught in Whose Name Is on the Score.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "What does lesson 14 say the endings of both stories have in common?",
            options: [
              "They are partial",
              "They arrived in the same decade, once attitudes to women's work had changed",
              "They were made by the organisations that had applied the rules in the first place",
              "They were prompted by researchers who found the documents this course reads",
            ],
            correctIndex: 0,
            explanation:
              "That is why they are instructive. A credit, a degree, an archive, an amendment and an award, each reaching something and each leaving something untouched.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "In which year did Derbyshire die?",
            options: [
              "2001",
              "2013, the year of the anniversary special that credited her arrangement on screen",
              "1973, when she left the BBC and stopped working at the Radiophonic Workshop",
              "2017, shortly before the honorary doctorate was conferred at Coventry",
            ],
            correctIndex: 0,
            explanation:
              "Which is why every correction described in lesson 14 is posthumous, and why the archive matters more than the credit.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "Who deposited the Derbyshire collection, and with whose help?",
            options: [
              "Mark Ayres, with the aid of Dr David Butler",
              "The BBC, which transferred the papers when the Radiophonic Workshop closed",
              "Brian Hodgson, who had worked beside her and wrote her obituary in 2001",
              "The University of York, after the thesis about her work had been completed",
            ],
            correctIndex: 0,
            explanation:
              "On permanent loan in 2007. The historian who quotes the Esslin memo and the archivist who wrote the history of the theme are both in that sentence.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "Where are the BBC's own papers about the Workshop held?",
            options: [
              "At the BBC Written Archives Centre",
              "At the University of Manchester, alongside the Derbyshire collection",
              "At the British Library, with the BBC Sound Archive recordings",
              "At Maida Vale, in the studio centre where the Workshop itself was housed",
            ],
            correctIndex: 0,
            explanation:
              "The Archives Hub record says so, and the file references in lesson 12 come from two researchers who worked there.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "What does lesson 12 say about the relationship between the two rules and their severity?",
            options: [
              "Visibility and severity are different things",
              "The unwritten rule was worse, because it could not be challenged by anyone affected",
              "The written rule was worse, because it removed a career rather than a credit line",
              "Both were equally severe, since both ended with the woman leaving her employer",
            ],
            correctIndex: 0,
            explanation:
              "Payne-Scott could read the regulation and reading it changed nothing. The comparison in this course is about evidence, not about which injury was greater.",
            sourceLessonSlug: "two-grades-of-paper",
          },
          {
            prompt: "What kind of claim does lesson 12 say the papers actually support?",
            options: [
              "A smaller claim than there was a rule",
              "A larger claim, since three separate sources describe the same policy independently",
              "No claim at all, since without a document nothing whatever can be said",
              "The same claim, stated more cautiously so that a reader can discount it",
            ],
            correctIndex: 0,
            explanation:
              "A publication that names no maker, a memo that wished the names could be printed, and her own sentence. Smaller, and every part of it can be opened and read today.",
            sourceLessonSlug: "two-grades-of-paper",
          },
          {
            prompt: "Why does lesson 13 say a correction is another entry rather than an erasure?",
            options: [
              "Because records accumulate",
              "Because archives are forbidden by law to remove a document once it has been accessioned",
              "Because the organisation that made the record no longer exists to correct it",
              "Because the original entry is always the one a court would rely on in a dispute",
            ],
            correctIndex: 0,
            explanation:
              "New entries are added and old ones stay. That is what records are, and it is why the useful question is what a correction reaches rather than what it undoes.",
            sourceLessonSlug: "a-third-instrument",
          },
          {
            prompt: "What does lesson 14 say the honorary doctorate reaches?",
            options: [
              "The public record of her standing",
              "Her employment record at the BBC, which the university asked to have amended",
              "The royalties, since an honorary degree carries a stipend paid to the estate",
              "The credits of the programmes she worked on, which were reissued afterwards",
            ],
            correctIndex: 0,
            explanation:
              "And not anything she could have held in her lifetime. She died in 2001 and the degree was conferred in 2017.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "What does this course call the list of things it could not settle?",
            options: [
              "Open questions, each with an address",
              "Unverified claims, which are printed in the lessons with a warning attached",
              "Contested facts, since the sources disagree about each of the five items",
              "Future research, which is left to whoever teaches the course after this version",
            ],
            correctIndex: 0,
            explanation:
              "Stated as a list rather than as a feeling. Two BBC file references, an unread book, a missing letter and an unverified file number.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "What does a statute or regulation fail to record, in lesson 13's table?",
            options: [
              "How it was applied",
              "What it requires, which has to be inferred from the cases it was used in",
              "When it came into force, which is recorded only in the department's own files",
              "Who it applies to, which is why each officer had to ask the Minister individually",
            ],
            correctIndex: 0,
            explanation:
              "The words of the rule are public. Whether it was applied fairly, early, late or selectively in one case is a question for a file rather than for the statute book.",
            sourceLessonSlug: "a-third-instrument",
          },
          {
            prompt: "Which property of a register does lesson 13 say matters to a stranger fifty years later?",
            options: [
              "It is public and searchable by anyone",
              "It is indexed by the name of the author rather than by the name of the claimant",
              "It is checked by an official before an entry is accepted onto the register",
              "It is closed until the term of the right recorded in it has finally expired",
            ],
            correctIndex: 0,
            explanation:
              "Someone with no connection to either party can look, which is exactly what an employer's practice and an internal personnel file do not allow.",
            sourceLessonSlug: "a-third-instrument",
          },
          {
            prompt: "What does lesson 12 say each writer reaches for when a practice has no text?",
            options: [
              "A noun",
              "A date, which is why the accounts disagree about when the practice began",
              "A villain, which is why Briscoe's name appears in most retellings of the story",
              "A number, since the size of the Workshop's staff is the only firm fact available",
            ],
            correctIndex: 0,
            explanation:
              "And the nouns get harder as they travel: preference, practice, standard policy, rules. None of the writers is lying, and the claim still ends up unsupported.",
            sourceLessonSlug: "two-grades-of-paper",
          },
          {
            prompt: "Which files did Winter's and Butler's own citations make it possible to name?",
            options: [
              "The Caversham files where a credits instruction would sit",
              "The Manchester file containing the 1964 BBC information sheet about the theme",
              "The production files for the 1963 documentary Time On Our Hands",
              "The scrapbooks in which the Workshop kept its press clippings and listeners' letters",
            ],
            correctIndex: 0,
            explanation:
              "R97/9/1 and R97/11/1-2. That is what a finding aid does: it turns somewhere in the BBC archives into two references a researcher can order.",
            sourceLessonSlug: "two-grades-of-paper",
          },
          {
            prompt: "What does lesson 14 say about the year the amendment came and the year she left?",
            options: [
              "She left in 1951 and the amendment came in 1966",
              "She left in 1966, in the same year the Public Service Act was finally amended",
              "She left in 1950 and returned as a temporary officer after the amendment",
              "She left in 1959, the year her security file was closed by the intelligence organisation",
            ],
            correctIndex: 0,
            explanation:
              "Fifteen years apart, and she never returned. The gap between those two dates is the clearest illustration of what prospective means.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "What was the name of the anniversary special that carried the 2013 credit?",
            options: [
              "The Day of the Doctor",
              "The Naked Sun, which had been broadcast in 1969 and was repeated for the anniversary",
              "The Tower, the radio production that prompted the Esslin memo in 1964",
              "An Adventure in Space and Time, which dramatised the making of the programme",
            ],
            correctIndex: 0,
            explanation:
              "It opened with the Derbyshire arrangement and closed with the line naming her, fifty years to the day after the first episode.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "What does lesson 13 collect before its comparison table?",
            options: [
              "What Section 4 showed about the register as an instrument",
              "The four registration cards, reproduced so that a learner can read them again here",
              "The open questions from the other course, so that they can be answered in this one",
              "A summary of the other course's argument, in a single closing paragraph",
            ],
            correctIndex: 0,
            explanation:
              "Four properties: filed by a claimant, public and searchable by anyone, separating author from claimant, and silent about who did the work.",
            sourceLessonSlug: "a-third-instrument",
          },
          {
            prompt: "What kind of evidence does lesson 12 say the papers give for the BBC practice?",
            options: [
              "Effects, a failed request, and testimony",
              "A signed instruction, a dated memo and a published staff handbook",
              "Three independent accounts by historians who each worked the same archive",
              "A contract, a rights registration and a payment record, all held at Caversham",
            ],
            correctIndex: 0,
            explanation:
              "The 1963 monograph that names no maker, the 1964 memo that wished names could be printed, and her own sentence about the royalties and the credit.",
            sourceLessonSlug: "two-grades-of-paper",
          },
          {
            prompt: "In lesson 14's table, what does the Payne-Scott Award not reach?",
            options: [
              "The career the rule interrupted",
              "Researchers returning to their field after a break to care for family",
              "The annual lecture given by a leading female scientist in her name",
              "Anything at all, since the award was established long after her death",
            ],
            correctIndex: 0,
            explanation:
              "It reaches researchers returning from career breaks now. Like every other correction in the table, it works forward.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "What does lesson 14 say an archive keeps that a corrected credit does not?",
            options: [
              "Both the record and the correction",
              "The names of everyone who worked on a production, including the uncredited",
              "The employer's reasons for not crediting staff at the time it was deciding",
              "A copy of every broadcast, so that the original credits can be checked",
            ],
            correctIndex: 0,
            explanation:
              "Which is why an archive that keeps both is worth more than a corrected credit on its own, and why the Manchester deposit is the most durable of the corrections.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "Which instrument does lesson 13 say separates the author from the claimant?",
            options: [
              "A public register",
              "An employer's practice, which distinguishes staff from commissioned composers",
              "A statute, which defines both terms before applying either of them",
              "None of them, which is why authorship disputes can never be settled on paper",
            ],
            correctIndex: 0,
            explanation:
              "A registration form of that period asks for the author and, separately, for the copyright claimant. Those are different questions with potentially different answers.",
            sourceLessonSlug: "a-third-instrument",
          },
          {
            prompt: "What does lesson 12 say a learner with a library card is one step from?",
            options: [
              "Finding out whether the rule is quoted in Niebur's book",
              "Reading the BBC's Caversham files, which are open to anyone who asks for them",
              "Obtaining the contract between the composer and the corporation for the theme",
              "Settling the wording of the on-screen credit broadcast in November 1963",
            ],
            correctIndex: 0,
            explanation:
              "Special Sound, page 102, is where two scholars point for this exact question. It was not obtained for this course, and the course says so rather than working around it.",
            sourceLessonSlug: "two-grades-of-paper",
          },
          {
            prompt: "What does lesson 13 say is the method of this course?",
            options: [
              "Comparison",
              "Biography, told through the documents each woman left behind her",
              "Correction, since each section ends by putting a name back into a record",
              "Advocacy, since the course argues for credits to be given retrospectively",
            ],
            correctIndex: 0,
            explanation:
              "One case teaches a story; three instruments teach a shape. That is why the third case is pointed at rather than left out.",
            sourceLessonSlug: "a-third-instrument",
          },
          {
            prompt: "What is the third grade of paper, in lesson 12's opening?",
            options: [
              "A public statute whose ordinary use produced an entry naming somebody else",
              "A rule written down and kept in an employer's file until an archive opens it",
              "A rule written by a court, which applies only to the parties in the case",
              "A rule an organisation adopts and then declines to publish, for its own reasons",
            ],
            correctIndex: 0,
            explanation:
              "The 1909 Act was public and readable then and now. What removed Zitkala-Šá from the record was an ordinary use of it: one man filling in one form, and a second paper signed and never recorded.",
            sourceLessonSlug: "two-grades-of-paper",
          },
          {
            prompt: "Why does lesson 12 say the third grade is the hardest to hold?",
            options: [
              "The statute itself was neither hidden nor unjust on its face",
              "Because the register entry was made in error and later corrected by the office",
              "Because the form was filled in by a clerk rather than by either collaborator",
              "Because nobody has read the statute, which is what makes the case so hard to check",
            ],
            correctIndex: 0,
            explanation:
              "Anybody could read the Act then and can read it now. The removal came from an ordinary use of an ordinary rule, which is why the entry is a third kind of evidence.",
            sourceLessonSlug: "two-grades-of-paper",
          },
          {
            prompt: "What did Hanson add to the score much later, and what did it not reach?",
            options: [
              "A handwritten line, which never reached the register",
              "A second registration, which was filed after the first production had closed",
              "A printed dedication, which appeared in every copy of the published score",
              "A notarised assignment, which was recorded in the Copyright Office that year",
            ],
            correctIndex: 0,
            explanation:
              "In a shaky hand he added Zitkala Sa and W. F. Hanson after the opera's title. The notarised half interest he signed in 1913 was never recorded in the Copyright Office.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "What correction came from the office that keeps the register?",
            options: [
              "A published account saying she does not appear on the records",
              "An amended card, issued in 2021, naming both collaborators as co-authors",
              "A note attached to the original entry recording the unrecorded assignment",
              "A new registration filed by the office on her behalf a century after the first",
            ],
            correctIndex: 0,
            explanation:
              "The Copyright Office post of March 2021. The entry on the card is unchanged; what changed is that the institution holding it now says in public what the card leaves out.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "In lesson 14's table, what does the Copyright Office post not reach?",
            options: [
              "The entry on the card, which is unchanged",
              "Researchers, who would have to visit Washington to read the original record",
              "The 1913 newspapers, which had already named her at the time of the premiere",
              "The opera's title page, which the office reprinted with both names in 2021",
            ],
            correctIndex: 0,
            explanation:
              "Like every other correction in the table it works forward. A register accumulates; a later statement beside an entry does not unmake the entry.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "What is the sixth open question in lesson 14's list?",
            options: [
              "The register case's own open questions, listed in the other course",
              "Whether the Copyright Office will amend the 1912 entry now that it has been questioned",
              "Whether Hanson's memoir names her as coauthor, which no scholar has yet checked",
              "Whether the 1913 newspapers survive in any archive that can be searched today",
            ],
            correctIndex: 0,
            explanation:
              "Whether the notarised assignment survives, which score omits her name, and the registration number on the 1912 card. They are listed with their addresses in Whose Name Is on the Score.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "How does lesson 14 end, in one sentence?",
            options: [
              "A practice you cannot read, a statute you can, and a register anyone can search",
              "Three women, three employers, and three men who each took the credit for himself",
              "A credit, a doctorate and an archive, which are the three corrections this course found",
              "Two rules that were written down and one that was invented by later writers",
            ],
            correctIndex: 0,
            explanation:
              "Two of these cases are taught only here; the third has a course of its own, Whose Name Is on the Score, which is where to go next.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "Which two cases does lesson 14 say are taught only in this course?",
            options: [
              "Derbyshire's and Payne-Scott's",
              "Zitkala-Šá's and Derbyshire's, since the Australian case is taught in a civics course",
              "Payne-Scott's and Zitkala-Šá's, since the BBC case appears in three other courses",
              "None of them, since each of the three has a course of its own in this catalog",
            ],
            correctIndex: 0,
            explanation:
              "The register case has a standalone course, and this one teaches it as an instrument and sends the learner there for the cards, the statute and the press.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "What does lesson 13 say Section 4 read, and what does the other course read?",
            options: [
              "One card here; all five cards there",
              "The statute here; the newspapers there, with the cards divided between them",
              "The newspapers here; the assignment there, which this course could not obtain",
              "Nothing here, since Section 4 describes the register without reading any document",
            ],
            correctIndex: 0,
            explanation:
              "One card and one unrecorded assignment is what the comparison needs. Whose Name Is on the Score reads all five cards as images, the 1909 Act section by section, and the press of 1913.",
            sourceLessonSlug: "a-third-instrument",
          },
          {
            prompt: "Which rules does lesson 13 say the other course keeps as well?",
            options: [
              "The two Section 4 keeps, about the ceremony and about shares",
              "The rule about the BBC, since both courses describe the same credit practice",
              "The rule about quoting Payne-Scott, since both courses use the same archive page",
              "None, because that course was written before these rules were agreed",
            ],
            correctIndex: 0,
            explanation:
              "It never describes the Sun Dance ceremony or the opera's staging of it, and it never says how much of the opera either collaborator wrote.",
            sourceLessonSlug: "a-third-instrument",
          },
          {
            prompt: "In lesson 12's account, what removed Zitkala-Šá from the record?",
            options: [
              "An ordinary use of an ordinary rule",
              "A change in the law, made after the opera had already been registered once",
              "A refusal by the Copyright Office to accept a form naming two authors",
              "A decision by a court that one collaborator held the whole of the copyright",
            ],
            correctIndex: 0,
            explanation:
              "One man filling in one form, and a second paper that was signed and never recorded. The result is a public entry a stranger can search today, naming one person.",
            sourceLessonSlug: "two-grades-of-paper",
          },
          {
            prompt: "What does lesson 14 say changed in 2021, and what did not?",
            options: [
              "What the institution says changed; the entry did not",
              "The entry was amended; the title page of the score was not",
              "The register was digitised; the cards themselves were not made public",
              "The assignment was finally recorded; the original registration was not withdrawn",
            ],
            correctIndex: 0,
            explanation:
              "The Copyright Office published an account stating that she does not appear on the copyright records for the work. The card still names one man in every blank.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "How many grades of paper does lesson 12 now distinguish?",
            options: [
              "Three",
              "Two, since a register entry is simply a statute being applied in practice",
              "Four, counting the press coverage that named two of the three women",
              "One, since every rule ends up written somewhere if a researcher looks long enough",
            ],
            correctIndex: 0,
            explanation:
              "A rule written and quoted back at the woman it removed, a practice never written at all, and a rule written in public on a form that named somebody else.",
            sourceLessonSlug: "two-grades-of-paper",
          },
          {
            prompt: "What does the handwritten line reach, in lesson 14's table?",
            options: [
              "Whoever opens that box",
              "Every later performance of the opera, since the score was used for each one",
              "The register, once the archive that holds the score reported it to the office",
              "Nobody at all, since the addition was made after the collaborator had died",
            ],
            correctIndex: 0,
            explanation:
              "One reader at a time, which is the smallest reach of any instrument in this course, and it never reached the register or the readers who will never open that box.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "What does this course do with the other course's open questions?",
            options: [
              "Names them and leaves them there",
              "Answers them, using the sources gathered for this course's own sections",
              "Treats them as settled, since the standalone course was written first",
              "Adds them to its own research list so that both courses can close them together",
            ],
            correctIndex: 0,
            explanation:
              "Whether the notarised assignment survives, which score omits her name, and the registration number on the 1912 card are listed with their addresses in Whose Name Is on the Score.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // FINAL — placed last, pooling 48 and serving 10
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "who-the-rule-leaves-out-final",
      title: "Final assessment · Who the Rule Leaves Out",
      section: "Final assessment",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 10,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is this course about?",
            options: [
              "What each rule left on paper",
              "Two women who were robbed of credit by colleagues who signed their work",
              "The making of an electronic theme tune, described sound by sound from the tapes",
              "The history of women's employment in broadcasting and in government science",
            ],
            correctIndex: 0,
            explanation:
              "A rule that applied to everyone removed one person from a record, and the record it leaves differs by instrument: one rule written and quoted back, one never written, one written on a public form naming somebody else.",
            sourceLessonSlug: "a-rule-that-applied-to-everyone",
          },
          {
            prompt: "What rules does this course state at the front?",
            options: [
              "No BBC policy, no quotation from her letter, no ceremony, no shares",
              "No living person is named, and no claim is made about anyone's motives at any point",
              "No secondary source is used, and no claim rests on a single document anywhere",
              "No credit dispute is described, and no employer is named in any lesson of the course",
            ],
            correctIndex: 0,
            explanation:
              "Four: no written BBC policy is asserted, Payne-Scott's own letter is never quoted, the Sun Dance ceremony and the opera's staging of it are never described, and no authorship share is ever stated.",
            sourceLessonSlug: "a-rule-that-applied-to-everyone",
          },
          {
            prompt: "Which three instruments does this course compare?",
            options: [
              "An employer's practice, a statute, and a public register",
              "A screen credit, a listings billing and a commercial record label",
              "A memo, a monograph and an obituary, one for each of the three cases",
              "A personnel file, a security file and a scientific bibliography",
            ],
            correctIndex: 0,
            explanation:
              "One section each: the employer's practice in Section 2, the statute in Section 3, the public register in Section 4, with Section 5 setting them side by side.",
            sourceLessonSlug: "what-an-instrument-records",
          },
          {
            prompt: "Which catalog course goes deeper into the register case than this one does?",
            options: [
              "Whose Name Is on the Score",
              "Who Gets Named, whose second lesson supplies the mechanism frame used here",
              "Who Built the Blood Bank, which reads a researcher's own dissertation",
              "The Name on the Door, which follows the credited unit in architecture",
            ],
            correctIndex: 0,
            explanation:
              "Section 4 here reads one card and one unrecorded assignment. That course reads all five registration cards as images, the 1909 Act section by section, and the newspapers of 1913.",
            sourceLessonSlug: "a-third-instrument",
          },
          {
            prompt: "What job did Derbyshire hold when she made the theme, and what was the Workshop?",
            options: [
              "Studio manager, in a service department for drama",
              "Staff composer, in the corporation's music department at Maida Vale",
              "Freelance arranger, engaged for the production by the programme's producer",
              "Senior engineer, supplied to the unit by the corporation's Engineering Division",
            ],
            correctIndex: 0,
            explanation:
              "In her own words: the only way into the workshop was to be a trainee studio manager, because the workshop was purely a service department for drama.",
            sourceLessonSlug: "one-sheet-of-a4-and-a-service-department",
          },
          {
            prompt: "What did the BBC make quite clear about composers, according to Derbyshire?",
            options: [
              "That it did not employ them",
              "That it credited them only when they held a contract with the music department",
              "That it paid them royalties which staff members were not entitled to share",
              "That it preferred them to work with the Workshop rather than with an orchestra",
            ],
            correctIndex: 0,
            explanation:
              "And that the staff were not supposed to be doing music, which is the job category the credit arrangement followed from.",
            sourceLessonSlug: "one-sheet-of-a4-and-a-service-department",
          },
          {
            prompt: "What is BBC Engineering Monograph No. 51, and what does it not contain?",
            options: [
              "The BBC's printed account of the Workshop, naming no maker",
              "An internal instruction about credits, which was never circulated outside the BBC",
              "A catalogue of the Workshop's sounds, without the names of the programmes they served",
              "A staff list for the Workshop, without the grades any of them held",
            ],
            correctIndex: 0,
            explanation:
              "Published November 1963 at five shillings, it describes the function, the equipment and the work in detail, and names a writer, an engineer and a manager and nobody else.",
            sourceLessonSlug: "a-bbc-document-that-names-nobody",
          },
          {
            prompt: "Who does the monograph call the author?",
            options: [
              "The writer of the drama",
              "The member of staff who builds the sounds for the production",
              "The producer, who approves the sounds before they are transmitted",
              "The Engineer-in-Charge, whose name appears on the monograph's title page",
            ],
            correctIndex: 0,
            explanation:
              "The Workshop's function is to convey the mood behind the author's theme of his radio or television drama. In that sentence the makers of the sound are staff.",
            sourceLessonSlug: "a-bbc-document-that-names-nobody",
          },
          {
            prompt: "Why is Doctor Who absent from the monograph's appendix?",
            options: [
              "The monograph predates the first broadcast",
              "The theme was made by an outside composer, so the Workshop did not claim it",
              "The appendix covered radio productions only, and the programme was television",
              "The BBC removed it from the list before publication to avoid publicising the theme",
            ],
            correctIndex: 0,
            explanation:
              "November 1963 against a first episode on 23 November 1963. The course says that plainly rather than implying an omission.",
            sourceLessonSlug: "a-bbc-document-that-names-nobody",
          },
          {
            prompt: "Whose telling of the Grainer anecdote lacks the famous exchange?",
            options: [
              "Derbyshire's own",
              "Hodgson's, in the obituary he wrote for her in 2001",
              "Ayres's, in his history of the theme on his own website",
              "NPR's, in the feature published in October 2017",
            ],
            correctIndex: 0,
            explanation:
              "Asked directly about the theme in 2000, she described the offer of half the royalties and what happened to it, and reported no question from the composer at all.",
            sourceLessonSlug: "three-tellings-and-a-scene-nobody-saw",
          },
          {
            prompt: "What does Butler's sentence about Grainer seeking a share of the credit and royalties do?",
            options: [
              "It fuses two separate claims from one source",
              "It quotes a BBC memo that records the request and the refusal together",
              "It corrects the earlier accounts by separating the credit from the royalties",
              "It reports a scene that the composer described in an interview before his death",
            ],
            correctIndex: 0,
            explanation:
              "His cited source is the Hutton interview, where an offer of royalties made to her and a general practice about credit are two separate sentences about two different things.",
            sourceLessonSlug: "three-tellings-and-a-scene-nobody-saw",
          },
          {
            prompt: "What has never been found, on either research pass, about the royalty story?",
            options: [
              "Anything written or said by Ron Grainer himself",
              "Any account by Derbyshire of what she was offered and what became of it",
              "Any mention of the theme in the press during the 1960s",
              "Any record that the theme was released commercially as a single",
            ],
            correctIndex: 0,
            explanation:
              "Nor any contract, rights record or memo about the offer. He was overruled is a gloss on her sentence rather than a second source.",
            sourceLessonSlug: "three-tellings-and-a-scene-nobody-saw",
          },
          {
            prompt: "What did Esslin's memo of 30 June 1964 ask for?",
            options: [
              "That the contributors' names be mentioned in the credits",
              "That the Workshop be given a budget to commission its own compositions",
              "That the production be repeated so more listeners could hear the sound work",
              "That Derbyshire be promoted to a grade that carried an automatic credit",
            ],
            correctIndex: 0,
            explanation:
              "In the Radio Times and on the air. Failing that, he registered his view that the contribution was at least of equal importance to the producer's.",
            sourceLessonSlug: "the-memo-that-asked",
          },
          {
            prompt: "What does the Esslin memo prove, and what does it not?",
            options: [
              "It proves a request failed; it does not prove a written rule",
              "It proves a written rule existed; it does not prove who wrote it",
              "It proves Briscoe refused the request; it does not prove why",
              "It proves the BBC changed its practice in 1964; it does not say when",
            ],
            correctIndex: 0,
            explanation:
              "It presupposes something and quotes nothing, and what it presupposes is exactly the document nobody has produced.",
            sourceLessonSlug: "the-memo-that-asked",
          },
          {
            prompt: "Name one occasion on which the BBC credit practice bent.",
            options: [
              "The Radio Times billing for The Blue Veiled Men",
              "The on-screen credits of the first Doctor Who serial in November 1963",
              "The BBC information sheet about the theme, prepared in 1964",
              "The Radio Times tenth-anniversary special about the programme in January 1974",
            ],
            correctIndex: 0,
            explanation:
              "Winter records her credited with making its music, in contrast to the usual anonymity of the Workshop in credits. A practice that bends is a practice rather than a law.",
            sourceLessonSlug: "the-memo-that-asked",
          },
          {
            prompt: "What happened after the 1969 production of The Naked Sun?",
            options: [
              "Other Heads asked for their supervisors to be credited",
              "The corporation announced that Workshop staff would be credited from then on",
              "Derbyshire wrote to the Head of Drama asking for a credit and was refused",
              "The Radio Times printed the Workshop's staff names for the first time",
            ],
            correctIndex: 0,
            explanation:
              "Lighting, sound and costume supervisors were put forward by their respective Heads, and Briscoe did not lobby on Derbyshire's behalf.",
            sourceLessonSlug: "the-memo-that-asked",
          },
          {
            prompt: "What did the 1965 press coverage show?",
            options: [
              "She was neither unknown nor hidden",
              "The BBC had begun crediting Workshop staff in its own programmes",
              "Journalists were barred from naming the corporation's staff members",
              "Her colleagues were named while she was not, in every paper that covered the unit",
            ],
            correctIndex: 0,
            explanation:
              "Several papers covered her by name and Tatler ran the Workshop on a centrefold naming five staff. The instruments that did not carry her name were the ones the BBC controlled.",
            sourceLessonSlug: "the-memo-that-asked",
          },
          {
            prompt: "What was the 1950 letter to Payne-Scott, and who signed it?",
            options: [
              "A personal letter from the Chairman of CSIRO",
              "A formal notice of dismissal from the Public Service Board, signed by its secretary",
              "A memorandum from the Chief of the Radiophysics Laboratory to Head Office",
              "A circular sent to every married woman on the organisation's permanent staff",
            ],
            correctIndex: 0,
            explanation:
              "Dated 3 March 1950, marked PERSONAL, signed CHAIRMAN, and identified by the archive as Dr Ian Clunies Ross. It answers her written objection.",
            sourceLessonSlug: "a-rule-you-can-read",
          },
          {
            prompt: "Where did the marriage rule actually live?",
            options: [
              "In a regulation made under a clause of the Act",
              "In the Act constituting CSIR, which named married women in its employment section",
              "In the Superannuation Act alone, which is why it touched only pensions",
              "In an unwritten convention, which the Chairman described from memory in his letter",
            ],
            correctIndex: 0,
            explanation:
              "Neither Act mentions married women. Section 14A(2) let the Council prescribe conditions, and a regulation made under it, copied from the Public Service Act, carried the rule.",
            sourceLessonSlug: "a-rule-you-can-read",
          },
          {
            prompt: "What did the regulation and the Superannuation Act each deem a married female officer to have done?",
            options: [
              "Retired from the service, and resigned from the date of her marriage",
              "Resigned her post, and forfeited her employer's superannuation contributions",
              "Accepted temporary status, and waived her right to appeal to the Board",
              "Applied for a ministerial certificate, and abandoned it if none was granted",
            ],
            correctIndex: 0,
            explanation:
              "The regulation carried a ministerial exception for special circumstances. On the Superannuation Act the Chairman wrote that there was no ground for equivocation or varying interpretation.",
            sourceLessonSlug: "a-rule-you-can-read",
          },
          {
            prompt: "When did the Public Service Act amendment end the requirement to resign on marriage?",
            options: [
              "November 1966",
              "August 1945, when the superannuation provision received assent",
              "March 1950, shortly after this correspondence was exchanged",
              "July 1951, when Payne-Scott resigned from the organisation",
            ],
            correctIndex: 0,
            explanation:
              "Fifteen years after she left. An amendment changes the rule for everyone afterwards and returns nothing to the person it was already applied to.",
            sourceLessonSlug: "a-rule-you-can-read",
          },
          {
            prompt: "Why does this course quote the Chairman quoting Payne-Scott?",
            options: [
              "Her own letter is not on the page that prints his",
              "Because her letter was destroyed before the file reached the national archive",
              "Because her letter is held privately and the family has not released it",
              "Because the archive's transcript of her letter is too damaged to read",
            ],
            correctIndex: 0,
            explanation:
              "It is referred to, paraphrased and answered, and not printed. A paraphrase by the person on the other side of a dispute is evidence about him, not her words.",
            sourceLessonSlug: "what-the-file-records",
          },
          {
            prompt: "What did the Chairman propose as the simplest way of regularising the affair?",
            options: [
              "That she tell him the date of her marriage",
              "That she apply to the Minister for a certificate of special circumstances",
              "That she resign at once and be re-employed as a temporary officer",
              "That she withdraw her objection and the matter be treated as closed",
            ],
            correctIndex: 0,
            explanation:
              "The word regularising treats her position rather than the rule as the thing out of order, which is how a convention behaves when nobody is questioning it.",
            sourceLessonSlug: "what-the-file-records",
          },
          {
            prompt: "What three questions does the course say to ask of any archived correspondence?",
            options: [
              "Whose paper is this, whose is missing, and is the missing side quoted through it",
              "Who created it, who catalogued it, and when was it opened to the public",
              "Is it signed, is it dated, and does it carry an archival reference number",
              "Who benefits from it, who is harmed by it, and who kept it for that reason",
            ],
            correctIndex: 0,
            explanation:
              "In this file the answers are the employer's, hers, and yes. The same questions work on any exchange where only one side survives.",
            sourceLessonSlug: "what-the-file-records",
          },
          {
            prompt: "Why is Payne-Scott's case in a course about credit at all?",
            options: [
              "It is the same mechanism, written down instead of inferred",
              "Because her name was left off the papers her laboratory published in the 1950s",
              "Because the laboratory was credited as a unit in the way the Workshop was",
              "Because she and Derbyshire were removed from records by the same employer",
            ],
            correctIndex: 0,
            explanation:
              "Nobody took her name off a piece of work. The pair teaches what neither teaches alone: the same rule-shaped removal, at two completely different grades of paper.",
            sourceLessonSlug: "not-a-stolen-byline",
          },
          {
            prompt: "Which claim in Who Gets the Credit does her file complicate?",
            options: [
              "That being barred by law leaves no document",
              "That an employer always keeps a written record of why a name was omitted",
              "That a patent assignment moves an invention from a person to a company",
              "That a credit correction can be made retrospectively once evidence is found",
            ],
            correctIndex: 0,
            explanation:
              "That lesson treats an 1858 opinion as the rare written-down barrier. Her file is a second one, modern, signed, dated and publicly transcribed.",
            sourceLessonSlug: "not-a-stolen-byline",
          },
          {
            prompt: "What does lesson 12 say the writing of a rule does NOT change?",
            options: [
              "The outcome for the person it is applied to",
              "What a later reader is able to know about the organisation's reasoning",
              "Whether a historian can quote the rule rather than describing it",
              "Whether the rule can be traced to the statute that authorised it",
            ],
            correctIndex: 0,
            explanation:
              "Payne-Scott could read the regulation that ended her permanent appointment. Being able to see a rule is not the same as being protected from it.",
            sourceLessonSlug: "two-grades-of-paper",
          },
          {
            prompt: "What happens to a practice with no text, as accounts of it multiply?",
            options: [
              "The nouns harden from preference to policy to rules",
              "The claim is dropped, because no writer will assert what cannot be cited",
              "The earliest account is repeated verbatim by everyone who follows it",
              "Each writer adds a hedge, so the claim weakens as it travels",
            ],
            correctIndex: 0,
            explanation:
              "The boss would not allow it, then a preference, then a standard practice, then a standard policy, then BBC rules. Nobody in that chain is lying.",
            sourceLessonSlug: "two-grades-of-paper",
          },
          {
            prompt: "What are the three moves that make a claim about an unwritten rule honest?",
            options: [
              "Name the asserter, name the settling document, state what the papers show",
              "Quote the strongest source, cite it fully, and add a hedge to the sentence",
              "Search the archive, interview a witness, and publish the result either way",
              "State the claim, state its opposite, and leave the reader to decide between them",
            ],
            correctIndex: 0,
            explanation:
              "The second move is unusually specific here, because two scholars' own citations map the Caversham files where a credits instruction would sit.",
            sourceLessonSlug: "two-grades-of-paper",
          },
          {
            prompt: "Which two BBC file references does the course name as the place to look?",
            options: [
              "R97/9/1 and R97/11/1-2",
              "DD332 and DD333, the memo and the information sheet held in Manchester",
              "T5/1, 702/1 and N15/17/1, two production files at Caversham",
              "R97/25/1 and R97/25/2, the Workshop's scrapbooks of press clippings",
            ],
            correctIndex: 0,
            explanation:
              "Workshop administration, memoranda and reports, and Radiophonic Workshop General 1953 to 1973. Neither was read for this course, and the lesson says so.",
            sourceLessonSlug: "two-grades-of-paper",
          },
          {
            prompt: "Which unread book would most likely settle the rule question?",
            options: [
              "Niebur's Special Sound",
              "Briscoe's own account of the Workshop's first twenty-five years",
              "Winter's thesis, which is open access and was read for this course",
              "The BBC Handbook for 1964, a public relations annual",
            ],
            correctIndex: 0,
            explanation:
              "Winter cites it at page 102 and Butler at pages 131 and 142 for this exact question, and it was not obtained here. An unread source is named rather than quietly left out.",
            sourceLessonSlug: "two-grades-of-paper",
          },
          {
            prompt: "What can a public register not record?",
            options: [
              "Who actually did the work",
              "The date on which a claim was filed with the office",
              "The name of the person claiming to hold the right",
              "Whether the claimant and the author are the same person",
            ],
            correctIndex: 0,
            explanation:
              "It records who filed, who claimed and when. One name in every blank on a form proves that one person filled the form in.",
            sourceLessonSlug: "a-third-instrument",
          },
          {
            prompt: "What does the comparison table say about corrections to all three instruments?",
            options: [
              "None of them reaches backwards",
              "Only the register admits a correction, because entries can be amended there",
              "All three reach backwards once the correcting document is filed beside the first",
              "Only the statute reaches backwards, because an amendment restores lost entitlements",
            ],
            correctIndex: 0,
            explanation:
              "Records accumulate. Correction is another entry rather than an erasure, which is why the useful question is what a correction reaches.",
            sourceLessonSlug: "a-third-instrument",
          },
          {
            prompt: "What did the closing credits of 23 November 2013 say?",
            options: [
              "Original theme arranged by Delia Derbyshire",
              "Theme music by Ron Grainer with the BBC Radiophonic Workshop",
              "Original theme realised by Delia Derbyshire and Dick Mills",
              "In memory of Delia Derbyshire, who created the original theme",
            ],
            correctIndex: 0,
            explanation:
              "Fifty years after the first broadcast and twelve years after her death. It reaches that transmission and every one after it.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "Which correction does the course call the most durable, and why?",
            options: [
              "The Manchester archive, because it lets somebody check",
              "The honorary doctorate, because a university's record cannot be withdrawn",
              "The 2013 screen credit, because every later repeat carries it",
              "The 1966 amendment, because it removed the rule from the statute book",
            ],
            correctIndex: 0,
            explanation:
              "A credit names; an archive lets somebody check. Every quotation in Section 2 of this course exists because that deposit happened.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "What is the CSIRO award named for Payne-Scott for?",
            options: [
              "Researchers returning after career breaks",
              "The best paper published by a woman in Australian physics each year",
              "Students beginning doctoral work in radio astronomy in Australia",
              "Officers who were required to resign on marriage before the 1966 amendment",
            ],
            correctIndex: 0,
            explanation:
              "It assists researchers who have taken career breaks to care for family to re-enter their field, and an annual lecture is delivered by a leading female scientist.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "What question does this course teach a learner to ask?",
            options: [
              "What instrument was this written on, and what can it record",
              "Who gained from the arrangement, and what did the other person lose",
              "Was the rule fair, and would the same organisation apply it today",
              "Which account of the story is the earliest, and is it the most reliable",
            ],
            correctIndex: 0,
            explanation:
              "And then what a correction to that instrument would actually reach. Asked in that order, the question can be answered with documents.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "What is a compression, as this course uses the word?",
            options: [
              "Two separate facts folded into one sentence",
              "A shortened quotation, with the middle removed and marked by an ellipsis",
              "A summary of a long document written by an archivist for students",
              "A rule stated in fewer words than the statute that authorises it",
            ],
            correctIndex: 0,
            explanation:
              "Two appear in this course: the Manchester archive folding 1960 and 1962 into one date, and a peer-reviewed sentence fusing an offer of royalties with a rule about credit.",
            sourceLessonSlug: "one-sheet-of-a4-and-a-service-department",
          },
          {
            prompt: "What would show that the BBC non-crediting was a decision about Derbyshire rather than a convention?",
            options: [
              "Her named colleagues being printed while she was not",
              "Any evidence that she asked for a credit and was refused in writing",
              "The composer receiving royalties while the Workshop staff received none",
              "Press coverage that named her, since it shows her name could be printed",
            ],
            correctIndex: 0,
            explanation:
              "Stating in advance what would falsify the claim is what separates a finding from a story that cannot be wrong.",
            sourceLessonSlug: "what-an-instrument-records",
          },
          {
            prompt: "How many people does the monograph describe on the Workshop's staff, and how many does it name?",
            options: [
              "Six described, none named",
              "Six described, two named in the acknowledgment for their work on the sounds",
              "Twelve described, five named on a list at the end of the document",
              "Three described, all named, since only the studio managers made the sounds",
            ],
            correctIndex: 0,
            explanation:
              "They appear as the departments that supply them and the grades they hold. The acknowledgment names two senior men for their help with the document itself.",
            sourceLessonSlug: "a-bbc-document-that-names-nobody",
          },
          {
            prompt: "What did Derbyshire say the Workshop staff got instead of a credit?",
            options: [
              "A free Radio Times",
              "An annual bonus divided equally between the members of the unit",
              "A credit in the corporation's internal newsletter when a programme did well",
              "A copy of the master tape, which they were allowed to keep for themselves",
            ],
            correctIndex: 0,
            explanation:
              "The sentence sits directly after her account of the royalty offer, and is followed by: the boss wouldn't let anybody have any sort of credit.",
            sourceLessonSlug: "three-tellings-and-a-scene-nobody-saw",
          },
          {
            prompt: "What does this course refuse to build out of two documented facts?",
            options: [
              "A refusal scene no document describes",
              "A comparison between an employment bar and a missing screen credit",
              "A claim that a practice existed at the BBC during the 1960s",
              "An account of how the theme was made from oscillators and tape",
            ],
            correctIndex: 0,
            explanation:
              "That the composer offered royalties and that the BBC kept staff uncredited are both supported. A meeting in which a named official says no is not in any document read here.",
            sourceLessonSlug: "three-tellings-and-a-scene-nobody-saw",
          },
          {
            prompt: "Who is named on the 1912 registration card for The Sun Dance Opera?",
            options: [
              "William F. Hanson, as claimant and as author",
              "Zitkala-Šá as author and William F. Hanson as claimant, which is the usual split",
              "Both collaborators, as joint authors of a dramatico-musical composition",
              "The Uintah Academy in Vernal, Utah, as the proprietor of the unpublished score",
            ],
            correctIndex: 0,
            explanation:
              "No other person is named anywhere on either side of the card. The Copyright Office's own post says that despite her contributions she does not appear on the copyright records for the work.",
            sourceLessonSlug: "the-card-that-was-filed-first",
          },
          {
            prompt: "What happened to the half interest Hanson signed over a month after the first production?",
            options: [
              "It was notarised and never recorded",
              "It was recorded within three months, as the 1909 Act required of an assignment",
              "It was withdrawn when the opera was revived at a university in 1935",
              "It was replaced by a later agreement that gave her a share of the royalties",
            ],
            correctIndex: 0,
            explanation:
              "Under the 1909 Act, recording is what buys visibility. A right can be real between the two people who signed for it and invisible to everyone else at the same time.",
            sourceLessonSlug: "what-the-register-could-not-hold",
          },
          {
            prompt: "What claim about the opera does this course refuse to repeat?",
            options: [
              "That she wrote the libretto and songs",
              "That the registration card names one man in both of its name blanks",
              "That the newspapers of 1913 acknowledged her part in the early productions",
              "That the assignment of a half interest was notarised in Uintah County",
            ],
            correctIndex: 0,
            explanation:
              "It is an authorship share, asserted on a federal web page, and no document in Section 4 supports it: not the card, not the assignment, not the press.",
            sourceLessonSlug: "what-the-register-could-not-hold",
          },
          {
            prompt: "What are the two rules Section 4 keeps?",
            options: [
              "No ceremony, and no authorship shares",
              "No secondary sources, and no quotation from any newspaper of the period",
              "No living people named, and no claims about copyright law after 1976",
              "No speculation about motive, and no reliance on a source read in an archive copy",
            ],
            correctIndex: 0,
            explanation:
              "It never describes the Sun Dance ceremony or the opera's staging of it, and it never says how much of the opera either collaborator wrote.",
            sourceLessonSlug: "the-card-that-was-filed-first",
          },
          {
            prompt: "What did the press of 1913 and the register do differently?",
            options: [
              "The press acknowledged her; the register did not",
              "The press named nobody while the register named both collaborators",
              "The press corrected the register, which was amended the following year",
              "The press reported the assignment, which the register had already recorded",
            ],
            correctIndex: 0,
            explanation:
              "The same split appears in London fifty years later, where the papers of 1965 named Derbyshire while the credits did not. Reach and durability are different properties.",
            sourceLessonSlug: "what-the-register-could-not-hold",
          },
          {
            prompt: "Which correction in this course has the smallest reach?",
            options: [
              "A line added by hand to an archived score",
              "A screen credit added to an anniversary broadcast fifty years later",
              "An honorary doctorate conferred sixteen years after the recipient's death",
              "An amendment to a statute that ends a rule for everybody employed afterwards",
            ],
            correctIndex: 0,
            explanation:
              "Zitkala Sa and W. F. Hanson, added after the opera's title in a shaky hand. It reaches whoever opens that box in that archive, one reader at a time.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
        ],
      },
    },
  ],
};

// ══════════════════════════════════════════════════════════════════════════
// FOR THE REGISTERING AGENT AND FOR BAM (nothing below is seeded)
// ══════════════════════════════════════════════════════════════════════════
//
// ASSESSMENT SPEC, computed by hand because the slug is not registered yet and
// `npx tsx scripts/audit-course.ts <slug> --spec` cannot see an unregistered course. The numbers
// below come from running the same arithmetic the auditor runs (round(words / 35), clamped 40 to
// 100, a pool within 90 per cent of target passes) over this file's own lesson bodies:
//
//   Section 1 · The rule, and the paper it leaves         2 lessons, 2583 words, target 74, pool 67
//   Section 2 · Derbyshire and the department             4 lessons, 4013 words, target 100, pool 90
//   Section 3 · Payne-Scott and the statute               3 lessons, 2703 words, target 77, pool 69
//   Section 4 · Zitkala-Sa and the register               2 lessons, 1956 words, target 56, pool 51
//   Section 5 · Three grades of paper                     3 lessons, 3413 words, target 98, pool 88
//   Final assessment                                      pool 48, serving 10
//
// Every section quiz serves 5 and passes at 80; the final serves 10 and passes at 80; every one of
// the 413 questions carries `explanation` and `sourceLessonSlug`; every teaching section has its own
// quiz. Re-run `npx tsx scripts/audit-course.ts who-the-rule-leaves-out --spec` after seeding.
//
// GUARDS RUN AGAINST THIS FILE DIRECTLY, because check-em-dashes.ts, check-longest-option.ts,
// check-quiz-balance.ts, check-reveals.ts and check-assessment-fit.ts all read `git ls-files` and
// an untracked file is invisible to them. Each was run from a copy whose file list was replaced
// with this one path. Results are in the handoff message.
//
// PROPOSED RESEARCH CHECKS for src/lib/research-checks.ts (the registering agent adds them; this
// course writes no hedge that is not on this list):
//
//  A. key "bbc-credit-rule-document" · severity high · lesson "two-grades-of-paper"
//     title: Is there a BBC document that states the Radiophonic Workshop credit rule?
//     claim: The course says a practice existed and REFUSES to call it a written policy, because no
//            document stating it has been read. Butler calls it "the BBC's standard policy on
//            individual credits"; the Esslin memo presupposes it; the 1963 monograph shows its
//            effect. Nobody quotes the rule.
//     needs: any BBC instruction, minute or memo about crediting Workshop staff, 1958 to 1973.
//     where: BBC Written Archives Centre, Caversham, R97/9/1 (administration, memoranda, reports)
//            and R97/11/1 and R97/11/2 (Radiophonic Workshop General, 1953 to 1973). Also Louis
//            Niebur, Special Sound (Oxford University Press, 2010), p. 102, which both Winter and
//            Butler cite for the credit question and which was NOT obtained for this course.
//
//  B. key "payne-scott-own-letter-1950" · severity high · lesson "what-the-file-records"
//     title: What does Ruby Payne-Scott's letter of 20 February 1950 actually say?
//     claim: The course quotes the CHAIRMAN paraphrasing her and says so every time, because the
//            National Archives of Australia page prints his letter and not hers. The sentence
//            plans/83 attributes to her reply is NOT on that page and is printed nowhere here.
//     needs: the item itself, and confirmation of whether it survives in the file at all.
//     where: NAA A8520, PH/PAY/002 (CSIRO Head Office personnel file), via RecordSearch or a
//            research request to the National Archives of Australia.
//
//  C. key "dr-who-1963-broadcast-credit" · severity medium · lesson "what-a-correction-can-reach"
//     title: What did the credit for the theme actually say on 23 November 1963?
//     claim: The course asserts only the BBC's own 1964 information sheet heading ("DR. WHO title
//            music by Ron Grainer with the BBC Radiophonic Workshop", Butler n.32) and says the
//            broadcast caption and the printed billing were not checked.
//     needs: the Radio Times billing for the week of 23 November 1963, and the on-screen caption.
//     where: BBC Genome (genome.ch.bbc.co.uk), which refused every fetch from this environment on
//            2026-09-19 and 2026-09-20, or a Radio Times copy in a library.
//
//  D. key "grainer-royalty-request" · severity medium · lesson "three-tellings-and-a-scene-nobody-saw"
//     claim: The course says Derbyshire stated the offer and the refusal in her own words, and that
//            no contract, rights record or memo about it has been found, and that nothing written
//            or said by Ron Grainer himself was found on either pass. Butler's "he was overruled"
//            is treated as a gloss on her sentence, not a second source.
//     needs: any BBC contract file, PRS or MCPS record, publisher file (Erle Music / Warner
//            Chappell) or Grainer paper bearing on a royalty split for the theme.
//     where: BBC WAC contributor files; PRS for Music; the publisher.
//
//  E. key "derbyshire-bbc-joining-date" · severity low · lesson "one-sheet-of-a4-and-a-service-department"
//     title: Did Derbyshire join the BBC in 1960 or 1962?
//     claim: The lesson prints Hodgson's obituary on both sides (BBC 1960, Workshop 1962), Butler's
//            1962 to 1973, and her own "'62 - 73", and says the Manchester archive's biographical
//            note compresses the two events into one 1962 sentence. It asserts no single date for
//            joining the corporation.
//     needs: a BBC staff record, or the archive's own source for its 1962 sentence.
//     where: BBC WAC staff files; University of Manchester Library, GB 133 DDA.
//
//  F. key "payne-scott-1951-status" · severity low · lesson "what-the-file-records"
//     title: Was Payne-Scott permanent or temporary when she resigned in July 1951?
//     claim: The lesson prints the NAA page's own two sentences (forced off permanent staff in 1950
//            and reinstated temporarily; resigned from her permanent position in July 1951), names
//            the inconsistency as a wrinkle in the page's wording, and asserts no status for 1951.
//     needs: the employment record in the file itself.
//     where: NAA A8520, PH/PAY/002.
//
//  G. key "payne-scott-asio-file-reference" · severity low · lesson "what-the-file-records"
//     title: What is the correct citation for Ruby Payne-Scott's ASIO file?
//     claim: The lesson uses only the NAA teaching page's statement that an ASIO file lists her as
//            "a person of interest" from 1948 to 1959, says the file was not read, and says the
//            reference number given for it in secondary sources is unverified here.
//     needs: the series and item number, and whether the file is open.
//     where: NAA RecordSearch.
//
//  NO NEW CHECK IS FILED FOR THE REGISTER CASE. Its open questions (whether the notarised assignment
//  survives, which score omits her name, the registration number on the 1912 card, the El Paso
//  Herald page image, Smith's page numbers) are ALREADY on `whose-name-is-on-the-score`'s list, and
//  lesson 14 of this course points the learner at that list by name. Filing duplicates would make
//  the /admin/research board show the same work twice.
//
// CLAIMS DROPPED FOR LACK OF EVIDENCE, or on a content rule (each is in the brief or in plans/83
// and appears in NO lesson):
//  - THAT THE BBC HAD A WRITTEN POLICY FORBIDDING CREDIT. The brief's binding condition, restated by
//    BAM on 2026-09-20. Nowhere asserted. Where a source says it (CBC, 2017; Butler's "policy"), the
//    lesson names the source and says the document has not been produced. This is lesson 10's whole
//    subject rather than a silent omission.
//  - THE SENTENCE plans/83 QUOTES FROM PAYNE-SCOTT'S REPLY ("Personally, I feel no legal or moral
//    obligation..."). Not on the page that prints the Chairman's letter. Printed nowhere here.
//    Research check B.
//  - THE 1963 ON-SCREEN CREDIT WORDING from fan databases ("Title Music: Ron Grainer" plus the
//    Workshop). REPORTED only, cites no source. Research check C. The course uses the BBC's own 1964
//    information sheet heading instead and labels it as an information sheet.
//  - "CO-COMPOSER CREDIT". plans/83 and several retellings frame the offer as a share of the credit.
//    Every source that predates the compression speaks of ROYALTIES. Lesson 5 teaches the fusion.
//  - BRIAN HODGSON'S ON-SCREEN "SPECIAL SOUND" CREDITS on some 1960s serials (a Wikipedia list).
//    Not checked, and not needed: Winter's Radio Times billing for "The Blue Veiled Men" is the
//    verified example that the practice bent.
//  - DOCTOR WHO SOUND CUE SHEETS IN THE MANCHESTER ARCHIVE. A search snippet from a fan news site.
//    The Archives Hub text read here does not say it.
//  - NIEBUR (2010) IS NEVER QUOTED. It could not be obtained (no Internet Archive lending copy;
//    Google Books search-inside returns a CAPTCHA). It is named in lesson 10 AS UNREAD, which is the
//    honest form, and it is research check A.
//  - GROVE MUSIC ONLINE and the OXFORD DICTIONARY OF NATIONAL BIOGRAPHY entries. Both 403 on fetch
//    (subscription). Nothing is asserted from them.
//  - CLIVE BLACKBURN'S TESTIMONY, quoted by Butler (2014, n.22) and by CBC (2017). He is a living
//    private individual and Derbyshire's partner, so under the batch content rule he is neither
//    named nor quoted anywhere in this course.
//  - DERBYSHIRE'S HEALTH. Butler (2019) gives a reason of this kind for the 1973 film credit. The
//    lesson uses only the credit facts and Hodgson's statement about the work.
//  - PAYNE-SCOTT'S CHILDREN, named on the NAA page, and her husband, who is named in no document
//    read here. Neither appears. Her marriage appears only as the employment fact the letter turns on.
//  - HER POLITICAL AFFILIATION, which the NAA page states. The course carries only the "person of
//    interest" dates, says it did not read the security file, and uses nothing from it, because the
//    subject here is the employment rule and the file is research check G.
//  - ANY AUTHORSHIP SHARE FOR THE THEME. No lesson says how much of it was hers. Ayres describes what
//    Grainer supplied, the BBC's 1964 sheet describes the construction, and the course stops there.
//  - ANY AUTHORSHIP SHARE FOR THE OPERA, which is the same rule applied to Section 4. The National
//    Park Service's "Zitkala-Sa wrote the libretto and songs" is printed ONLY as an exhibit of the
//    claim the course refuses, with the three documents that fail to support it named beside it.
//  - THE SUN DANCE CEREMONY AND THE OPERA'S STAGING OF IT. Never described. Lesson 10 says that is a
//    rule and not a gap, and gives Hafen's reason in her own words.
//  - THE EL PASO HERALD SENTENCE of 27 December 1913, which `whose-name-is-on-the-score` prints as
//    UNCORRECTED OCR and labels as such. This course does not need it: Smith's sentence about the
//    pre-1935 press and the Musical America headline she quotes carry the same point, verified.
//  - THE REGISTRATION NUMBER on the 1912 card, which the other course could not match to the 1912
//    Catalog of Copyright Entries. Only the class and the date are used here.
//  - SMITH'S SPECULATION about a motive for the belated assignment, which she flags as speculation.
//    Not carried, in either course.
//  - HANSON'S MEMOIR TITLE. The book was not seen. Lesson 11 says only what Hafen says the memoir
//    does, which is acknowledge her as coauthor and collaborator.
//  - WHICH SCORE OMITS HER NAME, and whether the 1912 copyright was renewed. Both are open questions
//    in `whose-name-is-on-the-score`, and lesson 14 points at that list rather than repeating it.
//
// FOR THE REGISTERING AGENT (outside this file):
//
//  REGISTRATION BLOCK for scripts/seed-courses.ts, as its own seedAuthoredCourse call (the CREDIT
//  array loop does not pass visibility):
//
//    // "Who the Rule Leaves Out" (Delia Derbyshire, Ruby Payne-Scott and Zitkala-Sa; plans/83
//    // E-03, E-11 and E-06). PRIVATE study, by BAM's approval of
//    // plans/future-courses/uncredited/2026-09-18-delia-derbyshire-brief.md on 2026-09-19 and his
//    // decision of 2026-09-20 to build ALL THREE cases here AND keep `whose-name-is-on-the-score`
//    // standalone, each course pointing at the other. NO series code (BAM, 2026-09-19: private
//    // courses carry no CREDIT code); keeps the series SLUG so the owner can find it beside the
//    // others. Binding content conditions: NO lesson says the BBC had a written policy forbidding
//    // credit; Payne-Scott's own letter of 20 February 1950 is never quoted; the Sun Dance ceremony
//    // and the opera's staging of it are never described; and no authorship share is ever asserted.
//    // NO migration: pnpm seed:courses.
//    await seedAuthoredCourse(db, {
//      tenantId: learnWitus,
//      instructorId,
//      slug: "who-the-rule-leaves-out",
//      course: WHO_THE_RULE_LEAVES_OUT_COURSE,
//      category: "Culture & History",
//      additionalCategories: ["Careers & Media", "Science & Math", "Money & Property"],
//      navigationMode: "linear",
//      price: 0,
//      priceType: "free",
//      visibility: "private",
//      publishHoldReason:
//        "Private study for BAM (plans/83). Built from BBC Engineering Monograph No. 51, Butler (2014 and 2019), Winter (2015), the Jo Hutton interview, Hodgson's obituary, Ayres, the National Archives of Australia's transcript of the 1950 CSIRO letter, and, for the register section, the 1912 copyright card, the 1909 Act, Smith (2001), Hafen (1998) and the 2021 Copyright Office post. Held for two reasons. The central claim about the BBC rests on a practice nobody has read in writing, and lesson 12 teaches that gap rather than papering over it. And Section 4 teaches a Native woman's case written by a non-Native author from published sources, so, like `whose-name-is-on-the-score`, it needs a Native reviewer with the authority to change or cut any of it before it is considered for release.",
//      seriesSlug: "credit",
//      seriesTitle: "Credit: Who Gets Named",
//      seriesOrder: 13,   // next free after who-were-the-computers (12); check before seeding
//    });
//
//  IMPORTS: add `import { WHO_THE_RULE_LEAVES_OUT_COURSE } from "./data/who-the-rule-leaves-out-course";`
//  beside the other CREDIT course imports at the top of scripts/seed-courses.ts.
//
//  CITATIONS: add `who-the-rule-leaves-out` to STAGED_COURSES in src/lib/citations.ts and run
//  `pnpm gen:citations` once seeded. Every teaching lesson carries an APA 7 `## Sources` block, so
//  `pnpm check:citations` will find citations for it.
//
//  STANDARDS: this is a primary-source history and evidence course (sourcing, corroboration,
//  claim-versus-evidence, reading a legal text, distinguishing a rule from its effects), so per the
//  repo rule it should be MAPPED in src/lib/standards/ rather than BACKLOGged. Until it is mapped it
//  needs a BACKLOG line in scripts/check-standards-coverage.ts or `pnpm lint` fails.
//
//  CROSS-LINKS THIS COURSE MAKES, for `pnpm gen:cross-links`:
//   - `whose-name-is-on-the-score`, named in lesson 1, lesson 11 (the end of Section 4), lesson 13
//     and lesson 14, and in six quiz questions across the Section 1, Section 5 and final banks. Each
//     mention says the same thing: that course reads all five registration cards as images, the 1909
//     Act section by section and the newspapers of 1913, and Section 4 here teaches the instrument
//     and sends the learner there. BAM is adding the pointer the other way once this slug exists.
//   - `who-gets-named` lesson 2 (the mechanism frame and its three tests).
//   - `who-gets-the-credit` lesson 3 (barred by law leaves no document; Payne-Scott's file is the
//     modern exception).
//   - `who-made-the-record` lesson 11 (do not manufacture a confrontation).
//   - `who-signs-the-print` lesson 22 (credit corrections are prospective).
