import type { MetadataRoute } from "next";

import { getAllPosts } from "@/lib/writing";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const updated = posts[0] ? new Date(posts[0].date) : new Date("2026-11-16");

  return [
    {
      url: site.url,
      lastModified: updated,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${site.url}/writing`,
      lastModified: updated,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...posts.map((post) => ({
      url: `${site.url}/writing/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
