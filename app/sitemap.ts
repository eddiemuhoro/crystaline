import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { getAllResources } from "@/lib/resources";

// Static routes with their priorities
const staticRoutes = [
  { path: "", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/features", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/products", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/blogs", priority: 0.7, changeFrequency: "weekly" as const },
  { path: "/terms", priority: 0.5, changeFrequency: "yearly" as const },
  { path: "/privacy", priority: 0.5, changeFrequency: "yearly" as const },
  // Industry pages
  {
    path: "/industries/supermarkets",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/industries/bars",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/industries/restaurants",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/industries/retail",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Get all resource articles
  const resources = await getAllResources();

  // Create sitemap entries for static routes
  const staticEntries = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // Create sitemap entries for dynamic blog pages
  const resourceEntries = resources.map((resource) => ({
    url: `${siteConfig.url}/blogs/${resource.slug}`,
    lastModified: new Date(resource.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...resourceEntries];
}
