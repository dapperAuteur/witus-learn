import type { AuthoredCourse } from "./authored-course";

// CREDIT-W1 · "Written by Himself" (Culture & History). The first course on the lettered W track
// inside the CREDIT series. Source brief:
// plans/future-courses/2026-08-25-12-black-writers-research.md §1, which called ghostwriting the
// strongest first build in the whole writing file. Tier 0.
//
// THE SPINE, and the sentence the whole course is built to keep true:
// A BYLINE IS A TERM IN AN AGREEMENT, AND THE TITLE PAGE IS WHERE THE AGREEMENT SHOWS. In a
// ghostwriting arrangement the writer's name is absent BY DESIGN and the writer is paid for exactly
// that absence, so the missing name is the deliverable rather than a wrong.
//
// Like CREDIT-02 and CREDIT-03, the mechanism is kept honest. EVERY ghostwriter is unnamed,
// regardless of who they are, so a course that framed ghostwriting as theft would be factually
// wrong and correctable in public by anyone holding a publishing contract. The lesson
// `not-a-theft-a-sale` says so out loud. The sharper questions, which this course actually asks,
// are who ends up on the inside of that contract, who ends up on the outside, and what a byline
// pays that a fee does not.
//
// This is the THIRD time the series has run this move (the master printer who does not sign, the
// employee designer who is not on the door, and now the ghost), and the course says that out loud
// rather than pretending the pattern is new. It cross-references CREDIT-00 on the author line and
// on archival silence instead of re-teaching either.
//
// THE EVIDENCE BASE IS FREE, DIGITISED AND OUT OF COPYRIGHT, which is why this course could be
// built without image rights or licensing. Every core document was read directly:
//   Wheatley, Poems on Various Subjects, Religious and Moral (London: Bell, 1773), and the
//     eighteen-signature attestation "To the PUBLICK" bound into the front matter. Verified twice,
//     against Documenting the American South and against the Project Gutenberg transcription, which
//     agree on the wording and on all eighteen names.
//   Douglass, Narrative of the Life of Frederick Douglass, an American Slave. Written by Himself
//     (Boston: Anti-Slavery Office, 1845), with Garrison's preface of 1 May 1845 and Wendell
//     Phillips's letter of 22 April 1845.
//   Jacobs, Incidents in the Life of a Slave Girl. Written by Herself, edited by L. Maria Child
//     (Boston: Published for the Author, 1861), whose editor's introduction says in print that the
//     ideas and language are the author's own, and which was read as Child's work for a century
//     anyway.
//   Northup, Twelve Years a Slave (Auburn: Derby and Miller, 1853), "edited by David Wilson".
//   Keckley, Behind the Scenes (New York: G. W. Carleton, 1868).
//   Omar ibn Said's 1831 Arabic autobiography, Library of Congress, acquired 2017.
//   Fisher, What Mrs. Fisher Knows About Old Southern Cooking (San Francisco, 1881).
//
// THE MODEL CORRECTION IS HARRIET JACOBS, and it anchors Section 5: a misattribution that stood for
// roughly a century, a named scholar (Jean Fagan Yellin), a documentary method (Jacobs's own
// letters), and a dated resolution (the 1981 American Literature article and the 1987 Harvard
// edition). That is CREDIT-00 Section 6 with a real case attached.
//
// FOUR OF THE STRONGEST DOCUMENTS ARE BOOKS BY BLACK WOMEN WHOSE AUTHORSHIP WAS DISPUTED, so women
// are the argument in this course rather than an addendum, and the course says so in those words.
//
// HARD RULES THIS FILE KEEPS:
//  1. NO INVENTED SOURCE, DATE, QUOTATION OR URL. Every quoted line was read in a digitised copy of
//     the book it comes from or in the statute it comes from.
//  2. NO GHOSTWRITING ATTRIBUTION THAT RESTS ON RUMOUR OR INFERENCE. Where the record does not name
//     the writer, this course says the record does not name the writer, and treats that absence as
//     the lesson. Section 6 is built on that refusal.
//  3. EVERY "FIRST" CLAIM NAMES THE ISSUING INSTITUTION or is reported as attributed rather than
//     settled.
//  4. CONTESTED CLAIMS ARE TAUGHT AS CONTESTED with the holders of each position named.
//  5. CLAIMS THAT COULD NOT BE VERIFIED ARE NOT PRINTED AS FACT. Each is filed in
//     src/lib/research-checks.ts with what would settle it.
//
// House style: `section` on every lesson; flush-left single-line `:::reveal q ||| a`; a
// `## Vocabulary` block of 3-6 lesson-specific terms; APA 7 `## Sources` with a stable URL wherever
// one exists; a quiz per teaching section (pool sized by density, serving 5, passing 80, shuffled)
// plus a final pooling 40 and serving 10; every question carries `explanation` + `sourceLessonSlug`.
// Correct options are written SHORT and distractors long and specific, so `check-longest-option`
// passes by construction rather than by post-hoc trimming.
export const WRITTEN_BY_HIMSELF_COURSE: AuthoredCourse = {
  title: "Written by Himself",
  description:
    "A byline is not a report of who wrote something. It is a term in an agreement, and the title page is where the agreement shows. Ghostwriting is the cleanest place in this catalog to see that, because the writer's name is missing by design and the writer was paid for exactly that: the absence is the deliverable, not a wrong done to anybody. So this course does not call ghostwriting theft, which would be wrong and correctable in public by anyone holding a publishing contract. It asks the harder question instead. Who ends up inside that contract, who ends up outside it, and what does a byline pay that a fee does not? The evidence is free, digitised and out of copyright, and the course reads it directly. Phillis Wheatley's 1773 Poems carries an attestation in its own front matter, signed by eighteen Boston men, certifying that a Black woman wrote her own poems: the credit document and the book are the same object. Frederick Douglass answered the same disbelief from the other direction, by putting the claim in his subtitle. Solomon Northup's book was edited by David Wilson, Omar ibn Said wrote his in Arabic in 1831, and Abby Fisher dictated hers because she could not write. Elizabeth Keckley took the byline and was punished for it, and was doubted anyway. And Harriet Jacobs is the model correction the whole series needs: her book was read as Lydia Maria Child's for roughly a century, and Jean Fagan Yellin restored it to Jacobs using Jacobs's own letters. Four of the strongest documents here are books by Black women whose authorship was disputed, which makes women the argument rather than an addendum. The course ends in the present tense, with the as-told-to trade, the collaborator credit ladder, and a deliberate refusal: where the record does not name the writer, this course does not guess.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1 — The byline is a contract term
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-byline-is-a-contract-term",
      title: "1 · The byline is a contract term",
      section: "Section 1 · The byline is a contract term",
      body: `Open any book. Somewhere on the title page there is a name, and under it a publisher, a place and a year. Most readers take that name as a report: this is the person who wrote the words.

**It is not a report. It is a term in an agreement.** The name on a title page is what the parties to a publishing arrangement agreed would appear there. Usually the agreed name and the writing hand are the same person, which is why the format feels like a fact. Sometimes they are not, and nothing on the page tells you which case you are holding.

**American copyright law has known this since 1976, and it has slots for it.** The statute defines an **anonymous work** as "a work on the copies or phonorecords of which no natural person is identified as author," and a **pseudonymous work** as "a work on the copies or phonorecords of which the author is identified under a fictitious name" (17 U.S.C. § 101). Those are not loopholes. They are ordinary categories in the ordinary law, drafted because books with no name on them and books with the wrong name on them are a normal part of publishing.

**The law even prices the difference.** Copyright normally runs from the life of the author, which requires knowing who the author is. So for anonymous works, pseudonymous works and works made for hire, the statute switches to a flat clock: "the copyright endures for a term of 95 years from the year of its first publication, or a term of 120 years from the year of its creation, whichever expires first" (17 U.S.C. § 302(c)).

Read the next clause of that subsection slowly, because it is the whole course in one sentence. If, before the end of that term, "the identity of one or more of the authors of an anonymous or pseudonymous work is revealed in the records of a registration made for that work," the copyright reverts to the life-of-the-author term (17 U.S.C. § 302(c)).

**The statute contains a procedure for a name arriving late.** It expects that some works will be published without their author's name, it expects that some of those names will surface afterwards, and it says what happens to the term when they do. Attribution, in the law's own design, is a thing that can be corrected.

**Now the mechanism this course is about.** In a ghostwriting arrangement, two people agree that one of them writes and the other one's name goes on the cover. The writer is paid. The absence of the writer's name is not a side effect of that deal, and it is not something that happened to the writer while they were not looking. **It is the deliverable.** The client is buying a book that reads as theirs, and part of what makes it read as theirs is that no other name appears.

That is why the framing most people reach for first is wrong, and why this course refuses it in the next lesson. Nobody at the table is hiding anything from anybody at the table. Both parties know. The format is simply answering a different question from the one readers think they are asking.

**So what does a byline actually answer?** It answers: whose name did the parties agree to publish this under? That has a definite answer and both parties know it. Readers hear: who wrote these words? That is a different question, and on a great many books it has an answer nobody wrote down.

That gap is where this whole course lives. It is not a gap anyone opened on purpose, and it does not close by itself.

:::reveal What kind of thing is a byline, and what question does it actually answer? ||| It is a term in an agreement, and it answers whose name the parties agreed to publish the book under, not who wrote the words.

:::reveal Under 17 U.S.C. § 302(c), what happens to the copyright term if the author of an anonymous or pseudonymous work is later revealed in the registration records? ||| The term reverts to the ordinary life-of-the-author term, because the statute contains a procedure for a name arriving late.

## Vocabulary
- **Byline**: the public author attribution on a title page, cover or article, which states an agreed name rather than a verified writing hand.
- **Anonymous work**: in the copyright statute, a work on whose copies no natural person is identified as author.
- **Pseudonymous work**: in the copyright statute, a work on whose copies the author is identified under a fictitious name.
- **Ghostwriting**: an arrangement in which one party writes and another party's name is published, with the writer paid and unnamed by agreement.
- **Title page**: the page that carries the agreed attribution along with publisher, place and year, and therefore the page where a publishing arrangement becomes visible.

## Sources
Copyright Act of 1976, 17 U.S.C. § 101 (definitions of anonymous work, pseudonymous work, and work made for hire). https://www.law.cornell.edu/uscode/text/17/101

Copyright Act of 1976, 17 U.S.C. § 302(c) (duration of copyright in anonymous works, pseudonymous works, and works made for hire). https://www.law.cornell.edu/uscode/text/17/302`,
    },
    {
      slug: "not-a-theft-a-sale",
      title: "2 · Not a theft, a sale",
      section: "Section 1 · The byline is a contract term",
      body: `There is a story people want to tell about ghostwriting, and it is the wrong one.

The story goes: a writer did the work, somebody else's name went on it, the writer was cheated. It is a satisfying shape. It is also, as a description of ghostwriting, **factually wrong**, and anyone holding a publishing agreement can correct you in public.

**Every ghostwriter is unnamed.** Not the underpaid ones. Not the ones without leverage. All of them, by definition, because a named collaborator is not a ghost. The absence of the name is what distinguishes the arrangement from every other kind of writing work, and it is what the client is paying for.

**This is now the third time this series has met that shape, and the repetition is the point.** In \`who-signs-the-print\` (CREDIT-02), the artist signs a print and the master printer does not, and that applies to every master printer in every shop. In \`the-name-on-the-door\` (CREDIT-03), a building is credited to a firm and the firm carries the owner's name, and that applies to every employee designer in the office. Here, the ghost is unnamed, and that applies to every ghost.

**Three disciplines, three conventions, one structure: a rule that erases a whole category of contributor, applied evenly, for reasons that have nothing to do with who the contributor is.** A convention that erases everybody is a cleaner laboratory than a wrong done to one person, because you can hold the convention still and vary the people.

**And that is exactly what makes the racial question askable without exaggeration.** If the rule is even, then any pattern in who lands on the erased side of it is a pattern in something else: in hiring, in whose name is thought to sell, in who is offered the byline and who is offered the fee. The convention is not the villain. The routing is the finding.

So the question this course asks is not "who was robbed." It is three narrower questions, and each has evidence behind it:

- **Who ends up inside the contract, and who ends up outside it?** Which people are offered work where their name appears, and which are offered work where it does not?
- **What does a byline pay that a fee does not?** A fee is money once. A byline is money later: the next commission, the speaking invitation, the second book, the entry in the catalogue record, the line in the encyclopedia.
- **What does the record do with a name that was never printed?** This is CREDIT-00's territory and this course does not re-teach it. The short version is that an archive preserves what somebody filed, so a contributor who was never written down is not merely unfamous, they are unsearchable.

**One more distinction, and it is the one this course guards most carefully.** There is a second mechanism in these pages that looks superficially like ghostwriting and is close to its opposite. In ghostwriting, a name is **removed** because the client bought its removal. In an attestation or an authenticating preface, a second name is **added** because the author's own name is not believed. One subtracts a name that was sold. The other adds a name to prop up a name that is already there and doubted.

They are not the same mechanism, they do not have the same victims, and merging them produces nonsense. The next lesson separates all four shapes properly, and Sections 2 and 3 are built on the difference.

:::reveal Why is calling ghostwriting a theft factually wrong rather than merely uncharitable? ||| Because the writer is paid specifically for the absence of their name, so the missing byline is the deliverable of a sale rather than something taken from them.

:::reveal If a credit convention erases every contributor of a certain kind evenly, what is left to investigate? ||| The routing: who gets placed on the erased side of an even rule, which is a question about hiring, offers and whose name is thought to sell.

## Vocabulary
- **Convention**: a settled practice about who is named in a medium, applied to a whole category of contributor rather than to particular people.
- **Routing**: the pattern in who is offered named work and who is offered unnamed work, which is what remains to explain once a convention is known to apply evenly.
- **The deliverable**: in a ghostwriting arrangement, the absence of the writer's name, which is the thing the client is actually buying.
- **Attestation**: a signed statement by third parties certifying that a named author really wrote the work, which adds names rather than removing one.

## Sources
Copyright Act of 1976, 17 U.S.C. § 101 (definition of work made for hire). https://www.law.cornell.edu/uscode/text/17/101`,
    },
    {
      slug: "four-shapes-of-a-hidden-hand",
      title: "3 · Four shapes of a hidden hand",
      section: "Section 1 · The byline is a contract term",
      body: `"Somebody else was involved in this book" describes four arrangements that behave completely differently. Telling them apart is most of the skill this course teaches, so here they are with the test that separates them.

**1. The ghost proper.** A contract says one person writes and another person's name is published. The writer is paid and does not appear. **Test: is the writer's name absent from the book entirely?** If yes, and the writer agreed to that in exchange for payment, this is a ghost. The modern trade version of it is Section 6.

**2. The as-told-to.** The writer *is* named, in a subordinate slot: "as told to," "with," "and," or a line in the acknowledgements. **Test: does the writer appear, but below the subject?** This is the **control case** for the whole course, because the credit is visible and gradable. You can read the ladder straight off the title page: same size type, smaller type, the word "with", the word "and", the acknowledgements, nothing.

**3. The amanuensis.** Someone who cannot write, or cannot write in the language of publication, dictates to a person who takes it down. **Test: did the named author speak the book rather than write it?** Here the interesting question is not credit at all, it is **fidelity**: how much did the transcriber change, and in whose interest? Amanuenses in this course frequently had an agenda, and at least one of them wrote a preface announcing it. Section 4.

**4. The authenticator.** A third party, usually with more social standing than the author, signs a statement certifying that the author really did write the book. **Test: is a second name added to make the first one believed?** This is not a ghost at all. It is close to the inverse: the author's name IS on the book, and it is not enough. Sections 2 and 3.

**Watch what changes as you move down that list.**

| Shape | The writer's name | What is at stake |
| --- | --- | --- |
| Ghost | Absent, by agreement | What the byline would have paid |
| As-told-to | Present, subordinate | The rank of the credit |
| Amanuensis | Present as transcriber or editor | Fidelity to what was said |
| Authenticator | Present as guarantor | Whether the author is believed at all |

**Two of these are about credit and two are not.** The ghost and the as-told-to are credit arrangements: the question is whose name appears and how big. The amanuensis is a **fidelity** question. The authenticator is a **credibility** question, and it arises only when a named author's word is treated as insufficient.

**A single book can run more than one of them at once.** *Incidents in the Life of a Slave Girl* (1861) carries a pseudonym, an editor's name, and an editorial introduction vouching for the author, and it was later misattributed to that editor. That is a pseudonym, an authenticator and a misattribution stacked on one title page, which is why it takes a whole section of this course.

**And one shape can be mistaken for another by a careless reader a century later**, which is not a hypothetical. An editor's name printed on a title page as an authenticator has repeatedly been read, later, as the name of the person who actually wrote the book. The mistake is understandable and it is still a mistake, and Section 5 shows exactly how one of them was undone.

:::reveal What single test separates the authenticator from the ghost? ||| Whether a name is being added or removed: the authenticator adds a name so the author is believed, and the ghost removes the writer's name because the client bought its removal.

:::reveal Which of the four shapes is the control case for measuring credit, and why? ||| The as-told-to, because the writer is actually named in a subordinate slot, so the rank of the credit is visible on the page and can be compared book to book.

## Vocabulary
- **The ghost proper**: an arrangement in which the writer is paid and their name does not appear on the book at all.
- **As-told-to**: a visible collaboration credit that names the writer in a subordinate position under the subject's name.
- **Amanuensis**: a person who writes down what another person dictates, whose central question is fidelity to what was said rather than credit.
- **Authenticator**: a third party whose signed preface or attestation certifies that the named author really wrote the work.
- **Credit ladder**: the ranked set of positions a collaborator's name can occupy, from equal billing down through "with" and the acknowledgements to nothing.

## Sources
Jacobs, H. A. (1861). *Incidents in the life of a slave girl. Written by herself* (L. M. Child, Ed.). Published for the Author. https://docsouth.unc.edu/fpn/jacobs/jacobs.html`,
    },
    {
      slug: "quiz-the-byline",
      title: "4 · Knowledge check: the byline",
      section: "Section 1 · The byline is a contract term",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "The name on a book's title page is, at bottom:",
            options: ["A contract term", "A verified report of which person physically wrote the words in the book", "A statement the publisher is legally required to check before printing it", "A record filed with the Copyright Office and audited before publication"],
            correctIndex: 0,
            explanation: "It states the name the parties agreed to publish under, which is usually but not always the writing hand.",
            sourceLessonSlug: "the-byline-is-a-contract-term",
          },
          {
            prompt: "Under 17 U.S.C. § 101, an anonymous work is one on whose copies:",
            options: ["No natural person is identified as author", "The author is identified under a fictitious name chosen by the publisher", "The author's name appears only in the acknowledgements rather than the title page", "Two or more authors are listed without saying which wrote which chapter"],
            correctIndex: 0,
            explanation: "The statutory phrase is exactly that, and it covers copies and phonorecords alike.",
            sourceLessonSlug: "the-byline-is-a-contract-term",
          },
          {
            prompt: "Under 17 U.S.C. § 101, a pseudonymous work is one on whose copies:",
            options: ["The author is identified under a fictitious name", "No natural person at all is identified as the author of the work", "The author is identified but the publisher's own name has been withheld", "The author is identified by initials rather than by a full legal name"],
            correctIndex: 0,
            explanation: "A false name is present, which is what distinguishes it from an anonymous work, where no name is present.",
            sourceLessonSlug: "the-byline-is-a-contract-term",
          },
          {
            prompt: "For anonymous works, pseudonymous works and works made for hire, § 302(c) sets the term at:",
            options: ["95 or 120 years", "The author's life plus seventy years, exactly as for any other published work", "Twenty-eight years from publication, renewable once on application to the Register", "Fifty years from the death of the last surviving contributor named on the copies"],
            correctIndex: 0,
            explanation: "95 from first publication or 120 from creation, whichever expires first, because there is no life to measure.",
            sourceLessonSlug: "the-byline-is-a-contract-term",
          },
          {
            prompt: "Why does the statute use a flat clock for anonymous and pseudonymous works?",
            options: ["There is no known life to measure", "Because such works are treated as owned by the publisher rather than by any author", "Because Congress wanted to discourage publishing without an author's real name", "Because the deposit copies for such works are filed under a different classification"],
            correctIndex: 0,
            explanation: "The ordinary term runs from the author's life, which requires knowing who the author is.",
            sourceLessonSlug: "the-byline-is-a-contract-term",
          },
          {
            prompt: "If the author of a pseudonymous work is revealed in the registration records before the term ends, the copyright:",
            options: ["Reverts to the life-of-the-author term", "Is cancelled and must be applied for again under the newly revealed name", "Continues on the flat clock, because the term was fixed at first publication", "Is shortened to twenty-eight years running from the date of the revelation"],
            correctIndex: 0,
            explanation: "Section 302(c) says so in terms, which means the statute contains a procedure for a name arriving late.",
            sourceLessonSlug: "the-byline-is-a-contract-term",
          },
          {
            prompt: "What does the course draw from the fact that § 302(c) provides for a later revelation of identity?",
            options: ["Attribution can be corrected", "That publishers are obliged to disclose a ghostwriter within the copyright term", "That anonymous publication is disfavoured and penalised by a shorter fixed term", "That the Copyright Office independently investigates who wrote a registered work"],
            correctIndex: 0,
            explanation: "The law's own design expects some names to surface afterwards and says what happens when they do.",
            sourceLessonSlug: "the-byline-is-a-contract-term",
          },
          {
            prompt: "In a ghostwriting arrangement, the absence of the writer's name is:",
            options: ["The deliverable", "An unfortunate side effect of a standard publishing agreement neither party wanted", "A publisher's decision the writer usually learns about only after the book prints", "A requirement imposed by the copyright statute on works made for hire"],
            correctIndex: 0,
            explanation: "The client is buying a book that reads as theirs, and the writer is paid for supplying that.",
            sourceLessonSlug: "the-byline-is-a-contract-term",
          },
          {
            prompt: "Which question does a byline actually answer?",
            options: ["Whose name the parties agreed to publish under", "Which person physically produced the sentences printed in the book", "Which person holds the copyright registration for the work as first published", "Which person the publisher's editorial staff considered the principal creator"],
            correctIndex: 0,
            explanation: "Readers hear the authorship question instead, and on many books that one has an answer nobody recorded.",
            sourceLessonSlug: "the-byline-is-a-contract-term",
          },
          {
            prompt: "The categories of anonymous and pseudonymous work exist in the copyright statute because:",
            options: ["Unnamed publishing is ordinary", "The 1976 Act was drafted specifically to regulate the ghostwriting trade", "Congress needed a way to give publishers authorship of uncredited books", "Courts had held that a book with no name on it could not be copyrighted at all"],
            correctIndex: 0,
            explanation: "Books with no name and books with a false name are a normal part of publishing, so the law has slots for them.",
            sourceLessonSlug: "the-byline-is-a-contract-term",
          },
          {
            prompt: "On a title page, what tells a reader whether the named author is also the writing hand?",
            options: ["Nothing", "The presence or absence of a copyright notice on the reverse of the page", "Whether the publisher's imprint appears above or below the author's name", "Whether the book carries a preface signed by someone other than the author"],
            correctIndex: 0,
            explanation: "The format is identical in both cases, which is exactly why it feels like a fact and is not one.",
            sourceLessonSlug: "the-byline-is-a-contract-term",
          },
          {
            prompt: "Besides a name, what else does a title page conventionally carry?",
            options: ["Publisher, place and year", "The print run, the retail price and the name of the acquiring editor", "A statement of who holds copyright and for how long the term will run", "The typesetter's imprint and the binding house that produced the edition"],
            correctIndex: 0,
            explanation: "Which is why it is the page where a publishing arrangement becomes visible to a reader.",
            sourceLessonSlug: "the-byline-is-a-contract-term",
          },
          {
            prompt: "Which statute supplies this lesson's definitions of anonymous and pseudonymous work?",
            options: ["17 U.S.C. § 101", "The Lanham Act's provisions on false designation of origin in commerce", "The Berne Convention Implementation Act's moral-rights amendments of 1990", "The Visual Artists Rights Act, which governs attribution for works of visual art"],
            correctIndex: 0,
            explanation: "Section 101 is the definitions section of the Copyright Act of 1976.",
            sourceLessonSlug: "the-byline-is-a-contract-term",
          },
          {
            prompt: "In the ghostwriting arrangement as this lesson describes it, who knows about the deal?",
            options: ["Both parties", "Only the client, since the writer signs before the client's name is chosen", "Only the publisher, who is required to keep the arrangement from both parties", "Neither, because the terms are set by the publisher after the manuscript is delivered"],
            correctIndex: 0,
            explanation: "Nothing is concealed at the table; the format is simply answering a different question than readers hear.",
            sourceLessonSlug: "the-byline-is-a-contract-term",
          },
          {
            prompt: "The gap this course investigates sits between:",
            options: ["What a byline states and what readers hear", "What a publisher pays and what a writer believes the work was worth", "What a copyright registration records and what a library catalogue records", "What an author drafts and what an editor eventually allows into the printed text"],
            correctIndex: 0,
            explanation: "A byline states an agreed name; readers take it as a report of who wrote the words.",
            sourceLessonSlug: "the-byline-is-a-contract-term",
          },
          {
            prompt: "Which of these is the flat term § 302(c) applies to, alongside anonymous and pseudonymous works?",
            options: ["Works made for hire", "Works whose author died before the manuscript was delivered to the publisher", "Works first published outside the United States by a foreign-domiciled author", "Works registered more than five years after the date of first publication"],
            correctIndex: 0,
            explanation: "All three share the problem that no single author's life supplies a clock.",
            sourceLessonSlug: "the-byline-is-a-contract-term",
          },
          {
            prompt: "Under § 302(c), which of the two flat periods governs?",
            options: ["Whichever expires first", "Whichever the copyright owner elects at the time of registration", "The 120-year period, because creation always precedes first publication", "The 95-year period, unless the work was never published at all"],
            correctIndex: 0,
            explanation: "95 years from first publication or 120 from creation, whichever expires first.",
            sourceLessonSlug: "the-byline-is-a-contract-term",
          },
          {
            prompt: "A reader who treats the title page as a report of authorship is making what kind of mistake?",
            options: ["Reading a format as a fact", "Confusing the publisher's imprint with the author's own personal statement", "Assuming a copyright notice guarantees the accuracy of everything printed", "Believing that the author rather than the publisher chose the book's title"],
            correctIndex: 0,
            explanation: "The format states an agreed name, and it looks exactly the same whether or not the agreement is unusual.",
            sourceLessonSlug: "the-byline-is-a-contract-term",
          },
          {
            prompt: "The 1976 Act's treatment of unnamed authorship shows that the problem is:",
            options: ["Old and expected", "A recent consequence of the modern celebrity memoir market", "Confined to works produced under employment rather than by independent writers", "Limited to works published outside the ordinary commercial book trade"],
            correctIndex: 0,
            explanation: "Congress drafted definitions for it, which is what a legislature does with an ordinary recurring situation.",
            sourceLessonSlug: "the-byline-is-a-contract-term",
          },
          {
            prompt: "What is the client buying in a ghostwriting arrangement, beyond the manuscript?",
            options: ["A book that reads as theirs", "An assignment of every moral right the writer would otherwise hold", "An indemnity against any later claim that the writer contributed material", "The exclusive right to prevent the writer from publishing anything similar"],
            correctIndex: 0,
            explanation: "Part of what makes it read as theirs is that no other name appears on it.",
            sourceLessonSlug: "the-byline-is-a-contract-term",
          },
          {
            prompt: "How does this lesson describe the relationship between the agreed name and the writing hand?",
            options: ["Usually the same, sometimes not", "Always the same, unless the publisher fails to check the manuscript", "Always different, because publishing houses assign house names to manuscripts", "Never knowable, because publishing agreements are confidential in every case"],
            correctIndex: 0,
            explanation: "Which is why the format feels like a fact: it is right most of the time, and never says which time it is.",
            sourceLessonSlug: "the-byline-is-a-contract-term",
          },
          {
            prompt: "Under the statute, what makes a work anonymous rather than pseudonymous?",
            options: ["No name at all appears", "The author's real name appears but the publisher's does not", "The author's name appears only on the copyright page and not the title page", "The work is unregistered, so the Copyright Office holds no record of an author"],
            correctIndex: 0,
            explanation: "A pseudonymous work has a name on it; the name is fictitious.",
            sourceLessonSlug: "the-byline-is-a-contract-term",
          },
          {
            prompt: "Why is calling ghostwriting a theft factually wrong?",
            options: ["The writer was paid for the absence", "Because a ghostwriter can always sue later to have the byline restored", "Because publishers keep records that name every ghostwriter they have engaged", "Because the copyright statute forbids publishing another person's work under a false name"],
            correctIndex: 0,
            explanation: "The missing byline is the deliverable of a sale rather than something taken while nobody was looking.",
            sourceLessonSlug: "not-a-theft-a-sale",
          },
          {
            prompt: "Which ghostwriters are unnamed?",
            options: ["All of them", "Only the ones without an agent to negotiate a collaboration credit", "Only the ones working on political and celebrity books rather than trade titles", "Only the ones paid a flat fee rather than a share of the royalties"],
            correctIndex: 0,
            explanation: "By definition, because a named collaborator is an as-told-to credit rather than a ghost.",
            sourceLessonSlug: "not-a-theft-a-sale",
          },
          {
            prompt: "In CREDIT-02, which contributor does the medium's convention leave unsigned?",
            options: ["The master printer", "The artist, whose name is added later by the publisher of the edition", "The curator who selects which impressions are included in an edition", "The paper maker, whose watermark is the only mark on the finished sheet"],
            correctIndex: 0,
            explanation: "The artist signs a print and the master printer does not, in every shop and for every printer.",
            sourceLessonSlug: "not-a-theft-a-sale",
          },
          {
            prompt: "In CREDIT-03, what does a building's public credit line name?",
            options: ["A firm", "The licensed architect who sealed the construction drawings for the building", "The employee designer whose drawings the client approved for construction", "The general contractor who held the construction contract with the owner"],
            correctIndex: 0,
            explanation: "And a firm carries the name of whoever owns it, so the employee designer is nowhere the public can see.",
            sourceLessonSlug: "not-a-theft-a-sale",
          },
          {
            prompt: "What structure do CREDIT-02, CREDIT-03 and this course share?",
            options: ["An even rule that erases a whole category", "A single documented theft that was later corrected by a named scholar", "A licensing regime that decides who may sign work in that discipline", "A trade body that publishes a taxonomy of contributor roles and rankings"],
            correctIndex: 0,
            explanation: "Applied for reasons that have nothing to do with who the contributor is, which is why the pattern is worth naming three times.",
            sourceLessonSlug: "not-a-theft-a-sale",
          },
          {
            prompt: "Why is a convention that erases everybody a better laboratory than a single wrong?",
            options: ["You can hold it still and vary the people", "Because a convention leaves more surviving paperwork than an individual dispute", "Because conventions are written down and individual grievances rarely are", "Because a convention affects enough people to make statistical testing possible"],
            correctIndex: 0,
            explanation: "The rule is constant, so any pattern in who lands on the erased side is a pattern in something else.",
            sourceLessonSlug: "not-a-theft-a-sale",
          },
          {
            prompt: "If a credit convention applies evenly, what does the course call the thing still worth explaining?",
            options: ["The routing", "The convention, which must have been designed with the outcome in mind", "The archive, which is the only place the erased contributors ever appear", "The contract, which sets the fee and therefore explains the whole pattern"],
            correctIndex: 0,
            explanation: "Who gets placed on the erased side of an even rule, which is a question about hiring and offers.",
            sourceLessonSlug: "not-a-theft-a-sale",
          },
          {
            prompt: "What does a byline pay that a fee does not?",
            options: ["Money later", "A share of the publisher's subsidiary and translation rights income", "Legal standing to prevent the book from being revised without consent", "A guaranteed entry in the national bibliography of published authors"],
            correctIndex: 0,
            explanation: "The next commission, the invitation, the second book, the catalogue record, the encyclopedia line.",
            sourceLessonSlug: "not-a-theft-a-sale",
          },
          {
            prompt: "Which course owns the archival-silence material this lesson refuses to re-teach?",
            options: ["CREDIT-00", "CREDIT-01, which works the United States patent record end to end", "CREDIT-02, which follows one medium's signing convention through a workshop", "CREDIT-03, which follows the firm convention through one architectural office"],
            correctIndex: 0,
            explanation: "Who Gets Named teaches the author line and the archive's silences as general mechanisms.",
            sourceLessonSlug: "not-a-theft-a-sale",
          },
          {
            prompt: "According to this lesson, what happens to a contributor who was never written down?",
            options: ["They become unsearchable", "Their contribution is transferred by default to the publisher of record", "Their name survives in the printer's records even when it leaves the book", "Their claim can still be registered retroactively with the Copyright Office"],
            correctIndex: 0,
            explanation: "An archive preserves what somebody filed, so an unrecorded contributor is not merely unfamous.",
            sourceLessonSlug: "not-a-theft-a-sale",
          },
          {
            prompt: "In an authenticating preface, what happens to names?",
            options: ["One is added", "One is removed, exactly as in a ghostwriting agreement", "One is replaced by the name of the person who paid for publication", "One is moved from the title page down into the acknowledgements"],
            correctIndex: 0,
            explanation: "A second name is added because the author's own name, which is present, is not believed.",
            sourceLessonSlug: "not-a-theft-a-sale",
          },
          {
            prompt: "The ghostwriting contract and the authenticating preface differ because one:",
            options: ["Subtracts and the other adds", "Is enforceable at law and the other is a purely social arrangement", "Involves payment to the writer and the other involves payment to the publisher", "Appears on the title page and the other appears only in the front matter"],
            correctIndex: 0,
            explanation: "Merging the two produces nonsense, which is why the course separates them before Sections 2 and 3.",
            sourceLessonSlug: "not-a-theft-a-sale",
          },
          {
            prompt: "Who can correct someone in public for calling ghostwriting a theft?",
            options: ["Anyone holding a publishing agreement", "Only a court, since the question turns on the interpretation of the statute", "Only the ghostwriter, who is the sole party able to describe the arrangement", "Only the publisher, because the terms are confidential to the contracting parties"],
            correctIndex: 0,
            explanation: "The agreement says on its face that the writer was paid for an unnamed manuscript.",
            sourceLessonSlug: "not-a-theft-a-sale",
          },
          {
            prompt: "This course's central question is not who was robbed but:",
            options: ["Who ends up inside the contract", "Which discipline erases the largest number of contributors from its record", "Whether a publishing convention can be changed by legislation rather than practice", "How much a ghostwriter should be paid relative to a named collaborator"],
            correctIndex: 0,
            explanation: "Along with who ends up outside it, and what a byline pays that a fee does not.",
            sourceLessonSlug: "not-a-theft-a-sale",
          },
          {
            prompt: "What distinguishes a ghost from every other kind of writing work?",
            options: ["The absence of the name", "The size of the fee relative to a first-time author's advance", "The fact that the writer never meets the person whose name is published", "The fact that the manuscript is delivered without a copyright registration"],
            correctIndex: 0,
            explanation: "And that absence is what the client is paying for, which makes the arrangement a sale.",
            sourceLessonSlug: "not-a-theft-a-sale",
          },
          {
            prompt: "The lesson says the convention is not the villain. What is the finding instead?",
            options: ["The routing", "The fee, which is set below the market value of a comparable named book", "The archive, which discards the contracts that would settle every question", "The publisher, which alone decides which name will appear on the cover"],
            correctIndex: 0,
            explanation: "Any pattern in who lands on the erased side of an even rule is a pattern in hiring and offers.",
            sourceLessonSlug: "not-a-theft-a-sale",
          },
          {
            prompt: "How many times has this series now met a convention that erases a whole category of contributor?",
            options: ["Three", "Once, in this course, which is why the framing needed to be established here", "Twice, in the patent course and in the printmaking course, and this is a third kind", "Four, counting the general mechanisms course as its own discipline case"],
            correctIndex: 0,
            explanation: "Printmaking, architecture and now ghostwriting, and the course names the recurrence rather than hiding it.",
            sourceLessonSlug: "not-a-theft-a-sale",
          },
          {
            prompt: "A named collaborator on a book is, in this course's terms:",
            options: ["Not a ghost", "A ghost whose name the publisher chose to reveal after publication", "An authenticator, because a second name has been added to the title page", "An amanuensis, because the subject spoke and the collaborator wrote"],
            correctIndex: 0,
            explanation: "The absence of the name is definitional, so a visible credit puts the book in the as-told-to category.",
            sourceLessonSlug: "not-a-theft-a-sale",
          },
          {
            prompt: "In the ghost proper, where does the writer's name appear?",
            options: ["Nowhere", "In the acknowledgements, in a line of thanks written by the credited author", "On the copyright page, as a co-claimant to the registered copyright", "In the publisher's catalogue, though not on the book itself"],
            correctIndex: 0,
            explanation: "That total absence, agreed in exchange for payment, is what defines the shape.",
            sourceLessonSlug: "four-shapes-of-a-hidden-hand",
          },
          {
            prompt: "In an as-told-to, where does the writer's name appear?",
            options: ["Below the subject's", "Nowhere on the book, though the publisher records it internally", "Above the subject's, because the writer supplied the finished manuscript", "Only in the copyright registration, never on the printed title page"],
            correctIndex: 0,
            explanation: "In a subordinate slot: as told to, with, and, or a line in the acknowledgements.",
            sourceLessonSlug: "four-shapes-of-a-hidden-hand",
          },
          {
            prompt: "Why is the as-told-to the control case for this course?",
            options: ["The credit is visible and gradable", "Because it is the only arrangement the copyright statute expressly recognises", "Because the writer in an as-told-to is always paid a royalty rather than a fee", "Because the subject in an as-told-to has usually written a previous book alone"],
            correctIndex: 0,
            explanation: "You can read the ladder off the title page and compare one book against another.",
            sourceLessonSlug: "four-shapes-of-a-hidden-hand",
          },
          {
            prompt: "What is the central question in an amanuensis arrangement?",
            options: ["Fidelity", "Whether the transcriber was paid a fair share of the book's earnings", "Whether the transcriber's name belongs above or below the speaker's", "Whether the speaker retained the copyright in the dictated material"],
            correctIndex: 0,
            explanation: "How much the transcriber changed, and in whose interest, rather than whose name is larger.",
            sourceLessonSlug: "four-shapes-of-a-hidden-hand",
          },
          {
            prompt: "What test identifies an amanuensis arrangement?",
            options: ["The author spoke the book", "The transcriber's name is printed larger than the speaker's on the title page", "The book was published without any editor named anywhere in its front matter", "The speaker later disowned the published version as unfaithful to the dictation"],
            correctIndex: 0,
            explanation: "Because they could not write, or could not write in the language of publication.",
            sourceLessonSlug: "four-shapes-of-a-hidden-hand",
          },
          {
            prompt: "What test identifies an authenticator?",
            options: ["A second name is added", "The author's name has been removed from the title page by agreement", "The book carries no preface, so the text stands entirely on its own", "The publisher rather than the author holds the registered copyright"],
            correctIndex: 0,
            explanation: "Added to make the first name believed, which is close to the inverse of ghostwriting.",
            sourceLessonSlug: "four-shapes-of-a-hidden-hand",
          },
          {
            prompt: "Which two of the four shapes are credit arrangements?",
            options: ["The ghost and the as-told-to", "The amanuensis and the authenticator, since both put a second name in the book", "The ghost and the amanuensis, since in both the writing hand is not the author", "The as-told-to and the authenticator, since both print two names on one page"],
            correctIndex: 0,
            explanation: "In both, the question is whose name appears and how large; the other two are not credit questions.",
            sourceLessonSlug: "four-shapes-of-a-hidden-hand",
          },
          {
            prompt: "The authenticator raises a question about:",
            options: ["Credibility", "Fidelity to what the speaker actually said during the dictation sessions", "The rank of a collaborator's name relative to the subject's on the page", "The division of royalties between the author and the party who vouched for them"],
            correctIndex: 0,
            explanation: "It arises only when a named author's word is treated as insufficient on its own.",
            sourceLessonSlug: "four-shapes-of-a-hidden-hand",
          },
          {
            prompt: "In the course's table, what is at stake for a ghostwriter?",
            options: ["What the byline would have paid", "Whether the transcription is faithful to what was originally dictated", "Whether readers will believe the named author wrote the book at all", "The rank of the collaborator credit on the printed title page"],
            correctIndex: 0,
            explanation: "The fee is settled; what is lost is the money a byline pays later.",
            sourceLessonSlug: "four-shapes-of-a-hidden-hand",
          },
          {
            prompt: "Which 1861 book does this lesson use to show several shapes stacked on one title page?",
            options: ["Incidents in the Life of a Slave Girl", "Narrative of the Life of Frederick Douglass, an American Slave, written by himself", "Poems on Various Subjects, Religious and Moral, published in London by Archibald Bell", "Twelve Years a Slave, the narrative of a free citizen of New York kidnapped in 1841"],
            correctIndex: 0,
            explanation: "It carries a pseudonym, an editor's name and an authenticating introduction at once.",
            sourceLessonSlug: "four-shapes-of-a-hidden-hand",
          },
          {
            prompt: "What three things are stacked on the title page of that 1861 book?",
            options: ["A pseudonym, an editor and an authenticator", "Two authors, a translator and a licensing statement from the copyright holder", "A dedication, a subscription list and a certificate signed by the publisher", "An author, a printer's imprint and a bookseller's stamp of provenance"],
            correctIndex: 0,
            explanation: "And a misattribution followed, which is why the book takes a whole section of this course.",
            sourceLessonSlug: "four-shapes-of-a-hidden-hand",
          },
          {
            prompt: "How has an editor's name on an old title page repeatedly been misread later?",
            options: ["As the actual writer", "As the publisher who commissioned and financed the edition", "As a pseudonym adopted by the author for reasons of personal safety", "As the transcriber to whom the named author dictated the manuscript"],
            correctIndex: 0,
            explanation: "The mistake is understandable and it is still a mistake, and Section 5 shows one being undone.",
            sourceLessonSlug: "four-shapes-of-a-hidden-hand",
          },
          {
            prompt: "The credit ladder runs from equal billing down to:",
            options: ["Nothing", "A share of the royalty stated on the copyright page of the edition", "A registration entry naming the collaborator as a joint author", "A footnote in the publisher's seasonal catalogue for that year"],
            correctIndex: 0,
            explanation: "Through smaller type, the word with, the word and, and the acknowledgements.",
            sourceLessonSlug: "four-shapes-of-a-hidden-hand",
          },
          {
            prompt: "Which words on a title page signal an as-told-to credit?",
            options: ["As told to, with, and", "Edited by, revised by, prepared for the press by", "Attested by, certified by, vouched for by, introduced by", "Translated by, transcribed by, taken down by, set in order by"],
            correctIndex: 0,
            explanation: "They put the writer in a subordinate but visible slot under the subject's name.",
            sourceLessonSlug: "four-shapes-of-a-hidden-hand",
          },
          {
            prompt: "Why does the amanuensis question turn on interest as well as accuracy?",
            options: ["Transcribers often had an agenda", "Because a transcriber holds the copyright in whatever they physically write down", "Because dictation cannot be checked once the speaker has died", "Because the speaker rarely knew the language the book was published in"],
            correctIndex: 0,
            explanation: "At least one of them in this course wrote a preface announcing his, which Section 4 reads.",
            sourceLessonSlug: "four-shapes-of-a-hidden-hand",
          },
          {
            prompt: "Which section of this course covers the amanuensis?",
            options: ["Section 4", "Section 2, which reads an eighteenth-century attestation in its own front matter", "Section 6, which handles the modern as-told-to and the collaborator credit ladder", "Section 5, which follows one misattribution and the scholar who reversed it"],
            correctIndex: 0,
            explanation: "Northup, Omar ibn Said and Abby Fisher carry it, and each raises fidelity rather than credit.",
            sourceLessonSlug: "four-shapes-of-a-hidden-hand",
          },
          {
            prompt: "How does the authenticator's social standing usually compare with the author's?",
            options: ["Higher", "Lower, which is what makes the certificate a favour rather than a gate", "Equal, since the point of the certificate is a peer vouching for a peer", "Irrelevant, because the certificate carries legal weight regardless of the signer"],
            correctIndex: 0,
            explanation: "That is what makes the signature worth adding, and what the arrangement reveals about who is believed.",
            sourceLessonSlug: "four-shapes-of-a-hidden-hand",
          },
          {
            prompt: "In the authenticator arrangement, is the author's own name on the book?",
            options: ["Yes, and it is not enough", "No, it has been replaced by the guarantor's name on the title page", "No, the author appears only under a pseudonym chosen by the publisher", "Yes, but only in the copyright notice rather than on the title page itself"],
            correctIndex: 0,
            explanation: "Which is why it is close to the inverse of a ghost rather than a version of one.",
            sourceLessonSlug: "four-shapes-of-a-hidden-hand",
          },
          {
            prompt: "What can you read straight off a title page in an as-told-to?",
            options: ["The rank of the credit", "The fee the collaborator was paid for the completed manuscript", "Whether the collaborator or the subject drafted each chapter of the book", "Whether the collaborator signed a confidentiality clause with the publisher"],
            correctIndex: 0,
            explanation: "Type size and the connecting word place the collaborator on a visible ladder.",
            sourceLessonSlug: "four-shapes-of-a-hidden-hand",
          },
          {
            prompt: "Which shape does Section 6 of this course take up?",
            options: ["The modern trade version of the ghost", "The eighteenth-century attestation bound into a book's own front matter", "The amanuensis, where the named author spoke rather than wrote the book", "The correction, where a named scholar reverses a long-standing misattribution"],
            correctIndex: 0,
            explanation: "Along with the as-told-to and the collaborator credit ladder in present-tense publishing.",
            sourceLessonSlug: "four-shapes-of-a-hidden-hand",
          },
          {
            prompt: "Learning to tell the four shapes apart matters most because:",
            options: ["They behave completely differently", "They are all governed by different sections of the copyright statute", "Three of the four are illegal and only the as-told-to is permitted", "Only one of them leaves any documentary trace in a publisher's archive"],
            correctIndex: 0,
            explanation: "Different names present, different stakes, different remedies, and merging them produces nonsense.",
            sourceLessonSlug: "four-shapes-of-a-hidden-hand",
          },
          {
            prompt: "In the course's table, what is at stake in an amanuensis arrangement?",
            options: ["Fidelity to what was said", "The rank of the transcriber's name on the printed title page", "Whether readers will believe the named author existed at all", "What the byline would have paid the transcriber over a career"],
            correctIndex: 0,
            explanation: "The transcriber is named as transcriber or editor, so the question is not whether they appear.",
            sourceLessonSlug: "four-shapes-of-a-hidden-hand",
          },
          {
            prompt: "Which shape appears when the client bought the removal of a name?",
            options: ["The ghost proper", "The authenticator, whose certificate is bought from a person of standing", "The amanuensis, who is paid to take down words and add nothing to them", "The as-told-to, where the writer accepts a smaller credit for a larger fee"],
            correctIndex: 0,
            explanation: "Removal for payment is the definition; adding a name to be believed is a different mechanism.",
            sourceLessonSlug: "four-shapes-of-a-hidden-hand",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2 — The certificate bound into the book
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-book-that-needed-a-certificate",
      title: "5 · The book that needed a certificate",
      section: "Section 2 · The certificate bound into the book",
      body: `In 1773 a London bookseller named Archibald Bell, of Aldgate, printed a small volume called *Poems on Various Subjects, Religious and Moral*. The name on the title page is **Phillis Wheatley**. She was about twenty, she had been enslaved in Boston since she was a child, and she was still enslaved when the book went to press.

**The book did not come out in Boston, and that is the first fact worth holding.** A volume of her poems was proposed in Boston in 1772 and the venture failed. The Massachusetts Historical Society, which holds Wheatley material, puts it flatly: her "debut volume of poetry was first proposed in 1772, but this early venture was unsuccessful" (Massachusetts Historical Society, n.d.). The subscriptions did not come in. A poet with a local reputation, in the town where she lived, could not raise a book.

**So the manuscript crossed the Atlantic.** It was published in London in 1773, dedicated to Selina Hastings, Countess of Huntingdon, whose patronage carried real weight in the evangelical world Bell's list served. Wheatley herself sailed for England in May 1773. The book appeared in September, and she had already returned to Boston (Massachusetts Historical Society, n.d.).

**Now the thing that makes this book the best single artifact in this catalog.** Bound into the front matter, before the poems, is a page of prose signed by eighteen men. It is not a preface, not an introduction, and not a blurb. It is a **certificate**, and what it certifies is that the woman named on the title page wrote the poems inside.

The publisher explains why it is there, in his own words, on the same page:

> "AS it has been repeatedly suggested to the Publisher, by Persons, who have seen the Manuscript, that Numbers would be ready to suspect they were not really the Writings of PHILLIS, he has procured the following Attestation, from the most respectable Characters in Boston, that none might have the least Ground for disputing their Original."

Read what that sentence concedes. The publisher expects readers to disbelieve the title page. Not to dislike the poems. To disbelieve that a Black woman wrote them. So he goes and gets signatures.

**This is the authenticator mechanism from Lesson 3, in its purest and earliest form in this course.** Her name IS on the book. Her name is not enough. A second layer of names is added, and the added names belong to people whose word was assumed to be worth more than hers.

**Compare it to the ghost and the difference becomes obvious.** A ghostwriter's name is taken off a book because a client paid for its removal, and the ghost banks the fee. Wheatley's name is on her book and is propped up from underneath by eighteen other names, and nobody paid her for the propping. One transaction removes a name that was sold. The other adds names because a name is doubted. Same book trade, opposite directions, and if you merge them you cannot explain either.

**One housekeeping note this catalog owes itself.** Elsewhere in the library, the course \`shirley-graham\` records that Shirley Graham published *The Story of Phillis Wheatley* in 1949, and that the Indianapolis YWCA branch where Graham worked spelled the name **Phyllis**, which is not how the poet spelled it. This course keeps the poet's own spelling: **Phillis Wheatley**.

:::reveal What happened to the Boston proposal for Wheatley's book, and where was it published instead? ||| The 1772 Boston venture was unsuccessful, so the book was published in London in 1773 by Archibald Bell and dedicated to the Countess of Huntingdon.

:::reveal In the publisher's own words, why is the attestation in the book at all? ||| Because persons who had seen the manuscript repeatedly suggested that numbers would be ready to suspect the poems were not really the writings of Phillis.

## Vocabulary
- **Front matter**: the pages before a book's main text, including title page, dedication, preface and any certificate, which is where a publishing arrangement is documented.
- **Attestation**: here, the signed page in Wheatley's 1773 volume in which eighteen Boston men certify that she wrote the poems.
- **Subscription**: the eighteenth-century practice of financing a book by collecting advance commitments from buyers before printing.
- **Patronage**: the backing of a socially powerful person, such as the Countess of Huntingdon, which could carry a book into a market its author could not reach.

## Sources
Massachusetts Historical Society. (n.d.). *Phillis Wheatley*. The End of Slavery in Massachusetts. https://www.masshist.org/features/endofslavery/wheatley

Wheatley, P. (1773). *Poems on various subjects, religious and moral*. A. Bell. https://docsouth.unc.edu/neh/wheatley/wheatley.html`,
    },
    {
      slug: "to-the-publick",
      title: "6 · To the Publick, and the eighteen names",
      section: "Section 2 · The certificate bound into the book",
      body: `Here is the whole certificate. It is short, and every clause in it is doing work.

> "WE whose Names are under-written, do assure the World, that the POEMS specified in the following Page, were (as we verily believe) written by Phillis, a young Negro Girl, who was but a few Years since, brought an uncultivated Barbarian from Africa, and has ever since been, and now is, under the Disadvantage of serving as a Slave in a Family in this Town. She has been examined by some of the best Judges, and is thought qualified to write them."

**Take it clause by clause, because the hedges are the tell.**

- **"do assure the World"** is the format of a guarantee, not of a review. They are not saying the poems are good. They are saying the poems are hers.
- **"(as we verily believe)"** is a hedge, and it is inside a document whose entire purpose is to remove doubt. A certificate that certifies belief rather than knowledge is a weaker instrument than it looks.
- **"a young Negro Girl"** and **"an uncultivated Barbarian from Africa"** state the grounds of the doubt in the act of dispelling it. The certificate is necessary because of exactly what it says about her.
- **"under the Disadvantage of serving as a Slave"** is the only word the document spends on her legal condition, and it is "disadvantage".
- **"She has been examined by some of the best Judges, and is thought qualified to write them."** Note the passive voice, twice. Examined by whom is not stated. Thought qualified by whom is not stated. The next lesson is about that sentence.

**Now the names.** Eighteen of them, and their ranks matter more than their identities:

| Group | Count | Who |
| --- | --- | --- |
| Provincial executive | 2 | Thomas Hutchinson, Governor; Andrew Oliver, Lieutenant Governor |
| Styled "The Hon." | 5 | Including James Bowdoin and Harrison Gray |
| Styled "Esq." | 3 | Including John Hancock |
| Clergy | 7 | Including Mather Byles and Samuel Cooper |
| The household | 1 | "Mr. John Wheatley, her Master" |

**That last line is the one to sit with.** The final signature on the document certifying that Phillis Wheatley wrote her own poems belongs to the man who legally owned her, and the book prints his relation to her as his credential: *her Master*. The person best placed to know is identified by the fact that he held her as property.

**And look at what the top of the list is.** The sitting governor of the province of Massachusetts Bay and his lieutenant governor signed a note about a book of poems. That is not literary criticism. It is the deployment of civil authority as evidence, and it tells you what kind of doubt was being answered: not a question about poetry, a question about capacity.

**So the credit document and the book are the same object.** In every other case this course examines, you have to go somewhere else to find the paperwork: to a contract, a letter file, an archive, a scholar's footnote. Here the paperwork is bound in. You can hold the doubt and the answer to it in one hand, in the order the reader was meant to meet them: publisher's note, certificate, eighteen names, then the poems.

**One more thing the certificate quietly proves.** Somebody thought this was a marketing asset. Bell put it at the front, in the position a publisher reserves for whatever will most help a book sell. The signatures were not a private reassurance to a nervous printer. They were part of the product.

:::reveal What hedge sits inside the attestation, and why is it striking? ||| The phrase "(as we verily believe)", which certifies belief rather than knowledge, inside a document whose entire purpose was to remove doubt.

:::reveal How is the eighteenth signer identified in the book, and why does that matter? ||| As "Mr. John Wheatley, her Master": the man who legally owned her is credentialed by that ownership, and it is the closing signature on the certificate of her authorship.

## Vocabulary
- **Certificate of authorship**: a signed third-party statement that a named person wrote a named work, functioning as evidence rather than as criticism.
- **Hedge**: a qualifying phrase such as "as we verily believe" that reduces a statement from knowledge to belief.
- **Provincial executive**: in colonial Massachusetts Bay, the governor and lieutenant governor, whose signatures on this page put civil authority behind a literary claim.
- **Marketing asset**: material a publisher places in the front matter because it is expected to help the book sell, which is where Bell placed the attestation.

## Sources
Wheatley, P. (1773). *Poems on various subjects, religious and moral*. A. Bell. https://docsouth.unc.edu/neh/wheatley/wheatley.html

Wheatley, P. (1773). *Poems on various subjects, religious and moral* [Transcription]. Project Gutenberg. https://www.gutenberg.org/files/409/409-h/409-h.htm`,
    },
    {
      slug: "what-the-examination-was-and-was-not",
      title: "7 · What the examination was, and was not",
      section: "Section 2 · The certificate bound into the book",
      body: `There is a scene people picture when they hear about the Wheatley attestation. A room in Boston. A girl standing before eighteen powerful men. Questions fired at her. A verdict delivered.

**This course does not print that scene, because the record does not carry it.**

Revolutionary Spaces, the organisation that operates the Old State House and the Old South Meeting House in Boston, addresses the point directly in its own exhibit material. "The attestation has fueled speculation in some quarters that Wheatley was subjected to an in-person, all-male inquisition. However, more recent scholarship theorizes that her poems indeed may have undergone a reading examination by 'the best Judges who think them worth of the Publick View' in February 1772 as part of a publication proposal to secure subscribers, but it is unlikely Phillis Wheatley herself was interrogated" (Revolutionary Spaces, n.d.).

**Read the shape of that carefully, because it is a model of what this course does with a good story.**

- What the document says: "She has been examined by some of the best Judges." Passive, undated, unattributed.
- What is likely: the **poems** were read, in connection with the 1772 subscription proposal.
- What is speculation: an in-person interrogation of Wheatley herself.
- What is unlikely, on the current scholarship: that interrogation.

**Notice that the story loses nothing it needed.** The argument of this section never rested on a dramatic scene. It rests on a printed certificate, eighteen signatures, and a publisher's admission that readers would otherwise disbelieve the title page. That is enough, and it has the advantage of being documented.

**A course that added the interrogation would be trading a checkable fact for an uncheckable image**, and it would be doing it in exactly the place where its own credibility is the subject. If you are going to teach people to read a title page sceptically, you cannot dramatise your own evidence.

**Now the other half of this lesson: what the book bought her.**

On 18 October 1773, back in Boston, Wheatley wrote to David Wooster. The letter is at the Massachusetts Historical Society, and two sentences in it settle the question of what a byline is worth.

> "Since my return to America my Master, has at the desire of my friends in England given me my freedom."

> "I am now upon my own footing and whatever I get by this is entirely mine, & it is the Chief I have to depend upon."

**That is the byline-pays argument in the author's own words, in 1773.** Her manumission followed the London trip and, on her own account, came at the urging of her English friends. The book did not merely carry her name. The book moved her legal status, and then it became the chief thing she had to depend on financially, because whatever she got by it was **entirely hers**.

Hold that against a ghostwriting fee. A fee is a number, once. Wheatley's byline produced a transatlantic reputation, a patron, a set of English advocates who applied pressure, a manumission, and an income stream she describes as her own property. None of that is available to a name that does not appear.

**And hold it against the certificate too.** The eighteen signatures were the price of admission. She got the byline, and the byline paid; she also had to be vouched for by the governor of the province and by the man who owned her in order to receive it. Both things are true, and a course that reports only one of them is telling half a story.

:::reveal What does the current scholarship, as Revolutionary Spaces reports it, say about an in-person examination of Wheatley? ||| That it is speculation and unlikely; what probably happened is that her poems underwent a reading examination in connection with the 1772 subscription proposal.

:::reveal In her letter of 18 October 1773, how does Wheatley describe what the book means to her financially? ||| She says she is now upon her own footing, that whatever she gets by it is entirely hers, and that it is the chief thing she has to depend upon.

## Vocabulary
- **Speculation**: a plausible reconstruction that no document supports, which this course reports as speculation rather than printing as narrative.
- **Manumission**: the act by which an enslaver frees an enslaved person, which in Wheatley's case followed her London trip and, on her account, English pressure.
- **Reading examination**: an assessment of a manuscript rather than of its author, which is what the scholarship suggests the attestation's "examined" refers to.
- **Documented versus dramatised**: the distinction between what a record states and the scene a reader supplies around it.

## Sources
Massachusetts Historical Society. (n.d.). *Letter from Phillis Wheatley to David Wooster, 18 October 1773*. https://www.masshist.org/database/viewer.php?item_id=771&pid=3

Revolutionary Spaces. (n.d.). *How Phillis Wheatley might have obtained the approval of eighteen prominent white men of Boston to publish her book of poetry*. https://revolutionaryspaces.org/explore/exhibits/imagining-the-age-of-phillis/how-phillis-wheatley-might-have-obtained-the-approval-of-eighteen-prominent-white-men-of-boston-to-publish-her-book-of-poetry/`,
    },
    {
      slug: "quiz-the-certificate",
      title: "8 · Knowledge check: the certificate",
      section: "Section 2 · The certificate bound into the book",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "Where was Phillis Wheatley's Poems on Various Subjects first published?",
            options: ["London", "Boston, by subscription raised among her local admirers in 1772", "Philadelphia, where the evangelical printing trade was strongest", "Newport, Rhode Island, through the shipping connections of her enslaver"],
            correctIndex: 0,
            explanation: "The 1772 Boston venture was unsuccessful, so the manuscript crossed the Atlantic.",
            sourceLessonSlug: "the-book-that-needed-a-certificate",
          },
          {
            prompt: "Who printed the 1773 volume?",
            options: ["Archibald Bell", "The Countess of Huntingdon's own private press at her chapel", "The publisher of the Boston Censor, which had carried the subscription notices", "John Wheatley, who financed the printing on his enslaved poet's behalf"],
            correctIndex: 0,
            explanation: "A bookseller of Aldgate, London, whose list served the evangelical market the dedication reached.",
            sourceLessonSlug: "the-book-that-needed-a-certificate",
          },
          {
            prompt: "To whom is the 1773 volume dedicated?",
            options: ["The Countess of Huntingdon", "Thomas Hutchinson, the sitting governor of the province of Massachusetts Bay", "Susanna Wheatley, who had taught the poet to read and write in Boston", "The eighteen signers of the attestation printed in the book's front matter"],
            correctIndex: 0,
            explanation: "Selina Hastings, whose patronage carried real weight in the evangelical world Bell's list served.",
            sourceLessonSlug: "the-book-that-needed-a-certificate",
          },
          {
            prompt: "What does the Massachusetts Historical Society say about the 1772 proposal?",
            options: ["It was unsuccessful", "It produced enough subscribers but was blocked by the colonial censor", "It was withdrawn when a London publisher offered better terms in the autumn", "It succeeded, and the London edition was simply a second printing of it"],
            correctIndex: 0,
            explanation: "A poet with a local reputation could not raise a book in the town where she lived.",
            sourceLessonSlug: "the-book-that-needed-a-certificate",
          },
          {
            prompt: "What was Wheatley's legal status when the book went to press?",
            options: ["Still enslaved", "Free, having been manumitted before the manuscript left Boston in 1772", "Indentured to Archibald Bell for the duration of the printing", "Free in England but still enslaved under the law of Massachusetts Bay"],
            correctIndex: 0,
            explanation: "Her manumission came after her return from London, which is Lesson 7's evidence.",
            sourceLessonSlug: "the-book-that-needed-a-certificate",
          },
          {
            prompt: "What kind of document is bound into the front matter of the 1773 Poems?",
            options: ["A certificate", "A dedication written by the poet to her English patron", "A critical preface assessing the literary merit of the poems", "A subscription list naming everyone who had paid in advance"],
            correctIndex: 0,
            explanation: "It certifies that the woman named on the title page wrote the poems inside.",
            sourceLessonSlug: "the-book-that-needed-a-certificate",
          },
          {
            prompt: "In the publisher's own note, what did persons who had seen the manuscript repeatedly suggest?",
            options: ["That numbers would suspect the poems were not really hers", "That the poems required substantial revision before they could be sold in London", "That the book would sell better with an English rather than an American author", "That the dedication should be moved ahead of the certificate in the front matter"],
            correctIndex: 0,
            explanation: "So Bell procured the attestation so that none might have the least ground for disputing their original.",
            sourceLessonSlug: "the-book-that-needed-a-certificate",
          },
          {
            prompt: "Which of the four shapes from Lesson 3 does the Wheatley attestation illustrate?",
            options: ["The authenticator", "The ghost proper, since eighteen men effectively stand in for the author", "The amanuensis, since the poems were taken down by someone in the household", "The as-told-to, since the signers appear in a subordinate slot on the page"],
            correctIndex: 0,
            explanation: "Her name is on the book and is not enough, so a second layer of names is added.",
            sourceLessonSlug: "the-book-that-needed-a-certificate",
          },
          {
            prompt: "How does the Wheatley case run opposite to a ghostwriting arrangement?",
            options: ["Names are added rather than removed", "The author is paid a fee rather than receiving a share of the royalties", "The publisher rather than the author selected the name on the title page", "The certificate transfers the copyright from the author to the signers"],
            correctIndex: 0,
            explanation: "One transaction removes a name that was sold; the other props up a name that is doubted.",
            sourceLessonSlug: "the-book-that-needed-a-certificate",
          },
          {
            prompt: "Which spelling of the poet's name does this catalog use?",
            options: ["Phillis", "Phyllis, following the Indianapolis YWCA branch's own letterhead", "Both, since eighteenth-century printers used the two interchangeably", "Philis, as it appears in the surviving manuscript of her earliest poems"],
            correctIndex: 0,
            explanation: "Her own spelling, and the one Shirley Graham used in her 1949 book about her.",
            sourceLessonSlug: "the-book-that-needed-a-certificate",
          },
          {
            prompt: "In which month did Wheatley sail for England, and in which did the book appear?",
            options: ["May and September 1773", "March 1772 and December 1772, before the subscription attempt collapsed", "June 1773 and June 1774, after a year of delays at the Aldgate press", "January 1773 and March 1773, both before the Boston proposal was withdrawn"],
            correctIndex: 0,
            explanation: "She had already returned to Boston by the time the volume was published.",
            sourceLessonSlug: "the-book-that-needed-a-certificate",
          },
          {
            prompt: "What makes this book unusual among the cases in this course?",
            options: ["The credit document is bound into it", "It is the only case in which the writer was paid a fee rather than a royalty", "It is the only book in the course whose author's name was later removed", "It is the only case where a publisher rather than an author sought the credit"],
            correctIndex: 0,
            explanation: "Everywhere else the paperwork sits in a contract, a letter file or a scholar's footnote.",
            sourceLessonSlug: "the-book-that-needed-a-certificate",
          },
          {
            prompt: "The publisher's note concedes that readers were expected to disbelieve:",
            options: ["The title page", "The dedication to a countess by an enslaved American poet", "The claim that the poems had been examined by competent judges", "The publisher's own account of how the manuscript reached London"],
            correctIndex: 0,
            explanation: "Not to dislike the poems, but to doubt that a Black woman wrote them.",
            sourceLessonSlug: "the-book-that-needed-a-certificate",
          },
          {
            prompt: "How does the attestation open?",
            options: ["WE whose Names are under-written", "TO the candid and impartial Readers of these Poems", "BE it known to all persons whom these presents may concern", "THE undersigned, having examined the bearer, do hereby declare"],
            correctIndex: 0,
            explanation: "The format of a guarantee, and the signature block is the substance of the document.",
            sourceLessonSlug: "to-the-publick",
          },
          {
            prompt: "What does the attestation assure the world about the poems?",
            options: ["That Phillis wrote them", "That they are original compositions of considerable literary merit", "That they were composed without assistance from anyone in the Wheatley household", "That they had been reviewed and approved by the clergy of the province"],
            correctIndex: 0,
            explanation: "It is a guarantee of authorship rather than a review, and it says nothing about quality.",
            sourceLessonSlug: "to-the-publick",
          },
          {
            prompt: "Which hedge appears inside the attestation?",
            options: ["As we verily believe", "So far as the evidence before us can be made to reach", "To the best of our knowledge and after due and careful enquiry", "Subject to such correction as further information may hereafter supply"],
            correctIndex: 0,
            explanation: "A certificate that certifies belief rather than knowledge is a weaker instrument than it looks.",
            sourceLessonSlug: "to-the-publick",
          },
          {
            prompt: "How many men signed the attestation?",
            options: ["Eighteen", "Twelve, of whom seven were clergymen of the town of Boston", "Twenty-four, including the members of the governor's council then sitting", "Nine, all of them related to the Wheatley family by blood or by marriage"],
            correctIndex: 0,
            explanation: "Two provincial executives, five styled Hon., three Esq., seven clergy, and John Wheatley.",
            sourceLessonSlug: "to-the-publick",
          },
          {
            prompt: "Who are the two highest-ranking signatories?",
            options: ["The governor and lieutenant governor", "The president of Harvard College and the senior pastor of the Old South", "The speaker of the provincial assembly and the chief justice of the province", "The treasurer of the province and the collector of customs for the port"],
            correctIndex: 0,
            explanation: "Thomas Hutchinson and Andrew Oliver, which is civil authority deployed as evidence about a book of poems.",
            sourceLessonSlug: "to-the-publick",
          },
          {
            prompt: "How is the eighteenth signer identified in the printed book?",
            options: ["Mr. John Wheatley, her Master", "Mr. John Wheatley, of Boston, merchant and owner of the London Packet", "Mr. John Wheatley, in whose family the said Phillis has been instructed", "Mr. John Wheatley, guardian and next friend of the said young person"],
            correctIndex: 0,
            explanation: "The person best placed to know is credentialed by the fact that he held her as property.",
            sourceLessonSlug: "to-the-publick",
          },
          {
            prompt: "What voice does the attestation use for the examination clause?",
            options: ["Passive", "Conditional, since the signers were reporting only what they had been told", "First person plural, naming each judge who took part in the assessment", "Imperative, instructing the reader to accept the finding without further enquiry"],
            correctIndex: 0,
            explanation: "Examined by whom is not stated, and thought qualified by whom is not stated.",
            sourceLessonSlug: "to-the-publick",
          },
          {
            prompt: "Which phrase does the attestation use for Wheatley's arrival from Africa?",
            options: ["An uncultivated Barbarian", "A child of tender years lately imported into this province", "A native of Gambia, brought hither in the vessel of a Boston merchant", "One wholly untaught in the letters or the manners of a Christian country"],
            correctIndex: 0,
            explanation: "The certificate states the grounds of the doubt in the act of dispelling it.",
            sourceLessonSlug: "to-the-publick",
          },
          {
            prompt: "What single word does the attestation spend on Wheatley's legal condition?",
            options: ["Disadvantage", "Bondage, which the signers describe as a misfortune of her circumstances", "Servitude, a term the signers use twice in the course of the certificate", "Captivity, from which the poems are said to be a remarkable deliverance"],
            correctIndex: 0,
            explanation: "She is described as under the disadvantage of serving as a slave in a family in this town.",
            sourceLessonSlug: "to-the-publick",
          },
          {
            prompt: "Where in the book did Bell place the attestation?",
            options: ["At the front", "At the back, after the poems and before the list of subscribers", "Inside the dedication, so it would be read as part of the patron's endorsement", "On the title page itself, alongside the imprint and the year of publication"],
            correctIndex: 0,
            explanation: "In the position a publisher reserves for whatever will most help a book sell, which makes it part of the product.",
            sourceLessonSlug: "to-the-publick",
          },
          {
            prompt: "How many of the eighteen signers were clergymen?",
            options: ["Seven", "Three, all of them pastors of congregations in the town of Boston", "Eleven, which made the clergy an absolute majority of the signature block", "None, since the certificate was deliberately confined to civil authorities"],
            correctIndex: 0,
            explanation: "Including Mather Byles and Samuel Cooper, alongside two provincial executives and eight laymen.",
            sourceLessonSlug: "to-the-publick",
          },
          {
            prompt: "What does the attestation claim about the poems' quality?",
            options: ["Nothing", "That they equal the productions of any English poet of the same age", "That they show a genius the signers had not expected from such a source", "That they are fit for publication on grounds of both piety and elegance"],
            correctIndex: 0,
            explanation: "It is a guarantee of authorship rather than a review, which is why it functions as evidence.",
            sourceLessonSlug: "to-the-publick",
          },
          {
            prompt: "In this course's terms, what kind of doubt were the eighteen signatures answering?",
            options: ["A doubt about capacity", "A doubt about whether the poems had been printed accurately from the manuscript", "A doubt about whether the Countess of Huntingdon had really granted her patronage", "A doubt about whether the London edition was authorised by the Boston proposers"],
            correctIndex: 0,
            explanation: "Not a question about poetry, which is why civil authority rather than literary authority was deployed.",
            sourceLessonSlug: "to-the-publick",
          },
          {
            prompt: "Which scene does this course refuse to print?",
            options: ["An in-person interrogation of Wheatley", "The signing of the attestation at the Old State House in Boston", "Wheatley's presentation to the Countess of Huntingdon in London", "The failure of the subscription campaign at a public meeting in Boston"],
            correctIndex: 0,
            explanation: "Revolutionary Spaces calls it speculation and reports the current scholarship as finding it unlikely.",
            sourceLessonSlug: "what-the-examination-was-and-was-not",
          },
          {
            prompt: "What does recent scholarship, as Revolutionary Spaces reports it, think was examined?",
            options: ["The poems", "Wheatley herself, in a session recorded in the Boston town records", "The manuscript's handwriting, compared against samples of her known hand", "The subscription proposal, which the judges rejected as commercially unsound"],
            correctIndex: 0,
            explanation: "A reading examination in February 1772, in connection with the subscription proposal.",
            sourceLessonSlug: "what-the-examination-was-and-was-not",
          },
          {
            prompt: "Which organisation's exhibit material this lesson quotes on the examination question:",
            options: ["Revolutionary Spaces", "The Massachusetts Historical Society, which holds Wheatley's manuscript letters", "Documenting the American South, which hosts the digitised text of the Poems", "The Library of Congress, whose catalogue supplies the standard entry for the book"],
            correctIndex: 0,
            explanation: "The organisation that operates the Old State House and the Old South Meeting House in Boston.",
            sourceLessonSlug: "what-the-examination-was-and-was-not",
          },
          {
            prompt: "Why does the section's argument survive the refusal of the interrogation scene?",
            options: ["It never rested on the scene", "Because the scene is replaced by an equally dramatic account from a different source", "Because the certificate itself describes the interrogation in sufficient detail", "Because the signers' private correspondence supplies what the printed record omits"],
            correctIndex: 0,
            explanation: "It rests on a printed certificate, eighteen signatures and a publisher's admission, all of them documented.",
            sourceLessonSlug: "what-the-examination-was-and-was-not",
          },
          {
            prompt: "What would a course be trading if it added the interrogation scene?",
            options: ["A checkable fact for an uncheckable image", "A primary source for a secondary source of comparable reliability", "A contested claim for a settled one supported by better documentation", "A dry recitation for a narrative that makes the same point more memorably"],
            correctIndex: 0,
            explanation: "And doing it in exactly the place where the course's own credibility is the subject.",
            sourceLessonSlug: "what-the-examination-was-and-was-not",
          },
          {
            prompt: "To whom did Wheatley write on 18 October 1773?",
            options: ["David Wooster", "Selina Hastings, Countess of Huntingdon, thanking her for the dedication", "Archibald Bell, complaining that no copies had yet reached Boston", "Thomas Hutchinson, requesting a second attestation for the American edition"],
            correctIndex: 0,
            explanation: "The letter is held by the Massachusetts Historical Society and describes both her freedom and her finances.",
            sourceLessonSlug: "what-the-examination-was-and-was-not",
          },
          {
            prompt: "In that letter, how does Wheatley account for her manumission?",
            options: ["At the desire of her friends in England", "As a provision in the will of the man who had held her as property", "As a condition Archibald Bell attached to publishing the volume in London", "As a decision of the Massachusetts courts following her return from England"],
            correctIndex: 0,
            explanation: "She writes that since her return to America her master has given her her freedom at their desire.",
            sourceLessonSlug: "what-the-examination-was-and-was-not",
          },
          {
            prompt: "What does Wheatley say about the money the book brings in?",
            options: ["It is entirely hers", "That it is divided between herself and the London publisher by agreement", "That it must first repay the cost of her passage to England and back", "That it belongs to the Wheatley household until the instrument is executed"],
            correctIndex: 0,
            explanation: "She is now upon her own footing, and it is the chief thing she has to depend upon.",
            sourceLessonSlug: "what-the-examination-was-and-was-not",
          },
          {
            prompt: "What does the Wooster letter demonstrate about a byline?",
            options: ["It pays after the fee is spent", "That a byline is worth less than a fee when the author has no legal standing", "That authorship confers copyright automatically even on an enslaved author", "That a publisher must account to the author for every copy sold abroad"],
            correctIndex: 0,
            explanation: "The book produced a reputation, a patron, advocates, a manumission and an income she calls her own.",
            sourceLessonSlug: "what-the-examination-was-and-was-not",
          },
          {
            prompt: "How does this lesson describe the relationship between the certificate and the byline?",
            options: ["The signatures were the price of admission", "The signatures replaced the byline entirely in the eyes of English readers", "The byline was granted only after the signers had approved the finished book", "The certificate was added years later, once the byline had proved profitable"],
            correctIndex: 0,
            explanation: "She got the byline, and the byline paid; she also had to be vouched for to receive it.",
            sourceLessonSlug: "what-the-examination-was-and-was-not",
          },
          {
            prompt: "Which is the honest way to report both halves of the Wheatley case?",
            options: ["Both are true at once", "Report the manumission and treat the certificate as a formality of the trade", "Report the certificate and treat the manumission as unconnected to the book", "Report neither, since the two cannot be reconciled from the surviving record"],
            correctIndex: 0,
            explanation: "A course that reports only one of them is telling half a story.",
            sourceLessonSlug: "what-the-examination-was-and-was-not",
          },
          {
            prompt: "The attestation's examination clause is undated. What does the scholarship supply?",
            options: ["February 1772", "September 1773, immediately before the London edition was published", "October 1773, at the time of Wheatley's letter to David Wooster", "May 1773, on the eve of her departure for England from Boston"],
            correctIndex: 0,
            explanation: "Which places the reading in the failed subscription campaign rather than in the London publication.",
            sourceLessonSlug: "what-the-examination-was-and-was-not",
          },
          {
            prompt: "What did the certificate cost Wheatley that a fee never costs a ghostwriter?",
            options: ["Being vouched for", "A share of the London edition's proceeds, paid to the signers as their fee", "The right to publish anything further without the same signatures attached", "Her manumission, which the signers made conditional on the book's success"],
            correctIndex: 0,
            explanation: "By the governor of the province and by the man who owned her, in order to receive a byline.",
            sourceLessonSlug: "what-the-examination-was-and-was-not",
          },
          {
            prompt: "What kind of statement is \"She has been examined by some of the best Judges\"?",
            options: ["Undated and unattributed", "A dated finding recorded in the minutes of a Boston town meeting", "A quotation from the publisher's correspondence with Archibald Bell", "A summary of testimony given under oath before the provincial council"],
            correctIndex: 0,
            explanation: "Passive twice over, which is why a later reader had to guess and the guess became a scene.",
            sourceLessonSlug: "what-the-examination-was-and-was-not",
          },
          {
            prompt: "In what year was Wheatley freed, on the evidence of her own letter?",
            options: ["1773", "1772, before the subscription proposals were published in Boston", "1778, at the time of her marriage and the end of the Wheatley household", "1775, after the outbreak of the war closed the transatlantic book trade"],
            correctIndex: 0,
            explanation: "Shortly after her return from London, on her own account at the desire of her English friends.",
            sourceLessonSlug: "what-the-examination-was-and-was-not",
          },
          {
            prompt: "What is the general rule this lesson models for the rest of the course?",
            options: ["Report what the record carries", "Prefer the vivid version when both versions are equally well supported", "Treat a widely repeated story as settled unless a scholar has refuted it", "Omit any claim that a modern institution has described as speculation"],
            correctIndex: 0,
            explanation: "State what the document says, what is likely, what is speculation, and which is which.",
            sourceLessonSlug: "what-the-examination-was-and-was-not",
          },
          {
            prompt: "Wheatley's English advocates mattered because they:",
            options: ["Applied pressure", "Paid Archibald Bell to print the volume at their own expense", "Signed a second attestation for the benefit of English readers", "Purchased the entire first printing to guarantee its commercial success"],
            correctIndex: 0,
            explanation: "On her own account the manumission came at their desire, after her return to America.",
            sourceLessonSlug: "what-the-examination-was-and-was-not",
          },
          {
            prompt: "Which document does this course treat as the strongest evidence about the examination?",
            options: ["The attestation's own sentence", "A memoir written by one of the eighteen signers late in his life", "A newspaper report of the session published in the Boston Censor", "The manuscript minutes of the meeting, preserved in the Wheatley family papers"],
            correctIndex: 0,
            explanation: "It is undated, passive and unattributed, and that is the whole of the documentary basis.",
            sourceLessonSlug: "what-the-examination-was-and-was-not",
          },
          {
            prompt: "How old was Wheatley, approximately, when the volume was printed?",
            options: ["About twenty", "About thirty-five, after a long apprenticeship in the Boston printing trade", "About fourteen, which is why the signers were unwilling to certify more firmly", "About forty-five, having published in Boston newspapers for over two decades"],
            correctIndex: 0,
            explanation: "She had been enslaved in Boston since childhood and was still enslaved when the book went to press.",
            sourceLessonSlug: "the-book-that-needed-a-certificate",
          },
          {
            prompt: "What did the failed Boston attempt prove about her local standing?",
            options: ["A reputation did not raise a book", "That her poems were unknown in Boston before the London edition appeared", "That the Boston printers refused on principle to publish an enslaved author", "That the colonial censor had suppressed the subscription notices as seditious"],
            correctIndex: 0,
            explanation: "She had a local reputation as a poet and the subscriptions still did not come in.",
            sourceLessonSlug: "the-book-that-needed-a-certificate",
          },
          {
            prompt: "What is the reader's intended order of encounter in the 1773 volume?",
            options: ["Publisher's note, certificate, names, poems", "Poems first, with the certificate reserved for the end as a closing guarantee", "Dedication, subscription list, poems, and the certificate as an appendix", "Certificate, dedication, publisher's note, and only then the title page itself"],
            correctIndex: 0,
            explanation: "The doubt and the answer to it sit in one hand, in the order Bell arranged them.",
            sourceLessonSlug: "to-the-publick",
          },
          {
            prompt: "Why does this course say the signatures were not a private reassurance to a nervous printer?",
            options: ["They were placed where a publisher puts selling material", "Because Bell said in his note that he had been forced to obtain them", "Because the signers were paid for their names out of the book's proceeds", "Because the certificate was reprinted in every subsequent London edition"],
            correctIndex: 0,
            explanation: "Front matter is the position reserved for whatever will most help a book sell.",
            sourceLessonSlug: "to-the-publick",
          },
          {
            prompt: "The attestation's structure shows the signers guaranteeing:",
            options: ["Authorship, not merit", "Merit, not authorship, since the poems' origin was never seriously doubted", "Both equally, in two separate clauses of the same certified statement", "Neither, since the document only records that an examination took place"],
            correctIndex: 0,
            explanation: "They assure the world the poems were written by Phillis, and say nothing about how good they are.",
            sourceLessonSlug: "to-the-publick",
          },
          {
            prompt: "What is the significance of a governor signing a note about a book of poems?",
            options: ["Civil authority used as evidence", "It shows the province formally licensed books before they could be printed", "It shows the governor held a personal literary interest in the poet's work", "It shows the attestation was a legal instrument enforceable in the courts"],
            correctIndex: 0,
            explanation: "Which tells you the doubt being answered was about capacity rather than about poetry.",
            sourceLessonSlug: "to-the-publick",
          },
          {
            prompt: "Two independent transcriptions were used to verify the attestation for this course. They agree on:",
            options: ["The wording and the names", "The date on which the certificate was signed in Boston", "The identity of the judges who conducted the examination", "The number of subscribers the Boston proposal actually secured"],
            correctIndex: 0,
            explanation: "Documenting the American South and the Project Gutenberg transcription of the 1773 volume.",
            sourceLessonSlug: "to-the-publick",
          },
          {
            prompt: "What does the phrase \"and is thought qualified to write them\" leave unstated?",
            options: ["Who thought so", "Whether the poems were considered fit for publication at all", "Whether the examination concerned poetry or prose composition", "Whether the judges had read the manuscript in its entirety"],
            correctIndex: 0,
            explanation: "The passive voice appears twice in one sentence, and both agents are missing.",
            sourceLessonSlug: "to-the-publick",
          },
          {
            prompt: "Which best describes Bell's list, as this lesson characterises it?",
            options: ["Religious books", "Political pamphlets aimed at the American market during the imperial crisis", "Scientific and antiquarian titles issued for subscription among London societies", "Fashionable poetry and drama sold through the West End booksellers"],
            correctIndex: 0,
            explanation: "Which is why the Countess of Huntingdon's evangelical patronage was worth so much to the book.",
            sourceLessonSlug: "the-book-that-needed-a-certificate",
          },
          {
            prompt: "The certificate is described in this course as which kind of evidence?",
            options: ["Primary", "Secondary, since the signers relied on what the Wheatley household told them", "Circumstantial, since it concerns the manuscript rather than the printed book", "Hearsay, since none of the eighteen signers had read the poems themselves"],
            correctIndex: 0,
            explanation: "It is bound into the book it certifies, which is what makes the object unusual.",
            sourceLessonSlug: "the-book-that-needed-a-certificate",
          },
          {
            prompt: "Why does the course call this book the best single artifact in its catalog?",
            options: ["The doubt and the answer are in one object", "Because it is the oldest book any course in the catalog cites directly", "Because it is the only eighteenth-century text available in a free digitised copy", "Because the poet's own manuscript survives alongside the printed edition"],
            correctIndex: 0,
            explanation: "Elsewhere the paperwork sits in a contract, a letter file, an archive or a scholar's footnote.",
            sourceLessonSlug: "the-book-that-needed-a-certificate",
          },
          {
            prompt: "What did the manumission instrument secure, on Wheatley's own account?",
            options: ["Her and her property", "The right to publish a second volume without further attestation", "A pension payable from the Wheatley estate after her enslaver's death", "Passage back to England should conditions in Boston become unsafe"],
            correctIndex: 0,
            explanation: "She writes that the instrument is drawn so as to secure her and her property from the executors and administrators.",
            sourceLessonSlug: "what-the-examination-was-and-was-not",
          },
          {
            prompt: "Which repository holds the 18 October 1773 letter?",
            options: ["The Massachusetts Historical Society", "The Library of Congress African and Middle Eastern Division in Washington", "The University of North Carolina's Wilson Special Collections Library", "The British Library, which received it with Archibald Bell's business papers"],
            correctIndex: 0,
            explanation: "Which also digitised it, so the sentences quoted in this lesson can be checked directly.",
            sourceLessonSlug: "what-the-examination-was-and-was-not",
          },
          {
            prompt: "What does the phrase \"upon my own footing\" tell a reader about Wheatley's position in late 1773?",
            options: ["She was newly free and self-supporting", "She had secured a permanent annuity from her English patrons", "She had been taken into the Wheatley family as a paid household member", "She had signed a publishing agreement giving her a share of English sales"],
            correctIndex: 0,
            explanation: "And the book was the chief thing she had to depend upon, which is the byline as income.",
            sourceLessonSlug: "what-the-examination-was-and-was-not",
          },
          {
            prompt: "The course's treatment of the examination is an example of teaching:",
            options: ["An absence as a finding", "A contested claim by choosing the better-supported side and stating it plainly", "A settled fact that later scholarship has confirmed from a second document", "A dramatic reconstruction as an aid to memory rather than as evidence"],
            correctIndex: 0,
            explanation: "The record does not carry the scene, and saying so is the lesson rather than a gap in it.",
            sourceLessonSlug: "what-the-examination-was-and-was-not",
          },
          {
            prompt: "How many signature groups does the lesson's table divide the eighteen into?",
            options: ["Five", "Two, separating the civil authorities from the clergy of the town", "Nine, pairing each signer with the family connection that explains his presence", "Three, ranked by the weight their names would have carried with English readers"],
            correctIndex: 0,
            explanation: "Provincial executive, Hon., Esq., clergy, and the household, which is John Wheatley alone.",
            sourceLessonSlug: "to-the-publick",
          },
          {
            prompt: "Which of these is NOT something the attestation does?",
            options: ["Assess the poems as literature", "Assure the world the poems were written by Phillis", "State that she was brought from Africa a few years earlier", "Note that she was serving as a slave in a family in the town"],
            correctIndex: 0,
            explanation: "It is a guarantee of authorship, and it never says whether the signers thought the poems any good.",
            sourceLessonSlug: "to-the-publick",
          },
          {
            prompt: "What did the London route give the book that Boston could not?",
            options: ["A publisher and a patron", "A copyright registration enforceable throughout the British empire", "A larger printing than any American press was then capable of producing", "An exemption from the provincial licensing rules that governed Boston printers"],
            correctIndex: 0,
            explanation: "Archibald Bell agreed to print it, and the Countess of Huntingdon allowed the dedication.",
            sourceLessonSlug: "the-book-that-needed-a-certificate",
          },
          {
            prompt: "The lesson says a fee is a number once. What did Wheatley's byline produce instead?",
            options: ["A reputation, advocates and an income", "A permanent salary paid by her English patron for the rest of her life", "A partnership in Archibald Bell's bookselling business at Aldgate", "A seat among the eighteen signers on any future certificate of this kind"],
            correctIndex: 0,
            explanation: "Along with a manumission she attributes to the pressure of her friends in England.",
            sourceLessonSlug: "what-the-examination-was-and-was-not",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3 — The claim in the subtitle
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "written-by-himself-the-subtitle",
      title: "9 · Written by Himself",
      section: "Section 3 · The claim in the subtitle",
      body: `Boston, 1845. A book comes off the press at the Anti-Slavery Office, No. 25 Cornhill. Here is its title page, in the order the type sets it:

> NARRATIVE
> OF THE
> LIFE
> OF
> FREDERICK DOUGLASS,
> AN
> AMERICAN SLAVE.
>
> WRITTEN BY HIMSELF.

**Stop at the last line, because that line is not a description. It is a claim, and it is being made in a place normally reserved for information.**

A title page tells you what the book is called, who wrote it, who printed it, where and when. "Written by Himself" is none of those things. It is an assertion about the process that produced the manuscript, and no other kind of book needed it. A book of sermons by a Boston minister did not say "written by himself" on its title page. It did not have to.

**So the subtitle is doing the work Wheatley's certificate did, from the opposite direction.** Wheatley's book answered anticipated disbelief by importing eighteen other names. Douglass's book answers the same anticipated disbelief by making the claim himself, in his own typography, before anyone else can speak.

That is a real difference and it is worth naming precisely:

| | Wheatley, 1773 | Douglass, 1845 |
| --- | --- | --- |
| Who makes the authorship claim | Eighteen signatories | The author, in the subtitle |
| Where it sits | A certificate in the front matter | The title page itself |
| Whose credibility is spent | Theirs | His |
| What it concedes | That she would not be believed | That he would not be believed |

**Both concede the same thing.** Neither book could simply put a name on a cover and let it stand. Seventy-two years apart, in two countries, the same defect in the reading public required the same category of remedy.

**The phrase became a convention, which is how you know the problem was general.** Once "Written by Himself" was on the market, the formula spread across the genre. *Incidents in the Life of a Slave Girl* (1861) carries **Written by Herself** on its title page in the same position. A phrase only becomes a formula when a great many books need the same thing said.

**And here is the part that makes it a credit story rather than only a publishing story.** Douglass put the claim where the byline goes. He did not put it in a preface, where an author's own protest counts for less, and he did not leave it to be settled later by scholars. He annexed the authorship question to the title page, which is the page a library catalogues from, a bookseller shelves from and a reader trusts.

**In this course's terms, he moved a contested claim from the weakest position on the page to the strongest one.** That is a strategy, not an accident, and Section 6 will show a modern version of the same move: a collaborator's name on the cover rather than in the acknowledgements.

:::reveal Why is "Written by Himself" not an ordinary piece of title-page information? ||| Because it is an assertion about how the manuscript was produced, made in a place reserved for the book's name, author, printer, place and year, and no unquestioned author's book needed it.

:::reveal What did Douglass do differently from Wheatley's publisher, given the same anticipated disbelief? ||| He made the authorship claim himself, on the title page, instead of importing other people's signatures into the front matter.

## Vocabulary
- **Subtitle claim**: an assertion about a book's origin placed on its title page, where readers, cataloguers and booksellers treat the page as reliable information.
- **Genre convention**: a formula that spreads across many books because many books face the same problem, as "written by himself" and "written by herself" did.
- **Anticipated disbelief**: the expectation, built into a book's design, that readers will doubt its stated author.
- **Annexation**: attaching a contested claim to the strongest available position on the page rather than leaving it to a preface or to later scholarship.

## Sources
Douglass, F. (1845). *Narrative of the life of Frederick Douglass, an American slave. Written by himself*. Anti-Slavery Office. https://docsouth.unc.edu/neh/douglass/douglass.html

Jacobs, H. A. (1861). *Incidents in the life of a slave girl. Written by herself* (L. M. Child, Ed.). Published for the Author. https://docsouth.unc.edu/fpn/jacobs/jacobs.html`,
    },
    {
      slug: "the-prefaces-that-authenticate",
      title: "10 · The prefaces that authenticate",
      section: "Section 3 · The claim in the subtitle",
      body: `The subtitle was not the end of it. Before a reader of the 1845 *Narrative* reaches Douglass's first sentence, they pass two other men.

**First, a preface signed "WM. LLOYD GARRISON. BOSTON, May 1, 1845."** Garrison was the most prominent white abolitionist in the United States, and his name on the front of the book was worth money and reach. He uses it to say this:

> "Mr. DOUGLASS has very properly chosen to write his own Narrative, in his own style, and according to the best of his ability, rather than to employ some one else. It is, therefore, entirely his own production."

**Read that sentence as a document in the history of ghostwriting, because that is what it is.** Garrison names the alternative explicitly: *rather than to employ some one else*. Employing someone else was, in 1845, a normal and available way to produce a book like this. It was so normal that the most famous abolitionist in the country thought it worth telling readers that this particular author had not done it.

He then vouches for the contents:

> "I am confident that it is essentially true in all its statements; that nothing has been set down in malice, nothing exaggerated, nothing drawn from the imagination."

**Second, a letter from Wendell Phillips, dated Boston, 22 April 1845.** Phillips vouches from the other direction, on personal knowledge:

> "Again, we have known you long, and can put the most entire confidence in your truth, candor, and sincerity."

And he names, in the same letter, the risk the book creates for its author:

> "In all the broad lands which the Constitution of the United States overshadows, there is no single spot,--however narrow or desolate,--where a fugitive slave can plant himself and say, 'I am safe.'"

> "You, perhaps, may tell your story in safety, endeared as you are to so many warm hearts by rare gifts, and a still rarer devotion of them to the service of others."

**So the 1845 book carries three separate authorship guarantees**: the author's own claim in the subtitle, a preface from Garrison, and a letter from Phillips. That is a lot of scaffolding for a book by a man who was, by then, one of the best-known speakers in the country.

**And it is the Wheatley mechanism again, in a different format.** Names of higher social standing are added to a book so that the author's own name will be believed. In 1773 they were signatures on a certificate. In 1845 they are a preface and a letter, and they are longer, warmer and more literary. **The genre changed. The function did not.**

**Do not read this as Garrison and Phillips taking anything from Douglass.** They are not claiming authorship, they explicitly disclaim it, and Garrison's sentence goes out of its way to give Douglass the whole of it. That is precisely why the front matter is such good evidence: the mechanism does not require anyone to behave badly. It requires only that a certain author's name be insufficient on its own, and it survives everybody's good intentions.

**The cost is subtler than theft and it is still a cost.** Every page of vouching is a page in which the author is the subject of other people's assurances rather than the source of his own authority. A reader arrives at Douglass's first sentence having already been told, twice, that he can be trusted. That framing is doing something to the reading, and Douglass appears to have thought so too, which is the next lesson.

:::reveal What alternative does Garrison name and rule out in his preface, and why does that matter to this course? ||| Employing someone else to write the narrative. It matters because it shows that a ghostwritten version was a normal, available option in 1845, normal enough to be worth denying in print.

:::reveal How many separate authorship guarantees does the 1845 Narrative carry, and what are they? ||| Three: the subtitle "Written by Himself", Garrison's preface of 1 May 1845, and Wendell Phillips's letter of 22 April 1845.

## Vocabulary
- **Vouching**: the act of a third party lending their credibility to an author, in a preface or letter, so that the author's own account will be accepted.
- **Prefatory letter**: a letter to the author printed in the front matter, which authenticates while appearing to be private correspondence.
- **Scaffolding**: the accumulated apparatus of guarantees around a text, which supports the book and also frames how it is read.
- **Function versus format**: the distinction between what a piece of front matter does and the literary shape it takes, which is how an attestation and a warm preface can be the same mechanism.

## Sources
Douglass, F. (1845). *Narrative of the life of Frederick Douglass, an American slave. Written by himself*. Anti-Slavery Office. https://docsouth.unc.edu/neh/douglass/douglass.html`,
    },
    {
      slug: "who-introduces-the-second-book",
      title: "11 · Who introduces the second book",
      section: "Section 3 · The claim in the subtitle",
      body: `Ten years later Douglass published the story again, longer, under a new title. The 1855 title page reads:

> MY BONDAGE AND MY FREEDOM.
> Part I.--Life as a Slave. Part II.--Life as a Freeman.
> By FREDERICK DOUGLASS.
> WITH AN INTRODUCTION.
> BY DR. JAMES M'CUNE SMITH.
>
> MILLER, ORTON & MULLIGAN.
> New York: 25 Park Row.--Auburn: 107 Genesee-st. 1855.

**Compare the two front matters and the whole lesson is in the difference.**

- 1845: a preface by William Lloyd Garrison and a letter from Wendell Phillips.
- 1855: an introduction by James McCune Smith, a Black physician, who writes as, in his own words, "the son of a self-emancipated bond-woman," and who introduces Douglass with pride as his brother.

**The apparatus did not disappear. The apparatus changed hands.**

That is a genuinely different thing from removing it, and this course will not overstate it. The 1855 book still opens with somebody else introducing the author. What changed is who that somebody is, and therefore what kind of credibility is being borrowed. In 1845 the borrowed credibility was white and institutional. In 1855 it is Black, professional and kin.

**Notice also what the 1855 title page dropped.** "Written by Himself" is not on it. By 1855 Douglass did not need to argue on the title page that he had written his own book. The 1845 subtitle had done its job, and the author's name alone was, at last, sufficient information.

**Put the three title pages of this section side by side and you can read a career as a sequence of credit decisions:**

| Year | Book | Authorship apparatus |
| --- | --- | --- |
| 1845 | Narrative of the Life | Subtitle claim, plus a white preface and a white prefatory letter |
| 1855 | My Bondage and My Freedom | No subtitle claim; introduction by a Black physician |

**This is what a correction looks like when the author is alive to make it.** Douglass did not petition anyone, sue anyone or wait for a scholar. He published again, and he chose the front matter. Most people in this course did not get that option, which is exactly why Section 5 exists: when the author cannot correct the record, somebody else has to, decades or a century later, out of the surviving documents.

**One boundary this course keeps.** CREDIT-00 owns the general anatomy of a correction, and this course does not re-teach it. What Section 3 adds is the narrow observation that **the front matter is a lever**, and an author with enough standing can pull it themselves. What Section 5 adds is what happens when nobody can.

:::reveal Who wrote the introduction to My Bondage and My Freedom, and how does he describe himself? ||| Dr. James McCune Smith, a Black physician, who writes as the son of a self-emancipated bond-woman and introduces Douglass with pride as his brother.

:::reveal What did the 1855 title page drop, and what does that tell you? ||| The subtitle claim "Written by Himself", which tells you the 1845 claim had done its work and Douglass's name alone was by then sufficient.

## Vocabulary
- **Apparatus**: the front-matter machinery of prefaces, introductions and letters that surrounds a text and vouches for it.
- **Borrowed credibility**: the standing a third party lends an author, which always comes from somewhere and therefore always says something about who is trusted.
- **Front matter as a lever**: the idea that an author with enough standing can change how their book is framed by choosing who introduces it.
- **Self-correction**: a correction made by the author while alive, by republishing on different terms, rather than by a later scholar working from documents.

## Sources
Douglass, F. (1855). *My bondage and my freedom* (J. M. Smith, Intro.). Miller, Orton & Mulligan. https://docsouth.unc.edu/neh/douglass55/douglass55.html

Douglass, F. (1845). *Narrative of the life of Frederick Douglass, an American slave. Written by himself*. Anti-Slavery Office. https://docsouth.unc.edu/neh/douglass/douglass.html`,
    },
    {
      slug: "quiz-the-subtitle",
      title: "12 · Knowledge check: the claim in the subtitle",
      section: "Section 3 · The claim in the subtitle",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What is the last line of the 1845 Narrative's title page?",
            options: ["Written by Himself", "Published at the Anti-Slavery Office, No. 25 Cornhill, Boston", "With a preface by William Lloyd Garrison and a letter from Wendell Phillips", "Narrative of the Life of Frederick Douglass, an American Slave, Part the First"],
            correctIndex: 0,
            explanation: "It sits where a title page normally carries information, and it is an assertion instead.",
            sourceLessonSlug: "written-by-himself-the-subtitle",
          },
          {
            prompt: "Where was the 1845 Narrative published?",
            options: ["Boston", "London, by a bookseller of Aldgate specialising in religious works", "New York, at 25 Park Row, by Miller, Orton and Mulligan", "Rochester, at the office of the newspaper Douglass later edited"],
            correctIndex: 0,
            explanation: "At the Anti-Slavery Office, No. 25 Cornhill, in 1845.",
            sourceLessonSlug: "written-by-himself-the-subtitle",
          },
          {
            prompt: "Why did no book of sermons by a Boston minister carry the phrase \"written by himself\"?",
            options: ["Nobody doubted it", "Because clergy were forbidden by custom from making claims on a title page", "Because the phrase was reserved by printers for first-person narrative works", "Because sermons were published anonymously as a matter of denominational practice"],
            correctIndex: 0,
            explanation: "The phrase is a remedy for anticipated disbelief, and an unquestioned author needs no remedy.",
            sourceLessonSlug: "written-by-himself-the-subtitle",
          },
          {
            prompt: "Who makes the authorship claim in Wheatley's 1773 book, and who makes it in Douglass's 1845 book?",
            options: ["Eighteen signatories, then the author", "The publisher in both cases, though in different positions in the front matter", "The author in both cases, though only Douglass placed it on the title page", "A patron in 1773 and an abolitionist society in 1845, both in prefatory letters"],
            correctIndex: 0,
            explanation: "Wheatley's book imports other names; Douglass makes the claim himself before anyone else can speak.",
            sourceLessonSlug: "written-by-himself-the-subtitle",
          },
          {
            prompt: "What do the Wheatley certificate and the Douglass subtitle both concede?",
            options: ["That the author would not be believed", "That the manuscript had been substantially revised before publication", "That the author had received assistance in preparing the text for the press", "That the publisher had doubts about the commercial prospects of the book"],
            correctIndex: 0,
            explanation: "Neither book could put a name on a cover and let it stand, seventy-two years apart.",
            sourceLessonSlug: "written-by-himself-the-subtitle",
          },
          {
            prompt: "Whose credibility is spent by Wheatley's remedy, and whose by Douglass's?",
            options: ["The signers', then his own", "The publisher's in both cases, since he arranged the front matter", "The patron's in both cases, since patronage was what carried each book", "Neither author's, since the guarantees came entirely from third parties"],
            correctIndex: 0,
            explanation: "That is the precise difference between importing eighteen names and making the claim yourself.",
            sourceLessonSlug: "written-by-himself-the-subtitle",
          },
          {
            prompt: "Which 1861 book carries the same formula in the same position?",
            options: ["Incidents in the Life of a Slave Girl", "Behind the Scenes, by a woman formerly a slave and later a modiste", "Twelve Years a Slave, the narrative of a kidnapped citizen of New York", "My Bondage and My Freedom, in its second and enlarged American edition"],
            correctIndex: 0,
            explanation: "Its title page reads Written by Herself, which is how you know the problem was general.",
            sourceLessonSlug: "written-by-himself-the-subtitle",
          },
          {
            prompt: "When does a phrase become a formula, on this lesson's account?",
            options: ["When many books need the same thing said", "When a publisher registers it as a trademark for a series of titles", "When a printer adopts it as a house style across an entire imprint", "When a genre's leading author uses it in three successive books"],
            correctIndex: 0,
            explanation: "Which is why the spread of written by himself and written by herself is evidence about readers.",
            sourceLessonSlug: "written-by-himself-the-subtitle",
          },
          {
            prompt: "Why does putting the claim on the title page matter more than putting it in a preface?",
            options: ["It is the page catalogues and shelves trust", "Because a preface can be removed from later printings without the author's consent", "Because a title page is legally binding on the publisher and a preface is not", "Because prefaces were rarely read by nineteenth-century purchasers of narratives"],
            correctIndex: 0,
            explanation: "A library catalogues from it, a bookseller shelves from it, and a reader trusts it.",
            sourceLessonSlug: "written-by-himself-the-subtitle",
          },
          {
            prompt: "In this course's terms, what did Douglass do with the authorship question?",
            options: ["Moved it to the strongest position on the page", "Delegated it to two prominent abolitionists who could vouch more persuasively", "Deferred it to later scholarship, which he expected would settle the matter", "Removed it entirely, publishing the narrative with no authorship claim at all"],
            correctIndex: 0,
            explanation: "A strategy rather than an accident, and Section 6 shows a modern version of the same move.",
            sourceLessonSlug: "written-by-himself-the-subtitle",
          },
          {
            prompt: "How is Garrison's preface signed and dated?",
            options: ["Boston, May 1, 1845", "Boston, April 22, 1845, the same date as Wendell Phillips's letter", "New York, September 1855, in the enlarged edition of the narrative", "Lynn, Massachusetts, 1844, before the manuscript went to the printer"],
            correctIndex: 0,
            explanation: "Phillips's letter carries the earlier date of 22 April 1845.",
            sourceLessonSlug: "the-prefaces-that-authenticate",
          },
          {
            prompt: "What alternative does Garrison explicitly name and rule out?",
            options: ["Employing some one else", "Publishing the narrative anonymously for the author's own safety", "Allowing the Anti-Slavery Society to prepare the manuscript for the press", "Serialising the account in a newspaper before issuing it as a volume"],
            correctIndex: 0,
            explanation: "Which shows a ghostwritten version was a normal, available option in 1845.",
            sourceLessonSlug: "the-prefaces-that-authenticate",
          },
          {
            prompt: "How does Garrison characterise the Narrative's authorship?",
            options: ["Entirely his own production", "A collaboration between the author and the officers of the Anti-Slavery Office", "A faithful transcription of lectures the author had delivered on the circuit", "An account prepared from the author's dictation by a member of the society"],
            correctIndex: 0,
            explanation: "He says Douglass very properly chose to write it himself, in his own style.",
            sourceLessonSlug: "the-prefaces-that-authenticate",
          },
          {
            prompt: "What does Garrison say about malice, exaggeration and imagination?",
            options: ["Nothing has been set down from any of them", "That a reader should allow for all three in any narrative of this kind", "That the author was cautioned against all three before writing began", "That the society had removed all three from the manuscript before printing"],
            correctIndex: 0,
            explanation: "He states he is confident the narrative is essentially true in all its statements.",
            sourceLessonSlug: "the-prefaces-that-authenticate",
          },
          {
            prompt: "On what basis does Wendell Phillips vouch for Douglass?",
            options: ["Long personal acquaintance", "A comparison of the manuscript against the society's own records of his lectures", "A sworn statement obtained from persons who had known him in Maryland", "The corroboration of the account by two other fugitives then living in Boston"],
            correctIndex: 0,
            explanation: "He writes that we have known you long, and can put the most entire confidence in your truth, candor and sincerity.",
            sourceLessonSlug: "the-prefaces-that-authenticate",
          },
          {
            prompt: "What danger does Phillips's letter name?",
            options: ["No spot in the United States is safe for a fugitive", "That the book would be suppressed by the federal post office before distribution", "That the author's family remaining in Maryland would be punished for the book", "That the abolitionist societies would be prosecuted for publishing the narrative"],
            correctIndex: 0,
            explanation: "He writes that in all the broad lands the Constitution overshadows there is no single spot where a fugitive slave can say I am safe.",
            sourceLessonSlug: "the-prefaces-that-authenticate",
          },
          {
            prompt: "How many separate authorship guarantees does the 1845 Narrative carry?",
            options: ["Three", "One, the subtitle, since the two prefatory pieces concern the truth of the contents", "Five, counting the publisher's imprint and the copyright notice as guarantees", "Two, since Garrison's preface and Phillips's letter form a single apparatus"],
            correctIndex: 0,
            explanation: "The subtitle claim, Garrison's preface and Phillips's letter.",
            sourceLessonSlug: "the-prefaces-that-authenticate",
          },
          {
            prompt: "How does the 1845 front matter relate to Wheatley's 1773 attestation?",
            options: ["Same function, different format", "Same format, since both are certificates signed by several men of standing", "No relation, since one concerns poetry and the other concerns a life narrative", "Opposite functions, since one adds a name and the other removes one"],
            correctIndex: 0,
            explanation: "Names of higher social standing are added so the author's own name will be believed.",
            sourceLessonSlug: "the-prefaces-that-authenticate",
          },
          {
            prompt: "Do Garrison and Phillips claim any part of the authorship?",
            options: ["No, they disclaim it", "Yes, Garrison describes himself as having prepared the text for the press", "Yes, Phillips describes the narrative as written jointly with the author", "The front matter is silent, which is what makes the question unresolvable"],
            correctIndex: 0,
            explanation: "Garrison's sentence goes out of its way to give Douglass the whole of it.",
            sourceLessonSlug: "the-prefaces-that-authenticate",
          },
          {
            prompt: "Why is the 1845 front matter such good evidence for this course?",
            options: ["The mechanism survives good intentions", "Because it records a dispute between the author and his publishers", "Because it is the only nineteenth-century preface to name a ghostwriter", "Because it was written after the author had already become widely believed"],
            correctIndex: 0,
            explanation: "Nobody behaves badly, and it still requires that the author's name be insufficient on its own.",
            sourceLessonSlug: "the-prefaces-that-authenticate",
          },
          {
            prompt: "What cost does this lesson attribute to the vouching apparatus?",
            options: ["The author becomes the subject of other people's assurances", "The author loses the copyright in the narrative to the sponsoring society", "The author must share the proceeds with the writers of the front matter", "The author is prevented from republishing the work in any other form"],
            correctIndex: 0,
            explanation: "A reader arrives at the first sentence having already been told twice that he can be trusted.",
            sourceLessonSlug: "the-prefaces-that-authenticate",
          },
          {
            prompt: "In what year did Douglass publish My Bondage and My Freedom?",
            options: ["1855", "1845, simultaneously with the shorter Narrative of the Life", "1861, in the same year as Incidents in the Life of a Slave Girl", "1881, more than three decades after the first narrative appeared"],
            correctIndex: 0,
            explanation: "Ten years after the Narrative, longer and under a new title.",
            sourceLessonSlug: "who-introduces-the-second-book",
          },
          {
            prompt: "Who wrote the introduction to My Bondage and My Freedom?",
            options: ["Dr. James McCune Smith", "William Lloyd Garrison, as he had for the 1845 Narrative", "Wendell Phillips, expanding the letter he had written ten years earlier", "Douglass himself, under the title An Introduction by the Author"],
            correctIndex: 0,
            explanation: "A Black physician, named on the title page as the author of the introduction.",
            sourceLessonSlug: "who-introduces-the-second-book",
          },
          {
            prompt: "How does McCune Smith describe himself in that introduction?",
            options: ["The son of a self-emancipated bond-woman", "A physician of New York with thirty years of practice among the free population", "An officer of the American Anti-Slavery Society charged with the book's publication", "A former fellow labourer on the newspaper the author had lately established"],
            correctIndex: 0,
            explanation: "And he introduces Douglass with pride as his brother.",
            sourceLessonSlug: "who-introduces-the-second-book",
          },
          {
            prompt: "What happened to the front-matter apparatus between 1845 and 1855?",
            options: ["It changed hands", "It disappeared, leaving the 1855 volume with no introduction of any kind", "It doubled, with four separate guarantees appearing in the later edition", "It moved to the back of the book, after the appendix of speeches and letters"],
            correctIndex: 0,
            explanation: "The 1855 book still opens with somebody else introducing the author; who that somebody is changed.",
            sourceLessonSlug: "who-introduces-the-second-book",
          },
          {
            prompt: "What kind of credibility was borrowed in 1845, and what kind in 1855?",
            options: ["White and institutional, then Black and professional", "Religious in both years, but Congregational in 1845 and Methodist in 1855", "Commercial in 1845 and academic in 1855, reflecting the change of publisher", "Political in both years, though shifting from Massachusetts to New York figures"],
            correctIndex: 0,
            explanation: "Borrowed credibility always comes from somewhere, so it always says something about who is trusted.",
            sourceLessonSlug: "who-introduces-the-second-book",
          },
          {
            prompt: "What did the 1855 title page drop?",
            options: ["The subtitle claim", "The author's name, which appeared only on the spine of that edition", "The publisher's imprint, which was moved to the reverse of the title leaf", "The description of the book as a narrative, replaced by the word autobiography"],
            correctIndex: 0,
            explanation: "By 1855 Douglass did not need to argue on his title page that he had written his own book.",
            sourceLessonSlug: "who-introduces-the-second-book",
          },
          {
            prompt: "How did Douglass correct his own record, on this lesson's account?",
            options: ["He published again and chose the front matter", "He petitioned the publisher to withdraw the earlier edition from sale", "He sued the writers of the 1845 front matter for misrepresenting his role", "He waited for a scholar to establish his authorship from surviving letters"],
            correctIndex: 0,
            explanation: "Most people in this course did not have that option, which is why Section 5 exists.",
            sourceLessonSlug: "who-introduces-the-second-book",
          },
          {
            prompt: "Which course owns the general anatomy of a correction?",
            options: ["CREDIT-00", "This course, which teaches it through the Douglass republication of 1855", "CREDIT-02, which follows a workshop convention rather than an individual case", "CREDIT-03, which reports three institutions disagreeing about a single date"],
            correctIndex: 0,
            explanation: "Who Gets Named teaches it as a general mechanism, and this course adds the front matter as a lever.",
            sourceLessonSlug: "who-introduces-the-second-book",
          },
          {
            prompt: "Who published My Bondage and My Freedom?",
            options: ["Miller, Orton & Mulligan", "The Anti-Slavery Office at No. 25 Cornhill in Boston, as before", "Derby and Miller of Auburn, who also issued Twelve Years a Slave", "Published for the Author, without any commercial imprint on the title page"],
            correctIndex: 0,
            explanation: "With addresses at 25 Park Row, New York, and 107 Genesee Street, Auburn.",
            sourceLessonSlug: "who-introduces-the-second-book",
          },
          {
            prompt: "How is My Bondage and My Freedom divided on its title page?",
            options: ["Life as a Slave and Life as a Freeman", "Childhood, Bondage, Escape and Public Life, in four numbered parts", "A narrative section and an appendix of speeches delivered in Great Britain", "Two volumes, issued separately by the New York and Auburn offices"],
            correctIndex: 0,
            explanation: "Part I and Part II, which is itself a statement about what the book is for.",
            sourceLessonSlug: "who-introduces-the-second-book",
          },
          {
            prompt: "What narrow observation does Section 3 add to CREDIT-00's account of corrections?",
            options: ["The front matter is a lever", "That corrections are always made by the author rather than by later scholars", "That a correction requires a publisher willing to withdraw the earlier edition", "That an author's second book always supersedes the first in library catalogues"],
            correctIndex: 0,
            explanation: "An author with enough standing can pull it themselves, which most people in this course could not.",
            sourceLessonSlug: "who-introduces-the-second-book",
          },
          {
            prompt: "The 1845 title page's structure shows the authorship claim placed:",
            options: ["Below the author's name", "Above the title, as a running head on every page of the volume", "Inside Garrison's preface rather than anywhere on the title page", "On the reverse of the title leaf, alongside the copyright notice"],
            correctIndex: 0,
            explanation: "It is the last line of the title page, after Frederick Douglass, an American Slave.",
            sourceLessonSlug: "written-by-himself-the-subtitle",
          },
          {
            prompt: "What does a title page conventionally tell a reader?",
            options: ["Name, author, printer, place, year", "The author's qualifications and the circumstances under which the book was composed", "The book's subject, its intended audience and the price at which it is offered", "Who financed the printing and what share of the proceeds each party receives"],
            correctIndex: 0,
            explanation: "Which is why an assertion about how the manuscript was produced stands out there.",
            sourceLessonSlug: "written-by-himself-the-subtitle",
          },
          {
            prompt: "The 1845 and 1773 remedies differ in direction. Douglass's runs:",
            options: ["Outward from the author", "Inward from a patron who supplied the necessary standing", "Through a publisher who assumed the claim on the author's behalf", "Through a court, which certified the authorship before publication"],
            correctIndex: 0,
            explanation: "He makes the claim himself, in his own typography, before anyone else can speak.",
            sourceLessonSlug: "written-by-himself-the-subtitle",
          },
          {
            prompt: "What does the spread of the formula across the genre demonstrate?",
            options: ["The doubt was general, not personal", "That publishers copied each other's title pages without regard to content", "That the phrase had become a legal requirement for narratives of this kind", "That authors in the genre were competing for the same small body of readers"],
            correctIndex: 0,
            explanation: "A phrase only becomes a formula when a great many books need the same thing said.",
            sourceLessonSlug: "written-by-himself-the-subtitle",
          },
          {
            prompt: "Garrison's standing in 1845 was worth what to the book?",
            options: ["Money and reach", "Legal protection against a suit for libel by the author's former enslaver", "A guaranteed review in every abolitionist newspaper in the northern states", "An exemption from the postal restrictions then applied to antislavery matter"],
            correctIndex: 0,
            explanation: "He was the most prominent white abolitionist in the country, and he used the name to vouch.",
            sourceLessonSlug: "the-prefaces-that-authenticate",
          },
          {
            prompt: "Phillips's letter suggests Douglass may tell his story in safety because of:",
            options: ["Rare gifts and devotion to others", "A private arrangement with his former enslaver in the state of Maryland", "The protection of the Massachusetts courts, which had ruled in his favour", "The distance between Boston and the jurisdiction from which he had fled"],
            correctIndex: 0,
            explanation: "He writes that Douglass is endeared to many warm hearts by rare gifts and a still rarer devotion of them.",
            sourceLessonSlug: "the-prefaces-that-authenticate",
          },
          {
            prompt: "What is the relationship this lesson draws between format and function?",
            options: ["The genre changed and the function did not", "The function changed while the certificate format was retained unaltered", "Both changed, which is why the 1845 apparatus cannot be compared with 1773", "Neither changed, since a prefatory letter is simply a certificate in prose"],
            correctIndex: 0,
            explanation: "Signatures on a certificate in 1773; a warm preface and a letter in 1845; the same work done.",
            sourceLessonSlug: "the-prefaces-that-authenticate",
          },
          {
            prompt: "Which is the correct order of the 1845 front matter as a reader meets it?",
            options: ["Title page, Garrison, Phillips, narrative", "Narrative, Garrison, Phillips, appendix of speeches and letters", "Garrison, title page, narrative, Phillips as a closing endorsement", "Phillips, Garrison, title page, narrative, in order of the dates on each"],
            correctIndex: 0,
            explanation: "Two men stand between the title page and Douglass's first sentence.",
            sourceLessonSlug: "the-prefaces-that-authenticate",
          },
          {
            prompt: "Phillips's letter is dated earlier than Garrison's preface by:",
            options: ["Nine days", "Six months, since Phillips wrote before the manuscript was complete", "A year, since the letter had been written for an earlier abandoned edition", "One day, which is why the two pieces read as a single coordinated apparatus"],
            correctIndex: 0,
            explanation: "22 April 1845 against 1 May 1845, both from Boston.",
            sourceLessonSlug: "the-prefaces-that-authenticate",
          },
          {
            prompt: "This course's reading of Garrison's preface treats it primarily as:",
            options: ["Evidence about the ghostwriting trade", "A literary essay on the merits of the narrative that follows it", "A legal disclaimer protecting the society from responsibility for the contents", "A private letter that the publisher printed without the writer's permission"],
            correctIndex: 0,
            explanation: "It names employing someone else as the thing Douglass chose not to do.",
            sourceLessonSlug: "the-prefaces-that-authenticate",
          },
          {
            prompt: "What is the strongest reason not to call the 1855 change a removal of the apparatus?",
            options: ["Somebody still introduces the author", "Because the 1845 preface was reprinted at the back of the later edition", "Because McCune Smith's introduction is longer than Garrison's preface was", "Because the publisher rather than the author selected the new introducer"],
            correctIndex: 0,
            explanation: "What changed is who that somebody is, and therefore what kind of credibility is borrowed.",
            sourceLessonSlug: "who-introduces-the-second-book",
          },
          {
            prompt: "In the section's table, what is listed under the 1845 authorship apparatus?",
            options: ["Subtitle claim, white preface, white prefatory letter", "Subtitle claim alone, since the prefatory pieces concern only the contents", "An introduction by a Black physician and no subtitle claim of any kind", "A certificate signed by eighteen men of standing, as in the 1773 volume"],
            correctIndex: 0,
            explanation: "The 1855 row carries no subtitle claim and an introduction by James McCune Smith.",
            sourceLessonSlug: "who-introduces-the-second-book",
          },
          {
            prompt: "What does Section 5 of this course take up that Section 3 does not?",
            options: ["What happens when nobody can correct the record", "The modern collaborator credit ladder in present-tense trade publishing", "The certificate bound into a book's own front matter in the eighteenth century", "The fidelity question raised when a named author dictated rather than wrote"],
            correctIndex: 0,
            explanation: "Douglass corrected his own record by republishing; most people in this course could not.",
            sourceLessonSlug: "who-introduces-the-second-book",
          },
          {
            prompt: "How does this course describe a career read across three title pages?",
            options: ["A sequence of credit decisions", "A steady decline in the author's control over his own publications", "An accident of which publishers happened to be available in each decade", "A record of disputes between the author and his abolitionist sponsors"],
            correctIndex: 0,
            explanation: "What the subtitle says, who writes the front matter, and what gets dropped.",
            sourceLessonSlug: "who-introduces-the-second-book",
          },
          {
            prompt: "The phrase \"Written by Herself\" appears on the title page of which book in this course?",
            options: ["Incidents in the Life of a Slave Girl", "Behind the Scenes, published in New York by G. W. Carleton in 1868", "What Mrs. Fisher Knows About Old Southern Cooking, published in 1881", "Poems on Various Subjects, Religious and Moral, published in London in 1773"],
            correctIndex: 0,
            explanation: "In the same position Douglass's formula occupies, sixteen years later.",
            sourceLessonSlug: "written-by-himself-the-subtitle",
          },
          {
            prompt: "What makes the subtitle a strategy rather than an accident?",
            options: ["It occupies the page a reader trusts most", "It repeats a phrase the publisher had used on every previous title in the series", "It was required by the Anti-Slavery Office before the book could be printed", "It was added at the printer's suggestion after the front matter was set in type"],
            correctIndex: 0,
            explanation: "He moved a contested claim from the weakest position on the page to the strongest one.",
            sourceLessonSlug: "written-by-himself-the-subtitle",
          },
          {
            prompt: "Douglass was, by 1845, already:",
            options: ["A well-known speaker", "A newspaper editor with a national circulation behind him", "A licensed minister in the African Methodist Episcopal connection", "An officer of the Massachusetts Anti-Slavery Society with a salary"],
            correctIndex: 0,
            explanation: "Which is why three separate authorship guarantees is a striking amount of scaffolding.",
            sourceLessonSlug: "the-prefaces-that-authenticate",
          },
          {
            prompt: "Which mechanism from Lesson 3 do the 1845 prefaces illustrate?",
            options: ["The authenticator", "The ghost proper, since two other writers appear before the author does", "The amanuensis, since the narrative had first been delivered as lectures", "The as-told-to, since Garrison and Phillips are named alongside the author"],
            correctIndex: 0,
            explanation: "A second and third name are added so the author's own name will be believed.",
            sourceLessonSlug: "the-prefaces-that-authenticate",
          },
          {
            prompt: "The 1855 introduction is written by someone Douglass would have regarded as:",
            options: ["A peer", "A patron whose social standing exceeded his own by a wide margin", "An employer, since Smith directed the society that financed the book", "A stranger, engaged by the publisher without consulting the author"],
            correctIndex: 0,
            explanation: "Smith introduces him with pride as his brother, which is a different relation from vouching.",
            sourceLessonSlug: "who-introduces-the-second-book",
          },
          {
            prompt: "What is the honest limit this lesson puts on the 1855 change?",
            options: ["The apparatus did not disappear", "The change was made by the publisher rather than by the author himself", "The introduction was added only in later printings of the 1855 edition", "The subtitle claim was retained on the spine even after leaving the title page"],
            correctIndex: 0,
            explanation: "This course will not overstate it: the book still opens with somebody else introducing the author.",
            sourceLessonSlug: "who-introduces-the-second-book",
          },
          {
            prompt: "The phrase in Garrison's preface most useful to this course is:",
            options: ["Rather than to employ some one else", "Nothing has been set down in malice, nothing exaggerated", "I am confident that it is essentially true in all its statements", "In his own style, and according to the best of his ability"],
            correctIndex: 0,
            explanation: "It names the ghostwriting alternative as a live option, which is why the denial was worth printing.",
            sourceLessonSlug: "the-prefaces-that-authenticate",
          },
          {
            prompt: "What position does Section 6 revisit as a modern version of Douglass's move?",
            options: ["A collaborator's name on the cover", "A certificate of authorship bound into a book's own front matter", "A pseudonym adopted by an author for reasons of personal safety", "An editor's name printed on a title page beneath the author's own"],
            correctIndex: 0,
            explanation: "Rather than in the acknowledgements, which is the same annexation to a stronger position.",
            sourceLessonSlug: "written-by-himself-the-subtitle",
          },
          {
            prompt: "Why does this lesson say the 1845 apparatus frames the reading?",
            options: ["The reader is told twice to trust him first", "Because Garrison's preface summarises the narrative before the reader reaches it", "Because Phillips's letter instructs readers to disregard any contrary account", "Because the front matter is longer than the first three chapters combined"],
            correctIndex: 0,
            explanation: "The author becomes the subject of other people's assurances rather than the source of his own authority.",
            sourceLessonSlug: "the-prefaces-that-authenticate",
          },
          {
            prompt: "Two courses in this catalog now use the front matter of a single book as primary evidence. Which page do both read?",
            options: ["The title page", "The copyright page, where the registration and the deposit are recorded", "The subscription list, which names everyone who paid for the book in advance", "The dedication, which names the patron who made the publication possible"],
            correctIndex: 0,
            explanation: "It is where the publishing arrangement becomes visible, which is this course's whole method.",
            sourceLessonSlug: "written-by-himself-the-subtitle",
          },
          {
            prompt: "What does the 1855 title page name immediately after the author?",
            options: ["The writer of the introduction", "The two abolitionists whose front matter had introduced the 1845 volume", "The claim that the book was written by himself, retained from the first edition", "The society under whose auspices the enlarged narrative had been prepared"],
            correctIndex: 0,
            explanation: "With an introduction by Dr. James McCune Smith, printed on the title page rather than buried inside.",
            sourceLessonSlug: "who-introduces-the-second-book",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4 — When someone else holds the pen
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-editor-who-signed-the-preface",
      title: "13 · The editor who signed the preface",
      section: "Section 4 · When someone else holds the pen",
      body: `Eight years after Douglass, a different kind of book. The 1853 title page:

> TWELVE YEARS A SLAVE.
> Narrative of Solomon Northup, a Citizen of New-York, Kidnapped in Washington City in 1841, and Rescued in 1853.
>
> AUBURN: DERBY AND MILLER.
> BUFFALO: DERBY, ORTON AND MULLIGAN.
> LONDON: SAMPSON LOW, SON & COMPANY, 47 LUDGATE HILL. 1853.

**No "written by himself" here.** Northup did not write this book with his own hand. He told it, and a white lawyer from Whitehall, New York named **David Wilson** wrote it down and put his own name on an editor's preface.

**This is the amanuensis, and the question it raises is not credit. It is fidelity.**

Wilson is named. He is not hiding, he is not a ghost, and nobody has to reconstruct his role from letters a century later, because he described it himself in the front matter and signed it: "DAVID WILSON. WHITEHALL, N. Y., May, 1853."

**Here is what he says he did.** He "commenced the preparation of the following narrative" and extended it to its present length in order, in his own phrase, "to present all the facts which have been communicated to him." The story, he writes, was received "from his lips" (Wilson, 1853).

**And here is what he offers as his quality control**, which is the interesting part:

- He says he "had an opportunity of detecting any contradiction or discrepancy," which is a claim about method: he heard the account more than once.
- He reports that Northup "has invariably repeated the same story without deviating in the slightest particular," which is a consistency test.
- He records that Northup went over the manuscript and corrected it.

**Take that seriously and take it sceptically at the same time, because both are correct.**

Taking it seriously: this is a great deal more than most amanuensis arrangements offer. Wilson is disclosing his method, in print, at the time, and inviting the reader to weigh it. An account that says "the subject reviewed and corrected the manuscript" is doing something a modern editor would recognise as a fact check.

Taking it sceptically: **every one of those assurances is Wilson's.** The consistency test was run by Wilson. The report that Northup corrected the manuscript is Wilson's report. There is no separate document in the front matter in which Northup says what he thought of the result. The person whose fidelity is at stake is the one supplying all the evidence about it.

**That is the amanuensis problem in one paragraph**, and it does not require Wilson to have been dishonest. He may have been scrupulous. The structure is the same either way: a book in the first person, produced by a second person, in which the second person is also the only source for how faithfully it was done.

**Note what this course does NOT say.** It does not say Wilson stole the book, it does not say Northup was ghostwritten, and it does not put a number on how much of the language is Wilson's. Scholars have measured Wilson's hand and have not agreed, and this course reports the disagreement rather than picking a side it cannot defend. What is settled and printable is the structure: a dictated narrative, a named editor, a signed preface, and every assurance about fidelity coming from the same pen that did the writing.

:::reveal In the 1853 book, who is named as editor and how does he describe obtaining the narrative? ||| David Wilson, a lawyer of Whitehall, New York, who says in his signed editor's preface that the story was received from Northup's lips.

:::reveal Why is Wilson's set of assurances about fidelity structurally weak, even if he was scrupulous? ||| Because every one of them is his own: he ran the consistency test and he reports that Northup corrected the manuscript, and no separate statement from Northup appears in the front matter.

## Vocabulary
- **Editor's preface**: a signed statement in the front matter in which an editor describes their own role in producing the text.
- **Fidelity**: the degree to which a written narrative reproduces what a speaker actually said, which is the central question in an amanuensis arrangement.
- **Consistency test**: hearing an account repeatedly and checking it for contradictions, which Wilson claims as his method.
- **Self-supplied assurance**: an assurance about a process that comes only from the person who ran the process, which is weak evidence regardless of their honesty.

## Sources
Northup, S. (1853). *Twelve years a slave* (D. Wilson, Ed.). Derby and Miller. https://docsouth.unc.edu/fpn/northup/northup.html`,
    },
    {
      slug: "written-in-arabic",
      title: "14 · Written in Arabic, read in translation",
      section: "Section 4 · When someone else holds the pen",
      body: `In 1831, in North Carolina, an enslaved West African scholar named **Omar ibn Said** wrote his autobiography. He wrote it himself, in his own hand, and he wrote it **in Arabic**.

**That single fact rearranges every category in this course.** He is not a ghost, because his name is on the manuscript. He is not an as-told-to, because nobody took dictation. He is not an authenticated author in the Wheatley sense, because there is no certificate. And yet almost nobody who has ever encountered his life story has read what he wrote. They have read somebody's translation of it.

**Translation is the amanuensis problem moved one step outward.** In an amanuensis arrangement, a second person converts speech into writing and may change it. In a translation, a second person converts one written language into another and may change it. The author's name stays on the book in both cases, and in both cases the reader is holding somebody else's sentences.

**The translation history here is long enough to see the problem clearly.** The University of North Carolina's research guide to Omar ibn Said materials lays it out: the text was first translated by **Alexander Cotheal in 1848**, then retranslated by **J. F. Jameson** for publication in the *American Historical Review* in **1925**. A modern scholarly edition by **Ala Alryyes**, *A Muslim American Slave* (2011), prints the English facing facsimile pages of the Arabic. And in **2023**, Mbaye Lo and Carl W. Ernst published *I Cannot Write My Life*, which the guide describes as offering "fresh and accurate translations of Omar's eighteen surviving writings" and correcting "many distortions" (University of North Carolina at Chapel Hill, n.d.).

**Read that last phrase again.** A 2023 scholarly edition says the existing translations contained distortions worth correcting. That is not a small housekeeping note. It means that for large parts of the period between 1831 and 2023, readers who thought they were reading Omar ibn Said were reading something else, and had no way to know which parts.

**The manuscript itself is now checkable, which is the good news and the reason this is teachable at all.** The original was acquired by the Library of Congress in 2017 and has been digitised (University of North Carolina at Chapel Hill, n.d.; Library of Congress, n.d.). Anyone who reads Arabic can now compare a translation against the page. Before 2017 that was a scholar's privilege; now it is a link.

**Here is the credit lesson, and it is a hard one.** Omar ibn Said did everything the other authors in this course had to fight for. He wrote it himself, unaided, in his own hand, in a language he commanded. The record still did not deliver his words to readers, because the barrier was not a byline at all. It was **language**, and the people who bridged that gap were doing the amanuensis's job whether or not anybody called them that.

**So a name on a manuscript is necessary and not sufficient.** Between the author and the reader there can be a transcriber, an editor, a translator, or all three, and each of them is a place where the text can change. The title page records none of that. Checking it means going to the manuscript, which is exactly why the 2017 acquisition and digitisation matter more than they sound.

:::reveal What did Omar ibn Said do in 1831, and why does it not fit the ghost, as-told-to or authenticator categories? ||| He wrote his own autobiography in his own hand in Arabic, so no name was removed, nobody took dictation, and no certificate was needed.

:::reveal What does the 2023 edition by Lo and Ernst claim about earlier translations of his writings? ||| That it offers fresh and accurate translations of his eighteen surviving writings and corrects many distortions in what had been available before.

## Vocabulary
- **Translation as intermediation**: the step in which a second person converts a text between languages, which can alter it while the author's name stays on the book.
- **Facing-page edition**: a scholarly format that prints the translation opposite a facsimile of the original, so a reader can check one against the other.
- **Distortion**: a change introduced in transmission, which is what the 2023 edition says it corrects in earlier translations of these writings.
- **Digitisation as accountability**: making an original manuscript publicly viewable, which converts checking a translation from a scholar's privilege into a link.

## Sources
Library of Congress. (n.d.). *Omar Ibn Said collection*. https://www.loc.gov/collections/omar-ibn-said-collection/

University of North Carolina at Chapel Hill. (n.d.). *Other resources: Omar ibn Said materials at Wilson Special Collections Library*. UNC Libraries. https://guides.lib.unc.edu/omar-ibn-said/other-resources`,
    },
    {
      slug: "dictated-and-unattributed",
      title: "15 · Dictated, and the record does not say by whom",
      section: "Section 4 · When someone else holds the pen",
      body: `San Francisco, 1881. *What Mrs. Fisher Knows About Old Southern Cooking, Soups, Pickles, Preserves, Etc.*, by **Mrs. Abby Fisher**, late of Mobile, Alabama.

**The front matter states the whole arrangement in the author's own voice.** Her "Preface and Apology" is worth reading closely, because it does something no other book in this course does: it explains the production problem before the recipes start.

> "The publication of a book on my knowledge and experience of Southern Cooking, Pickle and Jelly Making, has been frequently asked of me by my lady friends and patrons in San Francisco and Oakland, and also by ladies of Sacramento during the State Fair in 1879. Not being able to read or write myself, and my husband also having been without the advantages of an education (upon whom would devolve the writing of the book at my dictation) caused me to doubt whether I would be able to present a work that would give perfect satisfaction." (Fisher, 1881)

She goes on: "after due consideration, I concluded to bring forward a book of my knowledge, based on an experience of upwards of thirty-five years." It is signed "MRS. ABBY FISHER, Late of Mobile, Ala."

**Three things in that passage matter for this course.**

1. **The demand came first.** She was asked for the book by her customers, repeatedly, and by name, at the 1879 State Fair. The expertise was already established and already public.
2. **She names the obstacle exactly, and it is not talent.** She could not read or write, and neither could the person who would have taken the dictation.
3. **She states her own qualification in her own sentence**: thirty-five years of practice. Not a certificate signed by other people. Her own count of her own years.

**Now the thing the record does not do.** The book does not say who actually wrote it down.

The preface says the writing "would devolve" on her husband, in a clause explaining her doubts. It does not say he did it. No transcriber is named anywhere in the front matter as the person who held the pen.

**And this is where a widely repeated modern claim fails on contact with the book itself.** It is often said that Fisher dictated the book to nine friends, who are named in the front matter. There IS a list of nine names in the front matter, and it is not that. Its heading reads: **"I take pleasure in referring, by permission, to the following of my friends, namely:"** That is a reference list. Those nine people are vouching for her, which is the Wheatley mechanism again in a commercial register, and the book never says they wrote anything.

**So this course does not print the nine-transcribers claim, and the reason is the lesson.** The record does not name the writer. That absence is not a hole in the research. It is a finding, and it is the most common finding in this entire subject. Most of the people who have held the pen for somebody else's book are not recorded anywhere, and the correct thing to write about them is that the record does not name them.

**Compare the three books in this section and the pattern is clean:**

| Book | Author's role | Writer's identity |
| --- | --- | --- |
| Northup, 1853 | Spoke it | Named, and he signed a preface describing his method |
| Omar ibn Said, 1831 | Wrote it himself, in Arabic | Translators named, and the translations are now contested |
| Fisher, 1881 | Spoke it | Not named |

**One of those three is the normal case.** It is the third one.

:::reveal What obstacle does Fisher name in her preface, and how does she describe her qualification? ||| That she could not read or write and neither could her husband, on whom the writing would devolve; her qualification is an experience of upwards of thirty-five years.

:::reveal What do the nine names in Fisher's front matter actually represent, and what claim does that refute? ||| They are people she refers readers to by permission, a reference list rather than transcribers, which refutes the widely repeated claim that she dictated the book to nine friends.

## Vocabulary
- **Preface and Apology**: Fisher's own front-matter statement, which explains the book's production problem in her voice before the recipes begin.
- **Reference list**: a front-matter list of people who permit an author to refer readers to them, which vouches for the author and records nothing about authorship.
- **Unrecorded amanuensis**: a person who wrote down another's words and whose identity the book never states, which is the most common case in this subject.
- **Absence as a finding**: treating the record's silence about who held the pen as a result to be reported rather than a gap to be filled by inference.

## Sources
Fisher, A. (1881). *What Mrs. Fisher knows about old Southern cooking, soups, pickles, preserves, etc*. [Full text]. Internet Archive. https://archive.org/stream/whatmrsfisherkno00fishrich/whatmrsfisherkno00fishrich_djvu.txt`,
    },
    {
      slug: "quiz-holding-the-pen",
      title: "16 · Knowledge check: when someone else holds the pen",
      section: "Section 4 · When someone else holds the pen",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "Who is named as editor of Twelve Years a Slave?",
            options: ["David Wilson", "Lydia Maria Child, who had edited several narratives of this kind", "Derby and Miller of Auburn, who issued the volume under their own imprint", "Henry B. Northup, the lawyer who secured Solomon Northup's release in 1853"],
            correctIndex: 0,
            explanation: "A lawyer of Whitehall, New York, who signed the editor's preface in May 1853.",
            sourceLessonSlug: "the-editor-who-signed-the-preface",
          },
          {
            prompt: "How does Wilson say he received the narrative?",
            options: ["From Northup's lips", "From a manuscript Northup had prepared during his years in Louisiana", "From depositions taken before a magistrate at the time of the rescue", "From the correspondence of the men who arranged Northup's release"],
            correctIndex: 0,
            explanation: "It is a dictated narrative, which makes Wilson an amanuensis rather than a ghost.",
            sourceLessonSlug: "the-editor-who-signed-the-preface",
          },
          {
            prompt: "What phrase does the 1853 title page NOT contain?",
            options: ["Written by himself", "Kidnapped in Washington City in 1841, and rescued in 1853", "Narrative of Solomon Northup, a citizen of New-York", "Auburn: Derby and Miller; Buffalo: Derby, Orton and Mulligan"],
            correctIndex: 0,
            explanation: "Northup told the book rather than writing it, and the title page does not pretend otherwise.",
            sourceLessonSlug: "the-editor-who-signed-the-preface",
          },
          {
            prompt: "How is Wilson's editor's preface signed and dated?",
            options: ["Whitehall, N. Y., May, 1853", "Boston, May 1, 1853, in the manner of the abolitionist prefaces", "Auburn, N. Y., January 1854, after the first printing had sold out", "New-York, December 1852, before the narrative was complete"],
            correctIndex: 0,
            explanation: "He is not hiding, and nobody has to reconstruct his role from letters a century later.",
            sourceLessonSlug: "the-editor-who-signed-the-preface",
          },
          {
            prompt: "In an amanuensis arrangement, what is the central question?",
            options: ["Fidelity", "Which of the two parties owns the copyright in the finished manuscript", "Whether the transcriber's name should appear above or below the speaker's", "How large a share of the proceeds the transcriber is entitled to receive"],
            correctIndex: 0,
            explanation: "How much the transcriber changed, and in whose interest, rather than whose name is larger.",
            sourceLessonSlug: "the-editor-who-signed-the-preface",
          },
          {
            prompt: "What consistency test does Wilson report?",
            options: ["Northup repeated the same story without deviating", "Three witnesses independently corroborated the account before publication", "The narrative was compared against court records filed in Washington City", "The manuscript was checked against newspaper reports of the 1853 rescue"],
            correctIndex: 0,
            explanation: "He also says he had an opportunity of detecting any contradiction or discrepancy.",
            sourceLessonSlug: "the-editor-who-signed-the-preface",
          },
          {
            prompt: "What is structurally weak about Wilson's assurances, on this lesson's reading?",
            options: ["They all come from him", "They were written years after the narrative was first published", "They contradict the account given on the book's own title page", "They were required by the publisher rather than offered voluntarily"],
            correctIndex: 0,
            explanation: "No separate statement from Northup about the result appears anywhere in the front matter.",
            sourceLessonSlug: "the-editor-who-signed-the-preface",
          },
          {
            prompt: "Does this course say Wilson was dishonest?",
            options: ["No", "Yes, on the evidence of the discrepancies scholars have measured", "Yes, because he claimed authorship of the narrative in his own preface", "It says the question cannot be raised, since the front matter settles it"],
            correctIndex: 0,
            explanation: "The structure is the same whether or not he was scrupulous, which is what makes it teachable.",
            sourceLessonSlug: "the-editor-who-signed-the-preface",
          },
          {
            prompt: "What does this course refuse to put a number on?",
            options: ["How much of the language is Wilson's", "How many times Wilson heard Northup tell the story before writing", "How many copies of the 1853 edition were printed in Auburn and Buffalo", "How long Wilson took to prepare the narrative for the press"],
            correctIndex: 0,
            explanation: "Scholars have measured his hand and disagreed, so the course reports the disagreement.",
            sourceLessonSlug: "the-editor-who-signed-the-preface",
          },
          {
            prompt: "What does Wilson say about Northup and the manuscript?",
            options: ["Northup went over it and corrected it", "Northup declined to read it, having no wish to revisit the events", "Northup approved it only after two chapters had been struck out", "Northup dictated it a second time when the first draft was lost"],
            correctIndex: 0,
            explanation: "Which a modern editor would recognise as a fact check, and which is still Wilson's own report.",
            sourceLessonSlug: "the-editor-who-signed-the-preface",
          },
          {
            prompt: "What is settled and printable about the Northup arrangement?",
            options: ["The structure", "The exact proportion of the text attributable to each of the two men", "Wilson's motive for undertaking the preparation of the narrative", "Northup's private opinion of the finished book as published"],
            correctIndex: 0,
            explanation: "A dictated narrative, a named editor, a signed preface, and every fidelity assurance from one pen.",
            sourceLessonSlug: "the-editor-who-signed-the-preface",
          },
          {
            prompt: "In what language did Omar ibn Said write his 1831 autobiography?",
            options: ["Arabic", "English, learned during his years of enslavement in North Carolina", "Wolof, transliterated into the Arabic script he had been taught as a scholar", "French, the language of the traders through whom he had been sold"],
            correctIndex: 0,
            explanation: "In his own hand, unaided, in a language he commanded as a West African scholar.",
            sourceLessonSlug: "written-in-arabic",
          },
          {
            prompt: "Why does Omar ibn Said fit none of the ghost, as-told-to or authenticator categories?",
            options: ["He wrote it himself with no intermediary", "Because the manuscript carries no name of any kind on its opening leaf", "Because it was never published in his lifetime and so had no title page", "Because it was written outside the United States and its law did not apply"],
            correctIndex: 0,
            explanation: "No name was removed, nobody took dictation, and no certificate was required.",
            sourceLessonSlug: "written-in-arabic",
          },
          {
            prompt: "How does this lesson describe translation in relation to the amanuensis problem?",
            options: ["The same problem moved one step outward", "A different problem entirely, since a translator never claims authorship", "A solution to it, since a written original can always be checked afterwards", "An unrelated question, since translation is governed by its own body of law"],
            correctIndex: 0,
            explanation: "A second person converts the text and may change it, while the author's name stays on the book.",
            sourceLessonSlug: "written-in-arabic",
          },
          {
            prompt: "Who produced the first translation of the autobiography, and in what year?",
            options: ["Alexander Cotheal, 1848", "J. F. Jameson, 1925, for the American Historical Review", "Ala Alryyes, 2011, in a facing-page scholarly edition", "Mbaye Lo and Carl W. Ernst, 2023, in I Cannot Write My Life"],
            correctIndex: 0,
            explanation: "The UNC research guide lays out the sequence from Cotheal through to the 2023 edition.",
            sourceLessonSlug: "written-in-arabic",
          },
          {
            prompt: "Where was J. F. Jameson's retranslation published?",
            options: ["The American Historical Review", "The Journal of Negro History, in its first decade of publication", "The Library of Congress Quarterly Journal of Current Acquisitions", "The North Carolina Historical Review, in its inaugural volume"],
            correctIndex: 0,
            explanation: "In 1925, nearly eighty years after Cotheal's first attempt.",
            sourceLessonSlug: "written-in-arabic",
          },
          {
            prompt: "What does Ala Alryyes's 2011 edition print alongside the English?",
            options: ["Facsimile pages of the Arabic", "A transcription of the Arabic in modern printed characters only", "The 1848 and 1925 translations, so readers can compare all three", "A commentary by the Library of Congress on the manuscript's provenance"],
            correctIndex: 0,
            explanation: "A facing-page edition lets a reader check the translation against the original leaf.",
            sourceLessonSlug: "written-in-arabic",
          },
          {
            prompt: "What does the 2023 volume by Lo and Ernst say it does?",
            options: ["Corrects many distortions", "Publishes the eighteen surviving writings in Arabic for the first time", "Establishes the date of the autobiography as 1831 rather than 1836", "Identifies the copyist who prepared the manuscript for its first owner"],
            correctIndex: 0,
            explanation: "It offers fresh and accurate translations of his eighteen surviving writings, per the UNC guide.",
            sourceLessonSlug: "written-in-arabic",
          },
          {
            prompt: "What follows from a 2023 edition claiming to correct earlier distortions?",
            options: ["Readers before it could not know what was altered", "That the Arabic manuscript itself must have been altered at some point", "That the 1848 and 1925 translators were working from a different text", "That the autobiography should be treated as a work of disputed authorship"],
            correctIndex: 0,
            explanation: "For much of the period between 1831 and 2023 they were reading something other than what he wrote.",
            sourceLessonSlug: "written-in-arabic",
          },
          {
            prompt: "In what year did the Library of Congress acquire the original manuscript?",
            options: ["2017", "1925, at the time of Jameson's retranslation for the AHR", "2011, when the facing-page scholarly edition was published", "1848, from the estate of the man who commissioned Cotheal's translation"],
            correctIndex: 0,
            explanation: "It has since been digitised, which converts checking a translation into a link.",
            sourceLessonSlug: "written-in-arabic",
          },
          {
            prompt: "What was the barrier between Omar ibn Said and his readers?",
            options: ["Language", "A publisher who refused to issue the text under his own name", "A certificate of authorship that no Boston signatory would provide", "A contract assigning his manuscript to the family that held him"],
            correctIndex: 0,
            explanation: "He did everything the other authors had to fight for, and the record still did not deliver his words.",
            sourceLessonSlug: "written-in-arabic",
          },
          {
            prompt: "What does this lesson conclude about a name on a manuscript?",
            options: ["Necessary and not sufficient", "Sufficient, provided the manuscript survives in the author's own hand", "Irrelevant once a scholarly translation has been published and accepted", "Decisive, since a title page records every hand that touched the text"],
            correctIndex: 0,
            explanation: "A transcriber, an editor or a translator can stand between author and reader, and the title page records none of it.",
            sourceLessonSlug: "written-in-arabic",
          },
          {
            prompt: "Why does the 2017 acquisition matter more than it sounds?",
            options: ["Checking a translation stopped being a scholar's privilege", "Because the Library of Congress commissioned a new translation on acquiring it", "Because it established for the first time that the manuscript was authentic", "Because it transferred the copyright in the text into the public domain"],
            correctIndex: 0,
            explanation: "Anyone who reads Arabic can now compare a translation against the digitised page.",
            sourceLessonSlug: "written-in-arabic",
          },
          {
            prompt: "In what year and city was Abby Fisher's book published?",
            options: ["San Francisco, 1881", "Mobile, Alabama, 1879, after the state fair at which she was asked for it", "Oakland, California, 1885, in an enlarged second edition", "Sacramento, 1879, immediately following the State Fair of that year"],
            correctIndex: 0,
            explanation: "By an author who signs herself Mrs. Abby Fisher, late of Mobile, Ala.",
            sourceLessonSlug: "dictated-and-unattributed",
          },
          {
            prompt: "What does Fisher's preface say about her own literacy?",
            options: ["She could not read or write", "That she had learned to read but never to write with confidence", "That she wrote the recipes herself and had them corrected by a friend", "That she had been taught to read by the ladies who later requested the book"],
            correctIndex: 0,
            explanation: "And she adds that her husband was also without the advantages of an education.",
            sourceLessonSlug: "dictated-and-unattributed",
          },
          {
            prompt: "Who does Fisher's preface say the writing would devolve upon?",
            options: ["Her husband", "The nine friends whose names appear in the front matter of the book", "The printing office, whose compositors would set it from her speech", "The ladies of Sacramento who had asked for the book at the State Fair"],
            correctIndex: 0,
            explanation: "In a clause explaining her doubts, and the preface never says that he did it.",
            sourceLessonSlug: "dictated-and-unattributed",
          },
          {
            prompt: "How does Fisher state her own qualification?",
            options: ["Upwards of thirty-five years of experience", "A certificate awarded to her at the Sacramento State Fair of 1879", "The endorsement of the nine friends listed in the book's front matter", "Her training in the kitchens of Mobile before she came to California"],
            correctIndex: 0,
            explanation: "Her own count of her own years, rather than a certificate signed by other people.",
            sourceLessonSlug: "dictated-and-unattributed",
          },
          {
            prompt: "Where and when was Fisher asked for the book, according to her preface?",
            options: ["By patrons in San Francisco and Oakland, and at the 1879 State Fair", "By a publisher who approached her after tasting her preserves at a fair", "By a women's printing co-operative that specialised in domestic manuals", "By the ladies of Mobile, before she left Alabama for California"],
            correctIndex: 0,
            explanation: "The demand came first, and the expertise was already established and already public.",
            sourceLessonSlug: "dictated-and-unattributed",
          },
          {
            prompt: "What is the heading over the list of nine names in Fisher's front matter?",
            options: ["I take pleasure in referring, by permission, to the following of my friends", "The following persons assisted in taking down the receipts at my dictation", "Subscribers to this work, whose advance orders made its publication possible", "Certificate of the undersigned as to the authorship of the following pages"],
            correctIndex: 0,
            explanation: "It is a reference list, and the book never says those nine wrote anything.",
            sourceLessonSlug: "dictated-and-unattributed",
          },
          {
            prompt: "Which widely repeated claim does the book itself refute?",
            options: ["That she dictated it to nine friends", "That she could read but not write when the book was prepared", "That the book was published without her knowledge or consent", "That she had never worked as a cook before arriving in California"],
            correctIndex: 0,
            explanation: "The nine are people she refers readers to by permission, which is vouching rather than transcription.",
            sourceLessonSlug: "dictated-and-unattributed",
          },
          {
            prompt: "The nine-name reference list is an example of which mechanism?",
            options: ["The authenticator", "The as-told-to, since the nine appear in a subordinate credit position", "The ghost proper, since the nine are unnamed as writers of the text", "The amanuensis, since the nine took down what the author dictated"],
            correctIndex: 0,
            explanation: "The Wheatley mechanism in a commercial register: other people vouching for the author.",
            sourceLessonSlug: "dictated-and-unattributed",
          },
          {
            prompt: "What does the Fisher book never state?",
            options: ["Who held the pen", "How long she had worked as a cook before the book was made", "Where the author had lived before settling in San Francisco", "Who had asked her repeatedly to publish her knowledge"],
            correctIndex: 0,
            explanation: "No transcriber is named anywhere in the front matter as the person who did the writing.",
            sourceLessonSlug: "dictated-and-unattributed",
          },
          {
            prompt: "How does this course treat the silence about who wrote Fisher's book down?",
            options: ["As a finding", "As a gap to be closed by the most probable inference available", "As evidence that no transcriber was involved and she wrote it herself", "As a reason to exclude the book from the course's evidence base"],
            correctIndex: 0,
            explanation: "It is the most common finding in this subject, and the correct thing to write is that the record does not name them.",
            sourceLessonSlug: "dictated-and-unattributed",
          },
          {
            prompt: "In the section's comparison table, which book names its writer?",
            options: ["Northup, 1853", "Fisher, 1881, which lists nine names in its own front matter", "Omar ibn Said, 1831, whose translators are named on the manuscript", "All three, which is what makes the section's comparison possible"],
            correctIndex: 0,
            explanation: "Wilson is named and signed a preface describing his method; Fisher's writer is not named.",
            sourceLessonSlug: "dictated-and-unattributed",
          },
          {
            prompt: "Which of the three cases in this section is the normal one?",
            options: ["The unnamed writer", "The named editor who signs a preface describing his own method", "The author who wrote unaided and whose translators are all recorded", "None of them, since each is unusual enough to have survived in the record"],
            correctIndex: 0,
            explanation: "Most people who have held the pen for somebody else's book are not recorded anywhere.",
            sourceLessonSlug: "dictated-and-unattributed",
          },
          {
            prompt: "What is the first thing Fisher's preface establishes?",
            options: ["That customers asked her for the book", "That she had obtained the assistance of nine friends in preparing it", "That her husband would be taking down the recipes at her dictation", "That she had been enslaved in Alabama before coming to California"],
            correctIndex: 0,
            explanation: "Repeatedly, by name, and at the 1879 State Fair, so the expertise was already public.",
            sourceLessonSlug: "dictated-and-unattributed",
          },
          {
            prompt: "Wilson's disclosure of his method is, on this lesson's reading:",
            options: ["More than most amanuensis arrangements offer", "The standard practice of the period for narratives of this kind", "A legal requirement imposed on editors by the publishers of the day", "An unusual concealment, since most editors named their sources fully"],
            correctIndex: 0,
            explanation: "He describes it in print, at the time, and invites the reader to weigh it.",
            sourceLessonSlug: "the-editor-who-signed-the-preface",
          },
          {
            prompt: "Where was Twelve Years a Slave published in Britain?",
            options: ["London, at 47 Ludgate Hill", "Edinburgh, by the same house that had issued Douglass's narrative", "Manchester, through the antislavery committee that funded the printing", "It was not published in Britain until the twentieth century"],
            correctIndex: 0,
            explanation: "By Sampson Low, Son & Company, alongside the Auburn and Buffalo imprints.",
            sourceLessonSlug: "the-editor-who-signed-the-preface",
          },
          {
            prompt: "What did Wilson say he was trying to present?",
            options: ["All the facts communicated to him", "A narrative shorter than the one Northup had originally dictated", "An account that would satisfy the legal requirements of a deposition", "A version suitable for readers unfamiliar with the American South"],
            correctIndex: 0,
            explanation: "Which is how he explains extending the narrative to its present length.",
            sourceLessonSlug: "the-editor-who-signed-the-preface",
          },
          {
            prompt: "How many surviving writings by Omar ibn Said does the 2023 edition translate?",
            options: ["Eighteen", "One, the 1831 autobiography, which is the only text known to survive", "Forty-two, matching the number of items in the Library of Congress collection", "Three, the autobiography and two letters written in the same decade"],
            correctIndex: 0,
            explanation: "The UNC guide describes it as offering fresh and accurate translations of all eighteen.",
            sourceLessonSlug: "written-in-arabic",
          },
          {
            prompt: "What does a facing-page edition make possible?",
            options: ["Checking the translation against the original", "Publishing a text whose original manuscript has been lost", "Establishing which of two competing translations came first", "Registering a copyright in the translation separately from the original"],
            correctIndex: 0,
            explanation: "Which is the same accountability move as digitising the manuscript, at the scale of a book.",
            sourceLessonSlug: "written-in-arabic",
          },
          {
            prompt: "Which institution holds the original Omar ibn Said manuscript?",
            options: ["The Library of Congress", "The Wilson Special Collections Library at UNC-Chapel Hill", "The Massachusetts Historical Society, with its other manuscript holdings", "The North Carolina State Archives, in the county where he was enslaved"],
            correctIndex: 0,
            explanation: "The UNC guide states plainly that Wilson Special Collections does not hold the original.",
            sourceLessonSlug: "written-in-arabic",
          },
          {
            prompt: "The three books in Section 4 differ most sharply in:",
            options: ["Whether the writer is identified", "The century in which each of them was first published", "Whether the named author had been enslaved before publication", "Whether the book was published commercially or by subscription"],
            correctIndex: 0,
            explanation: "Named and self-describing, named but contested, and not named at all.",
            sourceLessonSlug: "dictated-and-unattributed",
          },
          {
            prompt: "What kind of expertise does Fisher's preface establish before the recipes begin?",
            options: ["Practical, and already in demand", "Academic, based on formal instruction received in Mobile", "Commercial, derived from the ownership of a restaurant in San Francisco", "Literary, since she had published receipts in newspapers for many years"],
            correctIndex: 0,
            explanation: "Customers had asked her for the book repeatedly, and she counts thirty-five years of practice.",
            sourceLessonSlug: "dictated-and-unattributed",
          },
          {
            prompt: "What does Fisher say the book will be?",
            options: ["A complete instructor", "A record of the receipts used in the households where she had served", "A memoir of her years in Mobile as much as a manual of cookery", "A collection assembled by her friends from her spoken instructions"],
            correctIndex: 0,
            explanation: "So that a child can understand it and learn the art of cooking, in her own words.",
            sourceLessonSlug: "dictated-and-unattributed",
          },
          {
            prompt: "What makes Wilson's preface unusually good evidence?",
            options: ["He described his own role and signed it", "It was written by Northup and printed over Wilson's name", "It was corroborated by a second editor named in the same volume", "It was published separately from the narrative and can be dated exactly"],
            correctIndex: 0,
            explanation: "Nobody has to reconstruct his role from letters a century later, which is rare in this subject.",
            sourceLessonSlug: "the-editor-who-signed-the-preface",
          },
          {
            prompt: "This course reports the scholarly disagreement about Wilson because:",
            options: ["It cannot defend a side it has not settled", "The disagreement is more interesting than the narrative itself", "The scholars involved are named in the book's own front matter", "Reporting disagreement is required by the copyright statute"],
            correctIndex: 0,
            explanation: "Scholars have measured his hand and have not agreed, so the course does not pick.",
            sourceLessonSlug: "the-editor-who-signed-the-preface",
          },
          {
            prompt: "In 1831 Omar ibn Said was living in:",
            options: ["North Carolina", "Charleston, South Carolina, where he had first been landed", "Senegal, from which the manuscript was later carried to America", "Washington City, in the household of a federal official"],
            correctIndex: 0,
            explanation: "Where he wrote the autobiography himself, in Arabic, in his own hand.",
            sourceLessonSlug: "written-in-arabic",
          },
          {
            prompt: "How does this course describe the effect of digitisation on accountability?",
            options: ["It turns a privilege into a link", "It removes the need for any further scholarly translation of the text", "It transfers responsibility for accuracy from the translator to the reader", "It settles disputes about a manuscript's authorship without further work"],
            correctIndex: 0,
            explanation: "Before 2017 comparing a translation to the page was a scholar's privilege.",
            sourceLessonSlug: "written-in-arabic",
          },
          {
            prompt: "Which is the correct order of translations of Omar ibn Said's autobiography?",
            options: ["Cotheal, Jameson, Alryyes, Lo and Ernst", "Jameson, Cotheal, Lo and Ernst, Alryyes", "Alryyes, Cotheal, Jameson, Lo and Ernst", "Lo and Ernst, Alryyes, Jameson, Cotheal"],
            correctIndex: 0,
            explanation: "1848, 1925, 2011 and 2023, as the UNC research guide sets them out.",
            sourceLessonSlug: "written-in-arabic",
          },
          {
            prompt: "The Fisher case shows a reference list being mistaken for:",
            options: ["A list of transcribers", "A subscription list of advance purchasers of the book", "A certificate of authorship in the manner of the Wheatley attestation", "A table of contents for the sections of receipts that follow"],
            correctIndex: 0,
            explanation: "Nine names under a heading about referring readers to friends, by permission.",
            sourceLessonSlug: "dictated-and-unattributed",
          },
          {
            prompt: "What does this course do when the record does not name a writer?",
            options: ["Says so", "Names the most likely candidate and marks the attribution as probable", "Omits the case, since an unattributed book cannot illustrate a credit rule", "Treats the named editor of a comparable book as the presumed writer"],
            correctIndex: 0,
            explanation: "The absence is a finding, and it is the most common finding in this entire subject.",
            sourceLessonSlug: "dictated-and-unattributed",
          },
          {
            prompt: "What did Wilson claim gave him the chance to detect discrepancies?",
            options: ["Hearing the account more than once", "Access to the court records generated by Northup's rescue", "Correspondence with people who had known Northup in New York", "A written statement Northup had prepared before their first meeting"],
            correctIndex: 0,
            explanation: "It is a claim about method, and it is also the only source for how the method went.",
            sourceLessonSlug: "the-editor-who-signed-the-preface",
          },
          {
            prompt: "Fisher signs her preface as:",
            options: ["Mrs. Abby Fisher, Late of Mobile, Ala.", "Abby Fisher, Cook, of San Francisco and Oakland, California", "Mrs. A. Fisher, by the hand of her husband, at her dictation", "The Author, whose name appears on the title page of this work"],
            correctIndex: 0,
            explanation: "Her own name and her own place of origin, with no transcriber's name attached.",
            sourceLessonSlug: "dictated-and-unattributed",
          },
          {
            prompt: "Why does this course include Omar ibn Said in a section about someone else holding the pen?",
            options: ["A translator is an intermediary too", "Because scholars dispute whether he wrote the manuscript himself", "Because the manuscript was taken down by a member of the household", "Because the Library of Congress lists it as a dictated narrative"],
            correctIndex: 0,
            explanation: "The author's name stays on the book and the reader still holds somebody else's sentences.",
            sourceLessonSlug: "written-in-arabic",
          },
          {
            prompt: "What did Fisher doubt, according to her preface?",
            options: ["Whether the book would give perfect satisfaction", "Whether her recipes would be understood outside the American South", "Whether a printing office would agree to set the book from dictation", "Whether her patrons' interest would last long enough to sell an edition"],
            correctIndex: 0,
            explanation: "Because neither she nor the person who would write it down could read or write.",
            sourceLessonSlug: "dictated-and-unattributed",
          },
          {
            prompt: "What does the Northup title page state about the years 1841 and 1853?",
            options: ["Kidnapped in the first, rescued in the second", "That the narrative was dictated over the twelve years between them", "That the author was resident in New York throughout both years", "That Derby and Miller acquired the rights in the earlier of the two"],
            correctIndex: 0,
            explanation: "The title page carries the whole arc of the case, and no authorship claim at all.",
            sourceLessonSlug: "the-editor-who-signed-the-preface",
          },
          {
            prompt: "What separates the amanuensis from the ghost in the Northup case specifically?",
            options: ["Wilson is named on the book", "Wilson was paid a fee rather than a share of the royalty", "Wilson wrote from documents rather than from spoken dictation", "Wilson claimed the copyright in the narrative for himself"],
            correctIndex: 0,
            explanation: "A ghost's name is absent by agreement; Wilson signed a preface in the front matter.",
            sourceLessonSlug: "the-editor-who-signed-the-preface",
          },
          {
            prompt: "The lesson says Omar ibn Said did what the other authors had to fight for. What was that?",
            options: ["He wrote it himself, unaided", "He secured a publisher willing to print under his own name", "He obtained a certificate of authorship from men of standing", "He kept the copyright in his own work after publication"],
            correctIndex: 0,
            explanation: "And the record still did not deliver his words, because the barrier was language.",
            sourceLessonSlug: "written-in-arabic",
          },
          {
            prompt: "Which is the strongest single reason to distrust an unchecked translation of a manuscript?",
            options: ["Nothing on the page records what changed", "Translators are rarely qualified in the source language", "Translations are usually made from copies rather than originals", "A translation is not protected by copyright in its own right"],
            correctIndex: 0,
            explanation: "The title page records neither transcriber, editor nor translator, so checking means going to the manuscript.",
            sourceLessonSlug: "written-in-arabic",
          },
          {
            prompt: "What did Fisher's book require that a literate author's would not?",
            options: ["A second person to hold the pen", "A certificate signed by patrons attesting to her competence", "A publisher willing to accept a manuscript in an unfamiliar hand", "A translator to render her spoken instructions into standard English"],
            correctIndex: 0,
            explanation: "And that person is nowhere named, which is the section's closing point.",
            sourceLessonSlug: "dictated-and-unattributed",
          },
          {
            prompt: "What kind of book is Fisher's, in the terms of this section?",
            options: ["A dictated book with an unnamed writer", "A ghostwritten book whose writer signed a confidentiality agreement", "An as-told-to, since the nine friends are named on its opening page", "An authenticated book, since the reference list certifies its authorship"],
            correctIndex: 0,
            explanation: "She spoke it, somebody wrote it, and the front matter never says who.",
            sourceLessonSlug: "dictated-and-unattributed",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 5 — The correction
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "linda-brent-and-the-editor",
      title: "17 · Linda Brent and the editor",
      section: "Section 5 · The correction",
      body: `Boston, 1861. A book is published for its author, and its title page reads:

> INCIDENTS IN THE LIFE OF A SLAVE GIRL.
> WRITTEN BY HERSELF.
> ...
> EDITED BY L. MARIA CHILD.
> BOSTON: PUBLISHED FOR THE AUTHOR. 1861.

**Three of this course's mechanisms are on that page at once**, which is why Lesson 3 used it as the stacking example.

1. **A subtitle claim.** "Written by Herself", the Douglass formula, sixteen years on.
2. **A pseudonym.** The author's preface is signed **LINDA BRENT**. The real author, Harriet Jacobs, had escaped enslavement in North Carolina, and naming herself was not a neutral act.
3. **An editor's name**, in the position and typeface of a credit: **Edited by L. Maria Child**.

**Now read what Child herself wrote in her introduction**, because it is the most important paragraph in this section:

> "At her request, I have revised her manuscript; but such changes as I have made have been mainly for purposes of condensation and orderly arrangement."

> "With trifling exceptions, both the ideas and the language are her own. I pruned excrescences a little, but otherwise I had no reason for changing her lively and dramatic way of telling her own story."

**Child disclaimed authorship in print, in the book, in 1861, in about as plain a sentence as the English language allows.** "Both the ideas and the language are her own." She describes her own work as condensation, arrangement and light pruning. She names the author's manner and says she saw no reason to change it.

**And for roughly the next century, the book was widely read as Child's.**

That is the fact this whole section exists to explain, and it should be genuinely surprising. Nobody forged anything. The disclaimer was not hidden in a rare edition, it was in the front matter of the book. The author's own subtitle said she wrote it herself. And it did not hold.

**Why not? Four things stacked, and each is a mechanism this course has already named.**

- **The author's name was not on the book.** "Linda Brent" is a pseudonym, so there was no real name for a catalogue, a bibliography or a reader to attach the work to. An author who cannot be indexed cannot be credited.
- **A real, famous name WAS on the book**, in a credit position. Lydia Maria Child was a well-known white writer and editor. Given one indexable name and one unindexable one, the record takes the indexable one.
- **The subtitle claim was doing exactly the work Section 3 described**, which means it was already a signal of contested authorship rather than a settled fact.
- **The disclaimer's placement worked against it.** A statement inside an introduction is easy to skip, easy to discount as modesty, and impossible to see from a catalogue record.

**Notice what this is not.** It is not a theft, not a ghostwriting contract, and not a forgery. It is an **attribution drifting to the most legible name on the page**, which is a failure mode of the record rather than an act by any person. That makes it far more common than theft and much harder to notice.

**And notice which of the four shapes it began as.** Child was an authenticator: a well-known white abolitionist lending standing to a book whose author would otherwise not be believed. Over a century, the authenticator's name was mistaken for the author's. Lesson 3 warned that this exact confusion happens. Here is the case.

:::reveal What does Lydia Maria Child say in her introduction about the ideas and the language of the book? ||| That with trifling exceptions both the ideas and the language are the author's own, and that her own work was condensation, orderly arrangement and a little pruning.

:::reveal Why did the misattribution hold despite a printed disclaimer and a "Written by Herself" subtitle? ||| Because the real author's name was not on the book at all, a famous editor's name was, and an attribution drifts to the most legible name on the page.

## Vocabulary
- **Pseudonym**: a false name printed as the author's, which protects the writer and also leaves nothing for a catalogue or bibliography to index.
- **Legibility**: how easily a name can be recognised, indexed and looked up, which determines where an attribution drifts when a record is ambiguous.
- **Attribution drift**: the movement of credit toward the most recognisable name associated with a work, without anyone intending or committing a theft.
- **Disclaimer**: a printed statement by an editor limiting their own role, which is only as effective as its position on the page makes it.

## Sources
Jacobs, H. A. (1861). *Incidents in the life of a slave girl. Written by herself* (L. M. Child, Ed.). Published for the Author. https://docsouth.unc.edu/fpn/jacobs/jacobs.html`,
    },
    {
      slug: "how-yellin-settled-it",
      title: "18 · How Yellin settled it",
      section: "Section 5 · The correction",
      body: `A misattribution does not correct itself. Somebody has to do it, with documents, and then publish the result somewhere that catalogues will follow.

**The scholar is Jean Fagan Yellin.** The correction has a method, a date and an outcome, and this course teaches it as a worked example rather than as a story about a hero.

**The method: go to the author's own letters.**

*Incidents* is a book whose author is hidden behind a pseudonym. But Harriet Jacobs wrote letters under her own name, and letters survive in the papers of the people she wrote to. The most important of those correspondents was **Amy Post**, the Rochester abolitionist, whose family papers are held at the **University of Rochester** (University of Rochester Libraries, n.d.). Jacobs's letters there are not literary artifacts. They are working correspondence, in which a woman discusses writing the book that would become *Incidents*.

**That is the whole move, and it is worth stating as a general rule.** When a book's title page cannot tell you who wrote it, the answer is usually not on the title page of anything else. It is in the paperwork around the writing: letters, contracts, receipts, diaries, an editor's correspondence file. **The record of the writing outlives the record of the credit**, if anyone kept it.

**The dates: 1981 and 1987.**

- In **1981**, Yellin published "Written by Herself: Harriet Jacobs's Slave Narrative" in the journal *American Literature*. That is the argument entering the scholarly record where it can be checked and contested.
- In **1987**, Harvard University Press published *Incidents in the Life of a Slave Girl, Written by Herself*, edited by Yellin, with Jacobs named as the author. That is the correction entering the **catalogue**, which is the part that actually changes what a library, a bookseller and a student see.

**Two dates, two different jobs, and both are necessary.** An article persuades scholars. An edition changes the record. A correction that stops after the article is a correction that most readers will never encounter, because most readers meet a book through a catalogue entry rather than through a journal.

**What it cost.** Yellin's authentication work ran over years, not weeks, and it drew on more than one archive: the Post family papers, state and local historical societies, and North Carolina records relating to the families involved. That is the honest scale of a correction, and it is why so few of them happen. The evidence for an unrecorded author is nobody's job to assemble, and assembling it is slow.

**Map this onto CREDIT-00's anatomy of a correction**, which this course does not re-teach and does use:

| Stage | In this case |
| --- | --- |
| A claim is doubted | Authorship read as Child's, or as fiction |
| A named person takes it up | Jean Fagan Yellin |
| Documents are produced | Jacobs's own letters, principally the Post family papers |
| The argument is published | *American Literature*, 1981 |
| The record is changed | Harvard University Press edition, 1987 |

**And now the part this course insists on.** Jacobs had already told the truth. She put "Written by Herself" on her own title page in 1861. Her editor confirmed it in print on the next page. **The correction in 1987 did not discover anything the book had not said.** It supplied the one thing the book could not supply for itself: a real name, attached to documents, in a place the catalogue would copy.

That is what a correction actually is. Not a revelation. **An indexable name, backed by evidence, published where records are made.**

:::reveal What documentary base did Yellin's authentication of Jacobs rest on? ||| Jacobs's own letters written under her own name, principally in the Amy Post family papers at the University of Rochester, alongside other archival records.

:::reveal Why are both 1981 and 1987 necessary to the correction? ||| The 1981 article puts the argument into the scholarly record where it can be checked; the 1987 Harvard edition puts the corrected authorship into the catalogue, which is what most readers actually meet.

## Vocabulary
- **Authentication**: assembling documentary evidence that a named person wrote a particular work, which is what Yellin's research did for Jacobs.
- **The record of the writing**: letters, contracts and working papers around a book's composition, which frequently outlive the record of who was credited.
- **Scholarly edition**: a re-publication with an established attribution and apparatus, which is the step that moves a correction into library catalogues.
- **Indexable name**: a real name a catalogue can carry, which is the thing a pseudonymous author cannot supply and a correction must.

## Sources
University of Rochester Libraries. (n.d.). *Isaac and Amy Post family papers* [Finding aid]. Rare Books, Special Collections, and Preservation. https://archives.lib.rochester.edu/repositories/2/resources/968

Yellin, J. F. (1981). Written by herself: Harriet Jacobs's slave narrative. *American Literature, 53*(3), 479-486.

Jacobs, H. A. (1861). *Incidents in the life of a slave girl. Written by herself* (L. M. Child, Ed.). Published for the Author. https://docsouth.unc.edu/fpn/jacobs/jacobs.html`,
    },
    {
      slug: "keckley-doubted-and-punished",
      title: "19 · Doubted and punished at once",
      section: "Section 5 · The correction",
      body: `New York, 1868. The title page:

> BEHIND THE SCENES.
> BY ELIZABETH KECKLEY,
> FORMERLY A SLAVE, BUT MORE RECENTLY MODISTE, AND FRIEND TO MRS. ABRAHAM LINCOLN.
> OR, THIRTY YEARS A SLAVE, AND FOUR YEARS IN THE WHITE HOUSE.
>
> New York: G. W. Carleton & Co., Publishers. M DCCC LXVIII.

**No pseudonym. No "written by herself". No editor's name.** After Wheatley's eighteen signatures, Douglass's three guarantees and Jacobs's pseudonym, Elizabeth Keckley put her own name on the front of a book about the President's household and let it stand.

**This is the case where both of this course's mechanisms run on one person at the same time**, which makes her the single richest subject in it.

**Mechanism one: the byline was punished.**

Keckley wrote, in her own preface, that she had "acceded to the importunities of my friends," that "everything I have written is strictly true; much has been omitted, but nothing has been exaggerated," and that if she had betrayed confidence "it has been to place Mrs. Lincoln in a better light before the world" (Keckley, 1868). Documenting the American South records that her purposes were "partly to help Mrs. Lincoln financially and partly to counter criticism of Mrs. Lincoln" (Documenting the American South, n.d.).

The result was not what she intended. In that summary's words: "Keckley did not foresee the overwhelming public disapproval for publishing personal details about Mrs. Lincoln and White House private life; it led to the end of her dressmaking career as well as condemnation from the Lincoln family" (Documenting the American South, n.d.).

**Read that against Section 1's claim that a byline pays.** It does, and this is the other side of the same ledger. A byline is exposure as well as an asset, and what it pays depends on who is allowed to have written a book about whom. Keckley had built a business on discretion and she spent it. The dressmaking career ended. She later taught at Wilberforce University, and she died in 1907 in a home for destitute women that she had helped to establish.

**Mechanism two: the authorship was doubted anyway.**

Behind the Scenes was edited by the journalist James Redpath, and there has long been argument about how much of the book is his. Documenting the American South puts the current position carefully and this course quotes it rather than improving on it: there is "speculation about the level of involvement of Keckley's editor, James Redpath," and "the verifiable facts in *Behind the Scenes* have affirmed the text's authenticity" (Documenting the American South, n.d.).

**So: her authorship was doubted, and her authorship was punished.** The doubt did not protect her from the punishment, and the punishment did not settle the doubt. She paid the full price of the byline and received a discounted version of the credit.

**What this course refuses to do with the Redpath question.** It does not report a proportion. It does not name Redpath as the writer, and it does not declare the question closed in either direction. The record says an editor was involved and does not measure him, and inventing a measurement would be exactly the error this course spends six sections teaching people to catch. **Where the record does not name the writer of a passage, the honest output is that the record does not name the writer.**

**Set the three women of this section side by side and the argument of the whole course is visible in one table:**

| | Name on the book | Outcome |
| --- | --- | --- |
| Wheatley, 1773 | Hers, propped by eighteen signatures | Byline paid: reputation, advocates, manumission, income |
| Jacobs, 1861 | A pseudonym, beside a famous editor's | Credit drifted to the editor for about a century |
| Keckley, 1868 | Hers, unqualified | Career ended, and authorship still questioned |

**Four of the strongest documents in this course are books by Black women whose authorship was disputed**, and that is not an addendum to the argument. It is the argument. The question "who ends up bylined" has a different answer depending on who is asking to be believed, and these three books are the evidence.

:::reveal What did publishing Behind the Scenes cost Elizabeth Keckley? ||| Her dressmaking career ended and she was condemned by the Lincoln family, after public disapproval of a book she had written partly to help Mrs. Lincoln.

:::reveal What is this course's position on how much of Behind the Scenes James Redpath wrote? ||| That the record says an editor was involved and does not measure him, so the course reports the speculation and refuses to supply a proportion.

## Vocabulary
- **Modiste**: a dressmaker, the trade named on Keckley's own title page and the business the book's publication destroyed.
- **Exposure**: the cost side of a byline, in which being named attaches a person to a book's consequences as well as its credit.
- **Unmeasured editorial involvement**: an editor whose participation is documented but whose share of the text no source quantifies, which this course reports rather than estimates.
- **Discounted credit**: authorship that is formally held but not fully believed, which is what a persistent doubt produces even without a rival claimant.

## Sources
Documenting the American South. (n.d.). *Summary of Behind the Scenes, or, Thirty years a slave, and four years in the White House*. University of North Carolina at Chapel Hill. https://docsouth.unc.edu/neh/keckley/summary.html

Keckley, E. (1868). *Behind the scenes, or, Thirty years a slave, and four years in the White House*. G. W. Carleton & Co. https://docsouth.unc.edu/neh/keckley/keckley.html`,
    },
    {
      slug: "quiz-the-correction",
      title: "20 · Knowledge check: the correction",
      section: "Section 5 · The correction",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "How is the author's preface to Incidents in the Life of a Slave Girl signed?",
            options: ["Linda Brent", "Harriet A. Jacobs, of Edenton in the state of North Carolina", "A Woman of North Carolina, the phrase also quoted on the title page", "L. Maria Child, who prepared the manuscript for publication in Boston"],
            correctIndex: 0,
            explanation: "A pseudonym, adopted because naming herself was not a neutral act for an escaped woman.",
            sourceLessonSlug: "linda-brent-and-the-editor",
          },
          {
            prompt: "Whose name appears on the 1861 title page in an editor's credit position?",
            options: ["L. Maria Child", "Amy Post, the Rochester abolitionist who encouraged the writing", "Jean Fagan Yellin, in the Harvard University Press scholarly edition", "William Lloyd Garrison, as he had for the 1845 Douglass narrative"],
            correctIndex: 0,
            explanation: "Edited by L. Maria Child, a well-known white writer, printed in a credit position and typeface.",
            sourceLessonSlug: "linda-brent-and-the-editor",
          },
          {
            prompt: "Which three mechanisms sit on the 1861 title page at once?",
            options: ["A subtitle claim, a pseudonym and an editor's name", "A ghostwriting contract, an attestation and a translator's note", "A dedication, a subscription list and a certificate of authorship", "An amanuensis credit, a copyright notice and a publisher's guarantee"],
            correctIndex: 0,
            explanation: "Which is why Lesson 3 used this book as the stacking example.",
            sourceLessonSlug: "linda-brent-and-the-editor",
          },
          {
            prompt: "What does Child say about the ideas and language of the book?",
            options: ["They are the author's own", "That she supplied the language and the author supplied the incidents", "That the two women had composed the narrative jointly over several years", "That she declined to alter anything, including obvious errors of grammar"],
            correctIndex: 0,
            explanation: "With trifling exceptions, in a sentence printed in the book in 1861.",
            sourceLessonSlug: "linda-brent-and-the-editor",
          },
          {
            prompt: "How does Child describe her own work on the manuscript?",
            options: ["Condensation and orderly arrangement", "A thorough rewriting undertaken at the author's explicit request", "The addition of historical context the author could not have supplied", "The removal of passages likely to expose the author to legal danger"],
            correctIndex: 0,
            explanation: "She adds that she pruned excrescences a little and had no reason to change the author's way of telling it.",
            sourceLessonSlug: "linda-brent-and-the-editor",
          },
          {
            prompt: "Despite that printed disclaimer, how was the book widely read for about a century?",
            options: ["As Child's", "As an anonymous work with no attributable author at all", "As a collaboration credited equally to both women on the title page", "As a translation of an earlier narrative published in Britain"],
            correctIndex: 0,
            explanation: "Which is the fact the whole section exists to explain, and it should be genuinely surprising.",
            sourceLessonSlug: "linda-brent-and-the-editor",
          },
          {
            prompt: "What does this course call the movement of credit toward the most recognisable name?",
            options: ["Attribution drift", "Ghostwriting, since the true author's name never reaches the reader", "The Matilda effect, which CREDIT-00 teaches as a general mechanism", "Authentication, since a famous name is being used to support a book"],
            correctIndex: 0,
            explanation: "A failure mode of the record rather than an act by any person, which makes it common and hard to notice.",
            sourceLessonSlug: "linda-brent-and-the-editor",
          },
          {
            prompt: "Why could a catalogue not carry the real author's name in 1861?",
            options: ["The book gave a pseudonym", "Because catalogues did not record authors of narratives of this kind", "Because the publisher had registered the copyright in Child's name", "Because the author had no legal identity while she remained a fugitive"],
            correctIndex: 0,
            explanation: "An author who cannot be indexed cannot be credited, whatever the subtitle claims.",
            sourceLessonSlug: "linda-brent-and-the-editor",
          },
          {
            prompt: "Why did the placement of Child's disclaimer work against it?",
            options: ["An introduction is easy to skip and invisible to a catalogue", "Because it appeared only in the second and later printings of the book", "Because it was printed in smaller type than the rest of the front matter", "Because it contradicted the claim made on the book's own title page"],
            correctIndex: 0,
            explanation: "It is also easy to discount as modesty, which a title-page claim is not.",
            sourceLessonSlug: "linda-brent-and-the-editor",
          },
          {
            prompt: "In this course's four shapes, what was Child originally?",
            options: ["An authenticator", "A ghost, since her writing was never acknowledged in the book", "An amanuensis, since Jacobs dictated the narrative to her", "An as-told-to collaborator sharing the credit with the subject"],
            correctIndex: 0,
            explanation: "A well-known white abolitionist lending standing to a book whose author would not be believed.",
            sourceLessonSlug: "linda-brent-and-the-editor",
          },
          {
            prompt: "Which confusion did Lesson 3 warn about, and which this case demonstrates?",
            options: ["An authenticator mistaken for the author", "A ghost mistaken for an as-told-to collaborator", "A translator mistaken for the original author of a text", "A subtitle claim mistaken for a publisher's guarantee"],
            correctIndex: 0,
            explanation: "Over a century the editor's name was read as the name of the person who wrote the book.",
            sourceLessonSlug: "linda-brent-and-the-editor",
          },
          {
            prompt: "Is the Jacobs misattribution a theft, in this course's terms?",
            options: ["No", "Yes, since a white editor took credit for a Black woman's book", "Yes, since the publisher knowingly printed a misleading title page", "The question cannot be answered from the surviving documents"],
            correctIndex: 0,
            explanation: "Nobody forged anything; the attribution drifted to the most legible name on the page.",
            sourceLessonSlug: "linda-brent-and-the-editor",
          },
          {
            prompt: "Which scholar established Harriet Jacobs's authorship?",
            options: ["Jean Fagan Yellin", "Lydia Maria Child, in a later statement correcting her own introduction", "Amy Post, who published the correspondence in her own lifetime", "Harvard University Press, which commissioned the research directly"],
            correctIndex: 0,
            explanation: "The course teaches it as a worked example of a correction rather than as a story about a hero.",
            sourceLessonSlug: "how-yellin-settled-it",
          },
          {
            prompt: "What documents did the authentication rest on?",
            options: ["Jacobs's own letters", "The publisher's contract file for the 1861 Boston edition", "Child's editorial correspondence with the Boston printing house", "A diary kept by Jacobs during her years of concealment in North Carolina"],
            correctIndex: 0,
            explanation: "Written under her own name, principally in the Post family papers, alongside other archives.",
            sourceLessonSlug: "how-yellin-settled-it",
          },
          {
            prompt: "Whose family papers were the most important single source?",
            options: ["Amy Post's", "Frederick Douglass's, at the newspaper office he ran in Rochester", "Harriet Beecher Stowe's, held with her literary manuscripts", "Lydia Maria Child's, deposited after her death in Boston"],
            correctIndex: 0,
            explanation: "Held at the University of Rochester, and containing working correspondence rather than literary artifacts.",
            sourceLessonSlug: "how-yellin-settled-it",
          },
          {
            prompt: "Which repository holds the Isaac and Amy Post family papers?",
            options: ["The University of Rochester", "The North Carolina State Archives, with the Horniblow records", "The Massachusetts Historical Society, in Boston", "Harvard University Library, alongside the 1987 edition's research files"],
            correctIndex: 0,
            explanation: "In its Rare Books, Special Collections and Preservation department.",
            sourceLessonSlug: "how-yellin-settled-it",
          },
          {
            prompt: "What general rule does this lesson draw about hidden authorship?",
            options: ["The record of the writing outlives the record of the credit", "A pseudonymous book can never be attributed with confidence", "Only a publisher's archive can settle who wrote a nineteenth-century book", "A subtitle claim is sufficient evidence of authorship if it is contemporaneous"],
            correctIndex: 0,
            explanation: "The answer is in the paperwork around the writing: letters, contracts, receipts, diaries, editorial files.",
            sourceLessonSlug: "how-yellin-settled-it",
          },
          {
            prompt: "In what year did Yellin publish the article in American Literature?",
            options: ["1981", "1987, in the same year as the Harvard University Press edition", "1861, contemporaneously with the book it concerns", "2004, following the publication of the Harriet Jacobs family papers"],
            correctIndex: 0,
            explanation: "Which is the argument entering the scholarly record where it can be checked and contested.",
            sourceLessonSlug: "how-yellin-settled-it",
          },
          {
            prompt: "In what year did Harvard University Press publish the edition Yellin edited?",
            options: ["1987", "1981, alongside the article that made the case", "1973, two centuries after the Wheatley attestation", "1861, as a simultaneous American and British issue"],
            correctIndex: 0,
            explanation: "That is the correction entering the catalogue, which is what a library, a bookseller and a student see.",
            sourceLessonSlug: "how-yellin-settled-it",
          },
          {
            prompt: "Why are both the article and the edition necessary?",
            options: ["One persuades scholars, the other changes the record", "Because a journal will not accept an argument without a companion edition", "Because copyright in the corrected attribution vests only on republication", "Because the two were addressed to American and British audiences separately"],
            correctIndex: 0,
            explanation: "Most readers meet a book through a catalogue entry rather than through a journal.",
            sourceLessonSlug: "how-yellin-settled-it",
          },
          {
            prompt: "What does this lesson say is the honest scale of a correction?",
            options: ["Years and several archives", "A single afternoon in the right special-collections reading room", "A letter to the publisher requesting a change to the title page", "An entry in a bibliography, which catalogues then copy automatically"],
            correctIndex: 0,
            explanation: "Which is why so few corrections happen: assembling the evidence is nobody's job and it is slow.",
            sourceLessonSlug: "how-yellin-settled-it",
          },
          {
            prompt: "In the section's table of the anatomy of a correction, what is the final stage?",
            options: ["The record is changed", "The argument is published in a peer-reviewed journal", "Documents are produced from an archive holding the author's letters", "A named person takes up the doubted claim and begins the research"],
            correctIndex: 0,
            explanation: "The 1987 Harvard edition, which is the step catalogues follow.",
            sourceLessonSlug: "how-yellin-settled-it",
          },
          {
            prompt: "What did the 1987 correction NOT do?",
            options: ["Discover something the book had not said", "Change the name a library catalogue carries for the work", "Attach documentary evidence to the author's real name", "Enter the corrected attribution into the scholarly record"],
            correctIndex: 0,
            explanation: "Jacobs had said Written by Herself in 1861 and Child had confirmed it on the next page.",
            sourceLessonSlug: "how-yellin-settled-it",
          },
          {
            prompt: "How does this lesson define a correction?",
            options: ["An indexable name, backed by evidence, published where records are made", "A public retraction issued by the institution that made the original error", "The discovery of a document nobody had previously known to exist", "A scholarly consensus reached without any single person's intervention"],
            correctIndex: 0,
            explanation: "Not a revelation, which is why the 1861 book's own statements were not enough on their own.",
            sourceLessonSlug: "how-yellin-settled-it",
          },
          {
            prompt: "Which course owns the general anatomy of a correction that this lesson maps onto?",
            options: ["CREDIT-00", "CREDIT-01, through its account of the United States patent record", "CREDIT-02, through the founding-year disagreement between two institutions", "CREDIT-03, through the three dates given for one portrait unveiling"],
            correctIndex: 0,
            explanation: "This course uses the anatomy rather than re-teaching it, and supplies a real case.",
            sourceLessonSlug: "how-yellin-settled-it",
          },
          {
            prompt: "What appears on the 1868 title page of Behind the Scenes after the author's name?",
            options: ["Formerly a slave, but more recently modiste", "Written by herself, in the formula Douglass had established", "Edited by James Redpath, of the New York publishing trade", "Published for the author, at her own expense and risk"],
            correctIndex: 0,
            explanation: "And friend to Mrs. Abraham Lincoln, which is the credential the book was sold on.",
            sourceLessonSlug: "keckley-doubted-and-punished",
          },
          {
            prompt: "What does the 1868 title page NOT carry?",
            options: ["A pseudonym or a subtitle claim", "The publisher's name and the place of publication", "The author's own name in the principal author position", "A description of the author's former trade and connections"],
            correctIndex: 0,
            explanation: "Keckley put her own name on the front of the book and let it stand.",
            sourceLessonSlug: "keckley-doubted-and-punished",
          },
          {
            prompt: "Who published Behind the Scenes?",
            options: ["G. W. Carleton & Co.", "Derby and Miller of Auburn, New York, as with Twelve Years a Slave", "Published for the Author, without a commercial imprint on the page", "Miller, Orton and Mulligan, the publisher of My Bondage and My Freedom"],
            correctIndex: 0,
            explanation: "In New York, in 1868, with the year set on the title page in roman numerals.",
            sourceLessonSlug: "keckley-doubted-and-punished",
          },
          {
            prompt: "What does Keckley say in her preface about exaggeration?",
            options: ["Nothing has been exaggerated", "That some incidents have been heightened for the sake of the narrative", "That her editor cautioned her against exaggeration and she accepted it", "That readers should allow for the failings of memory after many years"],
            correctIndex: 0,
            explanation: "She writes that everything she has written is strictly true and much has been omitted.",
            sourceLessonSlug: "keckley-doubted-and-punished",
          },
          {
            prompt: "According to Documenting the American South, what were Keckley's stated purposes?",
            options: ["To help Mrs. Lincoln financially and counter criticism of her", "To establish her own reputation as a writer independent of her trade", "To correct the published accounts of the President's assassination", "To raise funds for the home for destitute women she had helped found"],
            correctIndex: 0,
            explanation: "Which makes the reception of the book a straightforward failure of her own intentions.",
            sourceLessonSlug: "keckley-doubted-and-punished",
          },
          {
            prompt: "What did publishing the book cost Keckley professionally?",
            options: ["Her dressmaking career", "The copyright in her own text, which passed to her editor", "The friendship of the abolitionist community in Washington", "Her position at Wilberforce University, from which she was dismissed"],
            correctIndex: 0,
            explanation: "Along with condemnation from the Lincoln family, after overwhelming public disapproval.",
            sourceLessonSlug: "keckley-doubted-and-punished",
          },
          {
            prompt: "What had Keckley's business been built on, in this lesson's reading?",
            options: ["Discretion", "Exclusive access to imported fabrics unavailable to her competitors", "A federal contract to supply uniforms during the years of the war", "The patronage of a single client whose custom she could not replace"],
            correctIndex: 0,
            explanation: "And she spent it, which is why the byline was exposure as well as an asset.",
            sourceLessonSlug: "keckley-doubted-and-punished",
          },
          {
            prompt: "Who edited Behind the Scenes?",
            options: ["James Redpath", "L. Maria Child, who had edited Incidents seven years earlier", "David Wilson, the lawyer who had prepared Northup's narrative", "John E. Washington, whose own book appeared much later"],
            correctIndex: 0,
            explanation: "A journalist, whose level of involvement Documenting the American South calls a matter of speculation.",
            sourceLessonSlug: "keckley-doubted-and-punished",
          },
          {
            prompt: "How does Documenting the American South describe the text's authenticity?",
            options: ["Verifiable facts have affirmed it", "It cannot be established without the manuscript, which does not survive", "It is disputed by every scholar who has examined the book closely", "It rests entirely on the author's own assurances in her preface"],
            correctIndex: 0,
            explanation: "The same source calls Redpath's level of involvement speculation, and the course quotes both.",
            sourceLessonSlug: "keckley-doubted-and-punished",
          },
          {
            prompt: "What does this course refuse to supply about Redpath?",
            options: ["A proportion of the text", "The fact that he edited the book, which is not documented", "His occupation, which no source records with any certainty", "Any mention of him at all, since the allegation rests on rumour"],
            correctIndex: 0,
            explanation: "The record says an editor was involved and does not measure him, so inventing a measurement is the error.",
            sourceLessonSlug: "keckley-doubted-and-punished",
          },
          {
            prompt: "What is the honest output when the record does not name the writer of a passage?",
            options: ["That the record does not name the writer", "The most probable candidate, clearly marked as a probability", "The named editor, since an editor is the default writer of a memoir", "No statement at all, since an unresolved question should be omitted"],
            correctIndex: 0,
            explanation: "It is the rule this course spends six sections teaching people to apply.",
            sourceLessonSlug: "keckley-doubted-and-punished",
          },
          {
            prompt: "Why is Keckley the richest subject in this course?",
            options: ["Both mechanisms ran on her at once", "Because her book is the only one whose manuscript survives complete", "Because she is the only author here who was never enslaved as a child", "Because she published without any editor, publisher or intermediary"],
            correctIndex: 0,
            explanation: "Her authorship was doubted, and her authorship was punished, and neither settled the other.",
            sourceLessonSlug: "keckley-doubted-and-punished",
          },
          {
            prompt: "In the section's closing table, what was the outcome for Wheatley?",
            options: ["The byline paid", "The credit drifted to her publisher within a generation", "Her career ended and her authorship was still questioned", "Her authorship was corrected by a scholar a century later"],
            correctIndex: 0,
            explanation: "Reputation, advocates, manumission and an income she describes as entirely her own.",
            sourceLessonSlug: "keckley-doubted-and-punished",
          },
          {
            prompt: "In that table, what was the outcome for Jacobs?",
            options: ["Credit drifted to the editor for about a century", "Her career ended and the Lincoln family condemned her", "Her byline produced a manumission and a transatlantic reputation", "Her authorship was never doubted because of her subtitle claim"],
            correctIndex: 0,
            explanation: "A pseudonym beside a famous editor's name, and the record took the indexable one.",
            sourceLessonSlug: "keckley-doubted-and-punished",
          },
          {
            prompt: "What does this course say about the four disputed books by Black women in it?",
            options: ["They are the argument, not an addendum", "They are illustrative examples supporting a case made elsewhere", "They are the exceptions that prove the convention applied evenly", "They were selected to balance a body of evidence otherwise made of men"],
            correctIndex: 0,
            explanation: "Who ends up bylined has a different answer depending on who is asking to be believed.",
            sourceLessonSlug: "keckley-doubted-and-punished",
          },
          {
            prompt: "Keckley spent her final years in:",
            options: ["A home for destitute women she had helped establish", "The household of the Lincoln family, restored to their favour", "Wilberforce University, where she continued to teach until her death", "New York, working for the publisher that had issued her book"],
            correctIndex: 0,
            explanation: "She died there in 1907, having earlier taught at Wilberforce University.",
            sourceLessonSlug: "keckley-doubted-and-punished",
          },
          {
            prompt: "How does Keckley's preface anticipate criticism?",
            options: ["She asks that her explanation be read and weighed first", "She names the critics she expects and answers each in turn", "She states that criticism would prove the book's accuracy", "She attributes any offence to the decisions of her editor"],
            correctIndex: 0,
            explanation: "She writes that in writing as she has done she is well aware she has invited criticism.",
            sourceLessonSlug: "keckley-doubted-and-punished",
          },
          {
            prompt: "What does Keckley say about betraying confidence?",
            options: ["It was to place Mrs. Lincoln in a better light", "That she betrayed no confidence, since nothing private was published", "That her editor removed the passages most likely to give offence", "That any confidence was released by the events she describes"],
            correctIndex: 0,
            explanation: "Which is why the reception of the book was a failure of her own stated intentions.",
            sourceLessonSlug: "keckley-doubted-and-punished",
          },
          {
            prompt: "What is a discounted credit, in this lesson's terms?",
            options: ["Authorship formally held but not fully believed", "A collaborator credit set below the subject's name on a title page", "A royalty reduced because an editor shared in preparing the manuscript", "An attribution withdrawn by a publisher after the first printing"],
            correctIndex: 0,
            explanation: "Which is what a persistent doubt produces even without a rival claimant.",
            sourceLessonSlug: "keckley-doubted-and-punished",
          },
          {
            prompt: "The Jacobs case shows that a printed disclaimer is only as strong as:",
            options: ["Its position on the page", "The reputation of the person who wrote it", "The number of editions in which it is reprinted", "The legal force a publisher is willing to give it"],
            correctIndex: 0,
            explanation: "Child's sentence was plain, was in the book, and was skipped for about a century.",
            sourceLessonSlug: "linda-brent-and-the-editor",
          },
          {
            prompt: "What did Jacobs risk by naming herself?",
            options: ["She had escaped enslavement", "The loss of her publisher, who required anonymity by contract", "A libel action by the families described in the narrative", "Her position with the abolitionist societies that supported her"],
            correctIndex: 0,
            explanation: "Which is why the pseudonym was protective, and also why nothing indexable reached a catalogue.",
            sourceLessonSlug: "linda-brent-and-the-editor",
          },
          {
            prompt: "How many years separate Douglass's subtitle formula from Jacobs's use of it?",
            options: ["Sixteen", "Thirty-two, spanning the whole period of the narrative genre", "Eight, which is why the two books are usually discussed together", "Forty-one, which is why the formula had lost its force by 1861"],
            correctIndex: 0,
            explanation: "1845 and 1861, and by then the phrase was a convention of the genre.",
            sourceLessonSlug: "linda-brent-and-the-editor",
          },
          {
            prompt: "Where was Incidents in the Life of a Slave Girl published?",
            options: ["Boston, for the author", "New York, by G. W. Carleton and Company", "London, by a publisher of religious and antislavery works", "Rochester, at the press associated with Frederick Douglass's paper"],
            correctIndex: 0,
            explanation: "Published for the Author, in 1861, with Child named as editor.",
            sourceLessonSlug: "linda-brent-and-the-editor",
          },
          {
            prompt: "What kind of correspondence did Yellin find in the Post papers?",
            options: ["Working letters about writing the book", "Literary drafts of chapters later printed in Incidents", "Contracts between Jacobs and her Boston publisher", "Letters from Child describing her editorial changes"],
            correctIndex: 0,
            explanation: "Not literary artifacts: a woman discussing the writing of what became Incidents.",
            sourceLessonSlug: "how-yellin-settled-it",
          },
          {
            prompt: "Besides the Post papers, what other kinds of records did the authentication draw on?",
            options: ["State and local historical societies and North Carolina records", "The publisher's ledgers and the printer's surviving proof sheets", "Federal census returns for the years between 1840 and 1870 only", "The private papers of Lydia Maria Child and Harriet Beecher Stowe"],
            correctIndex: 0,
            explanation: "Which is why the work took years rather than weeks.",
            sourceLessonSlug: "how-yellin-settled-it",
          },
          {
            prompt: "What is the one thing the 1861 book could not supply for itself?",
            options: ["A real name attached to documents", "A statement that the author had written it herself", "An editor's confirmation that the language was the author's", "A publisher willing to issue it under the author's own direction"],
            correctIndex: 0,
            explanation: "In a place the catalogue would copy, which is what the 1987 edition finally provided.",
            sourceLessonSlug: "how-yellin-settled-it",
          },
          {
            prompt: "Which stage of a correction does a journal article accomplish?",
            options: ["Entering the scholarly record where it can be contested", "Changing what a library catalogue records as the work's author", "Producing the documents on which the argument will rest", "Persuading the original publisher to reissue the corrected book"],
            correctIndex: 0,
            explanation: "The catalogue change requires the edition, which is the separate 1987 step.",
            sourceLessonSlug: "how-yellin-settled-it",
          },
          {
            prompt: "In which journal did the 1981 article appear?",
            options: ["American Literature", "The Journal of Negro History, in its final decade of publication", "The William and Mary Quarterly, in a special issue on slavery", "The New England Quarterly, alongside other work on Boston printing"],
            correctIndex: 0,
            explanation: "Under the title Written by Herself, borrowing Jacobs's own subtitle for the argument.",
            sourceLessonSlug: "how-yellin-settled-it",
          },
          {
            prompt: "What is notable about the title Yellin gave her 1981 article?",
            options: ["It is the book's own subtitle", "It names the editor whose attribution she was displacing", "It borrows the phrase Douglass had used in 1845 rather than Jacobs's", "It states the pseudonym under which the book had been catalogued"],
            correctIndex: 0,
            explanation: "Written by Herself is what the 1861 title page had said all along.",
            sourceLessonSlug: "how-yellin-settled-it",
          },
          {
            prompt: "Which best describes the relationship between Keckley's doubt and Keckley's punishment?",
            options: ["Neither resolved the other", "The doubt caused the punishment by exposing her to ridicule", "The punishment settled the doubt by confirming she had written it", "The doubt protected her, since a disputed book drew less attention"],
            correctIndex: 0,
            explanation: "She paid the full price of the byline and received a discounted version of the credit.",
            sourceLessonSlug: "keckley-doubted-and-punished",
          },
          {
            prompt: "What is a modiste?",
            options: ["A dressmaker", "A lady's companion attached to a household in a paid capacity", "A seamstress employed by a commercial workshop rather than privately", "A milliner specialising in hats rather than in gowns and dresses"],
            correctIndex: 0,
            explanation: "The trade named on Keckley's own title page, and the business the book destroyed.",
            sourceLessonSlug: "keckley-doubted-and-punished",
          },
          {
            prompt: "What does the Keckley case add to Section 1's claim that a byline pays?",
            options: ["The other side of the same ledger", "A counterexample showing that bylines never pay for a memoirist", "A demonstration that a fee is always safer than a share of royalties", "Proof that a byline pays only when an editor is also credited"],
            correctIndex: 0,
            explanation: "A byline is exposure as well as an asset, and what it pays depends on who may write about whom.",
            sourceLessonSlug: "keckley-doubted-and-punished",
          },
          {
            prompt: "After leaving dressmaking, where did Keckley teach?",
            options: ["Wilberforce University", "Howard University, in the years after its foundation in Washington", "Hampton Institute, in the department of domestic economy", "Oberlin College, at the invitation of its abolitionist trustees"],
            correctIndex: 0,
            explanation: "She left Washington in 1892, and declining health later forced her return.",
            sourceLessonSlug: "keckley-doubted-and-punished",
          },
          {
            prompt: "Which of these three books carries no editor's name on its title page?",
            options: ["Behind the Scenes", "Incidents in the Life of a Slave Girl, published for the author", "Twelve Years a Slave, issued by Derby and Miller at Auburn", "Poems on Various Subjects, printed for Archibald Bell in London"],
            correctIndex: 0,
            explanation: "Redpath's involvement is documented elsewhere, and it is not on the page.",
            sourceLessonSlug: "keckley-doubted-and-punished",
          },
          {
            prompt: "What did Jacobs put on her own title page that Keckley did not?",
            options: ["A subtitle claim", "Her own real name in the principal author position", "The name of the publisher who issued the volume", "A description of her former condition and trade"],
            correctIndex: 0,
            explanation: "Written by Herself, in Douglass's formula, alongside a pseudonym and an editor's name.",
            sourceLessonSlug: "keckley-doubted-and-punished",
          },
          {
            prompt: "The three outcomes in the section's table differ most according to:",
            options: ["Whose name the record could index", "Which decade of the nineteenth century each book appeared in", "Whether the book was published in Britain or the United States", "Whether the author had been enslaved at the time of publication"],
            correctIndex: 0,
            explanation: "A propped name, an unindexable pseudonym beside a famous editor, and an unqualified name that was punished.",
            sourceLessonSlug: "keckley-doubted-and-punished",
          },
          {
            prompt: "Why does this course quote Documenting the American South rather than paraphrasing it on Redpath?",
            options: ["The hedge is the substance", "Because paraphrase would infringe the institution's rights in the summary", "Because no other institution has published a view on the question", "Because the summary is the only surviving account of Redpath's role"],
            correctIndex: 0,
            explanation: "Speculation about his involvement, and verifiable facts affirming the text's authenticity, are both load-bearing.",
            sourceLessonSlug: "keckley-doubted-and-punished",
          },
          {
            prompt: "What made Jacobs's book indexable after 1987?",
            options: ["A real author's name in a scholarly edition", "The removal of the pseudonym from the reprinted text", "The addition of a certificate of authorship to the front matter", "A decision by the Library of Congress to recatalogue the 1861 printing"],
            correctIndex: 0,
            explanation: "Which is the whole practical content of a correction, once the evidence exists.",
            sourceLessonSlug: "how-yellin-settled-it",
          },
          {
            prompt: "Which is the best short statement of why corrections are rare?",
            options: ["Assembling the evidence is nobody's job", "Publishers refuse to reissue books with corrected attributions", "Archives restrict access to the papers that would settle the questions", "Scholars have no professional incentive to reattribute an old book"],
            correctIndex: 0,
            explanation: "The evidence for an unrecorded author is slow to assemble and belongs to no one's role.",
            sourceLessonSlug: "how-yellin-settled-it",
          },
          {
            prompt: "What did Child say she had no reason to change?",
            options: ["The author's way of telling her own story", "The order of the chapters as the author had first arranged them", "The names of the people and places described in the narrative", "The claim on the title page that the book was written by herself"],
            correctIndex: 0,
            explanation: "She calls it lively and dramatic, which is a description of an author's manner rather than a claim on it.",
            sourceLessonSlug: "linda-brent-and-the-editor",
          },
          {
            prompt: "Given one indexable name and one unindexable name on a book, the record takes:",
            options: ["The indexable one", "Neither, and catalogues the work as anonymous until the question is settled", "Both, recording the work under a joint authorship entry", "The one printed in the larger typeface on the title page"],
            correctIndex: 0,
            explanation: "Which is the mechanism of attribution drift, and it requires nobody to act badly.",
            sourceLessonSlug: "linda-brent-and-the-editor",
          },
          {
            prompt: "What did Keckley have that Jacobs did not, on the evidence of the two title pages?",
            options: ["Her own name on the book", "An editor named in a credit position on the title page", "A subtitle claiming the book was written by herself", "A publisher willing to issue the book at its own expense"],
            correctIndex: 0,
            explanation: "And it did not spare her the doubt, which is why the two cases belong in one section.",
            sourceLessonSlug: "keckley-doubted-and-punished",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 6 — The trade now, and who ends up ghostwriting
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "as-told-to-in-the-modern-trade",
      title: "21 · The rung on the ladder",
      section: "Section 6 · The trade now, and who ends up ghostwriting",
      body: `Everything so far has been out of copyright. Now the present tense, and the first thing to notice is that the mechanism did not go anywhere. It got a vocabulary.

**Modern publishing has a credit ladder, and the rungs have names.** From the top:

| Rung | What it says | What the writer gets |
| --- | --- | --- |
| Joint byline: "A and B" | Two authors | Full credit, indexed under both |
| "with B" | A collaborator | Named on the cover, usually smaller |
| "as told to B" | A collaborator who wrote it | Named, and the arrangement disclosed |
| "with the assistance of B" | Assistance, unspecified | Named, scope undefined |
| Acknowledgements | Thanks | A line inside the book |
| Nothing | A ghost | A fee |

**Every one of those is a real position and the differences are not cosmetic.** A name on a cover is indexed by a catalogue; a name in the acknowledgements is not. A name in a catalogue is searchable forever; a line of thanks is findable only by someone already holding the book. That is the same legibility argument that decided the Jacobs case, running in the present.

**Now a worked example, and it contains a correction.**

*The Autobiography of Malcolm X* is the most widely known collaboration in American publishing, and almost everyone repeats its credit line as **"as told to Alex Haley."** The Internet Archive's copy of the Grove Press edition is catalogued from its own title page as: **"The autobiography of Malcolm X; with the assistance of Alex Haley"** (Internet Archive, n.d.).

**That is a different rung.** "As told to" describes the arrangement: this person spoke, that person wrote. "With the assistance of" describes a contribution of unspecified scope. Between them sits a real question about what the book says Haley did, and the popular version has quietly promoted the credit to a clearer rung than the title page granted.

**This course reports the title page.** Not because the distinction is precious, but because it is the exact error the whole course is about: a credit line remembered as tidier than it was. If a phrase this famous drifts, phrases nobody is watching drift further.

**One honest wrinkle, reported rather than smoothed.** The book is generally dated 1965, and the Internet Archive copy is catalogued as Grove Press, 1966, which is the kind of first-printing-versus-later-printing discrepancy this catalog reports instead of choosing. It is filed as an open question.

**What the modern ladder adds that the nineteenth century did not have.** The rungs are **named**, which makes credit gradable. In 1861 you could not say what position Child occupied except by reading her introduction. Today a reader can look at a cover and say which rung a collaborator is on, compare it against another book, and notice when the same person is on a lower rung than their contribution suggests.

**And that is the useful skill, so make it explicit.** When you pick up a collaborative book, ask three questions in order:

1. **Is there a second name at all?** If not, either one person wrote it or a ghost was paid.
2. **Where is it?** Cover, title page, copyright page, acknowledgements. Each is a different amount of permanence.
3. **What connecting word?** "And", "with", "as told to", "assistance of". The word is the disclosure.

:::reveal According to the Internet Archive's catalogued copy, what phrase does the title page of the Grove Press Autobiography of Malcolm X carry? ||| With the assistance of Alex Haley, which is a different rung from the "as told to Alex Haley" that is almost always repeated.

:::reveal Why does a name on a cover differ in kind from a name in the acknowledgements? ||| A cover name is indexed by catalogues and searchable forever; a line of thanks is findable only by someone already holding the book.

## Vocabulary
- **Credit ladder**: the ranked, named positions a collaborator can occupy in modern publishing, from a joint byline down to nothing.
- **Connecting word**: the term joining two names on a book ("and", "with", "as told to"), which is the actual disclosure of the arrangement.
- **Gradable credit**: credit that can be compared between books because the positions have standard names, which the nineteenth century lacked.
- **Credit promotion**: the drift by which a remembered credit line becomes tidier or higher than the one actually printed.

## Sources
Internet Archive. (n.d.). *The autobiography of Malcolm X; with the assistance of Alex Haley* [Catalogue record]. https://archive.org/details/autobiographyofm00xmal`,
    },
    {
      slug: "what-the-record-does-not-name",
      title: "22 · What the record does not name",
      section: "Section 6 · The trade now, and who ends up ghostwriting",
      body: `Here is the point in a ghostwriting course where you expect a list. Which famous book was really written by whom. This course does not have one, and the refusal is the lesson rather than a gap in the research.

**The reason is simple and it is the same reason Section 4 would not measure David Wilson's hand.** Most modern ghostwriting attributions in public circulation rest on inference: a stylistic impression, an unnamed source, a publishing rumour, a writer's schedule that happens to line up with a book. **None of that is evidence of who wrote a manuscript**, and a course that repeated it would be doing exactly what it spends six sections training people to catch.

**And the incentives run the wrong way.** A ghostwriting arrangement is normally covered by a confidentiality term, which means the people who could confirm it are contractually silent and the people who are free to speculate know least. A field where the informed are silent and the uninformed are loud produces a lot of confident wrong answers.

**So the discipline is to ask what would actually settle it.** Four things would, and they are all documentary:

1. **The book's own front matter.** An acknowledgements page naming a collaborator, or a copyright page, is a statement the publisher stands behind. This is why Section 6 opened with the ladder: reading the page is the first move, not the last resort.
2. **The copyright registration.** United States copyright records are public, and the Copyright Office maintains searchable systems covering registrations from 1978 to the present, along with historical records reaching back to 1790 (U.S. Copyright Office, n.d.). A registration names an author and a claimant. It will not tell you who typed the sentences, and it will tell you what was formally asserted, by whom, and when.
3. **The writer's own statement**, once they are free to make one. This is the most common way a real attribution becomes public, and it is worth more than any amount of stylistic analysis because it comes from a party to the agreement.
4. **The contract**, which almost never surfaces, and which is the only document that settles the question completely.

**Now recall Lesson 1, because the statute anticipated this exact situation.** Under 17 U.S.C. § 302(c), if the identity of the author of an anonymous or pseudonymous work is revealed in the registration records, the copyright term switches to the life-of-the-author basis. **The law provides a channel for a name to arrive late, and the channel is a public record.** That is the mechanism by which a hidden authorship can become a documented one without anybody speculating.

**What this course prints instead of a list.**

- Where a collaborator is named on the book, this course reads the rung and says what the page says.
- Where the record does not name a writer, this course says **the record does not name the writer**, and treats that as a finding about the arrangement rather than a hole in the reporting.
- Where a claim is contested, it names who holds each position and does not adjudicate from a distance.

**And here is why that is not a cop-out.** The interesting fact about modern ghostwriting is not the identity of any individual ghost. It is the **shape of the whole trade**: that a large share of the books on a bestseller list were written by people whose names are not on them, that this is contractually normal, and that the arrangement is nearly invisible to the reading public. **You do not need a single name to establish any of that**, and a list of names would obscure it, because it would turn a structural fact into gossip about individuals.

**The structural question is the one worth carrying out of this course**, and the last lesson asks it directly.

:::reveal Why does this course refuse to publish a list of who ghostwrote which modern book? ||| Because most such attributions rest on inference, unnamed sources and stylistic impression, none of which is evidence of who wrote a manuscript.

:::reveal Name two documentary things that would actually settle a ghostwriting attribution. ||| The book's own front matter or copyright page, the public copyright registration, the writer's own statement once free to make it, or the contract itself.

## Vocabulary
- **Inference-based attribution**: a claim about who wrote a book resting on style, timing or rumour rather than on a document, which this course does not print.
- **Confidentiality term**: the contractual clause that silences the people best placed to confirm a ghostwriting arrangement.
- **Copyright registration**: a public record naming an author and a claimant, which documents what was formally asserted and by whom.
- **Structural fact**: a finding about how a whole trade is arranged, which does not require identifying any individual and which a list of names would obscure.

## Sources
Copyright Act of 1976, 17 U.S.C. § 302(c) (duration; revelation of identity). https://www.law.cornell.edu/uscode/text/17/302

U.S. Copyright Office. (n.d.). *Public records*. https://www.copyright.gov/public-records/`,
    },
    {
      slug: "who-ends-up-ghostwriting",
      title: "23 · Who ends up ghostwriting",
      section: "Section 6 · The trade now, and who ends up ghostwriting",
      body: `The question this course has been building toward, stated plainly: **who ends up ghostwriting, and who ends up bylined?**

**Start by conceding what the evidence will not carry.** This course cannot give you a demographic breakdown of the ghostwriting trade, because the trade is confidential by design and nobody holds that register. Anyone who quotes you a percentage is estimating. That is not a rhetorical hedge, it is the finding: **an occupation defined by contractual invisibility cannot be counted**, and being uncountable is itself a disadvantage, because you cannot argue about a pay gap in a workforce that has no published size.

**But the eight books in this course do carry an argument, and it is this.**

Every author here had to solve a problem that an unquestioned author does not have. Wheatley needed eighteen signatures. Douglass needed a subtitle, a preface and a letter. Jacobs needed a pseudonym for safety and a famous editor for standing, and paid for both by losing her name for a century. Keckley took the byline unqualified and lost her livelihood. Northup's book was written by his editor. Fisher's was written by somebody nobody recorded. Omar ibn Said wrote his own and reached readers only through translations that a 2023 edition says needed correcting.

**Eight books, eight different arrangements, one constant: the byline was not simply available.** It had to be bought, propped, argued for, risked, or done without. That is what "who ends up ghostwriting" looks like when you can actually see the paperwork.

**Now the mechanism, stated so it transfers.** A byline is granted by whoever is buying, and it is granted on a judgment about **whose name sells and whose name is believed**. Those two judgments are where every pattern in this course comes from. They explain Bell's certificate, Garrison's preface, the drift toward Child, and the modern decision to put a celebrity's name on a book somebody else wrote. Nobody in that chain has to hold a bad opinion. They only have to make a commercial estimate of what a name is worth, in a market that has its own history.

**Which is why the fix is never "be fairer to ghosts."** The ghost was paid what was agreed. The fix, where there is one, is at the point where the rung is assigned:

- **Name the collaborator on the cover** rather than in the acknowledgements, which converts a thank-you into a catalogue entry.
- **Use the accurate connecting word.** "As told to" and "with the assistance of" describe different work, and choosing the honest one costs nothing.
- **Let the writer speak later.** A confidentiality term that never expires makes a permanent record of nothing.

**The ledger: what this course tested and refused to print.**

- **That ghostwriting is a theft.** Refused. Every ghostwriter is unnamed by agreement and paid for it, exactly as every master printer is unsigned (CREDIT-02) and every employee designer is off the door (CREDIT-03). This is the third time the series has made this correction.
- **An in-person interrogation of Phillis Wheatley by the eighteen signers.** Refused. Revolutionary Spaces reports it as speculation and reports current scholarship as finding it unlikely.
- **That Abby Fisher dictated her book to the nine friends named in its front matter.** Refused against the book itself. That list sits under a heading about referring readers to friends by permission. It is a reference list.
- **A proportion of Twelve Years a Slave attributable to David Wilson.** Refused. Scholars have measured his hand and disagreed.
- **A proportion of Behind the Scenes attributable to James Redpath.** Refused. Documenting the American South calls his level of involvement speculation and says verifiable facts have affirmed the text's authenticity, and this course quotes both rather than improving on either.
- **Any modern ghostwriting attribution resting on inference.** Refused, and Lesson 22 explains why at length.
- **A count or demographic profile of the ghostwriting trade.** Refused. Nobody holds that register.

**What this course does claim**, and every item is checkable in a free digitised source: that the attestation is bound into Wheatley's 1773 front matter and carries eighteen names; that Garrison's 1845 preface names employing someone else and rules it out; that Child disclaimed authorship in print in 1861 and the book was read as hers anyway; that Yellin corrected it from Jacobs's own letters, in 1981 and 1987; that Keckley's career ended over her byline; and that the title page of the Grove Press *Autobiography of Malcolm X* says "with the assistance of."

**Go and read a title page.** That is the whole method, and it has not changed in two hundred and fifty years.

:::reveal Why can this course not give a demographic profile of the ghostwriting trade, and why is that itself a finding? ||| Because the trade is confidential by design and nobody holds that register, and an occupation that cannot be counted cannot argue about its own pay or composition.

:::reveal What is the one constant across all eight books in this course? ||| The byline was never simply available: it had to be bought, propped, argued for, risked, or done without.

## Vocabulary
- **Contractual invisibility**: the condition of a trade whose practitioners are unnamed by agreement, which makes the workforce uncountable and therefore hard to argue about.
- **Whose name sells and whose name is believed**: the two commercial judgments that assign a byline, and the source of every pattern this course documents.
- **Rung assignment**: the moment at which a publisher decides where a collaborator's name goes, which is the point where a credit outcome is actually set.
- **The ledger**: a course's published list of claims it tested and declined to print, with the reason for each.

## Sources
Documenting the American South. (n.d.). *Summary of Behind the Scenes, or, Thirty years a slave, and four years in the White House*. University of North Carolina at Chapel Hill. https://docsouth.unc.edu/neh/keckley/summary.html

Revolutionary Spaces. (n.d.). *How Phillis Wheatley might have obtained the approval of eighteen prominent white men of Boston to publish her book of poetry*. https://revolutionaryspaces.org/explore/exhibits/imagining-the-age-of-phillis/how-phillis-wheatley-might-have-obtained-the-approval-of-eighteen-prominent-white-men-of-boston-to-publish-her-book-of-poetry/

University of North Carolina at Chapel Hill. (n.d.). *Other resources: Omar ibn Said materials at Wilson Special Collections Library*. UNC Libraries. https://guides.lib.unc.edu/omar-ibn-said/other-resources`,
    },
    {
      slug: "quiz-the-trade-now",
      title: "24 · Knowledge check: the trade now",
      section: "Section 6 · The trade now, and who ends up ghostwriting",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What sits at the bottom of the modern credit ladder?",
            options: ["Nothing, and a fee", "A line of thanks printed inside the acknowledgements", "The phrase with the assistance of, printed on the title page", "A joint byline in which both names appear in the same size type"],
            correctIndex: 0,
            explanation: "That is the ghost: no name anywhere, and payment instead.",
            sourceLessonSlug: "as-told-to-in-the-modern-trade",
          },
          {
            prompt: "What does a cover credit give a collaborator that an acknowledgement does not?",
            options: ["A catalogue entry", "A larger share of the royalties earned by the finished book", "Legal standing to prevent the book being revised without consent", "The right to be consulted about later editions and translations"],
            correctIndex: 0,
            explanation: "A catalogue entry is searchable forever; a line of thanks is findable only by someone holding the book.",
            sourceLessonSlug: "as-told-to-in-the-modern-trade",
          },
          {
            prompt: "Which rung does the phrase \"as told to\" describe?",
            options: ["A collaborator who wrote it, with the arrangement disclosed", "Two authors of equal standing indexed under both their names", "An assistant whose contribution is deliberately left unspecified", "A subject who wrote the book without any collaborator at all"],
            correctIndex: 0,
            explanation: "This person spoke and that person wrote, which is the arrangement stated on the page.",
            sourceLessonSlug: "as-told-to-in-the-modern-trade",
          },
          {
            prompt: "What phrase does the title page of the Grove Press Autobiography of Malcolm X carry?",
            options: ["With the assistance of Alex Haley", "As told to Alex Haley, in the standard collaboration formula", "By Malcolm X and Alex Haley, in a joint byline of equal weight", "Edited by Alex Haley, with an introduction by M. S. Handler"],
            correctIndex: 0,
            explanation: "The Internet Archive's copy is catalogued from that title page, and it is a different rung from the remembered one.",
            sourceLessonSlug: "as-told-to-in-the-modern-trade",
          },
          {
            prompt: "How does \"with the assistance of\" differ from \"as told to\"?",
            options: ["It leaves the scope unspecified", "It places the collaborator above the subject on the title page", "It indicates the collaborator held the copyright in the finished text", "It is used only when the subject is deceased at the time of publication"],
            correctIndex: 0,
            explanation: "As told to describes the arrangement; assistance describes a contribution of undefined size.",
            sourceLessonSlug: "as-told-to-in-the-modern-trade",
          },
          {
            prompt: "What does this course call the drift by which a remembered credit becomes tidier than the printed one?",
            options: ["Credit promotion", "Attribution drift, the same mechanism that operated on the Jacobs book", "Ghostwriting, since the actual arrangement is concealed from readers", "Authentication, since the tidier version is easier for readers to accept"],
            correctIndex: 0,
            explanation: "If a phrase this famous drifts, phrases nobody is watching drift further.",
            sourceLessonSlug: "as-told-to-in-the-modern-trade",
          },
          {
            prompt: "What discrepancy does this lesson report rather than resolve?",
            options: ["The book's year, 1965 against a copy catalogued 1966", "Whether Haley wrote the epilogue or the introduction to the volume", "Whether the publisher was Grove Press or another New York house", "Whether the title page names Haley at all in the first printing"],
            correctIndex: 0,
            explanation: "A first-printing against later-printing question, filed as an open question rather than chosen.",
            sourceLessonSlug: "as-told-to-in-the-modern-trade",
          },
          {
            prompt: "What does the modern ladder add that the nineteenth century lacked?",
            options: ["Named rungs, which make credit gradable", "A legal requirement that every contributor be identified in print", "A trade body that adjudicates disputes between authors and collaborators", "A public register recording every collaboration agreement in the industry"],
            correctIndex: 0,
            explanation: "In 1861 you could not say what position Child occupied except by reading her introduction.",
            sourceLessonSlug: "as-told-to-in-the-modern-trade",
          },
          {
            prompt: "What is the first of the three questions to ask of a collaborative book?",
            options: ["Is there a second name at all", "Which of the two people contributed the larger share of the text", "Whether the publisher discloses the terms of the collaboration agreement", "How the royalties were divided between the subject and the collaborator"],
            correctIndex: 0,
            explanation: "If there is not, either one person wrote it or a ghost was paid.",
            sourceLessonSlug: "as-told-to-in-the-modern-trade",
          },
          {
            prompt: "In the three questions, what is the connecting word treated as?",
            options: ["The disclosure", "A stylistic choice made by the publisher's design department", "A legal term of art with a defined meaning in publishing contracts", "An indication of the order in which the two people were engaged"],
            correctIndex: 0,
            explanation: "And, with, as told to, assistance of: each states a different arrangement.",
            sourceLessonSlug: "as-told-to-in-the-modern-trade",
          },
          {
            prompt: "Which locations does the second question distinguish between?",
            options: ["Cover, title page, copyright page, acknowledgements", "Hardcover, paperback, book-club and export editions of one title", "The publisher's catalogue, the trade press and the library record", "The dust jacket flap, the spine and the back-cover description"],
            correctIndex: 0,
            explanation: "Each is a different amount of permanence for a collaborator's name.",
            sourceLessonSlug: "as-told-to-in-the-modern-trade",
          },
          {
            prompt: "Which argument from the Jacobs case runs again in the modern ladder?",
            options: ["Legibility", "Authentication, since a famous name still vouches for an unknown one", "Fidelity, since the collaborator may change what the subject said", "Manumission, since a byline can change an author's legal standing"],
            correctIndex: 0,
            explanation: "A name a catalogue can carry outlasts a name only a reader of the book will ever see.",
            sourceLessonSlug: "as-told-to-in-the-modern-trade",
          },
          {
            prompt: "Why does this course not publish a list of who ghostwrote which modern book?",
            options: ["Such attributions rest on inference", "Because publishers would bring legal action against any such list", "Because ghostwriters have asked the catalog not to identify them", "Because the question is settled and a list would teach nothing new"],
            correctIndex: 0,
            explanation: "Style, timing, unnamed sources and rumour are not evidence of who wrote a manuscript.",
            sourceLessonSlug: "what-the-record-does-not-name",
          },
          {
            prompt: "Why do the incentives in ghostwriting run the wrong way for public knowledge?",
            options: ["The informed are contractually silent", "Because publishers pay more for books whose authorship is disputed", "Because collaborators are legally barred from ever discussing their work", "Because readers prefer the version of a book with a single author's name"],
            correctIndex: 0,
            explanation: "A field where the informed are silent and the uninformed are loud produces confident wrong answers.",
            sourceLessonSlug: "what-the-record-does-not-name",
          },
          {
            prompt: "Which of these would actually settle a ghostwriting attribution?",
            options: ["The contract", "A close stylistic comparison against the named author's other work", "The publisher's willingness to confirm or deny it when asked directly", "The collaborator's presence in the same city during the writing period"],
            correctIndex: 0,
            explanation: "It almost never surfaces, and it is the only document that settles the question completely.",
            sourceLessonSlug: "what-the-record-does-not-name",
          },
          {
            prompt: "What does a copyright registration name?",
            options: ["An author and a claimant", "Every person who contributed text to the registered work", "The number of hours each contributor worked on the manuscript", "The terms on which the parties agreed to divide the royalties"],
            correctIndex: 0,
            explanation: "It records what was formally asserted, by whom and when, not who typed the sentences.",
            sourceLessonSlug: "what-the-record-does-not-name",
          },
          {
            prompt: "What period do the Copyright Office's searchable systems cover, per its public records page?",
            options: ["1978 to the present, plus historical records reaching back to 1790", "Only registrations made since the Copyright Act of 1976 took effect", "Only works published in the United States after the year 2000", "Nothing before 1945, since earlier records were never digitised"],
            correctIndex: 0,
            explanation: "Which makes a formal authorship assertion a public and checkable fact.",
            sourceLessonSlug: "what-the-record-does-not-name",
          },
          {
            prompt: "Which statutory provision gives a hidden authorship a route into the public record?",
            options: ["17 U.S.C. § 302(c)", "17 U.S.C. § 101's definition of a work made for hire", "The Visual Artists Rights Act's provisions on attribution", "The Lanham Act's prohibition on false designation of origin"],
            correctIndex: 0,
            explanation: "If the identity is revealed in the registration records, the term switches to the life-of-the-author basis.",
            sourceLessonSlug: "what-the-record-does-not-name",
          },
          {
            prompt: "Which source is the most valuable for a real modern attribution becoming public?",
            options: ["The writer's own statement", "A journalist's reconstruction from publishing-industry sources", "A textual analysis comparing the book against the named author's speech", "A publisher's off-the-record confirmation given to a trade publication"],
            correctIndex: 0,
            explanation: "It comes from a party to the agreement, which no amount of stylistic analysis can match.",
            sourceLessonSlug: "what-the-record-does-not-name",
          },
          {
            prompt: "What does this course print where the record does not name a writer?",
            options: ["That the record does not name the writer", "The most probable candidate, flagged clearly as an estimate", "Nothing at all, omitting the book from the course entirely", "The named editor, treated as the presumed author by default"],
            correctIndex: 0,
            explanation: "It is a finding about the arrangement rather than a hole in the reporting.",
            sourceLessonSlug: "what-the-record-does-not-name",
          },
          {
            prompt: "What does this lesson call the genuinely interesting fact about modern ghostwriting?",
            options: ["The shape of the whole trade", "The identity of the writers behind the largest political memoirs", "The proportion of a ghostwritten manuscript that survives editing", "The difference in fees paid to named and unnamed collaborators"],
            correctIndex: 0,
            explanation: "That it is contractually normal and nearly invisible to readers, which needs no individual names.",
            sourceLessonSlug: "what-the-record-does-not-name",
          },
          {
            prompt: "Why would a list of names obscure the structural fact?",
            options: ["It turns a structural fact into gossip about individuals", "Because most of the names on such a list would be inaccurate", "Because publishers would respond by concealing collaborations further", "Because the individuals named would have grounds to demand a retraction"],
            correctIndex: 0,
            explanation: "You do not need a single name to establish how the trade is arranged.",
            sourceLessonSlug: "what-the-record-does-not-name",
          },
          {
            prompt: "Which is the first move when assessing a collaborative book, per this lesson?",
            options: ["Read the book's own front matter", "Search the publishing trade press for reports of a collaboration", "Compare the prose against the named author's known writing", "Ask the publisher to confirm who prepared the manuscript"],
            correctIndex: 0,
            explanation: "An acknowledgements page or copyright page is a statement the publisher stands behind.",
            sourceLessonSlug: "what-the-record-does-not-name",
          },
          {
            prompt: "What silences the people best placed to confirm a ghostwriting arrangement?",
            options: ["A confidentiality term", "A statutory bar on disclosing authorship of a registered work", "A publishing convention forbidding collaborators from giving interviews", "The loss of copyright that would follow any public acknowledgement"],
            correctIndex: 0,
            explanation: "Which is why the informed are quiet and the speculation comes from people who know least.",
            sourceLessonSlug: "what-the-record-does-not-name",
          },
          {
            prompt: "Why can this course not give a demographic profile of the ghostwriting trade?",
            options: ["Nobody holds that register", "Because the relevant surveys are held privately by publishing houses", "Because the profile changes too quickly for any figure to stay accurate", "Because copyright records deliberately omit collaborators' identities"],
            correctIndex: 0,
            explanation: "The trade is confidential by design, so anyone quoting a percentage is estimating.",
            sourceLessonSlug: "who-ends-up-ghostwriting",
          },
          {
            prompt: "Why is being uncountable itself a disadvantage for a workforce?",
            options: ["You cannot argue about a pay gap in a workforce with no published size", "Because uncounted workers are excluded from statutory employment protections", "Because publishers set fees by reference to the published size of the trade", "Because an uncounted occupation cannot register a professional association"],
            correctIndex: 0,
            explanation: "An occupation defined by contractual invisibility cannot be counted, and the finding is the invisibility.",
            sourceLessonSlug: "who-ends-up-ghostwriting",
          },
          {
            prompt: "What is the constant across all eight books in this course?",
            options: ["The byline was never simply available", "Every author was enslaved at the time their book was published", "Every book required a certificate signed by people of higher standing", "Every author eventually recovered full credit during their own lifetime"],
            correctIndex: 0,
            explanation: "It had to be bought, propped, argued for, risked, or done without.",
            sourceLessonSlug: "who-ends-up-ghostwriting",
          },
          {
            prompt: "On what two judgments is a byline granted, per this lesson?",
            options: ["Whose name sells and whose name is believed", "How much the writer was paid and how long the work took", "Whether the writer is under contract and whether they hold copyright", "The length of the manuscript and the size of the intended print run"],
            correctIndex: 0,
            explanation: "Those two commercial estimates are where every pattern in this course comes from.",
            sourceLessonSlug: "who-ends-up-ghostwriting",
          },
          {
            prompt: "Does the mechanism require anyone in the chain to hold a bad opinion?",
            options: ["No", "Yes, since a decision about whose name sells is a judgment about people", "Yes, since publishers deliberately conceal collaborators from readers", "The question cannot be answered without seeing the contracts involved"],
            correctIndex: 0,
            explanation: "They need only make a commercial estimate of what a name is worth, in a market with its own history.",
            sourceLessonSlug: "who-ends-up-ghostwriting",
          },
          {
            prompt: "Why is the fix never \"be fairer to ghosts\"?",
            options: ["The ghost was paid what was agreed", "Because ghostwriters earn more than named collaborators on the same book", "Because fairness is not a standard any publishing contract can enforce", "Because ghostwriters choose anonymity and would refuse a named credit"],
            correctIndex: 0,
            explanation: "The fix is at the point where the rung is assigned, not after the fee is paid.",
            sourceLessonSlug: "who-ends-up-ghostwriting",
          },
          {
            prompt: "Which of these is one of the three fixes this lesson proposes?",
            options: ["Name the collaborator on the cover", "Require every ghostwriter to register as a joint author", "Set a minimum fee for unnamed collaboration on a trade book", "Publish an annual register of every ghostwriting agreement signed"],
            correctIndex: 0,
            explanation: "It converts a thank-you into a catalogue entry, which is the legibility argument again.",
            sourceLessonSlug: "who-ends-up-ghostwriting",
          },
          {
            prompt: "What does the lesson say a never-expiring confidentiality term produces?",
            options: ["A permanent record of nothing", "A higher fee, since permanent silence is worth more to a client", "A stronger copyright, since the work stays formally anonymous", "A legal presumption that the named author wrote the book"],
            correctIndex: 0,
            explanation: "Letting the writer speak later is the third of the three fixes.",
            sourceLessonSlug: "who-ends-up-ghostwriting",
          },
          {
            prompt: "In the ledger, what is the first claim tested and refused?",
            options: ["That ghostwriting is a theft", "That Phillis Wheatley was interrogated in person by eighteen men", "That Abby Fisher dictated her book to nine named friends", "That a proportion of Twelve Years a Slave can be assigned to Wilson"],
            correctIndex: 0,
            explanation: "The third time the series has made this correction, after the master printer and the employee designer.",
            sourceLessonSlug: "who-ends-up-ghostwriting",
          },
          {
            prompt: "Which claim did the course refuse against the book itself rather than against a secondary source?",
            options: ["The nine transcribers of Abby Fisher's cookbook", "The in-person interrogation of Phillis Wheatley in Boston", "The proportion of Behind the Scenes written by James Redpath", "The demographic profile of the modern ghostwriting trade"],
            correctIndex: 0,
            explanation: "The list sits under a heading about referring readers to friends by permission, so it is a reference list.",
            sourceLessonSlug: "who-ends-up-ghostwriting",
          },
          {
            prompt: "Why did the course refuse to assign a proportion of Twelve Years a Slave to David Wilson?",
            options: ["Scholars have measured his hand and disagreed", "Because Wilson's editor's preface expressly forbids such an estimate", "Because the manuscript does not survive in any form that permits it", "Because the question was settled by a scholarly edition in the 1960s"],
            correctIndex: 0,
            explanation: "The course reports the disagreement rather than picking a side it cannot defend.",
            sourceLessonSlug: "who-ends-up-ghostwriting",
          },
          {
            prompt: "How does the course handle the Redpath question in its ledger?",
            options: ["It quotes both of DocSouth's statements without improving on either", "It adopts the position that Redpath wrote most of the book", "It concludes the question is settled in Keckley's favour and closes it", "It omits the question, since no institution has taken a public position"],
            correctIndex: 0,
            explanation: "Speculation about his involvement, and verifiable facts affirming the text's authenticity, both stand.",
            sourceLessonSlug: "who-ends-up-ghostwriting",
          },
          {
            prompt: "Which of these does the course positively claim, as checkable in a free digitised source?",
            options: ["Garrison's 1845 preface names employing someone else and rules it out", "That Alex Haley wrote the majority of the Autobiography of Malcolm X", "That James Redpath wrote roughly half of Behind the Scenes in 1868", "That Abby Fisher's husband took down the recipes at her dictation"],
            correctIndex: 0,
            explanation: "Every item on the claims list can be checked in a digitised copy of the book it comes from.",
            sourceLessonSlug: "who-ends-up-ghostwriting",
          },
          {
            prompt: "What did Wheatley need that an unquestioned author would not?",
            options: ["Eighteen signatures", "A pseudonym to protect her from recapture after publication", "A translator to render her poems into the language of publication", "An amanuensis, since she could not write in the language she was published in"],
            correctIndex: 0,
            explanation: "Each of the eight authors had to solve a problem an unquestioned author does not have.",
            sourceLessonSlug: "who-ends-up-ghostwriting",
          },
          {
            prompt: "What did Jacobs pay for the pseudonym and the famous editor?",
            options: ["Her name for a century", "Her freedom, which the publisher made conditional on anonymity", "The copyright in the narrative, which passed to Lydia Maria Child", "Her livelihood, which ended when the book's authorship was disputed"],
            correctIndex: 0,
            explanation: "She needed the pseudonym for safety and the editor for standing, and lost the credit to the second.",
            sourceLessonSlug: "who-ends-up-ghostwriting",
          },
          {
            prompt: "What is the whole method this course closes on?",
            options: ["Go and read a title page", "Search the copyright registration record before trusting any byline", "Assume a collaborator wherever a memoir reads too fluently", "Wait for a scholarly edition before crediting any nineteenth-century book"],
            correctIndex: 0,
            explanation: "It has not changed in two hundred and fifty years.",
            sourceLessonSlug: "who-ends-up-ghostwriting",
          },
          {
            prompt: "Which two courses does the ledger name as having made the same correction before?",
            options: ["CREDIT-02 and CREDIT-03", "CREDIT-00 and CREDIT-01, which established the series vocabulary", "CREDIT-01 and CREDIT-02, on the patent record and the print shop", "CREDIT-00 and CREDIT-03, on archival silence and licensure"],
            correctIndex: 0,
            explanation: "Every master printer is unsigned and every employee designer is off the door, exactly as every ghost is unnamed.",
            sourceLessonSlug: "who-ends-up-ghostwriting",
          },
          {
            prompt: "What does choosing the accurate connecting word cost a publisher?",
            options: ["Nothing", "A share of the royalties otherwise payable to the named author", "A delay while the collaboration agreement is renegotiated", "The right to market the book under a single recognisable name"],
            correctIndex: 0,
            explanation: "As told to and with the assistance of describe different work, and the honest one is free.",
            sourceLessonSlug: "who-ends-up-ghostwriting",
          },
          {
            prompt: "Omar ibn Said's problem, in the ledger's summary, was that:",
            options: ["He reached readers only through translations later said to need correcting", "He could not write, so a member of the household took the manuscript down", "His name was removed from the manuscript by the family that held him", "No publisher would issue an autobiography written by an enslaved man"],
            correctIndex: 0,
            explanation: "He wrote his own, unaided, and the barrier between him and readers was language.",
            sourceLessonSlug: "who-ends-up-ghostwriting",
          },
          {
            prompt: "What happened to Keckley in the ledger's one-line summary?",
            options: ["She took the byline unqualified and lost her livelihood", "Her authorship was corrected by a scholar working from her letters", "She published under a pseudonym and was credited only a century later", "She was named on the cover in a subordinate collaboration credit"],
            correctIndex: 0,
            explanation: "And her authorship was doubted anyway, which is why she is the richest subject here.",
            sourceLessonSlug: "who-ends-up-ghostwriting",
          },
          {
            prompt: "The lesson says a percentage for the ghostwriting trade would be:",
            options: ["An estimate", "A trade secret protected by the publishers who hold it", "Available from the Copyright Office's public registration records", "Reliable, since collaboration agreements are filed with a trade body"],
            correctIndex: 0,
            explanation: "Nobody holds the register, because the arrangement is confidential by design.",
            sourceLessonSlug: "who-ends-up-ghostwriting",
          },
          {
            prompt: "Which rung sits directly above the acknowledgements on the ladder?",
            options: ["With the assistance of", "A joint byline naming both people as authors of the book", "As told to, which discloses the arrangement in full", "Nothing, since the acknowledgements are the lowest named position"],
            correctIndex: 0,
            explanation: "Named on the cover, with the scope of the contribution left undefined.",
            sourceLessonSlug: "as-told-to-in-the-modern-trade",
          },
          {
            prompt: "Which rung sits at the top of the ladder?",
            options: ["A joint byline", "The phrase as told to, which discloses the whole arrangement", "A credit on the copyright page naming a second claimant", "An introduction written and signed by the collaborator"],
            correctIndex: 0,
            explanation: "Two authors, indexed under both names, which is full credit.",
            sourceLessonSlug: "as-told-to-in-the-modern-trade",
          },
          {
            prompt: "What is the practical value of named rungs?",
            options: ["A reader can compare one book against another", "A publisher is legally bound to the position it prints", "A collaborator's fee is fixed by the rung they are placed on", "A catalogue automatically indexes every named contributor equally"],
            correctIndex: 0,
            explanation: "And notice when the same person is on a lower rung than their contribution suggests.",
            sourceLessonSlug: "as-told-to-in-the-modern-trade",
          },
          {
            prompt: "Why does this course report the Malcolm X title page rather than the remembered phrase?",
            options: ["It is the exact error the course is about", "Because the remembered phrase is offensive to the collaborator's family", "Because the publisher has asked for the printed wording to be used", "Because catalogues have recently corrected the record to match it"],
            correctIndex: 0,
            explanation: "A credit line remembered as tidier than it was, in the most famous collaboration in American publishing.",
            sourceLessonSlug: "as-told-to-in-the-modern-trade",
          },
          {
            prompt: "The mechanism this course studies, in the present tense, has:",
            options: ["A vocabulary it did not have before", "Disappeared, since modern contracts require full disclosure", "Been replaced by joint bylines across the whole trade", "Become a matter of public record through copyright registration"],
            correctIndex: 0,
            explanation: "It did not go anywhere; it got named rungs.",
            sourceLessonSlug: "as-told-to-in-the-modern-trade",
          },
          {
            prompt: "What kind of document is an acknowledgements page, in this lesson's terms?",
            options: ["A statement the publisher stands behind", "An informal courtesy with no evidentiary value whatever", "A legal instrument assigning a share of the copyright", "A record filed with the Copyright Office alongside the registration"],
            correctIndex: 0,
            explanation: "Which is why reading the page is the first move rather than the last resort.",
            sourceLessonSlug: "what-the-record-does-not-name",
          },
          {
            prompt: "A registration will NOT tell you:",
            options: ["Who typed the sentences", "Who was named as the author of the registered work", "Who was named as the claimant of the copyright", "When the registration was made"],
            correctIndex: 0,
            explanation: "It records a formal assertion, which is a different thing from a record of the writing.",
            sourceLessonSlug: "what-the-record-does-not-name",
          },
          {
            prompt: "Section 4 refused to measure David Wilson for the same reason Section 6 refuses a list. What is it?",
            options: ["Inference is not evidence of who wrote a manuscript", "Both questions were settled by scholars before this course was written", "Both subjects are protected by confidentiality terms still in force", "Neither book survives in a form that would permit a measurement"],
            correctIndex: 0,
            explanation: "A course that repeated inference would be doing what it trains people to catch.",
            sourceLessonSlug: "what-the-record-does-not-name",
          },
          {
            prompt: "How does the course treat a contested modern claim?",
            options: ["Names who holds each position and does not adjudicate from a distance", "Adopts the position held by the more reputable of the two sources", "Omits it, since a contested claim cannot be taught responsibly", "Reports it as settled once a majority of scholars have agreed"],
            correctIndex: 0,
            explanation: "The same discipline applied to the Redpath and Wilson questions in earlier sections.",
            sourceLessonSlug: "what-the-record-does-not-name",
          },
          {
            prompt: "What did Douglass need, in the ledger's summary of the eight books?",
            options: ["A subtitle, a preface and a letter", "Eighteen signatures from men of standing in his own town", "A pseudonym, because naming himself would have been unsafe", "A translator, because he published outside his own language"],
            correctIndex: 0,
            explanation: "Three separate authorship guarantees, for a man already among the best-known speakers in the country.",
            sourceLessonSlug: "who-ends-up-ghostwriting",
          },
          {
            prompt: "Northup's entry in the ledger reads:",
            options: ["His book was written by his editor", "His authorship was doubted and later restored by a scholar", "His name was removed from the book by agreement with the publisher", "He wrote it himself and was disbelieved by his contemporaries"],
            correctIndex: 0,
            explanation: "A dictated narrative, a named editor, and a signed preface disclosing the method.",
            sourceLessonSlug: "who-ends-up-ghostwriting",
          },
          {
            prompt: "Fisher's entry in the ledger reads:",
            options: ["Her book was written by somebody nobody recorded", "She dictated her book to the nine friends named in its front matter", "She wrote the book herself despite being unable to read", "Her authorship was disputed and settled by a scholarly edition"],
            correctIndex: 0,
            explanation: "The record does not name who held the pen, and that absence is the finding.",
            sourceLessonSlug: "who-ends-up-ghostwriting",
          },
          {
            prompt: "What is the ledger, as this course uses the term?",
            options: ["A published list of claims tested and declined, with reasons", "An index of every source consulted in preparing the course", "A record of the corrections made to the course since publication", "A summary of the arguments other scholars have made on the subject"],
            correctIndex: 0,
            explanation: "It is how a course shows its work on the things it decided not to say.",
            sourceLessonSlug: "who-ends-up-ghostwriting",
          },
          {
            prompt: "Where, per this lesson, is a credit outcome actually set?",
            options: ["At the moment the rung is assigned", "At the moment the fee is negotiated between the parties", "At the moment the copyright registration is filed with the Office", "At the moment the catalogue record is created by a library"],
            correctIndex: 0,
            explanation: "Which is why the fixes all concern the cover, the connecting word and the confidentiality term.",
            sourceLessonSlug: "who-ends-up-ghostwriting",
          },
          {
            prompt: "What is the honest concession this final lesson opens with?",
            options: ["The evidence will not support a profile of the trade", "The course's earlier refusals were more cautious than necessary", "The nineteenth-century cases cannot be compared with modern ones", "The credit ladder is a convention rather than a documented practice"],
            correctIndex: 0,
            explanation: "And the concession is itself the finding, because invisibility is what makes counting impossible.",
            sourceLessonSlug: "who-ends-up-ghostwriting",
          },
          {
            prompt: "How many books does the course say carry its closing argument?",
            options: ["Eight", "Four, all of them by Black women whose authorship was disputed", "Three, the ones examined in the section on the correction", "Eighteen, one for each signature on the Wheatley attestation"],
            correctIndex: 0,
            explanation: "Eight books, eight different arrangements, and one constant.",
            sourceLessonSlug: "who-ends-up-ghostwriting",
          },
          {
            prompt: "What does the course say about the market in which name judgments are made?",
            options: ["It has its own history", "It is efficient, so a name's price reflects its true commercial value", "It is regulated, so a publisher's discretion is narrower than it appears", "It is recent, so the patterns in this course do not apply to it"],
            correctIndex: 0,
            explanation: "Which is how a commercial estimate reproduces a pattern nobody in the chain intends.",
            sourceLessonSlug: "who-ends-up-ghostwriting",
          },
          {
            prompt: "Which document type does the course say almost never surfaces?",
            options: ["The contract", "The copyright registration for a collaborative work", "The publisher's acknowledgements page for a ghostwritten book", "The writer's own later statement about the arrangement"],
            correctIndex: 0,
            explanation: "And it is the only one that would settle a ghostwriting question completely.",
            sourceLessonSlug: "what-the-record-does-not-name",
          },
          {
            prompt: "What makes the modern arrangement nearly invisible to readers?",
            options: ["It is contractually normal and nothing on the book discloses it", "Publishers are prohibited by law from naming a paid collaborator", "Catalogues deliberately omit collaborators from their author fields", "Readers have no way to obtain the front matter of a modern book"],
            correctIndex: 0,
            explanation: "Which is the structural fact worth carrying out of the course.",
            sourceLessonSlug: "what-the-record-does-not-name",
          },
          {
            prompt: "The three fixes proposed in the final lesson all operate on:",
            options: ["Disclosure", "The fee paid to the unnamed writer of a trade book", "The copyright term applicable to an anonymous work", "The publisher's obligation to register the work formally"],
            correctIndex: 0,
            explanation: "The cover position, the connecting word, and whether the writer may ever speak.",
            sourceLessonSlug: "who-ends-up-ghostwriting",
          },
          {
            prompt: "In the ladder table, what does a collaborator get on the \"with B\" rung?",
            options: ["A cover name, usually smaller", "A separate entry in the catalogue under their own name only", "A share of the copyright registered alongside the named author's", "A signed statement in the front matter describing their contribution"],
            correctIndex: 0,
            explanation: "Named on the cover, below the subject, which is still a catalogue-visible position.",
            sourceLessonSlug: "as-told-to-in-the-modern-trade",
          },
          {
            prompt: "What does this course do with the 1965 against 1966 dating question?",
            options: ["Files it as an open question", "Adopts 1965, which is the year most sources give", "Adopts 1966, since that is the catalogued copy it read", "Omits the book, since the discrepancy cannot be resolved"],
            correctIndex: 0,
            explanation: "The same discipline the earlier sections applied to disagreements between institutions.",
            sourceLessonSlug: "as-told-to-in-the-modern-trade",
          },
          {
            prompt: "Why is reading the front matter described as the first move rather than the last resort?",
            options: ["It is the disclosure the publisher already made", "Because front matter is the only evidence a court will accept", "Because the copyright registration is not available to the public", "Because a collaborator is legally required to appear in it"],
            correctIndex: 0,
            explanation: "An acknowledgements or copyright page is a statement the publisher stands behind.",
            sourceLessonSlug: "what-the-record-does-not-name",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // FINAL — 43 pooled questions serving 10, across all 18 teaching lessons
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "final-exam-written-by-himself",
      title: "25 · Final assessment",
      section: "Final assessment",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 10,
        questions: [
          {
            prompt: "The organising claim of this whole course is that a byline is:",
            options: ["A contract term", "A verified report of who physically produced the manuscript", "A statement the publisher is legally obliged to check before printing", "A registration filed with the Copyright Office and audited before sale"],
            correctIndex: 0,
            explanation: "And the title page is where the publishing arrangement becomes visible to a reader.",
            sourceLessonSlug: "the-byline-is-a-contract-term",
          },
          {
            prompt: "Under 17 U.S.C. § 302(c), revealing an author's identity in the registration records:",
            options: ["Restores the life-of-the-author term", "Cancels the registration and requires a fresh application", "Leaves the flat term untouched, since it was fixed at publication", "Shortens the term to twenty-eight years from the revelation"],
            correctIndex: 0,
            explanation: "Which means the statute itself contains a procedure for a name arriving late.",
            sourceLessonSlug: "the-byline-is-a-contract-term",
          },
          {
            prompt: "Why is calling ghostwriting a theft factually wrong?",
            options: ["The writer was paid for the absence", "Because ghostwriters can sue to have their bylines restored", "Because publishers keep public registers of everyone they engage", "Because the statute forbids publishing work under a false name"],
            correctIndex: 0,
            explanation: "The missing byline is the deliverable of a sale, which anyone holding an agreement can confirm.",
            sourceLessonSlug: "not-a-theft-a-sale",
          },
          {
            prompt: "If a credit convention erases every contributor of a kind evenly, what remains to explain?",
            options: ["The routing", "The convention, which must have been designed for the outcome", "The archive, which discarded the records that would settle it", "The fee, which sets the value of the erased contribution"],
            correctIndex: 0,
            explanation: "Who gets placed on the erased side of an even rule, which is a question about hiring and offers.",
            sourceLessonSlug: "not-a-theft-a-sale",
          },
          {
            prompt: "Which test separates the authenticator from the ghost?",
            options: ["Whether a name is added or removed", "Whether the writer was paid a fee or a share of royalties", "Whether the arrangement is disclosed anywhere in the front matter", "Whether the second party is named on the title page or the cover"],
            correctIndex: 0,
            explanation: "The authenticator adds a name so the author is believed; the ghost removes one that was sold.",
            sourceLessonSlug: "four-shapes-of-a-hidden-hand",
          },
          {
            prompt: "In an amanuensis arrangement, the central question is:",
            options: ["Fidelity", "The rank of the transcriber's credit on the title page", "Which party owns the copyright in the finished manuscript", "Whether the transcriber was paid at market rates for the work"],
            correctIndex: 0,
            explanation: "How much the transcriber changed, and in whose interest, rather than whose name is larger.",
            sourceLessonSlug: "four-shapes-of-a-hidden-hand",
          },
          {
            prompt: "Where was Phillis Wheatley's Poems on Various Subjects published, and why there?",
            options: ["London, after the Boston venture failed", "Boston, financed by the subscriptions raised there in 1772", "Philadelphia, where the evangelical printing trade was strongest", "Newport, through the shipping connections of the Wheatley household"],
            correctIndex: 0,
            explanation: "The Massachusetts Historical Society records that the 1772 proposal was unsuccessful.",
            sourceLessonSlug: "the-book-that-needed-a-certificate",
          },
          {
            prompt: "In the publisher's own note, why was the attestation procured?",
            options: ["Readers would suspect the poems were not really hers", "The Countess of Huntingdon required it before granting the dedication", "The London booksellers' company required it for an American author", "The Boston proposers demanded it before releasing the manuscript"],
            correctIndex: 0,
            explanation: "So that none might have the least ground for disputing their original.",
            sourceLessonSlug: "the-book-that-needed-a-certificate",
          },
          {
            prompt: "How many men signed the attestation in Wheatley's 1773 volume?",
            options: ["Eighteen", "Twelve, seven of them clergymen of the town of Boston", "Twenty-four, including the whole of the governor's council", "Nine, all connected to the Wheatley family by blood or marriage"],
            correctIndex: 0,
            explanation: "Two provincial executives, five styled Hon., three Esq., seven clergy, and John Wheatley.",
            sourceLessonSlug: "to-the-publick",
          },
          {
            prompt: "How is the final signatory of that attestation identified in the book?",
            options: ["Mr. John Wheatley, her Master", "Mr. John Wheatley, merchant, of the town of Boston", "Mr. John Wheatley, in whose family she has been instructed", "Mr. John Wheatley, guardian of the said young person"],
            correctIndex: 0,
            explanation: "The person best placed to know is credentialed by the fact that he held her as property.",
            sourceLessonSlug: "to-the-publick",
          },
          {
            prompt: "What hedge sits inside the attestation?",
            options: ["As we verily believe", "So far as the evidence before us can be made to reach", "To the best of our knowledge and after due and careful enquiry", "Subject to such correction as further information may supply"],
            correctIndex: 0,
            explanation: "A certificate that certifies belief rather than knowledge is weaker than it looks.",
            sourceLessonSlug: "to-the-publick",
          },
          {
            prompt: "What does current scholarship, as Revolutionary Spaces reports it, say about an in-person examination of Wheatley?",
            options: ["It is speculation and unlikely", "It is documented in the Boston town records for February 1772", "It was conducted by the clergy alone, without the civil signatories", "It occurred in London rather than Boston, before the book was set"],
            correctIndex: 0,
            explanation: "What likely happened is a reading examination of the poems, tied to the subscription proposal.",
            sourceLessonSlug: "what-the-examination-was-and-was-not",
          },
          {
            prompt: "In her letter of 18 October 1773, what does Wheatley say about what the book earns?",
            options: ["It is entirely hers", "That it must first repay the cost of her passage to England", "That it is divided with the London publisher by prior agreement", "That it belongs to the Wheatley household until the instrument is drawn"],
            correctIndex: 0,
            explanation: "She is now upon her own footing, and it is the chief thing she has to depend upon.",
            sourceLessonSlug: "what-the-examination-was-and-was-not",
          },
          {
            prompt: "The last line of the 1845 Narrative's title page is:",
            options: ["Written by Himself", "Published at the Anti-Slavery Office, No. 25 Cornhill", "With a preface by William Lloyd Garrison of Boston", "Narrative of the Life of Frederick Douglass, an American Slave"],
            correctIndex: 0,
            explanation: "An assertion about how the manuscript was produced, in a place reserved for information.",
            sourceLessonSlug: "written-by-himself-the-subtitle",
          },
          {
            prompt: "Why does putting an authorship claim on the title page matter more than putting it in a preface?",
            options: ["It is the page catalogues and booksellers trust", "Because a preface can be dropped from later printings", "Because a title page binds the publisher legally and a preface does not", "Because nineteenth-century readers rarely read prefaces at all"],
            correctIndex: 0,
            explanation: "He moved a contested claim from the weakest position on the page to the strongest.",
            sourceLessonSlug: "written-by-himself-the-subtitle",
          },
          {
            prompt: "Which alternative does Garrison's 1845 preface name and rule out?",
            options: ["Employing some one else", "Publishing the narrative anonymously for the author's safety", "Serialising the account in an antislavery newspaper first", "Allowing the society to prepare the manuscript for the press"],
            correctIndex: 0,
            explanation: "Which shows a ghostwritten version was a normal, available option in 1845.",
            sourceLessonSlug: "the-prefaces-that-authenticate",
          },
          {
            prompt: "How many separate authorship guarantees does the 1845 Narrative carry?",
            options: ["Three", "One, since the prefatory pieces concern only the contents", "Five, counting the imprint and the copyright notice", "Two, since the preface and letter form a single apparatus"],
            correctIndex: 0,
            explanation: "The subtitle claim, Garrison's preface of 1 May and Phillips's letter of 22 April 1845.",
            sourceLessonSlug: "the-prefaces-that-authenticate",
          },
          {
            prompt: "Who wrote the introduction to My Bondage and My Freedom in 1855?",
            options: ["Dr. James McCune Smith", "William Lloyd Garrison, as for the earlier narrative", "Wendell Phillips, expanding his 1845 prefatory letter", "Douglass himself, in a signed statement to the reader"],
            correctIndex: 0,
            explanation: "A Black physician who introduces Douglass with pride as his brother.",
            sourceLessonSlug: "who-introduces-the-second-book",
          },
          {
            prompt: "What did the 1855 title page drop?",
            options: ["The subtitle claim", "The author's name, which moved to the spine", "The publisher's imprint, which moved to the reverse", "The word narrative, replaced by autobiography"],
            correctIndex: 0,
            explanation: "By 1855 Douglass no longer needed to argue on a title page that he had written his own book.",
            sourceLessonSlug: "who-introduces-the-second-book",
          },
          {
            prompt: "What is the honest limit this course places on the 1855 change?",
            options: ["The apparatus changed hands rather than disappearing", "The change was the publisher's decision rather than the author's", "The introduction appeared only in later printings of the edition", "The subtitle claim survived on the spine of the 1855 volume"],
            correctIndex: 0,
            explanation: "The book still opens with somebody else introducing the author.",
            sourceLessonSlug: "who-introduces-the-second-book",
          },
          {
            prompt: "How does David Wilson say he obtained Solomon Northup's narrative?",
            options: ["From his lips", "From a manuscript prepared during the years in Louisiana", "From depositions taken before a magistrate after the rescue", "From the correspondence of the men who secured his release"],
            correctIndex: 0,
            explanation: "A dictated narrative, which makes Wilson an amanuensis rather than a ghost.",
            sourceLessonSlug: "the-editor-who-signed-the-preface",
          },
          {
            prompt: "What is structurally weak about Wilson's fidelity assurances?",
            options: ["They all come from him", "They were added years after the first printing appeared", "They contradict the account given on the book's title page", "They were required by the publisher rather than offered"],
            correctIndex: 0,
            explanation: "No separate statement from Northup about the result appears in the front matter.",
            sourceLessonSlug: "the-editor-who-signed-the-preface",
          },
          {
            prompt: "In what language did Omar ibn Said write his 1831 autobiography?",
            options: ["Arabic", "English, learned during his enslavement in North Carolina", "Wolof, transliterated into the Arabic script", "French, the language of the traders who sold him"],
            correctIndex: 0,
            explanation: "In his own hand, unaided, in a language he commanded as a scholar.",
            sourceLessonSlug: "written-in-arabic",
          },
          {
            prompt: "What does the 2023 edition by Lo and Ernst say about earlier translations?",
            options: ["It corrects many distortions", "It confirms them as accurate in every material respect", "It shows they were made from a different manuscript entirely", "It establishes that no translation had been attempted before 1925"],
            correctIndex: 0,
            explanation: "It offers fresh and accurate translations of his eighteen surviving writings.",
            sourceLessonSlug: "written-in-arabic",
          },
          {
            prompt: "In what year did the Library of Congress acquire the Omar ibn Said manuscript?",
            options: ["2017", "1925, at the time of the American Historical Review translation", "2011, when the facing-page scholarly edition appeared", "1848, from the estate of the first translator's patron"],
            correctIndex: 0,
            explanation: "It has since been digitised, which turns checking a translation into a link.",
            sourceLessonSlug: "written-in-arabic",
          },
          {
            prompt: "What do the nine names in Abby Fisher's front matter actually represent?",
            options: ["A reference list", "The nine friends who took down her recipes at her dictation", "The subscribers who financed the printing of the volume", "The signatories to a certificate attesting to her authorship"],
            correctIndex: 0,
            explanation: "The heading is about referring readers to friends, by permission, and refutes the transcriber claim.",
            sourceLessonSlug: "dictated-and-unattributed",
          },
          {
            prompt: "What does Fisher's 1881 book never state?",
            options: ["Who held the pen", "How long she had worked as a cook", "Where she had lived before San Francisco", "Who had asked her to publish her knowledge"],
            correctIndex: 0,
            explanation: "That absence is a finding, and it is the most common one in this subject.",
            sourceLessonSlug: "dictated-and-unattributed",
          },
          {
            prompt: "Which three mechanisms sit on the 1861 title page of Incidents at once?",
            options: ["A subtitle claim, a pseudonym and an editor's name", "A dedication, a subscription list and a certificate", "An attestation, a translator's note and a copyright notice", "A joint byline, an acknowledgement and a publisher's guarantee"],
            correctIndex: 0,
            explanation: "Which is why Lesson 3 used the book as its stacking example.",
            sourceLessonSlug: "linda-brent-and-the-editor",
          },
          {
            prompt: "What does Lydia Maria Child say in print about the book's ideas and language?",
            options: ["They are the author's own", "That she supplied the language and the author the incidents", "That the two women composed the narrative together", "That she rewrote the manuscript at the author's request"],
            correctIndex: 0,
            explanation: "With trifling exceptions, in a sentence printed in the book in 1861 and skipped for a century.",
            sourceLessonSlug: "linda-brent-and-the-editor",
          },
          {
            prompt: "Why did the misattribution of Incidents hold despite that disclaimer?",
            options: ["The record took the only indexable name", "Because the disclaimer appeared only in a rare later printing", "Because the publisher registered the copyright in Child's name", "Because the subtitle claim was removed from later editions"],
            correctIndex: 0,
            explanation: "A pseudonym cannot be catalogued, and attribution drifts to the most legible name on the page.",
            sourceLessonSlug: "linda-brent-and-the-editor",
          },
          {
            prompt: "On what documents did Jean Fagan Yellin's authentication of Jacobs rest?",
            options: ["Jacobs's own letters", "The publisher's contract file for the 1861 edition", "Child's editorial correspondence with the Boston printer", "A diary kept during Jacobs's years of concealment"],
            correctIndex: 0,
            explanation: "Written under her own name, principally in the Post family papers at the University of Rochester.",
            sourceLessonSlug: "how-yellin-settled-it",
          },
          {
            prompt: "Why are both 1981 and 1987 necessary to the Jacobs correction?",
            options: ["One persuades scholars, the other changes the catalogue", "Because the journal required a companion edition to publish", "Because copyright in the attribution vests only on republication", "Because the two addressed American and British audiences"],
            correctIndex: 0,
            explanation: "Most readers meet a book through a catalogue entry rather than through a journal.",
            sourceLessonSlug: "how-yellin-settled-it",
          },
          {
            prompt: "How does this course define a correction?",
            options: ["An indexable name, backed by evidence, published where records are made", "The discovery of a document nobody knew existed", "A public retraction issued by the institution that erred", "A consensus reached without any single person's intervention"],
            correctIndex: 0,
            explanation: "Not a revelation: Jacobs had said Written by Herself in 1861 and Child confirmed it.",
            sourceLessonSlug: "how-yellin-settled-it",
          },
          {
            prompt: "What did publishing Behind the Scenes cost Elizabeth Keckley?",
            options: ["Her dressmaking career", "The copyright in her own text", "Her position teaching at Wilberforce University", "The support of the abolitionist community in Boston"],
            correctIndex: 0,
            explanation: "Along with condemnation from the Lincoln family, after overwhelming public disapproval.",
            sourceLessonSlug: "keckley-doubted-and-punished",
          },
          {
            prompt: "What is this course's position on how much of Behind the Scenes James Redpath wrote?",
            options: ["The record does not measure him, so neither does the course", "That he wrote the greater part of the finished manuscript", "That the question was settled in Keckley's favour long ago", "That he had no involvement beyond arranging its publication"],
            correctIndex: 0,
            explanation: "DocSouth calls his involvement speculation and says verifiable facts affirm the text's authenticity.",
            sourceLessonSlug: "keckley-doubted-and-punished",
          },
          {
            prompt: "What makes Keckley the richest subject in this course?",
            options: ["Her authorship was doubted and punished at once", "Her book is the only one whose manuscript survives entire", "She published with no editor, publisher or intermediary at all", "She is the only author here who recovered her credit in her lifetime"],
            correctIndex: 0,
            explanation: "Neither resolved the other: she paid the full price of the byline for a discounted credit.",
            sourceLessonSlug: "keckley-doubted-and-punished",
          },
          {
            prompt: "What phrase does the title page of the Grove Press Autobiography of Malcolm X carry?",
            options: ["With the assistance of Alex Haley", "As told to Alex Haley, the formula usually repeated", "By Malcolm X and Alex Haley, as a joint byline", "Edited by Alex Haley, with an introduction by M. S. Handler"],
            correctIndex: 0,
            explanation: "A different rung from the remembered one, which is the exact error this course is about.",
            sourceLessonSlug: "as-told-to-in-the-modern-trade",
          },
          {
            prompt: "What does a cover credit give a collaborator that an acknowledgement does not?",
            options: ["A catalogue entry", "A larger share of the book's royalties", "Standing to prevent revision without consent", "A right to be consulted on later editions"],
            correctIndex: 0,
            explanation: "Searchable forever, where a line of thanks is findable only by someone holding the book.",
            sourceLessonSlug: "as-told-to-in-the-modern-trade",
          },
          {
            prompt: "Why does this course refuse to list who ghostwrote which modern book?",
            options: ["Those attributions rest on inference", "Because publishers would take legal action over such a list", "Because ghostwriters have asked not to be identified", "Because the question is settled and a list would add nothing"],
            correctIndex: 0,
            explanation: "Style, timing, rumour and unnamed sources are not evidence of who wrote a manuscript.",
            sourceLessonSlug: "what-the-record-does-not-name",
          },
          {
            prompt: "Which of these would actually settle a modern ghostwriting attribution?",
            options: ["The contract", "A stylistic comparison with the named author's other work", "A publisher's refusal to comment when asked directly", "The collaborator's presence in the same city during writing"],
            correctIndex: 0,
            explanation: "It almost never surfaces, and it is the only document that settles the question completely.",
            sourceLessonSlug: "what-the-record-does-not-name",
          },
          {
            prompt: "Why can this course not profile the ghostwriting trade demographically?",
            options: ["Nobody holds that register", "Because the relevant surveys are held privately by publishers", "Because the profile changes faster than any figure can track", "Because copyright records deliberately omit collaborators"],
            correctIndex: 0,
            explanation: "The trade is confidential by design, and being uncountable is itself the disadvantage.",
            sourceLessonSlug: "who-ends-up-ghostwriting",
          },
          {
            prompt: "On what two judgments is a byline granted?",
            options: ["Whose name sells and whose name is believed", "How much the writer was paid and how long the work took", "Whether the writer holds copyright and whether they are named", "The length of the manuscript and the size of the print run"],
            correctIndex: 0,
            explanation: "Those two commercial estimates produce every pattern this course documents.",
            sourceLessonSlug: "who-ends-up-ghostwriting",
          },
          {
            prompt: "What is the one constant across the eight books in this course?",
            options: ["The byline was never simply available", "Every author was enslaved when their book appeared", "Every book required a certificate from people of standing", "Every author recovered full credit within their own lifetime"],
            correctIndex: 0,
            explanation: "It had to be bought, propped, argued for, risked, or done without.",
            sourceLessonSlug: "who-ends-up-ghostwriting",
          },
        ],
      },
    },
  ],
};
