import { beforeEach, describe, expect, it, vi } from "vitest";

/**
 * Account settings routes (BAM, 2026-11-10: "users should be able to manage their accounts").
 *
 *   POST /api/account/email: signed out 401; a bad address 400; a child's profile 400; the same address
 *     400; an address another account holds 409; over the hourly limit 429; otherwise the link goes to
 *     the NEW address on the request's own host, 201. A failed send cancels the request and says so (502).
 *   POST /api/account/email/confirm: changed (the OLD address gets a notice), expired 410, taken 409.
 *   PATCH /api/profile: a reserved or malformed username 400; a taken one 409; a child's 400; a good one
 *     goes through applyProfileChanges as "self"; the instructor fields change only when sent.
 *   PATCH /api/admin/users/[userId]: a learner 403; another school's member 404; this school's admin
 *     edits a teacher's email at once (both addresses notified) and may not edit a peer admin, a member
 *     of another school, or their own email; the owner may.
 *   POST/DELETE /api/account/deletion-request and POST /api/admin/deletion-requests/[id] (owner only).
 *
 * The real routes and rules run; the session, the tenant, the database half and the mailer are mocked.
 */

const mocks = vi.hoisted(() => ({
  getSession: vi.fn(),
  getMembership: vi.fn(),
  isPlatformOwner: vi.fn(),
  getAccountFacts: vi.fn(),
  isEmailTaken: vi.fn(),
  isUsernameTaken: vi.fn(),
  countRecentEmailChangeRequests: vi.fn(),
  createEmailChangeRequest: vi.fn(),
  cancelEmailChange: vi.fn(),
  confirmEmailChange: vi.fn(),
  applyProfileChanges: vi.fn(),
  adminSetEmail: vi.fn(),
  countOtherSchoolRoles: vi.fn(),
  createDeletionRequest: vi.fn(),
  withdrawDeletionRequest: vi.fn(),
  resolveDeletionRequest: vi.fn(),
  schoolRoleOf: vi.fn(),
  updateProfile: vi.fn(),
  getEditableProfile: vi.fn(),
  sendEmailChangeLinkEmail: vi.fn(),
  sendEmailChangedNoticeEmail: vi.fn(),
  sendAccountDeletionRequestEmail: vi.fn(),
}));

vi.mock("@/lib/session", () => ({ getSession: mocks.getSession, getMembership: mocks.getMembership, isPlatformOwner: mocks.isPlatformOwner }));
vi.mock("@/db/scoped", () => ({
  getScopedDb: async () => ({ tenantId: TENANT, tenant: { id: TENANT, slug: "school", name: "School", email: {} } }),
}));
vi.mock("@/lib/tenant", () => ({ getTenantByHost: async () => ({ id: TENANT }) }));
vi.mock("@/db/queries/account-settings", () => ({
  getAccountFacts: mocks.getAccountFacts,
  isEmailTaken: mocks.isEmailTaken,
  isUsernameTaken: mocks.isUsernameTaken,
  countRecentEmailChangeRequests: mocks.countRecentEmailChangeRequests,
  createEmailChangeRequest: mocks.createEmailChangeRequest,
  cancelEmailChange: mocks.cancelEmailChange,
  confirmEmailChange: mocks.confirmEmailChange,
  applyProfileChanges: mocks.applyProfileChanges,
  adminSetEmail: mocks.adminSetEmail,
  countOtherSchoolRoles: mocks.countOtherSchoolRoles,
  createDeletionRequest: mocks.createDeletionRequest,
  withdrawDeletionRequest: mocks.withdrawDeletionRequest,
  resolveDeletionRequest: mocks.resolveDeletionRequest,
}));
vi.mock("@/db/queries/course-instructor", () => ({ schoolRoleOf: mocks.schoolRoleOf }));
vi.mock("@/db/queries/authoring", () => ({ updateProfile: mocks.updateProfile, getEditableProfile: mocks.getEditableProfile }));
vi.mock("@/lib/emails", () => ({
  sendEmailChangeLinkEmail: mocks.sendEmailChangeLinkEmail,
  sendEmailChangedNoticeEmail: mocks.sendEmailChangedNoticeEmail,
  sendAccountDeletionRequestEmail: mocks.sendAccountDeletionRequestEmail,
}));

