import 'server-only'

const dictionaries = {
  fr: () => import('./dictionaries/fr.json').then(module => module.default),
  en: () => import('./dictionaries/en.json').then(module => module.default),
  de: () => import('./dictionaries/de.json').then(module => module.default),
  pt: () => import('./dictionaries/pt.json').then(module => module.default),
  es: () => import('./dictionaries/es.json').then(module => module.default),
}

export const getDictionary = async (locale) => dictionaries[locale]()
