# Database egress audit: public pages (C08, 2026-10-20)

**Goal.** Cut the bytes Postgres sends to the app per request, so Learn fits Neon's Free plan
(5 GB of transfer a month). 7.71 GB left the database in 11 days while storage is only 102 MB, so
the same rows were being re-read over and over. The likely readers are crawlers on public course,
lesson, explore and sitemap pages.

**Rules for the fix.** Select only the columns a page renders. Cache read-mostly public data with
Next's data cache (`unstable_cache` plus tags), and clear the tags where admins edit content. Never
cache per-user data (progress, notes, enrollment, auth). No schema changes, no new services.

## How big the rows are

Content does not live in the database as small rows. A course's lessons carry `text_content` (the
whole lesson in Markdown), plus `quiz_content`, `exercise_content`, `transcript_content`,
`map_content`, `recall_content`, `review_needs`, `documents` and `audio_chapters` (all JSON). Going
by the seed files that build them (`scripts/data/*.ts`, 317 files), a course's content is about
**110 KB at the median and 366 KB at the 90th percentile** (the largest is 505 KB).

## Step 1: what every public page read (before)

"Every request" means it ran for every visitor, crawler or not, with no caching between requests.
Only React's per-request `cache()` existed (on `resolveTenant` and `tenantHasMapData`).

| Page | Query | Columns pulled | Problem |
|---|---|---|---|
| Every page (layout, metadata, sitemap, OG image) | `getTenantByHost` | `tenants.*` (theme, legal, flags, stripe, email JSON) | Once per request. Small, but on every request. |
| `/{user}/{course}` (course page) | `getCourseBySlug` | `courses.*` | Run **twice**: `generateMetadata` and the page each call `loadCourseView`, which was not deduped. |
| | `listLessons` | **`lessons.*`, every lesson in the course** | **SELECT \*.** Pulls every lesson's `text_content` and all 9 JSON columns to draw a list of titles. Run twice (metadata + page). Roughly 110 KB × 2 per view at the median. |
| | `course_modules` | `course_modules.*` | Twice. Small. |
| | `quizIntegrityFromLessons(lessons)` | (reads `quiz_content` from the list above) | Needs whole quiz JSON in the app just to count option lengths. A SQL version that returns lengths only already existed (`courseQuizIntegrity`). |
| | glossary, sources, prerequisites, bundles, promotions, live, paths, source-chat config | narrow or small | Left as is (small, and several are per-user or time-dependent). |
| `/{user}/{course}/lesson/{slug}` (lesson page) | `loadCourseView` (same as above) | **`lessons.*` for the whole course** | **The biggest cost.** Every lesson view pulls every lesson's body to render ONE lesson, twice (metadata + page). A crawler walking a 40-lesson course reads the whole course 80 times. |
| | `listCourses(tenant)` | `courses.*` for the whole catalog | Only to build a set of published slugs for "Also discussed in". Runs on any lesson that names an entity. |
| `/{user}/{course}/results` | `loadCourseView` | `lessons.*` | Per-user page; same lesson-list cost. |
| `/` (home, catalog view) | `listCourses`, `listCategories` | `courses.*`, `course_categories.*` | Fine on columns (cards render title, description, price, series, category); re-read every request. |
| `/courses` | `listCourses` (+ a second `listCourses` for slugs when a search matches an entity) | `courses.*` | Re-read every request. The second call reads the whole catalog for a slug set. |
| `/explore` | `tenantHasMapData`, `listCommodities`, `listBelts`, four aggregate counts, `getExploreCopy` | `map_commodities.*`, `map_belts.*`, counts | `listCommodities` runs in both metadata and page. Aggregates return a few bytes but scan every lesson. Re-read every request. |
| `/api/og` (share-card image; crawlers fetch one per page) | `getTenantByHost`, `listCommodities` (map card) | `tenants.*`, `map_commodities.*` | Re-read for every image. |
| `/sitemap.xml` | `listSitemapCourses`, `tenantHasMapData`, `getAlignedCourses` | narrow (slug, flags, username, `updated_at`) | Columns already narrow. Re-read on every crawl. |
| `/series`, `/series/{slug}`, `/paths`, `/bundles`, `/instructors`, `/academic-standards`, `/episode/{id}` | various | mostly narrow | Not changed in this pass (lower traffic, small rows). Listed as follow-ups. |
| `/embed/course/{id}`, `/embed/card/{id}` | `getPublishedCourseWithLessons`, `getPublishedCourseCard` | already narrow (`id, slug, title, lessonType, sortOrder`) | Already fine. |

