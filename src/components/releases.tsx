
"use client";

import Image from "next/image";
import { Play, ExternalLink, Youtube, Music2, ShoppingCart } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./section-heading";

export function ReleasesSection() {
  const images = Array.isArray(PlaceHolderImages) ? PlaceHolderImages : [];
  const elasticStageUrl = "https://elasticstage.com/soundcloud/releases/vini-amaral-nobody-knows-album";

  const releases = [
    {
      title: "Nobody Knows",
      type: "Álbum",
      image: images.find(i => i.id === "release-1"),
      year: "2024",
      buyUrl: elasticStageUrl
    },
    {
      title: "Somebody Like A Ghost",
      type: "Single",
      image: images.find(i => i.id === "release-1"),
      year: "2024",
      platform: "Spotify"
    },
    {
      title: "Coração Blindado",
      type: "EP",
      image: images.find(i => i.id === "release-2"),
      year: "2023",
      platform: "YouTube"
    },
    {
      title: "Noites de Neon",
      type: "Álbum",
      image: images.find(i => i.id === "release-1"),
      year: "2023",
      platform: "Spotify"
    }
  ];

  return (
    <section id="lancamentos" className="py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <SectionHeading 
            badge="Discografia"
            title={<>Últimos <span className="text-primary">Lançamentos</span></>}
          />
          <Button variant="outline" className="rounded-none border-white/20 text-white font-black tracking-widest uppercase text-xs px-8 py-6 hover:bg-primary hover:border-primary transition-all">
            VER DISCOGRAFIA COMPLETA
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {releases.map((release, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative aspect-square overflow-hidden mb-8 bg-black border border-white/5 shadow-2xl">
                {release.image && (
                  <Image
                    src={release.image.imageUrl}
                    alt={release.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                    data-ai-hint={release.image.imageHint}
                  />
                )}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center backdrop-blur-sm">
                  {release.buyUrl ? (
                    <a href={release.buyUrl} target="_blank" rel="noopener noreferrer" className="h-20 w-20 bg-primary rounded-full flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-all shadow-2xl shadow-primary/50">
                      <ShoppingCart className="h-10 w-10" />
                    </a>
                  ) : (
                    <div className="h-20 w-20 bg-primary rounded-full flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-all shadow-2xl shadow-primary/50">
                      <Play fill="white" className="h-10 w-10 ml-1" />
                    </div>
                  )}
                </div>
                <div className="absolute top-6 right-6">
                  <span className="bg-primary text-[10px] font-black text-white px-3 py-1 tracking-widest border border-white/10 uppercase italic">
                    {release.type}
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] text-primary font-black tracking-[0.4em] uppercase">{release.year}</p>
                <h3 className="text-2xl font-black text-white group-hover:text-primary transition-colors italic tracking-tighter uppercase">{release.title}</h3>
                <div className="flex items-center gap-6 pt-3">
                  {release.buyUrl ? (
                    <a href={release.buyUrl} target="_blank" rel="noopener noreferrer" title="Comprar" className="text-white/30 hover:text-primary transition-all hover:scale-125">
                      <ShoppingCart className="h-5 w-5" />
                    </a>
                  ) : (
                    <button title="Spotify" className="text-white/30 hover:text-[#1DB954] transition-all hover:scale-125"><Music2 className="h-5 w-5" /></button>
                  )}
                  <button title="YouTube" className="text-white/30 hover:text-red-500 transition-all hover:scale-125"><Youtube className="h-5 w-5" /></button>
                  <button title="Plataformas" className="text-white/30 hover:text-accent transition-all hover:scale-125"><ExternalLink className="h-5 w-5" /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
