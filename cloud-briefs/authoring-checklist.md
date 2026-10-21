# Learn.WitUS Course Authoring Checklist

How to build a course as a committed data module that passes review. Where this and `docs/course-method/course-creation-rubric.md` differ, the rubric governs. Model file: `scripts/data/stage-and-broadcast-rigging-course.ts` (CREW-01).

## 1. Before writing

- [ ] An approved brief exists. The file header names the research tier and the brief path. Tier 2 applies when a wrong sentence could injure someone or cost money.
- [ ] Every claim you plan to use is marked **VERIFIED** (read in a source fetched on a stated date). **REPORTED** (seen only in search snippets or summaries) and **UNVERIFIED** claims are never asserted. Upgrade them or leave them out.
- [ ] Quiz pool sizes are worked out from planned section word counts (section 5).

## 2. File shape

- One file, `scripts/data/<slug>-course.ts`, exporting a constant typed `AuthoredCourse` (from `./authored-course`) with `title`, `description` and `lessons`.
- Each lesson has `slug` (stable forever; the seeder upserts by it), `title` (CREW-01 numbers them, "1 · Title"), `section` (lessons sharing the string form one module, and that module's quiz covers only them) and `body` (Markdown). Optional: `recallContent`, `quiz`, and `lessonType` with `contentUrl` for media. Leave `reviewNeeds` unset.
- Open with a comment block like CREW-01's: slug, series position, tier, brief and dossier paths, visibility and hold reason, marked lessons, source rights, hedges, house style.
- Store each APA reference once as a named constant and reuse it in every `## Sources` list.
- Bodies are template literals, so escape backticks and `${`.

## 3. Lesson body

- [ ] One concept per lesson, at most about eight minutes read aloud (roughly 1,150 words). Plain words, short sentences, active voice, each acronym spelled out once.
- [ ] If the lesson needs sign-off, its first line is the release marker:
  `> **Before release:** needs a qualified reviewer (QR): <who, for example an RF coordinator>.`
  For hands-on content: `> **Before release:** needs a practitioner: <what>.` Two needs may share a line joined by "; and needs". Any other wording is stored as an open decision and holds the whole course.
- [ ] Self-checks use `:::reveal <question> ||| <answer>` on one line starting at column 0. Indented or wrapped, it renders as plain text.
- [ ] Images use `:::figure <url> ||| <alt> ||| <caption> ||| <credit>` on one flush-left line. The URL is https on `res.cloudinary.com`; alt says what the image shows; caption says why to look and must differ from alt; credit gives creator, title, date, licence and source. No placeholders.
- [ ] `recallContent` (prompt and answer pairs) begins on the second teaching lesson and quizzes the lesson before it, never the current one.
- [ ] Every teaching lesson ends with `## Sources`: APA 7 entries for what that lesson used, each with a locator a learner can follow (page, paragraph, section, table, timestamp). Decide each source's rights tier: A (free to host), B (link only, never rehost), C (cite only, no link to a copy).
- [ ] No em or en dashes in prose (a quoted title keeps its own punctuation). No stage cues such as `[Beat]` in text lessons. No filler openers or machine-sounding phrasing.

## 4. Never assert an unverified claim

- A lesson states only VERIFIED facts, each tied to an entry in its `## Sources`.
- An inference appears only with its reasoning shown in the lesson.
- If a claim cannot be verified, write a general true sentence without the number, present it as an open question, or cut it. A vague true sentence beats a precise invented one.
- Every hedge written into a lesson ("no source confirms whether...") needs a matching entry in `src/lib/research-checks.ts`.
- A contested claim names who contests it. A failed fetch supports nothing. Wikipedia points to sources; it is never the source.
- Never invent or adjust an author, year, title, DOI, quotation or statistic. Confirm the source actually says what you cite it for, not merely that it exists.

## 5. Quizzes

Use the data-module schema, not the older CSV-import JSON shown in the authoring guide:

```ts
quiz: {
  passingScore: 80,
  questionsPerAttempt: 5,
  shuffleOptions: true,
  questions: [
    { prompt: "...", options: ["...", "...", "...", "..."], correctIndex: 2,
      explanation: "Why this is right and the others are wrong.",
      sourceLessonSlug: "the-lesson-that-teaches-it" },
  ],
},
```

- [ ] Every section that teaches ends with a quiz lesson. Pool = round(section words ÷ 35), held between 40 and 100; a pool within 90 percent of target passes. Serve 5 (up to 10 is allowed).
- [ ] The final quiz sits last: a pool of 40 or more, serves 10, passes at 80.
- [ ] Every question carries `explanation` and `sourceLessonSlug`.
- [ ] No length tells: keep the four options close in length so the correct one is not usually the longest, the shortest, or any fixed rank in between. Put qualifiers and the "because" in `explanation`.
- [ ] Distractors are specific and plainly wrong. No "all of the above" or "none of the above", no wording that points at a position, no bare-number fill-ins.
- [ ] Spread `correctIndex` values and set `shuffleOptions: true`.
- [ ] Questions are original. After release, never edit a prompt (its hash keys every learner's history) and never reorder options or move `correctIndex`; fix option text in place.

## 6. Content checks in `pnpm lint`

- **eslint**: code style.
- **check-em-dashes**: no em or en dashes in visible copy.
- **check-quiz-balance**: a bank of 8 or more cannot pile correct answers on one index unless it shuffles.
- **check-longest-option**: the correct answer is not usually the longest option.
- **check-shortest-option**: nor usually the shortest.
- **check-length-balance**: no length-rank strategy beats chance.
- **check-recall-placement**: no recall cards on the first teaching lesson.
- **check-reveals**: every `:::reveal` is a well-formed single line.
- **check-figures**: every `:::figure` parses, is Cloudinary-hosted, has distinct alt and caption, and has a credit.
- **check-assessment-fit**: the question format suits the content it tests.
- **check-standards-coverage**: the course is aligned to standards or has a backlog reason.
- **check-citations**: every staged course actually generated citations.
- **check-series-codes**: the series code and position are legal.
- **check-page-reachability**: pages are reachable from the menu and have their own share card.
- **check-private-courses**: nothing under private courses is tracked by git.
- **gen-course-index --check**: the generated course index is current.

Most are ratchets: a new course passes outright and never joins a grandfather or allowlist map.

## 7. Done means

- [ ] `pnpm audit:course <slug> --spec` reports nothing.
- [ ] Registered in `scripts/seed-courses.ts` with category, up to five extra categories, series slug, title, order, code and position, and the hold reason. Insert-only fields must be right the first time; a re-seed never rewrites them.
- [ ] Added to `STAGED_COURSES` in `src/lib/citations.ts`; standards aligned in `src/lib/standards/`, or a one-line backlog reason.
- [ ] README and `src/lib/roadmap.ts` updated.
- [ ] Typecheck, lint, tests and build green; database commands listed in order.
- [ ] A public course stays "Coming soon" until a reviewer vets it and its citations are checked.
