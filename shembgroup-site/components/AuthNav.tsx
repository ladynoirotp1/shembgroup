"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { getMyRole } from "@/app/actions/profile";
import { ownerLogoutAction } from "@/app/actions/owner-logout";
import type { User } from "@supabase/supabase-js";

type AuthNavProps = { isOwnerSession: boolean };

export function AuthNav({ isOwnerSession }: AuthNavProps) {
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

  if (loading) {
    return (
      <div className="flex items-center gap-7 text-sm font-medium text-zinc-400">
        <Link href="/" className="hover:text-brand-primary">Home</Link>
        <Link href="/promotions" className="hover:text-brand-primary">Promotions</Link>
        <span>…</span>
        <Link href="/contact" className="hover:text-brand-primary">Contact</Link>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-7 text-sm font-medium">
      <Link
        href="/"
        className="text-zinc-600 transition-colors hover:text-brand-primary"
      >
        Home
      </Link>
      <Link
        href="/promotions"
        className="text-zinc-600 transition-colors hover:text-brand-primary"
      >
        Promotions
      </Link>
      {isOwnerSession ? (
        <>
          <Link
            href="/admin"
            className="text-zinc-600 transition-colors hover:text-brand-primary"
          >
            Admin
          </Link>
          <form action={ownerLogoutAction} className="inline">
            <button
              type="submit"
              className="text-zinc-600 transition-colors hover:text-brand-primary"
            >
              Log out
            </button>
          </form>
        </>
      ) : user ? (
        <>
          {role === "owner" && (
            <Link
              href="/admin"
              className="text-zinc-600 transition-colors hover:text-brand-primary"
            >
              Admin
            </Link>
          )}
          <Link
            href="/account"
            className="text-zinc-600 transition-colors hover:text-brand-primary"
          >
            Account
          </Link>
          <button
            type="button"
            onClick={handleSignOut}
            className="text-zinc-600 transition-colors hover:text-brand-primary"
          >
            Log out
          </button>
        </>
      ) : (
        <>
          <Link
            href="/login"
            className="text-zinc-600 transition-colors hover:text-brand-primary"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="text-zinc-600 transition-colors hover:text-brand-primary"
          >
            Register
          </Link>
          <Link
            href="/owner-login"
            className="text-zinc-600 transition-colors hover:text-brand-primary"
          >
            Owner login
          </Link>
        </>
      )}
      <Link
        href="/contact"
        className="text-zinc-600 transition-colors hover:text-brand-primary"
      >
        Contact
      </Link>
    </div>
  );
}
