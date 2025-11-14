import type { Metadata } from 'next'
import { siteSettings } from '@/site-settings'
import '../styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: {
    default: `${siteSettings.brand.name} - ${siteSettings.brand.tagline}`,
    template: `%s | ${siteSettings.brand.name}`,
  },
  description: siteSettings.brand.tagline,
  keywords: ['web design', 'website development', 'local business websites', 'SEO', 'web agency'],
  authors: [{ name: siteSettings.brand.name }],
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: siteSettings.brand.name,
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}

