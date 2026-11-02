import { describe, expect, it } from "vitest";
import {
  canRecordVerdict,
  normalizeReviewerKey,
  parseReleaseMarkers,
  readReviewNeeds,
  releaseReadiness,
  reviewerKeyOptions,
  slotId,
  verdictBlockReason,
  verdictSlotsFor,
  type MaterialLesson,
  type ReviewNeed,
} from "@/lib/lesson-review";
import { lessonReviewHash } from "@/lib/lesson-review-hash";
import { readinessOf, summarizeLessonReview, type StoredReview } from "@/lib/lesson-review-summary";
import { needsHeading } from "@/lib/review-packet";
import { READING_A_LAND_DESCRIPTION_COURSE } from "../scripts/data/reading-a-land-description-course";

// Migration 0075 (BAM, 2026-11-02: "Add a database change so each kind of review is signed off
// separately"). A lesson can need two different qualified reviewers, a licensed land surveyor AND a
// Native reviewer in reading-a-land-description. Verdicts used to be one per lesson per need KIND, so
// the surveyor's QR verdict would also clear the Native reviewer's need. Each (kind, reviewer key) is
// now its own sign-off, and only a grant carrying that key may record it.

const SURVEYOR_LINE =
  "> **Before release:** needs a qualified reviewer (QR): a licensed land surveyor, to be named, to check the survey history.";
const NATIVE_LINE =
  "> **Before release:** needs a qualified reviewer (QR) [native-reviewer]: a Native reviewer, to be named, to read how the lesson presents the cessions.";

const body = `${SURVEYOR_LINE}\n${NATIVE_LINE}\n\nThe grid followed the cessions.`;

describe("parsing a reviewer tag", () => {
  it("reads the tag into reviewerKey and leaves the who text untouched", () => {
    const { needs, body: rest } = parseReleaseMarkers(body);
    expect(needs).toEqual([
      { kind: "qr", who: "a licensed land surveyor, to be named, to check the survey history" },
      {
        kind: "qr",
        who: "a Native reviewer, to be named, to read how the lesson presents the cessions",
        reviewerKey: "native-reviewer",
      },
    ]);
    expect(rest).toBe("The grid followed the cessions.");
  });

  it("an untagged marker parses exactly as before 0075 (no reviewerKey property at all)", () => {
    const [n] = parseReleaseMarkers(SURVEYOR_LINE).needs;
    expect(Object.keys(n).sort()).toEqual(["kind", "who"]);
  });

  it("a tag works on a practitioner need and on the second half of a double line", () => {
    expect(parseReleaseMarkers("> **Before release:** needs a practitioner [sheep-shearer]: a shearer.").needs).toEqual([
      { kind: "p", who: "a shearer", reviewerKey: "sheep-shearer" },
    ]);
    expect(
      parseReleaseMarkers(
        "> **Before release:** needs a qualified reviewer (QR): a shepherd; and needs a practitioner [sheep-shearer]: a shearer.",
      ).needs,
    ).toEqual([
      { kind: "qr", who: "a shepherd" },
      { kind: "p", who: "a shearer", reviewerKey: "sheep-shearer" },
    ]);
  });

  it("fails closed on a malformed tag, an empty tag, or a tag on a decision", () => {
    for (const line of [
      "> **Before release:** needs a qualified reviewer (QR) [Native Reviewer]: a Native reviewer.",
      "> **Before release:** needs a qualified reviewer (QR) []: a Native reviewer.",
      "> **Before release:** needs BAM's decision (brief question 8) [native-reviewer]: whether to release.",
    ]) {
      const [n] = parseReleaseMarkers(line).needs;
      expect(n.kind, line).toBe("decision");
      expect(n.question, line).toBeUndefined();
    }
  });

  it("normalizeReviewerKey accepts '' and kebab-case keys only", () => {
    expect(normalizeReviewerKey(undefined)).toBe("");
    expect(normalizeReviewerKey("")).toBe("");
    expect(normalizeReviewerKey("native-reviewer")).toBe("native-reviewer");
    expect(normalizeReviewerKey("Native")).toBeNull();
    expect(normalizeReviewerKey("a--b")).toBeNull();
    expect(normalizeReviewerKey("x".repeat(41))).toBeNull();
    expect(normalizeReviewerKey(7)).toBeNull();
  });

  it("readReviewNeeds keeps a valid key, drops a need with a malformed one, and never keys a decision", () => {
    expect(
      readReviewNeeds([
        { kind: "qr", who: "a surveyor" },
        { kind: "qr", who: "a Native reviewer", reviewerKey: "native-reviewer" },
        { kind: "qr", who: "bad", reviewerKey: "Bad Key" },
        { kind: "decision", who: "d", question: 8, reviewerKey: "native-reviewer" },
      ]),
    ).toEqual([
      { kind: "qr", who: "a surveyor" },
      { kind: "qr", who: "a Native reviewer", reviewerKey: "native-reviewer" },
      { kind: "decision", who: "d", question: 8 },
    ]);
  });
});

