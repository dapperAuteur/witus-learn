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
  ],
};
