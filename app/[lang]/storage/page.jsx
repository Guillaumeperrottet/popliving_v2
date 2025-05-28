"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "@/app/i18n/client";
import Link from "next/link";

export default function Storage() {
  const { t, lang } = useTranslation();

  // Configuration des espaces de stockage avec les données exactes du croquis
  const storageOptions = [
    {
      id: 1,
      size: "S",
      volumeKey: "storage.options.xs.volume",
      surfaceKey: "storage.options.xs.surface",
      referenceKey: "storage.options.xs.reference",
      spaceForKey: "storage.options.xs.space_for",
      image: "/images/storage/s-storage.png",
    },
    {
      id: 2,
      size: "M",
      volumeKey: "storage.options.m.volume",
      surfaceKey: "storage.options.m.surface",
      referenceKey: "storage.options.m.reference",
      spaceForKey: "storage.options.m.space_for",
      image: "/images/storage/m-storage.png",
    },
    {
      id: 3,
      size: "L",
      volumeKey: "storage.options.xl.volume",
      surfaceKey: "storage.options.xl.surface",
      referenceKey: "storage.options.xl.reference",
      spaceForKey: "storage.options.xl.space_for",
      image: "/images/storage/l-storage.png",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="mt-20">
        {/* Hero Section */}
        <section className="relative h-[40vh] bg-white flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            {t("storage.hero.title")}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            {t("storage.hero.description")}
          </p>
        </section>

        {/* Storage Options Section - Format basé sur votre croquis */}
        <section className="container mx-auto px-8 py-16">
          <div className="space-y-20">
            {storageOptions.map((option) => (
              <div
                key={option.id}
                className="relative py-10 border-t border-b border-gray-200"
              >
                <h2 className="text-5xl font-bold mb-8">{option.size}</h2>

                <div className="flex flex-col md:flex-row justify-between">
                  <div className="space-y-4 md:w-1/2">
                    <p className="text-lg">
                      <span className="font-semibold">
                        {t("storage.volume")}:{" "}
                      </span>
                      {t(option.volumeKey)}
                    </p>
                    <p className="text-lg">
                      <span className="font-semibold">
                        {t("storage.surface")}:{" "}
                      </span>
                      {t(option.surfaceKey)}
                    </p>
                    <p className="text-lg">
                      <span className="font-semibold">
                        {t("storage.reference")}:{" "}
                      </span>
                      {t(option.referenceKey)}
                    </p>
                    <p className="text-lg">
                      <span className="font-semibold">
                        {t("storage.space_for")}:{" "}
                      </span>
                      {t(option.spaceForKey)}
                    </p>
                  </div>

                  <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
                    {/* Image placeholder - à remplacer par vos vraies images */}
                    <div className="relative h-64 w-64">
                      {/* Si vous avez des images réelles, décommentez cette ligne et commentez le div ci-dessous */}
                      <Image
                        src={option.image}
                        alt={`${option.size} storage unit`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
                {/* Nouveau bouton sous chaque option */}
                <div className="mt-8 flex justify-center">
                  <Link
                    href={`/${lang}/booking#form-${option.size.toLowerCase()}`}
                  >
                    <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-lg font-medium transition-colors duration-300">
                      {t("storage.availability_button")}
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section
        <section className="bg-white py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              {t("storage.cta.title")}
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              {t("storage.cta.description")}
            </p>
            <Link href={`/${lang}/booking`}>
              <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-lg font-medium transition-colors duration-300">
                {t("storage.cta.button")}
              </button>
            </Link>
          </div>
        </section> */}

        {/* FAQ Section */}
        <section className="container mx-auto px-8 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {t("storage.faq.title")}
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white shadow rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">
                  {t("storage.faq.q1.question")}
                </h3>
                <p className="text-gray-600">{t("storage.faq.q1.answer")}</p>
              </div>
              <div className="bg-white shadow rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">
                  {t("storage.faq.q2.question")}
                </h3>
                <p className="text-gray-600">{t("storage.faq.q2.answer")}</p>
              </div>
              <div className="bg-white shadow rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">
                  {t("storage.faq.q3.question")}
                </h3>
                <p className="text-gray-600">{t("storage.faq.q3.answer")}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
