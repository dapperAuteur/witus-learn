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
// IL/MI are mapped here (task 131); OH/GA are mapped on a parallel branch. NEXT_UP must never name
// a state that mappedStates() already contains — the isolation suite enforces it — so we advance
// past all of {AR,AZ,CA,DC,FL,IN,NY,PA,TX,OH,GA,IL,MI}. NOTE for the merge: the parallel OH/GA and
// matrix branches also edit this line; resolve the conflict to a value that names NO already-mapped
// state (NC/VA below are safe against every state mapped across the in-flight branches).
export const NEXT_UP: StateCode[] = ["NC", "VA"];

export function jurisdictionName(code: StateCode): string {
  return US_JURISDICTIONS.find((j) => j.code === code)?.name ?? code;
}

export function isStateCode(value: string): value is StateCode {
  return US_JURISDICTIONS.some((j) => j.code === value);
}
