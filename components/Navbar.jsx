"use client";

import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from '../app/i18n/client';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const pathname = usePathname();
  const { t, lang } = useTranslation();

  // Langues disponibles avec leurs libellés
  const languageLabels = {
    fr: 'FR',
    en: 'EN',
    de: 'DE',
    pt: 'PT',
    es: 'ES'
  };

  // Fonction pour changer de langue en préservant le chemin actuel
  const switchLocalePath = (newLocale) => {
    // Obtenir le chemin actuel sans le paramètre de langue
    const pathWithoutLang = pathname.split('/').slice(2).join('/');
    return `/${newLocale}${pathWithoutLang ? `/${pathWithoutLang}` : ''}`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 shadow-md bg-white z-50">
      <div className="text-xl font-bold text-gray-800">
        <Link href={`/${lang}`}>POPLIVING</Link>
      </div>

      {/* Menu pour écrans moyens et plus */}
      <div className="hidden md:flex items-center space-x-4">
        <ul className="flex space-x-6 mr-6">
          <li>
            <Link href={`/${lang}`} className="text-gray-700 hover:text-orange-500 transition">
              {t('navbar.home')}
            </Link>
          </li>
          <li>
            <Link href={`/${lang}/concept`} className="text-gray-700 hover:text-orange-500 transition">
              {t('navbar.concept')}
            </Link>
          </li>
          <li>
            <Link href={`/${lang}/situation`} className="text-gray-700 hover:text-orange-500 transition">
              {t('navbar.situation')}
            </Link>
          </li>
          <li>
            <Link href={`/${lang}/faq`} className="text-gray-700 hover:text-orange-500 transition">
              {t('navbar.about')}
            </Link>
          </li>
        </ul>

        <Link href={`/${lang}/booking`} className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition-colors">
          {t('navbar.book_now')}
        </Link>

        <div className="relative">
          <button
            onClick={() => setLanguageOpen(!languageOpen)}
            className="flex items-center text-gray-700 hover:text-gray-900 ml-4"
          >
            {languageLabels[lang]} <ChevronDownIcon className="h-4 w-4 ml-1" />
          </button>

          {languageOpen && (
            <div className="absolute right-0 mt-2 w-24 bg-white shadow-lg rounded-md overflow-hidden z-20">
              {Object.keys(languageLabels).map((locale) => (
                <Link
                  key={locale}
                  href={switchLocalePath(locale)}
                  className={`block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition ${lang === locale ? 'bg-gray-100' : ''}`}
                  onClick={() => setLanguageOpen(false)}
                >
                  {languageLabels[locale]}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Bouton du menu mobile (aucun lien booking ici) */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="focus:outline-none text-gray-700"
          aria-label="Menu"
        >
          {menuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white md:hidden flex flex-col space-y-4 py-4 shadow-md z-40">
          <ul className="flex flex-col items-center space-y-4">
            <li className="w-full text-center">
              <Link
                href={`/${lang}`}
                className="block py-2 text-black hover:bg-gray-100 transition w-full"
                onClick={() => setMenuOpen(false)}
              >
                {t('navbar.home')}
              </Link>
            </li>
            <li className="w-full text-center">
              <Link
                href={`/${lang}/concept`}
                className="block py-2 text-black hover:bg-gray-100 transition w-full"
                onClick={() => setMenuOpen(false)}
              >
                {t('navbar.concept')}
              </Link>
            </li>
            <li className="w-full text-center">
              <Link
                href={`/${lang}/situation`}
                className="block py-2 text-black hover:bg-gray-100 transition w-full"
                onClick={() => setMenuOpen(false)}
              >
                {t('navbar.situation')}
              </Link>
            </li>
            <li className="w-full text-center">
              <Link
                href={`/${lang}/faq`}
                className="block py-2 text-black hover:bg-gray-100 transition w-full"
                onClick={() => setMenuOpen(false)}
              >
                {t('navbar.about')}
              </Link>
            </li>
            <li className="w-full text-center">
              <Link
                href={`/${lang}/booking`}
                className="block py-2 text-black hover:bg-gray-100 transition w-full"
                onClick={() => setMenuOpen(false)}
              >
                {t('navbar.book_now')}
              </Link>
            </li>
          </ul>

          <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-center space-x-4">
              {Object.keys(languageLabels).map((locale) => (
                <Link
                  key={locale}
                  href={switchLocalePath(locale)}
                  className={`text-gray-700 hover:text-gray-900 ${lang === locale ? "font-bold" : ""}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {languageLabels[locale]}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
