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
          {
            prompt: "How many authors does Picturing Frederick Douglass have?",
            options: [
              "Three",
              "One, with two further scholars credited in the acknowledgements only",
              "Five, including the writers of the book's foreword and its afterword",
              "Two, working from a set of photographs assembled by a third researcher",
            ],
            correctIndex: 0,
            explanation:
              "John Stauffer, Zoe Trodd and Celeste-Marie Bernier, and naming all three is part of making the book's central count locatable.",
            sourceLessonSlug: "sitting-on-purpose",
          },
          {
            prompt: "Why does the course say the record of who existed used to track who could pay?",
            options: [
              "A likeness required a painter and a fee",
              "Because only property owners appeared in the public registers of the period",
              "Because portrait painters worked exclusively on commission from local governments",
              "Because likenesses were taxed, so poorer households did not commission them",
            ],
            correctIndex: 0,
            explanation:
              "That is Douglass's premise, and the cheap portrait is the break in it that his lecture is about.",
            sourceLessonSlug: "a-record-is-made-not-found",
          },
          {
            prompt: "What did Douglass do with the portraits he sat for?",
            options: [
              "He distributed them",
              "He kept them privately and released none during his lifetime",
              "He sold the negatives to publishers who then controlled their reproduction",
              "He deposited them with an abolitionist society for safekeeping",
            ],
            correctIndex: 0,
            explanation:
              "Choosing when to sit, choosing the pose, distributing the results and explaining why is more of the chain than a subject usually holds.",
            sourceLessonSlug: "a-record-is-made-not-found",
          },
          {
            prompt: "What separates a slogan from a claim, in this course's usage?",
            options: [
              "A claim carries the parts a reader can check",
              "A slogan is shorter, and length is what makes an assertion serious",
              "A claim has been published in a book rather than repeated in the press",
              "A slogan concerns a person and a claim concerns an institution",
            ],
            correctIndex: 0,
            explanation:
              "Most photographed American of the nineteenth century names a century, a counter and a count. The same sentence without those names nothing.",
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
          {
            prompt: "What is dynamic range?",
            options: [
              "The span between the darkest and lightest detail a film can record",
              "The number of distinct colours a film emulsion is able to reproduce",
              "The speed at which a film responds to light of different intensities",
              "The variation in results between two laboratories printing one negative",
            ],
            correctIndex: 0,
            explanation:
              "Widening it is the change Kodak made, and the reason the change also improved the rendering of dark skin tones.",
            sourceLessonSlug: "who-actually-moved-kodak",
          },
          {
            prompt: "Why does the lesson write Roth's citation out in full?",
            options: [
              "Because most retellings of the story name no source at all",
              "Because the journal requires the full citation to be reproduced when quoted",
              "Because the article's title alone would not distinguish it from similar work",
              "Because the DOI is the only part of a citation a reader can actually verify",
            ],
            correctIndex: 0,
            explanation:
              "A claim about an industry with no source attached is a rumour with good manners, and the citation is what makes it inspectable.",
            sourceLessonSlug: "who-actually-moved-kodak",
          },
          {
            prompt: "What kind of source is the 99% Invisible episode, in this course's accounting?",
            options: [
              "A documentary programme that interviewed the researcher",
              "A peer-reviewed article summarising the researcher's findings",
              "A primary document produced by Kodak during the period in question",
              "An unattributed retelling with no connection to the original research",
            ],
            correctIndex: 0,
            explanation:
              "Naming what kind of source a claim rests on is the difference between reporting a finding and laundering one.",
            sourceLessonSlug: "who-actually-moved-kodak",
          },
          {
            prompt: "Which came first, the Shirley card or the multiracial reference card?",
            options: [
              "The Shirley card, by about forty years",
              "The multiracial card, which the Shirley card later replaced",
              "They were introduced together as a matched pair of standards",
              "Neither, since both were withdrawn before laboratories adopted them",
            ],
            correctIndex: 0,
            explanation:
              "The cards date from the 1950s and Kodak was producing a multiracial reference by the mid-1990s.",
            sourceLessonSlug: "what-a-reference-card-does",
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
    {
      slug: "section-3-quiz",
      title: "Section 3 quiz · Records made about people",
      section: "Section 3 · Records made about people",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "In what year and in what place were the Zealy daguerreotypes made?",
            options: [
              "1850, in Columbia, South Carolina",
              "1863, in Charleston, South Carolina, during the federal occupation of the harbour",
              "1839, in Cambridge, Massachusetts, at the museum Agassiz had recently founded",
              "1876, in Columbia, South Carolina, during the last year of Reconstruction there",
            ],
            correctIndex: 0,
            explanation:
              "The commission was carried out in South Carolina in 1850, and every later dispute over the plates dates from that session.",
            sourceLessonSlug: "the-1850-commission",
          },
          {
            prompt: "Who made the daguerreotypes?",
            options: [
              "Joseph T. Zealy",
              "Robert W. Gibbes, the paleontologist who arranged the sittings for Agassiz",
              "Louis Agassiz himself, using equipment he had brought from Switzerland",
              "An unnamed itinerant operator whose identity has never been established",
            ],
            correctIndex: 0,
            explanation:
              "Zealy was the photographer hired for the commission, which is why the plates carry his name in the scholarship.",
            sourceLessonSlug: "the-1850-commission",
          },
          {
            prompt: "How many plates survive?",
            options: [
              "Fifteen",
              "Four, being the images of Renty and Delia at full length and in profile",
              "Seven, one for each of the people photographed during the session",
              "Twenty-eight, matching the number of prints in Weems's later series",
            ],
            correctIndex: 0,
            explanation:
              "Fifteen daguerreotypes survive and they depict seven people, which is why the two numbers are often confused.",
            sourceLessonSlug: "the-1850-commission",
          },
          {
            prompt: "How many people are depicted in the surviving plates?",
            options: [
              "Seven",
              "Fifteen, one person per plate, as was standard practice for the process",
              "Two, Renty and his daughter Delia, with the rest of the set lost",
              "Sixteen, according to the count kept by the museum that held them",
            ],
            correctIndex: 0,
            explanation:
              "Alfred, Delia, Drana, Fassena, Jack, Jem and Renty. Multiple plates were made of the same people, which is why fifteen plates show seven people.",
            sourceLessonSlug: "the-1850-commission",
          },
          {
            prompt: "Which relationships does the record note among the seven?",
            options: [
              "Renty and Delia, father and daughter; Drana, Jack's daughter",
              "All seven belonged to a single extended family held on one plantation together",
              "Jem and Fassena are recorded as brothers, and the others are unrelated to each other",
              "No relationships at all are recorded anywhere in the surviving documentation",
            ],
            correctIndex: 0,
            explanation:
              "Those two links are in the record. Family relationships beyond them are largely unidentified, which is itself a fact about the record.",
            sourceLessonSlug: "the-1850-commission",
          },
          {
            prompt: "Who commissioned the images?",
            options: [
              "Louis Agassiz",
              "The Peabody Museum, which acquired them directly from the photographer in 1850",
              "The state of South Carolina, as part of a survey of its enslaved population",
              "A group of Columbia slaveholders who wished to document their holdings",
            ],
            correctIndex: 0,
            explanation:
              "Agassiz was a Swiss-born natural historian and a Harvard professor, and the purpose of the commission is documented rather than inferred.",
            sourceLessonSlug: "the-1850-commission",
          },
          {
            prompt: "What is polygenism?",
            options: [
              "The theory that human races were separately created",
              "The nineteenth-century practice of photographing several subjects on a single plate",
              "The doctrine that species change over time in response to their environments",
              "The classification of humans by measured skull dimensions and facial angles",
            ],
            correctIndex: 0,
            explanation:
              "Agassiz publicly advocated it, and the pictures were commissioned as visual evidence for it.",
            sourceLessonSlug: "the-1850-commission",
          },
          {
            prompt: "Who worked with Agassiz to arrange the sittings?",
            options: [
              "Dr. Robert W. Gibbes",
              "Elinor Reichlin, who later catalogued the plates for the Peabody Museum",
              "Joseph T. Zealy, who selected the subjects as well as making the images",
              "Alexander Agassiz, his son, who managed his father's scientific correspondence",
            ],
            correctIndex: 0,
            explanation:
              "Gibbes was a South Carolina paleontologist with close ties to slaveholders, which is what made the local arrangements possible.",
            sourceLessonSlug: "the-1850-commission",
          },
          {
            prompt: "Why does the course call the images' purpose a documentary fact rather than an interpretation?",
            options: [
              "The commission stated it",
              "Because modern scholars have reached a consensus about it after long debate",
              "Because Harvard has formally conceded the point in court filings since 2019",
              "Because the images themselves cannot be read any other way by a modern viewer",
            ],
            correctIndex: 0,
            explanation:
              "A commission carries the commissioner's purpose, so the purpose is part of the record rather than something a later reader supplies.",
            sourceLessonSlug: "the-1850-commission",
          },
          {
            prompt: "Why does this course decline to describe the photographs?",
            options: [
              "Describing them would repeat what the commission did",
              "Because the images are still under copyright and cannot lawfully be described in detail",
              "Because no reliable description of the plates has ever been published by a scholar",
              "Because the course's authors have not been permitted to view the plates themselves",
            ],
            correctIndex: 0,
            explanation:
              "The pictures were made to strip the people in them of standing. The paperwork is what the course's question actually needs.",
            sourceLessonSlug: "the-1850-commission",
          },
          {
            prompt: "What does the course say about consent in this case?",
            options: [
              "Enslavement made meaningful consent unavailable",
              "Consent was sought from the households that held the seven and was granted in writing",
              "Consent was recorded on the reverse of each plate, in the photographer's own hand",
              "Consent was not required under the law of South Carolina as it stood in 1850",
            ],
            correctIndex: 0,
            explanation:
              "The record was made about the seven people entirely without them, by a chain of three named parties who all left traces.",
            sourceLessonSlug: "the-1850-commission",
          },
          {
            prompt: "Where did the plates sit before 1976?",
            options: [
              "In storage at the Peabody Museum",
              "On continuous public display in Harvard's zoological galleries",
              "In the private papers of the Gibbes family in Columbia, South Carolina",
              "In a South Carolina courthouse, filed as evidence in a nineteenth-century dispute",
            ],
            correctIndex: 0,
            explanation:
              "They were not published in Agassiz's lifetime, passed to Harvard, and were found by a museum staff member in 1976.",
            sourceLessonSlug: "the-1850-commission",
          },
          {
            prompt: "What does the 1976 rediscovery illustrate about held objects?",
            options: [
              "An object can be owned and unattended for a century",
              "Museums are required by law to review their holdings at fixed intervals and rarely do",
              "Objects deteriorate irreversibly when they are stored rather than exhibited",
              "Ownership lapses when an institution fails to display an object for fifty years",
            ],
            correctIndex: 0,
            explanation:
              "The paperwork is still there when somebody opens the cabinet, which is why both later disputes were possible at all.",
            sourceLessonSlug: "the-1850-commission",
          },
          {
            prompt: "What is a daguerreotype, technically?",
            options: [
              "A unique image on a silvered plate, with no negative",
              "A paper print made from a glass negative coated with light-sensitive salts",
              "A photographic process capable of producing unlimited identical copies from one exposure",
              "An engraving made by hand after a photographic original, for reproduction in print",
            ],
            correctIndex: 0,
            explanation:
              "No negative means no copies, which is why the fifteen plates are objects to be possessed rather than images to be reprinted.",
            sourceLessonSlug: "the-1850-commission",
          },
          {
            prompt: "Why does the course say the 1850 commission is the clearest case in its catalog?",
            options: [
              "Author, commissioner, purpose and owner are all documented",
              "Because the images are the earliest photographs ever made anywhere in the American South",
              "Because it is the only case in the course where a court has issued a final ruling",
              "Because the seven people left written accounts of the sitting that survive today",
            ],
            correctIndex: 0,
            explanation:
              "Every element of the chain is on record and the subjects had no share in any of it, which is what makes it the reference case for later sections.",
            sourceLessonSlug: "the-1850-commission",
          },
          {
            prompt: "How does the course say later sections should be read against this one?",
            options: [
              "As institutions making the opposite choice",
              "As evidence that photographic practice improved steadily over the following century",
              "As cases in which the same three parties reappear under different names",
              "As legal precedents that build directly on the outcome of the 1850 commission",
            ],
            correctIndex: 0,
            explanation:
              "A caption that carries a working woman's name, or a museum that writes attributed to because it is unsure, is the opposite decision from this one.",
            sourceLessonSlug: "the-1850-commission",
          },
          {
            prompt: "Where does the responsibility for the sittings sit, in the chain the lesson describes?",
            options: [
              "With three named parties, none of them the subjects",
              "With the photographer alone, since he made the exposures and was paid for them",
              "With Harvard as an institution, which ordered the work through its museum",
              "With the households that held the seven people, who arranged everything",
            ],
            correctIndex: 0,
            explanation:
              "A scientist wanted a kind of proof, a local intermediary found the subjects, and a photographer was hired and paid.",
            sourceLessonSlug: "the-1850-commission",
          },
          {
            prompt: "What was Agassiz's institutional position?",
            options: [
              "A professor at Harvard",
              "The director of the Peabody Museum of Archaeology and Ethnology",
              "A curator at the Smithsonian Institution in Washington, D.C.",
              "The state geologist of South Carolina during the 1840s and 1850s",
            ],
            correctIndex: 0,
            explanation:
              "He was a Swiss-born natural historian holding a Harvard professorship, which is how the plates came to Harvard at all.",
            sourceLessonSlug: "the-1850-commission",
          },
          {
            prompt: "Were the images published during Agassiz's lifetime?",
            options: [
              "No",
              "Yes, as plates in a scientific monograph issued in Boston in the 1850s",
              "Yes, but only in a limited edition circulated privately among his colleagues",
              "Yes, in an illustrated periodical that reproduced them as engravings",
            ],
            correctIndex: 0,
            explanation:
              "They were not published in his lifetime and passed to Harvard, where they sat until the 1976 rediscovery.",
            sourceLessonSlug: "the-1850-commission",
          },
          {
            prompt: "What does the course say the paperwork lets it do without looking at the images?",
            options: [
              "Answer who ordered, who was paid, who labelled and who kept",
              "Reconstruct the appearance of each plate accurately enough for teaching purposes",
              "Determine the market value of the plates at each point in their custody history",
              "Establish which of the seven people were related to one another by blood",
            ],
            correctIndex: 0,
            explanation:
              "Those four questions are the course's whole method, and all four are documented in this case.",
            sourceLessonSlug: "the-1850-commission",
          },
          {
            prompt: "Where do the seven names in the record come from?",
            options: [
              "Labels written by the parties who arranged the sittings",
              "Baptismal registers kept by churches in Columbia, South Carolina, in the 1840s",
              "Statements the seven people gave to the photographer at the time of the sitting",
              "Federal census returns for South Carolina compiled in the year of the commission",
            ],
            correctIndex: 0,
            explanation:
              "They follow the naming practices of the households that held the seven people, so they function as inventory entries rather than self-descriptions.",
            sourceLessonSlug: "named-and-not-known",
          },
          {
            prompt: "What is an inventory entry, as this lesson uses the term?",
            options: [
              "Identification recorded by a party who needs to tell items apart",
              "A formal legal description of property attached to a bill of sale or a will",
              "A number assigned by a museum to an object when it enters the collection",
              "A note made by a researcher when consulting an archive's finding aid",
            ],
            correctIndex: 0,
            explanation:
              "That is what a name in this record functions as, and saying so is more accurate than treating it as a name freely given.",
            sourceLessonSlug: "named-and-not-known",
          },
          {
            prompt: "Which of these have scholars NOT been able to recover?",
            options: [
              "The surnames of the seven people",
              "The identity of the photographer who made the plates in 1850",
              "The name of the museum that has held the plates since the nineteenth century",
              "The stated purpose for which the images were commissioned",
            ],
            correctIndex: 0,
            explanation:
              "Surnames are absent from the surviving paperwork, and most of what happened to the seven afterwards is unrecovered.",
            sourceLessonSlug: "named-and-not-known",
          },
          {
            prompt: "What is reported as unknown about Drana specifically?",
            options: [
              "Whether she escaped or was sold",
              "Whether she was related to any other person photographed in the same session",
              "Whether she was photographed at all, since one plate's subject is disputed",
              "Whether her name was recorded correctly by the person who wrote the labels",
            ],
            correctIndex: 0,
            explanation:
              "Historians reporting the recovery work name that gap directly, which is why this course states it rather than filling it.",
            sourceLessonSlug: "named-and-not-known",
          },
          {
            prompt: "What has been recovered about Jem?",
            options: [
              "That he did construction labour that helped build Columbia",
              "That he escaped to the North and later published an account of his life",
              "That he was purchased by Robert Gibbes shortly after the photographic session",
              "That he was the eldest of the seven and died within a year of the sitting",
            ],
            correctIndex: 0,
            explanation:
              "He was in his sixties at the time, and the fragment comes from slow archival work done a hundred and seventy-five years later.",
            sourceLessonSlug: "named-and-not-known",
          },
          {
            prompt: "Through whose records does the recovery work largely proceed?",
            options: [
              "The records of the people who enslaved them",
              "Federal pension files created for veterans and their dependants after the war",
              "The photographer's business ledgers, which record every sitting he undertook",
              "Harvard's own correspondence with its donors during the nineteenth century",
            ],
            correctIndex: 0,
            explanation:
              "That is the archival situation, and it is why surnames and family links are so hard to establish.",
            sourceLessonSlug: "named-and-not-known",
          },
          {
            prompt: "What is the mechanism this lesson states plainly?",
            options: [
              "A record made to prove a theory captures only what the theory needs",
              "A record deteriorates in proportion to how long it is left unexamined in storage",
              "A record's accuracy declines each time it is copied or transcribed by hand",
              "A record made by an institution is always more complete than a private one",
            ],
            correctIndex: 0,
            explanation:
              "Agassiz needed people classified, not their families, histories, words or futures, so the record does not contain them.",
            sourceLessonSlug: "named-and-not-known",
          },
          {
            prompt: "How does the lesson describe the gap in the record?",
            options: [
              "As the shape of the original question, preserved",
              "As the result of poor storage conditions at the museum before 1976",
              "As deliberate destruction of documents by the parties who arranged the sittings",
              "As an inevitable consequence of the daguerreotype process, which carried no captions",
            ],
            correctIndex: 0,
            explanation:
              "It is not an accident of time or a failure of preservation, which is what makes the silence readable as evidence.",
            sourceLessonSlug: "named-and-not-known",
          },
          {
            prompt: "If a file names a photographer but not a sitter, what does that suggest?",
            options: [
              "Somebody was cataloguing art",
              "The sitter refused to be identified when the photograph was taken",
              "The file was compiled after the sitter had already died",
              "The photograph was made for private use rather than for publication",
            ],
            correctIndex: 0,
            explanation:
              "The reverse case, a sitter named and no photographer, suggests somebody was cataloguing people. Silences follow purposes.",
            sourceLessonSlug: "named-and-not-known",
          },
          {
            prompt: "Why does the lesson call the silences usable rather than merely sad?",
            options: [
              "They are evidence of a record's purpose",
              "They can be filled by careful inference once enough comparable files are read",
              "They reduce the volume of material a researcher has to work through",
              "They allow a museum to describe an object without risking a factual error",
            ],
            correctIndex: 0,
            explanation:
              "You can read the original question off what a record declines to record, and that reading needs no special access.",
            sourceLessonSlug: "named-and-not-known",
          },
          {
            prompt: "What does the lesson say naming the seven people is?",
            options: [
              "The smallest correct treatment of the facts",
              "A gesture of respect that historians began making only after the 2019 lawsuit",
              "A legal requirement imposed on institutions holding images of identifiable people",
              "A stylistic choice that different courses may reasonably make differently",
            ],
            correctIndex: 0,
            explanation:
              "The record's authors, its owner and its purpose are all better documented than the people it depicts, so naming them is not a courtesy.",
            sourceLessonSlug: "named-and-not-known",
          },
          {
            prompt: "What is a self-description, and does this record contain one?",
            options: [
              "How a person accounts for themselves; the record has none",
              "A label written by a subject on the reverse of a plate; two of the seven left one",
              "A statement given to a photographer before a sitting; all seven gave one",
              "An entry in a census schedule completed by the subject; three survive",
            ],
            correctIndex: 0,
            explanation:
              "None of the seven's own accounts of themselves is in the record, which is exactly the distinction between a name and an entry.",
            sourceLessonSlug: "named-and-not-known",
          },
          {
            prompt: "How long after the sittings is the recovery work being done?",
            options: [
              "About a hundred and seventy-five years",
              "About fifty years, dating from the museum's rediscovery of the plates",
              "About a century, beginning with the first scholarly article on the images",
              "About twenty years, beginning when a descendant first contacted the museum",
            ],
            correctIndex: 0,
            explanation:
              "The plates date from 1850, and the archival work described here is being reported in the 2020s.",
            sourceLessonSlug: "named-and-not-known",
          },
          {
            prompt: "What does the lesson say Agassiz did not need from the record?",
            options: [
              "Families, histories, words and futures",
              "Accurate dates, since the theory did not depend on when the sittings took place",
              "The names of the subjects, which were added later by museum cataloguers",
              "The photographer's identity, which is why Zealy's name was long unknown",
            ],
            correctIndex: 0,
            explanation:
              "He needed people classified. What a purpose does not need is what a purpose-built record does not hold.",
            sourceLessonSlug: "named-and-not-known",
          },
          {
            prompt: "What does the lesson mean by provenance research here?",
            options: [
              "Tracing objects and subjects through surviving paperwork",
              "Establishing the market value of an object by comparison with recent sales",
              "Determining whether an object is authentic by physical and chemical analysis",
              "Recording the condition of an object at each point in its custody history",
            ],
            correctIndex: 0,
            explanation:
              "In this case it means working largely through the records of enslavers, which is why the results are fragmentary.",
            sourceLessonSlug: "named-and-not-known",
          },
          {
            prompt: "Which fact makes a name in this record different from a name a person gives?",
            options: [
              "It was recorded by a party with an interest in telling items apart",
              "It was written in a language the seven people did not themselves speak",
              "It was assigned by the photographer rather than by the commissioner",
              "It was added by museum staff during cataloguing in the twentieth century",
            ],
            correctIndex: 0,
            explanation:
              "That is what makes it an entry rather than a self-description, and the distinction is the substance of the lesson.",
            sourceLessonSlug: "named-and-not-known",
          },
          {
            prompt: "What kind of work does the lesson say the recovery of Jem's story represents?",
            options: [
              "Real historical work, and slow",
              "A speculative reconstruction that most scholars in the field regard as unreliable",
              "A routine catalogue update of the kind museums perform on all their holdings",
              "A legal investigation conducted on behalf of a claimant to the plates",
            ],
            correctIndex: 0,
            explanation:
              "It is being done long after the fact because the original record was built to answer a different question.",
            sourceLessonSlug: "named-and-not-known",
          },
          {
            prompt: "Which is the more accurate description of the seven names?",
            options: [
              "Enough identification to tell one person from another",
              "A complete civil identity, comparable to a modern legal name and record",
              "A set of nicknames chosen by the seven people for use among themselves",
              "Scientific designations assigned by Agassiz to fit his classification scheme",
            ],
            correctIndex: 0,
            explanation:
              "That is the function an inventory entry performs, and it is why surnames and relationships are missing from the same document.",
            sourceLessonSlug: "named-and-not-known",
          },
          {
            prompt: "What connects Section 3 to the caption reading in Section 4?",
            options: [
              "Both ask what a record chose to write about a person",
              "Both examine photographs commissioned by universities for scientific purposes",
              "Both concern objects that were rediscovered in museum storage after long neglect",
              "Both involve legal disputes brought by descendants of the people depicted",
            ],
            correctIndex: 0,
            explanation:
              "A caption is a decision about what will be remembered, and Section 4 reads institutions making that decision differently.",
            sourceLessonSlug: "named-and-not-known",
          },
          {
            prompt: "What does the course refuse to soften about the 1850 commission?",
            options: [
              "That it was made to argue the seven were less than human",
              "That the photographer was never paid for the work he carried out",
              "That Harvard has always known the plates were in its possession",
              "That the plates were displayed publicly throughout the nineteenth century",
            ],
            correctIndex: 0,
            explanation:
              "The purpose is documented, and stating it plainly is the reason the course names the seven people rather than treating them as illustrations.",
            sourceLessonSlug: "the-1850-commission",
          },
          {
            prompt: "Why do the numbers fifteen and seven both appear in this case?",
            options: [
              "Fifteen plates survive and they depict seven people",
              "Fifteen people were photographed and seven of the plates survive",
              "Fifteen plates were made and seven were later destroyed in storage",
              "Fifteen is the museum's count and seven is the claimant's count",
            ],
            correctIndex: 0,
            explanation:
              "Multiple plates were made of the same people, which is why accounts reporting only one of the two numbers cause confusion.",
            sourceLessonSlug: "the-1850-commission",
          },
          {
            prompt: "Which party in the 1850 chain was hired and paid?",
            options: [
              "The photographer",
              "The seven people who sat for the plates",
              "The museum that later held the daguerreotypes",
              "The professor who wanted the images made",
            ],
            correctIndex: 0,
            explanation:
              "A scientist wanted a kind of proof, a local intermediary found the subjects, and a photographer was hired, which is the whole arrangement.",
            sourceLessonSlug: "the-1850-commission",
          },
          {
            prompt: "What share did the seven people have in the chain of decisions?",
            options: [
              "None",
              "A limited share, since they were asked to consent to the sitting",
              "A share in the naming, since the labels record what they called themselves",
              "A share in the custody, since the plates passed to their descendants",
            ],
            correctIndex: 0,
            explanation:
              "The record was made about them, entirely without them, by parties who are all comfortably documented.",
            sourceLessonSlug: "the-1850-commission",
          },
          {
            prompt: "Why is a daguerreotype an object to be possessed rather than an image to be reprinted?",
            options: [
              "It has no negative",
              "It was made on paper too fragile to be copied by later processes",
              "It was legally treated as personal property rather than as a photograph",
              "It fades if it is exposed to the light required to make a copy",
            ],
            correctIndex: 0,
            explanation:
              "That is why both later disputes are about custody of fifteen unique plates rather than about who may make prints.",
            sourceLessonSlug: "the-1850-commission",
          },
          {
            prompt: "Why does the course say naming the seven is not a courtesy?",
            options: [
              "The record's owner and purpose are better documented than they are",
              "Because museums are legally required to publish the names of depicted people",
              "Because the names are the only part of the record that has been verified",
              "Because the seven left written statements asking to be identified",
            ],
            correctIndex: 0,
            explanation:
              "Naming them is the smallest correct treatment of a record built to describe people who had no share in making it.",
            sourceLessonSlug: "named-and-not-known",
          },
          {
            prompt: "What did Agassiz need the record to capture?",
            options: [
              "People classified",
              "The daily working lives of the people photographed",
              "Family relationships across several generations",
              "The subjects' own accounts of where they came from",
            ],
            correctIndex: 0,
            explanation:
              "What a purpose does not need is what a purpose-built record does not hold, which is why the silences are readable.",
            sourceLessonSlug: "named-and-not-known",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4 — The caption, and the credit line
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "a-caption-that-carries-a-name",
      title: "7 · A caption that carries a name",
      section: "Section 4 · The caption, and the credit line",
      body: `In 1942 Gordon Parks arrived in Washington to work for the Farm Security Administration, the federal agency whose photographic section was building a picture file to argue for a set of policies. Roy Stryker ran that section and directed Parks's first approach to the work.

**What happened, in the version the paperwork supports.** Parks met a Black woman cleaning the FSA's own offices. Her name was Ella Watson. He asked to photograph her, and she gave him access to her home and her community for four months. The photographs that came out of it document Black life in Washington beyond the version of the city the federal buildings presented.

**The single image everyone knows.** *American Gothic, Washington, D.C.*, 1942. Watson stands with a broom and a mop in front of the flag. The title refers to Grant Wood's 1930 painting, replacing the farmer's pitchfork with the tools of the job Watson actually did. Parks later described choosing the title as a matter of how he felt at that moment about her position in the country.

**Now the thing this course is here for.** She has a name in this history because the record kept it. The federal picture file was built by an agency that captioned its photographs, and the Gordon Parks Foundation's own archive entry for the 1942 work names her. Compare that with the previous section: a set of plates whose subjects are recorded as Alfred, Delia, Drana, Fassena, Jack, Jem and Renty, entered by parties who needed to tell them apart, with no surnames and no accounts of their own. Two captions, ninety-two years apart, doing opposite work.

**A caption is a format with a cap.** It holds one line. What fits in that line decides what survives, so the caption is where the fight over a record usually happens, and it is almost never a fight anybody watches. Somebody chose to write "Mrs. Ella Watson, a government charwoman" rather than "charwoman", and that choice is why a search two generations later returns a person rather than an occupation.

**One honest limit on this lesson.** The Library of Congress holds the FSA and Office of War Information file, and its catalogue records are the primary evidence for exactly how the captions read. Those catalogue pages refused automated retrieval during this course's research, so this lesson does not quote a caption verbatim and does not print a call number. What it does state, from sources it retrieved, is that Parks worked for the FSA in 1942, that the subject was Ella Watson, and that the archive of his work names her. If you can reach the Library of Congress catalogue, you can close that gap yourself in about five minutes, and that is a better exercise than a sentence from this course would be.

:::reveal Which agency was Parks working for when he photographed Ella Watson, and what was it building? ||| The Farm Security Administration, whose photographic section was building a picture file to argue for a set of policies. Roy Stryker ran the section.

:::reveal What does the title American Gothic, Washington, D.C. refer to? ||| Grant Wood's 1930 painting, with the farmer's pitchfork replaced by the broom and mop of the job Watson actually did.

:::reveal What does this course mean by calling a caption a format with a cap? ||| It holds one line, so what fits decides what survives, which makes the caption the place where the fight over a record usually happens.

## Vocabulary
- **Picture file**: a body of photographs assembled by an institution to serve an argument, in this case a federal case for a set of policies.
- **Shooting script**: an agency's instruction about what a photographer should bring back, which shapes a file before any frame is exposed.
- **Format cap**: a hard limit on how much a form can hold, such as a one-line caption, which forces a choice about what is recorded.
- **Charwoman**: the job title the period used for a cleaner, and the occupation the caption records alongside Watson's name.

## Sources
The Gordon Parks Foundation. (n.d.). *Washington, D.C. and Ella Watson, 1942*. https://www.gordonparksfoundation.org/gordon-parks/photography-archive/washington-d-c-and-ella-watson-1942

Avis, T. (2024, April 29). *Gordon Parks & Ella Watson: American Gothic*. Musee Magazine. https://museemagazine.com/culture/2024/4/28/gordon-parks-amp-ella-watson-american-gothic-minneapolis-institute-of-art`,
    },
    {
      slug: "attributed-to-and-what-it-admits",
      title: "8 · Attributed to, and what that admits",
      section: "Section 4 · The caption, and the credit line",
      body: `This is the best artifact in the course, because it is not a story about an archive. It is an archive, open on the internet, doing the thing in public.

**The holding.** In 2001 the Carnegie Museum of Art in Pittsburgh purchased the negatives and all rights from the family of Charles "Teenie" Harris. The museum describes the archive as more than seventy thousand negatives, and breaks that down: 58,970 four-by-five inch black-and-white negatives, 14,350 black-and-white negatives in medium formats, and 454 nitrate negatives. Harris photographed for the *Pittsburgh Courier*, and the museum's cataloguing draws on cutline information from his professional work for the *Courier* and for *Flash*, a weekly news picture magazine.

**Why a number this specific matters.** A round figure of eighty thousand also circulates. The museum's own summary is "more than 70,000", with a component breakdown that adds up. When an institution publishes both a headline number and its parts, use the parts, and when two figures disagree, print the one the holder stands behind and say who is standing behind it.

**Now the part that makes Harris essential rather than decorative.** A working newspaper photographer's file is not a clean set of one person's work. Assignments get covered by colleagues, copy negatives get made of other people's pictures, and material drifts in. So the Carnegie catalogues by degree of certainty. Where the work is probably Harris's, the record reads "attributed to Charles 'Teenie' Harris". Where the photographer is unknown, it reads "American, 20th century". Where the negative is a copy of somebody else's photograph, the record says so, and names the original photographer when that is known.

**Read what that credit line is actually doing.** It is a public institution declining to claim more than it can support, in the place where a claim would be most valuable to it. Attribution to a famous name raises the standing of an item. The museum gives that up, item by item, in favour of stating how sure it is. That is the opposite of every incentive.

**And notice the shape of the information.** "Attributed to" is not a hedge in prose that a reader has to interpret. It is a controlled term in a catalogue field, applied consistently, which means you can sort by it. A learner can go to the archive, look at the credit lines, and see the museum's own confidence graded across tens of thousands of items. Nothing else in this course gives you a record where the attribution itself is the visible data.

**The transferable rule.** When you read any credit line, ask what the institution would have said if it were less sure, and whether that phrasing exists in its vocabulary at all. An institution with no way to say "we think" will always say "we know".

:::reveal What did the Carnegie Museum of Art acquire in 2001, and from whom? ||| The negatives and all rights to the Charles Teenie Harris archive, purchased from the artist's family.

:::reveal What three credit lines does the Carnegie use, and what does each mean? ||| "Attributed to Charles 'Teenie' Harris" where the work is probably his, "American, 20th century" where the photographer is unknown, and a note that a negative is after another photographer, naming the original where known.

:::reveal What is the transferable rule this lesson gives for reading any credit line? ||| Ask what the institution would say if it were less sure, and whether that phrasing exists in its vocabulary at all. An institution with no way to say "we think" will always say "we know".

## Vocabulary
- **Attribution**: the assignment of a work to a maker, which a catalogue can state at different strengths rather than as a single yes or no.
- **Controlled term**: a fixed phrase used consistently in a catalogue field, which makes a judgement sortable rather than a matter of prose.
- **Copy negative**: a negative made by photographing an existing photograph, which is why a file can contain images its owner did not take.
- **Cutline**: the caption information supplied with a press photograph, which archives use to identify subjects and dates decades later.
- **Nitrate negative**: an early and chemically unstable film base, catalogued separately because it needs different handling.

## Sources
Carnegie Museum of Art. (n.d.). *Charles "Teenie" Harris Archive*. https://carnegieart.org/art/charles-teenie-harris-archive/`,
    },
    {
      slug: "when-the-records-own-record-disagrees",
      title: "9 · When the record's own record disagrees",
      section: "Section 4 · The caption, and the credit line",
      body: `Ming Smith was born in 1947 and grew up in Columbus, Ohio. The Studio Museum in Harlem's account of her career says that in 1979 she submitted her work to an open call at the Museum of Modern Art and became the first Black woman photographer to have work acquired by that institution. It also says that in Kamoinge, the photographers' collective, "at the time, she was the only female member of the group."

**What an acquisition actually does, since the word carries more weight than the act.** A museum acquisition creates a catalogue record, gives the work a permanent home and an insurance value, and makes the work citable, which is how later scholarship finds it. It does not by itself put the work on a wall, generate income, produce exhibitions or commission writing about it. Confusing those is how a single line in a biography comes to stand in for a career, and it is why the same artist can be in a great collection and under-shown for decades.

**Now the exercise, which is the reason this lesson exists.** The year is not settled in print. This course found 1979 in the Studio Museum's account. Other published accounts give 1978, and 1975 also appears. Those are three different years for one event that has exactly one correct answer, sitting in one accession record.

**What this course therefore prints.** The claim, attributed: the Studio Museum in Harlem says 1979. The disagreement, stated. And no single year asserted as fact, because MoMA's own collection pages refused automated retrieval during this course's research and the accession record was not read. A course about who the record credits, printing an unchecked date about an acquisition record, would be embarrassing in a very specific way.

**Why this is a better lesson than a settled date would have been.** You now have a task with a right answer and a known place to look. Go to the museum's collection record for the works, read the credit line and the accession number, and you will have closed something three published accounts left open. That is the whole method of this course compressed into one afternoon: a claim, a holder, a document, and a check anybody can run.

**And the second claim in the same paragraph, held to the same standard.** "The only female member of the group at the time" is the Studio Museum's wording, and a 2021 account of the Kamoinge exhibition by Brian Wallis in *Aperture* similarly calls her the only woman in the group. Two institutional sources agreeing is stronger than one, and it is still not the same as a membership roll. Notice which of these you have: agreement between accounts, not a primary document.

:::reveal What does a museum acquisition create, and what does it not create? ||| It creates a catalogue record, a permanent home, an insurance value and citability. It does not by itself produce exhibition, income, or scholarship.

:::reveal Which years appear in print for Ming Smith's MoMA acquisition, and what does this course print? ||| 1979, 1978 and 1975 all appear. The course prints the Studio Museum's attribution of 1979, states the disagreement, and asserts no year as fact because it did not read the accession record.

:::reveal What kind of evidence supports the claim that Smith was the only woman in Kamoinge at the time? ||| Agreement between two institutional accounts, the Studio Museum in Harlem and a 2021 Aperture article, rather than a primary membership document.

## Vocabulary
- **Acquisition**: a museum's formal taking of a work into its collection, which creates a record and a custody obligation.
- **Accession record**: the museum's own entry for an acquired work, carrying the credit line, the date and the accession number, and the document that settles a disputed acquisition year.
- **Open call**: an invitation for artists to submit work for consideration without an existing relationship to the institution.
- **Citability**: the property of being findable and referenceable in a catalogue, which is how later scholarship reaches a work at all.
- **Agreement between accounts**: two or more secondary sources saying the same thing, which is stronger than one and is still not a primary document.

## Sources
The Studio Museum in Harlem. (n.d.). *Ming Smith*. https://www.studiomuseum.org/artists/ming-smith

Wallis, B. (2021, January 14). *The belated celebration of the Kamoinge Workshop*. Aperture. https://aperture.org/editorial/the-belated-celebration-of-the-kamoinge-workshop/`,
    },
    {
      slug: "section-4-quiz",
      title: "Section 4 quiz · The caption, and the credit line",
      section: "Section 4 · The caption, and the credit line",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Which agency was Gordon Parks working for in Washington in 1942?",
            options: [
              "The Farm Security Administration",
              "The Office of War Information, which absorbed the photographic section two years later",
              "The Works Progress Administration, under its federal arts programme",
              "The Standard Oil Company photographic documentary project in New Jersey",
            ],
            correctIndex: 0,
            explanation:
              "Its photographic section was building a picture file to argue for a set of policies, and Roy Stryker ran it.",
            sourceLessonSlug: "a-caption-that-carries-a-name",
          },
          {
            prompt: "Who directed Parks's first approach to the Washington work?",
            options: [
              "Roy Stryker",
              "Wilson Hicks, the picture editor who later hired him at a national magazine",
              "Ella Watson, who chose which parts of her community he would be shown",
              "Julius Rosenwald, whose fellowship had brought Parks to Washington that year",
            ],
            correctIndex: 0,
            explanation:
              "Stryker headed the FSA photographic section and guided Parks's initial approach to the project.",
            sourceLessonSlug: "a-caption-that-carries-a-name",
          },
          {
            prompt: "How was Ella Watson employed when Parks met her?",
            options: [
              "She was cleaning the agency's offices",
              "She was a clerk in the federal records division of the same building",
              "She was a laundress working under contract to several government departments",
              "She was a cook in the staff canteen of the Department of Agriculture",
            ],
            correctIndex: 0,
            explanation:
              "Parks met her cleaning the FSA's own offices and asked to photograph her, and she then gave him months of access.",
            sourceLessonSlug: "a-caption-that-carries-a-name",
          },
          {
            prompt: "For how long did Watson give Parks access to her home and community?",
            options: [
              "Four months",
              "Two days, comprising a single session in the offices and one visit to her home",
              "Three years, spanning the whole of his time with the federal photographic sections",
              "Six weeks, ending when the agency reassigned him to another project entirely",
            ],
            correctIndex: 0,
            explanation:
              "The resulting photographs document Black life in Washington beyond the version the federal buildings presented.",
            sourceLessonSlug: "a-caption-that-carries-a-name",
          },
          {
            prompt: "What does the title American Gothic, Washington, D.C. refer to?",
            options: [
              "Grant Wood's 1930 painting",
              "A Washington neighbourhood of that name where Watson lived and worked",
              "An architectural style used in the federal buildings visible behind the subject",
              "A phrase from a New Deal report on housing conditions in the capital",
            ],
            correctIndex: 0,
            explanation:
              "The broom and mop of Watson's actual job stand where Wood's farmer holds a pitchfork.",
            sourceLessonSlug: "a-caption-that-carries-a-name",
          },
          {
            prompt: "How did Parks describe choosing that title?",
            options: [
              "As a matter of how he felt at that moment",
              "As an instruction from Roy Stryker, who titled every image in the file himself",
              "As a decision taken years later when the photograph was first exhibited",
              "As a suggestion from Ella Watson, who had seen the painting reproduced",
            ],
            correctIndex: 0,
            explanation:
              "He connected it to her position in the country, which makes the title an argument rather than a label.",
            sourceLessonSlug: "a-caption-that-carries-a-name",
          },
          {
            prompt: "Why does the course say Watson has a name in this history?",
            options: [
              "Because the record kept it",
              "Because she was interviewed by journalists at the time the photographs were published",
              "Because Parks named her in the memoir he published at the end of his career",
              "Because her family petitioned the agency to have her identified in the file",
            ],
            correctIndex: 0,
            explanation:
              "A captioning agency built the file, and the archive of Parks's work names her, which is the opposite of the 1850 case.",
            sourceLessonSlug: "a-caption-that-carries-a-name",
          },
          {
            prompt: "What is the contrast the lesson draws with Section 3?",
            options: [
              "Two captions doing opposite work",
              "Two photographers working under identical commissions ninety years apart",
              "Two institutions that acquired their holdings in the same decade",
              "Two federal agencies with conflicting policies on photographing citizens",
            ],
            correctIndex: 0,
            explanation:
              "One record entered people to tell them apart and kept no surnames. The other recorded a working woman by name and occupation.",
            sourceLessonSlug: "a-caption-that-carries-a-name",
          },
          {
            prompt: "What does this course mean by a format cap?",
            options: [
              "A hard limit on how much a form can hold",
              "The maximum size at which a photograph may be printed for archival storage",
              "A ceiling on how many images an agency could file in a single year",
              "A restriction on which formats of negative a collection will accept",
            ],
            correctIndex: 0,
            explanation:
              "A one-line caption forces a choice about what is recorded, which is why the caption is where the fight over a record happens.",
            sourceLessonSlug: "a-caption-that-carries-a-name",
          },
          {
            prompt: "What is the honest limit the lesson states about its own evidence?",
            options: [
              "The Library of Congress catalogue pages could not be retrieved",
              "The Gordon Parks Foundation declined to confirm the subject's identity",
              "No source consulted was able to date the photographs to a particular year",
              "The original negatives were destroyed and only later prints survive",
            ],
            correctIndex: 0,
            explanation:
              "So the lesson quotes no caption verbatim and prints no call number, and it invites the learner to close the gap.",
            sourceLessonSlug: "a-caption-that-carries-a-name",
          },
          {
            prompt: "What is a picture file, as the FSA built one?",
            options: [
              "Photographs assembled to serve an argument",
              "A physical cabinet in which negatives are stored by date of exposure",
              "A photographer's personal portfolio submitted when applying for federal work",
              "An index of images cleared for publication by a government censor",
            ],
            correctIndex: 0,
            explanation:
              "The agency was making a federal case for a set of policies, which shaped what its photographers were asked to bring back.",
            sourceLessonSlug: "a-caption-that-carries-a-name",
          },
          {
            prompt: "What is a shooting script?",
            options: [
              "An agency's instruction about what to bring back",
              "The sequence in which a photographer plans to expose a roll of film",
              "A caption sheet completed after the negatives have been developed",
              "A contract specifying how many frames a photographer must deliver",
            ],
            correctIndex: 0,
            explanation:
              "It shapes a file before a single frame is exposed, which is why the payer's purpose is visible in the resulting record.",
            sourceLessonSlug: "a-caption-that-carries-a-name",
          },
          {
            prompt: "In what year did the Carnegie Museum of Art acquire the Teenie Harris archive?",
            options: [
              "2001",
              "1991, ten years before the museum's first exhibition of the material",
              "2011, following a decade-long project to catalogue the negatives",
              "1985, shortly after the photographer stopped working for the newspaper",
            ],
            correctIndex: 0,
            explanation:
              "The museum purchased the negatives and all rights from the artist's family in that year.",
            sourceLessonSlug: "attributed-to-and-what-it-admits",
          },
          {
            prompt: "What did the Carnegie purchase, and from whom?",
            options: [
              "The negatives and all rights, from the artist's family",
              "Exhibition prints only, from a dealer who had represented the photographer",
              "A licence to reproduce the images, from the newspaper that had commissioned them",
              "The photographer's studio contents, from the city of Pittsburgh after a bequest",
            ],
            correctIndex: 0,
            explanation:
              "Buying the rights along with the objects is what allows the museum to catalogue, publish and license the archive.",
            sourceLessonSlug: "attributed-to-and-what-it-admits",
          },
          {
            prompt: "How does the museum itself describe the size of the archive?",
            options: [
              "More than 70,000 negatives",
              "Approximately 80,000 negatives, a round figure the museum uses in all its materials",
              "Fewer than 60,000 negatives, once duplicates have been removed from the count",
              "About 100,000 items, including prints, negatives and contact sheets together",
            ],
            correctIndex: 0,
            explanation:
              "The museum publishes both a headline figure and a component breakdown, and the parts are what a careful reader should use.",
            sourceLessonSlug: "attributed-to-and-what-it-admits",
          },
          {
            prompt: "Which component figure does the museum give for four-by-five inch black-and-white negatives?",
            options: [
              "58,970",
              "14,350, with the remainder held in larger and smaller formats",
              "454, the smallest of the three groups the museum distinguishes",
              "70,000, which is the whole archive rather than one component of it",
            ],
            correctIndex: 0,
            explanation:
              "The breakdown runs 58,970 four-by-five negatives, 14,350 in medium formats, and 454 nitrate negatives.",
            sourceLessonSlug: "attributed-to-and-what-it-admits",
          },
          {
            prompt: "How many nitrate negatives does the museum's breakdown record?",
            options: [
              "454",
              "4,540, catalogued separately because of their handling requirements",
              "14,350, the same figure it gives for the medium-format group",
              "None, since nitrate stock was destroyed before the acquisition",
            ],
            correctIndex: 0,
            explanation:
              "Nitrate is an early and chemically unstable film base, which is why it is counted and stored separately.",
            sourceLessonSlug: "attributed-to-and-what-it-admits",
          },
          {
            prompt: "Which newspaper did Harris photograph for?",
            options: [
              "The Pittsburgh Courier",
              "The Chicago Defender, whose Pittsburgh bureau he ran during the 1940s",
              "The Baltimore Afro-American, which syndicated his work nationally",
              "The Amsterdam News, for which he covered Pennsylvania assignments",
            ],
            correctIndex: 0,
            explanation:
              "The museum's cataloguing draws on cutline information from his work for the Courier and for Flash, a weekly news picture magazine.",
            sourceLessonSlug: "attributed-to-and-what-it-admits",
          },
          {
            prompt: "What does the credit line \"attributed to Charles 'Teenie' Harris\" mean in this catalogue?",
            options: [
              "The work is probably his",
              "The work is definitely his and has been authenticated by the family",
              "The work was made by an assistant working under his direction",
              "The work has been reprinted from his negative by a later printer",
            ],
            correctIndex: 0,
            explanation:
              "It is a controlled term marking probable rather than certain authorship, applied consistently across the archive.",
            sourceLessonSlug: "attributed-to-and-what-it-admits",
          },
          {
            prompt: "What does the credit line \"American, 20th century\" indicate?",
            options: [
              "The photographer is unknown",
              "The photographer was a colleague at the same newspaper whose name is withheld",
              "The negative was made outside Pittsburgh and its origin is uncertain",
              "The item is a print rather than a negative and so is catalogued differently",
            ],
            correctIndex: 0,
            explanation:
              "It is the museum's term for an unidentified maker, sitting one step below attribution in its own vocabulary of certainty.",
            sourceLessonSlug: "attributed-to-and-what-it-admits",
          },
          {
            prompt: "How does the museum catalogue a negative that copies somebody else's photograph?",
            options: [
              "It says so, and names the original photographer when known",
              "It removes the item from the archive and returns it to the family",
              "It catalogues it under Harris's name, since he made the negative",
              "It files it without a credit line, as being of uncertain status",
            ],
            correctIndex: 0,
            explanation:
              "Copy negatives are one reason a working photographer's file contains images that are not the photographer's own work.",
            sourceLessonSlug: "attributed-to-and-what-it-admits",
          },
          {
            prompt: "Why does a working newspaper photographer's file contain other people's work?",
            options: [
              "Colleagues cover assignments and copy negatives get made",
              "Newspapers pooled their negatives into shared files at the end of each year",
              "Photographers were required to deposit competitors' images for reference",
              "Archives routinely merge collections from several photographers when acquiring them",
            ],
            correctIndex: 0,
            explanation:
              "That drift is exactly what the graded credit lines are designed to record honestly rather than smooth over.",
            sourceLessonSlug: "attributed-to-and-what-it-admits",
          },
          {
            prompt: "Why does the lesson call the graded attribution the opposite of every incentive?",
            options: [
              "A famous name raises an item's standing, and the museum gives it up",
              "Because cataloguing at this level of detail costs more than the archive is worth",
              "Because visitors prefer certainty and the museum loses attendance by admitting doubt",
              "Because copyright protection is weaker for items whose author is uncertain",
            ],
            correctIndex: 0,
            explanation:
              "The institution declines to claim more than it can support, item by item, in the place where a claim would be most valuable to it.",
            sourceLessonSlug: "attributed-to-and-what-it-admits",
          },
          {
            prompt: "What is a controlled term?",
            options: [
              "A fixed phrase used consistently in a catalogue field",
              "A legally protected description that only an accredited museum may apply",
              "A word an archive avoids because it carries an unwanted implication",
              "A label applied to items whose access is restricted for legal reasons",
            ],
            correctIndex: 0,
            explanation:
              "Consistency is what makes the museum's confidence sortable across tens of thousands of items rather than a matter of prose.",
            sourceLessonSlug: "attributed-to-and-what-it-admits",
          },
          {
            prompt: "What is a cutline?",
            options: [
              "The caption information supplied with a press photograph",
              "The edge along which a negative is trimmed before filing",
              "The deadline by which a picture must reach the composing room",
              "The list of images an editor has cut from a published story",
            ],
            correctIndex: 0,
            explanation:
              "Archives use cutlines to identify subjects and dates decades later, which is how the Carnegie catalogues much of this material.",
            sourceLessonSlug: "attributed-to-and-what-it-admits",
          },
          {
            prompt: "What is the transferable rule for reading a credit line?",
            options: [
              "Ask what the institution would say if it were less sure",
              "Ask how recently the item was catalogued and by whom",
              "Ask whether the item has been published and in which venue",
              "Ask what the institution paid for the item and when",
            ],
            correctIndex: 0,
            explanation:
              "An institution with no way to say we think will always say we know, so the existence of a hedging term is itself information.",
            sourceLessonSlug: "attributed-to-and-what-it-admits",
          },
          {
            prompt: "Why does the lesson call this archive the best artifact in the course?",
            options: [
              "The attribution itself is visible data a learner can go and read",
              "It is the only collection in the course that is fully digitised and freely downloadable",
              "It contains more images than every other collection the course discusses combined",
              "It is the only archive whose acquisition price has been made public",
            ],
            correctIndex: 0,
            explanation:
              "Nothing else in the course gives a learner a present-day institution grading its own certainty in the credit line, in public.",
            sourceLessonSlug: "attributed-to-and-what-it-admits",
          },
          {
            prompt: "In what year was Ming Smith born, and where did she grow up?",
            options: [
              "1947, in Columbus, Ohio",
              "1950, in Detroit, Michigan, where she began photographing as a teenager",
              "1947, in Harlem, New York, a few blocks from the collective she later joined",
              "1939, in Columbus, Georgia, moving north during the Second World War",
            ],
            correctIndex: 0,
            explanation:
              "The Studio Museum in Harlem's account gives both, and the course uses that account as its named source.",
            sourceLessonSlug: "when-the-records-own-record-disagrees",
          },
          {
            prompt: "How did Smith's work reach MoMA, according to the Studio Museum?",
            options: [
              "She submitted to an open call",
              "A curator saw her work in a group exhibition and requested a studio visit",
              "The Kamoinge collective placed the work with the museum on her behalf",
              "A private collector donated prints he had bought directly from her",
            ],
            correctIndex: 0,
            explanation:
              "An open call is an invitation to submit without an existing relationship to the institution, which is part of what makes the story notable.",
            sourceLessonSlug: "when-the-records-own-record-disagrees",
          },
          {
            prompt: "Which year does the Studio Museum in Harlem give for the acquisition?",
            options: [
              "1979",
              "1975, the earliest of the years that appear in published accounts",
              "1978, which is the year most frequently repeated in the press",
              "1981, following a two-year review by the museum's acquisitions committee",
            ],
            correctIndex: 0,
            explanation:
              "The course attributes that year to that source rather than asserting it, because other published accounts give 1978 and 1975.",
            sourceLessonSlug: "when-the-records-own-record-disagrees",
          },
          {
            prompt: "Why does this course print no single year as fact for the acquisition?",
            options: [
              "It did not read the accession record",
              "Because museums do not release acquisition dates for works bought before 1980",
              "Because the artist herself has said the year should not be published",
              "Because three years are equally well supported and none can ever be preferred",
            ],
            correctIndex: 0,
            explanation:
              "The museum's collection pages refused automated retrieval, and a course about who the record credits does not print an unchecked date about an acquisition record.",
            sourceLessonSlug: "when-the-records-own-record-disagrees",
          },
          {
            prompt: "What does a museum acquisition create?",
            options: [
              "A catalogue record, a home, an insurance value and citability",
              "A guaranteed place in the museum's permanent display rotation",
              "An income stream for the artist based on subsequent reproduction fees",
              "A commitment by the museum to publish scholarship on the work",
            ],
            correctIndex: 0,
            explanation:
              "Exhibition, income and scholarship are separate things, and confusing them lets one line in a biography stand in for a career.",
            sourceLessonSlug: "when-the-records-own-record-disagrees",
          },
          {
            prompt: "What does an acquisition NOT do by itself?",
            options: [
              "Put the work on a wall",
              "Give the work a permanent home in the collection",
              "Create a catalogue record that later scholarship can cite",
              "Assign the work an insurance value for the institution",
            ],
            correctIndex: 0,
            explanation:
              "That is why the same artist can be in a great collection and under-shown for decades without any contradiction.",
            sourceLessonSlug: "when-the-records-own-record-disagrees",
          },
          {
            prompt: "What is an accession record?",
            options: [
              "The museum's own entry for an acquired work",
              "A public register of every museum purchase made in a given financial year",
              "The receipt issued to an artist when a museum takes work into its collection",
              "A conservation report describing an object's condition on arrival",
            ],
            correctIndex: 0,
            explanation:
              "It carries the credit line, the date and the accession number, and it is the document that settles a disputed acquisition year.",
            sourceLessonSlug: "when-the-records-own-record-disagrees",
          },
          {
            prompt: "What does the lesson ask a learner to do about the disputed year?",
            options: [
              "Read the museum's collection record and close it",
              "Contact the artist's representatives and request a statement",
              "Accept the most frequently repeated year as correct by weight of citation",
              "Treat the question as unanswerable and cite all three years together",
            ],
            correctIndex: 0,
            explanation:
              "A claim, a holder, a document and a check anybody can run is the course's method compressed into one afternoon.",
            sourceLessonSlug: "when-the-records-own-record-disagrees",
          },
          {
            prompt: "What kind of evidence supports the claim that Smith was the only woman in Kamoinge at the time?",
            options: [
              "Agreement between two institutional accounts",
              "A membership roll held by the collective and consulted for this course",
              "A statement Smith herself made in a published interview about the group",
              "Minutes of the collective's meetings held in a university archive",
            ],
            correctIndex: 0,
            explanation:
              "The Studio Museum and a 2021 Aperture article by Brian Wallis both say it, which is stronger than one source and is still not a primary document.",
            sourceLessonSlug: "when-the-records-own-record-disagrees",
          },
          {
            prompt: "What is citability, as this lesson uses the term?",
            options: [
              "Being findable and referenceable in a catalogue",
              "Being reproduced often enough to become well known to the public",
              "Being legally clear for reproduction without further permission",
              "Being listed in a standard reference work on the artist's field",
            ],
            correctIndex: 0,
            explanation:
              "It is how later scholarship reaches a work at all, and it is one of the real things an acquisition provides.",
            sourceLessonSlug: "when-the-records-own-record-disagrees",
          },
          {
            prompt: "What is an open call?",
            options: [
              "An invitation to submit without an existing relationship",
              "A public meeting at which a museum explains its acquisition policy",
              "A period during which a collection is opened to researchers without appointment",
              "A competition judged by public vote rather than by curators",
            ],
            correctIndex: 0,
            explanation:
              "It is the route the Studio Museum's account describes for Smith's work reaching the institution.",
            sourceLessonSlug: "when-the-records-own-record-disagrees",
          },
          {
            prompt: "Why does the lesson say a disputed date makes a better lesson than a settled one?",
            options: [
              "It hands the learner a task with a right answer",
              "It shows that museums are unreliable and their records should be distrusted",
              "It demonstrates that the exact year has no bearing on the significance of the event",
              "It allows the course to avoid taking a position that might later be contradicted",
            ],
            correctIndex: 0,
            explanation:
              "There is one correct answer sitting in one accession record, and a known place to look is worth more than a sentence supplied by this course.",
            sourceLessonSlug: "when-the-records-own-record-disagrees",
          },
          {
            prompt: "In what year did Parks photograph Ella Watson?",
            options: [
              "1942",
              "1948, in the same year as his Harlem photo essay",
              "1938, before he had any federal appointment",
              "1952, during his first decade on a magazine staff",
            ],
            correctIndex: 0,
            explanation:
              "He arrived in Washington that year to work for the Farm Security Administration.",
            sourceLessonSlug: "a-caption-that-carries-a-name",
          },
          {
            prompt: "What replaces the pitchfork in Parks's reworking of Grant Wood's composition?",
            options: [
              "A broom and a mop",
              "A federal identity badge and a set of office keys",
              "A pair of spectacles and a folded newspaper",
              "A ledger and a pen, the tools of clerical work",
            ],
            correctIndex: 0,
            explanation:
              "The tools of the job Watson actually did stand where the farmer's pitchfork stands in the 1930 painting.",
            sourceLessonSlug: "a-caption-that-carries-a-name",
          },
          {
            prompt: "In what year was Grant Wood's American Gothic painted?",
            options: [
              "1930",
              "1942, the year Parks made his photographic response to it",
              "1918, at the end of the First World War",
              "1955, shortly before the photograph became widely known",
            ],
            correctIndex: 0,
            explanation:
              "The photograph's title refers to that painting, which is why the reference is checkable rather than atmospheric.",
            sourceLessonSlug: "a-caption-that-carries-a-name",
          },
          {
            prompt: "What does the course say the caption is, in the life of a record?",
            options: [
              "The place where the fight over a record usually happens",
              "The last element added before an item enters a museum collection",
              "The only part of a record that cannot later be altered",
              "The element most likely to be lost when a collection is moved",
            ],
            correctIndex: 0,
            explanation:
              "It holds one line, so what fits decides what survives, and almost nobody watches the decision being made.",
            sourceLessonSlug: "a-caption-that-carries-a-name",
          },
          {
            prompt: "What was the FSA photographic section trying to do with its picture file?",
            options: [
              "Argue for a set of policies",
              "Assemble a complete visual census of the American population",
              "Train a generation of photographers in documentary technique",
              "Supply illustrations to newspapers on a commercial basis",
            ],
            correctIndex: 0,
            explanation:
              "That purpose shaped what its photographers were asked to bring back, which is the same mechanism Section 3 read in a different century.",
            sourceLessonSlug: "a-caption-that-carries-a-name",
          },
          {
            prompt: "How does the course suggest a learner close the gap in the Ella Watson lesson?",
            options: [
              "By reading the Library of Congress catalogue record",
              "By writing to the Gordon Parks Foundation for a copy of the caption",
              "By comparing the published accounts and taking the most common wording",
              "By treating the caption as unrecoverable and moving on",
            ],
            correctIndex: 0,
            explanation:
              "The lesson says that is a better exercise than a sentence supplied by this course would be.",
            sourceLessonSlug: "a-caption-that-carries-a-name",
          },
          {
            prompt: "In which city is the museum that holds the Teenie Harris archive?",
            options: [
              "Pittsburgh",
              "Charleston, South Carolina, where the daguerreotypes were transferred",
              "New York, at the museum that acquired Ming Smith's work",
              "Washington, where the federal picture file is held",
            ],
            correctIndex: 0,
            explanation:
              "The Carnegie Museum of Art is in Pittsburgh, which is also where Harris worked for the Pittsburgh Courier.",
            sourceLessonSlug: "attributed-to-and-what-it-admits",
          },
          {
            prompt: "Which weekly news picture magazine does the museum name alongside the Courier?",
            options: [
              "Flash",
              "LIFE, which published his work nationally during the 1940s",
              "Ebony, which was founded in the same decade",
              "Look, a competitor of the national picture press",
            ],
            correctIndex: 0,
            explanation:
              "Cutline information from his work for both publications informs the museum's cataloguing of the archive.",
            sourceLessonSlug: "attributed-to-and-what-it-admits",
          },
          {
            prompt: "Why can a museum sort its holdings by degree of certainty?",
            options: [
              "Because the phrases are controlled terms in a catalogue field",
              "Because every item is accompanied by a written condition report",
              "Because certainty is recorded as a numerical score for each item",
              "Because uncertain items are stored separately from certain ones",
            ],
            correctIndex: 0,
            explanation:
              "Consistency in a field is what turns a curatorial judgement into data a learner can actually read across tens of thousands of items.",
            sourceLessonSlug: "attributed-to-and-what-it-admits",
          },
          {
            prompt: "How many negatives in medium formats does the museum's breakdown record?",
            options: [
              "14,350",
              "58,970, the largest of the three groups it counts",
              "454, the group it holds under special storage conditions",
              "70,000, which is the total rather than a component",
            ],
            correctIndex: 0,
            explanation:
              "The three components are 58,970 four-by-five negatives, 14,350 in medium formats and 454 nitrate negatives.",
            sourceLessonSlug: "attributed-to-and-what-it-admits",
          },
          {
            prompt: "What should a reader do when a headline figure and a component breakdown disagree?",
            options: [
              "Use the parts, and say who stands behind the figure",
              "Average the two figures and present the result as an estimate",
              "Use the larger figure, since collections grow over time",
              "Present both without indicating which the institution prefers",
            ],
            correctIndex: 0,
            explanation:
              "A round eighty thousand also circulates for this archive, and the museum's own summary is more than seventy thousand with a breakdown that adds up.",
            sourceLessonSlug: "attributed-to-and-what-it-admits",
          },
          {
            prompt: "What is a nitrate negative?",
            options: [
              "An early and chemically unstable film base",
              "A negative made by copying an existing photographic print",
              "A negative on a glass plate rather than on flexible film",
              "A negative that has been chemically toned for archival stability",
            ],
            correctIndex: 0,
            explanation:
              "It needs different handling, which is why the museum counts and stores those 454 items separately.",
            sourceLessonSlug: "attributed-to-and-what-it-admits",
          },
          {
            prompt: "Which institution's account does this course cite for Ming Smith's biography?",
            options: [
              "The Studio Museum in Harlem",
              "The Museum of Modern Art, whose collection record it consulted",
              "The Whitney Museum, which mounted the Kamoinge exhibition",
              "The Carnegie Museum of Art, which holds related material",
            ],
            correctIndex: 0,
            explanation:
              "The course attributes the 1979 date and the only-woman claim to that account rather than asserting either as settled fact.",
            sourceLessonSlug: "when-the-records-own-record-disagrees",
          },
          {
            prompt: "Who wrote the 2021 Aperture account of the Kamoinge exhibition that this course cites?",
            options: [
              "Brian Wallis",
              "Zoe Trodd, who also wrote on Douglass's photographic record",
              "Lorna Roth, whose work on colour standards appears in Section 2",
              "John Edwin Mason, who wrote on the 1948 Harlem photo essay",
            ],
            correctIndex: 0,
            explanation:
              "Wallis is also the author of the 1995 American Art article on the Zealy daguerreotypes that Section 3 cites.",
            sourceLessonSlug: "when-the-records-own-record-disagrees",
          },
          {
            prompt: "What would settle the disputed acquisition year?",
            options: [
              "One accession record",
              "A statement from the artist about when she was told of the purchase",
              "A count of how many publications give each of the three years",
              "The date of the open call to which the work was submitted",
            ],
            correctIndex: 0,
            explanation:
              "There is one correct answer sitting in one museum document, which is what makes this a task rather than a controversy.",
            sourceLessonSlug: "when-the-records-own-record-disagrees",
          },
          {
            prompt: "What does the course say would be embarrassing in a very specific way?",
            options: [
              "A credit course printing an unchecked date about an acquisition record",
              "A credit course declining to name the institution that holds a work",
              "A credit course relying on a museum's own account of its own history",
              "A credit course reporting three published years without choosing one",
            ],
            correctIndex: 0,
            explanation:
              "That is why the lesson attributes the year to a named source and asserts none as fact.",
            sourceLessonSlug: "when-the-records-own-record-disagrees",
          },
          {
            prompt: "What is the whole method of this course, compressed?",
            options: [
              "A claim, a holder, a document, and a check anybody can run",
              "A subject, a biography, a portfolio, and a critical assessment",
              "A theory, an example, a counter-example, and a conclusion",
              "An archive, a catalogue, an exhibition, and a publication",
            ],
            correctIndex: 0,
            explanation:
              "The disputed acquisition year is that method in one afternoon, which is why the lesson treats the gap as the exercise.",
            sourceLessonSlug: "when-the-records-own-record-disagrees",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 5 — Who paid, and what the payer wanted
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-editors-cut",
      title: "10 · The magazine pays, and the editor cuts",
      section: "Section 5 · Who paid, and what the payer wanted",
      body: `In 1948 Gordon Parks spent four weeks in Harlem with a seventeen-year-old named Leonard "Red" Jackson, who led a gang called the Midtowners. *LIFE* published the result on 1 November 1948 as "Harlem Gang Leader".

**The number that carries the lesson.** Parks made hundreds of photographs. *LIFE*'s editors selected twenty-one for publication. Everything a reader of that issue knew about Red Jackson came through a choice made by people who had not been in Harlem, applied to a body of work they had not made.

**What an editor's cut actually does, mechanically.** Selection decides which moments existed. Sequence decides what caused what. Cropping decides what is inside the world of the picture. Captioning decides who the people are. Layout decides which frame is the argument and which are the supporting evidence. None of those five powers belongs to the photographer in a commissioned magazine story, and all five change the meaning of the same negatives.

**Why the story ends well and the lesson still holds.** The essay was a success. Afterwards *LIFE*'s picture editor Wilson Hicks offered Parks a staff position, which made him the first, and for a long time the only, African American photographer on the magazine's staff. So this is not a story about a photographer being wronged. It is a story about the arrangement: even when the arrangement works, the photographer supplies and the editor decides, and the finished object records the editor's judgement as if it were the photographer's.

**How to use this on any commissioned record.** Ask what the payer wanted, then ask what got left out, then ask whether you can see the leavings. With a magazine story you often can, because contact sheets and unpublished frames survive in archives and foundations, and the gap between the shoot and the layout is readable. Where the leavings are gone, you are reading a decision without being able to see what it decided against, which is a weaker position than most readers realise they are in.

**And connect it back to Section 4.** The Carnegie tells you how sure it is. A magazine layout tells you nothing about what it discarded. The same photographer can appear in both kinds of record, and the difference is not the photographer, it is what the holding institution's format was built to disclose.

:::reveal How many photographs did Parks make for the 1948 essay, and how many did the magazine publish? ||| He made hundreds. The editors selected twenty-one.

:::reveal Name the five powers an editor holds over a commissioned photo story. ||| Selection, sequence, cropping, captioning and layout. Each of them changes the meaning of the same negatives, and none belongs to the photographer.

:::reveal What happened to Parks after the essay was published? ||| LIFE's picture editor Wilson Hicks offered him a staff position, making him the first African American staff photographer at the magazine.

## Vocabulary
- **Photo essay**: a magazine story told principally in photographs, whose final form is produced by editors rather than by the photographer.
- **The editor's cut**: the five selection powers a publication holds over a commissioned body of work, which together determine what the reader believes happened.
- **Contact sheet**: a print of every frame on a roll, which is why the difference between what was shot and what was published can sometimes still be read.
- **Commissioned record**: a body of work made because somebody paid for it, and therefore shaped by what that payer wanted before any frame was exposed.

## Sources
Mason, J. E. (2014, September 21). *Gordon Parks' classic photo essay, "Harlem Gang Leader"*. TIME. https://time.com/3461593/revisiting-gordon-parks-classic-photo-essay-harlem-gang-leader/

The Gordon Parks Foundation. (n.d.). *Biography*. https://www.gordonparksfoundation.org/gordon-parks/biography`,
    },
    {
      slug: "when-nobody-pays",
      title: "11 · When nobody pays",
      section: "Section 5 · Who paid, and what the payer wanted",
      body: `Roy DeCarava, 1919 to 2009, is the case in this course where no institution commissioned the work and the photographer therefore held the decisions the previous lesson gave away.

**What he had, institutionally.** In 1952 he became the first African American photographer to receive a John Simon Guggenheim Memorial Fellowship. A fellowship is not a commission: it funds a person for a period and does not specify a deliverable, which is a materially different arrangement from an agency shooting script or a magazine assignment.

**The book, which is the clearest artifact of the arrangement.** *The Sweet Flypaper of Life* (1955) pairs DeCarava's photographs with a fictional narration by Langston Hughes. It was made outside the commission system, and it is a book rather than a layout, which means the sequence is the authors' and it does not expire with an issue date.

**Now the aesthetic claim, stated the way the sources state it.** DeCarava's work is characterised by a tonal range that sits low. A gallery account of his work describes his art as existing not in the polarities of black and white but as encompassing "an infinite scale of gray tonalities, 'sliding into each other.'" DeCarava himself is quoted saying: "I have an affinity for the middle tones and the dark tones because they're beautiful, and they appeal to me on a very subjective level. I love the quality of so many shades of dark, so many different shades of gray."

**And here is a claim this course does not make, which is the reason this lesson is here.** It is often said that DeCarava specifically resisted commercial laboratories that corrected prints toward lighter skin. This course looked for documentation of that and did not find it, so it does not teach it. The adjacent claim that IS documented is Section 2's Shirley card, which is a fact about an industry's calibration standard, not a fact about this photographer's arguments with a lab. Merging the two would manufacture a confrontation nobody has shown took place.

**Why refusing that is the lesson rather than a caveat.** The invented version is better television. It has a hero, a villain and a scene. The documented version is a photographer who preferred dark tones and said so, plus an industry that calibrated to light skin and changed for commercial reasons. Both are true; neither needs the other; joining them would be a fabrication that flatters the course's own argument. A course that will not do that when it would be convenient is the only kind whose other claims are worth anything.

:::reveal What did DeCarava receive in 1952, and how does it differ from a commission? ||| A John Simon Guggenheim Memorial Fellowship, the first awarded to an African American photographer. A fellowship funds a person for a period without specifying a deliverable, unlike an agency script or a magazine assignment.

:::reveal What is The Sweet Flypaper of Life, and why does the course treat it as evidence about arrangements? ||| A 1955 book pairing DeCarava's photographs with a fictional narration by Langston Hughes, made outside the commission system, so the sequence belongs to its authors and does not expire with an issue date.

:::reveal Which claim about DeCarava does this course refuse to teach, and why? ||| That he specifically resisted labs correcting prints toward lighter skin. The course could not find documentation for it, and joining it to the documented Shirley card material would manufacture a confrontation nobody has shown took place.

## Vocabulary
- **Fellowship**: funding awarded to a person for a period without a specified deliverable, which leaves the recipient holding the editorial decisions.
- **Tonal range**: the span of light and dark values a print contains, and a deliberate authorial choice rather than a technical accident.
- **Undocumented claim**: an assertion that may be true and that a careful account declines to print until a source is found.
- **Manufactured confrontation**: two separately true facts joined into a scene that no evidence supports, which is a fabrication even when both halves check out.

## Sources
David Zwirner. (2019). *Roy DeCarava: Light Break*. https://www.davidzwirner.com/exhibitions/2019/light-break

The Brooklyn Rail. (2019, April). *Roy DeCarava and Langston Hughes's The Sweet Flypaper of Life*. https://brooklynrail.org/2019/04/art_books/Roy-DeCarava-and-Langston-Hughess-The-Sweet-Flypaper/`,
    },
    {
      slug: "when-a-movement-pays",
      title: "12 · When a movement pays",
      section: "Section 5 · Who paid, and what the payer wanted",
      body: `Kwame Brathwaite, 1938 to 2023, is the case where the payer is a political project, and the point is that the project was produced.

**The organisation.** In 1956 Brathwaite co-founded the African Jazz-Art Society and Studios, known as AJASS, whose membership included playwrights, graphic artists, dancers and fashion designers. In 1962 the Grandassa Models were established. The name comes from Grandassaland, a term the Black nationalist Carlos Cooks used for Africa.

**The event.** On 28 January 1962 a fashion show titled "Naturally '62" was staged at the Purple Manor, a nightclub in Harlem. It drew a crowd large enough that it had to be run twice the same evening. The models wore their hair natural and wore clothes drawing on designs from Lagos, Accra and Nairobi.

**Why this belongs in a course about who paid.** "Black Is Beautiful" is usually described as a slogan, as though it appeared. This is what it actually was: an organisation founded six years earlier, a troupe with a name and a source for that name, a venue, designers, a repeat performance, and a house photographer whose images carried the argument outward. Brathwaite's own archive describes his photography as creating the visual overture for the movement. He is the clearest case in this course of a photographer building an image rather than finding one.

**The argument the show was making, in Brathwaite's own words.** "There was lots of controversy because we were protesting how, in Ebony magazine, you couldn't find an ebony girl." That is a specific, checkable complaint about a specific publication's casting, which is a much more useful thing to teach than a mood.

**The arrangement, compared with the two before it.** A magazine pays and takes the five editorial powers with it. A fellowship pays and takes none of them. A movement pays and takes something different again: it supplies the argument, and the photographer's job is to make the argument visible and distributable. Nobody is being cut and nobody is working alone. The credit question becomes whether the photographer or the campaign is remembered as the author, which is exactly the question Section 6 will put to two claimants at once.

:::reveal What are AJASS and the Grandassa Models, and when was each established? ||| The African Jazz-Art Society and Studios, co-founded by Brathwaite in 1956, and the Grandassa Models, established in 1962. Grandassa comes from Grandassaland, Carlos Cooks's term for Africa.

:::reveal When and where was "Naturally '62" staged, and what happened that evening? ||| On 28 January 1962 at the Purple Manor, a nightclub in Harlem. The crowd was large enough that the show had to be run twice the same night.

:::reveal What does the course mean by saying "Black Is Beautiful" was produced rather than announced? ||| It had an organisation founded in 1956, a named troupe, a venue, designers, a repeat performance and a house photographer whose images carried the argument outward.

## Vocabulary
- **AJASS**: the African Jazz-Art Society and Studios, founded in 1956, whose members included playwrights, graphic artists, dancers and designers.
- **Grandassa Models**: the modelling troupe established in 1962, named from Carlos Cooks's term Grandassaland for Africa.
- **House photographer**: a photographer working inside a campaign or organisation, whose job is to make its argument visible rather than to observe it.
- **Produced campaign**: an argument with a venue, a cast, a schedule and a distribution plan behind it, as opposed to a slogan that is assumed to have simply spread.

## Sources
Adesina, P. (2020, September 4). *The birth of the Black is Beautiful movement*. BBC Culture, republished by BUALA. https://www.buala.org/en/to-read/the-birth-of-the-black-is-beautiful-movement

Kwame Brathwaite Archive. (n.d.). *About*. https://kwamebrathwaite.com/about/`,
    },
    {
      slug: "section-5-quiz",
      title: "Section 5 quiz · Who paid, and what the payer wanted",
      section: "Section 5 · Who paid, and what the payer wanted",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "On what date did LIFE publish \"Harlem Gang Leader\"?",
            options: [
              "1 November 1948",
              "1 November 1942, in the same year Parks joined the federal photographic section",
              "12 June 1949, six months after the photographs were made in Harlem",
              "1 October 1950, in an issue devoted to conditions in American cities",
            ],
            correctIndex: 0,
            explanation:
              "The essay ran in the issue of that date, and it is the publication that led directly to Parks's staff position.",
            sourceLessonSlug: "the-editors-cut",
          },
          {
            prompt: "Who was the subject of the 1948 essay?",
            options: [
              "Leonard \"Red\" Jackson",
              "Ella Watson, whom Parks had photographed for the federal file six years earlier",
              "Wilson Hicks, the magazine's picture editor, in a profile of the picture press",
              "A composite figure assembled from several young men Parks met in Harlem",
            ],
            correctIndex: 0,
            explanation:
              "Jackson was seventeen and led a gang called the Midtowners, and Parks spent four weeks with him.",
            sourceLessonSlug: "the-editors-cut",
          },
          {
            prompt: "How long did Parks spend on the assignment?",
            options: [
              "Four weeks",
              "Four months, matching the time he had spent on the Ella Watson photographs",
              "A single week, since the magazine needed the story for an imminent issue",
              "Two years, returning repeatedly as the gang's circumstances changed",
            ],
            correctIndex: 0,
            explanation:
              "Four weeks of work produced hundreds of photographs, of which the editors published twenty-one.",
            sourceLessonSlug: "the-editors-cut",
          },
          {
            prompt: "How many photographs did LIFE publish from the essay?",
            options: [
              "Twenty-one",
              "Several hundred, spread across three consecutive issues of the magazine",
              "Four, used as full-page plates with extended captions beneath each one",
              "Sixty, which was the standard length of a LIFE photo essay at the time",
            ],
            correctIndex: 0,
            explanation:
              "Everything a reader knew about Red Jackson came through that selection, made by people who had not been in Harlem.",
            sourceLessonSlug: "the-editors-cut",
          },
          {
            prompt: "Which of these is one of the five editorial powers the lesson names?",
            options: [
              "Sequence",
              "Exposure, which determines how much light reaches the negative",
              "Processing, which fixes the image chemically after the exposure is made",
              "Distribution, which decides how many copies of a magazine are printed",
            ],
            correctIndex: 0,
            explanation:
              "Selection, sequence, cropping, captioning and layout are the five, and sequence is the one that decides what caused what.",
            sourceLessonSlug: "the-editors-cut",
          },
          {
            prompt: "What does selection decide, in the lesson's breakdown?",
            options: [
              "Which moments existed",
              "How large each photograph appears on the printed page",
              "Who the people in the photographs are said to be",
              "Which frame carries the story's central argument",
            ],
            correctIndex: 0,
            explanation:
              "Sequence decides what caused what, cropping decides what is inside the world of the picture, captioning decides who people are, and layout decides which frame argues.",
            sourceLessonSlug: "the-editors-cut",
          },
          {
            prompt: "Who offered Parks a staff position after the essay?",
            options: [
              "Wilson Hicks",
              "Roy Stryker, who had directed his work at the federal photographic section",
              "Henry Luce, who founded the magazine and reviewed every hiring decision",
              "Langston Hughes, who recommended him to the magazine's editors",
            ],
            correctIndex: 0,
            explanation:
              "Hicks was the magazine's picture editor, and the appointment made Parks the first African American staff photographer there.",
            sourceLessonSlug: "the-editors-cut",
          },
          {
            prompt: "Why does the lesson say this is not a story about a photographer being wronged?",
            options: [
              "The arrangement worked and the point still holds",
              "Because Parks retained the right to approve the final selection of images",
              "Because the editors consulted him at every stage of the layout process",
              "Because he had signed a contract that gave him a share of the magazine's profits",
            ],
            correctIndex: 0,
            explanation:
              "Even when a commissioned arrangement works, the photographer supplies and the editor decides, and the finished object records the editor's judgement.",
            sourceLessonSlug: "the-editors-cut",
          },
          {
            prompt: "What three questions does the lesson give for reading any commissioned record?",
            options: [
              "What the payer wanted, what got left out, whether you can see the leavings",
              "Who paid, how much they paid, and whether the fee was ever disclosed publicly",
              "Who commissioned it, who published it, and who owns the copyright today",
              "When it was made, where it was made, and which archive now holds it",
            ],
            correctIndex: 0,
            explanation:
              "Where the leavings are gone, you are reading a decision without being able to see what it decided against.",
            sourceLessonSlug: "the-editors-cut",
          },
          {
            prompt: "What is a contact sheet, and why does it matter here?",
            options: [
              "A print of every frame on a roll",
              "A list of the people a photographer approached while working on a story",
              "The sheet on which an editor records which images have been selected",
              "A proof print supplied to a subject before publication for approval",
            ],
            correctIndex: 0,
            explanation:
              "It is one reason the gap between what was shot and what was published can sometimes still be read in an archive.",
            sourceLessonSlug: "the-editors-cut",
          },
          {
            prompt: "How does the lesson connect the magazine layout to Section 4?",
            options: [
              "A layout discloses nothing about what it discarded",
              "A layout uses the same graded attribution language a museum catalogue uses",
              "A layout is catalogued by museums using the same controlled terms",
              "A layout records the photographer's certainty about each identification",
            ],
            correctIndex: 0,
            explanation:
              "The Carnegie tells you how sure it is; a magazine page does not. The difference is what the holding format was built to disclose.",
            sourceLessonSlug: "the-editors-cut",
          },
          {
            prompt: "What was the gang Red Jackson led called?",
            options: [
              "The Midtowners",
              "The Uptowners, a rival group Parks photographed in the same weeks",
              "The Courier Boys, named for the newspaper that first reported on them",
              "The Grandassa, a Harlem group unrelated to the later modelling troupe",
            ],
            correctIndex: 0,
            explanation:
              "Jackson was seventeen and led that group, and the essay was built from four weeks spent with them.",
            sourceLessonSlug: "the-editors-cut",
          },
          {
            prompt: "What did Roy DeCarava receive in 1952?",
            options: [
              "A Guggenheim Fellowship",
              "A staff photographer's position at a national picture magazine",
              "A commission from the Farm Security Administration's successor agency",
              "A publishing contract for a book of Harlem photographs with a poet",
            ],
            correctIndex: 0,
            explanation:
              "He was the first African American photographer to receive a John Simon Guggenheim Memorial Fellowship.",
            sourceLessonSlug: "when-nobody-pays",
          },
          {
            prompt: "How does a fellowship differ from a commission?",
            options: [
              "It funds a person without specifying a deliverable",
              "It is awarded by a museum rather than by a magazine or a federal agency",
              "It must be repaid if the recipient does not produce work within a set period",
              "It transfers copyright in the resulting work to the awarding foundation",
            ],
            correctIndex: 0,
            explanation:
              "That is a materially different arrangement from an agency shooting script or a magazine assignment, and it leaves the editorial decisions with the artist.",
            sourceLessonSlug: "when-nobody-pays",
          },
          {
            prompt: "What is The Sweet Flypaper of Life?",
            options: [
              "A 1955 book of DeCarava photographs with a Langston Hughes narration",
              "A 1948 magazine essay about Harlem published over twenty-one pages",
              "A 1963 exhibition catalogue produced by the Kamoinge Workshop",
              "A 1955 collection of Langston Hughes poems illustrated with engravings",
            ],
            correctIndex: 0,
            explanation:
              "It was made outside the commission system, and being a book rather than a layout means the sequence belongs to its authors.",
            sourceLessonSlug: "when-nobody-pays",
          },
          {
            prompt: "Why does the lesson stress that the 1955 work is a book rather than a magazine layout?",
            options: [
              "The sequence is the authors' and does not expire with an issue date",
              "Because books were more widely read than magazines in the period",
              "Because a book could be sold directly to readers without an editor's approval",
              "Because book publishers paid photographers more than picture magazines did",
            ],
            correctIndex: 0,
            explanation:
              "The five editorial powers named in the previous lesson stay with the makers, which is the whole difference the section is teaching.",
            sourceLessonSlug: "when-nobody-pays",
          },
          {
            prompt: "How is DeCarava's tonal range described in the gallery account the course cites?",
            options: [
              "An infinite scale of gray tonalities, sliding into each other",
              "A stark opposition of pure black and pure white, with the middle values removed",
              "A high-key range in which shadow detail is deliberately sacrificed for brightness",
              "A neutral range matched exactly to the reference standards labs used at the time",
            ],
            correctIndex: 0,
            explanation:
              "The account describes his art as existing not in the polarities of black and white but in that scale of grays.",
            sourceLessonSlug: "when-nobody-pays",
          },
          {
            prompt: "What did DeCarava himself say about middle and dark tones?",
            options: [
              "That he has an affinity for them because they are beautiful",
              "That he used them because commercial laboratories could not print them correctly",
              "That he adopted them after studying the printing of nineteenth-century daguerreotypes",
              "That they were forced on him by the film stocks available to him at the time",
            ],
            correctIndex: 0,
            explanation:
              "He described loving the quality of so many shades of dark and so many different shades of gray, on a subjective level.",
            sourceLessonSlug: "when-nobody-pays",
          },
          {
            prompt: "Which claim about DeCarava does this course refuse to teach?",
            options: [
              "That he resisted labs correcting prints toward lighter skin",
              "That he received the first Guggenheim Fellowship awarded to an African American photographer",
              "That he worked in a tonal range concentrated at the dark end of the scale",
              "That he published a book of photographs with Langston Hughes in 1955",
            ],
            correctIndex: 0,
            explanation:
              "The course looked for documentation of that specific claim and did not find it, so it does not print it as fact.",
            sourceLessonSlug: "when-nobody-pays",
          },
          {
            prompt: "What is the adjacent claim that IS documented?",
            options: [
              "The Shirley card, which is a fact about an industry standard",
              "A dispute between DeCarava and his printer, recorded in gallery correspondence",
              "A statement by Kodak acknowledging complaints from portrait photographers",
              "A published letter in which DeCarava described his difficulties with laboratories",
            ],
            correctIndex: 0,
            explanation:
              "It concerns an industry's calibration standard, not this photographer's arguments with a lab, and merging the two would invent a scene.",
            sourceLessonSlug: "when-nobody-pays",
          },
          {
            prompt: "What is a manufactured confrontation, as the lesson defines it?",
            options: [
              "Two true facts joined into a scene no evidence supports",
              "A dispute staged by a publication to generate attention for a story",
              "A disagreement between scholars about how to interpret the same document",
              "A legal action threatened but never filed by an institution",
            ],
            correctIndex: 0,
            explanation:
              "It is a fabrication even when both halves check out, which is why the course names it and refuses it.",
            sourceLessonSlug: "when-nobody-pays",
          },
          {
            prompt: "Why does the lesson say the invented version is more attractive?",
            options: [
              "It has a hero, a villain and a scene",
              "It is shorter and therefore easier for a learner to remember accurately",
              "It has been repeated more often and so appears better established",
              "It reconciles two claims that would otherwise contradict each other",
            ],
            correctIndex: 0,
            explanation:
              "The documented version is a photographer who preferred dark tones and an industry that changed for commercial reasons, and neither needs the other.",
            sourceLessonSlug: "when-nobody-pays",
          },
          {
            prompt: "What are DeCarava's dates?",
            options: [
              "1919 to 2009",
              "1938 to 2023, the same span as the photographer discussed in the next lesson",
              "1912 to 1986, ending shortly before the collective he founded disbanded",
              "1925 to 1999, covering the whole period of the picture press",
            ],
            correctIndex: 0,
            explanation:
              "The gallery account of his work gives those years, and dates are one of the things this course only prints when it has retrieved them.",
            sourceLessonSlug: "when-nobody-pays",
          },
          {
            prompt: "What does the lesson say about a course that declines a convenient fabrication?",
            options: [
              "It is the only kind whose other claims are worth anything",
              "It will inevitably be less popular than one that tells a cleaner story",
              "It should record the rejected claim in its bibliography for completeness",
              "It must replace the claim with an equally striking documented one",
            ],
            correctIndex: 0,
            explanation:
              "Refusing the join when it would flatter the course's own argument is what makes the rest of the course checkable.",
            sourceLessonSlug: "when-nobody-pays",
          },
          {
            prompt: "What are Kwame Brathwaite's dates?",
            options: [
              "1938 to 2023",
              "1919 to 2009, the same span as the photographer in the previous lesson",
              "1928 to 2013, spanning the whole of the Black Arts Movement",
              "1945 to 2019, beginning at the end of the Second World War",
            ],
            correctIndex: 0,
            explanation:
              "His own archive gives those years, which is why the course uses past-tense framing for him.",
            sourceLessonSlug: "when-a-movement-pays",
          },
          {
            prompt: "What is AJASS and when was it founded?",
            options: [
              "The African Jazz-Art Society and Studios, 1956",
              "The African Jazz-Art Society and Studios, 1962, the same year as the models",
              "The American Jazz and Art Students Society, founded in Harlem in 1948",
              "The African Jazz-Art Society and Studios, founded in Brooklyn in 1970",
            ],
            correctIndex: 0,
            explanation:
              "Its membership included playwrights, graphic artists, dancers and fashion designers, which is what made a produced show possible.",
            sourceLessonSlug: "when-a-movement-pays",
          },
          {
            prompt: "In what year were the Grandassa Models established?",
            options: [
              "1962",
              "1956, at the same moment as the organisation that produced them",
              "1968, at the height of the Black Arts Movement in Harlem",
              "1959, three years before the first of the Naturally shows",
            ],
            correctIndex: 0,
            explanation:
              "The troupe was established six years after AJASS, and the first Naturally show followed in the same year.",
            sourceLessonSlug: "when-a-movement-pays",
          },
          {
            prompt: "Where does the name Grandassa come from?",
            options: [
              "Grandassaland, Carlos Cooks's term for Africa",
              "A Harlem street on which the group's first studio was located",
              "The surname of the designer who dressed the first show",
              "A Yoruba word for beauty, adopted by the group in 1962",
            ],
            correctIndex: 0,
            explanation:
              "Cooks was a Black nationalist, and the naming is part of what makes the campaign a produced argument rather than a mood.",
            sourceLessonSlug: "when-a-movement-pays",
          },
          {
            prompt: "On what date was \"Naturally '62\" staged?",
            options: [
              "28 January 1962",
              "28 January 1956, at the founding of the organisation behind it",
              "1 November 1962, timed to coincide with a national magazine feature",
              "4 July 1962, chosen deliberately for its symbolism",
            ],
            correctIndex: 0,
            explanation:
              "The show ran at the Purple Manor in Harlem and drew a crowd large enough that it had to be repeated the same evening.",
            sourceLessonSlug: "when-a-movement-pays",
          },
          {
            prompt: "Where was the show held?",
            options: [
              "The Purple Manor, a nightclub in Harlem",
              "The Apollo Theater, which hosted the group's shows in later years",
              "The Studio Museum in Harlem, then newly opened",
              "A hall at Columbia University lent for the evening",
            ],
            correctIndex: 0,
            explanation:
              "A named venue is part of what makes the campaign checkable as a production rather than as a slogan.",
            sourceLessonSlug: "when-a-movement-pays",
          },
          {
            prompt: "What happened because of the size of the crowd that night?",
            options: [
              "The show was run twice",
              "The venue was closed by the city fire department before the show began",
              "The organisers moved the event to a larger hall the following week",
              "The show was filmed and broadcast on local television the next day",
            ],
            correctIndex: 0,
            explanation:
              "A repeat performance in one evening is a production fact, and production facts are what this lesson is assembling.",
            sourceLessonSlug: "when-a-movement-pays",
          },
          {
            prompt: "What complaint did Brathwaite describe the show as making?",
            options: [
              "That you could not find an ebony girl in Ebony magazine",
              "That white photographers were being hired for Black fashion assignments",
              "That Harlem venues refused to book Black designers for their shows",
              "That national brands would not advertise in Black publications",
            ],
            correctIndex: 0,
            explanation:
              "It is a specific, checkable complaint about a specific publication's casting, which is more useful to teach than a mood.",
            sourceLessonSlug: "when-a-movement-pays",
          },
          {
            prompt: "What does the course mean by calling Brathwaite a house photographer?",
            options: [
              "He worked inside the campaign to make its argument visible",
              "He photographed exclusively indoors, in a studio the organisation maintained",
              "He was employed by a single magazine on an exclusive contract",
              "He photographed the homes of the movement's leading figures",
            ],
            correctIndex: 0,
            explanation:
              "His job was to make the argument visible and distributable rather than to observe it from outside, which makes him the clearest case of building an image.",
            sourceLessonSlug: "when-a-movement-pays",
          },
          {
            prompt: "What elements does the lesson list to show the campaign was produced?",
            options: [
              "An organisation, a troupe, a venue, designers and a photographer",
              "A budget, a board of directors, a legal charter and a set of bylaws",
              "A magazine, a printing press, a distribution network and a subscription list",
              "A gallery, a curator, a catalogue and a touring exhibition schedule",
            ],
            correctIndex: 0,
            explanation:
              "Plus a repeat performance the same night, which together make the campaign a production with a date rather than a slogan that appeared.",
            sourceLessonSlug: "when-a-movement-pays",
          },
          {
            prompt: "How does a movement's payment differ from a magazine's, in this section's terms?",
            options: [
              "It supplies the argument and asks for it to be made visible",
              "It pays more, because political organisations value photography more highly",
              "It takes all five editorial powers rather than only selection and layout",
              "It offers no payment at all, so the arrangement is the same as a fellowship",
            ],
            correctIndex: 0,
            explanation:
              "Nobody is being cut and nobody is working alone, so the credit question becomes whether the photographer or the campaign is remembered as the author.",
            sourceLessonSlug: "when-a-movement-pays",
          },
          {
            prompt: "Which arrangement leaves the photographer holding all five editorial powers?",
            options: [
              "A fellowship",
              "A magazine assignment with an agreed fee and a guaranteed page count",
              "A federal agency posting with a shooting script and a caption sheet",
              "A campaign role in which the organisation sets the argument",
            ],
            correctIndex: 0,
            explanation:
              "A fellowship funds a person for a period without specifying a deliverable, which is why DeCarava's book is the section's clearest artifact.",
            sourceLessonSlug: "when-nobody-pays",
          },
          {
            prompt: "What does the section's sequence of three arrangements set up?",
            options: [
              "The question of who is remembered as the author",
              "A ranking of the arrangements from least to most exploitative of photographers",
              "A chronology showing how commissioning practice improved over four decades",
              "A comparison of how much each kind of payer typically paid a photographer",
            ],
            correctIndex: 0,
            explanation:
              "Section 6 puts that question to two claimants making two different claims on one archive.",
            sourceLessonSlug: "when-a-movement-pays",
          },
          {
            prompt: "Which designs did the models' clothes draw on?",
            options: [
              "Designs from Lagos, Accra and Nairobi",
              "Designs from Paris and Milan, reinterpreted with African textiles",
              "Nineteenth-century American designs, worn as historical costume",
              "Designs supplied by the nightclub, which owned the show's wardrobe",
            ],
            correctIndex: 0,
            explanation:
              "The clothing and the natural hair were together the argument the show was staged to make.",
            sourceLessonSlug: "when-a-movement-pays",
          },
          {
            prompt: "How does Brathwaite's own archive describe his photography?",
            options: [
              "As creating the visual overture for the movement",
              "As documenting a movement that had already established its own visual language",
              "As commercial fashion work that acquired political meaning only in retrospect",
              "As a private record never intended for publication during his lifetime",
            ],
            correctIndex: 0,
            explanation:
              "That is the archive's own wording, and it supports treating him as building an image rather than finding one.",
            sourceLessonSlug: "when-a-movement-pays",
          },
          {
            prompt: "Which of these is a fact about the 1948 essay rather than about the 1962 show?",
            options: [
              "Twenty-one images were selected from hundreds",
              "The event had to be repeated on the same evening because of demand",
              "The organisation behind it had been founded six years earlier",
              "The models' clothing drew on designs from three African cities",
            ],
            correctIndex: 0,
            explanation:
              "The editorial cut belongs to the magazine arrangement; the repeat performance, the founding date and the designs belong to the produced campaign.",
            sourceLessonSlug: "the-editors-cut",
          },
          {
            prompt: "How old was Red Jackson when Parks photographed him?",
            options: [
              "Seventeen",
              "Twenty-five, and already a decade into gang leadership",
              "Fourteen, the youngest member of the group he led",
              "Twenty-one, having taken over the group that year",
            ],
            correctIndex: 0,
            explanation:
              "He led a gang called the Midtowners, and Parks spent four weeks with him before the essay was published.",
            sourceLessonSlug: "the-editors-cut",
          },
          {
            prompt: "What does cropping decide, in the lesson's breakdown of editorial power?",
            options: [
              "What is inside the world of the picture",
              "Which of several frames from a sequence will be published",
              "How the reader is told to interpret the people shown",
              "Which photograph carries the story's central argument",
            ],
            correctIndex: 0,
            explanation:
              "Selection decides which moments existed, sequence decides what caused what, captioning decides who people are, and layout decides which frame argues.",
            sourceLessonSlug: "the-editors-cut",
          },
          {
            prompt: "Where can the difference between what was shot and what was published sometimes be read?",
            options: [
              "In contact sheets and unpublished frames held in archives",
              "In the magazine's printed corrections column in later issues",
              "In the photographer's contract, which lists the images delivered",
              "In the caption sheets the agency filed with the negatives",
            ],
            correctIndex: 0,
            explanation:
              "Where the leavings are gone, you are reading a decision without being able to see what it decided against.",
            sourceLessonSlug: "the-editors-cut",
          },
          {
            prompt: "What did Parks's essay make him at the magazine?",
            options: [
              "Its first African American staff photographer",
              "Its picture editor, succeeding Wilson Hicks in that role",
              "Its Harlem correspondent, covering the city for two decades",
              "Its highest-paid contributor for the following year",
            ],
            correctIndex: 0,
            explanation:
              "And for a long time its only one, which is why the arrangement working does not weaken the lesson about who decides.",
            sourceLessonSlug: "the-editors-cut",
          },
          {
            prompt: "In what year was The Sweet Flypaper of Life published?",
            options: [
              "1955",
              "1952, the year of DeCarava's fellowship",
              "1963, the year the Kamoinge Workshop was founded",
              "1948, the year of the Harlem photo essay",
            ],
            correctIndex: 0,
            explanation:
              "It pairs DeCarava's photographs with a fictional narration by Langston Hughes and was made outside the commission system.",
            sourceLessonSlug: "when-nobody-pays",
          },
          {
            prompt: "Who wrote the narration for that book?",
            options: [
              "Langston Hughes",
              "Roy DeCarava himself, writing under his own name",
              "Sherry Turner DeCarava, in a preface added to a later edition",
              "Brian Wallis, in an essay commissioned for the first printing",
            ],
            correctIndex: 0,
            explanation:
              "The narration is fictional, and the sequence belongs to the two authors rather than to an editor working to an issue date.",
            sourceLessonSlug: "when-nobody-pays",
          },
          {
            prompt: "What was DeCarava the first African American photographer to receive?",
            options: [
              "A John Simon Guggenheim Memorial Fellowship",
              "A staff photographer's post at a national picture magazine",
              "A commission from the federal photographic section",
              "A solo exhibition at a New York art museum",
            ],
            correctIndex: 0,
            explanation:
              "In 1952, and a fellowship funds a person for a period without specifying a deliverable.",
            sourceLessonSlug: "when-nobody-pays",
          },
          {
            prompt: "What is an undocumented claim, as this course treats one?",
            options: [
              "An assertion a careful account declines to print until a source is found",
              "An assertion that has been disproved and should be corrected wherever it appears",
              "An assertion supported only by an interview rather than by a written record",
              "An assertion about a living person who has not confirmed it publicly",
            ],
            correctIndex: 0,
            explanation:
              "It may well be true. The course's position is that it does not get printed as fact until somebody finds the documentation.",
            sourceLessonSlug: "when-nobody-pays",
          },
          {
            prompt: "Who co-founded AJASS with Brathwaite?",
            options: [
              "His brother Elombe Brath",
              "Carlos Cooks, whose term gave the modelling troupe its name",
              "Roy DeCarava, who was building a collective in the same years",
              "The designers who dressed the first of the Naturally shows",
            ],
            correctIndex: 0,
            explanation:
              "The two brothers led the creative group that staged the 1962 show at the Purple Manor.",
            sourceLessonSlug: "when-a-movement-pays",
          },
          {
            prompt: "Who was Carlos Cooks, in relation to the Grandassa name?",
            options: [
              "A Black nationalist whose term for Africa the name comes from",
              "The designer who created the garments worn in the first show",
              "The proprietor of the Harlem nightclub where the show was staged",
              "The photographer who documented the troupe before Brathwaite",
            ],
            correctIndex: 0,
            explanation:
              "Grandassaland was his term for Africa, and the naming is part of what makes the campaign a produced argument.",
            sourceLessonSlug: "when-a-movement-pays",
          },
          {
            prompt: "What kinds of members did AJASS include?",
            options: [
              "Playwrights, graphic artists, dancers and fashion designers",
              "Photographers only, working together on a shared archive",
              "Journalists and editors from Harlem's weekly newspapers",
              "Musicians and record producers from the city's jazz clubs",
            ],
            correctIndex: 0,
            explanation:
              "That range is what made a staged, dressed, repeated and photographed show possible in the first place.",
            sourceLessonSlug: "when-a-movement-pays",
          },
          {
            prompt: "Which of these is a fact about the DeCarava lesson rather than the Brathwaite one?",
            options: [
              "A fellowship left the editorial decisions with the artist",
              "The show had to be run twice on the same evening",
              "The troupe took its name from Carlos Cooks's term for Africa",
              "The organisation behind the work was founded in 1956",
            ],
            correctIndex: 0,
            explanation:
              "The fellowship is the no-payer arrangement; the repeat performance, the naming and the 1956 founding belong to the produced campaign.",
            sourceLessonSlug: "when-nobody-pays",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 6 — Two claims on one archive
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "weems-and-the-contract",
      title: "13 · A contract, a threat, and no case",
      section: "Section 6 · Two claims on one archive",
      body: `Two people have made claims on the 1850 plates. They made different claims, in different decades, and they got different results. Popular accounts blur them into one story about a family winning images back, and that story is wrong in both halves. This lesson takes the first claim; the next takes the second.

**What Carrie Mae Weems did.** In the early 1990s Weems went to Harvard's Peabody Museum. She signed a contract promising not to use any Peabody images without permission. She then photographed the daguerreotypes anyway and used the copies in a series called *From Here I Saw What Happened and I Cried*, made in 1995-96. She enlarged the images, presented them in a circular tondo shape and tinted them red, and she set white text over them: Drana's carries "You Became a Scientific Profile"; Jack's, "An Anthropological Debate"; Renty's, "A Negroid Type"; Delia's, "& A Photographic Subject."

**Read the texts as an argument about captions, because that is what they are.** Each phrase is the category the 1850 commission assigned to a person, printed on top of the person. Section 3 said a record made to prove a theory captures what the theory needs. Weems put the theory's own vocabulary back on the surface where a viewer has to read it.

**What Harvard did.** It threatened to sue. The legal theory, as recorded in the law-review account this course relies on, was that Weems had taken Harvard's copyright in the daguerreotypes and that she had also broken her contractual promise not to use images taken in the Peabody without permission.

**What Weems did next, in her own words.** She said she felt flabbergasted: "I thought, Harvard's going to sue me for using these images of Black people in their collection. The richest university in the world." After some time worrying about it she told University representatives: "I think that I don't have really a legal case, but maybe I have a moral case that [should] be . . . carr[ied] out in public. I think that your suing me would be a really good thing. You should. And we should have this conversation in court."

**And what happened, which is the point.** Harvard did not sue. It then demanded payment whenever Weems sold a work from the series, and Harvard administrators also purchased the images for its art museum. Weems called that result confusing.

**Why the non-case is the sharper teaching object.** There is no verdict here, which means there is no rule to hide behind. The two questions the law-review account says the episode leaves standing are worth stating exactly: whether Harvard actually owned the copyrights in photographs made in 1850, and whether, if it did, fair use permitted what Weems did. An institution asserted ownership of images it had commissioned to prove a racial theory, was publicly invited to defend that ownership in front of a judge, and declined. That is the posture. Nobody was vindicated and nobody was found liable.

:::reveal What did Weems sign before seeing the daguerreotypes, and what did she then do? ||| A Peabody Museum contract promising not to use any of its images without permission. She photographed the daguerreotypes anyway and used the copies in From Here I Saw What Happened and I Cried, 1995-96.

:::reveal On what two legal grounds did Harvard threaten to sue? ||| Copyright infringement in the daguerreotypes, and breach of her contractual promise not to use images taken in the Peabody without permission.

:::reveal What was the outcome of Harvard's threat? ||| Harvard did not sue. It demanded payment whenever Weems sold a work from the series, and its administrators purchased the images for the university's art museum.

## Vocabulary
- **Breach of contract**: failure to keep a promise made in an agreement, one of the two grounds Harvard asserted against Weems.
- **Copyright infringement**: use of a protected work without permission, the other ground asserted, and one that turns on whether a 175-year-old plate is protected at all.
- **Fair use**: a doctrine permitting some unlicensed use of protected work, raised by the law-review account as the second unresolved question here.
- **Appropriation**: making new work from existing images, which is what the series does and what the threatened claim was about.
- **Non-litigated dispute**: a conflict that produced no judgment, and therefore no rule, which is why this one is taught for its posture rather than its outcome.

## Sources
Murray, Y. M. (2012-2013). From here I saw what happened and I cried: Carrie Mae Weems' challenge to the Harvard archive. *Unbound: Harvard Journal of the Legal Left, 8*(1), 1-78.

MacArthur Foundation. (2013, September 25). *Carrie Mae Weems*. https://www.macfound.org/fellows/class-of-2013/carrie-mae-weems`,
    },
    {
      slug: "lanier-and-what-a-settlement-is-not",
      title: "14 · What a settlement is not",
      section: "Section 6 · Two claims on one archive",
      body: `The second claim is a different claimant with a different theory, and keeping the two apart is the whole job of this lesson.

**The claim.** Tamara Lanier says she is a descendant of Renty and Delia. In 2019 she sued Harvard. Where Weems claimed a right to re-present the images, Lanier claimed the objects themselves.

**What the court held in 2022.** The Massachusetts Supreme Judicial Court decided the case on 23 June 2022, docket SJC-13138. On the property question the court was blunt: "A descendant of someone whose likeness is reproduced in a daguerreotype would not therefore inherit any property right to that daguerreotype." Her claims to possession were dismissed. What survived was different in kind: the court vacated the dismissal of her claim for negligent infliction of emotional distress and remanded the case so she could amend her complaint to allege reckless infliction of emotional distress as well.

**Read what that means, carefully.** Lanier did not win the images in court, and she did not establish that a descendant owns a photograph of an ancestor. The court said the opposite. What she was allowed to keep pursuing was a claim about how Harvard treated her, not a claim to the plates.

**What happened after.** In May 2025 the parties settled. Harvard agreed to transfer the fifteen daguerreotypes to the International African American Museum in Charleston, South Carolina. Harvard declined to disclose the terms; reporting at the time noted an undisclosed financial component, which is why no figure appears in this course and none ever should. No court ordered the transfer. Harvard said it had long been eager to place the plates with another museum and that it had not confirmed Lanier's claimed descent. Lanier's own statement called the outcome a victory for reparations. Both positions are on the record and this course reports both without choosing between them.

**The distinction most coverage drops, stated as plainly as it can be.** A settlement is an agreement. A judgment is a ruling. The only ruling here went against the property claim. A lesson that says the family won the images back teaches a legal rule that does not exist, and a learner who repeats it will be wrong in front of somebody who checks.

**Now put the two claims side by side, which is why the section pairs them.** Weems claimed a right to re-present and was threatened but never sued. Lanier claimed a right to repossess, sued, lost the property question, and obtained the objects anyway by agreement. One archive, two theories, two outcomes, and not a single judicial statement supporting the proposition most people believe this story establishes. That is what a credit course is for: the objects moved, and the rule did not.

:::reveal What did the Massachusetts Supreme Judicial Court hold about a descendant's property right? ||| That a descendant of someone whose likeness is reproduced in a daguerreotype would not therefore inherit any property right to that daguerreotype. The possession claims were dismissed.

:::reveal Which claim survived the 2022 decision? ||| The claim for negligent infliction of emotional distress, whose dismissal the court vacated, remanding so the complaint could be amended to allege reckless infliction as well.

:::reveal Why is it wrong to say the family won the images back? ||| Because the transfer came from a settlement agreed in May 2025, not from a judgment. No court ordered it, and the only ruling on the property question went the other way.

## Vocabulary
- **Judgment**: a court's ruling on a claim, which creates a rule others can rely on.
- **Settlement**: an agreement between parties that ends a case without a ruling, and therefore establishes nothing about the law.
- **Remand**: a higher court's return of a case to a lower court for further proceedings, which is what happened to the surviving claim here.
- **Negligent infliction of emotional distress**: the claim the court allowed to proceed, which concerns how a party was treated rather than who owns an object.
- **Procedural posture**: where a dispute stands in the process, filed, dismissed, settled or decided, which is the accurate way to describe a live legal matter.

## Sources
Lanier v. President and Fellows of Harvard College, No. SJC-13138 (Mass. June 23, 2022). https://caselaw.findlaw.com/court/ma-supreme-judicial-court/2176785.html

Di Liscia, V. (2025, May 28). *Harvard relinquishes photographs of enslaved people in historic settlement*. Hyperallergic. https://hyperallergic.com/harvard-relinquishes-photographs-of-enslaved-people-in-historic-settlement/

WBUR. (2025, May 28). *Harvard agrees to relinquish early photos of enslaved people, ending a long legal battle*. https://www.wbur.org/news/2025/05/28/harvard-daguerreotypes-renty-delia-settlement-south-carolina`,
    },
    {
      slug: "section-6-quiz",
      title: "Section 6 quiz · Two claims on one archive",
      section: "Section 6 · Two claims on one archive",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What did Weems sign before working with the Peabody's images?",
            options: [
              "A contract promising not to use them without permission",
              "A deed of gift transferring her future works to the museum's collection",
              "A licence agreeing a fee for each reproduction she might later publish",
              "A research agreement limiting her to consulting written catalogue records",
            ],
            correctIndex: 0,
            explanation:
              "She signed it on entering the archive, and the promise is one of the two grounds Harvard later asserted.",
            sourceLessonSlug: "weems-and-the-contract",
          },
          {
            prompt: "In what years was From Here I Saw What Happened and I Cried made?",
            options: [
              "1995 to 1996",
              "1976 to 1977, immediately after the plates were rediscovered in storage",
              "2013 to 2014, the years surrounding her MacArthur Fellowship",
              "1985 to 1986, a decade before she first visited the Peabody Museum",
            ],
            correctIndex: 0,
            explanation:
              "The series dates from the mid-1990s, and the threatened claim followed it.",
            sourceLessonSlug: "weems-and-the-contract",
          },
          {
            prompt: "What text appears over the image of Renty in Weems's series?",
            options: [
              "A Negroid Type",
              "You Became a Scientific Profile, which appears on Drana's image instead",
              "An Anthropological Debate, which appears on Jack's image instead",
              "& A Photographic Subject, which appears on Delia's image instead",
            ],
            correctIndex: 0,
            explanation:
              "Each phrase is the category the 1850 commission assigned to a person, printed back over the person.",
            sourceLessonSlug: "weems-and-the-contract",
          },
          {
            prompt: "What text appears over the image of Drana?",
            options: [
              "You Became a Scientific Profile",
              "A Negroid Type, which appears on Renty's image instead",
              "An Anthropological Debate, which appears on Jack's image instead",
              "& A Photographic Subject, which appears on Delia's image instead",
            ],
            correctIndex: 0,
            explanation:
              "The four phrases are recorded in the law-review account this course relies on for the episode.",
            sourceLessonSlug: "weems-and-the-contract",
          },
          {
            prompt: "How did Weems present the appropriated images?",
            options: [
              "Enlarged, in a circular tondo shape, and tinted red",
              "Reduced to postage-stamp size and arranged in a grid of twenty-eight",
              "Printed in negative, with the tonal values reversed throughout",
              "Reproduced at original size in an unmodified black-and-white print",
            ],
            correctIndex: 0,
            explanation:
              "The circular shape and the overlaid text together make the series an argument about how the originals were captioned.",
            sourceLessonSlug: "weems-and-the-contract",
          },
          {
            prompt: "On what two grounds did Harvard threaten to sue Weems?",
            options: [
              "Copyright infringement and breach of contract",
              "Defamation of the university and breach of contract",
              "Copyright infringement and unauthorised entry to a restricted collection",
              "Conversion of physical property and interference with a museum licence",
            ],
            correctIndex: 0,
            explanation:
              "Harvard argued she had taken its copyright in the daguerreotypes and broken her promise not to use Peabody images without permission.",
            sourceLessonSlug: "weems-and-the-contract",
          },
          {
            prompt: "How did Weems respond to the threat?",
            options: [
              "She invited Harvard to have the argument in court",
              "She withdrew the works from sale and offered to destroy the prints",
              "She counter-sued, seeking a declaration that the images were in the public domain",
              "She negotiated a licence and paid the museum a fee for each reproduction",
            ],
            correctIndex: 0,
            explanation:
              "She said she did not really have a legal case but perhaps a moral one to be carried out in public, and told them their suing her would be a good thing.",
            sourceLessonSlug: "weems-and-the-contract",
          },
          {
            prompt: "Did Harvard sue Weems?",
            options: [
              "No",
              "Yes, and the case was dismissed on fair-use grounds before trial",
              "Yes, and the parties settled on confidential terms before a hearing",
              "Yes, and a jury found for Harvard on the contract claim only",
            ],
            correctIndex: 0,
            explanation:
              "It threatened, was publicly invited to proceed, and did not file, which is why there is no verdict to lean on.",
            sourceLessonSlug: "weems-and-the-contract",
          },
          {
            prompt: "What did Harvard do after backing away from the threat?",
            options: [
              "Demanded payment on sales and bought the images for its art museum",
              "Withdrew the daguerreotypes from public access for the following decade",
              "Issued a public apology and waived any claim to the images entirely",
              "Transferred the plates to another university with no conditions attached",
            ],
            correctIndex: 0,
            explanation:
              "Weems described that combination of outcomes as confusing, and the law-review account records it.",
            sourceLessonSlug: "weems-and-the-contract",
          },
          {
            prompt: "What two questions does the law-review account say the episode leaves standing?",
            options: [
              "Whether Harvard owned the copyrights, and whether fair use applied",
              "Whether the contract was enforceable, and whether the museum had standing to sue",
              "Whether the plates were authentic, and whether the museum had valid title to them",
              "Whether Weems profited from the works, and how much she should have paid",
            ],
            correctIndex: 0,
            explanation:
              "A non-litigated dispute produces no rule, so both questions remain exactly as open as they were before the threat.",
            sourceLessonSlug: "weems-and-the-contract",
          },
          {
            prompt: "What is a non-litigated dispute?",
            options: [
              "A conflict that produced no judgment and therefore no rule",
              "A conflict settled by an arbitrator rather than by a judge in open court",
              "A conflict in which one party lacked the standing required to bring a claim",
              "A conflict resolved by a regulator before either party could file suit",
            ],
            correctIndex: 0,
            explanation:
              "That is why the Weems episode is taught for its posture, an assertion of ownership publicly declined defence, rather than for an outcome.",
            sourceLessonSlug: "weems-and-the-contract",
          },
          {
            prompt: "What is appropriation, as this lesson uses the term?",
            options: [
              "Making new work from existing images",
              "A museum's formal taking of an object into its permanent collection",
              "The transfer of copyright from a photographer to a commissioning institution",
              "The seizure of cultural property by a state from a private owner",
            ],
            correctIndex: 0,
            explanation:
              "It is what the series does and what the threatened claim was about, which is why copyright and fair use were the two doctrines in play.",
            sourceLessonSlug: "weems-and-the-contract",
          },
          {
            prompt: "In which year did Weems receive a MacArthur Fellowship?",
            options: [
              "2013",
              "1996, the year she completed the series discussed in this lesson",
              "2005, following her first major museum retrospective",
              "2021, in the year of the museum forum devoted to the series",
            ],
            correctIndex: 0,
            explanation:
              "The foundation announced the class of 2013 on 25 September of that year and describes her as a photographer and video installation artist.",
            sourceLessonSlug: "weems-and-the-contract",
          },
          {
            prompt: "What does Weems's series do with the 1850 commission's own vocabulary?",
            options: [
              "Puts it back on the surface where a viewer must read it",
              "Removes it entirely, so the images appear without any accompanying language",
              "Translates it into the terminology used by museums cataloguing the plates today",
              "Replaces it with the names the seven people are recorded under",
            ],
            correctIndex: 0,
            explanation:
              "Section 3 said a record made to prove a theory holds what the theory needed. The series prints those categories over the people they were assigned to.",
            sourceLessonSlug: "weems-and-the-contract",
          },
          {
            prompt: "Who is Tamara Lanier and what did she claim?",
            options: [
              "A descendant of Renty and Delia, claiming the objects",
              "An artist claiming a right to re-present the images in new work",
              "A curator claiming the museum had misattributed the plates to the wrong maker",
              "A historian claiming the right to publish the images without a licence",
            ],
            correctIndex: 0,
            explanation:
              "Where Weems claimed a right to re-present, Lanier claimed the daguerreotypes themselves, which is a different theory entirely.",
            sourceLessonSlug: "lanier-and-what-a-settlement-is-not",
          },
          {
            prompt: "In what year did Lanier file suit?",
            options: [
              "2019",
              "1995, at the same time as the dispute over the Weems series",
              "2022, the year the Supreme Judicial Court issued its decision",
              "2025, immediately before the settlement was announced",
            ],
            correctIndex: 0,
            explanation:
              "The case ran from that filing to the 2022 decision and the 2025 settlement.",
            sourceLessonSlug: "lanier-and-what-a-settlement-is-not",
          },
          {
            prompt: "Which court decided the case in 2022, and on what date?",
            options: [
              "The Massachusetts Supreme Judicial Court, 23 June 2022",
              "The United States Supreme Court, 23 June 2022, on a writ of certiorari",
              "The Massachusetts Superior Court, 5 March 2022, at first instance",
              "The First Circuit Court of Appeals, 1 November 2022",
            ],
            correctIndex: 0,
            explanation:
              "The docket number is SJC-13138, and naming the court and date is part of describing a legal matter accurately.",
            sourceLessonSlug: "lanier-and-what-a-settlement-is-not",
          },
          {
            prompt: "What did the court hold about a descendant's property right in a daguerreotype?",
            options: [
              "A descendant would not inherit any property right to it",
              "A descendant inherits a limited right of access but not of possession",
              "A descendant inherits full title where descent can be proved by documents",
              "The question was left open for a later case to decide on fuller evidence",
            ],
            correctIndex: 0,
            explanation:
              "The opinion states it directly, and the possession claims were dismissed on that basis.",
            sourceLessonSlug: "lanier-and-what-a-settlement-is-not",
          },
          {
            prompt: "Which claim survived the 2022 decision?",
            options: [
              "Negligent infliction of emotional distress",
              "Conversion of the plates, which the court allowed to proceed to trial",
              "Breach of an implied contract between the museum and the descendants",
              "Unjust enrichment, based on the university's licensing revenue",
            ],
            correctIndex: 0,
            explanation:
              "The court vacated its dismissal and remanded so the complaint could be amended to allege reckless infliction as well.",
            sourceLessonSlug: "lanier-and-what-a-settlement-is-not",
          },
          {
            prompt: "What is a remand?",
            options: [
              "A higher court's return of a case for further proceedings",
              "A court's final disposal of a case without any possibility of appeal",
              "A transfer of a case from a state court to a federal one",
              "An order requiring a party to produce documents before trial",
            ],
            correctIndex: 0,
            explanation:
              "That is what happened to the surviving claim, which means it was allowed to continue rather than being decided.",
            sourceLessonSlug: "lanier-and-what-a-settlement-is-not",
          },
          {
            prompt: "In what month and year did the parties settle?",
            options: [
              "May 2025",
              "June 2022, at the same time as the Supreme Judicial Court's decision",
              "December 2019, shortly after the case was first filed",
              "March 2026, when the images were first shown to the public",
            ],
            correctIndex: 0,
            explanation:
              "Reporting from 28 May 2025 records the agreement and the plan to transfer the plates.",
            sourceLessonSlug: "lanier-and-what-a-settlement-is-not",
          },
          {
            prompt: "To which institution did Harvard agree to transfer the daguerreotypes?",
            options: [
              "The International African American Museum, in Charleston",
              "The Smithsonian National Museum of African American History and Culture",
              "The Studio Museum in Harlem, in New York City",
              "The Carnegie Museum of Art, in Pittsburgh",
            ],
            correctIndex: 0,
            explanation:
              "The museum is in Charleston, South Carolina, which is the state where the images were made in 1850.",
            sourceLessonSlug: "lanier-and-what-a-settlement-is-not",
          },
          {
            prompt: "How many daguerreotypes were involved in the transfer?",
            options: [
              "Fifteen",
              "Two, being the images of Renty and Delia only",
              "Seven, one for each person depicted in the set",
              "Four, the number the court identified as being at issue in the suit",
            ],
            correctIndex: 0,
            explanation:
              "Fifteen plates survive and they depict seven people, which is the distinction the course keeps returning to.",
            sourceLessonSlug: "lanier-and-what-a-settlement-is-not",
          },
          {
            prompt: "Why does this course print no financial figure for the settlement?",
            options: [
              "The terms were not disclosed",
              "Because settlements in Massachusetts are sealed by statute in all cases",
              "Because the figure was disclosed but is disputed between the parties",
              "Because no money changed hands and there is no figure to print",
            ],
            correctIndex: 0,
            explanation:
              "Reporting noted an undisclosed financial component, and an undisclosed figure is one no account may ever supply.",
            sourceLessonSlug: "lanier-and-what-a-settlement-is-not",
          },
          {
            prompt: "Did a court order Harvard to transfer the plates?",
            options: [
              "No",
              "Yes, in the 2022 decision, which the university complied with three years later",
              "Yes, on remand, after the emotional distress claim was tried",
              "Yes, by consent decree entered at the time of the settlement",
            ],
            correctIndex: 0,
            explanation:
              "The transfer came from an agreement between the parties. The only ruling on the property question went against the claim.",
            sourceLessonSlug: "lanier-and-what-a-settlement-is-not",
          },
          {
            prompt: "What was Harvard's stated position at the time of the settlement?",
            options: [
              "That it had long been eager to place the plates elsewhere",
              "That it accepted Lanier's descent from Renty and Delia as proved",
              "That the 2022 decision had settled the ownership question in Lanier's favour",
              "That it would not comment on the terms or the reasons for the agreement",
            ],
            correctIndex: 0,
            explanation:
              "Harvard also said it had not confirmed her claimed descent, and the course reports both that and Lanier's own statement.",
            sourceLessonSlug: "lanier-and-what-a-settlement-is-not",
          },
          {
            prompt: "How did Lanier describe the outcome?",
            options: [
              "As a victory for reparations",
              "As a partial result that left the central legal question undecided",
              "As a defeat, because the court had ruled against her property claim",
              "As a matter she would not comment on while the case remained open",
            ],
            correctIndex: 0,
            explanation:
              "Both positions are on the public record, and this course reports both without choosing between them.",
            sourceLessonSlug: "lanier-and-what-a-settlement-is-not",
          },
          {
            prompt: "What is the difference between a settlement and a judgment?",
            options: [
              "A settlement is an agreement; a judgment is a ruling",
              "A settlement is confidential; a judgment is always published in full",
              "A settlement is reached before filing; a judgment is reached after trial",
              "A settlement binds only the parties; a judgment binds the whole industry",
            ],
            correctIndex: 0,
            explanation:
              "A judgment creates a rule others can rely on. A settlement establishes nothing about the law, which is why the distinction is load-bearing here.",
            sourceLessonSlug: "lanier-and-what-a-settlement-is-not",
          },
          {
            prompt: "What legal rule would a learner be repeating wrongly if they said the family won the images back?",
            options: [
              "That a descendant owns a photograph of an ancestor",
              "That a museum must return any object acquired before the twentieth century",
              "That emotional distress claims can transfer title to disputed property",
              "That a settlement has the same precedential force as a judgment",
            ],
            correctIndex: 0,
            explanation:
              "The court said the opposite, and Harvard settled around that ruling rather than being overturned by one.",
            sourceLessonSlug: "lanier-and-what-a-settlement-is-not",
          },
          {
            prompt: "What is procedural posture?",
            options: [
              "Where a dispute stands in the process",
              "The formal manner in which lawyers address a court during a hearing",
              "The sequence in which claims are listed in a complaint",
              "The strength of the evidence a party has assembled before trial",
            ],
            correctIndex: 0,
            explanation:
              "Filed, dismissed, settled or decided is the accurate way to describe a live legal matter, and it is what this section teaches instead of who was right.",
            sourceLessonSlug: "lanier-and-what-a-settlement-is-not",
          },
          {
            prompt: "How do the two claims in this section differ?",
            options: [
              "One claimed a right to re-present, the other to repossess",
              "One was brought by an artist and the other by a museum curator",
              "One concerned copyright and the other concerned defamation",
              "One was brought in the 1990s and the other has not yet been filed",
            ],
            correctIndex: 0,
            explanation:
              "Two claimants, two theories, one archive, and the outcomes have to be kept apart or the whole story collapses into a rule that does not exist.",
            sourceLessonSlug: "lanier-and-what-a-settlement-is-not",
          },
          {
            prompt: "Which claimant was threatened with suit but never sued?",
            options: [
              "Carrie Mae Weems",
              "Tamara Lanier, whose case Harvard declined to defend on the merits",
              "Both of them, since Harvard avoided litigation in each instance",
              "Neither of them, since both disputes reached a court decision",
            ],
            correctIndex: 0,
            explanation:
              "Lanier sued Harvard. Weems was threatened by Harvard, invited it to file, and no case followed.",
            sourceLessonSlug: "weems-and-the-contract",
          },
          {
            prompt: "Which claimant obtained the objects, and how?",
            options: [
              "Lanier, by settlement rather than by judgment",
              "Weems, by purchase from the museum after the threat was withdrawn",
              "Lanier, by court order following the 2022 decision on her claims",
              "Neither, since the plates remain at the Peabody Museum today",
            ],
            correctIndex: 0,
            explanation:
              "She lost the property question in 2022 and obtained the objects anyway through the 2025 agreement, which is the pairing's whole point.",
            sourceLessonSlug: "lanier-and-what-a-settlement-is-not",
          },
          {
            prompt: "What does the section mean by saying the objects moved and the rule did not?",
            options: [
              "The plates changed hands without any legal principle changing",
              "The plates were relocated within Harvard while remaining in its ownership",
              "The rule changed but the plates stayed where they were until 2026",
              "Both the plates and the governing legal rule changed at the same moment",
            ],
            correctIndex: 0,
            explanation:
              "No judicial statement supports the proposition most people believe this story establishes, and the transfer came from agreement.",
            sourceLessonSlug: "lanier-and-what-a-settlement-is-not",
          },
          {
            prompt: "Why does this course describe legal matters by posture rather than by who was right?",
            options: [
              "Because posture is what the documents actually establish",
              "Because the parties have asked that no characterisation be published",
              "Because courts prohibit the discussion of settled cases in teaching materials",
              "Because the outcomes are too recent for any assessment to be fair",
            ],
            correctIndex: 0,
            explanation:
              "Filed, dismissed, settled and transferred are checkable facts. Vindication is a characterisation the record does not contain.",
            sourceLessonSlug: "lanier-and-what-a-settlement-is-not",
          },
          {
            prompt: "What does the fact that Harvard purchased the Weems works for its art museum illustrate?",
            options: [
              "An institution can assert a claim and collect the work as well",
              "That the museum accepted the works were lawfully made under fair use",
              "That the university had abandoned any claim to the underlying daguerreotypes",
              "That the artist had assigned her copyright to the university in settlement",
            ],
            correctIndex: 0,
            explanation:
              "It demanded payment on sales and bought the images, an outcome Weems herself described as confusing.",
            sourceLessonSlug: "weems-and-the-contract",
          },
          {
            prompt: "Which is a judgment rather than an agreement?",
            options: [
              "The 2022 dismissal of the possession claims",
              "The 2025 transfer of the plates to a museum in Charleston",
              "Harvard's purchase of the Weems works for its art museum",
              "Harvard's demand for payment on each sale of a Weems work",
            ],
            correctIndex: 0,
            explanation:
              "A court ruled on the property question. Everything else in this section was negotiated between parties.",
            sourceLessonSlug: "lanier-and-what-a-settlement-is-not",
          },
          {
            prompt: "What is fair use?",
            options: [
              "A doctrine permitting some unlicensed use of protected work",
              "A rule requiring museums to grant access to any researcher who applies",
              "A statutory licence that fixes the fee payable for reproducing an archive image",
              "A defence available only to non-profit institutions and educational publishers",
            ],
            correctIndex: 0,
            explanation:
              "The law-review account raises it as the second unresolved question: if Harvard owned the copyrights, did the doctrine permit what Weems did?",
            sourceLessonSlug: "weems-and-the-contract",
          },
          {
            prompt: "Which of these is on the record as Harvard's position at the settlement?",
            options: [
              "That it had not confirmed Lanier's claimed descent",
              "That it accepted the 2022 ruling had been wrongly decided",
              "That it had never asserted ownership of the plates at any time",
              "That it would pay a disclosed sum to the claimant and the museum",
            ],
            correctIndex: 0,
            explanation:
              "It said that while also saying it had long been eager to place the plates with another museum, and both statements are reported here.",
            sourceLessonSlug: "lanier-and-what-a-settlement-is-not",
          },
          {
            prompt: "Why does the course teach these two disputes as a pair?",
            options: [
              "One archive, two theories, two different outcomes",
              "Because the same lawyers represented both claimants against the university",
              "Because the two claimants worked together to bring pressure on the museum",
              "Because both disputes were decided by the same court in the same decade",
            ],
            correctIndex: 0,
            explanation:
              "Together they show that the objects can move without any rule being established, which is the distinction popular accounts drop.",
            sourceLessonSlug: "weems-and-the-contract",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // FINAL ASSESSMENT — pools 40, serves 10, placed last
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "who-made-the-record-final",
      title: "Final assessment · Who made the record",
      section: "Final assessment",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 10,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is the organizing question of this course?",
            options: [
              "Who made the record, and whom did the record serve",
              "Which photographers of the last two centuries have been unjustly forgotten by museums",
              "How photographic technology changed the way ordinary people were able to see themselves",
              "Whether photographs should be treated as reliable evidence about the past at all",
            ],
            correctIndex: 0,
            explanation:
              "Every subject in the course is attached to one mechanism and used to answer that question, which is what keeps it from becoming a survey.",
            sourceLessonSlug: "a-record-is-made-not-found",
          },
          {
            prompt: "Which four decisions does the course follow through the paperwork?",
            options: [
              "Commission, frame, caption, custody",
              "Exposure, development, printing and mounting, the four stages of making a print",
              "Discovery, cataloguing, conservation and exhibition, the four stages of museum work",
              "Purchase, insurance, valuation and sale, the four stages of an object's market life",
            ],
            correctIndex: 0,
            explanation:
              "Each of the four is a decision somebody made and somebody wrote down, which is why the record is readable at all.",
            sourceLessonSlug: "a-record-is-made-not-found",
          },
          {
            prompt: "Why is Douglass the only subject in this course who theorised the record first?",
            options: [
              "He argued in public about what pictures do before making his own",
              "He was the only subject who left any written statement about his working methods",
              "He was the only subject whose work was collected during his own lifetime",
              "He was the only subject who could control the caption attached to his portraits",
            ],
            correctIndex: 0,
            explanation:
              "The 1861 lecture makes an argument about access and about influence, and the sittings follow it rather than preceding it.",
            sourceLessonSlug: "a-record-is-made-not-found",
          },
          {
            prompt: "How should a superlative be held, according to this course?",
            options: [
              "With the counter, the count and the date attached",
              "With scepticism, since claims of this kind are rarely supported by evidence",
              "As settled once two independent publications have repeated it in print",
              "As a matter of interpretation on which reasonable people will always differ",
            ],
            correctIndex: 0,
            explanation:
              "The most-photographed-American claim answers all three questions once you attach Stauffer, Trodd and Bernier's 2015 book and its count of 160.",
            sourceLessonSlug: "sitting-on-purpose",
          },
          {
            prompt: "How many photographs of Douglass does the 2015 book collect?",
            options: [
              "160",
              "175, one for each year since the earliest of the sittings it reproduces",
              "60, being the portraits held in public American collections",
              "1,600, including every reproduction traced in the periodical press",
            ],
            correctIndex: 0,
            explanation:
              "That count is what the most-photographed claim rests on, and it is why the claim is falsifiable rather than decorative.",
            sourceLessonSlug: "sitting-on-purpose",
          },
          {
            prompt: "What makes Douglass's refusal to smile evidence of strategy?",
            options: [
              "It repeats across decades and many photographers",
              "He explained the decision in writing in each of his three autobiographies",
              "Photographers of the period recorded their sitters' instructions in studio ledgers",
              "The pose was unusual enough that newspapers commented on it at the time",
            ],
            correctIndex: 0,
            explanation:
              "A record cannot hold what a subject felt. It can hold what a subject did over and over, which is what supports the inference.",
            sourceLessonSlug: "sitting-on-purpose",
          },
          {
            prompt: "What was a Shirley card used for?",
            options: [
              "Calibrating colour printing in photographic laboratories",
              "Recording a customer's order details when film was left for developing",
              "Testing whether a lens rendered fine detail evenly across the frame",
              "Certifying that a laboratory met the manufacturer's quality standards",
            ],
            correctIndex: 0,
            explanation:
              "The operator printed until the card looked right and then ran customer film through those settings, which is what makes it a calibration standard.",
            sourceLessonSlug: "what-a-reference-card-does",
          },
          {
            prompt: "What did the models on the Shirley cards have in common?",
            options: [
              "They were all white",
              "They were all photographed by the same Kodak staff photographer in Rochester",
              "They were all named Shirley, which is where the object's name comes from",
              "They all wore the same three garments, chosen to test the primary dyes",
            ],
            correctIndex: 0,
            explanation:
              "So the reference the entire printing pipeline was tuned against was a light-skinned face, decade after decade.",
            sourceLessonSlug: "what-a-reference-card-does",
          },
          {
            prompt: "What is a default, as this course uses the word?",
            options: [
              "A choice installed upstream that then takes effect unchosen",
              "A setting a manufacturer recommends but which any operator may change at will",
              "An outcome that occurs when a machine is operated without proper training",
              "A standard agreed between competing firms to make their products compatible",
            ],
            correctIndex: 0,
            explanation:
              "Nobody has to make the decision again, which is exactly what makes it powerful and what makes it stop looking like a decision.",
            sourceLessonSlug: "what-a-reference-card-does",
          },
          {
            prompt: "Who wrote the scholarly account of the Shirley card that this course cites?",
            options: [
              "Lorna Roth",
              "Earl Kage, drawing on his years running Kodak's research studios",
              "Brian Wallis, in the journal American Art",
              "Zoe Trodd, in a study of photographic standards and race",
            ],
            correctIndex: 0,
            explanation:
              "Her article appeared in the Canadian Journal of Communication, volume 34, issue 1, 2009, pages 111 to 136.",
            sourceLessonSlug: "who-actually-moved-kodak",
          },
          {
            prompt: "What does the reporting say actually moved Kodak to change its emulsions?",
            options: [
              "Two commercial clients whose dark products were not rendering",
              "A federal inquiry into whether consumer film discriminated against some customers",
              "A boycott organised by professional portrait photographers during the 1970s",
              "The introduction of a rival emulsion with a demonstrably wider dynamic range",
            ],
            correctIndex: 0,
            explanation:
              "A chocolate company and a furniture company, rather than complaints about how photographs of people printed.",
            sourceLessonSlug: "who-actually-moved-kodak",
          },
          {
            prompt: "What did this course confirm about Roth's article, and by what means?",
            options: [
              "Its citation and DOI, through the Crossref registry",
              "Its full text, downloaded from the journal's public archive during research",
              "Its findings, by correspondence with the author at Concordia University",
              "Its accuracy, by comparison with Kodak's own published corporate history",
            ],
            correctIndex: 0,
            explanation:
              "The article text was behind a wall that refused automated access, so the chocolate and furniture material is credited to the podcast that interviewed her.",
            sourceLessonSlug: "who-actually-moved-kodak",
          },
          {
            prompt: "In what year and place were the Zealy daguerreotypes made?",
            options: [
              "1850, in Columbia, South Carolina",
              "1850, in Cambridge, Massachusetts, at the museum that later held them",
              "1876, in Columbia, South Carolina, when they were first catalogued",
              "1859, in Charleston, South Carolina, the year Darwin's book appeared",
            ],
            correctIndex: 0,
            explanation:
              "Fifteen plates survive from that commission, and they depict seven people.",
            sourceLessonSlug: "the-1850-commission",
          },
          {
            prompt: "Who commissioned those images and for what stated purpose?",
            options: [
              "Louis Agassiz, as visual evidence for polygenism",
              "The Peabody Museum, as a systematic record of its anthropological holdings",
              "Robert Gibbes, as a private record of the people held on plantations he knew",
              "Joseph Zealy, as a commercial portfolio to attract portrait clients in Columbia",
            ],
            correctIndex: 0,
            explanation:
              "Polygenism is the discredited theory that human races were separately created, and Agassiz was a public proponent of it.",
            sourceLessonSlug: "the-1850-commission",
          },
          {
            prompt: "Why does this course name the seven people but not describe the photographs?",
            options: [
              "Describing them would repeat what the commission set out to do",
              "Because no adequate description of the plates has been published anywhere",
              "Because the museum holding them prohibits any written description of their contents",
              "Because the course's argument depends entirely on documents rather than on images",
            ],
            correctIndex: 0,
            explanation:
              "The pictures were made to strip the seven of standing, and the course's question needs the paperwork rather than the picture.",
            sourceLessonSlug: "the-1850-commission",
          },
          {
            prompt: "What kind of name does the 1850 record carry for each of the seven?",
            options: [
              "An inventory entry written by the parties who arranged the sittings",
              "A self-description each person supplied to the photographer at the sitting",
              "A scientific designation assigned by Agassiz to fit his classification",
              "A baptismal name taken from parish registers held in Columbia",
            ],
            correctIndex: 0,
            explanation:
              "It is enough identification to tell one person from another, recorded by a party with an interest in telling them apart.",
            sourceLessonSlug: "named-and-not-known",
          },
          {
            prompt: "What have scholars been unable to recover about the seven?",
            options: [
              "Their surnames, and most of what happened to them afterwards",
              "Their first names, which the record does not preserve for any of them",
              "The year the photographs were made, which remains approximate",
              "Whether any of them were related to one another in any way",
            ],
            correctIndex: 0,
            explanation:
              "Historians reporting the recovery work note, for example, that it is not known whether Drana escaped or was sold.",
            sourceLessonSlug: "named-and-not-known",
          },
          {
            prompt: "What does the course say a record's silences tell you?",
            options: [
              "They follow the purpose the record was built to serve",
              "They indicate that documents have been lost or deliberately destroyed",
              "They show the cataloguer was working too quickly to be thorough",
              "They are evidence of nothing, since absence cannot be interpreted",
            ],
            correctIndex: 0,
            explanation:
              "A record made to prove a theory captures what the theory needed and nothing else, so you can read the question off what is missing.",
            sourceLessonSlug: "named-and-not-known",
          },
          {
            prompt: "Which agency was Gordon Parks working for when he photographed Ella Watson?",
            options: [
              "The Farm Security Administration",
              "The Office of War Information, which he joined in 1944",
              "Life magazine, which had sent him to Washington on assignment",
              "The Standard Oil photographic documentary project",
            ],
            correctIndex: 0,
            explanation:
              "Roy Stryker ran its photographic section, which was building a picture file to argue for a set of policies.",
            sourceLessonSlug: "a-caption-that-carries-a-name",
          },
          {
            prompt: "What is the contrast between the Watson caption and the 1850 labels?",
            options: [
              "One recorded a person; the other recorded an item",
              "One was written by the photographer and the other by a museum cataloguer",
              "One was written in the twentieth century and the other in the nineteenth",
              "One has survived intact while the other was lost before 1976",
            ],
            correctIndex: 0,
            explanation:
              "Two captions doing opposite work is the section's whole point, and a caption is a decision about what will be remembered.",
            sourceLessonSlug: "a-caption-that-carries-a-name",
          },
          {
            prompt: "Which limit does the Ella Watson lesson state about its own evidence?",
            options: [
              "The Library of Congress catalogue could not be retrieved",
              "No source could confirm which agency Parks was working for in 1942",
              "The photographs themselves are no longer held in any public collection",
              "The subject's name is disputed between two published accounts",
            ],
            correctIndex: 0,
            explanation:
              "So the lesson quotes no caption verbatim, prints no call number, and invites the learner to close the gap in five minutes.",
            sourceLessonSlug: "a-caption-that-carries-a-name",
          },
          {
            prompt: "What did the Carnegie Museum of Art buy in 2001?",
            options: [
              "The Teenie Harris negatives and all rights, from his family",
              "Exhibition prints of the Teenie Harris photographs, from a private collector",
              "The archive of the Pittsburgh Courier, including its photographic files",
              "A licence to reproduce the Harris photographs for a period of twenty years",
            ],
            correctIndex: 0,
            explanation:
              "Buying the rights along with the objects is what allows the museum to catalogue, publish and license the archive.",
            sourceLessonSlug: "attributed-to-and-what-it-admits",
          },
          {
            prompt: "What does the credit line \"American, 20th century\" record in that archive?",
            options: [
              "That the photographer is unknown",
              "That the photograph was taken outside Pennsylvania",
              "That the item is a print rather than an original negative",
              "That the work is probably but not certainly by Harris",
            ],
            correctIndex: 0,
            explanation:
              "Probable authorship is recorded instead as attributed to Charles Teenie Harris, which is the step above it in the museum's own vocabulary.",
            sourceLessonSlug: "attributed-to-and-what-it-admits",
          },
          {
            prompt: "Why does the course call the Carnegie's cataloguing the opposite of every incentive?",
            options: [
              "A famous name raises an item's standing and the museum gives it up",
              "Because detailed cataloguing costs more than the archive was purchased for",
              "Because visitors are known to prefer collections that admit no uncertainty",
              "Because the family required the museum to under-claim as a condition of sale",
            ],
            correctIndex: 0,
            explanation:
              "It declines to claim more than it can support, item by item, exactly where a claim would be most valuable to it.",
            sourceLessonSlug: "attributed-to-and-what-it-admits",
          },
          {
            prompt: "Which years appear in print for Ming Smith's MoMA acquisition?",
            options: [
              "1975, 1978 and 1979",
              "1968, 1971 and 1974, spanning her earliest years in New York",
              "1979 and 1980 only, differing by a single year between two accounts",
              "1982, 1983 and 1985, all after the founding of the collective",
            ],
            correctIndex: 0,
            explanation:
              "Three published years for one event with one correct answer, sitting in one accession record nobody in this course has read.",
            sourceLessonSlug: "when-the-records-own-record-disagrees",
          },
          {
            prompt: "What does a museum acquisition NOT do by itself?",
            options: [
              "Exhibit the work, pay the artist, or produce scholarship about it",
              "Create a catalogue record that later researchers can find and cite",
              "Assign the work an insurance value within the institution",
              "Give the work a permanent home in the collection",
            ],
            correctIndex: 0,
            explanation:
              "That is how the same artist can be in a great collection and under-shown for decades without any contradiction.",
            sourceLessonSlug: "when-the-records-own-record-disagrees",
          },
          {
            prompt: "What kind of evidence supports the claim that Ming Smith was the only woman in Kamoinge at the time?",
            options: [
              "Two institutional accounts agreeing",
              "A membership roll consulted directly for this course",
              "A statement the artist made in a published interview",
              "Minutes of the collective's founding meeting in 1963",
            ],
            correctIndex: 0,
            explanation:
              "Agreement between accounts is stronger than a single source and still not a primary document, and the course says which it has.",
            sourceLessonSlug: "when-the-records-own-record-disagrees",
          },
          {
            prompt: "How many photographs from the 1948 Harlem essay did LIFE publish?",
            options: [
              "Twenty-one",
              "Two hundred and ten, filling the greater part of a single issue",
              "Four, printed across a double-page spread with extended captions",
              "One hundred, selected by the photographer himself before submission",
            ],
            correctIndex: 0,
            explanation:
              "Parks made hundreds over four weeks, and the editors chose twenty-one, which is what the reader of that issue received.",
            sourceLessonSlug: "the-editors-cut",
          },
          {
            prompt: "Which five powers does an editor hold over a commissioned photo story?",
            options: [
              "Selection, sequence, cropping, captioning and layout",
              "Exposure, development, printing, mounting and framing",
              "Commissioning, funding, scheduling, publishing and archiving",
              "Discovery, acquisition, conservation, cataloguing and display",
            ],
            correctIndex: 0,
            explanation:
              "None of the five belongs to the photographer in a commissioned magazine story, and all five change the meaning of the same negatives.",
            sourceLessonSlug: "the-editors-cut",
          },
          {
            prompt: "What did the 1948 essay lead to for Parks?",
            options: [
              "A staff position offered by picture editor Wilson Hicks",
              "A fellowship that funded three further years of independent work",
              "An exhibition at a New York museum in the following year",
              "A contract with a book publisher for a volume of Harlem photographs",
            ],
            correctIndex: 0,
            explanation:
              "The appointment made him the first African American staff photographer at the magazine, so the arrangement worked and the lesson still holds.",
            sourceLessonSlug: "the-editors-cut",
          },
          {
            prompt: "What did DeCarava receive in 1952?",
            options: [
              "A Guggenheim Fellowship",
              "A commission from a federal photographic section",
              "A staff position at a national picture magazine",
              "The directorship of a Harlem photographers' collective",
            ],
            correctIndex: 0,
            explanation:
              "He was the first African American photographer to receive one, and a fellowship specifies no deliverable, unlike a commission.",
            sourceLessonSlug: "when-nobody-pays",
          },
          {
            prompt: "Which claim about DeCarava does this course explicitly decline to teach?",
            options: [
              "That he resisted labs correcting prints toward lighter skin",
              "That his prints concentrate in the darker part of the tonal scale",
              "That he made a 1955 book with Langston Hughes outside the commission system",
              "That he received the first Guggenheim Fellowship awarded to a Black photographer",
            ],
            correctIndex: 0,
            explanation:
              "The course looked for documentation and did not find it, and joining it to the Shirley card material would manufacture a confrontation.",
            sourceLessonSlug: "when-nobody-pays",
          },
          {
            prompt: "What is a manufactured confrontation?",
            options: [
              "Two true facts joined into a scene no evidence supports",
              "A dispute a publication invents in order to generate readership",
              "A disagreement between scholars over how to read one document",
              "A legal threat made without any intention of following through",
            ],
            correctIndex: 0,
            explanation:
              "It is a fabrication even when both halves check out, which is why the course refuses it where it would be convenient.",
            sourceLessonSlug: "when-nobody-pays",
          },
          {
            prompt: "When and where was \"Naturally '62\" staged?",
            options: [
              "28 January 1962, at the Purple Manor in Harlem",
              "1 November 1962, at the Apollo Theater in Harlem",
              "28 January 1956, at the founding of the organisation that produced it",
              "4 July 1963, at a hall in Brooklyn lent for the occasion",
            ],
            correctIndex: 0,
            explanation:
              "The crowd was large enough that the show ran twice the same evening, which is a production fact rather than a legend.",
            sourceLessonSlug: "when-a-movement-pays",
          },
          {
            prompt: "What does the course mean by saying Black Is Beautiful was produced?",
            options: [
              "It had an organisation, a troupe, a venue and a photographer",
              "It was funded by a national foundation that commissioned the photographs",
              "It was created by an advertising agency working for a cosmetics company",
              "It was announced at a press conference and spread through the newspapers",
            ],
            correctIndex: 0,
            explanation:
              "AJASS was founded in 1956, the Grandassa Models in 1962, and the show had a named venue and a repeat performance.",
            sourceLessonSlug: "when-a-movement-pays",
          },
          {
            prompt: "How does a movement's payment differ from a magazine's?",
            options: [
              "It supplies the argument and asks for it to be made visible",
              "It pays a higher fee because the work carries political importance",
              "It takes the five editorial powers and exercises them more strictly",
              "It provides no funding at all, so the arrangement matches a fellowship",
            ],
            correctIndex: 0,
            explanation:
              "Nobody is being cut and nobody is working alone, so the credit question becomes who is remembered as the author.",
            sourceLessonSlug: "when-a-movement-pays",
          },
          {
            prompt: "What did Weems do that Harvard called a breach of contract?",
            options: [
              "Used Peabody images after promising not to without permission",
              "Sold prints of museum-owned works without paying the agreed royalty",
              "Entered a restricted storage area without a curator present",
              "Published a catalogue reproducing the plates without a licence",
            ],
            correctIndex: 0,
            explanation:
              "The other asserted ground was copyright infringement in the daguerreotypes themselves.",
            sourceLessonSlug: "weems-and-the-contract",
          },
          {
            prompt: "What was the outcome of Harvard's threat against Weems?",
            options: [
              "No suit was filed",
              "A suit was filed and dismissed on fair-use grounds before trial",
              "A suit was filed and settled confidentially before any hearing",
              "A suit was filed and a jury found for the university on the contract claim",
            ],
            correctIndex: 0,
            explanation:
              "She invited Harvard to argue it in court, Harvard declined, and it then demanded payment on sales and bought the images for its art museum.",
            sourceLessonSlug: "weems-and-the-contract",
          },
          {
            prompt: "What did the Massachusetts Supreme Judicial Court hold in 2022?",
            options: [
              "That a descendant inherits no property right to the daguerreotype",
              "That Harvard must return the daguerreotypes to the plaintiff within a year",
              "That the plaintiff's descent from Renty and Delia had been sufficiently proved",
              "That the museum's ownership of the plates could not be determined on the record",
            ],
            correctIndex: 0,
            explanation:
              "The possession claims were dismissed, and what survived was the emotional distress claim, which concerns treatment rather than ownership.",
            sourceLessonSlug: "lanier-and-what-a-settlement-is-not",
          },
          {
            prompt: "Why is it wrong to say the Lanier case established that a family owns images of an ancestor?",
            options: [
              "The transfer came from a settlement, and the ruling went the other way",
              "Because the case was withdrawn before any court could rule on the question",
              "Because the ruling applies only in Massachusetts and binds no other state",
              "Because the images were transferred to a museum rather than to the family",
            ],
            correctIndex: 0,
            explanation:
              "A settlement is an agreement and establishes nothing about the law. The only ruling on the property question was against the claim.",
            sourceLessonSlug: "lanier-and-what-a-settlement-is-not",
          },
        ],
      },
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// AUTHORING REPORT (2026-09-08). Read this before editing anything above.
// ─────────────────────────────────────────────────────────────────────────────
//
// SLUG ASSUMED: `who-made-the-record`, the slug the series plan gives CREDIT-R1
// (plans/future-courses/2026-08-25-07-photography-series-plan.md). Category: Culture & History.
// Series: `credit`, track "R · The record", position R1, seriesOrder 3. Prerequisite:
// `who-gets-named` (CREDIT-00), whose vocabulary (format cap, contested claim, gap as evidence)
// this course assumes and never re-teaches. Every `sourceLessonSlug` above is course-internal, so
// a different registered slug changes nothing in this file.
//
// SHAPE: 21 lessons = 14 teaching + 6 section quizzes + 1 final, final placed LAST.
//   Section 1 · A record is made, not found                 2 lessons  1630 words  6 reveals  pool 44 (target 47)
//   Section 2 · The instrument was not neutral              2 lessons  1572 words  6 reveals  pool 44 (target 45)
//   Section 3 · Records made about people                   2 lessons  1633 words  6 reveals  pool 46 (target 47)
//   Section 4 · The caption, and the credit line            3 lessons  2148 words  9 reveals  pool 56 (target 61)
//   Section 5 · Who paid, and what the payer wanted         3 lessons  1914 words  9 reveals  pool 52 (target 55)
//   Section 6 · Two claims on one archive                   2 lessons  1520 words  6 reveals  pool 40 (target 43)
//   Final assessment                                                                          pool 40 serving 10
// 322 questions total, all carrying `explanation` + `sourceLessonSlug`; 0 orphan sources, 0
// unsourced questions, 0 lessons assessed only in the final. Every pool clears target * 0.9, so
// `pnpm audit:course who-made-the-record --spec` should report no findings once the slug is
// registered. check-longest-option scores 0-4% per bank against a 60% limit; check-assessment-fit
// and check-reveals report nothing; every quiz shuffles and passes at 80.
//
// VERIFIED THIS SESSION, and how. Only these identifiers are printed.
//  - Lanier v. President and Fellows of Harvard College, docket SJC-13138, decided 23 June 2022:
//    FETCHED caselaw.findlaw.com, which supplied the caption, the docket, the date, the quoted
//    holding that a descendant "would not therefore inherit any property right", and the vacatur
//    and remand of the negligent-infliction claim. The reporter citation 490 Mass. 37 appeared only
//    in search-result titles for Justia and masscases (both 403 to fetching), so it is NOT printed:
//    the lesson cites docket, court and date instead.
//  - The 2025 settlement, the fifteen plates, Joseph T. Zealy, 1850, South Carolina, the
//    International African American Museum, the undisclosed financial component, and the absence of
//    any court order: FETCHED hyperallergic.com (Di Liscia, 2025-05-28) and wbur.org (2025-05-28),
//    including Harvard's "long eager to place" statement, its non-confirmation of Lanier's descent,
//    and Lanier's own reparations statement.
//  - Weems and the Peabody: FETCHED the Murray law-review PDF at journals.law.harvard.edu and read
//    it with PyMuPDF. It supplied the contract, both asserted grounds, Weems's verbatim reply, the
//    fact that Harvard did not sue, the later payment demand and purchase, the four overlaid texts
//    on Renty, Delia, Drana and Jack, and the two questions the non-case leaves open. Citation:
//    Unbound: Harvard Journal of the Legal Left, vol. 8, 2012-2013, article beginning at page 1.
//  - Weems's MacArthur year: FETCHED macfound.org (class of 2013, announced 2013-09-25).
//  - The seven names, and what scholars could not recover: FETCHED news.harvard.edu (Milano,
//    2021-04-12), which names Jem, Alfred, Delia, Renty, Fassena, Drana and Jack, and states that
//    surnames are unknown and that it is not known whether Drana escaped or was sold.
//  - Wallis, "Black bodies, white science", American Art 9(2), 39-61, DOI 10.1086/424243: FETCHED
//    the Crossref record.
//  - Roth (2009), CJC 34(1), 111-136, DOI 10.22230/cjc.2009v34n1a2196: FETCHED the Crossref record.
//    The ARTICLE TEXT could not be retrieved (publisher 403), so the chocolate/furniture/Earl Kage
//    material is credited in the lesson to the 99% Invisible episode (FETCHED, episode 465,
//    2021-11-08), which also supplied Shirley Page, "they were all white", and the 1950s date.
//  - Teenie Harris: FETCHED carnegieart.org, which supplied 2001, "the negatives and all rights
//    from the artist's family", "more than 70,000", the 58,970 / 14,350 / 454 breakdown, the
//    "attributed to" / "American, 20th century" / "after another photographer" practice, and the
//    Pittsburgh Courier and Flash cutline sources.
//  - Gordon Parks: FETCHED gordonparksfoundation.org (biography: Rosenwald 1942, FSA, OWI, 1948
//    essay, first African American staff photographer) and its Ella Watson archive entry (FSA, Roy
//    Stryker, "American Gothic, Washington, D.C., 1942", Grant Wood 1930, four months). FETCHED
//    time.com (Mason, 2014-09-21) for LIFE of 1 November 1948, Leonard "Red" Jackson, four weeks,
//    hundreds of frames, 21 published, and Wilson Hicks's offer. FETCHED museemagazine.com for the
//    1942 date and Parks's account of choosing the title.
//  - DeCarava: FETCHED davidzwirner.com (Light Break, 2019) for 1919-2009, the 1952 Guggenheim as
//    the first to an African American photographer, "an infinite scale of gray tonalities, 'sliding
//    into each other'", and DeCarava's own quoted words about middle and dark tones.
//  - Brathwaite: FETCHED kwamebrathwaite.com/about (1938 to 2023, AJASS 1956, Grandassa Models
//    1962) and buala.org's republication of Adesina's BBC Culture piece (28 January 1962, the
//    Purple Manor, run twice that evening, Grandassaland and Carlos Cooks, the Ebony quotation).
//  - Ming Smith and Kamoinge: FETCHED studiomuseum.org (born 1947, Columbus, Ohio; 1979 open call;
//    "the only female member") and aperture.org (Wallis, 2021-01-14; 1963 founding; "the only woman
//    in the group"; Barboza among the fourteen core members).
//  - Douglass: FETCHED unseenhistories.com (Moore, 2023-10-10) for "Lecture on Pictures", Boston,
//    3 December 1861, the "Men of all conditions" quotation and the refusal to smile; FETCHED
//    picturingblackhistory.org for "some 160 images" and the "powerful, though silent influence"
//    quotation; FETCHED publishersweekly.com for the book's title, three authors, Liveright and
//    November 2015.
//
// COULD NOT VERIFY, and what was done instead. Nothing below is printed as fact.
//  1. TREMONT TEMPLE as the venue of the 1861 lecture. Only the city was confirmed by a fetched
//     source, so the lesson says "in Boston" and prints no venue.
//  2. THE NUMBER OF DOUGLASS LECTURE TEXTS on pictures. "Four" is widely repeated; one title was
//     confirmed by a fetched source. Lesson 1 says in the open that it prints no count and why.
//  3. COMPARISON PHOTOGRAPH COUNTS for Lincoln, Whitman or Custer. Not verified, not printed, and
//     Lesson 2 says why attaching an unverified number to a verified one is a laundering move.
//  4. THE LIBRARY OF CONGRESS FSA/OWI CATALOGUE RECORDS for Ella Watson. loc.gov returned 403 to
//     every path tried, including the JSON API. So no caption is quoted verbatim and no call number
//     is printed; Lesson 7 states this limit in the body and hands the check to the learner.
//  5. MoMA's OWN RECORDS. moma.org returned 403 throughout. So: no accession number and no print
//     count for Weems's series (published counts of 28, 33 and 34 all circulate), and no acquisition
//     year for Ming Smith. Lesson 9 teaches the three-way disagreement as the exercise instead.
//  6. THE PEABODY MUSEUM's and IAAM's OWN PAGES. Both returned 403. The plate count, the seven
//     names, the commission and the transfer are therefore attributed to the sources that WERE
//     fetched (Harvard Gazette, Hyperallergic, WBUR, Murray). The IAAM display date the plan
//     mentions for March 2026 is NOT printed, because no fetched source confirmed it.
//  7. ROTH'S OWN PAGES on the chocolate and furniture finding. See above; the lesson says out loud
//     that it is reporting a podcast that interviewed her, and says a reader who finds a different
//     emphasis in the article has caught the course out.
//  8. THAT DeCARAVA RESISTED LABS correcting prints toward lighter skin. The plan marks this
//     unwritable and this pass found nothing either. Lesson 11 names the claim, refuses it, and
//     explains why joining it to the Shirley card would manufacture a confrontation.
//
// PROPOSED RESEARCH CHECKS for src/lib/research-checks.ts (I do not own that file; these are for
// whoever registers the course):
//  A. Ming Smith's MoMA acquisition year. Course claims: the Studio Museum in Harlem says 1979,
//     other published accounts say 1978 and 1975, and the course prints none as fact. Settled by:
//     MoMA's accession record for the works, giving credit line and accession number.
//  B. The number of Douglass lecture texts on pictures. Course claims: it prints no count. Settled
//     by: the Douglass Papers at the Library of Congress, or the Yale edition of the speeches.
//  C. The FSA/OWI caption wording for Ella Watson. Course claims: the record names her, but quotes
//     no caption. Settled by: the Library of Congress Prints and Photographs catalogue record,
//     giving the verbatim title and the call number.
//  D. Roth's own account of what moved Kodak. Course claims: reported by 99% Invisible, not read at
//     source. Settled by: Roth (2009), CJC 34(1), 111-136, read directly.
//  E. The print count and accession record for Weems's From Here I Saw What Happened and I Cried.
//     Course claims: nothing; 28, 33 and 34 all circulate. Settled by: MoMA's catalogue record.
//  F. Whether DeCarava resisted labs that corrected toward lighter skin. Course claims: it does not
//     teach this. Settled by: a documented statement by DeCarava or a cited scholarly account.
//  G. The venue of the 3 December 1861 lecture. Course claims: Boston only. Settled by: a primary
//     account of the Tremont Temple engagement.
//
// STANDARDS: this is a Culture & History course with real analytical content, so per the repo rule
// it should be MAPPED in src/lib/standards/ rather than BACKLOGged. The obvious hooks are
// primary-source analysis, historical-argument and visual-arts analysis. CITATIONS: add the slug to
// STAGED_COURSES in src/lib/citations.ts and run `pnpm gen:citations`. CROSS-LINKS: the plan asks
// this course to link to `archives-and-finding-aids` rather than re-teach accession vocabulary, and
// to check `rights-permissions-and-clearances` before expanding the custody material.
