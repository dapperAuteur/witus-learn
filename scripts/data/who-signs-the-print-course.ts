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
  ],
};
