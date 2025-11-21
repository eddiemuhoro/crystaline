import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const resourcesDirectory = path.join(process.cwd(), "content/resources");

export type ResourceMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  author: string;
  keywords: string[];
};

export async function getAllResources(): Promise<ResourceMeta[]> {
  const files = fs.readdirSync(resourcesDirectory);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((filename) => {
      const slug = filename.replace(".mdx", "");
      const fullPath = path.join(resourcesDirectory, filename);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      return {
        slug,
        title: data.title,
        excerpt: data.excerpt,
        date: data.date,
        readingTime: data.readingTime,
        author: data.author,
        keywords: data.keywords ?? [],
      } as ResourceMeta;
    })
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
}

export async function getResourceBySlug(slug: string) {
  const fullPath = path.join(resourcesDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    meta: {
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
      readingTime: data.readingTime,
      author: data.author,
      keywords: data.keywords ?? [],
    } as ResourceMeta,
  };
}
