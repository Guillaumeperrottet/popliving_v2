import { Inter } from 'next/font/google'
import { getDictionary } from '../i18n/server'
import { I18nProvider } from '../i18n/client'
import { locales } from '../i18n/settings'
import '../../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })
const defaultLanguage = 'fr';

export async function generateStaticParams() {
  return locales.map(lang => ({ lang }))
}

export default async function RootLayout({ children, params }) {
  // Attendre la résolution de params
  const resolvedParams = await params;
  // Extraction de la langue en se basant sur le paramètre résolu
  const currentLang = resolvedParams?.lang || defaultLanguage;
  const validLang = locales.includes(currentLang) ? currentLang : defaultLanguage;

  // Obtention du dictionnaire de façon asynchrone
  const dictionary = await getDictionary(validLang);

  return (
    <html lang={validLang}>
      <body className={inter.className}>
        <I18nProvider dictionary={dictionary} lang={validLang}>
          {children}
        </I18nProvider>
      </body>
    </html>
  )
}