import { resetRateLimits } from "@/lib/rate-limit";
import { DELETE as cancelEmailRoute, POST as startEmail } from "@/app/api/account/email/route";
import { POST as confirmEmail } from "@/app/api/account/email/confirm/route";
import { PATCH as patchProfile } from "@/app/api/profile/route";
import { PATCH as editMember } from "@/app/api/admin/users/[userId]/route";
import { DELETE as withdrawDeletion, POST as askDeletion } from "@/app/api/account/deletion-request/route";
import { POST as resolveDeletion } from "@/app/api/admin/deletion-requests/[id]/route";

const TENANT = "tenant-1";
const OWNER = "owner-1";

function facts(userId: string, over: Record<string, unknown> = {}) {
  return {
    userId,
    email: `${userId}@example.com`,
    emailVerified: true,
    name: null,
    username: userId,
    displayName: null,
    isPlatformOwner: userId === OWNER,
    isManagedChild: false,
    isAvatarPinLogin: false,
    isDemoAccount: false,
    ...over,
  };
}

function signIn(userId: string | null, role: "brand_admin" | "instructor" | "learner" | null = null) {
  if (!userId) {
    mocks.getSession.mockResolvedValue(null);
    return;
  }
  mocks.getSession.mockResolvedValue({ user: { id: userId, email: `${userId}@example.com`, name: null } });
  mocks.isPlatformOwner.mockImplementation(async (uid: string) => uid === OWNER);
  mocks.getMembership.mockImplementation(async (uid: string, tenantId: string) => (uid === userId && tenantId === TENANT ? role : null));
}

const req = (path: string, method: string, body?: unknown, headers: Record<string, string> = {}) =>
  new Request(`http://school.test${path}`, {
    method,
    body: body === undefined ? undefined : JSON.stringify(body),
    headers: { host: "school.test", ...headers },
  });

beforeEach(() => {
  vi.clearAllMocks();
  resetRateLimits();
  signIn("teacher-1", "instructor");
  mocks.getAccountFacts.mockImplementation(async (uid: string) => facts(uid));
  mocks.isEmailTaken.mockResolvedValue(false);
  mocks.isUsernameTaken.mockResolvedValue(false);
  mocks.countRecentEmailChangeRequests.mockResolvedValue(0);
  mocks.createEmailChangeRequest.mockResolvedValue({ token: "tok_abcdefghijklmnopqrstuvwxyz", expiresAt: new Date("2026-11-10T13:00:00Z") });
  mocks.applyProfileChanges.mockResolvedValue({ ok: true, changed: ["username"] });
  mocks.adminSetEmail.mockResolvedValue({ ok: true, oldEmail: "teacher-1@example.com", changed: true });
  mocks.countOtherSchoolRoles.mockResolvedValue(0);
  mocks.schoolRoleOf.mockImplementation(async (tenantId: string, uid: string) => (tenantId !== TENANT ? null : uid.startsWith("admin") ? "brand_admin" : uid.startsWith("learner") ? "learner" : uid.startsWith("teacher") ? "instructor" : null));
});

