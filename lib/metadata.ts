import type { Metadata } from "next";
import data from "@/data/portfolio.json";

const { meta } = data;

export const baseMetadata: Metadata = {
  metadataBase: new URL(meta.siteUrl),
  title: {
    default: `${meta.name} - ${meta.role}`,
    template: `%s | ${meta.name}`,
  },
  description: meta.tagline,
  keywords: [
    "Software Engineer",
    "Python Developer",
    "FastAPI",
    "Celery",
    "Redis",
    "Odoo Developer",
    "Backend Engineer",
    "Distributed Systems",
    "Docker",
    "AWS EC2",
    "Noida",
    "Abhishek Abhigyanam"
  ],
  authors: [{ name: meta.name, url: meta.siteUrl }],
  creator: meta.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: meta.siteUrl,
    siteName: meta.name,
    title: `${meta.name} - ${meta.role}`,
    description: meta.tagline,
    images: [
      {
        url: meta.ogImage,
        width: 1200,
        height: 630,
        alt: `${meta.name} - Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${meta.name} - ${meta.role}`,
    description: meta.tagline,
    images: [meta.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export function makeMetadata(title: string, description?: string): Metadata {
  return {
    ...baseMetadata,
    title,
    description: description ?? meta.tagline,
    openGraph: {
      ...baseMetadata.openGraph,
      title,
      description: description ?? meta.tagline,
    },
  };
}
