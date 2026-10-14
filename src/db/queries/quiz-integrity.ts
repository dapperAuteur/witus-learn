import "server-only";
import { and, eq, isNotNull, sql, type SQL } from "drizzle-orm";
import { db } from "@/db/client";
import { lessons } from "@/db/schema";
import {
  courseQuizIntegrity,
  type CourseQuizIntegrity,
  type IntegrityQuestion,
  type IntegrityQuiz,
} from "@/lib/quiz-integrity";

// The quiz-integrity counts for the Coming-soon face of an unvetted course and for
// /admin/quiz-integrity (plans/93 section 3). Every function takes a tenantId and filters on it, and
// is reached through ScopedDb, which supplies that id itself.
//
// NO QUESTION TEXT LEAVES THE DATABASE. Postgres unpacks quiz_content with jsonb_array_elements and
// returns, per question, only the option LENGTHS, the correct index, whether an explanation exists
// and the source-lesson slug. The length measures then run in src/lib/quiz-integrity.ts, the same
// code the lint guards run, and only the counts are returned. So the Coming-soon page, which must
// never be handed a lesson, receives numbers and nothing else, and the admin table loads every
// course in the school without shipping every quiz's JSON.
//
// Lengths are measured in SQL as trimmed character counts. JavaScript counts UTF-16 units and trims a
// few more kinds of space, so an option holding an emoji can measure one longer in the lint guards.
// The admin page says so; the lint figures are the ones that gate a commit.
//
// Published lessons only, on both sides, matching quizIntegrityFromLessons on the course page.

/** One quiz lesson's bank as SQL returns it: [optionLengths, correctIndex, hasExplanation, slug]. */
type PackedQuestion = [number[] | null, number | null, boolean, string | null];

interface BankRow extends Record<string, unknown> {
  course_id: string;
  shuffle_options: boolean | null;
  questions: PackedQuestion[] | null;
}

function bankRows(tenantId: string, courseId?: string) {
  const onlyCourse: SQL = courseId ? sql`and l.course_id = ${courseId}` : sql.empty();
  return db.execute<BankRow>(sql`
    select
      l.course_id,
      case when jsonb_typeof(l.quiz_content -> 'shuffleOptions') = 'boolean'
           then (l.quiz_content ->> 'shuffleOptions')::boolean end as shuffle_options,
      (
        select json_agg(
                 json_build_array(
                   (
                     select array_agg(
                              case when jsonb_typeof(o.value) = 'string'
                                   then char_length(regexp_replace(o.value #>> '{}', '^[[:space:]]+|[[:space:]]+$', '', 'g'))
                              end
                              order by o.ord)
                     from jsonb_array_elements(
                            case when jsonb_typeof(q.value -> 'options') = 'array'
                                 then q.value -> 'options' else '[]'::jsonb end
                          ) with ordinality as o(value, ord)
                   ),
                   case when jsonb_typeof(q.value -> 'correctIndex') = 'number'
                        then (q.value ->> 'correctIndex')::float8 end,
                   coalesce(jsonb_typeof(q.value -> 'explanation') = 'string'
                            and (q.value ->> 'explanation') ~ '[^[:space:]]', false),
                   case when jsonb_typeof(q.value -> 'sourceLessonSlug') = 'string'
                        then q.value ->> 'sourceLessonSlug' end
                 )
                 order by q.ord)
        from jsonb_array_elements(
               case when jsonb_typeof(l.quiz_content -> 'questions') = 'array'
                    then l.quiz_content -> 'questions' else '[]'::jsonb end
             ) with ordinality as q(value, ord)
        where jsonb_typeof(q.value) = 'object'
      ) as questions
    from lessons l
    where l.tenant_id = ${tenantId}
      and l.is_published
      and l.lesson_type = 'quiz'
      ${onlyCourse}
  `);
}

function unpack(q: PackedQuestion): IntegrityQuestion {
  const [optionLengths, correctIndex, hasExplanation, sourceLessonSlug] = q;
  return { optionLengths, correctIndex, hasExplanation, sourceLessonSlug };
}

/**
 * Quiz-integrity counts per course in this tenant: every course, or just `courseId`. A course with no
 * quiz holding a question is absent from the map, which the panel renders as nothing.
 */
export async function quizIntegrityByCourse(
  tenantId: string,
  courseId?: string,
): Promise<Map<string, CourseQuizIntegrity>> {
  const [banks, slugRows] = await Promise.all([
    bankRows(tenantId, courseId).then((r) => r.rows),
    db
      .select({ courseId: lessons.courseId, slug: lessons.slug })
      .from(lessons)
      .where(
        and(
          eq(lessons.tenantId, tenantId),
          eq(lessons.isPublished, true),
          isNotNull(lessons.slug),
          courseId ? eq(lessons.courseId, courseId) : undefined,
        ),
      ),
  ]);

  const slugsByCourse = new Map<string, string[]>();
  for (const r of slugRows) {
    if (!r.slug) continue;
    const list = slugsByCourse.get(r.courseId);
    if (list) list.push(r.slug);
    else slugsByCourse.set(r.courseId, [r.slug]);
  }
  const quizzesByCourse = new Map<string, IntegrityQuiz[]>();
  for (const b of banks) {
    const quiz: IntegrityQuiz = { shuffleOptions: b.shuffle_options, questions: (b.questions ?? []).map(unpack) };
    const list = quizzesByCourse.get(b.course_id);
    if (list) list.push(quiz);
    else quizzesByCourse.set(b.course_id, [quiz]);
  }

  const out = new Map<string, CourseQuizIntegrity>();
  for (const [id, quizzes] of quizzesByCourse) {
    const summary = courseQuizIntegrity(quizzes, slugsByCourse.get(id) ?? []);
    if (summary) out.set(id, summary);
  }
  return out;
}
