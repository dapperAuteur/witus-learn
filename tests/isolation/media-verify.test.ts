import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { coursesWithPendingMedia, isCourseMediaCleared } from "@/lib/media-verify";

// Tenant isolation for the media-verification surface (/admin/media).
//
// The risk this guards is not abstract: unreviewed media is the most sensitive content in the app
// while it is unreviewed. It is a photograph whose rights are still being worked out, a recording
// that has not been cleared, sitting in a queue with a note explaining what is wrong with it. If a
// white-label school could list, preview, or decide on another school's queue, the leak would be of
// exactly the material nobody has agreed to publish yet.
//
// The decision logic is pure, so it is exercised directly. The few places the boundary has to be
// spelled into a route or a query are checked by reading the source, which is how this repo already
// guards its other invariants (see course-auditors.test.ts).
const src = (p: string) => readFileSync(join(process.cwd(), p), "utf8");

describe("the media table is tenant-scoped by construction", () => {
  it("carries tenant_id with a cascading FK and indexes every lookup by it", () => {
    const schema = src("src/db/schema/media-assets.ts");
    expect(schema).toContain('tenantId: uuid("tenant_id")');
    expect(schema).toContain(".references(() => tenants.id, { onDelete: \"cascade\" })");
    expect(schema).toContain('index("media_assets_tenant_idx").on(t.tenantId)');
    expect(schema).toContain('index("media_assets_tenant_status_idx").on(t.tenantId, t.status)');
    expect(schema).toContain('index("media_assets_tenant_course_idx").on(t.tenantId, t.courseSlug)');
    // Uniqueness is per tenant: two schools may legitimately register the same public URL.
    expect(schema).toContain('unique("media_assets_tenant_url_uq").on(t.tenantId, t.url)');
  });

  it("constrains kind and status in the DATABASE, not only in Zod", () => {
    const schema = src("src/db/schema/media-assets.ts");
    expect(schema).toContain("in ('image','video','audio','document')");
    expect(schema).toContain("in ('pending','approved','rejected')");
    // The migration is what actually reaches prod, so assert it too.
    const sql = src("src/db/migrations/0049_typical_the_leader.sql");
    expect(sql).toContain('CREATE TABLE "media_assets"');
    expect(sql).toContain("media_assets_kind_chk");
    expect(sql).toContain("media_assets_status_chk");
    expect(sql).toContain('"status" text DEFAULT \'pending\' NOT NULL');
    expect(sql).toContain("ON DELETE cascade");
  });

  it("keeps the provenance triple NOT NULL: nothing is registered unaccounted for", () => {
    const sql = src("src/db/migrations/0049_typical_the_leader.sql");
    for (const col of ['"credit" text NOT NULL', '"rights_status" text NOT NULL', '"source_url" text NOT NULL']) {
      expect(sql).toContain(col);
    }
  });
});

describe("every read and write filters tenant_id", () => {
  it("the queries never touch the table without the tenant in the WHERE clause", () => {
    const q = src("src/db/queries/media-assets.ts");
    expect(q).toContain("eq(mediaAssets.tenantId, tenantId)");
    // By-id reads and the status update both carry the tenant, so a foreign id matches NO ROW
    // rather than being fetched and then compared.
    expect(q).toContain("and(eq(mediaAssets.tenantId, tenantId), eq(mediaAssets.id, id))");
    expect(q).toContain("and(eq(mediaAssets.tenantId, v.tenantId), eq(mediaAssets.id, v.id))");
    expect(q).toContain("target: [mediaAssets.tenantId, mediaAssets.url]");
  });

  it("the scoped DAL supplies the tenant itself and never takes one from a caller", () => {
    const scoped = src("src/db/scoped.ts");
    expect(scoped).toContain("listMediaAssets(this.tenantId)");
    expect(scoped).toContain("getMediaAsset(this.tenantId, id)");
    expect(scoped).toContain("upsertMediaAsset({ tenantId: this.tenantId, ...input })");
    expect(scoped).toContain("setMediaAssetStatus({ tenantId: this.tenantId, ...input })");
    // The public method signatures OMIT tenantId, so a route physically cannot pass one.
    expect(scoped).toContain('Omit<UpsertMediaAsset, "tenantId">');
    expect(scoped).toContain('Omit<SetMediaAssetStatus, "tenantId">');
  });

  it("the routes go through the scoped DAL, never the raw client", () => {
    for (const r of ["src/app/api/admin/media/route.ts", "src/app/api/admin/media/[id]/route.ts"]) {
      const code = src(r);
      expect(code, r).toContain("apiContext()");
      expect(code, r).not.toContain('from "@/db/client"');
      expect(code, r).not.toContain("mediaAssets");
    }
  });

  it("the page reads through getScopedDb, so the tenant comes from the host", () => {
    const page = src("src/app/(tenant)/admin/media/page.tsx");
    expect(page).toContain("await getScopedDb()");
    expect(page).toContain("sdb.listMediaAssets()");
    expect(page).not.toContain('from "@/db/client"');
  });
});

