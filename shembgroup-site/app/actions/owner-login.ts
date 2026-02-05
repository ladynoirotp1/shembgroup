"use server";

import { setOwnerSession } from "@/lib/owner-session";

const OWNER_EMAIL = process.env.OWNER_EMAIL?.toLowerCase().trim();
const OWNER_PASSWORD = process.env.OWNER_PASSWORD;

export async function ownerLoginAction(
  email: string,
  password: string
): Promise<{ ok: boolean; error?: string }> {
  if (!OWNER_EMAIL || !OWNER_PASSWORD) {
    return { ok: false, error: "Owner login is not configured." };
  }

  if (email.toLowerCase().trim() !== OWNER_EMAIL) {
    return { ok: false, error: "Invalid email or password." };
  }

  if (password !== OWNER_PASSWORD) {
    return { ok: false, error: "Invalid email or password." };
  }

  try {
    await setOwnerSession();
    return { ok: true };
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Session error";
    return { ok: false, error: msg };
  }
}
