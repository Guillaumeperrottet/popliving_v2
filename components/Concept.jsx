// components/Concept.jsx
import Image from 'next/image';

export default function Concept() {
  return (
    <section className="py-16 px-4 md:px-24 bg-gray-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6">Le Concept</h2>
          <p className="text-lg leading-relaxed">
            Le coliving s’adresse à ceux qui apprécient vivre avec d'autres et faire partie d'une communauté. Nous partageons notre espace de vie pour créer des liens, échanger des expériences et évoluer ensemble en tant que communauté.
          </p>
          <button className="bg-red-500 hover:bg-red-600 text-white py-3 px-8 rounded-full">
            En savoir plus
          </button>
        </div>
      </div>
    </section>
  );
}
