// Reviewer sign-off (plans/93 section 1). PURE: no db, no next/headers, no node built-ins, so the
// unit tests and the isolation suite can prove every branch offline, and a client component may
// import the labels. The sha256 of `materialLessonText` lives in ./lesson-review-hash.ts, which is
// server-only because it needs node:crypto.
//
// What this turns into data: four course files mark the lessons that need someone before release
// with one line at the top of the body,
//
//   > **Before release:** needs a qualified reviewer (QR): a large-animal veterinarian.
//
// and those lines used to be prose nobody could count, clear or credit. The seeder now parses them
// into `lessons.review_needs` and strips them from `text_content`; the lesson page draws them back
// as a box that still begins "Before release" (the rigging course quizzes on that exact sentence).
//
// THE TRUST RULES, all here so the routes cannot each invent their own:
//   1. A verdict is pinned to a hash of the lesson's MATERIAL text. Any change to that text, even a
//      typo fix, resets the verdict on the next read. That is deliberate and stated on screen: a
//      reviewer's name must never sit on wording the reviewer did not read.
//   2. A QR need is cleared only by an accepted course auditor whose name and credential were set
//      by the person who invited them, so the credential is not only self-reported.
//   3. The platform owner may clear a P need (it may be his own demonstration) and never a QR need,
//      even if he holds an audit grant on the course. The course's own instructor clears nothing:
//      an author does not review their own lesson.
//   4. A "decision" marker is not a review. It clears only by editing the marker away.
//   5. Each (kind, reviewer key) need is its own sign-off (migration 0075). A marker may name WHICH
//      reviewer it asks for with a tag before the colon, "needs a qualified reviewer (QR)
//      [native-reviewer]: ...", and only a grant carrying the same key may record a verdict on it.
//      An untagged marker has the key '' and is cleared by an untagged grant, exactly as before, so
//      a surveyor's verdict can never clear the Native reviewer's need on the same lesson.
//
// NO INBOX (CLAUDE.md). A correction is one-way content attached to ONE lesson and ONE need. There
// is no recipient, no reply, no thread, no read state and no notification, and a new verdict
// replaces the old one rather than answering it.

/** qr = a qualified reviewer, p = a practitioner (or BAM's demonstration), decision = BAM's call. */
export type NeedKind = "qr" | "p" | "decision";
/** The kinds a verdict can be recorded against. A decision is never a verdict. */
export type VerdictNeedKind = Exclude<NeedKind, "decision">;
export type Verdict = "cleared" | "cleared_with_correction" | "not_cleared";

export const VERDICT_NEED_KINDS: readonly VerdictNeedKind[] = ["qr", "p"];
export const VERDICTS: readonly Verdict[] = ["cleared", "cleared_with_correction", "not_cleared"];

/** One parsed need. `who` is the text after the colon, without the closing period. */
export interface ReviewNeed {
  kind: NeedKind;
  who: string;
  /** For a decision marker: the brief question it refers to. */
  question?: number;
  /**
   * Which reviewer this need asks for, from the marker's `[tag]` (rule 5). Absent means '' (the
   * course's untagged reviewer). Never set on a decision. Stored in `lessons.review_needs` only when
   * present, so every untagged lesson's jsonb is byte-for-byte what it was before 0075.
   */
  reviewerKey?: string;
}

/** A reviewer key: lowercase words joined by hyphens, e.g. `native-reviewer`. '' means untagged. */
export const REVIEWER_KEY_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
export const REVIEWER_KEY_MAX = 40;

/** '' or a well-formed key; anything else is null (a request or a jsonb value that is not a key). */
export function normalizeReviewerKey(v: unknown): string | null {
  if (v === undefined || v === null || v === "") return "";
  if (typeof v !== "string") return null;
  const k = v.trim();
  if (k === "") return "";
  return k.length <= REVIEWER_KEY_MAX && REVIEWER_KEY_PATTERN.test(k) ? k : null;
}

