import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { PageBanner } from "@/components/PageBanner";
import { ProductCard } from "@/components/ProductCard";
import { ArrowRight, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import type { PortableTextBlock } from "next-sanity";

type SanityProduct = {
  _id: string;
  title: string;
  subtitle: string;
  overview?: string;
  description: PortableTextBlock[] | string;
  price?: number;
  slug: string;
  highlights?: string[];
  image?: string;
  publishedAt: string;
};

import { client } from "@/sanity/client";
import Link from "next/link";
import { ProductSearch } from "@/components/ProductSearch";

const getPostsQuery = (hasSearch: boolean) => `*[
  _type == "products"
  && defined(slug.current)
  ${hasSearch ? '&& (title match $searchQuery || subtitle match $searchQuery)' : ''}
]|order(publishedAt desc)[$start...$end]{_id, title, "slug": slug.current, price, description, subtitle, "overview": coalesce(pt::text(overview), overview), highlights, "image": image.asset->url, publishedAt}`;

const getTotalQuery = (hasSearch: boolean) => `count(*[
  _type == "products" 
  && defined(slug.current)
  ${hasSearch ? '&& (title match $searchQuery || subtitle match $searchQuery)' : ''}
])`;

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

export default async function ProductsPage(props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }> | { [key: string]: string | string[] | undefined };
}) {
  const searchParams = await Promise.resolve(props.searchParams);
  const pageStr = searchParams?.page;
  const qStr = searchParams?.q;
  const currentPage = typeof pageStr === "string" ? parseInt(pageStr, 10) || 1 : 1;
  const searchQuery = typeof qStr === "string" ? qStr : "";
  const hasSearch = Boolean(searchQuery);
  const searchParamValue = searchQuery ? `${searchQuery}*` : '';
  const itemsPerPage = 12;
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  const [products, totalCount] = await Promise.all([
    client.fetch<SanityProduct[]>(
      getPostsQuery(hasSearch),
      { start, end, ...(hasSearch && { searchQuery: searchParamValue }) },
      options,
    ),
    client.fetch<number>(
      getTotalQuery(hasSearch),
      { ...(hasSearch && { searchQuery: searchParamValue }) },
      options,
    ),
  ]);

  const totalPages = Math.ceil(totalCount / itemsPerPage);

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
        <ProductSearch />
        
        {products?.length === 0 ? (
          <div className="text-center py-16 text-gray-500 bg-gray-50 rounded-2xl border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
            <p className="text-base">We couldn't find anything matching "{searchQuery}".</p>
            <p className="text-sm mt-1">Try adjusting your search terms.</p>
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-3">
            {products?.map((product) => (
              <ProductCard
                key={product._id}
                title={product.title}
                subtitle={product.subtitle}
                overview={product.overview || ""}
                description={product.description}
                price={product.price || 0}
                href={`/products/${product.slug}`}
                highlights={product.highlights || []}
                image={product.image}
              />
            ))}
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-6 pt-10 pb-4">
            {currentPage > 1 ? (
              <Link
                href={`/products?page=${currentPage - 1}${searchQuery ? `&q=${encodeURIComponent(searchQuery)}` : ''}`}
                className="group flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-emerald-600 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Previous
              </Link>
            ) : (
              <span className="flex items-center gap-2 text-sm font-semibold text-gray-300 cursor-not-allowed">
                <ArrowLeft className="h-4 w-4" />
                Previous
              </span>
            )}
            
            <span className="flex items-center justify-center rounded-full bg-emerald-100 px-4 py-1 text-sm font-semibold text-emerald-800">
              Page {currentPage} of {totalPages}
            </span>

            {currentPage < totalPages ? (
              <Link
                href={`/products?page=${currentPage + 1}${searchQuery ? `&q=${encodeURIComponent(searchQuery)}` : ''}`}
                className="group flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-emerald-600 transition-colors"
              >
                Next
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            ) : (
              <span className="flex items-center gap-2 text-sm font-semibold text-gray-300 cursor-not-allowed">
                Next
                <ArrowRight className="h-4 w-4" />
              </span>
            )}
          </div>
        )}

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