Signed-in API routes that fire on every lesson view also pulled `lessons.*` for the whole course
just to compute lesson order: `/api/courses/[id]/lessons/[lessonId]/{progress,quiz,submission,notes}`.
They are not public pages, but the same fix applies and costs nothing, so step 2 includes them.

## Step 2: select only the columns a page renders

* New `listLessonSummaries(courseId)` selects **13 small columns** (id, course and module ids,
  title, slug, type, content URL, duration, order, free-preview, published, recorded, updated).
  It drops `text_content`, `content_format`, `quiz_content`, `recall_content`, `review_needs`,
  `exercise_content`, `audio_chapters`, `media_parts`, `transcript_content`, `map_content`,
  `documents`, `podcast_links`, `video_360_autoplay`, `video_360_poster_url`, `created_at`.
  `loadCourseView` uses it, so `CourseView.lessons` is now typed `LessonSummary[]` and the compiler
  refuses any page that reaches for a body through the list.
* The lesson page loads the ONE full lesson it renders, with `getCourseLesson(courseId, lessonId)`.
* `loadCourseView` is wrapped in React `cache()`, so `generateMetadata` and the page share one load.
* The course page's quiz-integrity panel uses the SQL-side counts (`courseQuizIntegrity`), which
  return option lengths and never quiz JSON.
* "Also discussed in" (lesson page) and the entity search on `/courses` use
  `listPublishedCourseSlugs`, which selects one column.
* The four lesson API routes use `listLessonSummaries` for ordering.

## Step 3: cache read-mostly public data

All cached reads live in `src/lib/public-cache.ts` (`server-only`) and go through `cachedRead`,
which wraps `unstable_cache`, keys on the arguments, tags each entry, and keeps `Date` values
intact (plain `unstable_cache` turns them into strings through JSON). Every entry also has a
one-hour `revalidate`, a backstop for writes made outside the app (the `seed:*` scripts write
straight to the database and cannot clear a tag).

| Cached read | Tags |
|---|---|
| Tenant by host | `tenants` |
| Course by pretty URL | `catalog:<tenant>`, `profiles` |
| Lesson summaries, sections, one lesson's full row | `course:<id>` |
| Public catalog (`listCourses` without a search or unpublished courses), categories, published slugs | `catalog:<tenant>` |
| Sitemap course rows | `catalog:<tenant>` |
| Map pins, belts, explore counts, map-data check | `catalog:<tenant>` |

**Not cached, on purpose:** sessions, enrollment, progress, notes, quiz attempts, auditor grants,
per-user dashboards (all per-user); promotions (they start and end on the clock); catalog searches
with a free-text `q` (unbounded keys); the editor's view including unpublished courses.

## Step 4: where the tags are cleared

`src/lib/cache-tags.ts` names every tag and expires them with `revalidateTag(tag, { expire: 0 })`,
so the next read after an edit is fresh. Called from:

| Write | Clears |
|---|---|
| `createCourse`, `updateCourse`, `deleteCourse` | `catalog:<tenant>`, `course:<id>` |
| Any lesson or section write (`create/update/deleteLesson`, `create/update/deleteModule`), through `bumpCourseContentVersion` | `course:<id>`, `catalog:<tenant>` |
| Category create, rename, reorder, delete | `catalog:<tenant>` |
| Announce stamp, demo-course cleanup | `catalog:<tenant>` |
| Profile update (a username is half of a course URL) | `profiles` |
| Tenant settings, domains, activation | `tenants` |

Outside a Next request (seed scripts), clearing is a no-op and the one-hour backstop applies. Run a
seed, and the site shows the new content within the hour, or immediately after any in-app edit to
the same course.
