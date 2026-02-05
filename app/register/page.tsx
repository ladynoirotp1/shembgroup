import { AnimateInSection } from "@/components/AnimateIn";
import { RegisterForm } from "@/components/RegisterForm";

export const metadata = {
  title: "Register | SHEMB Group",
  description: "Create a SHEMB Group wholesale account.",
};

export default function RegisterPage() {
  return (
    <div className="font-sans bg-white dark:bg-background">
      <section className="py-20 sm:py-24">
        <AnimateInSection className="mx-auto max-w-md px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-primary">
            Account
          </span>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-foreground">
            Register
          </h1>
          <p className="mt-2 text-zinc-600 dark:text-foreground-muted">
            Create an account to access wholesale pricing and place orders.
          </p>
          <RegisterForm />
        </AnimateInSection>
      </section>
    </div>
  );
}
