import { describe, expect, it } from "vitest";
import {
  canRecordVerdict,
  effectiveReviewState,
  hasReviewerCredential,
  materialLessonText,
  normalizeCorrection,
  parseReleaseMarkers,
  readReviewNeeds,
  releaseReadiness,
  stableStringify,
  verdictKindsFor,
  type MaterialLesson,
  type ReviewNeed,
} from "@/lib/lesson-review";
import { lessonReviewHash } from "@/lib/lesson-review-hash";
import { STAGE_AND_BROADCAST_RIGGING_COURSE } from "../scripts/data/stage-and-broadcast-rigging-course";
import { SOUND_CRAFT_COURSE } from "../scripts/data/sound-craft-course";
import { LIGHT_ON_SET_COURSE } from "../scripts/data/light-on-set-course";
import { RAISING_ANIMALS_FOR_YARN_COURSE } from "../scripts/data/raising-animals-for-yarn-course";
import { RENTING_OUT_PRODUCTION_GEAR_COURSE } from "../scripts/data/renting-out-production-gear-course";
import type { AuthoredCourse } from "../scripts/data/authored-course";

// Reviewer sign-off (plans/93 section 1): the pure rules. The marker lines below are copied from the
// four course files, one per style, so a change to how the helpers word a marker fails here first.

const QR_LINE = "> **Before release:** needs a qualified reviewer (QR): a large-animal veterinarian.";
const P_DEMO_LINE =
  "> **Before release:** needs a practitioner or BAM's demonstration: a theater sound designer or operator, for everything past the guide's two-microphone setups.";
const P_LINE = "> **Before release:** needs a practitioner: a hand spinner, to confirm the washing, carding and plying steps for a learner today.";
const DECISION_LINE =
  "> **Before release:** needs BAM's decision (brief question 5): whether set sound is taught here or in the planned Videography course, which would leave only a link here in its place.";
const DOUBLE_LINE =
  "> **Before release:** needs a qualified reviewer (QR): a shepherd; and needs a practitioner: a sheep shearer, to confirm how Indiana keepers book shearing.";

describe("parseReleaseMarkers", () => {
  it("reads a QR marker and strips it, with the blank line after it", () => {
    const { needs, body } = parseReleaseMarkers(`${QR_LINE}\n\n**Sheep.** A ewe lambs in spring.`);
    expect(needs).toEqual([{ kind: "qr", who: "a large-animal veterinarian" }]);
    expect(body).toBe("**Sheep.** A ewe lambs in spring.");
  });

  it("reads both practitioner wordings as P", () => {
    expect(parseReleaseMarkers(P_DEMO_LINE).needs).toEqual([
      { kind: "p", who: "a theater sound designer or operator, for everything past the guide's two-microphone setups" },
    ]);
    expect(parseReleaseMarkers(P_LINE).needs).toEqual([
      { kind: "p", who: "a hand spinner, to confirm the washing, carding and plying steps for a learner today" },
    ]);
  });

  it("reads a decision marker with its brief question", () => {
    const [need] = parseReleaseMarkers(DECISION_LINE).needs;
    expect(need.kind).toBe("decision");
    expect(need.question).toBe(5);
    expect(need.who).toMatch(/^whether set sound is taught here/);
  });

  it("splits the double-need line into a QR and a P", () => {
    expect(parseReleaseMarkers(DOUBLE_LINE).needs).toEqual([
      { kind: "qr", who: "a shepherd" },
      { kind: "p", who: "a sheep shearer, to confirm how Indiana keepers book shearing" },
    ]);
  });

  it("does not split a who that merely contains a semicolon", () => {
    const line =
      "> **Before release:** needs a qualified reviewer (QR): a lawyer, to confirm the framing; any consent law added later needs that reviewer.";
    const { needs } = parseReleaseMarkers(line);
    expect(needs).toHaveLength(1);
    expect(needs[0].who).toBe("a lawyer, to confirm the framing; any consent law added later needs that reviewer");
  });

  it("reads stacked markers (P then a decision) and keeps the body intact", () => {
    const body = `${P_DEMO_LINE}\n\n${DECISION_LINE}\n\n**A 1989 Army kit list.** Shotgun mikes.\n\nSecond paragraph.`;
    const r = parseReleaseMarkers(body);
    expect(r.needs.map((n) => n.kind)).toEqual(["p", "decision"]);
    expect(r.body).toBe("**A 1989 Army kit list.** Shotgun mikes.\n\nSecond paragraph.");
  });

  it("a prose sentence about 'before release' is not a marker and the body is untouched", () => {
    const body =
      'A lesson that needs a qualified rigger before release says so at the top, in a box that begins "Before release".\n\nMore.';
    expect(parseReleaseMarkers(body)).toEqual({ needs: [], body });
  });

  it("a body with no marker comes back byte for byte", () => {
    const body = "\n\n  Leading space kept.\n\n\n\nTrailing too.\n";
    expect(parseReleaseMarkers(body).body).toBe(body);
    expect(parseReleaseMarkers(null)).toEqual({ needs: [], body: "" });
  });

  it("fails closed: an unparseable marker becomes a decision, which no verdict clears", () => {
    const { needs } = parseReleaseMarkers("> **Before release:** ask the shepherd first.");
    expect(needs).toEqual([{ kind: "decision", who: "ask the shepherd first" }]);
  });
});

