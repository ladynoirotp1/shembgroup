import Link from "next/link";
import { AnimateIn, AnimateInSection } from "@/components/AnimateIn";

const CATEGORIES = [
  "Halal Meat",
  "Dairy",
  "Dry Goods",
  "Beverages",
  "Oil & Spices",
  "Disposables",
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      {/* Hero */}
      <section
        className="relative overflow-hidden bg-gradient-to-b from-brand-light via-white to-white py-20 sm:py-28 lg:py-36"
        aria-label="Hero"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 L35 20 L50 25 L35 30 L30 45 L25 30 L10 25 L25 20 Z' fill='%230d5c3d'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-4 inline-flex items-center gap-2 rounded-none border border-brand-primary/20 bg-brand-muted px-4 py-1.5 text-sm font-medium text-brand-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
            Halal • Trusted • Wholesale
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl lg:leading-tight">
            Your trusted halal wholesale food partner
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600">
            Quality halal products for restaurants, caterers, and retailers.
            Reliable supply, trusted standards.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-none bg-brand-primary px-7 text-sm font-semibold text-white shadow-lg shadow-brand-primary/25 transition-all duration-300 hover:bg-brand-primary-hover hover:shadow-xl hover:shadow-brand-primary/30 hover:-translate-y-0.5"
            >
              Get in touch
            </Link>
            <a
              href="#categories"
              className="inline-flex h-12 items-center justify-center rounded-none border-2 border-zinc-300 bg-white px-7 text-sm font-semibold text-zinc-700 transition-all duration-300 hover:border-brand-primary hover:text-brand-primary hover:-translate-y-0.5"
            >
              View categories
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 sm:py-24">
        <AnimateInSection className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-brand-primary">
                About us
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                Built for foodservice and retail
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-zinc-600">
                Shemb Group supplies halal food and related products to the
                foodservice and retail sectors. We focus on quality, traceability,
                and consistent supply so your business can serve customers with
                confidence.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-zinc-600">
                We work with restaurants, caterers, hotels, and retailers. More
                details on our range, locations, and partners will be added here
                as we grow.
              </p>
            </div>
            <div className="flex flex-col justify-center rounded-2xl border border-zinc-200 bg-brand-light/50 p-8 sm:p-10">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-3xl font-bold text-brand-primary">Halal</p>
                  <p className="mt-1 text-sm text-zinc-600">Certified supply chain</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-brand-primary">B2B</p>
                  <p className="mt-1 text-sm text-zinc-600">Wholesale focus</p>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm text-zinc-600">
                <span className="rounded bg-accent-gold-muted px-2 py-0.5 font-medium text-accent-gold">
                  Pakistan
                </span>
                <span>•</span>
                <span>Quality first</span>
              </div>
            </div>
          </div>
        </AnimateInSection>
      </section>

      {/* Categories */}
      <section id="categories" className="border-t border-zinc-200 bg-zinc-50/80 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimateInSection>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-primary">
              Products
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Categories
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-zinc-600">
              Browse our product categories. Full catalog coming soon.
            </p>
          </AnimateInSection>
          <AnimateIn stagger rootMargin="0px 0px -5% 0px" className="mt-12">
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {CATEGORIES.map((name) => (
                <li key={name} className="animate-in-view">
                  <div className="group flex h-full flex-col items-center justify-center rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary/30 hover:shadow-lg hover:shadow-brand-primary/10">
                    <span className="font-semibold text-zinc-900 group-hover:text-brand-primary">
                      {name}
                    </span>
                    <span className="mt-1 text-xs text-zinc-400">Coming soon</span>
                  </div>
                </li>
              ))}
            </ul>
          </AnimateIn>
        </div>
      </section>

      {/* CTA to contact */}
      <section className="border-t border-zinc-200 py-20 sm:py-24">
        <AnimateInSection className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
            Ready to get started?
          </h2>
          <p className="mt-3 text-lg text-zinc-600">
            Get in touch for wholesale enquiries and partnership opportunities.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-none bg-brand-primary px-8 text-sm font-semibold text-white shadow-lg shadow-brand-primary/25 transition-all duration-300 hover:bg-brand-primary-hover hover:shadow-xl hover:-translate-y-0.5"
          >
            Contact us
          </Link>
        </AnimateInSection>
      </section>
    </div>
  );
}
