// Corrections to the Speedway course ("Speedway: The Greatest Spectacle in Learning") that must
// survive a re-seed and a re-import from CentOS.
//
// WHY THIS FILE EXISTS. The course text, scripts/data/speedway-course.ts, is generated from the
// CentOS masters by scripts/gen-health-data.ts and is gitignored (.gitignore, "Generated
// health-course data modules"). An edit to that file reaches no branch and no review, and the next
// `pnpm gen:health` would undo it. So corrections live here, tracked, as find-and-replace pairs on
// named lessons, and scripts/data/speedway-course-corrected.ts applies them to the generated course.
// The seeder and every lint guard read the corrected course, because the seed registry follows the
// seeder's import.
//
// WHERE THESE CAME FROM. The Indianapolis Motor Speedway Museum's Director of Education reviewed the
// course on 2026-11-16 (witus-learn plans/feedback/2026-11-16-ims-director-of-education-speedway-
// course.md; the revision plan is plans/100). This file carries only the corrections that needed no
// new sourcing beyond the pages named in each entry's `why`: the museum's hours, artifacts that
// rotate off display, the Harroun mirror claim restated as commonly credited and unconfirmed, and
// the pronunciation of Harroun's name. Everything else in that review waits on BAM's approval of
// the plan and its sources packet.
//
// THE CONTRACT, so a correction can never silently stop applying: each `find` must appear in its
// lesson exactly once, OR its `replace` must already be there (the generated text was fixed at the
// source). Anything else throws, and the seed and the guards fail loudly instead of shipping the
// uncorrected claim. Quiz corrections edit explanation text only, never a prompt (questionKey hashes
// the prompt) and never option order (quiz-integrity rule, CLAUDE.md).

import type { AuthoredCourse } from "../data/authored-course";

export interface SpeedwayCorrection {
  /** Lesson slug the correction applies to. */
  lesson: string;
  /** Which field: the lesson body, or one quiz question's explanation (by its exact prompt). */
  target: { kind: "body" } | { kind: "explanation"; prompt: string };
  find: string;
  replace: string;
  /** One line: what was wrong and which source settles it. */
  why: string;
}

const E1 = "e1-the-race-that-started-it-all-1911";

