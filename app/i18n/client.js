'use client'

import { useParams } from 'next/navigation'
import { createContext, useContext, useState, useEffect } from 'react'
import { locales } from './settings'

// Créez un contexte pour les traductions
const I18nContext = createContext({})

export const I18nProvider = ({ children, dictionary }) => {
  return (
    <I18nContext.Provider value={{ dictionary }}>
      {children}
    </I18nContext.Provider>
  )
}

// Hook pour utiliser les traductions
export const useTranslation = () => {
  const { dictionary } = useContext(I18nContext)
  const params = useParams()
  const lang = params?.lang || 'fr'

  const t = (key) => {
    // Fonction pour accéder aux traductions par chemin (ex: "nav.home")
    const keys = key.split('.')
    return keys.reduce((obj, k) => obj && obj[k], dictionary) || key
  }

  return { t, lang, isValidLocale: locales.includes(lang) }
}
