'use client';
import { Hero } from '@/components/home/Hero';
import { Features } from '@/components/home/Features';
import { TopTen } from '@/components/home/TopTen';
import { LiveWidgets } from '@/components/home/LiveWidgets';


export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <LiveWidgets />
      <TopTen />
    </>
  )
}
