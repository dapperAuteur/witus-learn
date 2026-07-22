// Field Log templates — the checklist a project is created from. Client-safe (pure data +
// types), imported by both the UI and the server query layer. The template STRUCTURE lives
// here in code; a project snapshots it into `documentation_projects.checklist` on create, so
// improving a template never breaks a live project. See plans/future/14-field-kit.md §3.
//
// The documentation workflow is the default stage spine:
//   Plan → Source → Consent → Capture → Verify → Assemble → Publish

import type { FieldLogChecklist } from "@/db/schema/field-log";

export interface TemplateItem {
  /** Stable id — persisted as a checklist item key; never renumber existing ids. */
  id: string;
  label: string;
}

export interface TemplateStage {
  key: string;
  title: string;
  items: TemplateItem[];
}

export interface FieldLogTemplate {
  key: string;
  title: string;
  description: string;
  audience: "learner" | "owner";
  stages: TemplateStage[];
}

export const FIELD_LOG_TEMPLATES: FieldLogTemplate[] = [
  {
    key: "foundations-capstone",
    title: "Foundations capstone",
    description: "The shared-core capstone: plan, gather, verify, and publish one small documentation project.",
    audience: "learner",
    stages: [
      { key: "plan", title: "Plan", items: [
        { id: "plan-question", label: "Turn your subject into a focused, researchable question" },
        { id: "plan-brief", label: "Write a 1-page project brief" },
      ] },
      { key: "source", title: "Source", items: [
        { id: "source-list", label: "Build a starter source list (primary vs secondary)" },
        { id: "source-corroborate", label: "Plan how you'll corroborate the important claims" },
      ] },
      { key: "consent", title: "Consent", items: [
        { id: "consent-identify", label: "Identify who's in it; plan the ask" },
        { id: "consent-minors", label: "Handle any minors (parent/guardian consent)" },
      ] },
      { key: "capture", title: "Capture", items: [
        { id: "capture-gather", label: "Gather material, log each capture with its consent status" },
        { id: "capture-ambient", label: "Get ambient + at least one interview" },
      ] },
      { key: "verify", title: "Verify", items: [
        { id: "verify-claims", label: "Corroborate each central claim" },
        { id: "verify-media", label: "Check media provenance; flag anything uncertain" },
        { id: "verify-fidelity", label: "Check translation/cultural fidelity (fluent/native review if applicable)" },
      ] },
      { key: "assemble", title: "Assemble", items: [
        { id: "assemble-outline", label: "Outline the piece; pick a medium" },
      ] },
      { key: "publish", title: "Publish", items: [
        { id: "publish-sources", label: "Add a visible ## Sources bibliography (APA)" },
        { id: "publish-disclose", label: "Disclose any funding / relationships / stakes" },
        { id: "publish-attest", label: "Self-attest against the Trusted Documentation Rubric → request review" },
      ] },
    ],
  },
  {
    key: "bvc-field-collection",
    title: "BVC field collection",
    description: "A content-collection trip: many legs (sites/nodes of a chain) feeding a future BVC episode.",
    audience: "owner",
    stages: [
      { key: "plan", title: "Plan", items: [
        { id: "plan-chain", label: "Define the chain/nodes to visit (add them as legs)" },
        { id: "plan-logistics", label: "Permits + logistics per node (hand budgets/itinerary to RideWitUS)" },
      ] },
      { key: "source", title: "Source", items: [
        { id: "source-research", label: "Pre-trip research + contacts per node" },
      ] },
      { key: "consent", title: "Consent", items: [
        { id: "consent-releases", label: "Releases per site; on-record asks" },
      ] },
      { key: "capture", title: "Capture", items: [
        { id: "capture-perleg", label: "Per-leg photo / audio / video / doc + consent per subject" },
      ] },
      { key: "verify", title: "Verify", items: [
        { id: "verify-onsite", label: "Fact-check on-site claims; label uncertain values" },
        { id: "verify-fidelity", label: "Confirm translation/cultural fidelity with a fluent/native check" },
      ] },
      { key: "assemble", title: "Assemble", items: [
        { id: "assemble-beats", label: "Map captures → episode beats → course_sources" },
      ] },
      { key: "publish", title: "Publish", items: [
        { id: "publish-handoff", label: "Hand to the course (seed lessons + sources)" },
      ] },
    ],
  },
];

const BY_KEY = new Map(FIELD_LOG_TEMPLATES.map((t) => [t.key, t]));

export function templateByKey(key: string): FieldLogTemplate | undefined {
  return BY_KEY.get(key);
}

/** Snapshot a template into a fresh checklist state (all items un-done, empty notes). */
export function initialChecklist(template: FieldLogTemplate): FieldLogChecklist {
  return {
    stages: template.stages.map((s) => ({
      key: s.key,
      items: s.items.map((i) => ({ id: i.id, done: false, note: "" })),
    })),
  };
}
