'use client';
import { ShoppingBag, Paintbrush, Car, ShoppingCart, Dumbbell } from 'lucide-react';
import { useTranslation } from '@/app/i18n/client';

const servicesTranslationData = [
  {
    icon: (
      <ShoppingBag
        size={48}
        className="text-gray-300 group-hover:text-gray-400 transition-colors duration-300"
      />
    ),
    titleKey: 'home.services.storage_title',
    descriptionKey: 'home.services.storage_description'
  },
  {
    icon: (
      <Paintbrush
        size={48}
        className="text-gray-300 group-hover:text-gray-400 transition-colors duration-300"
      />
    ),
    titleKey: 'home.services.cleaning_title',
    descriptionKey: 'home.services.cleaning_description'
  },
  {
    icon: (
      <Car
        size={48}
        className="text-gray-300 group-hover:text-gray-400 transition-colors duration-300"
      />
    ),
    titleKey: 'home.services.parking_title',
    descriptionKey: 'home.services.parking_description'
  },
  {
    icon: (
      <ShoppingCart
        size={48}
        className="text-gray-300 group-hover:text-gray-400 transition-colors duration-300"
      />
    ),
    titleKey: 'home.services.epicerie_title',
    descriptionKey: 'home.services.epicerie_description'
  },
  {
    icon: (
      <Dumbbell
        size={48}
        className="text-gray-300 group-hover:text-gray-400 transition-colors duration-300"
      />
    ),
    titleKey: 'home.services.fitness_title',
    descriptionKey: 'home.services.fitness_description'
  }
];

export default function Services() {
  const { t } = useTranslation();

  return (
    <section className="py-56 px-4 md:px-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">{t('home.services.title')}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {servicesTranslationData.slice(0, 3).map((service, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{t(service.titleKey)}</h3>
              <p className="text-gray-600">{t(service.descriptionKey)}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 mt-12">
          {servicesTranslationData.slice(3).map((service, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{t(service.titleKey)}</h3>
              <p className="text-gray-600">{t(service.descriptionKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
