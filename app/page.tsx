import Link from "next/link";
import Script from "next/script";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureCard } from "@/components/FeatureCard";
import { StatGrid } from "@/components/StatGrid";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CallToAction } from "@/components/CallToAction";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import {
  featureHighlights,
  stats,
  solutionPillars,
  testimonialQuotes,
  faqEntries,
} from "@/lib/site";

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
    <div className="space-y-16">
      <Hero />
      <BreadcrumbJsonLd id="breadcrumb-home" items={[{ name: "Home" }]} />

      <section id="about" className="space-y-8">
        <SectionHeading
          eyebrow="Why Crystal ERP"
          title="ERP precision with POS speed."
          description="From head office to tills, Crystal ERP unifies every workflow in one secure Kenyan platform so you can scale faster with fewer tools."
        />
        <StatGrid stats={stats} />
      </section>

      <section id="features" className="space-y-8">
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
      </section>

      <section
        id="services"
        className="space-y-10 rounded-3xl border border-slate-100 bg-white p-8 shadow-sm"
      >
        <SectionHeading
          eyebrow="Industry playbooks"
          title="Proven templates for every business model."
          description="Pick a pillar below and deploy best-practice approvals, automations, and KPIs overnight."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {solutionPillars.map((pillar) => (
            <article
              key={pillar.name}
              className="flex h-full flex-col rounded-2xl border border-slate-200/60 bg-slate-50 p-6"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {pillar.name}
              </h3>
              <p className="mt-3 text-sm text-slate-600">{pillar.summary}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {pillar.points.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span aria-hidden>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Customer love"
          title="Teams trust Crystal ERP to make data-driven moves."
          description="Hear from Kenyan retailers, wholesalers, and service providers already running on our stack."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonialQuotes.map((testimonial) => (
            <TestimonialCard key={testimonial.author} {...testimonial} />
          ))}
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
        <SectionHeading
          eyebrow="Local expertise"
          title="Embedded in Nairobi, trusted countrywide."
          description="Our rollout squads operate from the CBD and support outlets in Mombasa, Kisumu, Eldoret, and every county in between."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-100 bg-slate-50 p-6 text-sm text-slate-600">
            <p>
              Visit our{" "}
              <Link
                href="/about#contact"
                className="font-semibold text-indigo-600 underline-offset-4 hover:underline"
              >
                Nairobi HQ
              </Link>{" "}
              for onsite demos or book a remote consultation. We also ship{" "}
              <Link
                href="/products#classic"
                className="font-semibold text-indigo-600 underline-offset-4 hover:underline"
              >
                POS hardware kits
              </Link>{" "}
              with pre-configured Crystal ERP builds.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-100 bg-slate-50 p-6 text-sm text-slate-600">
            <p>
              Need deeper feature guidance? Jump into the{" "}
              <Link
                href="/features"
                className="font-semibold text-indigo-600 underline-offset-4 hover:underline"
              >
                feature map
              </Link>{" "}
              to explore accounting, inventory, and HR automations, or compare
              deployment models on our{" "}
              <Link
                href="/products"
                className="font-semibold text-indigo-600 underline-offset-4 hover:underline"
              >
                products page
              </Link>
              .
            </p>
          </article>
        </div>
      </section>

      <section
        id="faq"
        className="space-y-8 rounded-3xl border border-slate-100 bg-white p-8 shadow-sm"
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
              className="rounded-2xl border border-slate-100 p-4"
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

      <CallToAction />
    </div>
  );
}
