"use client";

import { useTranslation } from "./client";
import { usePathname } from "next/navigation";

export const useSEO = (pageKey) => {
  const { t, lang } = useTranslation();
  const pathname = usePathname();

  // Extraire le chemin sans la langue
  const pathWithoutLang = pathname.split("/").slice(2).join("/");
  const currentPath = pathWithoutLang || "home";

  // Utiliser pageKey ou déduire de l'URL
  const page = pageKey || currentPath.split("/")[0] || "home";

  // Récupérer les données SEO
  const getSEOData = () => {
    const siteData = {
      name: t("seo.site.name") || "PopLiving",
      url: t("seo.site.url") || "https://popliving.ch",
      description: t("seo.site.description"),
      keywords: t("seo.site.keywords"),
      locale: t("seo.site.locale") || `${lang}_CH`,
      type: t("seo.site.type") || "website",
    };

    const pageData = {
      title: t(`seo.pages.${page}.title`) || t("seo.site.name"),
      description: t(`seo.pages.${page}.description`) || siteData.description,
      keywords: t(`seo.pages.${page}.keywords`) || siteData.keywords,
      canonical: t(`seo.pages.${page}.canonical`) || pathname,
      ogType: t(`seo.pages.${page}.ogType`) || "website",
      robots: t(`seo.pages.${page}.robots`) || "index, follow",
    };

    return { site: siteData, page: pageData };
  };

  // Générer les meta tags
  const generateMetaTags = () => {
    const { site, page } = getSEOData();

    return {
      title: page.title,
      description: page.description,
      keywords: page.keywords,
      robots: page.robots,
      canonical: `${site.url}/${lang}${
        page.canonical === "/" ? "" : page.canonical
      }`,
      openGraph: {
        title: page.title,
        description: page.description,
        type: page.ogType,
        locale: site.locale,
        url: `${site.url}/${lang}${
          page.canonical === "/" ? "" : page.canonical
        }`,
        siteName: site.name,
      },
      alternates: {
        canonical: `${site.url}/${lang}${
          page.canonical === "/" ? "" : page.canonical
        }`,
        languages: {
          "fr-CH": `${site.url}/fr${
            page.canonical === "/" ? "" : page.canonical
          }`,
          "en-CH": `${site.url}/en${
            page.canonical === "/" ? "" : page.canonical
          }`,
          "de-CH": `${site.url}/de${
            page.canonical === "/" ? "" : page.canonical
          }`,
          "pt-CH": `${site.url}/pt${
            page.canonical === "/" ? "" : page.canonical
          }`,
          "es-CH": `${site.url}/es${
            page.canonical === "/" ? "" : page.canonical
          }`,
        },
      },
    };
  };

  // Générer le JSON-LD Schema
  const generateSchema = () => {
    const { site } = getSEOData();
    const schemaKey = `seo.pages.${page}.schema`;

    // Schema de base pour toutes les pages
    const baseSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: site.name,
      url: site.url,
      description: site.description,
      inLanguage: lang,
      publisher: {
        "@type": "Organization",
        name: site.name,
        url: site.url,
      },
    };

    // Schema spécifique à la page si disponible
    const pageSchema = t(schemaKey);
    if (pageSchema && typeof pageSchema === "object") {
      return {
        "@context": "https://schema.org",
        ...pageSchema,
      };
    }

    return baseSchema;
  };

  return {
    getSEOData,
    generateMetaTags,
    generateSchema,
    lang,
    page,
  };
};
