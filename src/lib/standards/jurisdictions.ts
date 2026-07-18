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
// OH and GA are now mapped (task 130), so the queue advances to the next two uncovered states:
// Michigan and Illinois. NEXT_UP must never name a state that mappedStates() already contains — the
// isolation suite enforces it. NOTE for the merge: the parallel feat/standards-matrix branch may
// also edit this line; resolve any conflict to a value that names NEITHER a mapped state (currently
// AR AZ CA DC FL GA IN NY OH PA TX) NOR a state another in-flight branch is actively mapping.
export const NEXT_UP: StateCode[] = ["MO", "MD"];
// IL/MI are mapped here (task 131); OH/GA are mapped on a parallel branch. NEXT_UP must never name
// a state that mappedStates() already contains — the isolation suite enforces it — so we advance
// past all of {AR,AZ,CA,DC,FL,IN,NY,PA,TX,OH,GA,IL,MI}. NOTE for the merge: the parallel OH/GA and
// matrix branches also edit this line; resolve the conflict to a value that names NO already-mapped
// state (NC/VA below are safe against every state mapped across the in-flight branches).

// This branch (feat/standards-nc-va) maps North Carolina and Virginia, so the queue advances past
// them. NEXT_UP must never name a state that mappedStates() already contains — the isolation suite
// enforces it. NOTE for the merge: several parallel standards branches also edit this one line
// (OH/GA, IL/MI, etc.); resolve the conflict to a value that names two states NOT in
// {AR,AZ,CA,DC,FL,IN,NY,PA,TX,OH,GA,IL,MI,NC,VA} — WA/NJ below, or BAM's preferred next two.

// WA/NJ are mapped on this branch (feat/standards-wa-nj); the queue advances past them. NEXT_UP must
// never name a state that mappedStates() already contains — the isolation suite enforces it. This
// value is deliberately chosen to sit outside EVERY state mapped or in-flight across the parallel
// branches ({AR,AZ,CA,DC,FL,IN,NY,PA,TX,OH,GA,IL,MI,NC,VA,WA,NJ}), so it stays valid after the
// bundle merge. NOTE for the merge: sibling branches also edit this line; resolve the conflict to a
// value containing none of those states (MA/TN below, or BAM's preferred next two).

// MA and TN are mapped here (feat/standards-ma-tn), so the queue advances past them. NEXT_UP must
// never name a state that mappedStates() already contains — the isolation suite enforces it. NOTE
// for the merge: this one line conflicts with the other in-flight standards branches (each advances
// the queue to its own next two). Resolve the conflict to a value that names NONE of the states any
// branch has mapped — MO and MD (below) are mapped by no branch, or use BAM's preferred next two.


export function jurisdictionName(code: StateCode): string {
  return US_JURISDICTIONS.find((j) => j.code === code)?.name ?? code;
}

export function isStateCode(value: string): value is StateCode {
  return US_JURISDICTIONS.some((j) => j.code === value);
}