/** The need's reviewer key, '' when untagged. */
export function reviewerKeyOf(n: { reviewerKey?: string | null }): string {
  return n.reviewerKey ?? "";
}

/** Plain words for a key in copy ("native-reviewer" reads "native reviewer"). */
export function reviewerKeyLabel(key: string): string {
  return key.replace(/-/g, " ");
}

/** The literal a marker line starts with. A prose sentence that merely mentions "before release" is not one. */
export const RELEASE_MARKER = "> **Before release:**";

// Up to three spaces may precede a blockquote in Markdown and it still renders as one, so they may
// precede a marker too. Anything else (a sentence that mentions the words) is prose and stays.
const MARKER_LINE = /^ {0,3}> \*\*Before release:\*\*(.*)$/;

// Longest alternative first: "a practitioner" is a prefix of "a practitioner or BAM's demonstration".
// The optional `[key]` before the colon names which reviewer the need is for (rule 5).
const NEED_PHRASE =
  /^(?:needs\s+)?(a qualified reviewer \(QR\)|a practitioner or BAM's demonstration|a practitioner|BAM's decision \(brief question (\d+)\))(?:\s*\[([^\]]*)\])?\s*:\s*([\s\S]*)$/;

function kindOf(phrase: string): NeedKind {
  if (phrase.startsWith("a qualified reviewer")) return "qr";
  if (phrase.startsWith("a practitioner")) return "p";
  return "decision";
}

function stripPeriod(s: string): string {
  return s.trim().replace(/\.$/, "").trim();
}

/** Parse the text after `> **Before release:**` into one or two needs. */
function parseMarkerRest(rest: string): ReviewNeed[] {
  // Two raising-animals lines carry two needs: "needs a qualified reviewer (QR): a shepherd; and
  // needs a practitioner: a sheep shearer, ...". The joiner is exact, so a "who" that merely holds
  // a semicolon ("...; any consent law added later needs that reviewer...") is not split.
  const segments = rest.trim().split(/;\s+and\s+(?=needs\s)/);
  const out: ReviewNeed[] = [];
  for (const seg of segments) {
    const m = NEED_PHRASE.exec(seg.trim());
    if (!m) {
      // FAIL CLOSED. A marker nobody can parse must still hold the course, so it becomes a
      // decision (which no verdict can clear) carrying its own words, until someone fixes the line.
      out.push({ kind: "decision", who: stripPeriod(seg.replace(/^needs\s+/, "")) });
      continue;
    }
    const kind = kindOf(m[1]);
    const tag = m[3];
    // A tag on a decision, or a tag that is not a well-formed key, fails closed like any other
    // unreadable marker: a decision with no brief question number, which the marker test names.
    const key = tag === undefined ? "" : normalizeReviewerKey(tag);
    if (tag !== undefined && (kind === "decision" || key === null || key === "")) {
      out.push({ kind: "decision", who: stripPeriod(seg.replace(/^needs\s+/, "")) });
      continue;
    }
    const need: ReviewNeed = { kind, who: stripPeriod(m[4]) };
    if (kind === "decision" && m[2]) need.question = Number(m[2]);
    if (key) need.reviewerKey = key;
    out.push(need);
  }
  return out;
}

/**
 * Split a lesson body into its release needs and the body without the marker lines.
 *
 * A body with no marker comes back byte-for-byte unchanged, so every lesson without one seeds
 * exactly as before. A blank line left behind by a removed marker goes with it, so a marker at the
 * top does not leave the lesson starting with an empty paragraph.
 */
