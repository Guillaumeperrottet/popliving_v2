"use client";

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useTranslation } from '@/app/i18n/client';

export default function About() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Récupération des traductions pour la FAQ à partir du dictionnaire
  const faqs = [
    {
      question: t("about.faq.questions.q1.title"),
      answer: t("about.faq.questions.q1.answer")
    },
    {
      question: t("about.faq.questions.q2.title"),
      answer: t("about.faq.questions.q2.answer")
    },
    {
      question: t("about.faq.questions.q3.title"),
      answer: t("about.faq.questions.q3.answer")
    },
    {
      question: t("about.faq.questions.q4.title"),
      answer: t("about.faq.questions.q4.answer")
    },
    {
      question: t("about.faq.questions.q5.title"),
      answer: t("about.faq.questions.q5.answer")
    }
  ];

  return (
    <>
      <Navbar />
      <main className="mt-20">
        {/* Section FAQ */}
        <section className="text-center container mx-auto px-8 py-16">
          <h2 className="text-3xl font-bold mb-8">{t("about.faq.title")}</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left py-4 flex justify-between items-center"
                >
                  <span className="text-xl font-semibold">{faq.question}</span>
                  <span className="text-2xl">
                    {openIndex === index ? '-' : '+'}
                  </span>
                </button>
                {openIndex === index && (
                  <p className="text-gray-600 mt-2">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
