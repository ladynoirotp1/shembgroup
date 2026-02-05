import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative border-t border-zinc-200 bg-brand-primary py-14 text-white">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent-gold-bright/50 to-transparent" aria-hidden />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xl font-semibold">SHEMB Group</p>
            <p className="mt-3 text-sm text-white/80">Address placeholder</p>
            <p className="text-sm">
              <a
                href="mailto:info@shembgroup.com"
                className="inline-flex min-h-[44px] items-center text-white/90 transition-colors hover:text-accent-gold-bright"
              >
                info@shembgroup.com
              </a>
            </p>
            <p className="text-sm text-white/80">Phone placeholder</p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
            <Link href="/" className="py-2 text-white/80 transition-colors hover:text-accent-gold-bright min-h-[44px] flex items-center">
              About
            </Link>
            <Link href="/contact" className="py-2 text-white/80 transition-colors hover:text-accent-gold-bright min-h-[44px] flex items-center">
              Contact
            </Link>
            <span className="py-2 text-white/50 flex items-center min-h-[44px]">Privacy</span>
          </div>
        </div>
        <p className="mt-10 border-t border-white/20 pt-8 text-sm text-white/60">
          © 2026 SHEMB Group
        </p>
      </div>
    </footer>
  );
}
