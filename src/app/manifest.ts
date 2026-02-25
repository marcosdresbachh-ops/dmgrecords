
import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'DMG Stream | DMG Records',
    short_name: 'DMG Stream',
    description: 'Gravadora e Produtora Musical Oficial do cantor Vini Amaral. Produção, Mixagem e Masterização.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#ff0000',
    icons: [
      {
        src: 'https://picsum.photos/seed/dmg-pwa-1/192/192',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: 'https://picsum.photos/seed/dmg-pwa-2/512/512',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  }
}
