import { cookies } from "next/headers";
import { createHmac, timingSafeEqual } from "crypto";

const COOKIE_NAME = "owner_session";
const EXPIRY_DAYS = 7;

function getSecret(): string {
  const secret = process.env.OWNER_SESSION_SECRET;
  if (!secret || secret.length < 16) {
    throw new Error("OWNER_SESSION_SECRET must be set and at least 16 characters");
  }
  return secret;
}

function sign(expiry: number): string {
  const secret = getSecret();
  const payload = String(expiry);
  const hmac = createHmac("sha256", secret).update(payload).digest("hex");
  return `${payload}.${hmac}`;
}

function verify(value: string): boolean {
  try {
    const secret = getSecret();
    const [payload, hmac] = value.split(".");
    if (!payload || !hmac) return false;
    const expiry = parseInt(payload, 10);
    if (Number.isNaN(expiry) || expiry < Date.now()) return false;
    const expected = createHmac("sha256", secret).update(payload).digest("hex");
    if (hmac.length !== expected.length) return false;
    return timingSafeEqual(Buffer.from(hmac, "hex"), Buffer.from(expected, "hex"));
  } catch {
    return false;
  }
}

export async function setOwnerSession(): Promise<void> {
  const expiry = Date.now() + EXPIRY_DAYS * 24 * 60 * 60 * 1000;
  const value = sign(expiry);
  const store = await cookies();
  store.set(COOKIE_NAME, value, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: EXPIRY_DAYS * 24 * 60 * 60,
    path: "/",
  });
}

export async function getOwnerSession(): Promise<boolean> {
  const store = await cookies();
  const value = store.get(COOKIE_NAME)?.value;
  if (!value) return false;
  return verify(value);
}

export async function clearOwnerSession(): Promise<void> {
  const store = await cookies();
  store.delete(COOKIE_NAME);
}
