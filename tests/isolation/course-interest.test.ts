import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import {
  buildInboxSubmission,
  CAPACITIES,
  capacityLabel,
  feedsLeadFunnel,
  grantsAuditOnDecision,
  INTEREST_PII_FIELDS,
  INTEREST_PRIVACY_NOTICE,
  INTEREST_ROUTING_NOTICE,
  isInterestCapacity,
  normalizeInterestInput,
  normalizePhone,
  PHONE_MAX_DIGITS,
  PHONE_MIN_DIGITS,
  serializeForOwner,
  type InterestCapacity,
  type InterestRow,
} from "@/lib/course-interest";
import { isAcceptedAuditor, type AuditorGrant } from "@/lib/auditors";
import { canSeeUnvettedContent, courseViewGate } from "@/lib/vetting";

// Self-nomination (this branch), guarded from four directions:
//
//   1. a REQUEST is not a GRANT. Nobody who fills in the public form can read an unvetted course
//      until a human approves them, and approving the wrong capacity grants nothing either.
//   2. a submission in tenant A is invisible in tenant B, like every other row in this app.
//   3. the volunteered phone number and credentials reach the course owner and nothing else: not a
//      public page, not a learner-reachable API, not the marketing funnel, not the inbox webhook.
//   4. the phone field accepts real international numbers instead of quietly refusing them.
//
// The decisions are pure (src/lib/course-interest.ts), so all of this runs offline. The few places
// where an invariant has to be spelled into a route are checked by reading the source, which is how
// the repo already guards its other invariants (tests/isolation/course-auditors.test.ts).
const src = (p: string) => readFileSync(join(process.cwd(), p), "utf8");

const TENANT_A = "11111111-1111-1111-1111-111111111111";
const TENANT_B = "22222222-2222-2222-2222-222222222222";
const COURSE_A = "aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa";

const PUBLIC_ROUTE = "src/app/api/course-interest/route.ts";
const LIST_ROUTE = "src/app/api/courses/[id]/interest/route.ts";
const DECIDE_ROUTE = "src/app/api/courses/[id]/interest/[requestId]/route.ts";
const FORM = "src/components/course-interest-form.tsx";
const PANEL = "src/components/course-interest-panel.tsx";
const COMING_SOON = "src/components/coming-soon-course.tsx";

const row = (over: Partial<InterestRow> = {}): InterestRow => ({
  id: "req-1",
  tenantId: TENANT_A,
  courseId: COURSE_A,
  capacity: "expert",
  status: "pending",
  name: "Ada Lovelace",
  email: "ada@example.com",
  phone: "+442071234567",
  phoneRaw: "+44 20 7123 4567",
  credentials: "Thirty years analysing engines.",
  createdAt: new Date("2026-08-25T10:00:00Z"),
  decidedAt: null,
  ...over,
});

// ── 1. A self-nomination is a request, never a grant ───────────────────────────────────

