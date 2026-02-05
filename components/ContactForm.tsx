"use client";

import { useActionState } from "react";
import { submitContactForm } from "@/app/actions/contact";

const initialState = { ok: false } as { ok: boolean; error?: string; message?: string };

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);

  if (state?.ok && state?.message) {
    return (
      <div className="rounded-2xl border border-brand-primary/20 dark:border-border bg-brand-light/50 dark:bg-brand-light/20 p-8 sm:p-10 shadow-soft text-center">
        <p className="text-lg font-semibold text-brand-primary">{state.message}</p>
        <p className="mt-2 text-sm text-zinc-600 dark:text-foreground-muted">
          We typically respond within 1–2 business days.
        </p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="space-y-6 rounded-2xl border border-zinc-200/80 dark:border-border bg-white dark:bg-brand-light p-8 shadow-soft"
    >
      {state?.error && (
        <div className="rounded-xl border border-red-200 dark:border-red-900/80 bg-red-50 dark:bg-red-950/80 px-4 py-3 text-sm text-red-800 dark:text-red-200">
          {state.error}
        </div>
      )}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-zinc-900 dark:text-foreground">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            minLength={2}
            autoComplete="name"
            placeholder="Your name or company"
            className="mt-2 block w-full rounded-xl border border-zinc-300 dark:border-border bg-white dark:bg-background px-4 py-3 text-zinc-900 dark:text-foreground placeholder-zinc-400 dark:placeholder-foreground-muted focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-zinc-900 dark:text-foreground">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className="mt-2 block w-full rounded-xl border border-zinc-300 dark:border-border bg-white dark:bg-background px-4 py-3 text-zinc-900 dark:text-foreground placeholder-zinc-400 dark:placeholder-foreground-muted focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
          />
        </div>
      </div>
      <div>
        <label htmlFor="contact-subject" className="block text-sm font-medium text-zinc-900 dark:text-foreground">
          Subject <span className="text-red-500">*</span>
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          required
          minLength={3}
          placeholder="e.g. Wholesale inquiry, Partnership"
          className="mt-2 block w-full rounded-xl border border-zinc-300 dark:border-border bg-white dark:bg-background px-4 py-3 text-zinc-900 dark:text-foreground placeholder-zinc-400 dark:placeholder-foreground-muted focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-zinc-900 dark:text-foreground">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          minLength={10}
          rows={5}
          placeholder="Tell us how we can help..."
          className="mt-2 block w-full rounded-xl border border-zinc-300 dark:border-border bg-white dark:bg-background px-4 py-3 text-zinc-900 dark:text-foreground placeholder-zinc-400 dark:placeholder-foreground-muted focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary resize-y"
        />
      </div>
      <button
        type="submit"
        className="w-full sm:w-auto min-h-[48px] rounded-xl bg-brand-primary px-8 py-3 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:bg-brand-primary-hover hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-0.5"
      >
        Send message
      </button>
    </form>
  );
}
