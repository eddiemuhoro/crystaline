import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { productPlans } from "@/lib/site";

const onboardingSteps = [
  {
    title: "Blueprint & migration",
    detail:
      "We map your current workflows, cleanse data, and import inventory, price lists, and HR records.",
  },
  {
    title: "Configuration & training",
    detail:
      "Crystal ERP specialists tailor roles, automations, and dashboards while coaching your champions.",
  },
  {
    title: "Go-live & optimization",
    detail:
      "Hands-on hypercare plus quarterly business reviews keep new features aligned with growth.",
  },
];

export const metadata: Metadata = {
  title: "Crystal ERP Products",
  description:
    "Compare Crystal ERP Classic, Crystal ERP Cloud Suite, and the partner program to pick the right deployment for your team.",
  alternates: {
    canonical: "/products",
  },
  keywords: [
    "Crystal ERP pricing",
    "Crystal ERP cloud",
    "POS packages",
    "ERP partner program",
  ],
  openGraph: {
    url: "/products",
  },
  twitter: {
    title: "Crystal ERP Products",
    description:
      "Choose the plan that matches your retail, wholesale, or services operation.",
  },
};

export default function ProductsPage() {
  return (
    <div className="space-y-16">
      <PageBanner
        eyebrow="Product suite"
        title="Pick the deployment that fits your rollout."
        subtitle="From offline-ready desktops to modern cloud suites and partner toolkits, Crystal ERP meets you where you are and scales without limits."
      />
      <BreadcrumbJsonLd
        id="breadcrumb-products"
        items={[{ name: "Home" }, { name: "Products", path: "/products" }]}
      />

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Plans"
          title="Simple packages with transparent pricing."
          description="Every plan includes core POS, inventory, finance, and analytics plus 24/7 Kenyan support."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {productPlans.map((plan) => (
            <ProductCard key={plan.name} {...plan} />
          ))}
        </div>
      </section>

      <section className="space-y-8 rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
        <SectionHeading
          eyebrow="Onboarding"
          title="Launch in as little as three days."
          description="Our success engineers follow a proven three-phase playbook."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {onboardingSteps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-2xl border border-slate-100 p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-500">
                Step {index + 1}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{step.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="What's included"
          title="Every deployment ships with"
          description="Full-stack coverage from hardware provisioning to stakeholder reporting."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {[
            "POS terminals, printers, and mobile kits sourced and configured to your network.",
            "Hybrid storage with automated cloud backups and offline continuity.",
            "Role-based security, MFA, and audit logs that satisfy franchise standards.",
            "Unlimited analytics views plus executive scorecards tailored to your KPIs.",
          ].map((item) => (
            <article
              key={item}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
            >
              <p className="text-sm text-slate-600">{item}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
