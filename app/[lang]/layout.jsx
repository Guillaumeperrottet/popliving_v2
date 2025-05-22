import { Inter } from "next/font/google";
import { getDictionary } from "../i18n/server";
import { I18nProvider } from "../i18n/client";
import { locales } from "../i18n/settings";
import { Analytics } from "@vercel/analytics/react";
import "../../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });
const defaultLanguage = "fr";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

// Génération des métadonnées SEO dynamiques
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const currentLang = resolvedParams?.lang || defaultLanguage;
  const validLang = locales.includes(currentLang)
    ? currentLang
    : defaultLanguage;

  // Obtenir le dictionnaire pour les traductions SEO
  const dictionary = await getDictionary(validLang);

  // Données de base du site
  const siteData = {
    name: dictionary.seo?.site?.name || "PopLiving",
    url: dictionary.seo?.site?.url || "https://popliving.ch",
    description:
      dictionary.seo?.site?.description || "Coliving flexible à Riaz, Gruyère",
    locale: dictionary.seo?.site?.locale || `${validLang}_CH`,
  };

  // Métadonnées par défaut (homepage)
  const pageData = {
    title: dictionary.seo?.pages?.home?.title || siteData.name,
    description:
      dictionary.seo?.pages?.home?.description || siteData.description,
    keywords:
      dictionary.seo?.pages?.home?.keywords ||
      "coliving, location flexible, studio meublé",
  };

  return {
    title: pageData.title,
    description: pageData.description,
    keywords: pageData.keywords,
    authors: [{ name: "PopLiving" }],
    creator: "PopLiving",
    publisher: "PopLiving",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: siteData.locale,
      url: `${siteData.url}/${validLang}`,
      siteName: siteData.name,
      title: pageData.title,
      description: pageData.description,
      // images: [
      //   {
      //     url: `${siteData.url}/images/og-image.jpg`,
      //     width: 1200,
      //     height: 630,
      //     alt: pageData.title,
      //   },
      // ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageData.title,
      description: pageData.description,
      images: [`${siteData.url}/images/og-image.jpg`],
    },
    alternates: {
      canonical: `${siteData.url}/${validLang}`,
      languages: {
        "fr-CH": `${siteData.url}/fr`,
        "en-CH": `${siteData.url}/en`,
        "de-CH": `${siteData.url}/de`,
        "pt-CH": `${siteData.url}/pt`,
        "es-CH": `${siteData.url}/es`,
      },
    },
    verification: {
      google: "your-google-verification-code",
      // Ajoutez d'autres codes de vérification si nécessaire
    },
    category: "Real Estate",
  };
}

export default async function RootLayout({ children, params }) {
  const resolvedParams = await params;
  const currentLang = resolvedParams?.lang || defaultLanguage;
  const validLang = locales.includes(currentLang)
    ? currentLang
    : defaultLanguage;

  const dictionary = await getDictionary(validLang);

  // Schema JSON-LD pour l'organisation
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PopLiving",
    url: "https://popliving.ch",
    // logo: "https://popliving.ch/images/logo.png",
    description:
      dictionary.seo?.site?.description || "Coliving flexible à Riaz, Gruyère",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Route de la Gruyère 45",
      postalCode: "1632",
      addressLocality: "Riaz",
      addressRegion: "Fribourg",
      addressCountry: "CH",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+41-26-913-89-20",
      contactType: "customer service",
      availableLanguage: ["French", "English", "German"],
    },
  };

  return (
    <html lang={validLang}>
      <head>
        {/* Schema JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {/* Autres balises head personnalisées */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#f97316" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="20DlOsaChu6x-wm1dvoI_k6uOLCKqSWUF4XnX18S_70"
        />
      </head>
      <body className={inter.className}>
        <I18nProvider dictionary={dictionary} lang={validLang}>
          {children}
        </I18nProvider>
        <Analytics />
      </body>
    </html>
  );
}
