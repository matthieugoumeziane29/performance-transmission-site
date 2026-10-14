import type { Metadata, Viewport } from 'next'
import React from 'react'
import './styles.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { JsonLd } from '@/components/JsonLd'
import { organizationSchema } from '@/lib/schema'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Fiduciaire à Tolochenaz (VD) | Performance Transmission',
    template: '%s',
  },
  description:
    'Fiduciaire à Tolochenaz près de Morges : comptabilité, TVA, salaires et fiscalité pour indépendants, Sàrl et SA dans le canton de Vaud.',
  openGraph: {
    type: 'website',
    locale: 'fr_CH',
    siteName: 'Performance Transmission',
  },
  twitter: { card: 'summary_large_image' },
}

export const viewport: Viewport = {
  themeColor: '#0f0080',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr-CH">
      <body>
        <a href="#contenu" className="skip">
          Aller au contenu
        </a>
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
        <JsonLd data={organizationSchema} />
      </body>
    </html>
  )
}
