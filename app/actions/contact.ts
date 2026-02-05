"use server";

import { createServiceRoleClient } from "@/lib/supabase/server";

export type ContactFormState = { ok: boolean; error?: string; message?: string };

export async function submitContactForm(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = (formData.get("name") as string)?.trim() ?? "";
  const email = (formData.get("email") as string)?.trim() ?? "";
  const subject = (formData.get("subject") as string)?.trim() ?? "";
  const message = (formData.get("message") as string)?.trim() ?? "";

  if (!name || name.length < 2) {
    return { ok: false, error: "Please enter your name (at least 2 characters)." };
  }
  if (!email) {
    return { ok: false, error: "Please enter your email address." };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }
  if (!subject || subject.length < 3) {
    return { ok: false, error: "Please enter a subject (at least 3 characters)." };
  }
  if (!message || message.length < 10) {
    return { ok: false, error: "Please enter your message (at least 10 characters)." };
  }

  const supabase = createServiceRoleClient();
  if (!supabase) {
    return {
      ok: false,
      error: "Contact form is not configured. Please email us directly at info@shembgroup.com.",
    };
  }

  // @ts-expect-error - Supabase client without Database generic; contact_submissions table exists via migration 003
  const { error } = await supabase.from("contact_submissions").insert({
    name,
    email,
    subject,
    message,
  });

  if (error) {
    console.error("Contact form insert error:", error);
    return {
      ok: false,
      error: "We couldn't send your message. Please try again or email us at info@shembgroup.com.",
    };
  }

  return { ok: true, message: "Thank you. We've received your message and will get back to you soon." };
}
