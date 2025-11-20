import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureCard } from "@/components/FeatureCard";
import { StatGrid } from "@/components/StatGrid";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CallToAction } from "@/components/CallToAction";
import {
  featureHighlights,
  stats,
  solutionPillars,
  testimonialQuotes,
  faqEntries,
} from "@/lib/site";

export default function HomePage() {
  return (
    <div className="space-y-16">
      <Hero />

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
      </section>

      <CallToAction />
    </div>
  );
}
