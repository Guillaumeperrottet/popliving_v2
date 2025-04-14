"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useTranslation } from '@/app/i18n/client';

export default function Situation() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <main className="mt-20">
        {/* Section principale avec background image */}
        <section
          className="relative h-[60vh] bg-cover bg-center flex flex-col items-center justify-center text-center"
          style={{
            backgroundImage: "url('/images/situation-background.jpg')",
          }}
        >
          <div className="relative z-10">
            <p className="text-white text-lg mt-4">
              {t('situation.description')}
            </p>
          </div>
        </section>

        {/* Section carte */}
        <section className="container mx-auto px-8 py-16">
          <h2 className="text-3xl font-bold mb-8">Situation</h2>
          <div className="w-full h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5478.674819123118!2d7.0617802!3d46.6398508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e630072868315%3A0x404aa784df5c03b!2sPopliving!5e0!3m2!1sfr!2sch!4v1744105391785!5m2!1sfr!2sch"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
