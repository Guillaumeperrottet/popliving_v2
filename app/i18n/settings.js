export const defaultLocale = 'fr'
export const locales = ['fr', 'en', 'de', 'pt', 'es']

export const getLocalePartsFrom = ({ pathname }) => {
  const pathnameParts = pathname.split('/')
  const locale = pathnameParts[1]
  return {
    locale: locales.includes(locale) ? locale : defaultLocale,
    pathname: `/${pathnameParts.slice(2).join('/')}`
  }
}
