import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";

type SanityProduct = {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  price?: number;
  slug: string;
  highlights?: string[];
  image?: string;
  publishedAt: string;
};

import { client } from "@/sanity/client";

const POSTS_QUERY = `*[
  _type == "products"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, "slug": slug.current, price, "description": pt::text(description), subtitle, highlights, "image": image.asset->url, publishedAt}`;
const options = { next: { revalidate: 60 } };


export const metadata: Metadata = {
  title: "Crystal ERP Products",
  description:
    "Compare Crystal ERP Classic, Crystal ERP Cloud Suite, and the partner program to pick the right deployment for your team.",
  alternates: {
    canonical: "/products",
  },
  keywords: [
    "Crystal ERP pricing",
    "Crystal ERP cloud",
    "POS packages",
    "ERP partner program",
  ],
  openGraph: {
    url: "/products",
  },
  twitter: {
    title: "Crystal ERP Products",
    description:
      "Choose the plan that matches your retail, wholesale, or services operation.",
  },
};

export default async function ProductsPage() {
  const products = await client.fetch<SanityProduct[]>(
    POSTS_QUERY,
    {},
    options,
  );

  return (
    <div className="space-y-16">
      <PageBanner
        eyebrow="Product suite"
        title="Pick the deployment that fits your rollout."
        subtitle="From offline-ready desktops to modern cloud suites and partner toolkits, Crystal ERP meets you where you are and scales without limits."
      />
      <BreadcrumbJsonLd
        id="breadcrumb-products"
        items={[{ name: "Home" }, { name: "Products", path: "/products" }]}
      />

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Products"
          title="Simple packages with transparent pricing."
          description="Every plan includes core POS, inventory, finance, and analytics plus 24/7 Kenyan support."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {products?.map((product) => (
            <ProductCard
              key={product._id}
              title={product.title}
              subtitle={product.subtitle}
              description={product.description}
              price={product.price || 0}
              href={`/products/${product.slug}`}
              highlights={product.highlights || []}
              image={product.image}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
