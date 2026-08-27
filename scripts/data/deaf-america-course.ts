import type { AuthoredCourse } from "./authored-course";

// "Deaf America: Language, Schools, and the Record" (Culture & History). Tier 0. Standalone: it is
// NOT in the `credit` series, because only one of its six sections is a credit mechanism end to end
// and a series code that overstates the spine is worse than none.
//
// WHAT BAM APPROVED, and the research that produced it:
// plans/future-courses/languages/2026-08-25-02-sign-language-feasibility.md sections 3 to 7. That
// document established, by reading the actual licence text, that every usable sign-media dataset is
// barred from a paid course (ASL-LEX carves the videos out entirely, WLASL allows no commercial
// usage, ASL Citizen forbids redistribution of any kind), and that a signing curriculum needs a Deaf
// co-author and original video that does not exist. So this course teaches HISTORY, CULTURE,
// LINGUISTICS and LAW, requires no video, and says in its first lesson that it does not teach anyone
// to sign.
//
// THE THESIS, and why it belongs in this catalog rather than in a language app:
// A language was used for two centuries before the academy agreed it was a language, and the people
// who used it were described, schooled, legislated about and recorded almost entirely by people who
// did not use it. That is this catalog's subject (`who-gets-named`, `archives-and-finding-aids`,
// `documents-against-people`) operating on an entire language. BLACK ASL IS THE CENTRE: a variety
// produced by segregated schools, then judged wrong by the standard it had been excluded from, and
// not described in the scholarly record until 2011.
//
// HARD RULES THIS FILE KEEPS (do not relax without BAM's editorial sign-off):
//  1. IT DOES NOT TEACH SIGNS. No lesson asks a learner to produce a sign, and no lesson describes a
//     sign's form as something to copy. Grammar is taught the way a syntax course teaches Japanese
//     to people who do not speak Japanese.
//  2. STANDPOINT IS STATED, NOT IMPLIED. Lesson 1 says in plain words that a hearing author wrote
//     this from published sources, what that costs, and where to learn ASL from Deaf teachers
//     instead. The course description says it above the fold as well.
//  3. IDENTITY CLAIMS REQUIRE A PUBLIC SELF-STATEMENT with a citation, the same rule
//     `who-gets-named` keeps. Deaf identity is an identity claim.
//  4. CONTESTED CLAIMS ARE TAUGHT AS CONTESTED with the holders of each position named.
//  5. NO INVENTED SOURCE, DATE, QUOTATION, URL OR STATISTIC, and every "first" carries the
//     institution that issues it. What could not be settled is hedged in the lesson AND filed in
//     src/lib/research-checks.ts.
//
// House style, matching who-gets-named-course.ts: `section` on every lesson; flush-left single-line
// `:::reveal q ||| a`; a `## Vocabulary` block of 3-6 lesson-specific terms; APA 7 `## Sources`; a
// quiz per teaching section (serving 5, passing 80, shuffled) plus a final serving 10; every question
// carries `explanation` + `sourceLessonSlug`. Correct options are written SHORT and distractors long
// and specific, so `check-longest-option` passes by construction.
export const DEAF_AMERICA_COURSE: AuthoredCourse = {
  title: "PLACEHOLDER",
  description: "PLACEHOLDER",
  lessons: [],
};
