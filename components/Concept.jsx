// components/Concept.jsx
import Image from 'next/image';
import Link from 'next/link';

export default function Concept() {
  return (
    <section className="py-56 px-4 md:px-24 bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Le Concept</h2>
          <p className="text-lg leading-relaxed mb-10">
            Le coliving s'adresse à ceux qui apprécient vivre avec d'autres et faire partie d'une
            communauté. Nous partageons notre espace de vie pour créer des liens, échanger des
            expériences et évoluer ensemble en tant que communauté.
          </p>
          <Link href="/concept">
            <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded transition-colors duration-300">
              Détails
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
