import type { MetadataRoute } from "next";

const siteUrl = "https://1mj23cd024-hwa-hackathon.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: siteUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/order`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/legal/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/legal/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
