import { describe, expect, it } from "vitest";
import {
  adultStatus,
  exceptionGrantError,
  mayAttestAdult,
  mayUseContact,
  minorSignals,
  passesTeacherAgeRule,
  teachBlockReason,
  type AdultFacts,
} from "@/lib/teacher-age";

// The "teachers must be adults" rule (decided 2026-09-20). These predicates gate cohort creation,
// teacher assignment, and parent/teacher contact, so both directions are pinned: each must say yes
// where it should and no where it should, including the cases where a structural fact outranks
// what the person ticked.

const base: AdultFacts = {
  attestedAt: null,
  isManagedChild: false,
  isAvatarPinLogin: false,
  isLinkedStudent: false,
};
const attested = { ...base, attestedAt: new Date("2026-09-01") };

describe("adultStatus", () => {
  it("is 'adult' only for an attested account with no minor signal", () => {
    expect(adultStatus(attested)).toBe("adult");
    expect(adultStatus(base)).toBe("unattested");
  });

  it("lets every structural signal outrank an attestation", () => {
    expect(adultStatus({ ...attested, isManagedChild: true })).toBe("minor_signal");
    expect(adultStatus({ ...attested, isAvatarPinLogin: true })).toBe("minor_signal");
    expect(adultStatus({ ...attested, isLinkedStudent: true })).toBe("minor_signal");
  });

  it("lists every signal present, and refuses an attestation when any is", () => {
    const all = { ...base, isManagedChild: true, isAvatarPinLogin: true, isLinkedStudent: true };
    expect(minorSignals(all)).toEqual(["managed_child", "avatar_pin_login", "linked_student"]);
    expect(mayAttestAdult(all)).toBe(false);
    expect(mayAttestAdult(base)).toBe(true);
  });
});

describe("passesTeacherAgeRule", () => {
  it("requires a confirmed adult while the rule is on", () => {
    expect(passesTeacherAgeRule({ status: "adult", ruleOn: true, hasException: false })).toBe(true);
    expect(passesTeacherAgeRule({ status: "unattested", ruleOn: true, hasException: false })).toBe(false);
    expect(passesTeacherAgeRule({ status: "minor_signal", ruleOn: true, hasException: false })).toBe(false);
  });

  it("lets an owner exception through, and lets everyone through when the rule is off", () => {
    expect(passesTeacherAgeRule({ status: "minor_signal", ruleOn: true, hasException: true })).toBe(true);
    expect(passesTeacherAgeRule({ status: "unattested", ruleOn: false, hasException: false })).toBe(true);
  });

  it("explains the block in words that match the case", () => {
    expect(teachBlockReason({ status: "unattested", ruleOn: true, hasException: false })).toMatch(/18 or older/);
    expect(teachBlockReason({ status: "minor_signal", ruleOn: true, hasException: false })).toMatch(/student/);
    expect(teachBlockReason({ status: "adult", ruleOn: true, hasException: false })).toBeNull();
  });
});

describe("mayUseContact", () => {
  it("never counts an exception or the switch: only a real adult may use contact", () => {
    expect(mayUseContact("adult")).toBe(true);
    expect(mayUseContact("unattested")).toBe(false);
    expect(mayUseContact("minor_signal")).toBe(false);
  });
});

describe("exceptionGrantError", () => {
  const target = { email: "Tutor@Example.com", status: "unattested" as const, signals: [], hasException: false };
  const full = {
    reason: "Peer tutor for the Saturday algebra group, approved by the school.",
    confirmEmail: "tutor@example.com",
    acks: { teachUnverified: true, checkedOutside: true, noContact: true },
  };

  it("accepts a complete grant, matching the typed email case-insensitively", () => {
    expect(exceptionGrantError(full, target)).toBeNull();
  });

  it("refuses when any acknowledgement is missing", () => {
    expect(exceptionGrantError({ ...full, acks: { teachUnverified: true, checkedOutside: true } }, target)).toMatch(/every acknowledgement/);
  });

  it("requires the extra acknowledgement when the account shows a minor signal", () => {
    const minor = { ...target, status: "minor_signal" as const, signals: ["linked_student" as const] };
    expect(exceptionGrantError(full, minor)).toMatch(/signs of belonging to a child/);
    expect(exceptionGrantError({ ...full, minorSignalAck: true }, minor)).toBeNull();
  });

  it("refuses a short reason, a mistyped email, an adult, and a duplicate", () => {
    expect(exceptionGrantError({ ...full, reason: "because" }, target)).toMatch(/reason/);
    expect(exceptionGrantError({ ...full, confirmEmail: "tutor@example.org" }, target)).toMatch(/does not match/);
    expect(exceptionGrantError(full, { ...target, status: "adult" })).toMatch(/no exception is needed/);
    expect(exceptionGrantError(full, { ...target, hasException: true })).toMatch(/already has/);
  });
});
