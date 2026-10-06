/**
 * The folders directly under `plans/future-courses/` that stand for an app course category.
 *
 * WHY THIS EXISTS. On 2026-10-05 the planning notes were reorganised so the folder tree mirrors the
 * categories the app lists (BAM: "organize course and future course files into dir for categories for
 * how they're listed in the app"). `scripts/gen-future-work.ts` treats every folder named here as
 * TRANSPARENT: a note directly inside it keeps the key it had as a loose top-level note, and a topic
 * folder inside it keeps the key it had as a top-level area. That is what keeps every
 * `future_work_notes.item_key` pointing at the same item after the move.
 *
 * The folder name is the kebab-case of the category's display name. The display name is the string
 * the seed scripts register courses under (`category: "Trade Skills"`), which is what the app shows;
 * the database row is per tenant and the owner can rename it at /admin/categories, so this map is a
 * reading aid, not a source of truth for the catalog. `null` marks a folder that groups notes about
 * the product itself rather than a course category.
 *
 * Adding a category folder: add a line here, create the folder, move notes in. Nothing else changes.
 */
export const PLAN_CATEGORY_DIRS: Record<string, { category: string | null }> = {
  // Learn.WitUS tenant, in the app's seeded order (sortOrder, then name).
  languages: { category: "Languages" },
  "education-leadership": { category: "Education Leadership" },
  aviation: { category: "Aviation" },
  civics: { category: "Civics" },
  teaching: { category: "Teaching" },
  "ai-and-technology": { category: "AI & Technology" },
  "study-skills": { category: "Study Skills" },
  cybersecurity: { category: "Cybersecurity" },
  "trade-skills": { category: "Trade Skills" },
  survival: { category: "Survival" },
  "farm-and-garden": { category: "Farm & Garden" },
  "using-learn-witus": { category: "Using Learn.WitUS" },
  "careers-and-media": { category: "Careers & Media" },
  "health-and-longevity": { category: "Health & Longevity" },
  "dental-health": { category: "Dental Health" },
  "fitness-certification": { category: "Fitness Certification" },
  "endocannabinoid-system": { category: "Endocannabinoid System" },
  "culture-and-history": { category: "Culture & History" },
  sports: { category: "Sports" },
  "travel-and-living-abroad": { category: "Travel & Living Abroad" },
  "money-and-property": { category: "Money & Property" },
  "rivers-and-expeditions": { category: "Rivers & Expeditions" },
  storytelling: { category: "Storytelling" },
  "science-and-math": { category: "Science & Math" },
  "research-and-reporting": { category: "Research & Reporting" },
  // Better Vice Club tenant.
  "daily-rituals": { category: "Daily Rituals" },
  "the-forbidden-leaf": { category: "The Forbidden Leaf" },
  "bvc-taster": { category: "BVC Taster" },
  // ElementaryMBA tenant.
  docuseries: { category: "Docuseries" },
  steam: { category: "STEAM" },
  "ai-for-kids": { category: "AI for Kids" },
  entrepreneurship: { category: "Entrepreneurship" },
  // Notes about the platform, its features and its process: not a course category.
  _platform: { category: null },
};

/** True when `name` is a category folder (or the platform folder) rather than a topic area. */
export function isPlanCategoryDir(name: string): boolean {
  return Object.prototype.hasOwnProperty.call(PLAN_CATEGORY_DIRS, name);
}
