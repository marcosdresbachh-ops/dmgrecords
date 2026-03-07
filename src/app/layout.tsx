import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Outfit, DM_Mono } from 'next/font/google';
import './globals.css';
import './responsive.css';
import { RadioHeader } from '@/components/radio/RadioHeader';
import { RadioPlayer } from '@/components/radio/RadioPlayer';
import { RadioFooter } from '@/components/radio/RadioFooter';
import { RadioScripts } from '@/components/radio/RadioScripts';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'swap',
  weight: ['700', '900'],
  style: ['normal', 'italic'],
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  variable: '--font-dm-mono',
  display: 'swap',
  weight: ['300', '400', '500'],
});

export const metadata: Metadata = {
  title: 'DMG Records Rádio',
  description: 'Sertanejo, Gospel, Pop e Rock direto pra você. Música e entretenimento 24 horas, 7 dias por semana.',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'DMG Rádio',
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    apple: '/icons/icon-192x192.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#D4243A',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${outfit.variable} ${dmMono.variable}`}>
      <body>
        <RadioHeader />
        <RadioPlayer />
        <main>{children}</main>
        <RadioFooter />
        <RadioScripts />
      </body>
    </html>
  );
}
