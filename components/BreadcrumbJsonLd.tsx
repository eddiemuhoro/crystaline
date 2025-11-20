import Script from "next/script";
import { siteConfig } from "@/lib/site";

type BreadcrumbItem = {
  name: string;
  path?: string;
};

type BreadcrumbJsonLdProps = {
  id: string;
  items: BreadcrumbItem[];
};

export function BreadcrumbJsonLd({ id, items }: BreadcrumbJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path ? `${siteConfig.url}${item.path}` : siteConfig.url,
    })),
  };

  return (
    <Script id={id} type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(jsonLd)}
    </Script>
  );
}