export function parseReleaseMarkers(body: string | null | undefined): { needs: ReviewNeed[]; body: string } {
  const text = body ?? "";
  if (!text.includes("Before release:")) return { needs: [], body: text };
  const lines = text.split("\n");
  const kept: string[] = [];
  const needs: ReviewNeed[] = [];
  let afterMarker = false;
  for (const line of lines) {
    const m = MARKER_LINE.exec(line);
    if (m) {
      needs.push(...parseMarkerRest(m[1]));
      afterMarker = true;
      continue;
    }
    if (afterMarker && line.trim() === "") continue;
    afterMarker = false;
    kept.push(line);
  }
  if (needs.length === 0) return { needs: [], body: text };
  while (kept.length > 0 && kept[0].trim() === "") kept.shift();
  return { needs, body: kept.join("\n") };
}

/** Read `lessons.review_needs` defensively: anything that is not a well-formed need is dropped. */
export function readReviewNeeds(value: unknown): ReviewNeed[] {
  if (!Array.isArray(value)) return [];
  const out: ReviewNeed[] = [];
  for (const v of value) {
    if (!v || typeof v !== "object") continue;
    const { kind, who, question, reviewerKey } = v as Record<string, unknown>;
    if (kind !== "qr" && kind !== "p" && kind !== "decision") continue;
    if (typeof who !== "string") continue;
    const need: ReviewNeed = { kind, who };
    if (typeof question === "number" && Number.isInteger(question)) need.question = question;
    if (kind !== "decision") {
      const key = normalizeReviewerKey(reviewerKey);
      // A malformed key must not quietly merge into the untagged need: drop the need instead of
      // guessing, the same as any other malformed entry. (The seeder only ever writes valid keys.)
      if (key === null) continue;
      if (key) need.reviewerKey = key;
    }
    out.push(need);
  }
  return out;
}

/** The verdict kinds a lesson's needs call for, deduplicated. */
export function verdictKindsFor(needs: readonly ReviewNeed[]): VerdictNeedKind[] {
  return VERDICT_NEED_KINDS.filter((k) => needs.some((n) => n.kind === k));
}

/** One sign-off a lesson asks for: a verdict kind and the reviewer it is for. */
export interface VerdictSlot {
  kind: VerdictNeedKind;
  reviewerKey: string;
}

/**
 * The tagged reviewers a course's needs name, in first-seen order, each with the first "who" that
 * names it (cut at its first comma) so the inviter can tell which need a key means. Untagged needs
 * are not listed: '' is always an option of its own.
 */
export function reviewerKeyOptions(needLists: readonly (readonly ReviewNeed[])[]): { key: string; example: string }[] {
  const out = new Map<string, string>();
  for (const needs of needLists)
    for (const n of needs) {
      const key = reviewerKeyOf(n);
      if (key && n.kind !== "decision" && !out.has(key)) out.set(key, n.who.split(",")[0].trim());
    }
  return [...out].map(([key, example]) => ({ key, example }));
}

/** A slot's id: "qr" and "p" for untagged needs (as before 0075), "qr:native-reviewer" for a tagged one. */
export function slotId(kind: VerdictNeedKind, reviewerKey: string): string {
  return reviewerKey ? `${kind}:${reviewerKey}` : kind;
}

/**
 * The sign-offs a lesson's needs call for: one per (kind, reviewer key), QR before P, keys in the
 * order the markers name them. Two untagged QR markers are still ONE sign-off (the same reviewer);
 * a tagged one is its own (rule 5).
 */
export function verdictSlotsFor(needs: readonly ReviewNeed[]): VerdictSlot[] {
  const out: VerdictSlot[] = [];
  for (const kind of VERDICT_NEED_KINDS) {
    const seen = new Set<string>();
    for (const n of needs) {
      if (n.kind !== kind) continue;
      const reviewerKey = reviewerKeyOf(n);
      if (seen.has(reviewerKey)) continue;
      seen.add(reviewerKey);
      out.push({ kind, reviewerKey });
    }
  }
  return out;
}

// ── The material text a verdict is pinned to ─────────────────────────────────

/** The lesson fields that carry what a reviewer actually read. */
export interface MaterialLesson {
  title: string;
  textContent: string | null;
  contentUrl: string | null;
  recallContent: unknown;
  exerciseContent: unknown;
  mapContent: unknown;
}

