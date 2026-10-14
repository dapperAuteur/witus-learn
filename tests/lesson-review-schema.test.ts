import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { getTableColumns } from "drizzle-orm";
import { lessonReviews } from "@/db/schema/lesson-reviews";
import { courseAuditors } from "@/db/schema/auditors";

// The no-inbox rule (CLAUDE.md), as a test, for reviewer sign-off (plans/93 section 1). A reviewer's
// correction is CONTENT attached to one lesson and one need: one-way, replaced by the next verdict,
// never answered. The day lesson_reviews grows a reply, a thread, a parent row or a read receipt, it
// is a conversation between two people, and the moderation, retention and disclosure obligations
// that come with one arrive with it. If this test fails because you added a column, the fix is not to
// update the list: it is to take the decision back to BAM.

const columnNames = (t: Parameters<typeof getTableColumns>[0]) =>
  Object.values(getTableColumns(t))
    .map((c) => c.name)
    .sort();
const src = (p: string) => readFileSync(join(process.cwd(), p), "utf8");

describe("lesson_reviews carries a verdict, never a conversation", () => {
  it("has exactly the columns of one current verdict", () => {
    expect(columnNames(lessonReviews)).toEqual(
      [
        "auditor_id",
        "correction",
        "correction_applied_at",
        "course_id",
        "decided_at",
        "id",
        "lesson_hash",
        "lesson_id",
        "need_kind",
        "reviewer_credential",
        "reviewer_name",
        "reviewer_user_id",
        "tenant_id",
        "verdict",
      ].sort(),
    );
  });

  it("no review column is shaped like a message, a thread or a read receipt", () => {
    const messageish = /(reply|thread|parent|read_at|seen_at|message|body)/;
    expect(columnNames(lessonReviews).filter((n) => messageish.test(n))).toEqual([]);
    // The grant's new credit columns are labels the INVITER sets, not a channel either.
    expect(columnNames(courseAuditors).filter((n) => messageish.test(n))).toEqual([]);
  });

  it("one current verdict per lesson and need: a new one replaces the old, no history chain", () => {
    const schema = src("src/db/schema/lesson-reviews.ts");
    expect(schema).toContain('unique("lesson_reviews_tenant_lesson_kind_uq").on(t.tenantId, t.lessonId, t.needKind)');
    const q = src("src/db/queries/lesson-reviews.ts");
    expect(q).toContain("target: [lessonReviews.tenantId, lessonReviews.lessonId, lessonReviews.needKind]");
  });

  it("recording a verdict notifies nobody: no email, no Inbox mirror, no notification", () => {
    const routes = [
      "src/app/api/courses/[id]/lessons/[lessonId]/review/route.ts",
      "src/app/api/courses/[id]/lessons/[lessonId]/review/applied/route.ts",
      "src/app/api/courses/[id]/release-review-hold/route.ts",
      "src/db/queries/lesson-reviews.ts",
    ];
    for (const r of routes) {
      const code = src(r)
        .split("\n")
        .filter((l) => !l.trim().startsWith("//") && !l.trim().startsWith("*"))
        .join("\n");
      for (const banned of ["sendToInbox", "@/lib/emails", "Email(", "mailgun", "notification", "notify"]) {
        expect(code.toLowerCase(), `${r} must not reach ${banned}`).not.toContain(banned.toLowerCase());
      }
    }
  });

  it("no page lists corrections across courses: the reviewer's list shows states, never correction text", () => {
    const page = src("src/app/(tenant)/audit/review/page.tsx");
    expect(page).not.toContain(".correction");
  });
});
