import type { AuthoredCourse } from "./authored-course";

// "Who Made the Record: Photography, Custody, and the Credit Line" (Culture & History).
// CREDIT track R, position R1, from plans/future-courses/2026-08-25-07-photography-series-plan.md.
// Assumed slug: `who-made-the-record` (the plan's own slug for R1). The registering agent owns
// scripts/seed-courses.ts; if the slug lands differently, every `sourceLessonSlug` here is
// course-internal and unaffected.
//
// THE ORGANIZING QUESTION, settled by BAM before authoring:
//   Who made the record, and whom did the record serve?
// Mechanisms with people as evidence, never a parade of biographies. Every subject below is
// attached to ONE idea and used to make that one point.
//
// HARD RULES THIS FILE KEEPS (inherited from scripts/data/who-gets-named-course.ts):
//  1. IDENTITY CLAIMS need a public self-statement, cited. No living person carries one otherwise.
//  2. CONTESTED CLAIMS are taught as contested, with the holder of each position NAMED. Two of the
//     marquee claims here are disputes with living parties, so the lessons state PROCEDURAL POSTURE
//     (filed, dismissed, settled, transferred) rather than characterising who was right.
//  3. NO INVENTED source, date, quotation, accession number, exhibition year or statistic. Where a
//     figure could not be settled against a source that this pass actually retrieved, the lesson
//     says so in the open and the question is filed as a research check.
//  4. FETCH OR DO NOT CITE. Every identifier printed below was retrieved in the authoring session.
//     The bottom-of-file report lists what was fetched, what was not, and what was therefore cut.
//
// THE DIGNITY RULE, which governs Section 3 and Section 6 and is not negotiable:
// The 1850 Zealy daguerreotypes were made to argue that the people in them were less than human.
// This course NAMES the seven people, says plainly what is and is not known about them, and does
// NOT describe the pictures. Reproducing the description would repeat the act the commission
// performed. What the course's question needs is the paperwork: who commissioned, who was paid,
// who wrote the label, and who kept the plates.
//
// House style, matching who-gets-named-course.ts and deaf-america-course.ts: `section` on every
// lesson; flush-left single-line `:::reveal q ||| a`; a `## Vocabulary` block of 3-6 terms; APA 7
// `## Sources`; a quiz per teaching section (pool 40, serving 5, passing 80, shuffled) plus a final
// pooling 40 and serving 10, placed LAST; every question carries `explanation` + `sourceLessonSlug`.
// Correct options are written SHORT and distractors long and specific, so check-longest-option
// passes by construction. No em dashes in user-visible copy.
export const PHOTOGRAPHY_CREDIT_COURSE: AuthoredCourse = {
  title: "Who Made the Record: Photography, Custody, and the Credit Line",
  description:
    "A photograph of a person looks like something that happened. It is something somebody did, and this course follows the paperwork that decision leaves behind: who commissioned the picture, who was paid, whose name went in the caption, who owned the plate afterwards, and who is allowed to say no. It is a credit course, not a craft course, and it teaches nobody to take a photograph. It runs from Frederick Douglass, who published a theory of the record before he sat for one, through Kodak's Shirley card, where a technical default stopped looking like a decision, to the 1850 daguerreotypes Louis Agassiz commissioned in South Carolina, a record made about seven enslaved people to argue something about them. It then reads three credit lines a learner can go and check today: an archive that names Ella Watson, a museum catalogue that grades its own certainty with the words attributed to, and an acquisition record that three published accounts date to three different years. It ends on two claims made on one archive, Carrie Mae Weems against Harvard in the 1990s and Tamara Lanier against Harvard from 2019, taught as the pair they are, with the legal posture kept intact rather than smoothed into a story about who won. Every contested claim here is taught as contested with the holders named, and where this course could not reach a source it says so instead of guessing.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1 — A record is made, not found
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "a-record-is-made-not-found",
      title: "1 · A record is made, not found",
      section: "Section 1 · A record is made, not found",
      body: `A photograph of a person looks like a thing that happened. It is a thing somebody did. Somebody decided to make it, decided what would be inside the frame, decided what to write underneath, and decided who would keep the object afterwards. Every one of those is a decision with a name attached to it, and a decision that somebody usually wrote down. This course follows that paperwork.

**Begin with the one subject in this course who published his theory of the record before he made one.** Frederick Douglass delivered a lecture titled "Lecture on Pictures" in Boston on 3 December 1861, and returned to the subject in other lectures during the war years. His argument was not about beauty and it was not about technique. It was about access.

**The claim.** Before photography, a likeness required a painter, a commission and a fee, so the record of who existed was, in practice, a record of who could afford to be painted. Douglass saw the cheap portrait as a break in that. In the lecture, as quoted by later scholarship, he put it plainly: "Men of all conditions may see themselves as others see them. What was once the exclusive luxury of the rich and great is now within the reach of all."

**And the second half of the claim, which is the part this course uses.** Douglass did not argue that pictures were pleasant. He argued that they worked on people quietly and at scale. In his own words, "it is evident that the great cheapness and universality of pictures must exert a powerful, though silent influence upon the ideas and sentiment" of the people who see them. That is a theory of a mechanism. It says a picture is an instrument that acts on an audience, which means somebody is aiming it.

**The distinction the rest of the course runs on: being photographed is not the same as authoring a photograph.** A person in front of a camera supplies the face. Authorship is a different set of powers, and it is usually held by other people: who commissioned the sitting, who framed it, who wrote the caption, who owns the negative, who may license it, and who may refuse. A record made about you and a record made by you can look identical on the wall. They are different objects, and the difference lives in the documents, not in the image.

**Why Douglass is evidence for that and not decoration.** He is unusual because he held more of that chain than almost any Black American of his century could. He chose when to sit, he chose the pose, he distributed the results, and he explained in public why. He also could not hold all of it. He could not control who reprinted a portrait, what a newspaper wrote under it, or where the plates ended up. That gap between the part of the chain a subject can hold and the part they cannot is the subject of this course.

**One thing to notice about the lectures themselves, because it is the course's method in miniature.** Douglass's writing on pictures is scattered across several lecture texts, and published accounts differ on how many there are. This course prints no count, because it confirmed the title and date of one lecture against sources it actually read and could not settle the total. A course about who the record credits does not get to guess at the size of a record.

:::reveal What is the difference between being photographed and authoring a photograph? ||| A person photographed supplies the face. Authorship is the set of powers over the object: who commissioned it, who framed it, who captioned it, who owns the negative, who may license it, and who may refuse. The two can produce identical images and are different in the documents.

:::reveal Why does this course say Douglass argued about access rather than about art? ||| Because his claim was that a likeness had previously required a painter and a fee, so the record of who existed tracked who could pay, and the cheap portrait broke that.

:::reveal Why does this lesson refuse to say how many lectures on pictures Douglass wrote? ||| Because published accounts differ and this pass confirmed only one lecture by title and date against a source it read. A course about who the record credits does not guess at the size of a record.

## Vocabulary
- **The record**: the made object plus its paperwork, meaning the picture together with its caption, its owner, its contract and its custody history.
- **Authorship**: the set of powers over a made object, which is distinct from being its subject and usually held by different people.
- **Custody chain**: the sequence of holders of an object, each link created by a decision somebody documented.
- **Caption**: the line of text a record carries about its subject, which is a decision about what will be remembered and by whom.

## Sources
Moore, P. (2023, October 10). *Frederick Douglass: The power of photography*. Unseen Histories. https://www.unseenhistories.com/frederick-douglass-the-power-of-photography/

Powell, S. (n.d.). *Powerful, though silent: Frederick Douglass' portraits*. Picturing Black History. https://picturingblackhistory.org/powerful-though-silent-frederick-douglass-portraits/`,
    },
    {
      slug: "sitting-on-purpose",
      title: "2 · Sitting on purpose, and holding a number properly",
      section: "Section 1 · A record is made, not found",
      body: `Douglass did not sit for pictures the way most people sit for pictures. He sat repeatedly, across decades, and he sat with an argument in mind.

**The strategy, stated as behaviour rather than as legend.** He did not smile. Published accounts of his portraits agree on this and agree on why: a smiling Black face was exactly the caricature the pro-slavery press manufactured, and a photograph that supplied it would have been ammunition. He sat instead for composure, for formality, and for what one account calls his determination to present himself as "a dignified and respected citizen." The refusal is not a mood. It is a decision repeated for forty years, which is what makes it evidence.

**Why a repeated decision counts as evidence and a single one does not.** Anyone can look serious once. A person who looks serious in every surviving sitting, across many photographers, many cities and many decades, is doing something on purpose. That is the kind of pattern a record can actually support, and it is available to you in any archive: not what a subject felt, which the record does not hold, but what a subject did over and over, which it does.

**Now the number, and how to hold it.** Douglass is widely described as the most photographed American of the nineteenth century. That description is not a fact of nature. It is a scholarly claim with authors, a method and a date. It comes from *Picturing Frederick Douglass*, by John Stauffer, Zoe Trodd and Celeste-Marie Bernier, published by Liveright in November 2015, a book that collects one hundred and sixty separate photographs of him and argues from that count.

**What follows from saying it that way.** Three things. First, the claim is falsifiable, which is a compliment: somebody who finds a one hundred and sixty-first photograph, or a bigger set for somebody else, has changed the answer. Second, the claim belongs to named people, so a reader can go and check their method rather than trusting a slogan. Third, the comparison figures you will see attached to it, for Abraham Lincoln or Walt Whitman or George Custer, are a separate claim needing separate evidence, and this course does not print them because it did not verify them.

**The habit this is training.** When a course, a museum label or a documentary hands you a superlative, ask three questions: who counted, what did they count, and when. "Most photographed American of the nineteenth century" answers all three once you attach the book. "The most photographed man in history" answers none of them and is the same sentence with the checkable parts removed.

**Why this belongs in a credit course.** Douglass is the only subject here who wrote his theory of the record down before making one, and he is also the subject most at risk of being flattened into a slogan. Both halves matter. A course that teaches admiration for him teaches nothing anyone can use. A course that teaches how his sitting worked, and how to hold the count that describes it, hands over a method.

:::reveal Why is Douglass's refusal to smile treated as evidence rather than as a mood? ||| Because it is a decision repeated across decades, many photographers and many cities. A record cannot hold what a subject felt, but it can hold what a subject did over and over.

:::reveal Who made the claim that Douglass was the most photographed American of the nineteenth century, and on what basis? ||| John Stauffer, Zoe Trodd and Celeste-Marie Bernier, in Picturing Frederick Douglass (Liveright, 2015), which collects 160 separate photographs of him and argues from that count.

:::reveal What three questions does this lesson tell you to ask of any superlative? ||| Who counted, what did they count, and when.

## Vocabulary
- **Falsifiable claim**: a statement built so that specific new evidence could overturn it, which is what makes it checkable rather than decorative.
- **Superlative**: a "most" or "first" claim, which is only usable when the counter, the thing counted and the date are attached.
- **Attribution of a claim**: naming the people who made an assertion, so a reader can inspect their method instead of trusting the assertion.
- **Repeated decision**: a behaviour visible many times in a record, which supports an inference about strategy where a single instance does not.

## Sources
Stauffer, J., Trodd, Z., & Bernier, C.-M. (2015). *Picturing Frederick Douglass: An illustrated biography of the nineteenth century's most photographed American*. Liveright.

Publishers Weekly. (n.d.). *Review of Picturing Frederick Douglass*. https://www.publishersweekly.com/9780871404688

Powell, S. (n.d.). *Powerful, though silent: Frederick Douglass' portraits*. Picturing Black History. https://picturingblackhistory.org/powerful-though-silent-frederick-douglass-portraits/`,
    },
    {
      slug: "section-1-quiz",
      title: "Section 1 quiz · A record is made, not found",
      section: "Section 1 · A record is made, not found",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What does this course mean by \"the record\"?",
            options: [
              "The picture plus its paperwork",
              "The negative and every print ever struck from it, held together as one physical object",
              "The museum wall label, which is the only part of the documentation a visitor ever reads",
              "The photographer's contact sheet, from which every later decision about the image is made",
            ],
            correctIndex: 0,
            explanation:
              "The course defines the record as the made object together with its caption, owner, contract and custody history, because the paperwork is where the decisions are visible.",
            sourceLessonSlug: "a-record-is-made-not-found",
          },
          {
            prompt: "In what city and on what date did Douglass deliver \"Lecture on Pictures\"?",
            options: [
              "Boston, 3 December 1861",
              "Rochester, New York, on 14 April 1863, during a fundraising tour for Black enlistment",
              "Philadelphia, 3 December 1855, at a convention of the American Anti-Slavery Society",
              "Washington, D.C., 12 February 1866, at a lecture series held for members of Congress",
            ],
            correctIndex: 0,
            explanation:
              "Sources retrieved for this course place the lecture in Boston on 3 December 1861. The course does not print the venue, because it could not confirm one.",
            sourceLessonSlug: "a-record-is-made-not-found",
          },
          {
            prompt: "Douglass's argument about photography was primarily about which of these?",
            options: [
              "Access",
              "Composition, and how the new lens rendered a face more truthfully than a painter's hand",
              "Preservation, and the chance to keep a likeness safe from fire, damp and the passage of time",
              "Speed, and the fact that a sitting now took minutes where a painted portrait took weeks",
            ],
            correctIndex: 0,
            explanation:
              "His claim was that a likeness had previously required a painter and a fee, so the record of who existed tracked who could pay, and the cheap portrait broke that.",
            sourceLessonSlug: "a-record-is-made-not-found",
          },
          {
            prompt: "Which powers does this course group under \"authorship\"?",
            options: [
              "Commissioning, framing, captioning, owning, licensing and refusing",
              "Choosing the pose and the clothing, which are the only decisions a sitter is ever able to make",
              "Developing the negative and making the print, since the darkroom is where the image is fixed",
              "Signing the print and dating it, which is what establishes an author in every archive",
            ],
            correctIndex: 0,
            explanation:
              "Authorship is a set of powers over the object, usually held by people other than the subject, which is why an image made about you and one made by you can look identical.",
            sourceLessonSlug: "a-record-is-made-not-found",
          },
          {
            prompt: "Why is Douglass treated as evidence rather than as decoration in this course?",
            options: [
              "He published a theory of the record before making one",
              "He was the first Black American to own a camera and to operate a commercial photographic studio",
              "He personally supervised the printing of every portrait taken of him during the war years",
              "He wrote the captions that appeared beneath his portraits in every newspaper that ran them",
            ],
            correctIndex: 0,
            explanation:
              "That is the one idea he carries here. It also matters that he could not hold the whole chain, which is the gap the rest of the course examines.",
            sourceLessonSlug: "a-record-is-made-not-found",
          },
          {
            prompt: "Which part of the chain could Douglass NOT control?",
            options: [
              "Who reprinted a portrait, and what was written under it",
              "Whether he smiled in a given sitting, which the photographer decided at the moment of exposure",
              "How often he sat, since photographers of the period selected their own subjects",
              "Which pose he adopted, which was fixed by the head clamp used in every studio",
            ],
            correctIndex: 0,
            explanation:
              "He held the sitting. He did not hold the caption, the owner or the archive, and that gap is the course's subject.",
            sourceLessonSlug: "a-record-is-made-not-found",
          },
          {
            prompt: "What does Douglass's phrase \"powerful, though silent influence\" describe?",
            options: [
              "How cheap pictures act on an audience",
              "The way a daguerreotype plate darkens slowly when it is left exposed to open daylight",
              "The silence of the sitter, who cannot speak during the long exposure a portrait required",
              "The muted tones of early photographic paper compared with an oil painting's colour",
            ],
            correctIndex: 0,
            explanation:
              "It is a theory of a mechanism: a picture is an instrument that works on the people who see it, which means somebody is aiming it.",
            sourceLessonSlug: "a-record-is-made-not-found",
          },
          {
            prompt: "Why can a record made about a person and one made by that person look identical?",
            options: [
              "The difference lives in the documents, not the image",
              "Because nineteenth-century plates carried no distinguishing marks of any kind on their surfaces",
              "Because the same studios and the same operators produced both kinds of portrait",
              "Because subjects and authors always negotiated the pose before the exposure was made",
            ],
            correctIndex: 0,
            explanation:
              "The powers that separate them are contractual and custodial, so you find the difference in the commission, the caption and the deed rather than on the wall.",
            sourceLessonSlug: "a-record-is-made-not-found",
          },
          {
            prompt: "What is a custody chain?",
            options: [
              "The sequence of holders of an object",
              "The list of every exhibition an object has appeared in since it entered a public collection",
              "The record of physical damage and conservation treatment an object has received over time",
              "The set of copyright licences granted for an image, arranged by the date each was signed",
            ],
            correctIndex: 0,
            explanation:
              "Each link is created by a decision somebody documented, which is why the chain is readable at all.",
            sourceLessonSlug: "a-record-is-made-not-found",
          },
          {
            prompt: "Why does the first lesson refuse to state how many lectures on pictures Douglass wrote?",
            options: [
              "Published accounts differ and the count was not settled",
              "Because the lecture manuscripts were destroyed in the fire at his Rochester house in 1872",
              "Because scholars agree the lectures were never written down and survive only in press reports",
              "Because the number is disputed between the Library of Congress and the Yale edition of the speeches",
            ],
            correctIndex: 0,
            explanation:
              "This pass confirmed one lecture by title and date against a source it read, and a course about who the record credits does not guess at the size of a record.",
            sourceLessonSlug: "a-record-is-made-not-found",
          },
          {
            prompt: "Before photography, whose likenesses tended to survive?",
            options: [
              "People who could pay a painter",
              "People who lived in cities large enough to support a resident portrait artist year round",
              "People whose families kept written inventories of their household goods and furnishings",
              "People who held public office, whose likenesses were commissioned at public expense",
            ],
            correctIndex: 0,
            explanation:
              "That is Douglass's point: the record of who existed tracked who could afford a commission, so the cheap portrait was a change in who got recorded at all.",
            sourceLessonSlug: "a-record-is-made-not-found",
          },
          {
            prompt: "What is a caption, as this course defines it?",
            options: [
              "A decision about what will be remembered",
              "A neutral technical note giving the date, the format and the exposure of the negative",
              "The photographer's own title for a work, which museums are obliged to reproduce exactly",
              "The line of text an archivist adds after a subject has been positively identified",
            ],
            correctIndex: 0,
            explanation:
              "A caption records what somebody chose to write about a subject, which is why later sections read captions as evidence rather than as labels.",
            sourceLessonSlug: "a-record-is-made-not-found",
          },
          {
            prompt: "Which of these is a decision the course says leaves paperwork behind?",
            options: [
              "Who keeps the object afterwards",
              "Whether the subject was comfortable during the sitting, which studios logged in their day books",
              "How the light fell on the day of the exposure, which weather records can be used to reconstruct",
              "What the subject was thinking about, which portrait sitters commonly recorded in letters",
            ],
            correctIndex: 0,
            explanation:
              "Commission, frame, caption and custody are the four decisions the course follows, and each of them is written down somewhere.",
            sourceLessonSlug: "a-record-is-made-not-found",
          },
          {
            prompt: "What does the course mean when it says a photograph \"looks like a thing that happened\"?",
            options: [
              "It hides the decisions that produced it",
              "It records an instant so briefly that no participant can later reconstruct what occurred",
              "It shows an event that the photographer had no part in arranging or attending",
              "It is admissible as evidence of an event in a way a written account is not",
            ],
            correctIndex: 0,
            explanation:
              "The image reads as an occurrence, which conceals the fact that somebody chose to make it, chose the frame, chose the caption and chose the keeper.",
            sourceLessonSlug: "a-record-is-made-not-found",
          },
          {
            prompt: "Douglass argued the cheap portrait let people do what?",
            options: [
              "See themselves as others see them",
              "Circulate an accurate likeness to newspapers across several states within a single week",
              "Escape the fees that engravers charged for reproducing a portrait in printed form",
              "Prove their identity to officials who would otherwise have relied on written description",
            ],
            correctIndex: 0,
            explanation:
              "The quotation retrieved for this course runs that what was once the exclusive luxury of the rich and great is now within the reach of all.",
            sourceLessonSlug: "a-record-is-made-not-found",
          },
          {
            prompt: "Which is the better description of Douglass's lecture, judged by its content?",
            options: [
              "A theory of how images act on audiences",
              "A technical manual explaining the daguerreotype process to an audience of amateur operators",
              "A memoir of his own experience sitting for portraits in the years before the war",
              "A survey of the leading American portrait studios and the prices each of them charged",
            ],
            correctIndex: 0,
            explanation:
              "He described a mechanism with an audience and an effect, which is what makes the lecture usable rather than merely admiring.",
            sourceLessonSlug: "a-record-is-made-not-found",
          },
          {
            prompt: "Why does the course start with paperwork rather than with pictures?",
            options: [
              "The decisions are visible there",
              "Because copyright law forbids a course from reproducing any photograph made before 1900",
              "Because photographs are unreliable evidence of anything and archivists no longer treat them as sources",
              "Because the paperwork is easier to obtain than the images, which are held by private estates",
            ],
            correctIndex: 0,
            explanation:
              "The commission, the caption, the contract and the deed are where somebody's choice is recorded, and the image alone hides all four.",
            sourceLessonSlug: "a-record-is-made-not-found",
          },
          {
            prompt: "What kind of object is a photograph of a person, in this course's framing?",
            options: [
              "A made object with an owner",
              "A copy of an original that exists only in the moment the shutter was open",
              "A document whose legal status has never been settled in any American court",
              "An artefact that belongs jointly to the photographer and the person depicted",
            ],
            correctIndex: 0,
            explanation:
              "The chain of decisions and the fact of ownership are what the course follows, and both are properties of an object rather than of an image.",
            sourceLessonSlug: "a-record-is-made-not-found",
          },
          {
            prompt: "Which pairing correctly matches a person to the one idea they carry in this section?",
            options: [
              "Douglass, authoring a record about yourself on purpose",
              "Douglass, the first person to argue that photography should be regulated by federal statute",
              "Douglass, the earliest American to license his own likeness commercially to a publisher",
              "Douglass, the abolitionist who founded a studio to train Black photographers after the war",
            ],
            correctIndex: 0,
            explanation:
              "Each subject in the course is attached to one idea and used to make that one point, which is what keeps the course from becoming a parade of biographies.",
            sourceLessonSlug: "a-record-is-made-not-found",
          },
          {
            prompt: "What does the course say a picture being \"aimed\" implies?",
            options: [
              "Somebody chose its audience and its effect",
              "That the photographer physically directed the sitter into a pose designed for a particular buyer",
              "That the image was made for a legal proceeding rather than for private or family use",
              "That the negative was cropped after exposure to remove information the maker disliked",
            ],
            correctIndex: 0,
            explanation:
              "Douglass described pictures as exerting influence on ideas and sentiment, which turns the picture into an instrument with somebody behind it.",
            sourceLessonSlug: "a-record-is-made-not-found",
          },
          {
            prompt: "How did Douglass sit for portraits?",
            options: [
              "Repeatedly, and without smiling",
              "Rarely, and only when an abolitionist society commissioned the sitting and paid the studio",
              "Only in the years after emancipation, having refused the camera entirely before 1865",
              "Always with the same photographer, who held an exclusive arrangement with him for decades",
            ],
            correctIndex: 0,
            explanation:
              "He sat across decades, with many photographers, and the refusal to smile recurs, which is what makes it a strategy rather than a mood.",
            sourceLessonSlug: "sitting-on-purpose",
          },
          {
            prompt: "Why would a smiling portrait of Douglass have been useful to his opponents?",
            options: [
              "It supplied the caricature the pro-slavery press manufactured",
              "It would have contradicted the sober tone of the speeches he was delivering at the same time",
              "It would have suggested he was prospering, undermining fundraising appeals made in his name",
              "It would have been read as informality, which nineteenth-century audiences distrusted in a speaker",
            ],
            correctIndex: 0,
            explanation:
              "A photograph that supplied the stereotype would have been ammunition, so the refusal was a decision about what the record would not contain.",
            sourceLessonSlug: "sitting-on-purpose",
          },
          {
            prompt: "What makes a repeated decision better evidence than a single one?",
            options: [
              "A pattern supports an inference a single instance cannot",
              "A repeated decision is more likely to have been written down in a studio's business ledger",
              "A single photograph can be dated only approximately, while a series can be dated precisely",
              "Archivists give greater weight to duplicated images when assessing the reliability of a collection",
            ],
            correctIndex: 0,
            explanation:
              "Anyone can look serious once. Looking serious in every surviving sitting, across many photographers and decades, is something a person is doing on purpose.",
            sourceLessonSlug: "sitting-on-purpose",
          },
          {
            prompt: "Who wrote Picturing Frederick Douglass?",
            options: [
              "Stauffer, Trodd and Bernier",
              "Henry Louis Gates Jr. and Kenneth B. Morris Jr., writing as the book's principal authors",
              "Deborah Willis and Barbara Krauthamer, in a study of photography and emancipation",
              "Brian Wallis and Molly Rogers, working from the Peabody Museum's photographic holdings",
            ],
            correctIndex: 0,
            explanation:
              "John Stauffer, Zoe Trodd and Celeste-Marie Bernier are the authors, and attaching their names is what makes the book's central count checkable.",
            sourceLessonSlug: "sitting-on-purpose",
          },
          {
            prompt: "How many separate photographs of Douglass does that book collect?",
            options: [
              "160",
              "It collects 320 images, one for each page of the volume as published by Liveright",
              "It collects 96 images, being those held in public collections at the time of writing",
              "It collects 240 images, including engravings made after photographic originals",
            ],
            correctIndex: 0,
            explanation:
              "One hundred and sixty is the count the book argues from, and the count is the basis of the most-photographed claim rather than a decorative detail.",
            sourceLessonSlug: "sitting-on-purpose",
          },
          {
            prompt: "Who published Picturing Frederick Douglass, and in what year?",
            options: [
              "Liveright, in 2015",
              "Harvard University Press, in 2018, as part of a series on nineteenth-century visual culture",
              "Yale University Press, in 2012, alongside its edition of the Douglass speeches",
              "Aperture, in 2009, as a companion to a travelling exhibition of the portraits",
            ],
            correctIndex: 0,
            explanation:
              "The book was published by Liveright in November 2015, and the publisher and date are part of what makes the claim locatable.",
            sourceLessonSlug: "sitting-on-purpose",
          },
          {
            prompt: "Why does the lesson call the most-photographed claim a compliment to its authors?",
            options: [
              "Because it is falsifiable",
              "Because it required the authors to travel to more than thirty archives to assemble the images",
              "Because no earlier scholar had thought to compare Douglass with Lincoln on this measure",
              "Because the publisher subjected the count to independent verification before printing it",
            ],
            correctIndex: 0,
            explanation:
              "Somebody who finds another photograph, or a bigger set for another figure, changes the answer, and a claim built to be overturnable is a serious claim.",
            sourceLessonSlug: "sitting-on-purpose",
          },
          {
            prompt: "Why does this course not print comparison figures for Lincoln or Whitman?",
            options: [
              "They are a separate claim and were not verified",
              "Because the authors of Picturing Frederick Douglass explicitly declined to publish them",
              "Because portraits of Lincoln were made by so many operators that no count is possible",
              "Because comparisons between subjects are considered poor practice in art-historical writing",
            ],
            correctIndex: 0,
            explanation:
              "Attaching an unverified number to a verified one would let the unverified half borrow the other's credibility.",
            sourceLessonSlug: "sitting-on-purpose",
          },
          {
            prompt: "What three questions does the lesson tell you to ask of a superlative?",
            options: [
              "Who counted, what was counted, and when",
              "Who benefits from the claim, who repeated it first, and who has since disputed it in print",
              "Which archive holds the evidence, who catalogued it, and whether the public may consult it",
              "Whether the claim is old, whether it is popular, and whether a museum has endorsed it",
            ],
            correctIndex: 0,
            explanation:
              "Attaching the counter, the thing counted and the date turns a slogan back into a claim a reader can inspect.",
            sourceLessonSlug: "sitting-on-purpose",
          },
          {
            prompt: "\"The most photographed man in history\" is a worse sentence than the book's claim because it does what?",
            options: [
              "Removes the checkable parts",
              "Overstates the total by including photographs taken after the subject's death",
              "Confuses photographs with engravings, which were far more numerous in the period",
              "Attributes to one scholar a finding that several researchers reached independently",
            ],
            correctIndex: 0,
            explanation:
              "It drops the century, the counter and the count, which is the same assertion with everything a reader could verify taken out.",
            sourceLessonSlug: "sitting-on-purpose",
          },
          {
            prompt: "What does the record hold about a subject, according to this lesson?",
            options: [
              "What they did, not what they felt",
              "Their intentions, which studio proprietors routinely noted when booking a portrait sitting",
              "Their reputation at the time, which newspaper coverage of each sitting preserves in detail",
              "Their private correspondence, which archives collect alongside the photographs themselves",
            ],
            correctIndex: 0,
            explanation:
              "Behaviour visible many times is available to a researcher. Interior state is not, which is why the lesson reasons from the repetition.",
            sourceLessonSlug: "sitting-on-purpose",
          },
          {
            prompt: "How does the lesson describe Douglass's self-presentation goal?",
            options: [
              "As a dignified and respected citizen",
              "As a survivor of enslavement whose suffering should be legible in every portrait he sat for",
              "As an orator caught mid-speech, since his platform reputation was his principal asset",
              "As a family man, photographed with his wife and children to counter charges of rootlessness",
            ],
            correctIndex: 0,
            explanation:
              "That phrase comes from published accounts of his philosophy of photography, and it explains the formality rather than merely describing it.",
            sourceLessonSlug: "sitting-on-purpose",
          },
          {
            prompt: "What is the risk this lesson says Douglass carries in a course like this one?",
            options: [
              "Being flattened into a slogan",
              "Being cited so often that his own writings on photography have never been properly edited",
              "Being credited with photographs that were in fact taken of other abolitionist speakers",
              "Being treated as representative of Black experience when his circumstances were unusual",
            ],
            correctIndex: 0,
            explanation:
              "A course that teaches admiration teaches nothing usable. The mechanism of the sitting, and how to hold the count, is what a learner can take away.",
            sourceLessonSlug: "sitting-on-purpose",
          },
          {
            prompt: "Which of these is a falsifiable claim?",
            options: [
              "This book collects 160 photographs of Douglass",
              "Douglass understood the moral significance of the photographic medium more deeply than his contemporaries",
              "Douglass's portraits are among the most powerful images of the American nineteenth century",
              "Douglass believed photography would eventually end prejudice in the United States entirely",
            ],
            correctIndex: 0,
            explanation:
              "A count can be checked against the book and overturned by a new find. The others are judgements with nothing specific to test.",
            sourceLessonSlug: "sitting-on-purpose",
          },
          {
            prompt: "What does attributing a claim to named authors let a reader do?",
            options: [
              "Inspect their method",
              "Establish who owns the copyright in the finding and who must be paid to reproduce it",
              "Determine whether the claim has been peer reviewed by a scholarly journal in the field",
              "Decide whether the authors were sufficiently senior for the claim to be taken seriously",
            ],
            correctIndex: 0,
            explanation:
              "Naming the people who counted converts trust in a slogan into an inspection of a method, which is the whole point of the practice.",
            sourceLessonSlug: "sitting-on-purpose",
          },
          {
            prompt: "Across what span did Douglass sit for the photographs the book collects?",
            options: [
              "Decades",
              "A single decade, the 1860s, when the wet-plate process was cheap and widely available",
              "The four years of the Civil War, when demand for likenesses of public figures peaked",
              "The last five years of his life, once he had the means to commission portraits regularly",
            ],
            correctIndex: 0,
            explanation:
              "The span is what allows the pattern to count as evidence, since a strategy sustained over decades cannot be an accident of mood.",
            sourceLessonSlug: "sitting-on-purpose",
          },
          {
            prompt: "What did Douglass hold more of than almost any Black American of his century?",
            options: [
              "The chain of decisions behind his own image",
              "The legal copyright in every likeness produced of him, which he registered systematically",
              "The negatives themselves, which he stored at his home and released only on request",
              "A commercial relationship with the illustrated press, which paid him for each reproduction",
            ],
            correctIndex: 0,
            explanation:
              "He chose when to sit, chose the pose, distributed the results and explained why, which is more of the chain than the subject usually holds.",
            sourceLessonSlug: "a-record-is-made-not-found",
          },
          {
            prompt: "What is the practical use of the distinction between a subject and an author?",
            options: [
              "It tells you which documents to go and read",
              "It determines whether a photograph may be exhibited without the subject's written consent",
              "It establishes which of the two is entitled to be named on a museum wall label",
              "It settles who may authorise a reproduction when the photographer has died intestate",
            ],
            correctIndex: 0,
            explanation:
              "Because the difference lives in commissions, captions, contracts and deeds, knowing it is a difference of paperwork tells you where to look.",
            sourceLessonSlug: "a-record-is-made-not-found",
          },
          {
            prompt: "Which best describes this course's approach to its subjects?",
            options: [
              "One person, one idea",
              "A chronological survey of the major Black American photographers of the last two centuries",
              "A comparison of European and American attitudes to portraiture in the nineteenth century",
              "A technical history of photographic processes and the artists who mastered each of them",
            ],
            correctIndex: 0,
            explanation:
              "Every subject is attached to one mechanism and used to make that one point, which is what stops the course becoming a slideshow.",
            sourceLessonSlug: "a-record-is-made-not-found",
          },
          {
            prompt: "Why does the lesson insist a superlative is not a fact of nature?",
            options: [
              "It is produced by a method somebody chose",
              "Because superlatives are always exaggerated by publishers seeking to sell more copies",
              "Because no institution has the authority to certify a claim of this kind as correct",
              "Because comparisons across centuries cannot be made with any statistical confidence",
            ],
            correctIndex: 0,
            explanation:
              "Somebody decided what counted as a photograph, gathered a set and reported a total, so the claim carries their decisions inside it.",
            sourceLessonSlug: "sitting-on-purpose",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2 — The instrument was not neutral
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "what-a-reference-card-does",
      title: "3 · What a reference card does",
      section: "Section 2 · The instrument was not neutral",
      body: `Section 1 was about people making decisions. This section is about a decision that stopped looking like one, because it got built into a machine.

**The object.** A Shirley card is a colour reference card. Kodak created them in the 1950s. The original carried some colour swatches and a photograph of a woman, a Kodak employee named Shirley Page, and the card went out to photographic laboratories. Kodak later put other women on the cards, and the name Shirley stuck to the object rather than to any one model.

**What the card was for, which is the part people skip.** A lab printing colour negatives has to decide how much of each dye to lay down. Get it wrong and every face on the roll comes out green, or orange, or muddy. The reference card gives the operator a known target: print until the card looks right, then run the customer's film through the same settings. It is a calibration standard, in the same sense that a weight is a calibration standard for a scale.

**The fact that makes it a credit-course subject rather than a technology-course subject.** The new Shirleys shared a trait. As the 99% Invisible episode on the cards puts it, "these new Shirleys all shared a common trait: they were all white." So the target the whole printing pipeline was tuned against was a light-skinned face. Film emulsions, lab settings and operator judgement were all trained on that one reference, decade after decade.

**Why this is not a claim that anyone hated anybody.** It is a much duller and much more useful claim. Somebody had to pick a face for the card. They picked the face they thought of as ordinary. That single choice then propagated into chemistry, into machine settings, into what a technician's eye learned to accept as correct, and into hundreds of millions of prints. Nobody had to make the decision again, which is exactly what makes a default powerful. A default is a decision that got installed and then stopped being visible.

**How to tell a default from an accident.** Ask whether it could have gone another way, and whether anybody wrote it down. The Shirley card is a physical object that Kodak manufactured and shipped. There is a card. Somebody chose the person on it. That is a paper trail, and a paper trail is the difference between a technical bias you can argue about and a grievance you cannot check.

**And the correction, which came late.** By the mid-1990s Kodak was producing a multiracial Shirley card, with several women of different skin tones on one reference. That is a real change, and it dates the problem: for roughly forty years the industry standard for what a correctly printed human face looked like was one kind of face.

**What this section is setting up.** Section 1 asked who authored an image. This section adds a harder question: what happens when the decision is not in anybody's hands at the moment it takes effect, because it was made once, upstream, and then built into the equipment. The next lesson asks who actually got Kodak to change, and the answer is not the one most retellings give.

:::reveal What is a Shirley card and what is it for? ||| A Kodak colour reference card, first made in the 1950s, carrying colour swatches and a photograph of a woman. Photographic labs printed until the card looked right, then used those settings on customer film. It is a calibration standard.

:::reveal What trait did the Shirley models share, and why does it matter? ||| They were all white. The reference the entire printing pipeline was tuned against was therefore a light-skinned face, so emulsions, lab settings and operator judgement were all calibrated to it.

:::reveal What does this course mean by a default? ||| A decision that got made once, installed upstream, and then stopped being visible, so it takes effect without anybody having to choose it again.

## Vocabulary
- **Shirley card**: Kodak's colour reference card, named for Kodak employee Shirley Page, used by photo labs to calibrate colour printing.
- **Calibration standard**: a known target an instrument or process is tuned against, so that a result can be judged correct without measuring the subject itself.
- **Default**: a choice built into a system upstream, which then produces outcomes without being chosen again, and which is therefore easy to mistake for a fact.
- **Paper trail**: the documented existence of a decision, which is what separates a checkable claim about bias from an unfalsifiable one.

## Sources
99% Invisible. (2021, November 8). *Shirley cards* (Episode 465). https://99percentinvisible.org/episode/465-shirley-cards/`,
    },
    {
      slug: "who-actually-moved-kodak",
      title: "4 · Who actually moved Kodak",
      section: "Section 2 · The instrument was not neutral",
      body: `The Shirley card has a second half, and the second half is the reason it belongs in a course about credit rather than in a course about chemistry.

**The scholar to attach it to.** Lorna Roth, of Concordia University, published "Looking at Shirley, the Ultimate Norm: Colour Balance, Image Technologies, and Cognitive Equity" in the *Canadian Journal of Communication*, volume 34, issue 1, in 2009, at pages 111 to 136. That citation is worth writing out because most retellings of this story name no source at all, and a claim about an industry with no source attached is a rumour with good manners.

**The finding that gets repeated.** Kodak did widen the dynamic range of its film. But the pressure that produced the change did not come from people complaining that photographs of them printed badly. As the 99% Invisible episode reporting Roth's research puts it, Kodak changed its film "not because they were listening to the complaints from people of color," but because "they were going to lose the business of two big professional clients: a chocolate company, and a furniture company." Dark chocolate and milk chocolate were coming out indistinguishable. Dark wood was not rendering.

**And the detail that keeps it honest.** Earl Kage, formerly of Kodak's research studios, is quoted in the same episode noting that the company had not considered that expanding the film's dynamic range would also improve how dark skin tones rendered. That is not a story about villains. It is a story about whose complaint counted as a business problem.

**Now the discipline, which is the actual lesson.** This story circulates in a punchier form than the research supports, usually as a single line about Kodak fixing racist film to sell chocolate. Punchier than the finding is a warning sign, not a bonus. So here is exactly what this course did and did not do. It retrieved the article's full bibliographic record, including the digital object identifier 10.22230/cjc.2009v34n1a2196, from the Crossref registry, so the citation above is confirmed. It could not retrieve the article's text, which is behind a publisher wall that refused automated access. Everything above about chocolate, furniture and Earl Kage therefore comes from a documentary podcast episode that interviewed Roth, not from Roth's own pages.

**Why say that out loud in a lesson rather than in a footnote.** Because the course is about credit, and a course about credit that quietly launders a podcast into a scholarly finding is doing the thing it criticises. You now know precisely how strong this claim is: strong enough to teach, attributed to a named researcher, reported by a named programme, and not yet read at the source. If you go and read Roth's article and find the emphasis different, the course was wrong in a way you could catch, which is the only kind of wrong worth being.

**The transferable move.** When a story about an institution is very satisfying, find the researcher, find the publication, and notice the distance between what they found and what the retelling says. The distance is usually where the interesting part is.

:::reveal Who is the scholar who documented the Shirley card, and where was the work published? ||| Lorna Roth, of Concordia University, in the Canadian Journal of Communication, volume 34, issue 1, 2009, pages 111 to 136.

:::reveal What does the reporting of Roth's research say moved Kodak to widen its film's dynamic range? ||| The risk of losing two large commercial clients, a chocolate company and a furniture company, whose dark products were not rendering, rather than complaints about how photographs of people printed.

:::reveal What did this course confirm about Roth's article, and what could it not confirm? ||| It confirmed the full citation and the DOI through the Crossref registry. It could not retrieve the article text, so the chocolate, furniture and Earl Kage material is credited to the podcast episode that interviewed her, not to her own pages.

## Vocabulary
- **Dynamic range**: the span between the darkest and lightest detail a film or sensor can record, which is what widening the emulsion changed.
- **Digital object identifier (DOI)**: a permanent identifier for a published work, which lets a reader locate the exact item a citation names.
- **Crossref**: the registry that holds bibliographic records for works with DOIs, and which can confirm a citation even when the article itself is behind a paywall.
- **Laundering a source**: passing a claim reported by one kind of source off as though it came from a stronger one, which this lesson names in order to refuse it.

## Sources
Roth, L. (2009). Looking at Shirley, the ultimate norm: Colour balance, image technologies, and cognitive equity. *Canadian Journal of Communication, 34*(1), 111-136. https://doi.org/10.22230/cjc.2009v34n1a2196

99% Invisible. (2021, November 8). *Shirley cards* (Episode 465). https://99percentinvisible.org/episode/465-shirley-cards/`,
    },
    {
      slug: "section-2-quiz",
      title: "Section 2 quiz · The instrument was not neutral",
      section: "Section 2 · The instrument was not neutral",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is a Shirley card?",
            options: [
              "A Kodak colour reference card",
              "A booking form Kodak supplied to studios for recording a sitter's name and address",
              "A warranty document issued with every Kodak enlarger sold to professional laboratories",
              "A test negative Kodak shipped so labs could measure the sharpness of a lens before use",
            ],
            correctIndex: 0,
            explanation:
              "It carried colour swatches and a photograph of a woman, and labs used it to calibrate colour printing.",
            sourceLessonSlug: "what-a-reference-card-does",
          },
          {
            prompt: "In which decade did Kodak create the first Shirley cards?",
            options: [
              "The 1950s",
              "The 1930s, shortly after Kodachrome became available to professional photographers",
              "The 1970s, when colour printing first became common in consumer photofinishing",
              "The 1910s, when Kodak began supplying standardised materials to commercial laboratories",
            ],
            correctIndex: 0,
            explanation:
              "The 99% Invisible episode dates the original card to the 1950s, when the object entered lab practice.",
            sourceLessonSlug: "what-a-reference-card-does",
          },
          {
            prompt: "Who was the original Shirley?",
            options: [
              "A Kodak employee named Shirley Page",
              "A professional model contracted annually by Kodak's advertising department in Rochester",
              "A composite figure invented by Kodak's engineers and never based on a real person",
              "The wife of a Kodak executive, whose portrait was used with the family's permission",
            ],
            correctIndex: 0,
            explanation:
              "Kodak later put other women on the cards, and the name Shirley stayed attached to the object rather than to any one model.",
            sourceLessonSlug: "what-a-reference-card-does",
          },
          {
            prompt: "What problem does a reference card solve for a printing lab?",
            options: [
              "How much of each dye to lay down",
              "How long a negative must be washed before the fixer is completely removed from the emulsion",
              "Which paper stock will best suit a particular customer's order and budget",
              "Whether a negative has been correctly exposed at the moment the shutter was released",
            ],
            correctIndex: 0,
            explanation:
              "The operator prints until the card looks right, then runs customer film through the same settings, which is why it is a calibration standard.",
            sourceLessonSlug: "what-a-reference-card-does",
          },
          {
            prompt: "What trait did the Shirley models share?",
            options: [
              "They were all white",
              "They were all employees of Kodak's Rochester plant rather than professional models",
              "They were all photographed against the same neutral grey background and lighting setup",
              "They all wore the same red garment, chosen because red is the hardest dye to balance",
            ],
            correctIndex: 0,
            explanation:
              "The 99% Invisible episode states it directly, and it is the fact that makes the card a subject for a credit course.",
            sourceLessonSlug: "what-a-reference-card-does",
          },
          {
            prompt: "Why does the course call the Shirley card a default rather than an accident?",
            options: [
              "Somebody chose it and it was written into an object",
              "Because Kodak's competitors adopted the same card without ever examining its assumptions",
              "Because laboratories were contractually obliged to use it and could not substitute another",
              "Because the choice was made by a committee whose minutes were never released publicly",
            ],
            correctIndex: 0,
            explanation:
              "There is a physical card that Kodak manufactured and shipped, so there is a paper trail, which is what makes the claim checkable.",
            sourceLessonSlug: "what-a-reference-card-does",
          },
          {
            prompt: "What is the mark of a default, in this lesson's definition?",
            options: [
              "It takes effect without being chosen again",
              "It is enforced by a written policy that employees must sign before beginning work",
              "It is the option a manufacturer recommends but which users are free to override",
              "It reflects the preference of the majority of a product's customers at the time",
            ],
            correctIndex: 0,
            explanation:
              "The decision was made once, installed upstream, and then stopped being visible, which is exactly what makes it powerful.",
            sourceLessonSlug: "what-a-reference-card-does",
          },
          {
            prompt: "Roughly how long did the industry standard for a correctly printed face remain one kind of face?",
            options: [
              "About forty years",
              "About a decade, from the introduction of the card to the arrival of automated printers",
              "About a century, from the earliest commercial photography to the digital transition",
              "About five years, until the first complaints from professional portrait studios arrived",
            ],
            correctIndex: 0,
            explanation:
              "The cards date from the 1950s and Kodak was producing a multiracial reference card by the mid-1990s, which brackets the period.",
            sourceLessonSlug: "what-a-reference-card-does",
          },
          {
            prompt: "What did Kodak produce by the mid-1990s?",
            options: [
              "A multiracial Shirley card",
              "A digital calibration file that replaced the printed card in every laboratory it supplied",
              "A written apology to photofinishers for the limitations of its earlier reference materials",
              "A separate card for each national market, matched to that market's typical customer",
            ],
            correctIndex: 0,
            explanation:
              "Several women of different skin tones appeared on one reference, which is a real change and which dates the preceding period.",
            sourceLessonSlug: "what-a-reference-card-does",
          },
          {
            prompt: "Why does the lesson insist the Shirley card story is not a claim that anyone hated anybody?",
            options: [
              "Because a duller mechanism explains more",
              "Because Kodak's internal records show the company debated the question and resolved it fairly",
              "Because the models on the cards had no say in how their photographs were later used",
              "Because accusations of intent cannot be made about a corporation, only about individuals",
            ],
            correctIndex: 0,
            explanation:
              "Somebody picked the face they thought of as ordinary, and that single choice propagated into chemistry, machine settings and trained judgement.",
            sourceLessonSlug: "what-a-reference-card-does",
          },
          {
            prompt: "How does the lesson say you can tell a default from an accident?",
            options: [
              "Ask whether anybody wrote it down",
              "Ask whether the outcome was repeated more than once in a single production run",
              "Ask whether the manufacturer has since apologised for the outcome in public",
              "Ask whether a competitor made a different choice in the same period",
            ],
            correctIndex: 0,
            explanation:
              "A paper trail is the difference between a technical bias you can argue about and a grievance nobody can check.",
            sourceLessonSlug: "what-a-reference-card-does",
          },
          {
            prompt: "The Shirley card propagated a single choice into which of these?",
            options: [
              "What a technician's eye learned to accept as correct",
              "The price laboratories charged for a colour print compared with a black-and-white one",
              "The legal standard for whether a printed portrait was a faithful likeness of its subject",
              "The order in which negatives were processed on a given day in a commercial lab",
            ],
            correctIndex: 0,
            explanation:
              "The choice reached chemistry, machine settings, trained judgement and hundreds of millions of prints, without ever being made again.",
            sourceLessonSlug: "what-a-reference-card-does",
          },
          {
            prompt: "How does this section extend the question Section 1 asked?",
            options: [
              "It asks what happens when the decision is built into equipment",
              "It asks whether photographs can be considered evidence in the absence of a caption",
              "It asks which institutions are legally responsible for preserving photographic records",
              "It asks how the cost of photography changed between the daguerreotype and colour film",
            ],
            correctIndex: 0,
            explanation:
              "Section 1 asked who authored an image. Here the decision was made once, upstream, and then took effect without anybody's hand on it.",
            sourceLessonSlug: "what-a-reference-card-does",
          },
          {
            prompt: "What is a calibration standard?",
            options: [
              "A known target a process is tuned against",
              "A legal minimum quality that a photographic laboratory must meet to retain its licence",
              "The average result produced by a machine across a large number of consecutive runs",
              "A written specification issued by a trade body and updated at fixed intervals",
            ],
            correctIndex: 0,
            explanation:
              "It lets a result be judged correct without measuring the subject itself, in the way a known weight calibrates a scale.",
            sourceLessonSlug: "what-a-reference-card-does",
          },
          {
            prompt: "Which is a consequence of tuning a whole pipeline to one reference face?",
            options: [
              "Other faces print as errors",
              "Colour negatives take measurably longer to process than they otherwise would",
              "Laboratories must recalibrate their equipment before every individual customer order",
              "Photographers lose the ability to choose their own exposure settings in the field",
            ],
            correctIndex: 0,
            explanation:
              "Correct is defined by the target, so a face unlike the target reads to the machine and to the operator as something to be fixed.",
            sourceLessonSlug: "what-a-reference-card-does",
          },
          {
            prompt: "Why is the Shirley card taught here rather than in a craft course on photography?",
            options: [
              "The question is who set the standard",
              "Because the chemistry involved is too specialised for a course aimed at general learners",
              "Because craft courses in this catalog do not cover colour printing at any level",
              "Because the card is no longer used and so has no practical value to a photographer",
            ],
            correctIndex: 0,
            explanation:
              "Metering, film latitude and calibration are genuinely a craft subject. Who chose the reference, and whose complaint could change it, is a credit subject.",
            sourceLessonSlug: "what-a-reference-card-does",
          },
          {
            prompt: "What did Kodak ship to laboratories along with its films?",
            options: [
              "A physical reference card",
              "A trained technician who visited each laboratory quarterly to check its output",
              "A subscription to a printed bulletin describing recommended settings for each emulsion",
              "A sealed sample of every dye batch, so labs could verify consistency between deliveries",
            ],
            correctIndex: 0,
            explanation:
              "The card is an object Kodak manufactured and distributed, which is why the decision behind it left a trail.",
            sourceLessonSlug: "what-a-reference-card-does",
          },
          {
            prompt: "What does the phrase \"stopped looking like a decision\" describe?",
            options: [
              "A choice that became the way things work",
              "A policy that was formally rescinded but continued to be followed by habit",
              "An outcome nobody predicted and which no individual could have prevented",
              "A rule enforced so strictly that employees no longer questioned it aloud",
            ],
            correctIndex: 0,
            explanation:
              "Once installed, the default produces results without anybody choosing it again, so it reads as a technical fact rather than as somebody's call.",
            sourceLessonSlug: "what-a-reference-card-does",
          },
          {
            prompt: "Whose name does the card carry, and whose face did it later carry?",
            options: [
              "One woman's name, and many women's faces",
              "One woman's name and one woman's face, unchanged from the 1950s to the 1990s",
              "No individual's name, since Shirley was a brand term applied to the whole product line",
              "The name of the Kodak chemist who designed the emulsion the card was made to test",
            ],
            correctIndex: 0,
            explanation:
              "Kodak put other women on later cards, and the name Shirley stayed attached to the object rather than to any one model.",
            sourceLessonSlug: "what-a-reference-card-does",
          },
          {
            prompt: "What is the argument for calling the Shirley card evidence rather than anecdote?",
            options: [
              "The object was manufactured and can be examined",
              "It has been reported by several journalists working independently of one another",
              "Kodak has never denied the account in any public statement or corporate history",
              "The people affected by it have described the same experience over many decades",
            ],
            correctIndex: 0,
            explanation:
              "A physical, distributed, documented product is checkable, and checkability is the difference this section is teaching.",
            sourceLessonSlug: "what-a-reference-card-does",
          },
          {
            prompt: "Who published the scholarly account of the Shirley card, and where?",
            options: [
              "Lorna Roth, in the Canadian Journal of Communication",
              "Brian Wallis, in American Art, in an article about photographic standards and race",
              "Deborah Willis, in a monograph published by the Smithsonian Institution Press",
              "Earl Kage, in a technical memoir of his years running Kodak's research studios",
            ],
            correctIndex: 0,
            explanation:
              "Roth is at Concordia University, and the article appeared in volume 34, issue 1, in 2009, at pages 111 to 136.",
            sourceLessonSlug: "who-actually-moved-kodak",
          },
          {
            prompt: "What is the title of Roth's article?",
            options: [
              "Looking at Shirley, the Ultimate Norm",
              "Colour Balance and the American Photographic Laboratory, 1950 to 1990",
              "Shirley Cards and the Manufacture of the Normal Face in Consumer Photography",
              "Cognitive Equity in Image Technologies: A History of the Kodak Reference Standard",
            ],
            correctIndex: 0,
            explanation:
              "The full title continues \"Colour Balance, Image Technologies, and Cognitive Equity\", and naming it is what makes the claim locatable.",
            sourceLessonSlug: "who-actually-moved-kodak",
          },
          {
            prompt: "In what year was Roth's article published?",
            options: [
              "2009",
              "1999, in a special issue on race and communication technologies",
              "2015, six years after her fieldwork with former Kodak staff was completed",
              "1993, shortly before Kodak introduced its multiracial reference card",
            ],
            correctIndex: 0,
            explanation:
              "Volume 34, issue 1, 2009, pages 111 to 136, confirmed through the Crossref bibliographic record.",
            sourceLessonSlug: "who-actually-moved-kodak",
          },
          {
            prompt: "According to the reporting of Roth's research, what moved Kodak to widen its film's dynamic range?",
            options: [
              "The risk of losing two commercial clients",
              "A sustained letter-writing campaign by civil rights organisations during the late 1960s",
              "A federal regulation requiring consumer film to render all skin tones within a set tolerance",
              "Competition from a rival manufacturer whose emulsion already handled darker tones better",
            ],
            correctIndex: 0,
            explanation:
              "A chocolate company and a furniture company whose dark products were not rendering, rather than complaints about photographs of people.",
            sourceLessonSlug: "who-actually-moved-kodak",
          },
          {
            prompt: "Which two industries are named in that account?",
            options: [
              "Chocolate and furniture",
              "Automotive paint and printed textiles, both of which depend on accurate colour proofing",
              "Cosmetics and photographic portraiture, the two largest professional users of colour film",
              "Publishing and advertising, whose reproduction standards Kodak was contractually bound to meet",
            ],
            correctIndex: 0,
            explanation:
              "Dark chocolate and milk chocolate were coming out indistinguishable, and dark wood was not rendering.",
            sourceLessonSlug: "who-actually-moved-kodak",
          },
          {
            prompt: "Who is Earl Kage?",
            options: [
              "A former head of Kodak research studios",
              "The Concordia researcher who first identified the Shirley card as a calibration standard",
              "The photographer who made the original Shirley Page portrait for Kodak in the 1950s",
              "The Kodak executive who authorised the multiracial reference card in the mid-1990s",
            ],
            correctIndex: 0,
            explanation:
              "He is quoted in the reporting noting that the company had not considered that a wider dynamic range would also improve dark skin tones.",
            sourceLessonSlug: "who-actually-moved-kodak",
          },
          {
            prompt: "What did Kage say Kodak had not considered?",
            options: [
              "That a wider range would also help dark skin tones",
              "That its reference cards were being used long after the company had stopped supporting them",
              "That its commercial clients and its consumer customers wanted incompatible things from one film",
              "That competitors would copy the reference card and adopt the same standard themselves",
            ],
            correctIndex: 0,
            explanation:
              "That is what makes the episode a story about whose complaint counted as a business problem rather than a story about villains.",
            sourceLessonSlug: "who-actually-moved-kodak",
          },
          {
            prompt: "What does this course say it confirmed about Roth's article?",
            options: [
              "Its full citation and its DOI",
              "Its full text, retrieved from the publisher's website during the authoring session",
              "Its peer-review history, obtained from the journal's editorial correspondence",
              "Its author's current position and her willingness to be cited in a teaching context",
            ],
            correctIndex: 0,
            explanation:
              "The bibliographic record, including the identifier 10.22230/cjc.2009v34n1a2196, was retrieved from Crossref. The article text was not.",
            sourceLessonSlug: "who-actually-moved-kodak",
          },
          {
            prompt: "What could this course NOT retrieve, and what follows from that?",
            options: [
              "The article text, so the details are credited to the podcast",
              "The name of the researcher, so the finding is presented without attribution to anyone",
              "The year of publication, so the citation is given as an approximate decade only",
              "Kodak's internal records, so the entire account is presented as unverified rumour",
            ],
            correctIndex: 0,
            explanation:
              "The chocolate, furniture and Kage material is credited to the documentary episode that interviewed Roth, not to her own pages.",
            sourceLessonSlug: "who-actually-moved-kodak",
          },
          {
            prompt: "What is a DOI?",
            options: [
              "A permanent identifier for a published work",
              "A licence number issued to journals that permit automated retrieval of their content",
              "A code assigned by a university library to items held in its own physical collection",
              "A record of how many times an article has been cited by other published research",
            ],
            correctIndex: 0,
            explanation:
              "It lets a reader locate the exact item a citation names, which is why confirming one strengthens a citation even when the text is paywalled.",
            sourceLessonSlug: "who-actually-moved-kodak",
          },
          {
            prompt: "What is Crossref, as this lesson uses it?",
            options: [
              "A registry of bibliographic records for works with DOIs",
              "A database of full-text articles made freely available by their publishers",
              "A tool that scores the reliability of a published claim against other sources",
              "An index of podcast episodes and documentary programmes about scholarly research",
            ],
            correctIndex: 0,
            explanation:
              "It can confirm a citation even when the article itself sits behind a paywall, which is exactly what happened here.",
            sourceLessonSlug: "who-actually-moved-kodak",
          },
          {
            prompt: "What does the lesson mean by laundering a source?",
            options: [
              "Passing off a weaker source as a stronger one",
              "Republishing a finding in a second venue so that it appears to have been confirmed twice",
              "Removing a researcher's name from a claim so it can be quoted without permission",
              "Translating a technical finding into plain language for a non-specialist audience",
            ],
            correctIndex: 0,
            explanation:
              "A course about credit that quietly turned a podcast into a scholarly finding would be doing the thing it criticises.",
            sourceLessonSlug: "who-actually-moved-kodak",
          },
          {
            prompt: "Why does the lesson call \"punchier than the finding\" a warning sign?",
            options: [
              "Compression usually drops the qualifiers that made it true",
              "Because short claims are harder to fact-check than long ones in every case",
              "Because researchers deliberately understate findings to avoid press attention",
              "Because a memorable claim is more likely to have been invented for advertising",
            ],
            correctIndex: 0,
            explanation:
              "The distance between what a researcher found and what a retelling says is usually where the interesting part is.",
            sourceLessonSlug: "who-actually-moved-kodak",
          },
          {
            prompt: "What is the transferable move this lesson teaches?",
            options: [
              "Find the researcher and measure the distance to the retelling",
              "Assume any story about a corporation is exaggerated until the corporation confirms it",
              "Prefer podcast reporting to journal articles, because interviews capture nuance better",
              "Wait for a second independent researcher to publish before repeating any finding",
            ],
            correctIndex: 0,
            explanation:
              "Locate the publication, then notice what the popular version added or dropped, because that gap is the finding's shape.",
            sourceLessonSlug: "who-actually-moved-kodak",
          },
          {
            prompt: "What would happen if a reader read Roth's article and found the emphasis different?",
            options: [
              "The course would be wrong in a way you could catch",
              "The course would be unaffected, since the podcast is an independent source in its own right",
              "The claim would remain valid because the podcast interviewed the researcher directly",
              "Nothing, because the course does not assert anything about the article's contents",
            ],
            correctIndex: 0,
            explanation:
              "That is the point of stating provenance in the open: it makes the course falsifiable at the exact place it is weakest.",
            sourceLessonSlug: "who-actually-moved-kodak",
          },
          {
            prompt: "Why is a claim about an industry with no source attached described as a rumour?",
            options: [
              "There is nothing a reader can go and check",
              "Because industries never comment publicly on claims made about their past practices",
              "Because such claims are usually made by people with a commercial interest in the outcome",
              "Because unsourced claims are legally actionable and so tend to be quietly withdrawn",
            ],
            correctIndex: 0,
            explanation:
              "Attaching Roth's name, journal, volume, issue, year and pages converts the same sentence into something inspectable.",
            sourceLessonSlug: "who-actually-moved-kodak",
          },
          {
            prompt: "What page range does Roth's article occupy?",
            options: [
              "111 to 136",
              "39 to 61, in the same volume of the journal's spring issue",
              "1 to 24, opening the issue as its lead research article",
              "205 to 218, in a themed section on visual technologies",
            ],
            correctIndex: 0,
            explanation:
              "Volume 34, issue 1, 2009, pages 111 to 136, taken from the registered bibliographic record.",
            sourceLessonSlug: "who-actually-moved-kodak",
          },
          {
            prompt: "At which university is Lorna Roth based?",
            options: [
              "Concordia University",
              "The University of Toronto, in its Faculty of Information",
              "McGill University, in its Department of Art History and Communication Studies",
              "Ryerson University, in the school that houses its photographic collection",
            ],
            correctIndex: 0,
            explanation:
              "Concordia, in Montreal, is the affiliation carried on the article's bibliographic record.",
            sourceLessonSlug: "who-actually-moved-kodak",
          },
          {
            prompt: "What is the relationship between the Shirley card and Kodak's emulsion change?",
            options: [
              "The card set the target; the emulsion change widened the range",
              "The card was withdrawn at the moment the emulsion changed, and the two events are the same event",
              "The card was introduced in response to the emulsion change, to help labs adjust to it",
              "The card and the emulsion were produced by different companies and were never connected",
            ],
            correctIndex: 0,
            explanation:
              "They are two different objects doing two different jobs, and keeping them separate is what stops the story collapsing into a slogan.",
            sourceLessonSlug: "who-actually-moved-kodak",
          },
          {
            prompt: "Why is the Kodak story described as being about whose complaint counted?",
            options: [
              "Complaints existed on both sides; only one was a business problem",
              "Because Kodak kept no record of consumer complaints and could not have acted on them",
              "Because commercial clients were the only customers permitted to contact the company directly",
              "Because the company's engineers were unaware that any complaints had been received at all",
            ],
            correctIndex: 0,
            explanation:
              "Kage's remark, that Kodak had not considered the effect on skin tones, is what makes this a story about attention rather than about malice.",
            sourceLessonSlug: "who-actually-moved-kodak",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3 — Records made about people
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-1850-commission",
      title: "5 · A record made about people",
      section: "Section 3 · Records made about people",
      body: `Everything so far has been about records people had some hand in. This lesson is about a record made about people, by people who owned them or worked with those who did, to argue something about them.

**Before anything else, how this course will handle it.** Seven people were photographed. This course names them, says what is known and what is not known about their lives, and does not describe the pictures. The photographs were made to strip these people of standing, and a course that lingered over the images would be performing the commission again with better manners. What the course's question actually needs is the paperwork: who ordered the work, who was paid, who wrote the labels, and who kept the plates for the next hundred and seventy-five years. All of that is documented, and none of it requires looking.

**The commission.** In 1850, in Columbia, South Carolina, the photographer Joseph T. Zealy made a set of daguerreotypes of enslaved people. Fifteen plates survive. The seven people in them are recorded as Alfred, Delia, Drana, Fassena, Jack, Jem and Renty. Renty and Delia are recorded as father and daughter, and Drana as Jack's daughter.

**Who wanted them, and what for.** Louis Agassiz, a Swiss-born natural historian and a professor at Harvard, wanted them. Agassiz was a public proponent of polygenism, the theory that human races were separate creations rather than one species. He was working with Dr. Robert W. Gibbes, a South Carolina paleontologist with close ties to slaveholders, and together they arranged the sittings with people Agassiz selected. The pictures were made to serve as visual evidence for the theory. That is not a modern interpretation of the images. It is the stated purpose of the commission.

**Read the arrangement as a document rather than as an outrage.** Somebody with a scientific reputation wanted a specific kind of proof. Somebody local with the right connections found the subjects. Somebody with a camera was hired and paid. Nobody in that chain asked the seven people whether they wished to be photographed, and under the conditions of enslavement no meaningful consent was available to them. So the record was made about them, entirely without them, by a chain of three named parties who all left traces.

**What happened to the plates.** They were not published in Agassiz's lifetime. They passed to Harvard, and they sat in storage at the Peabody Museum of Archaeology and Ethnology until a museum staff member found them in 1976. Everything that has happened since, including two separate legal disputes this course closes with, follows from a rediscovery rather than from continuous public use. An object can be owned, catalogued and completely unattended for a century, and the paperwork will still be there when somebody opens the cabinet.

**Why this belongs in a credit course.** Because it is the clearest case in the catalog of a record whose author, commissioner, purpose and owner are all documented, and whose subjects had no share in any of it. Every later section reads a credit line against this one. When a caption in Section 4 carries a working woman's name, or a museum writes "attributed to" because it is not certain, you are looking at institutions making the opposite choice from the one made here.

:::reveal Why does this course name the seven people but not describe the photographs? ||| Because the photographs were made to strip the people in them of standing, and describing them would repeat that act. The course's question needs the paperwork instead: who commissioned, who was paid, who labelled and who kept the plates.

:::reveal Who commissioned the 1850 daguerreotypes, and to argue what? ||| Louis Agassiz, a Harvard professor, working with Dr. Robert W. Gibbes. He was a proponent of polygenism, the theory that human races were separate creations, and the pictures were meant as visual evidence for it.

:::reveal Where were the plates between 1850 and 1976? ||| Unpublished, then held by Harvard and stored at the Peabody Museum of Archaeology and Ethnology, where a staff member found them in 1976.

## Vocabulary
- **Daguerreotype**: an early photographic process producing a single unique image on a silvered plate, with no negative and therefore no copies.
- **Polygenism**: the discredited theory that human races were separately created, which Agassiz publicly advocated and commissioned these images to support.
- **Commission**: an instruction to make a work, carrying the commissioner's purpose, which is why the purpose of a commissioned record is a documentary fact rather than an interpretation.
- **Consent**: agreement freely given, which the conditions of enslavement made unavailable to the seven people photographed.
- **Rediscovery**: the moment a held object is noticed again, which can be a century after the paperwork that created it.

## Sources
Wallis, B. (1995). Black bodies, white science: Louis Agassiz's slave daguerreotypes. *American Art, 9*(2), 39-61. https://doi.org/10.1086/424243

Murray, Y. M. (2012-2013). From here I saw what happened and I cried: Carrie Mae Weems' challenge to the Harvard archive. *Unbound: Harvard Journal of the Legal Left, 8*(1), 1-78.

Di Liscia, V. (2025, May 28). *Harvard relinquishes photographs of enslaved people in historic settlement*. Hyperallergic. https://hyperallergic.com/harvard-relinquishes-photographs-of-enslaved-people-in-historic-settlement/`,
    },
    {
      slug: "named-and-not-known",
      title: "6 · Named, and still not known",
      section: "Section 3 · Records made about people",
      body: `The 1850 record contains seven names. It is worth being precise about what a name in that record is, because the answer is not the comforting one.

**Where the names come from.** Alfred, Delia, Drana, Fassena, Jack, Jem and Renty are the names the labels carry, and those labels were written by the people who arranged the sittings, working from the naming practices of the households that held them. They are not self-descriptions. They are entries, in the sense that an entry in an inventory is an entry: enough identification to tell one item from another, recorded by the party with an interest in telling them apart.

**What that means practically, and it is the sharpest fact in the section.** Scholars working on these images have gone looking in the surviving paperwork, principally the records of the people who enslaved them, and the surnames are not there. Family relationships beyond the two the labels note are largely unidentified. What happened to the people afterwards is, for the most part, unrecovered. Historians reporting on that work note, for example, that it is not known whether Drana escaped or was sold.

**And what has been recovered, because it is not nothing.** The same work has pulled fragments back out. Jem, in his sixties at the time, is described as having done construction labour that helped build Columbia. Ownership links have been established well enough to point researchers at further archives. That is real historical work and it is slow, and it is being done a hundred and seventy-five years after the fact because the original record was built to answer a different question.

**Here is the mechanism, stated plainly.** A record made to prove a theory captures exactly what the theory needs and nothing else. Agassiz needed people classified. He did not need their families, their histories, their words or their futures, so the record he commissioned does not contain them. The gap is not an accident of time or a failure of preservation. It is the shape of the original question, preserved.

**Why that is a usable idea rather than a sad one.** Once you know that a record's silences follow its purpose, the silences become evidence too. If a file names occupations but no relationships, somebody cared about labour and not about families. If it names a photographer but not a sitter, somebody was cataloguing art. If it names a sitter but not a photographer, somebody was cataloguing people. You can read the purpose of a record off what it declines to record, and that reading is available to you in any archive without any special access.

**And the standing point, which this course does not soften.** Seven people were made into a record without their consent, by a chain of parties who are all comfortably documented, in order to argue that they were less than human. Naming them is not a courtesy. It is the smallest correct treatment of the fact that the record's authors, its owner and its purpose are all better documented than the people it depicts.

:::reveal Where do the seven names in the 1850 record come from? ||| From labels written by the parties who arranged the sittings, using the naming practices of the households that held the seven people. They are entries in a record, not self-descriptions.

:::reveal Name two things scholars have not been able to recover about the seven people. ||| Their surnames, and most of what happened to them afterwards. Family relationships beyond the two the labels note are also largely unidentified, and it is not known whether Drana escaped or was sold.

:::reveal What does this lesson say a record's silences tell you? ||| They follow its purpose. A record made to prove a theory captures what the theory needed and nothing else, so you can read the original question off what the record declines to record.

## Vocabulary
- **Inventory entry**: an identification recorded by a party with an interest in telling items apart, which is what a name in this record functions as.
- **Self-description**: how a person names and accounts for themselves, which this record does not contain for any of the seven.
- **Silence in a record**: information a record does not hold, which is evidence about the record's purpose rather than merely an absence.
- **Provenance research**: tracing an object and its subjects through surviving paperwork, which here means working largely through the records of enslavers.

## Sources
Milano, B. (2021, April 12). *Scholars recover life stories of the Zealy daguerreotype subjects*. Harvard Gazette. https://news.harvard.edu/gazette/story/2021/04/scholars-recover-life-stories-of-the-zealy-daguerreotype-subjects/

Wallis, B. (1995). Black bodies, white science: Louis Agassiz's slave daguerreotypes. *American Art, 9*(2), 39-61. https://doi.org/10.1086/424243`,
    },
  ],
};
