"use server";

import { createClient, createServiceRoleClient } from "@/lib/supabase/server";
import { getOwnerSession } from "@/lib/owner-session";
import { revalidatePath } from "next/cache";

export type ApprovalStatus = "pending" | "approved" | "rejected";
export type ProfileRole = "client" | "owner";

export type Profile = {
  id: string;
  user_id: string;
  email: string | null;
  company_name: string | null;
  approval_status: ApprovalStatus;
  role: ProfileRole;
  created_at: string;
  updated_at: string;
};

export async function getProfile(): Promise<Profile | null> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return null;

  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("user_id", user.id)
    .single();

  if (error && error.code !== "PGRST116") {
    const code = (error as { code?: string }).code;
    const message = (error as { message?: string }).message;
    console.error(`getProfile error: code=${code} message=${message}`);
    return null;
  }
  return data as Profile | null;
}

/** Create a profile for the current user with pending approval. */
export async function createProfile(companyName?: string | null): Promise<{ ok: boolean; error?: string }> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return { ok: false, error: "Not logged in" };
  }

  const { error } = await supabase.from("profiles").insert({
    user_id: user.id,
    email: user.email ?? null,
    company_name: companyName?.trim() || null,
    approval_status: "pending",
    role: "client",
  });

  if (error) {
    if (error.code === "23505") {
      return { ok: true };
    }
    console.error("createProfile error:", error);
    return { ok: false, error: error.message };
  }

  revalidatePath("/account");
  return { ok: true };
}

const OWNER_EMAIL = process.env.OWNER_EMAIL?.toLowerCase().trim();

/** Ensure the current user has an owner profile if their email matches OWNER_EMAIL. */
export async function ensureOwnerProfile(): Promise<boolean> {
  if (!OWNER_EMAIL) return false;
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user || user.email?.toLowerCase() !== OWNER_EMAIL) return false;

  const { error } = await supabase
    .from("profiles")
    .upsert(
      {
        user_id: user.id,
        email: user.email ?? null,
        company_name: "Owner",
        approval_status: "approved",
        role: "owner",
      },
      { onConflict: "user_id" }
    );

  if (error) {
    const code = (error as { code?: string }).code;
    const message = (error as { message?: string }).message;
    console.error(`ensureOwnerProfile error: code=${code} message=${message}`);
    return false;
  }
  revalidatePath("/admin");
  revalidatePath("/account");
  return true;
}

/** Where to redirect after login: owner → /admin, else → /account. */
export async function getLoginRedirect(): Promise<{ redirect: string }> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { redirect: "/login" };

  if (OWNER_EMAIL && user.email?.toLowerCase() === OWNER_EMAIL) {
    await ensureOwnerProfile();
    return { redirect: "/admin" };
  }
  return { redirect: "/account" };
}

/** For header: return current user's role so we can show Admin link. */
export async function getMyRole(): Promise<ProfileRole | null> {
  const profile = await getProfile();
  return profile?.role ?? null;
}

/** Owner only: list profiles pending approval (cookie owner or Supabase owner). */
export async function getPendingProfiles(): Promise<Profile[]> {
  const isOwnerSession = await getOwnerSession();
  if (isOwnerSession) {
    const supabase = createServiceRoleClient();
    if (!supabase) return [];
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("approval_status", "pending")
      .eq("role", "client")
      .order("created_at", { ascending: false });
    if (error) {
      console.error("getPendingProfiles error:", error.message, error.code, error.details);
      return [];
    }
    return (data ?? []) as Profile[];
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return [];

  const { data: myProfile } = await supabase
    .from("profiles")
    .select("role")
    .eq("user_id", user.id)
    .single();
  if (myProfile?.role !== "owner") return [];

  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("approval_status", "pending")
    .eq("role", "client")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("getPendingProfiles error:", error.message, error.code, error.details);
    return [];
  }
  return (data ?? []) as Profile[];
}

/** Owner only: list all client profiles (cookie owner or Supabase owner). */
export async function getProfilesForAdmin(): Promise<Profile[]> {
  const isOwnerSession = await getOwnerSession();
  if (isOwnerSession) {
    const supabase = createServiceRoleClient();
    if (!supabase) return [];
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("role", "client")
      .order("created_at", { ascending: false });
    if (error) {
      console.error("getProfilesForAdmin error:", error.message, error.code, error.details);
      return [];
    }
    return (data ?? []) as Profile[];
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return [];

  const { data: myProfile } = await supabase
    .from("profiles")
    .select("role")
    .eq("user_id", user.id)
    .single();
  if (myProfile?.role !== "owner") return [];

  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("role", "client")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("getProfilesForAdmin error:", error.message, error.code, error.details);
    return [];
  }
  return (data ?? []) as Profile[];
}

