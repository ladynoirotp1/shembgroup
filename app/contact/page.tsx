import Link from "next/link";
import { AnimateInSection } from "@/components/AnimateIn";
import { ContactForm } from "@/components/ContactForm";

export const metadata = {
  title: "Contact | SHEMB Group",
  description: "Get in touch for wholesale inquiries and partnership opportunities.",
};

export default function ContactPage() {
  return (
    <div className="font-sans bg-white dark:bg-background">
      <section className="relative overflow-hidden py-20 sm:py-24 bg-gradient-to-b from-brand-light/30 via-warm-bg to-warm-bg dark:from-brand-light/20 dark:via-warm-bg dark:to-warm-bg">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <AnimateInSection>
            <span className="text-sm font-semibold uppercase tracking-wider text-accent-gold">
              Contact
            </span>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-foreground sm:text-4xl">
              Get in touch
            </h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-foreground-muted">
              Wholesale inquiries and partnership opportunities. Send us a message and we&apos;ll respond as soon as we can.
            </p>
          </AnimateInSection>

          <div className="mt-10">
            <ContactForm />
          </div>

          <div className="mt-10 rounded-2xl border border-brand-primary/10 dark:border-brand-primary/20 bg-brand-light/40 dark:bg-brand-light/20 p-6 shadow-soft">
            <p className="text-sm font-semibold text-zinc-900 dark:text-foreground">Prefer email?</p>
            <p className="mt-1 text-sm text-zinc-600 dark:text-foreground-muted">
              You can also reach us directly at{" "}
              <a
                href="mailto:info@shembgroup.com"
                className="font-medium text-brand-primary transition-colors hover:text-brand-primary-hover"
              >
                info@shembgroup.com
              </a>
            </p>
          </div>

          <p className="mt-6 text-sm text-zinc-500 dark:text-foreground-muted">
            <Link href="/" className="text-brand-primary hover:underline">
              Back to home
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