describe("a self-nomination grants nothing until a human approves it", () => {
  it("a PENDING request grants no audit access, in any capacity", () => {
    for (const c of CAPACITIES) {
      expect(grantsAuditOnDecision({ capacity: c.value, status: "pending" })).toBe(false);
    }
  });

  it("a DECLINED request grants no audit access, in any capacity", () => {
    for (const c of CAPACITIES) {
      expect(grantsAuditOnDecision({ capacity: c.value, status: "declined" })).toBe(false);
    }
  });

  it("only an APPROVED beta tester or expert gets a grant, never an interested learner", () => {
    expect(grantsAuditOnDecision({ capacity: "expert", status: "approved" })).toBe(true);
    expect(grantsAuditOnDecision({ capacity: "beta", status: "approved" })).toBe(true);
    // An interested learner asked to be TOLD when the course opens, not to read it early.
    expect(grantsAuditOnDecision({ capacity: "learner", status: "approved" })).toBe(false);
  });

  it("a self-nominated expert still sees the Coming soon face until the grant is accepted", () => {
    // The whole escalation path, end to end, with the real auditor matcher. Submitting the form
    // creates NO course_auditors row, so there is no grant to match and the gate says coming-soon.
    const noGrants: AuditorGrant[] = [];
    const unvetted = { isPublished: true, visibility: "public", vettedAt: null, allowUnvettedPublic: false };
    const viewer = { tenantId: TENANT_A, courseId: COURSE_A, userId: "u-expert", email: "ada@example.com" };

    const beforeApproval = canSeeUnvettedContent({
      isOwnerOrInstructor: false,
      isEnrolled: false,
      isAuditor: isAcceptedAuditor(noGrants, viewer),
    });
    expect(beforeApproval).toBe(false);
    expect(courseViewGate({ ...unvetted, isEditor: false, canSeeUnvetted: beforeApproval })).toBe(
      "coming-soon",
    );

    // Approval mints the grant, and inviteCourseAuditor leaves accepted_at NULL, so even an
    // APPROVED expert is still outside until they open their invite link.
    const invited: AuditorGrant[] = [
      { tenantId: TENANT_A, courseId: COURSE_A, email: "ada@example.com", userId: null, acceptedAt: null },
    ];
    const afterApproval = canSeeUnvettedContent({
      isOwnerOrInstructor: false,
      isEnrolled: false,
      isAuditor: isAcceptedAuditor(invited, viewer),
    });
    expect(afterApproval).toBe(false);
    expect(courseViewGate({ ...unvetted, isEditor: false, canSeeUnvetted: afterApproval })).toBe(
      "coming-soon",
    );

    // Accepted: now, and only now, the course opens.
    const accepted: AuditorGrant[] = [{ ...invited[0]!, acceptedAt: new Date("2026-08-25T12:00:00Z") }];
    const afterAccept = canSeeUnvettedContent({
      isOwnerOrInstructor: false,
      isEnrolled: false,
      isAuditor: isAcceptedAuditor(accepted, viewer),
    });
    expect(afterAccept).toBe(true);
    expect(courseViewGate({ ...unvetted, isEditor: false, canSeeUnvetted: afterAccept })).toBe("open");
  });

  it("the PUBLIC route writes a pending request and mints no grant of any kind", () => {
    const code = src(PUBLIC_ROUTE);
    // The one write it makes is the request itself, plus the pre-existing lead funnel entry.
    expect(code).toContain("addCourseInterest(");
    // Nothing that hands out access may appear in a route anyone on the internet can call.
    for (const forbidden of ["inviteCourseAuditor", "acceptAuditorInvite", "enrollFree", "createCompletion"]) {
      expect(code, `${PUBLIC_ROUTE} must not call ${forbidden}`).not.toContain(forbidden);
    }
    // And the status is never read from the body: the schema has no status field at all.
    expect(code).not.toMatch(/status:\s*z\./);
  });

  it("the query layer forces every new request to `pending`", () => {
    const code = src("src/db/queries/course-interest.ts");
    expect(code).toContain('status: "pending"');
    // The upsert must not carry status in its conflict SET, or a re-submit could reopen a decline.
    const setBlock = code.slice(code.indexOf("onConflictDoUpdate"), code.indexOf("decideCourseInterest"));
    expect(setBlock).not.toContain("status:");
    expect(setBlock).toContain("setWhere");
  });

  it("approval mints the EXISTING auditor grant, and only behind grantsAuditOnDecision", () => {
    const code = src(DECIDE_ROUTE);
    expect(code).toContain("grantsAuditOnDecision(");
    expect(code).toContain("inviteCourseAuditor(");
    // The gate must come BEFORE the mint, or the check is decoration.
    expect(code.indexOf("grantsAuditOnDecision(")).toBeLessThan(code.indexOf("inviteCourseAuditor("));
    // No capacity ever enrolls anybody: that would put a tester into the course statistics.
    for (const forbidden of ["enrollFree", "createEnrollment", "createCompletion"]) {
      expect(code, `${DECIDE_ROUTE} must not call ${forbidden}`).not.toContain(forbidden);
    }
  });

  it("both routes that reach the grant share ONE permission gate", () => {
    for (const r of [LIST_ROUTE, DECIDE_ROUTE, "src/app/api/courses/[id]/auditors/route.ts"]) {
      expect(src(r), r).toContain("canManageCourseReviewers");
    }
  });
});

// ── 2. Tenant isolation ────────────────────────────────────────────────────────────────

