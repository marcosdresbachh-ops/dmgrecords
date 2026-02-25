
"use client";

import Image from "next/image";
import { Play, ExternalLink, Youtube, Music2 } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { Button } from "@/components/ui/button";

export function ReleasesSection() {
  // Movemos a lógica para dentro do componente para evitar erro de inicialização
  const releases = [
    {
      title: "Noites de Neon",
      type: "Single",
      image: PlaceHolderImages?.find(i => i.id === "release-1"),
      year: "2024",
      platform: "Spotify"
    },
    {
      title: "Coração Blindado",
      type: "EP",
      image: PlaceHolderImages?.find(i => i.id === "release-2"),
      year: "2023",
      platform: "YouTube"
    },
    {
      title: "Última Chamada",
      type: "Single",
      image: PlaceHolderImages?.find(i => i.id === "release-3"),
      year: "2023",
      platform: "Apple Music"
    },
    {
      title: "Vibes de Verão",
      type: "Álbum",
      image: PlaceHolderImages?.find(i => i.id === "release-1"),
      year: "2023",
      platform: "Spotify"
    }
  ];

  return (
    <section id="lancamentos" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2">
              <div className="h-1 w-12 bg-primary" />
              <span className="text-primary font-black uppercase tracking-widest">Discografia</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase italic">
              Últimos <span className="text-primary">Lançamentos</span>
            </h2>
          </div>
          <Button variant="outline" className="rounded-none border-white/20 text-white hover:bg-primary hover:border-primary">
            VER DISCOGRAFIA COMPLETA
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {releases.map((release, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative aspect-square overflow-hidden mb-6 bg-black border border-white/5">
                {release.image && (
                  <Image
                    src={release.image.imageUrl}
                    alt={release.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    data-ai-hint={release.image.imageHint}
                  />
                )}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform">
                    <Play fill="white" className="h-8 w-8 ml-1" />
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-black/80 backdrop-blur-md text-[10px] font-bold text-white px-2 py-1 tracking-widest border border-white/10 uppercase">
                    {release.type}
                  </span>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-primary font-bold tracking-widest uppercase">{release.year}</p>
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{release.title}</h3>
                <div className="flex items-center gap-4 pt-2">
                  <button title="Spotify" className="text-white/40 hover:text-[#1DB954] transition-colors"><Music2 className="h-4 w-4" /></button>
                  <button title="YouTube" className="text-white/40 hover:text-red-500 transition-colors"><Youtube className="h-4 w-4" /></button>
                  <button title="Plataformas" className="text-white/40 hover:text-accent transition-colors"><ExternalLink className="h-4 w-4" /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
