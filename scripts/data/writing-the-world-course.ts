import type { AuthoredCourse } from "./authored-course";

// Here Be Dragons, course 5 of 5: Writing the World. The ELA capstone.
//
// Plan: plans/58-here-be-dragons-series.md §4.5 and §7. Category: Culture & History. Grades 9-12.
// Connections: plans/future-courses/culture/01-connections-to-the-catalog.md §4.5.
//
// THIS COURSE IS THE STANDARDS ANCHOR OF THE SERIES. Per plans/58 §7 it carries RH.11-12.6, .8
// and .9, RI.11-12.6, and WHST.11-12.7 and .8, all already fetched verbatim in
// src/lib/standards/shared/common-core-ela.ts. The two graded assignments (lessons 15 and 16) are
// what make the WHST claims honest: without a submitted, assessed artifact they would be
// aspirational. If either assignment is ever cut or downgraded, the WHST claims must come off the
// course with it.
//
// THE SPINE: five genres, one discovery. A field note, a paper, a press release, a headline and a
// post can describe the same finding while promising five different things about what is known.
// The chronicle (lesson 2) is the historical ancestor that proves the method is not a modern
// trick. The real running case is the 1996 ALH84001 meteorite announcement, chosen because every
// document in its chain is public: a paper whose own TITLE carries three hedges, a NASA press
// conference, a head-of-state statement containing the conditional clause that fell out of nearly
// every retelling, and worldwide front pages.
//
// CONSTRUCTED PASSAGES ARE LABELLED AS CONSTRUCTED, every time, in the learner-visible copy. That
// is not a disclaimer, it is the thing the course teaches: an invented passage presented as a
// document is exactly the failure lesson 2 of course 1 warns about. Any future edit that adds an
// illustrative passage must carry the same label.
//
// Lesson 9 (the missing actor) generalises the catalog's existing whose-voice work from atrocity
// to ordinary description, so it must NOT be written as a gotcha about the passive voice: the
// lesson explicitly teaches that a blanket ban is wrong and cites Pullum against Orwell.
//
// Images are NOT authored here. The `:::figure` directive and its guard ship separately
// (plans/58 §3), so lesson 12 teaches the alt / caption / credit distinction as a publishing
// convention rather than asserting anything about a renderer that does not exist yet.