const collapse = (s: string) => s.replace(/\s+/g, " ").trim();

/**
 * JSON with object keys sorted at every depth. Postgres `jsonb` does not keep key order, so the same
 * recall card written by the seeder and read back from the database can stringify differently with
 * plain JSON.stringify; sorting makes the hash depend on the content alone.
 */
export function stableStringify(v: unknown): string {
  if (v === undefined || v === null) return "null";
  if (typeof v !== "object") return JSON.stringify(v) ?? "null";
  if (Array.isArray(v)) return `[${v.map(stableStringify).join(",")}]`;
  const obj = v as Record<string, unknown>;
  const parts = Object.keys(obj)
    .filter((k) => obj[k] !== undefined)
    .sort()
    .map((k) => `${JSON.stringify(k)}:${stableStringify(obj[k])}`);
  return `{${parts.join(",")}}`;
}

/**
 * The text a verdict is pinned to: the title, the body WITHOUT its markers and with whitespace
 * collapsed, the media URL, and the recall, exercise and map content.
 *
 * Deliberately left out: sort order, module, the publish and free-preview flags (moving a lesson is
 * not changing what it says), the marker lines themselves (so removing a marker keeps the badge),
 * and runs of whitespace (a re-flowed paragraph says the same thing). Everything else counts, a
 * one-letter typo fix included.
 */
export function materialLessonText(lesson: MaterialLesson): string {
  return stableStringify({
    v: 1,
    title: collapse(lesson.title ?? ""),
    body: collapse(parseReleaseMarkers(lesson.textContent).body),
    contentUrl: lesson.contentUrl?.trim() || null,
    recall: lesson.recallContent ?? null,
    exercise: lesson.exerciseContent ?? null,
    map: lesson.mapContent ?? null,
  });
}

// ── State, computed on read ──────────────────────────────────────────────────

export type ReviewState = "awaiting" | "cleared" | "pending_correction" | "not_cleared" | "changed_since_review";

export interface ReviewRowLike {
  verdict: Verdict | string;
  correctionAppliedAt: Date | string | null;
  lessonHash: string;
}

/**
 * What a stored verdict means TODAY. The stored row never changes when the lesson does; the
 * comparison with the current hash happens on every read, which is what makes a re-seed or a /teach
 * edit reset the verdict without any write path having to remember to.
 */
export function effectiveReviewState(row: ReviewRowLike | null | undefined, currentHash: string): ReviewState {
  if (!row) return "awaiting";
  if (row.lessonHash !== currentHash) return "changed_since_review";
  if (row.verdict === "not_cleared") return "not_cleared";
  if (row.verdict === "cleared_with_correction") return row.correctionAppliedAt ? "cleared" : "pending_correction";
  if (row.verdict === "cleared") return "cleared";
  return "awaiting";
}

export interface ReadinessLesson {
  needs: readonly ReviewNeed[];
  /** The effective state per sign-off, keyed by slotId ("qr", "p", "qr:native-reviewer"). Missing reads as awaiting. */
  states: Partial<Record<string, ReviewState>>;
}

export interface ReleaseReadiness {
  /** Every QR and P sign-off cleared, no decision marker left, and at least one marker to have reviewed. */
  ready: boolean;
  /** Counts are per sign-off (one per lesson, kind and reviewer key), not per lesson. */
  qrTotal: number;
  qrCleared: number;
  pTotal: number;
  pCleared: number;
  openDecisions: number;
}

/**
 * May the review hold come off? Ready means every lesson's QR AND P need is cleared and no decision
 * marker remains. P needs block too (changed from plans/93's draft on review, 2026-10-14): a released
 * course must not show learners a "Before release" box, and a sound-craft marker says the lesson is
 * not released without its practitioner. The owner can clear a P need himself (own demonstration),
 * so this adds no outside dependency. A course with no markers at all is NOT ready here: its hold
 * was never about markers and is still cleared by hand.
 */
