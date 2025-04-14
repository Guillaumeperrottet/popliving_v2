"use client";

import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 shadow-md bg-white z-50">
      <div className="text-xl font-bold text-gray-800">
        <Link href="/">POPLIVING</Link>
      </div>

      {/* Menu pour écrans moyens et plus */}
      <div className="hidden md:flex items-center space-x-4">
        <ul className="flex space-x-6 mr-6">
          <li>
            <Link href="/" className="text-gray-700 hover:text-orange-500 transition">
              Accueil
            </Link>
          </li>
          <li>
            <Link href="/concept" className="text-gray-700 hover:text-orange-500 transition">
              Concept
            </Link>
          </li>
          <li>
            <Link href="/situation" className="text-gray-700 hover:text-orange-500 transition">
              Situation
            </Link>
          </li>
          <li>
            <Link href="/faq" className="text-gray-700 hover:text-orange-500 transition">
              FAQ
            </Link>
          </li>
        </ul>

        <Link href="/booking" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition-colors">
          Demande de disponibilité
        </Link>

        <div className="relative">
          <button
            onClick={() => setLanguageOpen(!languageOpen)}
            className="flex items-center text-gray-700 hover:text-gray-900 ml-4"
          >
            FR <ChevronDownIcon className="h-4 w-4 ml-1" />
          </button>

          {languageOpen && (
            <div className="absolute right-0 mt-2 w-24 bg-white shadow-lg rounded-md overflow-hidden z-20">
              <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition">FR</button>
              <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition">EN</button>
              <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition">DE</button>
              <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition">PT</button>
              <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition">ES</button>
            </div>
          )}
        </div>
      </div>

      {/* Bouton du menu mobile */}
      <div className="md:hidden flex items-center">
        <Link href="/booking" className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded text-sm mr-4 transition-colors">
          Demande de disponibilité
        </Link>

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
                href="/"
                className="block py-2 text-black hover:bg-gray-100 transition w-full"
                onClick={() => setMenuOpen(false)}
              >
                Accueil
              </Link>
            </li>
            <li className="w-full text-center">
              <Link
                href="/concept"
                className="block py-2 text-black hover:bg-gray-100 transition w-full"
                onClick={() => setMenuOpen(false)}
              >
                Concept
              </Link>
            </li>
            <li className="w-full text-center">
              <Link
                href="/situation"
                className="block py-2 text-black hover:bg-gray-100 transition w-full"
                onClick={() => setMenuOpen(false)}
              >
                Situation
              </Link>
            </li>
            <li className="w-full text-center">
              <Link
                href="/faq"
                className="block py-2 text-black hover:bg-gray-100 transition w-full"
                onClick={() => setMenuOpen(false)}
              >
                FAQ
              </Link>
            </li>
          </ul>

          <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-center space-x-4">
              <button className="text-gray-700 hover:text-gray-900">FR</button>
              <button className="text-gray-700 hover:text-gray-900">EN</button>
              <button className="text-gray-700 hover:text-gray-900">DE</button>
              <button className="text-gray-700 hover:text-gray-900">PT</button>
              <button className="text-gray-700 hover:text-gray-900">ES</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