describe("one sign-off per (kind, reviewer key)", () => {
  const surveyor: ReviewNeed = { kind: "qr", who: "a surveyor" };
  const surveyor2: ReviewNeed = { kind: "qr", who: "a surveyor, the deed rules" };
  const native: ReviewNeed = { kind: "qr", who: "a Native reviewer", reviewerKey: "native-reviewer" };
  const demo: ReviewNeed = { kind: "p", who: "BAM's filmed visit" };

  it("verdictSlotsFor: untagged needs of a kind are one slot, each tag is its own, QR before P", () => {
    expect(verdictSlotsFor([demo, surveyor, native, surveyor2])).toEqual([
      { kind: "qr", reviewerKey: "" },
      { kind: "qr", reviewerKey: "native-reviewer" },
      { kind: "p", reviewerKey: "" },
    ]);
    expect(slotId("qr", "")).toBe("qr");
    expect(slotId("qr", "native-reviewer")).toBe("qr:native-reviewer");
  });

  it("releaseReadiness: the surveyor's clearance alone does not make the lesson ready", () => {
    expect(releaseReadiness([{ needs: [surveyor, native], states: { qr: "cleared" } }])).toEqual({
      ready: false,
      qrTotal: 2,
      qrCleared: 1,
      pTotal: 0,
      pCleared: 0,
      openDecisions: 0,
    });
    expect(
      releaseReadiness([{ needs: [surveyor, native], states: { qr: "cleared", "qr:native-reviewer": "cleared" } }]).ready,
    ).toBe(true);
  });

  it("reviewerKeyOptions lists each tagged reviewer once with the words that name it", () => {
    expect(reviewerKeyOptions([[surveyor, native], [native, demo]])).toEqual([
      { key: "native-reviewer", example: "a Native reviewer" },
    ]);
    expect(reviewerKeyOptions([[surveyor, demo]])).toEqual([]);
  });

  it("the reviewer packet heads a tagged need with its reviewer", () => {
    expect(needsHeading([surveyor, native])).toContain("> **Qualified reviewer (native reviewer):** a Native reviewer");
    expect(needsHeading([surveyor])).toContain("> **Qualified reviewer:** a surveyor");
  });
});

