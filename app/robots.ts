import type { MetadataRoute } from "next";

const siteUrl = "https://1mj23cd024-hwa-hackathon.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
