import { randomBytes, randomUUID, scryptSync } from "node:crypto";
import { neonConfig, Pool } from "@neondatabase/serverless";
import ws from "ws";
import { resolveDbUrl } from "./db-url";

// Dev-only end-to-end exercise of avatar + PIN kid login. Seeds a throwaway parent →
// managed child (avatar+PIN) → cohort with class code (child enrolled) directly in the
// DB, then drives the real HTTP endpoints on a running dev server (BASE below) to prove:
//   1. avatar list only appears for a valid class code (enumeration check)
//   2. wrong PIN 5x → lockout; a 6th (even correct) try is rejected while locked
//   3. correct PIN (after clearing the lock) → 200 + a Set-Cookie session token
//   4. that session cookie resolves to the CHILD via GET /api/family/children (getSession
//      accepts it) yet is low-privilege — it is NOT a platform owner / brand admin
//   5. the pin_hash column never equals the plaintext PIN
//
// Run: pnpm dev (bvc.localhost:3040) in one shell, then
//      pnpm tsx --env-file=.env.local scripts/dev-kid-login-exercise.ts
neonConfig.webSocketConstructor = ws;

const BASE = "http://bvc.localhost:3040";
const HOST = "bvc.localhost:3040";
const BVC_TENANT = "fb7bacd9-6042-4ec9-818b-bc5e61f97f5f";
const CORRECT_PIN = "8213";
const CLASS_CODE = "KIDTST";

// Mirror src/lib/kid-pin.ts hashPin exactly (salt:hash, both hex, scrypt keylen 64).
function hashPinInline(pin: string): string {
  const salt = randomBytes(16);
  const derived = scryptSync(pin, salt, 64);
  return `${salt.toString("hex")}:${derived.toString("hex")}`;
}

function getSetCookie(res: Response): string[] {
  // Node fetch: getSetCookie() returns the array of Set-Cookie headers.
  const anyHeaders = res.headers as unknown as { getSetCookie?: () => string[] };
  return anyHeaders.getSetCookie ? anyHeaders.getSetCookie() : [];
}

