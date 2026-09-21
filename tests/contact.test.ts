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
  pingEmailDueAt,
  type ContactMode,
} from "@/lib/contact";

// Parent/teacher contact rules (BAM, 2026-09-20). Two things are pinned exhaustively because BAM
// asked for "all possible combinations": every default crossed with every per-person override, for
// both directions (a parent reaching a teacher, a teacher reaching a parent).

describe("effectiveMode: every default x override combination, both directions", () => {
  const cases: { askerRole: "parent" | "teacher"; field: "parentsMode" | "teachersMode" }[] = [
    { askerRole: "parent", field: "parentsMode" },
    { askerRole: "teacher", field: "teachersMode" },
  ];
  for (const { askerRole, field } of cases) {
    for (const def of CONTACT_MODES) {
      for (const override of [null, ...CONTACT_MODES] as (ContactMode | null)[]) {
        it(`${askerRole} asking; default ${def}, override ${override ?? "none"}`, () => {
          const other: ContactMode = def === "direct" ? "school" : "direct";
          const settings = { parentsMode: other, teachersMode: other, [field]: def } as {
            parentsMode: ContactMode;
            teachersMode: ContactMode;
          };
          // The override wins whenever present; otherwise the default FOR THE ASKER'S ROLE applies,
          // never the other role's default.
          expect(effectiveMode({ settings, override, askerRole })).toBe(override ?? def);
        });
      }
    }
  }

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
  const ping = { createdAt: t0, connectedAt: null, emailedAt: null };

  it("is emailed only after 48 hours, once, and never after the asker says they connected", () => {
    expect(isPingDueForEmail(ping, at(47.9))).toBe(false);
    expect(isPingDueForEmail(ping, at(48))).toBe(true);
    expect(isPingDueForEmail({ ...ping, emailedAt: at(49) }, at(50))).toBe(false);
    expect(isPingDueForEmail({ ...ping, connectedAt: at(10) }, at(60))).toBe(false);
    expect(pingEmailDueAt(ping).toISOString()).toBe(at(48).toISOString());
  });

  it("stops showing after 14 days or once connected, and is never emailed after that", () => {
    expect(isPingActive(ping, at(14 * 24 - 1))).toBe(true);
    expect(isPingActive(ping, at(14 * 24))).toBe(false);
    expect(isPingDueForEmail(ping, at(14 * 24 + 1))).toBe(false);
    expect(isPingActive({ ...ping, connectedAt: at(1) }, at(2))).toBe(false);
  });

  it("allows one open ping per triple and one new ping a day", () => {
    expect(pingBlockReason([], at(0))).toBeNull();
    expect(pingBlockReason([ping], at(5))).toMatch(/already asked/);
    expect(pingBlockReason([{ ...ping, connectedAt: at(1) }], at(5))).toMatch(/less than a day/);
    expect(pingBlockReason([{ ...ping, connectedAt: at(1) }], at(25))).toBeNull();
  });
});
