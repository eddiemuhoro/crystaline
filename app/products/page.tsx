import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { PageBanner } from "@/components/PageBanner";
import { ProductCard } from "@/components/ProductCard";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

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
  title: "Crystaline ERP Products",
  description:
    "Compare Crystaline ERP Classic, Crystaline ERP Cloud Suite, and the partner program to pick the right deployment for your team.",
  alternates: {
    canonical: "/products",
  },
  keywords: [
    "Crystaline ERP pricing",
    "Crystaline ERP cloud",
    "POS packages",
    "ERP partner program",
  ],
  openGraph: {
    url: "/products",
  },
  twitter: {
    title: "Crystaline ERP Products",
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
        eyebrow="Products"
        title="Hardware & Software Solutions"
        subtitle="Complete POS hardware packages designed to work seamlessly with our software."
      />
      <BreadcrumbJsonLd
        id="breadcrumb-products"
        items={[{ name: "Home" }, { name: "Products", path: "/products" }]}
      />

      <section className="space-y-8">
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
        <div className="mt-1 text-center -mb-14 lg:-mb-16">
          <a
            href="https://wa.me/254725473779?text=I'm%20interested%20in%20Crystaline%20ERP"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-700 to-brand-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-600/30 transition-all hover:bg-emerald-700"
          >
            Request a Quote
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