async function main() {
  const pool = new Pool({ connectionString: resolveDbUrl(true) });

  const parentId = `kidtst-parent-${randomUUID().slice(0, 8)}`;
  const childId = `kidtst-child-${randomUUID().slice(0, 8)}`;
  const cohortId = randomUUID();
  const pinHash = hashPinInline(CORRECT_PIN);

  console.log("== SEED ==");
  console.log("parent:", parentId, "child:", childId, "classCode:", CLASS_CODE);

  // Clean any prior run's class code collision.
  await pool.query("update cohorts set class_code=null where class_code=$1", [CLASS_CODE]);

  await pool.query(
    "insert into users (id,email,email_verified,name) values ($1,$2,false,$3)",
    [parentId, `${parentId}@no-login.invalid`, "KidTest Parent"],
  );
  await pool.query("insert into user_profiles (user_id) values ($1)", [parentId]);

  await pool.query(
    "insert into users (id,email,email_verified,name) values ($1,$2,false,$3)",
    [childId, `${childId}@no-login.invalid`, "KidTest Child"],
  );
  await pool.query(
    "insert into user_profiles (user_id,display_name,managed_by_user_id,login_method,avatar_key,pin_hash,pin_set_at) values ($1,$2,$3,'avatar_pin','fox',$4,now())",
    [childId, "KidTest Child", parentId, pinHash],
  );
  await pool.query(
    "insert into guardians (tenant_id,guardian_user_id,student_user_id) values ($1,$2,$3)",
    [BVC_TENANT, parentId, childId],
  );
  await pool.query(
    "insert into cohorts (id,tenant_id,name,owner_id,class_code) values ($1,$2,$3,$4,$5)",
    [cohortId, BVC_TENANT, "KidTest Class", parentId, CLASS_CODE],
  );
  await pool.query(
    "insert into cohort_members (tenant_id,cohort_id,user_id) values ($1,$2,$3)",
    [BVC_TENANT, cohortId, childId],
  );

  // --- Check 5 (no plaintext): the stored hash must not contain the PIN. ---
  const hashRow = await pool.query("select pin_hash from user_profiles where user_id=$1", [childId]);
  const storedHash: string = hashRow.rows[0].pin_hash;
  console.log("\n== CHECK: no plaintext PIN in DB ==");
  console.log("pin_hash:", storedHash.slice(0, 24) + "…", "contains plaintext PIN?", storedHash.includes(CORRECT_PIN));

  const h = { host: HOST, "x-forwarded-host": HOST, "content-type": "application/json", origin: BASE };

  // --- Check 1: avatar enumeration ---
  console.log("\n== CHECK: avatar list only for valid class code ==");
  const badList = await fetch(`${BASE}/api/kid-login/avatars?classCode=NOPE99`, { headers: h });
  const badListJson = await badList.json();
  console.log("bad code  →", badList.status, JSON.stringify(badListJson));
  const goodList = await fetch(`${BASE}/api/kid-login/avatars?classCode=${CLASS_CODE}`, { headers: h });
  const goodListJson = await goodList.json();
  console.log("good code →", goodList.status, JSON.stringify(goodListJson));

  // --- Check 2: wrong PIN 5x → lockout ---
  console.log("\n== CHECK: PIN brute-force lockout ==");
  for (let i = 1; i <= 6; i++) {
    const res = await fetch(`${BASE}/api/kid-login`, {
      method: "POST",
      headers: h,
      body: JSON.stringify({ classCode: CLASS_CODE, childUserId: childId, pin: "0000" }),
    });
    const body = await res.json().catch(() => ({}));
    console.log(`wrong attempt ${i}:`, res.status, JSON.stringify(body));
  }
  const lockRow = await pool.query(
    "select attempts, locked_until from kid_login_attempts where child_user_id=$1",
    [childId],
  );
  console.log("attempts row:", JSON.stringify(lockRow.rows[0]));

  // Correct PIN WHILE LOCKED should still fail.
  const whileLocked = await fetch(`${BASE}/api/kid-login`, {
    method: "POST",
    headers: h,
    body: JSON.stringify({ classCode: CLASS_CODE, childUserId: childId, pin: CORRECT_PIN }),
  });
  console.log("correct PIN while locked:", whileLocked.status, "(expect 401)");

  // --- Clear the lock, then correct PIN → success + session cookie ---
  console.log("\n== CHECK: correct PIN mints a child session ==");
  await pool.query("delete from kid_login_attempts where child_user_id=$1", [childId]);
  const ok = await fetch(`${BASE}/api/kid-login`, {
    method: "POST",
    headers: h,
    body: JSON.stringify({ classCode: CLASS_CODE, childUserId: childId, pin: CORRECT_PIN }),
  });
  const okBody = await ok.json().catch(() => ({}));
  console.log("correct PIN:", ok.status, JSON.stringify(okBody));
  const cookies = getSetCookie(ok);
  console.log("Set-Cookie count:", cookies.length);
  const sessionCookie = cookies.find((c) => c.includes("session_token"));
  console.log("session_token cookie present?", !!sessionCookie);
  if (sessionCookie) console.log("cookie (name+attrs):", sessionCookie.split(";").map((s) => s.trim()).slice(0, 5).join(" ; "));

  // Confirm a sessions row was created for the CHILD.
  const sess = await pool.query("select user_id, expires_at from sessions where user_id=$1 order by created_at desc limit 1", [childId]);
  console.log("sessions row for child:", JSON.stringify(sess.rows[0]));

  // --- Check: login-CSRF — a cross-origin POST (even with the CORRECT PIN) is rejected ---
  console.log("\n== CHECK: cross-origin login-CSRF is blocked ==");
  await pool.query("delete from kid_login_attempts where child_user_id=$1", [childId]);
  const crossOrigin = await fetch(`${BASE}/api/kid-login`, {
    method: "POST",
    headers: { ...h, origin: "https://evil.example" },
    body: JSON.stringify({ classCode: CLASS_CODE, childUserId: childId, pin: CORRECT_PIN }),
  });
  const crossBody = await crossOrigin.json().catch(() => ({}));
  const crossCookies = getSetCookie(crossOrigin);
  console.log("cross-origin correct PIN:", crossOrigin.status, JSON.stringify(crossBody));
  console.log("cross-origin Set-Cookie count:", crossCookies.length, "(must be 0, no session leaked)");
  const crossAttempts = await pool.query(
    "select attempts from kid_login_attempts where child_user_id=$1",
    [childId],
  );
  console.log(
    "attempts row after cross-origin:",
    JSON.stringify(crossAttempts.rows[0] ?? null),
    "(null/0 ⇒ blocked BEFORE the PIN check, so it can't burn rate-limit budget)",
  );

  // --- Check 4: session resolves to child + is low-privilege ---
  console.log("\n== CHECK: minted session is child-scoped + low privilege ==");
  const cookieHeader = cookies.map((c) => c.split(";")[0]).join("; ");
  const authH = { host: HOST, "x-forwarded-host": HOST, cookie: cookieHeader };

  // getSession accepts the cookie: a plain session-gated GET returns 200 (not 401).
  const sessionGated = await fetch(`${BASE}/api/cohorts`, { method: "GET", headers: authH });
  console.log("GET /api/cohorts as child →", sessionGated.status, "(200 ⇒ getSession accepted the minted cookie)");

  // But an admin-gated GET must REJECT the child (403), proving low privilege — a kid
  // can't reach brand-admin surfaces even with a valid session.
  const adminGated = await fetch(`${BASE}/api/admin/promo-codes`, { method: "GET", headers: authH });
  console.log("GET /api/admin/promo-codes as child →", adminGated.status, "(expect 403, isTenantAdmin rejects the child)");

  // Corroborate in the DB: the child is neither platform owner nor a brand admin.
  const priv = await pool.query(
    "select p.is_platform_owner, (select role from tenant_memberships m where m.user_id=$1 and m.tenant_id=$2) as role from user_profiles p where p.user_id=$1",
    [childId, BVC_TENANT],
  );
  console.log("child privilege row:", JSON.stringify(priv.rows[0]), "(is_platform_owner must be false, role must be null)");

  console.log("\n== CLEANUP ==");
  await pool.query("delete from sessions where user_id=$1", [childId]);
  await pool.query("delete from kid_login_attempts where child_user_id=$1", [childId]);
  await pool.query("delete from cohort_members where cohort_id=$1", [cohortId]);
  await pool.query("delete from cohorts where id=$1", [cohortId]);
  await pool.query("delete from guardians where student_user_id=$1", [childId]);
  await pool.query("delete from user_profiles where user_id in ($1,$2)", [childId, parentId]);
  await pool.query("delete from users where id in ($1,$2)", [childId, parentId]);
  console.log("cleaned up throwaway rows.");

  await pool.end();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
