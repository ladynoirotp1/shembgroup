"use client";

import Link from "next/link";
import { ownerLogoutAction } from "@/app/actions/owner-logout";

export function AdminOwnerBar() {
  return (
    <div className="flex items-center gap-3">
      <Link
        href="/"
        className="rounded-none border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50"
      >
        Back to site
      </Link>
      <form action={ownerLogoutAction}>
        <button
          type="submit"
          className="rounded-none border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50"
        >
          Log out
        </button>
      </form>
    </div>
  );
}
