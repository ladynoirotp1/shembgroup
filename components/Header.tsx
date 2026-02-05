import Link from "next/link";
import { Logo } from "@/components/Logo";
import { MobileNavWrapper } from "@/components/MobileNavWrapper";
import { getOwnerSession } from "@/lib/owner-session";

export async function Header() {
  const isOwnerSession = await getOwnerSession();
  return (
    <header className="sticky top-0 z-20 border-b border-zinc-200/80 bg-white/90 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center text-zinc-900 transition-colors hover:text-brand-primary"
        >
          <Logo className="h-8 w-auto" />
        </Link>
        <MobileNavWrapper isOwnerSession={isOwnerSession} />
      </div>
    </header>
  );
}
