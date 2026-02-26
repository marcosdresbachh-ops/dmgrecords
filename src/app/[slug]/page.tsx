
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
    const users = JSON.parse(localStorage.getItem('dmg_hub_users') || '{}');
    const artistData = Object.values(users).find((u: any) => u.artistSlug === slug);
    
    if (artistData) {
      setArtist(artistData);
    }
    setLoading(false);
  }, [slug]);

  if (loading) return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );

  if (!artist) return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col items-center justify-center p-6 text-center space-y-8">
      <div className="w-32 h-32 bg-primary/5 rounded-full flex items-center justify-center mb-4">
        <Zap className="h-16 w-16 text-primary" />
      </div>
      <h1 className="text-9xl font-black italic tracking-tighter text-zinc-900 leading-none">404</h1>
      <p className="text-xl font-bold text-zinc-400 uppercase tracking-[0.5em] max-w-sm">Artista não encontrado na rede oficial DMG.</p>
      <Button asChild className="bg-zinc-900 text-white rounded-none h-20 px-12 font-black uppercase italic text-lg shadow-2xl hover:bg-primary transition-all">
        <a href="/">VOLTAR PARA A HOME</a>
      </Button>
    </div>
  );

  const artistName = artist.artistName || `${artist.firstName} ${artist.lastName}`;

  return (
    <main className="min-h-screen bg-white text-zinc-900 font-body selection:bg-primary selection:text-white">
      {/* Editorial Hero Section */}
      <section className="relative h-[90vh] w-full overflow-hidden border-b border-zinc-100">
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent z-10" />
        <div className="absolute inset-0 bg-zinc-50">
          {artist.bannerUrl && (
            <Image 
              src={artist.bannerUrl} 
              alt="Banner" 
              fill 
              className="object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-[2000ms]"
              priority
            />
          )}
        </div>
        
        <div className="container mx-auto px-6 relative z-20 h-full flex flex-col justify-end pb-32">
          <div className="flex flex-col md:flex-row items-end gap-16">
            <div className="w-64 h-64 md:w-96 md:h-96 rounded-none bg-white border-[20px] border-white flex items-center justify-center text-9xl font-black shadow-2xl relative overflow-hidden shrink-0 rotate-2 hover:rotate-0 transition-transform duration-700 group">
              {artist.avatarUrl ? (
                <Image src={artist.avatarUrl} alt={artistName} fill className="object-cover grayscale group-hover:grayscale-0 transition-all" />
              ) : (
                <span className="italic text-zinc-900">{artistName[0].toUpperCase()}</span>
              )}
            </div>
            <div className="space-y-10 pb-6">
              <div className="flex flex-wrap gap-4">
                <Badge className="bg-primary text-white font-black uppercase text-xs tracking-[0.5em] rounded-none px-8 py-3">{artist.role || "ARTIST"}</Badge>
                <Badge variant="outline" className="border-zinc-900 text-zinc-900 font-black uppercase text-xs tracking-[0.5em] rounded-none px-8 py-3">DMG VERIFIED</Badge>
              </div>
              <h1 className="text-[10rem] md:text-[16rem] font-black italic uppercase tracking-tighter leading-[0.7] mb-4 drop-shadow-sm text-zinc-900">
                {artistName}
              </h1>
              <div className="flex flex-wrap items-center gap-12 pt-4">
                <p className="text-zinc-400 font-black text-3xl uppercase tracking-[0.5em] flex items-center gap-6">
                  <Globe className="h-8 w-8 text-primary" /> {artist.country || "GLOBAL"}
                </p>
                <div className="h-[3px] w-32 bg-primary/20 hidden md:block" />
                <p className="text-primary font-black text-3xl uppercase tracking-[0.5em] italic">
                  OFFICIAL HUB
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Magazine Layout */}
      <section className="py-40 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-32">
          
          <div className="lg:col-span-8 space-y-32">
            
            {/* Trajetória / Release Section */}
            <div className="space-y-16">
              <div className="flex items-center gap-8">
                <div className="h-[4px] w-32 bg-primary" />
                <h3 className="text-sm font-black uppercase tracking-[0.8em] text-zinc-400">Trajetória e Release</h3>
              </div>
              <div className="text-4xl text-zinc-600 leading-[1.6] font-medium whitespace-pre-wrap first-letter:text-[12rem] first-letter:font-black first-letter:text-zinc-900 first-letter:mr-8 first-letter:float-left first-letter:leading-[0.8] first-letter:italic">
                {artist.bio || "Esta biografia está sendo processada pela curadoria DMG."}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-20">
                <div className="p-12 bg-zinc-50 border border-zinc-100 flex gap-10 items-start hover:border-primary/20 transition-all group shadow-sm">
                  <Award className="h-12 w-12 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                  <div className="space-y-4">
                    <h4 className="font-black uppercase italic text-2xl text-zinc-900 mb-2">Qualidade DMG</h4>
                    <p className="text-base text-zinc-500 font-bold uppercase leading-relaxed">Artista com produção e direção artística assinada pela Dresbach Records, garantindo fidelidade sonora máxima.</p>
                  </div>
                </div>
                <div className="p-12 bg-zinc-50 border border-zinc-100 flex gap-10 items-start hover:border-primary/20 transition-all group shadow-sm">
                  <Star className="h-12 w-12 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                  <div className="space-y-4">
                    <h4 className="font-black uppercase italic text-2xl text-zinc-900 mb-2">Presença Global</h4>
                    <p className="text-base text-zinc-500 font-bold uppercase leading-relaxed">Distribuição garantida em mais de 150 plataformas digitais simultaneamente via rede global DMG.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Music Embed Section */}
            {artist.playlistUrl && (
              <div className="space-y-16">
                <div className="flex items-center gap-8">
                  <div className="h-[4px] w-32 bg-zinc-900" />
                  <h3 className="text-sm font-black uppercase tracking-[0.8em] text-zinc-400">Discografia em Destaque</h3>
                </div>
                <div className="bg-white border-[20px] border-zinc-50 p-2 shadow-2xl relative group">
                  <div className="absolute -inset-8 bg-primary/5 blur-3xl -z-10 group-hover:bg-primary/10 transition-all" />
                  <iframe 
                    src={artist.playlistUrl.includes('spotify') ? artist.playlistUrl.replace("open.spotify.com", "open.spotify.com/embed") : artist.playlistUrl}
                    width="100%" 
                    height="600" 
                    frameBorder="0" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy"
                    className="grayscale-[0.8] contrast-125 hover:grayscale-0 transition-all duration-1000"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Sidebar - Modern Booking */}
          <div className="lg:col-span-4 space-y-16">
            <div className="bg-zinc-50 border border-zinc-100 p-16 space-y-16 sticky top-40 shadow-sm">
              <div className="space-y-12">
                <h3 className="text-[12px] font-black uppercase tracking-[0.6em] text-zinc-400 mb-12 border-b border-zinc-200 pb-8">Conecte-se e Contrate</h3>
                
                <div className="grid gap-8">
                  {artist.instagram && (
                    <Button asChild className="w-full h-24 bg-white hover:bg-zinc-900 hover:text-white text-zinc-900 font-black uppercase italic tracking-tighter border border-zinc-200 justify-start px-12 group transition-all text-xl shadow-sm">
                      <a href={`https://instagram.com/${artist.instagram.replace('@','')}`} target="_blank">
                        <Instagram className="mr-10 h-8 w-8 text-primary group-hover:text-white transition-colors" /> INSTAGRAM
                      </a>
                    </Button>
                  )}
                  {artist.spotify && (
                    <Button asChild className="w-full h-24 bg-white hover:bg-zinc-900 hover:text-white text-zinc-900 font-black uppercase italic tracking-tighter border border-zinc-200 justify-start px-12 group transition-all text-xl shadow-sm">
                      <a href={artist.spotify} target="_blank">
                        <Music2 className="mr-10 h-8 w-8 text-primary group-hover:text-white transition-colors" /> SPOTIFY ARTIST
                      </a>
                    </Button>
                  )}
                  {artist.whatsapp && (
                    <Button asChild className="w-full h-24 bg-zinc-900 hover:bg-primary text-white font-black uppercase italic tracking-tighter justify-start px-12 group transition-all text-xl shadow-xl">
                      <a href={`https://wa.me/${artist.whatsapp.replace(/[^0-9]/g,'')}`} target="_blank">
                        <MessageCircle className="mr-10 h-8 w-8 group-hover:scale-110 transition-transform" /> WHATSAPP DIRECT
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              <div className="pt-16 border-t border-zinc-200">
                <p className="text-[11px] font-black uppercase text-zinc-400 tracking-[0.5em] mb-10">Booking & Management</p>
                <div className="flex items-center gap-8 group cursor-pointer">
                  <div className="w-20 h-20 bg-zinc-900 flex items-center justify-center font-black text-white italic text-3xl">DMG</div>
                  <div>
                    <p className="text-[11px] font-black text-zinc-400 uppercase tracking-widest mb-1">E-mail Profissional</p>
                    <p className="text-xl font-black text-zinc-900 uppercase italic">contato@dmgrecords.com.br</p>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-primary text-white font-black uppercase h-24 rounded-none hover:bg-zinc-900 transition-all text-sm tracking-[0.4em] shadow-xl">
                <Share2 className="mr-6 h-7 w-7" /> COMPARTILHAR EPK
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Branding Light */}
      <footer className="py-40 border-t border-zinc-100 bg-zinc-50">
        <div className="container mx-auto px-6 flex flex-col items-center gap-16">
          <div className="flex items-center gap-8">
            <div className="w-20 h-20 bg-primary flex items-center justify-center font-black text-white italic text-5xl shadow-2xl">♪</div>
            <span className="text-7xl font-black uppercase italic tracking-tighter text-zinc-900">DMG <span className="text-primary">RECORDS</span></span>
          </div>
          <div className="flex flex-col items-center gap-6">
            <p className="text-[12px] font-black uppercase tracking-[0.8em] text-zinc-300">Official Artist EPK System — © 2025 Dresbach Records</p>
            <div className="flex gap-16 text-[10px] font-black text-zinc-400 uppercase tracking-widest">
              <span className="hover:text-zinc-900 cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-zinc-900 cursor-pointer transition-colors">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
