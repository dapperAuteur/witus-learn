import { neonConfig, Pool } from "@neondatabase/serverless";
import { and, eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
import * as schema from "../src/db/schema";
import { resolveDbUrl } from "./db-url";
import { seedAuthoredCourse } from "./lib/seed-authored-course";
import { SURPLUS_FUNDS_BASICS_COURSE } from "./data/surplus-funds-basics-course";
import { MONODRAMA_WRITING_COURSE } from "./data/monodrama-writing-course";
import { MONODRAMA_PERFORMING_COURSE } from "./data/monodrama-performing-course";
import { SHORT_FORM_DRAMA_COURSE } from "./data/short-form-drama-course";
import { CIVIC_DOCUMENTATION_COURSE } from "./data/civic-documentation-course";
import { HOW_STORIES_WORK_COURSE } from "./data/how-stories-work-course";
import { NEWS_STORYTELLING_COURSE } from "./data/news-storytelling-course";
import { DOCUMENTARY_COURSE } from "./data/documentary-course";
import { ORAL_HISTORY_COURSE } from "./data/oral-history-course";
import { DIGITAL_SOCIAL_STORYTELLING_COURSE } from "./data/digital-social-storytelling-course";
import { MOCKUMENTARY_COURSE } from "./data/mockumentary-course";
import { EDUCATION_LEADER_COURSE } from "./data/education-leader-course";
import { PICKLEBALL_COURSE } from "./data/pickleball-course";
import { CYBER_SECURITY_COURSE } from "./data/cyber-security-course";
import { KNOTS_COURSE } from "./data/knots-course";
import { CROQUET_COURSE } from "./data/croquet-course";
import { SURVIVAL_COURSE } from "./data/survival-course";
import { FOOTBALL_COURSE } from "./data/football-course";
import { BROADCASTING_COURSE } from "./data/broadcasting-course";
import { VOICE_ACTING_COURSE } from "./data/voice-acting-course";
import { SHE_TOOK_THE_SEAT_COURSE } from "./data/she-took-the-seat-course";
import { NAACP_LEARNED_TO_WIN_COURSE } from "./data/naacp-learned-to-win-course";
import { ACTING_COURSE } from "./data/acting-course";
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
import { HOW_TO_READ_A_NUMBER_COURSE } from "./data/how-to-read-a-number-course";
import { HOW_WE_KNOW_WHATS_OUT_THERE_COURSE } from "./data/how-we-know-whats-out-there-course";
import { INTRO_TO_CITIZEN_SCIENCE_COURSE } from "./data/intro-to-citizen-science-course";
import { THE_RIVER_AND_THE_WATERSHED_COURSE } from "./data/the-river-and-the-watershed-course";
import { HOW_TO_RESEARCH_COURSE } from "./data/how-to-research-course";
import { ARCHIVES_AND_FINDING_AIDS_COURSE } from "./data/archives-and-finding-aids-course";
import { DOCUMENTS_AGAINST_PEOPLE_COURSE } from "./data/documents-against-people-course";
import { GENEALOGY_SELF_AND_COMMUNITY_COURSE } from "./data/genealogy-self-and-community-course";
import { FACT_CHECKING_COURSE } from "./data/fact-checking-course";
import { RESEARCH_AS_A_JOB_COURSE } from "./data/research-as-a-job-course";
import { RESEARCHER_CAPSTONE_COURSE } from "./data/researcher-capstone-course";
import { SEARCH_CRAFT_COURSE } from "./data/search-craft-course";
import { THE_RESEARCH_FILE_COURSE } from "./data/the-research-file-course";
import { TRACING_A_PERSON_COURSE } from "./data/tracing-a-person-course";
import { RIGHTS_PERMISSIONS_CLEARANCES_COURSE } from "./data/rights-permissions-clearances-course";
// Here Be Dragons (plans/58), course 1 of 5. Culture & History, grades 9-12.
import { MONSTERS_AT_THE_EDGE_OF_THE_MAP_COURSE } from "./data/monsters-at-the-edge-of-the-map-course";
import { GIANTS_DRAGONS_AND_THE_BONES_COURSE } from "./data/giants-dragons-and-the-bones-course";
import { WRITING_THE_WORLD_COURSE } from "./data/writing-the-world-course";
import { WRONG_FOR_GOOD_REASONS_COURSE } from "./data/wrong-for-good-reasons-course";
import { DEEP_TIME_AND_THE_DINOSAUR_RENAISSANCE_COURSE } from "./data/deep-time-and-the-dinosaur-renaissance-course";
import { RIVER_WHAT_AN_EXPEDITION_IS_COURSE } from "./data/river-what-an-expedition-is-course";
import { RIVER_WABASH_HEADWATERS_COURSE } from "./data/river-the-wabash-headwaters-course";
import { RIVER_THE_OHIO_AND_THE_LINE_COURSE } from "./data/river-the-ohio-and-the-line-course";
import { RIVER_LOCKS_DAMS_AND_BARGES_COURSE } from "./data/river-locks-dams-and-barges-course";
import { RIVER_CAIRO_THE_CONFLUENCE_COURSE } from "./data/river-cairo-the-confluence-course";
import { RIVER_SOLD_DOWN_THE_RIVER_COURSE } from "./data/river-sold-down-the-river-course";
import { RIVER_THE_DELTA_AND_THE_MIGRATION_COURSE } from "./data/river-the-delta-and-the-migration-course";
import { RIVER_LIVING_ON_THE_WATER_COURSE } from "./data/river-living-on-the-water-course";
import { RIVER_FINDING_YOUR_WAY_COURSE } from "./data/river-finding-your-way-course";
import { RIVER_THE_DEAD_ZONE_COURSE } from "./data/river-the-dead-zone-course";
import { RIVER_TELLING_THE_RIVER_COURSE } from "./data/river-telling-the-river-course";
import { WOOP_COURSE } from "./data/woop-course";
import { GREAT_MIGRATION_COURSE } from "./data/great-migration-course";
import { GREAT_MIGRATION_AND_THE_WORLD_COURSE } from "./data/great-migration-and-the-world-course";
import { GREEN_BOOK_READ_A_ROUTE_COURSE } from "./data/green-book-read-a-route-course";
import { INDIANA_AVENUE_COURSE } from "./data/indiana-avenue-course";
import { GYM_COLOR_LINE_COURSE } from "./data/gym-color-line-course";
import { TWO_RACETRACKS_COURSE } from "./data/two-racetracks-course";
import { MUDSOCK_BOUNDARY_COURSE } from "./data/mudsock-boundary-course";
import { PRESIDENTS_HOUSE_COURSE } from "./data/presidents-house-course";
import { FORT_HARRISON_COURSE } from "./data/fort-harrison-course";
import { DC_BERMAN_COURSE } from "./data/dc-berman-course";
import { SEATTLE_BOOKEND_COURSE } from "./data/seattle-bookend-course";
import { BALTIMORE_CHAIN_COURSE } from "./data/baltimore-chain-course";
import { PITTSBURGH_PLAYBOOK_COURSE } from "./data/pittsburgh-playbook-course";
import { HOW_THE_TOOLS_TRAVELLED_COURSE } from "./data/how-the-tools-travelled-course";
import { JIM_CROW_EXPORT_COURSE } from "./data/jim-crow-export-course";
import { SCHOOLHOUSE_NETWORK_COURSE } from "./data/schoolhouse-network-course";
import { WHERE_WE_RESTED_COURSE } from "./data/where-we-rested-course";
import { WHAT_THEY_BUILT_COURSE } from "./data/what-they-built-course";
import { NEGRO_LEAGUES_COURSE } from "./data/negro-leagues-course";
import { WHAT_A_BUSINESS_ENTITY_IS_COURSE } from "./data/what-a-business-entity-is-course";
import { WHO_HAS_THE_POWER_COURSE } from "./data/who-has-the-power-course";
import { THE_LOCAL_LAYER_COURSE } from "./data/the-local-layer-course";
import { FINANCING_WITHOUT_ACCESS_COURSE } from "./data/financing-without-access-course";
import { US_BUSINESS_FORMS_COURSE } from "./data/us-business-forms-course";
import { THE_MIDDLE_LAYER_COURSE } from "./data/the-middle-layer-course";
import { FORMS_OF_GOVERNMENT_COURSE } from "./data/forms-of-government-course";
import { HOW_COUNTRIES_CONSTITUTE_COURSE } from "./data/how-countries-constitute-course";
import { COOPERATIVES_COURSE } from "./data/cooperatives-course";
import { FOREIGN_BUSINESS_FORMS_COURSE } from "./data/foreign-business-forms-course";
import { TRIBAL_NATIONS_GOVERNANCE_COURSE } from "./data/tribal-nations-governance-course";
import { GOVERNMENTS_WITHOUT_STATES_COURSE } from "./data/governments-without-states-course";
import { HOW_POWER_CHANGES_HANDS_COURSE } from "./data/how-power-changes-hands-course";
import { BUSINESS_GOVERNANCE_COURSE } from "./data/business-governance-course";
import { MAP_YOUR_OWN_STACK_COURSE } from "./data/map-your-own-stack-course";
import { CHOOSE_A_FORM_CAPSTONE_COURSE } from "./data/choose-a-form-capstone-course";
import { PHILADELPHIA_UNIVERSITY_COURSE } from "./data/philadelphia-university-course";
import { HISTORY_OF_UNIONS_COURSE } from "./data/history-of-unions-course";
import { LABOR_CHILE_COURSE } from "./data/labor-chile-course";
import { LABOR_GERMANY_COURSE } from "./data/labor-germany-course";
import { LABOR_MEXICO_COURSE } from "./data/labor-mexico-course";
import { LABOR_NORDICS_COURSE } from "./data/labor-nordics-course";
import { LABOR_POLAND_COURSE } from "./data/labor-poland-course";
import { LABOR_INDIA_COURSE } from "./data/labor-india-course";
import { LABOR_SOUTH_KOREA_COURSE } from "./data/labor-south-korea-course";
import { LABOR_BRAZIL_COURSE } from "./data/labor-brazil-course";
import { LABOR_SOUTH_AFRICA_COURSE } from "./data/labor-south-africa-course";
import { AFRICA_BEFORE_COLONIZATION_COURSE } from "./data/africa-before-colonization-course";
import { PRECOLUMBIAN_MESOAMERICA_COURSE } from "./data/precolumbian-mesoamerica-course";
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
import { CHESS_COURSE } from "./data/chess-course";
import { REPORTER_WHAT_A_BEAT_IS_COURSE } from "./data/reporter-what-a-beat-is-course";
import { REPORTER_PUBLIC_RECORDS_COURSE } from "./data/reporter-public-records-course";
import { REPORTER_READING_A_REPORT_COURSE } from "./data/reporter-reading-a-report-course";
import { REPORTER_INTERVIEWING_COURSE } from "./data/reporter-interviewing-course";
import { REPORTER_VERIFICATION_COURSE } from "./data/reporter-verification-on-deadline-course";
import { REPORTER_MEDIA_LAW_COURSE } from "./data/reporter-media-law-course";
import { REPORTER_SOLUTIONS_COURSE } from "./data/reporter-solutions-journalism-course";
import { REPORTER_PITCH_AND_SHAPES_COURSE } from "./data/reporter-pitch-and-shapes-course";
import { REPORTER_CAPSTONE_COURSE } from "./data/reporter-capstone-course";
import { AFROCENTRICITY_COURSE } from "./data/afrocentricity-course";
import { PAN_AFRICANISM_COURSE } from "./data/pan-africanism-course";
import { ASIA_BEFORE_EUROPEAN_COLONIZATION_COURSE } from "./data/asia-before-european-colonization-course";
import { TRAINING_THE_COLONIZER_COURSE } from "./data/training-the-colonizer-course";
import { THE_MOORS_COURSE } from "./data/the-moors-course";
import { WHO_GETS_THE_CREDIT_COURSE } from "./data/who-gets-the-credit-course";
import { HISTORY_OF_BATHING_COURSE } from "./data/history-of-bathing-course";
import { WHO_GETS_NAMED_COURSE } from "./data/who-gets-named-course";

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
    console.error("Learn.WitUS tenant missing, run `pnpm seed:tenants` first.");
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

  // How to Research — the discipline underneath documentary, oral history, news and civic
  // documentation, none of which teach it. Built on the Trusted Documentation Rubric already shipped
  // in src/lib/field-log-rubric.ts, so the course and the instrument reviewers score against are the
  // same object and cannot drift. Standalone by decision, complementary to the Documentarian
  // program rather than its on-ramp. Plan: plans/55-how-to-research-course.md.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "how-to-research",
    course: HOW_TO_RESEARCH_COURSE,
    category: "Study Skills",
    navigationMode: "linear",
  });

  // ── The Researcher track (RSRCH) ─────────────────────────────────────────────────────────────
  // Plan: plans/69-researcher-track.md. A PROFESSIONAL track (BAM, 2026-08-11), the fourth of four
  // documentation paths alongside Documentarian, Storytelling/Documentary and Reporter (plans/68).
  //
  // The idea the whole track turns on: `how-to-research` (Study Skills) ends when YOU are satisfied;
  // this ends when SOMEBODY ELSE can use what you found without repeating your work. That is the
  // difference between research as a habit and research as a job, and it is why every course here is
  // about the handoff.
  //
  // The category is shared with the Reporter track when that lands, deliberately: both are
  // professional documentation trades aimed at working adults rather than at the K-12 standards
  // audience, and two near-identical categories would be worse than one honest one.
  await db
    .insert(schema.courseCategories)
    .values({ tenantId: learnWitus, name: "Research & Reporting", sortOrder: 16 })
    .onConflictDoNothing();

  // RSRCH-00, start-here.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "research-as-a-job",
    course: RESEARCH_AS_A_JOB_COURSE,
    category: "Research & Reporting",
    navigationMode: "linear",
    seriesSlug: "researcher",
    seriesTitle: "The Researcher",
    seriesOrder: 1,
    seriesCode: "RSRCH",
    seriesPosition: "00",
  });

  // NOTE: these are written out longhand rather than through a helper. A helper was tidier and made
  // them INVISIBLE to scripts/check-series-codes.ts, which parses this file textually: the coded
  // course count silently stopped rising. A guard that cannot see a registration is not a guard, and
  // that is worth more than the repetition.
  //
  // RSRCH-01. The biggest speed multiplier in the track, and the one almost nobody was taught. Its
  // through-line is that a query is a HYPOTHESIS about how somebody else described the thing, which
  // is what keeps it from being a list of operators that would date badly.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "search-craft",
    course: SEARCH_CRAFT_COURSE,
    category: "Research & Reporting",
    navigationMode: "linear",
    seriesSlug: "researcher",
    seriesTitle: "The Researcher",
    seriesOrder: 2,
    seriesCode: "RSRCH",
    seriesPosition: "01",
  });

  // RSRCH-02. The standalone Archives & Records course the Documentarian program already wanted
  // (plans/future/12). It lives here because reading a finding aid is a research skill first, and
  // all four documentation paths need it.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "archives-and-finding-aids",
    course: ARCHIVES_AND_FINDING_AIDS_COURSE,
    category: "Research & Reporting",
    navigationMode: "linear",
    seriesSlug: "researcher",
    seriesTitle: "The Researcher",
    seriesOrder: 3,
    seriesCode: "RSRCH",
    seriesPosition: "02",
  });

  // RSRCH-03. Lesson 8, "the records that were never made", is the lesson this course exists to
  // earn: the standard record ladder was built for people the state counted as full persons, and a
  // course teaching the ladder without saying so would teach a method that silently fails for a
  // large share of the people this catalog is about.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "tracing-a-person-through-records",
    course: TRACING_A_PERSON_COURSE,
    category: "Research & Reporting",
    navigationMode: "linear",
    seriesSlug: "researcher",
    seriesTitle: "The Researcher",
    seriesOrder: 4,
    seriesCode: "RSRCH",
    seriesPosition: "03",
  });

  // RSRCH-04. The most directly hireable course in the track. Its whole discipline is one habit:
  // verify against the SOURCE, never against another account that repeats the claim.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "fact-checking-as-a-discipline",
    course: FACT_CHECKING_COURSE,
    category: "Research & Reporting",
    navigationMode: "linear",
    seriesSlug: "researcher",
    seriesTitle: "The Researcher",
    seriesOrder: 5,
    seriesCode: "RSRCH",
    seriesPosition: "04",
  });

  // RSRCH-05. Every failure mode in it is one this catalog actually hit while sourcing its own
  // images in August 2026 (plans/63), which is why it teaches the SHAPE of the mistakes rather than
  // the rules: the rules are the easy part.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "rights-permissions-and-clearances",
    course: RIGHTS_PERMISSIONS_CLEARANCES_COURSE,
    category: "Research & Reporting",
    navigationMode: "linear",
    seriesSlug: "researcher",
    seriesTitle: "The Researcher",
    seriesOrder: 6,
    seriesCode: "RSRCH",
    seriesPosition: "05",
  });

  // RSRCH-06. Deliberately NOT a duplicate of the oral-history course, which teaches how to conduct
  // and treat an interview. This is the different problem of ADJUDICATING between sources of
  // different kinds when they conflict, which is a research decision rather than an interviewing
  // skill. Its argument: the instinct that paper beats a person is wrong often enough to be
  // dangerous, and so is the reverse.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "documents-against-people",
    course: DOCUMENTS_AGAINST_PEOPLE_COURSE,
    category: "Research & Reporting",
    navigationMode: "linear",
    seriesSlug: "researcher",
    seriesTitle: "The Researcher",
    seriesOrder: 7,
    seriesCode: "RSRCH",
    seriesPosition: "06",
  });

  // RSRCH-07. RSRCH-00 lesson 5 makes the ARGUMENT that the file is the product; this is the
  // OPERATIONS. Capture discipline, citations that are a route back rather than a formality,
  // grading claims rather than documents, the memo, and the handover.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "the-research-file",
    course: THE_RESEARCH_FILE_COURSE,
    category: "Research & Reporting",
    navigationMode: "linear",
    seriesSlug: "researcher",
    seriesTitle: "The Researcher",
    seriesOrder: 8,
    seriesCode: "RSRCH",
    seriesPosition: "07",
  });

  // RSRCH-99, the capstone. A capstone course teaches almost nothing new on purpose: its job is to
  // make the learner do the thing end to end with enough scaffolding to finish. Assessed on whether
  // a STRANGER could work from the file, never on how much was found, which is the track's whole
  // thesis made operational.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "researcher-capstone",
    course: RESEARCHER_CAPSTONE_COURSE,
    category: "Research & Reporting",
    navigationMode: "linear",
    seriesSlug: "researcher",
    seriesTitle: "The Researcher",
    seriesOrder: 9,
    seriesCode: "RSRCH",
    seriesPosition: "99",
  });

  // ── The Reporter track (plans/68) ─────────────────────────────────────────
  // Nine courses, REPORT-00 to REPORT-99, sitting on the far side of civic-documentation lesson 16
  // ("Where documentation ends and reporting begins"), which had nothing after it. The Researcher
  // track above asks whether an account is trustworthy; Storytelling asks whether it is well told;
  // the Reporter asks what is happening on my beat this week and what can I prove by Thursday.
  //
  // Same category as the Researcher on purpose: both are professional documentation trades aimed at
  // working adults, and splitting them would produce two near-identical categories.
  //
  // Standards: NONE by decision (plans/68, BAM 2026-08-11). A professional track aimed at working
  // adults does not need a K-12 alignment; the BACKLOG entries in scripts/check-standards-coverage.ts
  // record that as a decision rather than an oversight. Revisit if the track is ever sold to schools.
  //
  // Written out longhand for the same reason the Researcher block above is: a helper would make these
  // invisible to scripts/check-series-codes.ts, which parses this file textually.
  //
  // REPORT-00, start-here. Carries the track's DISCLOSURE in its first lesson (plans/68 section 7a):
  // the author does documentation work for the organization Free Press Indiana sits under, and a
  // journalism track that omitted its own author's stake would fail the standard it teaches.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "reporter-what-a-beat-is",
    course: REPORTER_WHAT_A_BEAT_IS_COURSE,
    category: "Research & Reporting",
    navigationMode: "linear",
    seriesSlug: "reporter",
    seriesTitle: "The Reporter",
    seriesOrder: 1,
    seriesCode: "REPORT",
    seriesPosition: "00",
  });

  // REPORT-01. The exact gap civic-documentation leaves: it teaches open-MEETINGS law thoroughly and
  // stops, because a Documenter's job ends at the gavel. Records are a different statute and a
  // different failure mode, the denial and the fee estimate. Federal FOIA is the spine because it is
  // one text a reader anywhere can check; Indiana is the worked example of a STATE act and the
  // lesson ends by sending the reader to their own.
  //
  // The Indiana lesson deliberately prints NO deadline numbers and files two source checks instead
  // (src/lib/research-checks.ts, keys in-apra-response-deadlines and in-pac-complaint-window). A
  // course that asserts a stale statutory deadline teaches someone to miss a real one, which is the
  // authoritative-values rule at its most literal.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "reporter-public-records",
    course: REPORTER_PUBLIC_RECORDS_COURSE,
    category: "Research & Reporting",
    navigationMode: "linear",
    seriesSlug: "reporter",
    seriesTitle: "The Reporter",
    seriesOrder: 2,
    seriesCode: "REPORT",
    seriesPosition: "01",
  });

  // REPORT-02, the spine of the track (plans/68 section 3). The 2025 Indiana Girl Report is the
  // recurring teaching OBJECT rather than background reading, because on page 27 it documents its
  // own limitations in its own voice: gender gaps exist in data and collection, it is not yet
  // possible to present data free from gender bias, and the limitation should be read as an
  // additional data point rather than as grounds for dismissal. A reporter who can read that page
  // can read any report. Sits directly on top of SCI-01 (how-to-read-a-number).
  //
  // Every page number, figure, and definition in the course was read out of the PDF itself. The two
  // disciplines plans/68 attaches to the document are followed literally: no invented composite
  // subjects and no quotation put in a young person's mouth, and every figure carries its page and
  // its year so the course does not become the thing it teaches learners to catch.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "reporter-reading-a-report",
    course: REPORTER_READING_A_REPORT_COURSE,
    category: "Research & Reporting",
    navigationMode: "linear",
    seriesSlug: "reporter",
    seriesTitle: "The Reporter",
    seriesOrder: 3,
    seriesCode: "REPORT",
    seriesPosition: "02",
  });

  // REPORT-03. oral-history teaches the life-review interview with someone who volunteered;
  // documentary teaches depth across a long relationship with consent renewed. Neither teaches a
  // Tuesday afternoon with a sixteen-year-old, on deadline, with a guardian in the room, when
  // nobody involved chose to be in a story.
  //
  // Legal care is deliberate: the course states that interviewing minors is governed mostly by
  // EDITORIAL policy and state-specific law rather than one national rule, and never asserts a
  // uniform legal requirement. FERPA is described accurately (it binds what SCHOOLS release, not
  // what a student may say), which is the misuse reporters meet most often. Trauma material is
  // sourced to SAMHSA's six principles and the Dart Center, and is written as interviewing craft:
  // the course repeats that a reporter is not a clinician and does not assess anyone's condition.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "reporter-interviewing",
    course: REPORTER_INTERVIEWING_COURSE,
    category: "Research & Reporting",
    navigationMode: "linear",
    seriesSlug: "reporter",
    seriesTitle: "The Reporter",
    seriesOrder: 4,
    seriesCode: "REPORT",
    seriesPosition: "03",
  });

  // REPORT-04. how-to-research teaches sourcing with time; fact-checking-as-a-discipline teaches
  // checking a finished piece. Neither answers the 3pm question, which is what can honestly be
  // confirmed in an hour and what to do when the answer is not enough.
  //
  // The through-line plans/68 asked for: THE DECISION NOT TO PUBLISH IS A PROFESSIONAL ACT. The
  // whole final section is arranged so holding, publishing less, and publishing with the
  // uncertainty stated are normal outputs of a method rather than losses.
  //
  // Named tools appear only as examples with an explicit note that the specific service changes,
  // because a course pinned to a product becomes wrong silently. Cross-links: the Negro Leagues
  // course as a worked catalog example of a publisher refusing to print a contested figure, and
  // How the NAACP Learned to Win for evidence a reporter gathers rather than accepts.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "reporter-verification-on-deadline",
    course: REPORTER_VERIFICATION_COURSE,
    category: "Research & Reporting",
    navigationMode: "linear",
    seriesSlug: "reporter",
    seriesTitle: "The Reporter",
    seriesOrder: 5,
    seriesCode: "REPORT",
    seriesPosition: "04",
  });

  // REPORT-05, and the one where sourcing discipline matters most. plans/68 asked for "a map and
  // the moment to call a lawyer, explicitly NOT legal advice," and the course says so in its first
  // lesson and its last.
  //
  // Every case is named with court and year; Supreme Court decisions carry their U.S. Reports cite.
  // The single circuit decision (Food Lion, 4th Cir. 1999) is given by name, court and year rather
  // than a volume and page this pass could not read against the reporter, because a wrong pin cite
  // in a legal course is worse than none. State law is described as varying, always. Indiana is the
  // worked example and the course REFUSES to print two details it could not verify: the scope of the
  // shield provision at Ind. Code 34-46-4, and a citation for the recording rule. Source checks are
  // filed for both (report-in-shield-scope, report-in-recording).
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "reporter-media-law",
    course: REPORTER_MEDIA_LAW_COURSE,
    category: "Research & Reporting",
    navigationMode: "linear",
    seriesSlug: "reporter",
    seriesTitle: "The Reporter",
    seriesOrder: 6,
    seriesCode: "REPORT",
    seriesPosition: "05",
  });

  // REPORT-06. plans/68's reason: Free Press Indiana describes itself as solutions-focused, and the
  // form is routinely confused with advocacy and with good-news filler. It has an actual method,
  // which is what the course teaches: the four qualities, the two confusions, five named imposters
  // each defined by a single missing quality, an evidence ladder, and the limitations section that
  // makes the piece journalism rather than a brochure.
  //
  // The course prints NO audience-effect or efficacy figures. The research exists and is growing,
  // this pass could not read the underlying studies against their primaries, and quoting an effect
  // size it had not read would be the exact failure REPORT-02 teaches learners to catch. A source
  // check is filed (report-sojo-evidence). Cross-links How the NAACP Learned to Win for the posture
  // toward a response's failures: a losing campaign still buys something, and that is a finding.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "reporter-solutions-journalism",
    course: REPORTER_SOLUTIONS_COURSE,
    category: "Research & Reporting",
    navigationMode: "linear",
    seriesSlug: "reporter",
    seriesTitle: "The Reporter",
    seriesOrder: 7,
    seriesCode: "REPORT",
    seriesPosition: "06",
  });

  // REPORT-07, the last course before the capstone. plans/68: pitching an enterprise project, plus
  // newsletter, social-first and short video, "and choosing among them for a reason." The Free Press
  // posting asks for social and video literacy alongside dailies and enterprise work, which is why
  // the format lessons are in the track rather than treated as somebody else's specialism.
  //
  // It is a craft course and says so, which is why it carries fewer citations than the rest of the
  // track rather than manufacturing them. Where it would otherwise make an empirical claim about
  // audience behavior it declines to print a figure and sends the reader to their own outlet's
  // analytics, for the same reason REPORT-06 declined on efficacy.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "reporter-pitch-and-shapes",
    course: REPORTER_PITCH_AND_SHAPES_COURSE,
    category: "Research & Reporting",
    navigationMode: "linear",
    seriesSlug: "reporter",
    seriesTitle: "The Reporter",
    seriesOrder: 8,
    seriesCode: "REPORT",
    seriesPosition: "07",
  });

  // REPORT-99, the capstone, completing the nine-course track plans/68 designed. The specification
  // is BAM's, verbatim from that plan's course table: one quick-turn story and one enterprise pitch
  // on a beat the learner chooses, plus one records request, one public data report read properly,
  // two interviews, and a written note on what they could not confirm.
  //
  // A capstone teaches almost nothing new on purpose; its job is to make the learner do the thing
  // end to end with enough scaffolding to finish, which is the same principle the Researcher
  // track's capstone states. What it adds is the ASSESSMENT STANDARD, and the standard is
  // deliberately not "did you get a good story": it is whether every claim carries the confidence
  // level the file supports and whether a STRANGER could reconstruct how each was established.
  // Four things are explicitly not assessed, including whether records arrived and whether the
  // writing is good, because those are outcomes and outcomes on a four-week beat are luck.
  //
  // plans/68 decided the capstone stays an ASSESSED EXERCISE rather than a set of real clips, so
  // nothing here requires the learner to publish anything or to have an outlet. It does require
  // telling every source plainly that nothing will publish.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "reporter-capstone",
    course: REPORTER_CAPSTONE_COURSE,
    category: "Research & Reporting",
    navigationMode: "linear",
    seriesSlug: "reporter",
    seriesTitle: "The Reporter",
    seriesOrder: 9,
    seriesCode: "REPORT",
    seriesPosition: "99",
  });

  // Genealogy for yourself and your community. Plan: plans/70-genealogy-course.md.
  //
  // NOT a duplicate of RSRCH-03. That course teaches tracing a person as a professional method, in
  // the third person, for a client, and its lesson 8 opens the 1870 problem and moves on. This one
  // starts there: for this research the obstacle IS the subject. First person, and the emotional
  // contract is different, which is why lesson 13 exists to say that a line ending is a fact about a
  // system rather than a failure of the researcher.
  //
  // Culture & History rather than Research & Reporting on purpose: this is personal and community
  // work, and it belongs beside the Great Migration courses rather than beside a professional trade.
  // No series code yet; if a genealogy track follows, this becomes its -00.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "genealogy-for-yourself-and-your-community",
    course: GENEALOGY_SELF_AND_COMMUNITY_COURSE,
    category: "Culture & History",
    navigationMode: "linear",
  });

  // ── Science & Math, Wave 1 ───────────────────────────────────────────────────────────────────
  // Track proposal: plans/future-courses/sciences/02-science-and-math-track-proposal.md.
  // The category is new. Every course in it complements courses that already exist rather than
  // sitting beside the catalog: SCI-01 serves the 34 Civics courses, which all quote numbers and
  // none of which teach a learner how to check one.
  await db
    .insert(schema.courseCategories)
    .values({ tenantId: learnWitus, name: "Science & Math", sortOrder: 15 })
    .onConflictDoNothing();

  // SCI-01 How to Read a Number. Wave 1, so it needs NO platform work: every assessment is
  // scenario multiple-choice or a `:::reveal` self-check, and the learner is never asked to
  // produce a number (which `checkExerciseAnswer` grades by string equality and could not mark
  // fairly). Outline: plans/future-courses/sciences/outlines/01-how-to-read-a-number.md.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "how-to-read-a-number",
    course: HOW_TO_READ_A_NUMBER_COURSE,
    category: "Science & Math",
    navigationMode: "linear",
    seriesSlug: "science-and-math",
    seriesTitle: "Science & Math",
    seriesOrder: 1,
    seriesCode: "SCI",
    seriesPosition: "01",
  });

  // SCI-02 How We Know What's Out There. The course BAM asked for: astronomy taught as EVIDENCE,
  // starting where river-finding-your-way ends (navigation) and climbing the distance ladder. No
  // equations, by design, so it ships in Wave 1. Its risk is not the physics, it is the biography:
  // five checks are registered in src/lib/research-checks.ts and the lessons hedge in the text
  // until they are answered. Outline: plans/future-courses/sciences/outlines/02-*.md.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "how-we-know-whats-out-there",
    course: HOW_WE_KNOW_WHATS_OUT_THERE_COURSE,
    category: "Science & Math",
    navigationMode: "linear",
    seriesSlug: "science-and-math",
    seriesTitle: "Science & Math",
    seriesOrder: 2,
    seriesCode: "SCI",
    seriesPosition: "02",
  });

  // SCI-03 The River and the Watershed. The PHYSICAL half of the eleven River Expedition courses,
  // which teach what the basin means and never how the river works. Deliberately does NOT duplicate
  // river-the-dead-zone: lesson 9 here gives the hypoxia MECHANISM, that course keeps the
  // problems-with-no-author argument, and each links to the other. Lesson 12 is the only lesson
  // with an external dependency (the kayak trip) and is written to work with whatever arrives.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "the-river-and-the-watershed",
    course: THE_RIVER_AND_THE_WATERSHED_COURSE,
    category: "Science & Math",
    navigationMode: "linear",
    seriesSlug: "science-and-math",
    seriesTitle: "Science & Math",
    seriesOrder: 3,
    seriesCode: "SCI",
    seriesPosition: "03",
  });

  // SCI-04 Intro to Citizen Science. The practical capstone of Wave 1: SCI-01, -02 and -03 all
  // teach reading other people's evidence, and this one teaches making your own. NOT blocked by
  // the Ghana beach-cleanup data (operator task 242): this is the METHOD course and it teaches
  // from published projects and worked hypotheticals. Ships with the `citizen-science-study` Field
  // Log template, the only platform work in the whole of Wave 1.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "intro-to-citizen-science",
    course: INTRO_TO_CITIZEN_SCIENCE_COURSE,
    category: "Science & Math",
    navigationMode: "linear",
    seriesSlug: "science-and-math",
    seriesTitle: "Science & Math",
    seriesOrder: 4,
    seriesCode: "SCI",
    seriesPosition: "04",
  });

  // River Expedition, course 1 of 11 (RIVER-01). FREE: it is the series funnel and the course that
  // has to earn a stranger's attention. Cross-listed under Culture & History because the spine is
  // the freedom line and the domestic slave trade, not the paddling. Plan: plans/56.
  await db
    .insert(schema.courseCategories)
    .values({ tenantId: learnWitus, name: "Rivers & Expeditions", sortOrder: 14 })
    .onConflictDoNothing();
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "river-what-an-expedition-is",
    course: RIVER_WHAT_AN_EXPEDITION_IS_COURSE,
    category: "Rivers & Expeditions",
    navigationMode: "linear",
    seriesSlug: "river-expedition",
    seriesCode: "RIVER",
    seriesPosition: "01",
  });

  for (const r of [
    { slug: "river-the-wabash-headwaters", course: RIVER_WABASH_HEADWATERS_COURSE, position: "02" },
    { slug: "river-the-ohio-and-the-line", course: RIVER_THE_OHIO_AND_THE_LINE_COURSE, position: "03" },
    { slug: "river-locks-dams-and-barges", course: RIVER_LOCKS_DAMS_AND_BARGES_COURSE, position: "04" },
    { slug: "river-cairo-the-confluence", course: RIVER_CAIRO_THE_CONFLUENCE_COURSE, position: "05" },
    { slug: "river-sold-down-the-river", course: RIVER_SOLD_DOWN_THE_RIVER_COURSE, position: "06" },
    { slug: "river-the-delta-and-the-migration", course: RIVER_THE_DELTA_AND_THE_MIGRATION_COURSE, position: "07" },
    { slug: "river-living-on-the-water", course: RIVER_LIVING_ON_THE_WATER_COURSE, position: "08" },
    { slug: "river-finding-your-way", course: RIVER_FINDING_YOUR_WAY_COURSE, position: "09" },
    { slug: "river-the-dead-zone", course: RIVER_THE_DEAD_ZONE_COURSE, position: "10" },
    { slug: "river-telling-the-river", course: RIVER_TELLING_THE_RIVER_COURSE, position: "11" },
  ]) {
    await seedAuthoredCourse(db, {
      tenantId: learnWitus,
      instructorId,
      slug: r.slug,
      course: r.course,
      category: "Rivers & Expeditions",
      navigationMode: "linear",
      seriesSlug: "river-expedition",
      seriesCode: "RIVER",
      seriesPosition: r.position,
    });
  }

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
  // A GUARD BLIND SPOT worth knowing: `check-series-codes` only parses literal `seedAuthoredCourse({...})`
  // calls, so it cannot see codes set through this loop (they arrive as variables). The complementary
  // gap exists in `check-standards-coverage`, which only sees the shorthand `{ slug: "..." }` form and
  // not the literal calls. Between them every course is covered by one guard and no course by both.
  //
  // NOTE the series fields: this loop used to destructure only slug/course/category/priceType,
  // so a series code written on an entry here was silently DROPPED rather than rejected. If you
  // add a field to an entry below, add it here and pass it through, or it does nothing.
  for (const {
    slug,
    course,
    category,
    priceType,
    seriesSlug,
    seriesTitle,
    seriesOrder,
    seriesCode,
    seriesPosition,
    seriesTrack,
  } of [
    { slug: "knot-tying", course: KNOTS_COURSE, category: "Trade Skills" },
    { slug: "croquet", course: CROQUET_COURSE, category: "Sports" },
    { slug: "off-grid-survival", course: SURVIVAL_COURSE, category: "Survival" },
    { slug: "broadcasting-break-in", course: BROADCASTING_COURSE, category: "Careers & Media" },
    // Voice Acting: The Instrument (plans/65 Phase 1). Career-craft sibling of broadcasting-break-in:
    // the instrument end to end (breath/folds/articulators, health, mic, room, script analysis,
    // genres, business). Deliberately promises no coaching, community, or work; quotes no rates
    // (points at the community rate guides instead).
    // PERFORM series (BAM's decision, 2026-08-22). The pair is coded PERFORM rather than VOICE
    // because VOICE would be accurate for one of the two and wrong for the other, and the code is
    // what a learner reads on a search-result card. `acting` is 00 because it teaches the frame
    // (shot sizes, medium-by-medium adjustment) that the voice course assumes.
    {
      slug: "voice-acting",
      course: VOICE_ACTING_COURSE,
      category: "Careers & Media",
      seriesSlug: "perform",
      seriesTitle: "PERFORM: Performance Craft",
      seriesOrder: 2,
      seriesCode: "PERFORM",
      seriesPosition: "01",
    },
    // She Took the Seat and Held the Door — She Did the Work, wave 1 (plans/65 Phase 4.1; Course E
    // in plans/future-courses/she-did-the-work/00-course-proposals.md). A COHORT course: twelve
    // living sports-media figures taught as one argument about how a closed profession opens, not as
    // twelve biographies. Culture & History rather than Careers & Media on purpose: it is the
    // history/how-it-opened companion to `broadcasting-break-in`, which is the career how-to, and
    // the two cross-link without duplicating. Lesson 3 teaches the verification method the course
    // was built with, because the source calendar carried fourteen errors about these women and the
    // corrections (Mowins's two ordinals, Burke's radio-vs-television firsts, Chaka as line judge
    // not referee, Smith at Case Western not Cincinnati, King at NCCU, the spelling Chowdhury) are
    // the load-bearing content. No quotation appears anywhere in the course that the research pass
    // could not tie to a primary source. NO migration — pnpm seed:courses.
    // DIDWORK series. The two wings are PARALLEL, not sequential, so they are lettered tracks rather
    // than 01 and 02: neither is a prerequisite for the other and a learner may start at either.
    // "S" and "H" are the wings BAM's own source directories use (she-did-the-work, he-did-the-work).
    {
      slug: "she-took-the-seat",
      course: SHE_TOOK_THE_SEAT_COURSE,
      category: "Culture & History",
      seriesSlug: "did-the-work",
      seriesTitle: "Did the Work",
      seriesOrder: 1,
      seriesCode: "DIDWORK",
      seriesPosition: "S1",
      seriesTrack: "She Did the Work",
    },
    // How the NAACP Learned to Win — He Did the Work, wave 1 (plans/65 Phase 4.4, "pair launches
    // with She Did the Work waves"). The deliberate PAIR to she-took-the-seat: that course is how
    // INDIVIDUALS enter a closed profession one seat at a time, this one is how an ORGANIZATION
    // forces an institution open over forty-five years. Four of the five names on
    // plans/future-courses/he-did-the-work/01-list-of-men-that-did-the-work.md (Du Bois, Johnson,
    // White, Marshall) taught as one institution's four instruments rather than four biographies;
    // Onesimus and Molefi Kete Asante, the other two subjects in that directory, are already taught
    // in `training-the-colonizer` and `afrocentricity`. Charles Hamilton Houston is added because
    // the litigation section is not true without him. Two numbers are deliberately NOT printed (the
    // 1919 lynching report's total, and the Dyer bill's exact House tally) and a research check is
    // filed for the first. NO migration — pnpm seed:courses.
    {
      slug: "naacp-learned-to-win",
      course: NAACP_LEARNED_TO_WIN_COURSE,
      category: "Culture & History",
      seriesSlug: "did-the-work",
      seriesTitle: "Did the Work",
      seriesOrder: 2,
      seriesCode: "DIDWORK",
      seriesPosition: "H1",
      seriesTrack: "He Did the Work",
    },
    // Acting: The Frame, the Stage, and the Read (source note: plans/future-courses/acting/acting.md,
    // which asked for research FIRST, so this shipped Tier 1 with a dossier beside that note). The
    // on-camera-and-stage companion to voice-acting: script analysis, the shot-size vocabulary and
    // what each size does to a performance, medium-by-medium adjustment (stage, film, television,
    // commercials, vertical/short form, narration), drama/comedy/physical, self-tape craft, a
    // self-critique protocol, and the business. Its FIRST lesson states the scope boundary out loud:
    // an async text course cannot give feedback on a performance, so it teaches the half that
    // survives the medium and promises no coaching, community, or work.
    //
    // NOT given a seriesCode yet. voice-acting carries none either, and coding one of a pair while
    // leaving the other bare would put a badge on a track that half of it is not in. The
    // recommendation to BAM is a PERFORM series (PERFORM-00 this course, PERFORM-01 voice-acting),
    // which means recoding voice-acting, which is his call rather than a side effect of this branch.
    {
      slug: "acting",
      course: ACTING_COURSE,
      category: "Careers & Media",
      seriesSlug: "perform",
      seriesTitle: "PERFORM: Performance Craft",
      seriesOrder: 1,
      seriesCode: "PERFORM",
      seriesPosition: "00",
    },
    { slug: "hoodoo-tradition-of-resistance", course: HOODOO_COURSE, category: "Culture & History" },
    { slug: "hoodoo-complete", course: HOODOO_COMPLETE_COURSE, category: "Culture & History" },
    // The Great Migration — homeschool-friendly cultural history, companion to Hoodoo (how
    // Southern traditions spread north) and Civics (the Black urban vote). Pairs with the
    // green/black/red interactive map at /great-migration-map. See plans/future-courses/
    // great-migration.md (design) and great-migration-facts.md (the fact-check pass).
    { slug: "great-migration", course: GREAT_MIGRATION_COURSE, category: "Culture & History" },
    // The Great Migration (and the World) — high-school-level companion to the homeschool
    // `great-migration` course above. Built on Wilkerson's three-family frame with an explicit
    // GLOBAL pillar (how the Migration's culture and moral argument traveled). Distinct slug,
    // file, and export; cross-links Hoodoo, History of Unions, and Pan-Africanism. NO migration
    // — pnpm seed:courses.
    { slug: "great-migration-and-the-world", course: GREAT_MIGRATION_AND_THE_WORLD_COURSE, category: "Culture & History" },
    // The Green Book: How to Read a Route — Phase 1, course 1 of the route-courses series
    // (plans/37-green-book-route-courses.md), and the prerequisite for every later site course.
    // Deliberately a METHOD course, not a site tour: read an edition, read a listing (the four-level
    // hierarchy, the 1940 "does not imply recommended" disclaimer vs the 1956 star), read a GAP as
    // evidence (refusal vs absence vs reporting silence), chain listings into a route, then research
    // an address forward to today. The route worked example is Chicago to Los Angeles on U.S. 66 in
    // the 1940 edition, where the chain breaks after Amarillo because New Mexico's entire section is
    // ONE tourist home in Deming, off the corridor. 7 sections, 20 lessons (13 teaching, 5 quizzes
    // with 15-question banks, 1 map lesson, 1 exercise). Primary sources read directly from the
    // digitized 1940 and 1956 editions (Schomburg Center, NYPL); framing from NPS, the Civil Rights
    // Act Title II statute text, the National Archives, Taylor (2020), Sorin (2020), Loewen (2005).
    // Survival-rate figures are attributed with owner + date + scope and never averaged: no complete
    // national survey exists and the course says so. NO migration — pnpm seed:courses.
    { slug: "green-book-how-to-read-a-route", course: GREEN_BOOK_READ_A_ROUTE_COURSE, category: "Culture & History" },
    // Indiana Avenue: A District and What Replaced It, the PILOT SITE COURSE of the route-courses
    // series (plans/37-green-book-route-courses.md) and course 1 of the Indianapolis cluster
    // (plans/39-indianapolis-pilot-cluster.md). It is the first course to run the six-beat site
    // template end to end, one beat per section: Then, Built, Powers, Now, Next, Write. Prerequisite
    // is `green-book-how-to-read-a-route` above, which teaches the METHOD; this one applies it to
    // one nine-block corridor. 6 sections, 21 lessons (14 teaching, 3 quizzes with 15-question
    // banks, 1 map lesson, 1 exercise, 1 `virtual_tour` beat-4 lesson published WITHOUT a
    // contentUrl because its Wanderlearn embed URL does not exist yet). Section 3 (Powers) is the
    // load-bearing one and teaches five instruments: blight designation (1945 act, Pat Ward's
    // Bottom, 1948 clearance, the 1956 38-acre declaration), eminent domain (the documented Temple
    // family condemnation), the highway alignment decision, a university as land assembler (Hoosier
    // Realty Corp 1962, 401 parcels 1964-66), and jurisdictional redrawing (Unigov 1969/1970).
    // Lesson 13 TESTS plan 39's proposed Unigov spine against a date table and reports that it
    // fails for the district and holds for the schools and suburbs. Green Book listings are
    // transcribed from Table 6 of the 2025 Indiana DNR / NPS multiple property documentation form
    // (Borland & Linebarger), not asserted from memory. NO migration, run pnpm seed:courses. The 360
    // tour URL drops in later via `contentUrl` on `ia-now-tour` plus a re-seed.
    { slug: "indiana-avenue-a-district-and-what-replaced-it", course: INDIANA_AVENUE_COURSE, category: "Culture & History" },
    // The rest of the Indianapolis cluster (plans/39). Each applies the six-beat site template to
    // one place in the same metro, so together they teach the civic instruments from several angles:
    // clearance, school district lines, admission to a sport, suburban formation, federal land, and a
    // presidency. Each ships WITHOUT its 360 tour; the Wanderlearn embed URL drops into the
    // `*-now-tour` lesson's contentUrl later and a re-seed picks it up (see plans/37 section 1).
    { slug: "the-gym-and-the-color-line", course: GYM_COLOR_LINE_COURSE, category: "Culture & History" },
    { slug: "two-racetracks", course: TWO_RACETRACKS_COURSE, category: "Culture & History" },
    { slug: "mudsock-how-a-rivalry-marks-a-boundary", course: MUDSOCK_BOUNDARY_COURSE, category: "Culture & History" },
    { slug: "the-presidents-house", course: PRESIDENTS_HOUSE_COURSE, category: "Culture & History" },
    { slug: "fort-harrison-the-federal-footprint", course: FORT_HARRISON_COURSE, category: "Culture & History" },
    // Metro-paths cities (plans/41 section 3b): each teaches a different STAGE in the life of the
    // same instruments the Indianapolis cluster covers. DC is where blight clearance was blessed
    // (Berman v. Parker); Philadelphia is Indiana Avenue's university-expansion twin; Seattle is the
    // modern school-assignment bookend to course 2's Milliken. Tours drop into *-now-tour later.
    { slug: "dc-where-the-instrument-was-blessed", course: DC_BERMAN_COURSE, category: "Culture & History" },
    { slug: "philadelphia-the-university-and-the-block", course: PHILADELPHIA_UNIVERSITY_COURSE, category: "Culture & History" },
    { slug: "seattle-the-modern-bookend", course: SEATTLE_BOOKEND_COURSE, category: "Culture & History" },
    { slug: "baltimore-the-whole-chain", course: BALTIMORE_CHAIN_COURSE, category: "Culture & History" },
    { slug: "pittsburgh-where-the-playbook-was-written", course: PITTSBURGH_PLAYBOOK_COURSE, category: "Culture & History" },
    // The two capstones. "How the Tools Travelled" (plans/42) turns the city courses into one
    // argument: a shared, largely federal toolkit applied locally, with every proposed connection
    // TESTED rather than asserted. "Exported" (plans/43) carries the question abroad; it is the most
    // sensitive course here, keeps the Germany and South Africa claims on separate evidentiary
    // footings, and states in its own text that it does not equate outcomes.
    { slug: "how-the-tools-travelled", course: HOW_THE_TOOLS_TRAVELLED_COURSE, category: "Culture & History" },
    { slug: "exported-how-others-studied-american-race-law", course: JIM_CROW_EXPORT_COURSE, category: "Culture & History" },
    // The POSITIVE track (plans/44 Part 1). The catalogue teaches clearance and exclusion across
    // sixteen courses; its SHAPE could leave a learner thinking this history is only things done
    // to people. These teach what was built, on its own terms. Governing rule, stated in each
    // course: never use a positive to soften a negative. The claim is co-occurrence, not balance.
    { slug: "the-schoolhouse-network", course: SCHOOLHOUSE_NETWORK_COURSE, category: "Culture & History" },
    { slug: "where-we-rested", course: WHERE_WE_RESTED_COURSE, category: "Culture & History" },
    // "What They Built" is the track's economics course: five districts read as firms, out of
    // charters, insurance filings and city directories, around the question nobody teaches — how do
    // you capitalise a business district when banks will not lend to you? It enforces the rule
    // structurally rather than tonally: lesson 17 is a two-column calendar, and internal failures
    // (the True Reformers embezzlement, Binga's charge) sit in the achievement column where they
    // belong. It deliberately teaches NO instruments of clearance; the route series owns those.
    { slug: "what-they-built", course: WHAT_THEY_BUILT_COURSE, category: "Culture & History" },
    // "The Negro Leagues: Who Owned the Game" (plans/future-courses/sports-courses/negro-leagues.md).
    // CATEGORY DECISION, and it is deliberate: this is **Culture & History**, not Sports. The Sports
    // category holds the play-it / know-it / work-in-it courses (golf, football, croquet,
    // pickleball), which teach a learner to play a game and work in its industry. This course
    // teaches nobody to play baseball. It is a cited business-and-institutions history whose direct
    // siblings are all in Culture & History: `what-they-built` (its method), `two-racetracks` (its
    // civic question about admission to a sport), `the-gym-and-the-color-line` and
    // `indiana-avenue-a-district-and-what-replaced-it` (its Indianapolis section), and
    // `pittsburgh-where-the-playbook-was-written` (Greenlee's Hill District). Filing it under Sports
    // would put it next to rules-of-the-game courses and hide it from the learners it is written
    // for. 6 sections, 18 teaching lessons, 6 quizzes on the Tier-0 spec. NO migration, and the
    // slug is deliberately NOT in STAGED_COURSES yet, so `pnpm gen:citations` is a later step.
    { slug: "negro-leagues", course: NEGRO_LEAGUES_COURSE, category: "Culture & History" },
    // "Here Be Dragons" (plans/58), course 1 of 5: how people described a world they had not seen,
    // and what those descriptions were later used for. Grades 9-12, aimed at the homeschool/teacher
    // market. THE RULE THIS SERIES IS BUILT ON: the naive framing ("they thought it was flat, then we
    // got smart") is factually wrong and the series teaches the inverse, that people reasoned well
    // from what they had. Lesson 12 is the hinge, carrying the monstrous-races device forward into
    // what it was later used to justify, and it links to training-the-colonizer and the precolonial
    // courses. Sections 1-4 each end with a 12-question bank serving 8. Contains one `map` lesson
    // (the margins over time, year-driven) and one two-lane `:::timeline` (claim vs evidence).
    // ALL FIVE Here Be Dragons courses are FREE BY DESIGN (BAM, 2026-08-09), and that is a decision
    // rather than a default. The series is the acquisition channel for the whole catalog: it is the
    // argument for what a cited, standards-aligned course is, so putting it in front of as many
    // people as possible is worth more than per-course revenue on it. See FREE_BY_DESIGN in
    // src/lib/course-pricing.ts, which the price-change warning reads so nobody flips one to paid
    // without first seeing why it was free.
    // `priceType` applies on FIRST INSERT ONLY, so a later re-seed never reverts a price BAM sets.
    { slug: "monsters-at-the-edge-of-the-map", course: MONSTERS_AT_THE_EDGE_OF_THE_MAP_COURSE, category: "Culture & History", priceType: "free" as const },
    // "Here Be Dragons" course 2 of 5: fossils before palaeontology existed, from dragon bones in a
    // Beijing apothecary to the Cardiff Giant's ticket price. 22 lessons, one `map` lesson and one
    // two-lane `:::timeline` (found vs explained). Its distinctive move is lesson 4, which holds the
    // griffin/Protoceratops dispute OPEN: Mayor's four strongest points against Witton and Hing's
    // 2024 rebuttal, the losing condition for each side, and an explicit refusal to issue a verdict.
    // A course about holding claims at arm's length had to do that with its own best story. Every
    // "may have inspired" in the file is hedged in the prose on purpose, and lesson 5 makes the hedge
    // itself the object of study.
    { slug: "giants-dragons-and-the-bones", course: GIANTS_DRAGONS_AND_THE_BONES_COURSE, category: "Culture & History", priceType: "free" as const },
    // "Here Be Dragons" course 5 of 5, the ELA capstone and the series' standards anchor: one finding
    // written five ways (chronicle, field note, paper, press release, headline, post), then the moves
    // inside the sentence (naming, the missing actor, the hedge, the citation). 20 lessons, closing on
    // TWO graded assignments, which are what make the WHST.11-12.7 and .8 claims honest rather than
    // aspirational: a six-source ledger with a documented narrowing of the question, and a chain of
    // custody from headline back to paper with a search log that must include the searches that
    // FAILED. Deliberately teaches no `:::figure` directive, because that has not shipped; lesson 12
    // teaches alt, caption and credit as a general publishing convention instead.
    { slug: "writing-the-world", course: WRITING_THE_WORLD_COURSE, category: "Culture & History", priceType: "free" as const },
    // "Here Be Dragons" course 4 of 5, the epistemology payload. 22 lessons. The flat-earth story is
    // taught as a 19th-century CONSTRUCTION (Irving 1828, then Draper and White), Columbus's real
    // error was circumference and his critics were right, and geocentrism is reconstructed as good
    // science because undetectable stellar parallax was a genuine objection until 1838.
    // Lesson 13 ("They laughed at Galileo") sits immediately after the Wegener pair with NO quiz
    // between them, because lessons 11 and 12 would be irresponsible without it: the five-point
    // asymmetry (convergence, risky commitments, engaging the strongest objection, the objection
    // answered rather than outlasted, and independent evidence arriving from instruments built for
    // other purposes) is what separates a vindicated dissenter from a crank, and rejection is not.
    // Lesson 17 (curriculum as a civics question) was KEPT because it could be written as pure
    // mechanism: it cites where curriculum authority sits, names no live dispute, uses none as an
    // example, and says outright that people who disagree completely use the same procedure.
    // Astronomy detail is deliberately thin per plans/58 §6; the science track owns that.
    { slug: "wrong-for-good-reasons", course: WRONG_FOR_GOOD_REASONS_COURSE, category: "Culture & History", priceType: "free" as const },
    // "Here Be Dragons" course 3 of 5: deep time, and a picture that kept changing AFTER science
    // arrived. 25 lessons, closing on a 29-event two-lane `:::timeline` (claim vs evidence).
    // The course's discipline is refusing to overclaim consensus. Brontosaurus is a PROPOSAL
    // (Tschopp et al. 2015) with later analyses on both sides, not a ruling. Bakker's predator-prey
    // ratios are named as not holding up, and the modern thermal position is stated as diverse and
    // unresolved rather than as a victory. Lesson 18 ENDS UNRESOLVED on Deccan tempo, whether
    // ecosystems were pre-stressed (a minority position stated fairly, not dismissed), and the kill
    // mechanism. Popular-account figures were dropped rather than repeated: the often-quoted Marsh
    // and Cope species counts are gone, and the quarry-dynamiting story survives only as a quiz
    // distractor where it is marked WRONG.
    { slug: "deep-time-and-the-dinosaur-renaissance", course: DEEP_TIME_AND_THE_DINOSAUR_RENAISSANCE_COURSE, category: "Culture & History", priceType: "free" as const },
    // "What a Business Entity Actually Is" is course 1 (the method course) of the "How a Business Is
    // Formed" path (plans/46, Path B): an entity is a bundle of four decisions (liability, taxation,
    // ownership/transfer, governance), and reading the formation documents as primary sources is the
    // skill. It is the general case of which What They Built is a worked example, and it says plainly,
    // repeatedly, that it is not legal or tax advice. First of 7 planned path courses.
    { slug: "what-a-business-entity-is", course: WHAT_A_BUSINESS_ENTITY_IS_COURSE, category: "Civics" },
    // "Financing Without Access" is course 4 of the "How a Business Is Formed" path (plans/46): the
    // bridge course, historical and global. Fraternal benefit societies, industrial/burial insurance,
    // building and loan associations, ROSCAs worldwide (susu/tanda/chit fund/tontine), and finance
    // without interest (Islamic finance). Through-line: when the capital system excludes you, you
    // invent an entity. The general case of What They Built's fraternal-orders-and-building-loans.
    { slug: "financing-without-access", course: FINANCING_WITHOUT_ACCESS_COURSE, category: "Civics" },
    // "The US Forms" is course 2 of the business path (plans/46, Path B): the US entity forms read
    // through the four decisions, with the S-corp taught as a tax ELECTION not an entity type.
    { slug: "us-business-forms", course: US_BUSINESS_FORMS_COURSE, category: "Civics" },
    // "The Middle Layer" is course 4 of the government path (plans/46, Path A): states/provinces/regions,
    // on the federalism-vs-devolution distinction (entrenched co-sovereigns vs powers granted by statute).
    { slug: "the-middle-layer", course: THE_MIDDLE_LAYER_COURSE, category: "Civics" },
    // "Who Has the Power to Do This?" is course 1 (the method course) of the "Who Has the Power?" path
    // (plans/46, Path A): given any government action, find the body, its enabling authority, the
    // document that grants it, and who can overturn it. It is the general case of which the route
    // series is fourteen worked examples (find the instrument, then its source), teaches Dillon's Rule
    // vs home rule and the special-district layer, and introduces tribal nations as a SEPARATE
    // sovereign, not a rung on the ladder. First of 9 planned path courses.
    { slug: "who-has-the-power", course: WHO_HAS_THE_POWER_COURSE, category: "Civics" },
    // "The Local Layer" is course 5 of the "Who Has the Power?" path (plans/46, Path A): the level of
    // government most adults were never taught. Dillon's Rule developed, the municipal forms
    // (mayor-council, council-manager, commission), special districts (which outnumber cities and
    // whose elections nobody votes in), town meeting, and Unigov as the "creatures of the state" case.
    { slug: "the-local-layer", course: THE_LOCAL_LAYER_COURSE, category: "Civics" },
    // "Forms of Government, Honestly" is course 2 of the government path (plans/46, Path A): the
    // classical forms, then the load-bearing skill of reading a classification critically, because
    // V-Dem, Polity, Freedom House, and the EIU rank the same countries differently on published
    // methodologies. Asserts no country's current index score; the capstone reads two live reports.
    { slug: "forms-of-government", course: FORMS_OF_GOVERNMENT_COURSE, category: "Civics" },
    // "How Countries Constitute Themselves" is course 3 of the government path (plans/46, Path A):
    // presidential/parliamentary/semi-presidential, written vs uncodified, federal vs unitary, and the
    // four routes by which constitutions get made (US 1787, Germany 1949, Japan 1947, South Africa 1996).
    { slug: "how-countries-constitute", course: HOW_COUNTRIES_CONSTITUTE_COURSE, category: "Civics" },
    // "Cooperatives" is course 3 of the business path (plans/46, Path B): worker/consumer/producer/
    // housing/purchasing co-ops on the one-member-one-vote difference, the Rochdale Principles,
    // Mondragon, rural electric co-ops, and the credit union that Financing Without Access handed here.
    { slug: "cooperatives", course: COOPERATIVES_COURSE, category: "Civics" },
    // "How Other Countries Form Businesses" is course 5 of the business path (plans/46, Path B): the
    // four decisions applied to the UK, Germany (with Mitbestimmung), France, Japan, the Nordics, China
    // (SOEs and the VIE contractual structure), and India; the American set of forms is not universal.
    { slug: "foreign-business-forms", course: FOREIGN_BUSINESS_FORMS_COURSE, category: "Civics" },
    // "Tribal Nations and Indigenous Governance" is course 6 of the government path (plans/46, Path A):
    // sovereignty as PRE-EXISTING not delegated (a separate sovereign, not a rung), treaties as supreme
    // law, IRA 1934 vs traditional governance (the Haudenosaunee held with care), Public Law 280,
    // McGirt, and Alaska Native corporations. Follows plans/46's care rules: teaches that/whose/why,
    // reproduces no ceremonial or restricted detail, leads with nations' own words and Indigenous scholars.
    { slug: "tribal-nations-governance", course: TRIBAL_NATIONS_GOVERNANCE_COURSE, category: "Civics" },
    // "Governments Without States" is course 7 of the government path (plans/46, Path A): the EU as its
    // own legal order, the UN and AU, unrecognised/contested states (Montevideo, recognition theories,
    // taught neutrally), and self-governing communities (HOAs, co-ops, unions, mutual aid), the hand-off
    // to the business path.
    { slug: "governments-without-states", course: GOVERNMENTS_WITHOUT_STATES_COURSE, category: "Civics" },
    // "How Power Changes Hands" is course 8 of the government path (plans/46, Path A): election systems
    // as machines that turn identical votes into different winners (FPTP, party-list PR, ranked choice,
    // mixed-member), then power changing hands outside elections (coups, revolutions, negotiated
    // transitions, term limits). The worked example is labelled hypothetical; real results cited precisely.
    { slug: "how-power-changes-hands", course: HOW_POWER_CHANGES_HANDS_COURSE, category: "Civics" },
    // "Governance: Who Actually Decides" is course 6 of the business path (plans/46, Path B): decision #4
    // taken deep. Boards, shareholders vs stakeholders, fiduciary duty (care/loyalty, business judgment
    // rule), dual-class shares, the German two-tier board, and one-share-one-vote vs one-member-one-vote.
    { slug: "business-governance", course: BUSINESS_GOVERNANCE_COURSE, category: "Civics" },
    // "Map Your Own Stack" is course 9, the CAPSTONE, of the government path (plans/46, Path A): the
    // learner documents every government with authority over their block from the primary record (most
    // find six to twelve and are surprised by half), synthesizing the whole path. Completes Path A (9/9).
    { slug: "map-your-own-stack", course: MAP_YOUR_OWN_STACK_COURSE, category: "Civics" },
    // "Choose a Form and Defend It" is course 7, the CAPSTONE, of the business path (plans/46, Path B):
    // real scenarios, pick a form and defend it against the four decisions AND a named alternative,
    // not legal advice (stated in the assignment itself). Completes Path B (7/7).
    { slug: "choose-a-form-capstone", course: CHOOSE_A_FORM_CAPSTONE_COURSE, category: "Civics" },
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
    // Mexico — Wave 1 of the Workers' Rights country track, and the ANSWER to the anchor's bleak ILO
    // lesson ("the floor is made of paper"). Teaches the protection contract (a collective agreement
    // signed between a company and a union the workers never heard of — sometimes before anyone was
    // hired — which then legally blocked a real union), Mexico's own 2019 labor reform and the
    // legitimation deadline of 1 May 2023, and the USMCA Rapid Response Labor Mechanism — the only
    // genuinely ENFORCEABLE international labor tool in the whole track, taught from the treaty text
    // (Annex 31-A) rather than from summaries. Deliberately teaches the RRM's LIMITS and the cases the
    // US LOST (San Martín, 13 May 2024), and refuses the
    // US-saves-Mexico framing: Mexico's law came first (1 May 2019) and the RRM only enforces it.
    // Scale of protection contracts is NOT quantified — no reliable count exists and the course says so.
    { slug: "labor-mexico", course: LABOR_MEXICO_COURSE, category: "Culture & History" },
    // Sweden & Denmark: The Wage Floor That Isn't a Law — Wave 1 of the Workers' Rights track, a
    // country course hanging off the anchor (history-of-unions). The reframe: neither country has a
    // statutory national minimum wage — the floor is a collective agreement, by design. Teaches the
    // Ghent system (union-run unemployment funds → ~two-thirds density) with Norway as the natural
    // experiment (no Ghent → ~half), the strongest causal evidence (Sweden's 2007 a-kassa fee reform
    // → density fell, per Kjellberg), self-regulation (Saltsjöbaden 1938; September Compromise 1899),
    // Danish flexicurity as a TRADE under strain, and the track's sharpest single contrast — sympathy/
    // secondary action is LEGAL here and ILLEGAL in the US (cross-links Taft-Hartley §8(b)(4)). The
    // still-unresolved 2023 Tesla dispute is taught dated and with no winner. Honest limits: falling
    // density, migrant/platform workers outside the agreements, and the EU minimum-wage directive the
    // Nordic unions themselves resisted. Sweden is kept distinct from Denmark throughout. See
    // plans/future-courses/workers-rights-track-proposal.md.
    { slug: "sweden-denmark-nordic-model", course: LABOR_NORDICS_COURSE, category: "Culture & History" },
    // Poland: Solidarność — When a Union Brought Down a State. Wave 1 of the workers'-rights
    // country track, hanging off the anchor (history-of-unions). The case where a TRADE UNION was
    // the primary vehicle of a political revolution — and, honestly, the case where the union then
    // LOST the workplace it had freed: density ~9% (2022), coverage ~12% (2023), among the EU's
    // lowest. Cited to UNESCO Memory of the World (the 21 Demands), the European Solidarity Centre,
    // Statistics Poland (GUS), OECD/AIAS and ETUI. Neutral + dated on live Polish politics: names
    // Solidarność's alignment with the national-catholic right and the contested Wałęsa file, and
    // adjudicates neither. Teaches the "junk contracts" (umowy śmieciowe) rhyme with US
    // misclassification + Mexican protection contracts. 6 sections · no migration · seed:courses.
    { slug: "labor-poland", course: LABOR_POLAND_COURSE, category: "Culture & History" },
    // India: When Most Workers Have No Employer — Wave 2 of the workers'-rights country track,
    // hanging off the anchor (history-of-unions). The course where "worker = employee with an
    // employer" BREAKS: ~90% informal employment (India Employment Report 2024, ILO/IHD on PLFS —
    // taught WITH the 82%-sector vs 90%-employment definitional split). Party-tied federations
    // (AITUC/INTUC/BMS/CITU — a third politics-and-labor entanglement vs Poland/China) and the
    // 9 July 2025 general strike ("over 250 million" ATTRIBUTED to organisers, never asserted);
    // SEWA (Ela Bhatt, 1972) as the track's one employer-less union model; the four Labour Codes
    // taught DATED (enacted 2019/20 → in force 21 Nov 2025 → Central Rules 8 May 2026 → state
    // rules uneven as of mid-2026) + first gig/platform recognition (SS Code § 2, Rajasthan 2023,
    // Karnataka 2025); caste and labor via parliamentary data (377 sewer deaths 2019–23, Rajya
    // Sabha July 2024, vs "no manual scavenging as defined"; NAMASTE 67.9% SC) and child labor
    // dated (census 2001→2011, the 2016 fine print). 6 sections · no migration · seed:courses.
    { slug: "labor-india", course: LABOR_INDIA_COURSE, category: "Culture & History" },
    // South Korea: Democracy, the Chaebol, and the Lawsuit as a Weapon — Wave 2 of the
    // workers'-rights country track, off the anchor (history-of-unions; the anchor has NO Korea
    // lesson — its Japan enterprise-union lesson is the cross-link). The compressed century:
    // labor control as explicit Park-era development policy, Jeon Tae-il (13 Nov 1970, quote
    // sourced to the Cho Young-rae biography, not asserted as transcript), the 1987 Great
    // Workers' Struggle (3,300+ strikes), FKTU vs KCTU, and the regular/non-regular divide —
    // 38.2% of wage workers (Aug 2025, Statistics Korea). Question 4's modern form: damages
    // suits + provisional seizure (Ssangyong 2009), first-ever trucker return-to-work orders
    // (Nov 2022), and the yellow envelope law (passed 24 Aug 2025 after two vetoes, effective
    // Mar 2026) taught DATED with no outcomes asserted. Density 13.1% (2022 MOEL), coverage
    // 14.8% (2018 OECD/AIAS). 6 sections · 15 teaching lessons · 6 quizzes (15-question banks).
    // NO migration — pnpm seed:courses.
    { slug: "labor-south-korea", course: LABOR_SOUTH_KOREA_COURSE, category: "Culture & History" },
    // Brazil: State-Chartered Unions, a Union-Made President, and the 2017 Rupture — Wave 2 of the
    // workers'-rights country track (plans/future-courses/workers-rights-track-proposal.md), hanging
    // off the anchor (history-of-unions). Corporatism written into LAW: the 1943 CLT's three locks
    // (unicidade, ministry charter, compulsory tax), the dictatorship using the machine, the ABC
    // strikes capturing it from within, 1988 keeping two locks (why C87 is still unratifiable), and
    // the controlled experiment: Lei 13.467/2017 switched the tax off → >90% revenue collapse taught
    // with figures (two official-data series, scopes flagged). Lula taught NEUTRAL AND DATED — the
    // conviction AND the jurisdictional annulment, adjudicating neither. Informality 39.0% (2024,
    // IBGE), STF Tema 1291 taught as PENDING (pulled from docket 24 Jun 2026), trabalho análogo à
    // escravidão + the lista suja (MTE/Repórter Brasil). 6 sections · no migration · seed:courses.
    { slug: "labor-brazil", course: LABOR_BRAZIL_COURSE, category: "Culture & History" },
    // Chile: A Labor System Designed to Be Weak — Wave 2 of the workers'-rights country track, and
    // the learner's recommended LAST country course: the 1979 Plan Laboral (DL 2756/2758, José
    // Piñera) as a labor system DESIGNED to atomise — steelmanned in its author's own words, then
    // measured (density ~16%, coverage ~19.3%, 2023 OECD/AIAS — the ~3-point gap as the firm-level
    // fingerprint). Set deliberately AGAINST the Nordics course: same statutory silence on sectoral
    // bargaining, opposite cause. Subcontratación (Ley 20.123) named as Chile's put-them-outside
    // move. 2022/2023 constitutional rejections dated, outcomes only. 6 sections · seed:courses.
    { slug: "labor-chile", course: LABOR_CHILE_COURSE, category: "Culture & History" },
    // South Africa — Wave 2 of the workers'-rights country track. The union movement that helped
    // end apartheid, then JOINED the government it fought: exclusion by race BY STATUTE (ICA 1924's
    // "employee" definition; the 1953 strike ban), Durban 1973 → FOSATU → COSATU 1985 and the
    // Tripartite Alliance, LRA 66 of 1995 on paper vs 32.9% unemployment (Q1 2025, Stats SA) and
    // labour broking (the track's outside-the-category rhyme), Marikana taught from the Farlam
    // Commission's published findings (dated; litigation open as of 2026), NUMSA expelled 2014 /
    // SAFTU 2017 steelmanned from each side's own statements. ⚠️ NEEDS-REVIEW-BEFORE-PROMOTION:
    // a South African reviewer must check the Marikana lesson before this course is promoted —
    // see plans/user-tasks/123-seed-labor-south-africa.md. Seeding is fine; promotion waits.
    { slug: "labor-south-africa", course: LABOR_SOUTH_AFRICA_COURSE, category: "Culture & History" },
    // Africa Before Colonization — the ANCHOR of the precolonial-Africa track
    // (plans/future-courses/africa-precolonial-track-proposal.md; from BAM's world.md queue).
    // Opens with the verified Hegel (1837) and Trevor-Roper (1965) "no history" quotes as the
    // artifact, then the documented record: Kush/25th Dynasty, Aksum (coins, Ezana, Ge'ez),
    // Ghana→Mali→Songhai + Timbuktu (Mansa Musa taught as a SOURCE AUDIT — al-Umari via
    // Levtzion & Hopkins; "richest ever" refused; the Cairo "crash" contested per Schultz 2006),
    // Great Zimbabwe WITH Rhodesia's documented 1970 censorship, the Swahili coast, Benin +
    // the 1897 looting (hedged counts), Ethiopia (Lalibela; Adwa 1896 + the 1936-41 asterisk).
    // African participation in slavery and the slave trades is taught plainly (Thornton,
    // Lovejoy, Northrup, SlaveVoyages), and the romance trap is taught as equal to erasure.
    // Ends with the "how we know" methods section (archaeology, the Arabic corpus in scholarly
    // translation, Vansina's oral-tradition rules, linguistics) and an anti-flattening exercise.
    // 7 sections · 16 teaching lessons · 7 quizzes (15-16-question banks) · 1 exercise.
    // Mansa Gold research cross-linked at /admin/future. NO migration — pnpm seed:courses.
    { slug: "africa-before-colonization", course: AFRICA_BEFORE_COLONIZATION_COURSE, category: "Culture & History" },
    // Golf — the first of the sports courses. Six sections: how to play, the Rules (cited to
    // the 2023 code), strategy + the World Handicap System, history (incl. the documented
    // record of racial and gender exclusion — students read the January 1962 *Golfdom* trade
    // report of the repeal of the PGA's Caucasian-only clause and find that the industry's own
    // account names none of the men who forced it), the tours as of 2026 (men's golf is NOT
    // reunified), and opportunities for amateurs + entrepreneurs. See plans/future-courses/
    // sports-courses/golf.md (brief).
    { slug: "golf-play-know-work", course: GOLF_COURSE, category: "Sports" },
    { slug: "football", course: FOOTBALL_COURSE, category: "Sports" },
    // Afrocentricity: How to Evaluate a Contested Paradigm (Culture & History) — the ANCHOR of a
    // proposed Afrocentricity track (plans/future-courses/afrocentricity-track-proposal.md). For high
    // school students. Teaches Afrocentricity (Asante's paradigm; roots in Diop) AS ITS PROPONENTS
    // DEFINE IT, presents its strongest claims from their own books, AND the substantive academic
    // criticism from the critics' own books — WITHOUT the course taking a side. The real deliverable
    // is the transferable skill: how to evaluate a contested paradigm. Two live debates are taught
    // with NO WINNER DECLARED and both sides cited from primary sources: the Kemet / "was ancient
    // Egypt Black?" question (Diop vs. mainstream Egyptology, with the 2017 aDNA evidence dated and
    // its limits stated) and the Black Athena exchange (Bernal vs. Lefkowitz). Stolen Legacy (James)
    // is taught as academically rejected on specifics (the Library of Alexandria postdates Aristotle)
    // WITHOUT erasing the documented Egypt→Greece influence. Rigorous scholarship is distinguished
    // from pop-Afrocentric myth (the melanin pseudoscience of Welsing/Jeffries) — a line Afrocentrism's
    // own critics draw, so it is not a partisan move. Every contested claim is attributed to who makes
    // it; the course's own voice asserts only what is settled. No invented citations or quotes. 6
    // sections · 15 teaching lessons · 6 quizzes (15-question banks, above the 10-question attempt cap
    // so retries rotate). No migration — pnpm seed:courses. Natural home for BAM's source note
    // plans/future-courses/he-did-the-work/Molefi-Kete-Asante.md.
    { slug: "afrocentricity", course: AFROCENTRICITY_COURSE, category: "Culture & History" },
    // Pan-Africanism: The Idea, the Movement, the Reckoning — the ANCHOR of the Pan-Africanism
    // track (plans/future-courses/pan-africanism-track-proposal.md). 6 sections · 16 teaching
    // lessons · 6 quizzes (15-question banks). Garvey taught honestly (UNIA scale + Black Star
    // Line collapse + the 1923 conviction + Hoover's 1919 memo); strongmen named with hedged
    // numbers; quotes verbatim-verified or flagged. No migration — pnpm seed:courses.
    { slug: "pan-africanism", course: PAN_AFRICANISM_COURSE, category: "Culture & History" },
    // Pre-Columbian Mesoamerica — the ANCHOR of the Mesoamerica track
    // (plans/future-courses/precolumbian-mesoamerica-track-proposal.md). Olmec (mother-vs-sister
    // taught AS a live debate; Cascajal contested), Aguada Fénix (2020, largest/oldest Maya
    // monument), Teotihuacan (builders/language UNKNOWN — the humility lesson), the Maya (script,
    // zero, Long Count; 2012 traced to Tortuguero Monument 6 = period ending, not prophecy; the
    // Classic collapse specific AND debated; ~7M Maya today — they did not vanish), the Mexica
    // (Tenochtitlan, Triple Alliance, chinampas; sacrifice honest — Huei Tzompantli real, the
    // 80,400 chronicle figure refused), Oaxaca + Purépecha, Central America beyond Mexico (Joya
    // de Cerén, Diquís spheres), conquest per Restall's Seven Myths (Indigenous allies, not
    // passive victims; Nojpetén fell 1697), demographic collapse as a RANGE (~15-30M → ~2M,
    // contested, never one number), and a "how we know" methods lesson (Landa's 1562 Maní
    // burning + ~4 surviving codices, Knorozov→Coe decipherment, PACUNAM LiDAR ~61,480
    // structures). 7 sections · 17 teaching lessons · 7 quizzes (15-question banks) · 1 exercise.
    // NO migration — pnpm seed:courses.
    { slug: "precolumbian-mesoamerica", course: PRECOLUMBIAN_MESOAMERICA_COURSE, category: "Culture & History" },
    // Asia Before European Colonization — the ANCHOR of the precolonial-Asia track
    // (plans/future-courses/precolonial-asia-track-proposal.md; from BAM's world.md queue).
    // ORIENTATION depth by design: the zones (South, East, Southeast, Central, West Asia),
    // when each flourished, and the connective tissue (Silk Roads land+sea, the Baghdad
    // translation movement with the House of Wisdom HEDGED per Gutas, the Mongols as neither
    // only-barbarian nor only-Pax). The economic-center thesis is CITED, NOT ASSERTED:
    // Maddison (2007) shares taught as attributed reconstructions with caveats; Pomeranz
    // (2000) vs Broadberry/Guan/Li (2018) taught as a live debate, no winner declared. The
    // Indus script is taught as UNDECIPHERED (Farmer/Sproat/Witzel vs Parpola dispute named);
    // zero cited link by link (Aryabhata 499 → Brahmagupta 628 → Gwalior 876; Bakhshali
    // radiocarbon contested per Plofker et al. 2017). "European colonization" taught
    // precisely: the Mughals as Central Asian outsiders, intra-Asian conquest (Chola 1025,
    // Ming-Vietnam 1407-27, Imjin 1592-98) predating Europeans, enclaves 1510-1571 vs
    // Plassey 1757. No utopia: caste (between the two myths), Joseon nobi (Palais's ~30%
    // attributed), Khmer temple bondage, the Indian Ocean slave trade. 7 sections ·
    // 17 teaching lessons · 7 quizzes (15-question banks) · 1 exercise (name the
    // civilization/person/place). NO migration — pnpm seed:courses.
    { slug: "asia-before-european-colonization", course: ASIA_BEFORE_EUROPEAN_COLONIZATION_COURSE, category: "Culture & History" },
    // Training the Colonizer — what enslaved and colonized people taught their enslavers
    // (rice, indigo, cattle, foodways, building, ironwork, medicine, navigation). The Black
    // Rice thesis (Carney 2001) taught AS a debate with Eltis/Morgan/Richardson 2007 + the
    // 2010 AHR Exchange, no winner; Onesimus/Mather/Boylston 1721 as the clean medical case;
    // building attributions given as documented LABOR not design; through-line = knowledge
    // coerced, uncredited, uncompensated. NO migration — pnpm seed:courses.
    { slug: "training-the-colonizer", course: TRAINING_THE_COLONIZER_COURSE, category: "Culture & History" },
    // The Moors: The Word, the History, and the Evidence — from BAM's one-line brief
    // plans/future-courses/moors.md. Tier 0. The spine is that "Moor" is an EXONYM whose referent
    // moves by century (Roman Mauri, Amazigh confederations, Arab elites, Iberian converts,
    // sub-Saharan Africans, Slavic saqaliba), so the course fixes the definition before any
    // downstream claim inherits it. Real history taught in full: 711 and the Chronicle-of-754
    // source problem, emirate 756 → caliphate 929, Cordoba, al-Zahrawi/al-Zarqali/Ibn Rushd, the
    // Toledo translation program after 1085, fitna and taifas, Almoravids and Almohads, Las Navas
    // de Tolosa 1212, the Granada capitulations and their breach, the Moriscos, 1609-1614.
    // Historiography taught BESIDE it, with no winner declared on the live disputes: convivencia
    // (Menocal vs. Fernandez-Morera, with Pearce's critique), the Almoravid "conquest" of Ghana
    // (Conrad & Fisher), the Reconquista as a 16th-19th c. construction (Rios Saloma), and the
    // Morisco expulsion total as a RANGE (Lapeyre's 275,000-300,000 vs. higher recent figures).
    // Popular claims are NAMED AND CORRECTED rather than repeated: the Ibn Firnas flight (one
    // source, ~7 centuries later), the 400,000-volume library (no catalog survives), "the Moors
    // ended the Dark Ages" (discarded frame), and both "the Moors were all Black Africans" and
    // "the Moors had nothing to do with Africa" (each flattens a label that covered several
    // populations). 5 sections · 15 teaching lessons · 5 section quizzes (pools 53/54/51/52/52,
    // serving 5) · 1 final (40 serving 10) = 302 questions. NO migration — pnpm seed:courses.
    { slug: "the-moors", course: THE_MOORS_COURSE, category: "Culture & History" },
    // Who Gets the Credit: Black Inventors and the Machinery of Attribution — from BAM's one-line
    // brief plans/future-courses/Black-inventors.md (theft and missing credit). Tier 0. The angle
    // is BAM's and the treatment deliberately teaches the SYSTEM first, because the theft framing
    // has a trap: the most-repeated stories in this genre are false or unprovable, and a course
    // that repeats them hands the reader an argument they will lose. So: what a patent grants, the
    // 1836 oath requirement, the FIVE distinct mechanisms behind the word "stolen" (barred by law,
    // assigned to an employer, absorbed into a brand, published by a colleague, outside the system
    // entirely), and the fact that shapes everything (a patent has NEVER recorded race, so every
    // total is a reconstruction and a floor, per Henry E. Baker's ~1900 survey method).
    // Then the law: the 1858 Invention of a Slave opinion (Ned, Oscar J. E. Stuart, Commissioner
    // Holt, AG Jeremiah S. Black, 10 June 1858), whose ACTUAL holding made the invention ownable by
    // NOBODY rather than by the enslaver, and the Confederate 1861 answer that caught no enslaved
    // inventor anyone has identified. Then the verified record, eleven patent numbers all checked
    // before writing: Jennings 3306x, Blair X8447, Rillieux 3237/4879, Reed 305474, Goode 322177,
    // McCoy 129843, Woods 373383/373915, Latimer 247097/252386, Morgan 1113675/1475024, Brown
    // 3482037, Johnson 4591071, West & Sessler 3118022. Plus the authorship cases where no patent
    // existed: Alice Ball, Vivien Thomas, Gladys West.
    // Section 5 NAMES AND CORRECTS the myths rather than repeating them (Morgan/traffic light,
    // Latimer/light bulb, Carver/peanut butter, Drew's death, "the real McCoy"), explains where the
    // genre came from, and teaches a 7-step procedure for checking any such claim in ~10 minutes.
    // Unresolvable hedges are filed in src/lib/research-checks.ts, not left as prose.
    // 5 sections · 15 teaching lessons · 5 section quizzes (52/50/51/49/54, serving 5) · 1 final
    // (40 serving 10) = 296 questions. NO migration — pnpm seed:courses.
    // CREDIT series (BAM's brief, plans/chat/did-the-work-vetting.md §4). "Who Gets Named" is the
    // 00 because it teaches the MECHANISMS that assign credit in general (Matthew effect, Matilda
    // effect, authorship convention, the inventorship/ownership split, archival silence, and the
    // anatomy of a correction); "Who Gets the Credit" is 01 because it is the deep application of
    // one of those mechanisms to one system, the U.S. patent record. The 00 deliberately does NOT
    // re-teach the patent material: it teaches only the inventorship-is-not-ownership distinction
    // the general case needs and cross-links here for the rest. Recoding was not optional once the
    // 00 existed: `check-series-codes` rule 8 fails a "00" that is the only course in its series.
    {
      slug: "who-gets-named",
      course: WHO_GETS_NAMED_COURSE,
      category: "Culture & History",
      seriesSlug: "credit",
      seriesTitle: "Credit: Who Gets Named",
      seriesOrder: 1,
      seriesCode: "CREDIT",
      seriesPosition: "00",
    },
    {
      slug: "who-gets-the-credit",
      course: WHO_GETS_THE_CREDIT_COURSE,
      category: "Culture & History",
      seriesSlug: "credit",
      seriesTitle: "Credit: Who Gets Named",
      seriesOrder: 2,
      seriesCode: "CREDIT",
      seriesPosition: "01",
    },
    // Clean: A Global History of Bathing and Soap (Culture & History). Organized by tradition, not
    // as a ladder: Indus Great Bath, Rome (oil+strigil, no soap), the hammam and hard soap
    // (Aleppo/Nablus), Japan (misogi + Buddhist merit), the Finnish sauna, the Mesoamerican
    // temazcal, Europe's LATER retreat from bathing (~16th-17th c.) and slow return, the Crusade
    // and Columbian encounters, and a payoff lesson that names and refutes the "medieval Europeans
    // never bathed" myth (a :::reveal + quiz items test the nuance). Vivid-but-thin claims
    // (Moctezuma "twice a day" per Andres de Tapia; Nahua finding the Spanish filthy) are
    // attributed and hedged. Sources: Ashenburg (2007), Smith (2007), Brown (2009), plus Britannica
    // (Great Bath) and UNESCO ICH (Nabulsi soap 2024, Finnish sauna 2020). 8 sections ·
    // 16 teaching lessons · 8 quizzes (15-question banks) · 1 exercise. NO migration — pnpm seed:courses.
    { slug: "history-of-bathing", course: HISTORY_OF_BATHING_COURSE, category: "Culture & History" },
  ]) {
    await seedAuthoredCourse(db, {
      tenantId: learnWitus,
      instructorId,
      slug,
      course,
      category,
      navigationMode: "linear",
      // Insert-only: a re-seed never rewrites a price BAM set at /admin/pricing.
      priceType,
      seriesSlug,
      seriesTitle,
      seriesOrder,
      seriesCode,
      seriesPosition,
      seriesTrack,
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
        "Hold for cultural review, do not publish until vetted by a knowledgeable member of the tradition.",
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
        "Private / personal study, draws on copyrighted sources. Owner-only; not for publication.",
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

  // Money & Property. Course #1 of the Asset Recovery series
  // (docs/asset-recovery-course-brief.md). Legal accuracy is the load-bearing constraint here:
  // every state-specific figure is cited to the statute and dated IN THE LESSON, and the course
  // teaches a research method rather than a national summary table, because a table goes stale
  // silently. It is explicitly not legal advice and it makes no earnings claims.
  await db
    .insert(schema.courseCategories)
    .values({ tenantId: learnWitus, name: "Money & Property", sortOrder: 13 })
    .onConflictDoNothing();
  // Storytelling. Monodrama I is course #1 of the series (docs/storytelling-curriculum.md), built
  // before the core "how stories work" course on purpose: one performer removes every structural
  // crutch, so all six spine terms are exposed at once. The spine vocabulary was fixed in that doc
  // BEFORE this course was written, so the core can be written last without retrofitting.
  await db
    .insert(schema.courseCategories)
    .values({ tenantId: learnWitus, name: "Storytelling", sortOrder: 14 })
    .onConflictDoNothing();
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "monodrama-writing",
    course: MONODRAMA_WRITING_COURSE,
    category: "Storytelling",
    navigationMode: "linear",
    seriesSlug: "storytelling",
    seriesTitle: "Storytelling",
    seriesOrder: 20,
    seriesCode: "STORY",
    seriesPosition: "P1",
    seriesTrack: "Performed",
  });

  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "monodrama-performing",
    course: MONODRAMA_PERFORMING_COURSE,
    category: "Storytelling",
    navigationMode: "linear",
    seriesSlug: "storytelling",
    seriesTitle: "Storytelling",
    seriesOrder: 21,
    seriesCode: "STORY",
    seriesPosition: "P2",
    seriesTrack: "Performed",
  });

  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "short-form-drama",
    course: SHORT_FORM_DRAMA_COURSE,
    category: "Storytelling",
    navigationMode: "linear",
    seriesSlug: "storytelling",
    seriesTitle: "Storytelling",
    seriesOrder: 22,
    seriesCode: "STORY",
    seriesPosition: "P3",
    seriesTrack: "Performed",
  });

  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "civic-documentation",
    course: CIVIC_DOCUMENTATION_COURSE,
    category: "Storytelling",
    navigationMode: "linear",
    seriesSlug: "storytelling",
    seriesTitle: "Storytelling",
    seriesOrder: 10,
    seriesCode: "STORY",
    seriesPosition: "T1",
    seriesTrack: "True",
  });

  // The CORE of the Storytelling series, written last on purpose (docs/storytelling-curriculum.md)
  // and now coded STORY-00, the entry point. It was seriesOrder 5 while order was a flat integer,
  // which was the BUILD order leaking into the learner's view: every other course in the series
  // uses the six spine terms this one defines, so it is where a learner starts even though it is
  // where the author finished. The tracks below fork from here and run in parallel.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "how-stories-work",
    course: HOW_STORIES_WORK_COURSE,
    category: "Storytelling",
    navigationMode: "linear",
    seriesSlug: "storytelling",
    seriesTitle: "Storytelling",
    seriesOrder: 1,
    seriesCode: "STORY",
    seriesPosition: "00",
  });

  // The True track proper opens here. Civic documentation (order 4) came first because it is the
  // most concrete, but news is the rung of the permission ladder directly above it: news may select
  // and arrange, never invent.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "news-storytelling",
    course: NEWS_STORYTELLING_COURSE,
    category: "Storytelling",
    navigationMode: "linear",
    seriesSlug: "storytelling",
    seriesTitle: "Storytelling",
    seriesOrder: 11,
    seriesCode: "STORY",
    seriesPosition: "T2",
    seriesTrack: "True",
  });

  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "documentary",
    course: DOCUMENTARY_COURSE,
    category: "Storytelling",
    navigationMode: "linear",
    seriesSlug: "storytelling",
    seriesTitle: "Storytelling",
    seriesOrder: 12,
    seriesCode: "STORY",
    seriesPosition: "T3",
    seriesTrack: "True",
  });

  // Last rung of the True track, and the one that reframes the other three: civic documentation,
  // news and documentary all point outward at an event, while oral history points at a person
  // REMEMBERING, so its primary evidence is memory rather than correspondence to a record.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "oral-history",
    course: ORAL_HISTORY_COURSE,
    category: "Storytelling",
    navigationMode: "linear",
    seriesSlug: "storytelling",
    seriesTitle: "Storytelling",
    seriesOrder: 13,
    seriesCode: "STORY",
    seriesPosition: "T4",
    seriesTrack: "True",
  });

  // The Distributed track, currently one course. Its discipline is the one the other two tracks
  // never face: attention is re-earned every few seconds by someone who did not choose the work.
  // Built on the CONSTRAINT rather than on any platform, because a course about a platform is
  // obsolete in eighteen months and teaches nothing that transfers.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "digital-social-storytelling",
    course: DIGITAL_SOCIAL_STORYTELLING_COURSE,
    category: "Storytelling",
    navigationMode: "linear",
    seriesSlug: "storytelling",
    seriesTitle: "Storytelling",
    seriesOrder: 30,
    seriesCode: "STORY",
    seriesPosition: "D1",
    seriesTrack: "Distributed",
  });

  // The SERIES CAPSTONE, and the only course here that genuinely requires the others: a
  // mockumentary works by exploiting conventions a learner has to already believe in, so taught
  // early it is a gimmick and taught last it explains why documentary conventions persuade at all.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "mockumentary",
    course: MOCKUMENTARY_COURSE,
    category: "Storytelling",
    navigationMode: "linear",
    seriesSlug: "storytelling",
    seriesTitle: "Storytelling",
    seriesOrder: 99,
    seriesCode: "STORY",
    seriesPosition: "99",
  });

  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "surplus-funds-basics",
    course: SURPLUS_FUNDS_BASICS_COURSE,
    category: "Money & Property",
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

  // Chess — how to play (board, pieces, check/mate/stalemate, castling, en passant, promotion,
  // algebraic notation), the FIDE Laws with VERIFIED article numbers (touch-move 4.3; claimed
  // draws 9.2/9.3 vs automatic 9.6.1/9.6.2; clock 6.9; rapid/blitz per Appendices A/B), strategy
  // (opening principles, forks/pins/skewers, discovered attacks, endgames), verified history
  // (chaturanga→shatranj→the c.1475 mad queen; Steinitz 1886; KASPAROV won 1996 4–2 and DEEP BLUE
  // won the 1997 rematch 3½–2½ — kept exactly right; AlphaZero 2017; the Netflix-sourced 2020
  // boom), organized chess (FIDE/US Chess pyramid, Elo, GM/IM/FM/CM norms, Olympiad, Swiss
  // system, chess.com vs Lichess economics), and an HONEST amateur/entrepreneur economy: almost
  // nobody earns a living playing — coaching/scholastic, content, TD/arbiter/organizer, and
  // fair-play work (Carlsen–Niemann stated precisely) are the real map. No invented rates;
  // numbers carry a year + source or were cut.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "chess",
    course: CHESS_COURSE,
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
