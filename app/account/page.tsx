import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { getProfile, createProfile } from "@/app/actions/profile";
import { AnimateInSection } from "@/components/AnimateIn";

export const metadata = {
  title: "Account | SHEMB Group",
  description: "Your SHEMB Group wholesale account.",
};

export default async function AccountPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  let profile = await getProfile();

  if (!profile) {
    const companyFromMetadata = user.user_metadata?.company_name as string | undefined;
    await createProfile(companyFromMetadata);
    profile = await getProfile();
  }

  const status = profile?.approval_status ?? "pending";
  const companyName = profile?.company_name || (user.user_metadata?.company_name as string | undefined);

  if (status === "pending") {
    return (
      <div className="font-sans bg-white dark:bg-background">
        <section className="py-20 sm:py-24">
          <AnimateInSection className="mx-auto max-w-xl px-4 text-center sm:px-6 lg:px-8">
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-primary">
              Account
            </span>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-foreground">
              Pending approval
            </h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-foreground-muted">
              Thanks for applying. We’re reviewing your account and will email you at{" "}
              <strong>{user.email}</strong> once you’re approved. You’ll then be able to access wholesale pricing and place orders.
            </p>
            <p className="mt-4 text-sm text-zinc-500 dark:text-foreground-muted">
              Questions? <Link href="/contact" className="text-brand-primary hover:underline">Contact us</Link>.
            </p>
            <p className="mt-8 text-sm text-zinc-500 dark:text-foreground-muted">
              <Link href="/" className="text-brand-primary hover:underline">
                Back to home
              </Link>
            </p>
          </AnimateInSection>
        </section>
      </div>
    );
  }

  if (status === "rejected") {
    return (
      <div className="font-sans bg-white dark:bg-background">
        <section className="py-20 sm:py-24">
          <AnimateInSection className="mx-auto max-w-xl px-4 text-center sm:px-6 lg:px-8">
            <span className="text-sm font-semibold uppercase tracking-wider text-red-600 dark:text-red-400">
              Account
            </span>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-foreground">
              Application declined
            </h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-foreground-muted">
              Your wholesale application was not approved. If you believe this was in error, please{" "}
              <Link href="/contact" className="font-medium text-brand-primary hover:underline">contact us</Link>.
            </p>
            <p className="mt-8 text-sm text-zinc-500 dark:text-foreground-muted">
              <Link href="/" className="text-brand-primary hover:underline">
                Back to home
              </Link>
            </p>
          </AnimateInSection>
        </section>
      </div>
    );
  }

  return (
    <div className="font-sans bg-white dark:bg-background">
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-primary">
            Dashboard
          </span>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-foreground">
            Welcome{companyName ? `, ${companyName}` : ""}
          </h1>
          <p className="mt-2 text-zinc-600 dark:text-foreground-muted">
            Your account is approved. Use the links below to browse and order.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/#categories"
              className="flex flex-col rounded-lg border border-zinc-200 dark:border-border bg-white dark:bg-brand-light p-6 shadow-sm transition-all hover:border-brand-primary/30 hover:shadow-md"
            >
              <span className="font-semibold text-zinc-900 dark:text-foreground">Catalog</span>
              <span className="mt-1 text-sm text-zinc-500 dark:text-foreground-muted">Browse categories and products</span>
            </Link>
            <div className="flex flex-col rounded-lg border border-zinc-200 dark:border-border bg-zinc-50/50 dark:bg-brand-light p-6">
              <span className="font-semibold text-zinc-500 dark:text-foreground-muted">Order history</span>
              <span className="mt-1 text-sm text-zinc-400 dark:text-foreground-muted">Coming soon</span>
            </div>
            <div className="flex flex-col rounded-lg border border-zinc-200 dark:border-border bg-zinc-50/50 dark:bg-brand-light p-6">
              <span className="font-semibold text-zinc-500 dark:text-foreground-muted">Invoices</span>
              <span className="mt-1 text-sm text-zinc-400 dark:text-foreground-muted">Coming soon</span>
            </div>
          </div>

          <div className="mt-12 rounded-lg border border-zinc-200 dark:border-border bg-zinc-50/50 dark:bg-brand-light p-6">
            <h2 className="font-semibold text-zinc-900 dark:text-foreground">Account details</h2>
            <dl className="mt-4 space-y-2 text-sm">
              {companyName && (
                <div>
                  <dt className="text-zinc-500 dark:text-foreground-muted">Company</dt>
                  <dd className="text-zinc-900 dark:text-foreground">{companyName}</dd>
                </div>
              )}
              <div>
                <dt className="text-zinc-500 dark:text-foreground-muted">Email</dt>
                <dd className="text-zinc-900 dark:text-foreground">{user.email}</dd>
              </div>
            </dl>
          </div>

          <p className="mt-8 text-sm text-zinc-500 dark:text-foreground-muted">
            <Link href="/" className="text-brand-primary hover:underline">
              Back to home
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
