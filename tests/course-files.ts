import type { AuthoredCourse } from "../scripts/data/authored-course";

// Every committed course file, loaded once for the tests that must see the WHOLE catalog rather
// than a hand-picked list of imports (reviewer sign-off v2, plans/97 G4). A hand-picked list is how
// the needs snapshot ended up covering 5 of the 16 files that carry "Before release" markers.
//
// It walks `scripts/data/**/*-course.ts` (Vite's import.meta.glob, so no filesystem code here) and
// keeps every export shaped like an AuthoredCourse. That includes courses seeded inside a loop
// (`course: r.course`), which the seed registry's static parser cannot name. A module that fails to
// import (one that reaches a gitignored generated file) is reported, not thrown, so a fresh clone
// still runs the suite; the callers decide whether an unreadable file is a failure.

export interface CourseFile {
  /** Repo-relative path, e.g. "scripts/data/sound-craft-course.ts". */
  file: string;
  /** Export name, e.g. "SOUND_CRAFT_COURSE". */
  exportName: string;
  course: AuthoredCourse;
}

const modules = import.meta.glob("../scripts/data/**/*-course.ts");

const isCourse = (v: unknown): v is AuthoredCourse =>
  !!v && typeof v === "object" && Array.isArray((v as AuthoredCourse).lessons);

let cached: Promise<{ courses: CourseFile[]; unreadable: string[] }> | null = null;

export function loadAllCourseFiles(): Promise<{ courses: CourseFile[]; unreadable: string[] }> {
  cached ??= (async () => {
    const courses: CourseFile[] = [];
    const unreadable: string[] = [];
    for (const [path, load] of Object.entries(modules).sort(([a], [b]) => a.localeCompare(b))) {
      const file = path.replace(/^\.\.\//, "");
      let mod: Record<string, unknown>;
      try {
        mod = (await load()) as Record<string, unknown>;
      } catch {
        unreadable.push(file);
        continue;
      }
      for (const [exportName, value] of Object.entries(mod)) {
        if (isCourse(value)) courses.push({ file, exportName, course: value });
      }
    }
    return { courses, unreadable };
  })();
  return cached;
}
