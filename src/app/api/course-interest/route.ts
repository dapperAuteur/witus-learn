import { after } from "next/server";
import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { addCourseNotifySignup } from "@/db/queries/leads";
import { sendToInbox } from "@/lib/ecosystem-webhook";
import { checkRateLimit, clientIp } from "@/lib/rate-limit";
import { getSiteUrl } from "@/lib/site-url";
import { isVettingLocked } from "@/lib/vetting";
import {
  buildInboxSubmission,
  feedsLeadFunnel,
  INTEREST_ACK,
  isInterestCapacity,
  normalizeInterestInput,
  normalizePhone,
} from "@/lib/course-interest";

// POST /api/course-interest, the public "put my hand up on this course" form on an UNVETTED
// course's landing page: interested learner, beta tester, or subject matter expert.
//
// WHAT THIS ROUTE DOES NOT DO, which is the whole design: it does not grant anything. It writes a
// PENDING request. Nothing in the body can set a status, and no branch here mints a course_auditors
// row. A self-nominated expert reaches the same "Coming soon" page as any stranger until the owner
// approves them on /teach, which is the only place a grant is minted (see
// src/app/api/courses/[id]/interest/[requestId]/route.ts and src/lib/course-interest.ts).
//
// SIGNED-OUT VISITORS MAY SUBMIT. Requiring an account would cost exactly the people worth having,
// since a subject matter expert has no reason to hold an account on a school whose course they have
// been asked to check. So the input is treated as hostile, the way /api/course-notify and
// /api/pricing-inquiry already are:
//   · the TENANT comes from apiContext() (resolved from the request HOST), never from the body, and
//     the course is read through the scoped DAL, so a caller cannot apply against, or confirm the
//     existence of, another brand's course (a foreign id 404s like any unknown one);
//   · Zod validates on the SERVER, with hard length caps on every free-text field;
//   · a honeypot field bins bots without a captcha dependency;
//   · a per-IP sliding window caps submissions, and a second per-ADDRESS window stops one IP
//     cycling addresses at the same course;
//   · the unique key (tenant, course, email) means a re-submit updates one row instead of piling up;
//   · the acknowledgement is IDENTICAL whatever happened, so the response cannot be used to probe
//     whether an address has already applied or has already been declined.
//
// The limiter is per-process and best-effort (src/lib/rate-limit.ts says so plainly). It is a speed
// bump, not a wall; the durable protections are the unique key and the fact that a request grants
// nothing until a human acts.

const WINDOW_MS = 10 * 60_000;
const MAX_PER_IP = 5;
const MAX_PER_EMAIL = 3;

const Schema = z.object({
  courseId: z.string().uuid(),
  capacity: z.string().refine(isInterestCapacity, "Pick one of the three."),
  name: z.string().trim().min(1).max(200),
  email: z.string().email().max(320),
  /** Optional. Loose on purpose: see normalizePhone. 60 chars fits any international number. */
  phone: z.string().max(60).optional(),
  /** Optional. Long enough for a real paragraph of background, short enough not to be an essay. */
  credentials: z.string().max(2000).optional(),
  /** Honeypot. A human never sees this field, so anything in it is a bot. */
  company: z.string().max(200).optional(),
});

export async function POST(req: Request) {
  const { sdb, session } = await apiContext();

  const ip = clientIp(req);
  if (!checkRateLimit(`course-interest:${sdb.tenantId}:${ip}`, { windowMs: WINDOW_MS, max: MAX_PER_IP }).allowed) {
    return errorJson("You have sent this a few times already. We have it.", 429);
  }

  const parsed = Schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return errorJson("Check the form: a name, a valid email address, and one of the three.", 400);
  }
  const body = parsed.data;

  // Honeypot tripped: answer as if it worked so the bot does not retry with a different shape, and
  // record nothing.
  if (body.company) return json({ ok: true, message: INTEREST_ACK });

  // A non-empty phone with no digit in it at all is the ONE phone rejection. Everything else is
  // accepted and stored, because a strict pattern here silently refuses real international numbers.
  const phone = normalizePhone(body.phone);
  if (!phone.usable) {
    return errorJson("That phone number has no digits in it. Fix it, or leave it blank.", 400);
  }

  if (
    !checkRateLimit(`course-interest-email:${sdb.tenantId}:${body.email.trim().toLowerCase()}`, {
      windowMs: WINDOW_MS,
      max: MAX_PER_EMAIL,
    }).allowed
  ) {
    return errorJson("You have sent this a few times already. We have it.", 429);
  }

  const course = await sdb.getCourseById(body.courseId);
  if (!course) return errorJson("Not found", 404);
  // Only an unvetted, published course shows this form, so anything else 404s rather than
  // explaining itself. It also means this cannot be used as a general contact drop on any course id.
  if (!course.isPublished || course.visibility === "private" || !isVettingLocked(course)) {
    return errorJson("Not found", 404);
  }

  const request = normalizeInterestInput({
    capacity: body.capacity,
    name: body.name,
    email: body.email,
    phone: body.phone,
    credentials: body.credentials,
  });

  // THE ROW FIRST. Everything after this point is a notification, and a notification that fails
  // must never lose a submission the person was already told we had.
  await sdb.addCourseInterest({
    courseId: course.id,
    userId: session?.user.id ?? null,
    request,
  });

  // The two learner-shaped capacities also land in the school's existing lead funnel, because that
  // is exactly what the "notify me when this opens" button does and the demand board should keep
  // counting them. Email and course only: `leads` feeds a CSV export and an email-campaign
  // audience, so the phone number and the credentials must not go anywhere near it.
  if (feedsLeadFunnel(request.capacity)) {
    await addCourseNotifySignup({
      tenantId: sdb.tenantId,
      courseId: course.id,
      courseTitle: course.title,
      email: request.email,
    });
  }

  // Mirror EVERY capacity into the central WitUS Inbox triage, fire-and-forget AFTER the response
  // (a no-op when the inbox is not configured). The body is built by a pure function so what it
  // does and does not carry is a tested fact: no phone number, no credentials, just who, which
  // capacity, which course, and a link back to the owner's own view where the PII actually lives.
  const reviewUrl = `${await getSiteUrl()}/teach/${course.slug ?? course.id}#course-interest`;
  after(
    sendToInbox(
      buildInboxSubmission({
        request,
        courseId: course.id,
        courseTitle: course.title,
        courseSlug: course.slug,
        schoolSlug: sdb.tenant.slug,
        reviewUrl,
      }),
    ),
  );

  return json({ ok: true, message: INTEREST_ACK });
}
