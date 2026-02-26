
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
      {/* Premium Hero Section - Estilo Editorial */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-zinc-900">
          {artist.bannerUrl && (
            <Image 
              src={artist.bannerUrl} 
              alt="Banner" 
              fill 
              className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
              priority
            />
          )}
        </div>
        
        <div className="container mx-auto px-6 relative z-20 h-full flex flex-col justify-end pb-20">
          <div className="flex flex-col md:flex-row items-end gap-12">
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-none bg-primary border-[16px] border-black flex items-center justify-center text-8xl font-black shadow-2xl relative overflow-hidden shrink-0 rotate-3 hover:rotate-0 transition-transform duration-500">
              {artist.avatarUrl ? (
                <Image src={artist.avatarUrl} alt={artistName} fill className="object-cover" />
              ) : (
                <span className="italic">{artistName[0].toUpperCase()}</span>
              )}
            </div>
            <div className="space-y-8 pb-4">
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-primary text-white font-black uppercase text-[11px] tracking-[0.4em] rounded-none px-5 py-2">{artist.role || "ARTIST"}</Badge>
                <Badge variant="outline" className="border-white/40 text-white font-black uppercase text-[11px] tracking-[0.4em] rounded-none px-5 py-2">DMG VERIFIED</Badge>
              </div>
              <h1 className="text-8xl md:text-[12rem] font-black italic uppercase tracking-tighter leading-[0.75] mb-2 drop-shadow-2xl">
                {artistName}
              </h1>
              <div className="flex flex-wrap items-center gap-8">
                <p className="text-zinc-400 font-bold text-2xl uppercase tracking-[0.4em] flex items-center gap-4">
                  <Globe className="h-6 w-6 text-primary" /> {artist.country || "GLOBAL"}
                </p>
                <div className="h-[2px] w-24 bg-primary/40 hidden md:block" />
                <p className="text-primary font-black text-2xl uppercase tracking-[0.4em] italic">
                  OFFICIAL ARTIST HUB
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid - Padrão Revista */}
      <section className="py-32 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          
          <div className="lg:col-span-8 space-y-24">
            
            {/* Trajetória / Release Section */}
            <div className="space-y-12">
              <div className="flex items-center gap-6">
                <div className="h-[3px] w-24 bg-primary" />
                <h3 className="text-sm font-black uppercase tracking-[0.6em] text-primary">Trajetória e Release</h3>
              </div>
              <div className="text-3xl text-zinc-300 leading-relaxed font-medium whitespace-pre-wrap first-letter:text-9xl first-letter:font-black first-letter:text-primary first-letter:mr-5 first-letter:float-left first-letter:italic">
                {artist.bio || "Esta biografia está sendo processada pela curadoria DMG."}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
                <div className="p-10 bg-zinc-900/40 border border-white/5 flex gap-8 items-start hover:border-primary/30 transition-all group">
                  <Award className="h-10 w-10 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="font-black uppercase italic text-lg mb-2">Qualidade DMG</h4>
                    <p className="text-sm text-zinc-500 font-medium leading-relaxed">Artista com produção e direção artística assinada pela Dresbach Records, garantindo fidelidade sonora máxima.</p>
                  </div>
                </div>
                <div className="p-10 bg-zinc-900/40 border border-white/5 flex gap-8 items-start hover:border-primary/30 transition-all group">
                  <Star className="h-10 w-10 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="font-black uppercase italic text-lg mb-2">Presença Global</h4>
                    <p className="text-sm text-zinc-500 font-medium leading-relaxed">Distribuição garantida em mais de 150 plataformas digitais simultaneamente via rede global DMG.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Music Embed Section */}
            {artist.playlistUrl && (
              <div className="space-y-12">
                <div className="flex items-center gap-6">
                  <div className="h-[3px] w-24 bg-primary" />
                  <h3 className="text-sm font-black uppercase tracking-[0.6em] text-primary">Discografia em Destaque</h3>
                </div>
                <div className="bg-zinc-950 border-[12px] border-zinc-900 p-2 shadow-2xl relative">
                  <div className="absolute -inset-4 bg-primary/10 blur-3xl -z-10" />
                  <iframe 
                    src={artist.playlistUrl.includes('spotify') ? artist.playlistUrl.replace("open.spotify.com", "open.spotify.com/embed") : artist.playlistUrl}
                    width="100%" 
                    height="500" 
                    frameBorder="0" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy"
                    className="grayscale contrast-125 hover:grayscale-0 transition-all duration-1000"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Sidebar - Booking & Interaction */}
          <div className="lg:col-span-4 space-y-12">
            <div className="bg-zinc-950 border border-white/5 p-12 space-y-12 sticky top-32">
              <div>
                <h3 className="text-[11px] font-black uppercase tracking-[0.5em] text-zinc-600 mb-10 border-b border-white/5 pb-6">Conecte-se e Contrate</h3>
                
                <div className="grid gap-6">
                  {artist.instagram && (
                    <Button asChild className="w-full h-20 bg-zinc-900 hover:bg-white hover:text-black text-white font-black uppercase italic tracking-tighter border border-white/5 justify-start px-10 group transition-all text-lg">
                      <a href={`https://instagram.com/${artist.instagram.replace('@','')}`} target="_blank">
                        <Instagram className="mr-8 h-7 w-7 text-primary group-hover:text-black transition-colors" /> INSTAGRAM
                      </a>
                    </Button>
                  )}
                  {artist.spotify && (
                    <Button asChild className="w-full h-20 bg-zinc-900 hover:bg-white hover:text-black text-white font-black uppercase italic tracking-tighter border border-white/5 justify-start px-10 group transition-all text-lg">
                      <a href={artist.spotify} target="_blank">
                        <Music2 className="mr-8 h-7 w-7 text-primary group-hover:text-black transition-colors" /> SPOTIFY ARTIST
                      </a>
                    </Button>
                  )}
                  {artist.whatsapp && (
                    <Button asChild className="w-full h-20 bg-primary hover:bg-white hover:text-black text-white font-black uppercase italic tracking-tighter justify-start px-10 group transition-all text-lg">
                      <a href={`https://wa.me/${artist.whatsapp.replace(/[^0-9]/g,'')}`} target="_blank">
                        <MessageCircle className="mr-8 h-7 w-7 group-hover:text-black transition-colors" /> WHATSAPP DIRECT
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              <div className="pt-12 border-t border-white/5">
                <p className="text-[10px] font-black uppercase text-zinc-600 tracking-[0.4em] mb-8">Booking & Management</p>
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-16 h-16 bg-primary flex items-center justify-center font-black text-white italic text-2xl">DMG</div>
                  <div>
                    <p className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest">E-mail Profissional</p>
                    <p className="text-lg font-black text-white">contato@dmgrecords.com.br</p>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-white text-black font-black uppercase h-20 rounded-none hover:bg-primary hover:text-white transition-all text-sm tracking-[0.2em]">
                <Share2 className="mr-4 h-6 w-6" /> COMPARTILHAR EPK
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Branding */}
      <footer className="py-32 border-t border-white/5 bg-black">
        <div className="container mx-auto px-6 flex flex-col items-center gap-12">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-primary flex items-center justify-center font-black text-white italic text-4xl">♪</div>
            <span className="text-5xl font-black uppercase italic tracking-tighter">DMG <span className="text-primary">RECORDS</span></span>
          </div>
          <div className="flex flex-col items-center gap-4">
            <p className="text-[11px] font-black uppercase tracking-[0.6em] text-zinc-700">Official Artist EPK System — © 2025 Dresbach Records</p>
            <div className="flex gap-10 text-[9px] font-bold text-zinc-800 uppercase tracking-widest">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