describe("POST /api/account/email", () => {
  const start = (body: unknown) => startEmail(req("/api/account/email", "POST", body));

  it("401 signed out", async () => {
    signIn(null);
    expect((await start({ newEmail: "new@example.com" })).status).toBe(401);
  });

  it("400 for a non-address, a child's profile, or the address already on the account", async () => {
    expect((await start({ newEmail: "nope" })).status).toBe(400);
    mocks.getAccountFacts.mockResolvedValueOnce(facts("teacher-1", { isManagedChild: true }));
    expect((await start({ newEmail: "new@example.com" })).status).toBe(400);
    expect((await start({ newEmail: "Teacher-1@Example.com" })).status).toBe(400);
    expect(mocks.createEmailChangeRequest).not.toHaveBeenCalled();
  });

  it("409 when another account holds the address, 429 over the hourly limit; nothing is sent", async () => {
    mocks.isEmailTaken.mockResolvedValueOnce(true);
    expect((await start({ newEmail: "taken@example.com" })).status).toBe(409);
    mocks.countRecentEmailChangeRequests.mockResolvedValueOnce(5);
    expect((await start({ newEmail: "new@example.com" })).status).toBe(429);
    expect(mocks.sendEmailChangeLinkEmail).not.toHaveBeenCalled();
  });

  it("sends the link to the NEW address only, on this school's host, and answers 201 with the waiting change", async () => {
    const res = await start({ newEmail: " New@Example.com " });
    expect(res.status).toBe(201);
    expect(mocks.createEmailChangeRequest).toHaveBeenCalledWith({ userId: "teacher-1", tenantId: TENANT, newEmail: "new@example.com" });
    expect(mocks.sendEmailChangeLinkEmail).toHaveBeenCalledTimes(1);
    const sent = mocks.sendEmailChangeLinkEmail.mock.calls[0][0];
    expect(sent.to).toBe("new@example.com");
    expect(sent.link).toBe("https://school.test/account/email/confirm?token=tok_abcdefghijklmnopqrstuvwxyz");
    expect((await res.json()).pending.newEmail).toBe("new@example.com");
  });

  it("a failed send cancels the request and asks the person to try again (502), without the raw error", async () => {
    mocks.sendEmailChangeLinkEmail.mockRejectedValueOnce(new Error("mailgun said no: secret detail"));
    const res = await start({ newEmail: "new@example.com" });
    expect(res.status).toBe(502);
    expect(mocks.cancelEmailChange).toHaveBeenCalledWith("teacher-1");
    expect(JSON.stringify(await res.json())).not.toContain("secret detail");
  });

  it("the per-instance burst limit answers 429 on the fourth try in ten minutes", async () => {
    for (let i = 0; i < 3; i++) expect((await start({ newEmail: `n${i}@example.com` })).status).toBe(201);
    expect((await start({ newEmail: "n4@example.com" })).status).toBe(429);
  });

  it("DELETE cancels the waiting change", async () => {
    expect((await cancelEmailRoute()).status).toBe(200);
    expect(mocks.cancelEmailChange).toHaveBeenCalledWith("teacher-1");
  });
});

describe("POST /api/account/email/confirm", () => {
  const confirm = (body: unknown) => confirmEmail(req("/api/account/email/confirm", "POST", body));

  it("changes the address with no session needed and sends the OLD address a masked notice", async () => {
    signIn(null);
    mocks.confirmEmailChange.mockResolvedValueOnce({ ok: true, userId: "teacher-1", oldEmail: "old@example.com", newEmail: "new@example.com" });
    const res = await confirm({ token: "tok_abcdefghijklmnopqrstuvwxyz" });
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ outcome: "changed" });
    expect(mocks.confirmEmailChange).toHaveBeenCalledWith("tok_abcdefghijklmnopqrstuvwxyz", TENANT);
    expect(mocks.sendEmailChangedNoticeEmail).toHaveBeenCalledWith(expect.objectContaining({ to: "old@example.com", newEmailMasked: "n***@example.com", by: "self" }));
  });

  it("answers expired 410 and taken 409 with an outcome the page can explain; a short token is invalid", async () => {
    mocks.confirmEmailChange.mockResolvedValueOnce({ ok: false, reason: "expired" });
    const expired = await confirm({ token: "tok_abcdefghijklmnopqrstuvwxyz" });
    expect(expired.status).toBe(410);
    expect(await expired.json()).toEqual({ outcome: "expired" });
    mocks.confirmEmailChange.mockResolvedValueOnce({ ok: false, reason: "taken" });
    expect((await confirm({ token: "tok_abcdefghijklmnopqrstuvwxyz" })).status).toBe(409);
    const short = await confirm({ token: "x" });
    expect(await short.json()).toEqual({ outcome: "invalid" });
    expect(mocks.sendEmailChangedNoticeEmail).not.toHaveBeenCalled();
  });

  it("a failed notice never undoes the change", async () => {
    mocks.confirmEmailChange.mockResolvedValueOnce({ ok: true, userId: "teacher-1", oldEmail: "old@example.com", newEmail: "new@example.com" });
    mocks.sendEmailChangedNoticeEmail.mockRejectedValueOnce(new Error("down"));
    expect((await confirm({ token: "tok_abcdefghijklmnopqrstuvwxyz" })).status).toBe(200);
  });
});

