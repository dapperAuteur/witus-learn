import { customType } from "drizzle-orm/pg-core";

// Case-insensitive text for app-owned identifiers (tenant slug, domain host,
// username, category name). Requires `CREATE EXTENSION citext` — done in
// scripts/migrate.ts before migrations run.
export const citext = customType<{ data: string; driverData: string }>({
  dataType() {
    return "citext";
  },
});

// pgvector column for lesson embeddings (Phase 6). Requires `CREATE EXTENSION
// vector`. Stored/retrieved as the pgvector text form `[a,b,c]`.
export const vector = customType<{ data: number[]; driverData: string; config: { dimensions: number } }>({
  dataType(config) {
    return `vector(${config?.dimensions ?? 768})`;
  },
  toDriver(value: number[]) {
    return `[${value.join(",")}]`;
  },
  fromDriver(value: string) {
    return value
      .slice(1, -1)
      .split(",")
      .map((n) => Number(n));
  },
});
