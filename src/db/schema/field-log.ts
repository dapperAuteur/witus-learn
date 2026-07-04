import { sql } from "drizzle-orm";
import {
  boolean,
  check,
  date,
  doublePrecision,
  index,
  integer,
  jsonb,
  pgTable,
  text,
  timestamp,
  unique,
  uuid,
} from "drizzle-orm/pg-core";
import { users } from "./auth";
import { tenants } from "./tenancy";

// "My Field Log" (internal codename Field Kit) — the per-user documentation-project
// workspace for the Documentarian program. See plans/future/14-field-kit.md. Projects are
// tenant-scoped and accessed by their crew (project_members); media is LINK-ONLY (we never
// host it); consent is stored at the MINIMUM (a subject label + status + date, no contact info).

/** The template checklist snapshotted onto a project (stages → items with done/note). */
export type FieldLogChecklist = {
  stages: { key: string; items: { id: string; done: boolean; note: string }[] }[];
};

/** Per-review rubric scores (see plans/future/16-trusted-documentation-rubric.md). */
export type FieldLogReviewRubric = {
  gate: "pass" | "fail";
  criteria: Record<string, "met" | "developing" | "not_met" | "na">;
};

export const documentationProjects = pgTable(
  "documentation_projects",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tenantId: uuid("tenant_id")
      .notNull()
      .references(() => tenants.id, { onDelete: "cascade" }),
    // Creator; the owner row also lives in project_members. text FK — Better Auth user ids.
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    title: text("title").notNull(),
    subject: text("subject"),
    /** Which field-log template this was created from (snapshotted into `checklist`). */
    templateKey: text("template_key").notNull(),
    /** words | sound | motion | archive — ties to the specialization matrix. */
    medium: text("medium"),
    /** people | events | institutions | travel-place. */
    subjectTag: text("subject_tag"),
    /** Legs-as-nodes view (grower→factory→boardroom); a toggle on ANY project. */
    chainMode: boolean("chain_mode").notNull().default(false),
    /** Optional light gear/tools list (logistics stays light; RideWitUS owns budgets/itineraries). */
    kit: jsonb("kit").$type<string[]>(),
    /** Snapshot of the template's stages/items + the learner's done/note state. */
    checklist: jsonb("checklist").$type<FieldLogChecklist>(),
    /** planning | active | assembling | published | archived. */
    status: text("status").notNull().default("planning"),
    /** private → in_review (shared to reviewers) → submitted (public showcase, deferred). */
    visibility: text("visibility").notNull().default("private"),
    /** Solo/owner self-attestation the capstone is complete (crews use project_members.attested_at). */
    selfAttestedAt: timestamp("self_attested_at", { withTimezone: true }),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    index("documentation_projects_tenant_user_idx").on(t.tenantId, t.userId),
    check("documentation_projects_medium_chk", sql`${t.medium} is null or ${t.medium} in ('words','sound','motion','archive')`),
    check("documentation_projects_subject_tag_chk", sql`${t.subjectTag} is null or ${t.subjectTag} in ('people','events','institutions','travel-place')`),
    check("documentation_projects_status_chk", sql`${t.status} in ('planning','active','assembling','published','archived')`),
    check("documentation_projects_visibility_chk", sql`${t.visibility} in ('private','in_review','submitted')`),
  ],
);

export type DocumentationProject = typeof documentationProjects.$inferSelect;

// Legs = the sites / nodes of a story (a leg is a stop with its own dates). A project can
// flip chain_mode to view them as a commodity chain (cocoa farm → factory → corporate office).
export const projectLegs = pgTable(
  "project_legs",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    projectId: uuid("project_id")
      .notNull()
      .references(() => documentationProjects.id, { onDelete: "cascade" }),
    name: text("name").notNull(),
    /** farm | factory | office | market | home | public-space | archive | other. */
    siteType: text("site_type"),
    locationLabel: text("location_label"),
    lat: doublePrecision("lat"),
    lng: doublePrecision("lng"),
    startDate: date("start_date"),
    endDate: date("end_date"),
    visited: boolean("visited").notNull().default(false),
    notes: text("notes"),
    /** A SINGLE light per-leg estimate (trip planning), not a budget ledger — RideWitUS owns budgets. */
    estCostCents: integer("est_cost_cents"),
    estCurrency: text("est_currency"),
    sortOrder: integer("sort_order").notNull().default(0),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    index("project_legs_project_idx").on(t.projectId),
    check("project_legs_site_type_chk", sql`${t.siteType} is null or ${t.siteType} in ('farm','factory','office','market','home','public-space','archive','other')`),
  ],
);

