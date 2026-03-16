import type { Metadata } from "next";
import Link from "next/link";
import { PageBanner } from "@/components/PageBanner";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { getAllResources } from "@/lib/resources";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Crystal ERP Blog",
  description:
    "Guides and checklists for launching POS, ERP, and retail operations across Kenya using Crystal ERP.",
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
        title="Field-tested playbooks for Kenyan retailers."
        subtitle="Deploy Crystal ERP with confidence using rollout checklists, compliance tips, and partner insights."
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
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600 pb-4">
                {new Date(article.date).toLocaleDateString("en-KE", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              <Image src="/blog.jpg" width={800} height={500} alt="blog pic" className="w-full h-60 object-cover rounded-xl" />
              <h2 className="mt-3 text-xl font-semibold text-slate-900">
                <Link href={`/blogs/${article.slug}`}>{article.title}</Link>
              </h2>
              <p className="mt-2 text-sm text-slate-600">{article.excerpt}</p>
              <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-500">
                <span>{article.readingTime}</span>
                <span>{"•"}</span>
                <span>{article.author}</span>
              </div>
              <Link
                href={`/blogs/${article.slug}`}
                className="mt-6 inline-flex items-center text-sm font-semibold text-brand-700 underline-offset-4 hover:underline"
              >
                Read article →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