export const SPEEDWAY_CORRECTIONS: SpeedwayCorrection[] = [
  {
    lesson: E1,
    target: { kind: "body" },
    find: "driven by a thirty-one-year-old engineer named Ray Harroun, crosses the finish line first.\n\n",
    replace:
      "driven by a thirty-one-year-old engineer named Ray Harroun, crosses the finish line first.\n\n" +
      "Say it right: Harroun is pronounced \"Har-oon,\" and the second part rhymes with \"toon.\" It is not \"har-ron.\"\n\n",
    why: "Pronunciation given by the IMS Museum's Director of Education (review of 2026-11-16); the Episode 1 recording says \"har-ron\" and is to be re-recorded.",
  },
  {
    lesson: E1,
    target: { kind: "body" },
    find: "It is believed to be the first rearview mirror ever mounted on an automobile.",
    replace:
      "Harroun is commonly credited with inventing the rearview mirror, and you will hear that claim often. It has never been confirmed, and the record is more careful. " +
      "The IMS Museum says his mirror is \"believed to have been the first rearview mirror used on an automobile\" (IMS Museum, 2022). " +
      "The Henry Ford, which holds photographs of this race, says it is \"believed to be the first use of such a mirror on a race car\" (The Henry Ford, n.d.). " +
      "And mirrors for watching the road behind were already being fitted to closed cars in 1906, five years before this race (\"Body Work at Paris Salon,\" 1906, pp. 910-911). " +
      "A 1909 driving handbook told drivers of closed cars to have \"a mirror attached to the dash-board so that the chauffeur can see what is behind him\" (Levitt, 1909, p. 75). " +
      "Even the museum's own account says he borrowed the idea from a horse-drawn taxi. So the fair way to say it is this: Harroun's mirror is a famous early use of a rearview mirror on a racing car, not a proven first.",
    why: "\"First rearview mirror ever mounted on an automobile\" is contradicted by The Automobile (1906, pp. 910-911) and Levitt (1909, p. 75); IMS Museum and The Henry Ford both hedge with \"believed\".",
  },
  {
    lesson: E1,
    target: { kind: "body" },
    find: "That is how it starts.\n\n## Sources\n\n",
    replace:
      "That is how it starts.\n\n" +
      "## Visiting the museum\n\n" +
      "The Marmon Wasp belongs to the IMS Museum, in the town of Speedway. The museum is open 363 days a year and closes only on Thanksgiving and Christmas Day (IMS Museum, n.d.-a). " +
      "Its hours change with the season, and its exhibits rotate, so a car or artifact named in this series may not be on display the day you visit (IMS Museum, n.d.-b). " +
      "Check the museum's website before you plan a trip.\n\n" +
      "## Sources\n\n",
    why: "The museum is not open year-round: 363 days, closed Thanksgiving and Christmas (imsmuseum.org, opened 2026-11-16); rotating exhibitions change every six to nine months (Current Exhibitions page).",
  },
  {
    lesson: E1,
    target: { kind: "body" },
    find: "Brickhunter. (2024).",
    replace:
      "Body work at Paris Salon. (1906, December 27). *The Automobile, 15*(26), 910-911. https://archive.org/details/sim_automotive-industries_1906-12-27_15_26\n\nBrickhunter. (2024).",
    why: "New source for the 1906 car mirrors (Internet Archive scan, opened 2026-11-16; the passage sits under the subhead \"Mirrors on Many Closed Bodies\").",
  },
  {
    lesson: E1,
    target: { kind: "body" },
    find: "IMS Museum. (2022, September 23). *Ray Harroun*. Indianapolis Motor Speedway Museum. https://imsmuseum.org/fame_inductee/ray-harroun/\n\n",
    replace:
      "IMS Museum. (2022, September 23). *Ray Harroun*. Indianapolis Motor Speedway Museum. https://imsmuseum.org/fame_inductee/ray-harroun/\n\n" +
      "IMS Museum. (n.d.-a). *Indianapolis Motor Speedway Museum* [Home page]. Retrieved November 16, 2026, from https://imsmuseum.org/\n\n" +
      "IMS Museum. (n.d.-b). *Current exhibitions*. Retrieved November 16, 2026, from https://imsmuseum.org/visit/current-exhibitions/\n\n",
    why: "Sources for the hours and the rotating exhibits, both opened 2026-11-16.",
  },
  {
    lesson: E1,
    target: { kind: "body" },
    find: "Marmon Holdings. (2026, February 9).",
    replace:
      "Levitt, D. (1909). *The woman and the car: A chatty little handbook for all women who motor or who want to motor*. John Lane. https://www.gutenberg.org/ebooks/58956\n\nMarmon Holdings. (2026, February 9).",
    why: "New primary source: a dash-mounted rearview mirror recommended in 1909 (p. 75); read 2026-11-16 through the Wayback copy of the Project Gutenberg edition while Gutenberg was down.",
  },
  {
    lesson: E1,
    target: { kind: "body" },
    find: "https://www.thehenryford.org/collections-and-research/digital-collections/artifact/377208",
    replace: "https://www.thehenryford.org/collections/explore/artifact/377208",
    why: "The old path answers 404; the same record opens at /collections/explore/ (checked 2026-11-16). It is now the source for the mirror sentence as well as the crowd size.",
  },
  {
    lesson: "e1-quiz",
    target: { kind: "explanation", prompt: "What was the name of Ray Harroun's winning car?" },
    find: "The actual car is on display at the IMS Museum.",
    replace:
      "The actual car belongs to the IMS Museum, though exhibits rotate, so it is not guaranteed to be on display on any given day.",
    why: "Artifacts named in the course are in the museum's collection but rotate (IMS Museum Director of Education, 2026-11-16; Current Exhibitions page).",
  },
  {
    lesson: "e1-quiz",
    target: {
      kind: "explanation",
      prompt: "What innovation did Ray Harroun install on his car that is now standard equipment on every car?",
    },
    find: "It is believed to be the first rearview mirror ever mounted on an automobile.",
    replace:
      "He is commonly credited with the first rearview mirror, but that has never been confirmed: the IMS Museum says only that it is believed to be the first, The Henry Ford says the first on a race car, and mirrors for seeing the road behind were already fitted to closed cars by 1906. Seat belts, anti-lock brakes and a dashboard tachometer were not on his car.",
    why: "Same contested claim as the lesson body; the prompt is unchanged (it does not assert a first) so no learner's question history resets.",
  },
  {
    lesson: "e7-the-driver-s-body",
    target: { kind: "body" },
    find: "If you visit the Indianapolis Motor Speedway Museum, somewhere along the tour, you can climb into a cockpit mockup of an Indianapolis 500 car.\n\nThe cockpit is smaller than you think. The seat is molded to fit one specific driver, but the museum version is a generic shell.",
    replace:
      "Picture yourself climbing into the cockpit of an Indianapolis 500 car.\n\nThe cockpit is smaller than you think. The seat in a race car is molded to fit one specific driver, so imagine a generic shell.",
    why: "A cockpit mockup on the tour cannot be promised: museum exhibits rotate (IMS Museum Director of Education, 2026-11-16).",
  },
  {
    lesson: "e9-breaking-the-brickyard-glass-ceiling",
    target: { kind: "body" },
    find: "If you walk through the Indianapolis Motor Speedway Museum, somewhere in the exhibits on the history of the race, you will find a helmet.",
    replace:
      "The Indianapolis Motor Speedway Museum's collection holds a helmet. Exhibits rotate, so it is not always on display.",
    why: "Artifacts are in the collection but not guaranteed on display (IMS Museum Director of Education, 2026-11-16).",
  },
  {
    lesson: "e9-breaking-the-brickyard-glass-ceiling",
    target: { kind: "body" },
    find: "They are displayed today at the National Museum of American History in Washington, D.C., along with the helmet at the IMS Museum.",
    replace:
      "They belong to the National Museum of American History in Washington, D.C., and a Guthrie helmet is also in the IMS Museum's collection.",
    why: "Display claims replaced by collection claims; neither museum guarantees what is on the floor on a given day.",
  },
  {
    lesson: "e10-from-track-to-driveway",
    target: { kind: "body" },
    find: "the aeroscreen from 2020 are all in the IMS Museum, but",
    replace: "the aeroscreen from 2020 are all part of the IMS Museum's collection, but",
    why: "In the collection, not necessarily on display (IMS Museum Director of Education, 2026-11-16).",
  },
];

