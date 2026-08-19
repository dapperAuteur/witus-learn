// Third-party-certification disclaimers (plans/67 branch 1).
//
// Any course that NAMES an external certifying body must say, in one canonical sentence shape,
// that it is independent of that body. The 2026-08 audit found the existing prep family
// inconsistent: nasm-cnc carries a proper disclaimer, nasm-ces has a narrative aside, and
// nasm-cpt says NOTHING across 193 lessons. A registry keyed by course slug (the STAGED_COURSES
// / FREE_BY_DESIGN house pattern) makes the disclaimer a data fact the landing page renders,
// instead of prose each author remembers or forgets.
//
// Convention (also in STYLE_GUIDE §3): a course naming a certification body registers an entry
// here IN THE SAME BRANCH that ships it. Follow-up filed, deliberately not done here: adopt on
// nasm-cpt / nasm-ces / nasm-cnc, and faa-part-107 with regulator-appropriate wording.

export interface CertDisclaimer {
  /** The certifying bodies the course names (display names). */
  bodies: string[];
  /** The rendered disclaimer sentence(s), built by certDisclaimerText for uniformity. */
  text: string;
}

/** The one canonical sentence shape, so every course's notice reads identically. */
export function certDisclaimerText(bodies: string[]): string {
  const list =
    bodies.length <= 1
      ? (bodies[0] ?? "")
      : bodies.length === 2
        ? `${bodies[0]} or ${bodies[1]}`
        : `${bodies.slice(0, -1).join(", ")}, or ${bodies[bodies.length - 1]}`;
  return (
    `This is an independent Learn.WitUS study program. It is not affiliated with, endorsed by, ` +
    `or accredited by ${list}, and completing it does not grant, or count toward, any credential ` +
    `from those organizations. Certification names appear only to describe the scope of study.`
  );
}

const WELL_BODIES = [
  "the National Academy of Sports Medicine (NASM)",
  "the National Board for Health & Wellness Coaching (NBHWC)",
];

const entry = (bodies: string[]): CertDisclaimer => ({ bodies, text: certDisclaimerText(bodies) });

/** Registry keyed by course slug. */
export const CERT_DISCLAIMERS: Record<string, CertDisclaimer> = {
  // The WELL series (plans/67): every course benchmarks against NASM CWC + NBHWC material.
  "well-orientation-scope": entry(WELL_BODIES),
  "well-coaching-psychology": entry(WELL_BODIES),
  "well-coaching-movement": entry(WELL_BODIES),
  "well-coaching-nutrition": entry(WELL_BODIES),
  "well-recovery": entry(WELL_BODIES),
  "well-sleep": entry(WELL_BODIES),
  "well-mental-wellbeing": entry(WELL_BODIES),
  "well-centenarian-capstone": entry(WELL_BODIES),
};

export function certDisclaimerFor(slug: string | null | undefined): CertDisclaimer | null {
  if (!slug) return null;
  return CERT_DISCLAIMERS[slug] ?? null;
}
