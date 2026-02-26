
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { 
  Instagram, Music2, Youtube, ExternalLink, 
  Mail, MessageCircle, Play, ShoppingCart, 
  Globe, Info, Share2 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ArtistPublicPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [artist, setArtist] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulação de busca de dados no DB local
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
      <h1 className="text-6xl font-black italic tracking-tighter text-primary">404</h1>
      <p className="text-xl font-medium text-zinc-500 uppercase tracking-widest">Artista não encontrado no catálogo DMG.</p>
      <Button asChild className="bg-primary rounded-none h-14 px-8 font-black uppercase italic">
        <a href="/">VOLTAR PARA A HOME</a>
      </Button>
    </div>
  );

  return (
    <main className="min-h-screen bg-black text-white font-body selection:bg-primary">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
        <div className="absolute inset-0 bg-zinc-900">
          {artist.bannerUrl && (
            <Image 
              src={artist.bannerUrl} 
              alt="Banner" 
              fill 
              className="object-cover opacity-60"
            />
          )}
        </div>
        
        <div className="container mx-auto px-6 relative z-20 h-full flex flex-col justify-end pb-12">
          <div className="flex flex-col md:flex-row items-end gap-8">
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-3xl bg-primary border-4 border-black flex items-center justify-center text-7xl font-black shadow-2xl relative overflow-hidden shrink-0">
              {artist.avatarUrl ? (
                <Image src={artist.avatarUrl} alt={artist.artistName} fill className="object-cover" />
              ) : (
                (artist.artistName || artist.firstName)?.[0].toUpperCase()
              )}
            </div>
            <div className="space-y-4 pb-4">
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-primary text-white font-black uppercase text-[10px] tracking-widest rounded-none">{artist.role}</Badge>
                <Badge variant="outline" className="border-white/20 text-white font-black uppercase text-[10px] tracking-widest rounded-none">DMG ARTIST</Badge>
              </div>
              <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-none">
                {artist.artistName || `${artist.firstName} ${artist.lastName}`}
              </h1>
              <p className="text-zinc-400 font-medium text-lg uppercase tracking-[0.2em] flex items-center gap-2">
                <Globe className="h-4 w-4 text-primary" /> {artist.country || "GLOBAL"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-12">
            {/* Bio */}
            <div className="space-y-6">
              <h3 className="text-sm font-black uppercase tracking-[0.4em] text-primary flex items-center gap-3">
                <Info className="h-4 w-4" /> Trajetória e Release
              </h3>
              <div className="text-xl text-zinc-300 leading-relaxed font-medium whitespace-pre-wrap">
                {artist.bio || "Nenhuma biografia disponível."}
              </div>
            </div>

            {/* Music Embed */}
            {artist.playlistUrl && (
              <div className="space-y-6">
                <h3 className="text-sm font-black uppercase tracking-[0.4em] text-primary flex items-center gap-3">
                  <Music2 className="h-4 w-4" /> Discografia e Playlist
                </h3>
                <div className="bg-zinc-950 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                  {/* Simplificação: Se for spotify, gera embed */}
                  <iframe 
                    src={artist.playlistUrl.replace("open.spotify.com", "open.spotify.com/embed")}
                    width="100%" 
                    height="380" 
                    frameBorder="0" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy"
                    className="rounded-3xl"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Sidebar - Links and Contacts */}
          <div className="space-y-8">
            <div className="bg-zinc-950 border border-white/10 p-8 rounded-3xl space-y-8 sticky top-24">
              <h3 className="text-xs font-black uppercase tracking-widest text-zinc-500">Conecte-se e Contrate</h3>
              
              <div className="grid gap-4">
                {artist.instagram && (
                  <Button asChild className="w-full h-14 bg-zinc-900 hover:bg-zinc-800 text-white font-bold uppercase italic tracking-tighter border border-white/5 justify-start px-6">
                    <a href={`https://instagram.com/${artist.instagram.replace('@','')}`} target="_blank">
                      <Instagram className="mr-4 h-5 w-5 text-pink-500" /> INSTAGRAM
                    </a>
                  </Button>
                )}
                {artist.spotify && (
                  <Button asChild className="w-full h-14 bg-zinc-900 hover:bg-zinc-800 text-white font-bold uppercase italic tracking-tighter border border-white/5 justify-start px-6">
                    <a href={artist.spotify} target="_blank">
                      <Music2 className="mr-4 h-5 w-5 text-green-500" /> SPOTIFY ARTIST
                    </a>
                  </Button>
                )}
                {artist.phone && (
                  <Button asChild className="w-full h-14 bg-green-600 hover:bg-green-500 text-white font-black uppercase italic tracking-tighter justify-start px-6">
                    <a href={`https://wa.me/${artist.phone.replace(/[^0-9]/g,'')}`} target="_blank">
                      <MessageCircle className="mr-4 h-5 w-5" /> WHATSAPP DIRECT
                    </a>
                  </Button>
                )}
              </div>

              <div className="pt-8 border-t border-white/5">
                <p className="text-[10px] font-black uppercase text-zinc-600 tracking-widest mb-4">Agenciamento DMG</p>
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">E-mail Profissional</p>
                    <p className="text-xs font-black text-white">contato@dmgrecords.com.br</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Button className="w-full bg-white text-black font-black uppercase h-14 rounded-xl hover:bg-zinc-200">
                  <Share2 className="mr-2 h-4 w-4" /> COMPARTILHAR PERFIL
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Minimalista */}
      <footer className="py-20 border-t border-white/5 bg-black">
        <div className="container mx-auto px-6 flex flex-col items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary flex items-center justify-center font-black text-white rounded-lg italic">♪</div>
            <span className="text-2xl font-black uppercase italic tracking-tighter">DMG <span className="text-primary">RECORDS</span></span>
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600">Artist Official Hub System — © 2025</p>
        </div>
      </footer>
    </main>
  );
}
