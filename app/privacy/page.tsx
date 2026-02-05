import Link from "next/link";
import { AnimateInSection } from "@/components/AnimateIn";

export const metadata = {
  title: "Privacy Policy | SHEMB Group",
  description: "Privacy policy for SHEMB Group. How we collect, use, and protect your personal data.",
};

export default function PrivacyPage() {
  return (
    <div className="font-sans bg-white dark:bg-background">
      <section className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-b from-brand-light/30 via-warm-bg to-warm-bg dark:from-brand-light/20 dark:via-warm-bg dark:to-warm-bg">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <AnimateInSection>
            <span className="text-sm font-semibold uppercase tracking-wider text-accent-gold">
              Legal
            </span>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-foreground sm:text-4xl">
              Privacy Policy
            </h1>
            <p className="mt-2 text-zinc-600 dark:text-foreground-muted">
              Last updated: February 2026
            </p>
          </AnimateInSection>
        </div>
      </section>

      <section className="border-t border-zinc-200/60 dark:border-border py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-12">
          <AnimateInSection className="prose prose-zinc dark:prose-invert max-w-none">
            <div className="space-y-10 text-zinc-600 dark:text-foreground-muted">
              <div>
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-foreground mb-3">1. Introduction</h2>
                <p>
                  SHEMB Group (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our website at shembgroup.com and related services (the &quot;Site&quot;), including when you register for a wholesale account, place inquiries, or contact us. By using the Site, you agree to the practices described in this policy.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-foreground mb-3">2. Information We Collect</h2>
                <p className="mb-3">We may collect the following categories of information:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong className="text-zinc-900 dark:text-foreground">Account and registration data:</strong> When you register for a wholesale account, we collect your name, email address, company name, and password. We use this to create and manage your account and to verify your eligibility for wholesale services.</li>
                  <li><strong className="text-zinc-900 dark:text-foreground">Contact and inquiry data:</strong> When you use our contact form or email us, we collect your name, email address, subject, and message content. We use this to respond to your inquiries and to maintain business communications.</li>
                  <li><strong className="text-zinc-900 dark:text-foreground">Technical and usage data:</strong> When you visit the Site, we may automatically collect your IP address, browser type, device type, referring URL, and pages visited. We use this to operate, secure, and improve the Site and to understand how it is used.</li>
                  <li><strong className="text-zinc-900 dark:text-foreground">Cookies and similar technologies:</strong> We use cookies and similar technologies (e.g. local storage) for essential site functionality, to remember your preferences (such as theme choice), and to analyse site usage. You can control cookies through your browser settings.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-foreground mb-3">3. How We Use Your Information</h2>
                <p className="mb-3">We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Provide, maintain, and improve our Site and wholesale services.</li>
                  <li>Process and manage your account, including approval and account administration.</li>
                  <li>Respond to your inquiries and contact requests.</li>
                  <li>Send you service-related communications (e.g. account status, order-related messages).</li>
                  <li>Send marketing or promotional communications where you have agreed or where permitted by law (you may opt out at any time).</li>
                  <li>Comply with legal obligations, enforce our terms, and protect our rights and the security of our users.</li>
                  <li>Analyse and improve the performance and usability of the Site.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-foreground mb-3">4. Legal Basis for Processing (UK/EEA)</h2>
                <p>
                  Where applicable under UK and European data protection law, we process your personal data on the basis of: (a) performance of a contract (e.g. to provide your account and services); (b) your consent (e.g. for marketing or non-essential cookies); (c) our legitimate interests (e.g. to operate and secure the Site, respond to inquiries, and improve our services); and (d) compliance with legal obligations.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-foreground mb-3">5. Sharing and Disclosure</h2>
                <p className="mb-3">We may share your information with:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong className="text-zinc-900 dark:text-foreground">Service providers:</strong> Third parties that help us operate the Site and provide services (e.g. hosting, authentication, email delivery, analytics). These providers are contractually required to protect your data and use it only for the purposes we specify.</li>
                  <li><strong className="text-zinc-900 dark:text-foreground">Legal and safety:</strong> Authorities or other parties when required by law, or when necessary to protect our rights, your safety, or the safety of others.</li>
                  <li><strong className="text-zinc-900 dark:text-foreground">Business transfers:</strong> In connection with a merger, sale, or restructuring of our business, in which case your data may be transferred as part of that transaction (subject to this policy).</li>
                </ul>
                <p className="mt-3">We do not sell your personal information to third parties for their marketing purposes.</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-foreground mb-3">6. Data Retention</h2>
                <p>
                  We retain your information only for as long as necessary to fulfil the purposes set out in this policy, including to satisfy legal, accounting, or reporting requirements. Account data is retained while your account is active and for a reasonable period after closure. Contact form and inquiry data are retained as needed to handle your request and for legitimate business and legal purposes. Technical and usage data may be retained in aggregated or anonymised form for longer.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-foreground mb-3">7. Security</h2>
                <p>
                  We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. These include secure hosting, encryption where appropriate, and access controls. No method of transmission over the internet or electronic storage is 100% secure; we cannot guarantee absolute security but we take your privacy seriously.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-foreground mb-3">8. Your Rights</h2>
                <p className="mb-3">Depending on your location, you may have the right to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Access the personal data we hold about you and receive a copy.</li>
                  <li>Correct or update inaccurate or incomplete data.</li>
                  <li>Request erasure of your data in certain circumstances.</li>
                  <li>Restrict or object to certain processing of your data.</li>
                  <li>Data portability (receive your data in a structured, machine-readable format).</li>
                  <li>Withdraw consent where processing is based on consent.</li>
                  <li>Lodge a complaint with a supervisory authority (e.g. the ICO in the UK).</li>
                </ul>
                <p className="mt-3">
                  To exercise any of these rights, please contact us at{" "}
                  <a href="mailto:info@shembgroup.com" className="text-brand-primary hover:underline">info@shembgroup.com</a>.
                  We will respond within the timeframes required by applicable law.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-foreground mb-3">9. International Transfers</h2>
                <p>
                  Your information may be processed in countries outside your country of residence, including where data protection laws may differ. Where we transfer data from the UK or EEA to a country not deemed to provide adequate protection, we put in place appropriate safeguards (e.g. standard contractual clauses or other approved mechanisms) to protect your data.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-foreground mb-3">10. Children</h2>
                <p>
                  The Site is not directed at individuals under the age of 18. We do not knowingly collect personal data from children. If you believe we have collected data from a child, please contact us and we will take steps to delete it.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-foreground mb-3">11. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will post the updated policy on this page and, where appropriate, notify you by email or through the Site. The &quot;Last updated&quot; date at the top indicates when the policy was last revised. Your continued use of the Site after changes constitutes acceptance of the updated policy.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-foreground mb-3">12. Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy or our data practices, you can contact us at:
                </p>
                <p className="mt-2">
                  <strong className="text-zinc-900 dark:text-foreground">SHEMB Group</strong><br />
                  Email: <a href="mailto:info@shembgroup.com" className="text-brand-primary hover:underline">info@shembgroup.com</a>
                </p>
              </div>
            </div>
          </AnimateInSection>

          <p className="text-sm text-zinc-500 dark:text-foreground-muted">
            <Link href="/" className="text-brand-primary hover:underline">
              Back to home
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
