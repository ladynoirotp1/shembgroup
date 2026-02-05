import { redirect } from "next/navigation";
import { getOwnerSession } from "@/lib/owner-session";
import { getPendingProfiles, getProfilesForAdmin, isAdminBackendConfigured } from "@/app/actions/profile";
import { AdminApprovalList } from "./AdminApprovalList";
import { AdminCustomersList } from "./AdminCustomersList";
import { AdminOwnerBar } from "./AdminOwnerBar";

export const metadata = {
  title: "Admin | Shemb Group",
  description: "Owner dashboard for approvals and customer management.",
};

export default async function AdminPage() {
  const isOwner = await getOwnerSession();
  if (!isOwner) redirect("/owner-login");

  const [pending, allCustomers, backendOk] = await Promise.all([
    getPendingProfiles(),
    getProfilesForAdmin(),
    isAdminBackendConfigured(),
  ]);

  return (
    <div className="min-h-screen bg-zinc-50 font-sans">
      {!backendOk && (
        <div className="border-b border-amber-200 bg-amber-50 px-4 py-3 text-center text-sm text-amber-900">
          Add <code className="rounded bg-amber-100 px-1 font-mono">SUPABASE_SERVICE_ROLE_KEY</code> to{" "}
          <code className="rounded bg-amber-100 px-1 font-mono">.env.local</code> and restart the dev server to load approvals and customers.{" "}
          <a href="https://supabase.com/dashboard/project/_/settings/api" target="_blank" rel="noopener noreferrer" className="underline">
            Get the key in Supabase → Project Settings → API → service_role
          </a>
        </div>
      )}
      <div className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-zinc-900">Owner dashboard</h1>
              <p className="mt-1 text-sm text-zinc-500">
                Approve signups and manage customers.
              </p>
            </div>
            <AdminOwnerBar />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-zinc-900">Pending approvals</h2>
          <p className="mt-1 text-sm text-zinc-500">
            New signups waiting for your approval. Approve to give them access to the dashboard and catalog.
          </p>
          <AdminApprovalList pending={pending} />
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900">All customers</h2>
          <p className="mt-1 text-sm text-zinc-500">
            Everyone who has registered (approved, pending, or rejected).
          </p>
          <AdminCustomersList customers={allCustomers} />
        </section>
      </div>
    </div>
  );
}