export function releaseReadiness(lessons: readonly ReadinessLesson[]): ReleaseReadiness {
  let qrTotal = 0;
  let qrCleared = 0;
  let pTotal = 0;
  let pCleared = 0;
  let openDecisions = 0;
  for (const l of lessons) {
    for (const slot of verdictSlotsFor(l.needs)) {
      const cleared = l.states[slotId(slot.kind, slot.reviewerKey)] === "cleared";
      if (slot.kind === "qr") {
        qrTotal++;
        if (cleared) qrCleared++;
      } else {
        pTotal++;
        if (cleared) pCleared++;
      }
    }
    openDecisions += l.needs.filter((n) => n.kind === "decision").length;
  }
  const anything = qrTotal + pTotal + openDecisions > 0;
  return {
    ready: anything && qrCleared === qrTotal && pCleared === pTotal && openDecisions === 0,
    qrTotal,
    qrCleared,
    pTotal,
    pCleared,
    openDecisions,
  };
}

// ── Who may record a verdict ─────────────────────────────────────────────────

export interface VerdictActor {
  /** An ACCEPTED course_auditors grant on this course, in this tenant. */
  isAuditor: boolean;
  /** That grant carries a reviewer name AND credential, both set by the inviter. */
  hasCredential: boolean;
  isOwner: boolean;
  /** The course's own instructor. */
  isInstructor: boolean;
  kind: NeedKind;
  /** The reviewer key on the viewer's grant ('' for an untagged grant). Ignored for the owner. */
  grantReviewerKey?: string;
  /** The reviewer key of the need being recorded ('' for an untagged need). */
  needReviewerKey?: string;
}

/**
 * Why a viewer may NOT record a verdict on a need, as a code the form maps to a sentence
 * (plans/97 v2, G2: a reviewer always sees why the form is disabled). Null means they may.
 * One function decides both the answer and the reason, so the two can never disagree.
 */
export type VerdictBlockReason = "decision" | "owner_qr" | "instructor" | "no_grant" | "no_credential" | "other_reviewer";

/** See rule 2 and 3 in the header. */
export function verdictBlockReason(a: VerdictActor): VerdictBlockReason | null {
  if (a.kind === "decision") return "decision";
  // The owner's own demonstration may clear a P need. A QR need needs somebody else, so the owner
  // is refused QR even while holding a grant (a self-invite must not become a qualification).
  if (a.isOwner) return a.kind === "p" ? null : "owner_qr";
  if (a.isInstructor) return "instructor";
  if (!a.isAuditor) return "no_grant";
  if (!a.hasCredential) return "no_credential";
  // Rule 5: a grant clears only the needs tagged with its own key, so one reviewer's verdict can
  // never stand in for a different reviewer's need on the same lesson.
  return (a.grantReviewerKey ?? "") === (a.needReviewerKey ?? "") ? null : "other_reviewer";
}

export function canRecordVerdict(a: VerdictActor): boolean {
  return verdictBlockReason(a) === null;
}

/** The sentence shown above a disabled verdict form, one per reason. */
export const VERDICT_BLOCK_SENTENCE: Record<VerdictBlockReason, string> = {
  decision: "This need is a decision for the course's owner, not a review, so no verdict can clear it.",
  owner_qr:
    "A qualified-reviewer need is cleared by someone else's review. As the platform owner you may clear practitioner needs only.",
  instructor: "You teach this course, so you cannot review it. Ask the owner to invite another reviewer.",
  no_grant:
    "This account has no accepted invitation to review this course. Sign in with the address you were invited at, or open your invitation link.",
  no_credential:
    "The person who invited you has not added your name and credential yet, so a verdict cannot be credited. Ask them to add it; the form opens as soon as they do.",
  other_reviewer:
    "This need asks for a different reviewer from the one your invitation names, so that reviewer records its verdict. Your verdicts on this lesson's other needs still count.",
};

