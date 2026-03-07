'use client';

import { usePathname } from 'next/navigation';
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isAppRoute = !pathname.startsWith('/admin') && !pathname.startsWith('/login-adm-const-adm-fm98,7');

  return (
    <html lang="pt-BR" className={`${playfair.variable} ${outfit.variable} ${dmMono.variable}`}>
       <head>
        <title>DMG Records Rádio</title>
        <meta name="description" content="Sertanejo, Gospel, Pop e Rock direto pra você. Música e entretenimento 24 horas, 7 dias por semana." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#D4243A" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </head>
      <body>
        {isAppRoute ? (
          <>
            <RadioHeader />
            <RadioPlayer />
            <main>{children}</main>
            <RadioFooter />
            <RadioScripts />
          </>
        ) : (
          children
        )}
      </body>
    </html>
  );
}