export const WRITING_THE_WORLD_COURSE: AuthoredCourse = {
  title: "Writing the World",
  description:
    "One finding, written five ways. A field note, a paper, a press release, a headline and a post can all describe the same discovery while making five different promises about what is actually known, and the gaps between them are where most of what people believe about science comes from. You will learn to read each genre for the claim it is really making, to catch the moves that do the quiet work (the missing actor, the hedge, the loaded name, the caption), and to trace a claim back down the chain to the document it started in. The course closes with two graded research assignments.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════════
    // Section 1 · Five genres, one discovery
    // ══════════════════════════════════════════════════════════════════════════
    {
      slug: "five-genres-one-discovery",
      title: "1 · Five genres, one discovery",
      section: "Section 1 · Five genres, one discovery",
      body: `Something is found. Within about eighteen months it has been written down at least five times, by five different kinds of writer, for five different readers.

A **field note**, written at the moment, by the person holding the thing.
A **paper**, written for the people best equipped to attack it.
A **press release**, written by an institution that wants the finding noticed.
A **headline**, written in about eight words by someone who did not write the article.
A **post**, written by a stranger who read the headline.

Every one of those can be accurate. They still say different things, because each genre makes a different **promise** about what is known.

## The five promises

| Genre | What its author is promising you |
|---|---|
| Field note | This is what I saw, at this time, in this place, and here is where I was unsure |
| Paper | This is what we found, what it can support, and what it cannot |
| Press release | This is our institution's finding, and here is why it matters |
| Headline | This is worth eight words of your attention |
| Post | This is worth your reaction |

Read down that column and notice how fast the promise stops being about evidence.

There is a sixth genre in this course, and it is the oldest. The **chronicle** is next, in lesson 2, and it is here to prove that none of this is a modern problem. Monks keeping annals in the eighth century were already making genre decisions, and the same question works on them.

## The one question

**What was this written to do, and for whom?**

That is the whole course, and it is deliberately the same question course 1 of this series asked about maps. A mappa mundi judged as a road map is a catastrophe; judged as what it is, it is excellent. A press release judged as a paper is dishonest; judged as what it is, it is doing its job, and knowing the job description is how you read it.

## The same finding, five ways

Below are five passages describing the same discovery.

> **Constructed for this lesson.** None of these five passages is a real document. They were written for this course to put the five genres side by side, describing an invented finding: charred seeds in a rock shelter that appear to date older than the accepted arrival date for people in that region. Real documents from a real 1996 discovery arrive in lessons 4, 5 and 6, and when they do, you will see that this constructed set was the conservative version.

**Field note.** 14:20. Unit 3, level 6. Charred seed fragments in a thin ash lens, 8 cm below the burnt horizon. Bagged six fragments, sample 3-6-A. Lens may be a hearth. Could also be redeposited. Sediment above it is loose. Photographed with scale, two frames.

**Paper.** Six charred seed fragments from Unit 3 returned calibrated dates older than the regional occupation sequence. The stratigraphic association is not secure: the overlying sediment is unconsolidated, and downward movement of small fragments cannot be excluded. The dates are consistent with earlier occupation but do not on their own establish it.

**Press release.** Researchers have recovered evidence that people may have reached the region thousands of years earlier than previously thought, a finding that could reshape the story of the continent's first arrivals.

**Headline.** Ancient seeds rewrite the story of who got here first.

**Post.** they found seeds that prove everything we were taught about this is wrong

## What actually happened along that chain

Nobody lied. Follow the two sentences that carry the weight.

The field note says *may be a hearth, could also be redeposited*. The paper says *not secure, cannot be excluded, consistent with but do not establish*. The press release says *may have reached*, which is still a hedge, and then adds a frame the evidence has nothing to do with (*reshape the story*). The headline says *rewrite*. The post says *prove*.

The hedge survives three steps and dies on the fourth. And at no point does anyone write a sentence they would have to retract.

## What this course will do about it

Sections 1 and 2 take the genres one at a time and teach what each is for. Section 3 goes down inside the sentence, to the four small moves that do most of the work: the name, the missing actor, the hedge, and the citation. Section 4 turns it around and asks you to write.

Two graded assignments close the course. In one you write a single discovery in three genres, with a source ledger. In the other you take a real headline and trace it back to the paper it came from, documenting the exact sentence where the claim changed.

:::reveal What is the one question this course asks of every genre? ||| What was this written to do, and for whom? It is the same question course 1 asked of a map.

:::reveal In the constructed five-genre set, at which step does the hedge finally disappear? ||| At the headline, which says rewrite where the paper said consistent with. The post then says prove. The three earlier versions all hedge.

:::reveal Why does the course label its five passages as constructed rather than presenting them as real documents? ||| Because presenting invented text as a document is exactly the failure the course exists to teach against. The label is part of the lesson, not a disclaimer on it.

## Sources
- Miller, C. R. (1984). Genre as social action. *Quarterly Journal of Speech, 70*(2), 151-167.
- Swales, J. M. (1990). *Genre analysis: English in academic and research settings*. Cambridge University Press.`,
    },
    {
      slug: "the-chronicle",
      title: "2 · The chronicle: what a medieval account was trying to do",
      section: "Section 1 · Five genres, one discovery",
      body: `The *Anglo-Saxon Chronicle* is not one book. It is a set of related manuscripts, begun in the late ninth century in Alfred's Wessex, copied and continued in different houses, one of them running as late as 1154. The manuscripts do not always agree with each other.

Its form is the **annal**: a year, then whatever the compiler judged worth attaching to that year. Not a narrative. Not an argument. A list, under a date.

## The famous entry

Under the year 793, the northern manuscripts record terrible portents over Northumbria that frightened the people, including flashes of lightning and, in the phrase most commonly rendered into English, fiery dragons seen flying in the air. A famine follows. Then, later in the same year, raiders devastate the church at Lindisfarne.

That is the entry that gets quoted as evidence that medieval people were credulous. Read as an annal, it is doing something else entirely.

## What an annal was for

A chronicle records what a year contained. To its compiler, a portent is an event. It happened, people saw it, and it belongs under the year in which it happened, exactly as the famine and the raid do.

Notice also the ordering. Portents, then famine, then the raid. The sequence carries an argument without stating one: something was announced, and then it arrived. The compiler does not have to say *this raid was foretold*. Putting the items in that order under one year says it.

That is a genre move, and it is available to you today. A list under a heading looks like a neutral record and can carry a claim that nobody has to defend.

## Two writers, one event

We have a second contemporary account of the same raid, in a completely different genre: a letter from Alcuin, an English scholar then at Charlemagne's court, to the Northumbrian king. It is not an annal. It is a letter of counsel, and it reads the raid as a judgment, arguing that the community's own conduct invited it.

So the same event survives in two genres with two purposes. The annal places it in time. The letter uses it to argue for a change in behavior. Neither is lying. If you want to know what happened at Lindisfarne, the annal is the better source. If you want to know what educated people made of it, the letter is.

Holding two accounts of one event side by side and asking what each author was trying to do, and what each was in a position to know, is a skill you will use for the rest of this course.

## Why this course will not print a translation as the text

You may have noticed that the entry above is described rather than quoted.

The Chronicle is in Old English. It survives in manuscripts that differ. Every English version you have ever read is a translator's decision about a text that is itself a copy of a copy. Printing one translation in a box and calling it *the entry* would quietly turn three separate things into one.

The date is the sharpest example. The manuscripts give a January date for the raid. Historians generally read that as a copying error for a June date, on the straightforward ground that a North Sea raid in January is very unlikely and the two Latin month abbreviations are easy to confuse. The correction is widely accepted. It is still a correction, made by later readers, and it is not what the manuscript says.

A single error, made once by a tired copyist, can outlive everyone involved and shape every retelling for a thousand years. That is worth knowing before you trust anything downstream of a document.

:::reveal What is an annal organised by, and what does that do to the material? ||| By the year. Whatever the compiler judged worth recording is attached to a date, in order, which lets a sequence carry an argument that nobody has to state or defend.

:::reveal The 793 raid survives in an annal and in a letter. What is each better evidence for? ||| The annal is better evidence for what happened and when. The letter is better evidence for what educated contemporaries made of it and what they wanted done about it.

:::reveal Why does this lesson describe the Chronicle entry instead of quoting a translation as the text? ||| Because the manuscripts differ and every English version is a translator's decision, so printing one as the entry would collapse three different things into one.

## Sources
- Swanton, M. (Trans.). (2000). *The Anglo-Saxon Chronicle* (New ed.). Phoenix Press.
- Whitelock, D. (Ed.). (1979). *English historical documents c. 500-1042* (2nd ed.). Eyre Methuen.
- Keynes, S., & Lapidge, M. (Trans.). (1983). *Alfred the Great: Asser's Life of King Alfred and other contemporary sources*. Penguin.`,
    },
    {
      slug: "the-field-note",
      title: "3 · The field note: writing for a reader who was not there",
      section: "Section 1 · Five genres, one discovery",
      body: `Of the five genres in this course, the field note is the only one written **before anyone knows what the finding will turn out to be**.

Everything downstream is written by someone who already knows how the story ends. The field note is written by someone standing in the mud at 14:20 with no idea whether this matters.

That is its value, and it is also why it is so easy to write badly.

## Two documents, one voyage

Charles Darwin kept small pocket notebooks aboard the *Beagle* between 1831 and 1836. They are abbreviated, numerical, occasionally illegible, and full of small hesitations. He also published, in 1839, a narrative of the voyage for a general readership, built years later out of those notebooks and his other records.

Both are Darwin. They are not the same document, and they are not interchangeable as evidence.

The notebook records what was in front of him and what he was unsure of at that moment. The published narrative records what a practiced writer, several years and a great deal of reflection later, decided the voyage had been about. The second is a better read. The first is the primary source.

The journals of the Lewis and Clark expedition work the same way: the field journals carry courses, distances, weather readings, and blunt notes, while the narrative published in 1814 for a reading public is a smoothed account assembled from them by someone else.

## What a good field note actually does

Four habits, and they are all about the future reader who cannot go back and check.

**Fix the record.** Time, date, place, unit, what you did. Not because it is interesting, but because in six months it is the only thing that lets anyone else locate what you are describing.

**Separate what you saw from what you think it means.** On the page, visibly. *Ash lens with charred fragments* is an observation. *Probably a hearth* is an inference. A note that runs them together cannot be un-run later, because nobody will remember which was which.

**Record the doubt at the moment you feel it.** This is the hard one. Uncertainty fades. By the time you write the paper you will remember the interpretation and not the wobble, and the wobble was information.

**Do not overwrite.** If you were wrong at 14:20, the record that you were wrong at 14:20 is worth more than a tidy page. Add, date the addition, and leave the original.

## Why this genre matters outside science

You keep field notes constantly and mostly badly: the message you send yourself, the photo with no caption, the note of what someone said in a meeting. The failure is always the same one. You record the conclusion and not the observation, and the conclusion turns out to be the part you needed to check.

The transferable rule is small: **write down what would let a stranger disagree with you.**

:::reveal What can a field note do that no later genre in the chain can? ||| It is written before anyone knows what the finding will turn out to be, so it records the observation and the uncertainty as they actually were rather than as they look in hindsight.

:::reveal Why must a field note keep observation and inference visibly separate? ||| Because once they are run together on the page nobody can pull them apart later, and no reader will know which part was seen and which was guessed.

:::reveal Darwin's Beagle notebooks and his 1839 published narrative describe the same voyage. Which is the primary source, and why? ||| The notebooks. They were written at the time; the narrative was assembled years later by a writer who already knew what the voyage had come to mean.

## Sources
- Chancellor, G., & van Wyhe, J. (Eds.). (2009). *Charles Darwin's notebooks from the voyage of the Beagle*. Cambridge University Press.
- Darwin, C. (1839). *Journal of researches into the geology and natural history of the various countries visited by H.M.S. Beagle*. Henry Colburn.
- Moulton, G. E. (Ed.). (1983-2001). *The journals of the Lewis and Clark expedition* (Vols. 1-13). University of Nebraska Press.`,
      recallContent: [
        {
          prompt: "What is an annal organised by, and what does that ordering let a compiler do?",
          answer:
            "By the year. Events are listed under the date they belong to, and putting them in a particular order under one year can carry an argument the compiler never has to state or defend.",
        },
        {
          prompt:
            "The Lindisfarne raid survives in an annal and in a letter of counsel. What is each account better evidence for?",
          answer:
            "The annal is better evidence for what happened and roughly when. The letter is better evidence for how educated contemporaries interpreted it and what they wanted done in response.",
        },
      ],
    },
    {
      slug: "the-paper",
      title: "4 · The paper: hedges, consistent with, and what a scientist will not say",
      section: "Section 1 · Five genres, one discovery",
      body: `On 16 August 1996, *Science* published a paper with this title:

> Search for Past Life on Mars: Possible Relic Biogenic Activity in Martian Meteorite ALH84001

Count the hedges before you reach the colon's other side. **Search for**, not discovery of. **Possible**, not confirmed. **Relic**, meaning traces rather than anything living. Three qualifications in one title, and the title is the part of a paper most likely to be read alone.

## What the paper argued, and how

The team reported several features in a meteorite from Antarctica, agreed to have come from Mars: carbonate globules, certain minerals, organic molecules, and shapes at very small scale that resembled fossil bacteria.

The argument's structure is worth more than its subject. For each feature individually, the paper acknowledged that non-biological explanations existed. Its conclusion rested on the features occurring **together**, and in close physical association, and on the authors' judgment that the combination was better explained biologically than otherwise.

That is a real argument, honestly built. It is also, precisely because of how it is built, an argument that later evidence could take apart one component at a time, and over the following years much of it was contested. Alternative non-biological explanations were proposed for the features, and the biological reading is not the consensus today.

Notice what did not happen. The paper did not have to be retracted, because it never claimed more than it could carry. Its hedges did their job.

## The vocabulary, and what each word actually commits to

This is the part to memorize.

| Phrase | What it commits the author to |
|---|---|
| Consistent with | The evidence does not rule this out. Nothing more. |
| Suggests | The evidence leans this way and the author expects argument |
| Indicates | Stronger than suggests, still short of settled |
| Demonstrates | The author believes this is now established |
| We cannot exclude | A rival explanation is still standing, and here it is |
| Further work is needed | This is not settled and the author is saying so |

**Consistent with** is the one that gets abused most. It is a statement about what the evidence fails to eliminate, and it is compatible with the claim being false. A finding consistent with a biological origin is also, usually, consistent with three other origins.

## What a paper will not say

It will not say *proves*, in almost any field, about almost anything.

That is not modesty and it is not weasel wording. A paper's readers are the people best equipped and most motivated to attack it. An overclaim in a paper is not a marketing risk, it is a professional one, and the hedge is what makes the claim survivable.

## The rule to take out of here

**A paper's hedges are load bearing.**

Take them out and you have not simplified the claim, you have changed it. That is exactly what happens over the next three lessons, and the useful thing is that it happens in front of you, in public, in documents you can read.

:::reveal How many hedges does the ALH84001 paper's title carry, and what are they? ||| Three: search for rather than discovery of, possible rather than confirmed, and relic meaning traces rather than living organisms.

:::reveal What does consistent with actually commit an author to? ||| Only that the evidence does not rule the idea out. It is compatible with the claim being false, and usually with several rival explanations as well.

:::reveal Why will a paper almost never say proves? ||| Because its readers are the people best equipped and most motivated to attack it, so an overclaim is a professional risk. The hedge is what makes a claim survivable.

:::reveal What does removing a paper's hedges do to its claim? ||| It changes the claim rather than simplifying it. The hedges are load bearing.

## Sources
- Hyland, K. (1998). *Hedging in scientific research articles*. John Benjamins.
- McKay, D. S., Gibson, E. K., Jr., Thomas-Keprta, K. L., Vali, H., Romanek, C. S., Clemett, S. J., Chillier, X. D. F., Maechling, C. R., & Zare, R. N. (1996). Search for past life on Mars: Possible relic biogenic activity in Martian meteorite ALH84001. *Science, 273*(5277), 924-930. https://doi.org/10.1126/science.273.5277.924`,
      recallContent: [
        {
          prompt: "Name two of the four habits of a good field note.",
          answer:
            "Fix the record (time, date, place, unit, what you did); separate observation from inference on the page; record the doubt at the moment you feel it; and never overwrite the original, only add and date the addition.",
        },
        {
          prompt: "Why is a field note the only genre written before anyone knows what the finding means?",
          answer:
            "Because everything downstream is written by someone who already knows how the story ended. The field note is written at the moment of observation, which is why it holds uncertainty the later versions have lost.",
        },
      ],
    },
    {
      slug: "quiz-five-genres",
      title: "Section 1 quiz · Five genres, one discovery",
      section: "Section 1 · Five genres, one discovery",
      quiz: {
        shuffleOptions: true,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "What do the five genres in this course's spine mainly differ in?",
            options: [
              "The truth claim its author is making",
              "The number of sources it must cite",
              "The century in which it was invented",
              "The training required to publish it",
            ],
            correctIndex: 0,
            explanation:
              "Each genre makes a different promise about what is known. All five can be accurate and still say different things.",
            sourceLessonSlug: "five-genres-one-discovery",
          },
          {
            prompt: "What does a field note promise its reader?",
            options: [
              "What was seen, when, where, and the doubt",
              "What the finding will mean for the public",
              "That the observation has been peer reviewed",
              "That every alternative has been excluded",
            ],
            correctIndex: 0,
            explanation:
              "It is written before anyone knows what the finding will turn out to be, so the doubt is part of the record.",
            sourceLessonSlug: "five-genres-one-discovery",
          },
          {
            prompt: "Why does the course label its side by side passages as constructed?",
            options: [
              "Invented text passed off as a document is the error taught here",
              "Real documents from 1996 were too long to print in a lesson",
              "Copyright forbids reprinting any press release inside a course",
              "The authors of the real documents declined to be quoted at all",
            ],
            correctIndex: 0,
            explanation:
              "The label is part of the lesson rather than a disclaimer on it. Real documents arrive in lessons 4, 5 and 6.",
            sourceLessonSlug: "five-genres-one-discovery",
          },
          {
            prompt: "What is a chronicle organised by?",
            options: [
              "The year, with events listed under it",
              "The theme, with events grouped by kind",
              "The author, with entries signed by each",
              "The place, with one page per monastery",
            ],
            correctIndex: 0,
            explanation:
              "An annal attaches whatever the compiler judged worth recording to a date, in order.",
            sourceLessonSlug: "the-chronicle",
          },
          {
            prompt: "Why does the 793 annal record portents in the sky?",
            options: [
              "Because the compiler judged them meaningful events",
              "Because the compiler had no other news that year",
              "Because a bishop required them in every entry made",
              "Because the raiders themselves reported seeing them",
            ],
            correctIndex: 0,
            explanation:
              "To the compiler a portent is an event that happened and belongs under its year, exactly as the famine and the raid do.",
            sourceLessonSlug: "the-chronicle",
          },
          {
            prompt: "Why does this course decline to print a translation as the Chronicle entry?",
            options: [
              "Manuscripts disagree and each version is a translator's choice",
              "The Old English original has never been properly edited",
              "No published English translation of the annal exists yet",
              "Translations of the annal are all still under copyright",
            ],
            correctIndex: 0,
            explanation:
              "Printing one translation as the entry would quietly collapse the manuscript, the copy tradition and the translator's decisions into one thing.",
            sourceLessonSlug: "the-chronicle",
          },
          {
            prompt: "What does the disputed date of the Lindisfarne raid illustrate?",
            options: [
              "A copying error can survive in every later retelling",
              "A raid can be dated exactly from a single manuscript",
              "Annals were always written down within days of an event",
              "Monastic writers deliberately avoided dating any raids",
            ],
            correctIndex: 0,
            explanation:
              "The manuscripts give a January date, generally read as a copyist's slip for a June one. The correction is later readers' work, not the manuscript's.",
            sourceLessonSlug: "the-chronicle",
          },
          {
            prompt: "What makes a field note valuable?",
            options: [
              "Discipline at the moment of writing it",
              "Approval by the expedition's sponsor",
              "Length, since detail can be added later",
              "Publication soon after the fieldwork ends",
            ],
            correctIndex: 0,
            explanation:
              "Nothing later in the chain can restore an observation that was not recorded, or a doubt that was not written down.",
            sourceLessonSlug: "the-field-note",
          },
          {
            prompt: "What should a field note keep visibly separate on the page?",
            options: [
              "What was observed and what it might mean",
              "The weather and the time of each reading",
              "The writer's initials and the unit number",
              "The sketch and the written description",
            ],
            correctIndex: 0,
            explanation:
              "Once observation and inference are run together nobody can pull them apart later, including the person who wrote them.",
            sourceLessonSlug: "the-field-note",
          },
          {
            prompt: "What does the phrase consistent with claim?",
            options: [
              "That the evidence does not rule the idea out",
              "That the evidence rules every rival out",
              "That two teams reached the very same result",
              "That the result was checked by a referee",
            ],
            correctIndex: 0,
            explanation:
              "It is a statement about what the evidence fails to eliminate, and it is compatible with the claim being false.",
            sourceLessonSlug: "the-paper",
          },
          {
            prompt: "What is the structure of the ALH84001 paper's central argument?",
            options: [
              "Each feature has rivals; together they are evidence",
              "Each feature alone proves a biological origin",
              "One feature outweighs all the alternatives",
              "No alternative explanation was ever offered",
            ],
            correctIndex: 0,
            explanation:
              "The paper conceded non-biological explanations for each feature individually and rested its conclusion on the combination and their close association.",
            sourceLessonSlug: "the-paper",
          },
          {
            prompt: "Why are a paper's hedges described as load bearing?",
            options: [
              "Removing one changes the claim being made",
              "Journals count them when ranking a paper",
              "They shorten the paper for its reviewers",
              "They mark where the funding came from",
            ],
            correctIndex: 0,
            explanation:
              "Taking the hedges out does not simplify the claim. It replaces it with a different and stronger one the evidence does not support.",
            sourceLessonSlug: "the-paper",
          },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════════
    // Section 2 · From the paper to the feed
    // ══════════════════════════════════════════════════════════════════════════
    {
      slug: "press-release-institutional-voice",
      title: "5 · The press release: the institution's voice",
      section: "Section 2 · From the paper to the feed",
      body: `On 7 August 1996, more than a week before the paper appeared in print, NASA held a press conference at its Washington headquarters to announce the ALH84001 findings. The same day, the President of the United States made a statement about it from the White House.

Two institutions, one finding, and neither of them is a person.

## Who writes a press release

Nobody, in the sense you are used to. A press release has an institutional author. The byline is a logo. It is drafted by a communications office, checked by the researchers, checked again by people whose job is the institution's standing, and issued in the institution's name.

That is not a scandal. It is the genre. The interesting consequence is that a press release cannot say *I am not sure*, because institutions do not have doubts, only positions.

## What it is for

To be picked up.

A press release succeeds when journalists use it. That is its measurable outcome, and it is what the people writing it are evaluated on. Accuracy is a constraint on that goal, not the goal itself.

Say that plainly and it sounds cynical. It is not. Every genre has a success condition, and knowing it is how you read the document. A field note succeeds if a stranger can locate what it describes. A paper succeeds if it survives attack. A press release succeeds if it travels. None of these is a moral ranking.

## The four moves

**The frame arrives before the finding.** The evidence is about carbonate globules in a rock. The release is about whether we are alone in the universe. That frame is not in the data, and it is not argued for, because it does not have to be: the reader already cares about it.

**The hedge survives but moves down the page.** Look for *may*, *could*, *if confirmed*. They are usually still there. They are usually in paragraph four, and most readers stop at two.

**A named scientist supplies the enthusiasm.** The institution's own prose stays careful. The quoted researcher says the exciting thing. The excitement is then attributable to a person rather than to the institution, which is a genuinely clever piece of construction once you have seen it.

**The stake is never stated.** Funding, mission relevance, recruitment, rankings. Never mentioned, always present. This is the single most useful thing to ask about any institutional document: what does this organization get if this lands well?

## The conditional that fell out

The White House statement that day contained a conditional clause: *If this discovery is confirmed*.

That clause is the most important five words spoken in public about ALH84001, and it is the part almost nobody remembers. It was in the original. It survived the institution. It did not survive the retelling.

Keep that in view for the next lesson, because the usual story blames the newspapers, and the usual story is only partly right.

## The finding that makes this section honest

In 2014 the *BMJ* published a study by Sumner and colleagues that compared journal articles, the university press releases about them, and the resulting news coverage across a large sample of health research.

Their result: exaggeration in news stories was strongly associated with exaggeration already present in the press release. When the release overstated, the news usually did. When the release did not, the news usually did not either.

That matters for how you read the rest of this course. The distortion often enters the chain **before** the newsroom, at the point where a research institution describes its own work. That is a finding about incentives, not about villains, and it points your attention at the document most people never bother to read.

:::reveal Who is the author of a press release, and what follows from that? ||| An institution, not a person. The byline is effectively a logo, and an institution cannot write that it is unsure, because institutions hold positions rather than doubts.

:::reveal What is a press release's success condition? ||| That it gets picked up. Accuracy is a constraint on that goal rather than the goal itself, which is a fact about the genre and not an accusation against anyone.

:::reveal What did Sumner and colleagues (2014) find about news exaggeration? ||| That it was strongly associated with exaggeration already present in the university press release, so the distortion often enters before the newsroom.

:::reveal What is the one question to ask of any institutional document? ||| What does this organization get if this lands well? The stake is never stated and is always there.

## Sources
- Sumner, P., Vivian-Griffiths, S., Boivin, J., Williams, A., Venetis, C. A., Davies, A., Ogden, J., Whelan, L., Hughes, B., Dalton, B., Boy, F., & Chambers, C. D. (2014). The association between exaggeration in health related science news and academic press releases: Retrospective observational study. *BMJ, 349*, g7015. https://doi.org/10.1136/bmj.g7015
- National Aeronautics and Space Administration. (1996, August 7). *Meteorite yields evidence of primitive life on early Mars* [Press release]. NASA.`,
      recallContent: [
        {
          prompt: "What three hedges does the ALH84001 paper carry in its title alone?",
          answer:
            "Search for rather than discovery of, possible rather than confirmed, and relic meaning traces rather than anything living.",
        },
        {
          prompt: "What does the phrase consistent with commit an author to, and what does it not?",
          answer:
            "Only that the evidence does not rule the idea out. It does not commit the author to the idea being true, and it is usually compatible with several rival explanations at once.",
        },
      ],
    },
    {
      slug: "the-headline",
      title: "6 · The headline: where suggests becomes proves",
      section: "Section 2 · From the paper to the feed",
      body: `A headline is a separate document from the article beneath it, usually written by a different person, under constraints the reporter does not share.

That is not a conspiracy. It is production. Someone has to fit a claim into a space, make it legible on a phone, and make a reader stop. The reporter who spent two days on the piece is frequently not that person and frequently does not approve the result.

Knowing this changes what you do when a headline and an article disagree. The answer is not that someone lied. The answer is that you are reading two documents.

## The verb ladder

Watch what happens to one claim as the verb changes.

Scientists **report** traces consistent with past biological activity.
Scientists **find** possible signs of ancient life.
Scientists **discover** evidence of life on Mars.
Meteorite **proves** life existed on Mars.
Meteorite **rewrites** everything we knew about life.

Nothing about the evidence changed across those five lines. The verb did all of it. And each step is defensible on its own by the person who took it, which is how a chain of small reasonable steps ends somewhere unreasonable.

## What gets cut first

Compression removes things in a reliable order, and knowing the order tells you what to go looking for.

**The condition goes first.** *If confirmed*, *in mice*, *in a small sample*, *under laboratory conditions*. It is the easiest thing to cut because it is grammatically detachable.

**The subject goes second.** *Researchers say* becomes the subhead, then vanishes. Once the attribution is gone the claim is coming from nowhere, which reads as coming from everywhere.

**The number goes third.** Sample size, effect size, the range around an estimate. A headline almost never carries one, and when it does it is usually the largest one available.

## The question mark

*Life on Mars?* is a headline that asserts nothing and frames everything.

The question form is a real editorial tool with a real function: it signals that the piece is about an open question. It is also, used carelessly, a way of putting a claim in a reader's head without taking responsibility for it, because a question cannot be wrong.

The test is simple. Read the article and ask whether the question is answered in it. If the article answers *no*, or *probably not*, and the headline asks anyway, the headline is doing work the article does not support.

## Being fair to the newsroom

The previous lesson gave you the reason not to make this a story about lazy journalists: Sumner and colleagues found that exaggeration in news tracked exaggeration already in the press release.

Add to that the ordinary conditions of the work. A reporter covering science may have hours, not days, may not have the paper (only the release), may be covering three unrelated fields that week, and may have no control over the headline that ends up on the piece.

The useful response is not contempt. It is to read one step further up the chain than most people do, which usually takes about four minutes.

:::reveal Who usually writes a headline, and why does that matter? ||| Usually someone other than the article's author, working under space and attention constraints. When a headline and an article disagree you are reading two documents, not catching a liar.

:::reveal In what order does compression remove things from a claim? ||| The condition first, then the subject or attribution, then the numbers. Knowing the order tells you exactly what to go looking for.

:::reveal What is the test for a question-mark headline? ||| Read the article and see whether the question is answered in it. If the article says no or probably not, the headline is doing work the article does not support.

:::reveal Why is it inaccurate to blame the newsroom for most science exaggeration? ||| Because much of it is already present in the institution's own press release, and the reporter often has hours rather than days and no control over the headline.

## Sources
- Sumner, P., Vivian-Griffiths, S., Boivin, J., Williams, A., Venetis, C. A., Davies, A., Ogden, J., Whelan, L., Hughes, B., Dalton, B., Boy, F., & Chambers, C. D. (2014). The association between exaggeration in health related science news and academic press releases: Retrospective observational study. *BMJ, 349*, g7015. https://doi.org/10.1136/bmj.g7015
- Hyland, K. (1998). *Hedging in scientific research articles*. John Benjamins.`,
    },
    {
      slug: "the-post",
      title: "7 · The post: compression, stakes, and the missing source",
      section: "Section 2 · From the paper to the feed",
      body: `The last genre in the chain is the only one with no institution behind it, no editor above it, and no correction process after it.

It is also the one most people actually read.

## What a post is for

A post succeeds when it is shared. That is its entire success condition, and it is a much narrower one than a headline's, because a headline at least has to survive an editor.

Sharing runs on two things: how fast the thing can be understood, and how it makes the reader feel about themselves or about people they disagree with. A finding is a vehicle for both.

## What compression takes

The same order as the headline, only faster and further.

The condition goes. The attribution goes. The number goes. And then the last thing goes, which the headline usually keeps: **the source itself**.

A screenshot of a headline is two removes from the paper and looks like one. It carries the visual authority of a publication without any of the machinery that makes a publication checkable: no date you can trust, no link, no way to tell whether the piece was corrected an hour later.

## What actually spreads

In 2018 *Science* published a study by Vosoughi, Roy and Aral analyzing a very large set of stories spread on Twitter over more than a decade, classified as true or false by independent fact-checking organizations.

False stories spread farther, faster, deeper and more broadly than true ones. The effect was most pronounced for political stories. The authors found that false stories were more novel than true ones, and that responses to them carried more surprise and disgust, while true stories drew more sadness and trust.

One more finding matters for how you use this: bots accelerated true and false stories at about the same rate. The difference was people.

That is uncomfortable and it is also the most useful part, because it means the mechanism is not somebody else's malice. It is ordinary sharing behavior, including yours.

## No contempt, please

The person who shares an overstated post is not stupid. They are responding exactly as the genre is built to make them respond: quickly, on feeling, without a link, in a context that offers no obvious way to check and no reward for checking.

Anyone in this course who thinks they are immune has simply not noticed the last time it happened to them.

## Writing the honest version

The genre is not doomed. A post can be fast, interesting and accurate at once, and it costs about one extra line.

> **Constructed for this lesson.** Neither post below was published anywhere. Both are written to describe the same real finding, the 1996 ALH84001 announcement, in the same genre.

**Weak version.** Scientists found proof of life on Mars in a rock from Antarctica.

**Honest version.** A 1996 paper argued that features in a Martian meteorite were best explained by ancient microbial life. Most of that evidence has since been explained without biology. Link to the paper, plus what would settle it.

The second is barely longer. It names what the claim was, who made it, and what happened next, and it hands the reader the way to check. That is the whole technique: **a link and one line naming the limit.**

:::reveal What does a post lose that even a headline usually keeps? ||| The source. A screenshot of a headline is two removes from the paper and carries a publication's visual authority with none of its checkable machinery.

:::reveal What did Vosoughi, Roy and Aral (2018) report about how false and true stories spread? ||| False stories spread farther, faster, deeper and more broadly than true ones, most strongly for political stories, and bots accelerated both about equally, so the difference was people.

:::reveal What is the one-line technique for an honest post? ||| A link plus one line naming the limit: what the claim was, who made it, and what would settle it.

## Sources
- Vosoughi, S., Roy, D., & Aral, S. (2018). The spread of true and false news online. *Science, 359*(6380), 1146-1151. https://doi.org/10.1126/science.aap9559
- McKay, D. S., Gibson, E. K., Jr., Thomas-Keprta, K. L., Vali, H., Romanek, C. S., Clemett, S. J., Chillier, X. D. F., Maechling, C. R., & Zare, R. N. (1996). Search for past life on Mars: Possible relic biogenic activity in Martian meteorite ALH84001. *Science, 273*(5277), 924-930. https://doi.org/10.1126/science.273.5277.924`,
      recallContent: [
        {
          prompt: "In what order does compression strip a claim as it moves down the chain?",
          answer:
            "The condition first (if confirmed, in mice, in a small sample), then the subject or attribution, then the numbers. A claim with no attribution reads as coming from everywhere.",
        },
        {
          prompt: "Why is blaming the newsroom for science exaggeration only partly right?",
          answer:
            "Because Sumner and colleagues found news exaggeration tracked exaggeration already present in the institution's press release, and reporters often work from the release under severe time limits without controlling the headline.",
        },
      ],
    },
    {
      slug: "quiz-paper-to-feed",
      title: "Section 2 quiz · From the paper to the feed",
      section: "Section 2 · From the paper to the feed",
      quiz: {
        shuffleOptions: true,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "Who is the author of a press release?",
            options: [
              "The institution, whose logo is the byline",
              "The lead scientist, writing in first person",
              "The journal that accepted the paper for print",
              "The reporter who receives the embargoed copy",
            ],
            correctIndex: 0,
            explanation:
              "An institutional author cannot write that it is unsure, because institutions hold positions rather than doubts.",
            sourceLessonSlug: "press-release-institutional-voice",
          },
          {
            prompt: "What is a press release's success measured by?",
            options: [
              "Whether the finding gets picked up widely",
              "Whether the paper's hedges are preserved",
              "Whether reviewers accept the manuscript",
              "Whether the institution's grant is renewed",
            ],
            correctIndex: 0,
            explanation:
              "Accuracy is a constraint on that goal rather than the goal itself. Knowing a genre's success condition is how you read it.",
            sourceLessonSlug: "press-release-institutional-voice",
          },
          {
            prompt: "What did Sumner and colleagues (2014) find in the BMJ?",
            options: [
              "News exaggeration tracked press release wording",
              "News exaggeration was unrelated to the release",
              "Press releases rarely quoted the paper at all",
              "Journalists added most of the exaggeration seen",
            ],
            correctIndex: 0,
            explanation:
              "The distortion often enters the chain before the newsroom, at the point where an institution describes its own work.",
            sourceLessonSlug: "press-release-institutional-voice",
          },
          {
            prompt: "Which part of the 1996 White House statement dropped out of most retellings?",
            options: [
              "The conditional clause about confirmation",
              "The reference to billions of years passing",
              "The naming of the meteorite as 84001",
              "The description of Mars as a neighbor",
            ],
            correctIndex: 0,
            explanation:
              "The hedge was in the original and survived the institution. It did not survive the retelling.",
            sourceLessonSlug: "press-release-institutional-voice",
          },
          {
            prompt: "Who usually writes a headline?",
            options: [
              "Someone other than the article's writer",
              "The reporter who filed the article",
              "The scientist quoted in the article",
              "The press officer at the institution",
            ],
            correctIndex: 0,
            explanation:
              "When a headline and its article disagree, you are reading two documents produced under different constraints.",
            sourceLessonSlug: "the-headline",
          },
          {
            prompt: "What does a question mark headline do?",
            options: [
              "Frames a claim without asserting it",
              "Marks the article as an opinion piece",
              "Signals that the paper was retracted",
              "Shows the reporter reached no sources",
            ],
            correctIndex: 0,
            explanation:
              "Test it by reading the article. If the piece answers no, and the headline asks anyway, the headline is unsupported.",
            sourceLessonSlug: "the-headline",
          },
          {
            prompt: "What is the first thing cut when a claim is compressed?",
            options: [
              "The condition attached to it",
              "The name of the institution",
              "The date the work appeared",
              "The number of authors listed",
            ],
            correctIndex: 0,
            explanation:
              "Phrases like if confirmed or in a small sample are grammatically detachable, which makes them the cheapest thing to lose.",
            sourceLessonSlug: "the-headline",
          },
          {
            prompt: "Why is it unfair to blame the newsroom for every science exaggeration?",
            options: [
              "Much of it is already present in the release",
              "Headlines are now written entirely by machines",
              "Papers are written for other scientists to read",
              "Editors are not permitted to read the paper",
            ],
            correctIndex: 0,
            explanation:
              "Add ordinary conditions: hours rather than days, often only the release, and no control over the headline.",
            sourceLessonSlug: "the-headline",
          },
          {
            prompt: "What does a post most often lose that a headline keeps?",
            options: [
              "The source, after the subject and hedge",
              "The finding, which becomes a number",
              "The date, which the site adds back",
              "The image, stripped when it is shared",
            ],
            correctIndex: 0,
            explanation:
              "A screenshot of a headline is two removes from the paper and looks like one.",
            sourceLessonSlug: "the-post",
          },
          {
            prompt: "What did Vosoughi and colleagues (2018) report?",
            options: [
              "False news spread farther and faster online",
              "False news spread only inside small groups",
              "True news was shared more often than false",
              "Bots accounted for the whole difference seen",
            ],
            correctIndex: 0,
            explanation:
              "Bots accelerated true and false stories at about the same rate, so the difference in spread came from people.",
            sourceLessonSlug: "the-post",
          },
          {
            prompt: "What makes a post honest without making it dull?",
            options: [
              "A link and one line naming the limit",
              "A longer thread listing every caveat",
              "A screenshot of the headline it cites",
              "A disclaimer that nothing is proven yet",
            ],
            correctIndex: 0,
            explanation:
              "It names what the claim was, who made it, what happened next, and hands the reader a way to check.",
            sourceLessonSlug: "the-post",
          },
          {
            prompt: "Where does distortion most often enter the chain?",
            options: [
              "Before the newsroom, in the release",
              "Only in the post, after publication",
              "In the paper's own abstract wording",
              "At the journal's copy editing stage",
            ],
            correctIndex: 0,
            explanation:
              "That is the practical value of the Sumner finding: it tells you which document most people never read.",
            sourceLessonSlug: "press-release-institutional-voice",
          },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════════
    // Section 3 · The moves inside the sentence
    // ══════════════════════════════════════════════════════════════════════════
    {
      slug: "naming-as-a-claim",
      title: "8 · Naming as a claim: incognitum, primitive, prehistoric, discovered",
      section: "Section 3 · The moves inside the sentence",
      body: `Sections 1 and 2 worked at the scale of whole documents. This section goes down inside the sentence, to four small moves that do most of the work: the name, the missing actor, the hedge, and the citation.

Start with the name, because it is the one that hides best.

## A name that was honest about the gap

In the eighteenth century, large bones came out of the ground in the Ohio valley. They did not match an elephant, they did not match anything in the European record, and nobody could place them. Naturalists in Europe and North America referred to the animal as the *incognitum*: the unknown one.

That is a remarkable piece of writing. The name records exactly what was known, which was that something big had lived there and nobody could say what. It makes a claim about the state of knowledge rather than about the animal.

Most names do the opposite.

## Four names that argue

**Prehistoric.** Literally, before history. But history in that word means *the written record*, so a people who left no writing is classified as being before history itself. That is a claim about surviving documents, wearing the costume of a claim about time. Course 1 of this series made the same point about maps: an absence in an archive is not an absence in the world.

**Primitive.** In the ALH84001 paper the phrase *primitive life* is technical: simple, early, single-celled. In general use the same word carries a ranking of peoples. One word, two jobs, and the second job does not announce itself when the word travels out of the paper.

**Discovered.** The most consequential of the four. *Discovered* takes an event with at least two parties and awards the active role to one of them. Bones known to local people for generations become discovered when a naturalist arrives. Ask of any discovery sentence: known to whom, and unknown to whom? The answer is almost always in the sentence already, and almost always unstated. Course 2 of this series builds a whole lesson on this word.

**Tribe.** Applied to some peoples and never to others of comparable size and organization. The choice between *tribe*, *nation*, *kingdom* and *state* is made before any evidence is presented, and it decides in advance what kind of thing the reader thinks they are reading about.

## The rule

**A name is a compressed argument.**

It is an argument precisely because it does not look like one. A claim in a sentence invites disagreement. The same claim in a noun gets waved through, because the reader is busy processing the sentence the noun sits in.

## The question to ask

**What does this name save the writer from having to argue for?**

That is the whole technique, and it works on the flattering names as well as the insulting ones. *Renaissance*, *the Enlightenment*, *the developing world*, *reform*, *innovation*, *natural*: every one of them settles something in advance.

None of this means the words are unusable. It means that when a name is doing the argument, you should be able to say what the argument is.

:::reveal What did the name incognitum record, and why is that unusual? ||| It recorded the state of knowledge rather than a claim about the animal: something large had lived there and nobody could yet say what. Most names do the reverse.

:::reveal What does the word prehistoric actually divide on? ||| On whether a people left surviving writing, since history in that word means the written record. It is a claim about documents dressed as a claim about time.

:::reveal What is the question to ask of any loaded name? ||| What does this name save the writer from having to argue for? A claim inside a noun gets waved through in a way the same claim in a sentence would not.

## Sources
- Semonin, P. (2000). *American monster: How the nation's first prehistoric creature became a symbol of national identity*. New York University Press.
- Trouillot, M.-R. (1995). *Silencing the past: Power and the production of history*. Beacon Press.`,
      recallContent: [
        {
          prompt: "What is a post's success condition, and what does it strip that a headline keeps?",
          answer:
            "A post succeeds when it is shared. It strips the source itself, so a screenshot of a headline sits two removes from the paper while carrying a publication's visual authority.",
        },
        {
          prompt: "State the one-line technique for writing an honest post.",
          answer:
            "A link plus one line naming the limit: what the claim was, who made it, what happened to it since, and what would settle it.",
        },
      ],
    },
    {
      slug: "the-missing-actor",
      title: "9 · The passive voice and the missing actor",
      section: "Section 3 · The moves inside the sentence",
      body: `The passive voice is a grammatical construction, not a moral failing. This lesson is about one specific thing it lets a writer do: **leave the actor out.**

*The samples were heated to 300 degrees.* Who heated them does not matter; the procedure does. That is a good sentence.

*The village was cleared in 1953.* Who cleared it is the entire question.

Same construction. Completely different act.

## The test

**Rewrite it in the active voice and see who has to appear.**

If the rewrite is easy, the passive was a style choice and you can move on. If the rewrite is suddenly hard, if you find you cannot write the sentence without deciding something you were not planning to decide, that difficulty is information. It means the missing actor was carrying weight.

Try it on these. Every one is a real construction you will meet this week.

| Passive | Who is missing |
|---|---|
| Mistakes were made | Whoever made them |
| The land was settled | Whoever was already there, and whoever arrived |
| Jobs were lost | Whoever decided |
| The account was suspended | Whoever suspended it |
| Enslaved people were brought to the colony | Whoever traded, shipped and bought them |

That last one is the version this catalog's other courses work on directly, and it is worth naming the general rule out loud: **when a sentence is about harm, a missing actor is not a style question.**

## The other ways an actor disappears

The passive gets all the attention, and it is not even the most effective method.

**Nominalisation.** Turn the verb into a noun and the actor evaporates while the sentence stays active. *The removal of the community.* Removal by whom? *The acquisition of the land.* Acquired from whom, on what terms? There is no passive here at all.

**The agentless metaphor.** *The region saw decades of unrest. The era witnessed the decline of the industry.* Regions do not see and eras do not witness. These sentences have a subject that cannot act, which is a very efficient way of having no actor at all.

**The abstraction as subject.** *Policy dictated that families relocate.* Policies are written by people who can be named.

## Where the blanket rule goes wrong

You have probably been told to avoid the passive voice, usually with George Orwell's 1946 essay cited somewhere nearby.

Orwell's essay is worth reading and its central concern is right: language can be used to make bad things sound acceptable. His specific rule about the passive is not, and the evidence is close at hand. The linguist Geoffrey Pullum has documented both that the anti-passive advice is routinely given by people who cannot reliably identify a passive, and that Orwell's own prose uses passives at an ordinary rate.

So do not carry away *passive bad*. Carry away this instead: **the passive is a tool for controlling where the reader's attention goes, and the actor is the thing it most often removes.** Sometimes that is correct and kind. Sometimes it is the whole argument.

## Reading for it

Two habits.

When you meet a sentence about something bad happening, ask who did it, and notice whether the sentence tells you.

When you write about something you did badly, notice how strongly the passive suggests itself. That pull is the clearest demonstration of the point available, and it costs nothing to observe.

:::reveal What does the passive voice make possible that the active does not? ||| Leaving the actor out of the sentence entirely, while the sentence stays grammatical and reads as neutral.

:::reveal What is the test this lesson gives, and what does difficulty in applying it mean? ||| Rewrite the sentence in the active voice and see who has to appear. If the rewrite suddenly becomes hard, the missing actor was carrying weight.

:::reveal Name two ways an actor can vanish without any passive voice at all. ||| Nominalisation (the removal of the community, the acquisition of the land) and the agentless metaphor (the region saw, the era witnessed), plus an abstraction used as the subject.

:::reveal Why is a blanket ban on the passive voice wrong? ||| Because method writing genuinely needs it, and the rule's most famous advocate used passives at an ordinary rate himself. The passive is a tool for directing attention, not a fault.

## Sources
- Orwell, G. (1946). Politics and the English language. *Horizon, 13*(76), 252-265.
- Pullum, G. K. (2014). Fear and loathing of the English passive. *Language & Communication, 37*, 60-74. https://doi.org/10.1016/j.langcom.2013.08.009`,
    },
    {
      slug: "hedging-honestly",
      title: "10 · Hedging honestly versus hedging to hide",
      section: "Section 3 · The moves inside the sentence",
      body: `Lesson 4 said a paper's hedges are load bearing. That is true, and it is only half the story, because the same words that carry honest uncertainty are also the standard equipment for saying nothing while sounding careful.

Both kinds of hedge use *may*, *suggests*, *is associated with*, *has been linked to*. You cannot tell them apart by vocabulary. You can tell them apart by structure.

## The honest hedge

An honest hedge does three things:

1. It **names who is uncertain**.
2. It **names what exactly is uncertain**, not just that something is.
3. It **names what would settle it**.

From the constructed paper paragraph in lesson 1: *the stratigraphic association is not secure, because the overlying sediment is unconsolidated and downward movement cannot be excluded.* You know who (the authors), what (whether the seeds really belong to that layer), and what would help (a context where the sediment is not loose).

That sentence tells you how to disagree with it. That is the mark.

## The hiding hedge

A hiding hedge does the opposite on all three counts.

**No actor.** *It is believed that.* By whom? *Some have suggested.* Who, and how many is some? *It is widely reported.* Reported by whom, from what?

**No threshold.** *Up to 40 per cent* includes zero. *As much as* includes as little as. *Results may vary* varies from what to what?

**No remedy.** Nothing named would settle it. This is the deepest tell, because a claim nobody could ever check is not a weak claim, it is a claim of a different kind.

## The three-question test

Put any hedged sentence through these:

**Who is uncertain?** If the answer is nobody in particular, the hedge is doing concealment.

**Uncertain about what, exactly?** If the answer is the whole thing, vaguely, the hedge is doing concealment.

**What would settle it?** If nothing would, you are not looking at a hedge at all. You are looking at a claim built so it can never be wrong.

## The series' own favorite hedge

This series uses one hedge more than any other, and it is worth naming here rather than pretending otherwise: **may have inspired**.

Fossil bones *may have inspired* the griffin. Dwarf elephant skulls *may have inspired* the cyclops. Those are good, interesting stories and the phrase is doing real work: it marks a resemblance that has been noticed without asserting a line of descent that nobody has demonstrated.

It is also, used carelessly, the perfect hiding hedge. Nothing would settle it, because *inspired* has no test. Run the three questions on it and watch what happens.

The honest version puts the uncertainty in the open: *this resemblance has been argued for by these scholars, contested by these, and here is the evidence that would decide it.* That is longer. It is also the difference between teaching a claim and repeating one.

Course 2 of this series makes that phrase the subject of an entire lesson, and this is why.

## The habit

When you write, hedge because you are actually uncertain, and say what about. When you read, treat a hedge as a question you have been handed rather than an answer.

:::reveal What three things does an honest hedge name? ||| Who is uncertain, what exactly is uncertain, and what would settle it. A sentence that does all three tells you how to disagree with it.

:::reveal What is the deepest tell of a hiding hedge? ||| That nothing named would settle it. A claim nobody could ever check is not a weak claim, it is a different kind of claim.

:::reveal Run the three-question test on the phrase may have inspired. Where does it fail? ||| At the third question. Inspired has no test, so nothing would settle it, which is why the honest version has to name who argued it, who contested it, and what evidence would decide.

## Sources
- Fahnestock, J. (1986). Accommodating science: The rhetorical life of scientific facts. *Written Communication, 3*(3), 275-296. https://doi.org/10.1177/0741088386003003001
- Hyland, K. (1998). *Hedging in scientific research articles*. John Benjamins.`,
      recallContent: [
        {
          prompt: "What is the test for whether a missing actor is a style choice or a claim?",
          answer:
            "Rewrite the sentence in the active voice and see who has to appear. If the rewrite becomes hard, because you cannot write it without deciding something, the missing actor was carrying weight.",
        },
        {
          prompt: "Name two ways to remove an actor from a sentence without using the passive voice.",
          answer:
            "Nominalisation, turning the verb into a noun (the removal of the community), and the agentless metaphor, giving the sentence a subject that cannot act (the region saw, the era witnessed).",
        },
      ],
    },
    {
      slug: "citation-with-a-job",
      title: "11 · Citation as a genre convention with a job",
      section: "Section 3 · The moves inside the sentence",
      body: `A citation is not decoration, and it is not a tax the teacher makes you pay. It is an **instruction**: here is how to check me.

Read it that way and every rule about citation format stops being arbitrary.

## What a citation has to deliver

Two things, and most people only think about the first.

**Enough to find the exact thing.** Author, date, title, where it lives, and for anything digital a stable identifier such as a DOI. Page or section for a quotation, because *somewhere in this 400-page book* is not an instruction anyone can follow.

**Enough to know what kind of thing it is.** This is the half that gets skipped, and it is the half this course cares about. A reader should be able to tell from the citation alone whether they are being pointed at a peer-reviewed paper, a preprint that has not been reviewed, a press release, a government dataset, a news article, or somebody's blog.

Those are not interchangeable, and by now you know exactly why: they are different genres making different promises.

## APA 7, in the amount you need

This catalog uses APA 7. The shape:

In the text, author and year: (Vosoughi et al., 2018). With a direct quotation, add the page or section.

In the reference list, alphabetical by author: Author, A. A. (Year). Title of the work in sentence case. *Source*, volume(issue), pages. DOI or URL.

That is most of it. The details matter less than the principle they serve, which is that every entry should let a stranger reach the same document you had.

## The four ways a citation fails

**The dead pointer.** A link that has rotted, an edition that does not exist, a page number from a different printing. The citation looks complete and leads nowhere.

**The wrong tier.** A primary claim supported by a secondary source that was itself citing something else. Course 1 of this series named this: repetition is not corroboration. A citation to a summary of a study is not a citation to the study.

**The citation that does not support its sentence.** Extremely common and almost never checked. The source is real, findable, and says something adjacent to the claim rather than the claim. Nobody catches it, because checking takes four minutes and reading does not.

**The pile.** Six citations on a sentence nobody would dispute, and none on the contested one two lines down. Density of citation is not the same as support, and a wall of references is a very effective way to look thorough.

## What citation practice can build on its own

In 2009 the *BMJ* published an analysis by Steven Greenberg tracing the citation network behind a widely held belief in one biomedical field. Following the citations back showed a structure where a small amount of primary data was cited, re-cited and cited again through review articles and commentaries until the belief was supported by an impressive volume of references and a very thin base of evidence.

That is the same failure course 1 of this series taught with the island-whale story, measured in a modern field with modern tools. Ten sources are ten pieces of evidence only if the ten are independent.

## The assignment that goes with this lesson

There is one, and you can do it today: **check one citation.**

Take something you are reading, pick one reference, and follow it. Before you open it, write down what you expect it to say. Then read enough of it to see whether it supports the sentence that cited it.

Most people have never done this once. It takes a few minutes, it is occasionally uncomfortable, and it will change how you read faster than anything else in this course. The two graded assignments in section 4 are, in effect, this exercise done properly and written up.

:::reveal What is a citation an instruction to do? ||| To check the writer against the source. Every formatting rule exists to make that instruction followable by a stranger.

:::reveal What is the second thing a citation must deliver, beyond enough to find the document? ||| Enough to know what KIND of document it is: a peer-reviewed paper, a preprint, a press release, a dataset, a news article, or a blog. Those make different promises.

:::reveal What did Greenberg (2009) show by tracing a citation network? ||| That a thin base of primary data can be cited and re-cited through reviews and commentaries until a belief carries an impressive volume of references and very little independent evidence.

:::reveal Which of the four citation failures is hardest to catch, and why? ||| The citation that does not support the sentence it is attached to. The source is real and findable and says something adjacent, and nobody checks, because checking takes minutes and reading does not.

## Sources
- American Psychological Association. (2020). *Publication manual of the American Psychological Association* (7th ed.). https://doi.org/10.1037/0000165-000
- Greenberg, S. A. (2009). How citation distortions create unfounded authority: Analysis of a citation network. *BMJ, 339*, b2680. https://doi.org/10.1136/bmj.b2680`,
    },
    {
      slug: "quiz-moves-inside-the-sentence",
      title: "Section 3 quiz · The moves inside the sentence",
      section: "Section 3 · The moves inside the sentence",
      quiz: {
        shuffleOptions: true,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "What did calling the Ohio valley animal the incognitum do?",
            options: [
              "Named the gap in what was known",
              "Named the finder of the first bones",
              "Named the county the bones came from",
              "Named the year the bones were cataloged",
            ],
            correctIndex: 0,
            explanation:
              "It made a claim about the state of knowledge rather than about the animal, which is the reverse of what most names do.",
            sourceLessonSlug: "naming-as-a-claim",
          },
          {
            prompt: "What does the word prehistoric literally divide on?",
            options: [
              "Whether a people left writing behind",
              "Whether a people built in stone",
              "Whether a people farmed or hunted",
              "Whether a people kept a calendar",
            ],
            correctIndex: 0,
            explanation:
              "History in that word means the written record, so the term is a claim about surviving documents dressed as a claim about time.",
            sourceLessonSlug: "naming-as-a-claim",
          },
          {
            prompt: "What does the course say a name is?",
            options: [
              "A compressed argument",
              "A neutral label",
              "A legal claim",
              "A translation",
            ],
            correctIndex: 0,
            explanation:
              "It works as an argument precisely because it does not look like one. A claim inside a noun gets waved through.",
            sourceLessonSlug: "naming-as-a-claim",
          },
          {
            prompt: "What question should you ask of a loaded name?",
            options: [
              "What does it save you arguing for",
              "Who first wrote it down in print",
              "How many languages use it today",
              "Whether a dictionary still lists it",
            ],
            correctIndex: 0,
            explanation:
              "It applies to flattering names as much as insulting ones. Renaissance and reform settle things in advance too.",
            sourceLessonSlug: "naming-as-a-claim",
          },
          {
            prompt: "What does the passive voice make possible?",
            options: [
              "Leaving the actor out of the sentence",
              "Putting the sentence in the past tense",
              "Removing the object of the sentence",
              "Turning a statement into a question",
            ],
            correctIndex: 0,
            explanation:
              "That is sometimes correct, as in a method section, and sometimes the whole argument, as in a sentence about harm.",
            sourceLessonSlug: "the-missing-actor",
          },
          {
            prompt: "When is a missing actor a claim rather than a style choice?",
            options: [
              "When who did it is the thing at issue",
              "When the sentence describes a method",
              "When the verb is longer than the noun",
              "When the writer is a named eyewitness",
            ],
            correctIndex: 0,
            explanation:
              "The samples were heated is fine. The village was cleared is not, because the actor is the entire question.",
            sourceLessonSlug: "the-missing-actor",
          },
          {
            prompt: "What is the test this lesson gives for a passive sentence?",
            options: [
              "Rewrite it active and see who appears",
              "Count the passives in each paragraph",
              "Replace every passive with an active",
              "Check whether the verb is a Latin one",
            ],
            correctIndex: 0,
            explanation:
              "If the rewrite suddenly gets hard, that difficulty is information: the missing actor was carrying weight.",
            sourceLessonSlug: "the-missing-actor",
          },
          {
            prompt: "Why is a blanket ban on the passive voice wrong?",
            options: [
              "Method writing needs it, and Orwell used it",
              "Passives entered English only in the 1800s",
              "Every major style guide now recommends it",
              "Editors cannot detect a passive reliably",
            ],
            correctIndex: 0,
            explanation:
              "Pullum documented both that the advice is given by people who misidentify passives and that Orwell's own prose used them at an ordinary rate.",
            sourceLessonSlug: "the-missing-actor",
          },
          {
            prompt: "What does an honest hedge include that a hiding one does not?",
            options: [
              "What would settle the question",
              "A number rounded to one figure",
              "A promise to revisit it later",
              "The name of the funding body",
            ],
            correctIndex: 0,
            explanation:
              "It also names who is uncertain and what exactly they are uncertain about, so the reader knows how to disagree.",
            sourceLessonSlug: "hedging-honestly",
          },
          {
            prompt: "What is wrong with the construction it is believed that?",
            options: [
              "Nobody is named as believing it",
              "Belief has no place in writing",
              "It is grammatically incorrect",
              "It can only refer to the past",
            ],
            correctIndex: 0,
            explanation:
              "No actor, and usually no threshold and no remedy either. It is the passive-voice problem wearing a hedge.",
            sourceLessonSlug: "hedging-honestly",
          },
          {
            prompt: "What is a citation an instruction to do?",
            options: [
              "Check the writer against the source",
              "Read the field's whole literature",
              "Credit the university that paid for it",
              "Show the reader the writer has read",
            ],
            correctIndex: 0,
            explanation:
              "Every formatting rule exists to make that instruction followable by a stranger who was not there.",
            sourceLessonSlug: "citation-with-a-job",
          },
          {
            prompt: "What did Greenberg (2009) show about citation networks?",
            options: [
              "Citation can manufacture authority from thin data",
              "Citation counts predict a paper's accuracy well",
              "Most cited papers are read by those citing them",
              "Review articles cite primary data most often",
            ],
            correctIndex: 0,
            explanation:
              "The same failure course 1 taught with the island-whale story, measured in a modern field: repetition is not corroboration.",
            sourceLessonSlug: "citation-with-a-job",
          },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════════
    // Section 4 · Reading against the grain, and writing it yourself
    // ══════════════════════════════════════════════════════════════════════════
    {
      slug: "the-caption",
      title: "12 · The caption: an image's argument",
      section: "Section 4 · Reading against the grain, and writing it yourself",
      body: `A published image is never alone on the page. Three separate pieces of text travel with it, and they have three different readers and three different jobs. Most people writing on the internet use one of them and call it done.

## The three texts

**Alt text.** Written for a reader who cannot see the image, including anyone using a screen reader and anyone whose connection failed. Its job is to describe. *A woman in a coat standing outside a shuttered shopfront, holding a folder.* It is not the place for your argument, and it should not simply repeat the caption, because then a reader who cannot see the image gets the interpretation and never gets the picture.

**Caption.** Written for a reader who can see the image and does not know why it is here. Its job is to say what to look at and why this picture is on this page. A caption **selects**. That makes it an argument, whether or not its author thought of it that way.

**Credit.** Written for a reader who wants to check. Creator, title if it has one, date, the institution holding it, and the rights status. A credit line is the citation of an image, and everything lesson 11 said about citation applies to it exactly.

Three texts, three readers. A figure missing any of them is incomplete, and the one most often missing is the alt text, which is also the only one with a legal and ethical dimension attached to it.

## Same image, two arguments

> **Constructed for this lesson.** Neither caption below was published anywhere. Both were written for this course to describe the same imagined photograph: a woman standing in front of a closed shopfront, holding a folder.

**Caption A.** A resident waits outside the clinic that closed in March.

**Caption B.** A resident outside the former clinic, one of eleven closures in the county since 2019.

Caption A points at a person and produces sympathy for an individual. Caption B points at a pattern and produces a question about policy. Nothing in the photograph changed. The caption decided what the photograph was evidence of.

That is why a caption is not a label. It is the sentence that tells the reader which claim the picture supports.

## A real case with a documented disagreement

The best studied example in photography is the 1936 photograph now universally called *Migrant Mother*, made by Dorothea Lange for the Farm Security Administration at a pea pickers' camp near Nipomo, California. It became one of the most reproduced images of the Depression, and its original catalog caption in the government file is a plain descriptive line about a destitute pea picker and her children.

Two things happened afterwards that make it useful here.

**The account attached to the image was disputed by its subject.** The woman was identified decades later as Florence Owens Thompson. She said publicly that she felt the photograph had been taken and used without benefit to her family, and her family disputed elements of the account that had circulated with the picture, including the detail about the family having sold the tyres from their car.

**The title did the work the caption used to do.** *Migrant Mother* is not a description. It is a category, and it converted a specific woman at a specific camp on a specific week into a symbol. That conversion is exactly what made the picture powerful and exactly what Thompson objected to.

Hold both halves. The photograph is genuinely great and it genuinely did political work that mattered. It is also a document with a subject who had her own account, and the two do not have to be reconciled to both be recorded. Noting where sources disagree, rather than choosing the tidier one, is the habit this whole series is built on.

## The practical rule

When you publish an image, write all three texts, and write the caption last, after you have decided what claim the picture is being asked to support. If you cannot say what the picture is evidence of, the caption will say it for you and you will not have chosen it.

When you read an image, read the caption as a claim and ask what a different caption would have made the same picture mean.

:::reveal Name the three texts that travel with a published image and who each is written for. ||| Alt text, for a reader who cannot see the image; the caption, for a reader who can see it and does not know why it is here; and the credit, for a reader who wants to check the source and rights.

:::reveal Why is a caption an argument rather than a label? ||| Because it selects. It tells the reader which claim the picture supports, and a different caption on the same photograph produces a different claim.

:::reveal What do the disputes around the 1936 Nipomo photograph illustrate about captions and titles? ||| That the words attached to a picture can be contested by the person in it, and that a title like Migrant Mother converts a specific person into a category, which is both what gave it force and what its subject objected to.

## Sources
- Gordon, L. (2009). *Dorothea Lange: A life beyond limits*. W. W. Norton.
- Library of Congress. (n.d.). *Farm Security Administration/Office of War Information black and white negatives*. Prints and Photographs Division. https://www.loc.gov/pictures/collection/fsa/`,
      recallContent: [
        {
          prompt: "What are the three questions to put to any hedged sentence?",
          answer:
            "Who is uncertain? Uncertain about what, exactly? And what would settle it? If nothing would settle it, the sentence is not a hedge but a claim built so it can never be wrong.",
        },
        {
          prompt: "Name two of the four ways a citation fails.",
          answer:
            "The dead pointer that leads nowhere; the wrong tier, citing a summary for a primary claim; the citation that does not actually support its sentence; and the pile, heavy citation on an undisputed sentence and none on the contested one.",
        },
      ],
    },
    {
      slug: "reading-against-the-grain",
      title: "13 · Reading against the grain",
      section: "Section 4 · Reading against the grain, and writing it yourself",
      body: `Reading **with** the grain means following the author's argument: what do they want me to conclude, and how do they get me there? It is the reading you were taught, it is most of what school assesses, and it is genuinely necessary.

Reading **against** the grain asks a different question: **what did this author assume I would accept without argument?**

Those assumptions are the load-bearing part of most texts, and they are almost never the part under discussion.

## How to find an assumption

Look for the sentences carrying **no evidence**, not because the author was lazy but because none seemed necessary.

An author argues for what they expect to be challenged on. Everything they expect you to nod along to arrives bare. So the unsupported sentences are not the weak points of the text; they are the map of what the author believed you already shared.

Run it on the documents from this course.

**The press release.** *A finding that could reshape the story of the continent's first arrivals.* No evidence is offered that reshaping the story matters, because the reader is assumed to care about firsts. That assumption is doing more work than any sentence in the document.

**The chronicle.** The 793 annal never argues that portents belong in a year's record. It does not occur to the compiler that a reader might ask.

**The paper.** Here is the contrast that makes the technique visible. The ALH84001 paper does **not** assume that a collection of individually explicable features adds up to more than its parts. It argues for it, briefly and explicitly, because it expected exactly that challenge from exactly those readers. Assumption and argument are the same claim in two different genres.

## Read the genre's silences too

Beyond what one author assumed, ask what a genre **structurally never mentions**.

A press release never mentions what the institution gains if the finding lands well. A headline never mentions sample size. A field note never mentions why the project was funded. A post never mentions what the poster did not read.

These are not omissions by individuals. They are properties of the form, which means you can predict them before you open the document, and go looking.

## The two failure modes

**Reading against the grain as a party trick.** You can do this to any text and it will always produce something, which means producing something is not evidence that you found anything. The discipline is to name the assumption and then ask whether it is actually false. Most assumptions are fine. *The reader cares about firsts* is probably true. The point is to see it, not to be impressed by having seen it.

**Applying it only to opponents.** This is the serious one. A method you use exclusively on people you disagree with is not a method, it is a weapon, and it will make you more confident and less accurate at the same time.

So the exercise is the reverse: take something you agree with, something you have shared or cited, and find the sentence in it that carries no evidence because none seemed necessary. That is the version of this skill worth having, and it is the version almost nobody practises.

## What you now have

Thirteen lessons, one method. Ask what a document was written to do and for whom. Follow a claim up the chain to the document it started in. Watch the four small moves: the name, the missing actor, the hedge, the citation. Then read for what nobody bothered to argue for.

The rest of this section is production. One drill, then two graded assignments in which you do this on real material and write it up with sources.

:::reveal What does reading against the grain look for? ||| What the author assumed you would accept without argument, which is usually the load-bearing part of a text and almost never the part under discussion.

:::reveal How do you spot an assumption on the page? ||| Look for the sentences carrying no evidence, because an author argues for what they expect to be challenged on and leaves bare what they expect you to share.

:::reveal Why must you apply this method to texts you agree with? ||| Because a method used only on opponents is not a method. Used one-sidedly it makes a reader more confident and less accurate at the same time.

## Sources
- Booth, W. C., Colomb, G. G., Williams, J. M., Bizup, J., & FitzGerald, W. T. (2016). *The craft of research* (4th ed.). University of Chicago Press.
- Trouillot, M.-R. (1995). *Silencing the past: Power and the production of history*. Beacon Press.`,
    },
    {
      slug: "quiz-caption-grain-and-spine",
      title: "Section 4 quiz · The caption, the grain, and the whole spine",
      section: "Section 4 · Reading against the grain, and writing it yourself",
      quiz: {
        shuffleOptions: true,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "Who is alt text written for?",
            options: [
              "A reader who cannot see the image",
              "An editor checking the caption text",
              "A search engine ranking the page",
              "The archive that holds the print",
            ],
            correctIndex: 0,
            explanation:
              "It describes the picture. Repeating the caption there hands a reader the interpretation and never gives them the image.",
            sourceLessonSlug: "the-caption",
          },
          {
            prompt: "What is a caption's job?",
            options: [
              "Say what to look at and why",
              "Repeat the alt text in brief",
              "List the file's technical data",
              "Name the page it appears on",
            ],
            correctIndex: 0,
            explanation:
              "A caption selects, which is what makes it an argument rather than a label.",
            sourceLessonSlug: "the-caption",
          },
          {
            prompt: "What belongs in a credit line?",
            options: [
              "Creator, date, holder, and rights",
              "Camera, lens, exposure, and film",
              "Caption, alt text, and a summary",
              "Editor, printer, and page number",
            ],
            correctIndex: 0,
            explanation:
              "A credit is the citation of an image, so everything lesson 11 said about citation applies to it.",
            sourceLessonSlug: "the-caption",
          },
          {
            prompt: "What does changing a photograph's caption change?",
            options: [
              "The claim the picture is making",
              "The rights the holder can assert",
              "The resolution the file is served at",
              "The alt text a reader will hear",
            ],
            correctIndex: 0,
            explanation:
              "Nothing in the photograph moves. The caption decides what the photograph is evidence of.",
            sourceLessonSlug: "the-caption",
          },
          {
            prompt: "What do the disputes around the 1936 Nipomo photograph show?",
            options: [
              "A caption's details can be disputed later",
              "A caption must match the file name given",
              "A photographer's notes are never archived",
              "A subject always approves the wording used",
            ],
            correctIndex: 0,
            explanation:
              "Its subject gave her own account and her family contested elements of the circulating one. Recording the disagreement beats choosing the tidier version.",
            sourceLessonSlug: "the-caption",
          },
          {
            prompt: "What does reading against the grain look for?",
            options: [
              "What the author assumed you would accept",
              "What the author's conclusion actually is",
              "Which sources the author cited the most",
              "Where the author's argument is strongest",
            ],
            correctIndex: 0,
            explanation:
              "The assumptions are usually load bearing and almost never the part of the text under discussion.",
            sourceLessonSlug: "reading-against-the-grain",
          },
          {
            prompt: "How do you spot an assumption in a text?",
            options: [
              "It carries no evidence, because none seemed needed",
              "It sits in the opening sentence of the piece",
              "It is the claim the author repeats most often",
              "It is the sentence carrying the longest citation",
            ],
            correctIndex: 0,
            explanation:
              "An author argues for what they expect to be challenged on, so the bare sentences map what they thought you already shared.",
            sourceLessonSlug: "reading-against-the-grain",
          },
          {
            prompt: "Why apply this method to a text you agree with?",
            options: [
              "A method used only on opponents is not one",
              "Texts you agree with are usually the weakest",
              "Agreement makes the assumptions much louder",
              "Editors expect the method to look balanced",
            ],
            correctIndex: 0,
            explanation:
              "Used one-sidedly it makes a reader more confident and less accurate at the same time.",
            sourceLessonSlug: "reading-against-the-grain",
          },
          {
            prompt: "What happens to a claim between the paper and the headline?",
            options: [
              "A hedged claim becomes an unhedged one",
              "A cited claim picks up two more sources",
              "A narrow claim is restricted even further",
              "A named author replaces the institution",
            ],
            correctIndex: 0,
            explanation:
              "The condition goes first, then the attribution, then the numbers. Each step is defensible and the destination is not.",
            sourceLessonSlug: "the-headline",
          },
          {
            prompt: "Which question works on every genre in this course?",
            options: [
              "What was this written to do, and for whom",
              "How many readers has it reached since then",
              "Which of its sentences is the most quoted",
              "How long did its author spend writing it",
            ],
            correctIndex: 0,
            explanation:
              "It is the same question course 1 of this series asked of a map, and it is the whole method.",
            sourceLessonSlug: "five-genres-one-discovery",
          },
          {
            prompt: "What do a missing actor and a loaded name have in common?",
            options: [
              "Both settle a question without arguing it",
              "Both are errors that a copy editor removes",
              "Both appear only in institutional writing",
              "Both were banned by Orwell's 1946 essay",
            ],
            correctIndex: 0,
            explanation:
              "A claim inside a noun, or a claim made by an absence, never has to face the disagreement a claim in a sentence would.",
            sourceLessonSlug: "the-missing-actor",
          },
          {
            prompt: "What separates a hedge that informs from one that hides?",
            options: [
              "Whether it names what would settle it",
              "Whether it appears near a citation",
              "Whether it uses may or might as a verb",
              "Whether the author is a named specialist",
            ],
            correctIndex: 0,
            explanation:
              "Both kinds use the same vocabulary, so structure separates them: who is uncertain, about what, and what would resolve it.",
            sourceLessonSlug: "hedging-honestly",
          },
        ],
      },
    },
    {
      slug: "exercise-three-genres",
      title: "14 · Exercise: one paragraph, three genres, one move at a time",
      section: "Section 4 · Reading against the grain, and writing it yourself",
      body: `Assignment 15 asks you to write one discovery three times, at paragraph length, and a human being reads it. This drill is the warm up for that, and it is deliberately narrower.

Every item below is a single move you can get exactly right or exactly wrong: convert one passive clause to active, name the actor a sentence has hidden, copy out the word doing the hedging, or name the genre from its job. Type the answer. Spelling is checked forgivingly, and common variants are accepted.

Why so small? Because this drill is graded by matching your text against a key, and matching cannot fairly judge a paragraph. Two good rewrites of the same sentence look nothing alike, and a checker that insists on one of them is measuring guesswork about the key rather than skill. The long rewriting belongs where a person reads it, which is the next two lessons. Choosing a widget that fits what you are actually testing is itself part of this course.

Work through it twice if the first pass is rough. The moves are the whole point, and they are small enough to become automatic.`,
      exercise: {
        instructions:
          "Type the missing word or short phrase. Case and accents are forgiven, and common variants are accepted.",
        items: [
          {
            prompt:
              "Active-voice rewrite, one word. Passive: The specimen was catalogued in 1931. Active: The museum ___ the specimen in 1931.",
            answer: "cataloged",
            accept: ["cataloged"],
            hint: "The verb keeps its meaning; only the actor moves to the front.",
            explanation:
              "Naming the museum costs four words and tells the reader who is answerable for the record.",
          },
          {
            prompt:
              "Passive: The funding was cut. The record shows the state legislature did it. Active: The state legislature ___ the funding.",
            answer: "cut",
            accept: [],
            hint: "This verb does not change form between the two voices.",
            explanation:
              "When a sentence is about harm, the missing actor is not a style question. Here the actor is on the record and can simply be named.",
          },
          {
            prompt:
              "In this course's vocabulary, one word for the person or body a passive clause leaves out.",
            answer: "actor",
            accept: ["the actor", "agent", "the agent"],
            hint: "Lesson 9 is named after this word.",
            explanation:
              "The passive voice is a tool for controlling attention, and the actor is what it most often removes.",
          },
          {
            prompt:
              "Nominalisation hides an actor with no passive at all. Turn the noun back into a verb, one word. Given: The removal of the community began in 1953. Rewrite: The council ___ the community in 1953.",
            answer: "removed",
            accept: [],
            hint: "The noun in the original is removal.",
            explanation:
              "Removal by whom, from where, on whose authority? Turning the noun back into a verb forces all three questions into the open.",
          },
          {
            prompt:
              "Rewrite with a real actor, one word. Given: The region saw the closure of eleven clinics. Rewrite: The county ___ eleven clinics.",
            answer: "closed",
            accept: [],
            hint: "Regions cannot see, so the sentence needs a subject that can act.",
            explanation:
              "The agentless metaphor is the most efficient way to have no actor: the sentence stays active while its subject is incapable of doing anything.",
          },
          {
            prompt:
              "Copy the two-word hedge from this sentence: The isotope values are consistent with a biological origin.",
            answer: "consistent with",
            accept: [],
            hint: "It is the phrase that says what the evidence fails to eliminate.",
            explanation:
              "Consistent with is a statement about what has not been ruled out, and it is compatible with the claim being false.",
          },
          {
            prompt: "Copy the single word carrying the hedge: The find may indicate an earlier arrival.",
            answer: "may",
            accept: [],
            hint: "One syllable, and the sentence collapses into an assertion without it.",
            explanation:
              "Drop that word and the sentence becomes a claim the evidence does not support. This is the hedge doing load-bearing work.",
          },
          {
            prompt:
              "Change one word so the sentence overstates what a paper can support. Paper: The study suggests a biological origin. Headline: The study ___ a biological origin.",
            answer: "proves",
            accept: ["confirms"],
            hint: "It is the verb almost no paper in any field will print.",
            explanation:
              "Nothing about the evidence changed. The verb did all of it, which is exactly how the headline lesson describes the ladder.",
          },
          {
            prompt:
              "Name the genre from its job, one word: it records events under the year they happened, in the order they happened.",
            answer: "chronicle",
            accept: ["annal", "the chronicle", "an annal", "annals"],
            hint: "Lesson 2 is built on one kept in Anglo-Saxon England.",
            explanation:
              "The form is the annal, and its ordering can carry an argument the compiler never has to state.",
          },
          {
            prompt:
              "Name the genre from its job, two words: its author is an institution, and it succeeds when the finding gets picked up.",
            answer: "press release",
            accept: ["a press release", "the press release"],
            hint: "The byline is effectively a logo.",
            explanation:
              "Accuracy is a constraint on that success condition rather than the condition itself. Knowing the job description is how you read the document.",
          },
          {
            prompt:
              "Of the three texts that travel with a published image, name the one written for a reader who cannot see it.",
            answer: "alt text",
            accept: ["alt", "the alt text", "alternative text"],
            hint: "It describes rather than interprets.",
            explanation:
              "It should not simply repeat the caption, or a reader who cannot see the image gets the interpretation and never gets the picture.",
          },
          {
            prompt:
              "Of those same three texts, name the one carrying the creator, date, holding institution and rights status.",
            answer: "credit",
            accept: ["the credit", "credit line", "the credit line"],
            hint: "It is the citation of an image.",
            explanation:
              "Everything lesson 11 said about citation applies here: a reader has to be able to reach the same object you had.",
          },
        ],
      },
    },
    {
      slug: "assignment-one-discovery-three-genres",
      title: "15 · Assignment: one discovery, three genres, with sources",
      section: "Section 4 · Reading against the grain, and writing it yourself",
      lessonType: "assignment",
      body: `Take one real finding. Research it properly. Then write it three times, in three genres, and account for what changed.

This is the assignment where the course stops being about other people's writing.

## Part 0. Choose a finding, and be prepared to change your mind

Pick a research finding or a documented discovery announced in the last twenty-five years, in any field, for which you can reach **all four** of these:

1. The **peer-reviewed paper**, official report, or dataset the finding came from.
2. The **press release** or public announcement from the institution behind it.
3. At least **two news articles** from different outlets.
4. At least **one social post, video, or forum thread** repeating it.

If any of the four is out of reach, choose something else. Narrowing or broadening a question until it can actually be answered is not a detour from research, it is research, and part 5 asks you to describe how you did it.

Two warnings. Choose a finding you do not already have a position on, because you will be reading against the grain and you will not do that fairly to a conclusion you want. And avoid a finding your household has an interest in defending.

## Part 1. The source ledger

A table with one row per source, at least six rows. For each:

- The **full APA 7 reference entry**, including a DOI or a stable link.
- **What kind of document it is.** Peer-reviewed article, preprint, press release, news report, dataset, opinion piece, post. Say which, in those words.
- **Who published it, and what they get if it lands well.** One sentence. If the answer is genuinely nothing, write that.
- **One strength and one limit of this source for this task.** Not in general. For this task.

That last column is the one that gets read hardest. "Peer reviewed, therefore reliable" is not an appraisal. "Peer reviewed and specific about method, but the sample is drawn from a single hospital, so it cannot support the national claim the press release makes" is.

## Part 2. Three versions, about 120 words each

Write the same finding three times.

**A field note.** Written as if you were present at the moment of the observation. To do this at all you have to work out what the observation physically was: what was in front of a person, when, and what they did next. That is the point of the exercise, and most of the work.

This version must be **labeled as constructed**, in a line above it, because you were not there. Labelling an invented passage as invented is a rule this course applies to itself in lessons 1, 7 and 12, and it applies to you here. An unlabelled reconstruction presented as a record is the single fastest way to fail this assignment.

**A paragraph of the paper.** Report the finding as the researchers could support it. It must contain at least **two load-bearing hedges** and **one stated limitation**, and each hedge must survive the three-question test from lesson 10: who is uncertain, about what, and what would settle it.

**A press release lead.** The institution's voice, two or three sentences. Make it genuinely appealing, because a press release that nobody would run has not done the exercise. It may not contain a claim the paper does not support. Working out how to be interesting inside that constraint is the assignment.

## Part 3. What changed, and what a reader can check

300 to 400 words.

Go through your three versions and name what each one gains and what each one loses. Then answer the question that matters most: **what is a reader of each version able to check, and with what?**

Cite the sources you are describing. This section is an argument about documents, and an argument about documents without references to them is an opinion.

## Part 4. What you could not establish

This is graded as seriously as everything else.

List every point where the trail went cold: a paywalled paper, a press release the institution has taken down, a claim you could not source, a number you found in three places and could not trace to one. For each, say what you tried and what would settle it.

A confident submission with an invisible gap is worth less than a careful one that marks its own limits. That is the position this whole course takes, and it is not a rhetorical flourish. It is the grading standard.

## Part 5. Method note

Half a page. Which searches did you run, in which databases or archives? What did you try that failed? Did you narrow or broaden the question, and why? A researcher who only reports the searches that worked has described a result rather than a method.

## How this is assessed

| Weight | Criterion |
|---|---|
| 25 per cent | **Source appraisal.** Are the strengths and limits specific to this task, and is each source's type correctly identified? |
| 25 per cent | **The three versions.** Does each obey its genre's promise, and does the paper version's hedging survive the three-question test? |
| 20 per cent | **Part 3.** Does the analysis reason from the documents, with citations, rather than from what feels likely? |
| 15 per cent | **Part 4.** Are the limits genuinely surfaced, with what was tried and what would settle each one? |
| 10 per cent | **Method note.** Is the search process reported honestly, failures included? |
| 5 per cent | **Citation format.** APA 7, in text and in the reference list, with a reachable identifier for each entry. |

## Two rules that override everything above

**Label what you constructed.** The field note is invented. Say so, on the page, every time.

**Do not improve a source by paraphrase.** If a document is vague, report that it is vague. Quote it, with a page or section, and let the reader see. Fixing a source's wording on its behalf is the failure this course spent fifteen lessons describing.

## Sources
- American Psychological Association. (2020). *Publication manual of the American Psychological Association* (7th ed.). https://doi.org/10.1037/0000165-000
- Booth, W. C., Colomb, G. G., Williams, J. M., Bizup, J., & FitzGerald, W. T. (2016). *The craft of research* (4th ed.). University of Chicago Press.`,
    },
    {
      slug: "assignment-trace-a-headline",
      title: "16 · Assignment: trace a headline back to the paper",
      section: "Section 4 · Reading against the grain, and writing it yourself",
      lessonType: "assignment",
      body: `Find a headline that makes a strong claim. Follow it back, document by document, to the paper it came from. Report exactly where along the chain the claim changed, or report that it never did.

Lesson 11 said you could do a version of this today, in four minutes. This is that, done properly, written up, and graded.

## Part 1. Pick the headline

Any headline about research or a documented discovery, from a real outlet, published where you can link to it. Take a screenshot with a visible date, because headlines are edited silently and often.

Choose one whose claim is **checkable**: it should assert that something is true, was found, causes something, or overturns something. A headline that only announces that a study exists gives you nothing to trace.

Do not pre-select a headline you already believe is wrong. Part 6 explains why that matters.

## Part 2. Build the chain of custody

Work back one hop at a time and record every hop, even the ones that go nowhere.

| Hop | The document | What it claims |
|---|---|---|
| 1 | The headline | Quote it verbatim |
| 2 | The article beneath it | The claim as the reporter states it |
| 3 | The press release or public announcement | The claim in the institution's own words |
| 4 | The paper, report, or dataset | The strongest claim the authors actually make |

For each hop, record: the full APA 7 reference, the date, the publisher, **the exact sentence carrying the claim**, quoted, with a page or section number where the document has them.

Some hops will be missing. A press release may not exist, or may have been removed, or the article may cite no paper at all. **A missing hop is a finding, not a failure.** Record what you searched for, where, and what you concluded from its absence.

## Part 3. Name the delta

One sentence, and it is the center of the assignment:

*Between hop N and hop N plus one, the claim changed from X to Y.*

Then, in a short paragraph, name the mechanism from this course. Was it a dropped condition? A verb moved up the ladder from lesson 6? A lost attribution? A hedge deleted? A frame added that the evidence had nothing to do with? Name it, and quote the two sentences that show it.

If the claim never changed, say so in the same form. That result is worth exactly as much.

## Part 4. Appraise each source for this task

For every document in the chain, in a short paragraph each:

- **What kind of document is it**, and what is that genre's job?
- **What is it good for here**, and what can it not support?
- **Who published it, and what do they gain if the claim travels?**

The standard this assignment is built on asks for the strengths and limitations of each source **for the specific task, purpose and audience**. So do not write general praise or general suspicion. A press release is not a bad source; it is an excellent source for what an institution wanted said, and a poor one for what the evidence supports. Write that kind of sentence.

You must also use at least **two sources beyond the chain itself**: a later paper, a review, a correction, a critique, or a second research group's result. This is the corroborating step, and it is what keeps the whole exercise from resting on one document's account of itself.

## Part 5. The search log

Half a page, and it is not optional.

Record the actual queries you ran and where you ran them: a library database, a scholarly index, the journal's own site, the institution's newsroom, a web archive for pages that have moved. Record which queries **failed**, and what you changed to get past each dead end.

Practical routes, when the trail goes cold: search the researcher's name plus the year rather than the topic; search a distinctive phrase from the article in quotation marks; look for a DOI anywhere in the article or release; check the institution's newsroom archive by date; use a web archive for a page that has been taken down. Report which of these you actually needed.

## Part 6. The honest outcome rule

**Sometimes the headline is fair.**

Coverage that keeps the condition, names the researchers, and states the claim at the strength the paper supports is common enough that you will meet it, and if you do, your assignment is to document it with the same care and say so plainly. It is graded identically.

This rule exists because the alternative is a course that teaches cynicism and calls it critical thinking. A method that can only ever return one verdict is not a method, and lesson 13 already named that failure. If you chose a headline you were sure was wrong, and it turns out to be sound, that is the most interesting result you could have got, and reporting it is the whole point.

## Part 7. What you could not establish

Every unresolved point, with what you tried and what would settle it. A paywall you could not pass. A press release with no archived copy. A number in the article that appears nowhere in the paper. An author who could not be identified.

Graded as seriously as the rest, for the same reason as in assignment 15: a confident chain with an invisible break is worse than an honest one that marks where it broke.

## Length and format

500 to 700 words of prose, plus the chain table, the appraisals, and the search log. APA 7 throughout, with a reference list in which every entry is reachable.

No single source may supply more than half your citations. If your reference list is mostly one article, you have summarized a source rather than researched a question.

## How this is assessed

| Weight | Criterion |
|---|---|
| 25 per cent | **The chain.** Is every hop documented with a verbatim sentence and a full, reachable reference, including the hops that are missing? |
| 20 per cent | **The delta.** Is the change stated precisely, located at a named hop, and explained with a mechanism from this course? |
| 20 per cent | **Source appraisal.** Are strengths and limits specific to this task, purpose and audience, with the publisher's stake named? |
| 15 per cent | **Corroboration.** Are there at least two independent sources beyond the chain, and are they used rather than listed? |
| 10 per cent | **Search log.** Are the failed queries and dead ends reported, not only the route that worked? |
| 10 per cent | **Honesty and format.** Part 7 completed, no overreliance on one source, APA 7 correct in text and in the list. |

## The one rule

Quote, do not paraphrase, at the two ends of the chain. The headline and the paper's own strongest supported claim go in verbatim, in quotation marks, cited.

Every distortion this course has described happened because somebody restated somebody else's sentence in their own words with the best of intentions. Your assignment is the one document in the chain where that does not happen.

## Sources
- American Psychological Association. (2020). *Publication manual of the American Psychological Association* (7th ed.). https://doi.org/10.1037/0000165-000
- Greenberg, S. A. (2009). How citation distortions create unfounded authority: Analysis of a citation network. *BMJ, 339*, b2680. https://doi.org/10.1136/bmj.b2680
- Sumner, P., Vivian-Griffiths, S., Boivin, J., Williams, A., Venetis, C. A., Davies, A., Ogden, J., Whelan, L., Hughes, B., Dalton, B., Boy, F., & Chambers, C. D. (2014). The association between exaggeration in health related science news and academic press releases: Retrospective observational study. *BMJ, 349*, g7015. https://doi.org/10.1136/bmj.g7015`,
    },
  ],
};
