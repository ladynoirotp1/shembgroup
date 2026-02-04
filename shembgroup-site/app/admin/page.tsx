import { redirect } from "next/navigation";
import Link from "next/link";
import {
  getProfile,
  getPendingProfiles,
  getProfilesForAdmin,
  approveProfile,
  rejectProfile,
} from "@/app/actions/profile";
import { AdminApprovalList } from "./AdminApprovalList";
import { AdminCustomersList } from "./AdminCustomersList";

export const metadata = {
  title: "Admin | Shemb Group",
  description: "Owner dashboard for approvals and customer management.",
};

export default async function AdminPage() {
  const profile = await getProfile();
  const isOwner = profile?.role === "owner";

  if (!profile) {
    redirect("/login");
  }
  if (!isOwner) {
    redirect("/account");
  }

  const [pending, allCustomers] = await Promise.all([
    getPendingProfiles(),
    getProfilesForAdmin(),
  ]);

  return (
    <div className="min-h-screen bg-zinc-50 font-sans">
      <div className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-zinc-900">Owner dashboard</h1>
              <p className="mt-1 text-sm text-zinc-500">
                Approve signups and manage customers.
              </p>
            </div>
            <Link
              href="/"
              className="rounded-none border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50"
            >
              Back to site
            </Link>
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
