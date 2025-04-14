import { NextResponse } from 'next/server'
import { locales, defaultLocale } from './app/i18n/settings'  // Chemin corrigé

export function middleware(request) {
  // Vérifier si la requête doit être gérée par le middleware
  const { pathname } = request.nextUrl

  // Ignorer les fichiers statiques et les routes API
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/images') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // Vérifier si l'URL contient déjà un code de langue valide
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return NextResponse.next()

  // Rediriger vers la langue par défaut ou préférée de l'utilisateur
  const { locale: preferredLocale } = getPreferredLocale(request)
  const locale = preferredLocale || defaultLocale

  return NextResponse.redirect(
    new URL(`/${locale}${pathname === '/' ? '' : pathname}`, request.url)
  )
}

function getPreferredLocale(request) {
  // Vérifier si l'utilisateur a une langue préférée dans les cookies
  const cookie = request.cookies.get('NEXT_LOCALE')
  if (cookie?.value && locales.includes(cookie.value)) {
    return { locale: cookie.value }
  }

  // Sinon, vérifier l'en-tête Accept-Language
  const acceptLanguage = request.headers.get('accept-language')
  if (acceptLanguage) {
    const parsedLocales = acceptLanguage.split(',')
      .map(item => item.split(';')[0])
      .map(item => item.trim().substring(0, 2))

    // Trouver la première langue prise en charge
    const matchedLocale = parsedLocales.find(item => locales.includes(item))
    if (matchedLocale) {
      return { locale: matchedLocale }
    }
  }

  return { locale: defaultLocale }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|images|favicon.ico).*)'],
}
