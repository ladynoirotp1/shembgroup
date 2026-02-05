"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { getMyRole } from "@/app/actions/profile";
import { ownerLogoutAction } from "@/app/actions/owner-logout";
import type { User } from "@supabase/supabase-js";

type AuthNavProps = {
  isOwnerSession: boolean;
  variant?: "desktop" | "mobile";
  onNavigate?: () => void;
};

export function AuthNav({ isOwnerSession, variant = "desktop", onNavigate }: AuthNavProps) {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient();

    supabase.auth.getUser().then(async ({ data: { user: u } }) => {
      setUser(u);
      if (u) {
        const r = await getMyRole();
        setRole(r ?? null);
      } else {
        setRole(null);
      }
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      const u = session?.user ?? null;
      setUser(u);
      if (u) {
        const r = await getMyRole();
        setRole(r ?? null);
      } else {
        setRole(null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  async function handleSignOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.refresh();
    router.push("/");
  }

  const linkClass =
    variant === "mobile"
      ? "block py-4 px-4 text-base font-medium text-zinc-700 transition-colors hover:text-brand-primary hover:bg-zinc-50 min-h-[44px] flex items-center rounded-none border-b border-zinc-100"
      : "text-zinc-600 transition-colors hover:text-brand-primary";
  const buttonClass =
    variant === "mobile"
      ? "block w-full text-left py-4 px-4 text-base font-medium text-zinc-700 transition-colors hover:text-brand-primary hover:bg-zinc-50 min-h-[44px] flex items-center rounded-none border-b border-zinc-100"
      : "text-zinc-600 transition-colors hover:text-brand-primary";

  if (loading) {
    return (
      <div className={variant === "mobile" ? "flex flex-col" : "flex items-center gap-7 text-sm font-medium text-zinc-400"}>
        <Link href="/" className={linkClass} onClick={onNavigate}>Home</Link>
        <Link href="/about" className={linkClass} onClick={onNavigate}>About</Link>
        <Link href="/promotions" className={linkClass} onClick={onNavigate}>Promotions</Link>
        <Link href="/contact" className={linkClass} onClick={onNavigate}>Contact</Link>
      </div>
    );
  }

  return (
    <div className={variant === "mobile" ? "flex flex-col" : "flex items-center gap-7 text-sm font-medium"}>
      <Link href="/" className={linkClass} onClick={onNavigate}>
        Home
      </Link>
      <Link href="/about" className={linkClass} onClick={onNavigate}>
        About
      </Link>
      <Link href="/promotions" className={linkClass} onClick={onNavigate}>
        Promotions
      </Link>
      {isOwnerSession ? (
        <>
          <Link href="/admin" className={linkClass} onClick={onNavigate}>
            Admin
          </Link>
          <form action={ownerLogoutAction} className={variant === "mobile" ? "border-b border-zinc-100" : "inline"}>
            <button type="submit" className={buttonClass}>
              Log out
            </button>
          </form>
        </>
      ) : user ? (
        <>
          {role === "owner" && (
            <Link href="/admin" className={linkClass} onClick={onNavigate}>
              Admin
            </Link>
          )}
          <Link href="/account" className={linkClass} onClick={onNavigate}>
            Account
          </Link>
          <button
            type="button"
            onClick={() => {
              handleSignOut();
              onNavigate?.();
            }}
            className={buttonClass}
          >
            Log out
          </button>
        </>
      ) : null}
      <Link href="/contact" className={linkClass} onClick={onNavigate}>
        Contact
      </Link>
    </div>
  );
}
