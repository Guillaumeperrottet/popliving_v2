'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const chambresData = [
  {
    id: 1,
    titre: 'Chambre simple',
    images: ['/images/chambres/chambre-simple1.png', '/images/chambres/chambre-simple3.png', '/images/chambres/chambre-simple4.png', '/images/chambres/chambre-simple5.png'],
    caracteristiques: [
      'WC/Douche individuel',
      'Cuisine communautaire',
      'TV/WIFI/Chromecast',
      'Literie confortable',
      'Service de conciergerie',
      'Laundry'
    ]
  },
  {
    id: 2,
    titre: 'Studio indépendant',
    images: ['/images/chambres/studio-independant.png'],
    caracteristiques: [
      'WC/Douche individuel',
      'Cuisine équipée',
      'TV/WIFI/Chromecast',
      'Literie confortable',
      'Service de conciergerie',
      'Laundry'
    ]
  },
  {
    id: 3,
    titre: 'Appartement partagé',
    images: ['/images/chambres/appartement-partage.png'],
    caracteristiques: [
      'WC/Douche partagé',
      'Cuisine équipée',
      'TV/WIFI/Chromecast',
      'Literie confortable',
      'Service de conciergerie',
      'Laundry'
    ]
  },
];

export default function Chambres() {
  // Ajouter une feuille de style personnalisée pour la pagination blanche
  useEffect(() => {
    // Créer un élément style pour personnaliser la pagination
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

    // Nettoyer lors du démontage du composant
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Nos chambres</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {chambresData.map((chambre) => (
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
                          alt={`${chambre.titre} - image ${idx + 1}`}
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
                <h3 className="text-2xl font-semibold text-center mb-4">{chambre.titre}</h3>
                <div className="text-center text-gray-600">
                  {chambre.caracteristiques.map((item, index) => (
                    <div key={index} className="mb-1">{item}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link href="/booking">
            <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-8 rounded transition-colors duration-300">
              Demande de disponibilité
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
