import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl.replace(/\/$/, "");
  const now = new Date().toISOString();
  const routes: MetadataRoute.Sitemap = ["/"].map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: route === "/" ? 1 : 0.7,
  }));
  return routes;
}
