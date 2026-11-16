import { describe, expect, it, vi } from "vitest";

/**
 * /course/speedway answered 500 on production (2026-11-16): the route passed the slug to
 * getCourseById, `courses.id` is a uuid column, and Postgres threw "invalid input syntax for type
 * uuid". A slug (here one that exists on another tenant) must resolve to null so the page 404s.
 * The fake db throws on any query, which proves a non-uuid never reaches Postgres.
 */
const queried = vi.fn();
vi.mock("@/db/client", () => ({
  db: {
    select: () => {
      queried();
      throw new Error('invalid input syntax for type uuid: "speedway"');
    },
  },
}));

import { getCourseById } from "@/db/queries/catalog";

describe("getCourseById with a value that is not a uuid", () => {
  it("returns null for a slug that exists on another tenant, without querying", async () => {
    await expect(getCourseById("tenant-learn", "speedway")).resolves.toBeNull();
    expect(queried).not.toHaveBeenCalled();
  });

  it("returns null for empty and malformed ids", async () => {
    await expect(getCourseById("t", "")).resolves.toBeNull();
    await expect(getCourseById("t", "1234")).resolves.toBeNull();
    expect(queried).not.toHaveBeenCalled();
  });

  it("still queries for a real uuid", async () => {
    await expect(getCourseById("t", "3f2b8c1e-5a4d-4e6f-9b7a-1c2d3e4f5a6b")).rejects.toThrow();
    expect(queried).toHaveBeenCalledTimes(1);
  });
});
