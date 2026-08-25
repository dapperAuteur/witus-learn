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
    {
      slug: "jrf-quiz-two-jobs",
      title: "Knowledge check: two jobs, and the quotation",
      section: "Section 1 · Two jobs, and only one of them has a byline",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          { prompt: "What two jobs does this course say put a poem in a magazine?", options: ["Writing it, and deciding it runs", "Composing the poem, and then correcting its spelling and punctuation before it goes to the printer", "Drafting the poem, and then negotiating the fee the magazine will pay the poet for it", "Submitting the poem, and then arranging for a well-known figure to recommend it to the editor"], correctIndex: 0, explanation: "Two people, two jobs, and only the first of them gets a printed name.", sourceLessonSlug: "jrf-two-jobs" },
          { prompt: "What post did Jessie Redmon Fauset hold at The Crisis?", options: ["Literary editor", "Managing editor, running the production schedule and the printing arrangements each month", "Contributing editor from the start, supplying essays without holding a staff position", "Associate editor with responsibility for the magazine's news and political coverage"], correctIndex: 0, explanation: "Literary editor, printed on the masthead every month from November 1919 to April 1926.", sourceLessonSlug: "jrf-two-jobs" },
          { prompt: "Over what period did Fauset hold that post?", options: ["October 1919 to April 1926", "January 1920 to December 1921, the exact run of the children's magazine she also edited", "March 1924 to March 1927, beginning with the publication of her first novel", "November 1919 to February 1927, the whole span her name appears on the masthead"], correctIndex: 0, explanation: "The last date is when she left the working chair. Her name stayed on the masthead in another role until February 1927.", sourceLessonSlug: "jrf-two-jobs" },
          { prompt: "Whose first poem published outside a high school magazine ran in her pages?", options: ["Langston Hughes", "Countee Cullen, whose early verse she is often said to have solicited directly", "Jean Toomer, several years before the appearance of his book Cane in 1923", "Claude McKay, who was also working as an editor at The Liberator in those years"], correctIndex: 0, explanation: "\"The Negro Speaks of Rivers\", in The Crisis for June 1921.", sourceLessonSlug: "jrf-two-jobs" },
          { prompt: "How many novels did Fauset publish?", options: ["Four", "Two, both of them appearing during the years she was running the literary pages", "Six, of which two were published only in Britain and never issued in the United States", "One, the 1924 book that the Civic Club dinner was held to celebrate"], correctIndex: 0, explanation: "There Is Confusion, Plum Bun, The Chinaberry Tree and Comedy: American Style.", sourceLessonSlug: "jrf-two-jobs" },
          { prompt: "Who named the Matthew effect?", options: ["Robert K. Merton", "Margaret W. Rossiter, in a 1993 paper on the recognition of women scientists", "Matilda Joslyn Gage, in a nineteenth-century essay on women and invention", "W. E. B. Du Bois, in an editorial about credit in collaborative intellectual work"], correctIndex: 0, explanation: "Merton, in Science in 1968. Rossiter named the companion effect twenty-five years later.", sourceLessonSlug: "jrf-two-jobs" },
          { prompt: "What does the Matthew effect describe?", options: ["Credit flowing to the already eminent", "Credit being divided equally among everyone whose name appears on a piece of collaborative work", "The tendency of a discovery to be named after the second person to make it rather than the first", "The reluctance of institutions to award credit to anyone who is no longer employed by them"], correctIndex: 0, explanation: "In a collaboration, recognition concentrates on whichever participant already has the greater reputation.", sourceLessonSlug: "jrf-two-jobs" },
          { prompt: "What does the Matilda effect describe?", options: ["A woman's contribution reassigned to a male colleague", "The refusal of learned societies to admit women members during the nineteenth century", "The practice of publishing a woman's work under initials so her sex is not apparent", "The tendency of women to publish less than men because of unequal domestic obligations"], correctIndex: 0, explanation: "Rossiter's 1993 name for the systematic under-recognition of women's contributions and their transfer to men nearby.", sourceLessonSlug: "jrf-two-jobs" },
          { prompt: "Why does the course call Fauset the strongest case of its kind?", options: ["Because the paperwork survives", "Because she was more influential than any other editor working in New York in the 1920s", "Because she is the only person to whom both named effects have ever been shown to apply", "Because she left a detailed memoir setting out her own account of what she did and why"], correctIndex: 0, explanation: "A digitized masthead, a legal filing, and an acquired writer's own memoir. Most claims of this shape have none of that.", sourceLessonSlug: "jrf-two-jobs" },
          { prompt: "What does the course refuse to argue?", options: ["That erasure explains her whole reputation", "That her editorial work at The Crisis was under-credited relative to the writers she published", "That the Matthew and Matilda effects were operating on her at the same time", "That the labour of choosing what a magazine prints leaves no printed credit"], correctIndex: 0, explanation: "Her four bylined novels are the control case, and they force a second explanation into the account.", sourceLessonSlug: "jrf-two-jobs" },
          { prompt: "Which writers does the course list as running in her pages?", options: ["Cullen, Toomer, Spencer, Bontemps and Bennett", "Zora Neale Hurston, Rudolph Fisher, Wallace Thurman and Nella Larsen, all in the same year", "Only Langston Hughes, since no other writer's work can be traced to her editorship", "Paul Laurence Dunbar and Charles Chesnutt, both of whom she published early in their careers"], correctIndex: 0, explanation: "Along with Georgia Douglas Johnson. Section 5 is careful that appearing is not the same as being acquired.", sourceLessonSlug: "jrf-two-jobs" },
          { prompt: "What organisation published The Crisis?", options: ["The NAACP", "The National Urban League, which also published the magazine Opportunity in the same years", "DuBois and Dill, the small partnership behind the children's magazine of the same circle", "The Writers' Guild, which hosted the 1924 dinner at the Civic Club in New York"], correctIndex: 0, explanation: "The National Association for the Advancement of Colored People, whose name appears in the masthead every month.", sourceLessonSlug: "jrf-two-jobs" },
          { prompt: "What is a masthead?", options: ["A periodical's printed block of who runs it", "The decorative title lettering that appears across the top of a magazine's front cover", "The list of everything an issue contains, with the page number for each item", "The statement of a magazine's editorial position, printed at the front of every issue"], correctIndex: 0, explanation: "Because it is dated and printed monthly, it is a checkable record of who held which title in which month.", sourceLessonSlug: "jrf-two-jobs" },
          { prompt: "What is a byline?", options: ["The printed line naming an author", "The opening sentence of an article, written to draw a reader into the rest of it", "A magazine's note stating where a piece was first published before being reprinted", "The credit line beneath a photograph naming the photographer who took it"], correctIndex: 0, explanation: "It is the only form of credit most readers ever see, which is why work without one disappears.", sourceLessonSlug: "jrf-two-jobs" },
          { prompt: "What five tasks make up acquiring editorial work here?", options: ["Solicitation, selection, revision, placement, introduction", "Commissioning, fact-checking, copy-editing, proofreading and writing the headlines", "Reading submissions, answering correspondence, keeping accounts, and dealing with printers", "Choosing covers, laying out pages, setting type, arranging distribution and selling advertising"], correctIndex: 0, explanation: "Not one of the five produces a printed line naming the person who did it.", sourceLessonSlug: "jrf-what-an-acquiring-editor-does" },
          { prompt: "What is solicitation, in this sense?", options: ["Asking a writer for work that does not exist yet", "Approaching potential subscribers to persuade them to take out a subscription to the magazine", "Requesting permission from a publisher to reprint work that has already appeared elsewhere", "Inviting readers to send in letters that the magazine will print in a correspondence column"], correctIndex: 0, explanation: "A letter saying send me something is the origin of a great many published poems, and it survives only if somebody kept it.", sourceLessonSlug: "jrf-what-an-acquiring-editor-does" },
          { prompt: "Why is selection invisible by construction?", options: ["A reader never sees what did not run", "Because editors are contractually forbidden from discussing rejected work with anyone outside", "Because magazines destroy their submission records at the end of each publication year", "Because the decision is usually taken by a committee, so no individual can claim it"], correctIndex: 0, explanation: "The reader experiences the result as the magazine's taste, with no way to see the pile it came out of.", sourceLessonSlug: "jrf-what-an-acquiring-editor-does" },
          { prompt: "Why does almost no evidence of editorial revision survive?", options: ["Marked typescripts are rarely kept", "Because editors of that period worked entirely by conversation and never wrote changes down", "Because publishers routinely required writers to destroy earlier drafts as a condition of printing", "Because revision was considered the writer's own work and so was never recorded as editorial"], correctIndex: 0, explanation: "It survives only where a marked typescript happens to have reached an archive, which is uncommon in any period.", sourceLessonSlug: "jrf-what-an-acquiring-editor-does" },
          { prompt: "What does placement decide?", options: ["Which issue and page, and what sits beside it", "How much the magazine will pay the writer for the piece it has agreed to publish", "Whether a piece appears under the writer's own name or under an assumed one", "Which of a magazine's several regular departments will be responsible for the piece"], correctIndex: 0, explanation: "A poem on a prominent page of a well-read issue reaches a different audience than the same poem in a back column.", sourceLessonSlug: "jrf-what-an-acquiring-editor-does" },
          { prompt: "Which editorial task does the course say compounds?", options: ["Introduction", "Revision, because each round of changes improves the writer's next submission as well", "Placement, because a good page position increases the magazine's circulation over time", "Selection, because a magazine's accumulated taste attracts progressively better submissions"], correctIndex: 0, explanation: "A network of writers who know each other keeps producing long after the editor has stopped working.", sourceLessonSlug: "jrf-what-an-acquiring-editor-does" },
          { prompt: "How many of the five editorial tasks produce a byline?", options: ["None", "One, since placement is credited on the contents page of the issue in question", "Two, since solicitation and revision are both recorded in a magazine's correspondence files", "Three, since everything except revision and introduction leaves a printed trace of some kind"], correctIndex: 0, explanation: "The magazine prints the writer's name, because that is what a byline is for. The editor gets a masthead entry instead.", sourceLessonSlug: "jrf-what-an-acquiring-editor-does" },
          { prompt: "What does a masthead entry record that a byline does not?", options: ["That a person held a post over a period", "That a person was paid a salary rather than a fee for the work they contributed", "That a person's work was approved by the organisation that owned the publication", "That a person held the legal copyright in everything the magazine printed that month"], correctIndex: 0, explanation: "It names the post and the period, and says nothing about any specific piece of work.", sourceLessonSlug: "jrf-what-an-acquiring-editor-does" },
          { prompt: "Why does the lesson compare a magazine page to a film's credits?", options: ["Film grew credit slots and magazines did not", "Because both industries were transformed by the arrival of unions during the same decade", "Because film credits are also ignored by audiences, so the comparison shows the problem is universal", "Because film credits are legally required in a way that magazine mastheads have never been"], correctIndex: 0, explanation: "Editor, cinematographer and gaffer are named on screen because the industry built a convention. The magazine page never grew one.", sourceLessonSlug: "jrf-what-an-acquiring-editor-does" },
          { prompt: "What is a credit convention?", options: ["A medium's rules for whose name appears", "An agreement among publishers not to poach each other's writers or editorial staff", "The standard order in which multiple authors of a single work are listed on its title page", "A trade custom requiring payment whenever a work is reproduced in a different medium"], correctIndex: 0, explanation: "It can grow new slots, as film did, or leave a job permanently unnamed, as publishing did.", sourceLessonSlug: "jrf-what-an-acquiring-editor-does" },
          { prompt: "Why does the course insist on naming the tasks precisely?", options: ["\"She helped them\" cannot be checked", "Because a precise job description is required before any employment claim can be brought", "Because the tasks were divided among several staff members and only some belonged to her", "Because different tasks were paid at different rates, which affects how her salary is read"], correctIndex: 0, explanation: "Vagueness is how the argument gets lost. A claim has to name work somebody could look for evidence of.", sourceLessonSlug: "jrf-what-an-acquiring-editor-does" },
          { prompt: "What follows from treating the missing credit as structural?", options: ["The pattern repeats without anyone intending it", "That the individuals involved cannot be criticised for anything they did or failed to do", "That the problem was solved once magazines began printing longer contributor notes", "That the only remedy available is a change in the law governing published attribution"], correctIndex: 0, explanation: "A convention runs by itself, in a different office, on a different person, which is what makes it worth learning as a mechanism.", sourceLessonSlug: "jrf-what-an-acquiring-editor-does" },
          { prompt: "Why can a poem not carry a line reading \"chosen and cut by\"?", options: ["The format has no slot for it", "Because editors of the period signed contracts waiving any claim to be named on the work", "Because such a line would expose the magazine to a claim of joint authorship by the editor", "Because readers of poetry in the 1920s objected strongly to any editorial matter on the page"], correctIndex: 0, explanation: "It would make the poem a different kind of object. The absence is a design feature of the page rather than a slight.", sourceLessonSlug: "jrf-what-an-acquiring-editor-does" },
          { prompt: "Whom does the popular paraphrase of the Hughes passage leave out?", options: ["Charles S. Johnson and Alain Locke", "Zora Neale Hurston and Arna Bontemps, who are named later in the same paragraph", "W. E. B. Du Bois and Augustus Granville Dill, Fauset's two colleagues at the magazine", "Countee Cullen and Gwendolyn Bennett, who both read poems at the Civic Club dinner"], correctIndex: 0, explanation: "Hughes distributed the credit across three people. A paraphrase keeping only Fauset has quietly promoted her.", sourceLessonSlug: "jrf-the-quotation-and-what-it-drops" },
          { prompt: "In which of Hughes's books does the passage appear?", options: ["The Big Sea", "The Weary Blues, the 1926 collection that his early Crisis poems were gathered into", "Fine Clothes to the Jew, the collection whose reception he discusses at length elsewhere", "I Wonder as I Wander, the later volume covering his travels outside the United States"], correctIndex: 0, explanation: "His 1940 autobiography, in the chapter titled \"Poetry Is Practical\".", sourceLessonSlug: "jrf-the-quotation-and-what-it-drops" },
          { prompt: "What phrase does Hughes actually use for the literature?", options: ["The so-called New Negro literature", "The Harlem Renaissance, which was the term generally in use by the time he was writing", "The new Negro art movement, a phrase he attributes in the same passage to Alain Locke", "The literature of the awakening, borrowing a term from the Survey Graphic Harlem number"], correctIndex: 0, explanation: "He is holding the movement's own label at arm's length, in 1940, from inside it.", sourceLessonSlug: "jrf-the-quotation-and-what-it-drops" },
          { prompt: "What does the paragraph immediately before the passage say?", options: ["Charles S. Johnson did more than anyone else in America", "That Alain Locke's anthology was the single most important book of the decade for Black writers", "That The Crisis published more new Black poets in the 1920s than any other American magazine", "That Fauset's luncheon invitations were the first encouragement most young writers received"], correctIndex: 0, explanation: "Hughes wrote that Johnson did more to encourage and develop Negro writers during the 1920s than anyone else in America.", sourceLessonSlug: "jrf-the-quotation-and-what-it-drops" },
          { prompt: "Why does the course print the harder version of the quotation?", options: ["The inflated version collapses when anyone checks", "Because copyright rules require a quotation to be reproduced without any abridgement at all", "Because the longer version happens to be the one most anthologies of Hughes reproduce", "Because Hughes revised the passage in a later edition and the course prefers his final wording"], correctIndex: 0, explanation: "An argument built on the strongest available claim loses the first time somebody opens the book. One built on what the book says survives.", sourceLessonSlug: "jrf-the-quotation-and-what-it-drops" },
          { prompt: "What three things does paraphrase predictably drop?", options: ["Qualifiers, other names, period vocabulary", "Dates, place names and the titles of the works being discussed in the original passage", "Attribution, page references and any indication of where the quotation begins and ends", "Irony, humour and any suggestion that the writer disagreed with what was being described"], correctIndex: 0, explanation: "The result is a careful sentence turned into a slogan, and the drift always runs in the direction of a stronger claim.", sourceLessonSlug: "jrf-the-quotation-and-what-it-drops" },
          { prompt: "What is the transferable move this lesson teaches?", options: ["Read the sentences on either side of a quotation", "Prefer the version of a quotation that appears in the largest number of secondary sources", "Check whether the person quoted was in a position to know what they were describing", "Establish the earliest published appearance of a quotation before repeating it anywhere"], correctIndex: 0, explanation: "Find the original, read its neighbours, and ask what the paraphrase dropped, because paraphrase drops in a predictable direction.", sourceLessonSlug: "jrf-the-quotation-and-what-it-drops" },
          { prompt: "Where was Alain Locke based, in Hughes's sentence?", options: ["Washington", "New York, where he edited the Harlem number of the magazine Survey Graphic", "Boston, where he had taken his doctorate before returning to teach in the South", "Philadelphia, where he and Fauset had both been educated before moving to New York"], correctIndex: 0, explanation: "Hughes places him \"in Washington\", where he taught at Howard University.", sourceLessonSlug: "jrf-the-quotation-and-what-it-drops" },
          { prompt: "Which magazine does Hughes attach to Charles Johnson in the passage?", options: ["Opportunity", "The Messenger, the monthly he had helped establish earlier in the decade", "The Survey, whose editor he had persuaded to devote a special issue to Harlem", "The Nation, where his essay on the younger Negro artists had appeared in 1926"], correctIndex: 0, explanation: "Fauset at The Crisis, Johnson at Opportunity, Locke in Washington. Three people, three positions.", sourceLessonSlug: "jrf-the-quotation-and-what-it-drops" },
          { prompt: "Which writers does Hughes name in the sentences right after the passage?", options: ["Cullen, Hurston, Bontemps, Fisher, Thurman, Toomer, Larsen", "Du Bois, Johnson, Locke, White and the other speakers at the Civic Club dinner", "McKay, Dunbar, Chesnutt and the earlier generation the New Negro writers succeeded", "Bennett, Spencer, Georgia Douglas Johnson and the women poets Fauset had published"], correctIndex: 0, explanation: "He lists his own cohort and adds that most of them are grown up now, some silent, and some dead.", sourceLessonSlug: "jrf-the-quotation-and-what-it-drops" },
          { prompt: "What word does the course use for how a quoted sentence changes as it travels?", options: ["Quotation drift", "Transcription error, the accumulated mistakes of copying a passage by hand many times", "Attribution creep, the gradual reassignment of a quotation to a more famous speaker", "Citation collapse, the loss of the reference that would let a reader locate the original"], correctIndex: 0, explanation: "The drift reliably strengthens the claim and removes the hedges.", sourceLessonSlug: "jrf-the-quotation-and-what-it-drops" },
          { prompt: "What is the risk of arguing from the strongest available claim?", options: ["It fails the first time someone reads the source", "It provokes an opponent into making an equally exaggerated claim in the other direction", "It requires more evidence to support than a weaker claim about the same person would", "It commits the writer to defending a position they may later find they do not hold"], correctIndex: 0, explanation: "And when it fails it discredits the verified material standing next to it, which is the real cost.", sourceLessonSlug: "jrf-the-quotation-and-what-it-drops" },
          { prompt: "What kind of evidence does the course say is stronger than an adjective about Fauset?", options: ["An acquired writer describing the transaction", "A contemporary review praising the quality of the work she selected for the magazine", "A count of how many poems appeared in the magazine during the years she was there", "A statement from the organisation that employed her about the value of her service"], correctIndex: 0, explanation: "Hughes describing, in his own memoir, how she accepted his work and what he sent her next.", sourceLessonSlug: "jrf-the-quotation-and-what-it-drops" },
          { prompt: "What does the word \"conducted\" do in a period masthead?", options: ["It names whose editorial direction the magazine followed", "It records that the named person also managed the printing and distribution arrangements", "It indicates that the magazine was produced under contract rather than owned outright", "It signals that the named person was responsible for the magazine's financial affairs"], correctIndex: 0, explanation: "It is a strong word, chosen in an era when mastheads were read closely, and it appears before Du Bois's name.", sourceLessonSlug: "jrf-two-jobs" },
          { prompt: "What does the course say a mechanism explains?", options: ["A pattern, not an individual case", "The motive of the person who benefited from a particular missing credit", "Why a specific decision was taken by a specific editor on a specific day", "How much of a collaborative work each participant was actually responsible for"], correctIndex: 0, explanation: "A claim about a person has to rest on that person's own documents, never on the pattern.", sourceLessonSlug: "jrf-two-jobs" },
          { prompt: "What did Fauset also edit besides The Crisis?", options: ["A children's magazine", "A weekly newspaper published for the Association's branch membership across the country", "An annual anthology of new writing drawn from the magazine's prize competitions", "A French-language quarterly circulated among Black intellectuals in Paris and New York"], correctIndex: 0, explanation: "The Brownies' Book, run out of the same circle and published by DuBois and Dill.", sourceLessonSlug: "jrf-two-jobs" },
          { prompt: "In what year did Merton publish the Matthew effect paper?", options: ["1968", "1993, the same year the companion effect was named after Matilda Joslyn Gage", "1949, in the first edition of his collected essays on the sociology of science", "1977, in a follow-up study that measured how citation counts accumulate over time"], correctIndex: 0, explanation: "In Science, volume 159. Rossiter's Matilda paper came in 1993.", sourceLessonSlug: "jrf-two-jobs" },
          { prompt: "In what year did Rossiter name the Matilda effect?", options: ["1993", "1968, in the same issue of Science that carried Merton's paper on the Matthew effect", "1982, in the first volume of her history of women scientists in America", "2003, in a retrospective assessing how the earlier effect had been applied by others"], correctIndex: 0, explanation: "In Social Studies of Science, twenty-five years after Merton.", sourceLessonSlug: "jrf-two-jobs" },
          { prompt: "What is the significance of Fauset being a woman working for a famous man?", options: ["It puts both named effects on one person", "It meant she was paid less than the male members of the magazine's editorial staff", "It explains why her name was printed in smaller type than his on the masthead", "It shows she could not have exercised any real authority over what the magazine printed"], correctIndex: 0, explanation: "Less eminent than the writers she published, and a woman beside a very famous man. That is the intersection the course studies.", sourceLessonSlug: "jrf-two-jobs" },
          { prompt: "What is an acquiring editor, as distinct from other kinds?", options: ["One who decides what a publication takes", "One who buys the rights to books already published elsewhere for reissue in a new market", "One who negotiates contracts with writers once a decision to publish has been taken", "One who corrects grammar, spelling and house style in work that has already been accepted"], correctIndex: 0, explanation: "The distinction matters because it names the labour at issue rather than gesturing at editorial work in general.", sourceLessonSlug: "jrf-what-an-acquiring-editor-does" },
          { prompt: "Why does the course say the invisibility operates on everyone who holds the job?", options: ["The page has no slot, whoever is sitting there", "Because editors are trained from the outset to avoid drawing attention to their own work", "Because most literary editors of the period worked under agreements forbidding attribution", "Because readers of literary magazines have never been interested in who selected the contents"], correctIndex: 0, explanation: "It is a property of the format, so it is not specific to Fauset and would apply to a man in the same chair.", sourceLessonSlug: "jrf-what-an-acquiring-editor-does" },
          { prompt: "What did Hughes say the three people did, in his own verb?", options: ["Midwifed the literature into being", "Founded the movement and gave it the name by which it is now generally known", "Discovered the writers who would define the decade and brought them to a national audience", "Financed the publication of the first books by nearly every writer of the younger generation"], correctIndex: 0, explanation: "And he adds that, kind and critical, they nursed the younger writers along until their books were born.", sourceLessonSlug: "jrf-the-quotation-and-what-it-drops" },
          { prompt: "How does this course describe the relationship between the two named effects?", options: ["Sequential rather than additive", "Competing, since each predicts a different destination for a stripped contribution", "Identical, since both describe the same underlying process under two different names", "Independent, since one concerns eminence and the other concerns sex with no overlap"], correctIndex: 0, explanation: "One strips the contribution, the other decides where it lands. Section 4 works that out on the Civic Club dinner.", sourceLessonSlug: "jrf-two-jobs" },
          { prompt: "What survives of a magazine's rejection decisions?", options: ["Almost nothing a reader can consult", "A complete file, since magazines of the period were required to keep submission records", "The rejected pieces themselves, which were returned to writers with the editor's reasons", "A summary published annually showing how many submissions were received and declined"], correctIndex: 0, explanation: "Which is why selection is invisible by construction: a reader sees what ran and never the pile it came from.", sourceLessonSlug: "jrf-what-an-acquiring-editor-does" },
          { prompt: "What was the first of Hughes's poems published outside his school magazine?", options: ["The Negro Speaks of Rivers", "The Weary Blues, the title poem of the collection announced in the Chicago Defender", "Fairies, the short poem that opened the January 1921 number of the children's magazine", "Mother to Son, which appeared in the same magazine later in the same year"], correctIndex: 0, explanation: "It ran in The Crisis in June 1921, and Hughes says so himself in The Big Sea.", sourceLessonSlug: "jrf-two-jobs" },
          { prompt: "What does the course say happens to a reader who catches one false claim?", options: ["They stop trusting the surrounding true material", "They write to the publication to request that a correction be printed in a later issue", "They generally accept the remainder of the argument if the error is a minor one", "They look for the original source of the error rather than blaming the current author"], correctIndex: 0, explanation: "Which is why an inflated claim costs more than it gains, even when everything around it is sound.", sourceLessonSlug: "jrf-the-quotation-and-what-it-drops" },
          { prompt: "What does the course mean by calling something teachable rather than merely moving?", options: ["A record survives that a learner can go and check", "The story has a clear villain whose behaviour a learner can be warned against", "The events took place recently enough for participants to still be interviewed", "The subject appears on enough school syllabuses for the material to be familiar"], correctIndex: 0, explanation: "The masthead, the postal filing and the memoir are all consultable, which is what makes this a method rather than an anecdote.", sourceLessonSlug: "jrf-two-jobs" },
          { prompt: "What is the difference between selection and revision as editorial tasks?", options: ["One says yes or no; the other asks for changes", "One is done by the literary editor and the other by the magazine's business manager", "One happens before publication and the other only after a piece has already appeared", "One is recorded on the contents page and the other in the statement of ownership"], correctIndex: 0, explanation: "Selection chooses from a pile. Revision asks for a cut stanza or an earned ending, and leaves almost no trace at all.", sourceLessonSlug: "jrf-what-an-acquiring-editor-does" },
          { prompt: "Why is a network described as compounding?", options: ["It keeps producing after the editor stops", "Because each new member introduced doubles the number of possible collaborations", "Because writers who meet each other tend to submit to the same magazine repeatedly", "Because a magazine's reputation grows with each well-known writer it can claim to have found"], correctIndex: 0, explanation: "Which is why introduction is the task with the largest downstream effect and the least documentation.", sourceLessonSlug: "jrf-what-an-acquiring-editor-does" },
          { prompt: "What did Hughes call the literature \"so-called\" for?", options: ["To hold the movement's own label at a distance", "To indicate that he was quoting a phrase coined by Alain Locke in his anthology", "To suggest that the writing itself had not lived up to the name given to it", "To mark that the term had gone out of use by the time he was writing in 1940"], correctIndex: 0, explanation: "He was inside the movement and writing about it wryly, which is exactly the tone a paraphrase smooths away.", sourceLessonSlug: "jrf-the-quotation-and-what-it-drops" },
          { prompt: "What is the course's stated preference about its own claims?", options: ["Correctable over repeatable", "Comprehensive over selective, so that no relevant fact is left out of the account", "Contemporary over retrospective, preferring sources written closest to the events", "Quantitative over qualitative, preferring counts to characterisations wherever possible"], correctIndex: 0, explanation: "It would rather be corrected than repeated, which only works if every claim is one a reader can go and test.", sourceLessonSlug: "jrf-the-quotation-and-what-it-drops" },
          { prompt: "Which of these is a fact about a decision rather than about a page?", options: ["An editor solicited a particular poem", "A poem appeared on page 71 of the June 1921 issue of the magazine", "A magazine printed forty-eight pages that month because of a shortage of paper", "A writer's name appeared in the contents list of an issue published during a tenure"], correctIndex: 0, explanation: "Section 5 turns this distinction into the course's central evidentiary rule.", sourceLessonSlug: "jrf-what-an-acquiring-editor-does" },
          { prompt: "What does the course say about credit for a movement?", options: ["It travels to whoever signed the poems", "It is divided among participants in proportion to the hours each of them worked", "It settles on whichever participant lived longest and was able to write the history", "It attaches to the institution rather than to any individual associated with it"], correctIndex: 0, explanation: "The names on a syllabus are the names on the work, and the person who chose the work is not among them.", sourceLessonSlug: "jrf-two-jobs" },
        ],
      },
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
    {
      slug: "jrf-quiz-the-magazine",
      title: "Knowledge check: the masthead, the acquisitions, the authority",
      section: "Section 2 · What the magazine itself settles",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          { prompt: "In which month did Fauset join The Crisis staff?", options: ["October 1919", "November 1919, the month her name first appeared on the printed masthead", "June 1919, immediately after taking her master's degree at the University of Pennsylvania", "January 1920, the month the children's magazine published its first number"], correctIndex: 0, explanation: "The November 1919 issue says she joined \"last month\", which from a November issue means October.", sourceLessonSlug: "jrf-what-the-masthead-settles" },
          { prompt: "Which issue carries her first masthead entry?", options: ["November 1919", "October 1919, the issue immediately preceding the one announcing her appointment", "December 1919, one month after the news note announcing that she had joined", "May 1920, once the magazine had completed its annual redesign of the front matter"], correctIndex: 0, explanation: "Volume 19, number 1, whole number 109. The line then runs unchanged in substance for six and a half years.", sourceLessonSlug: "jrf-what-the-masthead-settles" },
          { prompt: "Which was her last issue as Literary Editor?", options: ["April 1926", "May 1926, the issue in which Du Bois announced that her duties were changing", "February 1927, the last issue on which her name appears anywhere in the masthead", "December 1925, after which the magazine's masthead was redesigned into a new format"], correctIndex: 0, explanation: "Volume 31, number 6. The May 1926 masthead already reads Contributing Editor.", sourceLessonSlug: "jrf-what-the-masthead-settles" },
          { prompt: "What title did she move to in May 1926?", options: ["Contributing editor", "Associate editor, sharing the literary pages with a newly appointed assistant", "Art critic, a post the magazine created when it redesigned its masthead", "Managing editor, taking over the production duties from the business manager"], correctIndex: 0, explanation: "Du Bois called them \"the less exacting duties of Contributing Editor\" in his own Opinion column.", sourceLessonSlug: "jrf-what-the-masthead-settles" },
          { prompt: "Who announced the change of title, and where?", options: ["Du Bois, in his Opinion column", "The business manager, in the annual statement of ownership for that year", "The NAACP board, in the report of its annual meeting printed in the same issue", "Fauset herself, in a farewell note printed at the end of her book column"], correctIndex: 0, explanation: "Under the heading \"Miss Fauset\", in the May 1926 issue, volume 32 number 1, whole number 187.", sourceLessonSlug: "jrf-what-the-masthead-settles" },
          { prompt: "Which was the last issue to carry her name in the masthead at all?", options: ["February 1927", "April 1926, her final month running the magazine's literary pages", "May 1926, the issue in which her change of duties was announced", "December 1926, the last issue of the year in which her role changed"], correctIndex: 0, explanation: "Volume 33, number 4. In March 1927 the masthead was redesigned and her name is gone.", sourceLessonSlug: "jrf-what-the-masthead-settles" },
          { prompt: "Whose names appear on the redesigned March 1927 masthead?", options: ["Du Bois, Dill and Aaron Douglas", "Du Bois, Fauset and Dill, in the same order they had appeared for seven years", "Du Bois alone, since the magazine had by then dispensed with a named staff listing", "Du Bois, Walter White and James Weldon Johnson, reflecting the Association's leadership"], correctIndex: 0, explanation: "Du Bois as Editor, Dill as Business Manager, Douglas as Art Critic. Fauset's name is absent.", sourceLessonSlug: "jrf-what-the-masthead-settles" },
          { prompt: "How long was her tenure as Literary Editor, precisely?", options: ["Six years and seven months", "Seven years and one month, counting from her appointment to the redesign of the masthead", "Five years and six months, counting only the issues she personally saw through the press", "Eight years, if the year she spent editing the children's magazine is counted separately"], correctIndex: 0, explanation: "October 1919 to April 1926. The magazine's own farewell rounded it to seven.", sourceLessonSlug: "jrf-what-the-masthead-settles" },
          { prompt: "Where does the widely repeated \"seven years\" come from?", options: ["Du Bois's farewell notice", "The obituary published after her death, which every later account has followed", "The statement of ownership filed with the Post Office for the year 1926", "A summary of staff service printed in the Association's annual report for 1925"], correctIndex: 0, explanation: "\"After seven years' active service\", written in a farewell paragraph rather than taken off a payroll.", sourceLessonSlug: "jrf-what-the-masthead-settles" },
          { prompt: "What is a whole number, on a periodical?", options: ["Its running count of every issue ever published", "The number of copies printed of a particular issue, declared in the postal filing", "The total pages an issue contains, printed at the foot of the contents page", "The volume number multiplied by the issue number, used for binding purposes"], correctIndex: 0, explanation: "It is a second, independent way to place an issue in a run, which is useful when volume numbering shifts.", sourceLessonSlug: "jrf-what-the-masthead-settles" },
          { prompt: "In what sense is \"she left The Crisis in 1926\" imprecise?", options: ["She stayed on the masthead until February 1927", "She had already stopped choosing the literary content in the middle of 1925", "She continued as literary editor in all but name for another two years afterwards", "She never formally resigned and simply stopped appearing at the office"], correctIndex: 0, explanation: "She left the working chair in 1926 and the magazine in 1927, which are two different events.", sourceLessonSlug: "jrf-what-the-masthead-settles" },
          { prompt: "What does the course say about a claim every source states identically?", options: ["They probably all copied one source", "It is likely to be true, since independent agreement is the strongest form of evidence", "It should be discarded, since agreement between sources indicates none of them checked", "It usually originates in a primary document that has since been lost or destroyed"], correctIndex: 0, explanation: "Which is why going past the copies to a digitized original is worth the afternoon it takes.", sourceLessonSlug: "jrf-what-the-masthead-settles" },
          { prompt: "What makes a masthead a good source for a tenure question?", options: ["It is dated and printed every month", "It is filed with a government office and therefore carries a legal penalty for error", "It is written by the person named rather than by anyone else on the staff", "It records the salary attached to each post as well as the name of its holder"], correctIndex: 0, explanation: "So the question is answerable by turning pages rather than by weighing accounts against each other.", sourceLessonSlug: "jrf-what-the-masthead-settles" },
          { prompt: "What did Du Bois promise readers in the same farewell notice?", options: ["More of her essays would appear", "That her successor as literary editor would be announced in the following number", "That she would continue to select the poetry even while holding the new title", "That the magazine would reprint her earlier book columns in a collected volume"], correctIndex: 0, explanation: "He wrote that readers would still have the opportunity of following her gifted pen, and that several essays would appear soon.", sourceLessonSlug: "jrf-what-the-masthead-settles" },
          { prompt: "What two claims does the phrase \"Fauset published Hughes\" run together?", options: ["Appearing during her tenure, and being acquired by her", "Being paid by the magazine, and being selected for its pages", "Being printed in the magazine, and being reprinted in a later anthology", "Being solicited by letter, and being revised before publication"], correctIndex: 0, explanation: "One is a fact about a contents page. The other is a fact about a decision, and decisions are recorded far less often.", sourceLessonSlug: "jrf-acquired-versus-published" },
          { prompt: "What can a contents page prove?", options: ["That a piece appeared", "That an editor solicited the piece from the writer before it was submitted", "That the literary editor rather than the editor made the decision to run it", "That the piece was preferred over other submissions received in the same month"], correctIndex: 0, explanation: "It records what ran, and nothing whatsoever about who chose it.", sourceLessonSlug: "jrf-acquired-versus-published" },
          { prompt: "Which acquisition does the record settle completely?", options: ["Langston Hughes", "Countee Cullen, whose early Crisis poems Fauset is documented to have solicited", "Jean Toomer, who described the transaction in a letter now held in an archive", "Nella Larsen, whose first published work Fauset accepted for the children's magazine"], correctIndex: 0, explanation: "Because Hughes described the sequence himself in The Big Sea, while Fauset was alive to contradict him.", sourceLessonSlug: "jrf-acquired-versus-published" },
          { prompt: "What did Hughes send to The Brownies' Book before The Crisis?", options: ["Prose and a children's play", "A group of blues poems that the magazine's editors judged unsuitable for children", "A translation of Mexican folk songs he had collected while living with his father", "A letter asking whether the magazine accepted work from writers still at school"], correctIndex: 0, explanation: "An article about Toluca, one about the Virgin of Guadalupe, and a play called The Gold Piece, all accepted.", sourceLessonSlug: "jrf-acquired-versus-published" },
          { prompt: "According to Hughes, what came back from Fauset?", options: ["Encouraging letters", "A cheque, which he says was the first money he ever earned from writing", "A request that he cut and resubmit the pieces before they could be accepted", "An invitation to join the staff of the children's magazine as an assistant"], correctIndex: 0, explanation: "And it was because of those letters that he sent her \"The Negro Speaks of Rivers\" directly.", sourceLessonSlug: "jrf-acquired-versus-published" },
          { prompt: "In which issue did \"The Negro Speaks of Rivers\" appear?", options: ["June 1921", "January 1921, alongside his poem \"Fairies\" in the children's magazine", "July 1921, in the same number as his children's play \"The Gold Piece\"", "June 1922, a year after he first submitted it to the magazine's literary editor"], correctIndex: 0, explanation: "The Crisis, volume 22 number 2, whole number 128, on page 71.", sourceLessonSlug: "jrf-acquired-versus-published" },
          { prompt: "What title does the 1921 Brownies' Book postal filing give Fauset?", options: ["Managing editor", "Literary editor, the same title she held at The Crisis throughout those years", "Editor, jointly with Du Bois, who is named as her co-editor in the same filing", "Owner, alongside Du Bois and Dill, in the partnership that published the magazine"], correctIndex: 0, explanation: "The 1920 filing had named Du Bois in that role. The 1921 filing names Fauset.", sourceLessonSlug: "jrf-acquired-versus-published" },
          { prompt: "Name two Hughes pieces the children's magazine ran in 1921.", options: ["\"Fairies\" and \"The Gold Piece\"", "\"The Weary Blues\" and \"Mother to Son\", both later collected in his first book", "\"I, Too\" and \"Dream Variations\", which he had written during his year in Mexico", "\"Danse Africaine\" and \"The South\", which appeared in The Crisis in the same year"], correctIndex: 0, explanation: "Along with \"Winter Sweetness\", \"Signs of Spring\", \"An April Rain Song\", \"Mexican Games\" and \"In a Mexican City\".", sourceLessonSlug: "jrf-acquired-versus-published" },
          { prompt: "Which names does the course say the record does NOT settle?", options: ["Cullen, Toomer, Spencer, Bontemps and Bennett", "Langston Hughes, whose account of the transaction is a memoir rather than a document", "Du Bois and Dill, whose editorial roles are recorded only in the postal filings", "Gwendolyn Bennett alone, since her only Crisis appearance was a single dedicated poem"], correctIndex: 0, explanation: "They all appear in The Crisis during her tenure, which the contents pages prove. Who chose each piece, they cannot.", sourceLessonSlug: "jrf-acquired-versus-published" },
          { prompt: "Why is Claude McKay the case most often overstated?", options: ["He was an editor at The Liberator in the same years", "Because his work appeared in The Crisis only after Fauset had already left the magazine", "Because he was living in Britain throughout the period she was running the literary pages", "Because he published under a pen name, so his Crisis appearances cannot be identified"], correctIndex: 0, explanation: "He published extensively there. Treating his career as something Fauset launched imports a relationship the record does not show.", sourceLessonSlug: "jrf-acquired-versus-published" },
          { prompt: "Name a kind of evidence that would settle an acquisition claim.", options: ["A letter soliciting a specific piece", "A contents page listing the piece with the editor's initials beside the entry", "The magazine's annual report, which lists every piece published in the year", "A statement from the publisher confirming that the editor was employed at the time"], correctIndex: 0, explanation: "Or a submission addressed to her by name, a marked typescript, or a memoir sentence like the one Hughes wrote.", sourceLessonSlug: "jrf-acquired-versus-published" },
          { prompt: "What does the course say about admitting the record does not settle a case?", options: ["It is the finding, not a weakness in it", "It is a reason to omit the writer's name from the course altogether", "It is a temporary position that further searching would certainly resolve", "It is a formality that need not be repeated once it has been stated once"], correctIndex: 0, explanation: "Saying which claims rest on documents and which do not is the whole method the course is teaching.", sourceLessonSlug: "jrf-acquired-versus-published" },
          { prompt: "What is a statement of ownership?", options: ["A periodical's required annual disclosure of who runs it", "A publisher's declaration of the copyright it holds in the contents of an issue", "A magazine's public accounting of its subscription revenue for the preceding year", "A notice recording the transfer of a title from one publishing house to another"], correctIndex: 0, explanation: "It names publisher, editor, managing editor, business manager and owners, and it was required by law.", sourceLessonSlug: "jrf-acquired-versus-published" },
          { prompt: "What is the strongest objection to the argument that Fauset was under-credited?", options: ["That the magazine was Du Bois's", "That she was in fact widely praised in the press during the years she held the post", "That she received a masthead credit every month, which is a form of public attribution", "That her four published novels gave her more public credit than most editors ever get"], correctIndex: 0, explanation: "If the magazine was conducted by Du Bois, how much of what ran there was her decision at all? Lesson 6 works it.", sourceLessonSlug: "jrf-whose-magazine-was-it" },
          { prompt: "Give one piece of evidence that her authority was real.", options: ["A legal filing naming her managing editor", "A signed contract setting out the range of decisions she was entitled to take", "A note from Du Bois confirming that he did not read submissions himself", "A statement in the magazine that no poem ran without her personal approval"], correctIndex: 0, explanation: "Along with her printed title, her signed book column, and Du Bois calling the duties she left \"exacting\".", sourceLessonSlug: "jrf-whose-magazine-was-it" },
          { prompt: "Give one piece of evidence that her authority was bounded.", options: ["The masthead says the magazine was conducted by Du Bois", "The magazine's contents were approved each month by the NAACP board of directors", "Her salary was set by the business manager rather than negotiated with the editor", "She was required to submit her book column to Du Bois before it could be printed"], correctIndex: 0, explanation: "He also wrote the Opinion column opening every issue, and owned the children's magazine jointly with Dill.", sourceLessonSlug: "jrf-whose-magazine-was-it" },
          { prompt: "What was Fauset's signed column in The Crisis called?", options: ["On the Book Shelf", "The Looking Glass, the magazine's monthly survey of the Black press", "The Horizon, the news column reporting events of interest to readers", "As the Crow Flies, the current-affairs feature carried in the children's magazine"], correctIndex: 0, explanation: "It ran under her own name, which makes it one of the few parts of her editorial work that carried a byline.", sourceLessonSlug: "jrf-whose-magazine-was-it" },
          { prompt: "Who owned the company that published The Brownies' Book?", options: ["Du Bois and Dill", "The NAACP, which also owned and published The Crisis in the same years", "Du Bois, Dill and Fauset, in equal shares recorded in the annual postal filing", "Boni and Liveright, the firm that also published Fauset's first novel in 1924"], correctIndex: 0, explanation: "So she was the working editor of a magazine two other people owned, which the ownership statement records.", sourceLessonSlug: "jrf-whose-magazine-was-it" },
          { prompt: "What has nobody produced, on either side of the control question?", options: ["A document showing either overruling the other", "A copy of the magazine's editorial policy for the years in question", "The correspondence file covering submissions to the literary pages", "A statement from a third member of staff who witnessed their working relationship"], correctIndex: 0, explanation: "In the absence of such a document the argument runs on inference, which is as strong as the arguer wants it to be.", sourceLessonSlug: "jrf-whose-magazine-was-it" },
          { prompt: "What verdict does the course state on the control question?", options: ["Documented authority, exercised inside another person's line", "That Du Bois made every substantive decision and Fauset executed them", "That Fauset had complete freedom over the literary pages throughout her tenure", "That the question cannot be discussed at all without further archival evidence"], correctIndex: 0, explanation: "Both halves are true at once, and a course that dropped either half would be selling something.", sourceLessonSlug: "jrf-whose-magazine-was-it" },
          { prompt: "Why does the Du Bois objection not defeat the course's thesis?", options: ["The thesis is about the byline, not the size of her share", "Because the objection has been shown to rest on a misreading of the masthead", "Because Du Bois publicly credited her with all the magazine's literary decisions", "Because her work at the children's magazine was entirely independent of him"], correctIndex: 0, explanation: "Choosing leaves no printed credit regardless of how much of it a person did, and that would be true of a man in the chair.", sourceLessonSlug: "jrf-whose-magazine-was-it" },
          { prompt: "What does the Matilda effect add to the control objection?", options: ["It predicts the residue lands on the famous man beside her", "It predicts that a woman in the post will be given a lesser title than a man would", "It predicts that the objection itself will be raised more often about women than men", "It predicts that the magazine will be remembered as hers rather than as his"], correctIndex: 0, explanation: "Which is precisely the shape of the sentence people write: Du Bois's Crisis published Langston Hughes.", sourceLessonSlug: "jrf-whose-magazine-was-it" },
          { prompt: "What is bounded authority?", options: ["Real decision power exercised inside someone else's limits", "Authority that expires at a fixed date set out in an employment agreement", "Power delegated in writing, so that its extent can be established from a document", "Authority over a defined subject area with no superior able to review the decisions"], correctIndex: 0, explanation: "The course notes it is the normal condition of staff work rather than anything peculiar to her.", sourceLessonSlug: "jrf-whose-magazine-was-it" },
          { prompt: "What is an argument from inference?", options: ["Reasoning from what is likely rather than from a document", "Reasoning backwards from a known outcome to the decision that must have produced it", "Reasoning from a general pattern to the specific motive of a named individual", "Reasoning from what a source omits rather than from what it actually says"], correctIndex: 0, explanation: "The course's objection to it here is that it is exactly as strong as the person making it wants it to be.", sourceLessonSlug: "jrf-whose-magazine-was-it" },
          { prompt: "What volume and number was the November 1919 Crisis?", options: ["Volume 19, number 1", "Volume 22, number 2, the issue that carried Hughes's first published poem", "Volume 32, number 1, the issue announcing her change of editorial duties", "Volume 18, number 6, the last issue before her appointment took effect"], correctIndex: 0, explanation: "Whole number 109, and the first issue to print her name on the masthead.", sourceLessonSlug: "jrf-what-the-masthead-settles" },
          { prompt: "What was the whole number of the May 1926 issue?", options: ["187", "109, the same issue in which her appointment had been announced seven years before", "128, the issue in which Hughes's first Crisis poem had appeared", "163, the issue reporting the Civic Club dinner held in her honour"], correctIndex: 0, explanation: "Volume 32, number 1, whole number 187, carrying Du Bois's notice of her change of duties.", sourceLessonSlug: "jrf-what-the-masthead-settles" },
          { prompt: "Where was Fauset's master's degree taken, according to the magazine?", options: ["The University of Pennsylvania", "Cornell, where she had earlier taken her bachelor's degree and her Phi Beta Kappa key", "Columbia, where she studied while working on the magazine's literary pages", "The Sorbonne, during the six months she spent in Paris in 1924 and 1925"], correctIndex: 0, explanation: "The 1919 note says she held a University scholarship there and took the degree in June of that year.", sourceLessonSlug: "jrf-what-the-masthead-settles" },
          { prompt: "What does the course say the imprecise date range hides?", options: ["That she stayed ten more months, and that seven years is rounded", "That she was absent from the magazine for six months during 1924 and 1925", "That she held two different titles at the magazine during the same period", "That the magazine changed hands during the years she was working there"], correctIndex: 0, explanation: "Two facts, both recoverable by turning pages, and both invisible in the phrase 1919 to 1926.", sourceLessonSlug: "jrf-what-the-masthead-settles" },
          { prompt: "What is the difference between a memoir sentence and a contents page as evidence?", options: ["One records a decision, the other records an outcome", "One was written closer to the events than the other and is therefore more reliable", "One is a primary source and the other is a secondary source under the usual definitions", "One can be dated precisely and the other cannot be dated at all"], correctIndex: 0, explanation: "Which is why Hughes's account settles his own case and a table of contents settles nobody's.", sourceLessonSlug: "jrf-acquired-versus-published" },
          { prompt: "What magazine was Hughes submitting to when he first dealt with Fauset by name?", options: ["The Brownies' Book", "The Crisis, where he sent the poem he had written on the train to Mexico", "Opportunity, which ran the literary contests Charles S. Johnson had established", "The Liberator, where Claude McKay was working as an editor at the time"], correctIndex: 0, explanation: "The children's magazine, where she was managing editor of record in 1921.", sourceLessonSlug: "jrf-acquired-versus-published" },
          { prompt: "What did Hughes say he owed to The Crisis?", options: ["His literary beginnings, so far as publication went", "The whole of his early income, since the magazine paid better than any other", "His introduction to Alain Locke, who wrote to him after reading his first poem", "His decision to leave Columbia and take work on a ship bound for Africa"], correctIndex: 0, explanation: "He adds that for the next few years his poems appeared often, and solely, in that magazine.", sourceLessonSlug: "jrf-acquired-versus-published" },
          { prompt: "What did the 1920 Brownies' Book postal filing name Du Bois as?", options: ["Managing editor", "Business manager, alongside Dill who is named as the magazine's publisher", "Literary editor, a post Fauset took over from him in the following year", "Sole owner, with Dill named only as an employee of the publishing partnership"], correctIndex: 0, explanation: "Editor and managing editor both. The 1921 filing moves the managing editor line to Fauset.", sourceLessonSlug: "jrf-acquired-versus-published" },
          { prompt: "Why is a compelled disclosure stronger evidence than a masthead credit?", options: ["It is harder to inflate", "It is printed in larger type and therefore harder for a reader to overlook", "It is filed with a court rather than merely published in the magazine itself", "It must be signed personally by every individual it names as an officer"], correctIndex: 0, explanation: "A courtesy line can be generous. A filing required by law describes who actually held the role.", sourceLessonSlug: "jrf-acquired-versus-published" },
          { prompt: "How does the course describe Hughes calling her the managing editor of The Crisis?", options: ["Compressed rather than wrong", "A deliberate promotion, since he wished to strengthen his account of her authority", "An error introduced by his publisher during the editing of the 1940 autobiography", "A reference to a later period, after she had returned to the magazine in a new role"], correctIndex: 0, explanation: "He was writing in 1940 about a period when he submitted to both magazines, and at one of them that was exactly her title.", sourceLessonSlug: "jrf-acquired-versus-published" },
          { prompt: "What did the course have to do to establish the tenure dates?", options: ["Turn the pages of the digitized magazine", "Consult the personnel records held in the Association's archive in New York", "Compare the accounts given by three standard biographies of Fauset", "Write to the magazine's present-day editors to ask for its historical staff list"], correctIndex: 0, explanation: "And it took less time than reading three encyclopedia entries that all say 1919 to 1926.", sourceLessonSlug: "jrf-what-the-masthead-settles" },
          { prompt: "What kind of claim is \"she acquired Countee Cullen\", on the present record?", options: ["Unsupported, though not disproved", "Established, by the contents pages of the issues in which his poems appeared", "Disproved, since Cullen's poems reached the magazine through Alain Locke", "Irrelevant, since Cullen had already published a book before Fauset was appointed"], correctIndex: 0, explanation: "His work appeared during her tenure. Whether she solicited it, or Du Bois handed it to her, the record does not say.", sourceLessonSlug: "jrf-acquired-versus-published" },
          { prompt: "Why does the course refuse to settle the acquisition question by tone of voice?", options: ["Confidence is not evidence", "Because a confident claim invites an equally confident denial from an opponent", "Because the writers concerned are still living and could object to the characterisation", "Because tone is a matter of style and the course has adopted a neutral register throughout"], correctIndex: 0, explanation: "A contents page cannot answer a question about a decision, and no amount of assurance in the prose changes that.", sourceLessonSlug: "jrf-acquired-versus-published" },
          { prompt: "What did Du Bois call the duties she was leaving?", options: ["Exacting", "Onerous, and unsuited to a writer with novels of her own to complete", "Routine, and easily absorbed by the remaining members of the editorial staff", "Temporary, since the post had always been intended as a short appointment"], correctIndex: 0, explanation: "Which the course reads as evidence against the idea that the job contained no decisions.", sourceLessonSlug: "jrf-whose-magazine-was-it" },
          { prompt: "What word did the masthead use before Du Bois's name?", options: ["Conducted by", "Founded by, recording that he had established the magazine in 1910", "Owned by, reflecting his controlling interest in the publishing company", "Approved by, indicating that he reviewed the contents before each issue went to press"], correctIndex: 0, explanation: "A strong word in an era when mastheads were read closely, and one the course does not pretend away.", sourceLessonSlug: "jrf-whose-magazine-was-it" },
          { prompt: "What does the course mean by an editorial line?", options: ["The settled position and taste a publication runs on", "The sequence of editors who have held the senior post at a publication over time", "The boundary between editorial matter and advertising within a single issue", "The maximum length a magazine will accept for a contribution of a given kind"], correctIndex: 0, explanation: "Usually set by one person and applied by others, which is what makes staff authority bounded rather than absent.", sourceLessonSlug: "jrf-whose-magazine-was-it" },
          { prompt: "Which two claims does the course insist are true at the same time?", options: ["Her authority was documented, and it was bounded", "She acquired every writer she published, and she chose none of them", "She was the magazine's most important editor, and she held no formal title", "She left in 1926, and she remained on the staff until the redesign of 1927"], correctIndex: 0, explanation: "Dropping either half would produce a tidier argument and a less accurate one.", sourceLessonSlug: "jrf-whose-magazine-was-it" },
          { prompt: "What page did Hughes's first Crisis poem appear on?", options: ["Page 71", "Page 53, listed on the contents page of the June 1921 issue", "Page 60, immediately following Fauset's own book column in the same number", "Page 128, corresponding to the whole number of the issue in which it ran"], correctIndex: 0, explanation: "The contents page of the June 1921 issue lists it there, with Fauset's own column at page 60.", sourceLessonSlug: "jrf-acquired-versus-published" },
          { prompt: "What does the course say the filings record?", options: ["The outcome, never the negotiation", "The salary attached to each post as well as the name of its holder", "Both the decision taken and the discussion that preceded it within the office", "The date on which each named officer was appointed to their position"], correctIndex: 0, explanation: "So the change in her title between 1920 and 1921 is visible, and the reason for it is not.", sourceLessonSlug: "jrf-acquired-versus-published" },
          { prompt: "What did the November 1919 note say about her earlier relationship with the magazine?", options: ["She had contributed to its pages for many years", "She had been employed by the Association in another capacity before the appointment", "She had been recommended for the post by the principal of Dunbar High School", "She had edited a rival publication before being invited to join the staff"], correctIndex: 0, explanation: "Which places her appointment as the formalisation of a long existing relationship rather than a fresh hire.", sourceLessonSlug: "jrf-what-the-masthead-settles" },
          { prompt: "How does this course treat the question of Du Bois's control?", options: ["As serious, documented on both sides, and unresolved", "As settled in Fauset's favour by the evidence of the postal filing", "As settled in Du Bois's favour by the wording of the masthead", "As unanswerable, and therefore not worth setting out for a learner"], correctIndex: 0, explanation: "Which is the same treatment the catalogue gives every genuinely contested claim: name the positions, state the verdict, resolve nothing by assertion.", sourceLessonSlug: "jrf-whose-magazine-was-it" },
          { prompt: "What would a marked typescript establish?", options: ["That an editor asked for specific changes", "That a piece was submitted before a particular date in a given year", "That the magazine held the copyright in the work it was preparing to publish", "That the writer had offered the piece to another publication first"], correctIndex: 0, explanation: "It is the only direct evidence of revision, and it survives only where an archive happens to hold one.", sourceLessonSlug: "jrf-acquired-versus-published" },
          { prompt: "What is the course's rule about an unsolicited submission?", options: ["The editor still selects it but does not originate it", "It should not be counted as published under that editor's tenure at all", "It carries more weight as evidence of taste than a solicited piece would", "It is indistinguishable from a solicited piece once it reaches the contents page"], correctIndex: 0, explanation: "Which is a third possibility the contents page cannot distinguish from either solicitation or a handover from the editor.", sourceLessonSlug: "jrf-acquired-versus-published" },
          { prompt: "What phrase from the 1919 note dates her master's degree?", options: ["Last June", "The previous academic year, without naming a month or a season", "Two years since, which places the degree in the summer of 1917", "This spring, indicating she had completed it only weeks before the appointment"], correctIndex: 0, explanation: "From a November 1919 issue, that means June 1919, four months before she started at the magazine.", sourceLessonSlug: "jrf-what-the-masthead-settles" },
          { prompt: "What does the course do when a widely repeated figure comes from a farewell paragraph?", options: ["It prints the measured figure and says where the round one came from", "It adopts the round figure, since the magazine was in a position to know", "It omits the figure entirely, on the ground that no reliable version exists", "It averages the round figure against the measured one to produce a range"], correctIndex: 0, explanation: "Six years and seven months, and a sentence explaining that seven came out of Du Bois's goodbye rather than a payroll.", sourceLessonSlug: "jrf-what-the-masthead-settles" },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3 — The claims that do not survive the record
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "jrf-the-life-in-one-primary-note",
      title: "7 · A life, read off one primary note",
      section: "Section 3 · The claims that do not survive the record",
      body: `The November 1919 issue of *The Crisis* announced its new hire in about ninety words. Those ninety words are the best single document about Fauset's education that exists, because her employer printed them while she was sitting in the office and would have seen them.

> Miss Jessie Redmon Fauset joined THE CRISIS staff last month as Literary Editor. She has for many years been a contributor to our pages. She was born in Philadelphia, educated in the public schools, holding the alumnae scholarship in the High School for Girls, and afterward took her Bachelor's degree at Cornell, where she gained the Phi Beta Kappa key. She has studied in Paris and at the University of Pennsylvania, holding a University scholarship, and took her Master's degree there last June. Formerly Miss Fauset taught Latin and French in the Dunbar High School, D. C. (The Crisis, 1919)

**Read it as a document rather than as a paragraph.** Six checkable claims come out of it. She won a scholarship at the Philadelphia High School for Girls. She took a bachelor's degree at Cornell. She was elected to Phi Beta Kappa. She studied in Paris. She took a master's degree at the University of Pennsylvania, on a University scholarship, in June 1919, four months before she started. She taught Latin and French at Dunbar High School in Washington.

**Two of those repay attention.** The master's degree is dated precisely by "last June", which settles a date some later accounts give as much later. And the Latin and French matter: this is a classicist and a linguist, not a general woman of letters, which is worth holding on to when Section 5 asks what her fiction was trying to do.

**One of them disagrees with almost every modern account.** The note says she was born in Philadelphia. Modern reference works generally place her birth in Camden County, New Jersey, in April 1882, with the family moving to Philadelphia. Both cannot be right, and this course prints neither as settled. The disagreement is filed as an open question rather than resolved by choosing whichever source is more convenient.

**Do not assume the contemporaneous source wins.** That instinct is usually good and it is not a rule. A staff note is written fast, from what somebody remembered or was told, for readers who did not care about a county line, and "born in Philadelphia" is what a Philadelphian says. A modern biographer working from census returns and municipal records may well have better evidence about a birth than a magazine had about a colleague. Recency is not authority and neither is proximity. What settles a birthplace is a birth record.

**The general move.** When a contemporaneous document and a modern account disagree, the useful question is not which source you trust, it is which source was in a position to know this particular fact. A magazine knew her titles and her degrees, because she told them. It had no reason to know which side of the Delaware she was born on.

:::reveal Name three things the 1919 staff note establishes about Fauset's education. ||| A scholarship at the Philadelphia High School for Girls, a bachelor's degree from Cornell with election to Phi Beta Kappa, study in Paris, and a University of Pennsylvania master's taken in June 1919. She had also taught Latin and French at Dunbar High School.

:::reveal What does the 1919 note say about her birthplace, how does that conflict with modern accounts, and what does the course do about it? ||| The note says Philadelphia; modern reference works generally say Camden County, New Jersey. The course prints neither as settled and files the disagreement as an open question.

:::reveal Why is "the contemporaneous source wins" a bad general rule here? ||| Because proximity is not the same as being in a position to know. The magazine knew her degrees because she told them, and had no reason to know which side of a state line she was born on. A later biographer with census and municipal records may have the better evidence about a birth.

## Vocabulary
- **Staff note**: a short in-house announcement of a hire, written quickly, which is excellent evidence of titles and dates and weak evidence of anything nobody in the office needed to check.
- **In a position to know**: the test of whether a given source had access to the specific fact at issue, which matters more than whether it is old or new.
- **Alumnae scholarship**: an award funded by a school's former students, here the one that carried Fauset through the Philadelphia High School for Girls.
- **Open question**: a disagreement the course states and refuses to resolve, recorded so that somebody with the right record can close it later.

## Sources
The Crisis. (1919, November). News note announcing Fauset's appointment. *The Crisis, 19*(1), whole no. 109. https://archive.org/details/sim_crisis_the-crisis_1919-11_19_1

Academy of American Poets. (n.d.). *About Jessie Redmon Fauset*. https://poets.org/poet/jessie-redmon-fauset`,
    },
    {
      slug: "jrf-the-first-that-was-not",
      title: "8 · The first that was not a first",
      section: "Section 3 · The claims that do not survive the record",
      body: `A sentence you meet almost immediately when reading about Fauset is that she was the first Black woman elected to Phi Beta Kappa. It is a good sentence. It is repeated widely. It is not true, and the organisation that would know said so in print.

**The correction, in the society's own magazine.** Writing in *The Key Reporter* in 2005, the historian Stephanie Y. Evans reported that Mary Annette Anderson was inducted into Phi Beta Kappa in 1899 at Middlebury College in Vermont, and that "this honor was granted prior to that of Jessie Redmon Fauset, who until recently was believed to be the first African-American woman" member, at Cornell in 1905 (Evans, 2005). Evans credits Caldwell Titcomb's 2001 survey in the *Journal of Blacks in Higher Education* with clearing away a set of related misconceptions.

**Note what the correction leaves standing.** Fauset was elected to Phi Beta Kappa. She was elected in 1905, at Cornell. Those are still true, still remarkable in 1905, and still exactly what the 1919 staff note recorded. What fails is only the ordinal, the word "first".

**Why a false ordinal is more dangerous than a missing one.** An ordinal is the most checkable kind of claim there is: it is refuted by producing one earlier case. So it is the claim an opponent goes after, and when it falls it takes the credibility of the surrounding true material with it. A reader who catches one wrong first stops trusting the rest of the paragraph, which in this case is entirely sound.

**The failure was also nobody's dishonesty.** Phi Beta Kappa does not record members by race, so nobody had a list to check against. The claim survived because it was plausible, useful and unfalsifiable in practice until a historian did the archival work. That is the ordinary way a false first persists: not by lying, but by nobody being in a position to check.

**The test to run on any ordinal, in four questions.** *First at what exactly*: elected, or graduated, or admitted? *First where*: at one institution, in one state, or anywhere? *Says who*: the awarding body, or a profile written from a press release? *And who is the runner-up*: a first with no named second behind it has usually never been checked at all.

**What this course does with it.** It teaches the corrected version. Fauset was elected to Phi Beta Kappa at Cornell in 1905, among the earliest African American women so elected, and not the first. That sentence is duller and nobody can take it away from her.

:::reveal Who was elected to Phi Beta Kappa before Fauset, where, and in what year? ||| Mary Annette Anderson, at Middlebury College in Vermont, in 1899, six years before Fauset's election at Cornell in 1905.

:::reveal What survives the correction, and what fails? ||| Her election to Phi Beta Kappa at Cornell in 1905 survives and is still notable. Only the ordinal fails: she was not the first African American woman elected.

:::reveal Give the four questions this lesson uses to test any claim that someone was first. ||| First at what exactly, first in what geographic or institutional scope, on whose authority, and who is the named runner-up. A first with no named second has usually never been checked.

## Vocabulary
- **Ordinal claim**: an assertion that someone was first, second or only, refuted by producing a single earlier case, which makes it the most attackable claim in any profile.
- **Unfalsifiable in practice**: a claim nobody can check because the necessary records are not kept, which is how a plausible error survives for decades.
- **Runner-up test**: asking who came second, since an unchecked first usually has nobody behind it.
- **Collateral discredit**: the loss of trust in true statements that happen to stand next to a false one.

## Sources
Evans, S. Y. (2005, Winter). Mary Annette Anderson: The first African-American woman in Phi Beta Kappa. *The Key Reporter, 70*(2). https://www.keyreporter.org/Media/Default/PdfArchives/Winter%202005.pdf

Titcomb, C. (2001, October). The earliest Black members of Phi Beta Kappa. *The Journal of Blacks in Higher Education*.`,
    },
    {
      slug: "jrf-titles-that-disagree",
      title: "9 · When the sources disagree about her job title",
      section: "Section 3 · The claims that do not survive the record",
      body: `Sources call Fauset two different things. Most say literary editor. Langston Hughes, twice, calls her the managing editor. Encyclopedias sometimes print both in one paragraph without noticing. This looks like sloppiness and is actually a solved problem, and solving it teaches something general.

**What the documents say, publication by publication.** At *The Crisis*, the masthead reads Literary Editor, every month, from November 1919 to April 1926. At *The Brownies' Book*, the children's magazine run out of the same circle, the cover page reads Literary Editor across 1920 and Managing Editor across 1921 (The Brownies' Book, 1921).

**And a legal filing settles the second one.** United States periodicals were required to publish an annual statement of ownership naming publisher, editor, managing editor, business manager and owners. In *The Brownies' Book* the 1920 statement names Du Bois as managing editor. The 1921 statement names Jessie Redmon Fauset. That is a compelled disclosure rather than a courtesy line, which makes it the strongest documentary form her authority ever took.

**So both titles are correct, for different jobs.** She was literary editor of *The Crisis* throughout, and managing editor of *The Brownies' Book* in 1921. Hughes was not wrong so much as compressed. He was writing in 1940 about the period when he was submitting to both, and the magazine where he first dealt with her by name was the one where managing editor was exactly her title.

**The general rule this case demonstrates.** When two sources give a person two different titles, the first hypothesis should be that they are describing two different jobs, or the same job at two different times, and not that one of them is wrong. Careers move. Titles change. A profile that has to pick one word for a whole life will pick the more impressive one, or the more recent one, and either way it flattens a real sequence into a label.

**Why it matters here specifically.** The distinction is not cosmetic. Literary editor names the acquiring function this course is about, choosing what runs. Managing editor names running the operation, which is a different job with different evidence attached. Getting the labels right is what lets you say precisely which kind of invisible work is being claimed, instead of gesturing at editorial work in general and hoping the reader fills it in.

**Two things the record does not tell us.** Why the title at the children's magazine changed between 1920 and 1921, and whether the change reflected more authority or only more work. The filings record the outcome, never the negotiation.

:::reveal What title did each publication give Fauset, and in which years? ||| The Crisis called her Literary Editor from November 1919 to April 1926. The Brownies' Book called her Literary Editor in 1920 and Managing Editor in 1921.

:::reveal What kind of document settles the Brownies' Book title, and why is it strong evidence? ||| The annual statement of ownership, a filing United States periodicals were legally required to publish. It is a compelled disclosure rather than a courtesy credit, so it is harder to inflate.

:::reveal What should be your first hypothesis when two sources give a person two different job titles? ||| That they are describing two different jobs, or the same job at two different times, rather than that one of them is simply wrong. Careers move and titles change.

## Vocabulary
- **Statement of ownership**: the annual disclosure a periodical was required to publish naming its publisher, editor, managing editor, business manager and owners.
- **Managing editor**: the editor who runs the operation and the schedule, as distinct from the one who chooses the literary content.
- **Compelled disclosure**: information published because the law requires it, which is generally harder to inflate than a voluntary credit.
- **Flattening**: reducing a sequence of roles held over time to one label, which is what a short profile is forced to do.

## Sources
The Brownies' Book. (1921). Mastheads and statement of ownership, volume 2. DuBois and Dill. https://archive.org/details/the-brownies-book

Hughes, L. (1940). *The big sea: An autobiography*. Alfred A. Knopf. https://pressbooks.library.torontomu.ca/thebigsea/chapter/haunted-ship/

The Crisis. (1919, November). Masthead. *The Crisis, 19*(1), whole no. 109. https://archive.org/details/sim_crisis_the-crisis_1919-11_19_1`,
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4 — How the credit for a movement travels
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "jrf-the-civic-club-dinner",
      title: "10 · The dinner in her honour, and the book it turned into",
      section: "Section 4 · How the credit for a movement travels",
      body: `In March 1924 a dinner was held in New York for Jessie Fauset, to mark her first novel. It is often called the coming-out party of the Harlem Renaissance. What happened next is the clearest single illustration this course has of how credit moves, and both halves of it are documented in *The Crisis* itself.

**Half one: the guest list, printed in her own magazine.** The May 1924 issue reported it in three sentences (The Crisis, 1924a):

> A dinner to Jessie Fauset and the younger writers was given by the Writers' Guild at the Civic Club, New York. Among the speakers were Carl Van Doren, Alain Locke, Walter White, Charles S. Johnson, James Weldon Johnson and Dr. Du Bois. Poems were read by Countée Cullen and Gwendolyn Bennett.

Read that carefully. Six speakers are named. All six are men. The honoree is the first word of the notice and is not among them. This is a fact about the notice and not proof that she was silent, and the distinction matters: a news column lists who was notable, not who spoke. But if the record of an evening held for you does not record you speaking, the record has already begun doing the thing this course is about.

**One thing the notice does establish about her standing.** The poem Gwendolyn Bennett read that night was "To Usward", and when *The Crisis* printed it in the same issue it carried a dedication: "Especially dedicated to Jessie Fauset upon the event of her novel, 'There is Confusion'" (Bennett, 1924). Her peers knew exactly whose evening it was.

**Half two: what the evening produced, in Du Bois's own words.** Reviewing Alain Locke's anthology *The New Negro* in January 1926, Du Bois described the chain (Du Bois, 1926b):

> it happened last year that the editor of The Survey was sitting next to Mr. A. G. Dill, our business manager, at a dinner given to Miss Fauset in honor of the appearance of her novel, "There Is Confusion". The editor looked at the company with interest and Mr. Dill began to tell him who they were. It occurred to the editor of The Survey that here was material for a Survey Graphic; still he hesitated ... But he took one step which saved the day: He got a colored man to edit that number of the Graphic, Alain Locke.

**Follow it to the end.** The dinner for Fauset's novel put a white magazine editor in a room. The room produced a special issue. The special issue was expanded into a book. The book was *The New Negro*, the anthology that named and defined the movement, and the name on its spine is Alain Locke's.

**Nobody did anything wrong in that chain.** Locke edited the anthology and deserved the credit for editing it. Du Bois wrote the account himself and named the dinner and named Fauset in it. The mechanism does not require a villain. It requires only that the occasion be a woman's book and the durable object be a man's anthology, and the format do the rest.

:::reveal Who spoke at the Civic Club dinner according to The Crisis, and who is missing from that list? ||| Carl Van Doren, Alain Locke, Walter White, Charles S. Johnson, James Weldon Johnson and Du Bois, with poems read by Countee Cullen and Gwendolyn Bennett. The honoree, Fauset, is not listed among the speakers.

:::reveal Trace the chain Du Bois describes from the dinner to The New Negro. ||| The Survey's editor sat next to the Crisis business manager at the dinner, decided the company was material for a Survey Graphic issue, and hired Alain Locke to edit that issue. It was then expanded into the book The New Negro, under Locke's name.

:::reveal Why does this lesson say the chain needs no villain? ||| Because every participant behaved reasonably. Locke edited the anthology and earned that credit, and Du Bois recorded the dinner and named Fauset. The outcome comes from the occasion being a woman's novel and the durable object being a man's book.

## Vocabulary
- **The New Negro**: Alain Locke's 1925 anthology, expanded from a special issue of Survey Graphic, which became the movement's defining book.
- **Survey Graphic**: the general-interest magazine whose 1925 Harlem number supplied the material Locke's anthology was built from.
- **Durable object**: the thing that survives an occasion and carries a name, such as a book, as opposed to the evening that produced it.
- **Occasion versus artifact**: the distinction between the event credited to one person and the lasting object credited to another.

## Sources
Bennett, G. (1924, May). To usward. *The Crisis, 28*(1), whole no. 163. https://archive.org/details/sim_crisis_the-crisis_1924-05_28_1

Du Bois, W. E. B. (1926b, January). The Browsing Reader: The New Negro. *The Crisis, 31*(3). https://archive.org/details/sim_crisis_the-crisis_1926-01_31_3

The Crisis. (1924a, May). The Horizon. *The Crisis, 28*(1), whole no. 163. https://archive.org/details/sim_crisis_the-crisis_1924-05_28_1`,
    },
    {
      slug: "jrf-matthew-and-matilda-here",
      title: "11 · Two mechanisms, applied to this case",
      section: "Section 4 · How the credit for a movement travels",
      body: `Section 1 named the Matthew effect and the Matilda effect. This lesson does the work of applying them, because a mechanism you cannot apply to a specific case is decoration.

**The Matthew effect, stated precisely.** Merton's 1968 argument is that in collaborative work, recognition accrues disproportionately to the participant who already has the greater reputation, and that the effect compounds: today's extra credit buys tomorrow's greater eminence, which buys more credit again (Merton, 1968). The important part is that it needs no intent. It is what happens when observers, with limited attention, attach a collaboration to the name they already recognise.

**Applied here.** In March 1924, Alain Locke was a Harvard doctorate, a Rhodes Scholar and a Howard professor. Du Bois was the most famous Black intellectual in America. Fauset was a magazine's literary editor with one novel out that month. When a room full of that company produced an anthology, the credit had somewhere obvious to go, and it went there. Locke's edited volume is the object a syllabus can assign; the dinner that seeded it is a sentence in a review.

**The Matilda effect, stated precisely.** Rossiter's 1993 argument is the companion: women's contributions are systematically under-recognised, and the recognition frequently transfers to a male colleague working nearby (Rossiter, 1993). Rossiter names it after Matilda Joslyn Gage, who made the observation in the nineteenth century about women whose work was credited to men.

**Applied here.** The transfer target is not hypothetical. It is the standard shape of the sentence: *Du Bois's Crisis published Langston Hughes.* That sentence is true, and the person who read the poem and said yes was Fauset. The magazine's possessive belongs to the man whose name conducted it, and the acquiring editor's decision is absorbed into the institution he is identified with. This course has already met the objection in Section 2, and the objection does not change the sentence people write.

**What the two effects do together.** They are not additive so much as sequential. The Matilda effect strips the contribution from the woman who made it. The Matthew effect decides where it lands, which is on whoever in the room is already the most eminent. Fauset supplies the unusual case where both steps are documented rather than inferred, because the magazine printed a masthead and Du Bois printed an account.

**The honest limit, again.** A mechanism explains a pattern. It does not prove that any particular sentence about Locke or Du Bois was a theft, and this course never argues from the pattern down to an individual's motive. What it argues is that the outcome was predictable from the structure, which is a different and more useful claim.

:::reveal State the Matthew effect precisely, and say why it needs no intent. ||| Recognition in collaborative work accrues disproportionately to the participant who already has the greater reputation, and compounds over time. It needs no intent because it is what observers with limited attention do: attach the work to the name they already know.

:::reveal How do the two effects operate in sequence rather than simply adding up? ||| The Matilda effect strips the contribution from the woman who made it. The Matthew effect then determines where it lands, which is on whoever present is already most eminent.

:::reveal What is the honest limit on what a mechanism proves? ||| It explains a pattern across many cases and does not establish anything about a particular person's motive. A claim about an individual has to rest on that individual's own documents.

## Vocabulary
- **Compounding recognition**: Merton's observation that credit received now raises eminence, which attracts more credit later, so early advantage widens.
- **Transfer target**: the person a stripped contribution is reassigned to, which the Matilda effect predicts will be a male colleague nearby.
- **Matilda Joslyn Gage**: the nineteenth-century writer whose observation about women's work being credited to men gives Rossiter's effect its name.
- **Pattern versus motive**: the rule that a documented tendency across many cases licenses no conclusion about why one person acted.

## Sources
Merton, R. K. (1968). The Matthew effect in science. *Science, 159*(3810), 56-63. https://doi.org/10.1126/science.159.3810.56

Rossiter, M. W. (1993). The Matthew Matilda effect in science. *Social Studies of Science, 23*(2), 325-341. https://doi.org/10.1177/030631293023002004`,
    },
    {
      slug: "jrf-the-rooms-she-kept",
      title: "12 · The rooms she kept, and why rooms leave no record",
      section: "Section 4 · How the credit for a movement travels",
      body: `The last piece of the editorial job is the one with the least paperwork of all. An editor puts writers in a room with each other, and with the people who can publish and pay them. Fauset ran such rooms for years, and the only real description of them comes from a guest.

**Hughes's account of her apartment.** In *The Big Sea*, in a chapter about Harlem parties, he sets hers against the others (Hughes, 1940):

> At Miss Fauset's, a good time was shared by talking literature and reading poetry aloud and perhaps enjoying some conversation in French. White people were seldom present there unless they were very distinguished white people, because Jessie Fauset did not feel like opening her home to mere sightseers, or faddists momentarily in love with Negro life.

**Read that as a description of work rather than of hospitality.** Three decisions are visible in it. She set the activity: reading work aloud, in company, which is how writers get useful criticism. She set the language: French, which selected for a particular kind of education and signalled who the room was for. And she controlled admission, excluding what Hughes calls sightseers, which is a deliberate defence of the writers in the room against being an attraction.

**That is curation, and it has consequences you can name.** A room like that produces introductions, comparisons, rivalries, and the specific knowledge of who is working on what. Hughes's own first meeting with the magazine came through a Fauset invitation to lunch, which is the same behaviour on a smaller scale.

**And it leaves no record at all.** No guest list, no minutes, no byline, nothing filed with the post office. It survives here only because one guest wrote a memoir sixteen years later and happened to describe it. Change one thing, take away Hughes's book, and this entire category of her work vanishes without trace.

**Which is the point worth carrying out of this section.** The invisibility of editorial labour is not one problem, it is a gradient. Selection at least leaves a contents page you can compare against a masthead. Solicitation leaves a letter if someone kept it. Convening leaves nothing whatsoever, and it is frequently the part that compounds most, because a network keeps producing long after the convener has stopped.

**The methodological consequence.** When you cannot find evidence of a kind of work, the honest inference is about the record and not about the work. Absence of evidence for convening is exactly what convening looks like in an archive. That is not licence to assert it happened; it is a reason to say clearly which of your claims rest on documents and which rest on one memoir.

:::reveal Name the three editorial decisions visible in Hughes's description of Fauset's apartment. ||| She set the activity, reading work aloud in company; she set the language, with conversation in French; and she controlled admission, keeping out people she considered sightseers.

:::reveal Why does the course call the invisibility of editorial labour a gradient rather than a single problem? ||| Because the kinds of work leave different amounts of trace. Selection leaves a contents page, solicitation leaves a letter if anyone kept it, and convening leaves nothing at all.

:::reveal What is the honest inference when you find no evidence that convening work happened? ||| That the record does not capture that kind of work, which is not the same as licence to assert it did happen. The right response is to say which claims rest on documents and which rest on a single memoir.

## Vocabulary
- **Convening**: bringing writers together with each other and with publishers, the part of editorial work that compounds and leaves no document.
- **Curation**: shaping what happens in a room by choosing the activity, the language and who is admitted.
- **Gradient of invisibility**: the observation that different editorial tasks leave very different amounts of evidence, from a printed contents page down to nothing.
- **Single-source claim**: an assertion resting on one account, which should be labelled as such rather than blended with documented material.

## Sources
Hughes, L. (1940). *The big sea: An autobiography*. Alfred A. Knopf. https://pressbooks.library.torontomu.ca/thebigsea/chapter/parties/`,
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 5 — The control case: she had a byline too
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "jrf-four-novels",
      title: "13 · Four novels, and a first one that sold",
      section: "Section 5 · The control case: she had a byline too",
      body: `Everything so far has been about work with no byline. Now the control case, which is the reason this course can be trusted on the rest: Fauset published four novels under her own name, and one of them was a commercial success, and she is still barely read.

**The four books.** *There Is Confusion* (New York: Boni and Liveright, 1924). *Plum Bun: A Novel Without a Moral* (London: Elkin Mathews and Marrot, 1928; New York: Frederick A. Stokes, 1929). *The Chinaberry Tree: A Novel of American Life* (New York: Frederick A. Stokes, 1931). *Comedy: American Style* (New York: Frederick A. Stokes, 1933).

**Note the trap in the second one.** *Plum Bun* is given as 1928 in some places and 1929 in others, and both are right, because the London edition preceded the New York one. A course that printed one year without the city would be making a false sentence out of true parts. When a book has two first editions, the year is not a fact on its own.

**The first novel did well, and *The Crisis* recorded it as it happened.** In September 1924 the magazine noted that the book "came out in April" and "has gone into a second edition in America and is now going to have an English printing", by Chapman and Hall of London (The Crisis, 1924b). By November 1924 it reported the novel "is in its third American and first English edition and is being translated into German at Vienna" (The Crisis, 1924c).

**That is a specific, checkable correction to a lazy story.** The convenient version of Fauset says her fiction was ignored. Three American printings in seven months, a British edition and a German translation in progress is not being ignored. Whatever happened to her reputation happened after the sales, not instead of them.

**What her fiction was actually attempting, in her own words.** In 1926 *The Crisis* ran a symposium asking artists whether publishers could be criticised for refusing novels about educated Black characters on the ground that such characters were "no different from white folk and therefore not interesting". Fauset answered that they could, and blamed publishers for holding an idea fixed: "they persist in considering only certain types of Negroes interesting and if an author presents a variant they fear that the public either won't believe in it or won't 'stand for it'" (Fauset, 1926). She added that Black readers had to buy the books they asked for, because "Most best sellers are not born, they're made."

**So she knew exactly which fight she was in,** and she was writing the novels she thought the fight required: educated, professional, middle-class Black characters, presented as ordinary. Section 14 asks what that decision cost her, and it is not a simple answer.

:::reveal Why is "Plum Bun was published in 1928" an incomplete claim? ||| Because the novel had two first editions, London in 1928 and New York in 1929. Without the city the year is not a fact on its own, and either year alone can be made to look wrong.

:::reveal What did The Crisis report about the commercial performance of There Is Confusion? ||| That it came out in April 1924, reached a second American edition by September and a third by November, had an English edition from Chapman and Hall, and was being translated into German at Vienna.

:::reveal In the 1926 symposium, whom did Fauset blame for the narrowness of what got published, and what did she say readers had to do? ||| Publishers, for persisting in treating only certain types of Black characters as interesting and fearing the public would not accept a variant. She said Black readers had to buy the books they were asking for, because best sellers are made rather than born.

## Vocabulary
- **Two first editions**: a book published separately in two countries, which makes an unqualified publication year ambiguous rather than wrong.
- **Impression or printing**: a fresh run of an existing edition, which is evidence of demand rather than of revision.
- **Symposium**: a magazine feature putting the same set of questions to many respondents, which preserves each answer in the respondent's own words.
- **The variant**: Fauset's word for a character who departs from what publishers expected of Black fiction, which she argued they refused on commercial grounds.

## Sources
Fauset, J. R. (1926, June). The Negro in art: How shall he be portrayed, a symposium. *The Crisis, 32*(2), whole no. 188. https://archive.org/details/sim_crisis_the-crisis_1926-06_32_2

The Crisis. (1924b, September). The Looking Glass. *The Crisis, 28*(5), whole no. 167. https://archive.org/details/sim_crisis_the-crisis_1924-09_28_5

The Crisis. (1924c, November). Miss Fauset. *The Crisis, 29*(1), whole no. 169. https://archive.org/details/sim_crisis_the-crisis_1924-11_29_1`,
    },
    {
      slug: "jrf-invisibility-has-two-causes",
      title: "14 · Invisibility has more than one cause",
      section: "Section 5 · The control case: she had a byline too",
      body: `Here is the tidy story this course refuses. Fauset was erased, and that explains everything about her reputation. It is a good story and its own evidence defeats it: she had a byline, four times, on books one of which sold well, and she is still not much read. A byline did not save her. So something else is running too, and the honest work is separating the causes.

**Cause one: under-credit as an editor.** This is the argument of Sections 1 to 4, and it stands. The acquiring job leaves no byline, the convening job leaves nothing at all, and the credit for a movement travelled to the most eminent name in the room. That is a structural claim about a format, and nothing in this section touches it.

**Cause two: her fiction went out of fashion, and there is contemporaneous evidence of exactly how.** In June 1925 *The Crisis* noted that a critic on the *Chicago Tribune* had faulted *There Is Confusion* on the ground that it did not catch "that essential something which makes the Negro what he is" (The Crisis, 1925). That is the objection in its purest form, printed while the book was still new: her characters were held to be insufficiently Black because they were educated and professional.

**And the same objection appears in Hughes, from the other direction.** Writing about the reception of his own poems, Hughes observed that Black critics and intellectuals "wanted to put their best foot forward" and that "Jessie Fauset's novels they loved, because they were always about the educated Negro" (Hughes, 1940). So the taste that made her novels beloved by one audience is the same feature that made them dismissible to another, and both judgements are about subject matter rather than about craft.

**Why this matters for the argument rather than merely complicating it.** The two causes are genuinely different in kind. Under-crediting an editor is a fact about a format that has no slot. Falling out of literary fashion is a fact about changing taste, and it happens to men, to white writers, and to people nobody ever discriminated against. Collapsing the two makes the strong claim carry the weak one.

**Are they connected? Probably, and the course does not overstate it.** It is reasonable to suspect that a woman writing about middle-class domestic life was measured against a standard of authenticity applied more harshly to her than to a man writing about the same class. That is a real argument, made by scholars, and it is an interpretation rather than a document. This course marks it as such.

**What can be said flatly.** Her editorial work was under-credited for structural reasons this course has documented. Her fiction lost its audience for reasons of taste that are also documented, in 1925, in her own magazine. Those are two findings, and the course reports two.

:::reveal What is the tidy story this lesson refuses, and what piece of evidence defeats it? ||| That erasure explains Fauset's whole reputation. Her four bylined novels defeat it, because she had the credit a byline gives and is still barely read.

:::reveal What was the Chicago Tribune objection to There Is Confusion, and why does it matter that it is contemporaneous? ||| That the novel did not catch "that essential something which makes the Negro what he is". It matters because it shows the objection to her subject matter was being made in 1925, while the book was new, rather than invented by later critics.

:::reveal How are the two causes different in kind? ||| Under-crediting an editor is a fact about a format with no byline slot. Losing literary fashion is a fact about changing taste, and it happens to writers nobody ever discriminated against. Collapsing them makes the strong claim carry the weak one.

## Vocabulary
- **Control case**: an instance where the suspected cause is absent, used to test whether that cause explains the outcome. Here, her bylined novels.
- **Authenticity standard**: the demand that a writer's characters represent what an audience considers typical of a group, used in 1925 against Fauset's educated characters.
- **Cause separation**: distinguishing two explanations that produce a similar outcome, so that evidence for one is not silently used to support the other.
- **Interpretation**: a scholarly reading of why something happened, which is legitimate and is not a document, and should be labelled.

## Sources
Hughes, L. (1940). *The big sea: An autobiography*. Alfred A. Knopf. https://pressbooks.library.torontomu.ca/thebigsea/chapter/poetry/

The Crisis. (1925, June). The Looking Glass. *The Crisis, 30*(2), whole no. 176. https://archive.org/details/sim_crisis_the-crisis_1925-06_30_2`,
    },
    {
      slug: "jrf-run-the-check",
      title: "15 · Run the check yourself, and what this course refuses to assert",
      section: "Section 5 · The control case: she had a byline too",
      body: `The point of a case study is a procedure you can run on the next one. Here is the whole method this course used, in five steps, followed by an honest list of what it could not settle.

**Step one: find the periodical, not the profile.** Where a magazine is digitized, the masthead answers questions no biography bothers with. Six years and seven months came out of turning pages, and it took less time than reading three encyclopedia entries that all say 1919 to 1926.

**Step two: separate appeared from acquired.** Ask of every name in the list whether you have evidence of a decision or only evidence of a contents page. For Fauset, Hughes is documented in his own memoir and most of the others are not, and saying so is the finding rather than a weakness in it.

**Step three: read the quotation in its original, with its neighbours.** Paraphrase strengthens claims in a predictable direction. The Hughes passage names three people, says "so-called", and sits beside a paragraph giving the superlative to somebody else.

**Step four: test every ordinal before repeating it.** First at what, first where, on whose authority, and who is the named runner-up. The Phi Beta Kappa claim failed on the fourth question, and the true version that survived is still worth printing.

**Step five: look for the control case.** Ask what the suspected cause predicts, then find the instance where the cause is absent. Fauset's bylined novels are that instance, and they force a second explanation into the account.

**Now the refusals. This course does not assert any of the following.** That Fauset was the first African American woman elected to Phi Beta Kappa: Phi Beta Kappa's own magazine says otherwise. That she acquired Countee Cullen, Jean Toomer, Claude McKay or Nella Larsen: the record shows they appeared, not who chose them. That she was silent at the Civic Club dinner: the notice does not list her among the speakers, which is not the same claim. That she was born in a particular place: her employer's 1919 note and modern reference works disagree. That Du Bois overruled her, or that he did not: nobody has produced a document either way. Each of those is filed as an open question rather than resolved by tone.

**Why refusing is the load-bearing part.** A course about a person whose contribution was overstated by others cannot fix that by overstating in the opposite direction. The strongest sentence available about Fauset is the one that survives being checked, and this course would rather be corrected than repeated.

:::reveal Give the five steps of the method this course used. ||| Find the periodical rather than the profile; separate appeared from acquired; read the quotation in its original with its neighbours; test every ordinal on four questions; and look for the control case where the suspected cause is absent.

:::reveal Name three claims this course explicitly refuses to assert. ||| That she was the first African American woman in Phi Beta Kappa, that she personally acquired Cullen, Toomer, McKay or Larsen, that she was silent at the Civic Club dinner, that her birthplace is settled, or that Du Bois did or did not overrule her.

:::reveal Why can a course about an understated contribution not correct the record by overstating? ||| Because the inflated version collapses the first time anyone checks it, and takes the verified material standing beside it down as well. The durable sentence is the one that survives checking.

## Vocabulary
- **Procedure**: a repeatable sequence of checks, which is what a case study is for, as distinct from a set of facts about one person.
- **Refusal**: a claim the course declines to make, stated out loud so a reader knows the gap is deliberate rather than an oversight.
- **Filed question**: an unsettled point recorded where somebody with the right archive can close it, instead of left as a caveat nobody acts on.
- **Correctable over repeatable**: preferring a claim that can be checked and fixed to one that travels well and cannot.

## Sources
Evans, S. Y. (2005, Winter). Mary Annette Anderson: The first African-American woman in Phi Beta Kappa. *The Key Reporter, 70*(2). https://www.keyreporter.org/Media/Default/PdfArchives/Winter%202005.pdf

Hughes, L. (1940). *The big sea: An autobiography*. Alfred A. Knopf. https://pressbooks.library.torontomu.ca/thebigsea/

The Crisis. (1926, May). Opinion: Miss Fauset. *The Crisis, 32*(1), whole no. 187. https://archive.org/details/sim_crisis_the-crisis_1926-05_32_1`,
    },
  ],
};
