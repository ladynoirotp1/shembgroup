"use client";

import { useState } from "react";
import { deleteProfile, type Profile } from "@/app/actions/profile";

export function AdminCustomersList({ customers }: { customers: Profile[] }) {
  const [list, setList] = useState(customers);
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleDelete(id: string) {
    setLoadingId(id);
    setError(null);
    const { ok, error: err } = await deleteProfile(id);
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
        No customers yet.
      </div>
    );
  }

  return (
    <div className="mt-4 overflow-x-auto rounded-lg border border-zinc-200 bg-white -mx-4 sm:mx-0 px-4 sm:px-0">
      {error && (
        <div className="mx-4 mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {error}
        </div>
      )}
      <table className="min-w-[600px] w-full divide-y divide-zinc-200">
        <thead>
          <tr className="bg-zinc-50">
            <th className="px-4 py-3 text-left text-xs font-medium uppercase text-zinc-500">
              Company
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium uppercase text-zinc-500">
              Email
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium uppercase text-zinc-500">
              Status
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium uppercase text-zinc-500">
              Signed up
            </th>
            <th className="px-4 py-3 text-right text-xs font-medium uppercase text-zinc-500">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-200">
          {list.map((p) => (
            <tr key={p.id}>
              <td className="px-4 py-3 text-sm text-zinc-900">
                {p.company_name || "—"}
              </td>
              <td className="px-4 py-3 text-sm text-zinc-600">{p.email || "—"}</td>
              <td className="px-4 py-3">
                <span
                  className={
                    p.approval_status === "approved"
                      ? "rounded bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800"
                      : p.approval_status === "rejected"
                        ? "rounded bg-red-100 px-2 py-0.5 text-xs font-medium text-red-800"
                        : "rounded bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800"
                  }
                >
                  {p.approval_status}
                </span>
              </td>
              <td className="px-4 py-3 text-sm text-zinc-500">
                {new Date(p.created_at).toLocaleDateString()}
              </td>
              <td className="px-4 py-3 text-right">
                {p.approval_status === "rejected" && (
                  <button
                    type="button"
                    disabled={loadingId === p.id}
                    onClick={() => handleDelete(p.id)}
                    className="text-sm font-medium text-red-600 hover:text-red-700 disabled:opacity-70"
                  >
                    {loadingId === p.id ? "…" : "Delete"}
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
