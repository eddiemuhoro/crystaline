import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureCard } from "@/components/FeatureCard";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { featureHighlights } from "@/lib/site";

const automationTracks = [
  {
    title: "Real-time inventory intelligence",
    bullets: [
      "SKU, batch, and serial tracking with reorder automation",
      "Supplier scorecards with landed-cost calculations",
      "Omnichannel catalog sync across web, POS, and marketplaces",
    ],
  },
  {
    title: "Finance, tax, and compliance",
    bullets: [
      "Automated journal entries and expense workflows",
      "VAT and ETIMS-ready reporting with audit trails",
      "Bank feeds, Mpesa reconciliation, and treasury dashboards",
    ],
  },
  {
    title: "People and productivity",
    bullets: [
      "Attendance, rostering, and biometric-ready timesheets",
      "Performance reviews linked to goals and incentives",
      "Learning modules and SOP acknowledgements",
    ],
  },
  {
    title: "Executive intelligence",
    bullets: [
      "Drag-and-drop dashboards with device-aware layout",
      "Scheduled KPI digests for email and WhatsApp",
      "Embedded analytics via secure, sharable links",
    ],
  },
];

export const metadata: Metadata = {
  title: "Crystal ERP Features",
  description:
    "Discover Crystal ERP’s ERP capabilities: POS, inventory, finance, HR, analytics, automation, and integrations for Kenyan businesses.",
  alternates: {
    canonical: "/features",
  },
  keywords: [
    "Crystal ERP features",
    "ERP features Kenya",
    "POS capabilities",
    "inventory automation",
  ],
  openGraph: {
    url: "/features",
  },
  twitter: {
    title: "Crystal ERP Feature Map",
    description:
      "See how Crystal ERP unifies inventory, finance, HR, and analytics.",
  },
};

export default function FeaturesPage() {
  return (
    <div className="space-y-16">
      <PageBanner
        eyebrow="Feature map"
        title="Automate every workflow, from tills to boardrooms."
        subtitle="Crystal ERP ships modular building blocks so you can activate POS, ERP, and analytics components that match where your business is headed."
      />
      <BreadcrumbJsonLd
        id="breadcrumb-features"
        items={[{ name: "Home" }, { name: "Features", path: "/features" }]}
      />

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Core pillars"
          title="Full-stack ERP for retail and services."
          description="Every module shares the same dataset so you can trust numbers, accelerate approvals, and adapt faster."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {featureHighlights.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      <section className="space-y-8 rounded-3xl border border-brand-100 bg-brand-50 p-8 shadow-sm">
        <SectionHeading
          eyebrow="Automation tracks"
          title="Switch on only what you need—scale when ready."
          description="Mix and match automation packs that plug into your current stack via REST or file-based integrations."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {automationTracks.map((track) => (
            <article
              key={track.title}
              className="rounded-2xl border border-brand-200/60 bg-white p-6"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {track.title}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {track.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span aria-hidden>•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-8 rounded-3xl border border-brand-100 bg-brand-50 p-8 shadow-sm">
        <SectionHeading
          eyebrow="Onboarding"
          title="Launch in as little as three days."
          description="Our success engineers follow a proven three-phase playbook."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {[
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
          ].map((step, index) => (
            <article
              key={step.title}
              className="rounded-2xl border border-brand-200/60 bg-white p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
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

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Integrations"
          title="Connect Crystal ERP to the rest of your stack."
          description="Open APIs, pre-built connectors, and secure webhooks keep your finance, ecommerce, and fulfillment flows in sync."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {["Mpesa & Payments", "Accounting", "Ecommerce & Marketplaces"].map(
            (category) => (
              <article
                key={category}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {category}
                </h3>
                <p className="mt-3 text-sm text-slate-600">
                  Secure connectors for {category.toLowerCase()} with rate
                  limits, sandbox access, and dedicated monitoring dashboards.
                </p>
              </article>
            ),
          )}
        </div>
      </section>
    </div>
  );
}
