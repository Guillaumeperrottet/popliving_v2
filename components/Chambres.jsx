'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { useTranslation } from '@/app/i18n/client';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// On ne conserve ici que les images pour chaque chambre
const chambresData = [
  {
    id: 1,
    images: [
      '/images/chambres/chambre-simple1.png',
      '/images/chambres/chambre-simple3.png',
      '/images/chambres/chambre-simple4.png',
      '/images/chambres/chambre-simple5.png'
    ],
  },
  {
    id: 2,
    images: ['/images/chambres/studio-independant.png'],
  },
  {
    id: 3,
    images: ['/images/chambres/appartement-partage.png'],
  },
];

// Mapping entre l'ID de la chambre et les clés de traduction dans le dictionnaire
const translationKeys = {
  1: {
    title: 'home.rooms.simple_room_title',
    description: 'home.rooms.simple_room_description',
    imageAlt: 'home.rooms.simple_room_image_alt'
  },
  2: {
    title: 'home.rooms.studio_title',
    description: 'home.rooms.studio_description',
    imageAlt: 'home.rooms.studio_image_alt'
  },
  3: {
    title: 'home.rooms.shared_apartment_title',
    description: 'home.rooms.shared_apartment_description',
    imageAlt: 'home.rooms.shared_apartment_image_alt'
  },
};

export default function Chambres() {
  const { t, lang } = useTranslation();

  // Insertion d'un style custom pour la pagination blanche dans Swiper
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `
      .swiper-pagination-bullet {
        background: white !important;
        opacity: 0.7;
      }
      .swiper-pagination-bullet-active {
        background: white !important;
        opacity: 1;
      }
    `;
    document.head.appendChild(styleElement);
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          {t('home.rooms.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {chambresData.map((chambre) => {
            // Récupération des clés spécifiques à la chambre
            const keys = translationKeys[chambre.id];
            const roomTitle = t(keys.title);
            // On suppose que la description est une chaîne contenant des retours à la ligne
            const roomDescriptionText = t(keys.description);
            const roomCaracteristiques = roomDescriptionText.split('\n');
            const imageAlt = t(keys.imageAlt);

            return (
              <div
                key={chambre.id}
                className="bg-white shadow rounded-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-orange-200"
              >
                <div className="relative">
                  <Swiper
                    modules={[Navigation, Pagination]}
                    navigation={{
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev',
                    }}
                    pagination={{ clickable: true }}
                    loop={true}
                    className="h-64 w-full"
                  >
                    {chambre.images.map((image, idx) => (
                      <SwiperSlide key={idx}>
                        <div className="relative h-64 w-full">
                          <Image
                            src={image}
                            alt={`${imageAlt} - ${idx + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                    <div className="swiper-button-prev !text-white"></div>
                    <div className="swiper-button-next !text-white"></div>
                  </Swiper>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-center mb-4">
                    {roomTitle}
                  </h3>
                  <div className="text-center text-gray-600">
                    {roomCaracteristiques.map((item, index) => (
                      <div key={index} className="mb-1">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-12">
          <Link href={`/${lang}/booking`}>
            <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-8 rounded transition-colors duration-300">
              {t('home.rooms.availability_request')}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
