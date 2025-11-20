import type { Metadata } from "next";
import Link from "next/link";
import { PageBanner } from "@/components/PageBanner";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { getAllResources } from "@/lib/resources";

export const metadata: Metadata = {
  title: "Crystal ERP Resources",
  description:
    "Guides and checklists for launching POS, ERP, and retail operations across Kenya using Crystal ERP.",
  alternates: {
    canonical: "/resources",
  },
};

export default async function ResourcesPage() {
  const articles = await getAllResources();
  return (
    <div className="space-y-12">
      <PageBanner
        eyebrow="Resources"
        title="Field-tested playbooks for Kenyan retailers."
        subtitle="Deploy Crystal ERP with confidence using rollout checklists, compliance tips, and partner insights."
      />
      <BreadcrumbJsonLd
        id="breadcrumb-resources"
        items={[{ name: "Home" }, { name: "Resources", path: "/resources" }]}
      />
      <section className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-500">
                {new Date(article.date).toLocaleDateString("en-KE", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              <h2 className="mt-3 text-xl font-semibold text-slate-900">
                <Link href={`/resources/${article.slug}`}>{article.title}</Link>
              </h2>
              <p className="mt-2 text-sm text-slate-600">{article.excerpt}</p>
              <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-500">
                <span>{article.readingTime}</span>
                <span>{"•"}</span>
                <span>{article.author}</span>
              </div>
              <Link
                href={`/resources/${article.slug}`}
                className="mt-6 inline-flex items-center text-sm font-semibold text-indigo-600 underline-offset-4 hover:underline"
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