describe("a submission in one school is invisible in another", () => {
  it("serializeForOwner drops a row belonging to another tenant", () => {
    expect(serializeForOwner(row({ tenantId: TENANT_B }), TENANT_A)).toBeNull();
    expect(serializeForOwner(row({ tenantId: TENANT_A }), TENANT_B)).toBeNull();
    expect(serializeForOwner(row(), TENANT_A)).not.toBeNull();
  });

  it("an approved grant in tenant A opens nothing in tenant B", () => {
    const grant: AuditorGrant = {
      tenantId: TENANT_A,
      courseId: COURSE_A,
      email: "ada@example.com",
      userId: null,
      acceptedAt: new Date("2026-08-25T12:00:00Z"),
    };
    expect(
      isAcceptedAuditor([grant], { tenantId: TENANT_B, courseId: COURSE_A, userId: null, email: "ada@example.com" }),
    ).toBe(false);
  });

  it("every query in the data layer filters tenant_id", () => {
    const code = src("src/db/queries/course-interest.ts");
    const fns = code.split(/export async function /).slice(1);
    expect(fns.length).toBeGreaterThan(0);
    for (const fn of fns) {
      const name = fn.slice(0, fn.indexOf("("));
      expect(fn, `${name} must filter tenantId`).toContain("courseInterestRequests.tenantId");
    }
  });

  it("no route reaches the table except through the scoped DAL", () => {
    for (const r of [PUBLIC_ROUTE, LIST_ROUTE, DECIDE_ROUTE]) {
      const code = src(r);
      expect(code, `${r} must not import the raw db client`).not.toContain('from "@/db/client"');
      expect(code, `${r} must not import the table directly`).not.toContain("courseInterestRequests");
      expect(code, `${r} must go through apiContext/sdb`).toContain("apiContext(");
    }
  });

  it("a by-id read 404s across tenants and never redirects", () => {
    for (const r of [LIST_ROUTE, DECIDE_ROUTE]) {
      const code = src(r);
      expect(code, r).toContain('errorJson("Not found", 404)');
      expect(code, `${r} must never redirect: that leaks that the row exists`).not.toContain("redirect(");
    }
  });
});

// ── 3. The PII never leaves the owner's surface ────────────────────────────────────────

