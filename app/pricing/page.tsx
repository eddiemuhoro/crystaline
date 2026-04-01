import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { SectionHeading } from "@/components/SectionHeading";
import { PackageCard } from "@/components/PackageCard";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { CallToAction } from "@/components/CallToAction";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { pricingPackages, faqEntries, testimonialQuotes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Crystaline ERP Pricing Packages",
  description:
    "Compare Crystaline ERP pricing plans and packages to pick the right deployment for your team.",
  alternates: {
    canonical: "/pricing",
  },
  keywords: [
    "Crystaline ERP pricing",
    "Crystaline ERP packages",
    "POS packages",
    "ERP plans",
  ],
  openGraph: {
    url: "/pricing",
  },
  twitter: {
    title: "Crystaline ERP Pricing Packages",
    description:
      "Choose the pricing plan that matches your retail, wholesale, or services operation.",
  },
};

export default function PricingPage() {
  return (
    <div className="space-y-16 pb-16">
      <PageBanner
        eyebrow="Pricing & Packages"
        title="Simple, transparent pricing"
        subtitle="The packages only include software only not hardware prices."
      />
      <BreadcrumbJsonLd
        id="breadcrumb-pricing"
        items={[{ name: "Home" }, { name: "Pricing", path: "/pricing" }]}
      />

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Our Plans"
          title="Choose your Crystaline ERP stack."
          description="The annual license fee is 20% of the total price of the software installed."
        />

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4 xl:px-8">
          {pricingPackages.map((pkg) => (
            <PackageCard key={pkg.name} {...pkg} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-sm">
            Need a custom solution?{" "}
            <a
              href="https://wa.me/254725473779?text=I'm%20interested%20in%20Crystaline%20ERP"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-600 hover:text-emerald-700"
            >
              Contact us
            </a>{" "}
            for enterprise pricing.
          </p>
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
