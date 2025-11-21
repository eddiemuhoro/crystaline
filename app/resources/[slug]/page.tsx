import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { PageBanner } from "@/components/PageBanner";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { getAllResources, getResourceBySlug } from "@/lib/resources";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const resources = await getAllResources();
  return resources.map((resource) => ({
    slug: resource.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { meta } = await getResourceBySlug(slug);
    return {
      title: meta.title,
      description: meta.excerpt,
      keywords: meta.keywords,
      alternates: {
        canonical: `/resources/${slug}`,
      },
      openGraph: {
        title: meta.title,
        description: meta.excerpt,
        type: "article",
        publishedTime: meta.date,
        authors: [meta.author],
      },
    };
  } catch {
    return {
      title: "Resource Not Found",
    };
  }
}

export default async function ResourcePage({ params }: Props) {
  const { slug } = await params;
  let resource;

  try {
    resource = await getResourceBySlug(slug);
  } catch {
    notFound();
  }

  const { meta, content } = resource;

  return (
    <div className="space-y-12">
      <PageBanner
        eyebrow={new Date(meta.date).toLocaleDateString("en-KE", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
        title={meta.title}
        subtitle={`${meta.readingTime} • By ${meta.author}`}
      />
      <BreadcrumbJsonLd
        id={`breadcrumb-resource-${slug}`}
        items={[
          { name: "Home" },
          { name: "Resources", path: "/resources" },
          { name: meta.title, path: `/resources/${slug}` },
        ]}
      />
      <article className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-black prose-h2:text-3xl prose-h2:mt-8 prose-h3:text-xl prose-h3:mt-6 prose-p:text-black prose-p:leading-relaxed prose-li:text-black prose-ul:text-black prose-strong:text-black prose-strong:font-semibold prose-a:text-indigo-600 prose-a:font-medium hover:prose-a:underline">
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
    </div>
  );
}
