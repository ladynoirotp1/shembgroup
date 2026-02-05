"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { getLoginRedirect } from "@/app/actions/profile";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    let err: { message: string } | null = null;
    try {
      const supabase = createClient();
      const result = await supabase.auth.signInWithPassword({ email, password });
      err = result.error;
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Network error";
      if (msg === "Failed to fetch" || msg.includes("fetch")) {
        setLoading(false);
        setError(
          "Could not reach Supabase. Check: (1) NEXT_PUBLIC_SUPABASE_URL in .env.local is correct, (2) Supabase project is not paused (Dashboard → Restore if needed), (3) Site URL in Supabase Auth → URL Configuration includes this origin (e.g. http://localhost:3000)."
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

    const { redirect: path } = await getLoginRedirect();
    router.refresh();
    router.push(path);
  }

  return (
    <form
      className="mt-10 space-y-6 rounded-lg border border-zinc-200 bg-white p-8 shadow-sm"
      onSubmit={handleSubmit}
    >
      {error && (
        <div className="rounded-none border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {error}
        </div>
      )}
      <div>
        <label htmlFor="login-email" className="block text-sm font-medium text-zinc-900">
          Email
        </label>
        <input
          id="login-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
          placeholder="you@company.com"
          className="mt-2 block w-full rounded-none border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-400 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
        />
      </div>
      <div>
        <label htmlFor="login-password" className="block text-sm font-medium text-zinc-900">
          Password
        </label>
        <input
          id="login-password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
          className="mt-2 block w-full rounded-none border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-400 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="min-h-[44px] w-full rounded-none bg-brand-primary py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-primary-hover hover:-translate-y-0.5 disabled:opacity-70"
      >
        {loading ? "Signing in…" : "Sign in"}
      </button>
      <p className="text-sm text-zinc-600">
        Don’t have an account?{" "}
        <Link href="/register" className="font-semibold text-brand-primary hover:underline">
          Register
        </Link>
      </p>
      <p className="text-sm text-zinc-500">
        <Link href="/" className="text-brand-primary hover:underline">
          Back to home
        </Link>
      </p>
    </form>
  );
}
