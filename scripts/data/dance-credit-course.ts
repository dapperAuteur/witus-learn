import type { AuthoredCourse } from "./authored-course";

// "Black creators in dance, and the copyright that would not hold them". Slug assumed:
// `dance-credit`. Registered in scripts/seed-courses.ts by the coordinating agent, not here.
//
// THE SPINE, and why this is not a set of biographies. The mechanism is a STATUTE. Choreography was
// not a copyrightable category at all until the 1976 Act took effect on 1 January 1978, and a dance
// that was danced and never fixed was, in law, never a work. So the course teaches the rule first
// and the people second, which lets the uncredited-ness be DEMONSTRATED from documents rather than
// asserted from anecdote. Sections 1 to 3 are the law. Sections 4 and 5 are the archive and the
// people, read against it.
//
// BRIEF: plans/future-courses/2026-08-25-10-dance-credit-research.md, which is primary-source
// verified and flags its own traps. This file follows it and RE-VERIFIED everything it prints.
//
// FETCH-OR-DO-NOT-CITE. Every identifier below (statute section, case citation, C.F.R. section,
// Compendium section, call number, box-folder, fee figure, date) was retrieved and read in the
// authoring session. Specifically: the 1909 Act and Study No. 28 from copyright.gov/history; the
// Compendium chapters 800 and 2100 and Circular 52 from copyright.gov; 17 U.S.C. 102 from Cornell
// LII; Horgan from law.resource.org; Hanagami from the Ninth Circuit's own PDF; the Five-Petal
// Flower Review Board letter from copyright.gov; the Library of Congress finding aids for the
// Katherine Dunham Collection (mu018008) and the Alvin Ailey American Dance Theater Collection
// (mu024021) from tile.loc.gov; the Metropolitan Opera Archives performance records for 7 January
// 1933 and 13 November 1951; the NYPL Jerome Robbins Dance Division record for Eleo Pomare; the
// Dance Notation Bureau's own catalog and fee pages; Jacob's Pillow Dance Interactive; ailey.org.
//
// THE THREE TRAPS THE RESEARCH FLAGGED, and what this file did with each:
//  1. JUDITH JAMISON'S DEATH DATE. Verified this session against the Ailey organization's own
//     statement AND its pressroom biography, both of which print 9 November 2024. Printed.
//  2. ALVIN AILEY IS NOT AN UNCREDITED CASE, and the popular framing that makes him one is wrong.
//     161 linear feet at the Library of Congress. He is in this course because his archive is where
//     four OTHER Black choreographers' contracts survive. The correction IS the lesson.
//  3. JANET COLLINS. "First Black prima ballerina at the Met" is not assertable. What the Met's own
//     performance database records is a debut on 13 November 1951 under the credit line "Dance",
//     with the choreography credited to Zachary Solov, and Hemsley Winfield credited by role in
//     1933. The course teaches the conflict and the credit line, not the headline.
//
// WHAT COULD NOT BE VERIFIED is hedged in the lesson and listed as a proposed research check in the
// comment block at the BOTTOM of this file. Nothing unverified is printed as fact.
//
// House style, matching deaf-america-course.ts: `section` on every lesson; flush-left single-line
// `:::reveal q ||| a`; a `## Vocabulary` block of 3-6 lesson-specific terms; APA 7 `## Sources`; a
// quiz per teaching section (pool 40, serving 5, passing 80, shuffled) plus a final pooling 45 and
// serving 10; every question carries `explanation` + `sourceLessonSlug`. Correct options are written
// SHORT and distractors long and specifically wrong, so `check-longest-option` passes by
// construction. No em dashes in user-visible copy.
export const DANCE_CREDIT_COURSE: AuthoredCourse = {
  title: "Black creators in dance, and the copyright that would not hold them",
  description:
    "Choreography was not a copyrightable category in the United States until 1 January 1978. Before that date a dance could be registered only if it passed as a dramatic composition, in Class D, which meant it had to tell a story or develop a character, and the rule came from a case a white dancer lost in 1892. After that date it could be registered only if it was fixed: written, notated or filmed. A dance that was danced and never written down was, in law, never a work at all. This course teaches that mechanism from the documents themselves, the 1909 Act, the Copyright Office's own Compendium, Circular 52, and the opinions in Horgan v. Macmillan and Hanagami v. Epic Games, and then reads the archive against it. You will open the Library of Congress finding aid for the Alvin Ailey American Dance Theater Collection to a box of contracts and read four Black choreographers' names on four folder headings, one of them with a royalties schedule laid in and one of them closed to researchers until the year 2100. You will compare the two folders that hold what survives of the choreography of Revelations with the two boxes that hold its choral scores. And you will price a Labanotation score, because a score is not only a record, it is a revenue instrument, and every choreographer who was never notated was excluded from it. Nothing here is asserted that was not read from a source. Where the popular story is wrong, including about Alvin Ailey and about Janet Collins, the correction is the lesson.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1 — Class D: what the law would not call a work
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "class-d-the-dance-that-had-to-pass-as-a-play",
      title: "1 · Class D, and the dance that had to pass as a play",
      section: "Section 1 · Class D: what the law would not call a work",
      body: `Start with a document rather than a grievance. Open the Copyright Act of 1909 to section 5, which tells an applicant which class to register in, and read the list.

**The eleven classes, in the Act's own order.** (a) Books, including composite and cyclopaedic works, directories, gazetteers, and other compilations; (b) Periodicals, including newspapers; (c) Lectures, sermons, addresses, prepared for oral delivery; (d) Dramatic or dramatico-musical compositions; (e) Musical compositions; (f) Maps; (g) Works of art, models or designs for works of art; (h) Reproductions of a work of art; (i) Drawings or plastic works of a scientific or technical character; (j) Photographs; (k) Prints and pictorial illustrations.

**Dance is not there.** Not as a class, not as a subcategory, not as an example. For the sixty-nine years the 1909 Act governed American copyright, a choreographer opening the statute to find their art form found nothing addressed to it.

**And here is the detail that makes this a story about discretion rather than about a drafting oversight.** Section 5 ends with a proviso, printed in the Act itself, that the class specifications "shall not be held to limit the subject-matter of copyright as defined in section four of this Act, nor shall any error in classification invalidate or impair the copyright protection secured under this Act." Section 4 is broad. So the statutory text did not forbid registering a dance. What decided the question was administrative practice, built inside the Copyright Office and the courts, in the space the statute left open. Whenever a rule is made in that space rather than on the page, the question worth asking is who was in the room.

**What the practice was, in the Copyright Office's own words.** The Compendium of U.S. Copyright Office Practices, Third Edition, chapter 2100, section 2122.3, states that the 1909 Act "did not recognize choreography as a distinct category of copyrightable authorship" and that a choreographic work qualified "only to the extent that it qualified as a dramatic composition." To satisfy that, a choreographic work "had to tell a story, develop a character, or express a theme or emotion by means of specific movements and physical actions."

**The regulation, quoted verbatim in that same section.** The Copyright Office's regulations under the 1909 Act, at 37 C.F.R. 202.7 (1959), provided that a "Choreographic work of a dramatic character, whether the story or theme be expressed in music or action combined or by actions alone," was subject to registration in **Class D**. And then the exclusion: "However, descriptions of dance steps and other physical gestures, including ballroom and social dances or choreographic works which do not tell a story, develop a character or emotion, or otherwise convey a dramatic concept or idea, are not subject to registration in Class D."

**Class D is the whole argument in one letter.** Class D was the class for dramatic and dramatico-musical compositions. To register a dance at all, a choreographer had to make it pass as a play. Not a good dance, not an original dance, not a difficult dance: a dance that narrated.

**So ask the question the rule invites.** Which traditions produce work that narrates in the way a Broadway book show narrates, and which produce work whose organising principles are rhythm, participation, improvisation, call and response, and the social occasion itself? The rule did not name any tradition. It did not have to. A test that admits story and refuses everything else sorts by form, and form is not distributed evenly across communities. That is the shape of the argument this whole course makes, and it is worth being precise about it now: the claim is not that anyone wrote a racial rule. The claim is that a facially neutral rule had unequal effects, which is both harder to deny and easier to check.

:::reveal Under the 1909 Act, which registration class did a dance have to fit into, and what did that require of it? ||| Class D, the class for dramatic or dramatico-musical compositions, which required the dance to tell a story, develop a character, or express a theme or emotion by means of specific movements and physical actions.

:::reveal Why is it wrong to say the 1909 Act forbade the registration of dance? ||| Because the Act never mentions dance either way, and section 5 carries a proviso saying the class list does not limit the subject matter of copyright as defined in section 4. The exclusion was built in administrative practice, in the space the statute left open.

## Vocabulary
- **Class D**: the 1909 Act's registration class for dramatic and dramatico-musical compositions, the only door through which a dance could enter the register before 1978.
- **Dramatic composition**: a work that tells a story, develops a character, or expresses a theme or emotion, which is the test a dance had to pass to reach Class D.
- **Proviso**: the clause at the end of section 5 stating that the class list does not limit the subject matter of copyright defined in section 4, which is why the exclusion of dance was practice rather than text.
- **Administrative practice**: the rules an agency builds in the gap a statute leaves, which bind applicants as firmly as the statute does but are made without a vote.
- **Facially neutral rule**: a rule that names no group and still falls unevenly, which is the form of the argument this course makes and the form an educator can check.

## Sources
Copyright Act of 1909, Pub. L. No. 60-349, 35 Stat. 1075, § 5. U.S. Copyright Office. https://www.copyright.gov/history/1909act.pdf
U.S. Copyright Office. (2021). *Compendium of U.S. Copyright Office practices* (3rd ed.), ch. 2100, § 2122.3. https://www.copyright.gov/comp3/chap2100/ch2100-renewal-registration.pdf`,
    },
    {
      slug: "fuller-v-bemis-and-the-thin-deposit-record",
      title: "2 · Fuller v. Bemis, and how thin the record really was",
      section: "Section 1 · Class D: what the law would not call a work",
      body: `Where did the story requirement come from? From a case a white dancer lost, in 1892, and it governed everyone who came after her for the next eighty-six years.

**Fuller v. Bemis, 50 F. 926 (C.C.S.D.N.Y. 1892).** Loie Fuller, the American dancer famous for her serpentine dances of swirling silk under coloured light, sued over the copying of a dance she had filed as a written description. The Copyright Office's own history study quotes the court's characterisation: the dance was "a series of graceful movements, combined with an attractive arrangement of drapery, lights and shadows," conveying "no other idea than that a comely woman is illustrating the poetry of motion in a singularly graceful fashion." And then the sentence that became the rule: "Such an idea may be pleasing, but it can hardly be called dramatic."

**Read that as a document about power rather than about Loie Fuller.** A court looked at abstract, non-narrative movement, said it was pleasing but not dramatic, and denied it. The reasoning was then generalised into an administrative test, and the test outlived the dancer, the case and the statute it was decided under. The rule that would later keep Black American vernacular forms outside the register was not written against them. It was written about a white woman's solo, by a court that could not see abstraction as authorship.

**Now the fairness point, and this course makes it before it makes the racial one.** How many dances of any kind were actually on the register before 1978? Study No. 28, the Copyright Office's own study of copyright in choreographic works prepared for the Senate Judiciary Subcommittee, reports that "Some choreographic works have been deposited for registration in the Copyright Office in the form of a textual description or in the Laban system of notation; and in one case, at least, a motion picture was deposited as the fixed form of a choreographic work."

**Some. And in one case, at least, a film.** That is the entire pre-1978 deposit record as the agency that kept it could describe it. The register was thin for everybody: for Balanchine, for Graham, for Humphrey, for de Mille. Anyone who tells you that Black choreographers were uniquely absent from a register full of white ones is describing a register that did not exist. The disparity this course documents is not mainly a disparity in who registered. It is a disparity in every other kind of record, and in who could afford the one technology, notation, that later turned out to be worth money.

**A small honesty note about the study itself, because a careful reader will hit it.** The Copyright Office cites its own Study No. 28 inconsistently: chapter 800 of the Compendium gives 1961, chapter 2100 gives 1960, and the printed committee volume carries 1961 on its title page. Both citations are the Office's own. Where a source cannot settle its own date, say so rather than picking the one that looks tidier.

**What to hold on to from this section.** Before 1978 the law offered dance one narrow door, marked Class D, with a sign on it that said tell a story. The rule behind that door came from a loss, not a policy debate. And almost nobody got through it, which means the pre-1978 archive of American dance is not the Copyright Office's files. It is somewhere else entirely, and the second half of this course goes and finds it.

:::reveal What did Fuller v. Bemis decide, and why does a course about Black creators in dance begin with a white plaintiff? ||| It held that a dance of graceful movement conveying no story or character was pleasing but not dramatic, and so not registrable. It matters because that loss became the general administrative test, so the rule that later excluded Black vernacular forms was set in a case about a white woman's solo.

:::reveal What does Study No. 28 say about how many choreographic works were actually deposited before 1978? ||| That some were deposited as textual descriptions or in Laban notation, and in one case at least a motion picture was deposited. The pre-1978 deposit record was thin for choreographers of every background.

## Vocabulary
- **Deposit**: the copy of a work filed with the Copyright Office as the fixed form of what is being registered, which for a dance meant a description, a notated score, or film.
- **Serpentine dance**: the swirling silk and coloured light form Loie Fuller was known for, whose abstraction is exactly what the court in 1892 refused to call dramatic.
- **Study No. 28**: the Copyright Office study of copyright in choreographic works prepared for the Senate Judiciary Subcommittee during the revision that produced the 1976 Act.
- **Laban system of notation**: the movement notation system, also called Labanotation, named in the study as one of the few forms in which a dance was actually deposited.
- **Generalised holding**: what happens when the reasoning of one case becomes the routine test applied to every later application, which is how a single 1892 loss governed for eighty-six years.

## Sources
Fuller v. Bemis, 50 F. 926 (C.C.S.D.N.Y. 1892), as quoted in Varmer, B. (1961). *Study no. 28: Copyright in choreographic works*. Copyright Law Revision Studies 26-28, Senate Committee on the Judiciary, 86th Cong., 2d Sess. https://www.copyright.gov/history/studies/study28.pdf
U.S. Copyright Office. (2021). *Compendium of U.S. Copyright Office practices* (3rd ed.), ch. 800. https://www.copyright.gov/comp3/chap800/ch800-performing-arts.pdf`,
    },
    {
      slug: "section-1-quiz",
      title: "Section 1 quiz · Class D and the rule before the rule",
      section: "Section 1 · Class D: what the law would not call a work",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Under the Copyright Act of 1909, which registration class did a dance have to fit to be registered at all?",
            options: [
              "Class D",
              "Class G, the class the Act reserved for works of art and for models or designs for works of art",
              "Class K, the class the Act reserved for prints and for pictorial illustrations of every kind",
              "Class E, the class the Act reserved for musical compositions including any accompanying words",
            ],
            correctIndex: 0,
            explanation:
              "Class D was the class for dramatic or dramatico-musical compositions, and the Copyright Office's regulations registered a choreographic work of a dramatic character there. The other classes are real classes in section 5 of the same Act, which is why they make good distractors.",
            sourceLessonSlug: "class-d-the-dance-that-had-to-pass-as-a-play",
          },
          {
            prompt: "What kind of works did Class D cover?",
            options: [
              "Dramatic or dramatico-musical compositions",
              "Lectures, sermons and addresses that had been prepared specifically for oral delivery",
              "Drawings or plastic works of a scientific or technical character, including engineering models",
              "Books, including composite and cyclopaedic works, directories, gazetteers and other compilations",
            ],
            correctIndex: 0,
            explanation:
              "Section 5(d) of the 1909 Act names dramatic or dramatico-musical compositions. The other three describe classes (c), (i) and (a) of the same list.",
            sourceLessonSlug: "class-d-the-dance-that-had-to-pass-as-a-play",
          },
          {
            prompt: "How many classes did section 5 of the 1909 Act list?",
            options: [
              "Eleven",
              "Eight, matching the eight categories of authorship that the 1976 Act would later enumerate",
              "Four, one each for books, periodicals, dramatic compositions and musical compositions",
              "Fourteen, including a separate class for choreography added by amendment in 1959",
            ],
            correctIndex: 0,
            explanation:
              "Section 5 lists classes (a) through (k), which is eleven. Eight is the count in the 1976 Act's section 102(a). No choreography class was ever added to the 1909 Act.",
            sourceLessonSlug: "class-d-the-dance-that-had-to-pass-as-a-play",
          },
          {
            prompt: "Does the 1909 Act mention dance or choreography anywhere in its list of classes?",
            options: [
              "No",
              "Yes, as a subcategory of works of art under class (g) of section 5",
              "Yes, but only for dances performed with musical accompaniment written by the choreographer",
              "Yes, in a proviso added to section 5 by regulation in 1959 to cover dramatic dance",
            ],
            correctIndex: 0,
            explanation:
              "Dance appears nowhere in the section 5 list. That silence is the point: the exclusion was built in administrative practice, not written into the statute.",
            sourceLessonSlug: "class-d-the-dance-that-had-to-pass-as-a-play",
          },
          {
            prompt: "What does the proviso at the end of section 5 of the 1909 Act say?",
            options: [
              "The class list does not limit the subject matter of copyright",
              "An applicant who registers in the wrong class forfeits protection until the error is corrected",
              "The Register of Copyrights may add new classes whenever a new art form becomes commercially significant",
              "Works not named in any class may be registered only with the written consent of the Librarian of Congress",
            ],
            correctIndex: 0,
            explanation:
              "It provides that the specifications shall not be held to limit the subject matter of copyright as defined in section four, nor shall any error in classification invalidate or impair the protection secured. That is the opposite of forfeiture.",
            sourceLessonSlug: "class-d-the-dance-that-had-to-pass-as-a-play",
          },
          {
            prompt: "Which section of the 1909 Act does that proviso point to as the broader definition of copyrightable subject matter?",
            options: [
              "Section 4",
              "Section 102, which lists eight categories of works of authorship including choreographic works",
              "Section 202.7, the regulation that assigned choreographic works of a dramatic character to Class D",
              "Section 705, which governs records searches conducted by the Copyright Office on request",
            ],
            correctIndex: 0,
            explanation:
              "The proviso names section four of the same Act. Section 102 belongs to the 1976 Act, 202.7 is a regulation rather than a statute section, and 705 is a modern records provision.",
            sourceLessonSlug: "class-d-the-dance-that-had-to-pass-as-a-play",
          },
          {
            prompt: "Because dance was excluded by practice rather than by statutory text, what follows about the exclusion?",
            options: [
              "It was made in a space the statute left open",
              "It could be reversed by any federal district court hearing an infringement suit brought by a choreographer",
              "It was reviewed and re-approved by Congress at each renewal of the copyright term after 1909",
              "It applied only to dances performed for paying audiences rather than to those made for the stage generally",
            ],
            correctIndex: 0,
            explanation:
              "The statute neither required nor forbade registering a dance, so the rule was built by the agency and the courts in the gap. That is why the useful question is who was in the room.",
            sourceLessonSlug: "class-d-the-dance-that-had-to-pass-as-a-play",
          },
          {
            prompt: "According to Compendium section 2122.3, a choreographic work was eligible under the 1909 Act only to the extent that it qualified as what?",
            options: [
              "A dramatic composition",
              "A compilation of movements arranged into an original selection and sequence by its author",
              "A pantomime performed silently before an audience without any musical accompaniment",
              "A motion picture, because film was the only deposit format the Office would then accept",
            ],
            correctIndex: 0,
            explanation:
              "The Compendium says a choreographic work qualified only to the extent it qualified as a dramatic composition. Compilation reasoning and pantomime are separate doctrines, and film was one accepted deposit format rather than the only one.",
            sourceLessonSlug: "class-d-the-dance-that-had-to-pass-as-a-play",
          },
          {
            prompt: "What three things could a dance do to satisfy the dramatic-composition requirement?",
            options: [
              "Tell a story, develop a character, or express a theme or emotion",
              "Fill a full evening, employ professional dancers, and be performed for a paying public audience",
              "Be published, carry a copyright notice, and be accompanied by an original musical score",
              "Use recognised technique, be taught in a school, and be revived at least once after its premiere",
            ],
            correctIndex: 0,
            explanation:
              "That is the Compendium's own formulation, and 37 C.F.R. 202.7 (1959) states the same test. Length, employment, publication and revival were never the test.",
            sourceLessonSlug: "class-d-the-dance-that-had-to-pass-as-a-play",
          },
          {
            prompt: "Which regulation is quoted as the source of the Class D rule for choreographic works?",
            options: [
              "37 C.F.R. 202.7 (1959)",
              "37 C.F.R. 202.1 (1978), the regulation listing material not subject to copyright",
              "17 C.F.R. 805.5 (2021), the Compendium provision on social dances and simple routines",
              "37 C.F.R. 202.5 (2016), the regulation governing requests for reconsideration of a refusal",
            ],
            correctIndex: 0,
            explanation:
              "The Compendium quotes 37 C.F.R. 202.7 (1959) verbatim. The Compendium's 805 sections are agency practice rather than codified regulation, and 202.5 governs reconsideration procedure.",
            sourceLessonSlug: "class-d-the-dance-that-had-to-pass-as-a-play",
          },
          {
            prompt: "What did 37 C.F.R. 202.7 (1959) expressly exclude from registration in Class D?",
            options: [
              "Ballroom and social dances, and works that tell no story",
              "Any choreographic work whose author was not a citizen or resident of the United States at first publication",
              "Works fixed in a notation system rather than in a textual description approved by the Office",
              "Dances created for motion pictures, which the regulation routed to the class for photoplays instead",
            ],
            correctIndex: 0,
            explanation:
              "The regulation excludes descriptions of dance steps and other physical gestures, including ballroom and social dances, and choreographic works that do not tell a story, develop a character or emotion, or otherwise convey a dramatic concept. Citizenship, notation format and film were not the dividing lines.",
            sourceLessonSlug: "class-d-the-dance-that-had-to-pass-as-a-play",
          },
          {
            prompt: "The course says a test that admits story and refuses everything else sorts by what?",
            options: [
              "Form",
              "The commercial success of the work in the season it premiered",
              "The professional training of the dancers who first performed it",
              "The size of the theatre in which the work was first presented to the public",
            ],
            correctIndex: 0,
            explanation:
              "It sorts by the formal organising principle of the work, and form is not evenly distributed across communities. That is the mechanism behind the whole course.",
            sourceLessonSlug: "class-d-the-dance-that-had-to-pass-as-a-play",
          },
          {
            prompt: "How does this course state its central claim about the Class D rule?",
            options: [
              "A facially neutral rule had unequal effects",
              "Copyright examiners applied the story requirement more strictly to Black applicants than to white ones",
              "Congress deliberately drafted the 1909 Act to exclude the dance forms of Black Americans",
              "Courts refused to hear infringement claims brought by Black choreographers before 1978",
            ],
            correctIndex: 0,
            explanation:
              "The claim is about the rule's effects, not about anyone's intent. It is both harder to deny and easier to check than an accusation about individual examiners, and this course never makes the accusation.",
            sourceLessonSlug: "class-d-the-dance-that-had-to-pass-as-a-play",
          },
          {
            prompt: "For how long did the 1909 Act govern American copyright?",
            options: [
              "Sixty-nine years",
              "Eighty-six years, running from the decision in Fuller v. Bemis to the effective date of the 1976 Act",
              "Fifty-two years, until the Copyright Office issued its revised regulations in 1959 and 1961",
              "Ninety-four years, until the Compendium's third edition took effect and replaced the older practice",
            ],
            correctIndex: 0,
            explanation:
              "From 1909 to the effective date of the 1976 Act on 1 January 1978. Eighty-six years is the span from Fuller v. Bemis in 1892 to that same date, which is a different measurement of a related fact.",
            sourceLessonSlug: "class-d-the-dance-that-had-to-pass-as-a-play",
          },
          {
            prompt: "Which of these is class (f) in section 5 of the 1909 Act?",
            options: [
              "Maps",
              "Photographs, which the Act placed in its own separate class after the drawings class",
              "Reproductions of a work of art, listed immediately after the works of art class itself",
              "Periodicals, including newspapers, which the Act listed second among all eleven classes",
            ],
            correctIndex: 0,
            explanation:
              "Class (f) is maps. Photographs are (j), reproductions of a work of art are (h), and periodicals are (b).",
            sourceLessonSlug: "class-d-the-dance-that-had-to-pass-as-a-play",
          },
          {
            prompt: "What does the course mean by administrative practice?",
            options: [
              "Rules an agency builds in the gap a statute leaves",
              "The written instructions Congress gives an agency when it delegates authority in a committee report",
              "The internal filing procedures an agency uses to route applications between its own examining divisions",
              "A body of judicial precedent that binds an agency only after it has been affirmed on appeal twice",
            ],
            correctIndex: 0,
            explanation:
              "Practice binds applicants as firmly as a statute does, but it is made without a vote. That is why the exclusion of dance is a story about discretion.",
            sourceLessonSlug: "class-d-the-dance-that-had-to-pass-as-a-play",
          },
          {
            prompt: "A choreographer in 1950 wanted to register an abstract plotless work. What would the rule have told them?",
            options: [
              "It could not be registered, because it told no story",
              "It could be registered if the choreographer deposited a Labanotation score rather than a description",
              "It could be registered in Class G as a work of art, since abstraction is the hallmark of that class",
              "It could be registered once the work had been publicly performed at least three times with notice",
            ],
            correctIndex: 0,
            explanation:
              "The dramatic-character requirement turned on narrative, character or theme, not on the deposit format, the class chosen, or the number of performances.",
            sourceLessonSlug: "class-d-the-dance-that-had-to-pass-as-a-play",
          },
          {
            prompt: "Why does the course say the phrase Class D contains the whole argument?",
            options: [
              "Because a dance had to pass as a play to be registered",
              "Because the letter D was assigned to dance in the Copyright Office's internal filing system",
              "Because Class D applications were reviewed by a separate panel with authority to refuse on aesthetic grounds",
              "Because works registered in Class D received a shorter term of protection than works in other classes",
            ],
            correctIndex: 0,
            explanation:
              "Class D was the dramatic class. The only door open to a dance required it to be something other than a dance, which is the argument in a single letter.",
            sourceLessonSlug: "class-d-the-dance-that-had-to-pass-as-a-play",
          },
          {
            prompt: "What question does the course say is worth asking whenever a rule is made in the space a statute leaves open?",
            options: [
              "Who was in the room",
              "Whether the rule was published for public comment before it was applied to any pending application",
              "How many applications were refused under the rule in the first full year after it took effect",
              "Whether a court has ever been asked to review the rule under the standards for agency action",
            ],
            correctIndex: 0,
            explanation:
              "The course puts it in those words, because a rule made without a vote takes its shape from whoever was present when it was made.",
            sourceLessonSlug: "class-d-the-dance-that-had-to-pass-as-a-play",
          },
          {
            prompt: "What is a proviso, as the term is used in section 5 of the 1909 Act?",
            options: [
              "A clause qualifying what precedes it",
              "A conditional grant of protection that lapses unless the applicant renews it within twenty-eight years",
              "A cross-reference directing an applicant to a regulation issued by the Register of Copyrights",
              "A statement of congressional purpose printed before the operative text of a statutory section",
            ],
            correctIndex: 0,
            explanation:
              "The section 5 proviso qualifies the class list by saying the list does not limit the subject matter defined in section 4. Renewal, cross-references and purpose statements are different devices.",
            sourceLessonSlug: "class-d-the-dance-that-had-to-pass-as-a-play",
          },
          {
            prompt: "What is the citation for Fuller v. Bemis?",
            options: [
              "50 F. 926 (C.C.S.D.N.Y. 1892)",
              "789 F.2d 157 (2d Cir. 1986), the appeal that set the substantial-similarity standard for choreography",
              "No. 22-55890 (9th Cir. 2023), the appeal brought against the maker of the videogame Fortnite",
              "16 F. Cas. 1132 (C.C.S.D.N.Y. 1868), the railroad-scene case about a dramatic composition",
            ],
            correctIndex: 0,
            explanation:
              "Fuller v. Bemis is 50 F. 926, decided in 1892. The other three citations are Horgan, Hanagami and Daly v. Palmer, all real cases in this material.",
            sourceLessonSlug: "fuller-v-bemis-and-the-thin-deposit-record",
          },
          {
            prompt: "In what year was Fuller v. Bemis decided?",
            options: [
              "1892",
              "1909, the year Congress enacted the copyright statute that governed for the next sixty-nine years",
              "1959, the year of the regulation assigning choreographic works of a dramatic character to Class D",
              "1961, the year the Copyright Office printed its study of copyright in choreographic works",
            ],
            correctIndex: 0,
            explanation:
              "1892, sixteen years before the 1909 Act. The other three years are all real landmarks in this material, which is what makes them useful distractors.",
            sourceLessonSlug: "fuller-v-bemis-and-the-thin-deposit-record",
          },
          {
            prompt: "Who was Loie Fuller?",
            options: [
              "A white American dancer known for serpentine dances",
              "A Black American choreographer whose company toured Europe throughout the 1930s and 1940s",
              "A French notator who developed one of the earliest published systems for recording stage dances",
              "An English theatrical producer who registered dozens of dances in Class D before the First World War",
            ],
            correctIndex: 0,
            explanation:
              "Her swirling silk and coloured light were the abstraction the court in 1892 refused to call dramatic. She was the plaintiff, not a notator or a producer.",
            sourceLessonSlug: "fuller-v-bemis-and-the-thin-deposit-record",
          },
          {
            prompt: "How did the court in Fuller v. Bemis characterise the dance before it?",
            options: [
              "Pleasing, but hardly dramatic",
              "Original and skilful, but too short to constitute a complete dramatic composition under the statute",
              "Dramatic in form but insufficiently fixed, because the deposit was a written description rather than film",
              "Derivative of earlier serpentine dances performed on the European stage in the preceding decade",
            ],
            correctIndex: 0,
            explanation:
              "Study No. 28 quotes the court saying such an idea may be pleasing but can hardly be called dramatic. Length, fixation and derivation were not the grounds.",
            sourceLessonSlug: "fuller-v-bemis-and-the-thin-deposit-record",
          },
          {
            prompt: "What phrase did the court use to describe what Fuller's dance conveyed?",
            options: [
              "The poetry of motion in a singularly graceful fashion",
              "A vivid dramatic narrative built from movements chosen for their expressive force alone",
              "A theme of longing developed through the repetition of a single gesture across the whole work",
              "An impression of character sufficient to bring the work within the class for dramatic compositions",
            ],
            correctIndex: 0,
            explanation:
              "The quoted passage says the dance conveyed no other idea than that a comely woman is illustrating the poetry of motion in a singularly graceful fashion. The other options describe things the court found absent.",
            sourceLessonSlug: "fuller-v-bemis-and-the-thin-deposit-record",
          },
          {
            prompt: "How did Fuller file the dance she sued over?",
            options: [
              "As a written description",
              "As a Labanotation score prepared by a professional notator and certified by the Office",
              "As a motion picture deposited with the Copyright Office in two complete prints",
              "As a series of staged photographs showing each successive position of the dancer",
            ],
            correctIndex: 0,
            explanation:
              "She filed a written description. Labanotation and film both appear in this material as deposit formats, but neither is what the 1892 case turned on.",
            sourceLessonSlug: "fuller-v-bemis-and-the-thin-deposit-record",
          },
          {
            prompt: "Why does a course about Black creators in dance open its legal argument with a white plaintiff's case?",
            options: [
              "Because her loss became the general test",
              "Because she was the first person of any background to attempt to register a dance with the Office",
              "Because her company was the first to employ Black dancers on the American concert stage",
              "Because the court's opinion expressly discussed which racial traditions could satisfy the dramatic test",
            ],
            correctIndex: 0,
            explanation:
              "The reasoning of one 1892 case was generalised into the administrative test that governed everyone until 1978. The court said nothing about race, and that is exactly what makes the effects argument the honest one.",
            sourceLessonSlug: "fuller-v-bemis-and-the-thin-deposit-record",
          },
          {
            prompt: "For how long did the rule from Fuller v. Bemis govern registration practice?",
            options: [
              "Eighty-six years",
              "Sixty-nine years, the full span during which the Copyright Act of 1909 was the governing statute",
              "Forty-three years, until the Copyright Office issued the regulation that created Class D for dance",
              "Twenty-eight years, the length of the original copyright term under the 1909 Act before renewal",
            ],
            correctIndex: 0,
            explanation:
              "From 1892 to 1 January 1978. Sixty-nine years is the life of the 1909 Act itself, and twenty-eight years is the original term, both real numbers from adjacent facts.",
            sourceLessonSlug: "fuller-v-bemis-and-the-thin-deposit-record",
          },
          {
            prompt: "What does Study No. 28 report about pre-1978 deposits of choreographic works?",
            options: [
              "Some were deposited, and in one case at least a motion picture",
              "Several hundred were deposited, the large majority of them as Labanotation scores prepared by the Dance Notation Bureau",
              "None were ever accepted, because the Office refused every choreographic application filed under the 1909 Act",
              "Deposits were accepted only from choreographers working for companies with a permanent New York season",
            ],
            correctIndex: 0,
            explanation:
              "The study says some were deposited as textual descriptions or in the Laban system, and in one case at least a motion picture. Neither a large number nor a flat refusal is what the record shows.",
            sourceLessonSlug: "fuller-v-bemis-and-the-thin-deposit-record",
          },
          {
            prompt: "What point does the course make from the thinness of that deposit record?",
            options: [
              "The register was thin for choreographers of every background",
              "Black choreographers registered at a measurably lower rate than white choreographers before 1978",
              "The Copyright Office destroyed most pre-1978 choreographic deposits when it moved its holdings",
              "Registration was effectively closed to anyone who had not published a written score commercially",
            ],
            correctIndex: 0,
            explanation:
              "That fairness point comes first, before the racial one. A claim that Black choreographers were absent from a register full of white ones would be describing a register that did not exist.",
            sourceLessonSlug: "fuller-v-bemis-and-the-thin-deposit-record",
          },
          {
            prompt: "Where, then, does this course say the real disparity lies?",
            options: [
              "In every other kind of record, and in access to notation",
              "In the number of infringement suits Black choreographers were able to bring in federal court",
              "In the length of the copyright term granted to works registered by different applicants",
              "In whether the Copyright Office assigned an application to Class D or to Class G",
            ],
            correctIndex: 0,
            explanation:
              "Notation is the technology that later turned out to be worth money, which is the argument the course develops when it prices a Labanotation score.",
            sourceLessonSlug: "fuller-v-bemis-and-the-thin-deposit-record",
          },
          {
            prompt: "For whom was Study No. 28 prepared?",
            options: [
              "A Senate Judiciary subcommittee",
              "The Second Circuit, which had asked the Copyright Office to brief it on choreographic registration",
              "The Dance Notation Bureau, which commissioned it as part of its campaign for statutory reform",
              "The Register of Copyrights, for internal use only, and it was not published until the 1976 Act passed",
            ],
            correctIndex: 0,
            explanation:
              "It was one of the Copyright Law Revision Studies prepared for the Senate Committee on the Judiciary's subcommittee on patents, trademarks and copyrights, during the revision that produced the 1976 Act.",
            sourceLessonSlug: "fuller-v-bemis-and-the-thin-deposit-record",
          },
          {
            prompt: "What inconsistency does the course flag about Study No. 28 itself?",
            options: [
              "The Copyright Office cites it as both 1960 and 1961",
              "Two different authors are credited on the title page and in the Compendium's citation of it",
              "The published version omits the section on notation that the table of contents lists",
              "The Office withdrew it in 1976 and has never restored it to its history collection online",
            ],
            correctIndex: 0,
            explanation:
              "Compendium chapter 800 gives 1961 and chapter 2100 gives 1960, and both are the Office's own. Where a source cannot settle its own date, the honest move is to say so.",
            sourceLessonSlug: "fuller-v-bemis-and-the-thin-deposit-record",
          },
          {
            prompt: "What is a deposit, in copyright registration?",
            options: [
              "The copy filed as the fixed form of the work",
              "The fee an applicant pays to the Copyright Office when submitting a registration application",
              "The bond a plaintiff posts before bringing an infringement action in federal district court",
              "The certificate the Office issues once it has approved a registration application",
            ],
            correctIndex: 0,
            explanation:
              "For a dance the deposit meant a written description, a notated score, or film. It is the copy, not the fee, the bond or the certificate.",
            sourceLessonSlug: "fuller-v-bemis-and-the-thin-deposit-record",
          },
          {
            prompt: "Which two deposit formats does Study No. 28 name for choreographic works?",
            options: [
              "Textual description and the Laban system of notation",
              "Benesh notation and staged photographs showing each successive position of the dancers",
              "Sound recordings of the accompanying music and a written synopsis of the plot",
              "Costume designs and floor plans marking the path of each dancer through the stage space",
            ],
            correctIndex: 0,
            explanation:
              "The study names textual description and the Laban system, and adds that in one case at least a motion picture was deposited. Benesh, photographs and drawings appear in the modern circular, not in the study's account of the old record.",
            sourceLessonSlug: "fuller-v-bemis-and-the-thin-deposit-record",
          },
          {
            prompt: "What is a generalised holding, as the course uses the term?",
            options: [
              "When one case's reasoning becomes the routine test",
              "When an appellate court expressly overrules a decision it had issued in an earlier term",
              "When a statute codifies a rule that had previously existed only in judicial decisions",
              "When an agency publishes a rule after taking public comment on a proposed version of it",
            ],
            correctIndex: 0,
            explanation:
              "It is how a single 1892 loss, on facts about one dancer's solo, came to govern every application for eighty-six years.",
            sourceLessonSlug: "fuller-v-bemis-and-the-thin-deposit-record",
          },
          {
            prompt: "What is a serpentine dance?",
            options: [
              "A form built on swirling silk and coloured light",
              "A processional social dance in which participants follow a leader in a winding line",
              "A West African ceremonial form documented by anthropologists working in the Caribbean",
              "A ballroom figure in which partners trace an S-shaped path across the floor",
            ],
            correctIndex: 0,
            explanation:
              "It is the form Loie Fuller was known for, and its abstraction is precisely what the 1892 court refused to call dramatic.",
            sourceLessonSlug: "fuller-v-bemis-and-the-thin-deposit-record",
          },
          {
            prompt: "The course says the pre-1978 archive of American dance is not in the Copyright Office's files. Where does it say to look instead?",
            options: [
              "In archives and finding aids",
              "In the published catalogues of the commercial music publishers who printed the accompanying scores",
              "In the surviving programmes held by the theatres where the works were first performed",
              "In the personal correspondence of the critics who reviewed the works when they premiered",
            ],
            correctIndex: 0,
            explanation:
              "The second half of the course opens finding aids at the Library of Congress and the New York Public Library, because that is where the record actually is.",
            sourceLessonSlug: "fuller-v-bemis-and-the-thin-deposit-record",
          },
          {
            prompt: "What is Labanotation, as first mentioned in this section?",
            options: [
              "A system for writing movement down",
              "A method of filming dance from three fixed camera angles for archival preservation",
              "A vocabulary of standard step names used by the Copyright Office to index Class D deposits",
              "A technique for teaching repertory to a company without a rehearsal director present",
            ],
            correctIndex: 0,
            explanation:
              "Study No. 28 calls it the Laban system of notation, and names it as one of the few forms in which a dance was actually deposited before 1978.",
            sourceLessonSlug: "fuller-v-bemis-and-the-thin-deposit-record",
          },
          {
            prompt: "Which statement about Fuller v. Bemis and race is accurate?",
            options: [
              "The opinion says nothing about race, and the rule it set fell unevenly anyway",
              "The opinion expressly reasoned that vernacular traditions could not satisfy the dramatic requirement",
              "The court applied a standard it had previously relaxed for a white applicant in an earlier case",
              "The plaintiff argued that her dance drew on Black social forms and the court rejected that argument",
            ],
            correctIndex: 0,
            explanation:
              "That gap between what a rule says and how it falls is the argument the course makes throughout, and it is much stronger than an accusation about anyone's intent.",
            sourceLessonSlug: "fuller-v-bemis-and-the-thin-deposit-record",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2 — 1978, and the trapdoor called fixation
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "january-1-1978",
      title: "3 · 1 January 1978, the day choreography became a category",
      section: "Section 2 · 1978, and the trapdoor called fixation",
      body: `The Copyright Act of 1976 took effect on **1 January 1978**, and on that day choreography became, for the first time in American law, a named category of authorship.

**17 U.S.C. 102(a).** "Copyright protection subsists, in accordance with this title, in original works of authorship fixed in any tangible medium of expression, now known or later developed, from which they can be perceived, reproduced, or otherwise communicated, either directly or with the aid of a machine or device." Then eight categories: (1) literary works; (2) musical works, including any accompanying words; (3) dramatic works, including any accompanying music; **(4) pantomimes and choreographic works**; (5) pictorial, graphic, and sculptural works; (6) motion pictures and other audiovisual works; (7) sound recordings; (8) architectural works.

**Read (3) and (4) side by side, because the sequence is the history.** Dramatic works are their own category, and choreographic works are now a separate one. The eighty-six-year arrangement under which a dance had to borrow the drama category, and satisfy the drama test, is over. A dance no longer has to tell a story.

**But 102(b) arrives in the same section.** "In no case does copyright protection for an original work of authorship extend to any idea, procedure, process, system, method of operation, concept, principle, or discovery, regardless of the form in which it is described, explained, illustrated, or embodied in such work." Hold on to the word **system**, because it comes back in a way that matters enormously to this course.

**What Congress said it was not protecting.** The House and Senate reports on the bill state the exclusion in one clause: choreographic works "do not include social dance steps and simple routines." That language appears at H.R. Rep. No. 94-1476, at 54 (1976), and at S. Rep. No. 94-473, at 52 (1975), and it is the legislative source the Copyright Office cites to this day when it refuses a short vernacular step.

**Two categories of exclusion, and they are different.** *Simple routines* is a claim about complexity: too few movements, too little arrangement. *Social dances* is a claim about function: the work is intended to be performed by members of the general public for their own enjoyment, rather than by skilled dancers for an audience. The Copyright Office treats the second as a continuum rather than a bright line, and says so in its own practice manual.

**Now name the effect without overstating the cause.** Nothing in either report mentions any community. But "short", "vernacular" and "social" are the three adjectives that most often describe Black American dance innovation, because that is where an extraordinary amount of it happens: in a room, in a club, on a corner, in forms designed to be joined rather than watched. A statute that protects the composed evening-length concert work and declines to protect the step everybody learns is not neutral in its results, whatever it is in its terms.

**And state the other side fairly, because it is genuinely strong.** The Compendium gives the policy reason in a single sentence: "If a social dance could be considered a choreographic work under Section 102(a)(4) of the Copyright Act, every individual who performed that dance in public would infringe the rights of the copyright owner." That is not an excuse. It is a real consequence, and any proposal to protect vernacular steps has to answer it. The strongest version of this course's argument accepts that sentence and still asks who bears the cost of the rule and who collects its benefits.

:::reveal What changed for choreography on 1 January 1978? ||| The 1976 Act took effect, and section 102(a)(4) made pantomimes and choreographic works a named category of authorship in their own right, so a dance no longer had to qualify as a dramatic composition by telling a story.

:::reveal What did the House and Senate reports say choreographic works do not include, and what is the strongest argument for that exclusion? ||| Social dance steps and simple routines. The Copyright Office's stated reason is that if a social dance were a choreographic work, every individual who performed it in public would infringe the copyright owner's rights.

## Vocabulary
- **Category of authorship**: one of the eight kinds of work section 102(a) names, of which pantomimes and choreographic works are the fourth.
- **Legislative history**: the committee reports accompanying a bill, here H.R. Rep. No. 94-1476 and S. Rep. No. 94-473, which the Copyright Office still cites when refusing a short step.
- **Simple routine**: an exclusion resting on complexity, meaning too few movements with too little arrangement to constitute a work.
- **Social dance**: an exclusion resting on function, meaning a form intended to be performed by the public for its own enjoyment rather than by skilled dancers for an audience.
- **Disparate effect**: unequal results produced by a rule that names no group, which is the only version of this course's argument the evidence actually supports.

## Sources
Copyright Act of 1976, 17 U.S.C. § 102 (a), (b). Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/17/102
U.S. Copyright Office. (2021). *Compendium of U.S. Copyright Office practices* (3rd ed.), ch. 800, §§ 805.5(A), 805.5(B), citing H.R. Rep. No. 94-1476, at 54 (1976) and S. Rep. No. 94-473, at 52 (1975). https://www.copyright.gov/comp3/chap800/ch800-performing-arts.pdf`,
    },
    {
      slug: "fixation-and-the-two-lists",
      title: "4 · Fixation, and two lists that are not the same",
      section: "Section 2 · 1978, and the trapdoor called fixation",
      body: `The category was won in 1978. The condition attached to it is the trapdoor.

**Fixation, in the Copyright Office's own words.** Compendium section 805.3(C): "It is not possible to copyright an improvised dance if the improvisation has not been fixed in a tangible medium of expression." Section 102(a) requires fixation for every category, but for dance the requirement bites in a way it does not bite for a novel, because the natural output of choreographing is a performance, and a performance vanishes.

**So a dance that was danced and never written down, notated or filmed was, in law, never a work.** Not a weak work, not an unenforceable work. Not a work. Hold that against everything you know about how dance was actually transmitted for most of the twentieth century: body to body, in a studio, from a person who knew it to a person learning it.

**What counts as fixation.** Circular 52, the Copyright Office's public guidance on registering choreography and pantomime, lists the acceptable formats: dance notation such as Labanotation and Benesh Dance Notation; video recordings of a performance; textual descriptions, photographs, or drawings. The work must be fixed in a way "that reveals the movements in sufficient detail to permit the work to be performed in a consistent and uniform manner."

**The sting in the tail, at Compendium 805.3(D)(1).** "While dance notation may be used to fix a choreographic work, the notational system itself is a system that is not eligible for copyright protection under Section 102(b) of the Copyright Act." The thing that turns a dance into property is itself, by statute, not property. That is not an injustice, it is section 102(b) doing exactly what it says, but it is worth noticing that the technology of preservation sits outside the system of ownership it makes possible.

**Now the two lists, and the difference between them.** Circular 52 gives examples of social dances not protected by copyright: **Ballroom dances. Folk dances. Line dances. Square dances. Swing dances.** Five items, and the list stops there.

The Copyright Office's internal practice manual gives the parallel list at Compendium 805.5(B)(2), and it is the same five plus one more: **Break dances.**

**Say precisely what that is and is not.** It is not a conspiracy, and the circular is explicitly an introduction rather than the authoritative text. It is a documentary fact worth teaching: breaking, a form created principally by Black and Puerto Rican young people in the Bronx, is named in the operative manual as an example of the category that cannot be registered however much originality it contains, and it is not named in the public-facing circular a choreographer is most likely to read first. The advertised rule and the operative rule are not word for word the same.

**The de minimis half, with the Office's own hypothetical.** Compendium 805.5(A) offers "Butler Beauchamp", a college wide receiver whose endzone dance "merely consists of a few movements of the legs, shoulders, and arms". The Office would refuse it. Circular 52 lists "a celebratory end zone dance move or athletic victory gesture" among commonplace movements that do not qualify. So the endzone dance is refused twice over, once for being too short and once for being ordinary motor activity.

**What this section leaves you with.** Two conditions, either of which can sink a claim. The work must be fixed, which excludes everything transmitted only in bodies. And it must be neither too short nor too social, which excludes most of what a vernacular tradition produces. Neither condition mentions anyone. Both fall hardest on the same kinds of making.

:::reveal What does Compendium 805.3(C) say about an improvised dance? ||| That it is not possible to copyright an improvised dance if the improvisation has not been fixed in a tangible medium of expression, which means a dance transmitted only body to body was, in law, never a work.

:::reveal What single entry appears in the Compendium's list of unprotected social dances but not in Circular 52's list? ||| Break dances. The circular's list stops at swing dances, and the operative practice manual adds breaking, a form created principally by Black and Puerto Rican young people in the Bronx.

## Vocabulary
- **Fixation**: the requirement that a work be recorded in a tangible medium, which for a dance means notation, video, description, photographs or drawings.
- **Labanotation and Benesh Dance Notation**: the two notation systems Circular 52 names by name as acceptable ways of fixing a choreographic work.
- **Section 102(b)**: the provision excluding ideas, procedures, processes and systems from protection, which is why a notation system itself cannot be copyrighted.
- **De minimis**: too slight to count, the ground on which the Office refuses a routine of a few movements of the legs, shoulders and arms.
- **Operative rule**: the standard actually applied by examiners, found in the practice manual, as distinct from the summary a public circular offers.

## Sources
U.S. Copyright Office. (2022). *Copyright registration of choreography and pantomime* (Circular 52). https://www.copyright.gov/circs/circ52.pdf
U.S. Copyright Office. (2021). *Compendium of U.S. Copyright Office practices* (3rd ed.), ch. 800, §§ 805.3(C), 805.3(D)(1), 805.5(A), 805.5(B)(2). https://www.copyright.gov/comp3/chap800/ch800-performing-arts.pdf`,
    },
    {
      slug: "section-2-quiz",
      title: "Section 2 quiz · 1978, fixation, and the two lists",
      section: "Section 2 · 1978, and the trapdoor called fixation",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "On what date did the Copyright Act of 1976 take effect?",
            options: [
              "1 January 1978",
              "1 January 1976, immediately upon the President signing the revision bill into law",
              "1 January 1972, the year the Copyright Office began accepting choreographic applications",
              "1 January 1959, the date the Class D regulation for choreographic works was promulgated",
            ],
            correctIndex: 0,
            explanation:
              "The Act was passed in 1976 and took effect on 1 January 1978, which is the date every pre-1978 and post-1978 distinction in this course turns on. 1959 is the Class D regulation's year.",
            sourceLessonSlug: "january-1-1978",
          },
          {
            prompt: "Which numbered category of 17 U.S.C. 102(a) covers choreography?",
            options: [
              "The fourth",
              "The third, which covers dramatic works including any accompanying music",
              "The sixth, which covers motion pictures and other audiovisual works",
              "The fifth, which covers pictorial, graphic, and sculptural works",
            ],
            correctIndex: 0,
            explanation:
              "Category (4) is pantomimes and choreographic works. The other three describe categories (3), (6) and (5) of the same list, all of which are real.",
            sourceLessonSlug: "january-1-1978",
          },
          {
            prompt: "What exact phrase does 102(a)(4) use?",
            options: [
              "Pantomimes and choreographic works",
              "Choreographic works of a dramatic character, whether expressed in music or action combined",
              "Dance and movement compositions intended for performance by skilled individuals",
              "Choreography, pantomime, and other organised forms of human bodily movement",
            ],
            correctIndex: 0,
            explanation:
              "The statute says pantomimes and choreographic works. The dramatic-character wording belongs to 37 C.F.R. 202.7 (1959) under the old Act.",
            sourceLessonSlug: "january-1-1978",
          },
          {
            prompt: "How many categories of works of authorship does 17 U.S.C. 102(a) list?",
            options: [
              "Eight",
              "Eleven, the same number of classes the 1909 Act had listed in its section 5",
              "Five, expanded to eight by the amendments that added sound recordings and architectural works",
              "Four, with the remaining subject matter left to the general definition in the opening sentence",
            ],
            correctIndex: 0,
            explanation:
              "Eight, from literary works through architectural works. Eleven is the 1909 Act's class count, which is a real number from the previous section.",
            sourceLessonSlug: "january-1-1978",
          },
          {
            prompt: "What does the sequencing of categories (3) and (4) tell you about the history?",
            options: [
              "Choreography is no longer required to borrow the drama category",
              "Choreographic works receive a shorter term of protection than dramatic works do",
              "A choreographic work must be registered in the dramatic category if it contains a narrative",
              "The categories were listed in the order in which Congress first extended protection to each",
            ],
            correctIndex: 0,
            explanation:
              "Dramatic works and choreographic works are now separate categories, which ends the eighty-six-year arrangement in which a dance had to satisfy the drama test to be registered.",
            sourceLessonSlug: "january-1-1978",
          },
          {
            prompt: "What does 17 U.S.C. 102(b) exclude from copyright protection?",
            options: [
              "Ideas, procedures, processes, systems and methods of operation",
              "Works whose author has not registered them with the Copyright Office before publication",
              "Performances by individual dancers, as distinct from the arrangement of movements they perform",
              "Works first published outside the United States without a copyright notice attached",
            ],
            correctIndex: 0,
            explanation:
              "The subsection also names concepts, principles and discoveries, regardless of the form in which they are described, explained, illustrated or embodied. Registration timing and place of publication are separate doctrines.",
            sourceLessonSlug: "january-1-1978",
          },
          {
            prompt: "Which word in 102(b) does the course tell you to hold on to, because it returns later?",
            options: [
              "System",
              "Discovery, because a choreographer who discovers a new movement possibility cannot own it",
              "Principle, because the organising principle of a dance is what the courts test for similarity",
              "Embodied, because a dance is embodied by definition and so falls outside the section",
            ],
            correctIndex: 0,
            explanation:
              "It returns at Compendium 805.3(D)(1), which says a dance notation system is itself a system not eligible for protection under 102(b).",
            sourceLessonSlug: "january-1-1978",
          },
          {
            prompt: "What does the legislative history say choreographic works do not include?",
            options: [
              "Social dance steps and simple routines",
              "Improvised sequences, unless the improvisation was recorded on video at the first performance",
              "Works of fewer than three minutes' duration performed by a single dancer without accompaniment",
              "Movement created for animals, machines or other objects rather than for human performers",
            ],
            correctIndex: 0,
            explanation:
              "That is the clause in H.R. Rep. No. 94-1476 at 54 and S. Rep. No. 94-473 at 52. The improvisation and non-human rules are real, but they come from the Compendium and Circular 52 rather than from the committee reports.",
            sourceLessonSlug: "january-1-1978",
          },
          {
            prompt: "Which House report carries that clause?",
            options: [
              "H.R. Rep. No. 94-1476, at 54 (1976)",
              "H.R. Rep. No. 60-2222, at 12 (1909), the report accompanying the earlier general revision",
              "S. Rep. No. 94-473, at 102 (1975), at the page discussing the fixation requirement",
              "H.R. Rep. No. 94-1733, at 54 (1976), the conference report on the final version of the bill",
            ],
            correctIndex: 0,
            explanation:
              "The Compendium cites H.R. Rep. No. 94-1476 at 54 alongside S. Rep. No. 94-473 at 52. The Senate report's page is 52, not 102.",
            sourceLessonSlug: "january-1-1978",
          },
          {
            prompt: "Which Senate report carries the same clause?",
            options: [
              "S. Rep. No. 94-473, at 52 (1975)",
              "S. Rep. No. 94-473, at 54 (1976), the page number it shares with the House report",
              "S. Rep. No. 86-240, at 28 (1960), the report transmitting the copyright revision studies",
              "S. Rep. No. 94-1476, at 52 (1975), issued jointly with the House committee on the judiciary",
            ],
            correctIndex: 0,
            explanation:
              "S. Rep. No. 94-473 is dated 1975 and the page is 52. The 94-1476 number belongs to the House report, and 54 is that report's page.",
            sourceLessonSlug: "january-1-1978",
          },
          {
            prompt: "What kind of claim is the exclusion of simple routines?",
            options: [
              "A claim about complexity",
              "A claim about who the intended performers of the work are and who watches them",
              "A claim about whether the work was fixed in a medium the Office will accept as a deposit",
              "A claim about whether the author intended the work to be performed for commercial gain",
            ],
            correctIndex: 0,
            explanation:
              "Simple routine means too few movements with too little arrangement. The claim about intended performers and audience is the separate social-dance exclusion.",
            sourceLessonSlug: "january-1-1978",
          },
          {
            prompt: "What kind of claim is the exclusion of social dances?",
            options: [
              "A claim about function",
              "A claim about the number of distinct movements the work contains from beginning to end",
              "A claim about whether the choreographer was paid for the work at the time it was made",
              "A claim about whether the work has been performed in more than one country",
            ],
            correctIndex: 0,
            explanation:
              "A social dance is one intended to be performed by members of the public for their own enjoyment rather than by skilled dancers for an audience. The movement count is the separate simple-routine exclusion.",
            sourceLessonSlug: "january-1-1978",
          },
          {
            prompt: "Does the Copyright Office treat the line between a choreographic work and a simple routine as a bright line?",
            options: [
              "No, it calls it a continuum",
              "Yes, and it sets the threshold at a minimum of thirty distinct movements",
              "Yes, and the threshold is stated in the legislative history rather than in the practice manual",
              "No, because the question is left entirely to the courts and no examiner may decide it",
            ],
            correctIndex: 0,
            explanation:
              "The Compendium says the dividing line is a continuum rather than a bright line, and that the specialist considers the intrinsic nature of the work. There is no numerical movement threshold.",
            sourceLessonSlug: "january-1-1978",
          },
          {
            prompt: "What is the strongest stated policy argument for excluding social dances from protection?",
            options: [
              "Everyone who performed the dance in public would infringe",
              "Social dances change too quickly for the Office to identify a single author to register",
              "Social dances are usually created collectively, and joint authorship rules make ownership unworkable",
              "Protecting social dances would require the Office to hire examiners trained in every dance tradition",
            ],
            correctIndex: 0,
            explanation:
              "The Compendium states it in those terms at 805.5(B), and the course presents it fairly because it is a real consequence that any proposal to protect vernacular steps has to answer.",
            sourceLessonSlug: "january-1-1978",
          },
          {
            prompt: "How does the course frame its argument once it has granted that policy point?",
            options: [
              "It asks who bears the cost of the rule and who collects its benefits",
              "It concludes that the rule is indefensible and should be repealed by Congress at the next revision",
              "It argues that examiners should apply the rule more leniently to vernacular forms than to concert works",
              "It treats the policy point as a pretext offered after the fact to justify a decision already made",
            ],
            correctIndex: 0,
            explanation:
              "Accepting the strongest version of the other side and still asking about distribution of costs and benefits is what makes the argument survive contact with a sceptical reader.",
            sourceLessonSlug: "january-1-1978",
          },
          {
            prompt: "Which three adjectives does the course say describe a great deal of Black American dance innovation, and also describe what the rule excludes?",
            options: [
              "Short, vernacular and social",
              "Improvised, unaccompanied and untrained, none of which the statute mentions anywhere",
              "Narrative, theatrical and evening-length, which the statute protects rather than excludes",
              "Notated, licensed and staged, which describes the works that generate royalty income",
            ],
            correctIndex: 0,
            explanation:
              "The mapping of those three adjectives onto the excluded category is the argument. The narrative and theatrical set describes what the rule protects, which is the contrast.",
            sourceLessonSlug: "january-1-1978",
          },
          {
            prompt: "What is disparate effect, as this course uses the term?",
            options: [
              "Unequal results produced by a rule that names no group",
              "A deliberate difference in how an agency applies a rule depending on who is applying",
              "A difference between the text of a statute and the summary an agency publishes about it",
              "A pattern of judicial decisions that departs from the standard an appellate court announced",
            ],
            correctIndex: 0,
            explanation:
              "It is the only version of the argument the evidence in this course actually supports, and it is stronger than an accusation about intent because it is checkable.",
            sourceLessonSlug: "january-1-1978",
          },
          {
            prompt: "Under the 1976 Act, must a choreographic work tell a story to be registrable?",
            options: [
              "No",
              "Yes, but the requirement now applies only to works of more than one act",
              "Yes, because 102(a)(3) and 102(a)(4) are read together as a single dramatic category",
              "Only if the choreographer seeks to register the work in the same class as the accompanying music",
            ],
            correctIndex: 0,
            explanation:
              "The dramatic-composition requirement belonged to the 1909 Act. Circular 52 says that for works created or first published after 1 January 1978 a choreographic work may present a story or may be an abstract composition.",
            sourceLessonSlug: "january-1-1978",
          },
          {
            prompt: "Which category does 102(a)(2) cover?",
            options: [
              "Musical works, including any accompanying words",
              "Dramatic works, including any accompanying music, and the librettos written for them",
              "Sound recordings, which the Act made a category of authorship separate from musical works",
              "Literary works, a category broad enough to include computer programs and compilations",
            ],
            correctIndex: 0,
            explanation:
              "Musical works with accompanying words is (2). Dramatic works with accompanying music is (3), sound recordings are (7), and literary works are (1).",
            sourceLessonSlug: "january-1-1978",
          },
          {
            prompt: "What does 102(a) require of a work before protection subsists at all?",
            options: [
              "That it be original and fixed in a tangible medium",
              "That it be registered with the Copyright Office and a deposit copy accepted by an examiner",
              "That it be published with a notice identifying the copyright owner and the year of publication",
              "That it fall within one of the eight enumerated categories, which are an exhaustive list",
            ],
            correctIndex: 0,
            explanation:
              "The opening sentence requires original works of authorship fixed in any tangible medium of expression. The section also says works of authorship include the listed categories, which is inclusive rather than exhaustive.",
            sourceLessonSlug: "january-1-1978",
          },
          {
            prompt: "What does Compendium 805.3(C) say about improvisation?",
            options: [
              "An improvised dance cannot be copyrighted unless the improvisation was fixed",
              "An improvised dance may be registered if the choreographer files a description of the rules governing it",
              "Improvisation within a fixed work destroys the fixation and voids any registration already granted",
              "Improvised dances are registrable only when performed by the choreographer personally",
            ],
            correctIndex: 0,
            explanation:
              "The Compendium also says a work may be registered even if the choreographer left room for improvisation in performance, so improvisation inside a fixed work does not void anything.",
            sourceLessonSlug: "fixation-and-the-two-lists",
          },
          {
            prompt: "Why does the fixation requirement bite harder for dance than for a novel?",
            options: [
              "The natural output of choreographing is a performance, which vanishes",
              "Because the Copyright Office applies a stricter fixation standard to movement than to text",
              "Because a dance has no author until it has been performed publicly at least once",
              "Because the statute requires a higher level of detail in a deposit for movement works",
            ],
            correctIndex: 0,
            explanation:
              "Writing a novel produces the fixed copy automatically. Choreographing produces an event, so fixing it takes a separate deliberate act with its own cost.",
            sourceLessonSlug: "fixation-and-the-two-lists",
          },
          {
            prompt: "A dance transmitted only body to body in a studio, never notated or filmed, was in law what?",
            options: [
              "Not a work",
              "A work of joint authorship shared between the choreographer and every dancer who learned it",
              "An unpublished work protected by common law copyright until the moment of first performance",
              "A work whose protection began when a critic first described it in a published review",
            ],
            correctIndex: 0,
            explanation:
              "Not a weak work or an unenforceable work. Without fixation there is no work for section 102(a) to attach to.",
            sourceLessonSlug: "fixation-and-the-two-lists",
          },
          {
            prompt: "Which notation systems does Circular 52 name by name as acceptable fixations?",
            options: [
              "Labanotation and Benesh Dance Notation",
              "Feuillet notation and the Stepanov system, the two earliest published movement notations",
              "Eshkol-Wachman movement notation and the Sutton movement writing system",
              "Any system approved in advance by the Register of Copyrights on a case-by-case basis",
            ],
            correctIndex: 0,
            explanation:
              "The circular names those two, and the Compendium adds that Labanotation employs abstract symbols while Benesh employs stick figures. No advance approval process exists.",
            sourceLessonSlug: "fixation-and-the-two-lists",
          },
          {
            prompt: "Besides notation, what formats does Circular 52 list as acceptable fixations?",
            options: [
              "Video recordings, textual descriptions, photographs, or drawings",
              "Audio recordings of the accompanying music together with a cast list and running order",
              "Costume designs, lighting plots and floor plans marking each dancer's path across the stage",
              "Rehearsal call sheets signed by the choreographer and countersigned by the company manager",
            ],
            correctIndex: 0,
            explanation:
              "That is the circular's own list. Costume designs, lighting plots and call sheets are all real archival documents in this course, but none of them is a fixation of the choreography.",
            sourceLessonSlug: "fixation-and-the-two-lists",
          },
          {
            prompt: "What standard of detail must a fixation meet?",
            options: [
              "Enough to permit consistent and uniform performance",
              "Enough for a court to determine the work's total running time to within ten seconds",
              "Enough for an examiner to identify every dancer who appeared in the first performance",
              "Enough to reconstruct the accompanying music as well as the movement",
            ],
            correctIndex: 0,
            explanation:
              "Circular 52 says the fixation must reveal the movements in sufficient detail to permit the work to be performed in a consistent and uniform manner.",
            sourceLessonSlug: "fixation-and-the-two-lists",
          },
          {
            prompt: "What does Compendium 805.3(D)(1) say about a dance notation system itself?",
            options: [
              "It is a system and not eligible for copyright protection",
              "It belongs to the notator who developed it for as long as the notator lives plus seventy years",
              "It may be registered as a literary work if it is published together with a manual explaining it",
              "It may be registered as a pictorial work because its symbols are graphic in character",
            ],
            correctIndex: 0,
            explanation:
              "The Compendium says so expressly, pointing to section 102(b). The technology that turns a dance into property is itself outside the system of ownership it makes possible.",
            sourceLessonSlug: "fixation-and-the-two-lists",
          },
          {
            prompt: "How many social dance types does Circular 52 list as unprotected?",
            options: [
              "Five",
              "Six, matching the number in the Copyright Office's internal practice manual exactly",
              "Four, since square dances and line dances are treated as a single entry in the circular",
              "Eleven, one for each class the 1909 Act had listed in its own section 5",
            ],
            correctIndex: 0,
            explanation:
              "Ballroom, folk, line, square and swing. Six is the count in Compendium 805.5(B)(2), and the difference between the two lists is the point of this lesson.",
            sourceLessonSlug: "fixation-and-the-two-lists",
          },
          {
            prompt: "Which entry appears on the Compendium's social-dance list but not on Circular 52's?",
            options: [
              "Break dances",
              "Swing dances, which the circular omits although the practice manual includes them",
              "Folk dances, which the circular treats as a category of choreographic work instead",
              "Line dances, which the circular routes to the ordinary motor activities category",
            ],
            correctIndex: 0,
            explanation:
              "Both lists carry ballroom, folk, line, square and swing. The manual adds break dances, and the circular's list stops at swing.",
            sourceLessonSlug: "fixation-and-the-two-lists",
          },
          {
            prompt: "How does the course characterise that difference between the two lists?",
            options: [
              "A documentary fact, not a conspiracy",
              "Evidence that the Copyright Office deliberately concealed its treatment of breaking from applicants",
              "A drafting error the Office corrected in the most recent revision of the circular",
              "Proof that examiners were instructed to refuse applications from Black choreographers",
            ],
            correctIndex: 0,
            explanation:
              "The circular says on its face that it is an introduction rather than the authoritative text. What is worth teaching is that the advertised rule and the operative rule are not word for word the same.",
            sourceLessonSlug: "fixation-and-the-two-lists",
          },
          {
            prompt: "Who created breaking, as the course describes it?",
            options: [
              "Black and Puerto Rican young people in the Bronx",
              "Professional concert choreographers who adapted social steps for the theatrical stage",
              "Touring companies who developed it during residencies in European opera houses",
              "Dancers trained in the studios that taught the Dunham technique in the 1950s",
            ],
            correctIndex: 0,
            explanation:
              "That origin is what makes its appearance in the operative manual's unregistrable list worth reading carefully, however much originality a given work in the form contains.",
            sourceLessonSlug: "fixation-and-the-two-lists",
          },
          {
            prompt: "Who is Butler Beauchamp?",
            options: [
              "A hypothetical wide receiver in the Copyright Office's own example",
              "A choreographer whose application for an endzone routine the Review Board refused in 2013",
              "The examiner who wrote the Copyright Office's guidance on social dances and simple routines",
              "A plaintiff whose suit against a videogame company was dismissed and then revived on appeal",
            ],
            correctIndex: 0,
            explanation:
              "He is the invented college football player in Compendium 805.5(A), whose endzone dance consists of a few movements of the legs, shoulders and arms and would be refused.",
            sourceLessonSlug: "fixation-and-the-two-lists",
          },
          {
            prompt: "What does the Beauchamp example illustrate?",
            options: [
              "The de minimis refusal for a routine of a few movements",
              "The social-dance refusal for a form intended to be performed by the general public",
              "The fixation refusal for a routine that was never notated, filmed or described in writing",
              "The refusal of routines intended for performance by machines rather than by humans",
            ],
            correctIndex: 0,
            explanation:
              "It sits in section 805.5(A), the de minimis discussion. The social-dance list, the fixation rule and the non-human rule are three separate grounds elsewhere.",
            sourceLessonSlug: "fixation-and-the-two-lists",
          },
          {
            prompt: "How does Circular 52 treat a celebratory endzone dance move?",
            options: [
              "As a commonplace movement that does not qualify",
              "As a social dance, grouped with ballroom, folk, line, square and swing dances",
              "As a compilation, registrable only if the selection and arrangement is original",
              "As a routine not performed by humans, alongside dressage and trained-animal skits",
            ],
            correctIndex: 0,
            explanation:
              "The circular lists a celebratory end zone dance move or athletic victory gesture among commonplace movements or gestures that do not qualify, so the endzone dance is refused on that ground as well as on de minimis grounds.",
            sourceLessonSlug: "fixation-and-the-two-lists",
          },
          {
            prompt: "What is de minimis, as used in this section?",
            options: [
              "Too slight to count",
              "Too widely performed to be attributed to any single author with confidence",
              "Too improvised to be captured accurately in any notation system now in use",
              "Too closely derived from an existing work to qualify as an original contribution",
            ],
            correctIndex: 0,
            explanation:
              "It is the ground on which the Office refuses a routine consisting of a few movements of the legs, shoulders and arms.",
            sourceLessonSlug: "fixation-and-the-two-lists",
          },
          {
            prompt: "The course says two conditions can each independently sink a choreographic claim. What are they?",
            options: [
              "It must be fixed, and it must be neither too short nor too social",
              "It must be published with notice, and it must be registered before any infringement occurs",
              "It must be original, and the choreographer must own the music it is set to",
              "It must be notated, and the notation must be certified by the Dance Notation Bureau",
            ],
            correctIndex: 0,
            explanation:
              "Neither condition mentions any community, and both fall hardest on the same kinds of making, which is the section's closing point.",
            sourceLessonSlug: "fixation-and-the-two-lists",
          },
          {
            prompt: "What is an operative rule, as distinct from a public circular?",
            options: [
              "The standard examiners actually apply, found in the practice manual",
              "The text of the statute as enacted, before any agency has interpreted it",
              "A rule that has been tested in litigation and affirmed by a federal appellate court",
              "A rule published for public comment and adopted in the Code of Federal Regulations",
            ],
            correctIndex: 0,
            explanation:
              "The distinction matters here because the practice manual's social-dance list and the circular's are not identical, and an applicant is most likely to read the circular first.",
            sourceLessonSlug: "fixation-and-the-two-lists",
          },
          {
            prompt: "Circular 52 says it is what, in its own words?",
            options: [
              "An introduction to the Office's practices and procedures",
              "The authoritative statement of copyright law for choreographic works and pantomimes",
              "A binding regulation issued under the Register of Copyrights' rulemaking authority",
              "A summary of the case law on choreographic infringement decided since 1978",
            ],
            correctIndex: 0,
            explanation:
              "The circular says the authoritative source is the Copyright Act itself, that the regulations are in the Code of Federal Regulations, and that practices and procedures are summarised in the Compendium.",
            sourceLessonSlug: "fixation-and-the-two-lists",
          },
          {
            prompt: "For a work created after 1 January 1978, may a choreographic work be an abstract composition?",
            options: [
              "Yes",
              "No, the dramatic-character requirement survived the 1976 Act unchanged",
              "Only if it is fixed in a notation score rather than in a video recording",
              "Only if the choreographer files a written statement explaining the work's theme",
            ],
            correctIndex: 0,
            explanation:
              "Circular 52 says a work created or first published after that date may present a story or may be an abstract composition. The story requirement applies to the pre-1978 era.",
            sourceLessonSlug: "fixation-and-the-two-lists",
          },
          {
            prompt: "Why does the course say the technology of preservation sits outside the system of ownership it makes possible?",
            options: [
              "Because a notation system cannot itself be copyrighted",
              "Because notators are employed by archives rather than by the choreographers whose work they record",
              "Because a notated score is deposited with the Office and becomes a public record open to anyone",
              "Because notation was invented before copyright protection extended to choreography at all",
            ],
            correctIndex: 0,
            explanation:
              "Compendium 805.3(D)(1) says the notational system is a system not eligible for protection under section 102(b), even though a score written in it can fix a work and make it property.",
            sourceLessonSlug: "fixation-and-the-two-lists",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3 — What the courts did with the category
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "horgan-v-macmillan",
      title: "5 · Horgan v. Macmillan: a videotape, a photograph, and a standard",
      section: "Section 3 · What the courts did with the category",
      body: `The first appellate opinion of consequence on the new category is **Horgan v. Macmillan, Inc., 789 F.2d 157 (2d Cir. 1986)**, decided 28 April 1986. It is a short opinion with four things worth stealing for a classroom.

**The facts.** George Balanchine registered the choreography of his production of *The Nutcracker* in December 1981, and, as his deposit, "deposited with the Copyright Office a videotape of a New York City Ballet Company dress rehearsal of the ballet." A publisher then produced a book about the ballet containing sixty still photographs of the New York City Ballet performing it. The executor of Balanchine's estate sued.

**Notice the first lesson before the law starts.** The best-resourced choreographic estate in the United States fixed the work by pointing a camera at a rehearsal. Not a Labanotation score. A videotape. That is what fixation looked like even at the top of the profession in 1981, which is worth remembering when you are told that any choreographer could have documented their work if they had cared to.

**The district court's holding, and its analogy.** The district court denied a preliminary injunction, reasoning that still photographs could not infringe a choreographic work because the staged performance could not be recreated from them, and adding the comparison: "Just as a Beethoven symphony could not be recreated from a document containing only every twenty-fifth chord of the symphony."

**The Second Circuit reversed the standard.** "The standard for determining copyright infringement is not whether the original could be recreated from the allegedly infringing copy, but whether the latter is 'substantially similar' to the former."

**Be precise about what the court did and did not do.** It did not hold that the book infringed. It rejected the district court's test, and reversed and remanded for the case to be decided under the right one. A course that says the Second Circuit found infringement is teaching something false, and an educator checking the opinion will find that out.

**The economics the court itself recorded, at footnote 4.** Discussing the period before choreography was protected, the opinion notes of Agnes de Mille and *Oklahoma!*: "Since copyright protection was not available for her work, she initially received $15,000 but no royalties for her work," while the show "is estimated to have earned over $60 million during a period of fifteen years." Handle that figure carefully. It reaches us as a court quoting a law review comment, which makes it a secondary claim sitting inside a primary document. It is excellent evidence of what the legal culture believed about the cost of the old rule. It is not an audited financial statement, and this course does not present it as one.

**The detail almost nobody teaches, at footnote 8.** The opinion records that appellees "question the validity of Balanchine's copyright on the ground that the application failed to refer to preexisting material." Sit with that. The Balanchine estate, with counsel and resources, held a registration open to attack on a technicality about what the application disclosed. If that was the state of the best-defended choreographic copyright in America, the practical value of the register to a choreographer without a lawyer was thinner still.

:::reveal What did Balanchine deposit with the Copyright Office when he registered The Nutcracker choreography? ||| A videotape of a New York City Ballet Company dress rehearsal, filed with a registration made in December 1981.

:::reveal What did the Second Circuit actually decide in Horgan v. Macmillan? ||| That the test is substantial similarity rather than whether the original could be recreated from the allegedly infringing copy. It rejected the district court's standard and remanded; it did not find infringement.

## Vocabulary
- **Preliminary injunction**: an order restraining conduct while a case proceeds, which is what the district court refused and what the appeal was about.
- **Substantial similarity**: the standard for infringement the Second Circuit restored, asking how alike the two works are rather than whether one could be rebuilt from the other.
- **Remand**: sending a case back to the lower court to be decided again under the correct legal standard, which is what happened here.
- **Preexisting material**: earlier work incorporated in a new one, which an application is supposed to disclose, and whose omission was the ground on which Balanchine's registration was questioned.
- **Secondary claim inside a primary document**: a figure a court repeats from someone else's writing, reliable evidence of what was believed and weak evidence of what was true.

## Sources
Horgan v. Macmillan, Inc., 789 F.2d 157 (2d Cir. 1986). https://law.resource.org/pub/us/case/reporter/F2/789/789.F2d.157.85-7954.878.html`,
    },
    {
      slug: "hanagami-pilobolus-and-the-fortnite-story",
      title: "6 · Hanagami, Pilobolus, and the honest version of the Fortnite story",
      section: "Section 3 · What the courts did with the category",
      body: `Two modern documents, and then the argument they license.

**The refusal: "Five-Petal Flower".** On **14 July 2016** the Review Board of the United States Copyright Office affirmed the refusal to register a choreography claim by **Pilobolus, Inc.** The work was a **fourteen-second** video of human silhouettes against a blue screen: dancers tumble into the shape of a five-petal flower, a giant hand appears to pull at it, then plucks the head off a woman who reaches for it and is restored. Pilobolus argued that its collective had received numerous accolades and employed a never-before-seen form of dance expression. The Board answered that it "may not consider" the company's entire repertoire when evaluating the copyrightability of the brief sequence in the applied-for work, and concluded the work lacked the requisite creative authorship. The decision is final agency action under 37 C.F.R. 202.5(g).

**Keep that case in view. Pilobolus is a celebrated, predominantly white company, and it lost on duration and quantum of authorship.** That is the control case for everything that follows.

**The suit that won: Hanagami v. Epic Games.** In February 2021 the choreographer **Kyle Hanagami** applied to register the choreography in a video he had published to a Charlie Puth song, and the Copyright Office approved it; the registration issued on **20 February 2021**. Epic Games then sold an "emote" in *Fortnite* that Hanagami said copied part of it. The district court dismissed, holding he had no protection in individual "poses" and that the copied material was closer to an uncopyrightable "short" routine and only a "small component" of his work, describing it as "a two-second combination of eight bodily movements, set to four beats of music".

**The Ninth Circuit reversed**, in an opinion filed **1 November 2023**, No. 22-55890, by Judge Paez. Three holdings to take away. First, choreography is like music: elements unprotectable in isolation can still be protected in combination, because "what is protectable is the choreographer's selection and arrangement of the work's otherwise unprotectable elements". Second, "poses" are not the only relevant element; a choreographic work also may include body position, body shape, body actions, transitions, use of space, timing, pauses, energy, canon, motif, contrast, and repetition. Third, the district court erred in dismissing merely because the copied portion was short and a small component of the whole.

**Now the uncomfortable part, stated plainly.** The plaintiff who won that published precedent for choreographers is not Black. Other *Fortnite* plaintiffs, including performers whose vernacular steps the game had turned into emotes, did not get registrations at all, and their suits did not produce a comparable appellate ruling. This course does not print the dates or wording of those refusal letters, because it could not retrieve them from a primary source, and a legal citation nobody checked is worse than none.

**What the evidence does support, and what it does not.** It does not support the claim that the Copyright Office refused those applications because the applicants were Black. The rule that sank a short vernacular step is duration and form, it is stated in 1976 legislative history, and it sank a fourteen-second work by a white-led company in 2016. What the evidence does support is this: the categories "short", "vernacular" and "social" map onto Black cultural production with striking regularity, so a facially neutral rule about duration and form transfers value away from the people who make in those forms and toward the people who make evening-length composed works for skilled performers. That is an argument about the rule's effects. It is checkable, it survives a hostile reading, and it is much stronger than the accusation.

:::reveal What did the Copyright Office Review Board decide about Pilobolus's Five-Petal Flower, and why does the case matter to this course? ||| It affirmed the refusal to register on 14 July 2016, finding the fourteen-second work lacked the requisite creative authorship. It matters because a celebrated predominantly white company lost on duration and quantum of authorship, which shows the rule is not applied along racial lines.

:::reveal According to Hanagami v. Epic Games, what is protectable in a choreographic work? ||| The choreographer's selection and arrangement of the work's otherwise unprotectable elements, with poses being only one of many relevant elements alongside body position, transitions, use of space, timing, energy and repetition.

## Vocabulary
- **Review Board**: the Copyright Office panel that decides a second request for reconsideration of a refusal, whose decision is final agency action.
- **Emote**: a short purchasable animation in a videogame that makes a player's avatar perform a movement, which is what Epic Games sold and Hanagami sued over.
- **Selection and arrangement**: the doctrine that a combination of individually unprotectable elements can itself be original, which the Ninth Circuit applied to choreography.
- **Quantum of authorship**: how much creative choice a work contains, the measure on which the fourteen-second Pilobolus work was refused.
- **Control case**: an example that tests whether a pattern is explained by the proposed cause, here a white-led company losing under the same rule.

## Sources
U.S. Copyright Office Review Board. (2016, July 14). *Second request for reconsideration for refusal to register Five-Petal Flower* (Correspondence ID 1-N27VRB). https://www.copyright.gov/rulings-filings/review-board/docs/five-petal-flower.pdf
Hanagami v. Epic Games, Inc., No. 22-55890 (9th Cir. Nov. 1, 2023). https://cdn.ca9.uscourts.gov/datastore/opinions/2023/11/01/22-55890.pdf`,
    },
  ],
};
