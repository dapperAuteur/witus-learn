import type { AuthoredCourse } from "./authored-course";

// River Expedition, course 11 of 11: Telling the River. RIVER-11.
//
// The storytelling capstone. Ties to the Storytelling series and to how-to-research. Uses the
// team's fiction and non-fiction from the same places, which is the series' most unusual asset.
// Plan: plans/56.

export const RIVER_TELLING_THE_RIVER_COURSE: AuthoredCourse = {
  title: "Telling the River",
  description:
    "The capstone. The expedition sent back both factual logs and fiction written from the same places on the same days, which makes the difference between them unusually visible. What each form can do, what neither may do, and a piece of work of your own about a place you can actually reach.",
  lessons: [
    {
      slug: "two-accounts-one-place",
      title: "1 · Two accounts of the same place",
      section: "Section 1 · What the forms do",
      body: `The team was asked for something most expeditions do not produce: **a factual log entry and a piece of fiction, written from the same place on the same day**, kept in separate files and labeled.

That pairing is the most useful teaching object this series has, because the difference between the two forms is normally invisible. Read separately, both just look like writing about a river.

## What the factual account is for

A record of what happened, constrained by what can be established. Its power comes from that constraint: when a factual account tells you the water was falling and the wind came up at four o'clock, you can act on it.

Its limit is that it can only carry what was observed. It cannot get inside anybody, and if it pretends to, it stops being a record.

## What fiction is for

Fiction can go where the record cannot: into an interior, into an imagined past, into what a place might have felt like to someone who left no account. On a route like this, where the people most affected were largely prevented from leaving written records, that reach is not decoration. It is sometimes the only way to represent an experience at all.

Its power is exactly its freedom, and so is its danger.

## The rule that keeps both honest

**The reader must always know which they are reading.**

That is the entire ethic in one line, and almost every failure in this area is a failure of that one rule: invented detail in a factual piece, or fiction presented in a way that lets a reader take it for record.

The team's material is labeled, in the filename, every time. Not once at the top of a folder. Every file.

## Where this gets hardest

On a route with this history. Imagining the interior life of a real, named person who was sold at Natchez is a different act from imagining a paddler's bad afternoon, and it carries obligations the second does not.

The next lesson is about that.

:::reveal State the rule that keeps both forms honest. ||| The reader must always know which they are reading.

:::reveal Why is fiction sometimes the only way to represent an experience on this route? ||| Because the people most affected were largely prevented from leaving written records, so no factual account of their interior experience exists to draw on.`,
    },
    {
      slug: "what-neither-form-may-do",
      title: "2 · What neither form may do",
      section: "Section 1 · What the forms do",
      body: `Some obligations do not change when you switch genre. Calling something fiction does not release you from them.

## Do not put words in a real person's mouth

Inventing dialogue for a named historical person, and presenting it in a way a reader could take as record, is the clearest version of the failure. It is not made acceptable by being well intended or accurate in spirit.

This is why the team was told plainly: **do not fictionalise a real named person you met on the river.** The lock operator who talked to them for ten minutes did not consent to becoming a character.

## Do not invent the specifics that carry the weight

A story can invent a person. It should not invent the documented facts around them: what a market was, what a law said, what a place looked like. Those are checkable, and getting them wrong for effect is not a stylistic choice. It is a claim about the world that happens to be false.

The research course on this platform is the companion here, and its rule applies to fiction more than people expect: **know which of your details are established and which you supplied.**

## Do not use a real catastrophe as texture

Using someone else's documented suffering to add gravity to a story that is otherwise about you is the specific failure this series has been guarding against from its first course. The rule stated there was: the history is never the backdrop to the adventure.

In a piece of writing, the test is simple. **Whose story does this end up being?** If a piece opens with the domestic slave trade and closes on how it made the narrator feel, the trade was scenery.

## Consent, which does not lapse

Anyone identifiable who appears in either form needs consent for that use, and consent to appear in a factual log is not consent to appear in a story. Different form, different audience, new use, fresh permission.

## What you are allowed to do

Quite a lot, and it is worth saying so, because these rules can read as a prohibition on writing anything.

You may imagine. You may write from a perspective not your own. You may reconstruct, speculate and dramatise. You may be angry in prose. What you must do alongside all of it is **be legible about what you are doing**, so a reader can tell the record from the reconstruction, and so nobody's real life is conscripted without their knowledge.

:::reveal Why is "do not fictionalise a real named person you met" a rule rather than a suggestion? ||| Because they consented to a conversation, not to becoming a character. Consent is specific to a use, and fiction is a different use.

:::reveal What is the test for whether a history has been used as scenery? ||| Whose story does the piece end up being? If it opens on someone else's catastrophe and closes on the narrator's feelings, the catastrophe was texture.`,
      recallContent: [
        {
          prompt: "Which obligations survive the switch from fact to fiction?",
          answer:
            "Not putting words in a real person's mouth, not inventing checkable specifics, not using real catastrophe as texture, and obtaining consent for the new use.",
        },
        {
          prompt: "What must always accompany the freedom fiction gives you?",
          answer:
            "Legibility. The reader must be able to tell the record from the reconstruction.",
        },
      ],
    },
    {
      slug: "quiz-telling-the-river",
      title: "3 · Knowledge check: telling it",
      section: "Section 1 · What the forms do",
      quiz: {
        shuffleOptions: true,
        questions: [
          {
            prompt: "What single rule does this course say keeps both fact and fiction honest?",
            options: [
              "Every claim in either form must be supported by a citation the reader can follow",
              "The reader must always know which of the two they are reading",
              "Fiction must be kept shorter than the factual account it accompanies",
              "Both must be written by the same person to keep the perspective consistent",
            ],
            correctIndex: 1,
            explanation:
              "Almost every failure in this area is a failure of that one rule: invented detail inside a factual piece, or fiction a reader could mistake for record.",
            sourceLessonSlug: "two-accounts-one-place",
          },
          {
            prompt: "Why were the paddlers told not to fictionalise real people they met on the river?",
            options: [
              "Their accounts would be unreliable, since brief encounters produce poor characterisation",
              "They consented to a conversation, not to becoming a character, and that is a different use",
              "Fiction about identifiable people cannot be published without a legal release in any state",
              "Doing so would make the factual log entries from the same day unusable as record",
            ],
            correctIndex: 1,
            explanation:
              "Consent is specific to a use. Appearing in a factual record and being reimagined as a character are different things, and the second was never agreed to.",
            sourceLessonSlug: "what-neither-form-may-do",
          },
          {
            prompt:
              "A piece opens with the domestic slave trade at Natchez and closes on how visiting made the narrator feel. What is the problem?",
            options: [
              "The narrator lacks the standing to write about the subject at all",
              "The history became scenery, because the piece ends up being the narrator's story",
              "Two subjects in one piece will always confuse the reader about its purpose",
              "Personal reflection has no legitimate place in writing about historical sites",
            ],
            correctIndex: 1,
            explanation:
              "The test is whose story it ends up being. Reflection is allowed; using someone else's documented suffering to add weight to your own account is the failure.",
            sourceLessonSlug: "what-neither-form-may-do",
          },
          {
            prompt: "Which of these is fiction permitted to do, on this course's account?",
            options: [
              "Invent dialogue for a named historical person, where it matches the spirit of the record",
              "Alter a documented fact about a place or law where the change serves the story",
              "Imagine the interior life of a person who left no written account, clearly labeled as imagined",
              "Present a reconstruction as a record where the underlying research was thorough",
            ],
            correctIndex: 2,
            explanation:
              "Reaching into experiences the record cannot hold is exactly what fiction is for on this route. The obligation is labeling, not abstinence. The other three are the failures the lesson names.",
            sourceLessonSlug: "what-neither-form-may-do",
          },
        ],
      },
    },
    {
      slug: "capstone",
      title: "4 · Capstone: a place you can reach",
      section: "Section 2 · Your own",
      body: `Make something. It does not have to be about this river.

## The brief

**Choose a place you can actually get to** and that has a history you can research. A street, a building, a stretch of water, a lot with nothing on it. Small is better.

Produce **two short pieces about it**:

1. **A factual account.** What is there, what happened there, what you could establish and from what sources. Cited. Anything you could not settle is flagged as unsettled rather than smoothed over.
2. **A short imaginative piece from the same place.** Clearly labeled as fiction. It may go where the record cannot.

Then **one paragraph** on what the second could do that the first could not, and what the first could do that the second could not.

## What is being assessed

- Whether a reader can tell the two apart without being told twice.
- Whether the factual piece is sourced, and honest about its gaps.
- Whether the fiction respects the boundaries in lesson 2: no invented words for real people, no altered checkable facts, no borrowed catastrophe.
- Whether the paragraph shows you understand what each form is for, rather than restating that they are different.

## If you want to go further

The **Storytelling** series on this platform goes deep into each form: documentary, oral history, news storytelling, civic documentation. **How to Research** covers the sourcing half properly, including how to flag what you could not establish and what consent actually requires.

This course sits between them and is not a substitute for either.

## What the series was for

Eleven courses, one river, one idea underneath all of them: **everything upstream arrives downstream.**

It was true of the water, and of the nutrients, and of the trade, and of the people who left, and of every decision made about the channel by someone who never had to live beside it.

The expedition is a way of watching that happen at four miles an hour. What you do with it is the part that was never about the river.

## Sources

- Society of Professional Journalists. *SPJ code of ethics*. https://www.spj.org/ethicscode.asp

- Oral History Association. *Principles and best practices for oral history*. https://oralhistory.org/principles-and-best-practices-revised-2018/

- Poynter Institute. *Ethics and trust resources*. https://www.poynter.org/ethics-trust/

- American Psychological Association. *Publication manual* (7th ed.), for citation form. https://apastyle.apa.org/products/publication-manual-7th-edition

:::reveal What is the one-paragraph reflection in the capstone actually testing? ||| Whether you understand what each form is for, rather than merely restating that fact and fiction are different.

:::reveal State the idea underneath all eleven courses. ||| Everything upstream arrives downstream: the water, the nutrients, the trade, the people who left, and the decisions made by those who never had to live beside the river.`,
      recallContent: [
        {
          prompt: "What two pieces does the capstone require, and what must separate them?",
          answer:
            "A cited factual account and a clearly labeled imaginative piece about the same place. A reader must be able to tell which is which without being told twice.",
        },
      ],
    },
  ],
};
