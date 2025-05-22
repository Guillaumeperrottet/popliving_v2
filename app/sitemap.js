// app/sitemap.js
import { locales } from "./i18n/settings";

const baseUrl = "https://popliving.ch";

// Pages statiques du site
const staticPages = [
  "",
  "/concept",
  "/storage",
  "/situation",
  "/faq",
  "/booking",
];

export default function sitemap() {
  const currentDate = new Date().toISOString();

  // Générer les URLs pour chaque langue
  const urls = [];

  locales.forEach((locale) => {
    staticPages.forEach((page) => {
      // Déterminer la priorité et fréquence selon la page
      let priority = 0.7;
      let changeFrequency = "monthly";

      if (page === "") {
        // Homepage
        priority = 1.0;
        changeFrequency = "weekly";
      } else if (page === "/booking") {
        priority = 0.9;
        changeFrequency = "daily";
      } else if (page === "/storage" || page === "/concept") {
        priority = 0.8;
        changeFrequency = "weekly";
      }

      urls.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: currentDate,
        changeFrequency,
        priority,
        alternates: {
          languages: locales.reduce((acc, lang) => {
            acc[lang] = `${baseUrl}/${lang}${page}`;
            return acc;
          }, {}),
        },
      });
    });
  });

  return urls;
}

// app/robots.js - Génération automatique du robots.txt
export function robots() {
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
