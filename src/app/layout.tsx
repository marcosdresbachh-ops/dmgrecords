import type { Metadata, Viewport } from 'next';
import { Poppins, Nunito } from 'next/font/google';
import './globals.css';
import './responsive.css';
import { RootLayoutClient } from '@/components/layout/RootLayoutClient';

export const viewport: Viewport = {
  themeColor: '#E60023',
};

export const metadata: Metadata = {
  title: 'Amor FM - A trilha sonora do amor',
  description: 'A Amor FM é uma rádio digital focada em músicas românticas, pop adulto e clássicos que marcaram gerações. A emissora transmite 24 horas por dia pela internet.',
  manifest: '/manifest.json',
  icons: {
    apple: '/icons/icon-192x192.png',
    icon: '/favicon.ico',
  }
};

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
  weight: ['900'],
  style: ['italic'],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${nunito.variable}`}>
      <body>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
