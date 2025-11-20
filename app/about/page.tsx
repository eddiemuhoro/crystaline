import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { SectionHeading } from "@/components/SectionHeading";
import { StatGrid } from "@/components/StatGrid";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { stats, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Crystal ERP",
  description:
    "Learn how Crystal ERP empowers Kenyan retailers, wholesalers, and service teams with dependable POS, inventory, finance, and HR automation.",
  alternates: {
    canonical: "/about",
  },
  keywords: [
    "Crystal ERP company",
    "Kenya POS provider",
    "ERP implementation Nairobi",
  ],
  openGraph: {
    url: "/about",
  },
  twitter: {
    title: "About Crystal ERP",
    description:
      "Meet the Kenyan team modernizing ERP and POS for ambitious businesses.",
  },
};

export default function AboutPage() {
  return (
    <div className="space-y-16">
      <PageBanner
        eyebrow="Our story"
        title="We build mission-critical software for African commerce."
        subtitle="Crystal ERP blends two decades of POS experience with a cloud-native ERP approach so Kenyan businesses can modernize without sacrificing reliability."
      />
      <BreadcrumbJsonLd
        id="breadcrumb-about"
        items={[{ name: "Home" }, { name: "About", path: "/about" }]}
      />

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Mission"
          title="Digitize every workflow that powers Kenyan entrepreneurs."
          description="From the first till in Nairobi CBD to franchise rollouts across the region, our mandate is simple: bring clarity, speed, and insight to the frontline teams that keep the economy moving."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Customer-first rollouts
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              Implementation engineers co-create blueprints with your finance,
              HR, and retail leads. Every switch-over includes data validation,
              playbook training, and on-site go-live assistance.
            </p>
          </article>
          <article className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
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

      <section className="space-y-8 rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
        <SectionHeading
          eyebrow="Snapshot"
          title="Crystal ERP by the numbers."
          description="Thousands of daily transactions and support hours keep shaping our roadmap."
        />
        <StatGrid stats={stats} />
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Leadership"
          title="A multidisciplinary team of product operators."
          description="Our founders span retail operations, finance, and product engineering—ensuring the platform speaks your language."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {["Operations", "Product", "Customer Success"].map((track) => (
            <article
              key={track}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {track} Office
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                Seasoned leads partner with Kenyan retailers, wholesalers, and
                manufacturers to co-design resilient workflows centered on
                measurable ROI.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
        <SectionHeading
          eyebrow="Contact"
          title="Let's meet at our Nairobi HQ."
          description="Book a discovery call or drop by our offices for a tailored walkthrough."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3 rounded-2xl border border-slate-100 bg-slate-50 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Address
            </p>
            <p className="text-base text-slate-900">
              {siteConfig.contact.addressLine}
            </p>
          </div>
          <div className="space-y-3 rounded-2xl border border-slate-100 bg-slate-50 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Support
            </p>
            <a
              className="block text-base text-slate-900"
              href={`tel:${siteConfig.contact.phone}`}
            >
              {siteConfig.contact.phone}
            </a>
            <a
              className="block text-base text-slate-900"
              href={`mailto:${siteConfig.contact.email}`}
            >
              {siteConfig.contact.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
