import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { SectionHeading } from "@/components/SectionHeading";
import { PackageCard } from "@/components/PackageCard";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { CallToAction } from "@/components/CallToAction";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { pricingPackages, faqEntries, testimonialQuotes } from "@/lib/site";


export const metadata: Metadata = {
  title: "Crystal ERP Pricing Packages",
  description:
    "Compare Crystal ERP pricing plans and packages to pick the right deployment for your team.",
  alternates: {
    canonical: "/pricing",
  },
  keywords: [
    "Crystal ERP pricing",
    "Crystal ERP packages",
    "POS packages",
    "ERP plans",
  ],
  openGraph: {
    url: "/pricing",
  },
  twitter: {
    title: "Crystal ERP Pricing Packages",
    description:
      "Choose the pricing plan that matches your retail, wholesale, or services operation.",
  },
};

export default function PricingPage() {
  return (
    <div className="space-y-16 pb-16">
      <PageBanner
        eyebrow="Pricing & Packages"
        title="Packages for every stage of growth."
        subtitle="Straightforward pricing with no hidden fees. All plans include free onboarding and local support."
      />
      <BreadcrumbJsonLd
        id="breadcrumb-pricing"
        items={[{ name: "Home" }, { name: "Pricing", path: "/pricing" }]}
      />

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Our Plans"
          title="Choose your Crystal ERP stack."
          description="From single-store retail to multi-location enterprises, pick the perfect fit for your scale."
        />
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-3 lg:px-6">
          {pricingPackages.map((pkg) => (
            <PackageCard key={pkg.name} {...pkg} />
          ))}
        </div>
      </section>

      <section className="space-y-8 animate-fade-in-up">
        <SectionHeading
          eyebrow="Customer love"
          title="See what teams are saying about our packages."
          description="Hear from Kenyan businesses already running on our stack."
        />
        <TestimonialSlider />
      </section>

      <section
        id="faq"
        className="mx-auto max-w-4xl space-y-8 rounded-3xl border border-brand-100 bg-brand-50 p-8 shadow-sm"
      >
        <SectionHeading
          eyebrow="FAQ"
          title="Have questions about our pricing?"
          description="Our solutions team handles deployment, training, and integrations."
        />
        <div className="space-y-4">
          {faqEntries.map((faq) => (
            <details
              key={faq.question}
              className="rounded-2xl border border-brand-200/60 bg-white p-4"
            >
              <summary className="cursor-pointer text-base font-semibold text-slate-900">
                {faq.question}
              </summary>
              <p className="mt-2 text-sm text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <CallToAction />
    </div>
  );
}
