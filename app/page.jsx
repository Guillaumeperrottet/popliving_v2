// app/page.jsx
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Concept from '@/components/Concept';
import Chambres from '@/components/Chambres';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Concept />
      <Chambres />
      <Services />
      <Footer />
      {/* Add other components here */}
    </>
  );
}
