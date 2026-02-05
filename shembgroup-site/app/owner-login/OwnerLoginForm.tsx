"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ownerLoginAction } from "@/app/actions/owner-login";

export function OwnerLoginForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = (formData.get("email") as string)?.trim() ?? "";
    const password = formData.get("password") as string;

    const result = await ownerLoginAction(email, password);
    setLoading(false);

    if (result.ok) {
      router.refresh();
      router.push("/admin");
      return;
    }
    setError(result.error ?? "Invalid email or password.");
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6 rounded-lg border border-zinc-200 bg-white p-8 shadow-sm">
      {error && (
        <div className="rounded-none border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {error}
        </div>
      )}
      <div>
        <label htmlFor="owner-email" className="block text-sm font-medium text-zinc-900">
          Email
        </label>
        <input
          id="owner-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-2 block w-full rounded-none border border-zinc-300 bg-white px-4 py-3 text-zinc-900 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
        />
      </div>
      <div>
        <label htmlFor="owner-password" className="block text-sm font-medium text-zinc-900">
          Password
        </label>
        <input
          id="owner-password"
          name="password"
          type="password"
          required
          autoComplete="current-password"
          className="mt-2 block w-full rounded-none border border-zinc-300 bg-white px-4 py-3 text-zinc-900 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-none bg-brand-primary py-3 text-sm font-semibold text-white hover:bg-brand-primary-hover disabled:opacity-70"
      >
        {loading ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
