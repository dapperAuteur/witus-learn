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
Copyright Act of 1909, § 5 [Full text]. U.S. Copyright Office. https://www.copyright.gov/history/1909act.pdf
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
          {
            prompt: "Which class in section 5 of the 1909 Act covered lectures and sermons?",
            options: [
              "Class C",
              "Class D, which the Copyright Office also used for choreographic works of a dramatic character",
              "Class A, which covered books including composite and cyclopaedic works and directories",
              "Class E, which covered musical compositions of every kind under the same statute",
            ],
            correctIndex: 0,
            explanation:
              "Class (c) covers lectures, sermons and addresses prepared for oral delivery. Class (d) is dramatic compositions, (a) is books and (e) is musical compositions.",
            sourceLessonSlug: "class-d-the-dance-that-had-to-pass-as-a-play",
          },
          {
            prompt: "Under the pre-1978 rule, what happened to a dance built on rhythm and participation rather than narrative?",
            options: [
              "It failed the test and could not be registered",
              "It was registered in a separate class the Office created for non-dramatic movement works",
              "It was registered provisionally, subject to a later showing that it conveyed a theme",
              "It was registered as a musical composition, since rhythm was its organising principle",
            ],
            correctIndex: 0,
            explanation:
              "A test that admits story and refuses everything else sorts by form, and there was no alternative class, provisional route, or musical workaround for a plotless dance.",
            sourceLessonSlug: "class-d-the-dance-that-had-to-pass-as-a-play",
          },
          {
            prompt: "Where does the exact Class D language quoted in this course come from?",
            options: [
              "The practice manual, quoting the 1959 regulation",
              "The text of section 5 of the 1909 Act, which uses the phrase choreographic work",
              "The opinion in Fuller v. Bemis, which coined the phrase dramatic character",
              "A Senate committee report accompanying the general revision of 1976",
            ],
            correctIndex: 0,
            explanation:
              "Compendium chapter 2100, section 2122.3, quotes 37 C.F.R. 202.7 (1959) verbatim. The 1909 Act itself never uses the word choreographic anywhere.",
            sourceLessonSlug: "class-d-the-dance-that-had-to-pass-as-a-play",
          },
          {
            prompt: "What follows from the fact that section 5's proviso protects an applicant who registers in the wrong class?",
            options: [
              "Classification was never meant to decide what could be protected",
              "An applicant could bypass the Copyright Office entirely by choosing any class at random",
              "The Copyright Office had no authority to refuse an application on any ground",
              "A work registered in the wrong class received a shorter term of protection",
            ],
            correctIndex: 0,
            explanation:
              "The proviso says an error in classification does not invalidate or impair protection, which is why the exclusion of dance had to be built somewhere other than in the class list.",
            sourceLessonSlug: "class-d-the-dance-that-had-to-pass-as-a-play",
          },
          {
            prompt: "Which of these is class (k) in section 5 of the 1909 Act?",
            options: [
              "Prints and pictorial illustrations",
              "Reproductions of a work of art, listed as a class distinct from works of art themselves",
              "Drawings or plastic works of a scientific or technical character",
              "Lectures, sermons and addresses prepared for oral delivery to an audience",
            ],
            correctIndex: 0,
            explanation:
              "Class (k) is the last in the list. Reproductions are (h), scientific drawings are (i) and lectures are (c).",
            sourceLessonSlug: "class-d-the-dance-that-had-to-pass-as-a-play",
          },
          {
            prompt: "What is the difference between the 1909 Act's silence about dance and an express prohibition?",
            options: [
              "Silence left room for discretion; a prohibition would not have",
              "Silence meant a court could not hear an infringement suit about a dance at all",
              "Silence meant the Copyright Office was legally obliged to register any dance filed",
              "There is no practical difference, because both produced identical refusals",
            ],
            correctIndex: 0,
            explanation:
              "The statute neither required nor forbade registering a dance, so the rule was built by the agency and the courts in the space that silence created.",
            sourceLessonSlug: "class-d-the-dance-that-had-to-pass-as-a-play",
          },
          {
            prompt: "Which edition of the Compendium of U.S. Copyright Office Practices does this course quote?",
            options: [
              "The third",
              "The second, which the Second Circuit quoted in its 1986 choreography opinion",
              "The first, issued shortly after the 1909 Act took effect",
              "A draft fourth edition circulated for public comment but never adopted",
            ],
            correctIndex: 0,
            explanation:
              "The third edition. The second edition is real and is quoted inside the 1986 opinion, which is what makes it a plausible wrong answer.",
            sourceLessonSlug: "class-d-the-dance-that-had-to-pass-as-a-play",
          },
          {
            prompt: "Under the 1909 regime, could a dance be registered if it conveyed an emotion but told no story?",
            options: [
              "Yes, expressing a theme or emotion satisfied the test",
              "No, only a work with a narrative sequence of events could reach Class D",
              "No, unless the choreographer also deposited the accompanying musical score",
              "Yes, but only for works first published outside the United States",
            ],
            correctIndex: 0,
            explanation:
              "The formulation is tell a story, develop a character, or express a theme or emotion by means of specific movements and physical actions. Any one of the three sufficed.",
            sourceLessonSlug: "class-d-the-dance-that-had-to-pass-as-a-play",
          },
          {
            prompt: "In Fuller v. Bemis, how did the court treat the arrangement of drapery, lights and shadows?",
            options: [
              "As part of a series of graceful movements it found not dramatic",
              "As lighting design separately copyrightable as a pictorial work",
              "As sufficient to convey a dramatic theme after all",
              "As irrelevant, holding that only movement itself could be examined",
            ],
            correctIndex: 0,
            explanation:
              "The quoted passage describes a series of graceful movements combined with an attractive arrangement of drapery, lights and shadows, and then finds the whole not dramatic.",
            sourceLessonSlug: "fuller-v-bemis-and-the-thin-deposit-record",
          },
          {
            prompt: "What kind of court decided Fuller v. Bemis?",
            options: [
              "A federal circuit court in the Southern District of New York",
              "The Supreme Court of the United States, on a writ of error from a state court",
              "The New York state trial court of general jurisdiction in Manhattan",
              "The Copyright Office Review Board, exercising its reconsideration authority",
            ],
            correctIndex: 0,
            explanation:
              "The citation C.C.S.D.N.Y. denotes the circuit court for the Southern District of New York. The Review Board is a modern agency panel and did not exist in 1892.",
            sourceLessonSlug: "fuller-v-bemis-and-the-thin-deposit-record",
          },
          {
            prompt: "What does this course say about the claim that Black choreographers were absent from a register full of white ones?",
            options: [
              "It describes a register that did not exist",
              "It is the strongest available version of the course's argument about credit",
              "It is accurate for the period after 1978 but not for the period before it",
              "It can be settled by counting the Class D deposits the Office still holds",
            ],
            correctIndex: 0,
            explanation:
              "Study No. 28 shows the pre-1978 deposit record was thin for everyone, so the comparison the claim depends on has no basis.",
            sourceLessonSlug: "fuller-v-bemis-and-the-thin-deposit-record",
          },
          {
            prompt: "Why does the course make the fairness point about deposit numbers before it makes the racial one?",
            options: [
              "Because an argument that survives the strongest objection is the durable one",
              "Because the racial argument turns out to be unsupported by any evidence at all",
              "Because the Copyright Office asked that the point be made in that order",
              "Because deposit counts are the only reliable evidence in the whole field",
            ],
            correctIndex: 0,
            explanation:
              "Conceding the thinness of the register for everyone is what makes the later claim about archives, notation and money credible rather than rhetorical.",
            sourceLessonSlug: "fuller-v-bemis-and-the-thin-deposit-record",
          },
          {
            prompt: "How should a careful reader treat the differing 1960 and 1961 dates for Study No. 28?",
            options: [
              "Report both, since both are the Copyright Office's own",
              "Pick 1961, because the later date supersedes the earlier one automatically",
              "Pick 1960, because chapter 2100 is the more recently revised of the two chapters",
              "Omit the study entirely, because a source that cannot date itself is unusable",
            ],
            correctIndex: 0,
            explanation:
              "Where a source cannot settle its own date, saying so is the honest move. The study is otherwise a perfectly good primary document.",
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
U.S. Copyright Office. (n.d.). *Copyright registration of choreography and pantomime* (Circular 52). https://www.copyright.gov/circs/circ52.pdf
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
          {
            prompt: "Which category does 102(a)(8) cover?",
            options: [
              "Architectural works",
              "Sound recordings, which the Act separated from the musical works they capture",
              "Motion pictures and other audiovisual works of every description",
              "Pictorial, graphic, and sculptural works, including models and diagrams",
            ],
            correctIndex: 0,
            explanation:
              "Architectural works are the eighth and last category. Sound recordings are (7), motion pictures are (6) and pictorial works are (5).",
            sourceLessonSlug: "january-1-1978",
          },
          {
            prompt: "What does 102(a) say about the medium in which a work may be fixed?",
            options: [
              "Any tangible medium now known or later developed",
              "Only media the Copyright Office has approved by regulation as suitable deposits",
              "Only media from which the work can be perceived without the aid of a machine",
              "Only print, notation and photographic media, since digital media came later",
            ],
            correctIndex: 0,
            explanation:
              "The statute says any tangible medium of expression now known or later developed, from which the work can be perceived either directly or with the aid of a machine or device.",
            sourceLessonSlug: "january-1-1978",
          },
          {
            prompt: "What does the Copyright Office say a registration specialist considers when applying the choreography test?",
            options: [
              "The intrinsic nature of the work, elements and whole together",
              "The professional reputation of the choreographer and of the company performing it",
              "Whether a comparable work has previously been registered by another applicant",
              "The number of public performances the work received in its first season",
            ],
            correctIndex: 0,
            explanation:
              "The Compendium says the presence or absence of a particular element is not determinative, and the specialist considers the intrinsic nature of the work, its individual elements and the work as a whole.",
            sourceLessonSlug: "january-1-1978",
          },
          {
            prompt: "Who are registrable choreographic works typically intended to be performed by, according to Circular 52?",
            options: [
              "Skilled performers before an audience",
              "Members of the general public for their own enjoyment as participants",
              "Company members under contract to a professional dance organisation",
              "Trained animals, machines or other objects directed by a human choreographer",
            ],
            correctIndex: 0,
            explanation:
              "The circular contrasts works intended for skilled performers before an audience with uncopyrightable social dances intended for members of the public for the dancers' own enjoyment.",
            sourceLessonSlug: "january-1-1978",
          },
          {
            prompt: "Does the course claim Congress intended the 1976 exclusions to fall on Black dance forms?",
            options: [
              "No, it says the reports mention no community at all",
              "Yes, and it cites the committee reports as evidence of that intent",
              "Yes, but only in respect of the simple-routine exclusion rather than the social one",
              "It declines to say, treating the question as unanswerable from any source",
            ],
            correctIndex: 0,
            explanation:
              "Nothing in either report mentions any community. The argument is about where a neutral rule falls, which the course states explicitly.",
            sourceLessonSlug: "january-1-1978",
          },
          {
            prompt: "According to Circular 52, which of these is not registrable as a choreographic work?",
            options: [
              "A yoga sequence",
              "An abstract composition made for skilled dancers and fixed on video",
              "A derivative work adding substantial new material to an existing dance",
              "A narrative ballet fixed in Benesh Dance Notation by a professional notator",
            ],
            correctIndex: 0,
            explanation:
              "Yoga poses and sequences appear among ordinary motor activities that are not registrable. The other three describe works the circular treats as registrable.",
            sourceLessonSlug: "fixation-and-the-two-lists",
          },
          {
            prompt: "What does Circular 52 say about routines intended for performance by animals or machines?",
            options: [
              "They are not copyrightable as choreography or pantomime",
              "They are registrable if a human choreographer devised the sequence of movements",
              "They are registrable as compilations if the arrangement is sufficiently original",
              "They are treated as social dances and refused on that ground instead",
            ],
            correctIndex: 0,
            explanation:
              "Choreographic works and pantomimes must be intended for execution by humans, so dressage routines, trained-animal skits and robot routines are all excluded.",
            sourceLessonSlug: "fixation-and-the-two-lists",
          },
          {
            prompt: "Which of these does Circular 52 name as an example of a commonplace movement?",
            options: [
              "The basic waltz step",
              "A five-minute composed work for a company of professional dancers",
              "A ballet fixed in Labanotation and deposited with the Copyright Office",
              "A theatrical production that incorporates an adapted social dance",
            ],
            correctIndex: 0,
            explanation:
              "Individual steps such as the basic waltz step, the hustle step, the grapevine and second position in classical ballet are not copyrightable by themselves.",
            sourceLessonSlug: "fixation-and-the-two-lists",
          },
          {
            prompt: "What does the course say happens to a choreographer who reads Circular 52 first?",
            options: [
              "They meet a list that omits an entry the operative manual contains",
              "They are told the circular is legally binding on the Office's examiners",
              "They receive the same list the practice manual gives, word for word",
              "They are directed to the legislative history rather than to the manual",
            ],
            correctIndex: 0,
            explanation:
              "The circular's social-dance list stops at swing dances, while the manual adds break dances. That gap between the advertised rule and the operative rule is the lesson.",
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
    {
      slug: "section-3-quiz",
      title: "Section 3 quiz · Horgan, Pilobolus, Hanagami",
      section: "Section 3 · What the courts did with the category",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is the citation for Horgan v. Macmillan?",
            options: [
              "789 F.2d 157 (2d Cir. 1986)",
              "50 F. 926 (C.C.S.D.N.Y. 1892), the case that established the dramatic-composition requirement",
              "No. 22-55890 (9th Cir. 2023), the appeal about an animation sold in a videogame",
              "789 F. Supp. 157 (S.D.N.Y. 1985), the district court decision that denied the injunction",
            ],
            correctIndex: 0,
            explanation:
              "789 F.2d 157, decided by the Second Circuit on 28 April 1986. The other citations name Fuller v. Bemis, Hanagami, and an invented district court reporter cite.",
            sourceLessonSlug: "horgan-v-macmillan",
          },
          {
            prompt: "Which court decided Horgan v. Macmillan on appeal?",
            options: [
              "The Second Circuit",
              "The Ninth Circuit, sitting in Anchorage after argument in August of that year",
              "The Central District of California, whose dismissal was later reversed on appeal",
              "The Copyright Office Review Board, acting under its reconsideration procedure",
            ],
            correctIndex: 0,
            explanation:
              "The Second Circuit. The Ninth Circuit and the Central District of California belong to Hanagami, and the Review Board is an agency panel rather than a court.",
            sourceLessonSlug: "horgan-v-macmillan",
          },
          {
            prompt: "Whose choreography was at issue in Horgan?",
            options: [
              "George Balanchine's",
              "Agnes de Mille's, whose work on Oklahoma! the opinion discusses in a footnote",
              "Donald McKayle's, whose Angelitos Negros was notated in Labanotation",
              "Alvin Ailey's, whose company had performed the ballet in its own season",
            ],
            correctIndex: 0,
            explanation:
              "Balanchine's production of The Nutcracker. De Mille appears in footnote 4 as an example of the old rule's economics, and McKayle and Ailey belong to later sections.",
            sourceLessonSlug: "horgan-v-macmillan",
          },
          {
            prompt: "What did Balanchine deposit as the fixation of his choreography?",
            options: [
              "A videotape of a dress rehearsal",
              "A Labanotation score prepared by a notator engaged by the New York City Ballet",
              "A written scene-by-scene description of the ballet with diagrams of the stage patterns",
              "A set of production photographs taken at the premiere and annotated by the ballet master",
            ],
            correctIndex: 0,
            explanation:
              "A videotape of a New York City Ballet Company dress rehearsal. The other three formats are all acceptable fixations under Circular 52, which is what makes them plausible.",
            sourceLessonSlug: "horgan-v-macmillan",
          },
          {
            prompt: "In what month and year did Balanchine register the choreography?",
            options: [
              "December 1981",
              "January 1978, the month the 1976 Act took effect and choreography became a category",
              "February 2021, the month a later choreographer's registration in this course issued",
              "April 1986, the month the Second Circuit issued its opinion in the case",
            ],
            correctIndex: 0,
            explanation:
              "December 1981. January 1978 is the effective date of the 1976 Act, February 2021 is Hanagami's registration, and April 1986 is the date of the appellate opinion.",
            sourceLessonSlug: "horgan-v-macmillan",
          },
          {
            prompt: "What does the course say Balanchine's choice of deposit format shows?",
            options: [
              "Even the best-resourced estate fixed a dance by filming a rehearsal",
              "That notation was legally required for ballet works but optional for modern dance works",
              "That the Copyright Office would not accept notation scores as deposits before 1986",
              "That the estate wanted to protect the performance rather than the choreography itself",
            ],
            correctIndex: 0,
            explanation:
              "It is worth remembering whenever someone suggests that any choreographer could have documented their work properly if they had cared to. Notation was always accepted, and was simply expensive.",
            sourceLessonSlug: "horgan-v-macmillan",
          },
          {
            prompt: "What allegedly infringing material was at issue in Horgan?",
            options: [
              "Still photographs in a book",
              "A televised broadcast of a rival company performing the same ballet in the same season",
              "A published Labanotation score prepared without the estate's permission",
              "A film adaptation of the ballet produced for release in cinemas",
            ],
            correctIndex: 0,
            explanation:
              "A book containing sixty still photographs of the New York City Ballet performing the ballet. The question was whether stills could infringe a work made of movement.",
            sourceLessonSlug: "horgan-v-macmillan",
          },
          {
            prompt: "What was the district court's reason for denying relief?",
            options: [
              "The performance could not be recreated from the photographs",
              "The photographs were taken with the company's permission and so were licensed",
              "The registration was invalid because the deposit was a videotape rather than a score",
              "The book was a work of criticism and therefore protected as fair use",
            ],
            correctIndex: 0,
            explanation:
              "That recreate-from-the-copy reasoning is exactly the standard the Second Circuit rejected. Licensing, deposit format and fair use were not the stated ground.",
            sourceLessonSlug: "horgan-v-macmillan",
          },
          {
            prompt: "What analogy did the district court use for its reasoning?",
            options: [
              "Every twenty-fifth chord of a Beethoven symphony",
              "A single frame taken from a two-hour motion picture and printed in a magazine",
              "A photograph of a sculpture taken from one angle only, which cannot show the whole",
              "A page of a novel reprinted without the chapters that precede and follow it",
            ],
            correctIndex: 0,
            explanation:
              "The court wrote that just as a Beethoven symphony could not be recreated from a document containing only every twenty-fifth chord, the ballet could not be recreated from the photographs.",
            sourceLessonSlug: "horgan-v-macmillan",
          },
          {
            prompt: "What standard did the Second Circuit hold applies instead?",
            options: [
              "Substantial similarity",
              "Whether an ordinary observer could reconstruct the original from the accused copy",
              "Whether the accused work was created with access to a registered deposit copy",
              "Whether the copied portion exceeds a fixed proportion of the original work's running time",
            ],
            correctIndex: 0,
            explanation:
              "The opinion says the standard is not whether the original could be recreated from the allegedly infringing copy, but whether the latter is substantially similar to the former.",
            sourceLessonSlug: "horgan-v-macmillan",
          },
          {
            prompt: "Did the Second Circuit hold that the book infringed?",
            options: [
              "No, it reversed and remanded",
              "Yes, and it entered a permanent injunction against further distribution of the book",
              "Yes, but it left the calculation of damages to the district court on remand",
              "No, it affirmed the denial of the injunction on a different ground from the district court's",
            ],
            correctIndex: 0,
            explanation:
              "It rejected the district court's test and sent the case back to be decided under the right one. Saying the court found infringement is a mistake an educator will catch by reading the opinion.",
            sourceLessonSlug: "horgan-v-macmillan",
          },
          {
            prompt: "According to footnote 4 of Horgan, what did Agnes de Mille initially receive for her work on Oklahoma!?",
            options: [
              "Fifteen thousand dollars and no royalties",
              "A weekly stager's fee plus expenses for the duration of the Broadway run",
              "A share of the show's gross receipts once it had recouped its production costs",
              "A licence fee of several thousand dollars renewed at each revival of the production",
            ],
            correctIndex: 0,
            explanation:
              "The footnote says she initially received $15,000 but no royalties, because copyright protection was not available for her work. The other three describe modern fee structures from later in this course.",
            sourceLessonSlug: "horgan-v-macmillan",
          },
          {
            prompt: "What figure does that footnote give for what Oklahoma! is estimated to have earned?",
            options: [
              "Over sixty million dollars in fifteen years",
              "Over six million dollars across its original Broadway run alone",
              "Over sixty million dollars in the first five years of its national tour",
              "An amount the opinion declines to estimate, saying the record does not support one",
            ],
            correctIndex: 0,
            explanation:
              "The footnote gives over $60 million over a period of fifteen years, in various adaptations. The course flags that this is a court quoting a law review comment rather than an audited figure.",
            sourceLessonSlug: "horgan-v-macmillan",
          },
          {
            prompt: "How does the course tell you to handle that sixty million dollar figure?",
            options: [
              "As evidence of belief, not as an audited number",
              "As the most reliable financial data available on any Broadway production of the period",
              "As a fabrication the court should not have repeated, and therefore not worth teaching",
              "As a figure the Copyright Office independently verified before the 1976 revision",
            ],
            correctIndex: 0,
            explanation:
              "It reaches us as a court quoting a student law review comment, which makes it a secondary claim inside a primary document: excellent evidence of what the legal culture believed, weak evidence of the accounting.",
            sourceLessonSlug: "horgan-v-macmillan",
          },
          {
            prompt: "What does footnote 8 of Horgan record?",
            options: [
              "Appellees questioned the validity of Balanchine's copyright",
              "The estate had failed to renew the registration within the statutory renewal period",
              "The Copyright Office had refused an earlier application for the same choreography",
              "The videotape deposit had been destroyed before the litigation began",
            ],
            correctIndex: 0,
            explanation:
              "They questioned it on the ground that the application failed to refer to preexisting material. Renewal, an earlier refusal and a destroyed deposit are not in the opinion.",
            sourceLessonSlug: "horgan-v-macmillan",
          },
          {
            prompt: "What point does the course draw from footnote 8?",
            options: [
              "Even the best-defended choreographic registration was open to attack",
              "That courts routinely invalidated choreographic registrations throughout the 1980s",
              "That the Copyright Office should have refused the application when it was filed",
              "That preexisting material must always be disclosed or the deposit is rejected outright",
            ],
            correctIndex: 0,
            explanation:
              "If the Balanchine estate, with counsel and resources, held a registration vulnerable on a disclosure technicality, the practical value of the register to a choreographer without a lawyer was thinner still.",
            sourceLessonSlug: "horgan-v-macmillan",
          },
          {
            prompt: "What is a remand?",
            options: [
              "Sending a case back to be decided under the correct standard",
              "An order restraining conduct while the case is still being litigated",
              "A decision by an agency panel that constitutes final agency action",
              "A request that an appellate court reconsider its own decision before it issues",
            ],
            correctIndex: 0,
            explanation:
              "The restraining order is a preliminary injunction, and final agency action describes a Review Board decision, both of which appear elsewhere in this section.",
            sourceLessonSlug: "horgan-v-macmillan",
          },
          {
            prompt: "What is preexisting material, in the sense used in footnote 8?",
            options: [
              "Earlier work incorporated in a new one",
              "Material an applicant deposits alongside the work to establish its date of creation",
              "Choreography created before 1978 and therefore governed by the old dramatic test",
              "The music a choreographic work is set to, which must be licensed separately",
            ],
            correctIndex: 0,
            explanation:
              "An application is expected to disclose it, and the omission was the ground on which the appellees questioned Balanchine's registration.",
            sourceLessonSlug: "horgan-v-macmillan",
          },
          {
            prompt: "What did the district court in Horgan refuse to grant?",
            options: [
              "A preliminary injunction",
              "A motion to dismiss the complaint for failure to state a claim",
              "Leave to amend the registration to disclose preexisting material",
              "A request that the Copyright Office reconsider its acceptance of the deposit",
            ],
            correctIndex: 0,
            explanation:
              "The appeal was from the denial of a preliminary injunction, an order restraining conduct while the case proceeds.",
            sourceLessonSlug: "horgan-v-macmillan",
          },
          {
            prompt: "On what date was Horgan v. Macmillan decided?",
            options: [
              "28 April 1986",
              "1 November 2023, the date the Ninth Circuit filed its choreography opinion",
              "14 July 2016, the date the Review Board affirmed a refusal to register",
              "20 February 2021, the date a choreographer's registration issued in a later case",
            ],
            correctIndex: 0,
            explanation:
              "28 April 1986. The other three dates all belong to documents in the next lesson of this section.",
            sourceLessonSlug: "horgan-v-macmillan",
          },
          {
            prompt: "Who requested reconsideration in the Five-Petal Flower matter?",
            options: [
              "Pilobolus, Inc.",
              "Epic Games, Inc., seeking to register the animation it had sold to players",
              "The New York City Ballet, on behalf of the estate of its founding choreographer",
              "The Dance Notation Bureau, on behalf of the choreographers whose scores it holds",
            ],
            correctIndex: 0,
            explanation:
              "Pilobolus filed the second request for reconsideration that the Review Board decided. Epic was a defendant rather than an applicant, and the Bureau is a notation library.",
            sourceLessonSlug: "hanagami-pilobolus-and-the-fortnite-story",
          },
          {
            prompt: "On what date did the Review Board decide Five-Petal Flower?",
            options: [
              "14 July 2016",
              "20 June 2013, the date the application itself was originally filed with the Office",
              "1 November 2023, the date an appellate court reversed a dismissal in a related area",
              "28 April 1986, the date the leading circuit decision on choreographic infringement issued",
            ],
            correctIndex: 0,
            explanation:
              "The Board's letter is dated 14 July 2016. The application had been filed on 20 June 2013, which is a real date from the same document.",
            sourceLessonSlug: "hanagami-pilobolus-and-the-fortnite-story",
          },
          {
            prompt: "How long was the work refused registration in Five-Petal Flower?",
            options: [
              "Fourteen seconds",
              "Two seconds, comprising eight bodily movements set to four beats of music",
              "Five minutes, a full composed work made for performance by skilled dancers",
              "Ninety seconds, the length of the silhouette sequence as broadcast on television",
            ],
            correctIndex: 0,
            explanation:
              "A fourteen-second video recording of human silhouettes against a blue screen. The two-second figure is the district court's description of the copied portion in the Hanagami litigation.",
            sourceLessonSlug: "hanagami-pilobolus-and-the-fortnite-story",
          },
          {
            prompt: "What was the outcome of the Five-Petal Flower reconsideration?",
            options: [
              "The refusal was affirmed",
              "The refusal was reversed and the work was registered as a choreographic work",
              "The matter was remanded to the Registration Program for a third examination",
              "The Board declined to decide, holding that the applicant had filed out of time",
            ],
            correctIndex: 0,
            explanation:
              "The Board affirmed the Registration Program's denial, concluding the work lacked the requisite amount of creative authorship, and the decision is final agency action.",
            sourceLessonSlug: "hanagami-pilobolus-and-the-fortnite-story",
          },
          {
            prompt: "What argument did Pilobolus make that the Board declined to consider?",
            options: [
              "That its whole repertoire was celebrated and stylistically distinctive",
              "That the work had been fixed in Labanotation as well as on video",
              "That the silhouette technique had never been used by any other company",
              "That the work formed part of a longer piece already registered with the Office",
            ],
            correctIndex: 0,
            explanation:
              "The Board said it may not consider the company's entire repertoire when evaluating the copyrightability of the brief sequence in the applied-for work.",
            sourceLessonSlug: "hanagami-pilobolus-and-the-fortnite-story",
          },
          {
            prompt: "Why does the course call Pilobolus the control case?",
            options: [
              "A celebrated predominantly white company lost under the same rule",
              "Its work was the first choreographic application the Review Board ever considered",
              "It was the only choreography refusal the Office issued between 1978 and 2016",
              "Its founders had helped draft the legislative history the Office relies on",
            ],
            correctIndex: 0,
            explanation:
              "A control case tests whether a pattern is explained by the proposed cause. This one shows the duration-and-authorship rule is not applied along racial lines, which is why the effects argument is the defensible one.",
            sourceLessonSlug: "hanagami-pilobolus-and-the-fortnite-story",
          },
          {
            prompt: "Who was the plaintiff in Hanagami v. Epic Games?",
            options: [
              "Kyle Hanagami, a choreographer",
              "Pilobolus, Inc., the company whose fourteen-second work had been refused registration",
              "The executor of a choreographer's estate, suing over photographs printed in a book",
              "A videogame publisher seeking a declaration that its animations did not infringe",
            ],
            correctIndex: 0,
            explanation:
              "Hanagami was the plaintiff-appellant and Epic Games the defendant-appellee. The estate suing over photographs is Horgan.",
            sourceLessonSlug: "hanagami-pilobolus-and-the-fortnite-story",
          },
          {
            prompt: "What is the docket number of the Ninth Circuit's opinion in Hanagami?",
            options: [
              "No. 22-55890",
              "No. 85-7954, the docket number of the choreography appeal decided in the Second Circuit",
              "No. 2:22-cv-02063-SVW-MRW, which is the number the case carried on appeal",
              "Correspondence ID 1-N27VRB, assigned when the registration application was filed",
            ],
            correctIndex: 0,
            explanation:
              "22-55890 is the appellate docket. 2:22-cv-02063-SVW-MRW is the district court number, and the correspondence ID belongs to the Pilobolus reconsideration.",
            sourceLessonSlug: "hanagami-pilobolus-and-the-fortnite-story",
          },
          {
            prompt: "When was the Ninth Circuit's opinion in Hanagami filed?",
            options: [
              "1 November 2023",
              "16 August 2023, the date the appeal was argued and submitted in Anchorage",
              "20 February 2021, the date the plaintiff's choreography registration issued",
              "14 July 2016, the date the Copyright Office Review Board affirmed a refusal",
            ],
            correctIndex: 0,
            explanation:
              "Filed 1 November 2023. The August date is argument and submission, and the February 2021 date is the registration, both real dates from the same materials.",
            sourceLessonSlug: "hanagami-pilobolus-and-the-fortnite-story",
          },
          {
            prompt: "What did the Ninth Circuit hold is protectable in a choreographic work?",
            options: [
              "The choreographer's selection and arrangement of unprotectable elements",
              "Each individual pose, provided the pose is original to the choreographer who devised it",
              "Any sequence of at least eight bodily movements set to a recognisable musical phrase",
              "The performance itself, as fixed on video, rather than the underlying arrangement",
            ],
            correctIndex: 0,
            explanation:
              "The panel reasoned by analogy to music: elements unprotectable in isolation can be protected in combination. It expressly rejected reducing choreography to poses.",
            sourceLessonSlug: "hanagami-pilobolus-and-the-fortnite-story",
          },
          {
            prompt: "Besides poses, which elements did the Ninth Circuit say a choreographic work may include?",
            options: [
              "Body position, transitions, use of space, timing, energy and repetition",
              "Costume, lighting, set design and the musical accompaniment chosen by the choreographer",
              "The training and technique of the dancers engaged to perform the work in its first season",
              "The narrative, the characters and the theme, which the 1909 Act had required",
            ],
            correctIndex: 0,
            explanation:
              "The panel listed body position, body shape, body actions, transitions, use of space, timing, pauses, energy, canon, motif, contrast and repetition. Costume and lighting are separate works, and narrative belongs to the old Class D test.",
            sourceLessonSlug: "hanagami-pilobolus-and-the-fortnite-story",
          },
          {
            prompt: "What error did the Ninth Circuit find in the district court's treatment of the copied portion?",
            options: [
              "It dismissed merely because the portion was short",
              "It applied the substantial similarity test rather than asking whether the work could be recreated",
              "It refused to consider the registration valid because the deposit was a video recording",
              "It treated the emote as a social dance rather than as a composed choreographic work",
            ],
            correctIndex: 0,
            explanation:
              "The panel held it was error to dismiss on the ground that the copied choreography was short and a small component of the whole. The substantial similarity test is the correct one, not an error.",
            sourceLessonSlug: "hanagami-pilobolus-and-the-fortnite-story",
          },
          {
            prompt: "How did the district court describe the material Epic allegedly copied?",
            options: [
              "A two-second combination of eight bodily movements set to four beats",
              "A fourteen-second silhouette sequence performed against a plain blue screen",
              "A five-minute composed work intended for performance by skilled dancers",
              "A social dance step of the kind the legislative history expressly excludes",
            ],
            correctIndex: 0,
            explanation:
              "That is the district court's phrasing as the Ninth Circuit quotes it. The fourteen-second silhouette is the Pilobolus work, a different document in this lesson.",
            sourceLessonSlug: "hanagami-pilobolus-and-the-fortnite-story",
          },
          {
            prompt: "What is an emote, in this context?",
            options: [
              "A short purchasable animation that makes a player's avatar move",
              "A notation symbol indicating the emotional quality a passage should be performed with",
              "A brief choreographic phrase a company uses to warm up before a performance",
              "A tag the Copyright Office applies to applications claiming expressive gesture",
            ],
            correctIndex: 0,
            explanation:
              "Epic Games created and sold emotes in Fortnite, and Hanagami alleged one of them depicted portions of his registered choreography.",
            sourceLessonSlug: "hanagami-pilobolus-and-the-fortnite-story",
          },
          {
            prompt: "Was Hanagami's choreography registered with the Copyright Office?",
            options: [
              "Yes, the registration issued on 20 February 2021",
              "No, the Office refused it and he sued without a registration in hand",
              "Yes, but only after the Review Board reversed an initial refusal on reconsideration",
              "No, but the court excused the requirement because the work had been published online",
            ],
            correctIndex: 0,
            explanation:
              "He applied in February 2021 and the Office approved the application, with the registration limited to the choreography rather than the music or the audiovisual material.",
            sourceLessonSlug: "hanagami-pilobolus-and-the-fortnite-story",
          },
          {
            prompt: "Why does this course not print the dates or wording of the Copyright Office letters refusing other Fortnite plaintiffs' applications?",
            options: [
              "It could not retrieve them from a primary source",
              "Those letters are sealed by court order and cannot lawfully be quoted in teaching material",
              "The Copyright Office destroys refusal correspondence after five years have elapsed",
              "The plaintiffs withdrew their applications before any refusal was issued",
            ],
            correctIndex: 0,
            explanation:
              "The rule this course keeps is fetch or do not cite. A legal citation nobody checked is worse than no citation, because an educator will check it.",
            sourceLessonSlug: "hanagami-pilobolus-and-the-fortnite-story",
          },
          {
            prompt: "Which claim does the course expressly reject as unsupported?",
            options: [
              "That the Office refused those applications because the applicants were Black",
              "That short vernacular steps are excluded by a rule stated in 1976 legislative history",
              "That the categories short, vernacular and social map onto Black cultural production",
              "That a facially neutral rule can transfer value away from particular kinds of makers",
            ],
            correctIndex: 0,
            explanation:
              "The rule that sank a short vernacular step is duration and form, and it sank a fourteen-second work by a white-led company in 2016. The other three statements are the argument the course does make.",
            sourceLessonSlug: "hanagami-pilobolus-and-the-fortnite-story",
          },
          {
            prompt: "What argument does the evidence support instead?",
            options: [
              "A neutral rule about duration and form transfers value unevenly",
              "That examiners should be required to consider an applicant's whole repertoire",
              "That the Ninth Circuit's holding will be reversed once the Supreme Court considers it",
              "That vernacular steps should be registrable whenever they can be traced to one author",
            ],
            correctIndex: 0,
            explanation:
              "It moves value toward evening-length composed works for skilled performers and away from the forms where a great deal of Black dance innovation happens. That is checkable and survives a hostile reading.",
            sourceLessonSlug: "hanagami-pilobolus-and-the-fortnite-story",
          },
          {
            prompt: "Under which regulation is a Review Board decision final agency action?",
            options: [
              "37 C.F.R. 202.5(g)",
              "37 C.F.R. 202.7 (1959), the regulation that assigned dramatic choreography to Class D",
              "17 U.S.C. 102(b), which excludes systems and methods of operation from protection",
              "37 C.F.R. 202.1(a), which lists material not subject to copyright at all",
            ],
            correctIndex: 0,
            explanation:
              "The Five-Petal Flower letter cites 202.5(g). The 1959 regulation, section 102(b) and 202.1(a) are all real provisions elsewhere in this course.",
            sourceLessonSlug: "hanagami-pilobolus-and-the-fortnite-story",
          },
          {
            prompt: "What is a quantum of authorship?",
            options: [
              "How much creative choice a work contains",
              "The number of separate movements a work contains from beginning to end",
              "The proportion of a work that a defendant is alleged to have copied",
              "The share of a royalty payment attributable to the choreographer rather than the composer",
            ],
            correctIndex: 0,
            explanation:
              "It is the measure on which the fourteen-second Pilobolus work was refused: the Board concluded it did not possess the requisite amount of creative authorship.",
            sourceLessonSlug: "hanagami-pilobolus-and-the-fortnite-story",
          },
          {
            prompt: "What did the book in Horgan v. Macmillan contain photographs of?",
            options: [
              "A ballet in performance",
              "A rehearsal videotape deposited with the Copyright Office as a fixation",
              "A Labanotation score of the choreography, reproduced page by page",
              "An opera production staged by a company at a major American house",
            ],
            correctIndex: 0,
            explanation:
              "Still photographs of the New York City Ballet performing the ballet. The videotape was the deposit rather than the subject of the photographs.",
            sourceLessonSlug: "horgan-v-macmillan",
          },
          {
            prompt: "What does the course say Balanchine's deposit choice tells you about notation?",
            options: [
              "It was always accepted and was simply expensive",
              "It was legally unavailable as a deposit format until after 1986",
              "It was required for ballet and optional for modern dance works",
              "It was cheaper than video, which is why most estates avoided film",
            ],
            correctIndex: 0,
            explanation:
              "Circular 52 and the Compendium both accept notation, so the reason a well-funded estate filmed a rehearsal instead is practical rather than legal.",
            sourceLessonSlug: "horgan-v-macmillan",
          },
          {
            prompt: "What is a preliminary injunction?",
            options: [
              "An order restraining conduct while a case proceeds",
              "A final judgment entered after a trial on the merits of a copyright claim",
              "An agency order refusing a registration application on reconsideration",
              "A decision sending a case back to a lower court for a new decision",
            ],
            correctIndex: 0,
            explanation:
              "The district court denied one, and the appeal from that denial produced the Second Circuit's statement of the correct infringement standard.",
            sourceLessonSlug: "horgan-v-macmillan",
          },
          {
            prompt: "Why does the course caution against treating the Oklahoma! earnings figure as settled?",
            options: [
              "It is a court repeating a law review comment",
              "The opinion attributes it to the defendant's expert witness at trial",
              "The figure appears only in the district court's opinion, which was reversed",
              "The producers of the show publicly disputed it at the time it was published",
            ],
            correctIndex: 0,
            explanation:
              "A secondary claim inside a primary document is strong evidence of what the legal culture believed and weak evidence of the accounting.",
            sourceLessonSlug: "horgan-v-macmillan",
          },
          {
            prompt: "What did the Ninth Circuit decline to decide in Hanagami?",
            options: [
              "Whether the work was entitled to broad or only thin protection",
              "Whether the choreography had been validly registered with the Copyright Office",
              "Whether the emote had been sold to players of the game for money",
              "Whether choreography is a category of authorship under the statute at all",
            ],
            correctIndex: 0,
            explanation:
              "The panel expressly declined to address the broad-versus-thin question. Registration, sale and the statutory category were not in dispute.",
            sourceLessonSlug: "hanagami-pilobolus-and-the-fortnite-story",
          },
          {
            prompt: "What did the Review Board say about the accolades Pilobolus cited?",
            options: [
              "It may not consider the company's entire repertoire",
              "It gave them substantial weight but found them outweighed by the work's brevity",
              "It treated them as evidence that the work was intended for skilled performers",
              "It held that accolades are relevant only to the fixation requirement",
            ],
            correctIndex: 0,
            explanation:
              "The Board evaluates the copyrightability of the brief sequence in the applied-for work, not the applicant's body of work as a whole.",
            sourceLessonSlug: "hanagami-pilobolus-and-the-fortnite-story",
          },
          {
            prompt: "What was the subject of the fourteen-second video the Review Board refused?",
            options: [
              "Silhouettes forming a flower shape against a blue screen",
              "A pair of dancers performing an extended duet on a bare stage",
              "A player's avatar performing a purchasable animation inside a videogame",
              "A sequence of eight bodily movements set to four beats of music",
            ],
            correctIndex: 0,
            explanation:
              "Human silhouettes tumble into a five-petal flower while a giant hand interferes with them. The eight-movement description belongs to the Hanagami litigation.",
            sourceLessonSlug: "hanagami-pilobolus-and-the-fortnite-story",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4 — The archive: what survives, and whom it serves
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "box-178",
      title: "7 · Box 178, and the contracts that outlived the dances",
      section: "Section 4 · The archive: what survives, and whom it serves",
      body: `Open the Library of Congress finding aid for the **Alvin Ailey American Dance Theater Collection**, call number **ML31.A38**, in the Music Division. Inclusive dates 1910 to 2024. Extent: **34,115 items, 313 containers, 27 mapcase folders, 161 linear feet.** It came in as gifts from the company in 2006, 2014, 2022 and 2024, and the finding aid was completed in 2024.

**Now go to the Administrative Records series and find the file unit headed Contracts, which begins in box 178, and read the folder headings in order.**

- **178/1, Beatty, Talley, 1965-1974.** And under it, the finding aid's own note: **"Laid in: Royalties schedule."**
- 178/2 Beck, Joseph, 1984. 178/3 Brannigan, Brien, 1984.
- 178/4 Butler, John, 1972-1974. Laid in: Correspondence.
- **178/5, Collins, Janet, 1973-1974.**
- **178/6, Dance Notation Group, 1972.**
- **178/7, Dunham, Katherine, 1972 and undated.** Laid in: Correspondence.
- 178/9 Falco, Louis, 1976. 178/10 Hoving, Lucas, 1968-1971.
- **178/11 and 312R/1, Jamison, Judith, 1976, 1985 (Restricted).** Note: "Contains personally identifiable information. Restricted until 2100."

**Read what just happened.** Three Black choreographers of the first rank, Talley Beatty, Janet Collins and Katherine Dunham, have their business relationships preserved, dated and described, in one box, filed under another artist's company. Beatty's folder has a royalties schedule laid in. For a course about who got paid, that folder is the artifact.

**And the restriction is the frame in one line.** The collection is open to research, but contracts are "restricted until 75 years after death of the individual to protect personally identifiable information." Judith Jamison's folder is closed until **2100**. The record exists. It was collected, described, processed, and given a container number by a federal library. And it serves the archive's privacy obligation rather than the researcher. Ask this course's question of it: whom did the record serve? Here there is a literal answer, and it is not the historian.

**Now the contrast that makes the whole course visible in a single finding aid.** Look at what survives, inside this enormous collection, of *Revelations*, Ailey's most performed work, which the timeline dates only to 1960.

The **choreography** is documented in two folders: **221/5**, holding correspondence, program drafts, costuming notes and Ailey's notes, 1960 and undated, and **288/15**, holding Ailey's costuming notes.

The **music** is documented across two boxes. Complete choral scores arranged by Hall Johnson at **239/8-10**. Then title by title, with the arranger named on each: *The Day is Past and Gone* arranged by Howard Roberts; *Fix Me, Jesus* arranged by Hall Johnson; *God A-Mighty* and *Honor, Honor* by Howard Roberts; *I Wanna Be Ready*, 1943, arranged by James Miller; *I've Been 'Buked*, 1946, arranged by Hall Johnson; *Rock-a-My Soul* by Howard Roberts, with a reprise arranged by Daryl Waters; *Sinner Man* by Howard Roberts; *Wade in the Water*; and a folder of unused parts.

**The music is preserved as notation. The dance is not.** Nobody did anything wrong. The scores exist because scoring music is what you do to perform music, and the notes exist because notes are what a choreographer leaves. But the asymmetry is the mechanism of this course, sitting in one collection, visible to anyone who opens the finding aid and compares two rows.

**One more measurement, made by searching the finding aid itself.** The word Labanotation does not appear in it. Across 161 linear feet documenting the most celebrated Black dance company in the United States, the only notation entry is a 1972 contract with the Dance Notation Group, in box 178, folder 6.

:::reveal Name the four Black choreographers whose contract folders sit in box 178 of the Ailey collection. ||| Talley Beatty at 178/1, with a royalties schedule laid in, Janet Collins at 178/5, Katherine Dunham at 178/7, and Judith Jamison at 178/11, whose folder is restricted until 2100.

:::reveal What is the contrast between how Revelations survives as music and how it survives as choreography? ||| The choreography is two folders of correspondence, program drafts and Ailey's own notes. The music is two boxes of choral scores, title by title, with the arranger named on each.

## Vocabulary
- **Finding aid**: the document describing what an archival collection contains and where each item sits, which is the tool this section teaches you to read.
- **File unit**: a group of folders within a series, such as the Contracts unit that begins at box 178.
- **Laid in**: an archivist's note that a loose document was found inside a folder, which is how a royalties schedule became part of the public description.
- **Linear feet**: the measure of shelf space a collection occupies, the standard way archives state the size of a paper record.
- **Restriction**: a condition limiting access, here seventy-five years after the death of the individual named in a contract.

## Sources
Library of Congress, Music Division. (2024). *Alvin Ailey American Dance Theater Collection* [Finding aid], call no. ML31.A38. https://hdl.loc.gov/loc.music/eadmus.mu024021`,
    },
    {
      slug: "fifteen-feet-and-one-point-two-nine",
      title: "8 · Fifteen linear feet, 1.29 linear feet, and who paid for them",
      section: "Section 4 · The archive: what survives, and whom it serves",
      body: `Two more finding aids, read the same way, because the size and the funding of a collection are themselves evidence.

**The Katherine Dunham Collection**, Music Division, Library of Congress, call number **ML31.D985**, span dates 1920 to 2006. Extent: **5,184 items plus digital materials, 33 containers, 15 linear feet.** Provenance: **"Purchase; Katherine Dunham; 2001."**

**How it got there.** The finding aid's custodial history is explicit: "In 2000, the Library of Congress was awarded a grant of $1 million from the Doris Duke Charitable Foundation for the purpose of undertaking the Katherine Dunham Legacy Project," whose activities "included the purchase of the Katherine Dunham archives" along with preservation, support for the Dunham Centers in East St. Louis, video documentation of the Dunham technique, and a Library website. Moving images arrived in 2001; the rest transferred after Dunham's death in 2006. Most of the manuscript material documenting her career had already gone, in the 1960s and 1970s, to the Missouri Historical Society and to Southern Illinois.

**So the national library holds Dunham's papers because a private foundation paid for them, and her record is split across institutions.** That is not a scandal. It is how American cultural archiving works, and knowing it is part of reading any finding aid honestly.

**Two folders in that collection are worth naming.** **Box-folder 7/3, "Julius Rosenwald Fund, 1934, 1990, 2001", 5 items**, described as containing "Copy of Dunham's 1934 application for a Julius Rosenwald fellowship." The chronology confirms what the fellowship bought: in 1935 she "Received grant from Julius Rosenwald Fund to study the dances of the West Indies" and "Conducted fieldwork in Accompong, Jamaica; Martinique; and Trinidad", and in 1936 she "Completed grant-funded field work in Haiti" and "Received bachelor's degree in social anthropology, University of Chicago."

And **box-folder 10/13, "Dance Notation Bureau, 2003", 1 item.** One folder. One item. Dated 2003.

**The single sentence this course keeps returning to** is in the same chronology, under **1960**: "Company disbanded, marking the end of continuity of dancers trained by Dunham in the Dunham Technique and coached by her in her repertory." A federal library, describing its own holdings, states in one line that a transmission chain broke. When a repertory lives in bodies and the bodies disperse, and no score was made, the work is gone in a way a burned manuscript is not, because there is nothing to recover.

**A claim this course refuses to make.** You will often see a master's degree from the University of Chicago attributed to Dunham. The Library of Congress chronology records the 1936 bachelor's and no master's at any point, and other accounts say her thesis was accepted but the coursework never completed. This course prints the bachelor's, which the finding aid states, and says nothing more.

**Now scale, by comparison.** The **Eleo Pomare Dance Company photographs**, Jerome Robbins Dance Division, New York Public Library for the Performing Arts, call number **MGZEB 25-0002**, circa 1956 to the 2000s: **1.29 linear feet**, four boxes. Gift of Glenn Conner in **2010**. Processed by Amy Lau in **2025**.

**Read those numbers as a sentence.** A career spanning five decades survives as 1.29 linear feet of photographs, given to the library by a third party rather than by the choreographer or an estate, and not processed, which is to say not findable, until fifteen years after the gift and seventeen years after Pomare's death. An unprocessed collection is not a secret. It is simply not yet described, and a researcher cannot use what has not been described.

:::reveal What paid for the Library of Congress to acquire the Katherine Dunham archives, and in what year? ||| A grant of one million dollars from the Doris Duke Charitable Foundation, awarded in 2000 for the Katherine Dunham Legacy Project, under which the purchase was made in 2001.

:::reveal Why does the course say a dispersed repertory with no score is lost in a way a burned manuscript is not? ||| Because a burned manuscript at least had a fixed form that copies or drafts might reproduce, whereas a repertory that lived only in trained bodies leaves nothing to recover once the transmission chain breaks.

## Vocabulary
- **Provenance**: the record of how a collection came to the repository, stated here as a purchase from Katherine Dunham in 2001.
- **Custodial history**: the account of where material was held before it reached the archive, and what paid for its transfer.
- **Processed**: described, arranged and made findable, which is a separate step from acquisition and can lag it by many years.
- **Rosenwald Fund**: the philanthropy whose 1934 fellowship application survives in the Dunham collection and whose grant funded her Caribbean fieldwork.
- **Transmission chain**: the line of dancers who carry a repertory in their bodies, whose break the Library records in its 1960 chronology entry.

## Sources
Library of Congress, Music Division. (2019). *Katherine Dunham Collection* [Finding aid], call no. ML31.D985. https://hdl.loc.gov/loc.music/eadmus.mu018008
New York Public Library, Jerome Robbins Dance Division. (2025). *Eleo Pomare Dance Company photographs*, call no. MGZEB 25-0002 [Finding aid]. https://archives.nypl.org/dan/185526`,
    },
    {
      slug: "section-4-quiz",
      title: "Section 4 quiz · Reading the finding aid",
      section: "Section 4 · The archive: what survives, and whom it serves",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is the call number of the Alvin Ailey American Dance Theater Collection?",
            options: [
              "ML31.A38",
              "ML31.D985, the call number of the Katherine Dunham Collection in the same division",
              "MGZEB 25-0002, assigned by the Jerome Robbins Dance Division to a photographs collection",
              "mu024021, which is the identifier of the collection's online finding aid rather than the papers",
            ],
            correctIndex: 0,
            explanation:
              "ML31.A38 in the Music Division of the Library of Congress. The other three identifiers all appear in this section and belong to different things.",
            sourceLessonSlug: "box-178",
          },
          {
            prompt: "How large is the Ailey collection?",
            options: [
              "161 linear feet",
              "15 linear feet, in thirty-three containers, plus digital materials",
              "1.29 linear feet, held in four boxes at a performing arts library",
              "256.78 cubic feet, the standard measure used for notation score collections",
            ],
            correctIndex: 0,
            explanation:
              "34,115 items, 313 containers, 27 mapcase folders and 161 linear feet. Fifteen linear feet is the Dunham collection and 1.29 is the Pomare photographs.",
            sourceLessonSlug: "box-178",
          },
          {
            prompt: "How many items does the Ailey collection contain?",
            options: [
              "34,115",
              "5,184 items plus digital materials, held across thirty-three separate containers",
              "313, which is the number of containers rather than the number of items in the collection",
              "800, the number of Labanotation scores in the largest notation library in the country",
            ],
            correctIndex: 0,
            explanation:
              "34,115 items. 5,184 is the Dunham count, 313 is the Ailey container count, and 800 is the Dance Notation Bureau's score count from a later lesson.",
            sourceLessonSlug: "box-178",
          },
          {
            prompt: "How did the Ailey collection come to the Library of Congress?",
            options: [
              "As gifts from the company in 2006, 2014, 2022 and 2024",
              "By purchase in 2001, funded by a one million dollar grant from a private foundation",
              "As a gift from a private collector in 2010, processed fifteen years later",
              "By transfer from the New York Public Library when its dance division was reorganised",
            ],
            correctIndex: 0,
            explanation:
              "The finding aid records gifts from the Alvin Ailey American Dance Theater in those four years. The purchase-with-foundation-money route is how the Dunham collection arrived.",
            sourceLessonSlug: "box-178",
          },
          {
            prompt: "Which file unit begins at box 178 of the Ailey collection?",
            options: [
              "Contracts",
              "Choreographic Works, arranged alphabetically by the title of each dance",
              "Photographs of performances and related professional shoots, 1950 to 2021",
              "Music, holding complete choral scores with each arranger named",
            ],
            correctIndex: 0,
            explanation:
              "Contracts, within the Administrative Records series. The other three are real units elsewhere in the same collection.",
            sourceLessonSlug: "box-178",
          },
          {
            prompt: "Which folder holds Talley Beatty's contracts?",
            options: [
              "178/1",
              "178/5, the folder holding a set of contracts dated 1973 to 1974",
              "178/7, the folder whose contents are dated 1972 and undated",
              "221/5, the folder holding correspondence and program drafts for a single work",
            ],
            correctIndex: 0,
            explanation:
              "178/1, Beatty, Talley, 1965-1974. 178/5 is Janet Collins, 178/7 is Katherine Dunham, and 221/5 holds the Revelations choreographic documentation.",
            sourceLessonSlug: "box-178",
          },
          {
            prompt: "What does the finding aid note was laid in with Talley Beatty's contracts?",
            options: [
              "A royalties schedule",
              "Correspondence, as with the folders for John Butler and Katherine Dunham",
              "Check records, as with the folders for Patrick Dupond and Lucas Hoving",
              "A Labanotation score of one of the works the contracts cover",
            ],
            correctIndex: 0,
            explanation:
              "Laid in: Royalties schedule. Correspondence and check records are laid into other folders in the same box, which is what makes them plausible.",
            sourceLessonSlug: "box-178",
          },
          {
            prompt: "Why does the course call the Beatty folder the artifact for this material?",
            options: [
              "Because the course is about who got paid",
              "Because it is the only folder in the collection describing a Black choreographer",
              "Because it contains the earliest document in the entire Ailey collection",
              "Because a royalties schedule is legally equivalent to a copyright registration",
            ],
            correctIndex: 0,
            explanation:
              "A royalties schedule is the document that shows money moving, in a course whose subject is credit and payment. Several folders in the same box name Black choreographers.",
            sourceLessonSlug: "box-178",
          },
          {
            prompt: "Which folder in box 178 holds Janet Collins's contracts, and for what years?",
            options: [
              "178/5, dated 1973 to 1974",
              "178/1, dated 1965 to 1974, with a schedule of royalties laid in with the papers",
              "178/6, dated 1972, recording an agreement with a notation organisation",
              "178/11, dated 1976 and 1985, and closed to researchers until the year 2100",
            ],
            correctIndex: 0,
            explanation:
              "178/5, Collins, Janet, 1973-1974. The other three describe the Beatty, Dance Notation Group and Jamison folders respectively.",
            sourceLessonSlug: "box-178",
          },
          {
            prompt: "What sits in folder 178/6?",
            options: [
              "Dance Notation Group, 1972",
              "Dunham, Katherine, 1972 and undated, with correspondence laid in",
              "Butler, John, 1972-1974, also with correspondence laid in",
              "Beck, Joseph, 1984, one of several individual dancer contracts in the box",
            ],
            correctIndex: 0,
            explanation:
              "178/6 is Dance Notation Group, 1972. Dunham is 178/7, Butler is 178/4 and Beck is 178/2.",
            sourceLessonSlug: "box-178",
          },
          {
            prompt: "Until when is Judith Jamison's contract folder restricted?",
            options: [
              "2100",
              "2064, seventy-five years after the death of the company's founding choreographer",
              "2025, at which point the finding aid says the restriction lapses automatically",
              "It is not restricted; the whole collection is open to research without conditions",
            ],
            correctIndex: 0,
            explanation:
              "The finding aid's note reads: contains personally identifiable information, restricted until 2100. The collection as a whole is open, with contracts the stated exception.",
            sourceLessonSlug: "box-178",
          },
          {
            prompt: "What is the general restriction rule the Ailey finding aid states for contracts?",
            options: [
              "Restricted until seventy-five years after the death of the individual",
              "Restricted until fifty years after the date the contract was signed by both parties",
              "Restricted until the company that holds the copyright grants written permission",
              "Restricted to researchers holding a letter of introduction from an accredited institution",
            ],
            correctIndex: 0,
            explanation:
              "The stated purpose is to protect personally identifiable information. That is a legitimate archival obligation, and it is also why the record does not serve the researcher.",
            sourceLessonSlug: "box-178",
          },
          {
            prompt: "What question does the course ask of the restricted contract folder?",
            options: [
              "Whom did the record serve",
              "Whether the Library had legal authority to accept a restricted gift at all",
              "Whether the contract was ever registered with the Copyright Office as a deposit",
              "Whether the restriction can be lifted by the estate of the individual named",
            ],
            correctIndex: 0,
            explanation:
              "Here the question has a literal answer: the record was collected, described and given a container number, and it serves the archive's privacy obligation rather than the historian.",
            sourceLessonSlug: "box-178",
          },
          {
            prompt: "Which two folders hold what survives of the choreography of Revelations?",
            options: [
              "221/5 and 288/15",
              "239/8-10 and 240/1-15, which hold the material for the work title by title",
              "178/1 and 178/5, in the box of contracts within the administrative records",
              "112/7 and 113/1, which hold photographs of the work in performance",
            ],
            correctIndex: 0,
            explanation:
              "221/5 holds correspondence, program drafts, costuming notes and Ailey's notes, and 288/15 holds his costuming notes. The 239 and 240 boxes hold the music.",
            sourceLessonSlug: "box-178",
          },
          {
            prompt: "What is held in boxes 239 and 240 for Revelations?",
            options: [
              "Choral scores, title by title, with each arranger named",
              "Costumes and props, including a men's net tank and a parasol",
              "Correspondence and program drafts dated 1960 and undated",
              "Photographs of performances at different points in the company's history",
            ],
            correctIndex: 0,
            explanation:
              "Complete choral scores arranged by Hall Johnson at 239/8-10, then individual titles with arrangers named. The costumes, correspondence and photographs are elsewhere in the collection.",
            sourceLessonSlug: "box-178",
          },
          {
            prompt: "Who arranged the complete choral scores held at 239/8-10?",
            options: [
              "Hall Johnson",
              "Howard Roberts, who arranged several of the individual spirituals in the same run",
              "Daryl Waters, who arranged a reprise held later in the same sequence of folders",
              "James Miller, whose 1943 arrangement is the earliest dated item in the music unit",
            ],
            correctIndex: 0,
            explanation:
              "Hall Johnson arranged the complete choral scores and also Fix Me, Jesus and I've Been 'Buked. Roberts, Waters and Miller all arranged other titles in the same run.",
            sourceLessonSlug: "box-178",
          },
          {
            prompt: "What is the asymmetry the course draws from the Revelations material?",
            options: [
              "The music is preserved as notation and the dance is not",
              "The music was registered with the Copyright Office and the choreography was refused",
              "The music arrangers were paid royalties and the choreographer was not",
              "The music folders are open to research and the choreography folders are restricted",
            ],
            correctIndex: 0,
            explanation:
              "Nobody did anything wrong. Scoring is what you do to perform music, and notes are what a choreographer leaves. The asymmetry is the mechanism of the course, visible in one finding aid.",
            sourceLessonSlug: "box-178",
          },
          {
            prompt: "How many times does the word Labanotation appear in the Ailey finding aid?",
            options: [
              "It does not appear",
              "Once, in the entry for a 1972 contract with a notation organisation",
              "Twice, in the entries for two separate scores of Ailey works",
              "Eleven times, once for each of the works the Bureau holds a score for",
            ],
            correctIndex: 0,
            explanation:
              "The word does not appear anywhere in 161 linear feet of description. The only notation-related entry is the Dance Notation Group contract at 178/6, which does not use the word.",
            sourceLessonSlug: "box-178",
          },
          {
            prompt: "What does laid in mean in an archival description?",
            options: [
              "A loose document found inside a folder",
              "An item transferred from another collection and interfiled with the original material",
              "A document created by the archivist to summarise what a folder contains",
              "A restricted item removed from a folder and stored separately until the restriction lapses",
            ],
            correctIndex: 0,
            explanation:
              "It is how a royalties schedule ended up in the public description of Talley Beatty's contract folder.",
            sourceLessonSlug: "box-178",
          },
          {
            prompt: "What are linear feet, as archives use the term?",
            options: [
              "A measure of shelf space a collection occupies",
              "The total length of film and videotape held in a collection when unspooled",
              "The number of folders in a collection divided by the number of containers",
              "The distance between the earliest and latest dates in a collection's span",
            ],
            correctIndex: 0,
            explanation:
              "It is the standard way archives state the size of a paper record, which is why 161 feet and 1.29 feet are directly comparable in this section.",
            sourceLessonSlug: "box-178",
          },
          {
            prompt: "What is the call number of the Katherine Dunham Collection?",
            options: [
              "ML31.D985",
              "ML31.A38, the call number of the other Music Division dance collection in this section",
              "mu018008, which identifies the online finding aid rather than the physical collection",
              "MGZEB 25-0002, assigned by a performing arts library to a collection of photographs",
            ],
            correctIndex: 0,
            explanation:
              "ML31.D985, Music Division, Library of Congress. ML31.A38 is Ailey, mu018008 is the finding aid identifier, and MGZEB 25-0002 is the Pomare photographs.",
            sourceLessonSlug: "fifteen-feet-and-one-point-two-nine",
          },
          {
            prompt: "How large is the Katherine Dunham Collection?",
            options: [
              "15 linear feet, in thirty-three containers",
              "161 linear feet, in three hundred and thirteen containers plus mapcase folders",
              "1.29 linear feet, in four boxes at the Jerome Robbins Dance Division",
              "5,184 linear feet, which is also the number of items the collection contains",
            ],
            correctIndex: 0,
            explanation:
              "5,184 items plus digital materials, 33 containers, 15 linear feet. 161 feet is Ailey and 1.29 is Pomare, and 5,184 is the Dunham item count rather than a measure of shelf space.",
            sourceLessonSlug: "fifteen-feet-and-one-point-two-nine",
          },
          {
            prompt: "What provenance does the Dunham finding aid record?",
            options: [
              "Purchase; Katherine Dunham; 2001",
              "Gifts from the company in 2006, 2014, 2022 and 2024, with further accruals expected",
              "Gift of Glenn Conner in 2010, processed by Amy Lau in 2025",
              "Transfer from the Missouri Historical Society and Southern Illinois in the 1970s",
            ],
            correctIndex: 0,
            explanation:
              "Purchase; Katherine Dunham; 2001. The gifts entry belongs to Ailey, the Conner gift to Pomare, and Missouri and Southern Illinois are where her other manuscript material went rather than where this collection came from.",
            sourceLessonSlug: "fifteen-feet-and-one-point-two-nine",
          },
          {
            prompt: "What funded the Library of Congress's acquisition of the Dunham archives?",
            options: [
              "A one million dollar Doris Duke Charitable Foundation grant",
              "A Julius Rosenwald Fund fellowship awarded to the choreographer in 1934",
              "An appropriation from Congress made after the choreographer's death in 2006",
              "A gift from the Katherine Dunham Centers in East St. Louis",
            ],
            correctIndex: 0,
            explanation:
              "The finding aid says the Library was awarded the grant in 2000 for the Katherine Dunham Legacy Project, whose activities included the purchase of the archives. The Rosenwald fellowship funded her fieldwork in the 1930s.",
            sourceLessonSlug: "fifteen-feet-and-one-point-two-nine",
          },
          {
            prompt: "In what year was that grant awarded?",
            options: [
              "2000",
              "2001, the same year the purchase itself was recorded in the collection's provenance",
              "2006, the year the remaining items transferred after the choreographer's death",
              "1934, the year of the fellowship application preserved in the collection",
            ],
            correctIndex: 0,
            explanation:
              "The grant was awarded in 2000; the purchase provenance is dated 2001 and the post-death transfer is 2006, which are adjacent real dates in the same finding aid.",
            sourceLessonSlug: "fifteen-feet-and-one-point-two-nine",
          },
          {
            prompt: "Where had most of the manuscript material documenting Dunham's career gone before this?",
            options: [
              "The Missouri Historical Society and Southern Illinois",
              "The Jerome Robbins Dance Division of the New York Public Library",
              "The Dance Notation Bureau's score library in New York",
              "The Katherine Dunham Centers in East St. Louis, which retained them",
            ],
            correctIndex: 0,
            explanation:
              "The finding aid says most of it was transferred during the 1960s and 1970s to the Missouri Historical Society and Southern Illinois, which is why her record is split across institutions.",
            sourceLessonSlug: "fifteen-feet-and-one-point-two-nine",
          },
          {
            prompt: "What is in box-folder 7/3 of the Dunham collection?",
            options: [
              "A copy of her 1934 Julius Rosenwald fellowship application",
              "One item dated 2003 relating to a dance notation organisation",
              "Two early souvenir programmes from a summer dance festival, with contracts and flyers",
              "The typescript of her thesis in social anthropology submitted at the University of Chicago",
            ],
            correctIndex: 0,
            explanation:
              "The folder is headed Julius Rosenwald Fund, 1934, 1990, 2001, five items, and its description names the copy of the 1934 fellowship application. The single 2003 item is at 10/13.",
            sourceLessonSlug: "fifteen-feet-and-one-point-two-nine",
          },
          {
            prompt: "What did the Rosenwald fellowship pay for, according to the collection chronology?",
            options: [
              "Fieldwork on the dances of the West Indies",
              "Tuition for a master's degree in social anthropology at the University of Chicago",
              "The founding of the Katherine Dunham School of Arts and Research in New York",
              "The purchase and preservation of her papers by a federal library",
            ],
            correctIndex: 0,
            explanation:
              "The 1935 entry records the grant to study the dances of the West Indies and fieldwork in Accompong, Jamaica, Martinique and Trinidad, with Haiti completed in 1936.",
            sourceLessonSlug: "fifteen-feet-and-one-point-two-nine",
          },
          {
            prompt: "Which degree does the Library of Congress chronology record for Dunham?",
            options: [
              "A bachelor's in social anthropology in 1936",
              "A master's from the University of Chicago awarded in 1947",
              "A doctorate in anthropology completed after her fieldwork in Haiti",
              "No degree at any point, since the chronology records only her fellowship",
            ],
            correctIndex: 0,
            explanation:
              "The chronology records the 1936 bachelor's and no master's at any point. This course prints what the finding aid states and declines to repeat the commonly asserted master's.",
            sourceLessonSlug: "fifteen-feet-and-one-point-two-nine",
          },
          {
            prompt: "What is in box-folder 10/13 of the Dunham collection?",
            options: [
              "One item, dated 2003, relating to the Dance Notation Bureau",
              "Five items relating to a philanthropic fellowship awarded in the 1930s",
              "A complete Labanotation score of one of her Caribbean works",
              "Contracts with the Metropolitan Opera relating to her 1963 production work",
            ],
            correctIndex: 0,
            explanation:
              "The folder is headed Dance Notation Bureau, 2003, one item. One folder, one item, forty-three years after her company disbanded.",
            sourceLessonSlug: "fifteen-feet-and-one-point-two-nine",
          },
          {
            prompt: "What does the Dunham chronology record for 1960?",
            options: [
              "The company disbanded, ending the continuity of trained dancers",
              "The company completed its first European tour and returned to the United States",
              "The Library of Congress acquired the first tranche of the collection's moving images",
              "She received a grant to conduct fieldwork in Haiti and the West Indies",
            ],
            correctIndex: 0,
            explanation:
              "The entry says the disbanding marked the end of continuity of dancers trained by Dunham in the Dunham Technique and coached by her in her repertory. That is a federal library describing a broken transmission chain.",
            sourceLessonSlug: "fifteen-feet-and-one-point-two-nine",
          },
          {
            prompt: "How many name-title authority entries for choreographic works does the Dunham finding aid's index carry?",
            options: [
              "One",
              "Nine, one for each series into which the collection is organised",
              "Thirty-three, one for each container in the collection",
              "None, because the Library does not index choreographic works as titles",
            ],
            correctIndex: 0,
            explanation:
              "The Titles section of the index lists exactly one entry: Floyd's guitar blues (Choreographic work : Dunham).",
            sourceLessonSlug: "fifteen-feet-and-one-point-two-nine",
          },
          {
            prompt: "What is the call number of the Eleo Pomare Dance Company photographs?",
            options: [
              "MGZEB 25-0002",
              "ML31.D985, assigned by the Music Division of the Library of Congress",
              "mu024021, the identifier of a finding aid rather than of a physical collection",
              "SPEC.TRI.0022, assigned by a university library to a notation collection",
            ],
            correctIndex: 0,
            explanation:
              "MGZEB 25-0002 in the Jerome Robbins Dance Division of the New York Public Library for the Performing Arts.",
            sourceLessonSlug: "fifteen-feet-and-one-point-two-nine",
          },
          {
            prompt: "How large is the Pomare photographs collection?",
            options: [
              "1.29 linear feet, in four boxes",
              "15 linear feet, in thirty-three containers, plus digital materials",
              "161 linear feet, in three hundred and thirteen containers",
              "5,184 items, plus a run of choral scores held in two separate boxes",
            ],
            correctIndex: 0,
            explanation:
              "1.29 linear feet in four boxes, circa 1956 to the 2000s. The larger figures belong to the Dunham and Ailey collections.",
            sourceLessonSlug: "fifteen-feet-and-one-point-two-nine",
          },
          {
            prompt: "Who gave the Pomare photographs to the library, and in what year?",
            options: [
              "Glenn Conner, in 2010",
              "The choreographer himself, by purchase in 2001",
              "The Alvin Ailey American Dance Theater, as one of a series of gifts",
              "The Doris Duke Charitable Foundation, as part of a funded legacy project",
            ],
            correctIndex: 0,
            explanation:
              "Gift of Glenn Conner in 2010, which the course reads as a third party rather than the choreographer or an estate. The other three describe how the collections in the previous lessons arrived.",
            sourceLessonSlug: "fifteen-feet-and-one-point-two-nine",
          },
          {
            prompt: "When was the Pomare collection processed?",
            options: [
              "2025, by Amy Lau",
              "2010, immediately upon receipt of the gift from the donor",
              "2008, by the archivist who began work on the Ailey collection that year",
              "2019, when the finding aid for the Dunham collection was last revised",
            ],
            correctIndex: 0,
            explanation:
              "Processed by Amy Lau in 2025, which is fifteen years after the gift and seventeen years after Pomare's death.",
            sourceLessonSlug: "fifteen-feet-and-one-point-two-nine",
          },
          {
            prompt: "What does processed mean in an archival context?",
            options: [
              "Described, arranged and made findable",
              "Digitised and published on the repository's website for remote access",
              "Reviewed for restricted material and cleared for public access",
              "Physically conserved, rehoused in acid-free containers and shelved",
            ],
            correctIndex: 0,
            explanation:
              "It is a separate step from acquisition and can lag it by many years. An unprocessed collection is not a secret; it is simply not yet described, and a researcher cannot use what has not been described.",
            sourceLessonSlug: "fifteen-feet-and-one-point-two-nine",
          },
          {
            prompt: "What is provenance, in a finding aid?",
            options: [
              "The record of how a collection came to the repository",
              "The list of subject headings under which a collection is indexed in the catalogue",
              "The span of dates covered by the material a collection contains",
              "The name of the archivist who arranged and described the collection",
            ],
            correctIndex: 0,
            explanation:
              "For Dunham it reads: Purchase; Katherine Dunham; 2001. Custodial history, a separate field, then explains what paid for the purchase.",
            sourceLessonSlug: "fifteen-feet-and-one-point-two-nine",
          },
          {
            prompt: "What point does the course make about a private foundation paying for a national library's acquisition?",
            options: [
              "It is how American cultural archiving works, and reading it honestly matters",
              "It rendered the acquisition improper, since federal collections must be publicly funded",
              "It gave the foundation a continuing right to control access to the collection",
              "It explains why the collection is restricted until seventy-five years after death",
            ],
            correctIndex: 0,
            explanation:
              "The course says explicitly that this is not a scandal, and that knowing it is part of reading any finding aid honestly. The seventy-five-year restriction belongs to the Ailey contracts.",
            sourceLessonSlug: "fifteen-feet-and-one-point-two-nine",
          },
          {
            prompt: "Why does the course say a lost repertory is worse than a burned manuscript?",
            options: [
              "There is nothing to recover once the transmission chain breaks",
              "Because a burned manuscript can always be reconstructed from the copyright deposit",
              "Because dance companies rarely keep duplicate copies of their own repertory",
              "Because the Copyright Office destroyed the deposits it once held for dance works",
            ],
            correctIndex: 0,
            explanation:
              "A burned manuscript at least had a fixed form, so drafts or copies might reproduce it. A repertory that lived only in trained bodies leaves nothing behind at all.",
            sourceLessonSlug: "fifteen-feet-and-one-point-two-nine",
          },
          {
            prompt: "What are the inclusive dates of the Alvin Ailey American Dance Theater Collection?",
            options: [
              "1910 to 2024",
              "1920 to 2006, the span of the other Music Division dance collection in this section",
              "Circa 1956 to the 2000s, the span of a photographs collection at another library",
              "1965 to 2011, the span of one artist's tenure with the company",
            ],
            correctIndex: 0,
            explanation:
              "1910 to 2024, with bulk dates of 1950 to 2005. The 1920 to 2006 span belongs to the Dunham collection.",
            sourceLessonSlug: "box-178",
          },
          {
            prompt: "Which series of the Ailey collection contains the Contracts file unit?",
            options: [
              "Administrative Records",
              "Choreographic Works, which is arranged alphabetically by the title of each dance",
              "Photographs, which holds images of performances and professional shoots",
              "Music, which holds choral scores with each arranger named on the folder",
            ],
            correctIndex: 0,
            explanation:
              "Contracts sit within the Administrative Records series, and the finding aid notes that the Training, Education and Touring series carries contracts under the same restriction.",
            sourceLessonSlug: "box-178",
          },
          {
            prompt: "What is a file unit, in archival description?",
            options: [
              "A group of folders within a series",
              "A single sheet of paper described individually in a finding aid",
              "The entire body of material a repository holds from one creator",
              "A restricted portion of a collection stored separately from the rest",
            ],
            correctIndex: 0,
            explanation:
              "Contracts is a file unit within the Administrative Records series, beginning at box 178.",
            sourceLessonSlug: "box-178",
          },
          {
            prompt: "How many mapcase folders does the Ailey collection contain?",
            options: [
              "Twenty-seven",
              "Three hundred and thirteen, which is the collection's container count",
              "One hundred and sixty-one, which is its extent in linear feet",
              "Thirty-three, which is the container count of a different dance collection",
            ],
            correctIndex: 0,
            explanation:
              "27 mapcase folders, alongside 34,115 items, 313 containers and 161 linear feet.",
            sourceLessonSlug: "box-178",
          },
          {
            prompt: "Which subject heading does the Dunham finding aid use to index the collection?",
            options: [
              "African American women choreographers",
              "Copyright registrations and deposits for choreographic works",
              "Labanotation scores and dance notation systems",
              "Metropolitan Opera performances and cast records",
            ],
            correctIndex: 0,
            explanation:
              "The index includes African American choreographers, African American dance and African American women choreographers. No notation or copyright headings appear anywhere in it.",
            sourceLessonSlug: "fifteen-feet-and-one-point-two-nine",
          },
          {
            prompt: "Which choreographic work is named in the Dunham finding aid's title index?",
            options: [
              "Floyd's guitar blues",
              "L'Ag'Ya, her first full-length ballet, produced in Chicago",
              "Southland, of which the collection holds rehearsal footage",
              "Angelitos Negros, the work notated in Labanotation in 2011",
            ],
            correctIndex: 0,
            explanation:
              "The Titles section lists exactly one entry: Floyd's guitar blues (Choreographic work : Dunham). Angelitos Negros is Donald McKayle's work rather than Dunham's.",
            sourceLessonSlug: "fifteen-feet-and-one-point-two-nine",
          },
          {
            prompt: "Why does the course say an unprocessed collection is not a secret?",
            options: [
              "It is simply not yet described, and description is what makes it usable",
              "It is stored openly on the shelves and anyone may consult it on request",
              "The repository publishes a list of unprocessed accessions every year",
              "Its contents are already indexed in the national union catalogue",
            ],
            correctIndex: 0,
            explanation:
              "A researcher cannot use what has not been described. The Pomare photographs waited fifteen years between the gift and processing.",
            sourceLessonSlug: "fifteen-feet-and-one-point-two-nine",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 5 — The score is a bill, and three corrections
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-score-is-a-bill",
      title: "9 · The score is a bill",
      section: "Section 5 · The score is a bill, and three corrections",
      body: `Here is the cleanest single artifact in this course, and it belongs to a Black choreographer.

**"Angelitos Negros" (1972), choreography by Donald McKayle, notated by Mary Corey, notation year 2011.** That entry sits in the Dance Notation Bureau's own catalog of video score excerpts, alongside works by Doris Humphrey, Mark Morris and Joan Woodbury. A named work, a named choreographer, a named notator, and a date. Somebody sat down thirty-nine years after the premiere and wrote the movement down, which means the dance can be performed in 2050 by people who never met anyone who danced it.

**Now understand what else that score is.** The Dance Notation Bureau publishes what it costs to stage a dance from its library. Read the schedule as a stack, because that is how a producer meets it:

- **$20 per dance** to request to borrow a score or a DVD for examination.
- A DNB service fee of **$295 for universities or educational institutes, and $395 for dance companies.**
- A licence fee, which the Bureau says "vary widely, often falling between $100 and several thousand dollars, depending on the choreographer and the complexity of the work."
- A royalty of **$30 to $100 per performance**, due one week before the first public performance.
- A stager's fee, due one week before the first rehearsal, "generally ranges from $1500 to $2000 per week, plus expenses."

**So a notated score is three things at once.** It is the fixation that makes a dance a legal work under section 102(a). It is the instrument that lets a stranger perform the dance decades later without the choreographer in the room. And it is a revenue mechanism: a licence fee and a per-performance royalty flowing to whoever holds the rights.

**That is the cleanest possible answer to this course's question.** Whom did the record serve? It served whoever had a score. And a choreographer who was never notated was excluded from all three functions at once: no fixation, so no reliable copyright; no transmission, so the work dies with the last body that knew it; and no royalty, so no income from a revival that will never happen anyway.

**How lopsided is notation coverage? State it carefully, because this is where a course could easily overclaim.** The Dance Notation Bureau says its library holds "more than 800 Labanotation scores of theatrical dances," and the example choreographers it names on that page are Petipa and William Forsythe. Separately, the choreographer filter on the Bureau's own catalog page does list Katherine Dunham, Talley Beatty, Donald McKayle, Alvin Ailey, Ulysses Dove and Bill T. Jones among its choreographers, so the assumption that Black choreographers are simply absent from the notation record is wrong and this course will not repeat it. What could not be established in this pass is the count: how many of those 800-plus scores are of works by Black choreographers, because the catalog's individual records load dynamically and could not be enumerated. **So the honest finding is a confirmed presence and an unknown proportion, not a proven absence.**

**And notice which measure of a career is expensive.** Being remembered as biography costs a library some shelf space. Being remembered as property costs a notator's salary for the weeks it takes to write a dance down. The archive is comparatively generous. The registry is not.

:::reveal Name the four facts the Dance Notation Bureau's catalog gives for the McKayle score. ||| The work Angelitos Negros, dating from 1972, choreography by Donald McKayle, notated by Mary Corey, with a notation year of 2011.

:::reveal What three functions does a notated score perform at once? ||| It is the fixation that makes the dance a legal work, the instrument that lets a stranger perform it decades later, and a revenue mechanism generating a licence fee and a per-performance royalty.

## Vocabulary
- **Stager**: the specialist who reads a notated score and teaches the work to a company, billed by the week plus expenses.
- **Licence fee**: the one-time charge for the right to perform a notated work, which the Bureau says ranges from one hundred dollars to several thousand.
- **Per-performance royalty**: a payment owed for each public showing, separate from the licence fee and due before the first performance.
- **Notation year**: the year a score was written, which for Angelitos Negros is thirty-nine years after the work was made.
- **Confirmed presence, unknown proportion**: the honest shape of a finding when you can show something exists but cannot count how much of it there is.

## Sources
Dance Notation Bureau. (n.d.). *Video score excerpts*. https://www.dancenotation.org/video-score-excerpts/
Dance Notation Bureau. (n.d.). *Staging from score*. https://www.dancenotation.org/staging-from-score/
Dance Notation Bureau. (n.d.). *About the library*. https://www.dancenotation.org/about-the-library/`,
    },
    {
      slug: "three-corrections-ailey-collins-jamison",
      title: "10 · Three corrections: Ailey, Collins, Jamison",
      section: "Section 5 · The score is a bill, and three corrections",
      body: `A course like this attracts a certain kind of story, and three of the most repeated stories about Black dance are wrong or unprovable. Correcting them is not a digression. It is the discipline that makes the rest of the argument worth believing.

**Correction one: Alvin Ailey is not an uncredited creator, and saying he is insults the record.** He has 161 linear feet at the Library of Congress, a collection built from gifts by his own company across four accessions, with a finding aid completed in 2024 that runs to individually described folders of choreographic works for other artists. He is in this course for the opposite reason: **his archive is where four other Black choreographers' contracts survive.** The correct sentence is not "Ailey was forgotten." It is "Ailey's institution outlived him and became the reason other people's paper exists at all," which is a more interesting fact and a checkable one.

**Correction two: Janet Collins, and the Metropolitan Opera.** The popular line is that she was the first Black prima ballerina at the Met in 1951. What the Met's own performance database actually records is this. Her debut was on **13 November 1951**, opening night of the 1951-52 season, a new production of *Aida* under general manager Rudolf Bing at the Metropolitan Opera House. Her credit line in the cast list is the single word **"Dance"**, marked Debut. The choreographer credited for that production is **Zachary Solov**. Her name returns in **105 records** in that database, the last of them a touring *Aida* at Maple Leaf Gardens, Toronto, on **25 May 1954**.

**And here is why the popular line cannot stand as written.** The same database records that on **7 January 1933**, at the world premiere of Louis Gruenberg's *The Emperor Jones*, the role of **Congo Witch Doctor** was performed by **Hemsley Winfield**, marked Debut. That is a named role credit for a Black dancer at the Met eighteen years before 1951. A 1934 letter from the Met's assistant manager Edward Ziegler, quoted in the same record, describes "a group of negro dancers called the Hemsley Winfield Art and Dance Group of which Hemsley Winfield was the solo dancer and played the part of 'The Witch Doctor' in the last scene," and adds that after Winfield's death "his place was taken by Leonardo Barres."

**The reconcilable version, which this course teaches instead of either headline.** Winfield was engaged for a single production in 1933. Collins was engaged as a company member across seasons from 1951. Both are firsts, of different kinds, and the ranking between them is a question about what counts, not a question about facts.

**But the detail this course actually cares about is the credit line.** Collins appears in the Met's own record as "Dance". The authorship credit for the choreography she performed went to Zachary Solov. She is remembered as a performer, in a database that names her 105 times, and she is not credited anywhere in it as an author. Note also that Virgil Thomson's Herald Tribune review of that opening night, preserved in the same record, praises "the personal beauty of Janet Collins" while dismissing the ballets around her. The performer is seen. The maker is somebody else.

**Correction three: Judith Jamison, and a date worth getting right.** She joined Alvin Ailey American Dance Theater in **1965**, premiered her first choreographic work *Divining* in **1984**, became artistic director in **1989** after Ailey's death, premiered *Hymn* in **1993** and *Sweet Release* in **1996**, published the autobiography *Dancing Spirit* in **1993**, received a Kennedy Center Honor in **1999**, and stepped down as artistic director in **2011**. She died on **9 November 2024**, a date this course prints because the Ailey organization states it in its own words on its own site.

**And her contract folder is closed until 2100.** So the last thing to notice is that all three corrections point the same way. The record is not absent. It is present, extensive, well described, and pointed somewhere other than at the question you want to ask it.

:::reveal Why is Alvin Ailey in this course, given that his archive runs to 161 linear feet? ||| Because his archive is where four other Black choreographers' contracts survive, so the correct claim is not that he was forgotten but that his institution outlived him and became the reason other people's paper exists.

:::reveal What credit line does the Metropolitan Opera's own performance record give Janet Collins for her 13 November 1951 debut, and who is credited as choreographer? ||| Her credit is the single word Dance, marked as a debut, and the choreographer credited for that production of Aida is Zachary Solov.

## Vocabulary
- **Credit line**: the way a name is listed in a cast record, which for Janet Collins at the Met is the word Dance rather than any authorship credit.
- **Company member**: an artist engaged across seasons, as distinct from a guest engaged for one production, which is the distinction that reconciles the Winfield and Collins claims.
- **Accession**: one transfer of material into an archive, of which the Ailey collection has four.
- **Artistic director emerita**: the title Judith Jamison held after stepping down from leading the company in 2011.
- **Qualified superlative**: a first that holds only once you specify what counts, which is what both Met claims turn out to be.

## Sources
Metropolitan Opera Archives. (n.d.). *The Emperor Jones, Metropolitan Opera House, January 7, 1933* [Performance record CID 112640]. https://archives.metopera.org/MetOperaSearch/record.jsp?dockey=0366469
Metropolitan Opera Archives. (n.d.). *Aida, Metropolitan Opera House, November 13, 1951* [Performance record CID 158000]. https://archives.metopera.org/MetOperaSearch/record.jsp?dockey=0369793
Alvin Ailey American Dance Theater. (2024). *Remembering Judith Jamison*. https://ailey.org/blog/remembering-judith-jamison
Library of Congress, Music Division. (2024). *Alvin Ailey American Dance Theater Collection* [Finding aid], call no. ML31.A38. https://hdl.loc.gov/loc.music/eadmus.mu024021`,
    },
    {
      slug: "section-5-quiz",
      title: "Section 5 quiz · The score, the fees, and the corrections",
      section: "Section 5 · The score is a bill, and three corrections",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Who choreographed Angelitos Negros?",
            options: [
              "Donald McKayle",
              "Doris Humphrey, whose Air for the G String appears in the same catalog of score excerpts",
              "Mark Morris, whose All Fours was notated by Sandra Aberkalns in 2004",
              "Talley Beatty, whose contracts survive in the Ailey collection with a royalties schedule",
            ],
            correctIndex: 0,
            explanation:
              "Donald McKayle. Humphrey and Morris appear alongside him in the same Dance Notation Bureau catalog, and Beatty appears elsewhere in this course.",
            sourceLessonSlug: "the-score-is-a-bill",
          },
          {
            prompt: "In what year was Angelitos Negros made?",
            options: [
              "1972",
              "2011, which is the year the score of the work was written rather than the year of the work",
              "1928, the year of the earliest work listed in the same catalog of score excerpts",
              "2003, the year of the single Dance Notation Bureau item in another collection",
            ],
            correctIndex: 0,
            explanation:
              "The work dates from 1972 and the notation year is 2011, a gap of thirty-nine years. Both numbers appear in the same catalog entry.",
            sourceLessonSlug: "the-score-is-a-bill",
          },
          {
            prompt: "Who notated Angelitos Negros?",
            options: [
              "Mary Corey",
              "Sandra Aberkalns, who notated a work by Mark Morris listed in the same catalog",
              "Jane Marriett, who notated a Doris Humphrey work listed in the same catalog",
              "K. Wright Dunkley, who notated a Joan Woodbury work listed in the same catalog",
            ],
            correctIndex: 0,
            explanation:
              "Mary Corey, in 2011. The other three notators are real names from adjacent entries in the same catalog, which is what makes them useful distractors.",
            sourceLessonSlug: "the-score-is-a-bill",
          },
          {
            prompt: "In what year was the score of Angelitos Negros written?",
            options: [
              "2011",
              "1972, the year the work itself was made and first performed",
              "1975, when the notation of an earlier Doris Humphrey work was completed",
              "2004, when the notation of a Mark Morris work in the same catalog was completed",
            ],
            correctIndex: 0,
            explanation:
              "2011, thirty-nine years after the work was made, which is why the course says the dance can be performed by people who never met anyone who danced it.",
            sourceLessonSlug: "the-score-is-a-bill",
          },
          {
            prompt: "What does the Dance Notation Bureau charge to request a score or DVD for examination?",
            options: [
              "Twenty dollars per dance",
              "Two hundred and ninety-five dollars for universities and educational institutes",
              "Three hundred and ninety-five dollars for professional dance companies",
              "One hundred dollars, rising with the complexity of the work being examined",
            ],
            correctIndex: 0,
            explanation:
              "A nominal fee of twenty dollars per dance to borrow a score or DVD for examination. The 295 and 395 figures are the Bureau's service fee, charged later in the stack.",
            sourceLessonSlug: "the-score-is-a-bill",
          },
          {
            prompt: "What is the Bureau's service fee for a university or educational institute?",
            options: [
              "Two hundred and ninety-five dollars",
              "Three hundred and ninety-five dollars, which is the figure charged to dance companies",
              "Twenty dollars per dance, the same as the fee for requesting a score for examination",
              "Between thirty and one hundred dollars, depending on the number of performances",
            ],
            correctIndex: 0,
            explanation:
              "The Bureau charges $295 for universities or educational institutes and $395 for dance companies. The other figures are the inquiry fee and the per-performance royalty range.",
            sourceLessonSlug: "the-score-is-a-bill",
          },
          {
            prompt: "What is the Bureau's service fee for a dance company?",
            options: [
              "Three hundred and ninety-five dollars",
              "Two hundred and ninety-five dollars, the figure charged to educational institutions",
              "One thousand five hundred dollars per week, plus the expenses of the person staging it",
              "Several thousand dollars, depending on the choreographer and the work's complexity",
            ],
            correctIndex: 0,
            explanation:
              "$395 for dance companies against $295 for educational institutes. The weekly figure is the stager's fee and the several-thousand figure is the top of the licence fee range.",
            sourceLessonSlug: "the-score-is-a-bill",
          },
          {
            prompt: "What range does the Bureau give for licence fees?",
            options: [
              "One hundred dollars to several thousand",
              "Thirty to one hundred dollars, which is the range for each public performance given",
              "Fifteen hundred to two thousand dollars, charged for each week of rehearsal",
              "Twenty dollars per dance, which is the fee charged when a score is first requested",
            ],
            correctIndex: 0,
            explanation:
              "The Bureau says licence fees vary widely, often falling between $100 and several thousand dollars, depending on the choreographer and the complexity of the work.",
            sourceLessonSlug: "the-score-is-a-bill",
          },
          {
            prompt: "What per-performance royalty range does the Bureau give?",
            options: [
              "Thirty to one hundred dollars",
              "One hundred dollars to several thousand, depending on the choreographer and complexity",
              "Two hundred and ninety-five to three hundred and ninety-five dollars, depending on the licensee",
              "Fifteen hundred to two thousand dollars, plus the expenses of the person staging the work",
            ],
            correctIndex: 0,
            explanation:
              "Thirty to one hundred dollars per performance, due one week before the first public performance. The other three ranges are the licence fee, the service fee and the stager's fee.",
            sourceLessonSlug: "the-score-is-a-bill",
          },
          {
            prompt: "What does the Bureau say a stager generally costs?",
            options: [
              "Fifteen hundred to two thousand dollars per week, plus expenses",
              "Thirty to one hundred dollars for each public performance of the staged work",
              "A flat fee of three hundred and ninety-five dollars for a professional company",
              "A percentage of box office receipts negotiated separately with each company",
            ],
            correctIndex: 0,
            explanation:
              "The stager's fee is due one week before the first rehearsal and generally ranges from $1500 to $2000 per week plus expenses, which is by some distance the largest line in the stack.",
            sourceLessonSlug: "the-score-is-a-bill",
          },
          {
            prompt: "When is the stager's fee due?",
            options: [
              "One week before the first rehearsal",
              "One week before the first public performance, alongside the per-performance royalty",
              "On the day the score is first borrowed from the Bureau for examination",
              "Within thirty days of the final performance of the licensed run",
            ],
            correctIndex: 0,
            explanation:
              "The stager's fee is due a week before the first rehearsal, while the royalty is due a week before the first public performance. Two different deadlines in the same schedule.",
            sourceLessonSlug: "the-score-is-a-bill",
          },
          {
            prompt: "What is a stager?",
            options: [
              "The specialist who reads a score and teaches the work to a company",
              "The archivist who writes a dance down in a notation system for the first time",
              "The producer who books a licensed work into a theatre and sells tickets for it",
              "The examiner who decides whether a notated deposit is detailed enough to register",
            ],
            correctIndex: 0,
            explanation:
              "The person who writes the dance down is a notator, which is a different role. The stager reads the score and puts the work on bodies, billed by the week.",
            sourceLessonSlug: "the-score-is-a-bill",
          },
          {
            prompt: "What three functions does the course say a notated score performs at once?",
            options: [
              "Fixation, transmission and revenue",
              "Registration, publication and renewal of the copyright in the work",
              "Preservation, restoration and exhibition of a company's historical repertory",
              "Description, arrangement and access, which are the three functions of a finding aid",
            ],
            correctIndex: 0,
            explanation:
              "It fixes the work for section 102(a), lets a stranger perform it decades later, and generates a licence fee and per-performance royalty. Description, arrangement and access are the three functions of archival processing, not of a score.",
            sourceLessonSlug: "the-score-is-a-bill",
          },
          {
            prompt: "What does the course say a choreographer who was never notated lost?",
            options: [
              "All three functions at once",
              "Only the revenue function, since copyright could still attach through video fixation",
              "Only the transmission function, since companies kept repertory by oral instruction",
              "Nothing legally significant, since notation was never an accepted deposit format",
            ],
            correctIndex: 0,
            explanation:
              "No fixation, so no reliable copyright; no transmission, so the work dies with the last body that knew it; and no royalty from a revival that will never happen. Video is an alternative fixation but not one that produces a stageable score.",
            sourceLessonSlug: "the-score-is-a-bill",
          },
          {
            prompt: "How many Labanotation scores does the Dance Notation Bureau say its library holds?",
            options: [
              "More than eight hundred",
              "More than eight thousand, held across a collection of 256.78 cubic feet",
              "Exactly one hundred and sixty-one, matching the linear feet of a major dance archive",
              "It does not say, and the figure could not be established from any published source",
            ],
            correctIndex: 0,
            explanation:
              "The Bureau's own library page says more than 800 Labanotation scores of theatrical dances, and names Petipa and William Forsythe as examples.",
            sourceLessonSlug: "the-score-is-a-bill",
          },
          {
            prompt: "Which choreographers does the Bureau name as examples on its library page?",
            options: [
              "Petipa and William Forsythe",
              "Donald McKayle and Mary Corey, the choreographer and notator of a work in its catalog",
              "Alvin Ailey and Katherine Dunham, both of whom appear in its catalog filter",
              "Doris Humphrey and Mark Morris, whose works appear among its video score excerpts",
            ],
            correctIndex: 0,
            explanation:
              "The library page names Petipa's Sleeping Beauty and Forsythe's Artifact II. The other names are real and appear elsewhere on the Bureau's site, which is what makes them plausible.",
            sourceLessonSlug: "the-score-is-a-bill",
          },
          {
            prompt: "What does the Bureau's own catalog filter show about Black choreographers?",
            options: [
              "It lists several of them, including Dunham, Beatty, McKayle, Ailey, Dove and Jones",
              "It lists none of them, which confirms that the notation record excludes Black choreographers",
              "It lists only Donald McKayle, whose Angelitos Negros is the sole notated example",
              "It does not filter by choreographer at all, so nothing can be established from it",
            ],
            correctIndex: 0,
            explanation:
              "Because the filter names Katherine Dunham, Talley Beatty, Donald McKayle, Alvin Ailey, Ulysses Dove and Bill T. Jones, the course refuses to repeat the assumption that Black choreographers are absent from the notation record.",
            sourceLessonSlug: "the-score-is-a-bill",
          },
          {
            prompt: "What could not be established about notation coverage in this pass?",
            options: [
              "What proportion of the scores are of works by Black choreographers",
              "Whether the Bureau holds any scores by Black choreographers at all",
              "How much the Bureau charges to license a score for public performance",
              "Whether Labanotation is an acceptable fixation for copyright registration",
            ],
            correctIndex: 0,
            explanation:
              "The individual catalog records load dynamically and could not be enumerated, so the honest finding is a confirmed presence and an unknown proportion rather than a proven absence.",
            sourceLessonSlug: "the-score-is-a-bill",
          },
          {
            prompt: "What does the course mean by a confirmed presence and an unknown proportion?",
            options: [
              "You can show something exists but cannot count how much of it there is",
              "You can count something precisely but cannot verify who created each instance",
              "A source names a figure without giving the method by which it was calculated",
              "Two sources agree on a total but disagree on how to divide it into categories",
            ],
            correctIndex: 0,
            explanation:
              "It is the honest shape of the notation finding, and stating it that way is what stops the course from converting a gap in its own research into a claim about the world.",
            sourceLessonSlug: "the-score-is-a-bill",
          },
          {
            prompt: "What contrast does the course draw between being remembered as biography and as property?",
            options: [
              "The archive is comparatively generous and the registry is not",
              "The registry preserves more detail than the archive, but restricts access to it",
              "Biography is preserved by private foundations and property by federal libraries",
              "Property survives longer than biography because a score outlasts a paper record",
            ],
            correctIndex: 0,
            explanation:
              "Shelf space is cheap. A notator's salary for the weeks it takes to write a dance down is not, which is why the two kinds of remembering have such different distributions.",
            sourceLessonSlug: "the-score-is-a-bill",
          },
          {
            prompt: "Why does the course say Alvin Ailey is not an uncredited creator?",
            options: [
              "His collection at the Library of Congress runs to 161 linear feet",
              "He registered every one of his works with the Copyright Office before 1978",
              "The Dance Notation Bureau holds Labanotation scores of his complete repertory",
              "His choreography for Revelations survives in full in two boxes of the collection",
            ],
            correctIndex: 0,
            explanation:
              "The collection came in as gifts from his own company across four accessions, with a finding aid completed in 2024. The Revelations choreography survives in two folders, not two boxes, and those are notes rather than the work.",
            sourceLessonSlug: "three-corrections-ailey-collins-jamison",
          },
          {
            prompt: "Why is Ailey in this course at all, then?",
            options: [
              "His archive is where other Black choreographers' contracts survive",
              "He was the first Black choreographer to receive a copyright registration for a dance",
              "His company commissioned the earliest Labanotation score of a Black choreographer's work",
              "He testified before Congress during the revision that produced the 1976 Act",
            ],
            correctIndex: 0,
            explanation:
              "Box 178 holds contract folders for Talley Beatty, Janet Collins, Katherine Dunham and Judith Jamison. His institution outlived him and became the reason other people's paper exists.",
            sourceLessonSlug: "three-corrections-ailey-collins-jamison",
          },
          {
            prompt: "On what date did Janet Collins debut at the Metropolitan Opera?",
            options: [
              "13 November 1951",
              "7 January 1933, at the world premiere of an opera by Louis Gruenberg",
              "25 May 1954, at a touring performance in Toronto that closed her Met career",
              "17 November 1951, the second performance of that season's new production",
            ],
            correctIndex: 0,
            explanation:
              "Opening night of the 1951-52 season, a new production of Aida. The 1933 date is Hemsley Winfield's debut and 25 May 1954 is Collins's last record in the database.",
            sourceLessonSlug: "three-corrections-ailey-collins-jamison",
          },
          {
            prompt: "In which opera did Janet Collins make her Met debut?",
            options: [
              "Aida",
              "The Emperor Jones, in which a Black dancer had made a role debut in 1933",
              "Carmen, which she also danced on tour during the 1953-54 season",
              "Pagliacci, which shared the bill on the night of the world premiere in 1933",
            ],
            correctIndex: 0,
            explanation:
              "A new production of Verdi's Aida under general manager Rudolf Bing. The Emperor Jones and Pagliacci shared the 1933 bill, and Carmen appears later in her own touring records.",
            sourceLessonSlug: "three-corrections-ailey-collins-jamison",
          },
          {
            prompt: "What credit line does the Met's performance record give Janet Collins?",
            options: [
              "Dance",
              "Prima ballerina, marked as a debut in the cast list for opening night",
              "Choreographer, sharing the credit with the production's ballet master",
              "Congo Witch Doctor, the role credit given to a Black dancer in an earlier season",
            ],
            correctIndex: 0,
            explanation:
              "The single word Dance, marked Debut. The database contains no prima ballerina credit, and the Congo Witch Doctor role credit belongs to Hemsley Winfield in 1933.",
            sourceLessonSlug: "three-corrections-ailey-collins-jamison",
          },
          {
            prompt: "Who is credited as choreographer of the production Janet Collins debuted in?",
            options: [
              "Zachary Solov",
              "Margaret Webster, credited on the same record for the production itself",
              "Rolf Gérard, credited on the same record for the designs",
              "Janet Collins, who is credited both as dancer and as choreographer",
            ],
            correctIndex: 0,
            explanation:
              "Zachary Solov. Webster is credited for production and Gérard for design on the same record, and Collins carries no authorship credit anywhere in it.",
            sourceLessonSlug: "three-corrections-ailey-collins-jamison",
          },
          {
            prompt: "How many records does Janet Collins's name appear in within the Met performance database?",
            options: [
              "105",
              "Nine, which is the number in the two months following her debut",
              "Sixteen, which is the number in the final calendar year she appeared",
              "Two, one for her debut and one for her final touring performance",
            ],
            correctIndex: 0,
            explanation:
              "105 records, between November 1951 and May 1954. The smaller counts are true of individual periods within that span.",
            sourceLessonSlug: "three-corrections-ailey-collins-jamison",
          },
          {
            prompt: "What is the last performance record in the database for Janet Collins?",
            options: [
              "A touring Aida in Toronto on 25 May 1954",
              "A performance at the Metropolitan Opera House on 13 November 1951",
              "A Carmen at the Boston Opera House on 28 April 1954",
              "An Aida at the Public Auditorium in Cleveland on 22 April 1954",
            ],
            correctIndex: 0,
            explanation:
              "Aida at Maple Leaf Gardens, Toronto, on 25 May 1954. The Boston and Cleveland dates are real records from the same season, earlier in that spring tour.",
            sourceLessonSlug: "three-corrections-ailey-collins-jamison",
          },
          {
            prompt: "Who danced the Congo Witch Doctor at the Met in 1933?",
            options: [
              "Hemsley Winfield",
              "Leonardo Barres, who is named in the record as taking the part after the first dancer died",
              "Lawrence Tibbett, who sang the title role in the same production",
              "Janet Collins, eighteen years before her better-known appearance in another opera",
            ],
            correctIndex: 0,
            explanation:
              "Hemsley Winfield, marked Debut, in the world premiere of The Emperor Jones. Barres took the part later, Tibbett sang Brutus Jones, and Collins debuted in 1951.",
            sourceLessonSlug: "three-corrections-ailey-collins-jamison",
          },
          {
            prompt: "On what date was that performance?",
            options: [
              "7 January 1933",
              "13 November 1951, the opening night of a new production of Aida",
              "18 March 1933, the date of the last performance of the run that season",
              "15 January 1934, the date recorded in a letter from the Met's assistant manager",
            ],
            correctIndex: 0,
            explanation:
              "Saturday 7 January 1933, a matinee broadcast and the world premiere of the opera. The 1951 date belongs to Janet Collins.",
            sourceLessonSlug: "three-corrections-ailey-collins-jamison",
          },
          {
            prompt: "What does the 1934 letter from the Met's assistant manager describe?",
            options: [
              "A group of dancers led by Hemsley Winfield, engaged for the production",
              "The Met's decision to engage its first Black company member on a seasonal contract",
              "A dispute over the royalties owed to the choreographer of the production",
              "The Copyright Office's refusal to register the choreography for the opera",
            ],
            correctIndex: 0,
            explanation:
              "Edward Ziegler's letter describes the Hemsley Winfield Art and Dance Group, with Winfield as solo dancer playing the Witch Doctor in the last scene, and notes that Leonardo Barres later took his place.",
            sourceLessonSlug: "three-corrections-ailey-collins-jamison",
          },
          {
            prompt: "How does the course reconcile the Winfield and Collins claims?",
            options: [
              "Winfield was engaged for one production, Collins across seasons",
              "Winfield's credit was for choreography and Collins's was for performance",
              "Winfield performed on tour only and Collins performed at the opera house itself",
              "Winfield's engagement predates the database and cannot be compared with hers",
            ],
            correctIndex: 0,
            explanation:
              "Both are firsts of different kinds, and ranking them is a question about what counts rather than about facts. Winfield does have a role credit, and Collins's credit is the word Dance.",
            sourceLessonSlug: "three-corrections-ailey-collins-jamison",
          },
          {
            prompt: "What detail about Janet Collins does the course say it actually cares about?",
            options: [
              "She is named 105 times and credited as an author nowhere",
              "She was the first Black artist to appear on the Metropolitan Opera stage",
              "She left the company after three seasons rather than the five usually reported",
              "Her contract with another company survives in a federal archive",
            ],
            correctIndex: 0,
            explanation:
              "The performer is seen and the maker is somebody else, which is the course's thesis expressed in one credit line. Her contract folder does survive in the Ailey collection, but that is a different point.",
            sourceLessonSlug: "three-corrections-ailey-collins-jamison",
          },
          {
            prompt: "What does Virgil Thomson's Herald Tribune review of that opening night say about Collins?",
            options: [
              "It praises her personal beauty while dismissing the ballets around her",
              "It credits her with the choreography of the triumphal scene",
              "It describes her debut as the most significant event of the season",
              "It does not mention her, which is the point the course draws from it",
            ],
            correctIndex: 0,
            explanation:
              "The review preserved in the Met's own record says the ballets, save for the personal beauty of Janet Collins, offered only anachronism, sexual triviality and unskilled execution.",
            sourceLessonSlug: "three-corrections-ailey-collins-jamison",
          },
          {
            prompt: "In what year did Judith Jamison join Alvin Ailey American Dance Theater?",
            options: [
              "1965",
              "1984, the year her first choreographic work premiered in Kansas City",
              "1989, the year she became artistic director of the company",
              "1993, the year her autobiography was published and Hymn premiered",
            ],
            correctIndex: 0,
            explanation:
              "1965. The other three years are all real landmarks in the same chronology, which is what makes them good distractors.",
            sourceLessonSlug: "three-corrections-ailey-collins-jamison",
          },
          {
            prompt: "What was Judith Jamison's first choreographic work, and when did it premiere?",
            options: [
              "Divining, in 1984",
              "Hymn, in 1993, choreographed in honour of the company's founder",
              "Sweet Release, in 1996, premiered at Lincoln Center with a jazz orchestra",
              "Dancing Spirit, in 1993, which was published rather than premiered",
            ],
            correctIndex: 0,
            explanation:
              "Divining premiered in 1984. Hymn and Sweet Release are later works of hers, and Dancing Spirit is her autobiography rather than a dance.",
            sourceLessonSlug: "three-corrections-ailey-collins-jamison",
          },
          {
            prompt: "When did Judith Jamison become artistic director of the company?",
            options: [
              "1989, after Ailey's death",
              "1984, the year she premiered her first choreographic work for the company",
              "1999, the year she received a Kennedy Center Honor",
              "2011, the year she stepped down from leading the company",
            ],
            correctIndex: 0,
            explanation:
              "1989, following Alvin Ailey's death in December of that year. 2011 is when she stepped down and became artistic director emerita.",
            sourceLessonSlug: "three-corrections-ailey-collins-jamison",
          },
          {
            prompt: "When did Judith Jamison die?",
            options: [
              "9 November 2024",
              "1 December 1989, the date the company's founding choreographer died in New York",
              "9 November 2011, the year she stepped down as artistic director of the company",
              "The date is disputed and this course declines to print one",
            ],
            correctIndex: 0,
            explanation:
              "The course prints 9 November 2024 because the Ailey organization states it on its own site in its own words. 1 December 1989 is Alvin Ailey's death date from the same chronology.",
            sourceLessonSlug: "three-corrections-ailey-collins-jamison",
          },
          {
            prompt: "In what year did Judith Jamison receive a Kennedy Center Honor?",
            options: [
              "1999",
              "1988, the year the company's founding choreographer received the same honour",
              "2002, the year she and the dance foundation received the National Medal of Arts",
              "1993, the year her autobiography Dancing Spirit was published",
            ],
            correctIndex: 0,
            explanation:
              "1999. Alvin Ailey received his Kennedy Center Honor in 1988, and 2002 is the National Medal of Arts, both from the same chronology.",
            sourceLessonSlug: "three-corrections-ailey-collins-jamison",
          },
          {
            prompt: "What does the course say all three corrections point toward?",
            options: [
              "The record is present and pointed somewhere other than at your question",
              "The record is missing, and the gaps can only be filled by oral history",
              "The record was deliberately falsified by the institutions that keep it",
              "The record is accurate, and the popular accounts are accurate too",
            ],
            correctIndex: 0,
            explanation:
              "Ailey's archive is extensive, Collins is named 105 times, and Jamison's own contract is described in a federal finding aid and closed until 2100. Presence pointed elsewhere is not the same as absence.",
            sourceLessonSlug: "three-corrections-ailey-collins-jamison",
          },
          {
            prompt: "Which works appear alongside Angelitos Negros in the Bureau's catalog of score excerpts?",
            options: [
              "Works by Doris Humphrey, Mark Morris and Joan Woodbury",
              "Works by Petipa, William Forsythe and George Balanchine",
              "Works by Alvin Ailey, Talley Beatty and Ulysses Dove",
              "Works by Katherine Dunham and Pearl Primus from the 1940s",
            ],
            correctIndex: 0,
            explanation:
              "Air for the G String by Humphrey, All Fours by Morris and Affectionate Infirmities by Woodbury sit beside it. Petipa and Forsythe are named on the Bureau's library page instead.",
            sourceLessonSlug: "the-score-is-a-bill",
          },
          {
            prompt: "When is the per-performance royalty due?",
            options: [
              "One week before the first public performance",
              "One week before the first rehearsal, alongside the fee charged by the stager",
              "On the day the score is borrowed from the Bureau for examination",
              "Within thirty days after the final performance of the licensed run",
            ],
            correctIndex: 0,
            explanation:
              "The royalty is due a week before the first public performance, while the stager's fee is due a week before the first rehearsal.",
            sourceLessonSlug: "the-score-is-a-bill",
          },
          {
            prompt: "How long after its premiere was Angelitos Negros notated?",
            options: [
              "Thirty-nine years",
              "Forty-three years, the gap between a company disbanding and a notation folder being dated",
              "Seventeen years, the gap between a choreographer's death and a collection being processed",
              "Fifteen years, the gap between a gift arriving at a library and its description",
            ],
            correctIndex: 0,
            explanation:
              "Made in 1972 and notated in 2011. The other three intervals are real figures from elsewhere in this course, attached to different facts.",
            sourceLessonSlug: "the-score-is-a-bill",
          },
          {
            prompt: "What does the Bureau's library page call its collection?",
            options: [
              "More than eight hundred Labanotation scores of theatrical dances",
              "The complete notated record of American concert dance since 1900",
              "A collection of 256.78 cubic feet held at a university library",
              "A catalog of video excerpts rather than of full performance scores",
            ],
            correctIndex: 0,
            explanation:
              "The page describes more than 800 Labanotation scores of theatrical dances, from Petipa's Sleeping Beauty to Forsythe's Artifact II.",
            sourceLessonSlug: "the-score-is-a-bill",
          },
          {
            prompt: "Why does the course price a Labanotation score at all?",
            options: [
              "To show that a score is a revenue instrument as well as a record",
              "To show that notation is unaffordable for every company in the United States",
              "To show that the Bureau profits more than the choreographers whose works it holds",
              "To show that copyright registration fees are the main barrier to protection",
            ],
            correctIndex: 0,
            explanation:
              "A licence fee and a per-performance royalty flow to whoever holds the rights, which is the cleanest answer to the question of whom the record served.",
            sourceLessonSlug: "the-score-is-a-bill",
          },
          {
            prompt: "Who was the general manager of the Metropolitan Opera when Janet Collins debuted?",
            options: [
              "Rudolf Bing",
              "Zachary Solov, who is credited on the same record as the production's choreographer",
              "Edward Ziegler, who wrote the 1934 letter about an earlier production",
              "Margaret Webster, who is credited on the same record for the production",
            ],
            correctIndex: 0,
            explanation:
              "The record for opening night of the 1951-52 season names Rudolf Bing as general manager. Solov, Ziegler and Webster all appear in this section in other roles.",
            sourceLessonSlug: "three-corrections-ailey-collins-jamison",
          },
          {
            prompt: "What kind of performance was the 7 January 1933 Emperor Jones at the Met?",
            options: [
              "A world premiere, given as a matinee broadcast",
              "A revival mounted for the company's spring touring season that year",
              "A gala concert performance without staging or costumes of any kind",
              "A student matinee performed by members of the company's training programme",
            ],
            correctIndex: 0,
            explanation:
              "The record marks it a world premiere and a matinee broadcast, sharing the bill with Pagliacci.",
            sourceLessonSlug: "three-corrections-ailey-collins-jamison",
          },
          {
            prompt: "Who sang the title role opposite Hemsley Winfield in 1933?",
            options: [
              "Lawrence Tibbett",
              "Leonardo Barres, who later took over the dancing role Winfield had created",
              "Louis Gruenberg, who was also the composer of the opera itself",
              "Marek Windheim, who sang the role of Henry Smithers that evening",
            ],
            correctIndex: 0,
            explanation:
              "Lawrence Tibbett sang Brutus Jones. Gruenberg composed the opera, Windheim sang Smithers, and Barres was a dancer.",
            sourceLessonSlug: "three-corrections-ailey-collins-jamison",
          },
          {
            prompt: "In what year did Judith Jamison step down from leading Alvin Ailey American Dance Theater?",
            options: [
              "2011",
              "1989, the year she took the post following the death of the company's founder",
              "1999, the year she received a Kennedy Center Honor for her work",
              "2024, the year of her death in New York at the age of eighty-one",
            ],
            correctIndex: 0,
            explanation:
              "She led the company from 1989 and stepped down in 2011, continuing as artistic director emerita.",
            sourceLessonSlug: "three-corrections-ailey-collins-jamison",
          },
          {
            prompt: "What is a qualified superlative, as the course uses the term?",
            options: [
              "A first that holds only once you specify what counts",
              "A claim about achievement that a named institution has formally certified",
              "A comparison between two artists working in entirely different periods",
              "A record that an archive has restricted until a fixed future date",
            ],
            correctIndex: 0,
            explanation:
              "Both Met claims turn out to be of this kind: Winfield was engaged for one production and Collins across seasons, so ranking them is a question about what counts.",
            sourceLessonSlug: "three-corrections-ailey-collins-jamison",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // FINAL ASSESSMENT — pools 45, serves 10, draws on every teaching lesson
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "dance-credit-final",
      title: "Final assessment · The statute, the archive, and the score",
      section: "Final assessment",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 10,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Before 1978, what did a dance have to do to be registrable?",
            options: [
              "Pass as a dramatic composition",
              "Be fixed in one of the notation systems the Copyright Office had formally approved",
              "Be performed publicly with a copyright notice displayed in the printed programme",
              "Be composed for skilled dancers rather than for members of the general public",
            ],
            correctIndex: 0,
            explanation:
              "Class D was the only door, and it required the work to tell a story, develop a character, or express a theme or emotion. The skilled-performers distinction belongs to the modern social-dance rule.",
            sourceLessonSlug: "class-d-the-dance-that-had-to-pass-as-a-play",
          },
          {
            prompt: "Where did the story requirement come from?",
            options: [
              "A case a white dancer lost in 1892",
              "A regulation the Copyright Office promulgated in 1959 without any judicial precedent",
              "Language written into section 5 of the 1909 Act by Congress",
              "A committee report accompanying the general revision that produced the 1976 Act",
            ],
            correctIndex: 0,
            explanation:
              "Fuller v. Bemis, 50 F. 926 (C.C.S.D.N.Y. 1892). The 1959 regulation restated the rule the case had produced, and the 1976 legislative history is about social dances and simple routines.",
            sourceLessonSlug: "fuller-v-bemis-and-the-thin-deposit-record",
          },
          {
            prompt: "What does 17 U.S.C. 102(a)(4) cover?",
            options: [
              "Pantomimes and choreographic works",
              "Dramatic works, including any accompanying music written for them",
              "Motion pictures and other audiovisual works, including videogame animations",
              "Sound recordings, which the same Act made a category of authorship",
            ],
            correctIndex: 0,
            explanation:
              "Category (4). Dramatic works are (3), motion pictures are (6) and sound recordings are (7), all real categories in the same list.",
            sourceLessonSlug: "january-1-1978",
          },
          {
            prompt: "What is the effective date on which choreography became a category of authorship?",
            options: [
              "1 January 1978",
              "19 October 1976, the date the President signed the general revision into law",
              "1 January 1959, the date of the regulation creating Class D for dramatic choreography",
              "28 April 1986, the date the leading appellate opinion on choreography was decided",
            ],
            correctIndex: 0,
            explanation:
              "The 1976 Act took effect on 1 January 1978, which is the line every before-and-after claim in this course runs along.",
            sourceLessonSlug: "january-1-1978",
          },
          {
            prompt: "What does Compendium 805.3(C) say about an improvised dance?",
            options: [
              "It cannot be copyrighted unless the improvisation was fixed",
              "It can be copyrighted if the choreographer names the theme the dancers improvise on",
              "It can be copyrighted only if it is performed by the choreographer personally",
              "It cannot be copyrighted under any circumstances, fixed or unfixed",
            ],
            correctIndex: 0,
            explanation:
              "The Office also says a work may be registered even if the choreographer left room for improvisation, so improvisation within a fixed work is not fatal.",
            sourceLessonSlug: "fixation-and-the-two-lists",
          },
          {
            prompt: "Which entry appears on the Compendium's unprotected social-dance list but not on Circular 52's?",
            options: [
              "Break dances",
              "Line dances, which appear only in the practice manual and not in the public circular",
              "Ballroom dances, which the circular treats as commonplace movements instead",
              "Square dances, which the circular routes to the compilations discussion",
            ],
            correctIndex: 0,
            explanation:
              "Both lists carry ballroom, folk, line, square and swing. Only the practice manual adds break dances.",
            sourceLessonSlug: "fixation-and-the-two-lists",
          },
          {
            prompt: "Who created the form named in the practice manual's list but not in the circular's?",
            options: [
              "Black and Puerto Rican young people in the Bronx",
              "Ballroom instructors formalising couple dances for competition in the 1930s",
              "Concert choreographers adapting social steps for the theatrical stage",
              "Touring companies developing new material during European residencies",
            ],
            correctIndex: 0,
            explanation:
              "Breaking. Its appearance in the operative manual's unregistrable list, and its absence from the public circular, is a documentary fact rather than a conspiracy.",
            sourceLessonSlug: "fixation-and-the-two-lists",
          },
          {
            prompt: "What did Balanchine deposit when registering The Nutcracker choreography?",
            options: [
              "A videotape of a dress rehearsal",
              "A Labanotation score commissioned from the Dance Notation Bureau in 1981",
              "A written scene-by-scene description with diagrams of the stage patterns",
              "Sixty still photographs taken during a New York City Ballet performance",
            ],
            correctIndex: 0,
            explanation:
              "A videotape of a dress rehearsal, filed with a December 1981 registration. The sixty photographs are the allegedly infringing book, not the deposit.",
            sourceLessonSlug: "horgan-v-macmillan",
          },
          {
            prompt: "What standard did the Second Circuit restore in Horgan v. Macmillan?",
            options: [
              "Substantial similarity",
              "Whether the original could be recreated from the allegedly infringing copy",
              "Whether the defendant had access to the registered deposit copy",
              "Whether the copied portion exceeded a set proportion of the original work",
            ],
            correctIndex: 0,
            explanation:
              "The recreate-from-the-copy test is precisely what the court rejected as the district court's error.",
            sourceLessonSlug: "horgan-v-macmillan",
          },
          {
            prompt: "Did the Second Circuit find that the book infringed Balanchine's copyright?",
            options: [
              "No, it reversed and remanded",
              "Yes, and it ordered the book withdrawn from distribution",
              "Yes, but it left the amount of damages for the district court to determine",
              "No, and it dismissed the case with prejudice on the merits",
            ],
            correctIndex: 0,
            explanation:
              "It rejected the district court's standard and sent the case back. Saying the court found infringement is a claim an educator will disprove by reading the opinion.",
            sourceLessonSlug: "horgan-v-macmillan",
          },
          {
            prompt: "What did Horgan's footnote 8 record about Balanchine's registration?",
            options: [
              "Appellees questioned its validity over undisclosed preexisting material",
              "It had expired because the estate failed to renew it within the statutory period",
              "The Copyright Office had initially refused it and reversed on reconsideration",
              "It covered the videotape as an audiovisual work rather than the choreography",
            ],
            correctIndex: 0,
            explanation:
              "The application allegedly failed to refer to preexisting material. If the best-resourced choreographic estate in America held a registration open to attack, the register's practical value to others was thinner still.",
            sourceLessonSlug: "horgan-v-macmillan",
          },
          {
            prompt: "Which company's fourteen-second work did the Copyright Office Review Board refuse to register in 2016?",
            options: [
              "Pilobolus",
              "Alvin Ailey American Dance Theater, in a claim over an excerpt from Revelations",
              "Epic Games, in a claim over an animation sold to players of its videogame",
              "The New York City Ballet, in a claim over a section of its Nutcracker production",
            ],
            correctIndex: 0,
            explanation:
              "Pilobolus, Inc., in the Five-Petal Flower decision of 14 July 2016. Epic Games was a defendant rather than an applicant.",
            sourceLessonSlug: "hanagami-pilobolus-and-the-fortnite-story",
          },
          {
            prompt: "Why does the course treat the Pilobolus refusal as a control case?",
            options: [
              "A celebrated predominantly white company lost under the same rule",
              "It was the first refusal the Review Board ever issued for a choreographic claim",
              "The company had registered dozens of works successfully before that one",
              "It concerned a social dance rather than a composed concert work",
            ],
            correctIndex: 0,
            explanation:
              "It shows the duration and authorship rule is not applied along racial lines, which is why the defensible argument is about the rule's disparate effects rather than about anyone's intent.",
            sourceLessonSlug: "hanagami-pilobolus-and-the-fortnite-story",
          },
          {
            prompt: "What did the Ninth Circuit hold is protectable in choreography?",
            options: [
              "The selection and arrangement of otherwise unprotectable elements",
              "Each individual pose, provided it was devised by the choreographer",
              "The performance as recorded, rather than the underlying arrangement of movement",
              "Only sequences long enough to exceed the simple-routine threshold in the statute",
            ],
            correctIndex: 0,
            explanation:
              "The panel reasoned by analogy to music and expressly rejected reducing choreography to poses. There is no statutory duration threshold.",
            sourceLessonSlug: "hanagami-pilobolus-and-the-fortnite-story",
          },
          {
            prompt: "Which claim about the Fortnite litigation does this course refuse to make?",
            options: [
              "That applications were refused because the applicants were Black",
              "That the plaintiff who won a published appellate precedent is not Black",
              "That the rule which sinks short vernacular steps is duration and form",
              "That the same rule sank a fourteen-second work by a white-led company",
            ],
            correctIndex: 0,
            explanation:
              "The other three statements are things the course does say, and they are the components of the disparate-effect argument it makes instead of the accusation.",
            sourceLessonSlug: "hanagami-pilobolus-and-the-fortnite-story",
          },
          {
            prompt: "Which folder in the Ailey collection has a royalties schedule laid in?",
            options: [
              "178/1, Talley Beatty's contracts",
              "178/5, Janet Collins's contracts for 1973 and 1974",
              "178/7, Katherine Dunham's contracts for 1972 and undated",
              "221/5, holding correspondence and programme drafts for a single work",
            ],
            correctIndex: 0,
            explanation:
              "Laid in: Royalties schedule, at 178/1. Correspondence is laid into the Dunham and Butler folders, which is what makes those plausible.",
            sourceLessonSlug: "box-178",
          },
          {
            prompt: "Until what year is Judith Jamison's contract folder restricted?",
            options: [
              "2100",
              "2064, seventy-five years after the death of the company's founder",
              "2099, seventy-five years after the date of the contracts themselves",
              "It is not restricted, since the collection is open to research",
            ],
            correctIndex: 0,
            explanation:
              "The finding aid's note says the folder contains personally identifiable information and is restricted until 2100, under the general rule of seventy-five years after death.",
            sourceLessonSlug: "box-178",
          },
          {
            prompt: "What contrast does the Ailey finding aid make visible for Revelations?",
            options: [
              "The music survives as notation and the choreography survives as notes",
              "The choreography survives in full and the music was never written down",
              "Both survive completely, in adjacent boxes of the same series",
              "Neither survives, because both were destroyed before the collection was given",
            ],
            correctIndex: 0,
            explanation:
              "Two folders of correspondence, programme drafts and Ailey's notes for the choreography, against two boxes of choral scores with each arranger named for the music.",
            sourceLessonSlug: "box-178",
          },
          {
            prompt: "Across the 161 linear feet the Ailey finding aid describes, how much Labanotation is recorded?",
            options: [
              "None; the word does not appear in the finding aid",
              "Once, in the description of a 1972 contract with a notation organisation",
              "Six times, once for each work of Ailey's that was notated",
              "More than eight hundred times, matching the size of the notation library",
            ],
            correctIndex: 0,
            explanation:
              "Across 161 linear feet, the only notation-related entry is the Dance Notation Group contract in box 178, folder 6, and that entry does not use the word.",
            sourceLessonSlug: "box-178",
          },
          {
            prompt: "What paid for the Library of Congress to acquire the Katherine Dunham archives?",
            options: [
              "A Doris Duke Charitable Foundation grant of one million dollars",
              "A Julius Rosenwald Fund fellowship awarded to Dunham in 1934",
              "A congressional appropriation made after her death in 2006",
              "The proceeds of a benefit performance given by her company",
            ],
            correctIndex: 0,
            explanation:
              "Awarded in 2000 for the Katherine Dunham Legacy Project, whose activities included the purchase of the archives. The Rosenwald fellowship funded her Caribbean fieldwork in the 1930s.",
            sourceLessonSlug: "fifteen-feet-and-one-point-two-nine",
          },
          {
            prompt: "What does the Dunham collection's 1960 chronology entry record?",
            options: [
              "The company disbanded, ending a chain of trained dancers",
              "The Library of Congress purchased the first tranche of her archive",
              "She completed grant-funded fieldwork in Haiti and received a degree",
              "Her papers were transferred to the Missouri Historical Society",
            ],
            correctIndex: 0,
            explanation:
              "The entry says the disbanding marked the end of continuity of dancers trained by Dunham in her technique and coached by her in her repertory. The Haiti fieldwork entry is 1936.",
            sourceLessonSlug: "fifteen-feet-and-one-point-two-nine",
          },
          {
            prompt: "Which degree does the Library of Congress chronology record for Katherine Dunham?",
            options: [
              "A bachelor's in social anthropology in 1936",
              "A master's from the University of Chicago in 1947",
              "A doctorate awarded after her Caribbean fieldwork was completed",
              "An honorary degree conferred at the founding of her school in New York",
            ],
            correctIndex: 0,
            explanation:
              "The chronology records the 1936 bachelor's and no master's at any point, so this course prints the bachelor's and declines to repeat the commonly asserted master's.",
            sourceLessonSlug: "fifteen-feet-and-one-point-two-nine",
          },
          {
            prompt: "How large is the Eleo Pomare Dance Company photographs collection?",
            options: [
              "1.29 linear feet",
              "15 linear feet, in thirty-three containers plus digital materials",
              "161 linear feet, in three hundred and thirteen containers",
              "256.78 cubic feet, the standard measure for notation score collections",
            ],
            correctIndex: 0,
            explanation:
              "1.29 linear feet in four boxes, against 15 for Dunham and 161 for Ailey. The comparison is the point.",
            sourceLessonSlug: "fifteen-feet-and-one-point-two-nine",
          },
          {
            prompt: "When was the Pomare collection given, and when was it processed?",
            options: [
              "Given in 2010, processed in 2025",
              "Given in 2001 by purchase, processed immediately on receipt",
              "Given in 2006 as one of four accessions from the company",
              "Given in 2025 and processed the same year by the receiving division",
            ],
            correctIndex: 0,
            explanation:
              "Gift of Glenn Conner in 2010, processed by Amy Lau in 2025, fifteen years after the gift and seventeen years after Pomare's death.",
            sourceLessonSlug: "fifteen-feet-and-one-point-two-nine",
          },
          {
            prompt: "Who notated Angelitos Negros, and in what year?",
            options: [
              "Mary Corey, in 2011",
              "Sandra Aberkalns, in 2004, for a work by a different choreographer",
              "Jane Marriett, in 1975, for a work first made in 1928",
              "Donald McKayle himself, in 1972, at the time of the premiere",
            ],
            correctIndex: 0,
            explanation:
              "Mary Corey in 2011, thirty-nine years after McKayle made the work in 1972. The other notators and years belong to adjacent entries in the same catalog.",
            sourceLessonSlug: "the-score-is-a-bill",
          },
          {
            prompt: "What does the Dance Notation Bureau charge a dance company as its service fee?",
            options: [
              "Three hundred and ninety-five dollars",
              "Twenty dollars per dance, the same as the fee to borrow a score for examination",
              "Two hundred and ninety-five dollars, the figure it charges educational institutions",
              "One hundred dollars, the bottom of the range it gives for licence fees",
            ],
            correctIndex: 0,
            explanation:
              "$395 for dance companies against $295 for universities or educational institutes. The twenty dollar and one hundred dollar figures are the inquiry fee and the licence-fee floor.",
            sourceLessonSlug: "the-score-is-a-bill",
          },
          {
            prompt: "What per-performance royalty does the Bureau say is typical?",
            options: [
              "Thirty to one hundred dollars",
              "One hundred dollars to several thousand, depending on the choreographer",
              "Fifteen hundred to two thousand dollars, plus expenses, for each week",
              "Twenty dollars per dance, payable when the score is first requested",
            ],
            correctIndex: 0,
            explanation:
              "Thirty to one hundred dollars per performance, due one week before the first public performance. The other three figures are the licence fee, the stager's fee and the inquiry fee.",
            sourceLessonSlug: "the-score-is-a-bill",
          },
          {
            prompt: "Which of the Bureau's fees is by far the largest single line?",
            options: [
              "The stager's weekly fee",
              "The per-performance royalty owed for each public showing of the work",
              "The service fee charged to a professional dance company",
              "The fee to borrow a score or DVD for examination before deciding",
            ],
            correctIndex: 0,
            explanation:
              "Fifteen hundred to two thousand dollars per week plus expenses, against three hundred and ninety-five for the service fee and thirty to one hundred per performance.",
            sourceLessonSlug: "the-score-is-a-bill",
          },
          {
            prompt: "How many Labanotation scores does the Dance Notation Bureau say it holds?",
            options: [
              "More than eight hundred",
              "Exactly one hundred and five, matching a count that appears elsewhere in this course",
              "More than thirty-four thousand, matching the item count of a major dance archive",
              "Fewer than one hundred, which is why the notation record is so thin",
            ],
            correctIndex: 0,
            explanation:
              "More than 800 Labanotation scores of theatrical dances, per the Bureau's own library page. The 105 and 34,115 figures belong to the Met database and the Ailey collection.",
            sourceLessonSlug: "the-score-is-a-bill",
          },
          {
            prompt: "What is the honest shape of this course's finding about notation coverage?",
            options: [
              "Confirmed presence, unknown proportion",
              "Proven absence, since no Black choreographer appears in the Bureau's catalog",
              "Complete coverage, since every major choreographer has at least one score",
              "Unknowable, since the Bureau does not publish any information about its holdings",
            ],
            correctIndex: 0,
            explanation:
              "The catalog filter names Dunham, Beatty, McKayle, Ailey, Dove and Jones, so absence is disproved. The proportion could not be counted because individual records load dynamically.",
            sourceLessonSlug: "the-score-is-a-bill",
          },
          {
            prompt: "What credit line does the Met's own record give Janet Collins?",
            options: [
              "Dance",
              "Prima ballerina, the phrase most often repeated about her Met career",
              "Choreographer, shared with the production's credited ballet master",
              "Company member, distinguishing her from guests engaged for one production",
            ],
            correctIndex: 0,
            explanation:
              "The single word Dance, marked Debut, on the record for opening night of 13 November 1951. The database contains no prima ballerina credit at all.",
            sourceLessonSlug: "three-corrections-ailey-collins-jamison",
          },
          {
            prompt: "Who is credited as choreographer of the 1951 Aida in which Janet Collins debuted?",
            options: [
              "Zachary Solov",
              "Janet Collins herself, in addition to her credit as a dancer",
              "Margaret Webster, who is credited on the same record for the production",
              "Rudolf Bing, the general manager who mounted the new production that season",
            ],
            correctIndex: 0,
            explanation:
              "Zachary Solov. Webster is credited for production and Bing was the general manager, both named on the same record, and Collins carries no authorship credit.",
            sourceLessonSlug: "three-corrections-ailey-collins-jamison",
          },
          {
            prompt: "Which Black dancer holds a named role credit at the Met from 1933?",
            options: [
              "Hemsley Winfield",
              "Janet Collins, whose Met records begin eighteen years earlier than usually reported",
              "Leonardo Barres, who is named in the record as the first to dance the role",
              "Talley Beatty, whose contracts survive in a federal archive from the same period",
            ],
            correctIndex: 0,
            explanation:
              "Winfield danced the Congo Witch Doctor at the world premiere of The Emperor Jones on 7 January 1933, marked Debut. Barres took the part after Winfield's death.",
            sourceLessonSlug: "three-corrections-ailey-collins-jamison",
          },
          {
            prompt: "How does the course reconcile the Winfield and Collins firsts?",
            options: [
              "One was engaged for a single production, the other across seasons",
              "One holds a role credit and the other holds an authorship credit",
              "One appeared only on tour and the other only at the opera house itself",
              "One claim is documented and the other is entirely unsupported",
            ],
            correctIndex: 0,
            explanation:
              "Both are documented in the same database. Ranking them is a question about what counts as a first, not a question about the facts.",
            sourceLessonSlug: "three-corrections-ailey-collins-jamison",
          },
          {
            prompt: "When did Judith Jamison die, and on whose authority does this course print the date?",
            options: [
              "9 November 2024, on the Ailey organization's own statement",
              "9 November 2024, on the authority of a tertiary encyclopaedia entry alone",
              "1 December 1989, the date recorded in a Library of Congress chronology",
              "The course does not print a date, because none could be confirmed",
            ],
            correctIndex: 0,
            explanation:
              "Both the Ailey blog and the company pressroom biography print 9 November 2024. 1 December 1989 is Alvin Ailey's death date from the finding aid chronology.",
            sourceLessonSlug: "three-corrections-ailey-collins-jamison",
          },
          {
            prompt: "Why is Alvin Ailey in a course about uncredited creators?",
            options: [
              "Because his archive holds other Black choreographers' contracts",
              "Because his own works were refused registration by the Copyright Office",
              "Because his choreography survives only in the memories of former dancers",
              "Because his company disbanded and its records were dispersed",
            ],
            correctIndex: 0,
            explanation:
              "The credit frame is false for him: 161 linear feet at the Library of Congress. He belongs because box 178 of his collection holds four other Black choreographers' contracts.",
            sourceLessonSlug: "three-corrections-ailey-collins-jamison",
          },
          {
            prompt: "What does Study No. 28 tell us about the size of the pre-1978 choreographic deposit record?",
            options: [
              "It was thin for choreographers of every background",
              "It contained several thousand notated scores by the leading choreographers of the era",
              "It was closed entirely, since the Office refused every choreographic application",
              "It consisted only of motion pictures, since written descriptions were not accepted",
            ],
            correctIndex: 0,
            explanation:
              "The study says some works were deposited as textual descriptions or in the Laban system, and in one case at least a motion picture. That fairness point comes before the racial one.",
            sourceLessonSlug: "fuller-v-bemis-and-the-thin-deposit-record",
          },
          {
            prompt: "What is the strongest stated policy reason for excluding social dances from copyright?",
            options: [
              "Everyone performing the dance in public would infringe",
              "Social dances change too rapidly for any registration record to stay accurate",
              "Social dances have no identifiable author to whom a registration could issue",
              "Social dances are performed for free and so generate no economic value to protect",
            ],
            correctIndex: 0,
            explanation:
              "Compendium 805.5(B) states it in those terms, and the course presents it fairly because any proposal to protect vernacular steps has to answer it.",
            sourceLessonSlug: "january-1-1978",
          },
          {
            prompt: "Which two exclusions does the 1976 legislative history state?",
            options: [
              "Social dance steps and simple routines",
              "Improvised sequences and works performed by animals or machines",
              "Athletic movements and yoga sequences of every kind",
              "Individual steps and derivative versions of preexisting works",
            ],
            correctIndex: 0,
            explanation:
              "H.R. Rep. No. 94-1476 at 54 and S. Rep. No. 94-473 at 52. The other exclusions are real but come from the Compendium and Circular 52 rather than from Congress.",
            sourceLessonSlug: "january-1-1978",
          },
          {
            prompt: "Why can a notation system itself not be copyrighted?",
            options: [
              "Section 102(b) excludes systems from protection",
              "Because notation systems were all published before the modern copyright term began",
              "Because the Copyright Office holds the rights to every approved deposit format",
              "Because a notation system is a compilation of unprotectable individual symbols",
            ],
            correctIndex: 0,
            explanation:
              "Compendium 805.3(D)(1) says the notational system is a system not eligible for protection under section 102(b), even though a score written in it can fix a work.",
            sourceLessonSlug: "fixation-and-the-two-lists",
          },
          {
            prompt: "Which formats does Circular 52 accept as fixations of a choreographic work?",
            options: [
              "Notation, video, textual descriptions, photographs or drawings",
              "Costume designs, lighting plots and stage-management call sheets",
              "Programmes, reviews and photographs published in the press",
              "Only notation and video, since the other formats lack sufficient detail",
            ],
            correctIndex: 0,
            explanation:
              "The circular names dance notation such as Labanotation and Benesh, video recordings, and textual descriptions, photographs or drawings. Programmes and costume designs are archival records rather than fixations.",
            sourceLessonSlug: "fixation-and-the-two-lists",
          },
          {
            prompt: "How does the course describe the difference between the register and the archive?",
            options: [
              "The archive is comparatively generous and the registry is not",
              "The archive is closed to researchers and the registry is open to anyone",
              "The registry preserves choreography and the archive preserves only music",
              "Both are equally thin, which is why no reliable record of dance exists",
            ],
            correctIndex: 0,
            explanation:
              "Shelf space is cheap and a notator's weeks are not, which is why Black choreographers are comparatively well documented as biography and comparatively poorly documented as property.",
            sourceLessonSlug: "the-score-is-a-bill",
          },
          {
            prompt: "What is the course's summary claim about the archival record?",
            options: [
              "It is present and pointed somewhere other than at your question",
              "It is absent, and the missing material can never be recovered",
              "It is deliberately falsified by the institutions that maintain it",
              "It is complete, and the popular accounts drawn from it are accurate",
            ],
            correctIndex: 0,
            explanation:
              "Ailey's collection is extensive, Collins appears 105 times in a database that never calls her an author, and Jamison's own contract is described and closed until 2100.",
            sourceLessonSlug: "three-corrections-ailey-collins-jamison",
          },
          {
            prompt: "Which of these is the argument the evidence in this course actually supports?",
            options: [
              "A neutral rule about duration and form transfers value unevenly",
              "Copyright examiners applied the rules more strictly to Black applicants",
              "Congress drafted the 1976 Act intending to exclude Black dance forms",
              "Federal archives suppressed the papers of Black choreographers",
            ],
            correctIndex: 0,
            explanation:
              "The other three are accusations the documents do not support, and the course rejects each of them by name. Disparate effect is checkable and survives a hostile reading.",
            sourceLessonSlug: "hanagami-pilobolus-and-the-fortnite-story",
          },
          {
            prompt: "What was Loie Fuller's dance filed as, in the case that set the story requirement?",
            options: [
              "A written description",
              "A Labanotation score prepared by a professional notator of the period",
              "A motion picture deposited in two complete prints with the Office",
              "A series of photographs showing each successive position of the dancer",
            ],
            correctIndex: 0,
            explanation:
              "A written description. The other formats are all acceptable fixations under the modern circular, which is what makes them plausible distractors here.",
            sourceLessonSlug: "fuller-v-bemis-and-the-thin-deposit-record",
          },
        ],
      },
    },
  ],
};

