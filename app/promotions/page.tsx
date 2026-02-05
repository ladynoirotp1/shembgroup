import Link from "next/link";
import { AnimateInSection } from "@/components/AnimateIn";

export const metadata = {
  title: "Promotions | SHEMB Group",
  description: "Current offers and promotions for SHEMB Group wholesale customers.",
};

export default function PromotionsPage() {
  return (
    <div className="font-sans bg-white">
      <section className="py-20 sm:py-24 bg-warm-bg">
        <AnimateInSection className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent-gold">
            Promotions
          </span>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Current offers
          </h1>
          <p className="mt-4 text-lg text-zinc-600">
            Deals and promotions for our wholesale customers. Check back for new offers.
          </p>
          <div className="mt-12 rounded-lg border border-zinc-200/90 bg-brand-light/40 p-8 text-center">
            <p className="text-zinc-500">No active promotions at the moment.</p>
            <p className="mt-2 text-sm text-zinc-400">
              Get in touch to hear about offers when we run them.
            </p>
            <div className="mt-6 flex justify-center">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-none bg-brand-primary px-6 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-primary-hover hover:-translate-y-0.5"
              >
                Get in touch
              </Link>
            </div>
          </div>
          <p className="mt-8 text-sm text-zinc-500">
            <Link href="/" className="text-brand-primary hover:underline">
              Back to home
            </Link>
          </p>
        </AnimateInSection>
      </section>
    </div>
  );
}
