import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Understand how Crystal ERP collects, uses, and secures your data.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="space-y-10">
      <PageBanner
        eyebrow="Privacy"
        title="We treat your operational data with absolute care."
        subtitle="Crystal ERP encrypts data in transit and at rest, limits access to vetted engineers, and aligns with Kenyan data protection laws."
      />
      <section className="space-y-6 rounded-3xl border border-slate-100 bg-white p-8 shadow-sm text-sm text-slate-600">
        <p>
          Crystal ERP only collects information necessary to configure your ERP
          deployment, offer support, and comply with legal obligations. We do
          not sell or rent customer data. Service providers engaged for hosting
          or analytics must meet the same security standards and can only
          process data under our instructions.
        </p>
        <p>
          Data access is role-based, logged, and reviewed regularly. Customers
          may request data exports or deletion at any time by emailing
          privacy@sajsoft.co.ke. For full details, contact our compliance desk
          and we will share the extended policy PDF.
        </p>
      </section>
    </div>
  );
}
