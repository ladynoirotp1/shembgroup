"use client";

import { useState } from "react";
import { approveProfile, rejectProfile } from "@/app/actions/profile";
import type { Profile } from "@/app/actions/profile";

export function AdminApprovalList({ pending }: { pending: Profile[] }) {
  const [list, setList] = useState(pending);
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleApprove(id: string) {
    setLoadingId(id);
    setError(null);
    const { ok, error: err } = await approveProfile(id);
    setLoadingId(null);
    if (err) {
      setError(err);
      return;
    }
    setList((prev) => prev.filter((p) => p.id !== id));
  }

  async function handleReject(id: string) {
    setLoadingId(id);
    setError(null);
    const { ok, error: err } = await rejectProfile(id);
    setLoadingId(null);
    if (err) {
      setError(err);
      return;
    }
    setList((prev) => prev.filter((p) => p.id !== id));
  }

  if (list.length === 0) {
    return (
      <div className="mt-4 rounded-lg border border-zinc-200 bg-white p-8 text-center text-zinc-500">
        No pending approvals.
      </div>
    );
  }

  return (
    <div className="mt-4">
      {error && (
        <div className="mb-4 rounded-none border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {error}
        </div>
      )}
      <ul className="divide-y divide-zinc-200 rounded-lg border border-zinc-200 bg-white">
        {list.map((p) => (
          <li key={p.id} className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-medium text-zinc-900">{p.company_name || "—"}</p>
              <p className="text-sm text-zinc-500">{p.email || "—"}</p>
              <p className="text-xs text-zinc-400">
                Signed up {new Date(p.created_at).toLocaleDateString()}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                disabled={loadingId === p.id}
                onClick={() => handleApprove(p.id)}
                className="min-h-[44px] rounded-none bg-brand-primary px-4 py-2 text-sm font-medium text-white hover:bg-brand-primary-hover disabled:opacity-70"
              >
                {loadingId === p.id ? "…" : "Approve"}
              </button>
              <button
                type="button"
                disabled={loadingId === p.id}
                onClick={() => handleReject(p.id)}
                className="min-h-[44px] rounded-none border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 disabled:opacity-70"
              >
                Reject
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