describe("phone and credentials are owner-only", () => {
  it("the owner's own view does carry them, because that is the point", () => {
    const view = serializeForOwner(row(), TENANT_A);
    expect(view?.phone).toBe("+442071234567");
    expect(view?.phoneRaw).toBe("+44 20 7123 4567");
    expect(view?.credentials).toBe("Thirty years analysing engines.");
  });

  it("serializeForOwner is the ONLY serializer, and only owner-gated routes call it", () => {
    // If a future route wants to return a request, it has to come through here, and this test
    // fails the moment one that is not owner-gated does.
    for (const r of [LIST_ROUTE, DECIDE_ROUTE]) {
      const code = src(r);
      expect(code, r).toContain("serializeForOwner");
      expect(code, `${r} must prove the caller may manage reviewers`).toContain("canManageCourseReviewers");
    }
    // The public route never serializes a request back to the caller at all.
    expect(src(PUBLIC_ROUTE)).not.toContain("serializeForOwner");
  });

  it("the public route's response mentions no PII field", () => {
    const code = src(PUBLIC_ROUTE);
    // Everything it returns is an ack. Find the json() calls and check them.
    for (const m of code.matchAll(/return json\(([^;]*)\);/g)) {
      for (const field of INTEREST_PII_FIELDS) {
        expect(m[1], `public response must not carry ${field}`).not.toContain(field);
      }
    }
  });

  it("the PII never reaches the marketing funnel", () => {
    const code = src(PUBLIC_ROUTE);
    // `leads` feeds a CSV export and an email-campaign audience, so only the address goes there.
    const call = code.slice(code.indexOf("addCourseNotifySignup({"), code.indexOf("// Mirror EVERY"));
    for (const field of INTEREST_PII_FIELDS) {
      expect(call, `the lead funnel must not carry ${field}`).not.toContain(field);
    }
    expect(call).toContain("email: request.email");
  });

  it("an interested learner alone is not counted as an expert on the demand board", () => {
    expect(feedsLeadFunnel("learner")).toBe(true);
    expect(feedsLeadFunnel("beta")).toBe(true);
    // A reviewer is not demand: counting them would inflate the one number the board reports.
    expect(feedsLeadFunnel("expert")).toBe(false);
  });

  it("the inbox webhook carries the notification, never the values", () => {
    const request = normalizeInterestInput({
      capacity: "expert",
      name: "Ada Lovelace",
      email: "Ada@Example.com",
      phone: "+44 20 7123 4567",
      credentials: "Thirty years analysing engines.",
    });
    const body = buildInboxSubmission({
      request,
      courseId: COURSE_A,
      courseTitle: "Analytical Engines",
      courseSlug: "analytical-engines",
      schoolSlug: "better-vice-club",
      reviewUrl: "https://example.test/teach/analytical-engines#course-interest",
    });
    const wire = JSON.stringify(body);

    // Neither the values nor the keys appear anywhere in the body that leaves this app.
    expect(wire).not.toContain("+44");
    expect(wire).not.toContain("442071234567");
    expect(wire).not.toContain("Thirty years");
    for (const field of INTEREST_PII_FIELDS) {
      expect(wire, `the inbox body must not carry ${field}`).not.toContain(`"${field}"`);
    }
    // What it DOES carry: enough to act on without opening the app, plus a link to where the
    // sensitive fields actually live.
    expect(body.payload.phone_provided).toBe(true);
    expect(body.payload.credentials_provided).toBe(true);
    expect(body.payload.review_url).toContain("/teach/analytical-engines");
    expect(body.submitter_email).toBe("ada@example.com");
  });

  it("the inbox form_type distinguishes all three capacities", () => {
    const seen = new Set<string>();
    for (const c of CAPACITIES) {
      const body = buildInboxSubmission({
        request: normalizeInterestInput({ capacity: c.value, name: "A", email: "a@b.test" }),
        courseId: COURSE_A,
        courseTitle: "T",
        courseSlug: "t",
        schoolSlug: "s",
        reviewUrl: "https://example.test/teach/t",
      });
      expect(body.form_type).toContain(c.value);
      expect(body.payload.capacity).toBe(c.value);
      expect(body.payload.capacity_label).toBe(capacityLabel(c.value));
      // Only the two that need a human decision say so.
      expect(body.payload.needs_decision).toBe(c.grants === "audit");
      seen.add(body.form_type);
    }
    expect(seen.size).toBe(CAPACITIES.length);
  });

  it("the notification is sent AFTER the row is written, so a failed webhook loses nothing", () => {
    const code = src(PUBLIC_ROUTE);
    expect(code.indexOf("addCourseInterest(")).toBeLessThan(code.indexOf("sendToInbox("));
    // Fire-and-forget after the response, per the webhook contract's "don't block the user".
    expect(code).toContain("after(");
    expect(code).toContain('from "next/server"');
  });

  it("no PUBLIC surface renders a phone number or a background", () => {
    // The coming-soon face is the file the vetting suite already pins as "must not leak the closed
    // course". It must not start leaking other people's contact details either.
    for (const f of [COMING_SOON, FORM]) {
      const code = src(f);
      expect(code, `${f} must not render a stored request`).not.toContain("serializeForOwner");
      expect(code, `${f} must not read the interest list`).not.toContain("listCourseInterest");
    }
    // The one component that does show them is the login-gated owner panel.
    expect(src(PANEL)).toContain("credentials");
  });

  it("the form says, verbatim, what happens to the sensitive fields and to the rest", () => {
    const code = src(FORM);
    expect(code).toContain("INTEREST_PRIVACY_NOTICE");
    expect(code).toContain("INTEREST_ROUTING_NOTICE");
    // The promise itself, so a reword that quietly drops a clause fails here.
    expect(INTEREST_PRIVACY_NOTICE).toContain("only to this course's instructor");
    expect(INTEREST_PRIVACY_NOTICE).toContain("never sent to any other service");
    expect(INTEREST_PRIVACY_NOTICE).toContain("optional");
    // And the honest half: the submission does reach the WitUS inbox, so the copy says so.
    expect(INTEREST_ROUTING_NOTICE).toContain("inbox");
  });
});