// ══════════════════════════════════════════════════════════════════════════
// PROPOSED RESEARCH CHECKS — for src/lib/research-checks.ts.
// Filed here as a comment because this file's author does not own that module.
// Each names what a lesson currently hedges and what document would settle it.
// ══════════════════════════════════════════════════════════════════════════
//
// 1. "Ode to the Endzone", Copyright Office Review Board, 2013.
//    HEDGE: not cited anywhere in this course. The published PDF is a 27-page image scan with no
//    text layer, so nothing in it could be read and no claim is made about its contents. Given the
//    title it is probably the single highest-value modern artifact for the fixation-and-de-minimis
//    lesson, and it would sit beside Five-Petal Flower as a second Review Board document.
//    SETTLED BY: an OCR pass over the PDF at copyright.gov/rulings-filings/review-board/, or a
//    records request to the Copyright Office.
//
// 2. The Fortnite refusal letters (Ribeiro and Ferguson).
//    HEDGE: lesson `hanagami-pilobolus-and-the-fortnite-story` says only that other plaintiffs "did
//    not get registrations at all", with no dates, no signatories and no quoted wording, because
//    none could be retrieved from a primary source in the authoring session.
//    SETTLED BY: the dockets in Ribeiro v. Epic Games, No. 2:18-cv-10412 (C.D. Cal.) and Ferguson v.
//    Epic Games, No. 2:18-cv-10110 (C.D. Cal.) via PACER or RECAP, or a Copyright Office records
//    request under 17 U.S.C. 705.
//
// 3. Whether any Black choreographer registered a choreographic work before 1978.
//    HEDGE: lesson `fuller-v-bemis-and-the-thin-deposit-record` establishes only that the whole
//    pre-1978 deposit record was thin. It makes no claim either way about a Black choreographer's
//    Class D deposit, because none was found and absence of a found record is not a finding.
//    SETTLED BY: a Copyright Office records search under 17 U.S.C. 705 against the Catalog of
//    Copyright Entries, Part 3, for 1909-1978.
//
// 4. What proportion of the Dance Notation Bureau's 800-plus scores are of works by Black
//    choreographers.
//    HEDGE: lesson `the-score-is-a-bill` states a confirmed presence (the Bureau's own catalog
//    filter names Dunham, Beatty, McKayle, Ailey, Dove and Jones) and an explicitly unknown
//    proportion. The catalog's individual score records load dynamically and could not be
//    enumerated.
//    SETTLED BY: a direct enquiry to the Dance Notation Bureau, or the Ohio State University
//    Libraries finding aid for the Dance Notation Bureau Collection, whose EAD server refused
//    connection in this pass.
//
// 5. The exact premiere date of Revelations.
//    HEDGE: lesson `box-178` dates the work only to 1960, which is all the Library of Congress
//    chronology gives ("Ailey's Revelations premiered to widespread acclaim", under 1960). The
//    commonly repeated 31 January 1960 is NOT printed anywhere in this course.
//    SETTLED BY: the 92nd Street Y programme for the premiere, plausibly held in the Ailey
//    collection at BOX-FOLDER 221/5 (correspondence, program drafts, 1960 and undated).
//
// 6. Katherine Dunham's graduate degree.
//    HEDGE: lesson `fifteen-feet-and-one-point-two-nine` prints the 1936 bachelor's in social
//    anthropology, which the Library of Congress chronology states, and says nothing further. The
//    frequently repeated master's from the University of Chicago is not printed.
//    SETTLED BY: the University of Chicago Registrar, or the Dunham papers at Southern Illinois.
//
// 7. Pearl Primus's doctorate: institution, year and dissertation title.
//    HEDGE: Primus appears in this course only through the Jacob's Pillow archival footage of
//    Spirituals (July 1950) and her quoted sentence, both verified at the Pillow's own site. No
//    degree claim is made anywhere, because none could be confirmed against an institutional source.
//    SETTLED BY: the awarding university's dissertation catalog, or ProQuest Dissertations.
//
// 8. The date of the first Black concert dance recital in America.
//    HEDGE: not asserted anywhere in this course. Sources disagree between 6 March 1931 and
//    29 April 1931 at the Chanin Building, and no primary document was reached in this pass, so
//    Hemsley Winfield appears here only through the Met performance record of 7 January 1933.
//    SETTLED BY: the surviving programme, or a contemporaneous review in the New York Age or the
//    Amsterdam News for spring 1931, held in the NYPL Jerome Robbins Dance Division.
