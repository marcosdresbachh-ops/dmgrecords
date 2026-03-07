import { Hero } from '@/components/home/Hero';
import { Features } from '@/components/home/Features';
import { LiveWidgets } from '@/components/home/LiveWidgets';
import { TopTen } from '@/components/home/TopTen';
import { AdvertiseCta } from '@/components/home/AdvertiseCta';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <div className="h-px bg-[--line]"></div>
      <LiveWidgets />
      
      {/* RadiosNet Banner Section */}
      <div className="sec flex justify-center py-12 bg-muted/50">
          <Link href="https://www.radios.com.br/aovivo/radio-dmg-records/282327" target="_blank" rel="noopener noreferrer" className="fi inline-block transition-transform hover:scale-105">
              <Image
                  src="/banner-radios/234x60_claro.png"
                  alt="Ouvir no RadiosNet"
                  width={234}
                  height={60}
              />
          </Link>
      </div>

      <div className="h-px bg-[--line]"></div>
      <TopTen />
      <AdvertiseCta />
    </>
  )
}
