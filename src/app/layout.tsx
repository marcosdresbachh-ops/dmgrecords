
import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DMG Stream | DMG Records & Vini Amaral',
  description: 'Gravadora e Produtora Musical Oficial do cantor Vini Amaral. Produção, Mixagem, Masterização e Lançamentos Musicais de alta qualidade.',
  applicationName: 'DMG Stream',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'DMG Stream',
    startupImage: [
      'https://picsum.photos/seed/dmg-splash/1242/2688'
    ]
  },
  formatDetection: {
    telephone: false,
  },
  manifest: '/manifest.json',
  icons: {
    apple: [
      { url: 'https://picsum.photos/seed/dmg-apple/180/180', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: ['https://picsum.photos/seed/dmg-fav/64/64'],
  },
};

export const viewport: Viewport = {
  themeColor: '#ff0000',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
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
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className="font-body antialiased bg-white text-zinc-900 selection:bg-primary selection:text-white pb-[env(safe-area-inset-bottom)]">
        {children}
      </body>
    </html>
  );
}