// ── 4. The phone field accepts real numbers ────────────────────────────────────────────

describe("phone numbers are international and forgiving", () => {
  it("normalises the separators a human types into E.164", () => {
    expect(normalizePhone("+44 20 7123 4567").e164).toBe("+442071234567");
    expect(normalizePhone("+1 (555) 010-0123").e164).toBe("+15550100123");
    expect(normalizePhone("+81.3.1234.5678").e164).toBe("+81312345678");
    expect(normalizePhone("+254 712 345678").e164).toBe("+254712345678");
  });

  it("keeps a leading zero and never invents a country code", () => {
    // A national number typed without a "+" keeps its leading zero and gains no prefix: assuming a
    // country here is exactly the bug this platform cannot afford.
    expect(normalizePhone("020 7123 4567").e164).toBe("02071234567");
    expect(normalizePhone("020 7123 4567").e164).not.toContain("+");
  });

  it("keeps what the person actually typed, always", () => {
    expect(normalizePhone("  +44 20 7123 4567  ").raw).toBe("+44 20 7123 4567");
    // Even when normalisation gives up, the original survives for the owner to read.
    const odd = normalizePhone("12345");
    expect(odd.e164).toBeNull();
    expect(odd.raw).toBe("12345");
    expect(odd.usable).toBe(true);
  });

  it("accepts the full E.164 range and does not throw away an unusual number", () => {
    const shortest = "1".repeat(PHONE_MIN_DIGITS);
    const longest = "1".repeat(PHONE_MAX_DIGITS);
    expect(normalizePhone(`+${shortest}`).e164).toBe(`+${shortest}`);
    expect(normalizePhone(`+${longest}`).e164).toBe(`+${longest}`);
    // Over the ceiling (an extension, say): stored raw rather than refused.
    const over = normalizePhone(`+${longest}99`);
    expect(over.usable).toBe(true);
    expect(over.raw).toBe(`+${longest}99`);
  });

  it("an empty field is fine, and only a digitless one is refused", () => {
    expect(normalizePhone("").usable).toBe(true);
    expect(normalizePhone("   ").raw).toBeNull();
    expect(normalizePhone(null).usable).toBe(true);
    expect(normalizePhone("call me").usable).toBe(false);
  });

  it("the input is a real tel field with a country-code hint and a 44px target", () => {
    const code = src(FORM);
    expect(code).toContain('type="tel"');
    expect(code).toContain('inputMode="tel"');
    expect(code).toContain("PHONE_HINT");
    expect(code).toContain("min-h-11");
    // No preselected country. A picker with a US default would read as neutral and is not.
    expect(code).not.toContain("<select");
  });
});

// ── 5. Shape of the thing ──────────────────────────────────────────────────────────────

describe("capacities", () => {
  it("are exactly the three BAM asked for, and nothing else parses", () => {
    expect(CAPACITIES.map((c) => c.value)).toEqual(["learner", "beta", "expert"]);
    for (const c of CAPACITIES) expect(isInterestCapacity(c.value)).toBe(true);
    for (const junk of ["owner", "admin", "instructor", "auditor", "", null, 7]) {
      expect(isInterestCapacity(junk)).toBe(false);
    }
  });

  it("normalizeInterestInput lowercases the address and nulls a blank optional field", () => {
    const out = normalizeInterestInput({
      capacity: "beta",
      name: "  Ada  ",
      email: "  Ada@Example.COM ",
      phone: "   ",
      credentials: "\n  \n",
    });
    expect(out).toEqual({
      capacity: "beta" satisfies InterestCapacity,
      name: "Ada",
      email: "ada@example.com",
      phone: null,
      phoneRaw: null,
      credentials: null,
    });
  });

  it("an unrecognised stored value degrades to the least privileged reading", () => {
    // Defense in depth behind the CHECK constraint: a row that somehow held a junk capacity or
    // status must read as the harmless one, never as an approved expert.
    const view = serializeForOwner(row({ capacity: "wizard", status: "granted" }), TENANT_A);
    expect(view?.capacity).toBe("learner");
    expect(view?.status).toBe("pending");
    expect(grantsAuditOnDecision({ capacity: view!.capacity, status: view!.status })).toBe(false);
  });
});
