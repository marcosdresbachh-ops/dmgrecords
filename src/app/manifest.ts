
import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'DMG Stream | Official Artist Hub',
    short_name: 'DMG Stream',
    description: 'Gravadora e Produtora Musical Oficial. Produção, Mixagem e Gestão de Carreira.',
    start_url: '/',
    display: 'standalone',
    display_override: ['window-controls-overlay', 'standalone', 'minimal-ui'],
    background_color: '#ffffff',
    theme_color: '#ff0000',
    categories: ['music', 'business', 'productivity'],
    icons: [
      {
        src: 'https://picsum.photos/seed/dmg-pwa-192/192/192',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: 'https://picsum.photos/seed/dmg-pwa-512/512/512',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
    screenshots: [
      {
        src: 'https://picsum.photos/seed/dmg-shot-1/1080/1920',
        sizes: '1080x1920',
        type: 'image/png',
        label: 'Área do Artista DMG'
      },
      {
        src: 'https://picsum.photos/seed/dmg-shot-2/1920/1080',
        sizes: '1920x1080',
        type: 'image/png',
        label: 'Página Inicial Editorial'
      }
    ]
  }
}
