import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { SectionHeading } from "@/components/SectionHeading";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { solutionPillars } from "@/lib/site";
import { CallToAction } from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "Crystal ERP Services",
  description:
    "Explore our tailored services and industry playbooks for Kenyan retail, wholesale, and hospitality businesses.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="space-y-16">
      <PageBanner
        eyebrow="Our Services"
        title="Tailored solutions for every business model."
        subtitle="Deploy best-practice approvals, automations, and KPIs tailored perfectly to your industry."
      />
      <BreadcrumbJsonLd
        id="breadcrumb-services"
        items={[{ name: "Home" }, { name: "Services", path: "/services" }]}
      />

      <section className="space-y-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Industry Playbooks"
          title="Proven templates for growth."
          description="We provide comprehensive implementation plans specifically designed to meet the demands of various business verticals."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {solutionPillars.map((pillar) => (
            <article key={pillar.name} className="flex flex-col h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
               <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <pillar.icon className="h-7 w-7" />
               </div>
               <h3 className="text-xl font-bold text-slate-900">{pillar.name}</h3>
               <p className="mt-3 text-sm text-slate-600 flex-grow">{pillar.summary}</p>
               <ul className="mt-6 space-y-3">
                  {pillar.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-slate-600">
                       <span className="text-brand-500 mt-0.5">•</span>
                       <span>{point}</span>
                    </li>
                  ))}
               </ul>
            </article>
          ))}
        </div>
      </section>

      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-16">
        <CallToAction />
      </div>
    </div>
  );
}
