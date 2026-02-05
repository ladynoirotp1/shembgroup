import Link from "next/link";
import { NewsletterForm } from "@/components/NewsletterForm";

export function Footer() {
  return (
    <footer className="relative border-t border-zinc-200/60 dark:border-border bg-brand-primary py-14 text-white">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-gold-bright/60 to-transparent" aria-hidden />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-xl font-semibold">SHEMB Group</p>
            <p className="mt-3 text-sm text-white/80">Address placeholder</p>
            <p className="text-sm">
              <a href="mailto:info@shembgroup.com" className="inline-flex min-h-[44px] items-center text-white/90 transition-colors hover:text-accent-gold-bright">
                info@shembgroup.com
              </a>
            </p>
            <p className="text-sm text-white/80">Phone placeholder</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-white/90">General</p>
            <ul className="mt-3 space-y-1 text-sm">
              <li><Link href="/about" className="text-white/80 hover:text-accent-gold-bright">About Us</Link></li>
              <li><Link href="/privacy" className="text-white/80 hover:text-accent-gold-bright">Privacy Policy</Link></li>
              <li><Link href="/careers" className="text-white/80 hover:text-accent-gold-bright">Careers</Link></li>
              <li><Link href="/contact" className="text-white/80 hover:text-accent-gold-bright">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white/90">Connect with us</p>
            <p className="mt-3 text-sm text-white/70">Follow us for offers and updates.</p>
            <div className="mt-3 flex gap-3">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 text-white hover:bg-accent-gold-bright hover:text-zinc-900" aria-label="Facebook">f</a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 text-white hover:bg-accent-gold-bright hover:text-zinc-900" aria-label="LinkedIn">in</a>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-white/90">Subscribe to our newsletter</p>
            <p className="mt-2 text-sm text-white/70">Get offers and updates by email.</p>
            <div className="mt-4">
              <NewsletterForm />
            </div>
          </div>
        </div>
        <p className="mt-10 border-t border-white/20 pt-8 text-sm text-white/60">
          © 2026 SHEMB Group
        </p>
      </div>
    </footer>
  );
}
