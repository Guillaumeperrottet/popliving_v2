// components/Hero.jsx

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="pt-56 py-48 px-4 md:px-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">L'habitat flexible, courte et longue durée</h1>
          <p className="text-lg leading-relaxed mb-8">
            Retrouvez la sérénité et le confort d'un chez-soi, où chaque studio est un cocon pour vivre en toute tranquillité
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded">
            En savoir plus
          </button>
        </div>
        <div className="md:w-1/2 order-1 md:order-2">
          <Image
            src="/images/hero-bg.jpg"
            alt="Personnes partageant un repas"
            width={600}
            height={400}
            className="w-full h-auto shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
