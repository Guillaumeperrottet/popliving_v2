"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

// Composant pour Google Analytics et suivi SEO
export function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Google Analytics 4
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
        page_path: pathname,
        page_title: document.title,
        page_location: window.location.href,
      });
    }

    // Google Tag Manager (optionnel)
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "page_view",
        page_path: pathname,
        page_title: document.title,
      });
    }
  }, [pathname, searchParams]);

  return null;
}

// Hook pour tracker les événements de conversion
export function useTrackEvents() {
  const trackEvent = (eventName, parameters = {}) => {
    // Google Analytics 4
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", eventName, {
        ...parameters,
        timestamp: new Date().toISOString(),
      });
    }

    // Google Tag Manager
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: eventName,
        ...parameters,
      });
    }
  };

  // Événements spécifiques au business
  const trackBookingStart = (type = "room") => {
    trackEvent("booking_start", {
      event_category: "conversion",
      event_label: type,
      value: type === "storage" ? 50 : 100,
    });
  };

  const trackBookingSubmit = (type, duration) => {
    trackEvent("booking_submit", {
      event_category: "conversion",
      event_label: `${type}_${duration}`,
      value: type === "storage" ? 100 : 200,
    });
  };

  const trackLanguageChange = (fromLang, toLang) => {
    trackEvent("language_change", {
      event_category: "engagement",
      event_label: `${fromLang}_to_${toLang}`,
    });
  };

  const trackPhoneClick = () => {
    trackEvent("phone_click", {
      event_category: "contact",
      event_label: "header_phone",
    });
  };

  const trackEmailClick = () => {
    trackEvent("email_click", {
      event_category: "contact",
      event_label: "footer_email",
    });
  };

  return {
    trackEvent,
    trackBookingStart,
    trackBookingSubmit,
    trackLanguageChange,
    trackPhoneClick,
    trackEmailClick,
  };
}

// Composant Script pour charger Google Analytics
export function GAScript() {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  if (!GA_ID) return null;

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
              anonymize_ip: true,
              respect_user_consent: true,
            });
          `,
        }}
      />
    </>
  );
}

// Hook pour la surveillance des Core Web Vitals
export function useWebVitals() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("web-vitals").then(
        ({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          const reportWebVital = (metric) => {
            if (window.gtag) {
              window.gtag("event", metric.name, {
                event_category: "Web Vitals",
                event_label: metric.id,
                value: Math.round(
                  metric.name === "CLS" ? metric.value * 1000 : metric.value
                ),
                non_interaction: true,
              });
            }
          };

          getCLS(reportWebVital);
          getFID(reportWebVital);
          getFCP(reportWebVital);
          getLCP(reportWebVital);
          getTTFB(reportWebVital);
        }
      );
    }
  }, []);
}
