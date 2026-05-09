import type { MetadataRoute } from "next";
import data from "@/data/portfolio.json";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${data.meta.siteUrl}/sitemap.xml`,
  };
}
