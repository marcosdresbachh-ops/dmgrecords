
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DMG Stream | DMG Records & Vini Amaral',
  description: 'Gravadora e Produtora Musical Oficial do cantor Vini Amaral. Produção, Mixagem, Masterização e Lançamentos Musicais de alta qualidade.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-black text-white">{children}</body>
    </html>
  );
}
