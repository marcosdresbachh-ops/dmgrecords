import React from 'react';
import '../globals.css';
import { Playfair_Display, Outfit, DM_Mono } from 'next/font/google';

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

export const metadata = {
  title: 'DMG Records — Login Painel',
  description: 'Login para o Painel de gerenciamento da Rádio DMG Records.',
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${outfit.variable} ${dmMono.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
