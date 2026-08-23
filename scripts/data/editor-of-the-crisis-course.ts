import type { AuthoredCourse } from "./authored-course";

// DIDWORK-S2 · "The Editor of The Crisis" (Culture & History). She Did the Work, wave 2.
// Tier 0. The second course on the S track, after `she-took-the-seat` (S1).
//
// THE THESIS, and why this is a course rather than a biography.
// Jessie Redmon Fauset was literary editor of The Crisis from October 1919 to April 1926. In that
// chair she took Langston Hughes's first nationally published poem, ran Countee Cullen, Jean
// Toomer, Anne Spencer, Georgia Douglas Johnson, Arna Bontemps and Gwendolyn Bennett, and hosted
// the literary rooms where those writers met each other. She also wrote four novels of her own.
// The movement she helped assemble is remembered by name. She is remembered as staff.
// That is the Matthew effect (Merton, 1968) and the Matilda effect (Rossiter, 1993) working on the
// same person at once, which is what makes her the strongest single evidence case in this track.
// So the course teaches EDITORIAL LABOR AS LABOR: what an acquiring editor actually does, why that
// work leaves no byline, and how the credit for a movement lands on whoever signed the poems.
//
// HER NOVELS ARE THE CONTROL CASE, and the course is built around refusing the easy story. She DID
// have a byline, four times, and is still barely read. So invisibility here has at least two causes
// running at once, and a course that blamed erasure for all of it would be arguing past its own
// evidence. Section 4 separates them.
//
// PRIMARY SOURCES READ FOR THIS COURSE, not summarized from secondary accounts.
//   * The Crisis itself, the digitized run at the Internet Archive, issue by issue, 1919 to 1927.
//     The masthead settles the tenure that every secondary source rounds off:
//       - Nov 1919 (19:1, whole no. 109): her first masthead, "Literary Editor", and a news note
//         in the same issue saying she "joined THE CRISIS staff last month", i.e. October 1919.
//       - Apr 1926 (31:6): her last masthead as Literary Editor.
//       - May 1926 (32:1, whole no. 187): Du Bois's own OPINION column announces the change to
//         "the less exacting duties of Contributing Editor", and the masthead reads that way.
//       - Feb 1927 (33:4): her last masthead of any kind.
//       - Mar 1927 (34:1): masthead redesigned, her name gone.
//     Six years seven months as literary editor, ten further months as contributing editor. The
//     magazine itself said "seven years", which is the round number every later account inherited.
//   * The Crisis, May 1924 (28:1), "The Horizon": the contemporaneous notice of the Civic Club
//     dinner, which names six speakers and two poets and does not list the honoree among them.
//   * The Crisis, January 1926 (31:3): Du Bois's review of The New Negro, which records the causal
//     chain from that dinner to Alain Locke's anthology in Du Bois's own words.
//   * Langston Hughes, The Big Sea (1940), read in full rather than quoted from a secondary source.
//     Four separate passages bear on Fauset, and the famous one says something narrower than its
//     paraphrase: it names THREE people, says "so-called", and sits directly after a paragraph
//     giving Charles S. Johnson the superlative.
//
// HARD RULES THIS FILE KEEPS (do not relax without BAM's editorial sign-off):
//  1. ACQUIRED IS NOT THE SAME AS PUBLISHED. Secondary sources conflate them constantly. This
//     course states which cases the record actually settles (Hughes, in his own memoir) and which
//     it does not (most of the rest), and says so in the lesson rather than implying a decision
//     nobody documented.
//  2. NO INVENTED QUOTATION. Every quoted sentence in this course was read in a digitized primary
//     text, and the course says which. Where the popular version of a quotation differs from the
//     original, the course prints the original and shows what the paraphrase dropped.
//  3. CONTESTED CLAIMS ARE TAUGHT AS CONTESTED, with the holders of each position named. Three
//     claims here are live: what happened to Fauset at the Civic Club dinner, how much editorial
//     control she held against Du Bois, and whether her fiction was dismissed for its subject or
//     for its author. None is resolved by assertion.
//  4. WHAT COULD NOT BE SETTLED IS FILED, in src/lib/research-checks.ts, never left as prose.
//
// House style: `section` on every lesson; flush-left single-line `:::reveal q ||| a`; a
// `## Vocabulary` block of 3-6 lesson-specific terms; APA 7 `## Sources`; a quiz per teaching
// section (pool sized to that section's word density, serving 5, passing 80, shuffled) plus a
// 40-question final serving 10; every question carries `explanation` + `sourceLessonSlug`. Correct
// options are written SHORT and distractors long and specific, so `check-longest-option` passes by
// construction rather than by trimming afterwards.
export const EDITOR_OF_THE_CRISIS_COURSE: AuthoredCourse = {
  title: "The Editor of The Crisis",
  description:
    "Jessie Redmon Fauset ran the literary pages of The Crisis from October 1919 to April 1926. She took the first poem Langston Hughes published outside his high school magazine, ran Countee Cullen, Jean Toomer, Anne Spencer and Arna Bontemps, and kept the rooms where those writers met each other. Hughes later named her one of three people who midwifed the New Negro literature into being. The movement is remembered by name; she is remembered as staff. This course is about why, and it is about editorial work rather than about a life: what an acquiring editor actually does, why none of it leaves a byline, and how credit for a movement travels to whoever signed the poems. It is built on the magazine itself, read issue by issue, because the masthead settles a tenure that every secondary account rounds off, and it separates writers she is documented to have acquired from writers who merely appeared while she was there, because those are different claims and the record does not settle both. Her four novels are the control case: she did have a byline, and is still barely read, so this course refuses the tidy story that erasure explains everything. Where the evidence is genuinely argued, it teaches the argument and names who holds which position.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1 — Two jobs, and only one of them has a byline
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "jrf-two-jobs",
      title: "1 · Two jobs, and only one of them has a byline",
      section: "Section 1 · Two jobs, and only one of them has a byline",
      body: `A poem appears in a magazine. Two people put it there. One wrote it. One decided it would run, where it would run, and next to what. Only one of those names is printed.

This course is about the second job, and about one person who did it exceptionally well and is remembered as staff.

**Who she was, in one paragraph, so the rest can be about the work.** Jessie Redmon Fauset was the literary editor of *The Crisis*, the magazine of the National Association for the Advancement of Colored People, from October 1919 to April 1926. In that chair she ran the pages where Langston Hughes published his first poem outside his high school magazine. She also ran Countee Cullen, Jean Toomer, Anne Spencer, Georgia Douglas Johnson, Arna Bontemps and Gwendolyn Bennett, edited a children's magazine on the side, and kept the New York rooms where those writers met each other. She wrote four novels herself.

**The problem this course exists to work.** The Harlem Renaissance is remembered by the names on the poems. Hughes, Cullen, Toomer, Hurston, McKay, Locke: those are the names on a syllabus. Fauset chose a great deal of what those names published in the years the movement was forming, and she is a footnote in the story. That is not a scandal. It is a pattern, and the pattern has a literature.

**Two named mechanisms are running here at once.** The sociologist Robert K. Merton called the first the **Matthew effect**: in a collaboration, recognition flows disproportionately to the participant who is already eminent, and the less eminent contributor's share is absorbed (Merton, 1968). The historian of science Margaret W. Rossiter named the second the **Matilda effect**: a woman's contribution is systematically under-recognised, and frequently attributed to a male colleague (Rossiter, 1993). Fauset sat at the intersection. She was less famous than the writers she published, and she was a woman working for a very famous man.

**Why she is the strongest case rather than just a sad one.** Most claims of this shape cannot be checked, because the work left no record. Hers did. *The Crisis* is digitized issue by issue, so the masthead can settle her exact tenure. *The Brownies' Book* is digitized, so her title there can be read off the cover page and off the legally required postal filing. Langston Hughes wrote a memoir describing how she acquired his work, in his own words, while she was alive to contradict him. This is a case where the paperwork survives, which is what makes it teachable instead of merely moving.

**What this course will not do.** It will not argue that she was erased and leave it there. She published four novels under her own name, which is a byline, and she is still barely read. So invisibility here has more than one cause, and Section 4 pulls them apart instead of collapsing them into one grievance. A course that blamed everything on erasure would be arguing past its own best evidence.

:::reveal Name the two mechanisms this course says were operating on Fauset at the same time, and say what each one does. ||| The Matthew effect, which routes recognition to whichever collaborator is already eminent, and the Matilda effect, which under-recognises a woman's contribution and often reassigns it to a male colleague.

:::reveal Why does the course say Fauset is a stronger case than most claims of this shape? ||| Because the paperwork survives. The magazine's masthead is digitized month by month, the children's magazine carries her title on its own cover page and in its postal filing, and Langston Hughes described her acquiring his work in a memoir published while she was alive.

## Vocabulary
- **Literary editor**: the staff member who decides which poems, stories and reviews a magazine runs, in what order, and in which issue.
- **Masthead**: the block of names a periodical prints stating who runs it, which is a dated, checkable record of who held which title in which month.
- **Matthew effect**: Merton's name for the tendency of credit in a collaboration to concentrate on the participant who is already the more eminent one.
- **Matilda effect**: Rossiter's name for the systematic under-recognition of a woman's contribution, often by reassigning it to a man she worked with.
- **Byline**: the printed line naming an author, which is the only form of credit most readers ever see.

## Sources
Merton, R. K. (1968). The Matthew effect in science. *Science, 159*(3810), 56-63. https://doi.org/10.1126/science.159.3810.56

Rossiter, M. W. (1993). The Matthew Matilda effect in science. *Social Studies of Science, 23*(2), 325-341. https://doi.org/10.1177/030631293023002004

The Crisis. (1919, November). Masthead, and news note announcing Fauset's appointment. *The Crisis, 19*(1), whole no. 109. https://archive.org/details/sim_crisis_the-crisis_1919-11_19_1`,
    },
    {
      slug: "jrf-what-an-acquiring-editor-does",
      title: "2 · What an acquiring editor actually does",
      section: "Section 1 · Two jobs, and only one of them has a byline",
      body: `Before you can argue that someone's work was under-credited, you have to be able to say what the work was. Vagueness here is how the argument gets lost: "she helped them" is not a claim anybody can check.

So here is the job, broken into the tasks that leave traces and the tasks that do not.

**Solicitation.** The editor asks for work that does not exist yet. A letter to a writer saying send me something is the origin of a great many published poems, and it leaves a trace only if somebody kept the letter.

**Selection.** The editor says yes to this and no to that, out of a pile. This is the decision the reader experiences as the magazine's taste, and it is invisible by construction: a reader sees what ran and never sees what did not.

**Revision.** The editor asks for changes. Cut the third stanza. This ending is not earned. Almost nothing survives of this anywhere, in any magazine, in any period, unless a marked typescript happens to be in an archive.

**Placement.** The editor decides which issue, which page, and what sits next to it. A poem on page 71 of a well-read issue reaches a different audience than the same poem buried in a back column, and the editor makes that call.

**Introduction.** The editor puts writers in a room with each other and with the people who can pay them. This is the part that compounds, because a network keeps producing after the editor stops working.

**Now count the bylines.** Zero. Not one of those five tasks produces a printed line naming the person who did it. The magazine prints the writer's name because the writer's name is the point of a byline. The editor gets a masthead entry, which is a different thing: it says a person held a post, not that the person did any specific piece of work.

**This is a structural fact, not a slight.** The format has no slot. A poem cannot carry a line reading "chosen and cut by" without becoming a different kind of object. Compare a film, where the format grew slots: editor, cinematographer, gaffer, all named on screen, because the industry built a credit convention. Magazines never did. So the invisibility of literary editing is a design feature of the page, and it operates on everyone who has ever held the job.

**Which is exactly why it is worth teaching as a mechanism.** If the reason a name is missing is that somebody behaved badly, the lesson ends with that person. If the reason is that the format has no slot and the convention filled the slots it had, then you know what to check next time, in any decade, in any magazine, including one you read this morning.

:::reveal List the five tasks of acquiring editorial work this lesson names, and say how many of them produce a byline. ||| Solicitation, selection, revision, placement and introduction. None of them produces a byline.

:::reveal What is the difference between a masthead entry and a byline? ||| A masthead entry records that a person held a post during a period. A byline attaches a person to one specific piece of work. Editors get the first and almost never the second, so the record shows the post and not the labor.

:::reveal Why does the lesson compare magazines to film credits? ||| Because film grew a credit convention with named slots for editor, cinematographer and the rest, and magazines never did. The comparison shows that the invisibility is a property of the format rather than of the people.

## Vocabulary
- **Acquiring editor**: the editor who decides what a publication takes, as distinct from one who only corrects what has already been accepted.
- **Solicitation**: asking a writer for work that does not exist yet, which is how a great deal of published writing begins.
- **Selection**: choosing from submissions, the decision a reader experiences as a magazine's taste and can never see directly.
- **Placement**: the choice of issue, page and neighbours, which decides how many people encounter a piece and in what frame.
- **Credit convention**: the set of rules a medium uses to decide whose name appears, which can grow new slots or leave a job permanently unnamed.

## Sources
Hughes, L. (1940). *The big sea: An autobiography*. Alfred A. Knopf. https://pressbooks.library.torontomu.ca/thebigsea/

The Crisis. (1921, June). Contents page. *The Crisis, 22*(2), whole no. 128. https://archive.org/details/sim_crisis_the-crisis_1921-06_22_2`,
    },
    {
      slug: "jrf-the-quotation-and-what-it-drops",
      title: "3 · The quotation everybody uses, and what the paraphrase drops",
      section: "Section 1 · Two jobs, and only one of them has a byline",
      body: `One sentence does most of the work in every short account of Fauset. It is usually given as: Langston Hughes called her one of the midwives of the Harlem Renaissance.

That is close enough to be worth checking and wrong in three specific ways. Here is the original, from Hughes's autobiography *The Big Sea*, in the chapter "Poetry Is Practical" (Hughes, 1940):

> Jessie Fauset at the *Crisis*, Charles Johnson at *Opportunity*, and Alain Locke in Washington, were the three people who midwifed the so-called New Negro literature into being. Kind and critical—but not too critical for the young—they nursed us along until our books were born.

**Drop one: it names three people, not one.** Hughes distributed the credit across Fauset at *The Crisis*, Charles S. Johnson at *Opportunity*, and Alain Locke in Washington. A paraphrase that keeps only Fauset has quietly promoted her, and a reader who checks will find the promotion. That costs the argument more than it gains.

**Drop two: he wrote "the so-called New Negro literature", not "the Harlem Renaissance".** Hughes is holding the movement's own label at arm's length, in 1940, from inside it. The paraphrase smooths that away and replaces the term with a later one. It is a small change that makes a wry sentence sound like a plaque.

**Drop three, and this is the one that matters.** Read the paragraph immediately before it. Hughes writes that Charles S. Johnson "did more to encourage and develop Negro writers during the 1920's than anyone else in America" (Hughes, 1940). So Hughes's own superlative went to Johnson. If your case for Fauset rests on Hughes, you have to carry the sentence next to it, which does not say what you wanted.

**Why the course prints the harder version anyway.** Because the argument does not need the inflated one. Hughes named her first in a list of three, and elsewhere in the same book he describes her accepting his work personally, which is stronger evidence than any adjective. An argument built on the strongest available claim collapses the first time someone opens the book. An argument built on what the book actually says survives being checked, which is the only durable kind.

**The transferable move.** When a claim about a person rests on one quotation, find the original, read the sentences on either side of it, and ask what the paraphrase dropped. Paraphrase drops in a predictable direction: it removes the qualifiers, removes the other names, and updates the vocabulary. Those three drops together turn a careful sentence into a slogan.

:::reveal Name the three people Hughes actually credits in the passage, and the exact phrase he uses for the literature. ||| Jessie Fauset at The Crisis, Charles Johnson at Opportunity, and Alain Locke in Washington. He calls it "the so-called New Negro literature", not the Harlem Renaissance.

:::reveal What does the paragraph immediately before the famous passage say, and why does it complicate the case for Fauset? ||| It says Charles S. Johnson did more to encourage and develop Negro writers during the 1920s than anyone else in America. Hughes's superlative went to Johnson, so anyone resting the case for Fauset on Hughes has to carry that sentence too.

:::reveal What three things does paraphrase predictably drop from a quotation? ||| The qualifiers, the other names, and the period vocabulary, which it replaces with a later term. Together those turn a careful sentence into a slogan.

## Vocabulary
- **Quotation drift**: the gradual change in a quoted sentence as it is passed along, which reliably strengthens the claim and removes the hedges.
- **The New Negro**: the period term for the literary and artistic movement now usually called the Harlem Renaissance, used by its participants in the 1920s.
- **Superlative**: a claim that someone did the most of something, which is checkable and therefore worth locating precisely before repeating it.
- **Strongest available claim**: the temptation to argue from the biggest version of the evidence, which loses to anyone who reads the source.

## Sources
Hughes, L. (1940). *The big sea: An autobiography*. Alfred A. Knopf. https://pressbooks.library.torontomu.ca/thebigsea/chapter/poetry-is-practical/`,
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2 — What the magazine itself settles
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "jrf-what-the-masthead-settles",
      title: "4 · What the masthead settles, month by month",
      section: "Section 2 · What the magazine itself settles",
      body: `Nearly every short account of Fauset gives her tenure as 1919 to 1926. That is true and it is also the least precise true thing you can say, and the imprecision hides two facts worth having.

*The Crisis* is digitized issue by issue, and a magazine's masthead is a dated record of who held which title in which month. So the question is answerable, not by weighing accounts against each other, but by turning pages.

**October 1919: she starts.** The November 1919 issue carries a news note reading, in the magazine's own words, that "Miss Jessie Redmon Fauset joined THE CRISIS staff last month as Literary Editor" (The Crisis, 1919). Last month, from a November issue, is October. The same note supplies her schooling, and Section 3 comes back to it, because one detail in it disagrees with every modern biography.

**November 1919: her first masthead.** Volume 19, number 1, whole number 109. The line reads: conducted by W. E. Burghardt Du Bois; Jessie Redmon Fauset, Literary Editor; Augustus Granville Dill, Business Manager. That line then runs, unchanged in substance, for six and a half years.

**April 1926: her last masthead as Literary Editor.** Volume 31, number 6.

**May 1926: the change, announced by Du Bois himself.** In his own Opinion column, under the heading "Miss Fauset", Du Bois writes that she "changes this month to the less exacting duties of Contributing Editor" (Du Bois, 1926a). The masthead in that same issue already reads Contributing Editor.

**February 1927: her last masthead of any kind.** In March 1927 the magazine redesigned its masthead to three names, and hers is not among them.

**Two things that round number hides.** First, she did not leave in 1926. She stepped down from the working chair in May 1926 and stayed on the masthead as a contributing editor for another ten months. Second, the length. October 1919 to April 1926 is six years and seven months. Du Bois's own notice says "after seven years' active service", which is the round number every later account inherited without noticing that it came from a farewell paragraph rather than from a payroll.

**Why this is worth six paragraphs.** Not because seven is wrong by five months. Because it demonstrates the method: a claim that every source repeats identically is usually a claim every source copied from one place. When a periodical is digitized, you can go past the copies to the thing itself, and what you find there is generally more interesting than what you were told.

:::reveal What month did Fauset actually join The Crisis staff, and how does the magazine let you establish it? ||| October 1919. The November 1919 issue carries a note saying she joined the staff "last month" as Literary Editor, and that same issue is the first to print her name on the masthead.

:::reveal In what sense is "she left The Crisis in 1926" imprecise? ||| She stepped down as Literary Editor with the May 1926 issue but remained on the masthead as Contributing Editor until February 1927. She left the working chair in 1926 and the magazine in 1927.

:::reveal Where does the widely repeated "seven years" come from, and how long was it actually? ||| From Du Bois's farewell notice in the May 1926 Crisis, which said "after seven years' active service". October 1919 to April 1926 is six years and seven months.

## Vocabulary
- **Whole number**: a periodical's running count of every issue ever published, which is a second, independent way to place an issue in a run.
- **Contributing editor**: a masthead title for someone who supplies work regularly but does not run the day-to-day desk.
- **Round number**: a figure smoothed for readability, which travels easily and is therefore the kind most likely to be copied without checking.
- **Copied claim**: a fact that every source states identically, which usually means they share one source rather than that they each checked.

## Sources
Du Bois, W. E. B. (1926a, May). Opinion: Miss Fauset. *The Crisis, 32*(1), whole no. 187. https://archive.org/details/sim_crisis_the-crisis_1926-05_32_1

The Crisis. (1919, November). Masthead, and news note announcing Fauset's appointment. *The Crisis, 19*(1), whole no. 109. https://archive.org/details/sim_crisis_the-crisis_1919-11_19_1

The Crisis. (1927, March). Masthead. *The Crisis, 34*(1). https://archive.org/details/sim_crisis_the-crisis_1927-03_34_1`,
    },
    {
      slug: "jrf-acquired-versus-published",
      title: "5 · Acquired is not the same as published",
      section: "Section 2 · What the magazine itself settles",
      body: `Here is the sentence you will find in most short accounts: Fauset published Langston Hughes, Countee Cullen, Jean Toomer and Claude McKay. Every clause of it can be true while the claim underneath it is unproven, and the ambiguity is doing real work.

**Two different claims wear the same words.** *Appeared during her tenure* means a piece ran in a magazine in a month when she held the post. *She acquired it* means she personally solicited, read and chose it. The first is a fact about a table of contents. The second is a fact about a decision, and decisions are recorded far less often than contents pages.

**One case the record settles completely.** Langston Hughes described the sequence himself, in *The Big Sea*, while Fauset was alive. He sent prose and a children's play to *The Brownies' Book*; the pieces were accepted, and "encouraging letters came back from Jessie Fauset, who was managing editor there. So I sent her my poem written on the train, 'The Negro Speaks of Rivers.' And in June, 1921, it appeared in the *Crisis*, the first of my poems to be published outside Central High School" (Hughes, 1940). That is an acquisition told in the acquired writer's own voice: a relationship built at one magazine, a direct submission to a named person, and a placement at another.

**And the paperwork corroborates it.** *The Brownies' Book* names Fauset as Literary Editor on its 1920 cover pages and as Managing Editor on its 1921 ones, and the 1921 postal ownership statement, a filing required by law, lists Jessie Redmon Fauset as managing editor (The Brownies' Book, 1921). During that year the magazine ran a stream of Hughes: "Fairies" and "Winter Sweetness" and "Signs of Spring" and "An April Rain Song", the arranged "Mexican Games", the prose piece "In a Mexican City", and the play "The Gold Piece" in July. His own account and the magazine's own pages describe the same relationship from two directions.

**Most of the other names are not settled, and this course says so.** Countee Cullen, Jean Toomer, Anne Spencer, Georgia Douglas Johnson, Arna Bontemps and Gwendolyn Bennett all appear in *The Crisis* while she ran the literary pages. That is verifiable from the contents pages. Whether she solicited a given poem, or Du Bois handed it to her, or it arrived unsolicited and she said yes, is a question the contents page cannot answer, and no course should answer it by tone of voice.

**Claude McKay is the case most often stated too strongly.** McKay published in *The Crisis*, and he was also a working editor at *The Liberator* in the same years and published extensively there. Treating his career as something Fauset launched imports an editorial relationship the record does not show.

**What would settle any of these.** A letter from Fauset soliciting a specific piece. A letter from the writer sending it to her by name. A marked typescript. A memoir sentence like the one Hughes wrote. Those exist in archives for some writers and not others, which is why the honest answer differs case by case rather than being one sentence about all of them.

:::reveal State the difference between "appeared during her tenure" and "she acquired it", and say which one a contents page can prove. ||| The first says a piece ran while she held the post; the second says she personally solicited, read and chose it. A contents page proves only the first, because it records what ran and not who decided.

:::reveal What is the documented acquisition case, and what makes it documented rather than inferred? ||| Langston Hughes. He describes it himself in The Big Sea: encouraging letters from Fauset at The Brownies' Book, then a direct submission to her of "The Negro Speaks of Rivers", which ran in The Crisis in June 1921.

:::reveal Name two kinds of evidence that would settle whether Fauset acquired a particular poem. ||| A letter from her soliciting it or from the writer sending it to her by name, a marked typescript showing her edits, or a memoir sentence from the writer describing the transaction.

## Vocabulary
- **Acquisition**: an editor's decision to take a specific piece, which is the labor at issue and is recorded only in correspondence and memoirs.
- **Contents page**: the printed list of what an issue contains, which proves appearance and proves nothing about who chose it.
- **Postal ownership statement**: the annual filing a United States periodical was required to publish naming its publisher, editor, managing editor and owners.
- **Unsolicited submission**: work arriving without an invitation, which an editor still selects but does not originate.
- **Overstated relationship**: describing a writer as an editor's discovery when the record shows only that the two overlapped.

## Sources
Hughes, L. (1940). *The big sea: An autobiography*. Alfred A. Knopf. https://pressbooks.library.torontomu.ca/thebigsea/chapter/tragedy-in-toluca/

The Brownies' Book. (1921). Mastheads and statement of ownership, volume 2. DuBois and Dill. https://archive.org/details/the-brownies-book

The Crisis. (1921, June). The Negro speaks of rivers, a poem by Langston Hughes. *The Crisis, 22*(2), 71. https://archive.org/details/sim_crisis_the-crisis_1921-06_22_2`,
    },
    {
      slug: "jrf-whose-magazine-was-it",
      title: "6 · Whose magazine was it, and how much of the choosing was hers",
      section: "Section 2 · What the magazine itself settles",
      body: `An argument that Fauset was under-credited has to survive its strongest objection, which is this: *The Crisis* was Du Bois's magazine, so how much of what ran there was her decision at all?

The honest answer is that the question is live, that both positions have evidence, and that the course is going to name the evidence rather than pick a side by adjective.

**The case that her authority was real.** She had a title, printed monthly, that says what she did: Literary Editor. She had signed columns of her own, including the book column "On the Book Shelf". At *The Brownies' Book* she was Managing Editor of record in a legal filing, which is the strongest documentary form her authority ever took. And Du Bois's own farewell called her service "active" and the duties she was leaving "exacting", which is not how anyone describes a job with no decisions in it (Du Bois, 1926a).

**The case that the authority was bounded.** The masthead line begins "conducted by W. E. Burghardt Du Bois", and conducted is a strong word chosen in an era when mastheads were read closely. Du Bois wrote the Opinion column that opened every issue and set the magazine's line. The publishing house behind *The Brownies' Book* was DuBois and Dill, and the ownership statement names Du Bois and Dill as the owners, which means Fauset was the working editor of a magazine two other people owned.

**What neither side gets to claim.** Nobody has produced a document showing Du Bois overruling her on a specific poem, and nobody has produced one showing her overruling him. In the absence of such a document the argument runs on inference, and inference in both directions is exactly as strong as the person making it wants it to be.

**The verdict this course states.** Her editorial authority over the literary pages is documented in title, in a legal filing, and in her employer's own farewell, and it was exercised inside an editorial line another person set. Both halves are true at once, and a course that dropped either half would be selling something. This is a serious question, it is genuinely documented on both sides, and it is unresolved.

**Why the objection does not sink the thesis.** Because the thesis is not that she alone made the Renaissance. It is that the labor of choosing has no byline, so whoever does it disappears from the account regardless of how much of it they did. That is true whether her authority was total or partial, and it would be true of a man in the same chair. What the Matilda effect adds is that a woman in that chair is likelier to have the residue reassigned to the famous man beside her, which is precisely the shape of the objection this lesson just answered.

:::reveal Give one piece of evidence that Fauset's editorial authority was real, and one that it was bounded. ||| Real: her printed title, her signed book column, and a legal filing naming her managing editor of The Brownies' Book. Bounded: the masthead says the magazine was conducted by Du Bois, who wrote the opening Opinion column, and the children's magazine was owned by DuBois and Dill.

:::reveal What is the verdict this lesson states, and what does it refuse to do? ||| That her authority over the literary pages is documented and was exercised inside an editorial line another person set. It refuses to resolve the question by assertion, because no document shows either of them overruling the other on a specific piece.

:::reveal Why does the objection about Du Bois's control not defeat the course's thesis? ||| Because the thesis is that the labor of choosing carries no byline, so whoever does it vanishes from the account regardless of how much of it they did. The objection changes the size of her share, not the fact that a share leaves no printed trace.

## Vocabulary
- **Conducted by**: the period masthead phrase naming the person whose editorial direction a magazine followed, distinct from the staff who executed it.
- **Editorial line**: the settled position and taste a publication runs on, usually set by one person and applied by others.
- **Bounded authority**: real decision-making power exercised inside limits somebody else set, which is the normal condition of staff work.
- **Argument from inference**: reasoning to a conclusion from what is likely rather than from a document, which is as strong as the arguer wants it to be.

## Sources
Du Bois, W. E. B. (1926a, May). Opinion: Miss Fauset. *The Crisis, 32*(1), whole no. 187. https://archive.org/details/sim_crisis_the-crisis_1926-05_32_1

The Brownies' Book. (1921). Statement of ownership, management, etc. *The Brownies' Book, 2*. DuBois and Dill. https://archive.org/details/the-brownies-book

Rossiter, M. W. (1993). The Matthew Matilda effect in science. *Social Studies of Science, 23*(2), 325-341. https://doi.org/10.1177/030631293023002004`,
    },
  ],
};
