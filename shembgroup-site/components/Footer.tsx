import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-brand-primary py-14 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xl font-semibold">Shemb Group</p>
            <p className="mt-3 text-sm text-white/80">Address placeholder</p>
            <p className="text-sm">
              <a
                href="mailto:info@shembgroup.com"
                className="text-white/90 transition-colors hover:text-white"
              >
                info@shembgroup.com
              </a>
            </p>
            <p className="text-sm text-white/80">Phone placeholder</p>
          </div>
          <div className="flex gap-8 text-sm">
            <Link href="/" className="text-white/80 transition-colors hover:text-white">
              About
            </Link>
            <Link href="/contact" className="text-white/80 transition-colors hover:text-white">
              Contact
            </Link>
            <span className="text-white/50">Privacy</span>
          </div>
        </div>
        <p className="mt-10 border-t border-white/20 pt-8 text-sm text-white/60">
          © 2026 Shemb Group
        </p>
      </div>
    </footer>
  );
}
