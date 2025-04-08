// components/Services.jsx
import { CheckCircle } from 'lucide-react';

const servicesData = [
  'WiFi haute vitesse',
  'Espaces communs agréables',
  'Services de nettoyage inclus',
  'Proximité transports & commerces',
];

export default function Services() {
  return (
    <section className="bg-gray-50 py-16 px-8">
      <h2 className="text-4xl font-bold text-center mb-12">Nos Services Inclus</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {servicesData.map((service, index) => (
          <div key={index} className="flex items-center text-xl">
            <CheckCircle className="text-green-500 mr-3" size={32} />
            {service}
          </div>
        ))}
      </div>
    </section>
  );
}
