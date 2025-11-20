import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureCard } from "@/components/FeatureCard";
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

      <section className="space-y-8 rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
        <SectionHeading
          eyebrow="Automation tracks"
          title="Switch on only what you need—scale when ready."
          description="Mix and match automation packs that plug into your current stack via REST or file-based integrations."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {automationTracks.map((track) => (
            <article
              key={track.title}
              className="rounded-2xl border border-slate-100 p-6"
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
            )
          )}
        </div>
      </section>
    </div>
  );
}
