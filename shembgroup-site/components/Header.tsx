import Link from "next/link";
import { AuthNav } from "@/components/AuthNav";
import { getOwnerSession } from "@/lib/owner-session";

export async function Header() {
  const isOwnerSession = await getOwnerSession();
  return (
    <header className="sticky top-0 z-20 border-b border-zinc-200/80 bg-white/90 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-zinc-900 transition-colors hover:text-brand-primary"
        >
          Shemb Group
        </Link>
        <nav>
          <AuthNav isOwnerSession={isOwnerSession} />
        </nav>
      </div>
    </header>
  );
}