/** Whether the admin backend can load data (service role key is set). */
export async function isAdminBackendConfigured(): Promise<boolean> {
  return !!(process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() && process.env.SUPABASE_SERVICE_ROLE_KEY?.trim());
}

/** Owner only: set a profile to approved (cookie owner or Supabase owner). */
export async function approveProfile(profileId: string): Promise<{ ok: boolean; error?: string }> {
  const isOwnerSession = await getOwnerSession();
  if (isOwnerSession) {
    const supabase = createServiceRoleClient();
    if (!supabase) return { ok: false, error: "SUPABASE_SERVICE_ROLE_KEY not set in .env.local" };
    const { error } = await supabase
      .from("profiles")
      // @ts-expect-error - Supabase client without Database generic infers never for update
      .update({ approval_status: "approved" })
      .eq("id", profileId);
    if (error) {
      console.error("approveProfile error:", error);
      return { ok: false, error: error.message };
    }
    revalidatePath("/admin");
    return { ok: true };
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { ok: false, error: "Not logged in" };

  const { data: myProfile } = await supabase
    .from("profiles")
    .select("role")
    .eq("user_id", user.id)
    .single();
  if (myProfile?.role !== "owner") return { ok: false, error: "Not authorized" };

  const { error } = await supabase
    .from("profiles")
    .update({ approval_status: "approved" })
    .eq("id", profileId);

  if (error) {
    console.error("approveProfile error:", error);
    return { ok: false, error: error.message };
  }
  revalidatePath("/admin");
  return { ok: true };
}

/** Owner only: set a profile to rejected (cookie owner or Supabase owner). */
export async function rejectProfile(profileId: string): Promise<{ ok: boolean; error?: string }> {
  const isOwnerSession = await getOwnerSession();
  if (isOwnerSession) {
    const supabase = createServiceRoleClient();
    if (!supabase) return { ok: false, error: "SUPABASE_SERVICE_ROLE_KEY not set in .env.local" };
    const { error } = await supabase
      .from("profiles")
      // @ts-expect-error - Supabase client without Database generic infers never for update
      .update({ approval_status: "rejected" })
      .eq("id", profileId);
    if (error) {
      console.error("rejectProfile error:", error);
      return { ok: false, error: error.message };
    }
    revalidatePath("/admin");
    return { ok: true };
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { ok: false, error: "Not logged in" };

  const { data: myProfile } = await supabase
    .from("profiles")
    .select("role")
    .eq("user_id", user.id)
    .single();
  if (myProfile?.role !== "owner") return { ok: false, error: "Not authorized" };

  const { error } = await supabase
    .from("profiles")
    .update({ approval_status: "rejected" })
    .eq("id", profileId);

  if (error) {
    console.error("rejectProfile error:", error);
    return { ok: false, error: error.message };
  }
  revalidatePath("/admin");
  return { ok: true };
}

/** Owner only: delete a profile (e.g. remove rejected applications from the list). */
export async function deleteProfile(profileId: string): Promise<{ ok: boolean; error?: string }> {
  const isOwnerSession = await getOwnerSession();
  if (isOwnerSession) {
    const supabase = createServiceRoleClient();
    if (!supabase) return { ok: false, error: "SUPABASE_SERVICE_ROLE_KEY not set in .env.local" };
    const { error } = await supabase
      .from("profiles")
      // @ts-expect-error - Supabase client without Database generic infers never for delete
      .delete()
      .eq("id", profileId)
      .eq("role", "client");
    if (error) {
      console.error("deleteProfile error:", error);
      return { ok: false, error: error.message };
    }
    revalidatePath("/admin");
    return { ok: true };
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { ok: false, error: "Not logged in" };

  const { data: myProfile } = await supabase
    .from("profiles")
    .select("role")
    .eq("user_id", user.id)
    .single();
  if (myProfile?.role !== "owner") return { ok: false, error: "Not authorized" };

  const { error } = await supabase
    .from("profiles")
    .delete()
    .eq("id", profileId)
    .eq("role", "client");

  if (error) {
    console.error("deleteProfile error:", error);
    return { ok: false, error: error.message };
  }
  revalidatePath("/admin");
  return { ok: true };
}
