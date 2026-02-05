import Link from "next/link";
import Image from "next/image";
import { AnimateInSection } from "@/components/AnimateIn";

export const metadata = {
  title: "About us | SHEMB Group",
  description:
    "SHEMB Group is a wholesale food distributor. Learn what we do and what we stand for.",
};

export default function AboutPage() {
  return (
    <div className="font-sans bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-light to-white py-16 sm:py-20">
        <AnimateInSection className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent-gold">
            About us
          </span>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
            Your trusted wholesale partner
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-600">
            We supply quality food and related products to foodservice and retail so your business can serve with confidence.
          </p>
        </AnimateInSection>
      </section>

      {/* What we do */}
      <section className="border-t border-zinc-200 py-16 sm:py-20">
        <AnimateInSection className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100">
              <Image
                src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&q=85"
                alt="Quality food preparation and wholesale supply"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
                What we do
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-zinc-600">
                SHEMB Group is a wholesale food distributor for restaurants, caterers, hotels, takeaways, and retailers. We supply meat, dairy, dry goods, drinks, oils and spices, and packaging so you can run your kitchen and your business.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-zinc-600">
                We focus on reliable supply, clear traceability, and straightforward ordering. Whether you need regular deliveries or one-off stock, we aim to be the partner you can depend on.
              </p>
            </div>
          </div>
        </AnimateInSection>
      </section>

      {/* What we stand for */}
      <section className="border-t border-zinc-200 bg-warm-bg py-16 sm:py-20">
        <AnimateInSection className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
            What we stand for
          </h2>
          <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <li className="rounded-xl border border-zinc-200/80 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-brand-primary">Quality</h3>
              <p className="mt-2 text-zinc-600">
                We source and supply products that meet strict standards so your customers get consistent, reliable quality every time.
              </p>
            </li>
            <li className="rounded-xl border border-zinc-200/80 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-brand-primary">Trust</h3>
              <p className="mt-2 text-zinc-600">
                We build long-term relationships with suppliers and customers based on transparency and integrity.
              </p>
            </li>
            <li className="rounded-xl border border-zinc-200/80 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-brand-primary">Partnership</h3>
              <p className="mt-2 text-zinc-600">
                We’re here to support your business with reliable delivery, clear communication, and a range that grows with your needs.
              </p>
            </li>
          </ul>
        </AnimateInSection>
      </section>

      {/* CTA */}
      <section className="border-t border-zinc-200 py-16 sm:py-20">
        <AnimateInSection className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl">
            Ready to work with us?
          </h2>
          <p className="mt-3 text-zinc-600">
            Get in touch for wholesale inquiries, product information, or to set up an account.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-none bg-brand-primary px-8 text-sm font-semibold text-white transition-all hover:bg-brand-primary-hover hover:-translate-y-0.5"
            >
              Contact us
            </Link>
            <Link
              href="/#categories"
              className="inline-flex h-12 items-center justify-center rounded-none border-2 border-zinc-300 bg-white px-8 text-sm font-semibold text-zinc-700 transition-all hover:border-brand-primary hover:text-brand-primary hover:-translate-y-0.5"
            >
              View categories
            </Link>
          </div>
        </AnimateInSection>
      </section>
    </div>
  );
}
