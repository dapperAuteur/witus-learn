import { describe, expect, it } from "vitest";
import { teacherGrantError, teacherRemoveError } from "@/lib/school-teachers";

// Making someone a teacher of a school (/admin/teachers, decided 2026-09-20). The adult rule has to
// hold here exactly as it does for assigning a class teacher, or this page becomes the way around it.

describe("teacherGrantError", () => {
  it("allows a confirmed adult learner or a newcomer", () => {
    expect(teacherGrantError({ currentRole: "learner", passesAgeRule: true, status: "adult" })).toBeNull();
    expect(teacherGrantError({ currentRole: null, passesAgeRule: true, status: "adult" })).toBeNull();
  });

  it("refuses anyone who fails the adult rule, with a reason that matches the case", () => {
    expect(teacherGrantError({ currentRole: null, passesAgeRule: false, status: "unattested" })).toMatch(/18 or older/);
    expect(teacherGrantError({ currentRole: null, passesAgeRule: false, status: "minor_signal" })).toMatch(/student/);
  });

  it("never downgrades or duplicates a role", () => {
    expect(teacherGrantError({ currentRole: "brand_admin", passesAgeRule: true, status: "adult" })).toMatch(/admin/);
    expect(teacherGrantError({ currentRole: "instructor", passesAgeRule: true, status: "adult" })).toMatch(/already a teacher/);
  });
});

describe("teacherRemoveError", () => {
  it("only ever removes a teacher, never an admin or a learner", () => {
    expect(teacherRemoveError("instructor")).toBeNull();
    expect(teacherRemoveError("brand_admin")).toMatch(/Admins/);
    expect(teacherRemoveError("learner")).toMatch(/isn't a teacher/);
    expect(teacherRemoveError(null)).toMatch(/isn't a teacher/);
  });
});
