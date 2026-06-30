import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureCard } from "@/components/FeatureCard";
import { CallToAction } from "@/components/CallToAction";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { Utensils, ChefHat, ClipboardList, LineChart } from "lucide-react";

export const metadata: Metadata = {
  title: "Restaurant POS Software Kenya | Crystaline ERP",
  description:
    "Complete restaurant POS and management system for Kenya. Handle orders, manage tables, track kitchen operations, and process payments with Crystaline ERP.",
  alternates: {
    canonical: "/industries/restaurants",
  },
  keywords: [
    "restaurant POS Kenya",
    "restaurant management software",
    "cafe POS system",
    "kitchen display system",
    "table management software Nairobi",
    "restaurant ordering system",
  ],
  openGraph: {
    url: "/industries/restaurants",
    title: "Restaurant POS Software Kenya | Crystaline ERP",
    description:
      "Complete restaurant management system with POS, kitchen display, table management, and order tracking for Kenyan restaurants.",
  },
  twitter: {
    title: "Restaurant POS Software Kenya | Crystaline ERP",
    description:
      "Modern POS and management system built for Kenyan restaurants and cafes.",
  },
};

const restaurantChallenges = [
  {
    title: "Kitchen-floor coordination",
    description:
      "Send orders instantly to kitchen displays, track preparation status, and coordinate timing across multiple tables.",
  },
  {
    title: "Table turnover & wait times",
    description:
      "Manage table assignments, track dining times, handle reservations, and optimize seating during peak hours.",
  },
  {
    title: "Menu complexity & modifiers",
    description:
      "Handle custom orders, dietary restrictions, add-ons, and special requests without slowing down service.",
  },
];

const restaurantFeatures = [
  {
    title: "Table Management",
    description:
      "Visual floor plan, table status tracking, seat assignments, and reservation scheduling keep your dining room organized.",
    icon: Utensils,
  },
  {
    title: "Kitchen Display System",
    description:
      "Orders route automatically to kitchen screens by station. Track prep times, mark items done, and coordinate courses.",
    icon: ChefHat,
  },
  {
    title: "Order Customization",
    description:
      "Easy modifiers for allergies, preferences, and special requests. Add notes for kitchen staff with preset options.",
    icon: ClipboardList,
  },
  {
    title: "Menu Engineering",
    description:
      "Track dish performance, food costs, and profitability. Update menus instantly across all stations and ordering channels.",
    icon: LineChart,
  },
];

export default function RestaurantsPage() {
  return (
    <div className="space-y-16">
      <PageBanner
        eyebrow="Restaurants & Cafes"
        title="Restaurant POS system built for Kenyan dining operations."
        subtitle="From quick-service to fine dining, Crystaline ERP handles orders, kitchen coordination, table management, and payments seamlessly."
      />
      <BreadcrumbJsonLd
        id="breadcrumb-restaurants"
        items={[
          { name: "Home" },
          { name: "Industries", path: "/industries/restaurants" },
          { name: "Restaurants", path: "/industries/restaurants" },
        ]}
      />

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Common challenges"
          title="Built for the pace and precision of restaurant service."
          description="Crystaline ERP solves the coordination and timing challenges that keep restaurant operators up at night."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {restaurantChallenges.map((challenge) => (
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
          eyebrow="Restaurant features"
          title="Complete tools for front-of-house and back-of-house."
          description="Everything you need to run efficient, profitable restaurant operations."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {restaurantFeatures.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      {/* <section className="space-y-8">
        <SectionHeading
          eyebrow="Success story"
          title="How Java House improved order accuracy to 99.8%."
          description="See how a leading Kenyan restaurant chain streamlined operations with Crystaline ERP."
        />
        <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
          <blockquote className="space-y-4">
            <p className="text-base sm:text-lg italic text-slate-700">
              &ldquo;The kitchen display system eliminated order errors and sped
              up our service. We&apos;ve improved order accuracy to 99.8% and
              reduced average table turnover time by 15 minutes during lunch
              rush. Customer satisfaction scores have never been higher.&rdquo;
            </p>
            <footer className="flex items-center gap-4">
              <div>
                <p className="text-sm text-slate-600">Java House, Nairobi</p>
              </div>
            </footer>
          </blockquote>
        </div>
      </section> */}

      <CallToAction />
    </div>
  );
}