export type ProjectLeg = typeof projectLegs.$inferSelect;

// The capture log / field bank. storage_url is a LINK to the learner's own media (we never
// host it). consent_status is the trust field; involves_minor raises the consent bar in the UI.
export const projectCaptures = pgTable(
  "project_captures",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    projectId: uuid("project_id")
      .notNull()
      .references(() => documentationProjects.id, { onDelete: "cascade" }),
    // A capture belongs to exactly one leg (nullable). Deleting a leg keeps the capture.
    legId: uuid("leg_id").references(() => projectLegs.id, { onDelete: "set null" }),
    /** photo | audio | video | document | interview | artifact | note. */
    kind: text("kind").notNull(),
    /** Who/what — a label the learner chooses; NO contact info stored (consent minimum). */
    subject: text("subject"),
    /** na | verbal_recorded | written | on_record | declined. */
    consentStatus: text("consent_status").notNull().default("na"),
    involvesMinor: boolean("involves_minor").notNull().default(false),
    /** A LINK only (Drive / YouTube / the learner's Cloudinary / …) — never hosted by us. */
    storageUrl: text("storage_url"),
    notes: text("notes"),
    capturedAt: timestamp("captured_at", { withTimezone: true }),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    index("project_captures_project_idx").on(t.projectId),
    index("project_captures_leg_idx").on(t.legId),
    check("project_captures_kind_chk", sql`${t.kind} in ('photo','audio','video','document','interview','artifact','note')`),
    check("project_captures_consent_chk", sql`${t.consentStatus} in ('na','verbal_recorded','written','on_record','declined')`),
  ],
);

export type ProjectCapture = typeof projectCaptures.$inferSelect;

// Crews: co-owned projects. Access = owner OR member (within tenant). Each member attests their
// OWN graded portion — the credential is individual (only members with a graded portion earn it).
export const projectMembers = pgTable(
  "project_members",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    projectId: uuid("project_id")
      .notNull()
      .references(() => documentationProjects.id, { onDelete: "cascade" }),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    /** owner | collaborator. */
    role: text("role").notNull().default("collaborator"),
    /** What this member did (their graded portion). */
    contribution: text("contribution"),
    /** Member attests their own contribution is complete (per-member credential signal). */
    attestedAt: timestamp("attested_at", { withTimezone: true }),
    addedAt: timestamp("added_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    unique("project_members_project_user_uq").on(t.projectId, t.userId),
    index("project_members_project_idx").on(t.projectId),
    index("project_members_user_idx").on(t.userId),
    check("project_members_role_chk", sql`${t.role} in ('owner','collaborator')`),
  ],
);

export type ProjectMember = typeof projectMembers.$inferSelect;

// Peer review (assessment). Written while the project is in_review by a peer OR a teacher/owner
// (the cold-start + quality backstop). Reviewer must not be on the crew. Credential needs
// self-attest + ≥2 endorsements. See plans/future/16-trusted-documentation-rubric.md.
export const projectReviews = pgTable(
  "project_reviews",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    projectId: uuid("project_id")
      .notNull()
      .references(() => documentationProjects.id, { onDelete: "cascade" }),
    reviewerUserId: text("reviewer_user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    /** Which crew member's contribution is endorsed (null = solo / whole project). */
    subjectUserId: text("subject_user_id").references(() => users.id, { onDelete: "set null" }),
    /** endorse | revise. */
    verdict: text("verdict").notNull(),
    /** Per-criterion rubric scores + the safety gate. */
    rubric: jsonb("rubric").$type<FieldLogReviewRubric>(),
    body: text("body"),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    index("project_reviews_project_idx").on(t.projectId),
    check("project_reviews_verdict_chk", sql`${t.verdict} in ('endorse','revise')`),
  ],
);

export type ProjectReview = typeof projectReviews.$inferSelect;

// A per-project journal (crews mean multiple authors, so it's its own table).
export const projectComments = pgTable(
  "project_comments",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    projectId: uuid("project_id")
      .notNull()
      .references(() => documentationProjects.id, { onDelete: "cascade" }),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    body: text("body").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [index("project_comments_project_idx").on(t.projectId)],
);

export type ProjectComment = typeof projectComments.$inferSelect;
