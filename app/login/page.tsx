import { AnimateInSection } from "@/components/AnimateIn";
import { LoginForm } from "@/components/LoginForm";

export const metadata = {
  title: "Login | SHEMB Group",
  description: "Sign in to your SHEMB Group wholesale account.",
};

export default function LoginPage() {
  return (
    <div className="font-sans bg-white dark:bg-background">
      <section className="py-20 sm:py-24">
        <AnimateInSection className="mx-auto max-w-md px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-primary">
            Account
          </span>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-foreground">
            Login
          </h1>
          <p className="mt-2 text-zinc-600 dark:text-foreground-muted">
            Sign in to view pricing, place orders, and manage your account.
          </p>
          <LoginForm />
        </AnimateInSection>
      </section>
    </div>
  );
}