describe("summarizeLessonReview with two reviewers on one lesson", () => {
  const lesson: MaterialLesson & { id: string; reviewNeeds: unknown } = {
    id: "lesson-10",
    title: "How Indiana was surveyed",
    textContent: body,
    contentUrl: null,
    recallContent: null,
    exerciseContent: null,
    mapContent: null,
    reviewNeeds: parseReleaseMarkers(body).needs,
  };
  const hash = lessonReviewHash(lesson);
  const verdict = (over: Partial<StoredReview> = {}): StoredReview => ({
    needKind: "qr",
    reviewerKey: "",
    auditorId: "grant-surveyor",
    verdict: "cleared",
    reviewerUserId: "u-surveyor",
    reviewerName: "Sam Surveyor",
    reviewerCredential: "Licensed land surveyor, Indiana",
    correction: null,
    correctionAppliedAt: null,
    lessonHash: hash,
    decidedAt: new Date("2026-11-02T00:00:00Z"),
    ...over,
  });

  it("a surveyor verdict clears the surveyor's need and leaves the Native reviewer's awaiting", () => {
    const s = summarizeLessonReview(lesson, [verdict()]);
    expect(s.rows.map((r) => [r.kind, r.reviewerKey, r.state])).toEqual([
      ["qr", "", "cleared"],
      ["qr", "native-reviewer", "awaiting"],
    ]);
    expect(readinessOf([s])).toMatchObject({ ready: false, qrTotal: 2, qrCleared: 1 });
  });

  it("both verdicts clear both needs, each credited to its own reviewer", () => {
    const s = summarizeLessonReview(lesson, [
      verdict(),
      verdict({ reviewerKey: "native-reviewer", auditorId: "grant-native", reviewerName: "Nia Reader" }),
    ]);
    expect(s.rows.map((r) => [r.reviewerKey, r.state, r.review?.reviewerName])).toEqual([
      ["", "cleared", "Sam Surveyor"],
      ["native-reviewer", "cleared", "Nia Reader"],
    ]);
    expect(readinessOf([s]).ready).toBe(true);
  });

  it("a stored verdict from before 0075 (no reviewerKey) still clears the untagged need", () => {
    const legacy = verdict();
    delete legacy.reviewerKey;
    expect(summarizeLessonReview(lesson, [legacy]).rows[0]).toMatchObject({ reviewerKey: "", state: "cleared" });
  });

  it("a cleared tagged verdict whose marker went keeps its badge, unmarked", () => {
    const untaggedOnly = { ...lesson, reviewNeeds: [{ kind: "qr", who: "a surveyor" }] };
    const s = summarizeLessonReview(untaggedOnly, [
      verdict({ reviewerKey: "native-reviewer", lessonHash: lessonReviewHash(untaggedOnly) }),
    ]);
    expect(s.rows.map((r) => [r.reviewerKey, r.state, r.stillMarked])).toEqual([
      ["", "awaiting", true],
      ["native-reviewer", "cleared", false],
    ]);
    // An unmarked badge never counts toward readiness.
    expect(readinessOf([s])).toMatchObject({ qrTotal: 1, qrCleared: 0 });
  });
});

describe("who may record a tagged need", () => {
  const credited = { isAuditor: true, hasCredential: true, isOwner: false, isInstructor: false };

  it("a grant clears only the needs carrying its own key", () => {
    // The surveyor (untagged grant) cannot record the Native reviewer's need ...
    expect(verdictBlockReason({ ...credited, kind: "qr", grantReviewerKey: "", needReviewerKey: "native-reviewer" })).toBe(
      "other_reviewer",
    );
    // ... and the Native reviewer cannot record the surveyor's.
    expect(canRecordVerdict({ ...credited, kind: "qr", grantReviewerKey: "native-reviewer", needReviewerKey: "" })).toBe(false);
    expect(canRecordVerdict({ ...credited, kind: "qr", grantReviewerKey: "native-reviewer", needReviewerKey: "native-reviewer" })).toBe(
      true,
    );
    expect(canRecordVerdict({ ...credited, kind: "qr", grantReviewerKey: "", needReviewerKey: "" })).toBe(true);
    // Absent keys are '' (every caller before 0075).
    expect(canRecordVerdict({ ...credited, kind: "qr" })).toBe(true);
  });

  it("the earlier reasons still win, and the owner's own demonstration clears any P need", () => {
    expect(verdictBlockReason({ ...credited, hasCredential: false, kind: "qr", grantReviewerKey: "x", needReviewerKey: "" })).toBe(
      "no_credential",
    );
    expect(
      verdictBlockReason({ ...credited, isAuditor: false, isOwner: true, kind: "p", needReviewerKey: "sheep-shearer" }),
    ).toBeNull();
    expect(
      verdictBlockReason({ ...credited, isAuditor: false, isOwner: true, kind: "qr", needReviewerKey: "native-reviewer" }),
    ).toBe("owner_qr");
  });
});

describe("reading-a-land-description (plan 97 Q3)", () => {
  it("lessons 3, 7 and 10 each carry a surveyor need and a separate native-reviewer need, and no decision", () => {
    const withNative = READING_A_LAND_DESCRIPTION_COURSE.lessons
      .map((l) => ({ slug: l.slug, needs: parseReleaseMarkers(l.body).needs }))
      .filter((l) => l.needs.some((n) => n.reviewerKey === "native-reviewer"));
    expect(withNative).toHaveLength(3);
    for (const l of withNative) {
      expect(verdictSlotsFor(l.needs), l.slug).toEqual([
        { kind: "qr", reviewerKey: "" },
        { kind: "qr", reviewerKey: "native-reviewer" },
      ]);
    }
    const all = READING_A_LAND_DESCRIPTION_COURSE.lessons.flatMap((l) => parseReleaseMarkers(l.body).needs);
    expect(all.filter((n) => n.kind === "decision")).toEqual([]);
  });
});
