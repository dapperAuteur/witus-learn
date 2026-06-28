import "server-only";
import type { Course } from "@/db/schema";
import { listLessons } from "@/db/queries/authoring";
import { getLessonEmbedding, matchLessons, matchLessonsGlobal } from "@/db/queries/cyoa";

export interface Crossroad {
  type: "linear" | "semantic" | "random" | "cross";
  label: string;
  title: string;
  href: string;
}

// Build the CYOA "crossroads" for a lesson: linear next + up to 2 semantic
// neighbors + 1 random + (opt-in) 1 cross-course. All same-course links use the
// current pretty URL; cross-course links go via /course/[id] (which redirects).
export async function buildCrossroads(opts: {
  tenantId: string;
  course: Course;
  lessonId: string;
  username: string;
  courseSlug: string;
}): Promise<Crossroad[]> {
  const { tenantId, course, lessonId, username, courseSlug } = opts;
  const all = (await listLessons(course.id)).filter((l) => l.isPublished);
  const base = `/${username}/${courseSlug}`;
  const out: Crossroad[] = [];
  const used = new Set([lessonId]);

  const idx = all.findIndex((l) => l.id === lessonId);
  const next = idx >= 0 && idx < all.length - 1 ? all[idx + 1] : null;
  if (next?.slug) {
    out.push({ type: "linear", label: "Continue", title: next.title, href: `${base}/lesson/${next.slug}` });
    used.add(next.id);
  }

  const embedding = await getLessonEmbedding(lessonId);
  if (embedding) {
    let semantic = 0;
    for (const n of await matchLessons(course.id, embedding, lessonId, 4)) {
      if (used.has(n.id) || !n.slug) continue;
      out.push({ type: "semantic", label: "Related", title: n.title, href: `${base}/lesson/${n.slug}` });
      used.add(n.id);
      if (++semantic >= 2) break;
    }
    if (course.allowCrossCourseCyoa) {
      for (const g of await matchLessonsGlobal(tenantId, embedding, lessonId, course.id, 1)) {
        out.push({ type: "cross", label: `From: ${g.courseTitle}`, title: g.title, href: `/course/${g.courseId}` });
      }
    }
  }

  const others = all.filter((l) => !used.has(l.id) && l.slug);
  if (others.length > 0) {
    const r = others[Math.floor(Math.random() * others.length)];
    out.push({ type: "random", label: "Unexpected path", title: r.title, href: `${base}/lesson/${r.slug}` });
  }
  return out;
}
