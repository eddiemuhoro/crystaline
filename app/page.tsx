import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { CallToAction } from "@/components/CallToAction";
import { FeatureCard } from "@/components/FeatureCard";
import { Hero } from "@/components/Hero";
import { PackageCard } from "@/components/PackageCard";
import { SectionHeading } from "@/components/SectionHeading";
import { StatGrid } from "@/components/StatGrid";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import {
  faqEntries,
  featureHighlights,
  pricingPackages,
  siteConfig,
  solutionPillars,
  stats,
  testimonialQuotes,
} from "@/lib/site";
import Link from "next/link";
import Script from "next/script";

export default function HomePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqEntries.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8 pt-4 sm:pt-2">
        <Hero />
      </div>
      <BreadcrumbJsonLd id="breadcrumb-home" items={[{ name: "Home" }]} />

      <div className="mt-6 sm:mt-4 lg:mt-12 space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16 px-4 sm:px-6 lg:px-8 pb-16">
        <section id="about" className="space-y-4 ">
          <SectionHeading
            eyebrow="Why Crystal ERP"
            title="ERP precision with POS speed."
            description="From head office to tills, Crystal ERP unifies every workflow in one secure Kenyan platform so you can scale faster with fewer tools."
          />
          <StatGrid stats={stats} />
        </section>

        <section id="features" className="space-y-4 ">
          <SectionHeading
            eyebrow="Feature snapshot"
            title="Tools that keep every department in flow."
            description="Portable dashboards, automation blocks, and audit-proof data pipelines accelerate finance, retail, and operations teams alike."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {featureHighlights.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
          <p className="text-sm text-slate-500">
            Explore every automation block in detail on the{" "}
            <Link
              href="/about"
              className="font-semibold text-brand-700 underline-offset-4 hover:underline"
            >
              Crystal ERP feature map
            </Link>
            .
          </p>
        </section>

        {/* <section id="products" className="space-y-8 animate-fade-in-up">
        <SectionHeading
          eyebrow="Deployment options"
          title="Choose your Crystal ERP stack."
          description="From classic POS terminals to full cloud ERP suites, pick the perfect fit for your scale."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {productPlans.map((plan) => (
            <ProductCard
              key={plan.id}
              title={plan.name}
              subtitle={plan.price}
              description={plan.description}
              price={2900}
              href={plan.href}
              highlights={plan.highlights}
            />
          ))}
        </div>
        <p className="text-sm text-slate-500">
          <Link href="/products" className="font-semibold text-brand-700 underline-offset-4 hover:underline">
            See all products →
          </Link>
        </p>
      </section> */}

        <section id="pricing" className="space-y-6 animate-fade-in-up">
          <SectionHeading
            eyebrow="Pricing plans"
            title="Packages for every stage of growth."
            description="Straightforward pricing with no hidden fees. All plans include free onboarding and local support."
          />
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
            {pricingPackages.map((pkg) => (
              <PackageCard key={pkg.name} {...pkg} />
            ))}
          </div>
        </section>

        <section
          id="services"
          className="space-y-8 sm:space-y-10 rounded-3xl border border-brand-100 bg-brand-50 p-6 sm:p-8 shadow-sm animate-fade-in-up"
        >
          <SectionHeading
            eyebrow="Industry playbooks"
            title="Proven templates for every business model."
            description="Pick a pillar below and deploy best-practice approvals, automations, and KPIs overnight."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {solutionPillars.map((pillar) => (
              <FeatureCard
                key={pillar.name}
                icon={pillar.icon}
                title={pillar.name}
                description={`${pillar.summary} ${pillar.points.join("; ")}`}
              />
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Customer love"
            title="Teams trust Crystal ERP to make data-driven moves."
            description="Hear from Kenyan retailers, wholesalers, and service providers already running on our stack."
          />
          <TestimonialSlider />
        </section>

        <section className="space-y-6 rounded-3xl border border-brand-100 bg-brand-50 p-6 sm:p-8 shadow-sm">
          <SectionHeading
            eyebrow="Local expertise"
            title="Embedded in Nairobi, trusted countrywide."
            description="Our rollout squads operate from the CBD and support outlets in Mombasa, Kisumu, Eldoret, and every county in between."
          />
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-brand-200/60 bg-white p-6 text-sm text-slate-600">
              <p>
                Visit our{" "}
                <Link
                  href="/about#contact"
                  className="font-semibold text-brand-700 underline-offset-4 hover:underline"
                >
                  Nairobi HQ
                </Link>{" "}
                for onsite demos or book a remote consultation. We also ship{" "}
                <Link
                  href="/products#classic"
                  className="font-semibold text-brand-700 underline-offset-4 hover:underline"
                >
                  POS hardware kits
                </Link>{" "}
                with pre-configured Crystal ERP builds.
              </p>
            </article>
            <article className="rounded-2xl border border-brand-200/60 bg-white p-6 text-sm text-slate-600">
              <p>
                Need deeper feature guidance? Jump into the{" "}
                <Link
                  href="/about"
                  className="font-semibold text-brand-700 underline-offset-4 hover:underline"
                >
                  feature map
                </Link>{" "}
                to explore accounting, inventory, and HR automations, or compare
                deployment models on our{" "}
                <Link
                  href="/products"
                  className="font-semibold text-brand-700 underline-offset-4 hover:underline"
                >
                  products page
                </Link>
                .
              </p>
              <p className="mt-3">
                Looking for rollout playbooks? Visit the{" "}
                <Link
                  href="/blogs"
                  className="font-medium text-brand-700 underline underline-offset-4 hover:no-underline"
                >
                  blog
                </Link>{" "}
                for detailed guides.
              </p>
            </article>
          </div>
        </section>

        <section
          id="faq"
          className="space-y-8 rounded-3xl border border-brand-100 bg-brand-50 p-6 sm:p-8 shadow-sm"
        >
          <SectionHeading
            eyebrow="FAQ"
            title="Everything you need to go live smoothly."
            description="Our solutions team handles migration, training, and integrations."
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
          <Script
            id="faq-schema"
            type="application/ld+json"
            strategy="afterInteractive"
          >
            {JSON.stringify(faqJsonLd)}
          </Script>
        </section>

        {/* Contact Section */}
        <section id="contact" className="space-y-8">
          <SectionHeading
            eyebrow="Contact Us"
            title="We'd love to hear from you"
            description="Reach out to our team in Nairobi for demos, support, or partnership inquiries."
            align="center"
          />

          <div className="grid gap-6 md:grid-cols-3">
            {/* Location card */}
            <div className="group flex flex-col items-center gap-5 rounded-2xl border border-brand-200/60 bg-white p-6 sm:p-8 text-center shadow-sm transition-all duration-300 hover:border-brand-300 hover:shadow-md hover:shadow-brand-600/10">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-600 shadow-lg shadow-brand-600/25 transition-transform duration-300 group-hover:scale-110">
                <svg
                  className="h-7 w-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base font-bold text-slate-900">
                  Our Location
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">
                  {siteConfig.contact.addressLine}
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=The+Bazaar+Nairobi+CBD+Kenya"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto text-xs font-semibold text-brand-700 transition-colors hover:text-brand-800"
              >
                View on map →
              </a>
            </div>

            {/* Phone card */}
            <div className="group flex flex-col items-center gap-5 rounded-2xl border border-brand-200/60 bg-white p-6 sm:p-8 text-center shadow-sm transition-all duration-300 hover:border-brand-300 hover:shadow-md hover:shadow-brand-600/10">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-600 shadow-lg shadow-brand-600/25 transition-transform duration-300 group-hover:scale-110">
                <svg
                  className="h-7 w-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base font-bold text-slate-900">
                  Phone Number
                </h3>
                <p className="text-sm text-slate-500">24hrs support</p>
              </div>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="mt-auto text-sm font-semibold text-brand-700 transition-colors hover:text-brand-800"
              >
                {siteConfig.contact.phone}
              </a>
            </div>

            {/* Email card */}
            <div className="group flex flex-col items-center gap-5 rounded-2xl border border-brand-200/60 bg-white p-6 sm:p-8 text-center shadow-sm transition-all duration-300 hover:border-brand-300 hover:shadow-md hover:shadow-brand-600/10">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-600 shadow-lg shadow-brand-600/25 transition-transform duration-300 group-hover:scale-110">
                <svg
                  className="h-7 w-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base font-bold text-slate-900">
                  Email Address
                </h3>
                <p className="text-sm text-slate-500">
                  We reply within 24 hours
                </p>
              </div>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="mt-auto text-sm font-semibold text-brand-700 transition-colors hover:text-brand-800"
              >
                {siteConfig.contact.email}
              </a>
            </div>
          </div>
        </section>

        <CallToAction />
      </div>
    </>
  );
}
