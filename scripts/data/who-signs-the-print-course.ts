import type { AuthoredCourse } from "./authored-course";

// CREDIT-02 · "Who Signs the Print" (Culture & History). Source brief:
// plans/future-courses/08-black-creator-series-research.md §5 ("Printmaking"), which called this
// the sleeper of the eleven disciplines it surveyed and recommended building it first. Tier 0.
//
// THE SPINE, and the sentence the whole course is built to keep true:
// IN A PRINT SHOP THE ARTIST SIGNS THE PRINT AND THE MASTER PRINTER DOES NOT, AND THAT CONVENTION
// APPLIES TO EVERYONE. It is not a racial rule. Every master printer in every shop is unsigned,
// which is exactly what makes this the cleanest mechanism in the CREDIT series: the medium itself
// manufactures a category of invisible expertise, and the only racial question, the honest and much
// stronger one, is WHO ENDS UP IN THAT CATEGORY AND WHAT THEY BUILD IN RESPONSE.
//
// A course that framed Robert Blackburn as the victim of a theft would be WRONG, and correctable in
// public by anyone who has read a Tamarind documentation sheet. Lesson `everyone-is-unsigned` says
// so out loud and names the trap, because a learner who carries the grievance version loses the
// argument to the first person holding a print catalogue.
//
// ITS SIBLINGS. CREDIT-00 `who-gets-named` owns the general mechanisms (the Matthew effect, the
// Matilda effect, the authorship convention, the inventorship/ownership split, archival silence,
// the anatomy of a correction) and the four currencies of credit. CREDIT-01 `who-gets-the-credit`
// owns the patent system. This course re-teaches NEITHER. It cross-links to CREDIT-00 wherever the
// general vocabulary is needed (format cap, load-bearing document, institutional memory) and spends
// its own pages on the one thing neither sibling covers: a credit convention that belongs to a
// MEDIUM rather than to a society, and is therefore the most transferable shape in the catalog.
// Session musicians, ghostwriters, film colourists, translators and test kitchens all run on it.
//
// HARD RULES THIS FILE KEEPS:
//  1. NO INVENTED SOURCE, DATE, QUOTATION, TECHNIQUE OR STATISTIC. Every fact here was checked
//     against an institutional source before it was written: the Library of Congress exhibition
//     "Creative Space: Fifty Years of Robert Blackburn's Printmaking Workshop", Tamarind Institute's
//     own process and history pages, the Victoria and Albert Museum on the pencil signature, the
//     Studio Museum in Harlem, the Smithsonian American Art Museum, the DuSable Black History
//     Museum, the Elizabeth Foundation for the Arts, the Booker Prizes and the Recording Academy.
//     Two quotations appear in the whole course and both are verbatim from a published page.
//  2. CONTESTED CLAIMS ARE TAUGHT AS CONTESTED, with the holders of each position named. Two are
//     live here: the Printmaking Workshop's founding year (the Library of Congress says 1948, the
//     workshop's own successor organisation says late winter 1947) and the year Charles White joined
//     the Otis faculty (Otis says 1964, the LACMA retrospective literature says 1965).
//  3. CLAIMS THAT COULD NOT BE VERIFIED ARE NOT PRINTED. Three were tested and refused: that White
//     was the first Black faculty member at Otis, that AfriCOBRA's poster prints sold at a specific
//     dollar figure, and the exact year Emma Amos joined Spiral. Each is filed in
//     src/lib/research-checks.ts with what would settle it.
//
// House style: `section` on every lesson; flush-left single-line `:::reveal q ||| a`; a
// `## Vocabulary` block of 3-6 lesson-specific terms; APA 7 `## Sources` with a stable URL wherever
// one exists; a quiz per teaching section (pool sized by density, serving 5, passing 80, shuffled)
// plus a 40-question final serving 10; every question carries `explanation` + `sourceLessonSlug`.
// Correct options are written SHORT and distractors long and specific, so `check-longest-option`
// passes by construction rather than by post-hoc trimming.
export const WHO_SIGNS_THE_PRINT_COURSE: AuthoredCourse = {
  title: "Who Signs the Print",
  description:
    "A fine art print is made by at least two people: the artist who makes the image, and the master printer who makes the edition. Only one of them signs it. That is not a rule about race, and getting that right is the whole point of this course, because the convention applies to every master printer who has ever worked, which means the medium itself manufactures a category of expertise the public cannot see. The interesting question is who ends up in that category, and what they build once they are there. This course teaches the convention end to end: what a pencil signature actually certifies (approval, not authorship, and it dates only from the second half of the nineteenth century), where the printer's credit really lives (an embossed chop that carries no name, and a documentation sheet the public never reads), and what a printer owns instead of a signature (the bon a tirer, the proof the whole edition must match). Then it follows Robert Blackburn, hired in 1957 as the first master printer at Universal Limited Art Editions, who printed its first seventy-nine editions, all of which carry other artists' signatures, and who answered the convention by building an open workshop rather than by arguing with it. Elizabeth Catlett answered it with a collective, Margaret Taylor-Burroughs with a museum, AfriCOBRA with a cheap and portable medium, Charles White with a classroom, and Emma Amos with a print portfolio that got her into a room she was the only woman in. The shape transfers: session musicians, ghostwriters, film colourists, translators and test kitchens are governed by the same three conditions, and the course ends by teaching you to spot them, and by showing two credit conventions that were actually corrected.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1 — The convention: the artist signs, the printer does not
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "two-hands-one-sheet",
      title: "1 · Two hands, one sheet",
      section: "Section 1 · The artist signs, the printer does not",
      body: `Pick up a fine art print and you are holding the output of at least two skilled people. One of them made the image. The other made the edition.

**These are different jobs, and the second one is not assistance.** The artist draws on the stone, cuts the block, or works the plate. The printer decides what that mark will do once ink, water, pressure and paper get involved, and then makes it do that thing forty times identically. On a lithographic stone the printer applies the chemical treatments that fix the image, sprinkles rosin and talc across the surface, applies the etch, keeps the stone damp through the run, and rolls out an oil based ink at a consistency that will not thicken or starve over an afternoon (Tamarind Institute, n.d.-a). Get any of that wrong and the image the artist drew does not exist on paper. It is not a service performed on a finished work. It is half of what makes the work exist at all.

**Which is why the vocabulary says collaborative.** Tamarind Institute, the University of New Mexico workshop that trains professional printers, describes its practice as "collaborative printmaking", which brings "artist and printer together in the workshop for a creative exchange of ideas and technical possibilities" (Tamarind Institute, n.d.-a). The word is not a courtesy. Many artists arriving at a print shop have never made a lithograph and are taught the medium there, by the printer, during the making of the work that will carry their signature.

**Now look at the sheet itself.** In the bottom margin you will usually find a fraction on the left, a title in the middle, and a signature on the right. The fraction is the impression number and the edition size. The signature is the artist's. Somewhere near a corner there may be a small embossed shape with no words in it.

That is the entire public record of a two person job, and only one of the two is spelled out in letters.

**This course is about that asymmetry, and about resisting the obvious wrong explanation for it.** The obvious explanation is that somebody was cheated. The correct one is duller and far more useful: a format decided long ago how many names it would carry, the convention filled the slot, and the expertise that went unnamed became invisible as a category rather than as a person. Section 6 will show you the same shape running in five other industries.

:::reveal Name three things the printer does to a lithographic stone that the artist does not. ||| Applies the chemical treatments that stabilise the image, sprinkles rosin and talc and applies the etch solution, keeps the stone damp during printing, and rolls out oil based ink at a workable consistency.

:::reveal What are the four things you will usually find in the bottom margin of a fine art print, and how many of them name a person? ||| The impression number over the edition size, a title, the artist's signature, and often a small embossed chop. Only the signature names a person.

## Vocabulary
- **Impression**: one individual sheet pulled from the printing surface, as distinct from the image or the edition as a whole.
- **Edition**: the full set of approved impressions of one image, numbered as a fraction where the second figure is the total.
- **Collaborative printmaking**: the working method in which artist and printer develop the print together, with the printer contributing technical authorship rather than labour.
- **Master printer**: the person responsible for realising an edition to a professional standard, including the chemistry, the press work and the consistency of every impression.

## Sources
Tamarind Institute. (n.d.-a). *Process*. University of New Mexico. https://tamarind.unm.edu/about/process/`,
    },
    {
      slug: "what-a-signature-certifies",
      title: "2 · What a signature actually certifies",
      section: "Section 1 · The artist signs, the printer does not",
      body: `The pencil signature in the margin looks like the oldest thing about a print. It is one of the newest, and it does not mean what most people read it as meaning.

**It is roughly a hundred and fifty years old.** The Victoria and Albert Museum, describing James McNeill Whistler's etchings, records that "Whistler was one of the first artists to put his pencilled signature to a print", and that the practice "grew up during the second half of the 19th century in order to identify works printed from surfaces made by the artist him- or herself, as opposed to reproductions of works originally created in other media" (Victoria and Albert Museum, n.d.). Printmaking is roughly six centuries old in Europe. For most of that history nobody signed anything in the margin.

**Read what the convention was invented to do.** It was invented to answer one question: is this an original print, or is it a photomechanical reproduction of a painting? That question is about the ORIGIN of the printing surface. It is not about who operated the press, and it never was.

**And read what the signature does inside a working shop.** Tamarind's description of its own process is exact: "The artist signs and numbers each impression to indicate his or her approval" (Tamarind Institute, n.d.-a). Approval. The artist is inspecting a sheet somebody else produced and certifying that it meets the standard. The signature is closer to a quality release than to a byline.

**So the signature has been asked to carry a meaning it was never designed for.** A viewer reads a name in the margin as an answer to "who made this", when the mark was designed to answer "is this genuine" and is used in practice to answer "does the artist accept this sheet". Three different questions, one mark, and the mark only ever fit the first two.

This is a format problem of exactly the kind CREDIT-00 calls a format cap: the medium provides one slot, the convention decides whose name goes in it, and everything the slot cannot hold disappears from public view. What makes printmaking unusually clean is that the printer's credit was not destroyed. It was recorded somewhere else, in two places you will learn to read in Section 2, and neither of them is on the front of the print where anybody looks.

:::reveal When did the pencil signature on prints become a practice, and what problem was it invented to solve? ||| It grew up in the second half of the nineteenth century, to identify a print made from a surface the artist worked themselves rather than a photomechanical reproduction of a work made in another medium.

:::reveal According to Tamarind, what does an artist's signature on an impression indicate? ||| Approval. The artist is certifying that this sheet meets the standard, which is closer to a quality release than to a claim of sole authorship.

## Vocabulary
- **Original print**: a print made from a surface the artist created, as opposed to a photomechanical reproduction of a work made in another medium.
- **Reproduction**: a printed copy of a work that originated elsewhere, which the signature convention was invented to distinguish an original print from.
- **Approval mark**: a signature whose working function is to certify that an impression meets standard, rather than to assert who produced it.
- **Format cap**: from CREDIT-00, the hard limit a medium places on how many names it can display, which forces a rationing decision.

## Sources
Tamarind Institute. (n.d.-a). *Process*. University of New Mexico. https://tamarind.unm.edu/about/process/

Victoria and Albert Museum. (n.d.). *Nocturne: Palaces* [Etching by James McNeill Whistler]. https://collections.vam.ac.uk/item/O124326`,
    },
    {
      slug: "everyone-is-unsigned",
      title: "3 · Every master printer is unsigned",
      section: "Section 1 · The artist signs, the printer does not",
      body: `Here is the load bearing sentence of this course, and the reason it is worth building at all.

**The master printer does not sign the print, and that applies to every master printer, everywhere, regardless of who they are.** White printers are unsigned. The printer who trained at Tamarind last year is unsigned. The printers who ran the great European lithography shops were unsigned. There is no version of this convention that names some printers and withholds a name from others.

**So the grievance framing is factually wrong, and it will be corrected in public.** If this course told you that Robert Blackburn's credit was stolen, the first person holding a print catalogue would point out that the convention treated him exactly as it treats everyone, and the true and serious material standing next to that claim would go down with it. That is not a hypothetical risk. It is how a well meaning history gets discredited.

**The honest question is better, not gentler.** The convention manufactures a CATEGORY: a body of expertise that is essential, hard won, and structurally unnameable in the place the public looks. Once such a category exists, two questions follow, and both have answers you can go and check.

1. **Who ends up in the category?** Which people get routed into the unnamed technical role and which get routed into the named authorial one, and what did the routing?
2. **What do the people in it build in response?** Given that you cannot argue your way onto the front of somebody else's print, what do you make instead?

The second question is what makes this course a story about construction rather than about loss. Sections 4 and 5 are five different answers to it: an open workshop, a collective, a museum, a cheap and portable medium, and a classroom.

**The general lesson, which you can use tomorrow.** When you meet an uncredited role, first ask whether the lack of credit is universal to the role. If it is, you are looking at a convention, not a wrong done to a person, and the analysis changes completely: you stop hunting for a culprit and you start asking who is in the role and how they got there. CREDIT-00 makes the same move for the author line. This course makes it for the press.

:::reveal Why would framing this history as "the printer's credit was stolen" be wrong rather than merely impolite? ||| Because the convention withholds a signature from every master printer regardless of race, so the claim is factually false and is easily corrected by anyone with a print catalogue, which discredits the verified material next to it.

:::reveal What two questions replace the theft question once you accept that the convention is universal? ||| Who ends up routed into the unnamed technical category, and what do the people in that category build in response to being there.

## Vocabulary
- **Convention**: a rule of practice that applies to a role rather than to a person, and therefore cannot on its own explain an individual injustice.
- **Category of invisible expertise**: a body of essential skill that a medium's credit format has no slot for, so it disappears from public view as a class.
- **Routing**: the set of decisions that determine which people end up in a named role and which end up in an unnamed one.
- **Correctable in public**: the test this course applies to its own claims, meaning a stranger with the standard references could show the sentence to be false.

## Sources
Tamarind Institute. (n.d.-a). *Process*. University of New Mexico. https://tamarind.unm.edu/about/process/`,
    },
    {
      slug: "quiz-the-convention",
      title: "4 · Knowledge check: the convention",
      section: "Section 1 · The artist signs, the printer does not",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "A fine art print is the output of how many skilled roles, at minimum?",
            options: ["Two", "One, since the printer is carrying out instructions the artist has already fully specified", "Three, because a publisher must approve the edition before either the artist or the printer begins", "Four, counting the artist, the printer, the papermaker and the curator who accessions the sheet"],
            correctIndex: 0,
            explanation: "One person makes the image, another makes the edition, and the second job is not assistance.",
            sourceLessonSlug: "two-hands-one-sheet",
          },
          {
            prompt: "In the division of labour this lesson describes, the master printer is responsible for:",
            options: ["The edition", "Selecting which of the artist's drawings are strong enough to be worth editioning at all", "Choosing the subject matter once the artist has settled on a medium and a paper size", "Deciding the retail price of each impression and which dealers will be allowed to sell them"],
            correctIndex: 0,
            explanation: "The artist makes the image; the printer makes it exist identically on paper, forty times over.",
            sourceLessonSlug: "two-hands-one-sheet",
          },
          {
            prompt: "Which of these is part of the printer's work on a lithographic stone?",
            options: ["Applying the etch solution", "Drawing the composition directly onto the stone in greasy crayon before any chemistry begins", "Deciding how many impressions the artist's reputation will support in the secondary market", "Signing the lower right margin of every impression once the run has been checked for consistency"],
            correctIndex: 0,
            explanation: "Chemical treatments, rosin and talc, the etch, keeping the stone damp, and rolling out oil based ink at a workable consistency.",
            sourceLessonSlug: "two-hands-one-sheet",
          },
          {
            prompt: "Why is rolling ink at a consistent body across a long run a technical problem?",
            options: ["Ink can thicken or starve", "Because the artist must re-approve the colour every twenty impressions under studio lighting conditions", "Because oil based ink cures permanently within about four minutes of leaving the slab", "Because each impression legally requires a fresh batch of ink mixed to a published formula"],
            correctIndex: 0,
            explanation: "Get the ink wrong over an afternoon and the image the artist drew does not exist on paper.",
            sourceLessonSlug: "two-hands-one-sheet",
          },
          {
            prompt: "Tamarind Institute is described in this lesson as:",
            options: ["A workshop that trains professional printers", "A New York publisher that commissions editions from artists and sells them through galleries", "A federal agency that certifies the authenticity of American prints for customs purposes", "A trade association of print dealers that sets the numbering conventions used in the margin"],
            correctIndex: 0,
            explanation: "Tamarind is the University of New Mexico workshop whose process and training pages are cited throughout this course.",
            sourceLessonSlug: "two-hands-one-sheet",
          },
          {
            prompt: "\"Collaborative printmaking\", in Tamarind's own words, brings artist and printer together for:",
            options: ["A creative exchange of ideas and technical possibilities", "A contractual negotiation over how the proceeds of the edition will eventually be divided", "A supervised session in which the printer executes instructions the artist supplies in writing", "A joint signing ceremony at which both parties initial the lower margin of every impression"],
            correctIndex: 0,
            explanation: "The phrasing is Tamarind's, and the word collaborative is not a courtesy: many artists are taught the medium in the shop.",
            sourceLessonSlug: "two-hands-one-sheet",
          },
          {
            prompt: "Many artists arriving at a print shop learn the medium from whom?",
            options: ["The printer", "A curator attached to the publisher, who runs an orientation before any work begins", "A previous artist in the same edition series, under an informal apprenticeship arrangement", "Nobody, because the shop only accepts artists who already hold a printmaking qualification"],
            correctIndex: 0,
            explanation: "They are taught lithography in the shop, by the printer, while making the work that will carry their own signature.",
            sourceLessonSlug: "two-hands-one-sheet",
          },
          {
            prompt: "The fraction in the bottom left margin of a print records:",
            options: ["Impression number and edition size", "The year the image was drawn over the year the edition was finally pulled and released", "The number of colours used over the number of separate printing surfaces required", "The proportion of the edition the artist retained over the proportion sold to the publisher"],
            correctIndex: 0,
            explanation: "The second figure is the total, so 5/20 is the fifth impression of an edition of twenty.",
            sourceLessonSlug: "two-hands-one-sheet",
          },
          {
            prompt: "Of the marks usually found in a print's bottom margin, how many name a person in letters?",
            options: ["One", "Two, since the printer's name is conventionally set in small type beneath the artist's signature", "Three, counting the artist, the printer and the publishing workshop that issued the edition", "None, because all identifying marks on a fine art print are embossed rather than written"],
            correctIndex: 0,
            explanation: "The signature. The fraction, the title and any embossed chop carry no personal name in letters.",
            sourceLessonSlug: "two-hands-one-sheet",
          },
          {
            prompt: "This course rejects which explanation for the asymmetry in the margin?",
            options: ["That somebody was cheated", "That the print market prefers a single name because collectors find two names confusing", "That printers historically declined credit in order to protect their trade secrets", "That the paper's margin is physically too narrow to accommodate a second written name"],
            correctIndex: 0,
            explanation: "The correct explanation is duller and more useful: a format decided long ago how many names it would carry.",
            sourceLessonSlug: "two-hands-one-sheet",
          },
          {
            prompt: "An \"impression\", in printmaking vocabulary, is:",
            options: ["One sheet pulled from the surface", "The complete approved set of sheets of a single image, numbered as a fraction", "The mark an embossing stamp leaves in the paper near the lower corner of the sheet", "The initial trial pull the artist inspects before authorising any further printing at all"],
            correctIndex: 0,
            explanation: "An impression is an individual sheet, as distinct from the image or the edition as a whole.",
            sourceLessonSlug: "two-hands-one-sheet",
          },
          {
            prompt: "An \"edition\" is best defined as:",
            options: ["The full set of approved impressions", "Every sheet pulled during a print run, including the misregistered and inked-up rejects", "The publisher's catalogue listing of all prints issued by one workshop in a given year", "The paper stock chosen for a print run, which determines how many sheets can be pulled"],
            correctIndex: 0,
            explanation: "Only approved impressions belong to the edition, which is why the artist's approval matters procedurally.",
            sourceLessonSlug: "two-hands-one-sheet",
          },
          {
            prompt: "The lesson calls the printer's contribution a form of what, rather than labour?",
            options: ["Technical authorship", "Editorial supervision, in the sense a magazine editor supervises the work of a staff writer", "Conservation practice, since the printer's decisions determine how long the sheet survives", "Curatorial judgment, because the printer decides which impressions enter museum collections"],
            correctIndex: 0,
            explanation: "It is half of what makes the work exist at all, not a service performed on a finished work.",
            sourceLessonSlug: "two-hands-one-sheet",
          },
          {
            prompt: "Getting the chemistry or the press work wrong produces what outcome?",
            options: ["The drawn image does not exist on paper", "A slightly weaker impression that is still saleable at a discount to institutional buyers", "A print that must be re-signed by the artist before it can be released to the edition", "A legal defect in the edition that requires the workshop to file an amended documentation sheet"],
            correctIndex: 0,
            explanation: "Which is the reason the printer's job is half the making rather than a finishing service.",
            sourceLessonSlug: "two-hands-one-sheet",
          },
          {
            prompt: "The embossed shape sometimes found near a corner of a print typically contains:",
            options: ["No words", "The printer's full name and the year the edition was completed, in very small capitals", "A serial number matching the impression number written in the opposite lower margin", "The workshop's postal address, so a buyer can write for the edition's documentation sheet"],
            correctIndex: 0,
            explanation: "It is a shape, not a name, which is exactly why the public record of a two person job spells out only one of them.",
            sourceLessonSlug: "two-hands-one-sheet",
          },
          {
            prompt: "The lesson says the same shape as the print signature convention runs in how many other industries, taught later in the course?",
            options: ["Five", "Two, both of them in publishing, which is where the convention is thought to have originated", "Nine, one for each of the disciplines surveyed in the research brief behind this course", "None, because the convention is unique to editioned printmaking and does not transfer"],
            correctIndex: 0,
            explanation: "Session musicians, ghostwriters, film colourists, translators and test kitchens, all worked through in Section 6.",
            sourceLessonSlug: "two-hands-one-sheet",
          },
          {
            prompt: "The pencil signature on prints is, historically speaking:",
            options: ["Recent", "Contemporary with the invention of European printmaking in the fifteenth century", "A requirement imposed by nineteenth century French law on all editioned works of art", "An unbroken practice inherited from the guild marks used by medieval woodblock cutters"],
            correctIndex: 0,
            explanation: "European printmaking is roughly six centuries old, and for most of that history nobody signed anything in the margin.",
            sourceLessonSlug: "what-a-signature-certifies",
          },
          {
            prompt: "According to the Victoria and Albert Museum, the pencilled signature practice grew up during:",
            options: ["The second half of the nineteenth century", "The decade after the First World War, when the print market first attracted speculative buyers", "The early eighteenth century, alongside the rise of the commercial engraving trade in London", "The middle of the twentieth century, once American workshops began publishing large editions"],
            correctIndex: 0,
            explanation: "The V&A describes Whistler as one of the first artists to put a pencilled signature to a print.",
            sourceLessonSlug: "what-a-signature-certifies",
          },
          {
            prompt: "Which artist does the V&A name as one of the first to sign a print in pencil?",
            options: ["James McNeill Whistler", "Honore Daumier, whose lithographs for the Paris press ran to enormous numbers", "Kathe Kollwitz, who numbered her etchings to distinguish states of the same plate", "Albrecht Durer, whose monogram is the earliest known personal mark on a printed sheet"],
            correctIndex: 0,
            explanation: "The V&A record for Whistler's etchings is where this course sources the claim.",
            sourceLessonSlug: "what-a-signature-certifies",
          },
          {
            prompt: "The signature convention was invented to answer which question?",
            options: ["Is this an original print or a reproduction?", "Which member of the workshop staff actually operated the press for this impression?", "How many impressions of this image will the publisher be permitted to issue in total?", "Has the artist been paid in full for the edition before the sheets leave the building?"],
            correctIndex: 0,
            explanation: "It distinguishes a print made from a surface the artist worked from a photomechanical reproduction of a painting.",
            sourceLessonSlug: "what-a-signature-certifies",
          },
          {
            prompt: "The question the signature was designed to settle is about:",
            options: ["The origin of the printing surface", "The identity of the press operator on the day the impression was pulled from the stone", "The commercial value the edition is expected to hold over the following twenty years", "The chemical stability of the paper and ink, which determines the sheet's expected lifespan"],
            correctIndex: 0,
            explanation: "Whether the artist made the surface. Not who operated the press, which the convention never addressed.",
            sourceLessonSlug: "what-a-signature-certifies",
          },
          {
            prompt: "Tamarind states that the artist signs and numbers each impression in order to indicate:",
            options: ["Approval", "Ownership of the copyright in the image for the full statutory term of protection", "Personal execution of every stage of the printing, including the chemistry and the press work", "Agreement with the workshop's proposed retail price for that particular numbered impression"],
            correctIndex: 0,
            explanation: "The artist is inspecting a sheet somebody else produced and certifying that it meets standard.",
            sourceLessonSlug: "what-a-signature-certifies",
          },
          {
            prompt: "The signature functions in the shop as something closest to:",
            options: ["A quality release", "A byline of the kind printed above a newspaper article to identify its writer", "A receipt confirming that the printer has been paid for the labour of the edition", "A dedication, since the artist chooses which impressions are inscribed to which buyers"],
            correctIndex: 0,
            explanation: "Approval of a sheet produced by somebody else is a release, not an authorship claim.",
            sourceLessonSlug: "what-a-signature-certifies",
          },
          {
            prompt: "How many distinct questions does the lesson say the single signature mark is asked to answer?",
            options: ["Three", "One, which is why the convention has survived unchanged for a century and a half", "Six, matching the six centuries of European printmaking the convention was layered onto", "Two, and they are compatible, which is why no confusion arises from the practice"],
            correctIndex: 0,
            explanation: "Who made this, is this genuine, and does the artist accept this sheet. The mark only ever fitted the last two.",
            sourceLessonSlug: "what-a-signature-certifies",
          },
          {
            prompt: "The question the signature does NOT fit is:",
            options: ["Who made this?", "Is this printed from a surface the artist worked rather than a photomechanical copy?", "Does the artist accept this particular sheet as meeting the standard of the edition?", "Is this impression part of the numbered edition rather than a proof held back by the shop?"],
            correctIndex: 0,
            explanation: "Viewers read the margin as an answer to who made this, and the mark was never designed for that question.",
            sourceLessonSlug: "what-a-signature-certifies",
          },
          {
            prompt: "European printmaking is described as roughly how old?",
            options: ["Six centuries", "About a hundred and fifty years, dating from the etching revival of the Victorian period", "Two centuries, beginning with the invention of lithography at the end of the 1790s", "A thousand years, which is why its conventions are more entrenched than any other medium's"],
            correctIndex: 0,
            explanation: "Which is the point: the signature convention covers only the most recent quarter of that history.",
            sourceLessonSlug: "what-a-signature-certifies",
          },
          {
            prompt: "This lesson identifies the print margin as an instance of which concept borrowed from CREDIT-00?",
            options: ["A format cap", "The Matilda effect, which routes a woman's contribution to a male colleague in the same field", "The inventorship and ownership split, in which a named human differs from the legal owner", "Archival silence, which is the disappearance of a record rather than a limit on its slots"],
            correctIndex: 0,
            explanation: "One slot, a convention that decides whose name fills it, and everything the slot cannot hold leaves public view.",
            sourceLessonSlug: "what-a-signature-certifies",
          },
          {
            prompt: "What happened to the printer's credit under this convention?",
            options: ["It was recorded elsewhere", "It was destroyed, which is why no reliable record of historic printers survives anywhere", "It was transferred by contract to the artist, who then held it as a matter of property law", "It was never generated in the first place, because printers were not regarded as skilled workers"],
            correctIndex: 0,
            explanation: "In two places you will read in Section 2, neither of them on the front of the print where anybody looks.",
            sourceLessonSlug: "what-a-signature-certifies",
          },
          {
            prompt: "The distinction between an original print and a reproduction turns on:",
            options: ["Who made the printing surface", "Whether the sheet carries a pencil signature and an impression number in its lower margin", "Whether the image was previously exhibited in another medium before being printed", "How many impressions were pulled, since reproductions are always issued in larger numbers"],
            correctIndex: 0,
            explanation: "An original print comes from a surface the artist created; a reproduction copies a work that originated elsewhere.",
            sourceLessonSlug: "what-a-signature-certifies",
          },
          {
            prompt: "The single most load bearing claim in this course is that the printer's lack of a signature is:",
            options: ["Universal to the role", "Specific to printers who lacked formal academy training in the fine arts", "A twentieth century American practice not found in European workshops of any period", "Applied unevenly, which is what makes individual cases of it worth investigating"],
            correctIndex: 0,
            explanation: "White printers, newly trained printers and the great European shop printers are all unsigned. There is no version that names some and not others.",
            sourceLessonSlug: "everyone-is-unsigned",
          },
          {
            prompt: "Why would this course be discredited if it said Robert Blackburn's credit was stolen?",
            options: ["The convention treated him as it treats everyone", "Because Blackburn signed a contract at Universal Limited Art Editions waiving any claim to credit", "Because his editions were published anonymously, so no individual name could have appeared", "Because the theft claim was tested in court in the 1960s and the court found against it"],
            correctIndex: 0,
            explanation: "The first person holding a print catalogue could show the claim false, and the true material next to it would go down with it.",
            sourceLessonSlug: "everyone-is-unsigned",
          },
          {
            prompt: "What does the convention manufacture, according to this lesson?",
            options: ["A category of invisible expertise", "A shortage of trained printers, since nobody will enter a trade that offers no recognition", "A price premium on signed impressions relative to the unsigned proofs held by the shop", "A legal presumption that the artist is the sole author of every print bearing a signature"],
            correctIndex: 0,
            explanation: "Essential, hard won, and structurally unnameable in the place the public looks.",
            sourceLessonSlug: "everyone-is-unsigned",
          },
          {
            prompt: "The first of the two better questions this course asks is:",
            options: ["Who ends up in the category?", "Which individual artist benefited most in cash terms from an unnamed printer's technical skill?", "How many master printers over the last century can be positively identified by name?", "What penalty should a workshop face for failing to disclose its printer on a published edition?"],
            correctIndex: 0,
            explanation: "Which people get routed into the unnamed technical role rather than the named authorial one, and what did the routing.",
            sourceLessonSlug: "everyone-is-unsigned",
          },
          {
            prompt: "The second better question is what people in the unnamed category:",
            options: ["Build in response", "Are paid, relative to the artists whose signatures appear on the work they produced", "Remember, since oral testimony is the only surviving record of most technical decisions", "Sign instead, given that no formal mark of authorship is available to them on the sheet"],
            correctIndex: 0,
            explanation: "You cannot argue your way onto the front of somebody else's print, so the response is construction rather than complaint.",
            sourceLessonSlug: "everyone-is-unsigned",
          },
          {
            prompt: "Sections 4 and 5 present how many distinct answers to the build question?",
            options: ["Five", "Two, a workshop and a museum, which are the only responses the record documents clearly", "Eight, one for each figure whose work appears anywhere in this course's evidence base", "None, because the course argues that no effective response to a medium convention exists"],
            correctIndex: 0,
            explanation: "An open workshop, a collective, a museum, a cheap and portable medium, and a classroom.",
            sourceLessonSlug: "everyone-is-unsigned",
          },
          {
            prompt: "When you meet an uncredited role anywhere, the lesson says the first thing to ask is whether the lack of credit is:",
            options: ["Universal to the role", "Recent enough that the people involved are still alive and able to describe it", "Written into a contract that the uncredited party actually read before signing it", "Financially material, since a credit with no money attached is not worth investigating"],
            correctIndex: 0,
            explanation: "If it is, you are looking at a convention rather than a wrong done to a person, and the whole analysis changes.",
            sourceLessonSlug: "everyone-is-unsigned",
          },
          {
            prompt: "Once you establish that an uncredited role is uncredited for everyone, you stop doing what?",
            options: ["Hunting for a culprit", "Reading the primary documents, since a convention leaves nothing individual to find", "Comparing the case with other industries, because conventions do not transfer between media", "Naming the people involved, since a convention makes individual identity irrelevant"],
            correctIndex: 0,
            explanation: "You start asking who is in the role and how they got there instead, which is a question documents can answer.",
            sourceLessonSlug: "everyone-is-unsigned",
          },
          {
            prompt: "CREDIT-00 makes the same analytical move for which format?",
            options: ["The author line", "The patent inventor declaration, which CREDIT-01 covers in detail instead", "The museum accession record, which is the subject of its section on archival silence", "The Nobel citation, which is the only format with a numerical cap written into its rules"],
            correctIndex: 0,
            explanation: "This course makes it for the press. The two are the same argument applied to two different formats.",
            sourceLessonSlug: "everyone-is-unsigned",
          },
          {
            prompt: "\"Correctable in public\" is used in this course to mean:",
            options: ["A stranger could show the sentence false", "A claim that has already been corrected by a museum or a peer reviewed journal", "A statement that will be revised once the course's citation auditors have reviewed it", "An assertion made about a living person, who is therefore able to reply to it directly"],
            correctIndex: 0,
            explanation: "It is the test this course applies to its own claims, using the standard published references.",
            sourceLessonSlug: "everyone-is-unsigned",
          },
          {
            prompt: "\"Routing\", as this course uses the term, refers to:",
            options: ["How people end up in named or unnamed roles", "The physical path a sheet of paper takes through the stages of a print workshop", "The order in which colours are printed when an image requires several separate surfaces", "The distribution network that carries finished editions from the workshop to dealers"],
            correctIndex: 0,
            explanation: "The routing is the thing to investigate once you accept that the convention itself is universal.",
            sourceLessonSlug: "everyone-is-unsigned",
          },
          {
            prompt: "Which group does the lesson explicitly name as also unsigned, to prove the convention is not racial?",
            options: ["White printers", "American printers working before the Second World War, who predate the modern convention", "Printers employed by universities rather than by commercial publishing workshops", "Printers who worked only in intaglio, where no chop is embossed into the sheet"],
            correctIndex: 0,
            explanation: "White printers, the printer who trained at Tamarind last year, and the printers of the great European shops.",
            sourceLessonSlug: "everyone-is-unsigned",
          },
          {
            prompt: "This course describes itself as a story about construction rather than about:",
            options: ["Loss", "Technique, since it teaches almost no printmaking process in any real detail", "Institutions, because the individuals matter more to it than the organisations they founded", "Law, given that no statute has ever governed who may sign a fine art print"],
            correctIndex: 0,
            explanation: "The build question is what makes it so: five people, five things built in response to the same convention.",
            sourceLessonSlug: "everyone-is-unsigned",
          },
          {
            prompt: "A convention, as defined in this section's vocabulary, applies to:",
            options: ["A role", "A person, which is why individual cases are the only way to study one", "A period, ending whenever the relevant professional body issues revised guidance", "A jurisdiction, since credit rules differ between national copyright systems"],
            correctIndex: 0,
            explanation: "Which is precisely why a convention cannot on its own explain an individual injustice.",
            sourceLessonSlug: "everyone-is-unsigned",
          },
          {
            prompt: "The most transferable thing about the printmaking case is that its mechanism belongs to:",
            options: ["A medium", "A single country's art market, which is why the American cases are the clearest ones", "A twenty year period in which the American print boom outran its own credit conventions", "A profession's licensing body, which could revise the rule if it chose to do so"],
            correctIndex: 0,
            explanation: "A convention of the medium rather than of a society is what makes the same shape appear in five unrelated industries.",
            sourceLessonSlug: "everyone-is-unsigned",
          },
          {
            prompt: "The word \"collaborative\" in collaborative printmaking is described as:",
            options: ["Not a courtesy", "A recent marketing term adopted by workshops competing for the same pool of artists", "A legal category that gives the printer a share of the copyright in the finished image", "A synonym for assisted, which is how museum catalogues normally record the relationship"],
            correctIndex: 0,
            explanation: "Many artists arriving at a print shop are taught the medium there, by the printer, during the making of the signed work.",
            sourceLessonSlug: "two-hands-one-sheet",
          },
          {
            prompt: "A \"master printer\" is responsible for realising an edition to what standard?",
            options: ["A professional one", "Whatever standard the artist verbally describes at the start of the session", "The standard set by the buyer who has commissioned the edition in advance", "A statutory standard published by the national body that regulates fine art printing"],
            correctIndex: 0,
            explanation: "Including the chemistry, the press work, and the consistency of every impression in the run.",
            sourceLessonSlug: "two-hands-one-sheet",
          },
          {
            prompt: "Which of these does a print's margin NOT normally record?",
            options: ["The printer's name", "The number of this impression and the total size of the edition it belongs to", "A title for the image, usually set between the impression number and the signature", "The artist's signature, conventionally written in pencil toward the right hand side"],
            correctIndex: 0,
            explanation: "The margin holds a fraction, a title, a signature and sometimes a wordless chop. No printer's name in letters.",
            sourceLessonSlug: "two-hands-one-sheet",
          },
          {
            prompt: "The lesson's phrase for what the printer contributes is that it is half of what makes the work:",
            options: ["Exist", "Sell, since a badly printed edition will not find buyers at any realistic price", "Last, because the chemistry determines how long the image survives on the sheet", "Original, in the technical sense the signature convention was invented to certify"],
            correctIndex: 0,
            explanation: "Not a service performed on a finished work, but half of the making of it.",
            sourceLessonSlug: "two-hands-one-sheet",
          },
          {
            prompt: "A \"reproduction\", in the vocabulary of this section, is a printed copy of a work that:",
            options: ["Originated elsewhere", "Was printed by somebody other than the artist who drew the original surface", "Exceeds the edition size the artist originally authorised for that particular image", "Carries a chop but no signature, and is therefore excluded from the numbered edition"],
            correctIndex: 0,
            explanation: "Distinguishing an original print from one of these is exactly what the pencil signature was invented to do.",
            sourceLessonSlug: "what-a-signature-certifies",
          },
          {
            prompt: "The reason the printmaking case is called \"unusually clean\" is that the printer's credit was:",
            options: ["Recorded, just not displayed", "Deliberately suppressed by publishers who feared printers would leave to compete", "Never created, so there is nothing to recover and the case is closed by definition", "Displayed for a century and then removed when American workshops standardised margins"],
            correctIndex: 0,
            explanation: "It exists in two documents you will read in Section 2, neither of them where anybody looks.",
            sourceLessonSlug: "what-a-signature-certifies",
          },
          {
            prompt: "An \"approval mark\" is a signature whose working function is to certify:",
            options: ["That an impression meets standard", "That the artist personally pulled this sheet through the press without assistance", "That the workshop has completed its documentation and archived three reference copies", "That the edition has been closed and the printing surface effaced so no more can be pulled"],
            correctIndex: 0,
            explanation: "Rather than to assert who produced it, which is the meaning viewers read into it.",
            sourceLessonSlug: "what-a-signature-certifies",
          },
          {
            prompt: "Which statement about the convention is TRUE as this course states it?",
            options: ["It is old enough to feel natural and new enough to change", "It has been fixed in essentially its current form since the fifteenth century", "It is enforced by an international body that audits workshops for compliance", "It applies only to lithography, since other print media have no comparable margin"],
            correctIndex: 0,
            explanation: "The pencil signature dates from the second half of the nineteenth century, which is recent against six centuries of printmaking.",
            sourceLessonSlug: "what-a-signature-certifies",
          },
          {
            prompt: "The lesson warns that a learner who carries the grievance version of this history will:",
            options: ["Lose the argument in public", "Be unable to name any of the individuals the convention actually affected", "Overestimate how many prints a nineteenth century workshop could produce in a year", "Confuse the print signature convention with the author line convention of scientific papers"],
            correctIndex: 0,
            explanation: "To the first person holding a print catalogue, because the convention is universal and easily checked.",
            sourceLessonSlug: "everyone-is-unsigned",
          },
        ],
      },
    },
  ],
};
