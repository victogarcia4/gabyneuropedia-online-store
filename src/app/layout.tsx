import type { Metadata } from 'next'
import { Lato, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-lato',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  weight: ['600', '700'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://gabyneuropedia.com'),
  title: {
    default: 'Dra. María Gabriela Jiménez | Consultoría en Salud Neurológica',
    template: '%s | Dra. Gabriela Jiménez',
  },
  description:
    'Consultora en Salud Neurológica. Acompañamiento diagnóstico y terapéutico en todas las condiciones neurológicas. Autismo, TEA, Trastornos del Aprendizaje, Neurodesarrollo y más. Servicios online para LATAM y España.',
  keywords: [
    'consultoría neurológica',
    'acompañamiento diagnóstico',
    'acompañamiento terapéutico',
    'autismo',
    'TEA',
    'trastornos del aprendizaje',
    'neurodesarrollo',
    'condiciones neurológicas',
    'gabyneuropedia',
    'consulta online',
  ],
  authors: [{ name: 'Dra. María Gabriela Jiménez Méndez' }],
  creator: 'Dra. María Gabriela Jiménez Méndez',
  publisher: 'GabyNeuroPedia',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: '/',
    siteName: 'GabyNeuroPedia',
    title: 'Dra. María Gabriela Jiménez | Consultoría en Salud Neurológica',
    description: 'Consultora en Salud Neurológica. Acompañamiento diagnóstico y terapéutico en todas las condiciones neurológicas.',
    images: [
      {
        url: '/images/hero-dra-gabriela.png',
        width: 1200,
        height: 630,
        alt: 'Dra. María Gabriela Jiménez - Neuróloga Pediátrica',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dra. María Gabriela Jiménez | Neuróloga Pediátrica',
    description: 'Neuróloga Pediátrica especializada en Autismo, TEA y Neurodesarrollo',
    images: ['/images/hero-dra-gabriela.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${lato.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased" style={{ fontFamily: 'var(--font-lato)' }}>
        <Header />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}
