
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { 
  Instagram, Music2, Youtube, ExternalLink, 
  Mail, MessageCircle, Play, ShoppingCart, 
  Globe, Info, Share2, Award, Zap, Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ArtistPublicPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [artist, setArtist] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Busca dados no "servidor" (localStorage simulando BD)
    const users = JSON.parse(localStorage.getItem('dmg_hub_users') || '{}');
    const artistData = Object.values(users).find((u: any) => u.artistSlug === slug);
    
    if (artistData) {
      setArtist(artistData);
    }
    setLoading(false);
  }, [slug]);

  if (loading) return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );

  if (!artist) return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center space-y-6">
      <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-4">
        <Zap className="h-12 w-12 text-primary" />
      </div>
      <h1 className="text-6xl font-black italic tracking-tighter text-primary">404</h1>
      <p className="text-xl font-medium text-zinc-500 uppercase tracking-widest max-w-xs">Artista não encontrado ou perfil ainda não publicado.</p>
      <Button asChild className="bg-primary rounded-none h-14 px-8 font-black uppercase italic">
        <a href="/">VOLTAR PARA A HOME</a>
      </Button>
    </div>
  );

  const artistName = artist.artistName || `${artist.firstName} ${artist.lastName}`;

  return (
    <main className="min-h-screen bg-black text-white font-body selection:bg-primary">
      {/* Premium Hero Section */}
      <section className="relative h-[75vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-zinc-900">
          {artist.bannerUrl && (
            <Image 
              src={artist.bannerUrl} 
              alt="Banner" 
              fill 
              className="object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
              priority
            />
          )}
        </div>
        
        <div className="container mx-auto px-6 relative z-20 h-full flex flex-col justify-end pb-16">
          <div className="flex flex-col md:flex-row items-end gap-10">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-none bg-primary border-[12px] border-black flex items-center justify-center text-8xl font-black shadow-2xl relative overflow-hidden shrink-0 rotate-2">
              {artist.avatarUrl ? (
                <Image src={artist.avatarUrl} alt={artistName} fill className="object-cover" />
              ) : (
                artistName[0].toUpperCase()
              )}
            </div>
            <div className="space-y-6 pb-4">
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-primary text-white font-black uppercase text-[10px] tracking-[0.3em] rounded-none px-4 py-1.5">{artist.role || "ARTIST"}</Badge>
                <Badge variant="outline" className="border-white/20 text-white font-black uppercase text-[10px] tracking-[0.3em] rounded-none px-4 py-1.5">DMG VERIFIED</Badge>
              </div>
              <h1 className="text-7xl md:text-[10rem] font-black italic uppercase tracking-tighter leading-[0.8] mb-2 drop-shadow-2xl">
                {artistName}
              </h1>
              <div className="flex flex-wrap items-center gap-6">
                <p className="text-zinc-400 font-bold text-xl uppercase tracking-[0.3em] flex items-center gap-3">
                  <Globe className="h-5 w-5 text-primary" /> {artist.country || "GLOBAL"}
                </p>
                <div className="h-1 w-12 bg-primary/30 hidden md:block" />
                <p className="text-primary font-black text-xl uppercase tracking-[0.3em] italic">
                  OFFICIAL ARTIST HUB
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          <div className="lg:col-span-2 space-y-20">
            
            {/* Trayetória / Release Section */}
            <div className="space-y-10">
              <div className="flex items-center gap-4">
                <div className="h-[2px] w-16 bg-primary" />
                <h3 className="text-xs font-black uppercase tracking-[0.5em] text-primary">Trajetória e Release</h3>
              </div>
              <div className="text-2xl text-zinc-300 leading-relaxed font-medium whitespace-pre-wrap first-letter:text-7xl first-letter:font-black first-letter:text-primary first-letter:mr-3 first-letter:float-left">
                {artist.bio || "Esta biografia está sendo processada pela curadoria DMG."}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10">
                <div className="p-8 bg-zinc-900/50 border border-white/5 flex gap-6 items-start">
                  <Award className="h-8 w-8 text-primary shrink-0" />
                  <div>
                    <h4 className="font-black uppercase italic text-sm mb-2">Qualidade DMG</h4>
                    <p className="text-xs text-zinc-500 font-medium">Artista com produção e direção artística assinada pela Dresbach Records.</p>
                  </div>
                </div>
                <div className="p-8 bg-zinc-900/50 border border-white/5 flex gap-6 items-start">
                  <Star className="h-8 w-8 text-primary shrink-0" />
                  <div>
                    <h4 className="font-black uppercase italic text-sm mb-2">Presença Global</h4>
                    <p className="text-xs text-zinc-500 font-medium">Distribuição garantida em mais de 150 plataformas digitais simultaneamente.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Music Embed Section */}
            {artist.playlistUrl && (
              <div className="space-y-10">
                <div className="flex items-center gap-4">
                  <div className="h-[2px] w-16 bg-primary" />
                  <h3 className="text-xs font-black uppercase tracking-[0.5em] text-primary">Discografia em Destaque</h3>
                </div>
                <div className="bg-zinc-950 border border-white/10 p-2 shadow-2xl relative">
                  <div className="absolute -inset-1 bg-primary/5 blur-xl -z-10" />
                  <iframe 
                    src={artist.playlistUrl.includes('spotify') ? artist.playlistUrl.replace("open.spotify.com", "open.spotify.com/embed") : artist.playlistUrl}
                    width="100%" 
                    height="450" 
                    frameBorder="0" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy"
                    className="grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Sidebar - Booking & Interaction */}
          <div className="space-y-10">
            <div className="bg-zinc-950 border border-white/5 p-10 space-y-10 sticky top-32">
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600 mb-8 border-b border-white/5 pb-4">Conecte-se e Contrate</h3>
                
                <div className="grid gap-4">
                  {artist.instagram && (
                    <Button asChild className="w-full h-16 bg-zinc-900 hover:bg-white hover:text-black text-white font-black uppercase italic tracking-tighter border border-white/5 justify-start px-8 group transition-all">
                      <a href={`https://instagram.com/${artist.instagram.replace('@','')}`} target="_blank">
                        <Instagram className="mr-6 h-6 w-6 text-primary group-hover:text-black" /> INSTAGRAM
                      </a>
                    </Button>
                  )}
                  {artist.spotify && (
                    <Button asChild className="w-full h-16 bg-zinc-900 hover:bg-white hover:text-black text-white font-black uppercase italic tracking-tighter border border-white/5 justify-start px-8 group transition-all">
                      <a href={artist.spotify} target="_blank">
                        <Music2 className="mr-6 h-6 w-6 text-primary group-hover:text-black" /> SPOTIFY ARTIST
                      </a>
                    </Button>
                  )}
                  {artist.whatsapp && (
                    <Button asChild className="w-full h-16 bg-primary hover:bg-white hover:text-black text-white font-black uppercase italic tracking-tighter justify-start px-8 group transition-all">
                      <a href={`https://wa.me/${artist.whatsapp.replace(/[^0-9]/g,'')}`} target="_blank">
                        <MessageCircle className="mr-6 h-6 w-6 group-hover:text-black" /> WHATSAPP DIRECT
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              <div className="pt-10 border-t border-white/5">
                <p className="text-[9px] font-black uppercase text-zinc-600 tracking-[0.3em] mb-6">Booking & Management</p>
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center font-black text-white italic text-xl">DMG</div>
                  <div>
                    <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">E-mail Profissional</p>
                    <p className="text-sm font-black text-white">contato@dmgrecords.com.br</p>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-white text-black font-black uppercase h-16 rounded-none hover:bg-primary hover:text-white transition-all">
                <Share2 className="mr-3 h-5 w-5" /> COMPARTILHAR EPK
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Branding */}
      <footer className="py-24 border-t border-white/5 bg-black">
        <div className="container mx-auto px-6 flex flex-col items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary flex items-center justify-center font-black text-white italic text-2xl">♪</div>
            <span className="text-3xl font-black uppercase italic tracking-tighter">DMG <span className="text-primary">RECORDS</span></span>
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-700">Official Artist EPK System — © 2025 Dresbach Records</p>
        </div>
      </footer>
    </main>
  );
}
