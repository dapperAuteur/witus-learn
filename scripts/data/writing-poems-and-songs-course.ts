import type { AuthoredCourse } from "./authored-course";

// "Writing Poems and Songs" (Storytelling / craft). From BAM's note of 2026-08-30, in full:
// "class about writing poems and songs". The plan, its catalog check and its constraints are in
// plans/79-literary-devices-and-songwriting-courses.md.
//
// THE THESIS, and why this is one course rather than two:
// A lyric and a poem are built from the same parts, and the differences that actually matter reduce
// to one asymmetry: A LYRIC IS HEARD ONCE, at a tempo the listener does not set, under a melody
// competing for the same attention, while a POEM HOLDS STILL and can be re-read. Nearly every piece
// of craft advice that otherwise sounds like taste falls out of that: why a chorus repeats, why a
// lyric front-loads the concrete, why a poem can afford a syntax a lyric cannot, why a line break
// does work on a page that it cannot do in the air. Teaching the two together is not a convenience;
// the comparison IS the explanation.
//
// HARD RULES THIS FILE KEEPS (do not relax without BAM's editorial sign-off):
//  1. NO MUSIC-BUSINESS CONTENT. Nothing about publishing, placement, licensing, pitching, sync,
//     royalties or getting paid. That is a different subject with its own research burden and its
//     own liability, and the course says so in lesson 1 and in its description.
//  2. NOT A LITERARY-DEVICES SURVEY. BAM deferred the companion devices course, so devices appear
//     here only where a writing decision needs one. The course teaches the writing.
//  3. NO MODERN SONG LYRIC IS QUOTED, ANYWHERE. Song lyrics are under aggressively enforced
//     copyright. Where a song is the right example the technique is DESCRIBED and the song named;
//     its words are never reproduced.
//  4. EVERY POEM QUOTED IS PUBLIC DOMAIN AND WAS FETCHED. Each quotation was read out of the exact
//     edition cited at the foot of its lesson (Wikisource page scans, Project Gutenberg texts, the
//     University of Toronto's Representative Poetry Online). No line, attribution, title or date in
//     this file was written from memory. A misattributed line of poetry is precisely the error this
//     catalog exists not to make.
//  5. NO EM DASHES in the course's own prose, and quotations were selected so that the lines used
//     carry none either.
//
// A DELIBERATE CORRECTION, stated so a later pass does not "fix" it back:
// The Academy of American Poets' own meter page scans BOTH of the first two lines of Dickinson's
// "Because I could not stop for Death" as iambic tetrameter. The second line ("He kindly stopped
// for me") carries three stresses, not four; the stanza is common measure, 4-3-4-3. This course
// teaches the correct scansion, cites that page only for the definitions of the feet, and cites the
// Academy's BALLAD page for the 4-and-3 stress pattern instead.
//
// House style, matching who-gets-named-course.ts: `section` on every lesson; flush-left single-line
// `:::reveal q ||| a`; a `## Vocabulary` block of 3-6 lesson-specific terms; APA 7 `## Sources`; a
// quiz per teaching section (pooled at content density, serving 5, passing 80, shuffled) plus a
// final serving 10; every question carries `explanation` + `sourceLessonSlug`. Correct options are
// written SHORT and distractors long and specific, so `check-longest-option` passes by construction.
export const WRITING_POEMS_AND_SONGS_COURSE: AuthoredCourse = {
  title: "Writing Poems and Songs",
  description:
    "A poem and a song lyric are built out of the same parts: an image, a line, a rhyme that is doing work rather than filling a slot, a pattern of stressed and unstressed syllables, and a shape that turns somewhere. The one difference that matters is that a lyric arrives once, in time, at a tempo the listener does not set and under a melody competing for the same attention, while a poem holds still on a page and can be read again. Almost every piece of craft advice that otherwise sounds arbitrary follows from that asymmetry: why a chorus repeats, why a lyric front-loads its concrete detail, why a poem can afford a sentence a lyric cannot, and why a line break does work in the eye that it cannot do in the air. Six sections work through it. The heard-once constraint and what melody buys and charges. Image and the concrete, starting from Ezra Pound's 1913 instruction to go in fear of abstractions. Sound, where perfect rhyme is a tool and not a rule, and slant rhyme, assonance and consonance are the near relatives worth knowing. Stress and meter, and the thing that exists only in song, which is word stress running against a musical beat. The line, the break, the stanza, the turn, and the verse and chorus. And revision, which is mostly cutting. Every example is a poem you can go and read in full, all of them public domain, each quoted from the edition named at the foot of its lesson. No modern song lyric is quoted anywhere here, because song lyrics are under aggressively enforced copyright: where a song is the right example the technique is described and the song is named. This course teaches the writing and nothing else. It has no advice about publishing, placement, licensing, pitching or getting paid, which is a different subject with a different research burden.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1 — Heard once, read twice
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "heard-once-read-twice",
      title: "1 · Heard once, read twice",
      section: "Section 1 · Heard once, read twice",
      body: `Two things are true at the same time, and holding both is most of what this course teaches.

**A lyric and a poem are made of the same parts.** An image. A line. A rhyme that is doing work rather than filling a slot. A pattern of stressed and unstressed syllables. A shape that turns somewhere. Nothing on that list belongs to one form and not the other, which is why a course that taught them separately would have to say everything twice.

**And a lyric arrives differently.** It arrives once, in time, at a tempo the listener does not set, carried by a melody competing for the same attention. A poem on a page holds still. A reader can stop mid-line, go back four lines, read the last stanza first, and sit with one word for a minute.

**That asymmetry is the engine of this whole course.** Nearly every piece of craft advice that otherwise sounds like taste turns out to be a consequence of it. A chorus repeats because the listener gets one pass. A lyric puts its concrete detail early because a listener who is lost at line three is gone. A poem can run one sentence across six lines and three subordinate clauses, because a reader can go back and untangle it; a lyric attempting the same arrives as noise.

**State the constraint honestly, though.** A listener with a recording can replay a song forty times, and plenty do. The constraint is not that replay is impossible. It is that the FIRST pass is not under the listener's control, and that the words arrive at a speed the music sets rather than one the listener chooses. Everything a lyric does to stay graspable is insurance against that first pass. A poem buys no such insurance because it does not need any.

**What this course does not cover.** Publishing, placement, licensing, pitching, royalties and getting paid are a different subject with a different research burden, and none of it appears anywhere in these lessons. This is a course about making the thing.

**How the examples work.** Every poem quoted here is in the public domain and is quoted from an edition named at the foot of the lesson, so you can go and read the whole thing. No modern song lyric is quoted anywhere in this course, for a reason worth saying plainly: song lyrics are under copyright that is enforced aggressively. Where a song is the right example, the technique is described and the song is named, and the listening is yours to do.

:::reveal State the one asymmetry this course is built on, in a single sentence. ||| A lyric arrives once, in time, at a tempo the listener does not control and with a melody competing for attention, while a poem holds still on a page and can be re-read at whatever speed the reader likes.

:::reveal Why does this course refuse to say simply that a listener cannot go back? ||| Because a listener holding a recording can replay it. The honest version is narrower: the FIRST pass is not under the listener's control and the words arrive at the music's speed, which is the thing a lyric has to insure against.

## Vocabulary
- **Lyric**: the words of a song, written to be carried by a melody and received in time rather than read at leisure.
- **The heard-once constraint**: the fact that a lyric's first pass runs at a tempo the listener did not choose, which is the source of most of the differences between lyric craft and poem craft.
- **Craft**: the decidable part of writing, the part with reasons you can state and test, as opposed to taste.
- **Public domain**: a work whose copyright has expired or never applied, which is why every example quoted in this course can be quoted in full.

## Sources
Academy of American Poets. (n.d.). *Ballad*. Poets.org. https://poets.org/glossary/ballad

Summach, J. (2011). The structure, function, and genesis of the prechorus. *Music Theory Online, 17*(3). https://mtosmt.org/issues/mto.11.17.3/mto.11.17.3.summach.html`,
    },
    {
      slug: "what-lyric-and-poem-share",
      title: "2 · The shared machinery",
      section: "Section 1 · Heard once, read twice",
      body: `Before the differences earn any attention, look at how much is common, because the shared part is the part you will spend most of your writing life on.

**They were one thing first.** The English ballad was sung. The Academy of American Poets puts it plainly: ballads "were not originally transcribed, but, rather, were preserved orally for generations and passed along through recitation" (Academy of American Poets, n.d.-a). A form that had to survive in memory, without a page, developed exactly the features you would design for that job: a short repeating stanza, a strong regular beat, a rhyme to hold the pairs together, and a story told in scenes rather than explained.

**The measure is literally the same.** Here is the opening of the ballad "Sir Patrick Spens", in the text Arthur Quiller-Couch printed:

> The king sits in Dunfermline town
>   Drinking the blude-red wine;
> 'O whare will I get a skeely skipper
>   To sail this new ship o' mine?'

The Scots is not decoration: *blude-red* is blood-red and *skeely* is skilful, and Quiller-Couch glosses the second in a footnote this course has silently dropped from the quotation. Four stresses, then three, then four, then three, rhyming the second line with the fourth. Now Emily Dickinson, in the 1890 volume her friends edited:

> Because I could not stop for Death,
> He kindly stopped for me;
> The carriage held but just ourselves
> And Immortality.

Same measure. Four stresses, three, four, three, second line rhyming the fourth. One was sung by people who could not read it and one was written in a room in Amherst, and the shape is identical, because hymn books, ballads and a great deal of English lyric poetry all run on it.

**So the shared machinery is nearly everything.** Choosing a concrete image over an abstraction. Deciding what a rhyme is for. Hearing where the stress falls. Building a shape that turns. Cutting what does not pay its way. Those five jobs are the six sections of this course, and only one section, the one on stress against a beat, is genuinely about a problem that a poem never has.

**Which sets up the right expectation.** If you write poems and want to write lyrics, you already own most of the toolkit and need to learn what melody does to it. If you write lyrics and want to write poems, the same. Nobody starts from zero in the second form.

:::reveal What does "Sir Patrick Spens" have in common, formally, with Dickinson's "Because I could not stop for Death"? ||| Both open in common measure: a quatrain of four stresses, three, four, three, with the second line rhyming the fourth. One was sung and transmitted orally, the other written for the page, and the shape is the same.

:::reveal Which single job in this course belongs to song and not to poems at all? ||| Setting words against a musical beat, where a word's own stress can collide with the music's accent. A poem's stresses have no external grid to fight.

## Vocabulary
- **Ballad**: a plot-driven narrative song in short stanzas, historically transmitted by recitation rather than in print, and the ancestor of a great deal of both poetry and popular song.
- **Common measure**: the quatrain of four stresses, three, four, three, rhyming the second line with the fourth, shared by ballads, hymns and much English lyric poetry.
- **Stanza**: a group of lines forming the repeating unit of a poem, from the Italian for room.
- **Oral transmission**: preservation by memory and performance rather than by writing, which selects for repetition, regular beat and rhyme.

## Sources
Academy of American Poets. (n.d.-a). *Ballad*. Poets.org. https://poets.org/glossary/ballad

Dickinson, E. (1890). *Poems* (M. L. Todd & T. W. Higginson, Eds.). Roberts Brothers. https://en.wikisource.org/wiki/Page:Emily_Dickinson_Poems_(1890).djvu/146

Quiller-Couch, A. (Ed.). (2014). *The Oxford Book of Ballads* (Project Gutenberg eBook No. 44593). Clarendon Press. https://www.gutenberg.org/ebooks/44593`,
    },
    {
      slug: "what-melody-buys-and-charges",
      title: "3 · What melody buys, and what it charges",
      section: "Section 1 · Heard once, read twice",
      body: `A melody is not a delivery van for words. It changes what the words have to do, in both directions, and a lyricist who does not know the bargain writes poems that happen to be sung.

**What melody buys you.** Four things, roughly. It supplies **emotional colour before a single word lands**, so a lyric can be plainer than a poem and still arrive carrying feeling. It supplies a **rhythmic grid**, so the listener always knows where they are in the line. It makes **repetition bearable**, and more than bearable: a chorus can return five times and gain rather than wear, which no poem could do with a stanza. And it supplies **pitch and duration**, so a single held syllable can be given weight that on a page would need a whole line of setup.

**What melody charges you.** The bill is longer. **Syllable count stops being yours**, because the tune has a fixed number of notes and your line has to fit them. **Word stress stops being yours**, because the music has strong and weak beats and a word landing on the wrong one is heard wrong, which Section 4 works through properly. **Complicated syntax stops being recoverable**, because a listener who loses the thread of a sentence cannot rewind mid-phrase. And **some sounds stop being available**, because a cluster of hard consonants on a long note is unsingable no matter how good it looks written down.

**The trade that follows.** Melody carries part of the load, so a lyric may be plainer on the page than a poem would dare to be, and still be excellent. This is the single most useful consequence in this lesson, because it invalidates a test people apply constantly: "does it read well as a poem?" is the WRONG test for a lyric. A lyric that reads flat and lands hard when sung is doing its job. A lyric that reads beautifully and cannot be sung is not.

**And the reverse trade.** A poem gets none of that support and is therefore allowed to be more difficult. It can hold a sentence open across a stanza, place a word so that its ambiguity survives, and require a second reading to finish. Those are not indulgences. They are the compensation for having no melody.

**Ezra Pound put the rhythmic half of this well** in a line the Academy of American Poets quotes from his 1918 essay "A Retrospect": "to compose in the sequence of the musical phrase, not in sequence of a metronome" (Academy of American Poets, n.d.-b). He was arguing about free verse, but the instruction survives the move into songwriting intact.

:::reveal Name two things a melody supplies that a poem has to produce with words alone. ||| Emotional colour before the words land, and a rhythmic grid the listener can keep their place in. It also makes repetition gain rather than wear, and gives weight to a syllable through pitch and duration.

:::reveal Why is "does it read well as a poem?" the wrong test for a lyric? ||| Because melody is carrying part of the load. A lyric may be plainer on the page than a poem would dare and still land hard when sung, while a lyric that reads beautifully but cannot be sung has failed at its actual job.

## Vocabulary
- **Text setting**: fitting words to an existing melody, or a melody to existing words, so that syllables land where the music wants them.
- **Syllable count**: the number of syllables in a line, which a melody fixes for a lyric and leaves open for a poem in free verse.
- **Rhythmic grid**: the pattern of strong and weak beats supplied by the music, against which every sung syllable is positioned.
- **Singability**: whether a sequence of sounds can actually be produced at the pitch and duration the tune requires, which rules out some phrases that read well.

## Sources
Academy of American Poets. (n.d.-b). *Free verse*. Poets.org. https://poets.org/glossary/free-verse

Summach, J. (2011). The structure, function, and genesis of the prechorus. *Music Theory Online, 17*(3). https://mtosmt.org/issues/mto.11.17.3/mto.11.17.3.summach.html`,
    },
    {
      slug: "quiz-heard-once-read-twice",
      title: "4 · Knowledge check: the heard-once constraint",
      section: "Section 1 · Heard once, read twice",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "The one asymmetry this course is built on is that a lyric:",
            options: ["Arrives once, in time", "Uses a smaller vocabulary than a poem does, because it must be understood by a larger audience", "Is written to be memorised, whereas a poem is written to be studied on a page over years", "Has no line breaks, because a melody supplies all of its structural divisions instead"],
            correctIndex: 0,
            explanation: "At a tempo the listener does not set, under a melody competing for attention. A poem holds still and can be re-read.",
            sourceLessonSlug: "heard-once-read-twice",
          },
          {
            prompt: "Which of these does the course say belongs to lyrics and NOT to poems?",
            options: ["Nothing on the shared parts list", "Rhyme, which a modern poem has largely abandoned while a song lyric still depends on it", "Concrete imagery, since a poem is free to work entirely in abstractions and a lyric is not", "A pattern of stressed and unstressed syllables, which only exists once a melody is attached"],
            correctIndex: 0,
            explanation: "Image, line, rhyme, stress pattern and a shape that turns are shared. The differences are what melody and the heard-once first pass impose on top.",
            sourceLessonSlug: "heard-once-read-twice",
          },
          {
            prompt: "Why does the course refuse to say that a listener simply cannot go back?",
            options: ["A recording can be replayed", "Because listeners routinely memorise lyrics on first hearing, which makes replay unnecessary in practice", "Because the claim would apply equally to poems, which are also often encountered only once", "Because live performance is the only listening context the course is prepared to make claims about"],
            correctIndex: 0,
            explanation: "The honest constraint is narrower: the FIRST pass is not under the listener's control and the words arrive at the music's speed.",
            sourceLessonSlug: "heard-once-read-twice",
          },
          {
            prompt: "A chorus repeats mainly because:",
            options: ["The listener gets one pass", "Choruses are shorter than verses and therefore cheaper to write than new material would be", "Musical convention since the mid-nineteenth century has required a fixed number of repetitions", "Repetition is the only device available for creating emphasis when there is no page to look at"],
            correctIndex: 0,
            explanation: "Repetition is insurance against a first pass the listener did not control. A poem needs no such insurance because a reader can go back.",
            sourceLessonSlug: "heard-once-read-twice",
          },
          {
            prompt: "A poem can run one sentence across six lines and three clauses because:",
            options: ["A reader can go back", "Readers of poetry are trained to parse difficult syntax in a way that music audiences are not", "Poems are shorter overall, so a long sentence occupies a smaller share of the whole work", "Printed punctuation resolves the syntax completely, leaving the reader nothing to reconstruct"],
            correctIndex: 0,
            explanation: "The reader can untangle it at their own speed. A lyric attempting the same syntax arrives as noise on the pass that counts.",
            sourceLessonSlug: "heard-once-read-twice",
          },
          {
            prompt: "Which subject does this course state, in lesson one, that it does not cover?",
            options: ["The music business", "The history of English versification before the sixteenth century, which is left to a literature course", "Performance technique, including breath control and microphone placement for a singing voice", "Collaboration between a lyricist and a composer, which the course treats as a separate discipline"],
            correctIndex: 0,
            explanation: "Publishing, placement, licensing, pitching, royalties and payment are a different subject with a different research burden and appear nowhere in these lessons.",
            sourceLessonSlug: "heard-once-read-twice",
          },
          {
            prompt: "Why does this course quote no modern song lyrics?",
            options: ["They are under enforced copyright", "Because song lyrics read poorly on a page and would therefore mislead a learner about their quality", "Because the course's editorial policy allows quotation only from works written before 1900", "Because a lyric separated from its melody is not, on the course's own argument, a text at all"],
            correctIndex: 0,
            explanation: "Where a song is the right example, the technique is described and the song named. The words are never reproduced.",
            sourceLessonSlug: "heard-once-read-twice",
          },
          {
            prompt: "Every poem quoted in this course is:",
            options: ["Public domain, from a named edition", "Reproduced under a fair-use exemption that limits each quotation to a maximum of four lines", "Translated by the course author, which is why no external edition is cited for any of them", "Drawn from a single anthology, so that the learner can obtain all of the examples in one volume"],
            correctIndex: 0,
            explanation: "Each is quoted from the edition cited at the foot of its lesson, so the whole poem can be found and read.",
            sourceLessonSlug: "heard-once-read-twice",
          },
          {
            prompt: "In this course, \"craft\" names:",
            options: ["The decidable part of writing", "The technical vocabulary of prosody, as opposed to the practical business of producing a draft",
              "Everything a writer does before a work is performed, as distinct from everything done afterwards", "The set of rules a beginner must follow until enough experience is gathered to break them"],
            correctIndex: 0,
            explanation: "The part with reasons you can state and test, as opposed to taste. The course teaches only the decidable half and says so.",
            sourceLessonSlug: "heard-once-read-twice",
          },
          {
            prompt: "A lyric puts its concrete detail early because:",
            options: ["A listener lost at line three is gone", "Openings are the only part of a song most listeners will hear before deciding to skip it",
              "Abstract language is harder to sing, since it tends to use longer and more Latinate words", "The opening of a song is usually its loudest passage, and detail is lost at lower volumes"],
            correctIndex: 0,
            explanation: "A reader can hold an abstract opening and let the poem earn it later. A listener has nothing to hold it with.",
            sourceLessonSlug: "heard-once-read-twice",
          },
          {
            prompt: "The word \"lyric\" is used in this course to mean:",
            options: ["The words of a song", "Any short poem expressing personal feeling, whether or not it was ever intended to be sung", "The melodic line a singer performs, as opposed to the accompaniment played beneath it", "The chorus specifically, since that is the section a listener is most likely to remember"],
            correctIndex: 0,
            explanation: "Written to be carried by a melody and received in time, rather than read at leisure.",
            sourceLessonSlug: "heard-once-read-twice",
          },
          {
            prompt: "The tempo at which a lyric's words reach a listener is set by:",
            options: ["The music", "The listener, who controls playback speed on every device in common use today", "The singer's diction, which varies enough between performers to make the question unanswerable", "The syllable count of the line, since more syllables must necessarily take longer to deliver"],
            correctIndex: 0,
            explanation: "That is the constraint: the words arrive at a speed the music sets rather than one the listener chooses.",
            sourceLessonSlug: "heard-once-read-twice",
          },
          {
            prompt: "Everything a lyric does to stay graspable is described as:",
            options: ["Insurance against the first pass", "A concession to commercial audiences, which poetry has never had to make in the same way", "A survival of the oral tradition that no longer serves any function in recorded music", "A restriction imposed by publishers, which is why the course treats it as a business matter"],
            correctIndex: 0,
            explanation: "A poem buys none of that insurance because it does not need any. That is the whole asymmetry in one sentence.",
            sourceLessonSlug: "heard-once-read-twice",
          },
          {
            prompt: "Teaching lyric and poem in one course is justified on the grounds that:",
            options: ["The comparison is the explanation", "Both are short forms, so a single course can cover the whole of each in the same number of lessons", "Most working writers move between the two, which makes a combined course commercially sensible", "Poetry is the older form, so a lyricist must study it first before attempting to write songs"],
            correctIndex: 0,
            explanation: "A course teaching them separately would have to say almost everything twice, and would lose the asymmetry that explains the differences.",
            sourceLessonSlug: "heard-once-read-twice",
          },
          {
            prompt: "According to the Academy of American Poets, ballads were originally:",
            options: ["Preserved orally, not transcribed", "Printed as broadsides and sold in the street, which is how the earliest examples reached us", "Composed in writing by court poets and only later adapted for singing by travelling performers", "Recorded in church registers alongside hymns, which is why the two share a common measure"],
            correctIndex: 0,
            explanation: "Passed along through recitation for generations. A form that had to survive in memory develops repetition, a strong beat and rhyme.",
            sourceLessonSlug: "what-lyric-and-poem-share",
          },
          {
            prompt: "Which set of features does oral transmission select for?",
            options: ["Repetition, regular beat, rhyme", "Elaborate syntax, uncommon vocabulary and a large cast of named characters per stanza", "Irregular line lengths and unrhymed endings, which are easier for a reciter to improvise", "Abstract moral statement, since a general lesson is easier to remember than a specific scene"],
            correctIndex: 0,
            explanation: "Plus a story told in scenes rather than explained. Those are the features you would design for a form that has to survive without a page.",
            sourceLessonSlug: "what-lyric-and-poem-share",
          },
          {
            prompt: "The opening stanza of \"Sir Patrick Spens\" runs:",
            options: ["Four stresses, three, four, three", "Five stresses in every line, which is why it reads as an early example of the iambic pentameter line", "Three stresses in every line, giving the short clipped movement associated with the border ballads", "Alternating six and eight stresses, the pattern later borrowed by the English hymn tradition"],
            correctIndex: 0,
            explanation: "Common measure, with the second line rhyming the fourth on wine and mine.",
            sourceLessonSlug: "what-lyric-and-poem-share",
          },
          {
            prompt: "Dickinson's stanza beginning \"Because I could not stop for Death\" is in:",
            options: ["Common measure", "Blank verse, meaning unrhymed iambic pentameter, which is why the stanza has no audible rhyme", "Trochaic tetrameter throughout, the same measure Blake uses to open \"The Tyger\" in this course", "Free verse, since Dickinson's line lengths vary and no fixed syllable count can be recovered"],
            correctIndex: 0,
            explanation: "Four stresses, three, four, three, with the second line rhyming the fourth. The same measure as the ballad quoted beside it.",
            sourceLessonSlug: "what-lyric-and-poem-share",
          },
          {
            prompt: "In common measure, which lines rhyme?",
            options: ["The second and the fourth", "All four, on a single rhyme sound carried through the whole quatrain without variation", "The first and the second, then the third and the fourth, in two successive couplets", "The first and the third, leaving the shorter second and fourth lines deliberately unrhymed"],
            correctIndex: 0,
            explanation: "That is the abcb scheme, which leaves the first and third lines free to carry the story.",
            sourceLessonSlug: "what-lyric-and-poem-share",
          },
          {
            prompt: "The 1890 volume of Dickinson's poems quoted here was edited by:",
            options: ["Mabel Loomis Todd and T. W. Higginson", "Susan Gilbert Dickinson, the poet's sister-in-law, working from manuscripts left in the house", "Robert Bridges, who performed the same service for Gerard Manley Hopkins in 1918", "Thomas Johnson, whose variorum edition first restored the poet's original dashes and capitals"],
            correctIndex: 0,
            explanation: "Published by Roberts Brothers in 1890, and the source of the text this course quotes.",
            sourceLessonSlug: "what-lyric-and-poem-share",
          },
          {
            prompt: "The text of \"Sir Patrick Spens\" used here comes from:",
            options: ["Quiller-Couch's Oxford Book of Ballads", "Francis James Child's five-volume collection, in the variant he labelled A and considered oldest", "Walter Scott's Minstrelsy of the Scottish Border, in the version collected from oral recitation", "A broadside printed in Edinburgh, which is the earliest surviving witness to the ballad's text"],
            correctIndex: 0,
            explanation: "Cited at the foot of the lesson so the whole ballad can be read. Ballads survive in many variants, and the edition matters.",
            sourceLessonSlug: "what-lyric-and-poem-share",
          },
          {
            prompt: "Which job in this course belongs to song and to no poem?",
            options: ["Setting words against a beat", "Choosing a concrete image, which a poem may dispense with but a lyric never can", "Building a shape that turns, since a poem may end without turning and a song may not", "Deciding what a rhyme is for, because unrhymed song lyrics are effectively unknown"],
            correctIndex: 0,
            explanation: "A poem's stresses have no external grid to collide with. Every other job in the course is shared.",
            sourceLessonSlug: "what-lyric-and-poem-share",
          },
          {
            prompt: "The word \"stanza\" comes from an Italian word meaning:",
            options: ["Room", "Verse, which is why the two words are used interchangeably in discussions of song form", "Breath, reflecting the length of material a reciter could deliver without pausing", "Stop, which is the origin of the modern term for an end-stopped line of poetry"],
            correctIndex: 0,
            explanation: "Each stanza is like a room in a house, which is the image Edward Hirsch uses in the definition the Academy reprints.",
            sourceLessonSlug: "what-lyric-and-poem-share",
          },
          {
            prompt: "A poet who starts writing lyrics is described as:",
            options: ["Already owning most of the toolkit", "Beginning again, because the two forms share almost no technique beyond the use of rhyme", "At a disadvantage against a lyricist, since habits formed on the page rarely transfer to song", "Needing musical training first, because a lyric cannot be drafted before its melody exists"],
            correctIndex: 0,
            explanation: "What remains is learning what melody does to it. Nobody starts from zero in the second form.",
            sourceLessonSlug: "what-lyric-and-poem-share",
          },
          {
            prompt: "Hymn books, ballads and much English lyric poetry can be laid over one another because:",
            options: ["They run on the same measure", "They were all composed for the same congregational singing tradition in the eighteenth century", "They share a fixed rhyme scheme of alternating couplets that has not changed since Chaucer", "Their lines all contain exactly eight syllables, which is the length a single breath supports"],
            correctIndex: 0,
            explanation: "Common measure, the four-three-four-three quatrain. That shared shape is why the ballad, the hymn and the Dickinson stanza fit each other.",
            sourceLessonSlug: "what-lyric-and-poem-share",
          },
          {
            prompt: "A ballad, in the Academy's description, is above all:",
            options: ["Plot-driven", "Meditative, dwelling on a single image for the length of the poem without narrative movement", "Devotional, since the form developed inside the church before moving into secular use", "Satirical, because the earliest examples were political propaganda aimed at named individuals"],
            correctIndex: 0,
            explanation: "It shows the reader each crucial moment rather than telling them what is happening, which is why it carries a story so well.",
            sourceLessonSlug: "what-lyric-and-poem-share",
          },
          {
            prompt: "Which is NOT among the four things this course says a melody buys you?",
            options: ["Freedom from syllable count", "Emotional colour arriving before any individual word has landed on the listener", "A rhythmic grid, so the listener always knows their position inside the line", "Pitch and duration, so one held syllable can carry weight a page would need setup for"],
            correctIndex: 0,
            explanation: "Syllable count is on the other side of the ledger. A tune has a fixed number of notes and the line has to fit them.",
            sourceLessonSlug: "what-melody-buys-and-charges",
          },
          {
            prompt: "Melody makes repetition bearable, which means a chorus can:",
            options: ["Return five times and gain", "Be written once and reused across several different songs without a listener noticing", "Replace the verses entirely in a well-constructed song, leaving only the repeated material", "Be omitted from a recording without damage, since the listener supplies it from memory"],
            correctIndex: 0,
            explanation: "No poem could do that with a stanza. The melody is what stops the return from wearing.",
            sourceLessonSlug: "what-melody-buys-and-charges",
          },
          {
            prompt: "\"Does it read well as a poem?\" is the wrong test for a lyric because:",
            options: ["Melody carries part of the load", "Lyrics are shorter than poems, so any page-based comparison is unfair to the shorter form", "A lyric's meaning is fixed by its performance, which means the written text has no stable content", "Poems and lyrics are read by different audiences, and the two groups disagree about quality"],
            correctIndex: 0,
            explanation: "A lyric may be plainer on the page and land hard when sung. One that reads beautifully and cannot be sung has failed at its job.",
            sourceLessonSlug: "what-melody-buys-and-charges",
          },
          {
            prompt: "A poem is allowed to be more difficult than a lyric as compensation for:",
            options: ["Having no melody", "Being read by a smaller and more specialised audience with more patience for obscurity", "Being longer on average, which gives the difficulty more room in which to be resolved", "Having no performer, so nobody stands between the writer's intention and the reader"],
            correctIndex: 0,
            explanation: "It gets none of melody's support, so it may hold a sentence open, place ambiguity, and require a second reading.",
            sourceLessonSlug: "what-melody-buys-and-charges",
          },
          {
            prompt: "Pound's instruction, as the Academy quotes it, is to compose in the sequence of:",
            options: ["The musical phrase", "The spoken sentence, breaking each line where a speaker would naturally draw breath", "The metrical foot, counting stresses until the line reaches its established length", "The rhyme scheme, which should be settled before any line of the poem is written"],
            correctIndex: 0,
            explanation: "Not in sequence of a metronome. He was arguing about free verse, and the instruction survives the move into songwriting.",
            sourceLessonSlug: "what-melody-buys-and-charges",
          },
          {
            prompt: "What does a tune take away from a lyricist that a poet keeps?",
            options: ["Control of syllable count", "The ability to use rhyme, since a sung rhyme is inaudible against instrumental accompaniment", "Access to concrete imagery, which is crowded out by the demands of the melodic line", "The option of a refrain, because a repeated line competes with the repeated melody"],
            correctIndex: 0,
            explanation: "The tune has a fixed number of notes. Word stress and singability are the other two charges on the same bill.",
            sourceLessonSlug: "what-melody-buys-and-charges",
          },
          {
            prompt: "\"Text setting\" names:",
            options: ["Fitting words to a melody", "The typographical arrangement of a poem on the page, including indentation and white space", "The process of choosing which of several drafts of a lyric will be recorded and released", "The act of writing lyrics before any music exists, so the composer must follow the words"],
            correctIndex: 0,
            explanation: "Or fitting a melody to existing words, so that syllables land where the music wants them.",
            sourceLessonSlug: "what-melody-buys-and-charges",
          },
          {
            prompt: "Singability rules out a phrase when:",
            options: ["Its sounds cannot be produced as required", "It contains more than three consecutive stressed syllables, regardless of what those syllables are", "Its vocabulary is too formal for the register a popular audience expects from a song", "It fails to rhyme with the line before it, which leaves the melodic phrase unresolved"],
            correctIndex: 0,
            explanation: "A cluster of hard consonants on a long note is unsingable however good it looks written down.",
            sourceLessonSlug: "what-melody-buys-and-charges",
          },
          {
            prompt: "Complicated syntax stops being recoverable in a song because:",
            options: ["A listener cannot rewind mid-phrase", "Singers habitually simplify difficult grammar in performance, so the written version never survives", "Subordinate clauses require punctuation, and punctuation cannot be heard in a sung line", "Melodies are built from short repeated units that cannot accommodate a long sentence"],
            correctIndex: 0,
            explanation: "That is the heard-once constraint operating on grammar specifically. The thread, once lost, stays lost.",
            sourceLessonSlug: "what-melody-buys-and-charges",
          },
          {
            prompt: "A rhythmic grid supplied by the music lets the listener:",
            options: ["Know where they are in the line", "Predict which word will be sung next, which is why familiar lyrics feel inevitable", "Ignore the words entirely and follow the instrumental parts without losing the meaning", "Count the syllables of each line, which is how a listener detects a metrical irregularity"],
            correctIndex: 0,
            explanation: "Position inside the line is free information in a song and has to be built out of language in a poem.",
            sourceLessonSlug: "what-melody-buys-and-charges",
          },
          {
            prompt: "The course's phrase \"a lyricist who does not know the bargain\" describes someone who writes:",
            options: ["Poems that happen to be sung", "Melodies before words, which reverses the order in which the two should be composed", "Only choruses, because the returning section is the easiest part of a song to draft", "For performers rather than listeners, and so never tests the material on an audience"],
            correctIndex: 0,
            explanation: "The bargain runs in both directions: melody buys four things and charges for four more, and ignoring either half produces that result.",
            sourceLessonSlug: "what-melody-buys-and-charges",
          },
          {
            prompt: "The course treats the heard-once constraint as a fact about:",
            options: ["The medium, not the audience", "Human memory, which cannot retain a line of sung text beyond a few seconds", "Recording technology, which is why the constraint weakened once playback became common", "Concert etiquette, since an audience is not permitted to ask a performer to repeat a verse"],
            correctIndex: 0,
            explanation: "It is about who controls the tempo of the first pass, not about any claimed limit on what listeners can remember.",
            sourceLessonSlug: "heard-once-read-twice",
          },
          {
            prompt: "A poem's reader can do which of these things that a listener cannot?",
            options: ["Read the last stanza first", "Hear the writer's intended emphasis, which print records more reliably than performance does", "Experience the work in a single sitting, which a song's length usually prevents", "Encounter the piece without knowing anything about who made it or when"],
            correctIndex: 0,
            explanation: "Along with stopping mid-line, going back four lines, and sitting with a single word for a minute.",
            sourceLessonSlug: "heard-once-read-twice",
          },
          {
            prompt: "How does this course handle a song that is the right example for a technique?",
            options: ["Names it and describes the technique", "Paraphrases the lyric closely enough for the learner to recognise the original wording", "Reproduces a single line, which the course treats as falling below any copyright threshold", "Substitutes a public-domain poem that uses a different technique with a similar effect"],
            correctIndex: 0,
            explanation: "The words are never reproduced, and the listening is left to the learner.",
            sourceLessonSlug: "heard-once-read-twice",
          },
          {
            prompt: "The five shared jobs listed in lesson two are choosing an image, deciding what a rhyme is for, hearing stress, building a shape that turns, and:",
            options: ["Cutting what does not pay its way", "Selecting a key and tempo appropriate to the emotional register of the material", "Choosing a speaker, since every poem and every lyric requires a consistent narrating voice", "Establishing a rhyme scheme in advance and holding it without variation to the end"],
            correctIndex: 0,
            explanation: "Those five are the six sections of the course, and only the stress-against-a-beat section is unique to song.",
            sourceLessonSlug: "what-lyric-and-poem-share",
          },
          {
            prompt: "The rhyme in the opening stanza of \"Sir Patrick Spens\" falls on:",
            options: ["Wine and mine", "Town and down, in the first and third lines, leaving the shorter lines free", "Spens and mine, which is a slant rhyme rather than a perfect one", "King and drinking, an internal rhyme carried across the first two lines"],
            correctIndex: 0,
            explanation: "The second line ends on wine and the fourth on mine, which is the abcb pattern the lesson describes.",
            sourceLessonSlug: "what-lyric-and-poem-share",
          },
          {
            prompt: "Which is a charge melody makes, rather than something it buys?",
            options: ["Word stress stops being yours", "Emotional colour arrives before the listener has processed a single word of the line", "A held syllable can be given weight that a page would need several lines to establish", "Repetition becomes an asset, so a returning section grows stronger with each appearance"],
            correctIndex: 0,
            explanation: "The music has strong and weak beats, and a word landing on the wrong one is heard wrong. Section 4 works through it.",
            sourceLessonSlug: "what-melody-buys-and-charges",
          },
          {
            prompt: "A lyric that reads beautifully but cannot be sung is described as:",
            options: ["Having failed at its job", "An acceptable outcome, since a lyric published in print is judged as a poem anyway", "The mark of a poet crossing over, and therefore a promising sign in an early draft", "Unfinishable, because a melody can always be written to accommodate any sequence of words"],
            correctIndex: 0,
            explanation: "The mirror of the point that a lyric reading flat and landing hard when sung is doing its job well.",
            sourceLessonSlug: "what-melody-buys-and-charges",
          },
          {
            prompt: "The course's definition of the heard-once constraint turns on:",
            options: ["Who controls the tempo of the first pass", "How many times a listener is likely to encounter a given song in a lifetime", "Whether the listener is watching a live performance or playing back a recording", "The number of words a singer can deliver clearly within one minute of music"],
            correctIndex: 0,
            explanation: "Not on replay being impossible, which it is not, and not on any claim about memory.",
            sourceLessonSlug: "heard-once-read-twice",
          },
          {
            prompt: "\"Public domain\" is defined here as a work whose copyright:",
            options: ["Has expired or never applied", "Has been waived by the author in favour of unrestricted educational reuse", "Permits quotation of up to a fixed proportion of the whole for teaching purposes", "Is held by a national library rather than by a publisher or an author's estate"],
            correctIndex: 0,
            explanation: "Which is why every example in the course can be quoted in full and pointed at in its original edition.",
            sourceLessonSlug: "heard-once-read-twice",
          },
          {
            prompt: "Which pair does lesson two set side by side to show a shared measure?",
            options: ["A Scottish ballad and a Dickinson stanza", "A Shakespeare sonnet and a Hopkins sprung-rhythm line, both in five-stress measure", "A Whitman catalogue and a Blake quatrain, to contrast free verse with strict meter", "A Dunbar refrain and a Poe stanza, both built on repeated internal rhyme"],
            correctIndex: 0,
            explanation: "\"Sir Patrick Spens\" and \"Because I could not stop for Death\": one sung by people who could not read it, one written in a room in Amherst, and the shape identical.",
            sourceLessonSlug: "what-lyric-and-poem-share",
          },
          {
            prompt: "A form that had to survive in memory, without a page, developed:",
            options: ["A short repeating stanza and a strong beat", "An expanding line length, so that each retelling could add material without breaking the form", "An unfixed rhyme scheme, allowing a reciter to substitute whatever words came to hand", "A prose framing narrative, which carried the plot while the verse carried the emotion"],
            correctIndex: 0,
            explanation: "Plus a rhyme holding the pairs together and a story told in scenes. Exactly the features you would design for the job.",
            sourceLessonSlug: "what-lyric-and-poem-share",
          },
          {
            prompt: "Why is a melody described as more than a delivery van for words?",
            options: ["It changes what the words must do", "It occupies most of the listener's attention, leaving the words a decorative role at best", "It determines the emotional content entirely, so the words may say anything without effect", "It is composed first in every case, which forces the lyricist into a purely reactive role"],
            correctIndex: 0,
            explanation: "In both directions: it supplies colour, grid, bearable repetition and duration, and it charges for syllables, stress, syntax and singability.",
            sourceLessonSlug: "what-melody-buys-and-charges",
          },
          {
            prompt: "The claim that a poem \"buys no insurance\" against the first pass means:",
            options: ["It does not need any", "It is published without editing, so no protection against misreading is ever built in", "Its reader is assumed to be an expert who requires no assistance from the writer", "It has no repeated material of any kind, which distinguishes it from every song form"],
            correctIndex: 0,
            explanation: "The reader controls the pace, so the devices a lyric uses to survive one hearing are simply unnecessary on a page.",
            sourceLessonSlug: "heard-once-read-twice",
          },
          {
            prompt: "\"Oral transmission\" is defined in this course as preservation by:",
            options: ["Memory and performance", "Dictation to a scribe, who fixes a single authoritative text for later copyists", "Broadside printing, which spread ballads faster than any manuscript tradition could", "Institutional archives, which is why so many early ballads survive in church records"],
            correctIndex: 0,
            explanation: "Rather than by writing, which is what selects for repetition, a regular beat and rhyme.",
            sourceLessonSlug: "what-lyric-and-poem-share",
          },
          {
            prompt: "A lyric can be plainer than a poem on the page and still be excellent because:",
            options: ["The melody is carrying feeling", "Plain language is easier to sing, so the plainness is a technical requirement rather than a choice", "Song audiences prefer simpler diction, which the course treats as an empirical finding", "The chorus repeats often enough that any weakness in the verses goes unnoticed"],
            correctIndex: 0,
            explanation: "Emotional colour arrives before the words land, which is the first of the four things melody buys.",
            sourceLessonSlug: "what-melody-buys-and-charges",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2 — The concrete
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "go-in-fear-of-abstractions",
      title: "5 · Go in fear of abstractions",
      section: "Section 2 · The concrete",
      body: `In March 1913 the magazine *Poetry* published a short, bad-tempered list of instructions by Ezra Pound called "A Few Don'ts by an Imagiste". Most of it is still the best short statement of this one idea in English, and three sentences from it carry the whole lesson.

**"Go in fear of abstractions"** (Pound, 1913, p. 201). Not avoid, which would be impossible. Fear, which is a working posture: an abstraction gets used only when nothing concrete will do the job, and never on autopilot.

**"Use no superfluous word, no adjective, which does not reveal something"** (p. 201). The test is *reveal*, not *decorate*. An adjective that only tells the reader how to feel about the noun has revealed nothing.

**And the sharpest one.** Pound tells you not to write a phrase like "dim lands of peace", because "It dulls the image. It mixes an abstraction with the concrete. It comes from the writer's not realizing that the natural object is always the adequate symbol" (p. 201). That last clause is the actual rule. The thing itself is already enough. You do not have to explain what it means; explaining is what dulls it.

**Why this works, mechanically.** An abstraction names a conclusion. Grief, freedom, betrayal, hope. A concrete thing gives a reader the evidence and lets them reach the conclusion themselves, and a conclusion a reader reaches is believed, while a conclusion handed over is merely received. Naming the feeling you want is the fastest way to stop the reader having it.

**The test that actually works.** Not "can I photograph it", which throws out sound, smell, texture and temperature. The test is: **can a sense reach it?** Can it be seen, heard, smelled, tasted, touched, or felt as weight, heat or motion? A wet black bough passes. Peace does not.

**Abstraction's one legitimate job.** It works as a hinge, sparingly, AFTER concrete material has earned it: a single named idea, placed where a reader has already been shown enough to make it land, is a turn rather than a shortcut. Pound's own objection was to abstraction mixed *into* the image, which blurs both.

**The heard-once version of this rule is stricter.** A reader who meets an abstraction can slow down and do the work of imagining. A listener cannot slow down, so an abstraction in a lyric is very close to a blank: it passes, it names nothing anybody could see, and by the time it might have meant something the next line has arrived.

:::reveal What does Pound mean by "the natural object is always the adequate symbol"? ||| That the concrete thing itself is already sufficient to carry the meaning, so explaining what it stands for adds nothing and blurs it. He gives "dim lands of peace" as the failure, an abstraction mixed into an image.

:::reveal Why is "can I photograph it?" a worse concreteness test than "can a sense reach it?" ||| Because the photograph test throws out sound, smell, taste, texture, temperature, weight and motion, all of which are perfectly concrete. The right question is whether any sense can get to the thing.

## Vocabulary
- **Abstraction**: a word naming a category, quality or conclusion rather than a thing a sense can reach, such as grief, freedom or peace.
- **The concrete**: language pointing at something perceivable, which includes sound, smell, texture, temperature and motion, not only what a camera would see.
- **Imagism**: the movement Pound was writing for in 1913, whose programme was direct presentation of the thing and the removal of every word that does not contribute.
- **Hinge**: a single abstraction placed after enough concrete material to support it, where it works as a turn rather than as a shortcut.

## Sources
Pound, E. (1913). A few don'ts by an Imagiste. *Poetry, 1*(6), 200-206. https://archive.org/details/jstor-20569730`,
    },
    {
      slug: "the-image-does-the-arguing",
      title: "6 · The image does the arguing",
      section: "Section 2 · The concrete",
      body: `An image is not decoration laid over an argument. In a poem or a lyric that is working, the image IS the argument, and the argument is made by what the writer chose to show.

**Three passings and a whole life.** Dickinson's third stanza, in the 1890 text:

> We passed the school where children played,
> Their lessons scarcely done;
> We passed the fields of gazing grain,
> We passed the setting sun.

Children, then ripened grain, then a sun going down. Morning, midday, evening; childhood, maturity, death. Nothing in the stanza says any of that. The stanza argues by SELECTION: three things, in that order, and the reader assembles the claim. Notice also what is missing. No adjective tells you how to feel about the children or the sun. The nouns are doing it.

**Two lines, no explanation.** Pound's "In a Station of the Metro" appeared in *Poetry* in April 1913 and is the whole poem:

> The apparition of these faces in the crowd:
> Petals on a wet, black bough.

A colon, then a second image, and the poem stops. There is no verb joining them and no sentence explaining the comparison, because the comparison IS the poem. In the 1913 printing the words were separated by wide gaps inside each line, which spaced the phrases the way a musician spaces notes; the poem is usually reprinted without them.

**Specificity is what makes an image an image.** Gerard Manley Hopkins, in "Pied Beauty":

> For skies of couple-colour as a brinded cow;
> For rose-moles all in stipple upon trout that swim:
> Fresh-firecoal chestnut-falls; finches' wings;

Not "a fish". Trout, with rose-coloured spots, stippled. The specificity is not showing off. A generic noun makes a reader picture nothing in particular, which means they picture nothing.

**So the practical instruction is about choosing, not describing.** Adding more description to a vague image does not fix it; it makes it a longer vague image. What fixes it is replacing the general noun with the particular one, and then cutting the words that were compensating for the vagueness.

**And the lyric version.** A sung image has to be graspable at speed, which usually means fewer moving parts, not less specificity. One precise thing beats three approximate ones, and it beats them worse in a song than on a page.

:::reveal How does Dickinson's third stanza make an argument about a whole life without naming one? ||| By selection and order alone: children at school, then ripened grain, then the setting sun, which the reader assembles into morning, midday and evening, and so into childhood, maturity and death.

:::reveal Why does replacing a general noun beat adding description to it? ||| Because a general noun makes the reader picture nothing in particular, and more words around it produce a longer vague image. The particular noun, like trout instead of fish, does the work the description was compensating for.

## Vocabulary
- **Image**: a piece of language a sense can reach, which carries the poem's claim rather than illustrating a claim made elsewhere.
- **Argument by selection**: making a point through what is shown and in what order, with no sentence stating the point.
- **Specificity**: choosing the particular noun over the category, which is what allows a reader to picture anything at all.
- **Juxtaposition**: setting two images beside each other with no explanation of the link, so the comparison itself does the work.

## Sources
Dickinson, E. (1890). *Poems* (M. L. Todd & T. W. Higginson, Eds.). Roberts Brothers. https://en.wikisource.org/wiki/Page:Emily_Dickinson_Poems_(1890).djvu/146

Hopkins, G. M. (1918). *Poems of Gerard Manley Hopkins* (R. Bridges, Ed.). Humphrey Milford. https://en.wikisource.org/wiki/Poems_of_Gerard_Manley_Hopkins/Pied_Beauty

Pound, E. (1913). In a station of the metro. *Poetry, 2*(1), 6. Representative Poetry Online. https://rpo.library.utoronto.ca/content/station-metro-0`,
    },
    {
      slug: "front-load-the-concrete",
      title: "7 · Front-load the concrete",
      section: "Section 2 · The concrete",
      body: `Both forms want concrete language. The lyric wants it EARLIER, and that difference is a direct consequence of the heard-once constraint.

**Where the two forms differ on patience.** A reader who meets an abstract first line can hold it, read on, and let the poem earn it retrospectively. A listener who meets an abstract first line has nothing to hold it with; the line is already gone and the next one is arriving. A lyric therefore spends its opening on something a listener can see, and saves the naming for later, if it names at all.

**Two openings that do it.** Dickinson begins with an event, not a mood:

> Because I could not stop for Death,
> He kindly stopped for me;

Someone is doing something to someone. Claude McKay opens "If We Must Die" with a decision and a picture in the same breath:

> If we must die, let it not be like hogs

Nine words, a stated stake, and an image you can see. Neither poet spends the first line telling you what the poem is about.

**The practical version: write the first line last.** Drafts almost always begin with throat-clearing, because the writer needed a sentence or two to get going. When the draft is done, look at the strongest concrete moment in it and ask what happens if it goes first. Very often the original opening turns out to be scaffolding you can pull down.

**The corollary about repetition.** A lyric may repeat a concrete image freely, and a chorus that comes back to the same object every time gets stronger, not weaker, because each return arrives with everything that has happened since. A poem repeating an image is making a much louder claim, because the reader can see both occurrences at once on the page and will assume the repetition is deliberate.

**A caution against the obvious over-correction.** Front-loading the concrete does not mean opening with the most shocking thing available. It means opening with something perceivable that the rest of the piece will use. An image dropped in for impact and then abandoned tells the listener the writer is not keeping track, and once that suspicion starts it is difficult to reverse.

:::reveal Why must a lyric put its concrete detail earlier than a poem needs to? ||| Because a reader can hold an abstract opening and let the poem earn it on a second pass, while a listener has nothing to hold it with: the line has already gone by at the music's speed and the next one is arriving.

:::reveal What does the advice "write the first line last" actually mean in practice? ||| Draft openings are usually throat-clearing the writer needed to get going. When the draft is finished, find its strongest concrete moment and test what happens if that goes first, then cut the scaffolding.

## Vocabulary
- **Front-loading**: placing the most concrete and most graspable material at the opening, where a listener decides whether to keep listening.
- **Throat-clearing**: the opening lines a writer needed in order to start, which usually serve the writer rather than the reader.
- **Scaffolding**: material that held the draft up while it was being built and can be removed once it stands.
- **Payoff image**: a concrete thing introduced early and used again later, as opposed to one dropped in for impact and abandoned.

## Sources
Dickinson, E. (1890). *Poems* (M. L. Todd & T. W. Higginson, Eds.). Roberts Brothers. https://en.wikisource.org/wiki/Page:Emily_Dickinson_Poems_(1890).djvu/146

McKay, C. (1922). *Harlem shadows: The poems of Claude McKay* (Project Gutenberg eBook No. 64989). Harcourt, Brace and Company. https://www.gutenberg.org/ebooks/64989`,
    },
    {
      slug: "quiz-the-concrete",
      title: "8 · Knowledge check: image and the concrete",
      section: "Section 2 · The concrete",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "Pound's instruction about abstractions, in his own words, is to:",
            options: ["Go in fear of them", "Remove them entirely from any line of verse, without exception, at every stage of drafting", "Place them only at the end of a poem, where the reader has enough material to interpret them", "Balance each one against a concrete image in the same line, so that neither dominates"],
            correctIndex: 0,
            explanation: "Fear, not avoidance. It is a working posture: an abstraction is used only when nothing concrete will do the job.",
            sourceLessonSlug: "go-in-fear-of-abstractions",
          },
          {
            prompt: "Pound's test for an adjective is whether it:",
            options: ["Reveals something", "Belongs to the same sensory register as the noun it is attached to", "Can be spoken without breaking the metrical pattern of the line it appears in", "Has not been used by another poet writing on the same subject in the last decade"],
            correctIndex: 0,
            explanation: "Reveal, not decorate. An adjective that only tells the reader how to feel about the noun has revealed nothing.",
            sourceLessonSlug: "go-in-fear-of-abstractions",
          },
          {
            prompt: "What is wrong with a phrase like \"dim lands of peace\", on Pound's account?",
            options: ["It mixes an abstraction with the concrete", "It uses two adjectives where one would carry the whole of the intended meaning", "It borrows its vocabulary from an earlier poet without acknowledging the debt", "It cannot be scanned, because the stresses fall in an order English does not permit"],
            correctIndex: 0,
            explanation: "It dulls the image. Pound traces it to not realising that the natural object is already the adequate symbol.",
            sourceLessonSlug: "go-in-fear-of-abstractions",
          },
          {
            prompt: "\"The natural object is always the adequate symbol\" means the concrete thing:",
            options: ["Is already enough", "Should be chosen for its symbolic associations before its physical properties", "Must be drawn from nature rather than from manufactured or urban surroundings", "Needs a stated interpretation, or the reader will supply the wrong one"],
            correctIndex: 0,
            explanation: "So explaining what it means adds nothing and blurs it. That last clause is the actual rule in the essay.",
            sourceLessonSlug: "go-in-fear-of-abstractions",
          },
          {
            prompt: "Mechanically, why does a concrete image persuade better than an abstraction?",
            options: ["The reader reaches the conclusion themselves", "Concrete words are shorter, so more of them fit into a line of fixed length", "Sensory language is processed faster, which the course cites as a measured finding", "Abstractions are ambiguous, and every reader interprets them in a different way"],
            correctIndex: 0,
            explanation: "A conclusion a reader reaches is believed; one handed over is merely received. Naming the feeling is the fastest way to stop the reader having it.",
            sourceLessonSlug: "go-in-fear-of-abstractions",
          },
          {
            prompt: "The concreteness test this course recommends is:",
            options: ["Can a sense reach it?", "Could a photographer capture it in a single frame without staging anything", "Would the word appear in a dictionary of physical objects rather than of ideas", "Does it name something that existed before the writer began the poem"],
            correctIndex: 0,
            explanation: "The photograph test throws out sound, smell, taste, texture, temperature, weight and motion, all of which are concrete.",
            sourceLessonSlug: "go-in-fear-of-abstractions",
          },
          {
            prompt: "Abstraction's one legitimate job in this course is as:",
            options: ["A hinge, placed after concrete material", "A title, where it can announce the subject without occupying a line of the poem", "A refrain, since a repeated abstraction accumulates meaning across a piece", "An opening, which orients the reader before any specific detail arrives"],
            correctIndex: 0,
            explanation: "A single named idea, placed where the reader has already been shown enough to make it land, works as a turn rather than as a shortcut.",
            sourceLessonSlug: "go-in-fear-of-abstractions",
          },
          {
            prompt: "Why is an abstraction close to a blank in a lyric specifically?",
            options: ["A listener cannot slow down to unpack it", "Abstract words are typically Latinate and therefore awkward to sing at speed", "Listeners have smaller vocabularies than readers, which the course treats as established", "Abstractions rarely rhyme, which forces the following line into an unnatural shape"],
            correctIndex: 0,
            explanation: "It passes, names nothing anybody could see, and by the time it might have meant something the next line has arrived.",
            sourceLessonSlug: "go-in-fear-of-abstractions",
          },
          {
            prompt: "Pound's list of instructions appeared in:",
            options: ["Poetry, in March 1913", "The Fortnightly Review, in September 1914, alongside his account of the Metro poem", "The Egoist, in 1914, as part of the first Imagist anthology's editorial apparatus", "Literary Essays, compiled in 1918 and never published in a periodical beforehand"],
            correctIndex: 0,
            explanation: "Titled \"A Few Don'ts by an Imagiste\", pages 200 to 206 of the magazine's first volume.",
            sourceLessonSlug: "go-in-fear-of-abstractions",
          },
          {
            prompt: "In this course, an \"abstraction\" is a word naming:",
            options: ["A conclusion, not a thing a sense reaches", "Any noun that cannot be counted, such as water, sand or music", "A feeling the writer had, as opposed to one the reader is expected to have", "A general category, which becomes concrete as soon as an adjective is attached"],
            correctIndex: 0,
            explanation: "Grief, freedom, betrayal, hope. The concrete gives evidence; the abstraction gives the verdict.",
            sourceLessonSlug: "go-in-fear-of-abstractions",
          },
          {
            prompt: "In Dickinson's third stanza, what are the three things the speaker passes?",
            options: ["A school, fields of grain, the setting sun", "A church, a graveyard and a house that seemed a swelling of the ground", "A carriage, a driver and the immortality riding along with the two of them", "A river, a road and the horses' heads turned toward eternity"],
            correctIndex: 0,
            explanation: "Children at school, ripened grain, then a sun going down. Morning, midday, evening, and so a whole life, with nothing named.",
            sourceLessonSlug: "the-image-does-the-arguing",
          },
          {
            prompt: "\"Argument by selection\" means the point is made through:",
            options: ["What is shown, and in what order", "A stated thesis followed by the images that support it, in the manner of an essay", "The rhyme scheme, which links the images the writer wants the reader to compare", "Repetition, since anything said three times is understood as the poem's claim"],
            correctIndex: 0,
            explanation: "With no sentence stating the point. Dickinson's three passings assemble into a life without the word life appearing.",
            sourceLessonSlug: "the-image-does-the-arguing",
          },
          {
            prompt: "What is notably absent from the nouns in Dickinson's third stanza?",
            options: ["Adjectives telling you how to feel", "Any reference to death, which the poem withholds until its closing stanza", "Verbs, since the stanza is built entirely from noun phrases in apposition", "Rhyme, which Dickinson suspends for this stanza before restoring it afterwards"],
            correctIndex: 0,
            explanation: "The nouns are doing the work. Nothing instructs the reader on what to make of the children or the sun.",
            sourceLessonSlug: "the-image-does-the-arguing",
          },
          {
            prompt: "Pound's \"In a Station of the Metro\" consists of:",
            options: ["Two lines", "Fourteen lines in the Petrarchan pattern, compressed to a single sentence", "One line, printed with wide internal gaps in its first appearance", "Four lines in common measure, which is why the course groups it with the ballads"],
            correctIndex: 0,
            explanation: "A colon, a second image, and the poem stops. It appeared in Poetry in April 1913.",
            sourceLessonSlug: "the-image-does-the-arguing",
          },
          {
            prompt: "What joins the two halves of the Metro poem?",
            options: ["Nothing but a colon", "A verb of comparison, which the course identifies as the poem's only piece of syntax", "A rhyme between the final words of the two lines, which closes the comparison", "An explanatory clause that Pound removed in later printings but kept in 1913"],
            correctIndex: 0,
            explanation: "No verb joins them and no sentence explains the comparison, because the comparison is the poem.",
            sourceLessonSlug: "the-image-does-the-arguing",
          },
          {
            prompt: "How was the Metro poem printed in 1913 that differs from its usual modern appearance?",
            options: ["With wide gaps inside each line", "Set as a single continuous line with no break between the two images", "Without its title, which was added when Pound collected the poem three years later", "In italic type throughout, to mark it as an example rather than a finished poem"],
            correctIndex: 0,
            explanation: "The gaps spaced the phrases the way a musician spaces notes. It is usually reprinted without them.",
            sourceLessonSlug: "the-image-does-the-arguing",
          },
          {
            prompt: "Hopkins writes of \"rose-moles all in stipple upon trout that swim\" rather than of a fish because:",
            options: ["A generic noun makes the reader picture nothing", "Hopkins was writing a poem about angling and needed the species to be accurate", "The word trout carries the alliteration the line's consonant pattern requires", "A specific noun is easier to rhyme, which mattered in the sprung-rhythm line"],
            correctIndex: 0,
            explanation: "Specificity is not showing off. It is what allows a reader to picture anything in particular at all.",
            sourceLessonSlug: "the-image-does-the-arguing",
          },
          {
            prompt: "The right repair for a vague image is to:",
            options: ["Replace the general noun with a particular one", "Add two or three further adjectives until the picture becomes sufficiently definite", "Move it later in the poem, where accumulated context will make it specific enough", "Attach a simile, since a comparison supplies the detail the noun is missing"],
            correctIndex: 0,
            explanation: "Adding description to a vague image produces a longer vague image. Then cut the words that were compensating for the vagueness.",
            sourceLessonSlug: "the-image-does-the-arguing",
          },
          {
            prompt: "\"Juxtaposition\", as this course uses the word, means:",
            options: ["Two images set side by side, unexplained", "Two contrasting metres alternating within a single stanza", "An image placed next to the abstraction it is intended to illustrate", "The arrangement of stanzas so that each answers the one before it"],
            correctIndex: 0,
            explanation: "The link is left for the reader to make, and the comparison itself does the work. The Metro poem is two lines of it.",
            sourceLessonSlug: "the-image-does-the-arguing",
          },
          {
            prompt: "A sung image usually needs:",
            options: ["Fewer moving parts, not less specificity", "More adjectives, because a listener has no page on which to reconstruct the picture", "A stated interpretation, since a listener cannot pause to work out what it means", "To be repeated within the same verse, so that a listener who missed it gets a second chance"],
            correctIndex: 0,
            explanation: "One precise thing beats three approximate ones, and it beats them worse in a song than on a page.",
            sourceLessonSlug: "the-image-does-the-arguing",
          },
          {
            prompt: "Why does a lyric need concrete detail earlier than a poem does?",
            options: ["A listener has nothing to hold an abstraction with", "Because songs are shorter, so the opening occupies a larger share of the whole", "Because the first line of a song is always sung at a lower volume than the rest", "Because a chorus arrives quickly and needs the verse to have established its subject"],
            correctIndex: 0,
            explanation: "A reader can hold an abstract opening and let the poem earn it retrospectively. The line is already gone for a listener.",
            sourceLessonSlug: "front-load-the-concrete",
          },
          {
            prompt: "Dickinson's opening two lines begin with:",
            options: ["An event, not a mood", "A direct address to the reader, which the rest of the poem sustains", "A description of the carriage, before any character has been introduced", "An abstraction, immortality, which the following stanzas make concrete"],
            correctIndex: 0,
            explanation: "Someone is doing something to someone: Death stops, having been unstoppable for. Nothing announces what the poem is about.",
            sourceLessonSlug: "front-load-the-concrete",
          },
          {
            prompt: "McKay's opening line of \"If We Must Die\" delivers, in nine words:",
            options: ["A stated stake and an image", "A rhyme scheme, a metre and a volta, all inside the first line", "A question, which the remaining thirteen lines of the sonnet answer", "A refrain, which returns unchanged at the end of the poem"],
            correctIndex: 0,
            explanation: "A decision about how to die and a picture you can see, in the same breath, with no line spent on announcing the subject.",
            sourceLessonSlug: "front-load-the-concrete",
          },
          {
            prompt: "\"Write the first line last\" is advice about:",
            options: ["Cutting the throat-clearing", "Delaying the strongest rhyme until the draft's rhyme scheme is settled", "Composing lines in reverse order, so the ending is fixed before the opening", "Writing the title only after the poem has told you what its subject was"],
            correctIndex: 0,
            explanation: "Drafts begin with the sentence or two the writer needed to get going. Find the strongest concrete moment and test putting it first.",
            sourceLessonSlug: "front-load-the-concrete",
          },
          {
            prompt: "A chorus returning to the same concrete object gets stronger because:",
            options: ["Each return carries what has happened since", "Listeners are more likely to remember an object than an abstract statement", "Repetition of a noun creates an internal rhyme with its earlier occurrence", "The melody changes slightly each time, which refreshes the listener's attention"],
            correctIndex: 0,
            explanation: "The verses between have changed what the object means, so the same words are not the same sentence on the third pass.",
            sourceLessonSlug: "front-load-the-concrete",
          },
          {
            prompt: "A poem that repeats an image is making a louder claim than a song that does, because:",
            options: ["The reader can see both occurrences at once", "Poems are shorter, so any repetition occupies a larger proportion of the text", "Print fixes the wording exactly, while a performance may vary it without notice", "Poetry has no equivalent of a chorus, so repetition has no conventional function"],
            correctIndex: 0,
            explanation: "On a page both instances are visible together, so the reader will assume the repetition is deliberate and look for the reason.",
            sourceLessonSlug: "front-load-the-concrete",
          },
          {
            prompt: "The over-correction the lesson warns against is opening with:",
            options: ["The most shocking thing available", "A concrete image, when an abstraction would have oriented the listener faster", "A question, which obliges the rest of the piece to supply an answer", "The chorus, which leaves the verses with nothing left to build toward"],
            correctIndex: 0,
            explanation: "Front-loading means opening with something perceivable that the rest of the piece will actually use.",
            sourceLessonSlug: "front-load-the-concrete",
          },
          {
            prompt: "An image dropped in for impact and then abandoned tells the listener:",
            options: ["The writer is not keeping track", "That the piece is written in a fragmentary style, which the rest will confirm", "That the image was borrowed rather than invented for this particular song", "That a second verse will return to it, which is why the abandonment is provisional"],
            correctIndex: 0,
            explanation: "And once that suspicion starts it is difficult to reverse, which is why the lesson calls it an over-correction rather than a lesser fault.",
            sourceLessonSlug: "front-load-the-concrete",
          },
          {
            prompt: "\"Scaffolding\", in this course, means material that:",
            options: ["Held the draft up while it was built", "Supports the metre by supplying syllables the meaning does not require", "Introduces the poem's subject before the first image arrives", "Repeats an earlier line in order to remind the listener of it"],
            correctIndex: 0,
            explanation: "It can be removed once the piece stands. Section 6 makes it a step in the cutting order.",
            sourceLessonSlug: "front-load-the-concrete",
          },
          {
            prompt: "A \"payoff image\" is one that is:",
            options: ["Introduced early and used again later", "Withheld until the final line, where it resolves everything preceding it", "Borrowed from another poem, so the reader recognises it on arrival", "Repeated identically in every stanza, in the manner of a refrain"],
            correctIndex: 0,
            explanation: "As opposed to one dropped in for impact and then abandoned, which is the failure the lesson warns about.",
            sourceLessonSlug: "front-load-the-concrete",
          },
          {
            prompt: "\"Imagism\", as described here, had as its programme:",
            options: ["Direct presentation, and no wasted word", "The revival of classical metres in English, using Greek and Latin models", "The rejection of rhyme in favour of assonance and consonance exclusively", "The use of visual imagery only, excluding sound, smell, taste and touch"],
            correctIndex: 0,
            explanation: "Direct treatment of the thing, and the removal of every word that does not contribute. Pound was writing for that movement in 1913.",
            sourceLessonSlug: "go-in-fear-of-abstractions",
          },
          {
            prompt: "The Dickinson stanza's three passings map onto:",
            options: ["Childhood, maturity, death", "Three separate journeys the speaker recalls from different stages of a life", "Morning, afternoon and night within a single day, and nothing more", "The three stanzas that follow, each of which develops one of the images"],
            correctIndex: 0,
            explanation: "Through morning, midday and evening. Nothing in the stanza says so; the reader assembles it from the order of the things shown.",
            sourceLessonSlug: "the-image-does-the-arguing",
          },
          {
            prompt: "Which best states what an image is, in this course's terms?",
            options: ["Language a sense can reach that carries the claim", "A comparison between two unlike things, stated with either like or as", "A visual description placed to illustrate an argument made elsewhere in the poem", "A repeated motif that unifies a poem across its separate stanzas"],
            correctIndex: 0,
            explanation: "Not decoration laid over an argument. In a piece that is working, the image is the argument.",
            sourceLessonSlug: "the-image-does-the-arguing",
          },
          {
            prompt: "Which is an example of the sensory reach the concreteness test allows but a photograph would not capture?",
            options: ["The smell of a wet street", "The colour of a bird's wing seen from below at a distance", "The expression on a face at the moment a door opens", "The arrangement of furniture in an unlit room"],
            correctIndex: 0,
            explanation: "Smell, sound, taste, texture, temperature, weight and motion are all concrete, which is why the camera test is the wrong one.",
            sourceLessonSlug: "go-in-fear-of-abstractions",
          },
          {
            prompt: "Pound objected to abstraction chiefly when it was:",
            options: ["Mixed into an image", "Used as the subject of a poem rather than as one of its incidental terms", "Borrowed from philosophy rather than arising from the poet's own observation", "Repeated, since a single occurrence was tolerable and a second was not"],
            correctIndex: 0,
            explanation: "Which blurs both. That is why a single abstraction placed after the concrete material can still work as a hinge.",
            sourceLessonSlug: "go-in-fear-of-abstractions",
          },
          {
            prompt: "The Hopkins lines quoted in this section come from:",
            options: ["\"Pied Beauty\"", "\"The Windhover\", which Robert Bridges placed first in the 1918 volume", "\"God's Grandeur\", the poem the course uses to introduce sprung rhythm", "\"Spring and Fall\", which pairs a concrete image with an abstract address"],
            correctIndex: 0,
            explanation: "From the 1918 volume edited by Robert Bridges, which is the edition cited at the foot of the lesson.",
            sourceLessonSlug: "the-image-does-the-arguing",
          },
          {
            prompt: "What does the course say happens when a writer explains an image?",
            options: ["The image is dulled", "The poem gains clarity at the cost of some of its music", "The reader is given two readings and must choose between them", "The explanation becomes the poem's turn, whether or not that was intended"],
            correctIndex: 0,
            explanation: "It is Pound's own diagnosis of \"dim lands of peace\", and the fourth item in Section 6's cutting order.",
            sourceLessonSlug: "go-in-fear-of-abstractions",
          },
          {
            prompt: "The concrete gives the reader evidence, while the abstraction gives them:",
            options: ["The verdict", "The context in which the evidence can be understood", "A summary of what has already been shown in the preceding lines", "The emotional register in which the rest of the poem should be read"],
            correctIndex: 0,
            explanation: "And a verdict handed over is received rather than believed, which is why naming the feeling stops the reader having it.",
            sourceLessonSlug: "go-in-fear-of-abstractions",
          },
          {
            prompt: "The order of the three things in Dickinson's stanza matters because:",
            options: ["Order is part of the argument", "Reversing it would break the rhyme between the second and fourth lines", "The stanza is chronological, and any other order would be factually wrong", "The last image must be the most concrete, and a sun is more visible than a school"],
            correctIndex: 0,
            explanation: "Argument by selection is made through what is shown AND in what sequence. Shuffle the three and the life disappears.",
            sourceLessonSlug: "the-image-does-the-arguing",
          },
          {
            prompt: "\"Throat-clearing\" names the opening lines that:",
            options: ["The writer needed in order to start", "Establish the metre before the poem's content begins", "Announce the subject so a reader knows what to expect", "Repeat the title, which is a convention in ballad openings"],
            correctIndex: 0,
            explanation: "They serve the writer rather than the reader, which is why the finished draft usually improves when they go.",
            sourceLessonSlug: "front-load-the-concrete",
          },
          {
            prompt: "Which is the better opening, by this section's standard?",
            options: ["Someone doing something to someone", "A statement of the emotion the piece intends to explore", "A general observation that the specific case will later illustrate", "A question addressed to the reader about their own experience"],
            correctIndex: 0,
            explanation: "Both examples in the lesson do it: Dickinson opens on an event and McKay on a decision with a picture attached.",
            sourceLessonSlug: "front-load-the-concrete",
          },
          {
            prompt: "\"Specificity\" is defined in this section as choosing:",
            options: ["The particular noun over the category", "A rare word over a common one wherever the metre permits", "A proper name rather than a description of the same thing", "The technically correct term, even where a reader will not know it"],
            correctIndex: 0,
            explanation: "Trout rather than fish. It is what allows a reader to picture anything at all, and it is not the same as unusual vocabulary.",
            sourceLessonSlug: "the-image-does-the-arguing",
          },
          {
            prompt: "The lesson's instruction about images is that the work is in:",
            options: ["Choosing, not describing", "Describing at sufficient length for the picture to become unambiguous", "Selecting images that have not appeared in poems on the same subject", "Matching each image to an abstraction so the reader knows its purpose"],
            correctIndex: 0,
            explanation: "Which is why replacing the noun repairs a vague image and adding description does not.",
            sourceLessonSlug: "the-image-does-the-arguing",
          },
          {
            prompt: "Pound's essay is cited in this course from:",
            options: ["A scan of the 1913 magazine", "A modern anthology of modernist manifestos, which normalises his spelling", "The 1918 collection A Retrospect, where the essay was reprinted with revisions", "A secondary summary, since the original is not freely available anywhere online"],
            correctIndex: 0,
            explanation: "The Internet Archive's copy of the JSTOR Early Journal Content scan of Poetry, volume 1, pages 200 to 206.",
            sourceLessonSlug: "go-in-fear-of-abstractions",
          },
          {
            prompt: "Which failure does the course say a listener will meet if a lyric opens abstractly?",
            options: ["The line passes with nothing to see", "The listener mishears the words and reconstructs a different sentence", "The melody has to carry meaning it was not written to carry", "The chorus arrives before the subject has been established"],
            correctIndex: 0,
            explanation: "By the time it might have meant something, the next line has arrived, because the listener could not slow down.",
            sourceLessonSlug: "go-in-fear-of-abstractions",
          },
          {
            prompt: "What does the course mean by calling an abstraction a \"shortcut\"?",
            options: ["It names the destination without travelling", "It reduces the syllable count of a line that would otherwise not fit", "It reuses a phrase from an earlier draft rather than writing a new one", "It borrows authority from a source the poem does not cite"],
            correctIndex: 0,
            explanation: "It states the conclusion instead of supplying the evidence that would let a reader arrive at it.",
            sourceLessonSlug: "go-in-fear-of-abstractions",
          },
          {
            prompt: "In the Metro poem, the second image is:",
            options: ["Petals on a wet, black bough", "A crowd of faces pressed against a lighted window", "The apparition of a face seen once and not again", "A branch of blossom held above a station platform"],
            correctIndex: 0,
            explanation: "Following a colon after the apparition of faces in the crowd, with no verb and no explanation between them.",
            sourceLessonSlug: "the-image-does-the-arguing",
          },
          {
            prompt: "What does this section say a writer should do with the words that were compensating for a vague noun?",
            options: ["Cut them", "Keep them, since they carry the rhythm the line was built on", "Move them into the following line, where the new noun can support them", "Convert them into a simile attached to the replacement noun"],
            correctIndex: 0,
            explanation: "Once the particular noun is in place, the compensating description has nothing left to do.",
            sourceLessonSlug: "the-image-does-the-arguing",
          },
          {
            prompt: "Why does the lesson say a lyric saves its naming for later, if it names at all?",
            options: ["The opening must be graspable at speed", "Because a name repeated in the chorus is stronger than one used in a verse", "Because naming a feeling early makes the melody redundant", "Because a listener remembers the last thing heard better than the first"],
            correctIndex: 0,
            explanation: "The lyric spends its opening on something a listener can see, which is the direct consequence of the heard-once constraint.",
            sourceLessonSlug: "front-load-the-concrete",
          },
          {
            prompt: "McKay's \"If We Must Die\" is quoted in this course from:",
            options: ["Harlem Shadows, 1922", "The Liberator, where the sonnet first appeared in 1919", "A Long Way from Home, McKay's autobiography of the 1930s", "Selected Poems, assembled after the poet's death in 1948"],
            correctIndex: 0,
            explanation: "The Harcourt, Brace collection, cited at the foot of the lesson so the whole sonnet can be read.",
            sourceLessonSlug: "front-load-the-concrete",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3 — Sound: rhyme is a tool, not a rule
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "perfect-rhyme-and-what-it-costs",
      title: "9 · Perfect rhyme, and what it costs",
      section: "Section 3 · Sound: rhyme is a tool, not a rule",
      body: `A perfect rhyme, in the Academy of American Poets' definition, "occurs if the words' final stressed vowel and all following sounds are identical", as in *bright* and *flight* (Academy of American Poets, n.d.-c). That is a precise definition and it is worth holding, because most arguments about whether something rhymes are really arguments about how far from this the writer has moved.

**What perfect rhyme buys.** Three things. **Closure**, because the ear recognises the return and feels the couplet finish. **Memorability**, which is why the forms that had to survive without a page use it. And **shape**, because a rhyme scheme tells a listener where they are inside a stanza without anyone announcing it. Under the heard-once constraint every one of those is worth more in a lyric than in a poem.

**What perfect rhyme costs.** One thing, and it is expensive: **the rhyme-driven line**. The first line of a pair is written by the writer, and then the second line gets written by the rhyme. The symptoms are easy to spot in your own drafts once you know them.

- **Inverted syntax.** Nobody says "into the room she came" unless *came* had to be at the end.
- **A noun that appears from nowhere**, does one job, and is never seen again.
- **A claim you did not mean.** This is the serious one. The line says something slightly untrue because the true version did not rhyme, and a reader believes the line, not your intention.
- **An intensifier holding a slot.** Words like *ever*, *only*, *still* and *just*, arriving to fill a syllable rather than to mean anything.

**The fix is to rhyme forwards.** Choose the rhyme word before you write the line that lands on it, so the line is built to arrive somewhere you actually want to go. List candidates first; most rhyme pairs in English are small sets and you can see the whole field in a minute. Then, and this is the part writers resist, **be willing to change the FIRST line**. When a pair is bad, the second line is usually where the damage shows and the first line is usually the cause.

**And know when not to rhyme at all.** Rhyme is a tool with a job. If the piece needs the shape and the closure, use it. If the piece needs to stay open, or needs a speaking voice rather than a singing one, perfect rhyme will fight you the whole way, and the next lesson is about the tools that sit between rhyme and no rhyme.

:::reveal Give the technical definition of a perfect rhyme. ||| The words' final stressed vowel and every sound after it are identical, as in bright and flight. Most disputes about whether two words rhyme are really about how far the writer has moved from this.

:::reveal Name the most damaging symptom of a rhyme-driven line, and why it is the worst one. ||| A claim the writer did not mean, arriving because the true version did not rhyme. It is worst because the reader believes the line as written and has no access to what was intended.

## Vocabulary
- **Perfect rhyme**: two words whose final stressed vowel and all following sounds are identical.
- **End rhyme**: rhyme falling on the final syllables of a pair or group of lines, which is what most people mean by rhyme.
- **Rhyme-driven line**: a line whose content was decided by the need for a rhyme rather than by the writer.
- **Rhyming forwards**: choosing the rhyme word before writing the line that arrives at it, so the line is built toward a destination you chose.

## Sources
Academy of American Poets. (n.d.-c). *Rhyme*. Poets.org. https://poets.org/glossary/rhyme`,
    },
    {
      slug: "slant-rhyme-and-the-near-relatives",
      title: "10 · Slant rhyme and the near relatives",
      section: "Section 3 · Sound: rhyme is a tool, not a rule",
      body: `Between perfect rhyme and no rhyme there is a whole working range, and most good writing in both forms lives in it.

**Slant rhyme** describes "words that sound similar, but don't exactly rhyme, such as *young* and *long*" (Academy of American Poets, n.d.-c). It is also called off rhyme, half rhyme and near rhyme, and the multiple names are a clue that writers have found it useful for a long time.

**Two examples you can check.** Dickinson's second stanza in the 1890 text pairs *away* with *civility*: a shared final vowel sound, no matching consonant, and the stanza closes anyway. William Blake ends both the first and last stanzas of "The Tyger" on *eye* and *symmetry*, which has never been a perfect rhyme in any pronunciation this course can verify, and the poem is not damaged by it.

**Why a slant rhyme is not a failed rhyme.** A perfect rhyme clicks shut. That is exactly what you want at the end of a stanza you are finishing, and exactly what you do not want in the middle of an argument you intend to keep open. A slant rhyme delivers the recognition without the closure, so the ear is satisfied and the poem stays in motion. Choosing between them is a decision about whether this moment should feel finished.

**The two ingredients rhyme is made of, usable separately.** **Assonance** is "the repetition of similar vowel sounds" (Academy of American Poets, n.d.-d). **Alliteration** is "the repetition of consonant sounds, particularly at the beginnings of words" (Academy of American Poets, n.d.-e), and **consonance** is the more general case, repeated consonant sounds anywhere in the words rather than only at their fronts. Used inside a line rather than at its end, all three bind a phrase together without announcing a rhyme at all.

**Hopkins runs them hard.** From "Pied Beauty":

> Fresh-firecoal chestnut-falls; finches' wings;

Four *f* sounds, a run of *ch* and *s*, and no end rhyme involved. The line coheres by consonant, which is why it survives being read aloud by someone who has no idea what a firecoal chestnut is.

**The lyric angle.** A sung slant rhyme is easier to get away with than a written one, because pitch, duration and the sameness of the melodic phrase are all cueing the ear that a return has happened. That is a description of common practice, not a measured claim about perception, and it is worth testing on your own material rather than trusting.

:::reveal What does a slant rhyme give you that a perfect rhyme does not? ||| Recognition without closure. The ear registers the return, but the line does not click shut, so a poem can satisfy the ear and stay in motion through an argument it does not want to end yet.

:::reveal Distinguish assonance, alliteration and consonance in one line each. ||| Assonance is repeated vowel sounds; alliteration is repeated consonant sounds particularly at the beginnings of words; consonance is the general case of repeated consonant sounds anywhere in the words.

## Vocabulary
- **Slant rhyme**: words that sound similar without rhyming exactly, also called off rhyme, half rhyme or near rhyme.
- **Assonance**: the repetition of similar vowel sounds in words near each other.
- **Alliteration**: the repetition of consonant sounds, particularly at the beginnings of words.
- **Consonance**: repeated consonant sounds anywhere in the words, of which alliteration is the word-initial special case.

## Sources
Academy of American Poets. (n.d.-c). *Rhyme*. Poets.org. https://poets.org/glossary/rhyme

Academy of American Poets. (n.d.-d). *Assonance*. Poets.org. https://poets.org/glossary/assonance

Academy of American Poets. (n.d.-e). *Alliteration*. Poets.org. https://poets.org/glossary/alliteration

Blake, W. (1996). *Poems of William Blake* (Project Gutenberg eBook No. 574). https://www.gutenberg.org/ebooks/574

Hopkins, G. M. (1918). *Poems of Gerard Manley Hopkins* (R. Bridges, Ed.). Humphrey Milford. https://en.wikisource.org/wiki/Poems_of_Gerard_Manley_Hopkins/Pied_Beauty`,
    },
    {
      slug: "where-the-rhyme-sits",
      title: "11 · Where the rhyme sits",
      section: "Section 3 · Sound: rhyme is a tool, not a rule",
      body: `Whether two words rhyme is the small question. Where the rhyme sits is the large one, because placement is what a rhyme scheme actually does.

**End rhyme and the scheme.** End rhyme falls on "the final syllables of a pair or group of lines" (Academy of American Poets, n.d.-c), and a scheme is just the map of which lines answer which, written with letters. The ballad quatrain is **abcb**: only the second and fourth lines rhyme, and the first and third are free. That single choice is why the ballad stanza can carry narrative. Two free lines per stanza means two lines that can say whatever the story needs, and one rhyme pair per stanza is enough to hold the shape.

**Compare it with abab or aabb.** A scheme with more rhyme per stanza is tighter and more finished and gives the writer less room; a scheme with less is looser and needs something else to hold it. Neither is better. The question is how much room this stanza's content needs.

**Internal rhyme** is what happens "when two words in the same line rhyme" (Academy of American Poets, n.d.-c). Poe's "The Raven" is built on it:

> Once upon a midnight dreary, while I pondered, weak and weary,

and again a line later:

> While I nodded, nearly napping, suddenly there came a tapping,

*dreary* and *weary*, *napping* and *tapping*, both landing mid-line. Internal rhyme speeds a line up, because the ear gets its reward twice as often, and it makes a long line hold together that would otherwise sprawl.

**The unrhymed line is a tool too.** In a scheme where the ear has learned to expect a rhyme, a line that does not deliver one stands out precisely because the pattern was established. You spend nothing to get that emphasis except the pattern you already built.

**Two placement effects worth knowing.** A rhyme that arrives **sooner** than expected tightens and speeds; a rhyme **delayed** across more lines loosens and creates suspension, because the ear is still holding the first sound. Both are decisions about pace, and pace is most of what a rhyme scheme controls.

**And in song, position interacts with the beat.** A rhyme landing on a strong beat is heard clearly; the same rhyme landing on a weak beat between accents can pass almost unnoticed. So a lyric's rhyme scheme is really a scheme in two dimensions, the line and the bar, which is the subject of the next section.

:::reveal Why is abcb the workhorse scheme of narrative ballads? ||| Because only the second and fourth lines rhyme, so two of the four lines are free to say whatever the story needs, while one rhyme pair per stanza is still enough to hold the shape for the ear.

:::reveal What does internal rhyme do to a line, and why does Poe use so much of it? ||| It rewards the ear twice as often, which speeds the line and binds a long line that would otherwise sprawl. "The Raven" runs on very long lines and internal rhyme is what keeps them together.

## Vocabulary
- **Rhyme scheme**: the map of which lines rhyme with which, written as letters, such as abcb or abab.
- **Internal rhyme**: rhyme between two words inside the same line rather than at the line ends.
- **Delayed rhyme**: a rhyme answered several lines later, which loosens the pace and holds the ear in suspension.
- **Unrhymed line**: a line that withholds an expected rhyme, which draws attention precisely because the pattern taught the ear to expect one.

## Sources
Academy of American Poets. (n.d.-c). *Rhyme*. Poets.org. https://poets.org/glossary/rhyme

Poe, E. A. (1997). *The Raven* (Project Gutenberg eBook No. 1065). https://www.gutenberg.org/ebooks/1065

Quiller-Couch, A. (Ed.). (2014). *The Oxford Book of Ballads* (Project Gutenberg eBook No. 44593). Clarendon Press. https://www.gutenberg.org/ebooks/44593`,
    },
    {
      slug: "quiz-sound-and-rhyme",
      title: "12 · Knowledge check: rhyme and its near relatives",
      section: "Section 3 · Sound: rhyme is a tool, not a rule",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "A perfect rhyme requires that two words share:",
            options: ["The final stressed vowel and everything after it", "The same number of syllables and the same consonant at the start of each", "An identical spelling from the stressed vowel onward, whatever the pronunciation", "The same vowel sound somewhere in the word, in any position at all"],
            correctIndex: 0,
            explanation: "The Academy of American Poets gives bright and flight as the example. Most disputes about rhyme are about distance from this.",
            sourceLessonSlug: "perfect-rhyme-and-what-it-costs",
          },
          {
            prompt: "Which three things does perfect rhyme buy a writer?",
            options: ["Closure, memorability, shape", "Speed, density and the ability to compress two lines into one", "Authority, formality and a claim on the reader's respect for the tradition", "Ambiguity, suspension and the option of leaving an argument unresolved"],
            correctIndex: 0,
            explanation: "All three are worth more under the heard-once constraint than on a page, which is why song has held onto rhyme.",
            sourceLessonSlug: "perfect-rhyme-and-what-it-costs",
          },
          {
            prompt: "A \"rhyme-driven line\" is one whose content was decided by:",
            options: ["The need for a rhyme", "The metre, which forced the writer to add or remove syllables", "An editor, who requested a change the writer did not agree with", "The melody, which fixed the line's length before the words existed"],
            correctIndex: 0,
            explanation: "The first line of a pair is written by the writer; the second gets written by the rhyme.",
            sourceLessonSlug: "perfect-rhyme-and-what-it-costs",
          },
          {
            prompt: "Which symptom of a rhyme-driven line does the lesson call the serious one?",
            options: ["A claim you did not mean", "Inverted syntax, since it marks the writing as archaic to a modern reader", "A noun appearing once and never returning, which breaks the poem's unity", "An intensifier filling a slot, which weakens the line's rhythm noticeably"],
            correctIndex: 0,
            explanation: "The line says something slightly untrue because the true version did not rhyme, and a reader believes the line, not the intention.",
            sourceLessonSlug: "perfect-rhyme-and-what-it-costs",
          },
          {
            prompt: "\"Into the room she came\" is offered as an example of:",
            options: ["Inverted syntax", "A slant rhyme that the ear accepts more readily when sung", "Internal rhyme placed at the end of a line rather than inside it", "A deliberate substitution of a trochee for an iamb in a metrical line"],
            correctIndex: 0,
            explanation: "Nobody says it unless the rhyme word had to sit at the end. It is the easiest symptom to spot in your own drafts.",
            sourceLessonSlug: "perfect-rhyme-and-what-it-costs",
          },
          {
            prompt: "Which words does the lesson name as intensifiers that fill syllable slots?",
            options: ["Ever, only, still, just", "Which, that, whom, whose", "Above, beneath, beyond, within", "Rather, however, moreover, therefore"],
            correctIndex: 0,
            explanation: "They arrive to fill a syllable rather than to mean anything, and they breed in metrical and sung writing because they are the right size.",
            sourceLessonSlug: "perfect-rhyme-and-what-it-costs",
          },
          {
            prompt: "\"Rhyming forwards\" means:",
            options: ["Choosing the rhyme word before writing the line", "Placing the rhyme earlier in the stanza than the scheme requires", "Working from the last stanza back toward the first", "Rhyming the first word of each line rather than the last"],
            correctIndex: 0,
            explanation: "So the line is built to arrive somewhere you actually want to go, rather than being pushed there.",
            sourceLessonSlug: "perfect-rhyme-and-what-it-costs",
          },
          {
            prompt: "When a rhyme pair is bad, where is the cause usually found?",
            options: ["In the first line", "In the metre, which will not accommodate the better word", "In the rhyme scheme, which should be changed for the whole poem", "In the second line, which is where the damage is visible"],
            correctIndex: 0,
            explanation: "The second line is where the damage shows. Writers resist changing the first line, and that is usually the fix.",
            sourceLessonSlug: "perfect-rhyme-and-what-it-costs",
          },
          {
            prompt: "When should a writer not rhyme at all?",
            options: ["When the piece needs to stay open", "When the subject is serious, since rhyme carries a comic association", "When writing free verse, which by definition excludes any rhyme", "When the lines are longer than about ten syllables each"],
            correctIndex: 0,
            explanation: "Rhyme is a tool with a job: shape and closure. A piece needing a speaking voice rather than a singing one will be fought by perfect rhyme.",
            sourceLessonSlug: "perfect-rhyme-and-what-it-costs",
          },
          {
            prompt: "The Academy's example of a slant rhyme is:",
            options: ["Young and long", "Bright and flight", "Cat and hat, offered there as the standard example of a perfect rhyme", "Eye and symmetry"],
            correctIndex: 0,
            explanation: "Words that sound similar but do not exactly rhyme. It is also called off rhyme, half rhyme and near rhyme.",
            sourceLessonSlug: "slant-rhyme-and-the-near-relatives",
          },
          {
            prompt: "Which pair does Dickinson use as a slant rhyme in the 1890 text?",
            options: ["Away and civility", "Death and me", "Ground and mound", "Played and done"],
            correctIndex: 0,
            explanation: "A shared final vowel sound with no matching consonant, and the stanza closes anyway.",
            sourceLessonSlug: "slant-rhyme-and-the-near-relatives",
          },
          {
            prompt: "Blake ends the first and last stanzas of \"The Tyger\" on which pair?",
            options: ["Eye and symmetry", "Bright and night", "Fire and aspire", "Spears and tears"],
            correctIndex: 0,
            explanation: "It has never been a perfect rhyme in any pronunciation this course can verify, and the poem is not damaged by it.",
            sourceLessonSlug: "slant-rhyme-and-the-near-relatives",
          },
          {
            prompt: "What does a slant rhyme deliver that a perfect rhyme does not?",
            options: ["Recognition without closure", "A stronger sense of finish at the end of a stanza", "Greater memorability across a long narrative poem", "An audible link between lines that are far apart"],
            correctIndex: 0,
            explanation: "A perfect rhyme clicks shut, which is right at the end of something you are finishing and wrong in the middle of an open argument.",
            sourceLessonSlug: "slant-rhyme-and-the-near-relatives",
          },
          {
            prompt: "Choosing between a perfect and a slant rhyme is a decision about:",
            options: ["Whether this moment should feel finished", "Which of the two the writer can find more candidates for", "How formal the poem's overall register is meant to be", "Whether the piece will be printed or performed"],
            correctIndex: 0,
            explanation: "That is the whole basis for the choice, and it is why a slant rhyme is not a lesser or failed rhyme.",
            sourceLessonSlug: "slant-rhyme-and-the-near-relatives",
          },
          {
            prompt: "Assonance is the repetition of:",
            options: ["Similar vowel sounds", "Consonant sounds at the beginnings of words in close succession", "Whole syllables, in the manner of a partial refrain", "Stress patterns across successive lines of a stanza"],
            correctIndex: 0,
            explanation: "In words encountered near each other, which the Academy illustrates with lines from Tennyson's \"The Lotos-Eaters\".",
            sourceLessonSlug: "slant-rhyme-and-the-near-relatives",
          },
          {
            prompt: "Alliteration is defined by the Academy as repetition of consonant sounds:",
            options: ["Particularly at the beginnings of words", "Between the stressed syllables of a metrical line", "At the ends of lines, as an alternative to end rhyme", "Within a single word rather than across several"],
            correctIndex: 0,
            explanation: "Consonance is the more general case: repeated consonant sounds anywhere in the words rather than only at their fronts.",
            sourceLessonSlug: "slant-rhyme-and-the-near-relatives",
          },
          {
            prompt: "Consonance differs from alliteration in that it:",
            options: ["Is not restricted to word beginnings", "Requires the consonants to be identical rather than merely similar", "Occurs only at the ends of lines, where rhyme would otherwise sit", "Involves vowels as well, which alliteration excludes by definition"],
            correctIndex: 0,
            explanation: "Alliteration is the word-initial special case of consonance, which is why the course treats them as one family.",
            sourceLessonSlug: "slant-rhyme-and-the-near-relatives",
          },
          {
            prompt: "What holds the Hopkins line about firecoal chestnut-falls together?",
            options: ["Repeated consonants", "An internal rhyme between its first and last words", "A regular alternation of stressed and unstressed syllables", "An end rhyme with the line preceding it in the stanza"],
            correctIndex: 0,
            explanation: "Four f sounds and a run of ch and s, with no end rhyme involved, which is why it survives being read by someone who does not know the words.",
            sourceLessonSlug: "slant-rhyme-and-the-near-relatives",
          },
          {
            prompt: "Used inside a line rather than at its end, assonance and consonance:",
            options: ["Bind a phrase without announcing a rhyme", "Substitute for metre in poems that have abandoned regular stress", "Signal to the reader that a rhyme has been withheld deliberately", "Slow the line by adding syllables that carry no meaning"],
            correctIndex: 0,
            explanation: "They are the two ingredients rhyme is made of, usable separately and much less conspicuously.",
            sourceLessonSlug: "slant-rhyme-and-the-near-relatives",
          },
          {
            prompt: "The lesson's claim about sung slant rhymes is explicitly labelled as:",
            options: ["Common practice, not a measured claim", "A finding from research on speech perception in noise", "A rule that admits of no exceptions in any genre", "An opinion the course expects most writers to reject"],
            correctIndex: 0,
            explanation: "Pitch, duration and the sameness of the melodic phrase are all cueing the ear, and the course says to test it on your own material.",
            sourceLessonSlug: "slant-rhyme-and-the-near-relatives",
          },
          {
            prompt: "A rhyme scheme is best described as:",
            options: ["A map of which lines answer which", "The pattern of stresses running through a stanza", "The list of rhyme sounds a poem is permitted to use", "The order in which a poet writes the lines of a stanza"],
            correctIndex: 0,
            explanation: "Written with letters. The ballad quatrain is abcb, which is why only the second and fourth lines are committed.",
            sourceLessonSlug: "where-the-rhyme-sits",
          },
          {
            prompt: "The abcb scheme suits narrative because it leaves:",
            options: ["Two free lines per stanza", "The final line unrhymed for emphasis at the end of each scene", "Room for an internal rhyme in the lines that do not carry an end rhyme", "The rhyme sound unchanged across the whole poem, aiding memorisation"],
            correctIndex: 0,
            explanation: "Two lines that can say whatever the story needs, with one rhyme pair still enough to hold the shape for the ear.",
            sourceLessonSlug: "where-the-rhyme-sits",
          },
          {
            prompt: "Compared with abcb, a scheme like aabb is:",
            options: ["Tighter, with less room for the writer", "Older, and therefore associated with the ballad tradition", "Easier to sing, because the rhymes fall closer together in time", "Less memorable, since the ear cannot predict where a rhyme will land"],
            correctIndex: 0,
            explanation: "More rhyme per stanza means more finish and less room. Neither is better; the question is how much room the content needs.",
            sourceLessonSlug: "where-the-rhyme-sits",
          },
          {
            prompt: "Internal rhyme happens when:",
            options: ["Two words in the same line rhyme", "A line rhymes with one several stanzas later", "A word rhymes with itself, in the manner of a refrain", "The first and last words of a stanza rhyme with each other"],
            correctIndex: 0,
            explanation: "As opposed to end rhyme, which falls on the final syllables of a pair or group of lines.",
            sourceLessonSlug: "where-the-rhyme-sits",
          },
          {
            prompt: "Which pair is an internal rhyme in the opening line of \"The Raven\"?",
            options: ["Dreary and weary", "Napping and tapping", "Lore and door", "Midnight and pondered"],
            correctIndex: 0,
            explanation: "Both land mid-line. Napping and tapping do the same job a line later.",
            sourceLessonSlug: "where-the-rhyme-sits",
          },
          {
            prompt: "What does internal rhyme do to a long line?",
            options: ["Speeds it and holds it together", "Divides it into two shorter lines for the purpose of scansion", "Removes the need for an end rhyme at the close of the line", "Slows it, because the ear pauses at each rhyming pair"],
            correctIndex: 0,
            explanation: "The ear gets its reward twice as often, which is what keeps Poe's very long lines from sprawling.",
            sourceLessonSlug: "where-the-rhyme-sits",
          },
          {
            prompt: "An unrhymed line inside an established scheme:",
            options: ["Stands out, and costs nothing", "Breaks the poem's form and should normally be repaired", "Is heard as a slant rhyme by most listeners in performance", "Requires a compensating rhyme later in the same stanza"],
            correctIndex: 0,
            explanation: "The emphasis is paid for entirely by the pattern already built, which is why withholding is a tool rather than a mistake.",
            sourceLessonSlug: "where-the-rhyme-sits",
          },
          {
            prompt: "A rhyme delayed across more lines than expected:",
            options: ["Loosens the pace and creates suspension", "Is not heard at all, because the ear cannot hold a sound that long", "Tightens the stanza by making the eventual return more emphatic", "Converts an end rhyme into an internal one by moving its position"],
            correctIndex: 0,
            explanation: "The ear is still holding the first sound. A rhyme arriving sooner than expected does the opposite: it tightens and speeds.",
            sourceLessonSlug: "where-the-rhyme-sits",
          },
          {
            prompt: "Most of what a rhyme scheme controls is:",
            options: ["Pace", "Meaning, since rhymed words are read as thematically linked", "Length, because a scheme fixes the number of lines in a stanza", "Register, since some schemes are formal and others colloquial"],
            correctIndex: 0,
            explanation: "Placement decisions are pace decisions: sooner tightens, delayed loosens, withheld emphasises.",
            sourceLessonSlug: "where-the-rhyme-sits",
          },
          {
            prompt: "In a song, a rhyme landing on a weak beat:",
            options: ["Can pass almost unnoticed", "Is heard as a slant rhyme regardless of how perfect it is", "Forces the following line to begin on a strong beat", "Is impossible, because rhymes always coincide with accents"],
            correctIndex: 0,
            explanation: "Which makes a lyric's rhyme scheme a scheme in two dimensions, the line and the bar.",
            sourceLessonSlug: "where-the-rhyme-sits",
          },
          {
            prompt: "The course's overall position on perfect rhyme is that it is:",
            options: ["A tool, not a rule", "The mark of competence, which free verse writers have abandoned too readily", "A convention of song that poetry has outgrown since the modernists", "Obligatory in any piece intended to be sung rather than read"],
            correctIndex: 0,
            explanation: "It has a job, closure and shape and memorability, and a real cost, the rhyme-driven line.",
            sourceLessonSlug: "perfect-rhyme-and-what-it-costs",
          },
          {
            prompt: "Why does the lesson say rhyme candidates are quick to survey?",
            options: ["Most rhyme sets in English are small", "Rhyming dictionaries list them in order of frequency of use", "The metre eliminates all but a handful of the possible words", "Poets memorise them in training, which is why the search feels fast"],
            correctIndex: 0,
            explanation: "You can see the whole field in a minute, which is what makes rhyming forwards practical rather than laborious.",
            sourceLessonSlug: "perfect-rhyme-and-what-it-costs",
          },
          {
            prompt: "Which is the correct definition of end rhyme?",
            options: ["Rhyme on the final syllables of lines", "Rhyme between the last word of a poem and its title", "Any rhyme occurring in the second half of a line", "The rhyme that closes a stanza, as distinct from those inside it"],
            correctIndex: 0,
            explanation: "Of a pair or group of lines. It is what most people mean when they say a poem rhymes.",
            sourceLessonSlug: "perfect-rhyme-and-what-it-costs",
          },
          {
            prompt: "A noun that appears from nowhere, does one job and never returns is a symptom of:",
            options: ["A rhyme-driven line", "An enjambment the writer failed to resolve", "A metrical substitution made to avoid monotony", "An image introduced as a payoff for a later stanza"],
            correctIndex: 0,
            explanation: "It arrived because it rhymed, not because the piece needed it, which is why it has nothing else to do.",
            sourceLessonSlug: "perfect-rhyme-and-what-it-costs",
          },
          {
            prompt: "The multiple names for slant rhyme are a clue that:",
            options: ["Writers have long found it useful", "Critics have never agreed on whether it counts as rhyme", "Each name refers to a technically different phenomenon", "The device was invented independently in several languages"],
            correctIndex: 0,
            explanation: "Off rhyme, half rhyme and near rhyme all name the same thing, which is why the course treats it as a working tool rather than a compromise.",
            sourceLessonSlug: "slant-rhyme-and-the-near-relatives",
          },
          {
            prompt: "Which of these is NOT one of the three things perfect rhyme buys?",
            options: ["Openness", "Closure, so that the ear feels the couplet finish", "Memorability, which is why oral forms depend on it", "Shape, which tells a listener where they are in a stanza"],
            correctIndex: 0,
            explanation: "Openness is what a slant rhyme supplies. A perfect rhyme clicks shut, which is the opposite property.",
            sourceLessonSlug: "perfect-rhyme-and-what-it-costs",
          },
          {
            prompt: "In the ballad quatrain, the first and third lines are:",
            options: ["Free of rhyme", "Shorter than the second and fourth by one stress", "Rhymed with each other on a second sound", "Repeated as a refrain in every stanza"],
            correctIndex: 0,
            explanation: "That is what abcb means, and it is the room the story is told in.",
            sourceLessonSlug: "where-the-rhyme-sits",
          },
          {
            prompt: "The lesson says the small question about rhyme is whether two words rhyme, and the large one is:",
            options: ["Where the rhyme sits", "Whether the rhyme is original or has been used before", "How many rhymes a single stanza can carry", "Whether the poem needs rhyme at all"],
            correctIndex: 0,
            explanation: "Because placement is what a rhyme scheme actually does, and placement decisions are decisions about pace.",
            sourceLessonSlug: "where-the-rhyme-sits",
          },
          {
            prompt: "\"The Raven\" is quoted in this course from:",
            options: ["A Project Gutenberg edition", "The 1845 printing in the American Review, under a pseudonym", "Poe's own manuscript, held by a university library", "An anthology of American verse edited by Quiller-Couch"],
            correctIndex: 0,
            explanation: "Cited at the foot of the lesson, as every quoted text in this course is.",
            sourceLessonSlug: "where-the-rhyme-sits",
          },
          {
            prompt: "What makes a slant rhyme still work for a listener rather than a reader?",
            options: ["The ear registers the return anyway", "Listeners cannot distinguish slant from perfect rhyme at all", "The melody replaces the rhyme's function entirely", "Slant rhymes are always placed on strong beats in song"],
            correctIndex: 0,
            explanation: "The recognition is what a rhyme delivers, and a slant rhyme delivers it without the closure that a perfect rhyme adds.",
            sourceLessonSlug: "slant-rhyme-and-the-near-relatives",
          },
          {
            prompt: "The Tennyson passage the Academy uses to illustrate assonance comes from:",
            options: ["\"The Lotos-Eaters\"", "\"In Memoriam\", where the alternating rhyme is most audible", "\"The Charge of the Light Brigade\", chosen for its driving rhythm", "\"Ulysses\", which the glossary quotes at length for its vowel music"],
            correctIndex: 0,
            explanation: "Dated 1833 in the glossary entry, which points at the interplay of vowels across three lines.",
            sourceLessonSlug: "slant-rhyme-and-the-near-relatives",
          },
          {
            prompt: "Why does the course say a rhyme should be checked for what it makes a line claim?",
            options: ["A reader believes the line, not the intention", "Because rhymed words are the ones a reader remembers longest", "Because an inaccurate rhyme will be corrected by an editor later", "Because claims made in rhyme carry more rhetorical force than plain ones"],
            correctIndex: 0,
            explanation: "The most damaging symptom of a rhyme-driven line is a slightly untrue statement arriving because the true one did not rhyme.",
            sourceLessonSlug: "perfect-rhyme-and-what-it-costs",
          },
          {
            prompt: "Which is the correct order of the fix for a bad rhyme pair?",
            options: ["List candidates, then change the first line", "Change the rhyme scheme, then rewrite the stanza around it", "Accept the pair and compensate with a stronger image later", "Move the pair to the end of the poem, where it will be less exposed"],
            correctIndex: 0,
            explanation: "Rhyming forwards means choosing the destination first, and the cause of a bad pair usually sits in the line before the damage shows.",
            sourceLessonSlug: "perfect-rhyme-and-what-it-costs",
          },
          {
            prompt: "The course's phrase \"a scheme in two dimensions\" refers to a lyric's rhyme falling in:",
            options: ["The line and the bar", "The verse and the chorus", "The melody and the harmony", "The stanza and the refrain"],
            correctIndex: 0,
            explanation: "Position within the line is one axis and position against the musical accent is the other, which is the subject of Section 4.",
            sourceLessonSlug: "where-the-rhyme-sits",
          },
          {
            prompt: "What does the lesson say about a poem that end-rhymes every line perfectly?",
            options: ["It will fight a piece that needs to stay open", "It is the standard against which all other schemes are judged", "It becomes unsingable, because perfect rhymes demand strong beats", "It cannot carry narrative, since rhyme and story are incompatible"],
            correctIndex: 0,
            explanation: "Rhyme is a tool with a job. If the piece needs shape and closure, use it; if it needs to stay open, it will resist you the whole way.",
            sourceLessonSlug: "perfect-rhyme-and-what-it-costs",
          },
          {
            prompt: "Dickinson's stanza using away and civility shows that a slant rhyme can:",
            options: ["Close a stanza", "Only ever appear in the middle of a poem, never at its end", "Substitute for metre when a line runs short of syllables", "Function as an internal rhyme when the words are far apart"],
            correctIndex: 0,
            explanation: "The stanza finishes on it. A slant rhyme is a working choice, not a failure to find a perfect one.",
            sourceLessonSlug: "slant-rhyme-and-the-near-relatives",
          },
          {
            prompt: "What is the practical value of knowing that alliteration is a special case of consonance?",
            options: ["It widens where you can put the sound", "It allows alliteration to be scanned as a metrical foot", "It explains why alliterative verse has no rhyme scheme", "It shows that consonants matter more than vowels in English"],
            correctIndex: 0,
            explanation: "Repeated consonants anywhere in the words bind a phrase, which means the effect is not confined to the fronts of words.",
            sourceLessonSlug: "slant-rhyme-and-the-near-relatives",
          },
          {
            prompt: "Which best describes the whole section's argument about sound?",
            options: ["Rhyme is one option in a range", "Perfect rhyme is the goal, and slant rhyme a fallback", "Sound patterning matters only in song, not in poetry", "The ear should be trusted over any technical description"],
            correctIndex: 0,
            explanation: "Between perfect rhyme and no rhyme sit slant rhyme, assonance and consonance, and most good writing in both forms lives in that range.",
            sourceLessonSlug: "slant-rhyme-and-the-near-relatives",
          },
          {
            prompt: "Why does a rhyme arriving earlier than expected tighten a stanza?",
            options: ["The ear is rewarded sooner", "It shortens the line it appears in by one syllable", "It forces the following line into a shorter length", "It converts an end rhyme into an internal rhyme"],
            correctIndex: 0,
            explanation: "Pace is the thing being controlled, and the reward interval is the control. Delay does the opposite.",
            sourceLessonSlug: "where-the-rhyme-sits",
          },
          {
            prompt: "The lesson describes the choice of rhyme scheme as a question about:",
            options: ["How much room the stanza's content needs", "Which scheme the poem's tradition expects", "Whether the piece will be rhymed at all", "How many stanzas the finished piece will have"],
            correctIndex: 0,
            explanation: "More rhyme per stanza is tighter and more finished with less room; less rhyme is looser and needs something else to hold it.",
            sourceLessonSlug: "where-the-rhyme-sits",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4 — Stress, meter, and the beat
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "stress-is-in-the-word",
      title: "13 · Stress is in the word, not in your opinion",
      section: "Section 4 · Stress, meter, and the beat",
      body: `Everything in this section rests on one fact about English that writers routinely try to argue with: **a multi-syllable English word carries its stress in a fixed place, and you do not get a vote.**

**GUI-tar is not a word.** It is *gui-TAR*. *Re-CORD* the verb and *RE-cord* the noun are different words with the same spelling, and swapping the stress changes which one you said. A dictionary marks the stress, which means this is checkable rather than debatable, and it is the first thing to check when a line will not sit right.

**Monosyllables are where the latitude lives.** A one-syllable word takes its prominence from the phrase around it, so a writer has real freedom there. "I said I would go" can be spoken with the weight on *I*, on *said*, on *would*, or on *go*, and each is a different sentence. Most of the rhythmic control you have in English lives in these small words: which ones you place where, and how many unstressed ones sit between the stressed ones.

**Function words versus content words.** Articles, prepositions, conjunctions, auxiliaries and pronouns are normally unstressed. Nouns, main verbs, adjectives and adverbs normally take the stress. That is not a rule you obey; it is a description of how the sentence will be read to you by somebody who has never seen it, which is the only reading that matters once the piece leaves your hands.

**How to hear it in your own line.** Three techniques, in order of usefulness. **Read it aloud at speaking pace**, not at the pace of the rhythm you intended, and listen to where the emphasis actually falls. **Tap the stresses** on a table while you say it, one tap per beat. **Exaggerate**, saying the line as if to somebody across a road, which forces the stresses up and makes a wrong one obvious.

**Why this matters before meter and before melody.** Meter is a pattern OF stresses, so you cannot see a metrical problem you cannot hear. Text setting puts stresses against a musical beat, so you cannot fix a collision you cannot locate. Both later lessons assume you can look at a line and say where its stresses are, and that skill is worth ten minutes a day for a week.

:::reveal Where does a writer actually have rhythmic freedom in English, and where do they have none? ||| None inside a multi-syllable word, whose stress is fixed and printed in a dictionary. The freedom is in monosyllables, which take their prominence from the phrase, and in how many unstressed syllables sit between stressed ones.

:::reveal Name the three techniques for hearing the stresses in your own line. ||| Read it aloud at ordinary speaking pace rather than the pace you intended, tap the stresses out one tap at a time while saying it, and exaggerate the line as if calling to somebody across a road.

## Vocabulary
- **Stress**: the prominence a syllable carries in speech, fixed by the dictionary inside a multi-syllable word and by the phrase for a monosyllable.
- **Content word**: a noun, main verb, adjective or adverb, which normally takes stress.
- **Function word**: an article, preposition, conjunction, auxiliary or pronoun, which is normally unstressed.
- **Scansion**: the act of marking which syllables in a line are stressed and which are not.

## Sources
Academy of American Poets. (n.d.-f). *Meter*. Poets.org. https://poets.org/glossary/meter`,
    },
    {
      slug: "meter-and-the-ballad-measure",
      title: "14 · Meter, and the measure both forms run on",
      section: "Section 4 · Stress, meter, and the beat",
      body: `Meter is "the measured pattern of rhythmic accents in a line of verse", built from **feet**, which are "units of stressed, also known as accented, and unstressed syllables" (Academy of American Poets, n.d.-f). The vocabulary is small and worth owning outright.

**The feet you will actually use.** An **iamb** is two syllables, unstressed then stressed, as in *today*. A **trochee** is the reverse, stressed then unstressed, as in *matter*. A **spondee** is two stressed syllables together. An **anapest** is two unstressed then one stressed, as in *unaware*; a **dactyl** is one stressed then two unstressed, as in *Waverly* (Academy of American Poets, n.d.-f). Line lengths take Greek names by the number of feet: trimeter is three, tetrameter four, pentameter five.

**Iambic pentameter, the English default.** Five iambs, ten syllables:

> Shall I compare thee to a summer's day?

Say it and the alternation is audible without any counting. It is the standard line of the English sonnet and of Shakespeare's plays, for the ordinary reason that it sits close to the natural rhythm of an English sentence while being just regular enough to be a pattern.

**Common measure, the shared measure.** Four stresses, then three, then four, then three, rhyming the second line with the fourth. The Academy describes the ballad as built "in quatrain stanzas, each line containing as few as three or four stresses and rhyming either the second and fourth lines, or all alternating lines" (Academy of American Poets, n.d.-a). Count the stresses in "Because I could not stop for Death": four. In "He kindly stopped for me": three. It is the same measure as "Sir Patrick Spens", and the same measure as the hymnal, which is why so much of English song and English lyric poetry can be laid over one another.

**Meter is an expectation, and the interest is in the departures.** Blake opens "The Tyger" with

> Tyger, tyger, burning bright

which is four stresses in seven syllables: falling pairs, with the last unstressed syllable simply missing. The truncation is what gives the line its hammer. A line that never departs from its meter goes dead, and a line that departs constantly has no pattern to depart from, so the craft is in choosing which moments get the substitution.

**Why a lyricist should care.** A metre is a way of describing a line's rhythm independently of any tune, which is exactly what you need when the tune does not exist yet, or when you are deciding whether a line will fit one that does.

:::reveal Define iamb, trochee and spondee. ||| An iamb is unstressed then stressed, as in today. A trochee is stressed then unstressed, as in matter. A spondee is two stressed syllables together.

:::reveal Count the stresses in Dickinson's first two lines and name the measure. ||| Four in "Because I could not stop for Death" and three in "He kindly stopped for me". Four, three, four, three with the second line rhyming the fourth is common measure, the ballad and hymn stanza.

## Vocabulary
- **Foot**: the unit of meter, a small group of stressed and unstressed syllables such as an iamb or a trochee.
- **Iambic pentameter**: five iambs to the line, the standard measure of the English sonnet.
- **Common measure**: the four, three, four, three quatrain rhyming its second and fourth lines, shared by ballads, hymns and much lyric poetry.
- **Substitution**: replacing one foot with a different one inside a metrical line, which is where most of the rhythmic interest lives.
- **Truncation**: dropping a syllable from the end of a metrical line, as in Blake's seven-syllable four-stress opening.

## Sources
Academy of American Poets. (n.d.-a). *Ballad*. Poets.org. https://poets.org/glossary/ballad

Academy of American Poets. (n.d.-f). *Meter*. Poets.org. https://poets.org/glossary/meter

Blake, W. (1996). *Poems of William Blake* (Project Gutenberg eBook No. 574). https://www.gutenberg.org/ebooks/574

Shakespeare, W. (1997). *Shakespeare's sonnets* (Project Gutenberg eBook No. 1041). https://www.gutenberg.org/ebooks/1041`,
    },
    {
      slug: "stress-against-a-beat",
      title: "15 · Stress against a beat",
      section: "Section 4 · Stress, meter, and the beat",
      body: `Here is the one job in this course that a poem never has to do. In a song there are **two rhythmic grids running at once**: the stresses the words carry as English, and the strong and weak beats the music supplies. Writing a lyric is largely the work of getting those two to agree, and knowing what you are doing on the occasions when you make them disagree.

**What a collision sounds like.** Put an unstressed syllable on a strong beat and the listener hears the word mis-pronounced. *Gui-TAR* set so that *gui* lands on the downbeat comes out as *GUI-tar*, and for a moment the listener is not receiving your line, they are repairing it. Repair costs attention, and attention is the thing the heard-once constraint has already left you short of.

**The default rule, and it really is a default.** Put **stressed syllables on strong beats**, and let unstressed syllables fall in the gaps between them. Most lyric lines that feel wrong feel wrong for this reason and no other, and most fixes are a matter of adding or removing one small function word so that the content words shift onto the accents.

**The deliberate collision is a real tool.** Setting a word against the beat, holding a syllable across a barline, or starting a phrase before the downbeat are all standard and all expressive, and describing them is why the vocabulary exists. The test is not whether the words align with the beat but whether the misalignment is **recoverable**: the listener should hear tension and still hear the word. When they hear the wrong word instead, the collision failed.

**Why melody makes the problem, and also solves half of it.** A tune fixes the number of syllables and where the accents are, which is the constraint. But it also gives you duration and pitch, so a syllable you want emphasized can be given a long note or a high one, and emphasis achieved that way costs the line nothing.

**How to test a line.** Speak the line at conversational pace and mark the stresses. Then say it against a steady tap or a click. Every place where a marked stress lands off the tap is a candidate problem, and every one you decide to keep is now a decision instead of an accident. Pound's instruction, quoted by the Academy of American Poets from his 1918 essay "A Retrospect", still frames the aim: "to compose in the sequence of the musical phrase, not in sequence of a metronome" (Academy of American Poets, n.d.-b).

**And the honest limit.** What is described here is craft practice, gathered from how the tradition behaves and testable on your own material. It is not offered as a measured finding about how listeners perceive sung text.

:::reveal Why does a stressed syllable landing off the musical accent cost more than an equivalent slip in a poem? ||| Because the listener stops receiving the line and starts repairing a word they heard mis-pronounced, and that repair spends attention the heard-once first pass has already left in short supply.

:::reveal What is the test for whether a deliberate collision between word stress and beat is working? ||| Whether it is recoverable. The listener should hear tension and still hear the correct word. If they hear a different word instead, the collision has failed regardless of intent.

## Vocabulary
- **Text setting**: the fitting of syllables to musical beats, the job that exists in song and not in poetry.
- **Strong beat**: a musically accented position in the bar, where the ear expects prominence.
- **Mis-stressing**: setting a word so that its unstressed syllable lands on the accent, causing the listener to hear the wrong pronunciation.
- **Recoverable tension**: a deliberate misalignment the listener hears as expression while still hearing the word correctly.

## Sources
Academy of American Poets. (n.d.-b). *Free verse*. Poets.org. https://poets.org/glossary/free-verse

Academy of American Poets. (n.d.-f). *Meter*. Poets.org. https://poets.org/glossary/meter`,
    },
    {
      slug: "quiz-stress-and-beat",
      title: "16 · Knowledge check: stress, meter, and the beat",
      section: "Section 4 · Stress, meter, and the beat",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "In a multi-syllable English word, the position of the stress is:",
            options: ["Fixed, and printed in a dictionary", "Determined by the metre of the line the word appears in", "A matter of regional accent, so no general statement can be made", "Set by the writer, who signals it through punctuation and line placement"],
            correctIndex: 0,
            explanation: "Which makes it checkable rather than debatable, and the first thing to look at when a line will not sit right.",
            sourceLessonSlug: "stress-is-in-the-word",
          },
          {
            prompt: "The pair RE-cord and re-CORD demonstrates that stress can:",
            options: ["Change which word you said", "Vary freely without affecting meaning in English", "Be moved to fit a melody without any loss of clarity", "Only shift in words borrowed from other languages"],
            correctIndex: 0,
            explanation: "Same spelling, two different words, distinguished by nothing but where the stress falls.",
            sourceLessonSlug: "stress-is-in-the-word",
          },
          {
            prompt: "Where does a writer's real rhythmic latitude in English live?",
            options: ["In the monosyllables", "In compound words, which may be stressed on either element", "In the line breaks, which override any word-level stress", "In words of three syllables or more, which permit two readings"],
            correctIndex: 0,
            explanation: "A one-syllable word takes its prominence from the phrase, so which small words you place where is most of the control you have.",
            sourceLessonSlug: "stress-is-in-the-word",
          },
          {
            prompt: "\"I said I would go\" can be spoken four different ways because:",
            options: ["Every word in it has one syllable", "The sentence is grammatically ambiguous as written", "It contains no content words at all, only function words", "Its metre permits either an iambic or a trochaic reading"],
            correctIndex: 0,
            explanation: "Each placement of the emphasis produces a different sentence, and that freedom is the writer's main rhythmic instrument.",
            sourceLessonSlug: "stress-is-in-the-word",
          },
          {
            prompt: "Which category of word normally takes the stress?",
            options: ["Nouns and main verbs", "Articles and prepositions, which anchor the phrase", "Conjunctions, which mark the joints of a sentence", "Auxiliaries and pronouns, which carry the grammar"],
            correctIndex: 0,
            explanation: "Along with adjectives and adverbs. Articles, prepositions, conjunctions, auxiliaries and pronouns are normally unstressed.",
            sourceLessonSlug: "stress-is-in-the-word",
          },
          {
            prompt: "The function-word rule is described not as a rule to obey but as:",
            options: ["A description of how a stranger will read your line", "A convention that varies between poetry and song", "A guideline that applies only to metrical writing", "A prescription inherited from classical prosody"],
            correctIndex: 0,
            explanation: "And a stranger's reading is the only one that matters once the piece leaves your hands.",
            sourceLessonSlug: "stress-is-in-the-word",
          },
          {
            prompt: "Which technique for hearing stress does the lesson list FIRST for usefulness?",
            options: ["Reading aloud at speaking pace", "Tapping the stresses out on a table", "Exaggerating the line as if calling across a road", "Marking the syllables with a pencil before reading"],
            correctIndex: 0,
            explanation: "At ordinary speaking pace, not at the pace of the rhythm you intended, which is what exposes where the emphasis actually falls.",
            sourceLessonSlug: "stress-is-in-the-word",
          },
          {
            prompt: "\"Scansion\" names the act of:",
            options: ["Marking which syllables are stressed", "Counting the number of lines in a stanza", "Fitting words to an existing melody", "Deciding where a line should break"],
            correctIndex: 0,
            explanation: "It is the skill both later lessons in the section assume, which is why the lesson recommends practising it.",
            sourceLessonSlug: "stress-is-in-the-word",
          },
          {
            prompt: "Why must stress be learned before meter and before melody?",
            options: ["Both work on stress as raw material", "Because dictionaries mark stress but not metre", "Because meter is a modern invention and stress an ancient one", "Because melody is written after the words in every case"],
            correctIndex: 0,
            explanation: "Meter is a pattern of stresses, and text setting puts stresses against a beat. You cannot fix what you cannot hear.",
            sourceLessonSlug: "stress-is-in-the-word",
          },
          {
            prompt: "A metrical foot is a unit made of:",
            options: ["Stressed and unstressed syllables", "A fixed number of words, regardless of length", "One line of verse and the pause that follows it", "A rhyme and the syllables leading up to it"],
            correctIndex: 0,
            explanation: "Meter is the measured pattern of rhythmic accents in a line, built out of those units.",
            sourceLessonSlug: "meter-and-the-ballad-measure",
          },
          {
            prompt: "An iamb is:",
            options: ["Unstressed then stressed", "Stressed then unstressed, as in the word matter", "Two stressed syllables in immediate succession", "Two unstressed syllables followed by a stressed one"],
            correctIndex: 0,
            explanation: "As in today. The reverse, stressed then unstressed, is a trochee.",
            sourceLessonSlug: "meter-and-the-ballad-measure",
          },
          {
            prompt: "A trochee is:",
            options: ["Stressed then unstressed", "Unstressed then stressed, as in the word today", "Three syllables with the stress falling on the last", "A single stressed syllable standing as a whole foot"],
            correctIndex: 0,
            explanation: "As in matter. It is the falling foot, where the iamb is the rising one.",
            sourceLessonSlug: "meter-and-the-ballad-measure",
          },
          {
            prompt: "A spondee consists of:",
            options: ["Two stressed syllables", "Two unstressed syllables with no accent between them", "A stressed syllable followed by two unstressed ones", "A foot of variable length used to fill a short line"],
            correctIndex: 0,
            explanation: "It is the less common two-syllable foot, and it is where a metrical line most often gets its weight.",
            sourceLessonSlug: "meter-and-the-ballad-measure",
          },
          {
            prompt: "An anapest runs:",
            options: ["Unstressed, unstressed, stressed", "Stressed, unstressed, unstressed, as in Waverly", "Stressed, unstressed, stressed, in a three-beat pattern", "Unstressed, stressed, unstressed, around a central accent"],
            correctIndex: 0,
            explanation: "As in unaware. The dactyl is its mirror: stressed then two unstressed, as in Waverly.",
            sourceLessonSlug: "meter-and-the-ballad-measure",
          },
          {
            prompt: "Pentameter means a line of:",
            options: ["Five feet", "Five syllables, regardless of how they are stressed", "Five stanzas grouped as a single unit", "Five stresses and five unstressed syllables alternating"],
            correctIndex: 0,
            explanation: "Trimeter is three feet, tetrameter four. The Greek suffix counts feet, not syllables.",
            sourceLessonSlug: "meter-and-the-ballad-measure",
          },
          {
            prompt: "Shakespeare's \"Shall I compare thee to a summer's day?\" is:",
            options: ["Iambic pentameter", "Trochaic tetrameter, with the final unstressed syllable dropped", "Common measure, the same as the ballad stanza", "Anapestic trimeter, which gives the line its rising movement"],
            correctIndex: 0,
            explanation: "Five iambs, ten syllables. It is the standard line of the English sonnet and of Shakespeare's plays.",
            sourceLessonSlug: "meter-and-the-ballad-measure",
          },
          {
            prompt: "Iambic pentameter became the English default because it:",
            options: ["Sits close to ordinary English rhythm", "Was imported from Italian models in the sixteenth century", "Contains exactly the number of syllables one breath supports", "Is the only metre in which perfect rhyme sounds natural"],
            correctIndex: 0,
            explanation: "While being just regular enough to be a pattern, which is the combination a workhorse metre needs.",
            sourceLessonSlug: "meter-and-the-ballad-measure",
          },
          {
            prompt: "How many stresses does \"He kindly stopped for me\" carry?",
            options: ["Three", "Four, which makes the stanza uniform tetrameter throughout", "Five, matching the pentameter of the English sonnet line", "Two, which is why the line reads as a fragment"],
            correctIndex: 0,
            explanation: "Against four in the line before it. That four-three alternation is common measure, and one widely used glossary gets this line wrong.",
            sourceLessonSlug: "meter-and-the-ballad-measure",
          },
          {
            prompt: "Blake's \"Tyger, tyger, burning bright\" contains:",
            options: ["Four stresses in seven syllables", "Five stresses in ten syllables, as in a standard sonnet line", "Three stresses in six syllables, the short line of the ballad stanza", "Four stresses in eight syllables, with no syllable omitted"],
            correctIndex: 0,
            explanation: "Falling pairs with the last unstressed syllable simply missing. That truncation is what gives the line its hammer.",
            sourceLessonSlug: "meter-and-the-ballad-measure",
          },
          {
            prompt: "\"Substitution\" in metrical writing means:",
            options: ["Replacing one foot with a different one", "Swapping a rhyme word for a synonym that scans better", "Exchanging a whole line for another of the same length", "Using a slant rhyme where a perfect one was expected"],
            correctIndex: 0,
            explanation: "It is where most of the rhythmic interest lives, because a line that never departs from its metre goes dead.",
            sourceLessonSlug: "meter-and-the-ballad-measure",
          },
          {
            prompt: "A line that departs from its metre constantly has:",
            options: ["No pattern left to depart from", "More rhythmic interest than one that departs occasionally", "A stronger claim to be free verse rather than metrical", "Fewer stresses than a regular line of the same length"],
            correctIndex: 0,
            explanation: "Which is why the craft is in choosing which moments get the substitution, rather than in maximising or eliminating them.",
            sourceLessonSlug: "meter-and-the-ballad-measure",
          },
          {
            prompt: "Why should a lyricist understand metre even when writing to an existing tune?",
            options: ["It describes rhythm without a tune", "Because tunes are always composed in one of the classical metres", "Because a lyric must scan as a poem before it can be set to music", "Because publishers require metrical notation on a submitted lyric"],
            correctIndex: 0,
            explanation: "Which is exactly what you need when the tune does not exist yet, or when deciding whether a line will fit one that does.",
            sourceLessonSlug: "meter-and-the-ballad-measure",
          },
          {
            prompt: "In a song, the two rhythmic grids running at once are:",
            options: ["Word stress and musical accent", "Melody and harmony, which may pull in different directions", "Verse and chorus, which run at different tempos", "The singer's phrasing and the drummer's pattern"],
            correctIndex: 0,
            explanation: "Writing a lyric is largely the work of getting them to agree, and knowing what you are doing when you make them disagree.",
            sourceLessonSlug: "stress-against-a-beat",
          },
          {
            prompt: "What does a listener do when an unstressed syllable lands on a strong beat?",
            options: ["Repairs the word instead of receiving the line", "Hears the line as syncopated and enjoys the effect", "Substitutes a different word that fits the accent", "Loses the melody but keeps the meaning intact"],
            correctIndex: 0,
            explanation: "Repair costs attention, and the heard-once constraint has already left the listener short of it.",
            sourceLessonSlug: "stress-against-a-beat",
          },
          {
            prompt: "The default rule for setting words to music is:",
            options: ["Stressed syllables on strong beats", "One syllable per note, with no exceptions permitted", "Rhyme words on downbeats and everything else in the gaps", "The longest word of the line on the first beat of the bar"],
            correctIndex: 0,
            explanation: "With unstressed syllables falling in the gaps between accents. Most lyric lines that feel wrong feel wrong for this reason alone.",
            sourceLessonSlug: "stress-against-a-beat",
          },
          {
            prompt: "Most fixes to a mis-set lyric line involve:",
            options: ["Adding or removing one small function word", "Rewriting the melody so that the accents move", "Replacing the content words with shorter synonyms", "Changing the rhyme scheme so the line can end differently"],
            correctIndex: 0,
            explanation: "Which shifts the content words onto the accents without disturbing what the line says.",
            sourceLessonSlug: "stress-against-a-beat",
          },
          {
            prompt: "A deliberate collision between word stress and beat is judged by whether it is:",
            options: ["Recoverable", "Repeated consistently across every verse of the song", "Placed at the start of a line rather than at its end", "Marked in the notation so a performer can reproduce it"],
            correctIndex: 0,
            explanation: "The listener should hear tension and still hear the word. When they hear a different word instead, the collision failed.",
            sourceLessonSlug: "stress-against-a-beat",
          },
          {
            prompt: "Which of these is named as a standard expressive collision?",
            options: ["Holding a syllable across a barline", "Doubling the tempo for a single line of the verse", "Repeating a word until the accent shifts onto it", "Removing the accompaniment beneath the mis-set word"],
            correctIndex: 0,
            explanation: "Along with setting a word against the beat and starting a phrase before the downbeat. All are standard and all are expressive.",
            sourceLessonSlug: "stress-against-a-beat",
          },
          {
            prompt: "Melody creates the text-setting problem but also solves half of it, because it supplies:",
            options: ["Duration and pitch", "A fixed syllable count that removes the writer's choices", "Repetition, which lets a mis-set word be heard again", "A rhyme scheme derived from the melodic phrase"],
            correctIndex: 0,
            explanation: "A syllable you want emphasized can be given a long note or a high one, and emphasis got that way costs the line nothing.",
            sourceLessonSlug: "stress-against-a-beat",
          },
          {
            prompt: "The two-step test for a lyric line is to speak it at conversational pace and then:",
            options: ["Say it against a steady tap", "Sing it at double the intended tempo", "Read it silently, checking the syllable count", "Have someone else recite it back without the melody"],
            correctIndex: 0,
            explanation: "Every marked stress landing off the tap is a candidate problem, and every one you decide to keep becomes a decision instead of an accident.",
            sourceLessonSlug: "stress-against-a-beat",
          },
          {
            prompt: "The lesson explicitly labels its account of stress against a beat as:",
            options: ["Craft practice, testable on your own material", "A finding from published research on sung-word perception", "A convention peculiar to English-language popular music", "A rule that admits no exceptions in professional practice"],
            correctIndex: 0,
            explanation: "Gathered from how the tradition behaves. It is not offered as a measured claim about how listeners perceive sung text.",
            sourceLessonSlug: "stress-against-a-beat",
          },
          {
            prompt: "\"Mis-stressing\" names the situation where:",
            options: ["The unstressed syllable lands on the accent", "A word is sung at the wrong pitch relative to the chord", "The writer marks the stresses of a line incorrectly on paper", "A performer emphasises a word the writer did not intend"],
            correctIndex: 0,
            explanation: "The listener hears the wrong pronunciation, which is the specific failure the default rule exists to prevent.",
            sourceLessonSlug: "stress-against-a-beat",
          },
          {
            prompt: "A poem's stresses differ from a lyric's because a poem has:",
            options: ["No external grid to collide with", "Fewer stresses per line on average than a sung line does", "A fixed metre, which a lyric is not permitted to have", "A performer who can adjust the emphasis in delivery"],
            correctIndex: 0,
            explanation: "That is what makes text setting the one job in this course that belongs to song and to no poem.",
            sourceLessonSlug: "stress-against-a-beat",
          },
          {
            prompt: "Which is the correct definition of \"strong beat\"?",
            options: ["A musically accented position in the bar", "The loudest note of a melodic phrase", "The syllable a singer holds longest in a line", "The first word of every sung line, by convention"],
            correctIndex: 0,
            explanation: "It is where the ear expects prominence, which is why a stressed syllable placed there sounds natural.",
            sourceLessonSlug: "stress-against-a-beat",
          },
          {
            prompt: "Which example does the lesson use for a mis-set word?",
            options: ["Guitar landing so the first syllable takes the downbeat", "Today set so that its second syllable takes the downbeat", "Matter set across a barline so both syllables are accented", "Unaware set with all three syllables on separate strong beats"],
            correctIndex: 0,
            explanation: "It comes out as GUI-tar, and for a moment the listener is repairing the word rather than receiving the line.",
            sourceLessonSlug: "stress-against-a-beat",
          },
          {
            prompt: "The Academy quotes Pound's aim as composing in the sequence of the musical phrase rather than:",
            options: ["A metronome", "A spoken sentence", "A rhyme scheme", "A metrical foot"],
            correctIndex: 0,
            explanation: "From his 1918 essay \"A Retrospect\", quoted in the free-verse glossary entry the lesson cites.",
            sourceLessonSlug: "stress-against-a-beat",
          },
          {
            prompt: "Which does the course say about a line that survives silent reading and speaking aloud?",
            options: ["It can still fail against a tempo", "It is finished, and needs no further check", "It will necessarily fail when sung, since speech and song differ", "It should be shortened by one syllable as a precaution"],
            correctIndex: 0,
            explanation: "And that failure is the one a listener meets first, which is why the click is a separate step.",
            sourceLessonSlug: "stress-against-a-beat",
          },
          {
            prompt: "A \"content word\" is:",
            options: ["A noun, main verb, adjective or adverb", "Any word carrying more than two syllables", "A word the writer considers central to the poem's meaning", "A word placed at the end of a line to take the rhyme"],
            correctIndex: 0,
            explanation: "Those normally take the stress, while function words such as articles and prepositions normally do not.",
            sourceLessonSlug: "stress-is-in-the-word",
          },
          {
            prompt: "Exaggerating a line as if calling across a road works because it:",
            options: ["Forces the stresses up", "Slows the reading enough to count syllables", "Removes the influence of the intended melody", "Reveals rhymes that a quiet reading hides"],
            correctIndex: 0,
            explanation: "Which makes a wrongly placed stress obvious. It is the third of the three listening techniques.",
            sourceLessonSlug: "stress-is-in-the-word",
          },
          {
            prompt: "Common measure is described in this section as:",
            options: ["Four stresses, three, four, three", "Five stresses in every line, rhyming in couplets", "Eight syllables per line, unrhymed throughout", "Three stresses alternating with two, rhyming abab"],
            correctIndex: 0,
            explanation: "Rhyming the second line with the fourth. The Academy's ballad entry describes the same shape in terms of three or four stresses per line.",
            sourceLessonSlug: "meter-and-the-ballad-measure",
          },
          {
            prompt: "The Greek suffixes in metrical names count:",
            options: ["Feet", "Syllables", "Stresses per stanza", "Lines per stanza"],
            correctIndex: 0,
            explanation: "Monometer one, dimeter two, trimeter three, and so on up to octameter at eight.",
            sourceLessonSlug: "meter-and-the-ballad-measure",
          },
          {
            prompt: "\"Truncation\" in this course names:",
            options: ["Dropping a syllable from a line's end", "Cutting a stanza from a finished poem", "Shortening a rhyme to a single syllable", "Removing an unstressed word from mid-line"],
            correctIndex: 0,
            explanation: "As in Blake's seven-syllable four-stress opening, where the last foot loses its unstressed half.",
            sourceLessonSlug: "meter-and-the-ballad-measure",
          },
          {
            prompt: "What is described as a metre's function in a poem?",
            options: ["To set an expectation", "To fix the number of words in each line", "To determine which words may be rhymed", "To indicate the tempo at which the poem is read"],
            correctIndex: 0,
            explanation: "The interest is in the departures from it, which is why substitution matters more than regularity.",
            sourceLessonSlug: "meter-and-the-ballad-measure",
          },
          {
            prompt: "The dictionary settles a question about stress in which case?",
            options: ["A word of more than one syllable", "Any word placed at the end of a line", "A word borrowed from another language", "A word the writer wishes to emphasise"],
            correctIndex: 0,
            explanation: "Monosyllables take their prominence from the phrase, so no dictionary can settle those.",
            sourceLessonSlug: "stress-is-in-the-word",
          },
          {
            prompt: "Which is NOT one of the three techniques for hearing stress?",
            options: ["Counting the letters in each syllable", "Reading the line aloud at conversational pace", "Tapping one beat per stress while saying the line", "Saying the line as if to somebody across a road"],
            correctIndex: 0,
            explanation: "Letter counts have nothing to do with stress, which is a property of how a syllable is spoken.",
            sourceLessonSlug: "stress-is-in-the-word",
          },
          {
            prompt: "The lesson says the skill of marking stresses is worth:",
            options: ["Ten minutes a day for a week", "A single afternoon of study and no further practice", "A full term of formal training in prosody", "Nothing, unless the writer intends to work in strict metre"],
            correctIndex: 0,
            explanation: "Both later lessons in the section assume you can look at a line and say where its stresses fall.",
            sourceLessonSlug: "stress-is-in-the-word",
          },
          {
            prompt: "In which situation does the course say a collision has failed?",
            options: ["The listener hears a different word", "The collision recurs in more than one verse", "The tension is audible to a trained musician", "The syllable is held across more than one beat"],
            correctIndex: 0,
            explanation: "Regardless of the writer's intent. Recoverability is the test, not alignment.",
            sourceLessonSlug: "stress-against-a-beat",
          },
          {
            prompt: "Why is attention described as the scarce resource in text setting?",
            options: ["The heard-once pass has already spent most of it", "Listeners are usually doing something else while listening", "Melody and lyric compete for the same processing capacity", "Repair of a mis-set word takes several seconds to complete"],
            correctIndex: 0,
            explanation: "So a repair the listener has to perform is paid for out of a budget that was already short.",
            sourceLessonSlug: "stress-against-a-beat",
          },
          {
            prompt: "What does giving a syllable a long note achieve?",
            options: ["Emphasis at no cost to the line", "A change in the word's dictionary stress", "A slower tempo for the whole phrase", "An additional rhyme opportunity at the line's end"],
            correctIndex: 0,
            explanation: "Duration and pitch are two of the things melody buys, and both can carry emphasis that language would otherwise have to build.",
            sourceLessonSlug: "stress-against-a-beat",
          },
          {
            prompt: "Which statement about the course's meter sources is accurate?",
            options: ["One glossary's scansion of a Dickinson line is corrected here", "All scansions in the course are taken from a single glossary", "The course avoids naming metrical feet, preferring stress counts", "Metre is treated as a matter of taste and left to the learner"],
            correctIndex: 0,
            explanation: "The glossary is cited for the definitions of the feet, and the four-and-three stress pattern is taken from its ballad entry instead.",
            sourceLessonSlug: "meter-and-the-ballad-measure",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 5 — The line, the break, and the shape
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-line-is-the-unit",
      title: "17 · The line is the unit",
      section: "Section 5 · The line, the break, and the shape",
      body: `Prose has one unit of organisation, the sentence. Verse has two, the sentence and the line, and they do not have to agree. That second unit is the whole difference between a poem and a paragraph with the returns pressed early.

**What the line does.** It sets pace, because a reader slows fractionally at every line end. It creates emphasis, because the last word of a line and the first word of the next both sit in exposed positions. It groups, because two things on one line are read as belonging together. And it establishes an expectation of length that a later line can violate for effect.

**Free verse is not the absence of form.** The Academy of American Poets defines it as "poetry not dictated by an established form or meter and often influenced by the rhythms of speech", and quotes Edward Hirsch's *A Poet's Glossary* on the crucial point: free verse "pos­sesses visual form and uses the graphic line to differentiate itself from prose" (Academy of American Poets, n.d.-b). The line is still doing the work. What has gone is the syllable count, not the unit.

**Whitman's lines are breath units.** "Song of Myself" opens:

> I celebrate myself, and sing myself,
> And what I assume you shall assume,
> For every atom belonging to me as good belongs to you.

Three lines, each a complete grammatical unit, and each longer than the last. The growth is the effect: the third line arrives with more air in it than the first two, and the reason it feels expansive is that the two shorter lines set the scale.

**A lyric's line is set from outside.** This is the asymmetry in this section. A poet chooses where the line ends. A lyricist mostly receives that decision from the melody, because a musical phrase has a length and the line has to fill it. Writing words first shifts the decision back, but the moment the tune exists the phrase is in charge again. So a lyricist's line-craft is largely about **what to put in the exposed positions** the melody has already marked out, rather than about where to put the boundary.

**The practical test.** Read your draft aloud twice: once observing the line breaks with a small pause, once ignoring them completely. If the two readings sound identical, the lines are not doing anything and the piece is prose with returns in it.

:::reveal What second unit does verse have that prose does not, and name two things it does? ||| The line. It sets pace by making the reader pause fractionally at each end, and it creates emphasis by exposing the last word of a line and the first word of the next.

:::reveal Why does a lyricist have less control over line length than a poet? ||| Because the melody's phrase has a length the line has to fill, so the boundary is decided from outside. The lyricist's line-craft is mostly about what to place in the exposed positions the tune has already marked.

## Vocabulary
- **Line**: the unit of verse, distinct from the sentence, which sets pace, emphasis and grouping.
- **Free verse**: poetry not governed by an established form or meter, which still uses the graphic line to distinguish itself from prose.
- **Breath unit**: a line whose length is set by what can be said in one comfortable breath, characteristic of Whitman.
- **Exposed position**: the end of a line and the start of the next, where a word carries more weight than it would mid-line.

## Sources
Academy of American Poets. (n.d.-b). *Free verse*. Poets.org. https://poets.org/glossary/free-verse

Whitman, W. (1998). *Leaves of grass* (Project Gutenberg eBook No. 1322). https://www.gutenberg.org/ebooks/1322`,
    },
    {
      slug: "enjambment-and-end-stop",
      title: "18 · The break, which is the poem's own punctuation",
      section: "Section 5 · The line, the break, and the shape",
      body: `**Enjambment** is "the continuation of a sentence or clause across a poetic line break", and its opposite, an **end-stopped** line, "ends a poetic line with punctuation" (Academy of American Poets, n.d.-g). The word comes from the French *enjamber*, to stride over.

**What an enjambed break actually does to a reader.** It creates a momentary reading and then revises it. The eye reaches the line end, the mind closes the phrase provisionally, and the next line arrives and changes what the phrase meant. That double take is available on a page and almost nowhere else, and it is the reason enjambment is worth studying rather than just using.

**It also changes pace.** The Academy notes that enjambed lines, lacking punctuation at the break, "minimize the difference of sound between verse and prose, while increasing the speed and pacing of a poem" (Academy of American Poets, n.d.-g). End-stopping slows and settles; enjambment runs. A poem that end-stops every line is a poem in which every line is a small announcement, which is powerful in small doses and monotonous over a page.

**Whitman end-stops almost everything**, which is why his lines feel declared rather than discovered. Each is complete, each lands, and the accumulation rather than the suspension is the effect. That is a choice, and its opposite is equally available.

**Now the asymmetry, and it is the sharpest one in this course.** A poem's line break is a piece of punctuation the reader can SEE. A lyric's line break is a musical event the listener can only HEAR, and what they hear is a pause or a phrase ending, not a suspension. So the specific effect of enjambment, the provisional reading that gets revised, mostly does not survive the trip into song. A sung line that runs on is heard as one long phrase, not as two readings.

**Which is why this course says the line break is the poem's own punctuation, and the lyric does not have it.** A lyric has line ends; what it lacks is the reader-controlled ambiguity at the break. That is not a deficiency in songwriting. It is the reason a lyric puts its surprises inside the line, in word choice and in the turn of a phrase, where a listener will actually meet them.

:::reveal Describe the specific effect an enjambed line break has on a reader. ||| The mind closes the phrase provisionally at the line end, then the next line arrives and revises what the phrase meant. It is a double take, and it depends on the reader seeing the break.

:::reveal Why does enjambment mostly not survive the move into song, and what does a lyric do instead? ||| Because a sung line break is heard as a pause or a phrase ending rather than seen as a suspension, so the provisional reading never forms. A lyric puts its surprises inside the line, in word choice and phrasing, where a listener meets them.

## Vocabulary
- **Enjambment**: the continuation of a sentence or clause across a line break, from the French for striding over.
- **End-stopped line**: a line that finishes with punctuation, closing its phrase at the break.
- **Double take**: the provisional reading an enjambed break creates and the next line revises, which depends on the break being visible.
- **Suspension**: holding a phrase open across a break so that the reader carries it into the next line.

## Sources
Academy of American Poets. (n.d.-g). *Enjambment*. Poets.org. https://poets.org/glossary/enjambment

Whitman, W. (1998). *Leaves of grass* (Project Gutenberg eBook No. 1322). https://www.gutenberg.org/ebooks/1322`,
    },
    {
      slug: "stanza-volta-verse-chorus",
      title: "19 · Stanza and turn, verse and chorus",
      section: "Section 5 · The line, the break, and the shape",
      body: `Above the line sits the shape, and here the two forms use different words for jobs that overlap more than the vocabulary suggests.

**Stanza.** "A grouping of lines that forms the main unit in a poem", and, as Edward Hirsch notes, the Italian word means room: "each stanza in a poem is like a room in a house, a lyric dwelling place" (Academy of American Poets, n.d.-h). A stanza break is a bigger version of a line break, and it does the same three jobs at a larger scale: pace, grouping, emphasis.

**The turn.** In a Petrarchan sonnet, "a turn, or volta, occurs between the eighth and ninth lines", marking "a shift in the direction of the foregoing argument or narrative" (Academy of American Poets, n.d.-i). Claude McKay's "If We Must Die" uses the Shakespearean rhyme scheme but turns exactly there, at line nine, where the poem stops arguing about how to die and starts addressing people directly:

> O kinsmen! we must meet the common foe!

Shakespeare's own sonnets often turn later, at the closing couplet. Sonnet 130 spends twelve lines cataloguing what the mistress is not, and then:

> And yet by heaven, I think my love as rare,

**A turn is the structural point of the whole shape.** Everything before it is the setup that makes it land, which means a poem with no turn is usually a poem that stopped rather than one that ended.

**The song's version.** A verse advances; a chorus returns. Jay Summach describes the chorus as the focal point of a verse-chorus song: "it contains the most engaging musical material; its unchanging lyric makes it easy to remember" (Summach, 2011, para. 1). Drew Nobile argues that verse-prechorus-chorus form, from the mid-1960s onward, rests on a consistent teleological structure he calls the telos principle: the sections before the chorus are aimed at it (Nobile, 2022).

**So a chorus and a volta are cousins, with one real difference.** Both are the moment a shape is built toward. A volta happens ONCE, and the poem is different afterwards. A chorus happens repeatedly, and gains from each return because the verses between have changed what it means. That difference is the heard-once constraint again: a listener needs the destination to come back around, and a reader does not.

**A bridge is the exception that proves it.** A bridge is the one section that does not return, placed late, and its whole function is to make the final chorus land differently. It is the closest thing a song has to a volta.

:::reveal What is a volta, and where does McKay's "If We Must Die" place it? ||| The turn in a sonnet, a shift in the direction of the argument, classically between the eighth and ninth lines. McKay turns at line nine, where the poem stops arguing about how to die and begins addressing his kinsmen directly.

:::reveal Give the one real difference between a volta and a chorus. ||| A volta happens once and the poem is different afterwards. A chorus happens repeatedly and gains from each return, because the verses in between have changed what it means.

## Vocabulary
- **Stanza**: a grouping of lines forming a poem's main repeating unit, from the Italian for room.
- **Volta**: the turn in a sonnet, a shift in the direction of the argument, classically between lines eight and nine.
- **Chorus**: the returning section of a song, carrying an unchanging lyric and the material the rest of the song is aimed at.
- **Bridge**: the late section of a song that appears once and does not return, whose job is to change how the final chorus lands.
- **Telos principle**: Nobile's term for the way verse-prechorus-chorus form aims its earlier sections at the chorus.

## Sources
Academy of American Poets. (n.d.-h). *Stanza*. Poets.org. https://poets.org/glossary/stanza

Academy of American Poets. (n.d.-i). *Sonnet*. Poets.org. https://poets.org/glossary/sonnet

McKay, C. (1922). *Harlem shadows: The poems of Claude McKay* (Project Gutenberg eBook No. 64989). Harcourt, Brace and Company. https://www.gutenberg.org/ebooks/64989

Nobile, D. (2022). Teleology in verse-prechorus-chorus form, 1965-2020. *Music Theory Online, 28*(3). https://mtosmt.org/issues/mto.22.28.3/mto.22.28.3.nobile.html

Shakespeare, W. (1997). *Shakespeare's sonnets* (Project Gutenberg eBook No. 1041). https://www.gutenberg.org/ebooks/1041

Summach, J. (2011). The structure, function, and genesis of the prechorus. *Music Theory Online, 17*(3). https://mtosmt.org/issues/mto.11.17.3/mto.11.17.3.summach.html`,
    },
    {
      slug: "quiz-line-break-and-shape",
      title: "20 · Knowledge check: line, break, and shape",
      section: "Section 5 · The line, the break, and the shape",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "Prose has one unit of organisation and verse has two. The second is:",
            options: ["The line", "The stanza, which groups sentences into paragraphs of verse", "The rhyme, which marks where one unit ends and the next begins", "The foot, which measures the sentence into countable segments"],
            correctIndex: 0,
            explanation: "The sentence and the line do not have to agree, and that disagreement is the difference between a poem and a paragraph with early returns.",
            sourceLessonSlug: "the-line-is-the-unit",
          },
          {
            prompt: "Which is NOT listed as a job the line does?",
            options: ["Fixing the poem's subject", "Setting pace, because a reader slows at every line end", "Creating emphasis in the exposed positions at each end", "Grouping, since two things on one line are read as belonging together"],
            correctIndex: 0,
            explanation: "The fourth job is establishing an expectation of length that a later line can violate for effect.",
            sourceLessonSlug: "the-line-is-the-unit",
          },
          {
            prompt: "Free verse is defined by the Academy as poetry not dictated by:",
            options: ["An established form or meter", "Any rhyme scheme, however loose", "The conventions of a national tradition", "A fixed number of lines per stanza"],
            correctIndex: 0,
            explanation: "And often influenced by the rhythms of speech. What has gone is the syllable count, not the unit.",
            sourceLessonSlug: "the-line-is-the-unit",
          },
          {
            prompt: "Edward Hirsch's point about free verse, as the Academy reprints it, is that it:",
            options: ["Uses the graphic line to differ from prose", "Abandons all sound patterning in favour of sense", "Represents a twentieth-century rejection of the whole English tradition", "Requires the reader to supply a metre the poet has deliberately withheld"],
            correctIndex: 0,
            explanation: "It possesses visual form. The line is still doing the work even when the syllable count is not fixed.",
            sourceLessonSlug: "the-line-is-the-unit",
          },
          {
            prompt: "Whitman's opening three lines of \"Song of Myself\" each:",
            options: ["Form a complete grammatical unit", "End on the same rhyme sound, in a triple rhyme", "Contain exactly the same number of stresses", "Break mid-clause, so the sentence runs across all three"],
            correctIndex: 0,
            explanation: "And each is longer than the last. The growth is the effect, and the two shorter lines set the scale for the third.",
            sourceLessonSlug: "the-line-is-the-unit",
          },
          {
            prompt: "Why does Whitman's third line feel expansive?",
            options: ["The two shorter lines before it set the scale", "It contains the poem's only abstraction, which opens the subject out", "It is the first line to use a rhyme, which releases the tension", "It carries five stresses where the earlier lines carried three"],
            correctIndex: 0,
            explanation: "Length is relative. A long line among long lines is not expansive; a long line after two short ones is.",
            sourceLessonSlug: "the-line-is-the-unit",
          },
          {
            prompt: "A lyricist's line length is mostly decided by:",
            options: ["The melodic phrase", "The rhyme scheme adopted for the verse", "The number of stresses the singer can deliver in one breath", "The lyricist, who fixes it before any melody is written"],
            correctIndex: 0,
            explanation: "Writing words first shifts the decision back, but once the tune exists the phrase is in charge again.",
            sourceLessonSlug: "the-line-is-the-unit",
          },
          {
            prompt: "A lyricist's line-craft is therefore mostly about:",
            options: ["What goes in the exposed positions", "How many syllables can be fitted into a bar", "Which lines will be repeated in the chorus", "Where to place the rhyme within the melodic phrase"],
            correctIndex: 0,
            explanation: "The melody has already marked out the boundaries, so the remaining choice is what sits at them.",
            sourceLessonSlug: "the-line-is-the-unit",
          },
          {
            prompt: "The two-reading test for whether lines are doing work is to read the draft:",
            options: ["Once observing the breaks, once ignoring them", "Twice at different tempos and compare the syllable counts", "Aloud and then silently, listening for changes in emphasis", "Backwards and then forwards, checking the rhyme placement"],
            correctIndex: 0,
            explanation: "If the two readings sound identical, the lines are not doing anything and the piece is prose with returns in it.",
            sourceLessonSlug: "the-line-is-the-unit",
          },
          {
            prompt: "An \"exposed position\" in a line of verse is:",
            options: ["The end of a line and the start of the next", "The middle of the line, where the ear is least attentive", "The syllable carrying the strongest stress in the line", "Any word standing alone on its own line"],
            correctIndex: 0,
            explanation: "A word there carries more weight than it would mid-line, which is why the choice of what to place at a break matters.",
            sourceLessonSlug: "the-line-is-the-unit",
          },
          {
            prompt: "Enjambment is the continuation of a sentence or clause:",
            options: ["Across a poetic line break", "Between one stanza and the next only", "From the end of one poem into a companion poem", "Past the point where the metre would normally close"],
            correctIndex: 0,
            explanation: "The word comes from the French enjamber, to stride over.",
            sourceLessonSlug: "enjambment-and-end-stop",
          },
          {
            prompt: "An end-stopped line is one that:",
            options: ["Ends with punctuation", "Ends on the poem's rhyme word", "Completes the metre exactly, with no substitution", "Is followed by a stanza break rather than another line"],
            correctIndex: 0,
            explanation: "It is the opposite of an enjambed line, which runs on without punctuation at the break.",
            sourceLessonSlug: "enjambment-and-end-stop",
          },
          {
            prompt: "The specific effect of an enjambed break on a reader is:",
            options: ["A provisional reading that the next line revises", "A pause equal in length to a comma", "An expectation of rhyme that the next line satisfies", "A shift from one speaker to another within the poem"],
            correctIndex: 0,
            explanation: "The mind closes the phrase at the line end, then the next line changes what the phrase meant. That double take depends on seeing the break.",
            sourceLessonSlug: "enjambment-and-end-stop",
          },
          {
            prompt: "According to the Academy, enjambed lines affect the sound of a poem by:",
            options: ["Minimising the difference from prose", "Making the metre more audible than an end-stopped line does", "Emphasising the rhyme, since no punctuation competes with it", "Forcing the reader to pause longer than at a full stop"],
            correctIndex: 0,
            explanation: "While increasing the speed and pacing. End-stopping does the reverse: it slows and settles.",
            sourceLessonSlug: "enjambment-and-end-stop",
          },
          {
            prompt: "A poem that end-stops every line becomes:",
            options: ["A series of small announcements", "Impossible to scan, because the metre never carries over", "Indistinguishable from prose set in short paragraphs", "More difficult, because each line must stand alone"],
            correctIndex: 0,
            explanation: "Powerful in small doses and monotonous over a page, which is why the choice has to be made line by line.",
            sourceLessonSlug: "enjambment-and-end-stop",
          },
          {
            prompt: "Whitman's lines feel declared rather than discovered because he:",
            options: ["End-stops almost everything", "Uses no rhyme anywhere in the poem", "Writes in the first person throughout", "Repeats the opening of each line as an anaphora"],
            correctIndex: 0,
            explanation: "Each line is complete and each lands, so accumulation rather than suspension is the effect.",
            sourceLessonSlug: "enjambment-and-end-stop",
          },
          {
            prompt: "What does a listener hear at a sung line break?",
            options: ["A pause or a phrase ending", "A suspension the melody holds open", "Nothing, since the music runs continuously through it", "A change of key marking the end of the unit"],
            correctIndex: 0,
            explanation: "Not a suspension. So the provisional reading enjambment depends on never forms.",
            sourceLessonSlug: "enjambment-and-end-stop",
          },
          {
            prompt: "Because enjambment mostly does not survive into song, a lyric puts its surprises:",
            options: ["Inside the line", "At the end of each verse, before the chorus arrives", "In the melody rather than in the words", "In the final line of the song, where memory is strongest"],
            correctIndex: 0,
            explanation: "In word choice and in the turn of a phrase, where a listener will actually meet them.",
            sourceLessonSlug: "enjambment-and-end-stop",
          },
          {
            prompt: "The course says a lyric lacks not line ends but:",
            options: ["Reader-controlled ambiguity at the break", "Any equivalent of the stanza as a unit", "The ability to place emphasis at a line's end", "A fixed number of lines per section"],
            correctIndex: 0,
            explanation: "A lyric has line ends. What it does not have is the ambiguity a reader resolves at their own speed.",
            sourceLessonSlug: "enjambment-and-end-stop",
          },
          {
            prompt: "The Italian word behind \"stanza\" carries the sense of:",
            options: ["A room", "A song", "A step", "A knot"],
            correctIndex: 0,
            explanation: "Hirsch's phrase is that each stanza is like a room in a house, a lyric dwelling place.",
            sourceLessonSlug: "stanza-volta-verse-chorus",
          },
          {
            prompt: "A stanza break is described as:",
            options: ["A larger version of a line break", "A purely visual convention with no effect on reading", "The only place a poem may change its metre", "A signal that the speaker of the poem has changed"],
            correctIndex: 0,
            explanation: "It does the same three jobs at a larger scale: pace, grouping and emphasis.",
            sourceLessonSlug: "stanza-volta-verse-chorus",
          },
          {
            prompt: "In a Petrarchan sonnet, the volta classically occurs:",
            options: ["Between the eighth and ninth lines", "At the very last line, as a closing reversal", "After the fourth line, dividing the poem in quarters", "Wherever the poet chooses, since the form fixes only the rhyme"],
            correctIndex: 0,
            explanation: "Between the octave and the sestet, marking a shift in the direction of the argument or narrative.",
            sourceLessonSlug: "stanza-volta-verse-chorus",
          },
          {
            prompt: "McKay's \"If We Must Die\" turns at line nine, where the poem:",
            options: ["Starts addressing people directly", "Introduces its central image for the first time", "Changes from one rhyme scheme to another", "Abandons its metre in favour of a freer line"],
            correctIndex: 0,
            explanation: "It stops arguing about how to die and calls on his kinsmen. The sonnet uses the Shakespearean rhyme scheme but turns at the Petrarchan point.",
            sourceLessonSlug: "stanza-volta-verse-chorus",
          },
          {
            prompt: "Shakespeare's Sonnet 130 places its turn:",
            options: ["At the closing couplet", "Between the octave and the sestet, as Petrarch does", "In the middle of the seventh line, mid-sentence", "In its title, which announces the reversal in advance"],
            correctIndex: 0,
            explanation: "Twelve lines catalogue what the mistress is not, and then the couplet reverses the whole poem.",
            sourceLessonSlug: "stanza-volta-verse-chorus",
          },
          {
            prompt: "A poem with no turn is described as one that:",
            options: ["Stopped rather than ended", "Belongs to the free-verse tradition by definition", "Has failed to establish a metre for the reader", "Is best converted into a lyric, where turns are optional"],
            correctIndex: 0,
            explanation: "Everything before the turn is the setup that makes it land, so the turn is the structural point of the whole shape.",
            sourceLessonSlug: "stanza-volta-verse-chorus",
          },
          {
            prompt: "Jay Summach describes the chorus of a verse-chorus song as:",
            options: ["The focal point", "The section most often cut in performance", "A late addition to the form, dating from the 1980s", "The passage where the lyric is least predictable"],
            correctIndex: 0,
            explanation: "It contains the most engaging musical material, and its unchanging lyric makes it easy to remember.",
            sourceLessonSlug: "stanza-volta-verse-chorus",
          },
          {
            prompt: "Drew Nobile's \"telos principle\" holds that in verse-prechorus-chorus form:",
            options: ["The earlier sections are aimed at the chorus", "Each section is harmonically independent of the others", "The prechorus replaced the bridge after the mid-1960s", "The chorus must appear before the second verse begins"],
            correctIndex: 0,
            explanation: "He traces a consistent teleological structure across the form's history from the mid-1960s onward.",
            sourceLessonSlug: "stanza-volta-verse-chorus",
          },
          {
            prompt: "The one real difference between a volta and a chorus is that a volta:",
            options: ["Happens once", "Is always placed at the poem's midpoint", "Requires a rhyme scheme, which a chorus does not", "Belongs to the sonnet form and to no other"],
            correctIndex: 0,
            explanation: "The poem is different afterwards. A chorus happens repeatedly and gains from each return.",
            sourceLessonSlug: "stanza-volta-verse-chorus",
          },
          {
            prompt: "A chorus gains from each return because:",
            options: ["The verses between have changed its meaning", "The melody is varied slightly on every repetition", "The listener has learned the words and can sing along", "Its lyric is rewritten each time it appears"],
            correctIndex: 0,
            explanation: "The words are unchanged and the context is not, which is why the same lines are not the same sentence the third time.",
            sourceLessonSlug: "stanza-volta-verse-chorus",
          },
          {
            prompt: "A bridge is described as the closest thing a song has to a volta because it:",
            options: ["Appears once and does not return", "Carries the song's title and central claim", "Is always the loudest passage in the arrangement", "Repeats the chorus in a different key"],
            correctIndex: 0,
            explanation: "Placed late, its whole function is to make the final chorus land differently.",
            sourceLessonSlug: "stanza-volta-verse-chorus",
          },
          {
            prompt: "The difference between a volta and a chorus is traced back to:",
            options: ["The heard-once constraint", "The commercial requirements of recorded music", "The greater length of a song compared with a sonnet", "The presence of a performer between writer and audience"],
            correctIndex: 0,
            explanation: "A listener needs the destination to come back around, and a reader does not.",
            sourceLessonSlug: "stanza-volta-verse-chorus",
          },
          {
            prompt: "Which best describes what a verse does in a song?",
            options: ["Advances", "Returns, with its lyric unchanged", "Repeats the chorus with new melody", "Delays the arrival of the first image"],
            correctIndex: 0,
            explanation: "A verse advances and a chorus returns. That contrast is the engine of verse-chorus form.",
            sourceLessonSlug: "stanza-volta-verse-chorus",
          },
          {
            prompt: "What does the course say about the line as the poem's unit versus the sentence?",
            options: ["They do not have to agree", "The line must always end where the sentence does", "The sentence governs, and the line is decorative", "In free verse the two become identical by definition"],
            correctIndex: 0,
            explanation: "That non-agreement is what makes verse verse rather than prose with early returns.",
            sourceLessonSlug: "the-line-is-the-unit",
          },
          {
            prompt: "\"Breath unit\" describes a line whose length is set by:",
            options: ["What can be said in one comfortable breath", "The number of feet the metre prescribes", "The width of the page it is printed on", "The duration of a single musical phrase"],
            correctIndex: 0,
            explanation: "It is characteristic of Whitman, whose lines are complete grammatical units of increasing length.",
            sourceLessonSlug: "the-line-is-the-unit",
          },
          {
            prompt: "A poem that reads identically with and without its line breaks is:",
            options: ["Prose with returns in it", "Successfully written in free verse", "Using its lines for pace rather than emphasis", "Correctly end-stopped throughout"],
            correctIndex: 0,
            explanation: "The lines are not doing any of the four jobs the lesson lists, which is what the two-reading test detects.",
            sourceLessonSlug: "the-line-is-the-unit",
          },
          {
            prompt: "\"Suspension\", as used in this section, means:",
            options: ["Holding a phrase open across a break", "Withholding a rhyme until a later stanza", "Delaying the chorus past its expected entry", "Ending a poem without resolving its argument"],
            correctIndex: 0,
            explanation: "So the reader carries the incomplete phrase into the next line, which is what enjambment creates and a sung break does not.",
            sourceLessonSlug: "enjambment-and-end-stop",
          },
          {
            prompt: "Which pair of effects belongs to end-stopping rather than enjambment?",
            options: ["Slowing and settling", "Speeding and blurring the line into prose", "Suspending and revising the reader's first reading", "Compressing and removing the need for punctuation"],
            correctIndex: 0,
            explanation: "Enjambment runs; end-stopping lands. Both are choices, and a page of either alone becomes monotonous.",
            sourceLessonSlug: "enjambment-and-end-stop",
          },
          {
            prompt: "The French verb behind \"enjambment\" means:",
            options: ["To stride over", "To cut short", "To sing across", "To bind together"],
            correctIndex: 0,
            explanation: "Enjamber, which is a good picture of what the sentence does at the break.",
            sourceLessonSlug: "enjambment-and-end-stop",
          },
          {
            prompt: "Which is the sharpest asymmetry between the two forms in this section?",
            options: ["The break is seen by a reader and only heard by a listener", "A song has no stanzas, while a poem always does", "A lyric cannot use rhyme at a line end, while a poem can", "A poem cannot repeat a line, while a song must"],
            correctIndex: 0,
            explanation: "That single difference is why the line break counts as the poem's own punctuation and the lyric does not have it.",
            sourceLessonSlug: "enjambment-and-end-stop",
          },
          {
            prompt: "Which does the course identify as the structural moment a whole shape is built toward?",
            options: ["A volta in a poem, a chorus in a song", "A refrain in a poem, a bridge in a song", "The last line in a poem, the outro in a song", "The first image in a poem, the hook in a song"],
            correctIndex: 0,
            explanation: "They are cousins with one real difference, which is whether the moment returns.",
            sourceLessonSlug: "stanza-volta-verse-chorus",
          },
          {
            prompt: "Where does McKay's sonnet depart from the Shakespearean model?",
            options: ["It turns at line nine, not at the couplet", "It uses fifteen lines rather than fourteen", "It abandons rhyme in the closing sestet", "It repeats its opening line as a refrain"],
            correctIndex: 0,
            explanation: "The rhyme scheme is Shakespearean and the turn arrives at the Petrarchan point instead.",
            sourceLessonSlug: "stanza-volta-verse-chorus",
          },
          {
            prompt: "Which line marks the turn in Sonnet 130?",
            options: ["And yet by heaven, I think my love as rare", "My mistress' eyes are nothing like the sun", "I love to hear her speak, yet well I know", "I have seen roses damask'd, red and white"],
            correctIndex: 0,
            explanation: "The couplet reverses twelve lines of catalogue, which is where Shakespeare's sonnets often place the turn.",
            sourceLessonSlug: "stanza-volta-verse-chorus",
          },
          {
            prompt: "A lyric's exposed positions are marked out by:",
            options: ["The melody", "The rhyme scheme alone", "The singer's phrasing in performance", "The typographical layout of the printed lyric"],
            correctIndex: 0,
            explanation: "The phrase has a length, so the boundary is decided from outside and the lyricist chooses what stands there.",
            sourceLessonSlug: "the-line-is-the-unit",
          },
          {
            prompt: "What is the fourth job of the line, alongside pace, emphasis and grouping?",
            options: ["Setting an expectation of length", "Marking where the rhyme scheme resets", "Indicating a change of speaker", "Dividing the poem into countable sections"],
            correctIndex: 0,
            explanation: "An expectation a later line can violate for effect, which is exactly what Whitman's third line does.",
            sourceLessonSlug: "the-line-is-the-unit",
          },
          {
            prompt: "Free verse's abandonment of metre is described as the loss of:",
            options: ["The syllable count, not the unit", "The line, which prose then supplies instead", "Rhyme, which cannot survive without metre", "Stanzas, which require a fixed line length"],
            correctIndex: 0,
            explanation: "The line goes on doing pace, emphasis and grouping whether or not the syllables are counted.",
            sourceLessonSlug: "the-line-is-the-unit",
          },
          {
            prompt: "Which is true of the double take an enjambment produces?",
            options: ["It depends on the reader seeing the break", "It works equally well in performance and in print", "It requires the enjambed lines to rhyme with each other", "It is the reason free verse abandoned end rhyme"],
            correctIndex: 0,
            explanation: "Which is why the effect is worth studying rather than simply using, and why it mostly does not travel into song.",
            sourceLessonSlug: "enjambment-and-end-stop",
          },
          {
            prompt: "In the Petrarchan sonnet the sestet becomes the vehicle for:",
            options: ["The counterargument or clarification", "A restatement of the octave in different words", "A description of the scene the octave introduced", "The rhyme scheme's resolution, with no change of sense"],
            correctIndex: 0,
            explanation: "The octave presents an argument, observation or question, and the turn sends the sestet to answer it.",
            sourceLessonSlug: "stanza-volta-verse-chorus",
          },
          {
            prompt: "The course's account of song structure draws on:",
            options: ["Two peer-reviewed Music Theory Online articles", "A single textbook chapter on popular song form", "Interviews with working songwriters conducted for the course", "The course author's own analysis, with no external source"],
            correctIndex: 0,
            explanation: "Summach on the prechorus, from 2011, and Nobile on verse-prechorus-chorus form, from 2022, both cited at the foot of the lesson.",
            sourceLessonSlug: "stanza-volta-verse-chorus",
          },
          {
            prompt: "What does the lesson say about the chorus's lyric across repetitions?",
            options: ["It is unchanging, which aids memory", "It varies slightly to keep the listener attentive", "It is the only section permitted to carry rhyme", "It must be shorter than any verse in the song"],
            correctIndex: 0,
            explanation: "Summach's phrase. The words stay put while the surrounding material changes what they mean.",
            sourceLessonSlug: "stanza-volta-verse-chorus",
          },
          {
            prompt: "Which is the correct relationship between line break and stanza break?",
            options: ["The stanza break is the larger version", "They are unrelated devices with different purposes", "A stanza break replaces punctuation, a line break does not", "A line break is optional and a stanza break is mandatory"],
            correctIndex: 0,
            explanation: "Both do pace, grouping and emphasis, and the stanza break does them at a larger scale.",
            sourceLessonSlug: "stanza-volta-verse-chorus",
          },
          {
            prompt: "Why does the lesson call a poem's turn the point the setup exists for?",
            options: ["Everything before it earns the shift", "Because the turn always contains the poem's best image", "Because readers remember the middle of a poem best", "Because the metre changes at the turn in every sonnet"],
            correctIndex: 0,
            explanation: "Which is why a poem that never turns reads as having stopped rather than ended.",
            sourceLessonSlug: "stanza-volta-verse-chorus",
          },
          {
            prompt: "Whitman's \"Song of Myself\" is quoted here from an edition arranged:",
            options: ["A Project Gutenberg text of Leaves of Grass", "The 1855 first printing, whose opening line reads differently", "A modern editor's reconstruction from surviving manuscript drafts", "An excerpt printed in an anthology of American verse"],
            correctIndex: 0,
            explanation: "Cited at the foot of the lesson, with the poem sitting inside the book's own divisions rather than standing alone.",
            sourceLessonSlug: "the-line-is-the-unit",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 6 — Revision, constraint, and finishing
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "revise-by-subtraction",
      title: "21 · Revise by subtraction",
      section: "Section 6 · Revision, constraint, and finishing",
      body: `Most revision that improves a poem or a lyric removes something. Adding is what you do while drafting; subtracting is what you do afterwards, and the two are different activities that go badly when mixed.

**The oldest statement of it is still the clearest.** William Strunk's rule thirteen, in the 1918 *Elements of Style*, is "Omit needless words", and his explanation is worth having in full: "Vigorous writing is concise. A sentence should contain no unnecessary words, a paragraph no unnecessary sentences, for the same reason that a drawing should have no unnecessary lines and a machine no unnecessary parts. This requires not that the writer make all his sentences short, or that he avoid all detail and treat his subjects only in outline, but that he make every word tell" (Strunk, 1918, p. 24). The second half of that is the half people forget. Concision is not shortness. It is that every word is doing something.

**Pound says the same thing in the negative:** "Use no superfluous word, no adjective, which does not reveal something" (Pound, 1913, p. 201).

**A cutting order that works.** Go through in passes, cheapest first.

1. **Adverbs.** Most are propping up a weak verb. Replace the pair with a stronger verb.
2. **Adjectives that repeat their noun.** *Cold ice*, *loud shout*, *dark night*. The noun already said it.
3. **Intensifiers holding a syllable slot.** *Very*, *really*, *just*, *so*, *only*, *ever*. In metrical or sung writing these breed, because they are exactly the right size to fix a count.
4. **The line that explains the image.** The commonest single cut in a finished draft. The image landed, and then the writer, not trusting it, said what it meant. Delete the second one.
5. **The first stanza.** Often the throat-clearing from lesson seven, still in place.

**The test for keeping a line.** Does it add an image, advance the turn, or supply a sound the piece needs? If it does none of the three, it is scaffolding and the piece stands without it.

**Why the lyric version is stricter.** A wasted word in a poem costs a reader a second. A wasted syllable in a lyric occupies a beat that cannot be reclaimed, because the tune will not wait, and the material that should have been there is now simply absent from the song.

**And the counter-warning.** Cutting is not the same as flattening. A repeated line, a deliberate redundancy, a long approach to a small moment: those can all be load-bearing, and a writer who cuts on word count alone will remove them. The test is function, not length.

:::reveal Complete Strunk's clarification: concision does not require short sentences, it requires what? ||| That the writer make every word tell. He explicitly says the rule does not require all sentences to be short, or detail to be avoided, only that nothing in the piece is unnecessary.

:::reveal What is the commonest single cut in a finished draft, and why does it happen? ||| The line that explains the image just delivered. The writer did not trust the image to land and said what it meant, which dulls the image it was trying to protect.

## Vocabulary
- **Revision by subtraction**: the pass in which material is removed rather than added, kept separate from drafting.
- **Needless word**: one that reveals nothing, in Strunk's sense, as distinct from a word that is merely short or repeated.
- **Intensifier**: a word such as very, really or just, which adds emphasis without content and fits syllable counts too conveniently.
- **The explaining line**: the line that tells the reader what the preceding image meant, and dulls it by doing so.

## Sources
Pound, E. (1913). A few don'ts by an Imagiste. *Poetry, 1*(6), 200-206. https://archive.org/details/jstor-20569730

Strunk, W. (1918). *The elements of style* (Project Gutenberg eBook No. 37134). https://www.gutenberg.org/ebooks/37134`,
    },
    {
      slug: "writing-from-constraint",
      title: "22 · Writing from constraint",
      section: "Section 6 · Revision, constraint, and finishing",
      body: `A form is not a cage you squeeze a finished idea into. It is a machine for producing ideas you would not have had, and that is the practical reason to use one.

**How the machine works.** A rhyme you are obliged to find sends you looking through words you would never have reached for, and one of them brings an image with it. A syllable count you must hit forces a rewrite of a phrase you were only keeping out of habit. A refrain you must return to makes you find a context in which the same words mean something new. In each case the constraint did the thing a blank page cannot do: it asked a specific question.

**The refrain is the cheapest one to try.** Paul Laurence Dunbar's "We Wear the Mask" returns to its title line twice, once quietly and once with an exclamation mark, and the two returns are not the same sentence, because the stanzas between them have changed what the mask is. "Sympathy" does it three times, ending

> I know why the caged bird sings!

after two earlier stanzas that have established what the bird feels and why it beats its wing. In both poems a returning line is the fixed point, and in "Sympathy" Dunbar varies its wording each time, so the meaning moves around it twice over.

**The villanelle is the refrain taken to its limit.** Five tercets and a quatrain, two rhymes and two refrains, with the first and third lines of the opening tercet alternating as the last lines of the following stanzas and closing the poem together: "A1 b A2 / a b A1 / a b A2 / a b A1 / a b A2 / a b A1 A2" (Academy of American Poets, n.d.-j). Nineteen lines, and only thirteen of them new. It is a hard form and an excellent exercise even when the result is not worth keeping.

**The blues stanza is a three-line engine.** A blues poem "often (but not necessarily) follows a form, in which a statement is made in the first line, a variation is given in the second line, and an ironic alternative is declared in the third line" (Academy of American Poets, n.d.-k). Statement, variation, turn. You can write to that in an afternoon, and the second line being a variation rather than a repeat is where the craft is.

**And the ballad stanza** from Section 3 is the fourth engine: four stresses, three, four, three, rhyming abcb, two free lines per stanza to carry a story.

**Choosing one.** Pick a constraint that fights the habit you are trying to break. If your lines sprawl, take a fixed syllable count. If you explain too much, take a form with no room to explain. If your endings trail off, take a form whose ending is decided in advance.

:::reveal Why is a form described here as a machine for producing ideas rather than a container? ||| Because a constraint asks a specific question a blank page cannot: a required rhyme sends you to words you would not have reached for, and a required return makes you find a new context for the same line.

:::reveal In the blues stanza, what is the second line supposed to do? ||| Give a variation on the first line's statement rather than repeat it exactly, before the third line declares an ironic alternative. The variation is where the craft in the form sits.

## Vocabulary
- **Refrain**: a line or group of lines repeated at fixed points, whose meaning shifts as the material around it changes.
- **Villanelle**: nineteen lines in five tercets and a quatrain, on two rhymes, with two alternating refrains that close the poem together.
- **Blues stanza**: three lines running statement, variation, then an ironic alternative.
- **Generative constraint**: a formal rule adopted in order to provoke material, as distinct from one imposed on finished material.

## Sources
Academy of American Poets. (n.d.-j). *Villanelle*. Poets.org. https://poets.org/glossary/villanelle

Academy of American Poets. (n.d.-k). *Blues poem*. Poets.org. https://poets.org/glossary/blues-poem

Dunbar, P. L. (2006). *The complete poems of Paul Laurence Dunbar* (Project Gutenberg eBook No. 18338). Dodd, Mead and Company. https://www.gutenberg.org/ebooks/18338`,
    },
    {
      slug: "finishing-and-checking-your-draft",
      title: "23 · Finishing, and checking your own draft",
      section: "Section 6 · Revision, constraint, and finishing",
      body: `The last skill is the one nobody can do for you: reading your own draft as if somebody else wrote it.

**Read it aloud. Always, both forms.** The mouth catches what the eye forgives. A tongue-twisting consonant cluster, a line one syllable too long, a rhyme that clicks shut where you wanted it open: all of these are inaudible while reading silently and obvious at speaking volume. Pound's advice to a beginner was to fill the mind with cadences, "preferably in a foreign language so that the meaning of the words may be less likely to divert his attention from the movement" (Pound, 1913, p. 202), which is the same idea from the other end: separate the sound from the sense so you can judge each.

**For a lyric, add the click.** Speak or sing it against a steady tempo and check every stressed syllable against the beat, exactly as Section 4 sets out. A line that survives silent reading and speaking aloud can still fail against a tempo, and that failure is the one your listener will meet first.

**A checklist that is short enough to actually use.**

1. Is the first line concrete, and does it belong to the piece rather than to the writer's warm-up?
2. Is every image particular, or is there a general noun standing where a specific one should be?
3. Is every rhyme carrying meaning, or is one of them driving a line that says something you did not mean?
4. Does the piece turn somewhere, and does everything before the turn earn it?
5. Is any line scaffolding, adding no image, no turn and no sound the piece needs?
6. Does the ending stop, or does it trail off because the writer ran out?

**Endings, briefly.** A poem can end on an image and let the reader carry the conclusion, because the reader can look back up the page. A lyric usually ends on the thing the listener should walk away holding, which is why so many songs end on the chorus, and why the ending of a lyric is a decision about memory rather than about resolution.

**Knowing when it is done.** The workable test is that further changes have stopped being improvements and started being alternatives: you are moving material sideways rather than upward. That is a judgment, not a rule, and this course will not pretend to close it.

**One last restatement of the boundary.** Everything in these six sections is about making the thing. What happens to it afterwards, publishing, placement, licensing, pitching, payment, is a separate subject with its own research burden and is not taught here.

:::reveal Why does reading aloud catch problems that silent reading does not? ||| Because the mouth has to produce the sounds. Consonant clusters, an extra syllable and a rhyme that closes when it should stay open are inaudible on the page and obvious at speaking volume.

:::reveal What is the workable test for a draft being finished? ||| That further changes have stopped being improvements and become alternatives, moving material sideways rather than upward. It is a judgment rather than a rule, and no checklist closes it.

## Vocabulary
- **Reading aloud**: the primary revision tool for both forms, because it separates how a line sounds from how it looks.
- **Tempo check**: speaking or singing a lyric against a steady beat to find stresses that land off the accent.
- **Sideways change**: an edit that swaps one version for an equally good one, which is the signal that a draft is finished.
- **Trailing ending**: a close that stops because the writer ran out of material rather than because the piece arrived somewhere.

## Sources
Pound, E. (1913). A few don'ts by an Imagiste. *Poetry, 1*(6), 200-206. https://archive.org/details/jstor-20569730

Strunk, W. (1918). *The elements of style* (Project Gutenberg eBook No. 37134). https://www.gutenberg.org/ebooks/37134`,
    },
    {
      slug: "quiz-revision-and-constraint",
      title: "24 · Knowledge check: revision, constraint, and finishing",
      section: "Section 6 · Revision, constraint, and finishing",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "Most revision that improves a poem or a lyric:",
            options: ["Removes something", "Adds a stanza that clarifies the argument", "Reorders the existing material without changing it", "Converts free verse into a fixed metrical form"],
            correctIndex: 0,
            explanation: "Adding is what you do while drafting. Subtracting is a separate activity and the two go badly when mixed.",
            sourceLessonSlug: "revise-by-subtraction",
          },
          {
            prompt: "Strunk's rule thirteen is:",
            options: ["Omit needless words", "Prefer the specific to the general in every case", "Place the emphatic words of a sentence at the end", "Express co-ordinate ideas in similar form"],
            correctIndex: 0,
            explanation: "From the 1918 Elements of Style, page 24, and still the clearest statement of the idea.",
            sourceLessonSlug: "revise-by-subtraction",
          },
          {
            prompt: "Strunk's comparison for unnecessary words is to a drawing with unnecessary lines and:",
            options: ["A machine with unnecessary parts", "A house with unnecessary rooms", "A song with unnecessary verses", "A sentence with unnecessary punctuation"],
            correctIndex: 0,
            explanation: "The whole point being that vigorous writing is concise for a structural reason, not a stylistic one.",
            sourceLessonSlug: "revise-by-subtraction",
          },
          {
            prompt: "The half of Strunk's rule people forget is that concision does not require:",
            options: ["Short sentences or an absence of detail", "The removal of every adjective from a draft", "A fixed word limit agreed before drafting", "Simple vocabulary in place of technical terms"],
            correctIndex: 0,
            explanation: "He asks only that the writer make every word tell. Concision is not shortness.",
            sourceLessonSlug: "revise-by-subtraction",
          },
          {
            prompt: "Which comes FIRST in the cutting order this lesson gives?",
            options: ["Adverbs", "The first stanza, which is usually throat-clearing", "The line that explains the image just delivered", "Adjectives that merely repeat their noun"],
            correctIndex: 0,
            explanation: "Most are propping up a weak verb, and the pair can be replaced by a stronger verb.",
            sourceLessonSlug: "revise-by-subtraction",
          },
          {
            prompt: "\"Cold ice\" and \"loud shout\" are examples of:",
            options: ["Adjectives repeating their noun", "Spondaic substitution in a metrical line", "Alliteration used to bind a phrase", "Intensifiers holding a syllable slot"],
            correctIndex: 0,
            explanation: "The noun already said it, which is the second pass in the cutting order.",
            sourceLessonSlug: "revise-by-subtraction",
          },
          {
            prompt: "Why do intensifiers breed in metrical and sung writing?",
            options: ["They are the right size to fix a count", "They rhyme more easily than content words do", "Singers add them in performance and writers copy them", "They carry stress reliably wherever they are placed"],
            correctIndex: 0,
            explanation: "Very, really, just, so, only and ever add emphasis without content and happen to be exactly the right length.",
            sourceLessonSlug: "revise-by-subtraction",
          },
          {
            prompt: "The commonest single cut in a finished draft is:",
            options: ["The line that explains the image", "The final couplet, which usually restates the opening", "A repeated word that could be varied", "The title, which the poem does not need"],
            correctIndex: 0,
            explanation: "The image landed, and then the writer, not trusting it, said what it meant. Delete the second one.",
            sourceLessonSlug: "revise-by-subtraction",
          },
          {
            prompt: "The test for keeping a line is whether it adds an image, advances the turn, or:",
            options: ["Supplies a sound the piece needs", "Contains at least one concrete noun", "Rhymes with a line elsewhere in the stanza", "Was written in the same session as the lines around it"],
            correctIndex: 0,
            explanation: "If it does none of the three it is scaffolding, and the piece stands without it.",
            sourceLessonSlug: "revise-by-subtraction",
          },
          {
            prompt: "A wasted syllable costs more in a lyric than in a poem because it:",
            options: ["Occupies a beat that cannot be reclaimed", "Makes the line harder for a singer to pronounce", "Breaks the rhyme scheme the verse established", "Adds to the total length of the recording"],
            correctIndex: 0,
            explanation: "The tune will not wait, so the material that should have been there is simply absent from the song.",
            sourceLessonSlug: "revise-by-subtraction",
          },
          {
            prompt: "The counter-warning against cutting is that a writer who cuts on word count alone will remove:",
            options: ["Load-bearing repetition and deliberate redundancy", "The poem's rhyme scheme along with its filler", "Every adjective, including the ones that reveal", "The first stanza, which usually carries the subject"],
            correctIndex: 0,
            explanation: "A repeated line or a long approach to a small moment can be doing real work. The test is function, not length.",
            sourceLessonSlug: "revise-by-subtraction",
          },
          {
            prompt: "Pound's negative version of Strunk's rule is to use no superfluous word and no adjective that:",
            options: ["Does not reveal something", "Has appeared elsewhere in the same poem", "Cannot be spoken within the metre of the line", "Was not present in the writer's first draft"],
            correctIndex: 0,
            explanation: "Reveal, not decorate. It is the same standard from the other direction.",
            sourceLessonSlug: "revise-by-subtraction",
          },
          {
            prompt: "A form is described in this course as:",
            options: ["A machine for producing ideas", "A container into which a finished idea is fitted", "A signal to the reader about the poem's tradition", "A constraint that experienced writers eventually discard"],
            correctIndex: 0,
            explanation: "The constraint asks a specific question a blank page cannot ask, which is the practical reason to use one.",
            sourceLessonSlug: "writing-from-constraint",
          },
          {
            prompt: "A required rhyme helps by:",
            options: ["Sending you to words you would not have reached for", "Guaranteeing that the stanza will sound finished", "Shortening the time a draft takes to complete", "Removing the need to choose a metre in advance"],
            correctIndex: 0,
            explanation: "One of them brings an image with it, which is the machine working as intended.",
            sourceLessonSlug: "writing-from-constraint",
          },
          {
            prompt: "A required refrain helps by making you:",
            options: ["Find a context in which the same words mean something new", "Write fewer lines than the form would otherwise need", "Establish the rhyme scheme before the first stanza is done", "Repeat the strongest image at fixed intervals"],
            correctIndex: 0,
            explanation: "The repeated line is the fixed point and the meaning moves around it, which is exactly what Dunbar does.",
            sourceLessonSlug: "writing-from-constraint",
          },
          {
            prompt: "How many times does \"We Wear the Mask\" return to its title line?",
            options: ["Twice", "Four times, once in each stanza of the poem", "Three times, matching the three stanzas of \"Sympathy\"", "Once, at the very end of the poem"],
            correctIndex: 0,
            explanation: "Once quietly and once with an exclamation mark, and the two returns are not the same sentence.",
            sourceLessonSlug: "writing-from-constraint",
          },
          {
            prompt: "Dunbar's \"Sympathy\" ends each stanza with a variation on:",
            options: ["What the speaker knows about the caged bird", "A description of the season outside the cage", "A direct address to the reader", "An image of the bars of the cage"],
            correctIndex: 0,
            explanation: "The bird's feeling, then why it beats its wing, then why it sings, so the final refrain arrives with the earlier two behind it.",
            sourceLessonSlug: "writing-from-constraint",
          },
          {
            prompt: "A villanelle is made of:",
            options: ["Five tercets and a quatrain", "Fourteen lines in two rhyme groups", "Three stanzas of four lines each plus a couplet", "Six stanzas of six lines with a closing tercet"],
            correctIndex: 0,
            explanation: "Nineteen lines on two rhymes with two refrains, and only thirteen of the lines are new.",
            sourceLessonSlug: "writing-from-constraint",
          },
          {
            prompt: "In a villanelle, the two refrains come from:",
            options: ["The first and third lines of the opening tercet", "The last two lines of the closing quatrain", "The middle line of each of the five tercets", "Lines chosen freely by the poet from anywhere in the poem"],
            correctIndex: 0,
            explanation: "They alternate as the last lines of the following stanzas and then close the poem together.",
            sourceLessonSlug: "writing-from-constraint",
          },
          {
            prompt: "In the blues stanza, the second line supplies:",
            options: ["A variation on the first", "The rhyme the first line established", "A new image unconnected to the first", "The ironic alternative that closes the form"],
            correctIndex: 0,
            explanation: "Statement, variation, then an ironic alternative in the third line. The variation is where the craft in the form sits.",
            sourceLessonSlug: "writing-from-constraint",
          },
          {
            prompt: "The third line of a blues stanza declares:",
            options: ["An ironic alternative", "A repetition of the opening statement", "The rhyme that binds the stanza together", "A question the following stanza answers"],
            correctIndex: 0,
            explanation: "Which is the turn in a three-line engine you can write to in an afternoon.",
            sourceLessonSlug: "writing-from-constraint",
          },
          {
            prompt: "Which is offered as the fourth engine, alongside the refrain, the villanelle and the blues stanza?",
            options: ["The ballad stanza", "The Petrarchan sonnet", "The prose poem", "The unrhymed couplet"],
            correctIndex: 0,
            explanation: "Four stresses, three, four, three, rhyming abcb, with two free lines per stanza to carry a story.",
            sourceLessonSlug: "writing-from-constraint",
          },
          {
            prompt: "How should a writer choose which constraint to adopt?",
            options: ["Pick one that fights the habit you want to break", "Choose the form most associated with your subject", "Take the shortest form, so the draft finishes sooner", "Alternate forms so that no habit has time to develop"],
            correctIndex: 0,
            explanation: "If your lines sprawl, take a fixed syllable count. If you explain too much, take a form with no room to explain.",
            sourceLessonSlug: "writing-from-constraint",
          },
          {
            prompt: "For a writer whose endings trail off, the lesson recommends:",
            options: ["A form whose ending is decided in advance", "A longer form, so the ending has more setup", "Free verse, so no ending is formally required", "Writing the ending first and the opening last"],
            correctIndex: 0,
            explanation: "The constraint supplies what the habit will not, which is the general principle behind the whole lesson.",
            sourceLessonSlug: "writing-from-constraint",
          },
          {
            prompt: "A \"generative constraint\" differs from an ordinary one because it is:",
            options: ["Adopted to provoke material", "Imposed by an editor rather than chosen", "Applied only after the draft is complete", "Limited to forms invented in the twentieth century"],
            correctIndex: 0,
            explanation: "As distinct from a rule imposed on finished material, which is the cage the lesson says a form is not.",
            sourceLessonSlug: "writing-from-constraint",
          },
          {
            prompt: "The last skill in this course is described as:",
            options: ["Reading your own draft as if somebody else wrote it", "Choosing which of several drafts to submit", "Setting a finished lyric to an original melody", "Memorising a poem so it can be performed"],
            correctIndex: 0,
            explanation: "It is the one nobody can do for you, which is why the lesson supplies procedures rather than principles.",
            sourceLessonSlug: "finishing-and-checking-your-draft",
          },
          {
            prompt: "Reading aloud catches problems silent reading misses because:",
            options: ["The mouth has to produce the sounds", "The ear is more attentive than the eye to meaning", "Speaking is slower, so more time is spent per line", "Performance reveals the writer's intended emphasis"],
            correctIndex: 0,
            explanation: "A consonant cluster, an extra syllable and a rhyme that closes when it should stay open are all inaudible on the page.",
            sourceLessonSlug: "finishing-and-checking-your-draft",
          },
          {
            prompt: "Pound suggests filling the mind with cadences in a foreign language so that:",
            options: ["Meaning does not divert attention from movement", "The writer acquires vocabulary for translation work", "The rhythms of another tradition can be imitated directly", "The reader will not recognise the source of the borrowing"],
            correctIndex: 0,
            explanation: "It is the same idea as reading aloud from the other end: separate the sound from the sense so each can be judged.",
            sourceLessonSlug: "finishing-and-checking-your-draft",
          },
          {
            prompt: "For a lyric, the check that must be added to reading aloud is:",
            options: ["Speaking or singing it against a steady tempo", "Reading it silently while counting syllables", "Playing it back at a slower speed", "Having a singer perform it before any revision"],
            correctIndex: 0,
            explanation: "A line that survives silent reading and speaking aloud can still fail against a tempo, and that failure is what a listener meets first.",
            sourceLessonSlug: "finishing-and-checking-your-draft",
          },
          {
            prompt: "Which is the FIRST item on the finishing checklist?",
            options: ["Is the first line concrete, and does it belong to the piece?", "Does the piece turn somewhere, and is the turn earned?", "Is every rhyme carrying meaning rather than driving a line?", "Does the ending stop, or does it trail off?"],
            correctIndex: 0,
            explanation: "It combines the front-loading rule with the warning about throat-clearing that the writer needed but the reader does not.",
            sourceLessonSlug: "finishing-and-checking-your-draft",
          },
          {
            prompt: "The checklist's question about images asks whether there is:",
            options: ["A general noun where a specific one belongs", "An image repeated more than twice in the piece", "An image the reader cannot be expected to recognise", "More than one image competing in the same line"],
            correctIndex: 0,
            explanation: "Which is Section 2's rule restated as a check you can run over a finished draft.",
            sourceLessonSlug: "finishing-and-checking-your-draft",
          },
          {
            prompt: "A poem can end on an image because:",
            options: ["The reader can look back up the page", "Images are more memorable than statements", "A poem has no listener to satisfy", "Endings in poetry are conventionally open"],
            correctIndex: 0,
            explanation: "The reader carries the conclusion, and the evidence is still visible above the last line.",
            sourceLessonSlug: "finishing-and-checking-your-draft",
          },
          {
            prompt: "A lyric usually ends on:",
            options: ["What the listener should walk away holding", "The quietest passage in the arrangement", "A line that has not appeared earlier in the song", "The image introduced in the first verse"],
            correctIndex: 0,
            explanation: "Which is why so many songs end on the chorus, and why the ending of a lyric is a decision about memory rather than resolution.",
            sourceLessonSlug: "finishing-and-checking-your-draft",
          },
          {
            prompt: "The test for a draft being finished is that changes have become:",
            options: ["Alternatives rather than improvements", "Too small for a reader to notice", "Confined to punctuation and line breaks", "Impossible without rewriting the whole piece"],
            correctIndex: 0,
            explanation: "Material is moving sideways rather than upward. The course calls this a judgment and declines to close it with a rule.",
            sourceLessonSlug: "finishing-and-checking-your-draft",
          },
          {
            prompt: "A \"sideways change\" is one that:",
            options: ["Swaps one version for an equally good one", "Moves a line from one stanza to another", "Alters the rhyme without altering the sense", "Shortens the piece without weakening it"],
            correctIndex: 0,
            explanation: "It is the signal that a draft is done, because further work has stopped adding anything.",
            sourceLessonSlug: "finishing-and-checking-your-draft",
          },
          {
            prompt: "A \"trailing ending\" is one that stops because:",
            options: ["The writer ran out of material", "The metre would not support another line", "The melody has reached its final cadence", "The rhyme scheme has used all its available sounds"],
            correctIndex: 0,
            explanation: "Rather than because the piece arrived somewhere, which is the sixth item on the checklist.",
            sourceLessonSlug: "finishing-and-checking-your-draft",
          },
          {
            prompt: "The final lesson restates which boundary?",
            options: ["The course teaches making, not the business", "The course covers poems only, not lyrics", "The course excludes any twentieth-century material", "The course teaches revision but not drafting"],
            correctIndex: 0,
            explanation: "Publishing, placement, licensing, pitching and payment are a separate subject with their own research burden and are not taught here.",
            sourceLessonSlug: "finishing-and-checking-your-draft",
          },
          {
            prompt: "\"Revision by subtraction\" is described as a pass kept separate from:",
            options: ["Drafting", "Reading aloud", "Choosing a form", "Checking the rhyme scheme"],
            correctIndex: 0,
            explanation: "Adding and subtracting are different activities, and the lesson says they go badly when mixed.",
            sourceLessonSlug: "revise-by-subtraction",
          },
          {
            prompt: "Which is NOT one of the five passes in the cutting order?",
            options: ["Proper nouns that a reader may not recognise", "Adverbs propping up a weak verb", "Intensifiers occupying a syllable slot", "The first stanza, if it is still throat-clearing"],
            correctIndex: 0,
            explanation: "A specific name is usually the concrete detail Section 2 asks for, not filler.",
            sourceLessonSlug: "revise-by-subtraction",
          },
          {
            prompt: "A \"needless word\", in Strunk's sense, is one that:",
            options: ["Reveals nothing", "Repeats a word used earlier in the piece", "Exceeds two syllables without carrying stress", "Was added after the first draft was complete"],
            correctIndex: 0,
            explanation: "As distinct from a word that is merely short, common or repeated, which may be doing plenty.",
            sourceLessonSlug: "revise-by-subtraction",
          },
          {
            prompt: "Why is a villanelle called an excellent exercise even when the result is not worth keeping?",
            options: ["The form forces returns you would not have written", "It is the shortest fixed form in English", "It teaches the rhyme scheme of the sonnet indirectly", "Its refrains can be reused in another poem later"],
            correctIndex: 0,
            explanation: "Nineteen lines with only thirteen new ones is a hard constraint, and hard constraints are what generate unfamiliar material.",
            sourceLessonSlug: "writing-from-constraint",
          },
          {
            prompt: "A syllable count you must hit forces:",
            options: ["A rewrite of a phrase kept out of habit", "The removal of every unstressed syllable", "A change of metre for the whole stanza", "The adoption of a fixed rhyme scheme"],
            correctIndex: 0,
            explanation: "That is the second of the three ways the lesson says a constraint asks a specific question.",
            sourceLessonSlug: "writing-from-constraint",
          },
          {
            prompt: "Dunbar's two refrain poems are quoted in this course from:",
            options: ["The Complete Poems, published by Dodd, Mead", "Lyrics of Lowly Life in its 1896 first printing", "A digital anthology of African American poetry", "The Century Magazine, where both first appeared"],
            correctIndex: 0,
            explanation: "The Project Gutenberg text of that collection, cited at the foot of the lesson.",
            sourceLessonSlug: "writing-from-constraint",
          },
          {
            prompt: "The checklist item about scaffolding asks whether any line adds:",
            options: ["No image, no turn and no needed sound", "Fewer than four stresses to the stanza", "A rhyme that has already been used", "An abstraction the reader must interpret"],
            correctIndex: 0,
            explanation: "It is the same three-part test the cutting lesson gives, applied line by line over a finished draft.",
            sourceLessonSlug: "finishing-and-checking-your-draft",
          },
          {
            prompt: "Why does the lesson say the checklist is short?",
            options: ["So it will actually be used", "Because longer checklists are harder to memorise", "Because most drafts fail on only one criterion", "Because the remaining checks belong to a later course"],
            correctIndex: 0,
            explanation: "Six items, each pointing back at a section, which is the whole course compressed into something usable on a draft.",
            sourceLessonSlug: "finishing-and-checking-your-draft",
          },
          {
            prompt: "Which two named writers supply the revision lesson's two statements of the same rule?",
            options: ["Strunk and Pound", "Whitman and Dickinson", "Hopkins and Blake", "Summach and Nobile"],
            correctIndex: 0,
            explanation: "Strunk positively, omit needless words, and Pound negatively, use no superfluous word and no adjective that does not reveal.",
            sourceLessonSlug: "revise-by-subtraction",
          },
          {
            prompt: "\"Load-bearing repetition\" names material that:",
            options: ["Looks redundant but is doing work", "Repeats because the writer lost track of the draft", "Must be cut before a lyric can be sung", "Appears only in fixed forms such as the villanelle"],
            correctIndex: 0,
            explanation: "A repeated line or a long approach to a small moment can be essential, which is why the test is function rather than length.",
            sourceLessonSlug: "revise-by-subtraction",
          },
          {
            prompt: "In the blues stanza the FIRST line supplies:",
            options: ["A statement", "The rhyme the other two lines answer", "An address to a named listener", "A question the stanza will resolve"],
            correctIndex: 0,
            explanation: "Statement, then variation, then an ironic alternative. The Academy notes the form is common rather than obligatory in a blues poem.",
            sourceLessonSlug: "writing-from-constraint",
          },
          {
            prompt: "What does the lesson say about a writer who explains too much?",
            options: ["Take a form with no room to explain", "Move to free verse, where explanation is expected", "Cut the explanations and keep the form unchanged", "Write longer poems, so the explanation is proportionally smaller"],
            correctIndex: 0,
            explanation: "The constraint should fight the habit, which is the same logic applied to sprawling lines and trailing endings.",
            sourceLessonSlug: "writing-from-constraint",
          },
          {
            prompt: "The Elements of Style is quoted here from:",
            options: ["The 1918 edition on Project Gutenberg", "The revised edition prepared by E. B. White", "A modern paperback reprint of the 1959 text", "An excerpt reproduced in a writing handbook"],
            correctIndex: 0,
            explanation: "Strunk's own text, cited with its page number at the foot of the lesson.",
            sourceLessonSlug: "revise-by-subtraction",
          },
          {
            prompt: "Which pairing of habit and constraint does the lesson give?",
            options: ["Sprawling lines, a fixed syllable count", "Weak endings, a longer free-verse form", "Too much rhyme, a stricter rhyme scheme", "Vague images, a shorter total length"],
            correctIndex: 0,
            explanation: "Alongside explaining too much paired with a form that has no room to explain, and trailing endings paired with a decided ending.",
            sourceLessonSlug: "writing-from-constraint",
          },
          {
            prompt: "Why does \"Sympathy\" complicate the idea of a fixed refrain?",
            options: ["Dunbar varies its wording each time", "The refrain appears only in the final stanza of the poem", "The refrain is longer than the stanza it closes", "Dunbar borrowed the line from an earlier ballad"],
            correctIndex: 0,
            explanation: "The bird's feeling, then why it beats its wing, then why it sings. The returning line is a fixed point whose words also move.",
            sourceLessonSlug: "writing-from-constraint",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // FINAL — 52 pooled questions serving 10, drawing on all 18 teaching lessons
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "final-exam-writing-poems-and-songs",
      title: "25 · Final assessment",
      section: "Final assessment",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 10,
        questions: [
          {
            prompt: "The organising claim of this whole course is that lyric and poem differ mainly in:",
            options: ["How the words reach the audience", "The subjects each form is able to handle well", "The level of vocabulary each audience will tolerate", "The century in which each form reached its mature shape"],
            correctIndex: 0,
            explanation: "One arrives once, in time, at a tempo the listener does not set. The other holds still and can be re-read.",
            sourceLessonSlug: "heard-once-read-twice",
          },
          {
            prompt: "The heard-once constraint is a claim about:",
            options: ["Control of the first pass", "The impossibility of replaying a recording", "How much text a listener can memorise", "The average attention span of a music audience"],
            correctIndex: 0,
            explanation: "Replay is perfectly possible. What the listener does not control is the speed of the first pass.",
            sourceLessonSlug: "heard-once-read-twice",
          },
          {
            prompt: "Which subject does this course refuse, from lesson one onward?",
            options: ["The business of music", "Traditional metrical scansion, as an outdated technology", "Song forms invented after the middle of the twentieth century", "Any poem written before the modern era of free verse"],
            correctIndex: 0,
            explanation: "Publishing, placement, licensing, pitching and payment have a different research burden and appear nowhere.",
            sourceLessonSlug: "heard-once-read-twice",
          },
          {
            prompt: "Why does the course describe rather than quote modern song lyrics?",
            options: ["Copyright, enforced aggressively", "Because a lyric printed without music misrepresents the song", "Because permissions were sought and were not granted in time", "Because the course prefers examples older than a hundred years"],
            correctIndex: 0,
            explanation: "The technique is described and the song named, and the listening is left to the learner.",
            sourceLessonSlug: "heard-once-read-twice",
          },
          {
            prompt: "What did oral transmission do to the ballad's shape?",
            options: ["Selected for repetition, beat and rhyme", "Removed rhyme, which was added when ballads reached print", "Lengthened the stanza, so a reciter could pause less often", "Fixed a single authoritative text for each ballad early on"],
            correctIndex: 0,
            explanation: "Plus a story told in scenes. Those are the features you would design for a form that must survive in memory.",
            sourceLessonSlug: "what-lyric-and-poem-share",
          },
          {
            prompt: "\"Sir Patrick Spens\" and Dickinson's carriage stanza share:",
            options: ["Common measure", "A refrain repeated in every stanza", "An identical rhyme sound across both texts", "Their first publication in the same decade"],
            correctIndex: 0,
            explanation: "Four stresses, three, four, three, with the second line rhyming the fourth. One sung, one written for the page.",
            sourceLessonSlug: "what-lyric-and-poem-share",
          },
          {
            prompt: "Which job in this course is unique to song?",
            options: ["Setting words against a musical beat", "Choosing between a concrete image and an abstraction", "Deciding what a rhyme is doing in a given line", "Cutting the material that does not pay its way"],
            correctIndex: 0,
            explanation: "A poem's stresses have no external grid to collide with, so every other job in the course is shared.",
            sourceLessonSlug: "what-lyric-and-poem-share",
          },
          {
            prompt: "Which is something melody BUYS a lyricist?",
            options: ["A rhythmic grid", "Freedom to vary the number of syllables per line", "Latitude over where the stressed syllables can fall", "Room for a sentence with several subordinate clauses"],
            correctIndex: 0,
            explanation: "The other three purchases are emotional colour, bearable repetition, and pitch and duration. The other three items here are charges.",
            sourceLessonSlug: "what-melody-buys-and-charges",
          },
          {
            prompt: "\"Does it read well as a poem?\" fails as a test for a lyric because:",
            options: ["Melody carries part of the load", "Lyrics are not intended to be read at all", "The two forms are judged by different audiences", "A lyric is always shorter than a comparable poem"],
            correctIndex: 0,
            explanation: "A lyric may be plainer on the page and land hard when sung. One that reads beautifully and cannot be sung has failed.",
            sourceLessonSlug: "what-melody-buys-and-charges",
          },
          {
            prompt: "A poem is allowed to be more difficult than a lyric because it:",
            options: ["Gets no support from a melody", "Is read by a more educated audience", "Has fewer formal constraints to satisfy", "Is published in contexts that reward obscurity"],
            correctIndex: 0,
            explanation: "Difficulty is the compensation for having no melody, not an indulgence.",
            sourceLessonSlug: "what-melody-buys-and-charges",
          },
          {
            prompt: "Pound's instruction about abstractions is to:",
            options: ["Go in fear of them", "Reserve them for the closing line of a poem", "Pair each with a concrete image in the same phrase", "Eliminate them from verse entirely and without exception"],
            correctIndex: 0,
            explanation: "Fear is a working posture: an abstraction gets used only when nothing concrete will do the job.",
            sourceLessonSlug: "go-in-fear-of-abstractions",
          },
          {
            prompt: "\"The natural object is always the adequate symbol\" implies that explaining an image:",
            options: ["Adds nothing and blurs it", "Makes the poem accessible to more readers", "Is necessary whenever the image is unfamiliar", "Belongs in a note rather than in the poem itself"],
            correctIndex: 0,
            explanation: "It is Pound's diagnosis of \"dim lands of peace\", which mixes an abstraction into the concrete.",
            sourceLessonSlug: "go-in-fear-of-abstractions",
          },
          {
            prompt: "The concreteness test this course prefers is whether:",
            options: ["A sense can reach it", "A camera could record it in one frame", "It names something the reader has personally experienced", "It appears as a noun rather than as an adjective"],
            correctIndex: 0,
            explanation: "The photograph test discards sound, smell, taste, texture, temperature, weight and motion, all of which are concrete.",
            sourceLessonSlug: "go-in-fear-of-abstractions",
          },
          {
            prompt: "Dickinson's three passings make their argument through:",
            options: ["Selection and order", "A stated comparison between youth and age", "The rhyme, which links children with the sun", "A refrain repeated in the following stanza"],
            correctIndex: 0,
            explanation: "School, grain, setting sun, in that sequence, which the reader assembles into a life without the word appearing.",
            sourceLessonSlug: "the-image-does-the-arguing",
          },
          {
            prompt: "The Metro poem joins its two images with:",
            options: ["A colon and nothing else", "A verb of comparison in the second line", "A rhyme between the last words of each line", "A stated explanation that Pound later removed"],
            correctIndex: 0,
            explanation: "The comparison is the poem, so no sentence explains it.",
            sourceLessonSlug: "the-image-does-the-arguing",
          },
          {
            prompt: "The repair for a vague image is to:",
            options: ["Replace the general noun", "Add adjectives until the picture becomes definite", "Attach a simile supplying the missing detail", "Move it to a later stanza where context accumulates"],
            correctIndex: 0,
            explanation: "Trout rather than fish, and then cut the words that were compensating for the vagueness.",
            sourceLessonSlug: "the-image-does-the-arguing",
          },
          {
            prompt: "A lyric front-loads its concrete detail because a listener:",
            options: ["Has nothing to hold an abstraction with", "Prefers images to statements as a matter of taste", "Cannot hear consonants clearly at the start of a song", "Has not yet learned the melody and needs a simpler line"],
            correctIndex: 0,
            explanation: "The abstract line is already gone at the music's speed and the next one is arriving.",
            sourceLessonSlug: "front-load-the-concrete",
          },
          {
            prompt: "\"Write the first line last\" is advice to remove:",
            options: ["Throat-clearing", "The weakest rhyme in the opening stanza", "Any abstraction from the poem's first sentence", "The title, which usually duplicates the first line"],
            correctIndex: 0,
            explanation: "Drafts begin with the sentence or two the writer needed to get going, and those serve the writer rather than the reader.",
            sourceLessonSlug: "front-load-the-concrete",
          },
          {
            prompt: "A perfect rhyme matches:",
            options: ["The final stressed vowel and all following sounds", "The spelling of the two words from the vowel onward", "The number of syllables and the initial consonant", "Any vowel shared between two words in a stanza"],
            correctIndex: 0,
            explanation: "Bright and flight. Every other kind of rhyme is described by its distance from this.",
            sourceLessonSlug: "perfect-rhyme-and-what-it-costs",
          },
          {
            prompt: "The worst symptom of a rhyme-driven line is:",
            options: ["A claim the writer did not mean", "An inverted word order that reads as archaic", "A noun introduced for one line and then dropped", "A syllable count that no longer fits the melody"],
            correctIndex: 0,
            explanation: "The reader believes the line as written, and has no access to the intention behind it.",
            sourceLessonSlug: "perfect-rhyme-and-what-it-costs",
          },
          {
            prompt: "\"Rhyming forwards\" means choosing:",
            options: ["The rhyme word before writing the line", "The rhyme scheme before choosing a subject", "The last stanza before the first is drafted", "A rhyme that has not been used in the poem yet"],
            correctIndex: 0,
            explanation: "So the line is built toward a destination you chose, rather than being pushed to one you did not.",
            sourceLessonSlug: "perfect-rhyme-and-what-it-costs",
          },
          {
            prompt: "A slant rhyme gives a writer:",
            options: ["Recognition without closure", "A stronger sense of completion than a perfect rhyme", "A way of rhyming words that share no sounds at all", "A rhyme audible in print but not in performance"],
            correctIndex: 0,
            explanation: "Which is what an argument you do not want to close yet requires.",
            sourceLessonSlug: "slant-rhyme-and-the-near-relatives",
          },
          {
            prompt: "Consonance differs from alliteration by:",
            options: ["Not being confined to word beginnings", "Involving vowels as well as consonants", "Occurring only at the ends of lines", "Requiring the sounds to be in adjacent words"],
            correctIndex: 0,
            explanation: "Alliteration is the word-initial special case, which is why the two belong to one family.",
            sourceLessonSlug: "slant-rhyme-and-the-near-relatives",
          },
          {
            prompt: "Blake's \"eye\" and \"symmetry\" in \"The Tyger\" is an example of:",
            options: ["Slant rhyme", "Internal rhyme falling mid-line", "Assonance without any consonant repetition", "A refrain returning in the closing stanza"],
            correctIndex: 0,
            explanation: "It has never been a perfect rhyme in any pronunciation this course can verify, and the poem is not damaged by it.",
            sourceLessonSlug: "slant-rhyme-and-the-near-relatives",
          },
          {
            prompt: "The abcb ballad scheme works for narrative because it:",
            options: ["Leaves two lines per stanza free", "Rhymes every line, which aids memorisation", "Places the rhyme on the longer lines of the quatrain", "Repeats a single rhyme sound throughout the poem"],
            correctIndex: 0,
            explanation: "One rhyme pair holds the shape and the free lines carry the story.",
            sourceLessonSlug: "where-the-rhyme-sits",
          },
          {
            prompt: "\"Dreary\" and \"weary\" in Poe's opening line are an example of:",
            options: ["Internal rhyme", "End rhyme delayed across two lines", "Consonance inside a single word", "A refrain established at the poem's start"],
            correctIndex: 0,
            explanation: "Both land mid-line, which speeds the line and holds a very long one together.",
            sourceLessonSlug: "where-the-rhyme-sits",
          },
          {
            prompt: "Most of what a rhyme scheme controls is:",
            options: ["Pace", "Subject", "Register", "Stanza length"],
            correctIndex: 0,
            explanation: "A rhyme arriving sooner tightens; a rhyme delayed loosens; a rhyme withheld emphasises. All three are pace decisions.",
            sourceLessonSlug: "where-the-rhyme-sits",
          },
          {
            prompt: "Where in English does a writer have NO say over stress?",
            options: ["Inside a multi-syllable word", "In any word placed at the end of a line", "In monosyllables, which are fixed by grammar", "In words borrowed from Latin or from French"],
            correctIndex: 0,
            explanation: "The dictionary settles it. Monosyllables take their prominence from the phrase, and that is where the latitude lives.",
            sourceLessonSlug: "stress-is-in-the-word",
          },
          {
            prompt: "Which words are normally unstressed in an English sentence?",
            options: ["Articles, prepositions and auxiliaries", "Nouns and the main verbs of clauses", "Adjectives and the adverbs modifying them", "The final word of every complete phrase"],
            correctIndex: 0,
            explanation: "Along with conjunctions and pronouns. Content words take the stress, which is how a stranger will read your line.",
            sourceLessonSlug: "stress-is-in-the-word",
          },
          {
            prompt: "Why does the course teach stress before metre and before melody?",
            options: ["Both are built on it", "Because stress is the only element common to all languages", "Because metre is optional and stress is not", "Because a melody cannot be written until stresses are marked"],
            correctIndex: 0,
            explanation: "Metre is a pattern of stresses and text setting places stresses against beats. You cannot fix what you cannot hear.",
            sourceLessonSlug: "stress-is-in-the-word",
          },
          {
            prompt: "An iamb and a trochee differ in that:",
            options: ["The stress falls second, then first", "One has two syllables and the other has three", "One is used in poems and the other only in songs", "One may be substituted and the other may not"],
            correctIndex: 0,
            explanation: "Today is an iamb and matter is a trochee. The iamb rises and the trochee falls.",
            sourceLessonSlug: "meter-and-the-ballad-measure",
          },
          {
            prompt: "How many stresses does the line \"He kindly stopped for me\" carry?",
            options: ["Three", "Four, matching the line before it", "Five, as in a standard sonnet line", "Two, which makes it a fragment"],
            correctIndex: 0,
            explanation: "The stanza is common measure, four and three alternating. A widely used glossary scans this line wrongly as tetrameter.",
            sourceLessonSlug: "meter-and-the-ballad-measure",
          },
          {
            prompt: "Blake's opening line of \"The Tyger\" gets its hammer from:",
            options: ["A missing final unstressed syllable", "An extra stress added to a four-beat line", "The alliteration on the repeated animal name", "An internal rhyme between its first and last words"],
            correctIndex: 0,
            explanation: "Four stresses in seven syllables: falling pairs with the last unstressed half simply absent.",
            sourceLessonSlug: "meter-and-the-ballad-measure",
          },
          {
            prompt: "A metre's real function in a poem is to:",
            options: ["Set an expectation the poem can depart from", "Fix the number of words permitted in each line", "Signal to the reader which tradition the poem belongs to", "Guarantee that the poem can be set to music later"],
            correctIndex: 0,
            explanation: "A line that never departs goes dead, and one that departs constantly has no pattern left to depart from.",
            sourceLessonSlug: "meter-and-the-ballad-measure",
          },
          {
            prompt: "The two grids a lyricist has to reconcile are:",
            options: ["Word stress and musical accent", "Melody and harmony", "Verse and chorus", "Rhyme and metre"],
            correctIndex: 0,
            explanation: "Getting them to agree is most of the work, and knowing what you are doing when you make them disagree is the rest.",
            sourceLessonSlug: "stress-against-a-beat",
          },
          {
            prompt: "The test for a deliberate stress collision in a lyric is whether it is:",
            options: ["Recoverable", "Repeated consistently in every verse", "Placed on a content word rather than a function word", "Audible to a listener without musical training"],
            correctIndex: 0,
            explanation: "The listener should hear tension and still hear the right word. Hearing a different word means the collision failed.",
            sourceLessonSlug: "stress-against-a-beat",
          },
          {
            prompt: "Most fixes to a mis-set lyric line involve:",
            options: ["Adding or removing a small function word", "Rewriting the melody around the problem", "Replacing the content words with shorter ones", "Changing the rhyme so the line can end differently"],
            correctIndex: 0,
            explanation: "That shifts the content words onto the accents without altering what the line says.",
            sourceLessonSlug: "stress-against-a-beat",
          },
          {
            prompt: "The course labels its account of stress against a beat as:",
            options: ["Craft practice, not a measured finding", "A result established by research on sung speech", "A convention of one national tradition only", "A rule with no exceptions in professional work"],
            correctIndex: 0,
            explanation: "Gathered from how the tradition behaves and testable on your own material, which is a different kind of claim.",
            sourceLessonSlug: "stress-against-a-beat",
          },
          {
            prompt: "Verse has two units of organisation, the sentence and:",
            options: ["The line", "The rhyme", "The foot", "The refrain"],
            correctIndex: 0,
            explanation: "They do not have to agree, and that disagreement is what separates a poem from a paragraph with early returns.",
            sourceLessonSlug: "the-line-is-the-unit",
          },
          {
            prompt: "Free verse abandons the syllable count but keeps:",
            options: ["The line", "Rhyme, in a looser form", "The stanza's fixed length", "A regular pattern of stresses"],
            correctIndex: 0,
            explanation: "It possesses visual form and uses the graphic line to differentiate itself from prose.",
            sourceLessonSlug: "the-line-is-the-unit",
          },
          {
            prompt: "A lyricist's line length is decided mostly by:",
            options: ["The melodic phrase", "The rhyme scheme of the verse", "The singer's breath capacity", "The lyricist, before any music exists"],
            correctIndex: 0,
            explanation: "Writing words first shifts the decision back, but once the tune exists the phrase is in charge again.",
            sourceLessonSlug: "the-line-is-the-unit",
          },
          {
            prompt: "The test for whether a poem's lines are doing work is to read it:",
            options: ["Once with the breaks, once without", "Aloud twice at different volumes", "Backwards, checking the rhyme placement", "Silently while counting the stresses"],
            correctIndex: 0,
            explanation: "If the two readings sound identical, the piece is prose with returns in it.",
            sourceLessonSlug: "the-line-is-the-unit",
          },
          {
            prompt: "The specific effect of enjambment is:",
            options: ["A reading the next line revises", "A pause the length of a comma", "An expectation of rhyme at the break", "A change in the poem's speaking voice"],
            correctIndex: 0,
            explanation: "The mind closes the phrase provisionally, then the next line changes what it meant. The effect depends on seeing the break.",
            sourceLessonSlug: "enjambment-and-end-stop",
          },
          {
            prompt: "Enjambment mostly does not survive into song because a sung break is:",
            options: ["Heard as a pause, not seen as a suspension", "Removed entirely by the continuous melody", "Marked by a change of chord the listener notices", "Always placed where the sentence already ends"],
            correctIndex: 0,
            explanation: "So the provisional reading never forms, and the lyric puts its surprises inside the line instead.",
            sourceLessonSlug: "enjambment-and-end-stop",
          },
          {
            prompt: "The course calls the line break the poem's own punctuation because a lyric lacks:",
            options: ["Reader-controlled ambiguity at the break", "Line ends of any kind", "The ability to place a word at a line's end", "Any equivalent of the stanza"],
            correctIndex: 0,
            explanation: "A lyric has line ends. What it does not have is an ambiguity the audience resolves at its own speed.",
            sourceLessonSlug: "enjambment-and-end-stop",
          },
          {
            prompt: "A volta is:",
            options: ["The turn in a sonnet's argument", "The closing couplet of any fourteen-line poem", "The repeated line that closes each stanza", "The point at which a poem changes metre"],
            correctIndex: 0,
            explanation: "Classically between the eighth and ninth lines, marking a shift in the direction of the argument or narrative.",
            sourceLessonSlug: "stanza-volta-verse-chorus",
          },
          {
            prompt: "The difference between a volta and a chorus is that a chorus:",
            options: ["Returns", "Is always shorter than the section before it", "Carries the poem's only concrete image", "Must appear at the same point in every song"],
            correctIndex: 0,
            explanation: "And gains from each return, because the verses between have changed what it means. A volta happens once.",
            sourceLessonSlug: "stanza-volta-verse-chorus",
          },
          {
            prompt: "A bridge is the closest thing a song has to a volta because it:",
            options: ["Appears once, late, and changes the last chorus", "Contains the song's title and central claim", "Repeats the first verse in a new arrangement", "Is the only section without a fixed lyric"],
            correctIndex: 0,
            explanation: "Its whole function is to make the final return land differently, which is what a turn does in a poem.",
            sourceLessonSlug: "stanza-volta-verse-chorus",
          },
          {
            prompt: "Strunk's clarification is that concision requires not short sentences but:",
            options: ["That every word tell", "That every paragraph contain a single idea", "That detail be reserved for the closing lines", "That the writer avoid all subordinate clauses"],
            correctIndex: 0,
            explanation: "Which is why cutting on word count alone will remove material that was doing real work.",
            sourceLessonSlug: "revise-by-subtraction",
          },
          {
            prompt: "The three-part test for keeping a line is whether it adds an image, advances the turn, or:",
            options: ["Supplies a sound the piece needs", "Contains a word not used elsewhere", "Completes the stanza's rhyme scheme", "Was present in the earliest draft"],
            correctIndex: 0,
            explanation: "Failing all three makes it scaffolding, and the piece stands without it.",
            sourceLessonSlug: "revise-by-subtraction",
          },
          {
            prompt: "In choosing a form, the course advises picking a constraint that:",
            options: ["Fights the habit you want to break", "Matches the subject's traditional associations", "Requires the fewest lines to complete", "You have used successfully before"],
            correctIndex: 0,
            explanation: "Sprawling lines take a syllable count, explaining too much takes a form with no room, trailing endings take a decided ending.",
            sourceLessonSlug: "writing-from-constraint",
          },
          {
            prompt: "The signal that a draft is finished is that changes have become:",
            options: ["Alternatives rather than improvements", "Confined to punctuation and spacing", "Too numerous to keep track of", "Impossible without starting again"],
            correctIndex: 0,
            explanation: "Material is moving sideways rather than upward. The course names this a judgment and declines to close it with a rule.",
            sourceLessonSlug: "finishing-and-checking-your-draft",
          },
        ],
      },
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// RESEARCH CHECKS FILED 2026-08-31 in src/lib/research-checks.ts:
//   songs-sung-slant-rhyme-forgiveness, songs-mis-stressing-attention-cost,
//   songs-metro-poem-line-one-punctuation
//
// The fourth proposed item was a note about a SOURCE's error rather than a claim of ours, so it
// is not a research check. The Academy of American Poets meter glossary scans both opening lines
// of the Dickinson poem as iambic tetrameter; the second carries three stresses. This course
// teaches the correct 4-3 common measure and cites that page only for the definitions of the
// feet. The note lives in this file's header; drop it if the page is ever corrected.
// ─────────────────────────────────────────────────────────────────────────────
