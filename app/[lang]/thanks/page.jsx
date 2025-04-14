"use client";

import { useTranslation } from '@/app/i18n/client';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Import du router
import { useEffect, useState } from 'react'; // Import des hooks

export default function ThankYouPage() {
  const { t } = useTranslation();
  const router = useRouter();
  const [countdown, setCountdown] = useState(10); // Initialisation du compte à rebours à 10 secondes

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1); // Réduction du compte à rebours
    }, 1000);

    // Redirection après 10 secondes
    if (countdown === 0) {
      router.push('/'); // Redirige vers la page d'accueil
    }

    return () => clearInterval(timer); // Nettoyage du timer
  }, [countdown, router]);

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-8 py-24 flex flex-col items-center justify-center min-h-[60vh]">
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-8 flex justify-center">
            <div className="rounded-full bg-green-100 p-4">
              <svg className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-6 text-gray-900">{t('booking.thank_you_title')}</h1>
          <p className="text-xl mb-8 text-gray-600">
            {t('booking.thank_you_message')}
          </p>
          <p className="text-gray-500 mb-8">
            {`${t('common.redirect_message').replace('{{seconds}}', countdown)}`}
          </p>
          <Link
            href="/"
            className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-lg font-medium transition-colors duration-300"
          >
            {t('common.back_to_home')}
          </Link>
        </div>
      </main>
    </>
  );
}
