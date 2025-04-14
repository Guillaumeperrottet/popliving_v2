// components/Footer.jsx
"use client";

import Link from 'next/link';
import { useTranslation } from '@/app/i18n/client';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">{t('footer.quick_links.title')}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-600 hover:text-orange-500 transition-colors">
                  {t('footer.quick_links.home')}
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-gray-600 hover:text-orange-500 transition-colors">
                  {t('footer.quick_links.booking_request')}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-orange-500 transition-colors">
                  {t('footer.quick_links.faq')}
                </Link>
              </li>
              <li>
                <Link href="https://campus-gerance.ch" className="text-gray-600 hover:text-orange-500 transition-colors flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Campus Gérance
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">{t('footer.contact_us.title')}</h3>
            <ul className="space-y-3">
              <li className="text-gray-600">
                info@campus-gerance.ch
              </li>
              <li className="text-gray-600">
                +41 26 913 89 20
              </li>
              <li className="text-gray-600">
                +41 77 269 15 53
              </li>
              <li className="text-gray-600">
                Route de la Gruyère 45, 1632 Riaz
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-200">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            {/* Vous pouvez ajouter d'autres éléments traduits ici si besoin */}
          </div>

          <div className="text-center text-gray-500 text-sm">
            © 2025 {t('footer.copyright')}
          </div>

          <div className="text-center mt-4 text-gray-500 text-sm">
            Code with <span className="text-red-500">❤</span> by{" "}
            <a
              href="https://github.com/Guillaumeperrottet"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              style={{ cursor: "url('/images/fun-cursor.png'), auto" }}
            >
              Guillaume
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