function countOf(haystack: string, needle: string): number {
  let n = 0;
  for (let i = haystack.indexOf(needle); i !== -1; i = haystack.indexOf(needle, i + needle.length)) n++;
  return n;
}

/** Apply one find-and-replace under the contract in the header. Exported for tests. */
export function applyOne(text: string, c: Pick<SpeedwayCorrection, "find" | "replace">, where: string): string {
  const found = countOf(text, c.find);
  if (found === 1) return text.replace(c.find, () => c.replace);
  if (found === 0 && text.includes(c.replace)) return text;
  throw new Error(
    `speedway correction for ${where}: expected the text to fix exactly once, found it ${found} time(s)` +
      ` and the corrected text is ${text.includes(c.replace) ? "present" : "absent"}. ` +
      `The generated course changed; update scripts/lib/speedway-corrections.ts. Text sought: ${JSON.stringify(c.find.slice(0, 80))}`,
  );
}

/** Return a corrected copy of the generated course. The input is not mutated. */
export function applySpeedwayCorrections(
  course: AuthoredCourse,
  corrections: SpeedwayCorrection[] = SPEEDWAY_CORRECTIONS,
): AuthoredCourse {
  const lessons = course.lessons.map((l) => ({
    ...l,
    ...(l.quiz ? { quiz: { ...l.quiz, questions: l.quiz.questions.map((q) => ({ ...q })) } } : {}),
  }));
  for (const c of corrections) {
    const lesson = lessons.find((l) => l.slug === c.lesson);
    if (!lesson) throw new Error(`speedway correction: no lesson with slug "${c.lesson}"`);
    if (c.target.kind === "body") {
      if (lesson.body == null) throw new Error(`speedway correction: lesson "${c.lesson}" has no body`);
      lesson.body = applyOne(lesson.body, c, `${c.lesson} body`);
    } else {
      const prompt = c.target.prompt;
      const q = lesson.quiz?.questions.find((x) => x.prompt === prompt);
      if (!q) throw new Error(`speedway correction: no question "${prompt}" in "${c.lesson}"`);
      q.explanation = applyOne(q.explanation ?? "", c, `${c.lesson} explanation of "${prompt}"`);
    }
  }
  return { ...course, lessons };
}
