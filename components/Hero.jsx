"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '@/app/i18n/client';

export default function Hero() {
  const { t, lang } = useTranslation();

  return (
    <section className="pt-56 py-48 px-4 md:px-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('home.hero.title')}</h1>
          <p className="text-lg leading-relaxed mb-8">
            {t('home.hero.description')}
          </p>
          <Link href={`/${lang}/faq`}>
            <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded">
              {t('home.hero.learn_more')}
            </button>
          </Link>
        </div>
        <div className="md:w-1/2 order-1 md:order-2">
          <Image
            src="/images/hero-bg.jpg"
            alt={t('home.hero.image_alt')}
            width={600}
            height={400}
            className="w-full h-auto shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