/** A grant's credit line is usable only when both halves are present and not blank. */
export function hasReviewerCredential(g: { reviewerName: string | null; reviewerCredential: string | null }): boolean {
  return Boolean(g.reviewerName?.trim()) && Boolean(g.reviewerCredential?.trim());
}

/** What the badge says when the platform owner clears a P need with his own demonstration. */
export const OWNER_DEMONSTRATION_CREDENTIAL = "Platform owner, own demonstration";

export const REVIEWER_NAME_MAX = 120;
/** course_auditors.credential_evidence_url: https only, at most this long (the table's CHECK agrees). */
export const EVIDENCE_URL_MAX = 500;

/**
 * Validate the optional, owner-only credential evidence link (plans/97 v2 Q2). Blank clears it.
 * https only: a link the owner clicks to check a license must not be a javascript: or http: URL.
 */
export function normalizeEvidenceUrl(
  raw: string | null | undefined,
): { ok: true; url: string | null } | { ok: false; error: string } {
  const v = (raw ?? "").trim();
  if (!v) return { ok: true, url: null };
  if (v.length > EVIDENCE_URL_MAX) return { ok: false, error: `Keep the evidence link under ${EVIDENCE_URL_MAX} characters.` };
  let u: URL;
  try {
    u = new URL(v);
  } catch {
    return { ok: false, error: "The evidence link must be a full web address starting with https://." };
  }
  if (u.protocol !== "https:" || !v.toLowerCase().startsWith("https://")) {
    return { ok: false, error: "The evidence link must start with https://." };
  }
  return { ok: true, url: v };
}
export const REVIEWER_CREDENTIAL_MAX = 200;
export const CORRECTION_MAX = 1000;

/**
 * Validate a verdict's correction. Present (1 to 1,000 characters after trimming) exactly when the
 * verdict is "cleared with a correction", and dropped for the other two, matching the table's CHECK.
 */
export function normalizeCorrection(
  verdict: Verdict,
  correction: string | null | undefined,
): { ok: true; correction: string | null } | { ok: false; error: string } {
  if (verdict !== "cleared_with_correction") return { ok: true, correction: null };
  const c = (correction ?? "").trim();
  if (c.length === 0) return { ok: false, error: "Write the correction to make." };
  if (c.length > CORRECTION_MAX) return { ok: false, error: `Keep the correction under ${CORRECTION_MAX} characters.` };
  return { ok: true, correction: c };
}

// ── Copy, one place ──────────────────────────────────────────────────────────

export function needLabel(n: ReviewNeed): string {
  if (n.kind === "qr") return "a qualified reviewer";
  if (n.kind === "p") return "a practitioner or a demonstration";
  return n.question != null ? `a decision on brief question ${n.question}` : "a decision";
}

export const KIND_TITLE: Record<NeedKind, string> = {
  qr: "Qualified reviewer",
  p: "Practitioner",
  decision: "Decision",
};

export const VERDICT_LABEL: Record<Verdict, string> = {
  cleared: "Cleared",
  cleared_with_correction: "Cleared with a correction",
  not_cleared: "Not cleared",
};

export const STATE_LABEL: Record<ReviewState, string> = {
  awaiting: "Awaiting review",
  cleared: "Cleared",
  pending_correction: "Correction to apply",
  not_cleared: "Not cleared",
  changed_since_review: "Changed since review",
};

/** One line under every badge, so a reviewer's name is never read as more than it is. */
export const REVIEW_DISCLAIMER =
  "A review checks this lesson's content. It is not an endorsement, and it is not a qualification for anyone who reads the lesson.";

/** Said wherever a verdict is recorded, so nobody is surprised when a typo fix resets one. */
export const RESET_RULE =
  "Any change to the lesson's text, even a typo fix, resets its verdict and asks for a fresh review.";
