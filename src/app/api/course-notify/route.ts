import { after } from "next/server";
import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { addCourseNotifySignup } from "@/db/queries/leads";
import { sendToInbox } from "@/lib/ecosystem-webhook";
import { checkRateLimit, clientIp } from "@/lib/rate-limit";
import { isVettingLocked } from "@/lib/vetting";

// POST /api/course-notify, "tell me when this course opens", from the public landing page of an
// UNVETTED course. Email only: these are strangers, and the address is the whole value, so asking
// for a name would cost signups and buy nothing.
//
// Public and unauthenticated, so it is treated as hostile input, the same way /api/pricing-inquiry
// is:
//   · the TENANT comes from apiContext() (resolved from the request HOST), never from the body, and
//     the course is read through the scoped DAL, so a caller cannot sign up against, or confirm the
//     existence of, another brand's course (a foreign id 404s like any unknown one);
//   · Zod validates on the SERVER; the form's own checks are a courtesy, not a control;
//   · a honeypot field bins bots without a captcha dependency;
//   · a per-IP sliding window (the shared in-memory limiter) caps submissions.
//
// It only accepts signups for a course that is actually published and unvetted, so this can't be
// used as a general-purpose email drop attached to any course id.

const WINDOW_MS = 10 * 60_000;
const MAX_PER_WINDOW = 5;

const Schema = z.object({
  courseId: z.string().uuid(),
  email: z.string().email().max(320),
  /** Honeypot. A human never sees this field, so anything in it is a bot. */
  company: z.string().max(200).optional(),
});

export async function POST(req: Request) {
  const { sdb } = await apiContext();

  const { allowed } = checkRateLimit(`course-notify:${sdb.tenantId}:${clientIp(req)}`, {
    windowMs: WINDOW_MS,
    max: MAX_PER_WINDOW,
  });
  if (!allowed) {
    return errorJson("You have signed up a few times already, we have your address.", 429);
  }

  const parsed = Schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Enter a valid email address", 400);

  // Honeypot tripped: answer 200 so the bot believes it worked and doesn't retry with a different
  // shape, but record nothing.
  if (parsed.data.company) return json({ ok: true });

  const course = await sdb.getCourseById(parsed.data.courseId);
  if (!course) return errorJson("Not found", 404);
  // Only an unvetted, published course has a "Coming soon" page to sign up from. Anything else
  // 404s rather than explaining itself: there is nothing for a stranger to learn here.
  if (!course.isPublished || course.visibility === "private" || !isVettingLocked(course)) {
    return errorJson("Not found", 404);
  }

  await addCourseNotifySignup({
    tenantId: sdb.tenantId,
    courseId: course.id,
    courseTitle: course.title,
    email: parsed.data.email,
  });

  // Mirror into the central WitUS Inbox triage (fire-and-forget AFTER the response; a no-op when
  // the inbox isn't configured). The signup is already durable in the school's own leads table, so
  // a failed mirror loses nothing.
  after(
    sendToInbox({
      form_type: "learn-course-notify",
      submitter_email: parsed.data.email,
      payload: {
        email: parsed.data.email,
        course_id: course.id,
        course_title: course.title,
        course_slug: course.slug,
        school: sdb.tenant.slug,
      },
    }),
  );

  return json({ ok: true });
}
