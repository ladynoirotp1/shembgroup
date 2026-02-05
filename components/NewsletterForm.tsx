"use client";

import { useActionState } from "react";
import { subscribeNewsletter } from "@/app/actions/newsletter";

const initialState = { ok: false } as { ok: boolean; error?: string; message?: string };

export function NewsletterForm() {
  const [state, formAction] = useActionState(subscribeNewsletter, initialState);

  if (state?.ok && state?.message) {
    return <p className="text-sm text-white/90">{state.message}</p>;
  }

  return (
    <form action={formAction} className="flex min-w-0 flex-col gap-2">
      <input
        type="email"
        name="email"
        required
        placeholder="Your email"
        className="min-h-[44px] min-w-0 rounded-xl border border-white/30 bg-white/10 px-4 py-2.5 text-white placeholder-white/60 focus:border-accent-gold-bright focus:outline-none focus:ring-1 focus:ring-accent-gold-bright"
      />
      <button
        type="submit"
        className="min-h-[44px] w-full shrink-0 rounded-xl bg-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-gold-bright hover:text-zinc-900"
      >
        Subscribe
      </button>
      {state?.error && <p className="text-sm text-red-200">{state.error}</p>}
    </form>
  );
}
