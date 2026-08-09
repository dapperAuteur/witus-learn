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

  // ══ CONCEPT entities (plans/58, and the finding in plans/57) ══════════════════════════════════════
  //
  // The registry's first entities that are not a case, a law or a place. That matters more than it
  // sounds: /admin/graph established that 20 of 22 categories are ISLANDS, connected by 3 edges in
  // total, because a case or a place can only ever link courses that share a period and a geography.
  // A concept links courses that share neither, which is the only kind of edge that can cross a
  // category boundary. Two of the four below do exactly that, into Study Skills and into the
  // precolonial track.
  //
  // EVERY course listed here was verified against the actual lesson text before being added, and two
  // proposed entities were DROPPED rather than shipped: `the-cardiff-giant` and `the-bone-wars` are
  // each taught in exactly one course, and the registry hides an entity with fewer than two of a
  // tenant's courses, so they would have been invisible rows pretending to be connections.
  {
      slug: "what-would-change-my-mind",
      kind: "concept",
      name: "What would change my mind",
      aliases: ["what would change your mind", "falsifiable", "losing condition"],
      description:
        "The question that separates holding a belief from defending one: naming in advance the evidence that would make you drop it.",
      courses: [
        {
          courseSlug: "wrong-for-good-reasons",
          note: "The course is built on it. Lesson 1 poses it and the graded assignment closes on it, applied to a claim the learner actually holds.",
        },
        {
          courseSlug: "giants-dragons-and-the-bones",
          note: "Used as a tool on a live dispute: lesson 4 names what would DAMAGE each side of the griffin argument, rather than picking a winner.",
        },
        {
          courseSlug: "deep-time-and-the-dinosaur-renaissance",
          note: "Lesson 18 leaves the end-Cretaceous questions open and says what would settle each one.",
        },
        {
          courseSlug: "woop",
          note: 'Stated as the third test of a real theory: "if nothing would, you are not doing science, you are doing loyalty."',
        },
      ],
    },
    {
      slug: "who-gets-believed",
      kind: "concept",
      name: "Who gets believed",
      aliases: ["whose name goes on the paper", "credit"],
      description:
        "Whose account is treated as evidence, and what a record loses when the answer depends on the speaker's class, sex, discipline or nation rather than on what they found.",
      courses: [
        {
          courseSlug: "wrong-for-good-reasons",
          note: "Lesson 15 names the cost to the record directly, and holds the genre to its own standard by including a case historians have since complicated.",
        },
        {
          courseSlug: "deep-time-and-the-dinosaur-renaissance",
          note: 'Lesson 7, "Whose name goes on the paper": Mary Anning found them, and the papers carried other people\'s names.',
        },
        {
          courseSlug: "monsters-at-the-edge-of-the-map",
          note: "Lesson 14 asks who was mapping whom, and separates the survival of a document from the existence of knowledge.",
        },
      ],
    },
    {
      slug: "the-missing-actor",
      kind: "concept",
      name: "The missing actor",
      aliases: ["passive voice", "may have inspired"],
      description:
        "A sentence built so that nobody did anything: the passive voice, the agentless hedge, and what a reader stops asking once the actor is gone.",
      courses: [
        {
          courseSlug: "writing-the-world",
          note: 'Lesson 9, "The passive voice and the missing actor", teaches the move and how to reverse it.',
        },
        {
          courseSlug: "giants-dragons-and-the-bones",
          note: 'Lesson 5 makes one hedge the object of study: what "may have inspired" asserts, and what it quietly declines to.',
        },
      ],
    },
    {
      slug: "discovery-as-a-word",
      kind: "concept",
      name: "Discovery as a word",
      aliases: ["a word with an owner", "did not discover"],
      description:
        "Who a thing is said to have been discovered by, and what that word does to the people who already knew about it.",
      courses: [
        {
          courseSlug: "giants-dragons-and-the-bones",
          note: 'Lesson 12 is the argument in full: "Discovery" is a word with an owner, applied to fossil beds people had known for generations.',
        },
        {
          courseSlug: "monsters-at-the-edge-of-the-map",
          note: "Lesson 14 makes the same move about maps: European mapping produced documents that entered archives, which is a fact about institutions rather than about who understood their world.",
        },
        {
          courseSlug: "asia-before-european-colonization",
          note: 'Lesson 10 states it plainly about Angkor: the 1860s European traveller "did not discover a lost city", because Khmer people were worshipping in it.',
        },
      ],
    },
];

const BY_SLUG = new Map(ENTITIES.map((e) => [e.slug, e]));

export function getEntity(slug: string): Entity | undefined {
  return BY_SLUG.get(slug);
}

/** Entities named in a lesson body (case-insensitive substring on the name or an alias). For the
 *  lesson-page "also discussed in" line. The names are proper nouns, so substring is safe enough. */
export function entitiesInLesson(body: string | null | undefined): Entity[] {
  if (!body) return [];
  const lc = body.toLowerCase();
  return ENTITIES.filter(
    (e) => lc.includes(e.name.toLowerCase()) || (e.aliases ?? []).some((a) => lc.includes(a.toLowerCase())),
  );
}

/** Entities whose name or an alias contains the query (case-insensitive). For search. */
export function matchEntities(query: string): Entity[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];
  return ENTITIES.filter(
    (e) => e.name.toLowerCase().includes(q) || (e.aliases ?? []).some((a) => a.toLowerCase().includes(q)),
  );
}
