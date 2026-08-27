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
  ],
};
