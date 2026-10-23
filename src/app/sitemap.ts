import type { MetadataRoute } from "next";
import { posts } from "@/data/posts";
import { site } from "@/data/site";
import { tours } from "@/data/tours";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${site.url}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/tours`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${site.url}/guests`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${site.url}/partners`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${site.url}/community`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${site.url}/recommendations`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${site.url}/faq`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${site.url}/hire-a-guide`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${site.url}/photos`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${site.url}/blog`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];
  const tourRoutes: MetadataRoute.Sitemap = tours.map((t) => ({
    url: `${site.url}/tours/${t.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));
  const postRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly",
    priority: 0.4,
  }));
  return [...staticRoutes, ...tourRoutes, ...postRoutes];
}
