// app/robots.js
const baseUrl = "https://popliving.ch";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/private/",
          "/_next/",
          "/thanks", // Page de remerciement
        ],
      },
      {
        userAgent: "GPTBot",
        disallow: "/", // Bloquer les crawlers IA si souhaité
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
