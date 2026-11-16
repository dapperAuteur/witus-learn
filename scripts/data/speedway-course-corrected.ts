// The Speedway course as seeded: the generated, gitignored scripts/data/speedway-course.ts with the
// tracked corrections in scripts/lib/speedway-corrections.ts applied on top. The seeder imports this
// module, so the seed registry (scripts/lib/seed-registry.ts) and every lint guard that loads courses
// through it read the corrected text. On a clone without the generated module this import fails and
// the registry reports the course as unreadable, exactly as it did before (excluded from tsc in
// tsconfig.json for the same reason as scripts/seed-speedway.ts).

import { SPEEDWAY_COURSE as GENERATED_SPEEDWAY_COURSE } from "./speedway-course";
import { applySpeedwayCorrections } from "../lib/speedway-corrections";

export const SPEEDWAY_COURSE = applySpeedwayCorrections(GENERATED_SPEEDWAY_COURSE);