describe("the four marked course files", () => {
  // A snapshot of what the seeder will write. Counted 2026-10-14: 81 marker lines in 71 lessons,
  // carrying 83 needs (two lines hold two). If a course gains or loses a marker, update the count
  // deliberately; if a marker stops parsing, the "decision" fallback shows up here as a jump.
  // CREW-06 (renting-out-production-gear) joined 2026-10-21: 9 marker lines in 9 lessons, 9 needs.
  const courses: [string, AuthoredCourse][] = [
    ["stage-and-broadcast-rigging", STAGE_AND_BROADCAST_RIGGING_COURSE],
    ["sound-craft", SOUND_CRAFT_COURSE],
    ["light-on-set", LIGHT_ON_SET_COURSE],
    ["raising-animals-for-yarn", RAISING_ANIMALS_FOR_YARN_COURSE],
    ["renting-out-production-gear", RENTING_OUT_PRODUCTION_GEAR_COURSE],
  ];
  const tally = (c: AuthoredCourse) => {
    const t = { lessons: 0, qr: 0, p: 0, decision: 0 };
    for (const l of c.lessons) {
      const { needs } = parseReleaseMarkers(l.body);
      if (needs.length) t.lessons++;
      for (const n of needs) t[n.kind]++;
    }
    return t;
  };

  it("parses to the expected needs per course", () => {
    expect(Object.fromEntries(courses.map(([slug, c]) => [slug, tally(c)]))).toEqual({
      "stage-and-broadcast-rigging": { lessons: 17, qr: 17, p: 2, decision: 0 },
      "sound-craft": { lessons: 12, qr: 7, p: 5, decision: 5 },
      "light-on-set": { lessons: 19, qr: 8, p: 14, decision: 0 },
      "raising-animals-for-yarn": { lessons: 23, qr: 18, p: 7, decision: 0 },
      "renting-out-production-gear": { lessons: 9, qr: 8, p: 1, decision: 0 },
    });
  });

  it("every decision is a real 'BAM's decision' marker, never the unparseable fallback", () => {
    for (const [, c] of courses) {
      for (const l of c.lessons) {
        for (const n of parseReleaseMarkers(l.body).needs) {
          if (n.kind === "decision") expect(n.question, l.slug).toBeTypeOf("number");
        }
      }
    }
  });

  it("strips every marker and leaves no lesson starting with a blank line", () => {
    for (const [, c] of courses) {
      for (const l of c.lessons) {
        const { needs, body } = parseReleaseMarkers(l.body);
        expect(body, l.slug).not.toContain("> **Before release:**");
        if (needs.length) expect(body.startsWith("\n"), l.slug).toBe(false);
        else expect(body, l.slug).toBe(l.body ?? "");
      }
    }
  });
});

const lesson = (over: Partial<MaterialLesson> = {}): MaterialLesson => ({
  title: "Slings and hitches",
  textContent: `${QR_LINE}\n\nA basket hitch doubles the capacity.\n\n## Sources`,
  contentUrl: null,
  recallContent: [{ prompt: "What doubles?", answer: "A basket hitch" }],
  exerciseContent: null,
  mapContent: null,
  ...over,
});

