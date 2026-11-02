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
import type { AuthoredCourse } from "../scripts/data/authored-course";
import { loadAllCourseFiles } from "./course-files";

// Reviewer sign-off (plans/93 section 1): the pure rules. The marker lines below are copied from the
// course files, one per style, so a change to how the helpers word a marker fails here first.
// DECISION_LINE is sound-craft's brief-question-5 marker, retired from the course on 2026-11-01 when
// BAM answered the question; it stays here as the fixture for the decision format.

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

describe("every marked course file", () => {
  // A snapshot of what the seeder will write, over EVERY course file (plans/97 G4), not a
  // hand-picked list: the list it replaced covered 5 of the 16 files that carry markers. If a course
  // gains or loses a marker, update its line deliberately; if a marker stops parsing, the
  // "decision" fallback shows up here as a jump (and tests/lesson-review-markers.test.ts names it).
  //
  // Counted the way the seeder counts (scripts/lib/seed-authored-course.ts): an explicit
  // `reviewNeeds` on a lesson wins over the parsed markers.
  //   2026-10-14 (v1 build): 71 lessons, 83 needs, in 4 files.
  //   2026-11-01 before v2: 248 lessons, 184 QR, 79 P, 8 decisions, in 16 files.
  //   2026-11-01 after v2: 247 lessons, 184 QR, 79 P, 3 decisions. Sound-craft's five decisions
  //     went with BAM's answers to brief questions 5 and 6 (lesson 17 carried only one of them).
  //     reading-a-land-description kept its three Native-reviewer decisions on purpose then.
  //   2026-11-02 (migration 0075, verdicts per reviewer): 247 lessons, 187 QR, 79 P, 0 decisions. The
  //     three Native-reviewer decisions became QR needs tagged [native-reviewer] (plan 97 Q3), each
  //     signed off separately from the surveyor's need on the same lesson.
  type Tally = { lessons: number; qr: number; p: number; decision: number };
  const tally = (c: AuthoredCourse): Tally => {
    const t: Tally = { lessons: 0, qr: 0, p: 0, decision: 0 };
    for (const l of c.lessons) {
      const needs = l.reviewNeeds ?? parseReleaseMarkers(l.body).needs;
      if (needs.length) t.lessons++;
      for (const n of needs) t[n.kind]++;
    }
    return t;
  };
  const marked = async () => {
    const { courses } = await loadAllCourseFiles();
    return courses
      .map((c) => ({ ...c, t: tally(c.course) }))
      .filter((c) => c.t.lessons > 0);
  };
  const SLOW = 180_000;

  it(
    "parses to the expected needs per course export",
    async () => {
      const rows = await marked();
      expect(Object.fromEntries(rows.map((r) => [`${r.file.replace("scripts/data/", "")}#${r.exportName}`, r.t]))).toEqual({
        "arena-transmission-course.ts#ARENA_TRANSMISSION_COURSE": { lessons: 7, qr: 7, p: 1, decision: 0 },
        "cables-and-connectors-course.ts#CABLES_AND_CONNECTORS_COURSE": { lessons: 23, qr: 22, p: 1, decision: 0 },
        "cinema-look-camera-rig-course.ts#CINEMA_LOOK_CAMERA_RIG_COURSE": { lessons: 13, qr: 12, p: 1, decision: 0 },
        "light-on-set-course.ts#LIGHT_ON_SET_COURSE": { lessons: 19, qr: 8, p: 14, decision: 0 },
        "map-and-compass-course.ts#MAP_AND_COMPASS_COURSE": { lessons: 22, qr: 8, p: 17, decision: 0 },
        "raising-animals-for-yarn-course.ts#RAISING_ANIMALS_FOR_YARN_COURSE": { lessons: 23, qr: 18, p: 7, decision: 0 },
        // FIRM-01 seeds on two schools from two exports of one file; counted once in the totals below.
        "read-the-statements-course.ts#READ_THE_STATEMENTS_COURSE": { lessons: 14, qr: 14, p: 0, decision: 0 },
        "read-the-statements-course.ts#READ_THE_STATEMENTS_LEARN_COURSE": { lessons: 14, qr: 14, p: 0, decision: 0 },
        "reading-a-land-description-course.ts#READING_A_LAND_DESCRIPTION_COURSE": { lessons: 7, qr: 9, p: 1, decision: 0 },
        "renting-out-production-gear-course.ts#RENTING_OUT_PRODUCTION_GEAR_COURSE": { lessons: 9, qr: 8, p: 1, decision: 0 },
        "sideline-systems-course.ts#SIDELINE_SYSTEMS_COURSE": { lessons: 21, qr: 25, p: 0, decision: 0 },
        "sound-craft-course.ts#SOUND_CRAFT_COURSE": { lessons: 11, qr: 7, p: 5, decision: 0 },
        "stage-and-broadcast-rigging-course.ts#STAGE_AND_BROADCAST_RIGGING_COURSE": { lessons: 17, qr: 17, p: 2, decision: 0 },
        "surveying-how-land-gets-measured-course.ts#SURVEYING_HOW_LAND_GETS_MEASURED_COURSE": { lessons: 12, qr: 2, p: 10, decision: 0 },
        "the-abacus-course.ts#THE_ABACUS_COURSE": { lessons: 7, qr: 0, p: 7, decision: 0 },
        "the-show-crew-course.ts#THE_SHOW_CREW_COURSE": { lessons: 30, qr: 30, p: 0, decision: 0 },
        "the-slide-rule-course.ts#THE_SLIDE_RULE_COURSE": { lessons: 12, qr: 0, p: 12, decision: 0 },
      });
    },
    SLOW,
  );

  it(
    "totals over the 16 files (one export per file)",
    async () => {
      const rows = await marked();
      const perFile = new Map<string, Tally>();
      for (const r of rows) if (!perFile.has(r.file)) perFile.set(r.file, r.t);
      const total = { files: perFile.size, lessons: 0, qr: 0, p: 0, decision: 0 };
      for (const t of perFile.values()) {
        total.lessons += t.lessons;
        total.qr += t.qr;
        total.p += t.p;
        total.decision += t.decision;
      }
      expect(total).toEqual({ files: 16, lessons: 247, qr: 187, p: 79, decision: 0 });
    },
    SLOW,
  );

  it(
    "every decision is a real 'BAM's decision' marker, never the unparseable fallback",
    async () => {
      for (const { course } of await marked()) {
        for (const l of course.lessons) {
          for (const n of parseReleaseMarkers(l.body).needs) {
            if (n.kind === "decision") expect(n.question, l.slug).toBeTypeOf("number");
          }
        }
      }
    },
    SLOW,
  );

  it(
    "strips every marker and leaves no lesson starting with a blank line",
    async () => {
      for (const { course } of await marked()) {
        for (const l of course.lessons) {
          const { needs, body } = parseReleaseMarkers(l.body);
          expect(body, l.slug).not.toContain("> **Before release:**");
          if (needs.length) expect(body.startsWith("\n"), l.slug).toBe(false);
          else expect(body, l.slug).toBe(l.body ?? "");
        }
      }
    },
    SLOW,
  );
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
