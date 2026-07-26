// Cross-course entities (plans/45 Part 3): people, cases, laws, and concepts that appear in MORE THAN
// ONE course, so a learner can pull the thread. This is the curated manual seed the plan recommends
// starting with (the ~dozen the route-series capstone already argues about), held in code rather than
// a table, so there is no migration for this first version. A DB-backed `entities` / `course_entities`
// model (author-declared going forward, plus a source-block extraction) is the fuller follow-up in
// plans/45; this delivers the two highest-value surfaces now: the entity page and search.
//
// ACCURACY: a course is listed under an entity only where it genuinely covers it. The entity PAGE
// intersects this list with the tenant's PUBLISHED courses, so a school never sees a link to a course
// it does not have, and an entity with fewer than two of the tenant's courses is not "cross-course"
// for that tenant and is hidden.

export type EntityKind = "person" | "case" | "law" | "place" | "event" | "organization" | "concept";

export interface EntityLink {
  courseSlug: string;
  /** One line: what THIS course does with the entity. */
  note: string;
}

export interface Entity {
  slug: string;
  kind: EntityKind;
  name: string;
  /** Alternate names/spellings a search might use. */
  aliases?: string[];
  description: string;
  courses: EntityLink[];
}

export const ENTITIES: Entity[] = [
  {
    slug: "berman-v-parker",
    kind: "case",
    name: "Berman v. Parker",
    aliases: ["berman"],
    description: "The 1954 Supreme Court decision that upheld taking an entire area for renewal, not just individual blighted lots.",
    courses: [
      { courseSlug: "dc-where-the-instrument-was-blessed", note: "The source of the case: Southwest Washington, where the taking began." },
      { courseSlug: "how-the-tools-travelled", note: "Treated as the doctrine that made area clearance defensible nationwide." },
    ],
  },
  {
    slug: "milliken-v-bradley",
    kind: "case",
    name: "Milliken v. Bradley",
    aliases: ["milliken"],
    description: "The 1974 decision that limited school desegregation remedies across district lines.",
    courses: [
      { courseSlug: "the-gym-and-the-color-line", note: "The district line as a colour line." },
      { courseSlug: "seattle-the-modern-bookend", note: "The modern application of the district-line logic." },
      { courseSlug: "how-the-tools-travelled", note: "One of the capstone's tested cross-city rhymes." },
    ],
  },
  {
    slug: "buchanan-v-warley",
    kind: "case",
    name: "Buchanan v. Warley",
    aliases: ["buchanan"],
    description: "The 1917 decision that struck down explicit racial zoning, which pushed segregation into private covenants instead.",
    courses: [
      { courseSlug: "how-the-tools-travelled", note: "The Louisville source, and why the tool changed shape after it." },
    ],
  },
  {
    slug: "kelo-v-new-london",
    kind: "case",
    name: "Kelo v. New London",
    aliases: ["kelo"],
    description: "The 2005 decision allowing a taking for economic development, the modern bookend of the public-use doctrine.",
    courses: [
      { courseSlug: "seattle-the-modern-bookend", note: "The modern bookend of the same doctrine." },
      { courseSlug: "how-the-tools-travelled", note: "Where the Berman standard ended up, decades later." },
    ],
  },
  {
    slug: "housing-act-of-1949",
    kind: "law",
    name: "The Housing Act of 1949",
    aliases: ["housing act", "1949 housing act", "urban renewal"],
    description: "The federal act that funded slum clearance nationally and paid up to two thirds of net project cost.",
    courses: [
      { courseSlug: "how-the-tools-travelled", note: "The federal upstream nearly every marker on the map runs through." },
      { courseSlug: "dc-where-the-instrument-was-blessed", note: "The money behind the Southwest DC clearance." },
    ],
  },
  {
    slug: "civil-rights-act-of-1964",
    kind: "law",
    name: "The Civil Rights Act of 1964",
    aliases: ["civil rights act", "1964 civil rights act", "title ii"],
    description: "The act that ended legal segregation in public accommodations, and with it the reason the Green Book existed.",
    courses: [
      { courseSlug: "green-book-how-to-read-a-route", note: "Title II is why the Green Book ended, a documented win." },
      { courseSlug: "what-they-built", note: "The confounder the course refuses to read as 'civil rights hurt Black business'." },
    ],
  },
  {
    slug: "unigov",
    kind: "event",
    name: "Unigov",
    aliases: ["uni-gov", "unified government indianapolis"],
    description: "The 1970 consolidation of Indianapolis and Marion County government, taught as a creatures-of-the-state case.",
    courses: [
      { courseSlug: "indiana-avenue-a-district-and-what-replaced-it", note: "Cut as the CAUSE of clearance; every instrument predates it." },
      { courseSlug: "the-local-layer", note: "The structural case study in creatures-of-the-state." },
    ],
  },
  {
    slug: "dillons-rule",
    kind: "concept",
    name: "Dillon's Rule",
    aliases: ["dillon rule", "dillon's rule", "home rule"],
    description: "The doctrine that a city has only the powers the state grants it, the hinge of American local government.",
    courses: [
      { courseSlug: "who-has-the-power", note: "Introduced as the method's load-bearing example." },
      { courseSlug: "the-local-layer", note: "Developed against home rule and state preemption." },
    ],
  },
  {
    slug: "building-and-loan-associations",
    kind: "organization",
    name: "Building and loan associations",
    aliases: ["building and loan", "savings and loan", "b&l"],
    description: "The mutual entity that financed homeownership under exclusion, when banks would not lend.",
    courses: [
      { courseSlug: "what-they-built", note: "One of the institutions that capitalised the business districts." },
      { courseSlug: "financing-without-access", note: "A full section: the route into homeownership without a bank." },
    ],
  },
  {
    slug: "north-carolina-mutual",
    kind: "organization",
    name: "North Carolina Mutual",
    aliases: ["nc mutual", "north carolina mutual life"],
    description: "The Durham insurer that became the largest and longest-running Black-owned financial institution.",
    courses: [
      { courseSlug: "what-they-built", note: "The worked example of capital formation under exclusion." },
      { courseSlug: "financing-without-access", note: "Reused as the industrial-insurance case." },
    ],
  },
  {
    slug: "the-great-migration",
    kind: "event",
    name: "The Great Migration",
    aliases: ["great migration"],
    description: "The twentieth-century movement of millions of Black Americans out of the rural South.",
    courses: [
      { courseSlug: "great-migration-and-the-world", note: "The course's whole subject, placed in world context." },
      { courseSlug: "what-they-built", note: "The population that built the northern business districts." },
    ],
  },
];

const BY_SLUG = new Map(ENTITIES.map((e) => [e.slug, e]));

export function getEntity(slug: string): Entity | undefined {
  return BY_SLUG.get(slug);
}

/** Entities whose name or an alias contains the query (case-insensitive). For search. */
export function matchEntities(query: string): Entity[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];
  return ENTITIES.filter(
    (e) => e.name.toLowerCase().includes(q) || (e.aliases ?? []).some((a) => a.toLowerCase().includes(q)),
  );
}
