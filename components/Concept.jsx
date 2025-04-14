"use client";

import Link from 'next/link';
import { useTranslation } from '@/app/i18n/client';

export default function Concept() {
  const { t, lang } = useTranslation();

  return (
    <section className="py-56 px-4 md:px-24 bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">{t('home.concept.title')}</h2>
          <p className="text-lg leading-relaxed mb-10">
            {t('home.concept.description')}
          </p>
          <Link href={`/${lang}/concept`}>
            <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded transition-colors duration-300">
              {t('home.concept.detail')}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