describe("materialLessonText and the hash", () => {
  it("is stable across marker removal, re-flowed whitespace, and jsonb key order", () => {
    const h = lessonReviewHash(lesson());
    // The seeder strips markers from text_content; the hash must not move when it does.
    expect(lessonReviewHash(lesson({ textContent: "A basket hitch doubles the capacity.\n\n## Sources" }))).toBe(h);
    expect(lessonReviewHash(lesson({ textContent: "A basket   hitch doubles\nthe capacity. ## Sources" }))).toBe(h);
    // Postgres jsonb reorders keys; the hash must not care.
    expect(lessonReviewHash(lesson({ recallContent: [{ answer: "A basket hitch", prompt: "What doubles?" }] }))).toBe(h);
  });

  it("moves on any change to what the lesson says, a typo fix included", () => {
    const h = lessonReviewHash(lesson());
    expect(lessonReviewHash(lesson({ textContent: "A basket hitch doubles the capacty.\n\n## Sources" }))).not.toBe(h);
    expect(lessonReviewHash(lesson({ title: "Slings and hitch" }))).not.toBe(h);
    expect(lessonReviewHash(lesson({ contentUrl: "https://example.com/tour" }))).not.toBe(h);
    expect(lessonReviewHash(lesson({ recallContent: [{ prompt: "What doubles?", answer: "A choker" }] }))).not.toBe(h);
    expect(lessonReviewHash(lesson({ exerciseContent: { items: [] } }))).not.toBe(h);
    expect(lessonReviewHash(lesson({ mapContent: { markers: [] } }))).not.toBe(h);
  });

  it("is a 64-character hex digest of the material text", () => {
    expect(lessonReviewHash(lesson())).toMatch(/^[0-9a-f]{64}$/);
    expect(materialLessonText(lesson())).toContain("A basket hitch doubles the capacity.");
    expect(materialLessonText(lesson())).not.toContain("Before release");
  });

  it("stableStringify sorts keys at every depth and drops undefined", () => {
    expect(stableStringify({ b: 1, a: { d: [1, { z: 0, y: 2 }], c: undefined } })).toBe('{"a":{"d":[1,{"y":2,"z":0}]},"b":1}');
  });
});

describe("effectiveReviewState", () => {
  const row = (over: Partial<{ verdict: string; correctionAppliedAt: Date | null; lessonHash: string }> = {}) => ({
    verdict: "cleared",
    correctionAppliedAt: null,
    lessonHash: "h1",
    ...over,
  });
  it("covers every state", () => {
    expect(effectiveReviewState(null, "h1")).toBe("awaiting");
    expect(effectiveReviewState(row(), "h1")).toBe("cleared");
    expect(effectiveReviewState(row(), "h2")).toBe("changed_since_review");
    expect(effectiveReviewState(row({ verdict: "not_cleared" }), "h1")).toBe("not_cleared");
    expect(effectiveReviewState(row({ verdict: "cleared_with_correction" }), "h1")).toBe("pending_correction");
    expect(effectiveReviewState(row({ verdict: "cleared_with_correction", correctionAppliedAt: new Date() }), "h1")).toBe("cleared");
  });
  it("an edit outranks every verdict, even a cleared one", () => {
    expect(effectiveReviewState(row({ verdict: "not_cleared" }), "h2")).toBe("changed_since_review");
    expect(effectiveReviewState(row({ verdict: "cleared_with_correction", correctionAppliedAt: new Date() }), "h2")).toBe(
      "changed_since_review",
    );
  });
});

describe("releaseReadiness", () => {
  const qr: ReviewNeed = { kind: "qr", who: "a rigger" };
  const p: ReviewNeed = { kind: "p", who: "a shearer" };
  const d: ReviewNeed = { kind: "decision", who: "set sound here or not", question: 5 };

  it("is ready only when every QR and P need is cleared and no decision is left", () => {
    expect(releaseReadiness([{ needs: [qr, p], states: { qr: "cleared", p: "cleared" } }, { needs: [qr], states: { qr: "cleared" } }])).toEqual({
      ready: true,
      qrTotal: 2,
      qrCleared: 2,
      pTotal: 1,
      pCleared: 1,
      openDecisions: 0,
    });
    expect(releaseReadiness([{ needs: [qr], states: { qr: "pending_correction" } }]).ready).toBe(false);
    expect(releaseReadiness([{ needs: [qr], states: { qr: "changed_since_review" } }]).ready).toBe(false);
    expect(releaseReadiness([{ needs: [qr], states: {} }]).ready).toBe(false);
    expect(releaseReadiness([{ needs: [qr, d], states: { qr: "cleared" } }])).toMatchObject({ ready: false, openDecisions: 1 });
  });

  it("counts two QR markers on one lesson as one verdict, and a course with no markers is not ready", () => {
    expect(releaseReadiness([{ needs: [qr, qr], states: { qr: "cleared" } }])).toMatchObject({ qrTotal: 1, qrCleared: 1 });
    expect(releaseReadiness([]).ready).toBe(false);
    expect(releaseReadiness([{ needs: [], states: {} }]).ready).toBe(false);
  });

  it("P needs block release until cleared, so a released course never shows a Before release box", () => {
    expect(releaseReadiness([{ needs: [p], states: {} }]).ready).toBe(false);
    expect(releaseReadiness([{ needs: [p], states: { p: "cleared" } }]).ready).toBe(true);
    expect(releaseReadiness([{ needs: [qr, p], states: { qr: "cleared" } }]).ready).toBe(false);
    expect(releaseReadiness([{ needs: [qr, p], states: { qr: "cleared", p: "cleared" } }]).ready).toBe(true);
  });
});

