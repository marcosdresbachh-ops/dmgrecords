import { Playfair_Display, Outfit, DM_Mono } from 'next/font/google';
import './globals.css';
import './responsive.css';
import type { Viewport } from 'next';
import { AppLayout } from '@/components/layout/AppLayout';

export const viewport: Viewport = {
  themeColor: '#D4243A',
};

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${outfit.variable} ${dmMono.variable}`}>
       <head>
        <title>DMG Records Rádio</title>
        <meta name="description" content="Sertanejo, Gospel, Pop e Rock direto pra você. Música e entretenimento 24 horas, 7 dias por semana." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </head>
      <body>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