describe("a by-id read 404s across tenants, and never redirects", () => {
  it("the decision route answers Not found for an unknown id and a foreign one alike", () => {
    const route = src("src/app/api/admin/media/[id]/route.ts");
    expect(route).toContain('errorJson("Not found", 404)');
    // A redirect would confirm the asset exists somewhere, which is the leak itself. Comments are
    // stripped first: the route must not CALL a redirect, but it is welcome to explain why it does
    // not (the same treatment the auditors isolation test gives its token check).
    const code = route.replace(/^\s*\/\/.*$/gm, "");
    expect(code).not.toContain("redirect");
    // Read first, so nothing is written before the ownership question is answered.
    const readAt = route.indexOf("sdb.getMediaAsset(id)");
    const writeAt = route.indexOf("sdb.setMediaAssetStatus(");
    expect(readAt).toBeGreaterThan(-1);
    expect(readAt).toBeLessThan(writeAt);
    // And the write is checked for a null result too, so a row deleted between the two 404s
    // rather than reporting a success that never happened.
    expect(route).toContain("if (!asset) return errorJson(\"Not found\", 404)");
  });
});

describe("the surface is owner-only", () => {
  it("both routes require the platform owner, after requiring a session", () => {
    for (const r of ["src/app/api/admin/media/route.ts", "src/app/api/admin/media/[id]/route.ts"]) {
      const code = src(r);
      expect(code, r).toContain('errorJson("Unauthorized", 401)');
      expect(code, r).toContain("isPlatformOwner(session.user.id)");
      expect(code, r).toContain('errorJson("Forbidden", 403)');
    }
  });

  it("the page requires the platform owner and the nav item is ownerOnly", () => {
    expect(src("src/app/(tenant)/admin/media/page.tsx")).toContain("await requirePlatformOwner()");
    const nav = src("src/lib/admin-nav.ts");
    const item = nav.slice(nav.indexOf('href: "/admin/media"'));
    expect(item.slice(0, item.indexOf("},"))).toContain("ownerOnly: true");
  });
});

describe("a decision cannot be recorded without its reasoning", () => {
  it("the rule lives in one pure module used by the API and the form alike", () => {
    expect(src("src/app/api/admin/media/[id]/route.ts")).toContain("mediaDecisionError");
    expect(src("src/components/media-verify-list.tsx")).toContain("mediaDecisionError");
  });
});

describe("clearance never crosses a course or a tenant boundary", () => {
  it("another course's pending media cannot block or clear this one", () => {
    // The list handed to the helper is already tenant-scoped by the DAL, so the remaining way to
    // get a wrong answer is to mix courses, which the filter prevents.
    const assets = [
      { courseSlug: "course-a", status: "approved" as const },
      { courseSlug: "course-b", status: "pending" as const },
    ];
    expect(isCourseMediaCleared("course-a", assets)).toBe(true);
    expect(isCourseMediaCleared("course-b", assets)).toBe(false);
    expect(coursesWithPendingMedia(assets)).toEqual(["course-b"]);
  });
});
