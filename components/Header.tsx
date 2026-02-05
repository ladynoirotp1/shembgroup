import Link from "next/link";
import { Logo } from "@/components/Logo";
import { MobileNavWrapper } from "@/components/MobileNavWrapper";
import { ThemeToggle } from "@/components/ThemeToggle";
import { getOwnerSession } from "@/lib/owner-session";

export async function Header() {
  const isOwnerSession = await getOwnerSession();
  return (
    <header className="sticky top-0 z-20 border-b border-zinc-200/60 bg-white/90 dark:border-border dark:bg-background/95 shadow-soft backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center text-zinc-900 transition-colors hover:text-brand-primary dark:text-foreground dark:hover:text-brand-primary"
        >
          <Logo className="h-8 w-auto" />
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <MobileNavWrapper isOwnerSession={isOwnerSession} />
        </div>
      </div>
    </header>
  );
}
