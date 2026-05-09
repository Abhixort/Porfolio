import type { MetadataRoute } from "next";
import data from "@/data/portfolio.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = data.meta.siteUrl;
  const now = new Date();

  return [
    { url: base,                  lastModified: now, priority: 1.0 },
    { url: `${base}/about`,       lastModified: now, priority: 0.9 },
    { url: `${base}/projects`,    lastModified: now, priority: 0.9 },
    { url: `${base}/resume`,      lastModified: now, priority: 0.7 },
    { url: `${base}/contact`,     lastModified: now, priority: 0.8 },
  ];
}
