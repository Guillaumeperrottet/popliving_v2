"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { useTranslation } from "@/app/i18n/client";

// Exemple pour la page FAQ avec SEO optimisé
export default function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Configuration des FAQ pour le Schema JSON-LD
  const faqs = [
    {
      question: t("about.faq.questions.q1.title"),
      answer: t("about.faq.questions.q1.answer"),
    },
    {
      question: t("about.faq.questions.q2.title"),
      answer: t("about.faq.questions.q2.answer"),
    },
    {
      question: t("about.faq.questions.q3.title"),
      answer: t("about.faq.questions.q3.answer"),
    },
    {
      question: t("about.faq.questions.q4.title"),
      answer: t("about.faq.questions.q4.answer"),
    },
    {
      question: t("about.faq.questions.q5.title"),
      answer: t("about.faq.questions.q5.answer"),
    },
  ];

  return (
    <>
      {/* SEO Head Component */}
      <SEOHead
        pageKey="faq"
        // Optionnel: surcharger les métadonnées si nécessaire
        // customTitle="Titre personnalisé"
        // customDescription="Description personnalisée"
      />

      <Navbar />
      <main className="mt-20">
        {/* Section FAQ avec structure sémantique */}
        <section className="text-center container mx-auto px-8 py-16">
          <header>
            <h1 className="text-3xl font-bold mb-8">{t("about.faq.title")}</h1>
          </header>

          <div
            className="space-y-4"
            itemScope
            itemType="https://schema.org/FAQPage"
          >
            {faqs.map((faq, index) => (
              <article
                key={index}
                className="border-b"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left py-4 flex justify-between items-center"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h2 className="text-xl font-semibold" itemProp="name">
                    {faq.question}
                  </h2>
                  <span className="text-2xl" aria-hidden="true">
                    {openIndex === index ? "-" : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <div
                    id={`faq-answer-${index}`}
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <p className="text-gray-600 mt-2 pb-4" itemProp="text">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
