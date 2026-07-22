// The Trusted Documentation Rubric — the shared assessment instrument (canonical prose:
// plans/future/16-trusted-documentation-rubric.md). Client-safe (pure data + a pure function).
// Reviewers score a project in_review against this; the credential needs self-attest + ≥2 endorsements.

export type RubricScore = "met" | "developing" | "not_met" | "na";

export interface RubricCriterion {
  id: string;
  label: string;
  pillar: string;
  /** "met" = a trust pillar that MUST be Met (or N/A) to endorse; "developing" = Developing is OK. */
  bar: "met" | "developing";
  /** Whether "N/A" is a valid score (e.g. no identifiable people, no other language/culture). */
  naAllowed: boolean;
  hint: string;
}

export const RUBRIC_CRITERIA: RubricCriterion[] = [
  { id: "question", label: "Focused question", pillar: "Planning", bar: "developing", naAllowed: false, hint: "A specific, researchable question, not a vague topic." },
  { id: "sourced", label: "Sourced & corroborated", pillar: "Seek truth", bar: "met", naAllowed: false, hint: "Central claims tie to sources; important claims corroborated." },
  { id: "verified", label: "Verified & flagged", pillar: "Seek truth", bar: "met", naAllowed: false, hint: "Media/facts checked; uncertain things flagged, not asserted." },
  { id: "consent", label: "Consent & fair representation", pillar: "Minimize harm", bar: "met", naAllowed: true, hint: "Consent logged; nothing declined published; minors handled; fair portrayal." },
  { id: "fidelity", label: "Cultural & linguistic fidelity", pillar: "Seek truth + minimize harm", bar: "met", naAllowed: true, hint: "Translations accurate (native check); cultural stories in the community's framing." },
  { id: "transparent", label: "Transparent", pillar: "Accountable", bar: "met", naAllowed: false, hint: "Visible ## Sources bibliography (APA); corrections noted." },
  { id: "disclosure", label: "Disclosure of interests", pillar: "Act independently", bar: "met", naAllowed: false, hint: "Funding / relationships / stakes that could bias the work are disclosed." },
  { id: "craft", label: "Craft for the medium", pillar: "Craft", bar: "developing", naAllowed: false, hint: "Competently made for its form." },
];

export const RUBRIC_SCORES: { v: RubricScore; label: string }[] = [
  { v: "met", label: "Met" },
  { v: "developing", label: "Developing" },
  { v: "not_met", label: "Not met" },
  { v: "na", label: "N/A" },
];

export interface RubricState {
  /** The ethical/legal/safety floor. A Fail forces a revise. */
  gate: "pass" | "fail";
  criteria: Record<string, RubricScore>;
}

// The rule from doc 16: endorse iff gate passes AND every "met"-bar criterion is Met (or a valid N/A)
// AND the "developing"-bar criteria are at least Developing (i.e. not "Not met").
export function suggestVerdict(r: RubricState): "endorse" | "revise" {
  if (r.gate !== "pass") return "revise";
  for (const c of RUBRIC_CRITERIA) {
    const s = r.criteria[c.id] ?? "not_met";
    if (c.bar === "met") {
      if (!(s === "met" || (c.naAllowed && s === "na"))) return "revise";
    } else if (s === "not_met") {
      return "revise";
    }
  }
  return "endorse";
}

/** Distinct reviewers who endorsed — the credential signal (needs ≥2). */
export function endorsementCount(reviews: { reviewerUserId: string; verdict: string }[]): number {
  const endorsers = new Set(reviews.filter((r) => r.verdict === "endorse").map((r) => r.reviewerUserId));
  return endorsers.size;
}

export const CREDENTIAL_ENDORSEMENTS_REQUIRED = 2;
