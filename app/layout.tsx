import './globals.css'
import type { Metadata } from 'next'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;


export const metadata: Metadata = {
  title: 'Herald Sandoy - Porfolio',
  description: 'A website portfolio made by your truly',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
