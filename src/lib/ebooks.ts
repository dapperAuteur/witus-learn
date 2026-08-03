// Ebooks: long-form marketing assets, committed as content, published only after BAM approves them.
//
// THE GATE IS THE POINT. BAM's requirement: an ebook is visible to him in the repo and on the admin
// page, and to nobody else, until he vets and approves it. Only then does it become a free download
// on the landing page it belongs to. So approval is not a display preference, it is an access
// control, and it is enforced server-side on every public read rather than by hiding a link.
//
// Same split as the roadmap, future-work and source checks: the TEXT is committed (generated from
// docs/ by `pnpm gen:ebooks`, because docs/ is gitignored and cannot be read at runtime), and only
// the approval state lives in the database, scoped to the tenant.

import { EBOOK_AI_COURSE_CREATION } from "@/lib/ebook-content/ai-course-creation";
import { EBOOK_BUYING_COURSES } from "@/lib/ebook-content/buying-courses";

export interface Ebook {
  /** URL slug and the join key for ebook_approvals.ebook_slug. Never renumber. */
  slug: string;
  title: string;
  /** One line for the admin list and the landing-page download card. */
  subtitle: string;
  /** Which /for/<audience> landing page offers it once approved. */
  audience: string;
  /** Who it is written for, in the admin list, so the pairing is reviewable at a glance. */
  writtenFor: string;
  body: string;
}

export const EBOOKS: Ebook[] = [
  {
    slug: "buying-courses",
    title: "What to Demand From Anyone Selling You a Course",
    subtitle:
      "A buyer's guide for schools and districts: seven questions for any vendor, and how to verify a curriculum yourself in twenty minutes.",
    audience: "school-leaders",
    writtenFor: "School and district buyers, the people who sign the purchase order",
    body: EBOOK_BUYING_COURSES,
  },
  {
    slug: "ai-course-creation",
    title: "Building Courses With AI Without Embarrassing Yourself",
    subtitle:
      "The four ways AI-built courses fail, the guards that catch each one, and why writing a citation is not verifying it.",
    audience: "teachers",
    writtenFor: "Course creators and teachers building their own material",
    body: EBOOK_AI_COURSE_CREATION,
  },
];

export function getEbook(slug: string): Ebook | undefined {
  return EBOOKS.find((e) => e.slug === slug);
}

/** The ebook offered on a given /for/<audience> page, if any. */
export function ebookForAudience(audience: string): Ebook | undefined {
  return EBOOKS.find((e) => e.audience === audience);
}
