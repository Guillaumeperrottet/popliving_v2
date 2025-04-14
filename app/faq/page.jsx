"use client";

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function About() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "À qui s’adresse le coliving ?",
      answer: "Le coliving s’adresse à toute personne cherchant un logement flexible et moderne, que vous soyez étudiant, professionnel ou en déplacement.",
    },
    {
      question: "Quelle est la durée minimale de séjour ?",
      answer: "La durée minimale de séjour est d’une semaine, mais vous pouvez prolonger selon vos besoins.",
    },
    {
      question: "Y a-t-il des options pour les couples ?",
      answer: "Oui, nous proposons des options adaptées pour les couples.",
    },
    {
      question: "Puis-je enregistrer mon adresse de résidence dans votre coliving ?",
      answer: "Oui, il est possible d’enregistrer votre adresse de résidence.",
    },
    {
      question: "Puis-je venir avec un animal de compagnie ?",
      answer: "Malheureusement, les animaux de compagnie ne sont pas autorisés.",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="mt-20">
        {/* Section FAQ */}
        <section className="text-center container mx-auto px-8 py-16">
          <h2 className="text-3xl font-bold mb-8">Questions Fréquemment Posées</h2>
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
