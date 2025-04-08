'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const chambresData = [
  {
    id: 1,
    titre: 'Chambre simple',
    images: ['/images/chambres/chambre-simple1.png', '/images/chambres/chambre-simple3.png', '/images/chambres/chambre-simple4.png', '/images/chambres/chambre-simple5.png'],
    description: 'WC/Douche individuel Cuisine communautaire TV/WIFI/Chromecast Literie confortable Service de conciergerie Laundry',
  },
  {
    id: 2,
    titre: 'Studio indépendant',
    images: ['/images/chambres/studio-independant.png'],
    description: 'WC/Douche individuel Cuisine équipée TV/WIFI/Chromecast Literie confortable Service de conciergerie Laundry',
  },
  {
    id: 3,
    titre: 'Appartement partagé',
    images: ['/images/chambres/appartement-partage.png'],
    description: 'WC/Douche individuel Cuisine équipée TV/WIFI/Chromecast Literie confortable Service de conciergerie Laundry',
  },
];


export default function Chambres() {
  return (
    <section className="py-16 px-8 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12">Nos Chambres</h2>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {chambresData.map((chambre) => (
          <div
            key={chambre.id}
            className="rounded-lg shadow-md bg-white overflow-hidden transition duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              className="h-64 w-full"
            >
              {chambre.images.map((image, idx) => (
                <SwiperSlide key={idx}>
                  <Image
                    src={image}
                    alt={chambre.titre}
                    fill
                    className="object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{chambre.titre}</h3>
              <p className="text-gray-600">{chambre.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button
          className="bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-full shadow-md transition-transform duration-300 hover:scale-105"
        >
          Demande de disponibilité
        </button>
      </div>
    </section>
  );
}
