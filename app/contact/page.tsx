import Link from "next/link";
import { AnimateInSection } from "@/components/AnimateIn";

export const metadata = {
  title: "Contact | SHEMB Group",
  description: "Get in touch for wholesale inquiries and partnership opportunities.",
};

export default function ContactPage() {
  return (
    <div className="font-sans bg-white">
      <section className="py-20 sm:py-24 bg-warm-bg">
        <AnimateInSection className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent-gold">
            Contact
          </span>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Get in touch
          </h1>
          <p className="mt-4 text-lg text-zinc-600">
            Wholesale inquiries and partnership opportunities. We’ll respond as soon as we can.
          </p>
          <div className="mt-10 rounded-lg border border-brand-primary/10 bg-brand-light/50 p-8 sm:p-10 ring-1 ring-black/5">
            <div className="flex flex-col gap-4 text-zinc-600 sm:flex-row sm:flex-wrap sm:gap-8">
              <p>Address placeholder (update when available)</p>
              <a
                href="mailto:info@shembgroup.com"
                className="font-semibold text-brand-primary transition-colors hover:text-brand-primary-hover"
              >
                info@shembgroup.com
              </a>
              <p>Phone placeholder</p>
            </div>
            <a
              href="mailto:info@shembgroup.com"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-none bg-brand-primary px-8 text-sm font-semibold text-white shadow-lg shadow-brand-primary/25 transition-all duration-300 hover:bg-brand-primary-hover hover:shadow-xl hover:-translate-y-0.5"
            >
              Email us
            </a>
          </div>
          <p className="mt-6 text-sm text-zinc-500">
            <Link href="/" className="text-brand-primary hover:underline">
              Back to home
            </Link>
          </p>
        </AnimateInSection>
      </section>
    </div>
  );
}
