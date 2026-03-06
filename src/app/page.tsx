import { Hero } from '@/components/home/Hero';
import { Features } from '@/components/home/Features';
import { LiveWidgets } from '@/components/home/LiveWidgets';
import { TopTen } from '@/components/home/TopTen';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <div className="h-px bg-[--line]"></div>
      <LiveWidgets />
      <div className="h-px bg-[--line]"></div>
      <TopTen />
    </>
  )
}
