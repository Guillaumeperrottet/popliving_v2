'use client';
import { ShoppingBag, Paintbrush, Car, ShoppingCart, Dumbbell } from 'lucide-react';

const servicesData = [
  {
    icon: <ShoppingBag size={48} className="text-gray-300 group-hover:text-gray-400 transition-colors duration-300" />,
    title: 'Stockage',
    description: 'Si tu as besoin, nous mettons à ta disposition un espace de stockage. Quelle que soit la durée, nos espaces modulables s\'adaptent à tes besoins.'
  },
  {
    icon: <Paintbrush size={48} className="text-gray-300 group-hover:text-gray-400 transition-colors duration-300" />,
    title: 'Nettoyage',
    description: 'Nous proposons des services de nettoyage à la demande. Concentre-toi sur ce qui compte vraiment pour toi, et nous veillons à ce que ton lieu de vie reste accueillant et propre.'
  },
  {
    icon: <Car size={48} className="text-gray-300 group-hover:text-gray-400 transition-colors duration-300" />,
    title: 'Parking',
    description: 'Des places de parking sont disponibles en quantité limitée, alors ne tarde pas à réserver la tienne.'
  },
  {
    icon: <ShoppingCart size={48} className="text-gray-300 group-hover:text-gray-400 transition-colors duration-300" />,
    title: 'Épicerie',
    description: 'Située à 500m'
  },
  {
    icon: <Dumbbell size={48} className="text-gray-300 group-hover:text-gray-400 transition-colors duration-300" />,
    title: 'Salle de Fitness',
    description: 'Située à 150m'
  }
];

export default function Services() {
  return (
    <section className="py-56 px-4 md:px-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Nos Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {servicesData.slice(0, 3).map((service, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 mt-12">
          {servicesData.slice(3).map((service, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
