import { describe, expect, it } from "vitest";
import {
  CONTACT_MODES,
  DEFAULT_CONTACT_MODE,
  HOUR_MS,
  counterpartView,
  effectiveMode,
  isPingActive,
  isPingDueForEmail,
  mayPing,
  pingBlockReason,
  pingEndsAt,
  pingNextReminderAt,
  remindersDueBy,
  PING_REMINDER_DAYS,
  type ContactMode,
} from "@/lib/contact";

// Parent/teacher contact rules (BAM, 2026-09-20). Two things are pinned exhaustively because BAM
// asked for "all possible combinations": every default crossed with every per-person override, for
// both directions (a parent reaching a teacher, a teacher reaching a parent).

describe("effectiveMode: every default x class rule x person rule combination, both directions", () => {
  const cases: { askerRole: "parent" | "teacher"; field: "parentsMode" | "teachersMode" }[] = [
    { askerRole: "parent", field: "parentsMode" },
    { askerRole: "teacher", field: "teachersMode" },
  ];
  const layers = [null, ...CONTACT_MODES] as (ContactMode | null)[];
  for (const { askerRole, field } of cases) {
    for (const def of CONTACT_MODES) {
      for (const cohortOverride of layers) {
        for (const override of layers) {
          it(`${askerRole} asking; default ${def}, class ${cohortOverride ?? "none"}, person ${override ?? "none"}`, () => {
            const other: ContactMode = def === "direct" ? "school" : "direct";
            const settings = { parentsMode: other, teachersMode: other, [field]: def } as {
              parentsMode: ContactMode;
              teachersMode: ContactMode;
            };
            // Most specific wins: the person rule, then the class rule, then the default FOR THE
            // ASKER'S ROLE (never the other role's default).
            expect(effectiveMode({ settings, override, cohortOverride, askerRole })).toBe(override ?? cohortOverride ?? def);
          });
        }
      }
    }
  }

  it("lets one parent's rule reopen contact inside a class that is closed to parents", () => {
    const settings = { parentsMode: "direct" as const, teachersMode: "request" as const };
    expect(effectiveMode({ settings, override: null, cohortOverride: "school", askerRole: "parent" })).toBe("school");
    expect(effectiveMode({ settings, override: "request", cohortOverride: "school", askerRole: "parent" })).toBe("request");
  });

  it("falls back to 'request' for someone who never chose", () => {
    expect(effectiveMode({ settings: null, override: null, askerRole: "parent" })).toBe(DEFAULT_CONTACT_MODE);
    expect(DEFAULT_CONTACT_MODE).toBe("request");
  });
});

describe("counterpartView", () => {
  it("maps each mode to what the viewer sees", () => {
    expect(counterpartView("direct", true)).toBe("details");
    expect(counterpartView("request", true)).toBe("ask");
    expect(counterpartView("school", true)).toBe("school");
  });

  it("never shows or allows pinging someone who is not a confirmed adult, whatever they chose", () => {
    for (const m of CONTACT_MODES) expect(counterpartView(m, false)).toBe("school");
  });

  it("only 'school' blocks a ping", () => {
    expect(mayPing("details")).toBe(true);
    expect(mayPing("ask")).toBe(true);
    expect(mayPing("school")).toBe(false);
  });
});

describe("ping timing", () => {
  const t0 = new Date("2026-09-20T12:00:00Z");
  const at = (h: number) => new Date(t0.getTime() + h * HOUR_MS);
  const day = (d: number) => at(d * 24);
  const ping = { createdAt: t0, connectedAt: null, emailedAt: null, remindersSent: 0 };

  it("emails on days 2, 4, 8 and 16 (each gap doubles), then never again (BAM, 2026-10-06)", () => {
    expect([...PING_REMINDER_DAYS]).toEqual([2, 4, 8, 16]);
    expect(isPingDueForEmail(ping, at(47.9))).toBe(false);
    expect(isPingDueForEmail(ping, at(48))).toBe(true);
    expect(pingNextReminderAt(ping)?.toISOString()).toBe(day(2).toISOString());
    const after1 = { ...ping, remindersSent: 1, emailedAt: day(2) };
    expect(isPingDueForEmail(after1, day(3.9))).toBe(false);
    expect(isPingDueForEmail(after1, day(4))).toBe(true);
    const after3 = { ...ping, remindersSent: 3, emailedAt: day(8) };
    expect(pingNextReminderAt(after3)?.toISOString()).toBe(day(16).toISOString());
    expect(isPingDueForEmail(after3, day(16))).toBe(true);
    const after4 = { ...ping, remindersSent: 4, emailedAt: day(16) };
    expect(pingNextReminderAt(after4)).toBeNull();
    expect(isPingDueForEmail(after4, day(29))).toBe(false);
  });

  it("counts missed reminders as done, so a late run sends one email, never a burst", () => {
    expect(remindersDueBy(ping, at(47))).toBe(0);
    expect(remindersDueBy(ping, day(2))).toBe(1);
    expect(remindersDueBy(ping, day(10))).toBe(3);
    expect(remindersDueBy(ping, day(29))).toBe(4);
  });

  it("never emails once either person has ended it", () => {
    expect(isPingDueForEmail({ ...ping, connectedAt: at(10) }, day(3))).toBe(false);
    expect(isPingDueForEmail({ ...ping, remindersSent: 2, connectedAt: day(5) }, day(9))).toBe(false);
  });

  it("ends on its own after 30 days, and is never emailed after that", () => {
    expect(pingEndsAt(ping).toISOString()).toBe(day(30).toISOString());
    expect(isPingActive(ping, at(30 * 24 - 1))).toBe(true);
    expect(isPingActive(ping, day(30))).toBe(false);
    expect(isPingDueForEmail({ ...ping, remindersSent: 3 }, day(31))).toBe(false);
    expect(isPingActive({ ...ping, connectedAt: at(1) }, at(2))).toBe(false);
  });

  it("allows one open ping per triple and one new ping a day", () => {
    expect(pingBlockReason([], at(0))).toBeNull();
    expect(pingBlockReason([ping], at(5))).toMatch(/already asked/);
    expect(pingBlockReason([{ ...ping, connectedAt: at(1) }], at(5))).toMatch(/less than a day/);
    expect(pingBlockReason([{ ...ping, connectedAt: at(1) }], at(25))).toBeNull();
  });
});
