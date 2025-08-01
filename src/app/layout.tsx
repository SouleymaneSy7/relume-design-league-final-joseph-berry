import './globals.css'

import type { Metadata } from 'next'
import localFont from 'next/font/local'

import SkipToContent from '@/components/common/SkipToContent'
import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'

const PPNeueMontreal = localFont({
  src: [
    {
      path: '../../public/fonts/pp-neue-montreal-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/pp-neue-montreal-italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/pp-neue-montreal-medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/pp-neue-montreal-medium-italic.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../public/fonts/pp-neue-montreal-bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/pp-neue-montreal-bold-italic.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-pp-neue-montreal',
  display: 'swap',
  fallback: ['sans-serif'],
})

export const metadata: Metadata = {
  title: 'Relume Design League - Joseph Berry Final Design',
  description: 'Relume design league final website',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${PPNeueMontreal.variable} antialiased`}>
        <SkipToContent />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
