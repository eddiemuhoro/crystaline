import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureCard } from "@/components/FeatureCard";
import { CallToAction } from "@/components/CallToAction";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { ShoppingBag, Shirt, Star, Store } from "lucide-react";

export const metadata: Metadata = {
  title: "Retail POS Software Kenya | Crystal ERP",
  description:
    "Complete retail POS and inventory management system for Kenyan retail stores. Handle sales, track stock, manage customers, and grow with Crystal ERP.",
  alternates: {
    canonical: "/industries/retail",
  },
  keywords: [
    "retail POS Kenya",
    "shop POS system",
    "retail management software",
    "boutique POS Nairobi",
    "retail inventory software",
    "store management system",
  ],
  openGraph: {
    url: "/industries/retail",
    title: "Retail POS Software Kenya | Crystal ERP",
    description:
      "Complete retail management system with POS, inventory tracking, and customer management for Kenyan retail stores.",
  },
  twitter: {
    title: "Retail POS Software Kenya | Crystal ERP",
    description:
      "Modern POS system built for Kenyan retail stores and boutiques.",
  },
};

const retailChallenges = [
  {
    title: "Multi-channel sales",
    description:
      "Sell in-store, online, and via social media while keeping inventory synchronized across all channels.",
  },
  {
    title: "Customer loyalty & retention",
    description:
      "Build lasting relationships with loyalty programs, customer purchase history, and targeted promotions.",
  },
  {
    title: "Size, color & variant tracking",
    description:
      "Manage products with multiple variants (sizes, colors, styles) and track stock levels for each combination.",
  },
];

const retailFeatures = [
  {
    title: "Fast & Flexible Checkout",
    description:
      "Barcode scanning, quick search, email/SMS receipts, and multiple payment options create smooth checkout experiences.",
    icon: ShoppingBag,
  },
  {
    title: "Variant Management",
    description:
      "Track inventory by size, color, and style. Easily manage SKUs with multiple attributes and reorder by variant.",
    icon: Shirt,
  },
  {
    title: "Customer Loyalty",
    description:
      "Built-in loyalty programs, purchase history tracking, and customer segmentation for targeted marketing campaigns.",
    icon: Star,
  },
  {
    title: "Multi-Location Sync",
    description:
      "Real-time inventory visibility across stores. Transfer stock between locations and manage centralized purchasing.",
    icon: Store,
  },
];

export default function RetailPage() {
  return (
    <div className="space-y-16">
      <PageBanner
        eyebrow="Retail Stores & Boutiques"
        title="Retail POS system built for Kenyan shop owners."
        subtitle="From fashion boutiques to electronics stores, Crystal ERP handles sales, inventory, customer loyalty, and multi-location management."
      />
      <BreadcrumbJsonLd
        id="breadcrumb-retail"
        items={[
          { name: "Home" },
          { name: "Industries", path: "/industries/retail" },
          { name: "Retail Stores", path: "/industries/retail" },
        ]}
      />

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Common challenges"
          title="Built for modern retail complexity."
          description="Crystal ERP addresses the inventory, customer, and omnichannel challenges facing Kenyan retailers today."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {retailChallenges.map((challenge) => (
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
          eyebrow="Retail features"
          title="Everything you need to grow your retail business."
          description="Powerful tools designed for the unique needs of retail operations."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {retailFeatures.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Success story"
          title="How Trendy Boutique grew to 5 locations with Crystal ERP."
          description="See how a Nairobi fashion retailer scaled operations and improved margins."
        />
        <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
          <blockquote className="space-y-4">
            <p className="text-lg italic text-slate-700">
              &ldquo;Crystal ERP&apos;s variant tracking was a game-changer for
              our fashion business. We can now manage thousands of SKUs across
              sizes and colors effortlessly. The customer loyalty program helped
              us increase repeat purchases by 35%, and multi-location sync lets
              us transfer stock where it sells best.&rdquo;
            </p>
            <footer className="flex items-center gap-4">
              <div>
                <p className="font-semibold text-slate-900">
                  Grace Wanjiru, Owner
                </p>
                <p className="text-sm text-slate-600">
                  Trendy Boutique, Nairobi
                </p>
              </div>
            </footer>
          </blockquote>
        </div>
      </section>

      <CallToAction />
    </div>
  );
}
