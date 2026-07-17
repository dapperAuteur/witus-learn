// The 50 states + D.C., for the standards finder. Which of these actually have mapped data is
// derived in index.ts from the per-jurisdiction data files — never hand-maintained here, so the
// picker can't claim a state we haven't done.

export interface Jurisdiction {
  code: string;
  name: string;
}

export const US_JURISDICTIONS = [
  { code: "AL", name: "Alabama" },
  { code: "AK", name: "Alaska" },
  { code: "AZ", name: "Arizona" },
  { code: "AR", name: "Arkansas" },
  { code: "CA", name: "California" },
  { code: "CO", name: "Colorado" },
  { code: "CT", name: "Connecticut" },
  { code: "DE", name: "Delaware" },
  { code: "DC", name: "Washington, D.C." },
  { code: "FL", name: "Florida" },
  { code: "GA", name: "Georgia" },
  { code: "HI", name: "Hawaii" },
  { code: "ID", name: "Idaho" },
  { code: "IL", name: "Illinois" },
  { code: "IN", name: "Indiana" },
  { code: "IA", name: "Iowa" },
  { code: "KS", name: "Kansas" },
  { code: "KY", name: "Kentucky" },
  { code: "LA", name: "Louisiana" },
  { code: "ME", name: "Maine" },
  { code: "MD", name: "Maryland" },
  { code: "MA", name: "Massachusetts" },
  { code: "MI", name: "Michigan" },
  { code: "MN", name: "Minnesota" },
  { code: "MS", name: "Mississippi" },
  { code: "MO", name: "Missouri" },
  { code: "MT", name: "Montana" },
  { code: "NE", name: "Nebraska" },
  { code: "NV", name: "Nevada" },
  { code: "NH", name: "New Hampshire" },
  { code: "NJ", name: "New Jersey" },
  { code: "NM", name: "New Mexico" },
  { code: "NY", name: "New York" },
  { code: "NC", name: "North Carolina" },
  { code: "ND", name: "North Dakota" },
  { code: "OH", name: "Ohio" },
  { code: "OK", name: "Oklahoma" },
  { code: "OR", name: "Oregon" },
  { code: "PA", name: "Pennsylvania" },
  { code: "RI", name: "Rhode Island" },
  { code: "SC", name: "South Carolina" },
  { code: "SD", name: "South Dakota" },
  { code: "TN", name: "Tennessee" },
  { code: "TX", name: "Texas" },
  { code: "UT", name: "Utah" },
  { code: "VT", name: "Vermont" },
  { code: "VA", name: "Virginia" },
  { code: "WA", name: "Washington" },
  { code: "WV", name: "West Virginia" },
  { code: "WI", name: "Wisconsin" },
  { code: "WY", name: "Wyoming" },
] as const satisfies readonly Jurisdiction[];

export type StateCode = (typeof US_JURISDICTIONS)[number]["code"];

/** States whose mapping is actively next in the queue (rendered as "next up" in the finder). */
// OH is now mapped (task 130), so it is dropped from the queue; GA is mapped next on this same
// branch, after which NEXT_UP advances to the next two uncovered states. NEXT_UP must never name a
// state that mappedStates() already contains — the isolation suite enforces it. NOTE for the merge:
// the parallel feat/standards-matrix branch may also edit this line; resolve any conflict to a
// value that names NEITHER a mapped state NOR OH/GA — e.g. the two the GA commit sets below.
export const NEXT_UP: StateCode[] = ["GA"];

export function jurisdictionName(code: StateCode): string {
  return US_JURISDICTIONS.find((j) => j.code === code)?.name ?? code;
}

export function isStateCode(value: string): value is StateCode {
  return US_JURISDICTIONS.some((j) => j.code === value);
}
