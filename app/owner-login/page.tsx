import Link from "next/link";
import { redirect } from "next/navigation";
import { setOwnerSession, getOwnerSession } from "@/lib/owner-session";
import { OwnerLoginForm } from "./OwnerLoginForm";
import { AnimateInSection } from "@/components/AnimateIn";

export const metadata = {
  title: "Owner login | SHEMB Group",
  description: "Owner sign in.",
};

export default async function OwnerLoginPage() {
  const isOwner = await getOwnerSession();
  if (isOwner) redirect("/admin");

  return (
    <div className="min-h-screen bg-zinc-50 font-sans flex flex-col items-center justify-center px-4">
      <AnimateInSection className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-zinc-900">Owner login</h1>
        <p className="mt-1 text-sm text-zinc-500">
          Sign in with your owner credentials. Use the same site for client login.
        </p>
        <OwnerLoginForm />
        <p className="mt-6 text-center text-sm text-zinc-500">
          <Link href="/" className="text-brand-primary hover:underline">
            Back to home
          </Link>
        </p>
      </AnimateInSection>
    </div>
  );
}
