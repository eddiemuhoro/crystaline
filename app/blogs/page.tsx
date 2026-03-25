import type { Metadata } from "next";
import Link from "next/link";
import { PageBanner } from "@/components/PageBanner";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { getAllResources } from "@/lib/resources";
import Image from "next/image";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Crystaline ERP Blog",
  description:
    "Guides and checklists for launching POS, ERP, and retail operations across Kenya using Crystaline ERP.",
  alternates: {
    canonical: "/blogs",
  },
};

export default async function BlogsPage() {
  const articles = await getAllResources();
  return (
    <div className="space-y-12">
      <PageBanner
        eyebrow="Blog"
        title="Latest insights and updates"
        subtitle="Stay informed with the latest trends, tips, and news from the world of business technology."
      />
      <BreadcrumbJsonLd
        id="breadcrumb-blogs"
        items={[{ name: "Home" }, { name: "Blog", path: "/blogs" }]}
      />
      <section className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all hover:border-emerald-200 hover:shadow-xl"
            >
              <Image
                src="/blog.jpg"
                width={800}
                height={500}
                alt="blog pic"
                className="w-full h-56 object-cover rounded-xl"
              />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-emerald-600">
                  <Link href={`/blogs/${article.slug}`}>{article.title}</Link>
                </h3>
                <p className="mb-4 flex-1 text-gray-600">{article.excerpt}</p>
                <div className="flex items-center gap-4 border-t border-gray-100 pt-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {new Date(article.date).toLocaleDateString("en-KE", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />{" "}
                    <span>{article.readingTime}</span>
                  </div>
                  <Link
                    href={`/blogs/${article.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-emerald-600 transition-colors hover:text-emerald-700"
                  >
                    Read more
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
