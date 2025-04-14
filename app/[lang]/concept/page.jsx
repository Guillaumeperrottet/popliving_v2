"use client";

import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SubtitleChanger from '@/components/SubtitleChanger';
import Card from '@/components/Card';
import { useTranslation } from '@/app/i18n/client';

export default function Concept() {
  const { t } = useTranslation();

  // Tableau des sous-titres traduits
  const subtitles = [
    t("concept.subtitle.subtitle1"),
    t("concept.subtitle.subtitle2"),
    t("concept.subtitle.subtitle3")
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Section d'introduction */}
        <section className="h-screen bg-gradient-to-b from-orange-400 to-white flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-4">
            {t("concept.services.title")}
          </h1>
          <div className="text-2xl md:text-3xl">
            <SubtitleChanger subtitles={subtitles} />
          </div>
        </section>

        {/* Section cartes */}
        <section className="container mx-auto px-8 py-16">
          <div className="grid md:grid-cols-3 gap-12">
            <Card
              image="/images/location-flexible.png"
              alt={t("concept.cards.flexible.alt")}
              title={t("concept.cards.flexible.title")}
              description={t("concept.cards.flexible.description")}
            />
            <Card
              image="/images/cohabitation.png"
              alt={t("concept.cards.cohabitation.alt")}
              title={t("concept.cards.cohabitation.title")}
              description={t("concept.cards.cohabitation.description")}
            />
            <Card
              image="/images/services-inclus.png"
              alt={t("concept.cards.services.alt")}
              title={t("concept.cards.services.title")}
              description={t("concept.cards.services.description")}
            />
            <Card
              image="/images/espaces-commun.png"
              alt={t("concept.cards.common_areas.alt")}
              title={t("concept.cards.common_areas.title")}
              description={t("concept.cards.common_areas.description")}
            />
            <Card
              image="/images/ambiance-paisible.png"
              alt={t("concept.cards.peaceful.alt")}
              title={t("concept.cards.peaceful.title")}
              description={t("concept.cards.peaceful.description")}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
