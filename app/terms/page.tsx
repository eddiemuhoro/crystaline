import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Review Crystal ERP subscription terms, licensing, and support scope.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="space-y-10">
      <PageBanner
        eyebrow="Terms"
        title="Clear commitments for reliable ERP partnerships."
        subtitle="Crystal ERP subscriptions include software licensing, support SLAs, and fair-use of integrations. Below is a concise summary."
      />
      <section className="space-y-6 rounded-3xl border border-slate-100 bg-white p-8 shadow-sm text-sm text-slate-600">
        <p>
          Subscriptions renew monthly or annually unless cancelled 30 days prior
          to the renewal date. Customers retain ownership of their operational
          data at all times. Crystal ERP provides platform access, updates, and
          24/7 support channels aligned with the selected plan.
        </p>
        <p>
          Acceptable use prohibits malicious activity, credential sharing beyond
          licensed users, or attempts to reverse engineer the platform. Any
          hardware provided remains Crystal ERP property until fully paid.
          Detailed legal language is available upon request at
          legal@sajsoft.co.ke.
        </p>
      </section>
    </div>
  );
}
