// pages/concept.jsx
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SubtitleChanger from '@/components/SubtitleChanger';
import Card from '@/components/Card';

export default function Concept() {
  return (
    <>
      <Navbar />
      <main>
        <section className="h-screen bg-gradient-to-b from-orange-400 to-white flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-4">Découvrez notre concept</h1>
          <div className="text-2xl md:text-3xl">
            <SubtitleChanger subtitles={["Vivez différemment.", "Simplifiez votre quotidien.", "Partagez des espaces uniques."]} />
          </div>
        </section>

        <section className="container mx-auto px-8 py-16">
          <div className="grid md:grid-cols-3 gap-12">
            <Card
              image="/images/location-flexible.png"
              alt="Location flexible"
              title="Location flexible"
              description="Choisissez de louer votre studio pour une semaine, un mois ou plusieurs mois, selon vos besoins et votre style de vie."
            />
            <Card
              image="/images/cohabitation.png"
              alt="Cohabitation"
              title="Cohabitation"
              description="Créez des liens avec d'autres résidents dans un environnement convivial, favorisant l'échange et le partage d'expériences."
            />
            <Card
              image="/images/services-inclus.png"
              alt="Tous Services Inclus"
              title="Tous Services Inclus"
              description="Profitez d'un cadre de vie sans souci avec des services tels que le WiFi, le nettoyage, le stockage et bien plus encore."
            />
            <Card
              image="/images/espaces-commun.png"
              alt="Espaces Communs"
              title="Espaces Communs"
              description="Accédez à des zones communes bien conçues pour se détendre, travailler ou socialiser, offrant un équilibre entre vie privée et vie communautaire."
            />
            <Card
              image="/images/ambiance-paisible.png"
              alt="Ambiance paisible"
              title="Ambiance paisible"
              description="Vivez dans un environnement calme et inspirant, idéal pour se ressourcer et se concentrer sur ce qui compte vraiment entre ville et montagne."
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