describe("PATCH /api/profile (name and username)", () => {
  const patch = (body: unknown) => patchProfile(req("/api/profile", "PATCH", body));

  it("rejects a reserved or malformed username (400) and a taken one (409), changing nothing", async () => {
    expect((await patch({ username: "admin" })).status).toBe(400);
    expect((await patch({ username: "a b" })).status).toBe(400);
    mocks.isUsernameTaken.mockResolvedValueOnce(true);
    expect((await patch({ username: "someone-else" })).status).toBe(409);
    expect(mocks.applyProfileChanges).not.toHaveBeenCalled();
  });

  it("refuses a username change on a child's profile", async () => {
    mocks.getAccountFacts.mockResolvedValueOnce(facts("teacher-1", { isAvatarPinLogin: true }));
    expect((await patch({ username: "new-name" })).status).toBe(400);
  });

  it("applies a new username and display name as the person themselves, and leaves bio and links alone", async () => {
    const res = await patch({ displayName: " Ms Rivera ", username: "Ms-Rivera" });
    expect(res.status).toBe(200);
    expect(mocks.applyProfileChanges).toHaveBeenCalledWith({
      userId: "teacher-1",
      displayName: "Ms Rivera",
      username: "ms-rivera",
      actor: { userId: "teacher-1", role: "self", tenantId: TENANT },
    });
    expect(mocks.updateProfile).not.toHaveBeenCalled();
  });

  it("a username equal to the current one is no change (not checked against reservations or the lock)", async () => {
    await patch({ username: "teacher-1" });
    expect(mocks.applyProfileChanges).not.toHaveBeenCalled();
  });

  it("answers 409 when the username is taken in a race the column catches", async () => {
    mocks.applyProfileChanges.mockResolvedValueOnce({ ok: false, reason: "username-taken" });
    expect((await patch({ username: "new-name" })).status).toBe(409);
  });

  it("the instructor form's fields still save, each only when sent", async () => {
    await patch({ bio: "  Teaches soil. ", links: { website: "https://example.com", linkedin: "" } });
    expect(mocks.updateProfile).toHaveBeenCalledWith("teacher-1", { bio: "Teaches soil.", links: { website: "https://example.com" } });
  });
});

