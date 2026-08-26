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
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2 — Where the printer's credit actually lives
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-chop-that-carries-no-name",
      title: "5 · The chop, a mark that carries no name",
      section: "Section 2 · Where the printer's credit actually lives",
      body: `The printer's credit was not abolished. It was moved somewhere the public does not read, and the first of those places is a small blind embossing in the paper.

**What a chop is.** Tamarind defines chop marks as "identifying symbols of the print studio and/or the printer that are often embossed in the paper (or they may be stamped in ink on the back of the print)" (Tamarind Institute, n.d.-a). Blind embossing means the shape is pressed into the sheet with no ink at all, so you see it by tilting the paper against the light. Tamarind's own shop chop is an alchemist's symbol for stone, and it has appeared on lithographs made there since 1960.

**Where the practice was formalised, and why that matters.** Tamarind Lithography Workshop opened in the summer of 1960 on Tamarind Avenue in Los Angeles, founded by the artist June Wayne with support from the Ford Foundation, because there was almost nobody left in the country who could print at a professional standard. Wayne later compared lithography's position to the whooping crane's: "In all the world there were only thirty-six cranes left, and in the United States there were no master printers able to work with the creative spectrum of our artists" (Adams, n.d.). Wayne directed the workshop from 1960 to 1970, after which Clinton Adams re-established it at the University of New Mexico as a research centre and archive.

**Read Tamarind's founding decision closely, because it is the pivot of this whole section.** Adams wrote: "With an eye to the loose (and at times corrupt) practices of the past, we would fully record and document every edition that we printed; and, in recognition of the printer's important role in their making, we would affix both the workshop chop (or blindstamp) and the printer's individual chop, to every proof or impression" (Adams, n.d.). Two chops, not one: the shop and the individual who did the work. Adams adds that these practices "have subsequently been adopted in most American workshops".

**So this is a deliberate correction, made inside the medium, in 1960.** It did not overturn the signature convention and it was never intended to. It added a second, parallel record that assigns individual credit, and put it on the sheet.

**And then look at what the correction can and cannot do.** The chop is a shape. It is not a name. To turn a printer's chop into a person you need a reference work that maps marks to people, and almost nobody outside the trade owns one. A credit you can only decode with a specialist book is a real credit and an invisible one at the same time, which is why the chop belongs in this section rather than in the section about corrections that worked.

:::reveal What is a chop, and how does blind embossing differ from a printed mark? ||| A chop is an identifying symbol of the print studio or the printer. Blind embossing presses the shape into the paper with no ink, so it is visible only when the sheet is tilted against the light.

:::reveal What did Tamarind decide in 1960 about printer credit, and how many chops does that decision put on a sheet? ||| That every edition would be fully documented and that both the workshop chop and the individual printer's chop would be affixed to every proof or impression. Two chops.

:::reveal Why is a chop still a limited form of credit even though it names the individual printer? ||| Because it is a shape rather than a name, and decoding it into a person requires a specialist reference work that almost nobody outside the trade owns.

## Vocabulary
- **Chop**: an identifying symbol of a print studio or an individual printer, embossed into the sheet or stamped in ink on its back.
- **Blind embossing**: an impression pressed into paper without ink, legible only when the sheet is tilted against a light source.
- **Shop chop**: the workshop's own mark, distinct from the separate mark belonging to the printer who pulled the edition.
- **Parallel record**: a second credit channel added alongside a convention rather than replacing it, which is what Tamarind built in 1960.

## Sources
Adams, C. (n.d.). *An informed energy*. Tamarind Institute, University of New Mexico. https://tamarind.unm.edu/informed-energy/

Tamarind Institute. (n.d.-a). *Process*. University of New Mexico. https://tamarind.unm.edu/about/process/

Tamarind Institute. (n.d.-b). *History*. University of New Mexico. https://tamarind.unm.edu/about/history/`,
    },
    {
      slug: "the-documentation-sheet",
      title: "6 · The documentation sheet nobody reads",
      section: "Section 2 · Where the printer's credit actually lives",
      body: `The second place the printer's credit lives is a piece of paper that never leaves the building with the print.

**What it is.** Tamarind describes it plainly: "Complete documentation is prepared for each edition, capturing all of the details related to the edition and the steps involved in its making. This documentation is signed by the artist and the printer" (Tamarind Institute, n.d.-a). It records the surfaces used, the number of runs, the inks, the paper, the sizes of the edition and of every category of proof, the dates, and who did what.

**Signed by the artist and the printer.** Both names, in full, on the record that establishes what the edition actually is. That sentence is the whole point of this lesson. The printer is not merely credited in the archive: the printer is a signatory to the document that defines the work.

**This is what CREDIT-00 calls a load bearing document,** and it behaves exactly as that course predicts. The credit was assigned. It was assigned in writing. It was assigned in a document that decides a real question, which is what the edition consists of. And the assignment is invisible to the public because the document travels to an archive and a registrar rather than to a wall.

**Where it goes.** At Tamarind an edition comprises all the numbered prints, the artist's proofs, the bon a tirer, and three impressions retained for the Tamarind archives, which are housed at the University of New Mexico Art Museum (Tamarind Institute, n.d.-a). The documentation follows that archive copy. Anyone can in principle consult it. Almost nobody ever does, because a viewer who wants to know who made a print looks at the print.

**The generalisable finding.** When a credit convention appears to erase somebody, ask first whether the credit was actually destroyed or merely relocated to a document with a smaller readership. These are completely different problems with completely different fixes. If the record is gone, the work is historical recovery. If the record exists in a registrar's file, the work is publication: move the name from a document nobody reads to a surface people look at. The second problem is far more common and far more tractable, and you will see it again in every industry in Section 6.

**A caution about what the sheet does not do.** A documentation sheet is evidence of participation, not a ranking. It will tell you the printer's name and it will not tell you who solved the hard problem, because no format records that. When you meet someone claiming a documentation sheet proves an uncredited person was the true author, that is a claim the document cannot support.

:::reveal Who signs a Tamarind edition's documentation, and what does the document record? ||| The artist and the printer both sign it. It records every detail of the edition and the steps in its making, including surfaces, runs, inks, paper, proof categories and dates.

:::reveal What is the practical difference between a credit that was destroyed and a credit that was relocated? ||| A destroyed credit needs historical recovery. A relocated one needs publication, which means moving the existing name from a document with a small readership onto a surface people actually look at.

:::reveal What can a documentation sheet not tell you? ||| Who solved the hard problem. It is evidence of participation, not a ranking of contribution, and no format in the medium records the latter.

## Vocabulary
- **Documentation sheet**: the record prepared for each edition describing its making in full, signed by both the artist and the printer.
- **Load bearing document**: from CREDIT-00, the record that actually assigns a credit and settles a real question about the work.
- **Relocated credit**: a credit that still exists in writing but sits in a document with a far smaller readership than the work itself.
- **Registrar**: the archival function that keeps an institution's records of what an object is and how it came to be.

## Sources
Tamarind Institute. (n.d.-a). *Process*. University of New Mexico. https://tamarind.unm.edu/about/process/`,
    },
    {
      slug: "the-bon-a-tirer",
      title: "7 · What the printer owns instead",
      section: "Section 2 · Where the printer's credit actually lives",
      body: `There is one impression of every edition that is not for sale, is not numbered, and does not belong to the artist. It belongs to the printer, and understanding why tells you what a master printer's job really is.

**The bon a tirer.** The phrase is French for good to pull. It is the proof the artist and printer agree on as the standard: this is what the edition will look like. Every subsequent impression is matched to it. At Tamarind, an edition comprises the numbered prints, the artist's proofs, "the bon a tirer, which belongs to the printer", and three impressions for the archives (Tamarind Institute, n.d.-a).

**Sit with that ownership rule for a moment.** The single sheet that defines the standard of the entire edition is the printer's property. Not because the printer is being thanked, but because the printer is the person who has to hit that standard forty more times, and needs the reference in hand while doing it. The custom is functional, and it happens to be an exact statement of the division of labour: the artist owns the approval, the printer owns the standard.

**What this reveals about the skill.** The hard part of editioning is not making one beautiful sheet. It is making the fortieth sheet indistinguishable from the first, across hours, as the stone dries differently, as the ink stiffens, as the paper's moisture changes. The bon a tirer exists because consistency is the discipline, and consistency is invisible by definition. Nobody looks at an edition and admires the fact that none of the impressions differ.

**Which is a general law worth writing down.** Expertise whose success looks like the absence of variation is the hardest expertise to credit, because there is nothing to point at. This is the same reason a film colourist, a mastering engineer and a simultaneous interpreter are hard to credit: when they succeed, you notice nothing.

**And it completes the picture of the printer's credit.** It exists in three forms and none of them is legible to a viewer. A wordless chop pressed into the sheet. A signature on a documentation sheet held in an archive. And a single unsold proof kept in the shop. That is not erasure. It is a credit system built for the people inside the trade, functioning perfectly for them, and completely opaque to everyone else. Every remaining section of this course is about people who understood that and built something outward facing instead.

:::reveal What is the bon a tirer, and who owns it? ||| The proof the artist and printer agree defines the standard for the edition, literally good to pull. Every later impression is matched to it, and at Tamarind it belongs to the printer.

:::reveal Why is consistency the hardest part of a printer's skill to credit? ||| Because success looks like the absence of variation, so there is nothing to point at. Nobody admires an edition for the fact that its impressions do not differ.

:::reveal Name the three forms the printer's credit takes, and say what they have in common. ||| A wordless chop on the sheet, a signature on an archived documentation sheet, and the unsold bon a tirer kept in the shop. None of the three is legible to a viewer.

## Vocabulary
- **Bon a tirer**: the approved proof that sets the standard the whole edition must match, French for good to pull, and at Tamarind the printer's property.
- **Artist's proof**: an impression outside the numbered edition, conventionally retained by the artist.
- **Editioning**: the work of producing an edition in which every impression matches the agreed standard.
- **Invisible-when-successful**: the property of expertise whose achievement is the absence of variation, which makes it structurally hard to credit.

## Sources
Tamarind Institute. (n.d.-a). *Process*. University of New Mexico. https://tamarind.unm.edu/about/process/`,
    },
    {
      slug: "quiz-where-the-credit-lives",
      title: "8 · Knowledge check: chop, sheet and proof",
      section: "Section 2 · Where the printer's credit actually lives",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "Tamarind defines a chop mark as an identifying symbol of:",
            options: ["The print studio or the printer", "The publisher who financed the edition and holds the right to distribute it", "The collector who first acquired the impression from the issuing workshop", "The museum that accessioned the sheet, applied at the point of registration"],
            correctIndex: 0,
            explanation: "Often embossed in the paper, or stamped in ink on the back of the print.",
            sourceLessonSlug: "the-chop-that-carries-no-name",
          },
          {
            prompt: "Blind embossing means the mark is made:",
            options: ["Without ink", "With a pale ink chosen to sit just below the visual threshold of ordinary lighting", "On the reverse of the sheet, so it never interferes with the printed image itself", "Before the image is printed, so the paper takes the ink differently in that area"],
            correctIndex: 0,
            explanation: "The shape is pressed into the sheet, so you see it by tilting the paper against the light.",
            sourceLessonSlug: "the-chop-that-carries-no-name",
          },
          {
            prompt: "Tamarind's own shop chop is:",
            options: ["An alchemist's symbol for stone", "The initials of the current master printer set inside a circular border", "A stylised tamarind tree, changed each decade to date the impressions", "The seal of the University of New Mexico, added after the workshop relocated"],
            correctIndex: 0,
            explanation: "It has appeared on lithographs made at Tamarind since 1960.",
            sourceLessonSlug: "the-chop-that-carries-no-name",
          },
          {
            prompt: "Tamarind Lithography Workshop opened in:",
            options: ["Los Angeles, in 1960", "Albuquerque, in 1970, as a research centre attached to a university art museum", "New York, in 1957, alongside the founding of Universal Limited Art Editions", "Chicago, in 1948, as a training programme for printers displaced from Europe"],
            correctIndex: 0,
            explanation: "In the summer of 1960, on Tamarind Avenue. It moved to the University of New Mexico later.",
            sourceLessonSlug: "the-chop-that-carries-no-name",
          },
          {
            prompt: "Who founded Tamarind?",
            options: ["June Wayne", "Clinton Adams, who also served as its director for its first decade of operation", "Tatyana Grosman, who had already founded a lithographic workshop on Long Island", "The Ford Foundation, which appointed a working artist to run it on the foundation's behalf"],
            correctIndex: 0,
            explanation: "The artist June Wayne, with support from the Ford Foundation, and she directed it from 1960 to 1970.",
            sourceLessonSlug: "the-chop-that-carries-no-name",
          },
          {
            prompt: "Which body supported Tamarind's founding?",
            options: ["The Ford Foundation", "The National Endowment for the Arts, in its first year of grantmaking to workshops", "The Works Progress Administration, continuing its Depression era art programmes", "The University of New Mexico, which funded the workshop before it relocated there"],
            correctIndex: 0,
            explanation: "Wayne began the workshop with Ford Foundation support.",
            sourceLessonSlug: "the-chop-that-carries-no-name",
          },
          {
            prompt: "June Wayne compared the state of lithography in the United States to:",
            options: ["The whooping crane", "The hand press, which had been replaced by offset machinery within a single generation", "A language with no remaining native speakers and no written grammar to reconstruct it", "A guild whose members had emigrated and left no apprentices behind in the country"],
            correctIndex: 0,
            explanation: "She said there were only thirty-six cranes left in all the world, and no American master printers able to work with the creative spectrum of the country's artists.",
            sourceLessonSlug: "the-chop-that-carries-no-name",
          },
          {
            prompt: "The problem Tamarind was founded to solve was a shortage of:",
            options: ["Master printers", "Lithographic limestone, which had become unobtainable after the Second World War", "Artists interested in working in print rather than in painting or in sculpture", "Buyers, since the American market for editioned prints had collapsed in the 1950s"],
            correctIndex: 0,
            explanation: "Wayne's crane comparison names exactly that: no printers in the United States able to work with the range of the country's artists.",
            sourceLessonSlug: "the-chop-that-carries-no-name",
          },
          {
            prompt: "Who re-established Tamarind at the University of New Mexico?",
            options: ["Clinton Adams", "June Wayne, who moved with the workshop and continued to direct it there", "Will Barnet, who had trained a generation of printers at the Art Students League", "Robert Blackburn, after he left Universal Limited Art Editions in 1963"],
            correctIndex: 0,
            explanation: "Adams became director in 1970 and established it as a research centre and archive at the university.",
            sourceLessonSlug: "the-chop-that-carries-no-name",
          },
          {
            prompt: "Adams says Tamarind's documentation decision was taken with an eye to what?",
            options: ["The loose and at times corrupt practices of the past", "The forthcoming revision of American copyright law affecting works of visual art", "The demands of European collectors who would not buy an undocumented edition", "The risk that a workshop's own printers might later claim authorship of an image"],
            correctIndex: 0,
            explanation: "His sentence names those past practices as the reason for full documentation and for two chops on every sheet.",
            sourceLessonSlug: "the-chop-that-carries-no-name",
          },
          {
            prompt: "How many chops did Tamarind resolve to affix to every proof or impression?",
            options: ["Two", "One, combining the workshop's symbol and the printer's initials into a single stamp", "Three, adding the artist's own mark alongside those of the workshop and the printer", "None on the front, since all identifying marks were to be stamped on the reverse"],
            correctIndex: 0,
            explanation: "The workshop chop and the printer's individual chop, in recognition of the printer's important role.",
            sourceLessonSlug: "the-chop-that-carries-no-name",
          },
          {
            prompt: "Adams reports that Tamarind's documentation and chop practices were subsequently:",
            options: ["Adopted in most American workshops", "Abandoned within a decade as too costly for workshops without foundation funding", "Made compulsory for any workshop selling editions across a state line in the US", "Rejected by the print trade, which preferred the older single signature convention"],
            correctIndex: 0,
            explanation: "Which is why the practice you can check on a modern American print traces back to a 1960 decision.",
            sourceLessonSlug: "the-chop-that-carries-no-name",
          },
          {
            prompt: "Tamarind's 1960 decision related to the signature convention how?",
            options: ["It ran alongside it", "It replaced it, so that Tamarind editions carry a printer's signature instead of the artist's", "It banned artist signatures on any impression the printer had not personally approved", "It restricted the artist's signature to the archive copies retained by the workshop"],
            correctIndex: 0,
            explanation: "It added a second, parallel record assigning individual credit, and never tried to overturn the older convention.",
            sourceLessonSlug: "the-chop-that-carries-no-name",
          },
          {
            prompt: "The central limitation of a chop as a credit is that it is:",
            options: ["A shape, not a name", "Applied only to impressions the workshop intends to sell rather than to archive", "Easily forged, since an embossing die can be reproduced from a photograph", "Removed by conservators during treatment, so it rarely survives a century"],
            correctIndex: 0,
            explanation: "Turning a printer's chop into a person needs a reference work mapping marks to people, which almost nobody outside the trade owns.",
            sourceLessonSlug: "the-chop-that-carries-no-name",
          },
          {
            prompt: "A credit that can only be decoded with a specialist reference work is described as:",
            options: ["Real and invisible at once", "Legally sufficient, which is why the practice has never needed further reform", "Equivalent to no credit at all, so the chop is dismissed as a purely decorative mark", "Superior to a printed name, because it cannot be misspelled or transcribed wrongly"],
            correctIndex: 0,
            explanation: "Which is why the chop sits in this section rather than in the section about corrections that worked.",
            sourceLessonSlug: "the-chop-that-carries-no-name",
          },
          {
            prompt: "A \"parallel record\", as this course uses the term, is:",
            options: ["A second credit channel added beside a convention", "A duplicate documentation sheet held by the artist as well as by the workshop", "A photographic record of every impression, kept in case of a later dispute", "An identical edition printed from a second surface as insurance against damage"],
            correctIndex: 0,
            explanation: "Added rather than substituted, which is exactly what Tamarind built in 1960.",
            sourceLessonSlug: "the-chop-that-carries-no-name",
          },
          {
            prompt: "How long has Tamarind's shop chop appeared on lithographs made there?",
            options: ["Since 1960", "Since 1970, when the workshop was re-established at the University of New Mexico", "Since 1948, following the practice of the earliest American cooperative print shops", "Since the mid 1980s, when the printer training programme was formally accredited"],
            correctIndex: 0,
            explanation: "From the workshop's opening, which is what makes the practice checkable across its whole history.",
            sourceLessonSlug: "the-chop-that-carries-no-name",
          },
          {
            prompt: "Tamarind prepares complete documentation for:",
            options: ["Each edition", "Each artist, covering every project that artist undertakes at the workshop", "Each calendar year, summarising the workshop's total output for the archive", "Each impression individually, so that no two sheets share a documentation record"],
            correctIndex: 0,
            explanation: "Capturing all the details of the edition and the steps involved in its making.",
            sourceLessonSlug: "the-documentation-sheet",
          },
          {
            prompt: "Who signs the documentation for a Tamarind edition?",
            options: ["The artist and the printer", "The artist alone, in parallel with the signature applied to each numbered impression", "The workshop director, on behalf of everyone who worked on the project", "The registrar of the archive that will hold the retained impressions afterwards"],
            correctIndex: 0,
            explanation: "Both names, in full, on the record that establishes what the edition actually is.",
            sourceLessonSlug: "the-documentation-sheet",
          },
          {
            prompt: "The documentation sheet is an example of what concept from CREDIT-00?",
            options: ["A load bearing document", "The Matthew effect, which sends accumulated credit toward whoever is already eminent", "A format cap, since the sheet has a fixed number of lines available for names", "Institutional memory, because the archive is what preserves it over the long run"],
            correctIndex: 0,
            explanation: "The record that actually assigns the credit and settles a real question about the work.",
            sourceLessonSlug: "the-documentation-sheet",
          },
          {
            prompt: "The real question a documentation sheet settles is:",
            options: ["What the edition consists of", "Whether the artist has been paid the agreed fee for the project by the publisher", "How the edition should be priced when it reaches dealers and secondary buyers", "Which impressions may be described as original prints rather than as reproductions"],
            correctIndex: 0,
            explanation: "Which is what makes it load bearing rather than ceremonial.",
            sourceLessonSlug: "the-documentation-sheet",
          },
          {
            prompt: "Why is the credit on a documentation sheet invisible to the public?",
            options: ["The document goes to an archive", "Because the printer's name is recorded only by an internal reference code rather than in full", "Because workshops treat their documentation as commercially confidential trade material", "Because the sheet is destroyed once the edition sells out and the surface is effaced"],
            correctIndex: 0,
            explanation: "It travels to an archive and a registrar rather than to a wall, and a viewer who wants to know who made a print looks at the print.",
            sourceLessonSlug: "the-documentation-sheet",
          },
          {
            prompt: "At Tamarind, how many impressions of an edition are retained for the archives?",
            options: ["Three", "One, matching the single copy legal deposit practice used for published books", "Ten percent of the edition, rounded up to the nearest whole impression", "None, because the archive holds only the documentation rather than any printed sheets"],
            correctIndex: 0,
            explanation: "An edition comprises the numbered prints, the artist's proofs, the bon a tirer, and three impressions for the archives.",
            sourceLessonSlug: "the-documentation-sheet",
          },
          {
            prompt: "The Tamarind archives are housed at:",
            options: ["The University of New Mexico Art Museum", "The Library of Congress Prints and Photographs Division, alongside the Blackburn papers", "The Ford Foundation's own collection, as a condition of the original founding grant", "The Los Angeles County Museum of Art, near the workshop's original Tamarind Avenue site"],
            correctIndex: 0,
            explanation: "Which is where the documentation follows the retained impressions.",
            sourceLessonSlug: "the-documentation-sheet",
          },
          {
            prompt: "The lesson's generalisable test asks whether a credit was destroyed or:",
            options: ["Relocated", "Contested, in the sense that two parties claimed it and neither could prove the claim", "Delayed, meaning it will appear once the relevant scholarship has been published", "Waived, because the person entitled to it chose not to assert it at the time"],
            correctIndex: 0,
            explanation: "Two completely different problems with completely different fixes.",
            sourceLessonSlug: "the-documentation-sheet",
          },
          {
            prompt: "If a credit record is genuinely gone, the work required is:",
            options: ["Historical recovery", "Publication, which means moving an existing name onto a surface people actually look at", "Arbitration between the parties who each claim to have performed the uncredited work", "Amendment of the original document by the institution that first issued it"],
            correctIndex: 0,
            explanation: "Recovery is the harder and rarer case. Relocation is the common one, and it is fixed by publication.",
            sourceLessonSlug: "the-documentation-sheet",
          },
          {
            prompt: "If a credit sits in a registrar's file, the work required is:",
            options: ["Publication", "Litigation, since the holder of the file has no obligation to release its contents", "Reconstruction from secondary sources, because internal files are rarely reliable", "Nothing, because a written record is by definition already a sufficient public credit"],
            correctIndex: 0,
            explanation: "Move the name from a document nobody reads to a surface people look at. Far more common and far more tractable.",
            sourceLessonSlug: "the-documentation-sheet",
          },
          {
            prompt: "A documentation sheet is evidence of participation but not of:",
            options: ["Ranking", "Payment, which is recorded separately in the workshop's commercial ledgers", "Date, since the sheet is completed only after the whole edition has been pulled", "Authenticity, which is established instead by the chop embossed into each sheet"],
            correctIndex: 0,
            explanation: "It will tell you the printer's name and it will not tell you who solved the hard problem, because no format records that.",
            sourceLessonSlug: "the-documentation-sheet",
          },
          {
            prompt: "Someone claiming a documentation sheet proves an uncredited person was the true author is making a claim the document:",
            options: ["Cannot support", "Supports only if the artist's signature is missing from the same sheet", "Supports fully, since both parties signed it as equals under the workshop's rules", "Can support only once a court has admitted it as evidence in a contested case"],
            correctIndex: 0,
            explanation: "The sheet records who took part, not who contributed most.",
            sourceLessonSlug: "the-documentation-sheet",
          },
          {
            prompt: "Among the details a documentation sheet records are:",
            options: ["Surfaces, runs, inks and paper", "The names of every collector who purchased an impression from the edition", "The exhibition history of the image in the five years following its publication", "The insurance valuation assigned to each impression at the time of its release"],
            correctIndex: 0,
            explanation: "Plus the sizes of the edition and every category of proof, the dates, and who did what.",
            sourceLessonSlug: "the-documentation-sheet",
          },
          {
            prompt: "\"Bon a tirer\" translates as:",
            options: ["Good to pull", "Good to sell, marking the first impression cleared for commercial release", "Good for the artist, denoting the proof reserved outside the numbered edition", "Good in principle, a provisional approval subject to a later final inspection"],
            correctIndex: 0,
            explanation: "It is the proof the artist and printer agree on as the standard the edition will match.",
            sourceLessonSlug: "the-bon-a-tirer",
          },
          {
            prompt: "At Tamarind, the bon a tirer belongs to:",
            options: ["The printer", "The artist, alongside the artist's proofs held outside the numbered edition", "The archive, as one of the three impressions retained by the university museum", "The publisher, who uses it to settle disputes with dealers about print quality"],
            correctIndex: 0,
            explanation: "Not as a thank you, but because the printer has to hit that standard for the rest of the run and needs the reference in hand.",
            sourceLessonSlug: "the-bon-a-tirer",
          },
          {
            prompt: "The lesson summarises the division of labour as: the artist owns the approval and the printer owns:",
            options: ["The standard", "The surface, since the stone or plate remains workshop property after the run", "The copyright in the technical solutions developed during the collaboration", "The edition size, which the printer sets according to what the surface can bear"],
            correctIndex: 0,
            explanation: "An exact statement of who is responsible for what, expressed as a custom about who keeps which sheet.",
            sourceLessonSlug: "the-bon-a-tirer",
          },
          {
            prompt: "The hard part of editioning, according to this lesson, is:",
            options: ["Making the fortieth sheet match the first", "Producing a single impression of exceptional beauty that the artist will accept", "Persuading the artist to approve a proof before the printing surface deteriorates", "Choosing a paper that will survive a century without discolouring or becoming brittle"],
            correctIndex: 0,
            explanation: "Across hours, as the stone dries differently, the ink stiffens, and the paper's moisture changes.",
            sourceLessonSlug: "the-bon-a-tirer",
          },
          {
            prompt: "Which of these changes during a long print run and threatens consistency?",
            options: ["The paper's moisture", "The edition size, which the printer adjusts as impressions are rejected for faults", "The chop, which wears down and prints less deeply as more sheets are embossed", "The documentation sheet, which is amended each time a proof is set aside"],
            correctIndex: 0,
            explanation: "Along with the stone drying differently and the ink stiffening, which is why the bon a tirer must stay to hand.",
            sourceLessonSlug: "the-bon-a-tirer",
          },
          {
            prompt: "Why is consistency structurally hard to credit?",
            options: ["Success looks like the absence of variation", "Because consistency is measured only after the edition has been dispersed to buyers", "Because it is the artist rather than the printer who defines what consistent means", "Because no workshop keeps records precise enough to demonstrate that it was achieved"],
            correctIndex: 0,
            explanation: "There is nothing to point at. Nobody looks at an edition and admires the fact that none of the impressions differ.",
            sourceLessonSlug: "the-bon-a-tirer",
          },
          {
            prompt: "Which other roles does this lesson name as hard to credit for the same reason?",
            options: ["Colourist, mastering engineer, interpreter", "Curator, registrar and conservator, the three roles that handle a print after it is sold", "Publisher, dealer and auctioneer, who between them determine what an edition is worth", "Papermaker, ink manufacturer and press builder, who supply the printer's materials"],
            correctIndex: 0,
            explanation: "A film colourist, a mastering engineer and a simultaneous interpreter all succeed by making you notice nothing.",
            sourceLessonSlug: "the-bon-a-tirer",
          },
          {
            prompt: "The three forms the printer's credit takes are the chop, the documentation sheet, and:",
            options: ["The bon a tirer", "The artist's proof, which is set aside for the printer at the end of the run", "The workshop's exhibition label, which lists everyone who worked on the project", "The archive impression retained by the university museum on the printer's behalf"],
            correctIndex: 0,
            explanation: "A wordless chop, a signature in an archive, and a single unsold proof kept in the shop.",
            sourceLessonSlug: "the-bon-a-tirer",
          },
          {
            prompt: "What do all three forms of the printer's credit have in common?",
            options: ["None is legible to a viewer", "All three are applied only after the artist has approved the finished edition", "All three were introduced by Tamarind and are unknown outside American workshops", "All three are legally enforceable, unlike the artist's signature in the margin"],
            correctIndex: 0,
            explanation: "Which is not erasure. It is a credit system built for people inside the trade, opaque to everyone else.",
            sourceLessonSlug: "the-bon-a-tirer",
          },
          {
            prompt: "The course describes the printer's credit system as functioning:",
            options: ["Perfectly, for insiders", "Badly, because workshops routinely fail to complete their own documentation", "Only since 1960, when the first such records were created anywhere in the world", "Identically to the author line, which also records contribution in an archive"],
            correctIndex: 0,
            explanation: "It works exactly as designed for people in the trade, and is completely opaque to everyone outside it.",
            sourceLessonSlug: "the-bon-a-tirer",
          },
          {
            prompt: "An \"artist's proof\" is:",
            options: ["An impression outside the numbered edition", "The proof that sets the standard every other impression must be matched against", "A trial pull taken before the artist has approved any part of the image", "The impression the artist signs first, which then becomes number one of the edition"],
            correctIndex: 0,
            explanation: "Conventionally retained by the artist, and counted separately from the numbered edition.",
            sourceLessonSlug: "the-bon-a-tirer",
          },
          {
            prompt: "\"Editioning\" is the work of producing an edition in which every impression:",
            options: ["Matches the agreed standard", "Carries the artist's signature and the workshop's chop in the correct positions", "Is documented individually on its own record before it leaves the workshop", "Differs slightly, so that each sheet is unique and can be priced accordingly"],
            correctIndex: 0,
            explanation: "Which is the discipline the bon a tirer exists to serve.",
            sourceLessonSlug: "the-bon-a-tirer",
          },
          {
            prompt: "The bon a tirer is described as:",
            options: ["Not for sale and not numbered", "The most valuable impression in any edition, and therefore sold first", "Numbered as zero, so that it sits at the head of the sequence in a catalogue", "One of the three archive copies, and therefore not available to the printer at all"],
            correctIndex: 0,
            explanation: "And it does not belong to the artist. At Tamarind it is the printer's.",
            sourceLessonSlug: "the-bon-a-tirer",
          },
          {
            prompt: "The reason the printer keeps the bon a tirer is described as:",
            options: ["Functional", "Ceremonial, marking the completion of the collaboration between the two parties", "Contractual, because workshop agreements require the printer to retain one impression", "Financial, since the proof is the printer's only compensation for the edition"],
            correctIndex: 0,
            explanation: "The printer needs the reference in hand while matching the rest of the run to it.",
            sourceLessonSlug: "the-bon-a-tirer",
          },
          {
            prompt: "Every section of this course after Section 2 is about people who did what?",
            options: ["Built something outward facing", "Campaigned to change the signature convention through professional associations", "Documented their own contributions in workshop records for later researchers", "Refused to print for artists who would not credit them on the finished sheet"],
            correctIndex: 0,
            explanation: "Having understood that the printer's credit system is complete, functional, and invisible outside the trade.",
            sourceLessonSlug: "the-bon-a-tirer",
          },
          {
            prompt: "A chop may alternatively be applied how, rather than embossed?",
            options: ["Stamped in ink on the back", "Written in pencil beside the artist's signature in the lower margin", "Printed as part of the image itself, using an additional run through the press", "Perforated through the sheet, in the manner of a library ownership mark"],
            correctIndex: 0,
            explanation: "Tamarind's definition allows for either an embossing or an ink stamp on the reverse.",
            sourceLessonSlug: "the-chop-that-carries-no-name",
          },
          {
            prompt: "June Wayne directed Tamarind during which years?",
            options: ["1960 to 1970", "1948 to 1960, before handing the workshop to a university based successor", "1957 to 1963, the same span Robert Blackburn spent at Universal Limited Art Editions", "1970 to 1992, when the workshop's printer training programme reached its present form"],
            correctIndex: 0,
            explanation: "Clinton Adams became director in 1970 and re-established the workshop at the University of New Mexico.",
            sourceLessonSlug: "the-chop-that-carries-no-name",
          },
          {
            prompt: "Adams describes Tamarind's new practices as being adopted where?",
            options: ["In most American workshops", "In European workshops first, and only later in the United States", "Nowhere else, since the practices depended on Tamarind's foundation funding", "In museums rather than workshops, as an accessioning rather than a printing standard"],
            correctIndex: 0,
            explanation: "Which is what turned one workshop's founding decision into a general convention of the American trade.",
            sourceLessonSlug: "the-chop-that-carries-no-name",
          },
          {
            prompt: "Wayne's crane comparison functions in this lesson as evidence that:",
            options: ["The skill itself was nearly extinct", "The print market had collapsed and could not support professional workshops", "Lithography was technically obsolete and had been replaced by newer processes", "American artists had lost interest in editioned work in favour of unique objects"],
            correctIndex: 0,
            explanation: "There were no master printers in the United States able to work with the creative spectrum of the country's artists.",
            sourceLessonSlug: "the-chop-that-carries-no-name",
          },
          {
            prompt: "The section's overall finding about the printer's credit is that it was:",
            options: ["Moved, not abolished", "Never created, because no workshop recorded who printed what before 1960", "Abolished deliberately by publishers who wanted a single name on each edition", "Left to the discretion of individual artists, some of whom credited their printers"],
            correctIndex: 0,
            explanation: "Moved to places the public does not read: a wordless chop, an archived sheet, and an unsold proof.",
            sourceLessonSlug: "the-chop-that-carries-no-name",
          },
          {
            prompt: "A viewer who wants to know who made a print will characteristically:",
            options: ["Look at the print", "Request the edition's documentation from the workshop that published it", "Consult a published reference work mapping chop marks to individual printers", "Contact the archive holding the retained impressions and ask for the record"],
            correctIndex: 0,
            explanation: "Which is exactly why a credit that lives in an archive is functionally invisible however complete it is.",
            sourceLessonSlug: "the-documentation-sheet",
          },
          {
            prompt: "A \"registrar\", in the vocabulary of this section, is:",
            options: ["The function that keeps records of what an object is", "The workshop employee who operates the press under the master printer's direction", "The official who assigns edition numbers to impressions as they are pulled", "The dealer who maintains the ownership history of a print as it changes hands"],
            correctIndex: 0,
            explanation: "And how it came to be, which is where a relocated credit typically ends up.",
            sourceLessonSlug: "the-documentation-sheet",
          },
          {
            prompt: "\"Invisible-when-successful\" describes expertise whose achievement is:",
            options: ["The absence of variation", "So technically advanced that only other practitioners can evaluate it", "Recorded in a document that the general public has no right to consult", "Performed before the work is begun, so no trace of it survives in the object"],
            correctIndex: 0,
            explanation: "Which makes it structurally hard to credit, because there is nothing for an observer to point at.",
            sourceLessonSlug: "the-bon-a-tirer",
          },
          {
            prompt: "Tamarind's approach to editions was designed in contrast to earlier practices Adams calls:",
            options: ["Loose and at times corrupt", "Undocumented, but honest, and adequate for the smaller editions of the period", "Legally sound but commercially naive, which is why the workshops did not survive", "European, and therefore unsuited to the scale of American artistic production"],
            correctIndex: 0,
            explanation: "His phrasing, and the stated reason for full documentation plus two chops on every proof or impression.",
            sourceLessonSlug: "the-chop-that-carries-no-name",
          },
          {
            prompt: "The documentation sheet travels with which part of the edition?",
            options: ["The archive copy", "Each numbered impression, folded into the backing board when it is framed", "The bon a tirer, since that is the impression the record describes most precisely", "None of it, because the sheet is retained separately by the workshop's own office"],
            correctIndex: 0,
            explanation: "It follows the impressions retained for the archives, where anyone can in principle consult it and almost nobody ever does.",
            sourceLessonSlug: "the-documentation-sheet",
          },
          {
            prompt: "The claim that the printer is a signatory to the document defining the work means the printer is:",
            options: ["Not merely credited in the archive", "Legally a co-author of the image for the purposes of copyright registration", "Entitled to a share of the proceeds from every impression that is later sold", "Able to veto the release of the edition if the artist's approval seems premature"],
            correctIndex: 0,
            explanation: "The printer signs the record that establishes what the edition actually is, which is a stronger position than being listed in it.",
            sourceLessonSlug: "the-documentation-sheet",
          },
          {
            prompt: "Which pairing correctly matches a credit form to where it is kept?",
            options: ["Bon a tirer, kept in the shop", "Chop, kept in the university art museum archive alongside the retained impressions", "Documentation sheet, kept by the collector who buys the first numbered impression", "Artist's proof, kept by the printer as the reference standard for the whole run"],
            correctIndex: 0,
            explanation: "The chop is on the sheet, the documentation is in the archive, and the bon a tirer stays with the printer.",
            sourceLessonSlug: "the-bon-a-tirer",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3 — Robert Blackburn, the case
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "blackburn-learns-the-stone",
      title: "9 · Blackburn learns the stone",
      section: "Section 3 · Robert Blackburn, the case",
      body: `Robert Blackburn was born in Summit, New Jersey, in 1920 and died in New York City in 2003. He grew up in Harlem, and the way he entered printmaking is itself a fact about how credit gets routed.

**He learned lithography in a free public programme.** From the age of thirteen he made and studied art at the 135th Street Branch of the New York Public Library and at the Harlem YMCA. At DeWitt Clinton High School he contributed artwork, stories and poetry to the school literary magazine, The Magpie. He took part in the Harlem Arts Workshop, the Uptown Art Laboratory, and the Harlem arts salon known as 306. The Library of Congress states plainly where the medium came from: "Lithography classes offered at the WPA-sponsored Harlem Community Art Center introduced him to the art of printmaking" (Library of Congress, 2003a).

**The people in that room matter.** The Harlem Community Art Center was initiated by the sculptor Augusta Savage and the artist and writer Gwendolyn Bennett. Blackburn's lithography teacher there was Riva Helfond. His colleagues in this period included Romare Bearden, Ernest Crichlow, Roy DeCarava and Jacob Lawrence, and he was mentored by Charles Alston, Savage and James Lesesne Wells (Library of Congress, 2003a). The Library of Congress makes one further observation that this course will pick up in Section 4: the centre "became a model for Blackburn's own workshop years later".

**Then the standard training, and the pattern that follows it.** After graduating high school in 1940 he attended the Art Students League in New York on scholarship until 1943, where he worked with the painter and printmaker Will Barnet, who became a lifelong friend. For four years he freelanced as a graphic artist for institutions including the Harmon Foundation, the China Institute of America and Associated American Artists (Library of Congress, 2003b).

**Notice what that biography is made of.** A free WPA class, a public library, a high school magazine, a scholarship, and four years of freelance graphic work for other people's institutions. Every step is a place where somebody else's name is on the door. None of them is a place where an unknown young artist accumulates a signature of his own.

**The routing question from Section 1 is now answerable in his case.** He entered the medium through its technical door, learned to print at a professional standard early, and became useful to other artists at exactly the moment when American publishers needed somebody who could do it. That is not a story about anyone's malice. It is a description of how a person ends up in the unnamed category.

:::reveal Where did Blackburn first learn lithography, and who initiated that institution? ||| At the WPA-sponsored Harlem Community Art Center, which was initiated by Augusta Savage and Gwendolyn Bennett. His lithography teacher there was Riva Helfond.

:::reveal Who did Blackburn meet at the Art Students League who became a lifelong friend and collaborator? ||| The painter and printmaker Will Barnet. Blackburn attended the League on scholarship from 1940 to 1943.

## Vocabulary
- **Harlem Community Art Center**: the WPA sponsored centre where Blackburn was introduced to printmaking, initiated by Augusta Savage and Gwendolyn Bennett.
- **WPA**: the Works Progress Administration, the Depression era federal programme that funded the art centres and classes named in this lesson.
- **Art Students League**: the New York art school Blackburn attended on scholarship from 1940 to 1943, where he met Will Barnet.
- **Technical door**: the entry route into a medium through its craft rather than through its authorship, which is where the routing question from Section 1 begins.

## Sources
Library of Congress. (2003a). *Milieu: The Harlem Community Art Center and the WPA*. In *Creative space: Fifty years of Robert Blackburn's Printmaking Workshop* [Exhibition]. https://www.loc.gov/exhibits/blackburn/blackburn-milieu.html

Library of Congress. (2003b). *Founding the Printmaking Workshop*. In *Creative space: Fifty years of Robert Blackburn's Printmaking Workshop* [Exhibition]. https://www.loc.gov/exhibits/blackburn/blackburn-founding.html`,
    },
    {
      slug: "the-first-seventy-nine",
      title: "10 · The first seventy-nine editions",
      section: "Section 3 · Robert Blackburn, the case",
      body: `This is the artifact the whole course turns on, and it is checkable in one place.

**The appointment.** Blackburn spent 1953 and 1954 in Europe, mostly in Paris, on a John Hay Whitney Traveling Fellowship. After he returned, the Library of Congress records, "he was hired in 1957 as the first master printer at Universal Limited Art Editions (ULAE), the lithographic venture founded by Tatyana and Maurice Grosman, based in West Islip, Long Island" (Library of Congress, 2003c). He held the post from 1957 to 1963.

**The number.** The Library of Congress states it directly: "He printed the first seventy-nine editions for the seminal workshop, setting the standard by which ULAE exerted a powerful influence on modernist printmaking in America" (Library of Congress, 2003d). Seventy-nine editions, all of them the output of one pair of hands at the press.

**The artists.** At ULAE he printed for Larry Rivers, Grace Hartigan, Helen Frankenthaler, Robert Rauschenberg, Jim Dine and Jasper Johns. And the Library of Congress adds the sentence that makes this a case about authorship rather than about labour: "In most cases, he taught the artists how to make lithographs, sharing his sensibility of the medium and his approach to the stone" (Library of Congress, 2003c). The same source says his own fluency with the medium "contributed to the new look of these works", the look that went on to define the American graphics boom.

**Now apply the convention from Section 1.** Those editions were published under the names of the artists who drew them, and every impression carried the artist's signature, because that is what the convention requires of every workshop and every printer. Blackburn's name is not on the front of a single one.

**And now say precisely what this does and does not prove.** It does NOT prove that anyone stole anything, and the course said so in Section 1. What it proves is sharper. It proves that the run of editions which set the technical standard for American modernist printmaking, taught its most famous practitioners the medium, and shaped what the resulting prints look like, was produced by a person whose name appears on none of them, because the format had one slot and the convention had already decided whose name went in it.

That is the mechanism working exactly as designed, on the most consequential possible case, with a number attached that you can go and verify.

:::reveal What post did Blackburn take in 1957, at which workshop, founded by whom? ||| First master printer at Universal Limited Art Editions, the lithographic venture founded by Tatyana and Maurice Grosman at West Islip on Long Island. He held it until 1963.

:::reveal How many editions did Blackburn print for ULAE, and what does the Library of Congress say that run accomplished? ||| The first seventy-nine. It set the standard by which ULAE exerted a powerful influence on modernist printmaking in America.

:::reveal What does the seventy-nine editions figure prove, and what does it NOT prove? ||| It proves that the run which set the standard for American modernist printmaking was made by someone named on none of it. It does not prove theft, because the convention withholds a signature from every printer.

## Vocabulary
- **Universal Limited Art Editions (ULAE)**: the lithographic publishing workshop founded by Tatyana and Maurice Grosman at West Islip, Long Island, where Blackburn was the first master printer.
- **John Hay Whitney Traveling Fellowship**: the award that took Blackburn to Europe, mostly Paris, in 1953 and 1954.
- **Graphics boom**: the surge in American fine art printmaking from the late 1950s onward, whose look the Library of Congress credits Blackburn's fluency with helping to form.
- **Consequential case**: an instance chosen because the mechanism operating on it changed the field, which is what makes the seventy-nine editions the strongest evidence in this course.

## Sources
Library of Congress. (2003c). *A graphics explosion*. In *Creative space: Fifty years of Robert Blackburn's Printmaking Workshop* [Exhibition]. https://www.loc.gov/exhibits/blackburn/blackburn-graphics.html

Library of Congress. (2003d). *Overview*. In *Creative space: Fifty years of Robert Blackburn's Printmaking Workshop* [Exhibition]. https://www.loc.gov/exhibits/blackburn/blackburn-overview.html`,
    },
    {
      slug: "the-founding-year-problem",
      title: "11 · A founding year that will not settle",
      section: "Section 3 · Robert Blackburn, the case",
      body: `Blackburn's own workshop has two founding years in circulation, and this course is not going to pick one for you. Here is the disagreement, both sides named, and what it teaches.

**Position one: 1948, held by the Library of Congress.** Its exhibition overview says Blackburn "changed the course of American art through his graphic work and the Printmaking Workshop, which he founded in New York City in 1948", and adds that "in 1948, he opened his own studio, the Printmaking Workshop, launching the oldest and largest non-profit print workshop in the United States" (Library of Congress, 2003d). Its founding page is more specific still, and this is the sentence that explains the whole dispute: "By late 1947, he had acquired his own lithographic press. In 1948, he opened his own studio in Chelsea, printing for artists and encouraging his friends to experiment in lithography" (Library of Congress, 2003b).

**Position two: 1947, held by the workshop's own successor.** The Robert Blackburn Printmaking Workshop, now a programme of the Elizabeth Foundation for the Arts, dates the decision to late winter 1947 and places the shop on 17th Street (Robert Blackburn Printmaking Workshop, n.d.).

**Why both can be honest.** They are answering slightly different questions. If founding means acquiring the press and beginning to print, late 1947 is right. If founding means opening a studio that other artists could come to, 1948 is right. There is no lie here and there may be no error either: there is a continuous process being reported by two institutions who each drew the line at a different event.

**What NOT to do with it.** Do not average them. Do not quietly pick the one that reads better. Do not cite only the source that agrees with you, which is the most common and least visible way a history goes wrong. Report the disagreement, name who holds each position, and say what would settle it.

**What would settle it.** A dated primary document: a lease or rent receipt for the studio premises, a dated invoice for the press, a contemporaneous letter, or a listing in a city directory. Until one of those is on the table this stays open, and this course files it as an open question rather than resolving it in prose.

**One thing both sides agree on, and it matters more than the year.** In 1971 the Printmaking Workshop became a non-profit corporation, with a mission the Library of Congress records as maintaining creative and artistic quality, supporting and encouraging innovation, creating opportunities for Third World and minority artists, and fostering public appreciation of the fine art print (Library of Congress, 2003d). The founding year is contested. What the thing was for is not.

:::reveal Name the two positions on the Printmaking Workshop's founding year and who holds each. ||| The Library of Congress says 1948, when Blackburn opened his own studio in Chelsea. The Robert Blackburn Printmaking Workshop, now a programme of the Elizabeth Foundation for the Arts, says late winter 1947.

:::reveal Why can both dates be honest rather than one being an error? ||| Because they mark different events in one continuous process: acquiring the press and beginning to print in late 1947, and opening a studio other artists could come to in 1948.

:::reveal What kind of evidence would actually settle the founding year? ||| A dated primary document: a lease or rent receipt for the premises, a dated invoice for the press, a contemporaneous letter, or a city directory listing.

## Vocabulary
- **Contested claim**: a factual question on which credible sources genuinely disagree, which this catalog teaches as a disagreement rather than resolving by assertion.
- **Founding event**: the specific act a source treats as the beginning of an institution, which differs between sources and produces apparently conflicting dates.
- **Primary document**: a record made at the time by a participant, such as a lease, invoice, letter or directory listing, which is what a date dispute needs.
- **Selective citation**: quoting only the source that supports your preferred answer, the most common and least visible way a history goes wrong.

## Sources
Library of Congress. (2003b). *Founding the Printmaking Workshop*. In *Creative space: Fifty years of Robert Blackburn's Printmaking Workshop* [Exhibition]. https://www.loc.gov/exhibits/blackburn/blackburn-founding.html

Library of Congress. (2003d). *Overview*. In *Creative space: Fifty years of Robert Blackburn's Printmaking Workshop* [Exhibition]. https://www.loc.gov/exhibits/blackburn/blackburn-overview.html

Robert Blackburn Printmaking Workshop. (n.d.). *History*. Elizabeth Foundation for the Arts. https://www.rbpmw-efanyc.org/about`,
    },
    {
      slug: "quiz-blackburn",
      title: "12 · Knowledge check: Blackburn and the record",
      section: "Section 3 · Robert Blackburn, the case",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "Robert Blackburn's dates are:",
            options: ["1920 to 2003", "1918 to 1979, the same span as the painter and printmaker Charles White", "1917 to 2010, matching the founder of the museum now called the DuSable", "1937 to 2020, which places him a full generation after the Harlem Renaissance"],
            correctIndex: 0,
            explanation: "Born in Summit, New Jersey, in 1920; died in New York City in 2003.",
            sourceLessonSlug: "blackburn-learns-the-stone",
          },
          {
            prompt: "Where was Blackburn born?",
            options: ["Summit, New Jersey", "Harlem, in the New York City neighbourhood where he later grew up and studied", "West Islip, Long Island, the village where Universal Limited Art Editions was based", "Chicago, where he would later train alongside members of the Southside Art Center"],
            correctIndex: 0,
            explanation: "He was born in New Jersey and grew up in Harlem, which is where he entered printmaking.",
            sourceLessonSlug: "blackburn-learns-the-stone",
          },
          {
            prompt: "According to the Library of Congress, what introduced Blackburn to printmaking?",
            options: ["Lithography classes at the Harlem Community Art Center", "A commercial apprenticeship at a Manhattan lithographic printing company in the 1930s", "A course at the Art Students League taught by the painter and printmaker Will Barnet", "An assignment from the Harmon Foundation requiring him to produce editioned work"],
            correctIndex: 0,
            explanation: "The centre was sponsored by the WPA, and its classes are where the medium reached him.",
            sourceLessonSlug: "blackburn-learns-the-stone",
          },
          {
            prompt: "Who initiated the Harlem Community Art Center?",
            options: ["Augusta Savage and Gwendolyn Bennett", "Charles Alston and James Lesesne Wells, both of whom mentored Blackburn there", "The Harmon Foundation, as part of its programme of support for Black artists", "Romare Bearden and Jacob Lawrence, who were among Blackburn's colleagues in the period"],
            correctIndex: 0,
            explanation: "The sculptor Augusta Savage and the artist and writer Gwendolyn Bennett.",
            sourceLessonSlug: "blackburn-learns-the-stone",
          },
          {
            prompt: "Who taught Blackburn lithography at the Harlem Community Art Center?",
            options: ["Riva Helfond", "Will Barnet, whom he later credited as a vital supporter of the Printmaking Workshop", "Charles Alston, who had absorbed the lessons of the Mexican muralists in the 1930s", "John Von Wicht, who had worked at a lithographic printing company after arriving in New York"],
            correctIndex: 0,
            explanation: "Helfond was his lithography teacher there; Barnet and Von Wicht became supporters of the workshop later.",
            sourceLessonSlug: "blackburn-learns-the-stone",
          },
          {
            prompt: "The Library of Congress says the Harlem Community Art Center became what for Blackburn?",
            options: ["A model for his own workshop", "The venue for his first solo exhibition of lithographs, held shortly after the war", "The employer that paid him a salary throughout his years at the Art Students League", "The archive that received his early drawings when the WPA programmes were wound up"],
            correctIndex: 0,
            explanation: "A model for his own workshop years later, which is the thread Section 4 picks up.",
            sourceLessonSlug: "blackburn-learns-the-stone",
          },
          {
            prompt: "From what age did Blackburn make and study art at the 135th Street Branch library and the Harlem YMCA?",
            options: ["Thirteen", "Seventeen, immediately after he graduated from DeWitt Clinton High School", "Twenty, when he began his scholarship at the Art Students League in New York", "Nine, which is when the WPA first opened its art programmes to school age children"],
            correctIndex: 0,
            explanation: "The Library of Congress records his study at both institutions from age thirteen.",
            sourceLessonSlug: "blackburn-learns-the-stone",
          },
          {
            prompt: "The Magpie was:",
            options: ["His high school's literary magazine", "The Harlem arts salon better known by its street number, 306", "The printmaking cooperative Blackburn joined after leaving the Art Students League", "The journal in which his colour lithographs with Will Barnet were later featured"],
            correctIndex: 0,
            explanation: "At DeWitt Clinton High School he contributed artwork, stories and poetry to it.",
            sourceLessonSlug: "blackburn-learns-the-stone",
          },
          {
            prompt: "Blackburn attended the Art Students League on scholarship during which years?",
            options: ["1940 to 1943", "1936 to 1940, before he graduated from DeWitt Clinton High School in Harlem", "1953 and 1954, the years he also spent travelling in Europe on a fellowship", "1957 to 1963, in parallel with his appointment at Universal Limited Art Editions"],
            correctIndex: 0,
            explanation: "Following his high school graduation in 1940, until 1943.",
            sourceLessonSlug: "blackburn-learns-the-stone",
          },
          {
            prompt: "Which of these institutions did Blackburn freelance for as a graphic artist?",
            options: ["The Harmon Foundation", "The Works Progress Administration, which had employed him as a teenager in Harlem", "Universal Limited Art Editions, several years before he was hired as its master printer", "The Library of Congress, which commissioned lithographs for its national print exhibitions"],
            correctIndex: 0,
            explanation: "Along with the China Institute of America and Associated American Artists, across four years.",
            sourceLessonSlug: "blackburn-learns-the-stone",
          },
          {
            prompt: "Which colleagues from Blackburn's Harlem period does the Library of Congress name?",
            options: ["Bearden, Crichlow, DeCarava and Lawrence", "Rivers, Hartigan, Frankenthaler and Rauschenberg, whose editions he later printed", "Catlett, Burroughs, Jones-Hogu and Amos, the four women taught later in this course", "Wayne, Adams, Grosman and Barnet, the workshop founders of the following decades"],
            correctIndex: 0,
            explanation: "Romare Bearden, Ernest Crichlow, Roy DeCarava and Jacob Lawrence.",
            sourceLessonSlug: "blackburn-learns-the-stone",
          },
          {
            prompt: "The lesson's point about Blackburn's early biography is that every step was:",
            options: ["Somewhere with somebody else's name on the door", "Unusually well documented, which is why his case can be reconstructed at all", "Funded by a private foundation rather than by any federal or municipal programme", "Chosen deliberately by Blackburn to keep his own authorship out of public view"],
            correctIndex: 0,
            explanation: "A free WPA class, a public library, a high school magazine, a scholarship, and freelance work for other people's institutions.",
            sourceLessonSlug: "blackburn-learns-the-stone",
          },
          {
            prompt: "The lesson answers the routing question by saying Blackburn entered the medium through:",
            options: ["Its technical door", "A dealer who took him on before he had completed any formal training at all", "An academy that admitted him on the strength of his drawings rather than his prints", "A commission from a publisher who needed images rather than technical assistance"],
            correctIndex: 0,
            explanation: "He learned to print at a professional standard early and became useful to other artists exactly when publishers needed that.",
            sourceLessonSlug: "blackburn-learns-the-stone",
          },
          {
            prompt: "The lesson insists that Blackburn's route into the unnamed category is not a story about:",
            options: ["Anyone's malice", "Poverty, since his family were able to support his training throughout the 1930s", "Talent, because his own lithographs were never exhibited during his working life", "The WPA, whose programmes played no part in how he learned the medium"],
            correctIndex: 0,
            explanation: "It is a description of how a person ends up in the unnamed category, which is the routing question from Section 1.",
            sourceLessonSlug: "blackburn-learns-the-stone",
          },
          {
            prompt: "Blackburn spent 1953 and 1954 in Europe on which award?",
            options: ["A John Hay Whitney Traveling Fellowship", "A Julius Rosenwald Fellowship, the award that took Elizabeth Catlett to Mexico City", "A Ford Foundation grant of the kind that later established Tamarind in Los Angeles", "A MacArthur Fellowship, which he would not in fact receive until much later in life"],
            correctIndex: 0,
            explanation: "Mostly in Paris. He returned to New York and was hired at ULAE shortly afterwards.",
            sourceLessonSlug: "the-first-seventy-nine",
          },
          {
            prompt: "In what year was Blackburn hired at Universal Limited Art Editions?",
            options: ["1957", "1948, the year the Library of Congress dates the founding of his own studio", "1963, the year he began operating his Manhattan workshop full time instead", "1960, the same summer that Tamarind Lithography Workshop opened in Los Angeles"],
            correctIndex: 0,
            explanation: "He held the post of first master printer there from 1957 to 1963.",
            sourceLessonSlug: "the-first-seventy-nine",
          },
          {
            prompt: "What was Blackburn's title at ULAE?",
            options: ["First master printer", "Artistic director, with responsibility for choosing which artists the workshop published", "Studio manager, supervising a team of printers who executed the editions themselves", "Artist in residence, producing his own editions alongside the workshop's published ones"],
            correctIndex: 0,
            explanation: "The Library of Congress records the appointment in exactly those words.",
            sourceLessonSlug: "the-first-seventy-nine",
          },
          {
            prompt: "ULAE was founded by:",
            options: ["Tatyana and Maurice Grosman", "June Wayne, with financial support from the Ford Foundation", "Robert Blackburn and Will Barnet, working together after the war", "Clinton Adams, who later moved the operation to the University of New Mexico"],
            correctIndex: 0,
            explanation: "The lithographic venture was based at West Islip on Long Island.",
            sourceLessonSlug: "the-first-seventy-nine",
          },
          {
            prompt: "Where was ULAE based?",
            options: ["West Islip, Long Island", "Chelsea, in Manhattan, a few blocks from the studio Blackburn opened himself", "Albuquerque, in affiliation with the College of Fine Arts at a state university", "Los Angeles, on the avenue from which the workshop took its name"],
            correctIndex: 0,
            explanation: "Blackburn commuted to the Grosmans' Long Island venture for the six years he held the post.",
            sourceLessonSlug: "the-first-seventy-nine",
          },
          {
            prompt: "How many ULAE editions did Blackburn print?",
            options: ["The first seventy-nine", "The first thirty-six, a figure taken from June Wayne's whooping crane comparison", "All of them between 1957 and 1963, a number the Library of Congress does not state", "Nine, each of them for a different artist working at the workshop in its first year"],
            correctIndex: 0,
            explanation: "The Library of Congress states the figure directly in its exhibition overview.",
            sourceLessonSlug: "the-first-seventy-nine",
          },
          {
            prompt: "What does the Library of Congress say that run of editions accomplished?",
            options: ["It set the standard by which ULAE influenced American modernist printmaking", "It made ULAE the largest publisher of editioned prints anywhere in the United States", "It established the practice of embossing a printer's chop on every American edition", "It proved that a single printer could produce an edition without any artist present"],
            correctIndex: 0,
            explanation: "Which is why this is the strongest possible case for the mechanism: the unnamed work shaped the whole field.",
            sourceLessonSlug: "the-first-seventy-nine",
          },
          {
            prompt: "Which artists did Blackburn print for at ULAE?",
            options: ["Rivers, Hartigan, Frankenthaler, Rauschenberg, Dine and Johns", "Bearden, Crichlow, DeCarava and Lawrence, his colleagues from the Harlem years", "Catlett and White, both of whom he had printed for earlier in his Chelsea studio", "Barnet and Von Wicht, the two artists most closely associated with his own workshop"],
            correctIndex: 0,
            explanation: "An emerging generation whose prints defined the American graphics boom.",
            sourceLessonSlug: "the-first-seventy-nine",
          },
          {
            prompt: "The Library of Congress says that in most cases Blackburn did what for the ULAE artists?",
            options: ["Taught them how to make lithographs", "Selected the images from their existing paintings that would work best in print", "Negotiated the terms on which the Grosmans would publish their editions", "Signed the impressions on their behalf when they were unavailable at the workshop"],
            correctIndex: 0,
            explanation: "Sharing his sensibility of the medium and his approach to the stone, which makes this a case about authorship rather than labour.",
            sourceLessonSlug: "the-first-seventy-nine",
          },
          {
            prompt: "Blackburn's fluency with lithography is credited with contributing to what?",
            options: ["The new look of the ULAE works", "The invention of the documentation sheet as a standard American workshop practice", "The decision by ULAE to publish exclusively in colour rather than in black and white", "The survival of stone lithography at a time when no American workshop still used it"],
            correctIndex: 0,
            explanation: "The look that went on to define the American graphics boom of the following decade.",
            sourceLessonSlug: "the-first-seventy-nine",
          },
          {
            prompt: "Whose signature appears on the seventy-nine ULAE editions?",
            options: ["The artist who drew each one", "Blackburn's, in the capacity of master printer for the whole run", "Both the artist's and Blackburn's, since ULAE followed the two chop convention", "Nobody's, because the editions were published anonymously by the Grosmans"],
            correctIndex: 0,
            explanation: "The convention requires it of every workshop and every printer, so Blackburn's name is on the front of none of them.",
            sourceLessonSlug: "the-first-seventy-nine",
          },
          {
            prompt: "The seventy-nine editions figure proves what, precisely?",
            options: ["The unnamed work shaped the whole field", "That Blackburn was denied a signature he had contractually been promised", "That ULAE published more editions in its first years than any comparable workshop", "That the Grosmans concealed their printer's identity from buyers and from critics"],
            correctIndex: 0,
            explanation: "The run that set the standard, taught the famous practitioners, and shaped the look, made by a person named on none of it.",
            sourceLessonSlug: "the-first-seventy-nine",
          },
          {
            prompt: "The mechanism described in this lesson is the format having:",
            options: ["One slot", "No record at all of who worked on a given edition of prints", "A rule requiring the publisher rather than the printer to be named on the sheet", "A preference for whichever contributor was already the better known of the two"],
            correctIndex: 0,
            explanation: "One slot, and a convention that had already decided whose name went in it.",
            sourceLessonSlug: "the-first-seventy-nine",
          },
          {
            prompt: "The Library of Congress dates the founding of the Printmaking Workshop to:",
            options: ["1948", "1947, when Blackburn acquired his own lithographic press in New York", "1971, when the operation was incorporated as a non-profit corporation", "2005, when the Elizabeth Foundation for the Arts opened the current workshop"],
            correctIndex: 0,
            explanation: "Its overview says he founded it in New York City in 1948, opening his own studio that year.",
            sourceLessonSlug: "the-founding-year-problem",
          },
          {
            prompt: "The workshop's own successor organisation dates the founding to:",
            options: ["Late winter 1947", "The summer of 1960, matching the opening of Tamarind in Los Angeles", "1943, immediately after Blackburn left the Art Students League", "1963, when Blackburn began running the Manhattan shop full time"],
            correctIndex: 0,
            explanation: "The Robert Blackburn Printmaking Workshop, a programme of the Elizabeth Foundation for the Arts, places the shop on 17th Street.",
            sourceLessonSlug: "the-founding-year-problem",
          },
          {
            prompt: "According to the Library of Congress, what had Blackburn acquired by late 1947?",
            options: ["His own lithographic press", "A lease on the Chelsea premises where the studio would eventually open", "A commission from Associated American Artists to produce an editioned portfolio", "An intaglio press abandoned by Atelier 17 when that workshop returned to Europe"],
            correctIndex: 0,
            explanation: "That sentence is what explains the whole dispute: the press came in late 1947, the studio opened in 1948.",
            sourceLessonSlug: "the-founding-year-problem",
          },
          {
            prompt: "Why can both founding dates be honest?",
            options: ["They mark different events in one process", "Because one source is describing the workshop and the other the non-profit corporation", "Because the calendar year was reckoned differently by the two institutions involved", "Because one source is reporting the American date and the other the European one"],
            correctIndex: 0,
            explanation: "Acquiring the press and beginning to print, versus opening a studio other artists could come to.",
            sourceLessonSlug: "the-founding-year-problem",
          },
          {
            prompt: "Which of these does this course forbid doing with a contested date?",
            options: ["Averaging the two", "Reporting both, with the name of the institution that holds each position", "Filing it as an open question with a statement of what evidence would close it", "Saying in the lesson itself that the sources genuinely disagree about the year"],
            correctIndex: 0,
            explanation: "Along with quietly picking the one that reads better, and citing only the source that agrees with you.",
            sourceLessonSlug: "the-founding-year-problem",
          },
          {
            prompt: "\"Selective citation\" is described as:",
            options: ["The least visible way a history goes wrong", "A legitimate editorial choice when one source is clearly more authoritative", "The practice of citing a source for a claim it does not actually make anywhere", "Quoting a source accurately but omitting the page number so it cannot be checked"],
            correctIndex: 0,
            explanation: "Quoting only the source that supports your preferred answer, which leaves no visible trace in the finished text.",
            sourceLessonSlug: "the-founding-year-problem",
          },
          {
            prompt: "What kind of evidence would settle the founding year?",
            options: ["A dated primary document", "A statement from the Elizabeth Foundation for the Arts confirming its preferred date", "A published biography written by someone who knew Blackburn during the 1940s", "A consensus reached between the Library of Congress and the current workshop"],
            correctIndex: 0,
            explanation: "A lease or rent receipt, a dated invoice for the press, a contemporaneous letter, or a city directory listing.",
            sourceLessonSlug: "the-founding-year-problem",
          },
          {
            prompt: "Where does the Library of Congress place Blackburn's own studio?",
            options: ["Chelsea", "West Islip, Long Island, alongside the workshop run by the Grosmans", "Harlem, near the community art centre where he had first learned lithography", "Albuquerque, in affiliation with the College of Fine Arts at the state university"],
            correctIndex: 0,
            explanation: "The successor organisation places the shop on 17th Street, which is in the same district of Manhattan.",
            sourceLessonSlug: "the-founding-year-problem",
          },
          {
            prompt: "In what year did the Printmaking Workshop become a non-profit corporation?",
            options: ["1971", "1948, the year the Library of Congress dates its founding as a studio", "2005, when the Elizabeth Foundation for the Arts opened the current shop", "1963, when Blackburn left ULAE to run the Manhattan operation full time"],
            correctIndex: 0,
            explanation: "This is the date both sides of the founding year dispute agree on.",
            sourceLessonSlug: "the-founding-year-problem",
          },
          {
            prompt: "Which was part of the 1971 non-profit mission as the Library of Congress records it?",
            options: ["Creating opportunities for Third World and minority artists", "Certifying master printers through a formal two semester training programme", "Publishing a reference work mapping American printers' chop marks to their names", "Establishing an archive of American editions at a university art museum"],
            correctIndex: 0,
            explanation: "Along with maintaining creative and artistic quality, encouraging innovation, and fostering public appreciation of the fine art print.",
            sourceLessonSlug: "the-founding-year-problem",
          },
          {
            prompt: "The lesson says the founding year is contested but what is not?",
            options: ["What the workshop was for", "Who founded it, since both sources name Blackburn without qualification", "Where it was located, since both sources place it in the same city block", "When it closed, which both sources date to the beginning of the 2000s"],
            correctIndex: 0,
            explanation: "The 1971 mission language settles the purpose even while the date stays open.",
            sourceLessonSlug: "the-founding-year-problem",
          },
          {
            prompt: "This course handles the unresolved founding year by:",
            options: ["Filing it as an open question", "Choosing the Library of Congress date, as the more authoritative institution", "Choosing the workshop's own date, since an institution knows its own history", "Omitting any date, so that no learner ever encounters the disagreement at all"],
            correctIndex: 0,
            explanation: "Rather than resolving it in prose. A hedge with no filed check is a hedge nobody will ever clear.",
            sourceLessonSlug: "the-founding-year-problem",
          },
          {
            prompt: "The Robert Blackburn Printmaking Workshop is now a programme of:",
            options: ["The Elizabeth Foundation for the Arts", "The Library of Congress Prints and Photographs Division", "Universal Limited Art Editions, which absorbed it after Blackburn's death", "The University of New Mexico College of Fine Arts, alongside Tamarind"],
            correctIndex: 0,
            explanation: "Which is why the successor organisation's own history page is a party to the founding year dispute.",
            sourceLessonSlug: "the-founding-year-problem",
          },
          {
            prompt: "A \"founding event\" is defined in this section as:",
            options: ["The act a source treats as the beginning", "The first exhibition an institution mounts after opening its doors", "The moment an organisation is granted non-profit status by the tax authorities", "The date the founder first stated publicly that the institution existed"],
            correctIndex: 0,
            explanation: "Different sources pick different acts, which is what produces apparently conflicting dates.",
            sourceLessonSlug: "the-founding-year-problem",
          },
          {
            prompt: "Blackburn left ULAE in which year, and to do what?",
            options: ["1963, to run his own workshop full time", "1971, to incorporate the Printmaking Workshop as a non-profit corporation", "1957, to take up the John Hay Whitney Traveling Fellowship in Paris", "1948, to open his own studio in Chelsea and print for other artists there"],
            correctIndex: 0,
            explanation: "He began operating his Manhattan workshop full time in 1963, providing an open studio for artists of diverse backgrounds.",
            sourceLessonSlug: "the-first-seventy-nine",
          },
          {
            prompt: "The Library of Congress describes the Printmaking Workshop as the oldest and largest what?",
            options: ["Non-profit print workshop in the United States", "Collection of American editioned prints held outside a federal institution", "Training programme for professional collaborative printers anywhere in the world", "Continuously operating lithographic publisher in the state of New York"],
            correctIndex: 0,
            explanation: "In the sentence that also dates its opening to 1948.",
            sourceLessonSlug: "the-founding-year-problem",
          },
          {
            prompt: "The \"consequential case\" idea means an example is chosen because:",
            options: ["The mechanism operating on it changed the field", "Its documents survive in an institutional archive that anyone may consult", "The person involved was more talented than others in the same position", "It is the earliest recorded instance of the mechanism anywhere in the record"],
            correctIndex: 0,
            explanation: "Which is what makes the seventy-nine editions the strongest evidence in this course.",
            sourceLessonSlug: "the-first-seventy-nine",
          },
          {
            prompt: "Section 3's overall argument about Blackburn is that his case demonstrates:",
            options: ["The mechanism working as designed", "An exception to the convention, which ULAE applied more strictly than other workshops", "A deliberate decision by named individuals to withhold credit from one printer", "That the convention had already begun to break down by the end of the 1950s"],
            correctIndex: 0,
            explanation: "On the most consequential possible case, with a number attached that you can go and verify.",
            sourceLessonSlug: "the-first-seventy-nine",
          },
          {
            prompt: "A \"primary document\", as this section defines it, is a record made:",
            options: ["At the time, by a participant", "By an institution after reviewing all the available secondary literature", "By a historian working directly from the surviving objects rather than from texts", "By a court, and therefore admissible as evidence in a later dispute over dates"],
            correctIndex: 0,
            explanation: "A lease, an invoice, a letter, a directory listing. Which is what a date dispute needs and what this one lacks.",
            sourceLessonSlug: "the-founding-year-problem",
          },
          {
            prompt: "Section 3 rests almost entirely on which institutional source?",
            options: ["A Library of Congress exhibition", "The Elizabeth Foundation for the Arts, which now runs the workshop in his name", "The Tamarind Institute archive at the University of New Mexico Art Museum", "The Studio Museum in Harlem, which holds the largest collection of his prints"],
            correctIndex: 0,
            explanation: "Creative Space: Fifty Years of Robert Blackburn's Printmaking Workshop, whose pages carry every date and figure in this section.",
            sourceLessonSlug: "the-first-seventy-nine",
          },
          {
            prompt: "The Harlem arts salon Blackburn took part in was known as:",
            options: ["306", "The Magpie, after the literary magazine at DeWitt Clinton High School", "Atelier 17, the Parisian studio that spent the war years in New York", "The Uptown Art Laboratory, which was in fact a separate programme he also joined"],
            correctIndex: 0,
            explanation: "He also participated in the Harlem Arts Workshop and the Uptown Art Laboratory, which were distinct from the salon.",
            sourceLessonSlug: "blackburn-learns-the-stone",
          },
          {
            prompt: "\"Contested claim\" means a question on which:",
            options: ["Credible sources genuinely disagree", "One source is known to be wrong but continues to be cited by others", "No source has yet said anything, so the answer must be inferred from context", "The disagreement concerns interpretation rather than any matter of fact"],
            correctIndex: 0,
            explanation: "This catalog teaches such a question as a disagreement rather than resolving it by assertion.",
            sourceLessonSlug: "the-founding-year-problem",
          },
          {
            prompt: "The most important thing the founding year dispute teaches is a method for:",
            options: ["Reporting a disagreement instead of resolving it", "Deciding which of two institutions is generally the more reliable", "Recovering a date from indirect evidence when no primary record survives", "Persuading two institutions to align their published accounts of an event"],
            correctIndex: 0,
            explanation: "Name both positions, name who holds each, and state what would settle it.",
            sourceLessonSlug: "the-founding-year-problem",
          },
          {
            prompt: "Blackburn's Manhattan workshop after 1963 is described as providing what?",
            options: ["An open graphics studio", "A commercial publishing operation issuing editions under its own imprint", "A certification programme for printers modelled on the Tamarind curriculum", "A private studio in which he worked alone on his own colour abstractions"],
            correctIndex: 0,
            explanation: "For artists of diverse social and economic backgrounds, ethnicities, styles and levels of expertise.",
            sourceLessonSlug: "the-first-seventy-nine",
          },
          {
            prompt: "The Section 3 evidence is strong specifically because it is:",
            options: ["Checkable in one place", "Drawn from oral history rather than from institutional publications", "Uncontested, with no disagreement anywhere in the sources it relies on", "Recent enough that the participants can still be interviewed about it"],
            correctIndex: 0,
            explanation: "One Library of Congress exhibition carries the appointment, the number, the artists and the teaching claim.",
            sourceLessonSlug: "the-first-seventy-nine",
          },
          {
            prompt: "Blackburn's title of first master printer means he was first at:",
            options: ["ULAE", "Any American workshop, since no such role existed before 1957", "Tamarind, where the master printer certification later took its name", "The Printmaking Workshop, once it incorporated as a non-profit in 1971"],
            correctIndex: 0,
            explanation: "The claim is specific to that workshop, and this course does not widen it beyond what the source says.",
            sourceLessonSlug: "the-first-seventy-nine",
          },
          {
            prompt: "The 1971 mission's phrase about public appreciation concerned:",
            options: ["The fine art print", "The careers of the printers who worked at the shop over its history", "The Harlem institutions that had trained the workshop's founder as a teenager", "The archive of documentation sheets the workshop had accumulated since 1948"],
            correctIndex: 0,
            explanation: "Fostering public appreciation of the fine art print was one of the four stated purposes.",
            sourceLessonSlug: "the-founding-year-problem",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4 — The response: build the room
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "build-the-room",
      title: "13 · Build the room",
      section: "Section 4 · Three things built instead",
      body: `You cannot argue your way onto the front of somebody else's print. Blackburn did not try. He built the place the prints get made.

**What the workshop was.** From 1963 he ran his own Manhattan shop full time, providing an open graphics studio for artists of diverse social and economic backgrounds, ethnicities, styles and levels of expertise (Library of Congress, 2003c). The Library of Congress describes it as "renowned for its open, informal, and accommodating atmosphere", and says that through it Blackburn "has been teacher and friend to thousands of artists as master printer, technical advisor, fund raiser, diplomat, catalyst, and instigator" (Library of Congress, 2003d).

**Where the design came from.** Recall the sentence from Section 3: the Harlem Community Art Center, the free WPA programme where Blackburn learned lithography, "became a model for Blackburn's own workshop years later" (Library of Congress, 2003a). The response to the convention was to reproduce the institution that had let him in.

**What incorporation did.** In 1971 the Printmaking Workshop became a non-profit corporation with four stated purposes: to maintain creative and artistic quality, to support and encourage innovation, to create opportunities for Third World and minority artists, and to foster public appreciation of the fine art print (Library of Congress, 2003d). Read that as a credit strategy and it is a precise one. It does not ask the convention to name printers. It changes who gets to be the artist.

**What the response eventually collected.** In 1992 Blackburn received a MacArthur Fellowship as "an educator and a printmaker" who "provided generations of artists with the chance to develop their talents" (MacArthur Foundation, 1992). Note what that citation names. Not the seventy-nine ULAE editions. The room.

**And the room outlived him.** The EFA Robert Blackburn Printmaking Workshop opened in 2005 as a programme of the Elizabeth Foundation for the Arts, a cooperative print workspace continuing his model of affordable access (Robert Blackburn Printmaking Workshop, n.d.).

**The general lesson.** A credit convention that cannot be argued with can still be routed around, and building infrastructure is the durable route. Infrastructure accumulates institutional memory, which is the fourth currency in CREDIT-00 and the only one that keeps paying out after the person stops working.

:::reveal What did the Library of Congress say the Harlem Community Art Center became for Blackburn, and why does that matter here? ||| A model for his own workshop years later. His response to the convention was to reproduce the institution that had first let him in.

:::reveal What did Blackburn's MacArthur Fellowship citation name him for? ||| Being an educator and printmaker who gave generations of artists the chance to develop their talents. It named the room, not the seventy-nine ULAE editions.

## Vocabulary
- **Open workshop**: a print studio offering access to artists regardless of background, expertise or means, which is the model Blackburn built and the EFA continues.
- **Non-profit incorporation**: the 1971 step that fixed the workshop's four purposes in a legal document rather than leaving them as a founder's habit.
- **Routing around a convention**: responding to an unchangeable credit rule by building something it does not govern, instead of contesting the rule itself.
- **Institutional memory**: from CREDIT-00, the currency of buildings, prizes and programmes, which continues paying out after a person stops working.

## Sources
Library of Congress. (2003a). *Milieu: The Harlem Community Art Center and the WPA*. In *Creative space: Fifty years of Robert Blackburn's Printmaking Workshop* [Exhibition]. https://www.loc.gov/exhibits/blackburn/blackburn-milieu.html

Library of Congress. (2003c). *A graphics explosion*. In *Creative space: Fifty years of Robert Blackburn's Printmaking Workshop* [Exhibition]. https://www.loc.gov/exhibits/blackburn/blackburn-graphics.html

Library of Congress. (2003d). *Overview*. In *Creative space: Fifty years of Robert Blackburn's Printmaking Workshop* [Exhibition]. https://www.loc.gov/exhibits/blackburn/blackburn-overview.html

MacArthur Foundation. (1992). *Robert H. Blackburn*. https://www.macfound.org/fellows/class-of-1992/robert-h-blackburn

Robert Blackburn Printmaking Workshop. (n.d.). *History*. Elizabeth Foundation for the Arts. https://www.rbpmw-efanyc.org/about`,
    },
    {
      slug: "write-it-into-the-statutes",
      title: "14 · Write it into the statutes",
      section: "Section 4 · Three things built instead",
      body: `Elizabeth Catlett's answer to the same problem was structural in a stricter sense. She joined a workshop whose founding rules had already redefined authorship.

**The workshop.** The Taller de Grafica Popular, the People's Graphic Arts Workshop in Mexico City, was established in 1937 by Leopoldo Mendez, Luis Arenal and Pablo O'Higgins. Catlett went to Mexico City in 1946, and produced her series of fifteen linocuts titled The Negro Woman there, dated 1947 and later retitled The Black Woman (Pennsylvania Academy of the Fine Arts, n.d.).

**Now read the constitution.** The workshop's foundational statutes permitted, in the words of the art historian Natalia de la Rosa, "both individual as well as collective authorship, a distribution of copies among the members, as well as quotas, profits, rules and regulations" (de la Rosa, 2021). That single clause is the answer this lesson exists to show you. A print convention that recognises only one author per sheet is a default, not a law of nature, and a workshop is free to write a different one into its own rules.

**And the working method matched the rules.** O'Higgins described the reasoning: "Our main interest is contact with the people and popular organizations. We would not achieve this without collective work, work that includes discussion, criticism, and self-criticism" (quoted in de la Rosa, 2021). Members criticised each other's work in progress. Catlett took part in the workshop's Graphic Assembly discussions in 1954, and later supported the founding of the National Union of Mexican Women in 1964 (de la Rosa, 2021).

**Compare the two responses so far.** Blackburn built a room that let more people become the named artist, leaving the naming convention itself untouched. The Taller changed the naming convention inside its own walls, by statute, before anyone arrived. Both work. They are different levers: one is access, the other is rules.

**The linocut choice is part of the answer too.** Linoleum is cheap, needs no press bed the size of a lithographic stone, and a relief block can be cut and printed with minimal equipment. A medium with a low entry cost is a medium a collective can actually run, and Section 5 develops that argument in full.

**The honest limit.** Collective authorship solves the credit question for the people inside the collective. It does nothing for a technician working in a shop that has not adopted it, which is most shops. A rule you write for yourself binds only you.

:::reveal What did the Taller de Grafica Popular's foundational statutes permit that a conventional print shop does not? ||| Both individual and collective authorship, along with a distribution of copies among members, quotas, profits, and rules and regulations.

:::reveal How do Blackburn's response and the Taller's response differ as levers? ||| Blackburn built access, letting more people become the named artist while leaving the convention intact. The Taller changed the rule itself, by statute, inside its own walls.

:::reveal What is the honest limit of the collective answer? ||| It solves the credit question only for people inside the collective. A rule a workshop writes for itself binds only that workshop, and most shops have not adopted it.

## Vocabulary
- **Taller de Grafica Popular**: the People's Graphic Arts Workshop founded in Mexico City in 1937, whose statutes permitted collective as well as individual authorship.
- **Collective authorship**: a credit rule under which a work is attributed to the group rather than to a single named maker.
- **Linocut**: a relief print cut into linoleum, cheap in materials and equipment, which is what makes it workable for a collective.
- **The Negro Woman**: Catlett's series of fifteen linocuts made at the Taller, dated 1947 and later retitled The Black Woman.

## Sources
de la Rosa, N. (2021, November 11). *The Taller de Grafica Popular: Collectivity, popular prints and transient muralism*. Afterall. https://www.afterall.org/articles/the-taller-de-grafica-popular-collectivity-popular-prints-and-transient-muralism/

Pennsylvania Academy of the Fine Arts. (n.d.). *Elizabeth Catlett, I am the Negro Woman (1947)*. https://www.pafa.org/museum/collection/item/i-am-negro-woman`,
    },
    {
      slug: "found-the-museum",
      title: "15 · Found the museum",
      section: "Section 4 · Three things built instead",
      body: `The third response goes after the currency that outlasts all the others. Margaret Taylor-Burroughs was a printmaker who worked for decades in linoleum block, and she built an institution to hold the record.

**She had already done it once.** The South Side Community Art Center in Chicago was formally established in 1940 with funds from the Works Progress Administration, by artists including Burroughs, Eldzier Cortor, Bernard Goss, Charles White, William Carter, Joseph Kersey and Archibald Motley, who were members of the Arts Craft Guild and organised themselves to pursue funding (South Side Community Art Center, n.d.). The centre notes that of more than a hundred community art centres the WPA established, it is the only one that remains open.

**Then she did it again, in her own house.** The museum now called the DuSable Black History Museum and Education Center was founded in 1961 by Dr. Margaret Taylor Burroughs and Charles Burroughs on the ground floor of their home on Chicago's South Side, under the name the Ebony Museum of Negro History and Art. The museum describes itself as the nation's first independent museum celebrating Black culture, and records Burroughs's pride that it was "the only one that grew out of the indigenous Black community" (DuSable Black History Museum and Education Center, n.d.).

**Why a museum is the strongest of the three answers, and also the slowest.** CREDIT-00 defines institutional memory as the currency of the building, the prize, the plaque, the thing a stranger encounters fifty years later without anyone explaining it. A workshop makes new named artists. A collective rewrites the rule for its own members. A museum decides what future strangers will find, which is the only one of the three that keeps operating after everyone involved is dead. It is also the one that takes decades to pay, requires continuous funding, and dies quietly if either fails.

**The pattern across all three responses.** Notice that none of these people spent their effort arguing that the print signature convention should be amended. Each of them built a thing that the convention does not govern: a room, a rule, an archive. That is what people do when a format cap is not negotiable, and it is a far better predictor of what you will find in the record than any story about protest.

**The WPA thread, which is the quiet argument of this whole section.** Blackburn learned lithography at a WPA sponsored art centre in Harlem. Burroughs and Charles White helped found one in Chicago with WPA money. Public arts funding did not name anybody on a print. It put the people in this course in rooms where the medium was available, which is a different and more durable kind of credit.

:::reveal What was the DuSable Museum originally called, who founded it, when, and where? ||| The Ebony Museum of Negro History and Art, founded in 1961 by Dr. Margaret Taylor Burroughs and Charles Burroughs on the ground floor of their home on Chicago's South Side.

:::reveal Why is founding a museum both the strongest and the slowest of the three responses in this section? ||| It decides what strangers find long after everyone involved is dead, which no workshop or collective rule does. But it takes decades to pay, needs continuous funding, and fails quietly if the funding stops.

:::reveal What does the South Side Community Art Center say distinguishes it among WPA community art centres? ||| Of more than a hundred the Works Progress Administration established, it is the only one that remains open.

## Vocabulary
- **South Side Community Art Center**: the Chicago art centre established in 1940 with WPA funds by a group including Burroughs and Charles White, and the only WPA community art centre still open.
- **Ebony Museum of Negro History and Art**: the original name of the institution founded by the Burroughses in 1961, now the DuSable Black History Museum and Education Center.
- **Arts Craft Guild**: the Chicago artists' group whose members organised the funding effort behind the South Side Community Art Center.
- **Durable credit**: recognition lodged in an institution rather than on an object, which continues to operate after its founders stop working.

## Sources
DuSable Black History Museum and Education Center. (n.d.). *About us*. https://dusablemuseum.org/about-us/

South Side Community Art Center. (n.d.). *Building legacy*. https://sscartcenter.org/about-us/building-legacy/`,
    },
    {
      slug: "quiz-things-built-instead",
      title: "16 · Knowledge check: room, rule, archive",
      section: "Section 4 · Three things built instead",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "Blackburn's response to the signature convention was to:",
            options: ["Build the place the prints get made", "Campaign for a rule change through the professional bodies of the American print trade", "Refuse further commissions until publishers agreed to print his name on the sheet", "Publish a written account of his ULAE work so the record would exist somewhere"],
            correctIndex: 0,
            explanation: "You cannot argue your way onto the front of somebody else's print, so he did not try.",
            sourceLessonSlug: "build-the-room",
          },
          {
            prompt: "From 1963, Blackburn's Manhattan shop offered access to artists of diverse:",
            options: ["Backgrounds, ethnicities, styles and expertise", "Nationalities, provided they held a formal qualification in a printmaking medium", "Disciplines, but only those already represented by a New York commercial gallery", "Ages, as part of a youth programme funded by the city's arts department"],
            correctIndex: 0,
            explanation: "The Library of Congress records exactly that range: social and economic backgrounds, ethnicities, styles and levels of expertise.",
            sourceLessonSlug: "build-the-room",
          },
          {
            prompt: "The Library of Congress calls the Printmaking Workshop renowned for its:",
            options: ["Open, informal and accommodating atmosphere", "Technical rigour, which exceeded the standards of every commercial workshop of its era", "Archive of documentation sheets, which recorded every edition it produced from 1948", "Financial independence, since it never accepted grant funding from any outside body"],
            correctIndex: 0,
            explanation: "The same passage calls Blackburn teacher and friend to thousands of artists.",
            sourceLessonSlug: "build-the-room",
          },
          {
            prompt: "Which roles does the Library of Congress list Blackburn as playing at the workshop?",
            options: ["Master printer, advisor, fund raiser, diplomat, catalyst, instigator", "Director, curator, registrar and archivist, in the manner of a small museum staff", "Publisher, dealer and agent for the artists whose editions the workshop issued", "Instructor and examiner, certifying printers on completion of an apprenticeship"],
            correctIndex: 0,
            explanation: "Technical advisor is the second in that list, and the point of the list is how little of it is printing.",
            sourceLessonSlug: "build-the-room",
          },
          {
            prompt: "The model for Blackburn's own workshop was:",
            options: ["The Harlem Community Art Center", "Universal Limited Art Editions, where he had spent six years as master printer", "The Taller de Grafica Popular, which he had visited during his fellowship in Europe", "Tamarind, whose documentation practices he adopted after it opened in 1960"],
            correctIndex: 0,
            explanation: "The free WPA programme where he learned lithography. His response was to reproduce the institution that let him in.",
            sourceLessonSlug: "build-the-room",
          },
          {
            prompt: "The 1971 incorporation is best read as a credit strategy because it:",
            options: ["Changes who gets to be the artist", "Requires the workshop to print the name of its master printer on every edition", "Transfers ownership of the workshop's archive to a public institution for safekeeping", "Establishes a certification that would let printers claim professional standing elsewhere"],
            correctIndex: 0,
            explanation: "It does not ask the convention to name printers. It creates opportunities for people to occupy the named role.",
            sourceLessonSlug: "build-the-room",
          },
          {
            prompt: "In what year did Blackburn receive a MacArthur Fellowship?",
            options: ["1992", "1971, the year the Printmaking Workshop became a non-profit corporation", "2003, the year of his death and of the Library of Congress exhibition", "1957, when he was appointed first master printer at Universal Limited Art Editions"],
            correctIndex: 0,
            explanation: "The foundation describes him as an educator and a printmaker.",
            sourceLessonSlug: "build-the-room",
          },
          {
            prompt: "The MacArthur citation credits Blackburn with:",
            options: ["Giving generations of artists the chance to develop", "Printing the first seventy-nine editions published by Universal Limited Art Editions", "Inventing the documentation practices later adopted across American workshops", "Establishing the first certification programme for professional collaborative printers"],
            correctIndex: 0,
            explanation: "It names the room, not the ULAE editions, which is the point of the lesson.",
            sourceLessonSlug: "build-the-room",
          },
          {
            prompt: "The EFA Robert Blackburn Printmaking Workshop opened in:",
            options: ["2005", "1971, at the moment the original workshop incorporated as a non-profit", "1948, which the Library of Congress gives as the original founding year", "2003, immediately after Blackburn's death, as a memorial to his teaching"],
            correctIndex: 0,
            explanation: "As a programme of the Elizabeth Foundation for the Arts, continuing the model of affordable cooperative access.",
            sourceLessonSlug: "build-the-room",
          },
          {
            prompt: "The general lesson of this response is that an unarguable convention can still be:",
            options: ["Routed around", "Repealed, if enough practitioners in a medium petition together for the change", "Ignored, since no institution actually enforces the print signature convention", "Reversed in law, which is what the 1971 incorporation was designed to achieve"],
            correctIndex: 0,
            explanation: "Building infrastructure is the durable route, because infrastructure accumulates institutional memory.",
            sourceLessonSlug: "build-the-room",
          },
          {
            prompt: "Institutional memory is described as the only currency that:",
            options: ["Keeps paying after the person stops working", "Can be transferred to another person during the holder's own lifetime", "Requires no documentation, since a building speaks for itself to any visitor", "Is recognised by every credit system rather than by one medium in particular"],
            correctIndex: 0,
            explanation: "It is the fourth currency in CREDIT-00, and the reason infrastructure is the durable route.",
            sourceLessonSlug: "build-the-room",
          },
          {
            prompt: "The Taller de Grafica Popular was established in Mexico City in:",
            options: ["1937", "1946, the year Elizabeth Catlett arrived in Mexico City to work there", "1961, the same year the Ebony Museum opened on Chicago's South Side", "1954, the year of the Graphic Assembly discussions Catlett took part in"],
            correctIndex: 0,
            explanation: "By Leopoldo Mendez, Luis Arenal and Pablo O'Higgins.",
            sourceLessonSlug: "write-it-into-the-statutes",
          },
          {
            prompt: "Who founded the Taller de Grafica Popular?",
            options: ["Mendez, Arenal and O'Higgins", "Elizabeth Catlett and Charles White, both of whom worked there in the 1940s", "Jose Guadalupe Posada, whose broadside illustrations the workshop later took up", "The National Union of Mexican Women, whose founding Catlett supported in 1964"],
            correctIndex: 0,
            explanation: "Leopoldo Mendez, Luis Arenal and Pablo O'Higgins, in 1937.",
            sourceLessonSlug: "write-it-into-the-statutes",
          },
          {
            prompt: "The Taller's foundational statutes permitted authorship that was:",
            options: ["Individual or collective", "Anonymous only, so that no member's name appeared on any print produced there", "Assigned by the workshop's director according to who had contributed most", "Reserved to founding members, with guests credited as assistants on the sheet"],
            correctIndex: 0,
            explanation: "Along with a distribution of copies among members, quotas, profits, and rules and regulations.",
            sourceLessonSlug: "write-it-into-the-statutes",
          },
          {
            prompt: "The statutes clause matters because it shows the one-author convention is:",
            options: ["A default, not a law of nature", "Enforced by Mexican law but not by law in the United States", "Applicable only to lithography, and never to relief media such as linocut", "Impossible to change without the agreement of the entire international print trade"],
            correctIndex: 0,
            explanation: "A workshop is free to write a different rule into its own constitution, and this one did.",
            sourceLessonSlug: "write-it-into-the-statutes",
          },
          {
            prompt: "Pablo O'Higgins said collective work necessarily includes discussion, criticism and:",
            options: ["Self-criticism", "Arbitration by an elected officer whenever two members disagree about a print", "Compensation, since members shared the proceeds of every edition they produced", "Publication, because a print that is not distributed serves no popular purpose"],
            correctIndex: 0,
            explanation: "He tied it to the workshop's stated interest in contact with the people and with popular organizations.",
            sourceLessonSlug: "write-it-into-the-statutes",
          },
          {
            prompt: "When did Elizabeth Catlett go to Mexico City?",
            options: ["1946", "1937, the year the Taller de Grafica Popular was established there", "1954, in order to attend the workshop's Graphic Assembly discussions", "1964, when she supported the founding of the National Union of Mexican Women"],
            correctIndex: 0,
            explanation: "She produced The Negro Woman at the Taller, a series dated 1947.",
            sourceLessonSlug: "write-it-into-the-statutes",
          },
          {
            prompt: "How many prints are in Catlett's The Negro Woman series?",
            options: ["Fifteen", "Seventy-nine, matching the number of editions Blackburn printed at ULAE", "Twenty, the size of the edition in which the series was reprinted decades later", "Forty, one for each of the artists who worked at the Taller during her first year"],
            correctIndex: 0,
            explanation: "Fifteen linocuts, dated 1947 and later retitled The Black Woman.",
            sourceLessonSlug: "write-it-into-the-statutes",
          },
          {
            prompt: "The Negro Woman series was later retitled:",
            options: ["The Black Woman", "The Graphic Assembly, after the workshop discussions it grew out of", "Sharecropper, after its single best known image, held by several museums", "I Am, in a shortened form the artist preferred in her later exhibitions"],
            correctIndex: 0,
            explanation: "The change reflected shifts in the language and politics of the intervening decades.",
            sourceLessonSlug: "write-it-into-the-statutes",
          },
          {
            prompt: "Catlett's series was made in which medium?",
            options: ["Linocut", "Colour lithography, printed from limestone at the workshop's own press", "Screenprint, the medium AfriCOBRA would later choose for the same reasons", "Intaglio etching, worked on copper plates and printed on dampened paper"],
            correctIndex: 0,
            explanation: "A relief print cut into linoleum, which is cheap in both materials and equipment.",
            sourceLessonSlug: "write-it-into-the-statutes",
          },
          {
            prompt: "Why does the linocut choice fit a collective?",
            options: ["Low entry cost", "It produces larger editions than any other printmaking medium in existence", "It requires several people to operate, which enforces collaboration by necessity", "It cannot be signed, so the question of individual authorship does not arise"],
            correctIndex: 0,
            explanation: "Linoleum is cheap, needs no bed the size of a lithographic stone, and can be cut and printed with minimal equipment.",
            sourceLessonSlug: "write-it-into-the-statutes",
          },
          {
            prompt: "The lever Blackburn used and the lever the Taller used are best described as:",
            options: ["Access and rules", "Publicity and litigation, applied to the same convention from two directions", "Training and certification, both aimed at professionalising the printer's role", "Funding and legislation, one private and the other governmental in character"],
            correctIndex: 0,
            explanation: "Blackburn built access and left the convention intact. The Taller changed the rule itself, by statute, inside its own walls.",
            sourceLessonSlug: "write-it-into-the-statutes",
          },
          {
            prompt: "The honest limit of the collective answer is that a rule a workshop writes:",
            options: ["Binds only that workshop", "Expires whenever the founding members leave the collective for other work", "Cannot be enforced without a registry of collectively authored editions", "Applies only to prints the collective sells rather than to those it exhibits"],
            correctIndex: 0,
            explanation: "It does nothing for a technician in a shop that has not adopted it, which is most shops.",
            sourceLessonSlug: "write-it-into-the-statutes",
          },
          {
            prompt: "In which year did Catlett take part in the Taller's Graphic Assembly discussions?",
            options: ["1954", "1937, when the workshop's foundational statutes were first agreed", "1947, the year her linocut series was completed at the workshop", "1964, alongside the founding of the National Union of Mexican Women"],
            correctIndex: 0,
            explanation: "She later supported the founding of the National Union of Mexican Women, in 1964.",
            sourceLessonSlug: "write-it-into-the-statutes",
          },
          {
            prompt: "The South Side Community Art Center was formally established in:",
            options: ["1940", "1961, on the ground floor of the Burroughs family home in Chicago", "1937, in parallel with the founding of the Taller in Mexico City", "1948, the year Margaret Burroughs completed her graduate study in Chicago"],
            correctIndex: 0,
            explanation: "With funds from the Works Progress Administration, by a group of artists from the Arts Craft Guild.",
            sourceLessonSlug: "found-the-museum",
          },
          {
            prompt: "Which of these artists is named among the South Side Community Art Center's founders?",
            options: ["Charles White", "Robert Blackburn, who had learned lithography at a comparable centre in Harlem", "Elizabeth Catlett, who was then working at the Taller de Grafica Popular", "Barbara Jones-Hogu, who would later found AfriCOBRA in the same city"],
            correctIndex: 0,
            explanation: "The centre's own account names Burroughs, Cortor, Goss, White, Carter, Kersey and Motley.",
            sourceLessonSlug: "found-the-museum",
          },
          {
            prompt: "What distinction does the South Side Community Art Center claim?",
            options: ["It is the only WPA art centre still open", "It was the first American art centre to admit Black artists on equal terms", "It held the first exhibition of Elizabeth Catlett's Negro Woman linocuts", "It received the largest single Works Progress Administration arts grant awarded"],
            correctIndex: 0,
            explanation: "Of more than a hundred community art centres the WPA established.",
            sourceLessonSlug: "found-the-museum",
          },
          {
            prompt: "Which group's members organised the funding effort behind that centre?",
            options: ["The Arts Craft Guild", "The Works Progress Administration's own Federal Art Project committee", "The board of the Art Institute of Chicago, which sponsored the application", "The Harlem Arts Workshop, which had already run a comparable centre in New York"],
            correctIndex: 0,
            explanation: "The founding artists were members of the Arts Craft Guild and organised themselves to discuss funding efforts.",
            sourceLessonSlug: "found-the-museum",
          },
          {
            prompt: "The DuSable museum was founded in:",
            options: ["1961", "1940, with funds from the Works Progress Administration in Chicago", "1971, matching the incorporation of Blackburn's Printmaking Workshop", "1948, when its founder completed her graduate studies at the Art Institute"],
            correctIndex: 0,
            explanation: "By Dr. Margaret Taylor Burroughs and Charles Burroughs, on the ground floor of their home.",
            sourceLessonSlug: "found-the-museum",
          },
          {
            prompt: "The museum's original name was:",
            options: ["The Ebony Museum of Negro History and Art", "The South Side Community Art Center, before it moved into its own building", "The Arts Craft Guild Collection of Negro History, held on the family's ground floor", "The DuSable Black History Museum and Education Center, which it has always been"],
            correctIndex: 0,
            explanation: "It is now the DuSable Black History Museum and Education Center.",
            sourceLessonSlug: "found-the-museum",
          },
          {
            prompt: "Where did the museum begin?",
            options: ["On the ground floor of the founders' home", "In a disused WPA art centre building on Chicago's South Side", "In a wing of the Art Institute of Chicago set aside for the collection", "In rented premises above a Black owned bookshop in the Bronzeville district"],
            correctIndex: 0,
            explanation: "Which is what the museum's phrase about growing out of the indigenous Black community refers to.",
            sourceLessonSlug: "found-the-museum",
          },
          {
            prompt: "The museum describes itself as the nation's first independent museum that:",
            options: ["Celebrates Black culture", "Was founded and operated entirely by women without any outside funding at all", "Charged no admission fee, in order to reach visitors of every economic background", "Combined a collection with a school, teaching art history to local schoolchildren"],
            correctIndex: 0,
            explanation: "And records Burroughs's pride that it was the only one to grow out of the indigenous Black community.",
            sourceLessonSlug: "found-the-museum",
          },
          {
            prompt: "Margaret Taylor-Burroughs's own printmaking practice was chiefly in:",
            options: ["Linoleum block", "Colour lithography, printed from stone in the manner Blackburn taught at ULAE", "Screenprinting, the medium her Chicago contemporaries in AfriCOBRA later adopted", "Intaglio, which she studied during a period of work in Mexico City in the 1950s"],
            correctIndex: 0,
            explanation: "She worked in it for decades, which is why she belongs in a printmaking course rather than only in a museum history.",
            sourceLessonSlug: "found-the-museum",
          },
          {
            prompt: "Why is founding a museum the strongest of the three responses?",
            options: ["It decides what strangers find later", "It is the only one that carries legal weight in a dispute over attribution", "It is the cheapest to establish, since a private home can serve as the premises", "It produces new named artists faster than either a workshop or a collective can"],
            correctIndex: 0,
            explanation: "The only one of the three that keeps operating after everyone involved is dead.",
            sourceLessonSlug: "found-the-museum",
          },
          {
            prompt: "Why is it also the slowest?",
            options: ["It takes decades to pay and needs continuous funding", "It cannot open until the founders have assembled a collection of national importance", "It requires the consent of an existing institution before it can accession any object", "It depends on a generation of scholars being trained before its holdings can be used"],
            correctIndex: 0,
            explanation: "And it dies quietly if either the time or the funding fails.",
            sourceLessonSlug: "found-the-museum",
          },
          {
            prompt: "What did none of the three responses in this section involve?",
            options: ["Arguing that the signature convention be amended", "Building an institution that the existing convention does not govern at all", "Using a medium chosen partly for how cheap it was to work in and to distribute", "Drawing on public funding from Depression era federal arts programmes"],
            correctIndex: 0,
            explanation: "Each built a thing the convention does not govern: a room, a rule, an archive.",
            sourceLessonSlug: "found-the-museum",
          },
          {
            prompt: "The quiet WPA thread running through this section is that public arts funding:",
            options: ["Put people in rooms where the medium was available", "Required every funded workshop to credit its printers by name on each edition", "Paid printers directly, which made the signature convention economically irrelevant", "Founded the museums that later collected the work of the artists it had trained"],
            correctIndex: 0,
            explanation: "It named nobody on a print, and it is a different and more durable kind of credit.",
            sourceLessonSlug: "found-the-museum",
          },
          {
            prompt: "Blackburn, Burroughs and White share which biographical fact in this section?",
            options: ["A WPA sponsored art centre", "Membership of the Taller de Grafica Popular during the 1940s and 1950s", "A MacArthur Fellowship awarded for teaching rather than for their own work", "Founding an independent museum in the city where they had trained as artists"],
            correctIndex: 0,
            explanation: "Blackburn learned lithography at one in Harlem; Burroughs and White helped found one in Chicago.",
            sourceLessonSlug: "found-the-museum",
          },
          {
            prompt: "\"Routing around a convention\" means responding to an unchangeable credit rule by:",
            options: ["Building something it does not govern", "Persuading the people who apply it to make an exception in a particular case", "Documenting every violation of it until the accumulated record forces a change", "Withdrawing from the medium entirely and working where the rule does not apply"],
            correctIndex: 0,
            explanation: "Instead of contesting the rule itself, which is what all three responses in this section have in common.",
            sourceLessonSlug: "build-the-room",
          },
          {
            prompt: "\"Durable credit\" is defined as recognition lodged in:",
            options: ["An institution rather than on an object", "A legal document rather than in a museum's published catalogue", "The memory of colleagues, which outlasts any physical record of the work", "A medium that resists deterioration, so the object itself survives longer"],
            correctIndex: 0,
            explanation: "Which is why it continues to operate after its founders stop working.",
            sourceLessonSlug: "found-the-museum",
          },
          {
            prompt: "An \"open workshop\" in this course means a print studio offering access regardless of:",
            options: ["Background, expertise or means", "Whether the artist intends to publish an edition at the end of the project", "Whether the work is figurative or abstract, which older workshops used to police", "Whether the artist has been recommended by an existing member of the studio"],
            correctIndex: 0,
            explanation: "Which is the model Blackburn built and the Elizabeth Foundation for the Arts continues.",
            sourceLessonSlug: "build-the-room",
          },
          {
            prompt: "The 1971 non-profit incorporation mattered because it put the workshop's purposes:",
            options: ["In a legal document", "Under the supervision of the Library of Congress, which then held its records", "Beyond the reach of the founder, who could no longer change them at will", "Into the hands of the artists who used it, who elected the board thereafter"],
            correctIndex: 0,
            explanation: "Rather than leaving them as a founder's habit, which is what makes them checkable today.",
            sourceLessonSlug: "build-the-room",
          },
          {
            prompt: "\"Collective authorship\" attributes a work to:",
            options: ["The group", "Whichever member of the group physically pulled the impressions from the press", "The workshop's founders, in perpetuity, regardless of who made a given print", "Nobody, since a collectively made print is treated as an anonymous object"],
            correctIndex: 0,
            explanation: "Rather than to a single named maker, which is the rule the Taller's statutes permitted.",
            sourceLessonSlug: "write-it-into-the-statutes",
          },
          {
            prompt: "The three things built instead of an argument are:",
            options: ["A room, a rule, an archive", "A press, a portfolio and a printer's certification programme", "A magazine, a prize and a public exhibition programme for unnamed technicians", "A union, a contract and a registry of every American master printer working"],
            correctIndex: 0,
            explanation: "Blackburn's workshop, the Taller's statutes, and the Burroughses' museum.",
            sourceLessonSlug: "found-the-museum",
          },
          {
            prompt: "The Taller's workshop name translates as:",
            options: ["The People's Graphic Arts Workshop", "The Popular Front Print Collective, reflecting its founders' political commitments", "The Mexican Academy of Graphic Art, a training body attached to a university", "The Workshop of Graphic Art, a short lived New York project of the late 1940s"],
            correctIndex: 0,
            explanation: "Taller de Grafica Popular, in Mexico City, founded in 1937.",
            sourceLessonSlug: "write-it-into-the-statutes",
          },
          {
            prompt: "O'Higgins tied collective working method to the workshop's interest in contact with:",
            options: ["The people and popular organizations", "The international print market, which the workshop needed in order to survive", "Museums, whose collections would eventually preserve the workshop's output", "Other collectives abroad, including the workshops then operating in the United States"],
            correctIndex: 0,
            explanation: "His stated reasoning for why collective work was necessary rather than optional.",
            sourceLessonSlug: "write-it-into-the-statutes",
          },
          {
            prompt: "Section 4's answer to the build question from Section 1 is that people build things the convention:",
            options: ["Does not govern", "Cannot afford to oppose once they have become large enough to matter", "Has always permitted, which is why the responses were uncontroversial at the time", "Will eventually adopt, since every successful workaround becomes a new standard"],
            correctIndex: 0,
            explanation: "Which is a far better predictor of what you will find in the record than any story about protest.",
            sourceLessonSlug: "found-the-museum",
          },
          {
            prompt: "The Library of Congress phrase for what Blackburn was to thousands of artists is:",
            options: ["Teacher and friend", "Employer and patron, since the workshop paid for the materials they used", "Publisher and dealer, issuing their editions under the workshop's own imprint", "Examiner and referee, deciding which artists were ready to edition their work"],
            correctIndex: 0,
            explanation: "Followed by the list beginning master printer and ending instigator.",
            sourceLessonSlug: "build-the-room",
          },
          {
            prompt: "Which of the four 1971 purposes is the one this lesson calls a credit strategy?",
            options: ["Creating opportunities for Third World and minority artists", "Maintaining creative and artistic quality across every edition the workshop issued", "Supporting and encouraging innovation in the technical development of lithography", "Fostering public appreciation of the fine art print as a collectible medium"],
            correctIndex: 0,
            explanation: "It changes who occupies the named role rather than asking the convention to name printers.",
            sourceLessonSlug: "build-the-room",
          },
          {
            prompt: "Catlett later supported the founding of which organisation?",
            options: ["The National Union of Mexican Women", "The Taller de Grafica Popular, alongside Mendez, Arenal and O'Higgins", "The South Side Community Art Center, with Burroughs and Charles White", "AfriCOBRA, the Chicago collective formed at the end of the 1960s"],
            correctIndex: 0,
            explanation: "In 1964, a decade after taking part in the workshop's Graphic Assembly discussions.",
            sourceLessonSlug: "write-it-into-the-statutes",
          },
          {
            prompt: "The lesson's phrase for what the Taller did before anyone arrived is that it changed the naming convention:",
            options: ["By statute", "By custom, which the members enforced informally among themselves", "By negotiation with the Mexican government, which funded the workshop", "By example, publishing collectively authored portfolios that others then imitated"],
            correctIndex: 0,
            explanation: "The foundational statutes permitted collective authorship, which is a rule rather than a practice.",
            sourceLessonSlug: "write-it-into-the-statutes",
          },
          {
            prompt: "Which response leaves the print signature convention completely untouched?",
            options: ["Blackburn's open workshop", "The Taller's statutes, which applied only to prints published outside Mexico", "The DuSable museum, which was founded to display prints rather than to make them", "None of the three, since each was explicitly designed to alter the convention"],
            correctIndex: 0,
            explanation: "It lets more people become the named artist without asking the convention to change at all.",
            sourceLessonSlug: "write-it-into-the-statutes",
          },
          {
            prompt: "The DuSable's own account of Burroughs's pride concerns the museum having:",
            options: ["Grown out of the indigenous Black community", "Survived longer than any comparable institution founded in the same decade", "Been assembled entirely from works donated by artists she knew personally", "Opened without any assistance from a foundation or a municipal government"],
            correctIndex: 0,
            explanation: "The museum quotes that as what distinguished it from other institutions of its kind.",
            sourceLessonSlug: "found-the-museum",
          },
          {
            prompt: "The section's comparison of the three answers ranks the museum as strongest on which axis?",
            options: ["Longevity", "Cost, since a home based museum requires almost no capital to establish", "Reach, because a museum can serve more artists at once than any workshop", "Speed, in that a collection can be assembled faster than a workshop can be equipped"],
            correctIndex: 0,
            explanation: "It decides what future strangers find, which is the definition of institutional memory.",
            sourceLessonSlug: "found-the-museum",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 5 — The medium itself as a strategy
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "cheap-multiple-and-portable",
      title: "17 · Cheap, multiple and portable",
      section: "Section 5 · The medium itself as a strategy",
      body: `Choosing a medium is a decision about who will ever see the work. AfriCOBRA made that decision deliberately, and the person who made it possible was a printmaker.

**The collective.** AfriCOBRA, the African Commune of Bad Relevant Artists, was formed in Chicago in 1968. The Smithsonian American Art Museum records that its members set out to express the central ideas of the Black Power movement, self-determination, unity and Black pride, and believed "their art should be uplifting, highlighting the beautiful and heroic aspects of African American experience, and should be easy for ordinary people to understand" (Smithsonian American Art Museum, n.d.-a). Its aesthetic is described as simplified forms, vivid colours, and strong, often competing, patterns.

**Read that mission as a distribution problem.** Art that must be easy for ordinary people to understand is useless if ordinary people never encounter it. A painting hangs in one place. A print exists in many places at once, and the Studio Museum in Harlem states the consequence plainly: "As an inexpensive and quickly produced medium, screenprints hold a long history of amplifying social critique", and AfriCOBRA's works "were affordably priced and stocked in Black-owned businesses" (Studio Museum in Harlem, 2023).

**The person who made it a real option.** Barbara Jones-Hogu, 1938 to 2017, studied etching, lithography, screenprinting, wood engraving and woodblock printing at the School of the Art Institute of Chicago and at the Institute of Design at the Illinois Institute of Technology (Studio Museum in Harlem, n.d.-a). The Studio Museum notes that at the founding she was thirty and still enrolled in her master's programme, and was "the only trained printmaker of the group" (Studio Museum in Harlem, 2023). Her training, it says, helped establish the AfriCOBRA aesthetic, with works such as Unite becoming emblematic of the group.

Her particular contribution is precisely a credit and legibility decision: the Smithsonian American Art Museum singles out "the incorporation of words into her images to make their meaning perfectly clear" (Smithsonian American Art Museum, n.d.-a). Its own copy of Unite is a screenprint dated 1971, in which strong silhouettes, limited colours and bold lettering print the message and make it palpable at once.

**The general point, and it is the sharpest in the course.** The other responses in this course changed the room, the rule or the archive. This one changed the OBJECT. A cheap multiple that lives in a bookshop is a different kind of credit from a signed impression in a collector's flat file: it reaches more people, it is harder to lose, and it does not require any institution's permission. The medium was the strategy.

:::reveal What was AfriCOBRA, when and where was it formed, and what did its members believe their art should be? ||| The African Commune of Bad Relevant Artists, formed in Chicago in 1968. Its members believed their art should be uplifting, should highlight the beautiful and heroic in African American experience, and should be easy for ordinary people to understand.

:::reveal Why does a mission to be understood by ordinary people push a group toward printmaking? ||| Because a painting hangs in one place while a print exists in many at once. Screenprints are inexpensive and quickly produced, and AfriCOBRA's were affordably priced and stocked in Black-owned businesses.

:::reveal What does the Smithsonian American Art Museum single out as Barbara Jones-Hogu's key contribution? ||| The incorporation of words into her images to make their meaning perfectly clear.

## Vocabulary
- **AfriCOBRA**: the African Commune of Bad Relevant Artists, formed in Chicago in 1968, whose aesthetic used simplified forms, vivid colours and competing patterns.
- **Screenprint**: a stencil based print process, inexpensive and quick, which is what made affordable multiples practical for the collective.
- **Multiple**: a work that exists in many identical copies at once, and therefore in many places at once.
- **Distribution problem**: the question of who will ever encounter a work, which a medium choice answers before any question of content does.

## Sources
Smithsonian American Art Museum. (n.d.-a). *Oh Freedom! Barbara Jones-Hogu*. https://americanart.si.edu/education/oh-freedom/barbara-jones-hogu

Studio Museum in Harlem. (n.d.-a). *Barbara Jones-Hogu*. https://www.studiomuseum.org/artists/barbara-jones-hogu

Studio Museum in Harlem. (2023). *One people unite*. Studio Magazine. https://www.studiomuseum.org/magazine/one-people-unite`,
    },
    {
      slug: "teaching-with-no-format",
      title: "18 · Teaching, an output with no format at all",
      section: "Section 5 · The medium itself as a strategy",
      body: `Every credit form in this course so far has a slot somewhere: a signature line, a chop, a documentation sheet, a wall label. Teaching has none of them, and it may be the largest output any of these people produced.

**Charles White was a printmaker before he was a teacher.** He studied at the Art Institute of Chicago, the Art Students League in New York, and the Taller de Grafica Popular in Mexico, and he taught at the WPA Southside Community Art Center in Chicago. In 1948 he printed at the Workshop of Graphic Art, a short lived, politically motivated project that produced two portfolios, Yes, the People in 1948 and Negro USA in 1949 (Library of Congress, 2003b).

**And he sits inside this course's own case.** The Library of Congress records that during the same period Blackburn printed We Have Been Believers, dated 1949, among other images for White, "who considered Blackburn to be his primary printer in New York" (Library of Congress, 2003b). One of the two names on that collaboration is on the print.

**Then the classroom.** White joined the faculty of what is now Otis College of Art and Design, eventually became Chair of the Drawing Department, and taught there until his death in 1979. His students included Alonzo Davis, David Hammons and Kerry James Marshall (Otis College of Art and Design, n.d.).

**The date is contested and this course will not pick one.** Otis College's own account says he joined the faculty in 1964. Literature connected with the 2019 LACMA retrospective gives 1965. The gap is a single year and it changes nothing about the argument, which is exactly why it is worth flagging: the discipline is to report the disagreement even when the stakes are low, because a writer who rounds off a small disagreement will round off a large one. This course also declines to print the widely repeated claim that White was the first Black faculty member at Otis, because the college's own page does not say it, and a "first" claim needs the issuing institution.

**Now the mechanism.** Consider what a teacher's output actually is: other people's careers. There is no line for it on a print, no chop, no documentation sheet, no accession record, and no format cap to ration it, because there is no format at all. That sounds like freedom and it is the opposite: an output with no format is an output with no record, and a contribution with no record cannot be verified, cited, ranked, or contested. It survives only as testimony from the people who received it.

Which is why this course can tell you three of White's students by name and cannot tell you what he taught them. The evidence for teaching is inherently thin, and the honest move is to say so rather than to inflate a list of famous names into a measured influence.

:::reveal Where did Charles White train, and what does the Library of Congress record about his printer in New York? ||| He studied at the Art Institute of Chicago, the Art Students League and the Taller de Grafica Popular, and taught at the WPA Southside Community Art Center. He considered Robert Blackburn his primary printer in New York.

:::reveal Why does an output with no format end up with no record, and what does that cost? ||| Because a record needs a slot to sit in. Without one there is nothing to verify, cite, rank or contest, so the contribution survives only as testimony from the people who received it.

:::reveal What two claims about White's Otis appointment does this course refuse to settle or print? ||| The year he joined, because Otis says 1964 and the LACMA retrospective literature says 1965; and that he was the first Black faculty member there, because the college's own page does not say it.

## Vocabulary
- **Otis College of Art and Design**: the Los Angeles art school, formerly the Otis Art Institute, where Charles White taught until his death in 1979.
- **Output with no format**: a contribution such as teaching, for which no credit slot exists anywhere, and which therefore leaves no record to verify or contest.
- **Testimony**: the recollection of people who received a contribution, which is the only surviving evidence for an output with no format.
- **A first claim**: an assertion that someone was the first to do something, which this catalog prints only when the issuing institution states it.

## Sources
Library of Congress. (2003b). *Founding the Printmaking Workshop*. In *Creative space: Fifty years of Robert Blackburn's Printmaking Workshop* [Exhibition]. https://www.loc.gov/exhibits/blackburn/blackburn-founding.html

Otis College of Art and Design. (n.d.). *Charles White*. Otis College LibGuides. https://otis.libguides.com/people/charles_white`,
    },
    {
      slug: "the-only-woman-in-the-room",
      title: "19 · The only woman in the room",
      section: "Section 5 · The medium itself as a strategy",
      body: `Emma Amos, 1937 to 2020, was a painter, printmaker and weaver. The printmaking came first, and it is what put her in the room this lesson is named after.

**The training.** Amos earned her BA from Antioch College and a diploma in etching from the London Central School of Art, completed in 1959 while she was in her fourth year at Antioch. Her first solo exhibition, in 1960, was of prints (Studio Museum in Harlem, n.d.-b; Culture Type, 2020).

**The room.** Spiral was a collective of Black artists co-founded in New York in 1963, whose members included Romare Bearden, Charles Alston and Norman Lewis. In 1964, while Amos was pursuing a master's degree at New York University, Hale Woodruff, one of her professors there, invited her to join. The Studio Museum in Harlem states the fact this lesson had to check before printing: "She was the youngest artist and only woman admitted to the group and remained a member until the dissolution of the collective in 1965" (Studio Museum in Harlem, n.d.-b).

**On the word only.** This course tested that word against an institutional source before using it, because unverified superlatives are the most common failure in this genre and the easiest to correct in public. The Studio Museum states it directly and the claim stands. One detail does remain unsettled: some accounts date her joining to 1963 rather than 1964, and this course follows the Studio Museum's 1964 while filing the discrepancy as an open question rather than smoothing it over.

**What being the only one is evidence of, and what it is not.** It is a fact about the composition of a room, which is to say about who was invited. It is not a fact about the woman in it, and it is not a distinction. Reading it as an achievement inverts the finding: a group of fifteen with one woman in it has told you something about the fourteen. Section 1's routing question applies exactly here, one level up from the press: who gets invited into the room where reputations are assembled.

**And the medium did the inviting.** Amos arrived carrying a printmaking training and an exhibition record made of prints. A portfolio of editioned work is portable, reproducible and inspectable in a way a body of paintings is not. It is a credential you can put on a table. That is the fifth strategy in this course, and it is the smallest and the most personally available: not a room, a rule, an archive, or a cheap multiple, but a body of work in a medium that travels.

:::reveal Where did Emma Amos train in printmaking, and what was her first solo exhibition made of? ||| She took a diploma in etching at the London Central School of Art, completed in 1959 during her fourth year at Antioch College. Her first solo exhibition, in 1960, was of prints.

:::reveal What does the Studio Museum in Harlem say about Amos's position within Spiral? ||| That she was the youngest artist and only woman admitted to the group, and remained a member until the collective dissolved in 1965.

:::reveal Being the only woman in a group is evidence about what, and about what not? ||| It is evidence about the composition of the room and about who was invited. It is not evidence about the woman, and it is not a distinction.

## Vocabulary
- **Spiral**: the collective of Black artists co-founded in New York in 1963, which dissolved in 1965, and whose only woman member was Emma Amos.
- **Superlative claim**: a statement that someone was the only or the first, which this course verifies against an institutional source before printing.
- **Portable credential**: a body of editioned work that can be carried, inspected and left behind, which a body of paintings cannot.
- **Composition of a room**: who was invited into a group, which is what an only-woman fact actually measures.

## Sources
Culture Type. (2020, May 22). *Emma Amos, 83, a dynamic painter, masterful colorist, and member of Spiral collective, has died*. https://www.culturetype.com/2020/05/22/emma-amos-83-a-dynamic-painter-masterful-colorist-and-member-of-spiral-collective-has-died/

Studio Museum in Harlem. (n.d.-b). *Emma Amos*. https://www.studiomuseum.org/artists/emma-amos`,
    },
    {
      slug: "quiz-medium-as-strategy",
      title: "20 · Knowledge check: the medium as a strategy",
      section: "Section 5 · The medium itself as a strategy",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "AfriCOBRA stands for:",
            options: ["African Commune of Bad Relevant Artists", "African Collective for Bold Radical Art, formed in New York at the end of the 1960s", "Artists for Black Cooperative Regional Advancement, a Chicago funding organisation", "African Committee on Black Representation in the Arts, a national advocacy group"],
            correctIndex: 0,
            explanation: "Formed in Chicago in 1968.",
            sourceLessonSlug: "cheap-multiple-and-portable",
          },
          {
            prompt: "AfriCOBRA was formed in:",
            options: ["Chicago, in 1968", "New York, in 1963, alongside the collective known as Spiral", "Mexico City, in 1937, as a successor to an earlier graphic workshop", "Los Angeles, in 1965, around the faculty of the Otis Art Institute"],
            correctIndex: 0,
            explanation: "The Smithsonian American Art Museum records the city and the year.",
            sourceLessonSlug: "cheap-multiple-and-portable",
          },
          {
            prompt: "Which ideas did AfriCOBRA set out to express?",
            options: ["Self-determination, unity and Black pride", "The technical possibilities of colour lithography as a fine art medium", "The case for collective authorship as a replacement for the signature convention", "The need for federal arts funding to replace the programmes ended after the WPA"],
            correctIndex: 0,
            explanation: "The central ideas of the Black Power movement, in the Smithsonian's summary.",
            sourceLessonSlug: "cheap-multiple-and-portable",
          },
          {
            prompt: "AfriCOBRA members believed their art should be easy for whom to understand?",
            options: ["Ordinary people", "Museum curators, who would decide whether the work entered public collections", "Other artists, so that the aesthetic could be reproduced by the next generation", "Schoolchildren, since the group's programme was primarily educational in aim"],
            correctIndex: 0,
            explanation: "And uplifting, highlighting the beautiful and heroic aspects of African American experience.",
            sourceLessonSlug: "cheap-multiple-and-portable",
          },
          {
            prompt: "The AfriCOBRA aesthetic is described as using:",
            options: ["Simplified forms, vivid colours, competing patterns", "Muted tones and loose brushwork derived from mid century American abstraction", "Photographic imagery reproduced at large scale in black and white on cheap paper", "Fine hatching and tonal modelling in the tradition of European reproductive engraving"],
            correctIndex: 0,
            explanation: "The strong and often competing patterns are part of the Smithsonian's description.",
            sourceLessonSlug: "cheap-multiple-and-portable",
          },
          {
            prompt: "The lesson reframes AfriCOBRA's mission as which kind of problem?",
            options: ["A distribution problem", "A funding problem, since collective work requires shared premises and equipment", "A training problem, since few members had studied any printmaking medium", "A legal problem, because collective authorship was untested in American law"],
            correctIndex: 0,
            explanation: "Art that must be understood by ordinary people is useless if ordinary people never encounter it.",
            sourceLessonSlug: "cheap-multiple-and-portable",
          },
          {
            prompt: "The advantage of a print over a painting, in this argument, is that a print:",
            options: ["Exists in many places at once", "Retains its value better on the secondary market over long periods", "Can be produced without any specialist equipment or trained assistance", "Is legally exempt from the signature conventions that govern unique works"],
            correctIndex: 0,
            explanation: "A painting hangs in one place, which settles who will ever see it.",
            sourceLessonSlug: "cheap-multiple-and-portable",
          },
          {
            prompt: "The Studio Museum in Harlem describes screenprints as:",
            options: ["Inexpensive and quickly produced", "The most technically demanding of all the fine art printmaking processes", "A medium that reached American workshops only after the 1960s graphics boom", "Unsuitable for editioning, since each pull differs slightly from the last"],
            correctIndex: 0,
            explanation: "With a long history of amplifying social critique.",
            sourceLessonSlug: "cheap-multiple-and-portable",
          },
          {
            prompt: "Where were AfriCOBRA's works stocked?",
            options: ["Black-owned businesses", "Municipal libraries across Chicago's South and West Side neighbourhoods", "Commercial galleries in New York, which handled the group's distribution", "University art museums, which purchased complete sets of each edition"],
            correctIndex: 0,
            explanation: "And they were affordably priced, which is the same decision expressed as a sales channel.",
            sourceLessonSlug: "cheap-multiple-and-portable",
          },
          {
            prompt: "Barbara Jones-Hogu's dates are:",
            options: ["1938 to 2017", "1937 to 2020, which are Emma Amos's dates rather than hers", "1920 to 2003, the same span as the master printer Robert Blackburn", "1918 to 1979, matching the printmaker and teacher Charles White"],
            correctIndex: 0,
            explanation: "The Studio Museum in Harlem records them on her artist page.",
            sourceLessonSlug: "cheap-multiple-and-portable",
          },
          {
            prompt: "Where did Jones-Hogu study printmaking?",
            options: ["The Art Institute of Chicago and the Institute of Design", "The London Central School of Art, where she took a diploma in etching", "The Taller de Grafica Popular, during a period of work in Mexico City", "The Art Students League in New York, on a scholarship after high school"],
            correctIndex: 0,
            explanation: "At the School of the Art Institute of Chicago and the Institute of Design at the Illinois Institute of Technology.",
            sourceLessonSlug: "cheap-multiple-and-portable",
          },
          {
            prompt: "Which processes did Jones-Hogu study?",
            options: ["Etching, lithography, screenprinting, wood engraving, woodblock", "Only screenprinting, which is why the collective adopted it exclusively", "Colour lithography and intaglio, the two media taught at Tamarind Institute", "Linocut and relief printing, which she learned from Elizabeth Catlett in Mexico"],
            correctIndex: 0,
            explanation: "The breadth is the point: she was the group's only trained printmaker.",
            sourceLessonSlug: "cheap-multiple-and-portable",
          },
          {
            prompt: "At AfriCOBRA's founding, Jones-Hogu was:",
            options: ["Thirty and still in her master's programme", "The group's oldest member and its only holder of a doctoral degree", "Employed as a master printer at a commercial workshop in Chicago", "Teaching at the Otis Art Institute alongside the painter Charles White"],
            correctIndex: 0,
            explanation: "The Studio Museum notes both facts alongside her being the only trained printmaker of the group.",
            sourceLessonSlug: "cheap-multiple-and-portable",
          },
          {
            prompt: "The Smithsonian American Art Museum singles out which contribution of Jones-Hogu's?",
            options: ["Incorporating words into her images", "Introducing screenprinting to the collective, which had previously worked in relief", "Designing the AfriCOBRA chop that appears embossed on the group's editions", "Negotiating the shop placements through which the group's prints were sold"],
            correctIndex: 0,
            explanation: "To make their meaning perfectly clear, which is a legibility decision as much as an aesthetic one.",
            sourceLessonSlug: "cheap-multiple-and-portable",
          },
          {
            prompt: "The Smithsonian American Art Museum's copy of Unite is:",
            options: ["A screenprint dated 1971", "A linocut dated 1947, from the series later retitled The Black Woman", "A lithograph printed by Robert Blackburn at his Chelsea studio in 1949", "An etching made during the artist's master's programme in Chicago"],
            correctIndex: 0,
            explanation: "Strong silhouettes, limited colours and bold lettering, printing the message and making it palpable at once.",
            sourceLessonSlug: "cheap-multiple-and-portable",
          },
          {
            prompt: "What did this response change that the earlier three did not?",
            options: ["The object", "The convention, by writing collective authorship into a workshop's statutes", "The archive, by founding an institution to hold the record permanently", "The room, by opening a print studio to artists regardless of their background"],
            correctIndex: 0,
            explanation: "Blackburn changed the room, the Taller the rule, Burroughs the archive. AfriCOBRA changed the thing itself.",
            sourceLessonSlug: "cheap-multiple-and-portable",
          },
          {
            prompt: "A cheap multiple in a bookshop differs from a signed impression in a collector's flat file because it:",
            options: ["Needs nobody's permission", "Is worth more per sheet over a long enough period of time", "Carries the printer's chop rather than the artist's written signature", "Is protected by copyright in a way a unique impression is not"],
            correctIndex: 0,
            explanation: "It also reaches more people and is harder to lose. The medium was the strategy.",
            sourceLessonSlug: "cheap-multiple-and-portable",
          },
          {
            prompt: "Where did Charles White study, among other places?",
            options: ["The Taller de Grafica Popular", "Tamarind Lithography Workshop, in the years after it opened in Los Angeles", "Universal Limited Art Editions, under the workshop's first master printer", "The London Central School of Art, where he took a diploma in etching"],
            correctIndex: 0,
            explanation: "Along with the Art Institute of Chicago and the Art Students League in New York.",
            sourceLessonSlug: "teaching-with-no-format",
          },
          {
            prompt: "Which two portfolios did the Workshop of Graphic Art produce?",
            options: ["Yes, the People and Negro USA", "The Negro Woman and I Am the Black Woman, the two titles of one series", "Unite and One People Unite, the two emblematic AfriCOBRA screenprints", "Creative Space and An Informed Energy, the exhibition and history publications"],
            correctIndex: 0,
            explanation: "Dated 1948 and 1949. White printed there in 1948, at a short lived and politically motivated project.",
            sourceLessonSlug: "teaching-with-no-format",
          },
          {
            prompt: "Whom did Charles White consider his primary printer in New York?",
            options: ["Robert Blackburn", "Will Barnet, his fellow member of the Art Students League faculty", "Elizabeth Catlett, whom he had worked alongside at the Taller in Mexico", "Antonio Frasconi, who also printed at the Workshop of Graphic Art in the 1940s"],
            correctIndex: 0,
            explanation: "The Library of Congress records it, and names We Have Been Believers of 1949 among the images Blackburn printed for him.",
            sourceLessonSlug: "teaching-with-no-format",
          },
          {
            prompt: "Whose name appears on the print of We Have Been Believers?",
            options: ["White's", "Blackburn's, since he was the master printer responsible for the edition", "Both names, since the Workshop of Graphic Art used a two chop convention", "The Library of Congress, which holds the impression in its collection"],
            correctIndex: 0,
            explanation: "One of the two names on that collaboration is on the print, which puts this course's own case inside the lesson.",
            sourceLessonSlug: "teaching-with-no-format",
          },
          {
            prompt: "Charles White taught at Otis until:",
            options: ["His death in 1979", "1965, when he left to establish his own workshop in Los Angeles", "1971, the year he was appointed Chair of the Drawing Department", "1992, when he received a MacArthur Fellowship for his work as an educator"],
            correctIndex: 0,
            explanation: "He also became Chair of the Drawing Department during his time there.",
            sourceLessonSlug: "teaching-with-no-format",
          },
          {
            prompt: "Which of these was a student of Charles White at Otis?",
            options: ["Kerry James Marshall", "Barbara Jones-Hogu, who studied printmaking in Chicago rather than in Los Angeles", "Emma Amos, who was pursuing a master's degree at New York University", "Robert Blackburn, who had learned lithography in Harlem before the war"],
            correctIndex: 0,
            explanation: "Otis names Alonzo Davis, David Hammons and Kerry James Marshall.",
            sourceLessonSlug: "teaching-with-no-format",
          },
          {
            prompt: "What year does Otis College's own account give for White joining the faculty?",
            options: ["1964", "1965, which is the date given in literature connected with the LACMA retrospective", "1940, the year he helped found the South Side Community Art Center in Chicago", "1948, when he printed the Yes, the People portfolio at the Workshop of Graphic Art"],
            correctIndex: 0,
            explanation: "The retrospective literature says 1965, and this course reports the disagreement rather than picking one.",
            sourceLessonSlug: "teaching-with-no-format",
          },
          {
            prompt: "Why does the course flag a one year disagreement that changes nothing?",
            options: ["A writer who rounds off a small gap will round off a large one", "Because the year determines which students could have studied with him", "Because Otis and LACMA have each published corrections to their own accounts", "Because the difference bears on whether he was the first Black faculty member"],
            correctIndex: 0,
            explanation: "The discipline is to report the disagreement even when the stakes are low.",
            sourceLessonSlug: "teaching-with-no-format",
          },
          {
            prompt: "Which widely repeated claim about White does this course decline to print?",
            options: ["That he was the first Black faculty member at Otis", "That he studied at the Taller de Grafica Popular during the 1940s", "That Robert Blackburn was his primary printer in New York", "That he taught David Hammons and Kerry James Marshall at Otis"],
            correctIndex: 0,
            explanation: "The college's own page does not say it, and a first claim needs the issuing institution.",
            sourceLessonSlug: "teaching-with-no-format",
          },
          {
            prompt: "A teacher's actual output is described in this lesson as:",
            options: ["Other people's careers", "A body of demonstration works produced in front of the class", "The curriculum, which survives in an institution's published records", "The reputation of the department, which outlasts any individual instructor"],
            correctIndex: 0,
            explanation: "And there is no line for it on a print, no chop, no documentation sheet and no accession record.",
            sourceLessonSlug: "teaching-with-no-format",
          },
          {
            prompt: "Having no format cap sounds like freedom but is the opposite because:",
            options: ["No format means no record", "An uncapped credit is divided among too many people to mean anything", "Teaching is unpaid, so the absence of a limit has no practical consequence", "Institutions fill an unlimited slot with names chosen for their prestige"],
            correctIndex: 0,
            explanation: "A contribution with no record cannot be verified, cited, ranked or contested.",
            sourceLessonSlug: "teaching-with-no-format",
          },
          {
            prompt: "What is the only surviving evidence for an output with no format?",
            options: ["Testimony", "The employment records of the institution where the teaching took place", "The published work of the students, read as evidence of what they were taught", "Nothing, which is why this course does not attempt to assess teaching at all"],
            correctIndex: 0,
            explanation: "The recollection of the people who received it, which is inherently thin evidence.",
            sourceLessonSlug: "teaching-with-no-format",
          },
          {
            prompt: "The lesson says this course can name three of White's students but cannot say:",
            options: ["What he taught them", "Whether they completed their degrees at the college he taught in", "How many years each of them spent studying under his instruction", "Which of them he considered the most promising of the three"],
            correctIndex: 0,
            explanation: "The honest move is to say so rather than inflate a list of famous names into a measured influence.",
            sourceLessonSlug: "teaching-with-no-format",
          },
          {
            prompt: "Emma Amos's dates are:",
            options: ["1937 to 2020", "1938 to 2017, the dates of the AfriCOBRA founder Barbara Jones-Hogu", "1917 to 2010, matching the founder of the museum now called the DuSable", "1920 to 2003, the span of the master printer at Universal Limited Art Editions"],
            correctIndex: 0,
            explanation: "She was a painter, printmaker and weaver, and the printmaking came first.",
            sourceLessonSlug: "the-only-woman-in-the-room",
          },
          {
            prompt: "Where did Amos take her diploma in etching?",
            options: ["The London Central School of Art", "Antioch College, where she also completed her undergraduate degree", "New York University, during the master's programme she began in the 1960s", "The Art Institute of Chicago, alongside the members of the Arts Craft Guild"],
            correctIndex: 0,
            explanation: "Completed in 1959, during her fourth year at Antioch College, where she took her BA.",
            sourceLessonSlug: "the-only-woman-in-the-room",
          },
          {
            prompt: "Amos's first solo exhibition, in 1960, consisted of:",
            options: ["Prints", "Woven textiles, the third of the three media she is known for working in", "Paintings, which she had begun making during her time at Antioch College", "Drawings made during her diploma year at the school in London"],
            correctIndex: 0,
            explanation: "Which is what makes the print portfolio the credential that carried her into the room.",
            sourceLessonSlug: "the-only-woman-in-the-room",
          },
          {
            prompt: "Spiral was co-founded in New York in:",
            options: ["1963", "1968, the same year AfriCOBRA was formed in the city of Chicago", "1937, the year the Taller de Grafica Popular was established in Mexico", "1948, alongside the opening of Blackburn's own studio in Chelsea"],
            correctIndex: 0,
            explanation: "It dissolved in 1965, so its whole existence spans about two years.",
            sourceLessonSlug: "the-only-woman-in-the-room",
          },
          {
            prompt: "Which artists are named as members of Spiral in this lesson?",
            options: ["Bearden, Alston and Lewis", "Catlett, Burroughs and White, the three Chicago and Mexico printmakers", "Mendez, Arenal and O'Higgins, the founders of the Mexican workshop", "Rivers, Hartigan and Frankenthaler, whose editions Blackburn printed at ULAE"],
            correctIndex: 0,
            explanation: "Romare Bearden, Charles Alston and Norman Lewis, among a larger membership.",
            sourceLessonSlug: "the-only-woman-in-the-room",
          },
          {
            prompt: "Who invited Amos to join Spiral?",
            options: ["Hale Woodruff", "Romare Bearden, who had co-founded the collective the previous year", "Charles Alston, who had also mentored Robert Blackburn in Harlem", "Norman Lewis, the member whose work was closest to hers in style"],
            correctIndex: 0,
            explanation: "One of her professors at New York University, where she was pursuing a master's degree.",
            sourceLessonSlug: "the-only-woman-in-the-room",
          },
          {
            prompt: "The Studio Museum in Harlem says Amos was the youngest artist and:",
            options: ["The only woman admitted to the group", "The only member who worked primarily as a printmaker rather than a painter", "The last member to join before the collective dissolved two years later", "The only member who had trained outside the United States before joining"],
            correctIndex: 0,
            explanation: "She remained a member until the dissolution of the collective in 1965.",
            sourceLessonSlug: "the-only-woman-in-the-room",
          },
          {
            prompt: "Why did this course test the word \"only\" before printing it?",
            options: ["Unverified superlatives are the easiest claims to correct in public", "Because the Studio Museum's account contradicts every other published source", "Because the word implies an exclusion that the collective's records deny", "Because superlatives are prohibited outright in this catalog's content policy"],
            correctIndex: 0,
            explanation: "The Studio Museum states it directly, so the claim stands. The verification is what makes printing it safe.",
            sourceLessonSlug: "the-only-woman-in-the-room",
          },
          {
            prompt: "Which detail about Amos and Spiral does this course leave unsettled?",
            options: ["The year she joined", "Whether Woodruff or Bearden extended the invitation to her", "Whether she remained a member until the group dissolved", "Whether she was the youngest as well as the only woman"],
            correctIndex: 0,
            explanation: "The Studio Museum says 1964 and some accounts say 1963. The course follows 1964 and files the discrepancy.",
            sourceLessonSlug: "the-only-woman-in-the-room",
          },
          {
            prompt: "Being the only woman in a group of fifteen tells you something about:",
            options: ["The fourteen", "The one, whose achievement in being admitted the fact records", "The medium, which had excluded women from professional training", "Nothing verifiable, since group composition is a matter of chance"],
            correctIndex: 0,
            explanation: "It is a fact about who was invited, which is the routing question one level up from the press.",
            sourceLessonSlug: "the-only-woman-in-the-room",
          },
          {
            prompt: "Reading only-woman status as an achievement does what to the finding?",
            options: ["Inverts it", "Strengthens it, by drawing attention to the individual rather than the group", "Leaves it unchanged, since both readings rest on the same documented fact", "Makes it unverifiable, because achievement is a judgment rather than a record"],
            correctIndex: 0,
            explanation: "It is a fact about the composition of a room, not a distinction conferred on the person in it.",
            sourceLessonSlug: "the-only-woman-in-the-room",
          },
          {
            prompt: "Why is a print portfolio a stronger credential than a body of paintings?",
            options: ["It is portable, reproducible and inspectable", "It demonstrates technical training that painting cannot demonstrate at all", "It can be authenticated by a workshop chop, which a painting never carries", "It is cheaper to produce, so a young artist can make more of it faster"],
            correctIndex: 0,
            explanation: "It is a credential you can put on a table, which is the fifth strategy in this course.",
            sourceLessonSlug: "the-only-woman-in-the-room",
          },
          {
            prompt: "The fifth strategy is described as the smallest and the most:",
            options: ["Personally available", "Expensive, since it requires access to a fully equipped print workshop", "Recent, since it depends on the twentieth century graphics boom to work", "Collective, because a portfolio is assembled from the work of many hands"],
            correctIndex: 0,
            explanation: "Not a room, a rule, an archive or a cheap multiple, but a body of work in a medium that travels.",
            sourceLessonSlug: "the-only-woman-in-the-room",
          },
          {
            prompt: "A \"multiple\", in this section's vocabulary, is a work that exists:",
            options: ["In many identical copies at once", "In more than one medium, such as a painting and a print of the same image", "In an edition large enough that no individual impression is separately numbered", "Outside any collection, because it was distributed rather than sold"],
            correctIndex: 0,
            explanation: "And therefore in many places at once, which is what makes it a distribution strategy.",
            sourceLessonSlug: "cheap-multiple-and-portable",
          },
          {
            prompt: "A \"distribution problem\" is a question about:",
            options: ["Who will ever encounter a work", "How an edition is priced relative to comparable work in the same market", "Which dealer holds the right to sell a workshop's editions in a given region", "How many impressions a printing surface can bear before it degrades"],
            correctIndex: 0,
            explanation: "A medium choice answers it before any question of content does.",
            sourceLessonSlug: "cheap-multiple-and-portable",
          },
          {
            prompt: "\"A first claim\" is printed in this catalog only when:",
            options: ["The issuing institution states it", "Two or more independent published sources agree on the wording", "No published source contradicts it after a reasonable search", "The person concerned made the claim publicly during their own lifetime"],
            correctIndex: 0,
            explanation: "Which is why the claim about White at Otis is left out of this course.",
            sourceLessonSlug: "teaching-with-no-format",
          },
          {
            prompt: "\"Composition of a room\" is what an only-woman fact actually measures, meaning:",
            options: ["Who was invited", "How many people the group could physically accommodate at its meetings", "Which media the group's members worked in and which they excluded", "How long the group survived before its internal disagreements ended it"],
            correctIndex: 0,
            explanation: "Which is why the finding is about the group rather than about the individual.",
            sourceLessonSlug: "the-only-woman-in-the-room",
          },
          {
            prompt: "Charles White taught at which WPA institution in Chicago?",
            options: ["The Southside Community Art Center", "The Harlem Community Art Center, where Blackburn had learned lithography", "The Institute of Design at the Illinois Institute of Technology", "The Ebony Museum of Negro History and Art, on Chicago's South Side"],
            correctIndex: 0,
            explanation: "The same centre he had helped found in 1940 with Margaret Taylor-Burroughs and others.",
            sourceLessonSlug: "teaching-with-no-format",
          },
          {
            prompt: "The Workshop of Graphic Art is described as:",
            options: ["Short lived and politically motivated", "The largest commercial print publisher operating in New York after the war", "A cooperative that later became the Robert Blackburn Printmaking Workshop", "A training programme established with support from the Ford Foundation"],
            correctIndex: 0,
            explanation: "It produced two portfolios, Yes, the People in 1948 and Negro USA in 1949.",
            sourceLessonSlug: "teaching-with-no-format",
          },
          {
            prompt: "\"Testimony\" is defined here as:",
            options: ["The recollection of people who received a contribution", "A sworn statement given in support of an attribution dispute", "A published account written by the person who made the contribution", "An institution's official record of who worked there and in what years"],
            correctIndex: 0,
            explanation: "It is the only surviving evidence for an output that has no format anywhere.",
            sourceLessonSlug: "teaching-with-no-format",
          },
          {
            prompt: "A \"superlative claim\" is one asserting that someone was:",
            options: ["The only or the first", "The most influential figure working in a medium at a given time", "Better trained than their contemporaries in the same discipline", "Responsible for a change that would not have happened otherwise"],
            correctIndex: 0,
            explanation: "This course verifies such a claim against an institutional source before printing it.",
            sourceLessonSlug: "the-only-woman-in-the-room",
          },
          {
            prompt: "\"Screenprint\" is described in this section as which kind of process?",
            options: ["Stencil based", "Relief based, cut into a block and printed from the raised surface", "Planographic, printed from a flat stone treated chemically", "Intaglio, printed from lines incised below the surface of a plate"],
            correctIndex: 0,
            explanation: "Inexpensive and quick, which is what made affordable multiples practical for AfriCOBRA.",
            sourceLessonSlug: "cheap-multiple-and-portable",
          },
          {
            prompt: "Spiral dissolved in which year?",
            options: ["1965", "1968, when several of its members helped form AfriCOBRA in Chicago", "1963, within months of the collective first being convened in New York", "1971, at the same moment Blackburn's workshop incorporated as a non-profit"],
            correctIndex: 0,
            explanation: "Amos remained a member until then.",
            sourceLessonSlug: "the-only-woman-in-the-room",
          },
          {
            prompt: "Section 5's overall claim is that a medium choice is a decision about:",
            options: ["Who will ever see the work", "Which technical skills an artist will need to acquire in order to make it", "Whether the artist or the printer will be named on the finished sheet", "How long the object will survive under normal conditions of storage"],
            correctIndex: 0,
            explanation: "Which is what makes the medium itself a credit and access strategy rather than a neutral choice.",
            sourceLessonSlug: "cheap-multiple-and-portable",
          },
          {
            prompt: "\"Portable credential\" means a body of editioned work that can be:",
            options: ["Carried, inspected and left behind", "Reproduced by anyone who obtains the original printing surface", "Valued precisely, because comparable impressions have sold at auction", "Exhibited without the artist being present to explain the intention"],
            correctIndex: 0,
            explanation: "Which a body of paintings cannot, and which is how a print portfolio functions as an entry ticket.",
            sourceLessonSlug: "the-only-woman-in-the-room",
          },
          {
            prompt: "Which of the five strategies in this course is the one an individual can use alone, today?",
            options: ["Building a portable body of work", "Founding a museum that will hold the record for future strangers", "Writing collective authorship into a workshop's foundational statutes", "Opening a print studio with affordable access for artists of any background"],
            correctIndex: 0,
            explanation: "The smallest and the most personally available of the five, and the one Amos arrived with.",
            sourceLessonSlug: "the-only-woman-in-the-room",
          },
          {
            prompt: "The Studio Museum credits Jones-Hogu's printmaking training with helping establish what?",
            options: ["The AfriCOBRA aesthetic", "The pricing structure that kept the group's prints affordable to buyers", "The screenprinting facility at the Institute of Design in Chicago", "The collective's practice of exhibiting only in Black-owned businesses"],
            correctIndex: 0,
            explanation: "With works such as Unite becoming emblematic of the group's output.",
            sourceLessonSlug: "cheap-multiple-and-portable",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 6 — The transferable shape, and what a correction looks like
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-same-shape-everywhere",
      title: "21 · The same shape everywhere",
      section: "Section 6 · The shape, the corrections, and the refusals",
      body: `The print shop is the clearest example of this mechanism, not the only one. Here is the test, in three conditions, so you can find it yourself.

**Condition one: a format cap on the public surface.** The place the public looks has fewer slots than the work had contributors. A print margin holds one signature. A book cover holds one name. A film poster holds a handful. A record sleeve holds the artist.

**Condition two: the credit exists somewhere with a smaller readership.** Not destroyed, relocated, exactly as in Section 2. A liner note, an end crawl, a contract, a union filing, a masthead, an archived documentation sheet. When you find the second document, you have found the case.

**Condition three: the unnamed role is the technically demanding one, and it succeeds invisibly.** From Section 3: expertise whose achievement is the absence of variation has nothing to point at.

**Now run the test on five other industries.** In each, the description below is about the FORMAT, not about any individual's history, which is the only kind of claim a shape like this licenses.

- **Session musicians.** The record is credited to the named artist. The players appear, if anywhere, in liner notes and in the contracting paperwork.
- **Ghostwriters.** The byline belongs to the credited author by contract. The writer's credit exists, and it exists in the contract.
- **Film colourists.** The name appears in the end crawl, never on the poster, and the work succeeds when the grade is invisible.
- **Translators.** The cover has historically carried the author. The next lesson shows a prize that changed exactly this.
- **Test kitchens.** A recipe is credited to the publication. The developers are named on a masthead, if at all.

**What the test buys you.** It tells you which question to ask. If all three conditions hold, stop looking for a villain: you are looking at a format, and the productive questions are the two from Section 1, who is routed into the unnamed role, and what they built instead. If condition two fails, and no second document exists anywhere, you have something different and worse, which CREDIT-00 covers as archival silence.

**And the limit, restated because it is the thing people get wrong.** The shape explains a pattern. It never licenses a claim about a particular named person, and any sentence beginning "so obviously the real author of that record was" has left the evidence behind.

:::reveal State the three conditions that identify this mechanism in any industry. ||| A format cap on the public surface, a credit that exists in a second document with a smaller readership, and an unnamed role that is technically demanding and succeeds invisibly.

:::reveal What follows if condition two fails and no second document exists anywhere? ||| You are not looking at a relocated credit but at archival silence, which CREDIT-00 treats as a different and worse problem.

:::reveal Why can this shape never license a claim about a particular person? ||| Because it explains a pattern across many cases, and a pattern does not license an inference down to any single one. A claim about a person needs that person's own documents.

## Vocabulary
- **The three conditions**: a format cap on the public surface, a relocated credit in a low readership document, and an invisibly successful technical role.
- **Liner note**: the small print credit on a record release, a standard example of a document with far fewer readers than the work itself.
- **End crawl**: the scrolling list of film credits, which carries names the poster has no room for.
- **Archival silence**: from CREDIT-00, the case where no second document exists at all, which is recovery rather than publication.

## Sources
Tamarind Institute. (n.d.-a). *Process*. University of New Mexico. https://tamarind.unm.edu/about/process/`,
    },
    {
      slug: "two-corrections-that-happened",
      title: "22 · Two corrections that actually happened",
      section: "Section 6 · The shape, the corrections, and the refusals",
      body: `Credit conventions do change. Two of them changed recently enough that you can read the rules yourself, and both changed in the same way, which is the lesson.

**Correction one: the International Booker Prize.** The Booker Prizes state that the prize "recognises the vital work of translation, with the £50,000 prize money divided equally between the author and the translator" (Booker Prize Foundation, n.d.). From the 2027 prize the fund doubles to £100,000, still split equally between author and translator, and the shortlist awards are likewise divided (Booker Prize Foundation, n.d.).

Read what that does. It does not praise translators. It does not encourage publishers to be generous. It makes the translator a **co-recipient by rule**, which means the credit is now enforced by the same document that decides who gets the money.

**Correction two: the Recording Academy's Album Of The Year rule.** For the 2022 Grammy Awards the Academy updated the category so that "all credited artists (including featured artists), songwriters of new material, producers, recording engineers, mixers, and mastering engineers are eligible to be GRAMMY nominees and recipients". Previously those contributors "were required to be credited with at least 33 percent or more of playing time" (Recording Academy, 2021).

Read that one too. Under the old rule an engineer who worked on two tracks of a twelve track album was ineligible: a threshold, which is a format cap wearing a percentage. The correction removed the threshold. Nothing about the engineering changed; the slot count did.

**The pattern, which is the whole point of putting these two side by side.** Neither correction worked by telling a better story about undervalued people. Each rewrote a RULE about slots, in a document that governs an outcome people care about. CREDIT-00 teaches the anatomy of a correction in general; this is what it looks like in a medium.

**What corrections cannot do, and this matters for how you read the rest of this course.** Both changes are prospective. No translator who published before the rule becomes a co-recipient retroactively, and no engineer picks up a nomination for a 2015 album. A correction fixes the format going forward. It does not reissue the past, which is why the responses in Sections 4 and 5, building a room, a rule, an archive, an object and a portfolio, were never merely second best. For everybody already inside the convention, they were the only thing available.

:::reveal How does the International Booker Prize divide its money, and why is that a structural change rather than a gesture? ||| Equally between author and translator. It makes the translator a co-recipient by rule, so the credit is enforced by the same document that decides the money.

:::reveal What did the Recording Academy's Album Of The Year rule require before the change, and what replaced it? ||| Contributors had to be credited with at least 33 percent or more of playing time. The updated rule makes all credited artists, songwriters of new material, producers, recording engineers, mixers and mastering engineers eligible.

:::reveal What can a credit correction never do? ||| Work backwards. Both changes are prospective, so nobody who published or recorded before the rule gains the credit retroactively.

## Vocabulary
- **Co-recipient by rule**: a credit enforced by the document that assigns an outcome, such as prize money, rather than left to anyone's goodwill.
- **Threshold**: a percentage requirement that functions as a format cap, such as the old 33 percent playing time rule for Album Of The Year.
- **Prospective correction**: a rule change that applies from now on and does not restore credit for work already published.
- **Anatomy of a correction**: from CREDIT-00, the general account of who corrects a credit, how long it takes, and what it can repair.

## Sources
Booker Prize Foundation. (n.d.). *The International Booker Prize*. https://thebookerprizes.com/international-booker-prize

Recording Academy. (2021, May 26). *The Recording Academy releases updated rules and guidelines for the 2022 GRAMMY Awards show*. https://www.grammy.com/news/2022-grammys-updated-rules-guidelines-recording-academy`,
    },
    {
      slug: "what-this-course-refused",
      title: "23 · What this course refused to print",
      section: "Section 6 · The shape, the corrections, and the refusals",
      body: `A course about credit that hid its own uncertainty would be arguing against itself. Here is the ledger.

**Verified against an institutional source, and therefore printed.** That Blackburn was hired in 1957 as the first master printer at Universal Limited Art Editions, and that he printed the first seventy-nine editions for that workshop: both stated by the Library of Congress in its Blackburn exhibition. That Emma Amos was the only woman admitted to Spiral: stated by the Studio Museum in Harlem. Superlatives get checked before they get printed, and these two survived the check.

**Reported as contested, because the sources genuinely disagree.** The Printmaking Workshop's founding year: the Library of Congress says 1948 and the workshop's own successor at the Elizabeth Foundation for the Arts says late winter 1947. The year Charles White joined the Otis faculty: the college says 1964, the LACMA retrospective literature says 1965. In each case both positions are named and neither is chosen.

**Tested and NOT printed, which is the part that takes discipline.** Three claims were available, attractive, widely repeated, and left out.

1. **That Charles White was the first Black faculty member at Otis.** Repeated in a good deal of coverage. Otis College's own page does not say it, and a first claim needs the issuing institution.
2. **A specific price for AfriCOBRA's poster prints.** A dollar figure circulates. No institutional source this course could reach states it, so the lesson says affordably priced and stocked in Black-owned businesses, which the Studio Museum does state.
3. **The exact year Emma Amos joined Spiral.** The Studio Museum says 1964; other accounts say 1963. The course follows the museum and leaves the discrepancy open rather than presenting one date as settled.

**Why a refusal is a feature.** Every unverified detail you print is a hostage. When it is corrected, and someone always corrects it, the correction discredits the verified material standing next to it. That is the same argument the course made in Section 1 about the theft framing, applied to itself.

**And the standing caution, which is where this course ends.** Six people carry the evidence here, and the mechanism itself predicts that most comparable technicians left no retrievable trace at all: no exhibition, no successor foundation, no museum page. Six names and a feeling of completeness is the opposite of the argument. The right conclusion is that you have just read the documented tail of something much larger, and the tool you should keep is the three condition test, not the six names.

:::reveal Which two superlative claims did this course verify and print, and against which institutions? ||| That Blackburn was ULAE's first master printer and printed its first seventy-nine editions, against the Library of Congress; and that Emma Amos was the only woman admitted to Spiral, against the Studio Museum in Harlem.

:::reveal Name the three claims this course tested and refused to print, and say why each was left out. ||| That Charles White was the first Black faculty member at Otis, because the college's own page does not say it; a specific price for AfriCOBRA's prints, because no reachable institutional source states a figure; and a settled year for Amos joining Spiral, because the sources conflict.

:::reveal Why is printing an unverified detail described as taking a hostage? ||| Because when it is corrected, and it will be, the correction discredits the verified material standing next to it.

## Vocabulary
- **Refusal**: a claim a course could have printed and deliberately did not, because the evidence for it did not meet the standard.
- **Hostage claim**: an unverified detail whose eventual correction damages the credibility of the verified material around it.
- **The documented tail**: the small, recoverable fraction of cases that left institutional records, which is all any course like this can show.
- **Open question**: an unresolved point recorded in writing so that somebody can close it later, rather than smoothed over in prose.

## Sources
Library of Congress. (2003d). *Overview*. In *Creative space: Fifty years of Robert Blackburn's Printmaking Workshop* [Exhibition]. https://www.loc.gov/exhibits/blackburn/blackburn-overview.html

Otis College of Art and Design. (n.d.). *Charles White*. Otis College LibGuides. https://otis.libguides.com/people/charles_white

Studio Museum in Harlem. (n.d.-b). *Emma Amos*. https://www.studiomuseum.org/artists/emma-amos`,
    },
    {
      slug: "quiz-shape-and-corrections",
      title: "24 · Knowledge check: the shape and the corrections",
      section: "Section 6 · The shape, the corrections, and the refusals",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "The first of the three conditions is a format cap on:",
            options: ["The public surface", "The number of people a workshop may employ on any single edition", "The proportion of an award's prize money any one recipient may collect", "The length of time a credit remains attached to a work after publication"],
            correctIndex: 0,
            explanation: "The place the public looks has fewer slots than the work had contributors.",
            sourceLessonSlug: "the-same-shape-everywhere",
          },
          {
            prompt: "The second condition is that the credit exists:",
            options: ["Somewhere with a smaller readership", "Only in the memory of the people who worked on the project together", "In a form the uncredited person can enforce through a professional body", "In a public register maintained by the relevant industry association"],
            correctIndex: 0,
            explanation: "Not destroyed, relocated: a liner note, an end crawl, a contract, a masthead, an archived documentation sheet.",
            sourceLessonSlug: "the-same-shape-everywhere",
          },
          {
            prompt: "The third condition is that the unnamed role is:",
            options: ["Technically demanding and invisibly successful", "Filled by people who entered the industry later than the named contributors", "Paid an hourly rate rather than a share of the work's eventual proceeds", "Performed by more than one person, so no single name could be printed"],
            correctIndex: 0,
            explanation: "Expertise whose achievement is the absence of variation has nothing for an observer to point at.",
            sourceLessonSlug: "the-same-shape-everywhere",
          },
          {
            prompt: "In the session musician case, where do the players appear if anywhere?",
            options: ["Liner notes and contracting paperwork", "On the sleeve, beneath the name of the credited recording artist", "In the recording studio's own archive of session tapes and take sheets", "In the register maintained by the performing rights society for the release"],
            correctIndex: 0,
            explanation: "The record itself is credited to the named artist, which is the format cap.",
            sourceLessonSlug: "the-same-shape-everywhere",
          },
          {
            prompt: "In the ghostwriting case, where does the writer's credit exist?",
            options: ["In the contract", "Nowhere at all, which makes it a case of archival silence instead", "On the copyright page, in smaller type beneath the credited author", "In the publisher's catalogue, which lists everyone who worked on a title"],
            correctIndex: 0,
            explanation: "The byline belongs to the credited author by contract, and the contract is the second document.",
            sourceLessonSlug: "the-same-shape-everywhere",
          },
          {
            prompt: "A film colourist's name appears where?",
            options: ["The end crawl", "The poster, alongside the director of photography's screen credit", "The distributor's press kit, which lists the full technical crew", "Nowhere, since colour grading is treated as part of post production"],
            correctIndex: 0,
            explanation: "Never on the poster, and the work succeeds when the grade is invisible, which is condition three.",
            sourceLessonSlug: "the-same-shape-everywhere",
          },
          {
            prompt: "In the test kitchen case, a recipe is credited to:",
            options: ["The publication", "The chef who first served the dish in a professional restaurant kitchen", "The photographer, whose name appears alongside the image of the dish", "The editor who commissioned it, under the magazine's contributor policy"],
            correctIndex: 0,
            explanation: "The developers are named on a masthead, if at all.",
            sourceLessonSlug: "the-same-shape-everywhere",
          },
          {
            prompt: "The lesson stresses that its five parallel descriptions are about:",
            options: ["The format", "The individuals who have been harmed in each of the five industries", "The historical origins of each convention in the nineteenth century", "The legal remedies available to an uncredited worker in each field"],
            correctIndex: 0,
            explanation: "Not about any individual's history, which is the only kind of claim a shape like this licenses.",
            sourceLessonSlug: "the-same-shape-everywhere",
          },
          {
            prompt: "If all three conditions hold, the lesson says you should stop:",
            options: ["Looking for a villain", "Reading the primary sources, since the outcome is already determined", "Naming the people involved, because a format is impersonal by definition", "Comparing the case to other industries, which will only confuse the analysis"],
            correctIndex: 0,
            explanation: "You are looking at a format, and the productive questions are who is routed into the role and what they built instead.",
            sourceLessonSlug: "the-same-shape-everywhere",
          },
          {
            prompt: "If condition two fails and no second document exists anywhere, you have:",
            options: ["Archival silence", "A stronger case, since the absence of a record proves deliberate suppression", "A convention that has already been corrected, leaving nothing left to find", "An individual injustice, which can be investigated through personal testimony"],
            correctIndex: 0,
            explanation: "Which CREDIT-00 covers, and which is a different and worse problem: recovery rather than publication.",
            sourceLessonSlug: "the-same-shape-everywhere",
          },
          {
            prompt: "Which sentence has left the evidence behind, according to this lesson?",
            options: ["\"So obviously the real author of that record was...\"", "\"All three conditions hold in this case, so the credit is probably relocated\"", "\"The end crawl carries names that the poster has no room to display\"", "\"This role is uncredited for everyone who performs it, whoever they are\""],
            correctIndex: 0,
            explanation: "The shape explains a pattern and never licenses a claim about a particular named person.",
            sourceLessonSlug: "the-same-shape-everywhere",
          },
          {
            prompt: "A \"liner note\" is offered as a standard example of:",
            options: ["A document with far fewer readers than the work", "A format cap, since only a fixed number of names will fit on the sleeve", "An enforceable credit, because record companies are bound to print it", "A public register of everyone who contributed to a musical recording"],
            correctIndex: 0,
            explanation: "Which is exactly the printmaking documentation sheet problem in another industry.",
            sourceLessonSlug: "the-same-shape-everywhere",
          },
          {
            prompt: "How does the International Booker Prize divide its money?",
            options: ["Equally between author and translator", "Two thirds to the author and one third to the translator of the winning book", "Entirely to the author, with a separate smaller award made to the translator", "According to the judges' assessment of each party's contribution to the book"],
            correctIndex: 0,
            explanation: "The Booker Prizes say the prize recognises the vital work of translation and divides the money equally.",
            sourceLessonSlug: "two-corrections-that-happened",
          },
          {
            prompt: "From the 2027 prize, the International Booker fund:",
            options: ["Doubles to £100,000, still split equally", "Is replaced by a single award to the author, with translators recognised separately", "Falls to £25,000 per recipient, so the total remains unchanged from before", "Becomes divisible at the judges' discretion between the two recipients"],
            correctIndex: 0,
            explanation: "The shortlist awards are likewise divided between author and translator.",
            sourceLessonSlug: "two-corrections-that-happened",
          },
          {
            prompt: "The Booker change is structural rather than a gesture because it makes the translator:",
            options: ["A co-recipient by rule", "The subject of an annual publicity campaign run alongside the prize", "Eligible for a separate translation prize administered by the same foundation", "Entitled to have their name printed on the cover of the winning edition"],
            correctIndex: 0,
            explanation: "The credit is enforced by the same document that decides who gets the money.",
            sourceLessonSlug: "two-corrections-that-happened",
          },
          {
            prompt: "For the 2022 Grammy Awards, who became eligible as Album Of The Year nominees?",
            options: ["All credited artists, songwriters, producers, engineers, mixers and mastering engineers", "Only the credited recording artist and the album's executive producer", "Any contributor named anywhere in the album's published liner notes", "Songwriters alone, in a change intended to recognise composition specifically"],
            correctIndex: 0,
            explanation: "Featured artists are included, and the songwriters must have contributed new material.",
            sourceLessonSlug: "two-corrections-that-happened",
          },
          {
            prompt: "What did the previous Album Of The Year rule require?",
            options: ["At least 33 percent of playing time", "That a contributor work on the album's opening and closing tracks", "That the contributor be a voting member of the Recording Academy", "That the album be credited to no more than three principal artists"],
            correctIndex: 0,
            explanation: "A threshold, which is a format cap wearing a percentage.",
            sourceLessonSlug: "two-corrections-that-happened",
          },
          {
            prompt: "Under the old Grammy rule, an engineer who worked on two tracks of a twelve track album was:",
            options: ["Ineligible", "Eligible, but only if the album's producer nominated them personally", "Credited as a recipient without being counted among the nominees", "Required to share a single nomination with the album's other engineers"],
            correctIndex: 0,
            explanation: "Two of twelve falls under 33 percent, so the correction removed the threshold rather than changing the work.",
            sourceLessonSlug: "two-corrections-that-happened",
          },
          {
            prompt: "What changed about the engineering when the Grammy rule changed?",
            options: ["Nothing", "The standard of technical documentation required for a nomination", "The share of an album an engineer was expected to work on in practice", "The definition of mixing, which was separated from mastering for the first time"],
            correctIndex: 0,
            explanation: "The slot count changed. That is the whole mechanism.",
            sourceLessonSlug: "two-corrections-that-happened",
          },
          {
            prompt: "What do both corrections have in common?",
            options: ["Each rewrote a rule about slots", "Each followed a public campaign by the affected workers in that industry", "Each was imposed by legislation rather than adopted by the institution itself", "Each restored credit to people whose earlier work had gone unrecognised"],
            correctIndex: 0,
            explanation: "In a document that governs an outcome people care about, rather than by telling a better story.",
            sourceLessonSlug: "two-corrections-that-happened",
          },
          {
            prompt: "Neither correction worked by:",
            options: ["Telling a better story about undervalued people", "Amending the document that decides who receives an award", "Removing a numerical threshold from an eligibility requirement", "Naming a second party as an equal recipient of prize money"],
            correctIndex: 0,
            explanation: "Which is the point of putting the two side by side: both are rule changes, not persuasion campaigns.",
            sourceLessonSlug: "two-corrections-that-happened",
          },
          {
            prompt: "Both corrections are prospective, meaning:",
            options: ["They do not reissue the past", "They take effect only once every affected institution has adopted them", "They apply to work in progress but not to work already commissioned", "They will be reviewed after a fixed period and may then be withdrawn"],
            correctIndex: 0,
            explanation: "No translator becomes a co-recipient retroactively and no engineer picks up a nomination for a 2015 album.",
            sourceLessonSlug: "two-corrections-that-happened",
          },
          {
            prompt: "Because corrections are prospective, the responses in Sections 4 and 5 were:",
            options: ["The only thing available", "An inferior substitute for the rule changes that eventually arrived", "Unnecessary, since the conventions were going to be corrected anyway", "Motivated by a belief that no correction would ever be possible at all"],
            correctIndex: 0,
            explanation: "For everybody already inside the convention, building a room, a rule, an archive, an object or a portfolio was never merely second best.",
            sourceLessonSlug: "two-corrections-that-happened",
          },
          {
            prompt: "A \"threshold\" is described here as a format cap wearing:",
            options: ["A percentage", "A signature, since it is applied by the person who approves the work", "A contract, because the requirement is agreed rather than imposed", "A deadline, since eligibility depends on when the work was completed"],
            correctIndex: 0,
            explanation: "The old 33 percent playing time rule is the example.",
            sourceLessonSlug: "two-corrections-that-happened",
          },
          {
            prompt: "Which two claims did this course verify against an institution and then print?",
            options: ["The seventy-nine editions and Amos as Spiral's only woman", "The Printmaking Workshop's founding year and White's Otis start year", "White as the first Black faculty member at Otis and AfriCOBRA's print price", "The 33 percent Grammy threshold and the International Booker prize amount"],
            correctIndex: 0,
            explanation: "The first against the Library of Congress, the second against the Studio Museum in Harlem.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "Which two claims does this course report as contested rather than settled?",
            options: ["The workshop's founding year and White's Otis start year", "The number of ULAE editions and the size of Catlett's linocut series", "The date Spiral dissolved and the year AfriCOBRA was formed in Chicago", "Tamarind's founding year and the year Blackburn received his MacArthur"],
            correctIndex: 0,
            explanation: "1948 against late winter 1947, and 1964 against 1965. Both positions named, neither chosen.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "Why is the claim that White was the first Black faculty member at Otis left out?",
            options: ["The college's own page does not say it", "Because the LACMA retrospective literature explicitly contradicts the claim", "Because the course avoids all claims about individuals in a living institution", "Because his start year is disputed, so no first claim could be dated reliably"],
            correctIndex: 0,
            explanation: "A first claim needs the issuing institution, however widely the claim is repeated elsewhere.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "Why does the course avoid a specific price for AfriCOBRA's prints?",
            options: ["No institutional source it could reach states a figure", "Because the price varied so widely between outlets that no figure is meaningful", "Because the group's own records of its sales were destroyed in the 1970s", "Because the collective sold its prints for whatever a buyer could afford"],
            correctIndex: 0,
            explanation: "So the lesson says affordably priced and stocked in Black-owned businesses, which the Studio Museum does state.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "The course leaves which detail about Emma Amos open?",
            options: ["The exact year she joined Spiral", "Whether she was in fact the only woman admitted to the collective", "Which of her media she trained in first, printmaking or painting", "Whether Hale Woodruff or Romare Bearden invited her into the group"],
            correctIndex: 0,
            explanation: "The Studio Museum says 1964 and other accounts say 1963. The course follows the museum and leaves the discrepancy open.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "An unverified printed detail is called a hostage because:",
            options: ["Its correction discredits the verified material beside it", "It cannot be removed once learners have committed it to memory", "It commits the author to defending a position they no longer hold", "It prevents any later researcher from investigating the question again"],
            correctIndex: 0,
            explanation: "The same argument the course made in Section 1 about the theft framing, applied to itself.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "How many people carry the evidence in this course?",
            options: ["Six", "Twelve, one for each of the industries and institutions it examines", "Three, being Blackburn, Catlett and Burroughs, with the others as context", "Seventy-nine, matching the editions Blackburn printed at the Long Island workshop"],
            correctIndex: 0,
            explanation: "And the mechanism predicts most comparable technicians left no retrievable trace at all.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "What does the course say six names and a feeling of completeness amounts to?",
            options: ["The opposite of the argument", "Sufficient coverage, since each name demonstrates a distinct response", "An unavoidable limitation of any course built from museum sources", "Evidence that the convention affected fewer people than is often assumed"],
            correctIndex: 0,
            explanation: "You have read the documented tail of something much larger.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "What does the course say you should keep, rather than the six names?",
            options: ["The three condition test", "The chronology of American printmaking from 1937 to the present day", "The list of institutions whose archives hold printmaking documentation", "The distinction between lithography, screenprinting and relief processes"],
            correctIndex: 0,
            explanation: "Because it works on cases the record never preserved, which the names cannot.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "\"The documented tail\" refers to:",
            options: ["The small fraction of cases that left institutional records", "The end crawl of a film, where the technical credits are finally listed", "The archived documentation sheets a workshop accumulates over its history", "The last impressions of an edition, pulled once the surface has begun to fail"],
            correctIndex: 0,
            explanation: "Which is all any course like this one can show.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "An \"open question\" is defined as an unresolved point that is:",
            options: ["Recorded in writing so somebody can close it later", "Left out of the course entirely until the evidence improves", "Presented to learners as a matter of personal interpretation", "Settled provisionally, with a note that the answer may change"],
            correctIndex: 0,
            explanation: "Rather than smoothed over in prose, because a hedge nobody wrote down is a hedge nobody will ever clear.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "A \"refusal\", in this course's vocabulary, is a claim that:",
            options: ["Could have been printed and deliberately was not", "Has been shown to be false by a published institutional correction", "Concerns a living person and therefore requires their own statement", "Falls outside the subject matter the course set out to cover"],
            correctIndex: 0,
            explanation: "Because the evidence for it did not meet the standard, not because it was uninteresting.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "Where does the Booker Prize's own wording locate the value it recognises?",
            options: ["The vital work of translation", "The commercial contribution translated fiction makes to British publishing", "The difficulty of finding qualified translators for less widely spoken languages", "The right of a translator to be named on the cover of a published book"],
            correctIndex: 0,
            explanation: "Which is why the money is divided equally rather than awarded and then shared informally.",
            sourceLessonSlug: "two-corrections-that-happened",
          },
          {
            prompt: "The Grammy correction is dated to:",
            options: ["2021, for the 2022 awards", "2020, in the Academy's first annual disclosure of its rules and guidelines", "2017, when producers and engineers were first made eligible in the category", "2004, when a Lifetime Achievement Award was given to a group of session players"],
            correctIndex: 0,
            explanation: "The Recording Academy announced the updated rules and guidelines in May 2021.",
            sourceLessonSlug: "two-corrections-that-happened",
          },
          {
            prompt: "Which of these is NOT one of the three conditions?",
            options: ["The uncredited person belongs to a historically excluded group", "The public surface has fewer slots than the work had contributors", "The credit exists in a second document with a smaller readership", "The unnamed role is technically demanding and succeeds invisibly"],
            correctIndex: 0,
            explanation: "The conditions describe a format. Who ends up in the unnamed role is the separate routing question.",
            sourceLessonSlug: "the-same-shape-everywhere",
          },
          {
            prompt: "The print shop is described in this section as:",
            options: ["The clearest example, not the only one", "The only industry in which the mechanism has ever been documented", "The most recent case, since the other five conventions predate it", "The hardest case, because printmaking keeps unusually poor records"],
            correctIndex: 0,
            explanation: "Which is why the section converts it into a three condition test you can run yourself.",
            sourceLessonSlug: "the-same-shape-everywhere",
          },
          {
            prompt: "The Booker's shortlist awards are:",
            options: ["Also divided between author and translator", "Paid entirely to the author, with the translator recognised at the ceremony", "Held back until the winner is announced and then redistributed", "Awarded only to books whose translators are named on the cover"],
            correctIndex: 0,
            explanation: "Which makes the rule consistent from shortlist through to the winning title.",
            sourceLessonSlug: "two-corrections-that-happened",
          },
          {
            prompt: "\"Anatomy of a correction\" is a concept borrowed from:",
            options: ["CREDIT-00", "The Tamarind Institute's account of its own founding decisions", "The Library of Congress exhibition on Blackburn's Printmaking Workshop", "The Recording Academy's published rules and guidelines document"],
            correctIndex: 0,
            explanation: "This section shows what that general account looks like inside a medium.",
            sourceLessonSlug: "two-corrections-that-happened",
          },
          {
            prompt: "The lesson on refusals argues that a course about credit which hid its uncertainty would be:",
            options: ["Arguing against itself", "Easier to teach, at the cost of some accuracy in the details", "Following the normal practice of introductory survey courses", "Indistinguishable from the museum sources it draws its material from"],
            correctIndex: 0,
            explanation: "Which is why the ledger of what was printed, contested and refused is a lesson rather than a footnote.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "Superlatives in this course are:",
            options: ["Checked before they are printed", "Avoided altogether, since no superlative can be fully verified", "Printed with a hedge attached, so the reader can judge for themselves", "Accepted when two independent secondary sources agree on the wording"],
            correctIndex: 0,
            explanation: "The first master printer claim and the only woman claim both survived that check.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "Which document type is named as the second document in the film case?",
            options: ["The end crawl", "The distributor's contract with the post production facility", "The union filing recording who worked on which reel of the picture", "The archived colour grading notes retained by the laboratory"],
            correctIndex: 0,
            explanation: "It carries names the poster has no room for, which is condition two exactly.",
            sourceLessonSlug: "the-same-shape-everywhere",
          },
          {
            prompt: "The productive questions once a format is identified are the two from:",
            options: ["Section 1", "Section 2, about whether a credit was destroyed or merely relocated", "Section 4, about which of the three responses a person should choose", "Section 6, about which corrections have already been made in that industry"],
            correctIndex: 0,
            explanation: "Who is routed into the unnamed role, and what the people in it built instead.",
            sourceLessonSlug: "the-same-shape-everywhere",
          },
          {
            prompt: "This course's final instruction to the learner is to keep:",
            options: ["A test, not a list of names", "A record of every unverified claim encountered in other histories", "The six biographies, which are the most transferable part of the material", "The distinction between a signature and a chop, which travels to any medium"],
            correctIndex: 0,
            explanation: "Because the three condition test works on cases the record never preserved.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "The translator parallel is followed in the next lesson by a prize that changed:",
            options: ["Exactly that convention", "The way translated books are marketed to English language readers", "The eligibility rules for books first published outside the United Kingdom", "The number of translators who may share a single shortlisted nomination"],
            correctIndex: 0,
            explanation: "The International Booker Prize divides its money equally between author and translator.",
            sourceLessonSlug: "the-same-shape-everywhere",
          },
          {
            prompt: "A \"prospective correction\" is a rule change that:",
            options: ["Applies from now on", "Takes effect only after a transitional period agreed with the industry", "Can be reversed if the institution later decides it was a mistake", "Requires the affected parties to apply individually for the new credit"],
            correctIndex: 0,
            explanation: "It does not restore credit for work already published, which is its central limitation.",
            sourceLessonSlug: "two-corrections-that-happened",
          },
          {
            prompt: "The lesson describes the Recording Academy change as removing:",
            options: ["The threshold", "The requirement that nominees be voting members of the Academy", "The limit on how many people may share a single award statuette", "The distinction between recording engineers and mastering engineers"],
            correctIndex: 0,
            explanation: "Nothing about the engineering changed; the slot count did.",
            sourceLessonSlug: "two-corrections-that-happened",
          },
          {
            prompt: "A \"co-recipient by rule\" differs from an acknowledged helper because the credit is:",
            options: ["Enforced by the document that assigns the outcome", "Announced publicly at the same ceremony as the main award", "Recorded in the institution's archive rather than in its published rules", "Granted automatically to everyone named in the published work"],
            correctIndex: 0,
            explanation: "Rather than left to anyone's goodwill, which is what makes the Booker rule a structural change.",
            sourceLessonSlug: "two-corrections-that-happened",
          },
          {
            prompt: "Section 6 argues the print shop case is worth generalising because its mechanism is:",
            options: ["A property of the medium", "The oldest documented credit convention in any creative industry", "Enforced by an institution that also governs the other five industries", "Unique enough that no other field's conventions closely resemble it"],
            correctIndex: 0,
            explanation: "Rather than of a society, which is why the same three conditions appear in five unrelated fields.",
            sourceLessonSlug: "the-same-shape-everywhere",
          },
          {
            prompt: "The refusals lesson exists because the alternative would leave the course:",
            options: ["Holding hostages", "Shorter than the assessment specification requires it to be", "Unable to cite any institutional source for its central claims", "Inconsistent with the way CREDIT-00 handles contested material"],
            correctIndex: 0,
            explanation: "Every unverified detail printed is one, and its eventual correction damages everything standing next to it.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "Which is the correct order of the three conditions as the lesson states them?",
            options: ["Format cap, relocated credit, invisible expertise", "Invisible expertise, format cap, relocated credit, in ascending order of importance", "Relocated credit, invisible expertise, format cap, matching the order of the sections", "Format cap, invisible expertise, archival silence, which is the diagnostic sequence"],
            correctIndex: 0,
            explanation: "A cap on the public surface, a credit in a low readership document, and a technically demanding role that succeeds invisibly.",
            sourceLessonSlug: "the-same-shape-everywhere",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // FINAL — 40 pooled questions serving 10, across all 18 teaching lessons
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "final-exam-who-signs-the-print",
      title: "25 · Final assessment",
      section: "Final assessment",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 10,
        questions: [
          {
            prompt: "The organising claim of this whole course is that the master printer's invisibility is:",
            options: ["A convention of the medium", "A consequence of racial exclusion from American print workshops", "An accident of how nineteenth century workshops kept their records", "A commercial decision by publishers who wanted one name per edition"],
            correctIndex: 0,
            explanation: "It applies to every master printer, which is what makes the case about infrastructure rather than about theft.",
            sourceLessonSlug: "everyone-is-unsigned",
          },
          {
            prompt: "A fine art print is the work of at least how many skilled roles?",
            options: ["Two", "One, with the printer executing instructions the artist has fully specified", "Three, since a publisher must approve every edition before it can be pulled", "Four, counting the artist, printer, papermaker and the registrar who documents it"],
            correctIndex: 0,
            explanation: "The artist makes the image and the printer makes the edition, and the second job is not assistance.",
            sourceLessonSlug: "two-hands-one-sheet",
          },
          {
            prompt: "Tamarind describes its working method as:",
            options: ["Collaborative printmaking", "Supervised production, in which a trained printer realises a finished design", "Editioned reproduction, distinguishing its output from unique works on paper", "Cooperative publishing, in which artist and workshop share the eventual proceeds"],
            correctIndex: 0,
            explanation: "Bringing artist and printer together for a creative exchange of ideas and technical possibilities.",
            sourceLessonSlug: "two-hands-one-sheet",
          },
          {
            prompt: "The pencil signature on prints dates from:",
            options: ["The second half of the nineteenth century", "The fifteenth century, alongside the earliest European printed images", "The 1960s, when American workshops standardised the format of the margin", "The 1790s, when lithography was invented and editions became reproducible"],
            correctIndex: 0,
            explanation: "The V&A records Whistler as one of the first artists to put a pencilled signature to a print.",
            sourceLessonSlug: "what-a-signature-certifies",
          },
          {
            prompt: "The signature convention was invented to distinguish an original print from:",
            options: ["A reproduction", "An artist's proof held outside the numbered edition of the same image", "A later impression pulled after the printing surface had begun to degrade", "A forgery produced by a rival workshop from a copied printing surface"],
            correctIndex: 0,
            explanation: "A photomechanical copy of a work that originated in another medium. The question is about the origin of the printing surface.",
            sourceLessonSlug: "what-a-signature-certifies",
          },
          {
            prompt: "According to Tamarind, signing and numbering an impression indicates the artist's:",
            options: ["Approval", "Sole authorship of every stage of the print's production", "Ownership of the copyright in the image for its full statutory term", "Consent to the price at which the workshop will offer the impression"],
            correctIndex: 0,
            explanation: "Which makes the signature closer to a quality release than to a byline.",
            sourceLessonSlug: "what-a-signature-certifies",
          },
          {
            prompt: "Framing this history as a theft would be wrong because the convention:",
            options: ["Withholds a signature from every printer", "Was introduced only after the workshops in question had closed", "Has never been documented in writing by any institution anywhere", "Applies to publishers rather than to the printers who pull the editions"],
            correctIndex: 0,
            explanation: "Anyone holding a print catalogue could correct the claim, and the verified material would go down with it.",
            sourceLessonSlug: "everyone-is-unsigned",
          },
          {
            prompt: "The two better questions this course substitutes for the theft question are who ends up in the unnamed category and:",
            options: ["What they build in response", "How much they were paid relative to the artists they printed for", "Whether any of them ever contested the convention in a court of law", "Which workshops kept the most complete records of their technical staff"],
            correctIndex: 0,
            explanation: "You cannot argue your way onto the front of somebody else's print, so the response is construction.",
            sourceLessonSlug: "everyone-is-unsigned",
          },
          {
            prompt: "A chop is best described as:",
            options: ["A symbol, not a name", "The printer's signature, written in pencil beneath the artist's own", "A serial number identifying the impression within its numbered edition", "A conservation mark applied by a museum when a print is accessioned"],
            correctIndex: 0,
            explanation: "Decoding it into a person requires a reference work that almost nobody outside the trade owns.",
            sourceLessonSlug: "the-chop-that-carries-no-name",
          },
          {
            prompt: "In 1960 Tamarind resolved to affix which marks to every proof or impression?",
            options: ["The workshop chop and the printer's individual chop", "The artist's signature and the date the impression was pulled from the stone", "A serial number and a reference code linking the sheet to its documentation", "The workshop chop alone, since individual printers rotated between editions"],
            correctIndex: 0,
            explanation: "Clinton Adams gives the reason as recognition of the printer's important role in the making.",
            sourceLessonSlug: "the-chop-that-carries-no-name",
          },
          {
            prompt: "June Wayne founded Tamarind in 1960 because the United States had:",
            options: ["No master printers of the necessary range", "No workshops willing to publish work by living American artists", "No supply of lithographic limestone after wartime restrictions ended", "No formal training programme for artists interested in editioned work"],
            correctIndex: 0,
            explanation: "She compared lithography's position to the whooping crane's, of which she said only thirty-six remained.",
            sourceLessonSlug: "the-chop-that-carries-no-name",
          },
          {
            prompt: "A Tamarind edition's documentation is signed by:",
            options: ["The artist and the printer", "The workshop director, on behalf of everyone involved in the project", "The artist alone, matching the signature applied to each impression", "The archivist who accessions the retained impressions at the museum"],
            correctIndex: 0,
            explanation: "The printer is a signatory to the document that establishes what the edition actually is.",
            sourceLessonSlug: "the-documentation-sheet",
          },
          {
            prompt: "The generalisable test from the documentation sheet lesson asks whether a credit was destroyed or:",
            options: ["Relocated", "Disputed between two parties who each claim to have earned it", "Waived by the person who would otherwise have been entitled to it", "Delayed until the relevant scholarship could establish the facts"],
            correctIndex: 0,
            explanation: "A destroyed credit needs recovery; a relocated one needs publication, which is far more tractable.",
            sourceLessonSlug: "the-documentation-sheet",
          },
          {
            prompt: "A documentation sheet is evidence of participation but never of:",
            options: ["Who solved the hard problem", "Which impressions belong to the numbered edition and which do not", "The date on which the printing surface was finally effaced", "Whether the artist accepted the edition as meeting the standard"],
            correctIndex: 0,
            explanation: "No format in the medium records relative contribution, so no document can settle it.",
            sourceLessonSlug: "the-documentation-sheet",
          },
          {
            prompt: "The bon a tirer belongs to whom, and why?",
            options: ["The printer, who must match the run to it", "The artist, who approved it as the standard for the whole edition", "The archive, as one of the retained impressions held by a museum", "The publisher, who uses it to settle disputes with dealers over quality"],
            correctIndex: 0,
            explanation: "The custom is functional and states the division of labour: the artist owns the approval, the printer owns the standard.",
            sourceLessonSlug: "the-bon-a-tirer",
          },
          {
            prompt: "Why is consistency structurally difficult to credit?",
            options: ["Its success is the absence of variation", "Because it can only be assessed once the edition has been dispersed", "Because the artist rather than the printer defines what consistent means", "Because workshops do not record how many impressions were rejected"],
            correctIndex: 0,
            explanation: "There is nothing to point at, which is the same reason a colourist or a mastering engineer is hard to credit.",
            sourceLessonSlug: "the-bon-a-tirer",
          },
          {
            prompt: "Blackburn was introduced to printmaking through:",
            options: ["WPA lithography classes in Harlem", "An apprenticeship at a commercial lithographic printing company in New York", "The Art Students League, where Will Barnet taught him the medium from scratch", "The Harmon Foundation, which commissioned editioned work from young artists"],
            correctIndex: 0,
            explanation: "At the Harlem Community Art Center, which the Library of Congress says became a model for his own workshop.",
            sourceLessonSlug: "blackburn-learns-the-stone",
          },
          {
            prompt: "Who taught Blackburn lithography at the Harlem Community Art Center?",
            options: ["Riva Helfond", "Augusta Savage, who had initiated the centre with Gwendolyn Bennett", "Charles Alston, who mentored him alongside James Lesesne Wells", "Will Barnet, whom he later met again at the Art Students League"],
            correctIndex: 0,
            explanation: "Savage and Bennett initiated the centre; Alston, Savage and Wells mentored him; Helfond taught the lithography.",
            sourceLessonSlug: "blackburn-learns-the-stone",
          },
          {
            prompt: "Blackburn was hired at Universal Limited Art Editions in 1957 as:",
            options: ["Its first master printer", "Its artistic director, choosing which artists the workshop would publish", "An artist in residence producing his own editions at the workshop", "A studio manager supervising a team of printers hired by the Grosmans"],
            correctIndex: 0,
            explanation: "The lithographic venture founded by Tatyana and Maurice Grosman at West Islip on Long Island.",
            sourceLessonSlug: "the-first-seventy-nine",
          },
          {
            prompt: "How many editions did Blackburn print for ULAE, and whose names are on them?",
            options: ["Seventy-nine, signed by the artists who drew them", "Seventy-nine, signed jointly by Blackburn and by each artist involved", "Thirty-six, published anonymously under the workshop's own imprint", "All the editions issued between 1957 and 1963, a figure never recorded"],
            correctIndex: 0,
            explanation: "The Library of Congress states the number. The convention accounts for whose signature appears.",
            sourceLessonSlug: "the-first-seventy-nine",
          },
          {
            prompt: "The Library of Congress says Blackburn did what for most of the ULAE artists?",
            options: ["Taught them lithography", "Selected the images from their paintings that would translate into print", "Signed the impressions on their behalf when they could not attend", "Negotiated their publishing terms with Tatyana and Maurice Grosman"],
            correctIndex: 0,
            explanation: "Sharing his sensibility of the medium and his approach to the stone, which makes this a case about authorship.",
            sourceLessonSlug: "the-first-seventy-nine",
          },
          {
            prompt: "The Printmaking Workshop's founding year is:",
            options: ["Contested between 1947 and 1948", "1948, settled by agreement between the two institutions that record it", "1971, when the operation became a non-profit corporation in New York", "1963, when Blackburn began running the Manhattan shop full time"],
            correctIndex: 0,
            explanation: "The Library of Congress says 1948; the workshop's successor at the Elizabeth Foundation for the Arts says late winter 1947.",
            sourceLessonSlug: "the-founding-year-problem",
          },
          {
            prompt: "What kind of evidence would settle the founding year dispute?",
            options: ["A dated primary document", "A published statement from a scholar who has read both accounts", "An agreement between the Library of Congress and the current workshop", "A survey of how other reference works have dated the founding"],
            correctIndex: 0,
            explanation: "A lease or rent receipt, a dated invoice for the press, a contemporaneous letter, or a city directory listing.",
            sourceLessonSlug: "the-founding-year-problem",
          },
          {
            prompt: "The 1971 mission of the Printmaking Workshop included creating opportunities for:",
            options: ["Third World and minority artists", "Printers seeking certification as professional collaborative practitioners", "Collectors wishing to acquire American editions at accessible prices", "Museums establishing archives of contemporary American printmaking"],
            correctIndex: 0,
            explanation: "Alongside maintaining quality, encouraging innovation, and fostering public appreciation of the fine art print.",
            sourceLessonSlug: "the-founding-year-problem",
          },
          {
            prompt: "Blackburn's 1992 MacArthur Fellowship citation named him for:",
            options: ["Giving generations of artists the chance to develop", "Printing the first seventy-nine editions issued by ULAE", "Establishing the documentation practices used across American workshops", "Reviving stone lithography at a time when no American shop still used it"],
            correctIndex: 0,
            explanation: "It named the room he built, not the editions he printed.",
            sourceLessonSlug: "build-the-room",
          },
          {
            prompt: "Blackburn's response to the convention is described as:",
            options: ["Routing around it", "Contesting it through the professional bodies of the print trade", "Documenting it, so that later researchers could establish what happened", "Withdrawing from commercial printing in favour of his own studio work"],
            correctIndex: 0,
            explanation: "Building infrastructure the convention does not govern, which accumulates institutional memory.",
            sourceLessonSlug: "build-the-room",
          },
          {
            prompt: "The Taller de Grafica Popular's foundational statutes permitted:",
            options: ["Individual or collective authorship", "Anonymous publication only, so no member's name appeared on any print", "Attribution to the workshop's three founders regardless of who made a work", "Signature by the printer as well as by the artist on every impression"],
            correctIndex: 0,
            explanation: "Which shows that the one-author print convention is a default rather than a law of nature.",
            sourceLessonSlug: "write-it-into-the-statutes",
          },
          {
            prompt: "Catlett's The Negro Woman consists of how many prints, and in what medium?",
            options: ["Fifteen linocuts", "Seventy-nine lithographs, matching the run Blackburn printed at ULAE", "Twenty screenprints, in the medium AfriCOBRA would later adopt", "Thirty-six etchings, one for each of the cranes in June Wayne's comparison"],
            correctIndex: 0,
            explanation: "Made at the Taller in Mexico City, dated 1947, later retitled The Black Woman.",
            sourceLessonSlug: "write-it-into-the-statutes",
          },
          {
            prompt: "The honest limit of the collective answer is that a rule a workshop writes for itself:",
            options: ["Binds only that workshop", "Lapses when the workshop's founding members leave or die", "Cannot survive a challenge under the copyright law of most countries", "Applies only to prints the workshop sells rather than to those it exhibits"],
            correctIndex: 0,
            explanation: "It does nothing for a technician in a shop that has not adopted it, which is most shops.",
            sourceLessonSlug: "write-it-into-the-statutes",
          },
          {
            prompt: "The DuSable museum was founded in 1961 under what name, and where?",
            options: ["The Ebony Museum, in the founders' home", "The South Side Community Art Center, in a WPA funded building", "The DuSable Black History Museum, in a wing of the Art Institute", "The Arts Craft Guild Collection, above a Black owned bookshop"],
            correctIndex: 0,
            explanation: "The Ebony Museum of Negro History and Art, on the ground floor of the Burroughses' home on Chicago's South Side.",
            sourceLessonSlug: "found-the-museum",
          },
          {
            prompt: "Founding a museum is the strongest of the three responses because it:",
            options: ["Keeps operating after everyone involved is dead", "Requires less capital than equipping a print workshop does", "Confers legal authority in disputes over the attribution of works", "Produces new named artists faster than a collective or a workshop"],
            correctIndex: 0,
            explanation: "It decides what future strangers find, which is the definition of institutional memory.",
            sourceLessonSlug: "found-the-museum",
          },
          {
            prompt: "Blackburn, Burroughs and Charles White share which biographical fact?",
            options: ["A WPA sponsored art centre", "A period of work at the Taller de Grafica Popular in Mexico City", "Membership of the Spiral collective in New York in the early 1960s", "A MacArthur Fellowship awarded for teaching rather than for making"],
            correctIndex: 0,
            explanation: "Blackburn learned lithography at one in Harlem; Burroughs and White helped found one in Chicago.",
            sourceLessonSlug: "found-the-museum",
          },
          {
            prompt: "AfriCOBRA's medium choice is best understood as a solution to which problem?",
            options: ["Distribution", "Cost of materials, which the group could not otherwise have afforded", "The technical difficulty of lithography, which none of its members knew", "The absence of exhibition space open to Black artists in Chicago"],
            correctIndex: 0,
            explanation: "Art that must be understood by ordinary people is useless if ordinary people never encounter it.",
            sourceLessonSlug: "cheap-multiple-and-portable",
          },
          {
            prompt: "Barbara Jones-Hogu's role in AfriCOBRA was that she was:",
            options: ["The only trained printmaker", "The founder, who convened the collective in Chicago in 1968", "The group's business manager, who arranged its retail placements", "The oldest member, and the only one with a completed graduate degree"],
            correctIndex: 0,
            explanation: "The Studio Museum notes she was thirty and still enrolled in her master's programme at the time.",
            sourceLessonSlug: "cheap-multiple-and-portable",
          },
          {
            prompt: "Teaching is described in this course as an output with:",
            options: ["No format", "A format cap of three named students per instructor", "A format that records participation but never relative contribution", "A well documented format that historians have simply neglected to use"],
            correctIndex: 0,
            explanation: "No signature line, no chop, no documentation sheet, no accession record, so it survives only as testimony.",
            sourceLessonSlug: "teaching-with-no-format",
          },
          {
            prompt: "Charles White considered which printer his primary printer in New York?",
            options: ["Robert Blackburn", "Will Barnet, his fellow instructor at the Art Students League", "Antonio Frasconi, who also worked at the Workshop of Graphic Art", "Elizabeth Catlett, whom he had known at the Taller in Mexico City"],
            correctIndex: 0,
            explanation: "The Library of Congress records it, and names We Have Been Believers of 1949 among the images Blackburn printed for him.",
            sourceLessonSlug: "teaching-with-no-format",
          },
          {
            prompt: "Emma Amos's position in Spiral was that she was:",
            options: ["The youngest artist and only woman admitted", "The only member who had trained abroad before joining the group", "The only printmaker in a collective otherwise made up of painters", "A founding member, present when the collective first convened in 1963"],
            correctIndex: 0,
            explanation: "The Studio Museum in Harlem states it, and she remained a member until the collective dissolved in 1965.",
            sourceLessonSlug: "the-only-woman-in-the-room",
          },
          {
            prompt: "Being the only woman in a group is evidence about:",
            options: ["Who was invited", "The abilities of the woman who was admitted to it", "The medium the group worked in and its training requirements", "How long the group was able to survive before dissolving"],
            correctIndex: 0,
            explanation: "It is a fact about the composition of a room, not a distinction conferred on the person in it.",
            sourceLessonSlug: "the-only-woman-in-the-room",
          },
          {
            prompt: "The three conditions that identify this mechanism anywhere are a format cap, a relocated credit, and:",
            options: ["An invisibly successful technical role", "A workforce drawn disproportionately from an excluded group", "A publisher with a commercial interest in a single named author", "A medium old enough that its conventions predate written records"],
            correctIndex: 0,
            explanation: "Expertise whose achievement is the absence of variation has nothing for an observer to point at.",
            sourceLessonSlug: "the-same-shape-everywhere",
          },
          {
            prompt: "Both of the corrections in Section 6 worked by:",
            options: ["Rewriting a rule about slots", "Publicising the contributions of the people the conventions overlooked", "Compensating the people whose earlier work had gone uncredited", "Requiring institutions to publish their internal documentation"],
            correctIndex: 0,
            explanation: "The International Booker divides its money equally; the Recording Academy removed a playing time threshold.",
            sourceLessonSlug: "two-corrections-that-happened",
          },
          {
            prompt: "This course's closing caution is that six names and a feeling of completeness is:",
            options: ["The opposite of the argument", "Enough coverage, provided each name demonstrates a different response", "A limitation of the sources rather than of the argument being made", "Evidence that the convention affected fewer people than is often claimed"],
            correctIndex: 0,
            explanation: "The mechanism predicts that most comparable technicians left no retrievable trace at all.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "Which claim did this course test and refuse to print?",
            options: ["That Charles White was Otis's first Black faculty member", "That Robert Blackburn printed the first seventy-nine editions at ULAE", "That Emma Amos was the only woman admitted to the Spiral collective", "That the Taller's statutes permitted collective as well as individual authorship"],
            correctIndex: 0,
            explanation: "Widely repeated, but the college's own page does not say it, and a first claim needs the issuing institution.",
            sourceLessonSlug: "what-this-course-refused",
          },
        ],
      },
    },
  ],
};
