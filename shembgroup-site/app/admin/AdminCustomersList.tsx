"use client";

import type { Profile } from "@/app/actions/profile";

export function AdminCustomersList({ customers }: { customers: Profile[] }) {
  if (customers.length === 0) {
    return (
      <div className="mt-4 rounded-lg border border-zinc-200 bg-white p-8 text-center text-zinc-500">
        No customers yet.
      </div>
    );
  }

  return (
    <div className="mt-4 overflow-hidden rounded-lg border border-zinc-200 bg-white">
      <table className="min-w-full divide-y divide-zinc-200">
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
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-200">
          {customers.map((p) => (
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
