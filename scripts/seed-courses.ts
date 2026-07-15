import { neonConfig, Pool } from "@neondatabase/serverless";
import { and, eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
import * as schema from "../src/db/schema";
import { resolveDbUrl } from "./db-url";
import { seedAuthoredCourse } from "./lib/seed-authored-course";
import { EDUCATION_LEADER_COURSE } from "./data/education-leader-course";
import { PICKLEBALL_COURSE } from "./data/pickleball-course";
import { CYBER_SECURITY_COURSE } from "./data/cyber-security-course";
import { KNOTS_COURSE } from "./data/knots-course";
import { CROQUET_COURSE } from "./data/croquet-course";
import { SURVIVAL_COURSE } from "./data/survival-course";
import { FOOTBALL_COURSE } from "./data/football-course";
import { BROADCASTING_COURSE } from "./data/broadcasting-course";
import { GOLF_COURSE } from "./data/golf-course";
import { HOODOO_COURSE } from "./data/hoodoo-course";
import { HOODOO_COMPLETE_COURSE } from "./data/hoodoo-complete-course";
import { CIVICS_101_COURSE } from "./data/civics-101-course";
import { VOTING_ELECTIONS_101_COURSE } from "./data/voting-elections-101-course";
import { CITIZENSHIP_NATURALIZATION_COURSE } from "./data/citizenship-naturalization-course";
import { US_CONSTITUTION_COURSE } from "./data/us-constitution-course";
import { STATE_VS_FEDERAL_COURSE } from "./data/state-vs-federal-course";
import { US_STATE_LOCAL_GOV_COURSE } from "./data/us-state-local-gov-course";
import { HOW_TO_RUN_COURSE } from "./data/how-to-run-course";
import { SPOTTING_MISLEADING_MARKETING_COURSE } from "./data/spotting-misleading-marketing-course";
import { HELP_A_CAMPAIGN_COURSE } from "./data/help-a-campaign-course";
import { HOW_A_BILL_BECOMES_LAW_COURSE } from "./data/how-a-bill-becomes-law-course";
import { SUPREME_COURT_JUDICIAL_BRANCH_COURSE } from "./data/supreme-court-judicial-branch-course";
import { KNOW_YOUR_RIGHTS_COURSE } from "./data/know-your-rights-course";
import { KNOW_YOUR_RIGHTS_AT_WORK_COURSE } from "./data/know-your-rights-at-work-course";
import { JURY_DUTY_COURTS_COURSE } from "./data/jury-duty-courts-course";
import { STATE_CIVICS_IN_COURSE } from "./data/state-civics-in-course";
import { STATE_CIVICS_AZ_COURSE } from "./data/state-civics-az-course";
import { STATE_CIVICS_AR_COURSE } from "./data/state-civics-ar-course";
import { STATE_CIVICS_CA_COURSE } from "./data/state-civics-ca-course";
import { STATE_CIVICS_TX_COURSE } from "./data/state-civics-tx-course";
import { STATE_CIVICS_FL_COURSE } from "./data/state-civics-fl-course";
import { STATE_CIVICS_NY_COURSE } from "./data/state-civics-ny-course";
import { STATE_CIVICS_PA_COURSE } from "./data/state-civics-pa-course";
import { STATE_CIVICS_OH_COURSE } from "./data/state-civics-oh-course";
import { STATE_CIVICS_GA_COURSE } from "./data/state-civics-ga-course";
import { STATE_CIVICS_NC_COURSE } from "./data/state-civics-nc-course";
import { STATE_CIVICS_MI_COURSE } from "./data/state-civics-mi-course";
import { STATE_CIVICS_VA_COURSE } from "./data/state-civics-va-course";
import { STATE_CIVICS_WA_COURSE } from "./data/state-civics-wa-course";
import { STATE_CIVICS_CO_COURSE } from "./data/state-civics-co-course";
import { STATE_CIVICS_MA_COURSE } from "./data/state-civics-ma-course";
import { STATE_CIVICS_NJ_COURSE } from "./data/state-civics-nj-course";
import { STATE_CIVICS_IL_COURSE } from "./data/state-civics-il-course";
import { STATE_CIVICS_TN_COURSE } from "./data/state-civics-tn-course";
import { STATE_CIVICS_LA_COURSE } from "./data/state-civics-la-course";
import { STATE_CIVICS_NE_COURSE } from "./data/state-civics-ne-course";
import { STATE_CIVICS_ME_COURSE } from "./data/state-civics-me-course";
import { STATE_CIVICS_AK_COURSE } from "./data/state-civics-ak-course";
import { STATE_CIVICS_OR_COURSE } from "./data/state-civics-or-course";
import { STATE_CIVICS_MO_COURSE } from "./data/state-civics-mo-course";
import { STATE_CIVICS_NH_COURSE } from "./data/state-civics-nh-course";
import { STATE_CIVICS_HI_COURSE } from "./data/state-civics-hi-course";
import { STATE_CIVICS_SC_COURSE } from "./data/state-civics-sc-course";
import { STATE_CIVICS_MD_COURSE } from "./data/state-civics-md-course";
import { STATE_CIVICS_WI_COURSE } from "./data/state-civics-wi-course";
import { STATE_CIVICS_MN_COURSE } from "./data/state-civics-mn-course";
import { STATE_CIVICS_VT_COURSE } from "./data/state-civics-vt-course";
import { STATE_CIVICS_CT_COURSE } from "./data/state-civics-ct-course";
import { STATE_CIVICS_DE_COURSE } from "./data/state-civics-de-course";
import { STATE_CIVICS_ND_COURSE } from "./data/state-civics-nd-course";
import { STATE_CIVICS_NV_COURSE } from "./data/state-civics-nv-course";
import { STATE_CIVICS_MT_COURSE } from "./data/state-civics-mt-course";
import { STATE_CIVICS_RI_COURSE } from "./data/state-civics-ri-course";
import { STATE_CIVICS_UT_COURSE } from "./data/state-civics-ut-course";
import { STATE_CIVICS_AL_COURSE } from "./data/state-civics-al-course";
import { STATE_CIVICS_SD_COURSE } from "./data/state-civics-sd-course";
import { STATE_CIVICS_NM_COURSE } from "./data/state-civics-nm-course";
import { STATE_CIVICS_WY_COURSE } from "./data/state-civics-wy-course";
import { STATE_CIVICS_IA_COURSE } from "./data/state-civics-ia-course";
import { STATE_CIVICS_WV_COURSE } from "./data/state-civics-wv-course";
import { STATE_CIVICS_KY_COURSE } from "./data/state-civics-ky-course";
import { STATE_CIVICS_OK_COURSE } from "./data/state-civics-ok-course";
import { STATE_CIVICS_ID_COURSE } from "./data/state-civics-id-course";
import { STATE_CIVICS_KS_COURSE } from "./data/state-civics-ks-course";
import { STATE_CIVICS_MS_COURSE } from "./data/state-civics-ms-course";
import { STATE_CIVICS_DC_COURSE } from "./data/state-civics-dc-course";
import { AI_LITERACY_COURSE } from "./data/ai-literacy-course";
import { AI_L1_ADVANCED_PROMPTING_COURSE } from "./data/ai-l1-advanced-prompting-course";
import { AI_L2_DETECTING_AI_COURSE } from "./data/ai-l2-detecting-ai-course";
import { AI_L3_ETHICS_COURSE } from "./data/ai-l3-ethics-course";
import { AI_L4_PRIVACY_SECURITY_COURSE } from "./data/ai-l4-privacy-security-course";
import { AI_L5_RESEARCHING_COURSE } from "./data/ai-l5-researching-course";
import { AI_BUILDING_COURSE } from "./data/ai-building-course";
import { AI_B1_PROMPT_ENGINEERING_COURSE } from "./data/ai-b1-prompt-engineering-course";
import { AI_B2_AGENTS_COURSE } from "./data/ai-b2-agents-automations-course";
import { AI_B3_RAG_COURSE } from "./data/ai-b3-rag-course";
import { AI_B4_FINE_TUNING_COURSE } from "./data/ai-b4-fine-tuning-course";
import { AI_B5_DEPLOYING_EVALUATING_COURSE } from "./data/ai-b5-deploying-evaluating-course";
import { AI_B6_AI_PRODUCT_CAPSTONE_COURSE } from "./data/ai-b6-ai-product-capstone-course";
import { COURSE_CREATION_COURSE } from "./data/course-creation-course";
import { LEARNING_HOW_TO_LEARN_COURSE } from "./data/learning-how-to-learn-course";
import { WOOP_COURSE } from "./data/woop-course";
import { GREAT_MIGRATION_COURSE } from "./data/great-migration-course";
import { HISTORY_OF_UNIONS_COURSE } from "./data/history-of-unions-course";
import { LABOR_GERMANY_COURSE } from "./data/labor-germany-course";
import { TRAVEL_PASSPORT_COURSE } from "./data/travel-passport-course";
import { TRAVEL_VISAS_101_COURSE } from "./data/travel-visas-101-course";
import { TRAVEL_BASICS_COURSE } from "./data/travel-basics-course";
import { TRAVEL_FLYING_HOME_COURSE } from "./data/travel-flying-home-course";
import { MOVING_ABROAD_101_COURSE } from "./data/moving-abroad-101-course";
import { DUAL_CITIZENSHIP_COURSE } from "./data/dual-citizenship-course";
import { TAXES_AMERICANS_ABROAD_COURSE } from "./data/taxes-americans-abroad-course";
import { BANKING_ABROAD_COURSE } from "./data/banking-abroad-course";
import { HEALTHCARE_ABROAD_COURSE } from "./data/healthcare-abroad-course";
import { RETIRING_ABROAD_COURSE } from "./data/retiring-abroad-course";
import { STUDYING_ABROAD_COURSE } from "./data/studying-abroad-course";
import { SHIPPING_LOGISTICS_COURSE } from "./data/shipping-logistics-course";
import { LACROSSE_COURSE } from "./data/lacrosse-course";
import { TENNIS_COURSE } from "./data/tennis-course";

// Seeds authored non-language courses on their schools (Ed.L.D. on Learn.WitUS;
// cyber + FAA join here when their content lands). Re-seedable via the shared
// seedAuthoredCourse upserter. Run: pnpm seed:courses

neonConfig.webSocketConstructor = ws;
const connectionString = resolveDbUrl(true);
if (!connectionString || connectionString.includes("placeholder")) {
  console.error("DATABASE_URL is not set. Put a real Neon string in .env.local.");
  process.exit(1);
}
const pool = new Pool({ connectionString });
const db = drizzle(pool, { schema, casing: "snake_case" });

async function tenantBySlug(slug: string): Promise<string | undefined> {
  const r = await db
    .select({ id: schema.tenants.id })
    .from(schema.tenants)
    .where(eq(schema.tenants.slug, slug))
    .limit(1);
  return r[0]?.id;
}

async function ensureInstructor(
  tenantId: string,
  who: { id: string; email: string; username: string; displayName: string },
): Promise<string> {
  // Reuse the real user when the email is already taken (e.g. BAM has logged in, so an
  // auth-generated id owns bam@awews.com). Inserting the synthetic id would conflict on
  // the email, leave no row for that id, and the membership FK would fail. Matching by
  // email keeps course ownership on the real account and makes this idempotent.
  const existing = await db
    .select({ id: schema.users.id })
    .from(schema.users)
    .where(eq(schema.users.email, who.email))
    .limit(1);
  const userId = existing[0]?.id ?? who.id;
  if (!existing[0]) {
    await db
      .insert(schema.users)
      .values({ id: who.id, email: who.email, emailVerified: true, name: who.displayName })
      .onConflictDoNothing();
  }
  await db
    .insert(schema.userProfiles)
    .values({ userId, username: who.username, displayName: who.displayName })
    .onConflictDoNothing();
  await db
    .insert(schema.tenantMemberships)
    .values({ tenantId, userId, role: "instructor" })
    .onConflictDoNothing();
  return userId;
}

async function main() {
  // Education Leadership (Ed.L.D.) — on the Learn.WitUS school.
  const learnWitus = await tenantBySlug("learn-witus");
  if (!learnWitus) {
    console.error("Learn.WitUS tenant missing — run `pnpm seed:tenants` first.");
    process.exit(1);
  }
  // BAM is the instructor on Learn.WitUS courses (not a synthetic faculty account).
  const instructorId = await ensureInstructor(learnWitus, {
    id: "bam",
    email: "bam@awews.com",
    username: "bam",
    displayName: "BAM",
  });
  await db
    .insert(schema.courseCategories)
    .values({ tenantId: learnWitus, name: "Education Leadership", sortOrder: 2 })
    .onConflictDoNothing();
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "harvard-ed-l-d",
    course: EDUCATION_LEADER_COURSE,
    category: "Education Leadership",
    navigationMode: "linear",
  });

  // Civics (Learn.WitUS) — general, non-partisan. US Civics 101 is the template;
  // more general courses + the per-state layer (IN, AZ, AR first) follow.
  await db
    .insert(schema.courseCategories)
    .values({ tenantId: learnWitus, name: "Civics", sortOrder: 3 })
    .onConflictDoNothing();
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "us-civics-101",
    course: CIVICS_101_COURSE,
    category: "Civics",
    navigationMode: "linear",
  });
  // Voting & Elections 101 — the mechanics companion to US Civics 101's one-line elections
  // lesson: registration, primaries vs. caucuses vs. the general election, how ballots work
  // (polling places, early voting, mail voting), the Electoral College, ballot measures, and
  // how votes are counted, canvassed, and certified. Same Civics category and non-partisan +
  // cited standard: it explains how the system works and never argues who should win. The
  // authoritative-values rule is load-bearing: registration deadlines, ID rules, primary
  // type, and ballot-measure signature thresholds all VARY BY STATE, so the course names the
  // rule and points to the source (EAC, National Archives, Congress.gov/CRS, NCSL) rather
  // than asserting one number as universal.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "voting-elections-101",
    course: VOTING_ELECTIONS_101_COURSE,
    category: "Civics",
    navigationMode: "linear",
  });
  // Citizenship & Naturalization Basics — plain-language, strictly non-partisan (the
  // process and rules, not immigration policy or politics): who is a citizen at birth
  // (birthright + through parents), naturalization eligibility and process, the civics/
  // English test, the Oath of Allegiance, rights and responsibilities, and where to get
  // authoritative help. Same Civics category and cited standard. Authoritative-values
  // rule is load-bearing: fees, the civics-test format (2025 vs. 2008 versions), and even
  // birthright citizenship's litigation status have changed recently, so the course points
  // to uscis.gov as the source of truth rather than asserting fixed numbers as permanent.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "citizenship-naturalization",
    course: CITIZENSHIP_NATURALIZATION_COURSE,
    category: "Civics",
    navigationMode: "linear",
  });
  // US Constitution 101 — a deeper, document-driven companion to US Civics 101
  // (same Civics category, same non-partisan + cited standard). Coming-soon gating
  // is handled at the school/UI level; the course is seeded published like civics.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "us-constitution-101",
    course: US_CONSTITUTION_COURSE,
    category: "Civics",
    navigationMode: "linear",
  });
  // State vs Federal Power — a federalism-focused companion in the Civics category
  // (same non-partisan + cited standard). Goes deeper than US Civics 101 on how the
  // Constitution divides power between the national government and the states.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "state-vs-federal",
    course: STATE_VS_FEDERAL_COURSE,
    category: "Civics",
    navigationMode: "linear",
  });
  // US, State & Local Government: Who Does What — the PRACTICAL civic-engagement angle
  // (same Civics category, same non-partisan + cited standard). Distinct from its three
  // siblings: it doesn't re-argue the legal division of power (that's state-vs-federal),
  // re-teach the document (us-constitution-101), or re-do the system overview (us-civics-101).
  // It stays on "what each LEVEL actually does day-to-day, and how a person engages with it."
  // The authoritative-values rule is load-bearing: LOCAL structure VARIES by state, so the
  // course says so and cites the 2022 Census of Governments rather than asserting one model.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "us-state-local-government",
    course: US_STATE_LOCAL_GOV_COURSE,
    category: "Civics",
    navigationMode: "linear",
  });
  // How to Run for Office — practical + strictly non-partisan (the *process*, not who
  // should win). Same Civics category and cited standard. The authoritative-values rule
  // is load-bearing: eligibility, ballot-access (signatures/fees), and state/local
  // contribution limits VARY by office/state, so the course names the rule + points to the
  // source (FEC, USA.gov, NCSL, Ballotpedia) rather than asserting one number as universal.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "how-to-run-for-office",
    course: HOW_TO_RUN_COURSE,
    category: "Civics",
    navigationMode: "linear",
  });
  // Spotting Misleading Marketing — consumer/media-literacy in the Civics category
  // (civic + consumer literacy; same non-partisan + cited standard). Carries the
  // platform's "verify, don't trust blindly" trust DNA. Cited to the FTC (deception
  // standard, endorsement/reviews rules, dark patterns), FDA (supplement claims),
  // FCC (sponsorship ID), and media-literacy orgs (News Literacy Project, Stanford COR).
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "spotting-misleading-marketing",
    course: SPOTTING_MISLEADING_MARKETING_COURSE,
    category: "Civics",
    navigationMode: "linear",
  });
  // How to Help a Campaign — practical + strictly non-partisan (HOW to help any campaign,
  // candidate, ballot measure, or cause — never WHO to help). Same Civics category and cited
  // standard. Authoritative-values rule is load-bearing: volunteer time is generally NOT a
  // contribution, but in-kind (money/resources) is; federal contribution limits are FEC-set
  // and inflation-indexed, while state/local limits + disclosure + ballot-measure rules VARY
  // by state — so the course names the rule + points to the source (FEC, USA.gov, Vote.gov,
  // NCSL, Ballotpedia) rather than asserting one number as universal.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "help-a-campaign",
    course: HELP_A_CAMPAIGN_COURSE,
    category: "Civics",
    navigationMode: "linear",
  });
  // How a Bill Becomes Law (Federal) — the deep version of US Civics 101's
  // six-line "how a bill becomes a law" lesson. Same Civics category and cited,
  // non-partisan standard: this is the PROCESS (committees, House vs. Senate floor
  // rules, presentment, veto/override), never an argument for or against any bill.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "how-a-bill-becomes-law",
    course: HOW_A_BILL_BECOMES_LAW_COURSE,
    category: "Civics",
    navigationMode: "linear",
  });
  // The Supreme Court & the Judicial Branch — the deep version of US Civics 101's
  // five-line "the courts and judicial review" lesson, distinct from
  // state-vs-federal's landmark-case lessons (which illustrate the federalism
  // SPLIT, not how the Court itself operates). Institutional and strictly
  // non-partisan: covers structure, nomination/confirmation, certiorari, oral
  // argument, opinions/precedent, interpretive approaches (described evenhandedly),
  // and checks on the judiciary. No position on any Justice, ruling, or philosophy.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "supreme-court-judicial-branch",
    course: SUPREME_COURT_JUDICIAL_BRANCH_COURSE,
    category: "Civics",
    navigationMode: "linear",
  });
  // The Bill of Rights: Know Your Rights — practical, strictly non-partisan 1st and 4th
  // Amendment basics (speech, religion, press, assembly, petition; searches, seizures,
  // warrants, probable cause) in everyday terms: at school, online, and in encounters
  // with police. Same Civics category and cited standard. Explains what these rights
  // protect and their limits; takes no position on any case, law, or politician.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "know-your-rights",
    course: KNOW_YOUR_RIGHTS_COURSE,
    category: "Civics",
    navigationMode: "linear",
  });
  // Know Your Rights at Work — the LABOR-side sibling of know-your-rights (Bill of Rights). Same
  // Civics category and cited standard. Six women, one argument in six movements: Addie Wyatt (what
  // a contract IS), Dolores Huerta (building power outside the room), Crystal Lee Sutton (what
  // retaliation COSTS), Sara Nelson (leverage), Drescher + Stiehm (AI likeness and an employer
  // restructuring the job out from under the old contract). Every statutory statement is quoted
  // from the U.S. Code itself (NLRA §§ 2, 7, 8, 10 = 29 U.S.C. §§ 152, 157, 158, 160; RLA = 45
  // U.S.C. § 156) — nlrb.gov and dol.gov block automated fetching, so the course cites the STATUTE
  // rather than paraphrasing an agency page it could not read. At-will employment VARIES BY STATE,
  // so the course says so and names Montana as the statutory exception (authoritative-values rule).
  // The Huerta lesson addresses the March 2026 abuse allegations against Cesar Chavez directly and
  // cited, per BAM's editorial decision: it teaches the organizing method AND the public record,
  // adjudicates nothing, and invents no quotes.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "know-your-rights-at-work",
    course: KNOW_YOUR_RIGHTS_AT_WORK_COURSE,
    category: "Civics",
    navigationMode: "linear",
  });
  // Jury Duty & the Courts (the citizen's side) — the practical, citizen-facing
  // companion to supreme-court-judicial-branch (which covers the institution) and
  // how-a-bill-becomes-law (the legislative process). Same Civics category and cited,
  // non-partisan standard: covers why juries exist (6th & 7th Amendments), getting a
  // summons, voir dire, grand vs. petit juries, the structure of a trial, civil vs.
  // criminal juries, and jury duty logistics (pay, exemptions, employer protections).
  // Authoritative-values rule is load-bearing: pay, exemptions, and summons procedure
  // are the FEDERAL baseline (uscourts.gov, 28 U.S.C.); the course flags that state and
  // local jury systems vary rather than asserting one nationwide rule.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "jury-duty-courts",
    course: JURY_DUTY_COURTS_COURSE,
    category: "Civics",
    navigationMode: "linear",
  });
  // Per-state Civics layer (IN, AZ, AR first) — each teaches ONE state's specific
  // version of the system (constitution · 3 branches · bill→law · local government ·
  // elections/ballot access · get-involved), in the same Civics category + cited,
  // non-partisan standard. The slugs are a load-bearing contract with the /civics US
  // map: they MUST stay exactly state-civics-in / -az / -ar (the map lights a state up
  // by these slugs). Authoritative-values rule is load-bearing here: STATE facts vary
  // and CHANGE, so each course cites the STATE'S OWN official .gov and FLAGS
  // time-sensitive items rather than asserting a value that could go stale — notably
  // AZ's Lieutenant Governor (Prop 131, 2022) coming online for the 2026 cycle, and
  // AR's initiative rules being recently tightened + in flux.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "state-civics-in",
    course: STATE_CIVICS_IN_COURSE,
    category: "Civics",
    navigationMode: "linear",
  });
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "state-civics-az",
    course: STATE_CIVICS_AZ_COURSE,
    category: "Civics",
    navigationMode: "linear",
  });
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "state-civics-ar",
    course: STATE_CIVICS_AR_COURSE,
    category: "Civics",
    navigationMode: "linear",
  });
  // More per-state civics (light up the /civics map). Each cites its state's own .gov and flags
  // time-sensitive facts (e.g. NY's court-name inversion, TX's plural executive, CA direct
  // democracy, FL's 60% amendment threshold) rather than asserting them as fixed.
  for (const { slug, course } of [
    { slug: "state-civics-ca", course: STATE_CIVICS_CA_COURSE },
    { slug: "state-civics-tx", course: STATE_CIVICS_TX_COURSE },
    { slug: "state-civics-fl", course: STATE_CIVICS_FL_COURSE },
    { slug: "state-civics-ny", course: STATE_CIVICS_NY_COURSE },
    { slug: "state-civics-pa", course: STATE_CIVICS_PA_COURSE },
    { slug: "state-civics-oh", course: STATE_CIVICS_OH_COURSE },
    { slug: "state-civics-ga", course: STATE_CIVICS_GA_COURSE },
    { slug: "state-civics-nc", course: STATE_CIVICS_NC_COURSE },
    { slug: "state-civics-mi", course: STATE_CIVICS_MI_COURSE },
    { slug: "state-civics-va", course: STATE_CIVICS_VA_COURSE },
    { slug: "state-civics-wa", course: STATE_CIVICS_WA_COURSE },
    { slug: "state-civics-co", course: STATE_CIVICS_CO_COURSE },
    { slug: "state-civics-ma", course: STATE_CIVICS_MA_COURSE },
    { slug: "state-civics-nj", course: STATE_CIVICS_NJ_COURSE },
    { slug: "state-civics-il", course: STATE_CIVICS_IL_COURSE },
    { slug: "state-civics-tn", course: STATE_CIVICS_TN_COURSE },
    { slug: "state-civics-la", course: STATE_CIVICS_LA_COURSE },
    { slug: "state-civics-ne", course: STATE_CIVICS_NE_COURSE },
    { slug: "state-civics-me", course: STATE_CIVICS_ME_COURSE },
    { slug: "state-civics-ak", course: STATE_CIVICS_AK_COURSE },
    { slug: "state-civics-or", course: STATE_CIVICS_OR_COURSE },
    { slug: "state-civics-mo", course: STATE_CIVICS_MO_COURSE },
    { slug: "state-civics-nh", course: STATE_CIVICS_NH_COURSE },
    { slug: "state-civics-hi", course: STATE_CIVICS_HI_COURSE },
    { slug: "state-civics-sc", course: STATE_CIVICS_SC_COURSE },
    { slug: "state-civics-md", course: STATE_CIVICS_MD_COURSE },
    { slug: "state-civics-wi", course: STATE_CIVICS_WI_COURSE },
    { slug: "state-civics-mn", course: STATE_CIVICS_MN_COURSE },
    { slug: "state-civics-vt", course: STATE_CIVICS_VT_COURSE },
    { slug: "state-civics-ct", course: STATE_CIVICS_CT_COURSE },
    { slug: "state-civics-de", course: STATE_CIVICS_DE_COURSE },
    { slug: "state-civics-nd", course: STATE_CIVICS_ND_COURSE },
    { slug: "state-civics-nv", course: STATE_CIVICS_NV_COURSE },
    { slug: "state-civics-mt", course: STATE_CIVICS_MT_COURSE },
    { slug: "state-civics-ri", course: STATE_CIVICS_RI_COURSE },
    { slug: "state-civics-ut", course: STATE_CIVICS_UT_COURSE },
    { slug: "state-civics-al", course: STATE_CIVICS_AL_COURSE },
    { slug: "state-civics-sd", course: STATE_CIVICS_SD_COURSE },
    { slug: "state-civics-nm", course: STATE_CIVICS_NM_COURSE },
    { slug: "state-civics-wy", course: STATE_CIVICS_WY_COURSE },
    { slug: "state-civics-ia", course: STATE_CIVICS_IA_COURSE },
    { slug: "state-civics-wv", course: STATE_CIVICS_WV_COURSE },
    { slug: "state-civics-ky", course: STATE_CIVICS_KY_COURSE },
    { slug: "state-civics-ok", course: STATE_CIVICS_OK_COURSE },
    { slug: "state-civics-id", course: STATE_CIVICS_ID_COURSE },
    { slug: "state-civics-ks", course: STATE_CIVICS_KS_COURSE },
    { slug: "state-civics-ms", course: STATE_CIVICS_MS_COURSE },
    { slug: "state-civics-dc", course: STATE_CIVICS_DC_COURSE },
  ]) {
    await seedAuthoredCourse(db, { tenantId: learnWitus, instructorId, slug, course, category: "Civics", navigationMode: "linear" });
  }

  // How to Create a Course (the meta-course for teachers) — on Learn.WitUS.
  await db
    .insert(schema.courseCategories)
    .values({ tenantId: learnWitus, name: "Teaching", sortOrder: 4 })
    .onConflictDoNothing();
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "how-to-create-a-course",
    course: COURSE_CREATION_COURSE,
    category: "Teaching",
    navigationMode: "linear",
  });

  // AI Literacy (F1) — the flagship AI foundation, on Learn.WitUS (cross-cutting).
  await db
    .insert(schema.courseCategories)
    .values({ tenantId: learnWitus, name: "AI & Technology", sortOrder: 5 })
    .onConflictDoNothing();
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "ai-literacy",
    course: AI_LITERACY_COURSE,
    category: "AI & Technology",
    navigationMode: "linear",
  });
  // L2: Detecting AI — Deepfakes, Synthetic Media & Provenance — the second rung of the
  // AI literacy mastery ladder, in the same "AI & Technology" category and builds on
  // AI Literacy (F1). The throughline is the DURABLE skill: provenance + lateral reading
  // (who made it / where it came from / who corroborates it), since "spot the artifact"
  // tips age out fast. Honest about limits: no detector is reliable, and the liar's
  // dividend cuts both ways. Distinct from "Spotting Misleading Marketing" (that course is
  // ad/marketing deception; this one is AI-generated/synthetic MEDIA). Cited to C2PA,
  // Google DeepMind SynthID, Partnership on AI, WITNESS, the FBI/IC3, NIST, and Stanford COR.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "ai-l2-detecting-ai",
    course: AI_L2_DETECTING_AI_COURSE,
    category: "AI & Technology",
    navigationMode: "linear",
  });
  // L3 AI Ethics, Bias & Society — literacy ladder (for everyone, not code-heavy). Cited to
  // NIST AI RMF + SP 1270, UNESCO AI ethics, the EU AI Act, fairmlbook, and the ACM Code.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "ai-l3-ethics",
    course: AI_L3_ETHICS_COURSE,
    category: "AI & Technology",
    navigationMode: "linear",
  });
  // L4 Data Privacy & Security in the AI Age — literacy ladder. Cited to NIST Privacy/CSF,
  // FTC, CISA, GDPR/CCPA, and OWASP LLM (sensitive-info disclosure).
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "ai-l4-privacy-security",
    course: AI_L4_PRIVACY_SECURITY_COURSE,
    category: "AI & Technology",
    navigationMode: "linear",
  });
  // L5 Researching with AI (Cited & Verified) — literacy ladder; the anti-hallucinated-
  // citation course. Cited to NIST AI RMF, Stanford COR (lateral reading), APA Style, CRAAP.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "ai-l5-researching",
    course: AI_L5_RESEARCHING_COURSE,
    category: "AI & Technology",
    navigationMode: "linear",
  });

  // Learning How to Learn — the study-skills foundation, on Learn.WitUS
  // (cross-cutting; the meta-skill that makes every other course land). Cited to
  // primary cognitive-science research; points learners to FlashLearn for spaced
  // recall.
  await db
    .insert(schema.courseCategories)
    .values({ tenantId: learnWitus, name: "Study Skills", sortOrder: 6 })
    .onConflictDoNothing();
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "learning-how-to-learn",
    course: LEARNING_HOW_TO_LEARN_COURSE,
    category: "Study Skills",
    navigationMode: "linear",
  });

  // WOOP (Wish · Outcome · Obstacle · Plan) — Oettingen's Mental Contrasting with Implementation
  // Intentions. The sibling of Learning How to Learn, and deliberately a course about a METHOD, not
  // a biography: a student finishes able to run WOOP on a real goal of their own. It leads with the
  // counterintuitive finding rather than burying it — positive fantasizing about a desired future,
  // on its own, predicts LOWER effort and WORSE attainment; the obstacle step is what converts a
  // wish into action, and only when expectations of success are high (when they're low, mental
  // contrasting correctly leads you to let the goal go — a feature, not a bug). Section 5 teaches
  // the evidence honestly: modest effect sizes, replication debates, and which claims rest on a
  // single study. WOOP is trademarked — the course teaches the method and cites the peer-reviewed
  // research without implying endorsement or reproducing woopmylife.org's branded worksheets.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "woop-science-of-doing-it",
    course: WOOP_COURSE,
    category: "Study Skills",
    navigationMode: "linear",
  });

  // Cybersecurity — consolidated onto Learn.WitUS (was on the Trade School). BAM is the
  // instructor, like the other Learn.WitUS courses.
  await db
    .insert(schema.courseCategories)
    .values({ tenantId: learnWitus, name: "Cybersecurity", sortOrder: 7 })
    .onConflictDoNothing();
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "cybersecurity-get-the-job",
    course: CYBER_SECURITY_COURSE,
    category: "Cybersecurity",
    navigationMode: "linear",
  });

  // ── Vocational / new courses (all on Learn.WitUS) ──────────────────────────
  for (const { name, sortOrder } of [
    { name: "Trade Skills", sortOrder: 8 },
    { name: "Survival", sortOrder: 9 },
    { name: "Careers & Media", sortOrder: 10 },
    { name: "Culture & History", sortOrder: 11 },
    { name: "Sports", sortOrder: 12 },
  ]) {
    await db
      .insert(schema.courseCategories)
      .values({ tenantId: learnWitus, name, sortOrder })
      .onConflictDoNothing();
  }
  for (const { slug, course, category } of [
    { slug: "knot-tying", course: KNOTS_COURSE, category: "Trade Skills" },
    { slug: "croquet", course: CROQUET_COURSE, category: "Sports" },
    { slug: "off-grid-survival", course: SURVIVAL_COURSE, category: "Survival" },
    { slug: "broadcasting-break-in", course: BROADCASTING_COURSE, category: "Careers & Media" },
    { slug: "hoodoo-tradition-of-resistance", course: HOODOO_COURSE, category: "Culture & History" },
    { slug: "hoodoo-complete", course: HOODOO_COMPLETE_COURSE, category: "Culture & History" },
    // The Great Migration — homeschool-friendly cultural history, companion to Hoodoo (how
    // Southern traditions spread north) and Civics (the Black urban vote). Pairs with the
    // green/black/red interactive map at /great-migration-map. See plans/future-courses/
    // great-migration.md (design) and great-migration-facts.md (the fact-check pass).
    { slug: "great-migration", course: GREAT_MIGRATION_COURSE, category: "Culture & History" },
    // The History of Unions — the anchor of the workers'-rights track. The US arc (Knights/AFL,
    // Haymarket, Homestead, Pullman, Triangle, Wagner Act, CIO, Taft-Hartley, Randolph →
    // Memphis, PATCO, the BLS density series) told WITH the parts a comfortable course skips:
    // the NLRA's deliberate agricultural/domestic carve-out, unions' own record of racial and
    // gender exclusion, and the corruption chapters. Then six genuinely different national
    // models (Nordic/Ghent, German co-determination, Japanese enterprise unions, China's
    // state-run ACFTU, Solidarity/COSATU, the Gulf kafala system) plus the ILO floor. The
    // Haymarket bombing is taught AS AN UNRESOLVED DISPUTE — the record never established who
    // threw the bomb, and the course refuses to pick. History companion to "Know Your Rights at
    // Work" (that course = your rights today; this one = how we got here). Proposal for the
    // country-by-country track: plans/future-courses/workers-rights-track-proposal.md.
    { slug: "history-of-unions", course: HISTORY_OF_UNIONS_COURSE, category: "Culture & History" },
    // Germany — Wave 1 of the Workers' Rights country track hanging off the anchor above
    // (plans/future-courses/workers-rights-track-proposal.md). Co-determination taken apart:
    // works councils under the Betriebsverfassungsgesetz (and the exact, non-synonymous
    // difference between INFORMATION, CONSULTATION and genuine CO-DETERMINATION rights), the
    // Mitbestimmungsgesetz 1976 supervisory board — with the chair's casting vote that makes
    // "half the seats" overstate it — and the Montan-Mitbestimmung of 1951, which really was
    // parity. The payload is the pair of numbers: density 14.1% (2024) vs bargaining coverage
    // 49% (2024), because coverage rides on EMPLOYER-association membership, not union
    // membership (and NOT on statutory extension, which Germany barely uses — that is France).
    // Section 5 is the erosion: coverage down 25 points in the West since 1998, OT-Mitgliedschaft,
    // the east/west gap, and ~40% of firms over 2,000 employees engineering out of the parity board.
    { slug: "labor-germany", course: LABOR_GERMANY_COURSE, category: "Culture & History" },
    // Golf — the first of the sports courses. Six sections: how to play, the Rules (cited to
    // the 2023 code), strategy + the World Handicap System, history (incl. the documented
    // record of racial and gender exclusion — students read the January 1962 *Golfdom* trade
    // report of the repeal of the PGA's Caucasian-only clause and find that the industry's own
    // account names none of the men who forced it), the tours as of 2026 (men's golf is NOT
    // reunified), and opportunities for amateurs + entrepreneurs. See plans/future-courses/
    // sports-courses/golf.md (brief).
    { slug: "golf-play-know-work", course: GOLF_COURSE, category: "Sports" },
    { slug: "football", course: FOOTBALL_COURSE, category: "Sports" },
  ]) {
    await seedAuthoredCourse(db, {
      tenantId: learnWitus,
      instructorId,
      slug,
      course,
      category,
      navigationMode: "linear",
    });
  }
  // Hold BOTH Hoodoo courses from publishing, and make the comprehensive one PRIVATE
  // (owner-only). seedAuthoredCourse publishes by default, so we override after seeding.
  await db
    .update(schema.courses)
    .set({
      isPublished: false,
      publishedAt: null,
      publishHoldReason:
        "Hold for cultural review — do not publish until vetted by a knowledgeable member of the tradition.",
    })
    .where(
      and(
        eq(schema.courses.tenantId, learnWitus),
        eq(schema.courses.slug, "hoodoo-tradition-of-resistance"),
      ),
    );
  await db
    .update(schema.courses)
    .set({
      isPublished: false,
      publishedAt: null,
      visibility: "private",
      publishHoldReason:
        "Private / personal study — draws on copyrighted sources. Owner-only; not for publication.",
    })
    .where(and(eq(schema.courses.tenantId, learnWitus), eq(schema.courses.slug, "hoodoo-complete")));
  console.log("  hoodoo: held from publishing (v1 review-hold; v2 private, owner-only)");

  // Building with AI (F2) — also consolidated onto Learn.WitUS, in the shared
  // "AI & Technology" category alongside AI Literacy (F1, the recommended prerequisite).
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "building-with-ai",
    course: AI_BUILDING_COURSE,
    category: "AI & Technology",
    navigationMode: "linear",
  });

  // Advanced Prompting & Reasoning (L1) — first rung of the AI mastery LADDER's LITERACY
  // track, in the shared "AI & Technology" category. Builds on F1 (the recommended prereq)
  // and is for EVERYONE, not just developers: deepens prompting + reasoning while staying
  // tool-agnostic and NOT code-heavy — distinct from the Builder track's B1 (deep-technical).
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "ai-l1-advanced-prompting",
    course: AI_L1_ADVANCED_PROMPTING_COURSE,
    category: "AI & Technology",
    navigationMode: "linear",
  });
  // Prompt Engineering in Depth (B1) — the Builder-track mastery rung that builds on F2
  // (Building with AI). Same "AI & Technology" category. TECHNICAL: assumes the learner
  // writes code and calls model APIs — deliberately deeper + more system-oriented than L1.
  // Trust DNA: treat model output as untrusted; evaluate, don't vibe-check.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "ai-b1-prompt-engineering",
    course: AI_B1_PROMPT_ENGINEERING_COURSE,
    category: "AI & Technology",
    navigationMode: "linear",
  });
  // Building AI Agents & Automations (B2) — the technical builder-track step up from F2
  // (Building with AI, the recommended prerequisite). Same "AI & Technology" category.
  // Goes deep on agents: the loop, tool calling, workflow-vs-agent, orchestration,
  // memory/state, multi-step automations, guardrails & least-privilege, eval/debug, ship.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "ai-b2-agents-automations",
    course: AI_B2_AGENTS_COURSE,
    category: "AI & Technology",
    navigationMode: "linear",
  });
  // B3 RAG & Working with Your Own Data — builder ladder. Cited to Lewis et al. (RAG),
  // pgvector, OpenAI/Anthropic retrieval docs, and OWASP LLM (LLM08/LLM01).
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "ai-b3-rag",
    course: AI_B3_RAG_COURSE,
    category: "AI & Technology",
    navigationMode: "linear",
  });
  // B4 Fine-tuning & Model Basics — builder ladder. Cited to OpenAI/Anthropic fine-tuning
  // docs, Hugging Face PEFT, the LoRA + InstructGPT papers, and NIST AI RMF.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "ai-b4-fine-tuning",
    course: AI_B4_FINE_TUNING_COURSE,
    category: "AI & Technology",
    navigationMode: "linear",
  });
  // B5 Deploying & Evaluating AI Apps (LLMOps) — builder ladder. Cited to NIST AI RMF +
  // GenAI Profile, OWASP LLM Top 10, OpenAI/Anthropic evals + production docs, Google PAIR.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "ai-b5-deploying-evaluating",
    course: AI_B5_DEPLOYING_EVALUATING_COURSE,
    category: "AI & Technology",
    navigationMode: "linear",
  });
  // B6 AI Product: Idea to Shipped Tool (Builder-track CAPSTONE) — synthesizes F2 + B1–B5.
  // Cited to Anthropic "Building Effective Agents", NIST AI RMF, OWASP, Google PAIR.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "ai-b6-ai-product-capstone",
    course: AI_B6_AI_PRODUCT_CAPSTONE_COURSE,
    category: "AI & Technology",
    navigationMode: "linear",
  });

  // Travel & Living Abroad (new category) — practical, cited, destination-agnostic how-to
  // guides for U.S. citizens (passports, visas, and related abroad-travel skills). Cited to
  // travel.state.gov / USA.gov and official EU/ETIAS sources; because fees, forms, and
  // requirements CHANGE, every course teaches the process and points learners to the official
  // source for current figures rather than asserting fixed numbers (authoritative-values rule).
  await db
    .insert(schema.courseCategories)
    .values({ tenantId: learnWitus, name: "Travel & Living Abroad", sortOrder: 12 })
    .onConflictDoNothing();
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "us-passport",
    course: TRAVEL_PASSPORT_COURSE,
    category: "Travel & Living Abroad",
    navigationMode: "linear",
  });
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "travel-visas-101",
    course: TRAVEL_VISAS_101_COURSE,
    category: "Travel & Living Abroad",
    navigationMode: "linear",
  });
  // International Travel Basics — the connective "start here" hub for this category. Ties the
  // pre-trip checklist together (timeline, passport, visa, STEP, insurance, health, money,
  // packing, emergencies, customs) and points to the two courses above for depth rather than
  // duplicating them. Cited to travel.state.gov, CDC Travelers' Health, and CBP.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "international-travel-basics",
    course: TRAVEL_BASICS_COURSE,
    category: "Travel & Living Abroad",
    navigationMode: "linear",
  });
  // Flying Internationally & Coming Home — the airport-and-border companion to the passport
  // and visa courses: TSA screening + PreCheck, what CBP does, the Trusted Traveler Programs
  // (Global Entry, PreCheck, NEXUS, SENTRI), and the CBP re-entry/customs process coming
  // home (declaration, duty-free allowances, prohibited/restricted items). Cited to tsa.gov,
  // cbp.gov, and USDA APHIS. Authoritative-values rule is load-bearing: TTP fees and duty-free
  // exemption dollar amounts both change (and exemptions vary by trip), so the course teaches
  // the structure and points to CBP/TSA's own tools for current figures rather than asserting
  // fixed numbers.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "flying-coming-home",
    course: TRAVEL_FLYING_HOME_COURSE,
    category: "Travel & Living Abroad",
    navigationMode: "linear",
  });
  // Moving Abroad 101 — the hub course for the "Moving & living abroad" pillar: long stay vs.
  // residency vs. citizenship, long-stay visa categories, choosing a country, timeline/cost, and
  // keeping U.S. ties (voting/mail/banking/taxes). Points to the not-yet-built Taxes/Banking
  // Abroad courses rather than duplicating them. Same category + cited standard.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "moving-abroad-101",
    course: MOVING_ABROAD_101_COURSE,
    category: "Travel & Living Abroad",
    navigationMode: "linear",
  });
  // Taxes for Americans Abroad — high-stakes financial content, deliberately conservative:
  // repeatedly framed as educational only (not tax/legal advice), cited heavily to the IRS,
  // FinCEN, and Treasury, and dollar thresholds are framed as annually-changing rather than
  // asserted as permanent (authoritative-values rule).
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "taxes-americans-abroad",
    course: TAXES_AMERICANS_ABROAD_COURSE,
    category: "Travel & Living Abroad",
    navigationMode: "linear",
  });
  // Banking & Money When You Live Abroad — companion to Taxes for Americans Abroad: why FATCA
  // makes some foreign banks reluctant to serve Americans, keeping/using U.S. bank and brokerage
  // accounts from abroad, a short pointer (not a repeat) to FBAR/FATCA reporting, moving money
  // internationally, currency risk, avoiding scams, and staying compliant (OFAC sanctions
  // screening, registered providers). Cited to the IRS, FinCEN, Treasury (OFAC), and the CFPB;
  // educational only, not financial/tax/legal advice (authoritative-values rule).
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "banking-abroad",
    course: BANKING_ABROAD_COURSE,
    category: "Travel & Living Abroad",
    navigationMode: "linear",
  });
  // Healthcare Abroad — how healthcare differs once you leave the U.S., travel medical insurance
  // vs. international/expat health insurance, the key fact that Medicare generally does NOT cover
  // care outside the U.S., medications abroad, routine/emergency care, medical evacuation, and what
  // the State Department can (and cannot) do. Educational only, not medical/insurance advice. Cited
  // to Medicare.gov (CMS), travel.state.gov, and the CDC's Travelers' Health / Yellow Book.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "healthcare-abroad",
    course: HEALTHCARE_ABROAD_COURSE,
    category: "Travel & Living Abroad",
    navigationMode: "linear",
  });
  // Retiring Abroad — the retirement-specific companion to Moving Abroad 101: Social Security
  // payments abroad (and the Payments Abroad Screening Tool), retirement/passive-income visas
  // (Portugal + Panama as verified official examples), U.S. worldwide-income taxation of
  // retirement income, Medicare's lack of coverage abroad, a retirement-specific take on cost of
  // living/choosing a country, estate/beneficiary considerations, and a planning checklist.
  // Points to Moving Abroad 101, Taxes for Americans Abroad, and a forthcoming Healthcare Abroad
  // companion rather than duplicating them. Educational only, cited to ssa.gov, travel.state.gov,
  // irs.gov, and medicare.gov.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "retiring-abroad",
    course: RETIRING_ABROAD_COURSE,
    category: "Travel & Living Abroad",
    navigationMode: "linear",
  });
  // Studying Abroad — for U.S. students (and parents) planning academic study in another
  // country: program types, choosing a program, the student-visa framework (each country sets
  // its own rules; cross-references Travel Visas 101 for the general method), passport
  // readiness, funding/financial-aid portability, health & safety, and credit transfer. Cited to
  // travel.state.gov, EducationUSA/USA StudyAbroad (state.gov), CDC Travelers' Health, and
  // studentaid.gov.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "studying-abroad",
    course: STUDYING_ABROAD_COURSE,
    category: "Travel & Living Abroad",
    navigationMode: "linear",
  });
  // Dual Citizenship & Renunciation Basics — plain-language, non-partisan: dual nationality is
  // permitted under U.S. law (the U.S. doesn't require choosing, but the other country's rules
  // vary), the general (country-varies) ways a second citizenship is acquired, practical
  // implications (passports, taxes — cross-references Taxes for Americans Abroad rather than
  // duplicating it, military/other obligations), and the formal, irrevocable renunciation
  // process before a consular officer, including its exit-tax consequences. Takes no position on
  // whether to acquire or renounce a citizenship. Cited to travel.state.gov, USCIS, and the IRS.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "dual-citizenship",
    course: DUAL_CITIZENSHIP_COURSE,
    category: "Travel & Living Abroad",
    navigationMode: "linear",
  });
  // Shipping & Logistics of an International Move — the physical-logistics companion to Moving
  // Abroad 101: movers vs. DIY shipping vs. sell-and-rebuy, air vs. sea freight and vetting a
  // licensed international mover, destination-side customs on household goods, moving pets
  // internationally, documents to hand-carry, closing out U.S. mail, and staying registered to
  // vote from abroad. Cited to travel.state.gov, CBP/CFR, USDA APHIS, GOV.UK (Transfer of
  // Residence), the Federal Maritime Commission, USPS, and FVAP.gov. Authoritative-values rule
  // is load-bearing: destination customs exemptions and pet-entry requirements are set
  // unilaterally per country and change, so the course teaches the framework (using the U.S.'s
  // own returning-resident exemption and the UK's Transfer of Residence relief as two concrete,
  // verified examples) rather than asserting fixed rules for every destination.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "shipping-logistics-abroad",
    course: SHIPPING_LOGISTICS_COURSE,
    category: "Travel & Living Abroad",
    navigationMode: "linear",
  });

  // ── Sports ────────────────────────────────────────────────────────────────
  // Lacrosse: The Creator's Game. Indigenous origins are foundational, not a footnote:
  // the course leads with the Onondaga Nation's own words and an Indigenous historian
  // (Downey, 2018), and deliberately does NOT reproduce ceremonial medicine-game
  // practice. Every rule is quoted from a current, cited rulebook (World Lacrosse
  // men's/women's field, box, Sixes; NCAA men's and women's) and men's and women's
  // lacrosse are taught as the different games they are. The Haudenosaunee Olympic
  // eligibility question is dated in-text (verified July 2026) and tells the learner to
  // re-check — the authoritative-values rule applied to a live news story.
  // Sports — on Learn.WitUS. Play-it/question-it/build-with-it courses: the sport itself, the
  // sourcing discipline behind its folklore, and the amateur/entrepreneur economy around it.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "lacrosse-creators-game",
    course: LACROSSE_COURSE,
    category: "Sports",
    navigationMode: "linear",
  });

  // Tennis — the court, the scoreboard and the ITF's Rules (the tours and the four Slams layer
  // their own conditions on top, and the Slams are NOT run by the tours); how points are actually
  // won; and the history, which is the point: Althea Gibson, Arthur Ashe, the segregated American
  // Tennis Association that produced them, Billie Jean King and the Original 9. Equal prize money
  // is taught as a 34-year climb, not a 1973 victory — the Australian Open reached it in 1984,
  // went BACKWARD by 1996 citing TV ratings, and only restored it in 2001. Equality is reversible,
  // and that is the lesson. Prize-money distribution is given at field level (the only level
  // anyone publishes) and the course says so rather than inventing a table.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "tennis",
    course: TENNIS_COURSE,
    category: "Sports",
    navigationMode: "linear",
  });

  // Pickleball — how to play (court, serve, kitchen, two-bounce rule, strategy), how to read a
  // rulebook that USA Pickleball revises ANNUALLY (the 2026 edition renumbered nearly everything,
  // so every rule number here is cited to the 2026 rulebook BY YEAR), why the beloved "named after
  // a dog named Pickles" origin story is DISPUTED rather than settled (the course teaches the
  // dispute + source evaluation instead of picking the cute answer), and the real amateur/
  // entrepreneur opportunity: courts and the noise litigation that kills them, coaching and
  // certification, leagues and events, the paddle industry and the delamination/PBCoR arms race,
  // and the pro tours' post-merger contract correction. Authoritative-values rule is load-bearing:
  // rule numbers change every year, participation counts differ by a factor of four between SFIA
  // and APP/YouGov depending on the threshold, and rally vs. side-out scoring is presented as an
  // event-level choice (Rule 15.C.2) rather than one universal system.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "pickleball",
    course: PICKLEBALL_COURSE,
    category: "Sports",
    navigationMode: "linear",
  });

  await pool.end();
  console.log("Done.");
}

main().catch((error) => {
  console.error("Seed failed:", error);
  pool.end().finally(() => process.exit(1));
});
