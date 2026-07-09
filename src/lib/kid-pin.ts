import "server-only";
import { randomBytes, scrypt, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";

// PIN hashing for avatar+PIN kid login (POST /api/kid-login). A 4-6 digit PIN is weak by
// design (it's meant to be typeable by a young child), so this module is the mitigation:
// a real KDF (scrypt, salted, tunable cost) — never plaintext, never a fast hash like
// SHA-256/MD5 — plus a constant-time compare so response timing can't leak a partial
// match. See plans/kid-login-avatar-pin-design.md.

const scryptAsync = promisify(scrypt);
const KEY_LENGTH = 64;
const PIN_PATTERN = /^\d{4,6}$/;

// Common trivial PINs, blocked at set-time (defense in depth — the real mitigation is
// rate-limiting in src/db/queries/kid-login.ts, since a determined attacker with the
// class code + child's avatar can still try these first regardless of this blocklist).
const TRIVIAL_PINS = new Set([
  "0000", "1111", "2222", "3333", "4444", "5555", "6666", "7777", "8888", "9999",
  "1234", "4321", "0123", "1212", "123456", "654321", "000000", "111111",
]);

export function isValidPinFormat(pin: string): boolean {
  return PIN_PATTERN.test(pin);
}

export function isTrivialPin(pin: string): boolean {
  return TRIVIAL_PINS.has(pin);
}

/** Hash a PIN for storage. Returns "salt:hash" (both hex) — never the plaintext PIN. */
export async function hashPin(pin: string): Promise<string> {
  const salt = randomBytes(16);
  const derived = (await scryptAsync(pin, salt, KEY_LENGTH)) as Buffer;
  return `${salt.toString("hex")}:${derived.toString("hex")}`;
}

/** Constant-time PIN check against a stored "salt:hash". Never throws on malformed
 *  input/stored values — returns false so a corrupt row fails closed, not open. */
export async function verifyPin(pin: string, stored: string): Promise<boolean> {
  const parts = stored.split(":");
  if (parts.length !== 2) return false;
  const [saltHex, hashHex] = parts;
  if (!saltHex || !hashHex) return false;

  try {
    const salt = Buffer.from(saltHex, "hex");
    const expected = Buffer.from(hashHex, "hex");
    const derived = (await scryptAsync(pin, salt, expected.length)) as Buffer;
    if (derived.length !== expected.length) return false;
    return timingSafeEqual(derived, expected);
  } catch {
    return false;
  }
}
