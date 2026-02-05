import Link from "next/link";
import Image from "next/image";
import { AnimateIn, AnimateInSection } from "@/components/AnimateIn";

const CATEGORIES = [
  { name: "Halal Meat", image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&q=80" },
  { name: "Dairy", image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80" },
  { name: "Dry Goods", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&q=80" },
  { name: "Drinks", image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&q=80" },
  { name: "Oil & Spices", image: "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=400&q=80" },
  { name: "Packaging & takeaway", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=80" },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white dark:bg-background">
      {/* Hero — soft gradient + glow */}
      <section
        className="relative overflow-hidden section-glow bg-gradient-to-b from-brand-light/90 via-brand-light/40 to-white dark:from-brand-light dark:via-brand-light/50 dark:to-background py-16 sm:py-20 lg:py-24"
        aria-label="Hero"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 L35 20 L50 25 L35 30 L30 45 L25 30 L10 25 L25 20 Z' fill='%230d5c3d'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimateInSection>
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 lg:items-center">
              <div className="text-center lg:text-left">
              <p className="mb-4 inline-flex items-center gap-2 rounded-none border border-brand-primary/20 bg-brand-muted px-4 py-1.5 text-sm font-medium text-brand-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-gold-bright" />
                Halal • Trusted • Wholesale
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-foreground sm:text-5xl lg:text-6xl lg:leading-tight">
                Your trusted halal wholesale food partner
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-foreground-muted lg:mx-0">
                Quality halal products sourced from Pakistan for restaurants, caterers, and retailers. Reliable supply, trusted standards.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-xl bg-brand-primary px-7 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:bg-brand-primary-hover hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-0.5"
                >
                  Get in touch
                </Link>
                <Link
                  href="/#categories"
                  className="inline-flex h-12 items-center justify-center rounded-xl border-2 border-zinc-300 bg-white dark:border-border dark:bg-brand-light px-7 text-sm font-semibold text-zinc-700 dark:text-foreground-muted shadow-soft transition-all duration-300 hover:border-brand-primary hover:text-brand-primary hover:shadow-soft hover:-translate-y-0.5"
                >
                  View categories
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-zinc-200/80 dark:border-border bg-zinc-100 dark:bg-brand-light soft-glow">
              <Image
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=85"
                alt="Fresh produce and quality ingredients for foodservice"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            </div>
          </AnimateInSection>
        </div>
      </section>

      {/* About: image + text — warm section with soft gradient */}
      <section className="relative overflow-hidden py-20 sm:py-24 bg-gradient-to-b from-warm-bg via-warm-bg to-white dark:from-warm-bg dark:via-background dark:to-background">
        <AnimateInSection className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-zinc-200/80 dark:border-border bg-zinc-100 dark:bg-brand-light shadow-soft order-2 lg:order-1 ring-1 ring-black/5 dark:ring-border">
              <Image
                src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&q=85"
                alt="Professional food preparation and quality standards"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-sm font-semibold uppercase tracking-wider text-accent-gold">
                About us
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-foreground sm:text-4xl">
                Built for foodservice and retail
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-foreground-muted">
                SHEMB Group supplies halal food and related products sourced from Pakistan to restaurants, caterers, hotels, and retailers. We focus on quality, traceability, and consistent supply so your business can serve customers with confidence.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-foreground-muted">
                Simple ordering, reliable delivery, and trusted halal standards. Get in touch to see how we can support your business.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="inline-flex h-11 items-center justify-center rounded-xl bg-brand-primary px-6 text-sm font-semibold text-white shadow-soft transition-all duration-200 hover:bg-brand-primary-hover hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-0.5"
                >
                  Our story
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center rounded-xl border-2 border-zinc-300 bg-white dark:border-border dark:bg-brand-light px-6 text-sm font-semibold text-zinc-700 dark:text-foreground-muted shadow-soft transition-all duration-200 hover:border-brand-primary hover:text-brand-primary hover:-translate-y-0.5"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </AnimateInSection>
      </section>

      {/* Categories — soft green gradient */}
      <section id="categories" className="relative overflow-hidden border-t border-zinc-200/60 dark:border-border bg-gradient-to-b from-white via-brand-light/30 to-brand-light/50 dark:from-background dark:via-brand-light/20 dark:to-brand-light/30 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimateInSection>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-primary">
              Products
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-foreground sm:text-4xl">
              Categories
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-zinc-600 dark:text-foreground-muted">
              Browse our product categories. Register or log in to view the full catalog.
            </p>
          </AnimateInSection>
          <AnimateIn stagger rootMargin="0px 0px -5% 0px" className="mt-12">
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {CATEGORIES.map(({ name, image }) => (
                <li key={name} className="animate-in-view">
                  <Link
                    href="/register"
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200/80 dark:border-border bg-white dark:bg-brand-light hover-lift hover:border-brand-primary/40"
                  >
                    <div className="relative aspect-square bg-zinc-50 dark:bg-brand-light">
                      <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-center p-4 text-center">
                      <span className="font-semibold text-zinc-900 dark:text-foreground group-hover:text-brand-primary">
                        {name}
                      </span>
                      <span className="mt-1 text-xs text-zinc-400 dark:text-foreground-muted">View catalog</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </AnimateIn>
        </div>
      </section>

      {/* Why choose us — green strip with soft glow */}
      <section className="border-t border-zinc-200/60 dark:border-border py-20 sm:py-24">
        <AnimateInSection className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-brand-primary px-8 py-16 text-white sm:px-12 lg:px-16 soft-glow ring-1 ring-white/10">
            <div className="absolute inset-0 opacity-10">
              <Image
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=60"
                alt=""
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-gold-bright/60 to-transparent" aria-hidden />
            <div className="relative grid gap-8 sm:grid-cols-3 sm:gap-12">
              <div>
                <p className="text-3xl font-bold">Halal</p>
                <p className="mt-1 text-sm text-white/85">Certified supply chain</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent-gold-bright">B2B</p>
                <p className="mt-1 text-sm text-white/85">Wholesale focus</p>
              </div>
              <div>
                <p className="text-3xl font-bold">Reliable</p>
                <p className="mt-1 text-sm text-white/85">Consistent supply</p>
              </div>
            </div>
          </div>
        </AnimateInSection>
      </section>

      {/* CTA — soft gradient + glow buttons */}
      <section className="relative overflow-hidden border-t border-zinc-200/60 dark:border-border py-20 sm:py-24 bg-gradient-to-b from-warm-bg via-warm-bg to-white dark:from-warm-bg dark:via-background dark:to-background">
        <AnimateInSection className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent-gold">Get started</span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 dark:text-foreground sm:text-3xl">
            Ready to get started?
          </h2>
          <p className="mt-3 text-lg text-zinc-600 dark:text-foreground-muted">
            Get in touch for wholesale inquiries and partnership opportunities.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-brand-primary px-8 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:bg-brand-primary-hover hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-0.5"
            >
              Contact us
            </Link>
            <Link
              href="/#categories"
              className="inline-flex h-12 items-center justify-center rounded-xl border-2 border-accent-gold/50 bg-white dark:bg-brand-light px-8 text-sm font-semibold text-accent-gold shadow-soft transition-all duration-300 hover:bg-accent-gold-muted hover:border-accent-gold hover:shadow-soft hover:-translate-y-0.5"
            >
              View categories
            </Link>
          </div>
        </AnimateInSection>
      </section>
    </div>
  );
}
