import Link from "next/link";
import { AnimateInSection } from "@/components/AnimateIn";

export const metadata = {
  title: "Careers | SHEMB Group",
  description: "Careers and opportunities at SHEMB Group.",
};

export default function CareersPage() {
  return (
    <div className="font-sans bg-white dark:bg-background">
      <section className="relative overflow-hidden py-20 sm:py-24 bg-gradient-to-b from-brand-light/30 via-warm-bg to-warm-bg dark:from-brand-light/20 dark:via-warm-bg dark:to-warm-bg">
        <AnimateInSection className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent-gold">Careers</span>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-foreground sm:text-4xl">
            Join our team
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-foreground-muted">
            We&apos;ll post openings here. Get in touch if you&apos;d like to work with us.
          </p>
          <div className="mt-8 rounded-2xl border border-zinc-200/80 dark:border-border bg-white dark:bg-brand-light/30 p-8 shadow-soft">
            <p className="text-zinc-600 dark:text-foreground-muted">No open positions at the moment.</p>
            <Link href="/contact" className="mt-4 inline-block text-brand-primary font-medium hover:underline">Contact us</Link>
          </div>
          <p className="mt-6 text-sm text-zinc-500 dark:text-foreground-muted">
            <Link href="/" className="text-brand-primary hover:underline">Back to home</Link>
          </p>
        </AnimateInSection>
      </section>
    </div>
  );
}
