"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { createProfile } from "@/app/actions/profile";

export function RegisterForm() {
  const router = useRouter();
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    let err: { message: string } | null = null;
    let data: Awaited<ReturnType<ReturnType<typeof createClient>["auth"]["signUp"]>>["data"] | null = null;

    try {
      const supabase = createClient();
      const result = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { company_name: company || undefined },
          emailRedirectTo: `${typeof window !== "undefined" ? window.location.origin : ""}/auth/callback`,
        },
      });
      data = result.data;
      err = result.error;
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Network error";
      if (msg === "Failed to fetch" || msg.includes("fetch")) {
        setLoading(false);
        setError(
          "Could not reach Supabase. Check: (1) NEXT_PUBLIC_SUPABASE_URL in .env.local is correct, (2) Supabase project is not paused (Dashboard → project → Restore if needed), (3) Site URL in Supabase Auth → URL Configuration includes this origin (e.g. http://localhost:3000)."
        );
        return;
      }
      setLoading(false);
      setError(msg);
      return;
    }

    setLoading(false);

    if (err) {
      setError(err.message);
      return;
    }

    if (data?.user?.identities?.length === 0) {
      setError("An account with this email already exists. Try logging in.");
      return;
    }

    if (data?.session) {
      const { ok, error: profileErr } = await createProfile(company || undefined);
      if (!ok && profileErr) {
        setError(profileErr);
        return;
      }
      router.refresh();
      router.push("/account");
      return;
    }

    setSuccess(true);
  }

  if (success) {
    return (
      <div className="mt-10 rounded-2xl border border-zinc-200/80 dark:border-border bg-brand-light/30 dark:bg-brand-light/20 p-8 text-center shadow-soft">
        <p className="font-semibold text-brand-primary">Check your email</p>
        <p className="mt-2 text-sm text-zinc-600 dark:text-foreground-muted">
          We sent a confirmation link to <strong>{email}</strong>. Click the link to activate your account, then sign in and go to Account to see your approval status.
        </p>
        <Link
          href="/login"
          className="mt-6 inline-block rounded-none bg-brand-primary px-6 py-2 text-sm font-semibold text-white hover:bg-brand-primary-hover"
        >
          Go to login
        </Link>
        <p className="mt-6 text-sm text-zinc-500 dark:text-foreground-muted">
          <Link href="/" className="text-brand-primary hover:underline">
            Back to home
          </Link>
        </p>
      </div>
    );
  }

  return (
    <form
      className="mt-10 space-y-6 rounded-2xl border border-zinc-200/80 dark:border-border bg-white dark:bg-brand-light p-8 shadow-soft"
      onSubmit={handleSubmit}
    >
      {error && (
        <div className="rounded-none border border-red-200 dark:border-red-900/80 bg-red-50 dark:bg-red-950/80 px-4 py-3 text-sm text-red-800 dark:text-red-300">
          {error}
        </div>
      )}
      <div>
        <label htmlFor="reg-company" className="block text-sm font-medium text-zinc-900 dark:text-foreground">
          Company name
        </label>
        <input
          id="reg-company"
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Your business name"
          className="mt-2 block w-full rounded-none border border-zinc-300 dark:border-border bg-white dark:bg-brand-light px-4 py-3 text-zinc-900 dark:text-foreground placeholder-zinc-400 dark:placeholder-foreground-muted focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
        />
      </div>
      <div>
        <label htmlFor="reg-email" className="block text-sm font-medium text-zinc-900 dark:text-foreground">
          Email
        </label>
        <input
          id="reg-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
          placeholder="you@company.com"
          className="mt-2 block w-full rounded-none border border-zinc-300 dark:border-border bg-white dark:bg-brand-light px-4 py-3 text-zinc-900 dark:text-foreground placeholder-zinc-400 dark:placeholder-foreground-muted focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
        />
      </div>
      <div>
        <label htmlFor="reg-password" className="block text-sm font-medium text-zinc-900 dark:text-foreground">
          Password
        </label>
        <input
          id="reg-password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6}
          autoComplete="new-password"
          className="mt-2 block w-full rounded-none border border-zinc-300 dark:border-border bg-white dark:bg-brand-light px-4 py-3 text-zinc-900 dark:text-foreground placeholder-zinc-400 dark:placeholder-foreground-muted focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
        />
        <p className="mt-1 text-xs text-zinc-500 dark:text-foreground-muted">At least 6 characters</p>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="min-h-[44px] w-full rounded-none bg-brand-primary py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-primary-hover hover:-translate-y-0.5 disabled:opacity-70"
      >
        {loading ? "Creating account…" : "Create account"}
      </button>
      <p className="text-sm text-zinc-600 dark:text-foreground-muted">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-brand-primary hover:underline">
          Login
        </Link>
      </p>
      <p className="text-sm text-zinc-500 dark:text-foreground-muted">
        <Link href="/" className="text-brand-primary hover:underline">
          Back to home
        </Link>
      </p>
    </form>
  );
}
