import type { AudienceLandingContent } from "./audience-landing";
import { TEACHERS_LANDING } from "./audiences/teachers";
import { SCHOOL_LEADERS_LANDING } from "./audiences/school-leaders";
import { PARENTS_LANDING } from "./audiences/parents";
import { HOMESCHOOL_LANDING } from "./audiences/homeschool";
import { COMMUNITY_LANDING } from "./audiences/community";

// The registry. Order here is the order the /for index lists them. Each slug is a route:
// /for/teachers, /for/school-leaders, /for/parents, /for/homeschool, /for/community.
const ALL: AudienceLandingContent[] = [
  TEACHERS_LANDING,
  SCHOOL_LEADERS_LANDING,
  PARENTS_LANDING,
  HOMESCHOOL_LANDING,
  COMMUNITY_LANDING,
];

// A typo between a slug and its route would 404 silently; fail loudly at load instead.
for (const a of ALL) {
  if (a.slug !== a.slug.toLowerCase() || !/^[a-z-]+$/.test(a.slug)) {
    throw new Error(`audience slug must be lowercase kebab-case: "${a.slug}"`);
  }
}

export const AUDIENCES: AudienceLandingContent[] = ALL;

const bySlug = new Map(ALL.map((a) => [a.slug, a]));
export function audienceBySlug(slug: string): AudienceLandingContent | undefined {
  return bySlug.get(slug);
}
