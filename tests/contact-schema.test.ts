import { describe, expect, it } from "vitest";
import { getTableColumns } from "drizzle-orm";
import { contactOverrides, contactPings, contactSettings } from "@/db/schema/contact";

// The no-inbox rule (CLAUDE.md), as a test. Parent/teacher contact is a SIGNAL: a ping has no body,
// no subject, and no thread. The day someone adds one, moderation, retention and disclosure
// obligations arrive with it, and this feature becomes the messaging product BAM ruled out
// (plans/app-improvements/messaging-parents-teachers.md). If this test fails because you added a
// column, the fix is not to update the list: it is to take the decision back to BAM.

const columnNames = (t: Parameters<typeof getTableColumns>[0]) => Object.values(getTableColumns(t)).map((c) => c.name).sort();

describe("contact tables carry no message", () => {
  it("contact_pings has exactly the columns of a signal", () => {
    expect(columnNames(contactPings)).toEqual(
      [
        "cohort_id",
        "connected_at",
        "created_at",
        "emailed_at",
        "from_role",
        "from_user_id",
        "id",
        "student_user_id",
        "tenant_id",
        "to_user_id",
      ].sort(),
    );
  });

  it("no contact table has a message-shaped column", () => {
    const messageish = /(body|message|subject|content|text|reply|thread|comment|read_at|seen_at)/;
    for (const t of [contactPings, contactOverrides, contactSettings]) {
      expect(columnNames(t).filter((n) => messageish.test(n))).toEqual([]);
    }
  });
});
