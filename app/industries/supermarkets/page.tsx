import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureCard } from "@/components/FeatureCard";
import { CallToAction } from "@/components/CallToAction";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { Package, ShoppingCart, TrendingUp, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Supermarket POS Software Kenya | Crystaline ERP",
  description:
    "Complete supermarket POS and inventory management system for Kenyan supermarkets. Track stock, manage suppliers, handle tills, and automate reorders with Crystaline ERP.",
  alternates: {
    canonical: "/industries/supermarkets",
  },
  keywords: [
    "supermarket POS Kenya",
    "supermarket management software",
    "retail POS system",
    "grocery store POS",
    "inventory management supermarket",
    "Nairobi supermarket software",
  ],
  openGraph: {
    url: "/industries/supermarkets",
    title: "Supermarket POS Software Kenya | Crystaline ERP",
    description:
      "Complete supermarket management system with POS, inventory tracking, and supplier management for Kenyan supermarkets.",
  },
  twitter: {
    title: "Supermarket POS Software Kenya | Crystaline ERP",
    description:
      "Modern POS and inventory system built for Kenyan supermarkets and grocery stores.",
  },
};

const supermarketChallenges = [
  {
    title: "Inventory shrinkage & spoilage",
    description:
      "Track expiry dates, manage FIFO rotation, and get alerts for slow-moving stock before losses mount.",
  },
  {
    title: "Multi-location coordination",
    description:
      "Real-time stock visibility across branches with automated inter-store transfers and centralized purchasing.",
  },
  {
    title: "Supplier management",
    description:
      "Compare supplier pricing, track delivery performance, and automate purchase orders based on reorder points.",
  },
];

const supermarketFeatures = [
  {
    title: "Smart Inventory Control",
    description:
      "Batch tracking, expiry alerts, FIFO/FEFO management, and automated reorder points keep shelves stocked without overbuying.",
    icon: Package,
  },
  {
    title: "Fast Checkout Experience",
    description:
      "Barcode scanning, quick search, split payments (cash + Mpesa), and receipt printing deliver speed at every till.",
    icon: ShoppingCart,
  },
  {
    title: "Supplier & Procurement",
    description:
      "Supplier scorecards, landed-cost tracking, and automated PO generation streamline your supply chain operations.",
    icon: TrendingUp,
  },
  {
    title: "Pricing & Promotions",
    description:
      "Time-based discounts, bundle offers, loyalty points, and instant price updates across all tills and branches.",
    icon: Tag,
  },
];

export default function SupermarketsPage() {
  return (
    <div className="space-y-16">
      <PageBanner
        eyebrow="Supermarkets & Grocery Stores"
        title="POS and inventory management built for Kenyan supermarkets."
        subtitle="From single stores to chains, Crystaline ERP handles checkout, stock tracking, supplier management, and branch coordination in one system."
      />
      <BreadcrumbJsonLd
        id="breadcrumb-supermarkets"
        items={[
          { name: "Home" },
          { name: "Industries", path: "/industries/supermarkets" },
          { name: "Supermarkets", path: "/industries/supermarkets" },
        ]}
      />

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Common challenges"
          title="Built to solve real supermarket problems."
          description="Crystaline ERP addresses the daily headaches that slow down Kenyan supermarket operators."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {supermarketChallenges.map((challenge) => (
            <article
              key={challenge.title}
              className="rounded-2xl border border-brand-200/60 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">
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
          eyebrow="Supermarket features"
          title="Everything you need to run a modern supermarket."
          description="Comprehensive tools designed specifically for grocery and supermarket operations."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {supermarketFeatures.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Success story"
          title="How QuickMart scaled to 12 branches with Crystaline ERP."
          description="See how a Nairobi supermarket chain streamlined operations and reduced stock-outs by 60%."
        />
        <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
          <blockquote className="space-y-4">
            <p className="text-lg italic text-slate-700">
              &ldquo;We have been using this ERP software for our retail
              business for the past 6 years and it transformed the way we manage
              my inventory and finances. The HR management tools are
              user-friendly. We highly recommend this software to businesses
              looking to streamline their operations.&rdquo;
            </p>
            <footer className="flex items-center gap-4">
              <figcaption className="mt-2 text-xs font-bold text-brand-700">
                — Friendly Five Supermarket
              </figcaption>
            </footer>
          </blockquote>
        </div>
      </section>

      <CallToAction />
    </div>
  );
}
