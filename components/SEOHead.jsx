"use client";

import Head from "next/head";
import { useSEO } from "../app/i18n/seo";

export default function SEOHead({
  pageKey,
  customTitle,
  customDescription,
  customKeywords,
  noIndex = false,
}) {
  const { generateMetaTags, generateSchema, lang } = useSEO(pageKey);
  const meta = generateMetaTags();
  const schema = generateSchema();

  // Permettre la surcharge des métadonnées
  const finalTitle = customTitle || meta.title;
  const finalDescription = customDescription || meta.description;
  const finalKeywords = customKeywords || meta.keywords;
  const robotsContent = noIndex
    ? "noindex, nofollow"
    : meta.robots || "index, follow";

  return (
    <Head>
      {/* Titre et description */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />

      {/* Robots */}
      <meta name="robots" content={robotsContent} />

      {/* Canonique */}
      <link rel="canonical" href={meta.canonical} />

      {/* Hreflang pour le multilangue */}
      {Object.entries(meta.alternates.languages).map(([locale, url]) => (
        <link key={locale} rel="alternate" hrefLang={locale} href={url} />
      ))}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={meta.alternates.languages["fr-CH"]}
      />

      {/* Open Graph */}
      <meta property="og:type" content={meta.openGraph.type} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:url" content={meta.openGraph.url} />
      <meta property="og:site_name" content={meta.openGraph.siteName} />
      <meta property="og:locale" content={meta.openGraph.locale} />
      {meta.openGraph.images.map((image, index) => (
        <meta key={index} property="og:image" content={image.url} />
      ))}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={finalTitle} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content={meta.twitter.card} />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={meta.twitter.images[0]} />

      {/* Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      {/* Métadonnées supplémentaires */}
      <meta name="author" content="PopLiving" />
      <meta name="language" content={lang} />
      <meta httpEquiv="content-language" content={lang} />

      {/* Geo tags pour la localisation */}
      <meta name="geo.region" content="CH-FR" />
      <meta name="geo.placename" content="Riaz, Gruyère" />
      <meta name="geo.position" content="46.6398508;7.0617802" />
      <meta name="ICBM" content="46.6398508, 7.0617802" />
    </Head>
  );
}
