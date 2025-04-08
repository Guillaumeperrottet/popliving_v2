'use client';

import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Import v2

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative flex justify-between items-center p-4 shadow-md bg-white z-50">
      <div className="text-xl font-bold text-gray-800">
        Popliving
      </div>
      {/* Menu pour écrans moyens et plus */}
      <ul className="hidden md:flex space-x-6">
        <li>
          <a href="/"
              className="text-gray-700 transition">
            Accueil
          </a>
        </li>
        <li>
          <a href="/concept"
              className="text-gray-700 transition">
            Concept
          </a>
        </li>
        <li>
          <a href="#"
              className="text-gray-700 transition">
            Contact
          </a>
        </li>
      </ul>

      {/* Bouton du menu mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="focus:outline-none text-gray-700"
        >
          {menuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Menu mobile */}
      <ul
        className={`absolute left-0 w-full bg-white md:hidden flex flex-col items-center space-y-4 py-4 transition-all duration-300 ease-in-out
          ${menuOpen ? 'top-16 opacity-100' : 'top-[-200px] opacity-0'}
        `}
      >
        <li className="w-full text-center">
          <a
            href="/"
            className="block py-2 text-black hover:bg-gray-100 transition w-full"
            onClick={() => setMenuOpen(false)}
          >
            Accueil
          </a>
        </li>
        <li className="w-full text-center">
          <a
            href="/concept"
            className="block py-2 text-black hover:bg-gray-100 transition w-full"
            onClick={() => setMenuOpen(false)}
          >
            Concept
          </a>
        </li>
        <li className="w-full text-center">
          <a
            href="#"
            className="block py-2 text-black hover:bg-gray-100 transition w-full"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
