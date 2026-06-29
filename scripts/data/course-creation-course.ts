// Authored "How to Create a Course" — the meta-course for teachers on Learn.WitUS,
// distilled from the CentOS course-authoring guides (content/course-authoring/:
// CourseAuthoringGuide.md + CourseCreationWithAI.md) and the content/writing standard.
// Audio-first, no AI tells, cited. Committed (the guides themselves stay in the
// gitignored content/ as reference). Ends with a source-linked quiz.

import type { AuthoredCourse } from "./authored-course";

export const COURSE_CREATION_COURSE: AuthoredCourse = {
  title: "How to Create a Course That People Finish and Pass",
  description:
    "The Learn.WitUS standard for building a course, distilled from a short shelf of books on how people learn and how to write plainly. It is a checklist you can follow: write like a person, teach audio-first, cite every claim, build quizzes that teach, and ship a course learners actually finish. Use it with or without an AI assistant.",
  lessons: [
    {
      slug: "write-like-a-person",
      title: "1 · Write like a person, not like a machine",
      body: `This applies to every word you ship: lesson scripts, quiz text, glossary entries, descriptions. If a draft reads like a brochure or a textbook, it failed. It should read like a sharp teacher explaining something to one person.

- **No em-dashes or en-dashes.** Use a comma, a period, or parentheses. Use "to" for ranges.
- **No rare word when a common word works.** "use" not "utilize"; "help" not "facilitate"; "so" not "thus"; "about" not "regarding". Avoid leverage, delve, robust, crucial, holistic.
- **No filler openers.** Cut "It is worth noting that", "In today's world", "When it comes to", "At the end of the day".
- **No stacked triples for rhythm.** One clear example beats three vague ones.
- **Short sentences win.** If a sentence holds two ideas, make it two sentences.
- **Active voice.** "The pilot files the report", not "the report is filed by the pilot".
- **Contractions are fine.** They sound like a person talking, which is the goal.

These are checked. A clean AI-tell scan (no em/en dashes, no filler, no rare words) is part of shipping.

**Try it.** Rewrite this so it sounds like a person: "It is worth noting that one should utilize the checklist in order to facilitate a robust pre-flight process."`,
    },
    {
      slug: "audio-first",
      title: "2 · The one rule: audio first",
      body: `Every lesson is a script meant to be heard. People listen while they drive, walk, or do dishes. The screen is a bonus, not the plan. A lesson that only makes sense if you are looking at it has broken the one rule.

Write for the ear:
- **One concept per lesson**, about 6 to 8 minutes (roughly 900 to 1150 spoken words). If a lesson has two ideas, split it.
- **Say numbers the way a person says them.** "Four hundred feet", not "400'".
- **Read a reference out loud once, then move on.** The exact code lives in the citation field, not the spoken line.
- **Never say "as you can see."** The listener cannot see anything. If something is visual, paint it in words and add a picture in a companion lesson or a quiz image.

**Try it.** Take one idea you want to teach and say it out loud in under a minute. If you needed a diagram to make it land, describe the diagram in words instead.`,
    },
    {
      slug: "lesson-structure",
      title: "3 · How to structure a lesson",
      body: `A lesson that teaches has a shape. Use these beats in order:

- **Recall.** Open by recalling the previous lesson: two quick questions, a pause, then the answers. Retrieval is how memory sticks.
- **Hook.** One concrete, surprising, real example that sets up the idea.
- **Teach.** The single idea in plain words. Translate every term: plain meaning first, the official term once in parentheses, then plain words again.
- **Picture.** Paint the visual in words (a Part 107 certificate is like a driver's license). Never depend on the screen.
- **On the test / in practice.** Name how the idea shows up for real, and the common trap.
- **Check.** One question, a pause, the answer and why. Active recall again.
- **Key Takeaways.** Three to five plain bullets. These are the exact facts the quiz will test.

**The published text is clean.** Audio scripts may carry light stage cues (Beat, Sound, tone) for whoever records the audio, but the **reading version a learner sees has NO stage tags** — no [HOOK], [TEACH], [CHECK], [Beat]. Each beat becomes a short descriptive heading instead. Stage tags in published text are an AI tell.

**Keep it short.** One concept, about eight minutes (roughly 1,150 spoken words) or fewer. If a draft needs two unrelated section headers, split it into two lessons. Teach the concrete thing before the abstract rule.

**Try it.** Outline one lesson with these beats. Write the recall opener and the check question first; they keep the lesson honest.`,
    },
    {
      slug: "sources-and-citations",
      title: "4 · Sources and citations (never ship a fake)",
      body: `Every factual claim ties to a verified source. This is a product feature, not a formality: the sources are a visible trust signal.

- **Verify every citation before using it** (against Crossref or PubMed for studies, the official document for rules and law). Never invent a study, author, year, journal, or statistic.
- **If a claim has no verifiable source, state it generally with no citation and flag it.** Do not dress up a guess as evidence.
- **Cite APA style, inline,** and link to the official source (a .gov page for law, the publisher or DOI for research).
- **Produce the four source artifacts:** a master source-and-usage map (every source with APA, link, PDF, and the lessons that cite it); a teacher evidence ledger (each claim, the source's evidence, the exact lesson); a "sources still needed" list; and a fake-claims audit (what was wrong in drafts and how you caught it).

**Try it.** Take one claim in your draft and find its primary source. If you cannot, rewrite the claim so it no longer needs one.`,
    },
    {
      slug: "quizzes-that-teach",
      title: "5 · Build quizzes that teach",
      body: `A quiz is a teaching tool, not a gate. Use the real schema and make every question teach.

- **Schema:** \`{ passingScore: 80, questions: [{ prompt, options, correctIndex, explanation, sourceLessonSlug }] }\`. The correct answer is an index into the options.
- **Explanations say why the right answer is right AND why each wrong answer is wrong.** The wrong-answer reasons are the most useful study material.
- **Design believable distractors.** Wrong answers should be the mistake a real student makes, not obviously silly.
- **Frame for the test.** Where there's an exam, name the trap answer in the lesson ("On the test, this shows up as ...").
- **Every question links back to the lesson that teaches it** (\`sourceLessonSlug\`). After submitting, the learner sees a "Where to find this →" link. No quiz ships without it.
- **Mix the order** so a quiz forces real recall, not pattern matching. For a large bank, serve a random subset per attempt and shuffle options (spaced recall) so retakes show new questions.
- **Independently verify every answer** against the source. A wrong answer key teaches the wrong thing. Write original questions; never copy an exam provider's items.

**Try it.** Write one multiple-choice question with three options, mark the correct index, and write an explanation that explains all three options. Then add the slug of the lesson it comes from.`,
    },
    {
      slug: "assignments-and-resources",
      title: "6 · Assignments, self-checks, and a resources module",
      body: `Lessons and quizzes are the spine. Two more things turn a course into something people finish.

**Per module:** a graded assignment plus two self-check prompts (each with a model answer). Self-checks let the learner test understanding honestly; the model answer shows them the standard.

**Per module:** a short **Key Terms** lesson (that chapter's vocabulary, defined at about a sixth-grade level), placed after the content lessons.

**A resources module** at the end:
- a study plan (how to pace the course),
- a cheat sheet (the whole course on one page),
- the full glossary (every official term, defined plainly),
- and lead-magnet PDFs hosted and attached as free downloads.

**Spaced recall with FlashLearn.** Turn the glossary terms and quiz questions into **FlashLearn AI decks** (multiple-choice built from the quiz options, plus classic front/back, capped at about 20 cards per deck) so learners review on a long-horizon spaced schedule. Free downloads are both a teaching aid and a way for the course to find new learners.

**Try it.** For one module, write the graded assignment prompt and one self-check question with its model answer.`,
    },
    {
      slug: "using-ai-to-author",
      title: "7 · Using an AI assistant to author",
      body: `An AI can draft fast, but it ships AI tells and invents citations unless you hold it to the standard. Give it the rules up front and verify its work.

**The process:**
1. **Map** the source material to a module-and-lesson plan. Confirm the map before authoring.
2. **Author** lessons (one writer or one agent per lesson works well), then scan for AI tells and fix to zero.
3. **Build quizzes;** verify every answer against the source.
4. **Add** a graded assignment plus two self-checks per module.
5. **Build** the resources module with free downloads.
6. **Verify and download every source;** produce the four source artifacts.
7. **Load it additively** (create mode, scoped to the course), then verify lessons render, quizzes score, downloads resolve, and modules are in order.

Hand the AI the full standard (the master prompt in \`CourseCreationWithAI.md\`), not a summary. Then check its output against this course.

**Try it.** Draft one lesson with an AI using the rules from Lessons 1 to 5, then run the AI-tell scan yourself.`,
    },
    {
      slug: "ship-checklist",
      title: "8 · The ship checklist + knowledge check",
      body: `Before a course goes live, walk the list:

- [ ] Module and lesson map confirmed
- [ ] Lessons one concept each, recall opener, audio-first
- [ ] AI-tell scan clean (no em or en dashes, no filler, no rare words)
- [ ] Quizzes in the real schema, every answer verified, each question links to its lesson
- [ ] Assignment plus two self-checks per module
- [ ] Resources module with free downloads
- [ ] Every citation verified, the four source artifacts produced
- [ ] Loaded additively and verified end to end (lessons render, quizzes score, order is right)

If every box is checked, you have a course people finish and pass. That is the whole goal.`,
    },
    {
      slug: "course-creation-quiz",
      title: "9 · Check your understanding",
      quiz: {
        passingScore: 80,
        questions: [
          {
            prompt: "What is the 'one rule' for every lesson?",
            options: ["It must have a video", "It is a script meant to be heard (audio-first)", "It must be under 200 words", "It must include a diagram"],
            correctIndex: 1,
            explanation:
              "Audio-first: every lesson is a script meant to be heard while walking or driving. A lesson that only makes sense on screen has broken the one rule.",
            sourceLessonSlug: "audio-first",
          },
          {
            prompt: "Which of these is an 'AI tell' to remove?",
            options: ["A short, active sentence", "A contraction", "An em-dash", "A concrete example"],
            correctIndex: 2,
            explanation:
              "Em-dashes (and en-dashes) are AI tells; use a comma, period, or parentheses instead. Short active sentences, contractions, and concrete examples are all encouraged.",
            sourceLessonSlug: "write-like-a-person",
          },
          {
            prompt: "What must every quiz question include besides the correct answer?",
            options: ["A video clip", "An explanation of why each option is right or wrong, plus a link to the lesson that teaches it", "A time limit", "The author's name"],
            correctIndex: 1,
            explanation:
              "Explanations teach: say why the right answer is right and why each wrong answer is wrong, and link the question back to the lesson that teaches it (sourceLessonSlug).",
            sourceLessonSlug: "quizzes-that-teach",
          },
          {
            prompt: "What do you do with a claim that has no verifiable source?",
            options: ["Invent a plausible citation", "State it generally with no citation and flag it", "Delete the whole lesson", "Cite a similar study instead"],
            correctIndex: 1,
            explanation:
              "Never invent a citation. State the claim generally with no citation and flag it. Honesty about evidence is the difference between teaching and a sales pitch.",
            sourceLessonSlug: "sources-and-citations",
          },
        ],
      },
    },
  ],
};
