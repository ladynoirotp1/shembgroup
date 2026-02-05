"use server";

import { redirect } from "next/navigation";
import { clearOwnerSession } from "@/lib/owner-session";

export async function ownerLogoutAction(): Promise<never> {
  await clearOwnerSession();
  redirect("/owner-login");
}
