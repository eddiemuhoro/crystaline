import type { Metadata } from "next";
import Image from "next/image";
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
  title: "About Crystaline ERP",
  description:
    "Learn how Crystaline ERP empowers Kenyan retailers, wholesalers, and service teams with dependable POS, inventory, finance, and HR automation.",
  alternates: {
    canonical: "/about",
  },
  keywords: [
    "Crystaline ERP company",
    "Kenya POS provider",
    "ERP implementation Nairobi",
  ],
  openGraph: {
    url: "/about",
  },
  twitter: {
    title: "About Crystaline ERP",
    description:
      "Meet the Kenyan team modernizing ERP and POS for ambitious businesses.",
  },
};

export default function AboutPage() {
  return (
    <div className="space-y-16 pb-16">
      <PageBanner
        eyebrow="About us"
        title="We build mission-critical software for African commerce."
        subtitle="Crystaline ERP blends two decades of POS experience with a cloud-native ERP approach so Kenyan businesses can modernize without sacrificing reliability."
      />
      <BreadcrumbJsonLd
        id="breadcrumb-about"
        items={[{ name: "Home" }, { name: "About", path: "/about" }]}
      />

      <section className="space-y-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Mission"
          title="Digitize every workflow that powers Kenyan entrepreneurs."
          description="From the first till in Nairobi CBD to franchise rollouts across the region, our mandate is simple: bring clarity, speed, and insight to the frontline teams that keep the economy moving."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
            <h3 className="text-base sm:text-lg font-semibold text-slate-900">
              Customer-first rollouts
            </h3>
            <p className="mt-3 text-sm  text-slate-600">
              Implementation engineers co-create blueprints with your finance,
              HR, and retail leads. Every switch-over includes data validation,
              playbook training, and on-site go-live assistance.
            </p>
          </article>
          <article className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
            <h3 className="text-base sm:text-lg font-semibold text-slate-900">
              Local innovation
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              Our Nairobi product lab ships localized compliance, Mpesa
              integrations, and industry accelerators informed by Kenyan
              operators—not generic global specs.
            </p>
          </article>
        </div>
      </section>

      {/* Brought over from Features Page */}
      <section className="space-y-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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

      <section className="space-y-8 rounded-3xl border border-brand-100 bg-brand-50 p-6 sm:p-8 shadow-sm mx-4 sm:mx-6 max-w-7xl lg:mx-auto">
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
              <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                {track.title}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {track.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span aria-hidden className="text-brand-500">
                      •
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ">
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
                "Crystaline ERP specialists tailor roles, automations, and dashboards while coaching your champions.",
            },
            {
              title: "Go-live & optimization",
              detail:
                "Hands-on hypercare plus quarterly business reviews keep new features aligned with growth.",
            },
          ].map((step, index) => (
            <article
              key={step.title}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
                Step {index + 1}
              </p>
              <h3 className="mt-3 text-base sm:text-lg font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{step.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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

      <section className="space-y-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ">
        <SectionHeading
          eyebrow="Integrations"
          title="Connect Crystaline ERP to the rest of your stack."
          description="Open APIs, pre-built connectors, and secure webhooks keep your finance, ecommerce, and fulfillment flows in sync."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {["Mpesa & Payments", "Accounting", "Ecommerce & Marketplaces"].map(
            (category) => (
              <article
                key={category}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
              >
                <h3 className="text-base sm:text-lg font-semibold text-slate-900">
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
      {/* End Brought over from Features Page */}

      <section className="space-y-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Leadership"
          title="Built by operators who understand Kenyan commerce."
          description="Our leadership team combines decades of retail operations, software engineering, and customer success experience across East Africa."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <article className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-brand-50">
              <Image
                src="/sammy.jpg"
                alt="Sammy Kinyua"
                width={64}
                height={64}
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">
              Sammy Kinyua
            </h3>
            <p className="text-sm font-medium text-brand-600">
              Senior Director & Founder
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Over 15 years of experience in the IT field. Holds a degree in
              business management from Kenyatta University and a diploma in
              computer science. Pioneered Crystaline ERP&apos;s vision to
              modernize African commerce.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-brand-50">
              <Image
                src="/nahashon.jpg"
                alt="Nahashon Gathai"
                width={64}
                height={64}
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">
              Nahashon Gathai
            </h3>
            <p className="text-sm font-medium text-brand-600">CEO & Director</p>
            <p className="mt-3 text-sm text-slate-600">
              8+ years of leadership experience. Former CEO at Collection Africa
              Ltd, Senior Auditor at Ernst & Young, and Group Finance Manager at
              Swivel Group. Certified Information Systems Auditor (CISA) and
              CPA-K.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-brand-50">
              <Image
                src="/tim.jpg"
                alt="Timothy Ndegwa"
                width={64}
                height={64}
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">
              Timothy Ndegwa
            </h3>
            <p className="text-sm font-medium text-brand-600">
              Marketing Manager & Director
            </p>
            <p className="mt-3 text-sm text-slate-600">
              IT specialist with 7+ years of experience. Served as General
              Manager at Sajsoft for three years. Has installed and managed IT
              platforms for dozens of Kenyan businesses including Crystaline ERP
              deployments.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-2xl font-bold text-brand-700">
              JM
            </div>
            <h3 className="text-lg font-semibold text-slate-900">
              Joseph Moshi
            </h3>
            <p className="text-sm font-medium text-brand-600">
              Chief Technology Officer
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Leads Crystaline ERP&apos;s engineering strategy, platform
              reliability, and product architecture. Focused on scalable
              systems, secure integrations, and delivery practices that keep
              mission- critical retail and finance workflows running smoothly.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