describe("PATCH /api/admin/users/[userId]", () => {
  const edit = (userId: string, body: unknown) => editMember(req(`/api/admin/users/${userId}`, "PATCH", body), { params: Promise.resolve({ userId }) });

  it("a learner or a teacher may not edit anyone (403)", async () => {
    signIn("learner-1", "learner");
    expect((await edit("teacher-2", { displayName: "X" })).status).toBe(403);
    signIn("teacher-1", "instructor");
    expect((await edit("teacher-2", { displayName: "X" })).status).toBe(403);
  });

  it("another school's member does not resolve here (404)", async () => {
    signIn("admin-1", "brand_admin");
    expect((await edit("stranger-1", { displayName: "X" })).status).toBe(404);
  });

  it("this school's admin changes a teacher's email at once, logged as brand_admin, and both addresses get a notice", async () => {
    signIn("admin-1", "brand_admin");
    const res = await edit("teacher-2", { email: "Moved@Example.com", displayName: "T Two" });
    expect(res.status).toBe(200);
    expect(mocks.adminSetEmail).toHaveBeenCalledWith({ userId: "teacher-2", newEmail: "moved@example.com", actor: { userId: "admin-1", role: "brand_admin", tenantId: TENANT } });
    expect(mocks.applyProfileChanges).toHaveBeenCalledWith(expect.objectContaining({ userId: "teacher-2", displayName: "T Two" }));
    const to = mocks.sendEmailChangedNoticeEmail.mock.calls.map((c) => c[0].to).sort();
    expect(to).toEqual(["moved@example.com", "teacher-1@example.com"]);
  });

  it("this school's admin may not edit a peer admin, someone on another school, or their own email", async () => {
    signIn("admin-1", "brand_admin");
    expect((await edit("admin-2", { displayName: "X" })).status).toBe(403);
    mocks.countOtherSchoolRoles.mockResolvedValueOnce(1);
    expect((await edit("teacher-2", { displayName: "X" })).status).toBe(403);
    expect((await edit("admin-1", { email: "me2@example.com" })).status).toBe(400);
    expect(mocks.adminSetEmail).not.toHaveBeenCalled();
  });

  it("409 for an address or username another account holds", async () => {
    signIn("admin-1", "brand_admin");
    mocks.isEmailTaken.mockResolvedValueOnce(true);
    expect((await edit("teacher-2", { email: "taken@example.com" })).status).toBe(409);
    mocks.isUsernameTaken.mockResolvedValueOnce(true);
    expect((await edit("teacher-2", { username: "taken-name" })).status).toBe(409);
  });

  it("the owner may edit an admin who also belongs to another school, as platform_owner", async () => {
    signIn(OWNER);
    mocks.countOtherSchoolRoles.mockResolvedValueOnce(2);
    const res = await edit("admin-2", { email: "admin-two@example.com" });
    expect(res.status).toBe(200);
    expect(mocks.adminSetEmail).toHaveBeenCalledWith(expect.objectContaining({ actor: { userId: OWNER, role: "platform_owner", tenantId: TENANT } }));
  });
});

describe("ask to delete my account", () => {
  it("files the request on this school and withdraws it", async () => {
    mocks.createDeletionRequest.mockResolvedValueOnce({ request: { id: "d1", createdAt: new Date() }, created: true });
    const res = await askDeletion(req("/api/account/deletion-request", "POST"));
    expect(res.status).toBe(201);
    expect(mocks.createDeletionRequest).toHaveBeenCalledWith("teacher-1", TENANT);
    mocks.withdrawDeletionRequest.mockResolvedValueOnce(true);
    expect((await withdrawDeletion()).status).toBe(200);
  });

  it("asking twice returns the open request (200) without a second email", async () => {
    mocks.createDeletionRequest.mockResolvedValueOnce({ request: { id: "d1", createdAt: new Date() }, created: false });
    expect((await askDeletion(req("/api/account/deletion-request", "POST"))).status).toBe(200);
    expect(mocks.sendAccountDeletionRequestEmail).not.toHaveBeenCalled();
  });

  it("only the platform owner marks a request handled", async () => {
    const id = "00000000-0000-4000-8000-000000000001";
    signIn("admin-1", "brand_admin");
    expect((await resolveDeletion(req(`/api/admin/deletion-requests/${id}`, "POST"), { params: Promise.resolve({ id }) })).status).toBe(403);
    signIn(OWNER);
    mocks.resolveDeletionRequest.mockResolvedValueOnce(true);
    expect((await resolveDeletion(req(`/api/admin/deletion-requests/${id}`, "POST"), { params: Promise.resolve({ id }) })).status).toBe(200);
    mocks.resolveDeletionRequest.mockResolvedValueOnce(false);
    expect((await resolveDeletion(req(`/api/admin/deletion-requests/${id}`, "POST"), { params: Promise.resolve({ id }) })).status).toBe(409);
  });
});
