export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// Fonction pour envoyer des événements personnalisés
export const gtag = (...args) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag(...args);
  }
};

// Événements spécifiques à PopLiving
export const trackBookingSubmit = (bookingType, value) => {
  gtag("event", "booking_submit", {
    event_category: "engagement",
    event_label: bookingType, // 'room' ou 'storage'
    value: value, // 200 pour room, 100 pour storage
    currency: "CHF",
  });
};

export const trackPhoneClick = () => {
  gtag("event", "phone_click", {
    event_category: "engagement",
    event_label: "contact_phone",
    value: 50,
    currency: "CHF",
  });
};

export const trackStorageInquiry = (storageSize) => {
  gtag("event", "storage_inquiry", {
    event_category: "engagement",
    event_label: storageSize, // 'xs', 'm', 'xl'
    value: 100,
    currency: "CHF",
  });
};

export const trackLanguageChange = (newLanguage) => {
  gtag("event", "language_change", {
    event_category: "engagement",
    event_label: newLanguage,
  });
};

export const trackPageView = (url, title) => {
  gtag("config", GA_MEASUREMENT_ID, {
    page_location: url,
    page_title: title,
  });
};
