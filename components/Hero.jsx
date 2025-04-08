// components/Hero.jsx
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full">
      <Image
        src="/images/hero-bg.jpg"
        alt="Popliving"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-5xl font-bold text-white mb-4">
            L'habitat flexible, courte et longue durée
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Retrouvez la sérénité et le confort d'un chez-soi, où chaque studio est un cocon pour vivre en toute tranquillité
          </p>
          <button className="bg-red-500 hover:bg-red-600 text-white py-3 px-8 rounded-full">
            En savoir plus
          </button>
        </div>
      </div>
    </section>
  );
}
