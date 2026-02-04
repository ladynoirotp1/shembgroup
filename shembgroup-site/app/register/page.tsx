import { AnimateInSection } from "@/components/AnimateIn";
import { RegisterForm } from "@/components/RegisterForm";

export const metadata = {
  title: "Register | Shemb Group",
  description: "Create a Shemb Group wholesale account.",
};

export default function RegisterPage() {
  return (
    <div className="font-sans bg-white">
      <section className="py-20 sm:py-24">
        <AnimateInSection className="mx-auto max-w-md px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-primary">
            Account
          </span>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900">
            Register
          </h1>
          <p className="mt-2 text-zinc-600">
            Create an account to access wholesale pricing, place orders, and receive promotions.
          </p>
          <RegisterForm />
        </AnimateInSection>
      </section>
    </div>
  );
}