describe("canRecordVerdict", () => {
  const base = { isAuditor: false, hasCredential: false, isOwner: false, isInstructor: false };
  it("an accepted auditor with an inviter-set credential clears QR and P", () => {
    expect(canRecordVerdict({ ...base, isAuditor: true, hasCredential: true, kind: "qr" })).toBe(true);
    expect(canRecordVerdict({ ...base, isAuditor: true, hasCredential: true, kind: "p" })).toBe(true);
  });
  it("an auditor without a credential clears nothing", () => {
    expect(canRecordVerdict({ ...base, isAuditor: true, kind: "qr" })).toBe(false);
    expect(canRecordVerdict({ ...base, isAuditor: true, kind: "p" })).toBe(false);
  });
  it("the owner clears P only, even holding a grant with a credential", () => {
    expect(canRecordVerdict({ ...base, isOwner: true, kind: "p" })).toBe(true);
    expect(canRecordVerdict({ ...base, isOwner: true, kind: "qr" })).toBe(false);
    expect(canRecordVerdict({ ...base, isOwner: true, isAuditor: true, hasCredential: true, kind: "qr" })).toBe(false);
  });
  it("the course's own instructor and a stranger clear nothing, and nobody 'clears' a decision", () => {
    expect(canRecordVerdict({ ...base, isInstructor: true, isAuditor: true, hasCredential: true, kind: "qr" })).toBe(false);
    expect(canRecordVerdict({ ...base, kind: "p" })).toBe(false);
    expect(canRecordVerdict({ ...base, isAuditor: true, hasCredential: true, kind: "decision" })).toBe(false);
    expect(canRecordVerdict({ ...base, isOwner: true, kind: "decision" })).toBe(false);
  });
  it("a credential needs both halves, not blank", () => {
    expect(hasReviewerCredential({ reviewerName: "Ada Shepherd", reviewerCredential: "Large-animal DVM" })).toBe(true);
    expect(hasReviewerCredential({ reviewerName: "Ada Shepherd", reviewerCredential: "  " })).toBe(false);
    expect(hasReviewerCredential({ reviewerName: null, reviewerCredential: "DVM" })).toBe(false);
  });
});

describe("normalizeCorrection, readReviewNeeds, verdictKindsFor", () => {
  it("a correction is present exactly when the verdict asks for one", () => {
    expect(normalizeCorrection("cleared_with_correction", "  Say 'basket hitch', not 'choker'. ")).toEqual({
      ok: true,
      correction: "Say 'basket hitch', not 'choker'.",
    });
    expect(normalizeCorrection("cleared_with_correction", "   ").ok).toBe(false);
    expect(normalizeCorrection("cleared_with_correction", "x".repeat(1001)).ok).toBe(false);
    expect(normalizeCorrection("cleared", "ignored")).toEqual({ ok: true, correction: null });
    expect(normalizeCorrection("not_cleared", "ignored")).toEqual({ ok: true, correction: null });
  });
  it("reads jsonb defensively and dedupes kinds", () => {
    expect(readReviewNeeds(null)).toEqual([]);
    expect(readReviewNeeds([{ kind: "qr", who: "a vet" }, { kind: "bogus", who: "x" }, { who: "y" }, 3])).toEqual([
      { kind: "qr", who: "a vet" },
    ]);
    expect(verdictKindsFor([{ kind: "p", who: "a" }, { kind: "decision", who: "b" }, { kind: "qr", who: "c" }, { kind: "p", who: "d" }])).toEqual([
      "qr",
      "p",
    ]);
  });
});
