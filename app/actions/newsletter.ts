"use server";

import { createServiceRoleClient } from "@/lib/supabase/server";

export type NewsletterState = { ok: boolean; error?: string; message?: string };

export async function subscribeNewsletter(
  _prev: NewsletterState,
  formData: FormData
): Promise<NewsletterState> {
  const email = (formData.get("email") as string)?.trim() ?? "";
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  const supabase = createServiceRoleClient();
  if (!supabase) {
    return { ok: false, error: "Newsletter signup is not configured." };
  }

  // @ts-expect-error - table from migration 005
  const { error } = await supabase.from("newsletter_signups").insert({
    first_name: (formData.get("first_name") as string)?.trim() || null,
    last_name: (formData.get("last_name") as string)?.trim() || null,
    mobile: (formData.get("mobile") as string)?.trim() || null,
    email,
  });

  if (error) {
    if (error.code === "23505") return { ok: true, message: "You're already subscribed. Thanks!" };
    console.error("Newsletter signup error:", error);
    return { ok: false, error: "Could not subscribe. Please try again." };
  }
  return { ok: true, message: "Thanks for subscribing to our newsletter!" };
}
