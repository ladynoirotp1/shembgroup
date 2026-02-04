import Link from "next/link";
import { AnimateInSection } from "@/components/AnimateIn";

export const metadata = {
  title: "Promotions | Shemb Group",
  description: "Current offers and promotions for Shemb Group wholesale customers.",
};

export default function PromotionsPage() {
  return (
    <div className="font-sans bg-white">
      <section className="py-20 sm:py-24">
        <AnimateInSection className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-primary">
            Promotions
          </span>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Current offers
          </h1>
          <p className="mt-4 text-lg text-zinc-600">
            Deals and promotions for our wholesale customers. Check back for new offers.
          </p>
          <div className="mt-12 rounded-lg border border-zinc-200 bg-zinc-50/80 p-8 text-center">
            <p className="text-zinc-500">No active promotions at the moment.</p>
            <p className="mt-2 text-sm text-zinc-400">
              Sign in or register to get notified when we run offers.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/login"
                className="inline-flex h-12 items-center justify-center rounded-none bg-brand-primary px-6 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-primary-hover hover:-translate-y-0.5"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="inline-flex h-12 items-center justify-center rounded-none border-2 border-zinc-300 bg-white px-6 text-sm font-semibold text-zinc-700 transition-all duration-300 hover:border-brand-primary hover:text-brand-primary hover:-translate-y-0.5"
              >
                Register
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
