import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureCard } from "@/components/FeatureCard";
import { CallToAction } from "@/components/CallToAction";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { Wine, BarChart3, Zap, CreditCard } from "lucide-react";

export const metadata: Metadata = {
  title: "Bar & Club POS Software Kenya | Crystaline ERP",
  description:
    "Complete bar and nightclub POS system for Kenya. Manage tabs, track inventory, split bills, handle Mpesa payments, and monitor stock with Crystaline ERP.",
  alternates: {
    canonical: "/industries/bars",
  },
  keywords: [
    "bar POS Kenya",
    "nightclub POS system",
    "bar management software",
    "pub POS Nairobi",
    "beverage inventory tracking",
    "bar tab management",
  ],
  openGraph: {
    url: "/industries/bars",
    title: "Bar & Club POS Software Kenya | Crystaline ERP",
    description:
      "Complete bar and nightclub management system with POS, inventory tracking, and tab management for Kenyan venues.",
  },
  twitter: {
    title: "Bar & Club POS Software Kenya | Crystaline ERP",
    description:
      "Modern POS system built for Kenyan bars, pubs, and nightclubs.",
  },
};

const barChallenges = [
  {
    title: "Tab management & split bills",
    description:
      "Easily open tabs, track orders per customer, split bills across multiple payments, and prevent walkouts.",
  },
  {
    title: "Beverage stock control",
    description:
      "Track bottles, kegs, and mixers in real-time. Get alerts for low stock levels and monitor pour costs per drink.",
  },
  {
    title: "Peak-hour speed",
    description:
      "Fast order entry, quick payment processing, and seamless Mpesa integration keep lines moving during busy nights.",
  },
];

const barFeatures = [
  {
    title: "Tab & Table Management",
    description:
      "Open multiple tabs, assign to tables, merge or split bills, and handle group payments with ease during busy service.",
    icon: Wine,
  },
  {
    title: "Beverage Inventory",
    description:
      "Track beer kegs, spirits bottles, mixers, and garnishes. Monitor pour costs, set reorder alerts, and prevent theft.",
    icon: BarChart3,
  },
  {
    title: "Quick Order Entry",
    description:
      "Touch-optimized interface for bartenders. Add modifiers, apply happy hour pricing, and send orders instantly.",
    icon: Zap,
  },
  {
    title: "Payment Flexibility",
    description:
      "Accept cash, Mpesa, cards, or mixed payments. Handle tips, apply discounts, and print receipts on demand.",
    icon: CreditCard,
  },
];

export default function BarsPage() {
  return (
    <div className="space-y-16">
      <PageBanner
        eyebrow="Bars, Pubs & Nightclubs"
        title="POS software designed for Kenyan bar and nightclub operations."
        subtitle="Handle tabs, track inventory, process payments fast, and keep service flowing during peak hours with Crystaline ERP."
      />
      <BreadcrumbJsonLd
        id="breadcrumb-bars"
        items={[
          { name: "Home" },
          { name: "Industries", path: "/industries/bars" },
          { name: "Bars & Clubs", path: "/industries/bars" },
        ]}
      />

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Common challenges"
          title="Built for the unique demands of bar service."
          description="Crystaline ERP handles the fast-paced, complex requirements of running a successful bar or nightclub."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {barChallenges.map((challenge) => (
            <article
              key={challenge.title}
              className="rounded-2xl border border-brand-200/60 bg-white p-6 shadow-sm"
            >
              <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                {challenge.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                {challenge.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-8 rounded-3xl border border-brand-100 bg-brand-50 p-8 shadow-sm">
        <SectionHeading
          eyebrow="Bar features"
          title="Everything you need to manage a busy bar."
          description="Tools built specifically for bars, pubs, and nightclub operations."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {barFeatures.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      {/* <section className="space-y-8">
        <SectionHeading
          eyebrow="Success story"
          title="How Westlands Lounge improved service speed by 40%."
          description="Learn how a popular Nairobi bar streamlined operations and boosted revenue with Crystaline ERP."
        />
        <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
          <blockquote className="space-y-4">
            <p className="text-base sm:text-lg italic text-slate-700">
              &ldquo;Crystaline ERP&apos;s tab management completely changed our
              Friday night operations. Bartenders can now serve customers 40%
              faster, and we&apos;ve eliminated tab disputes. The beverage
              inventory tracking also helped us identify and stop stock
              shrinkage.&rdquo;
            </p>
            <footer className="flex items-center gap-4">
              <div>
                <p className="text-sm text-slate-600">
                  Westlands Lounge, Nairobi
                </p>
              </div>
            </footer>
          </blockquote>
        </div>
      </section> */}

      <CallToAction />
    </div>
  );
}
