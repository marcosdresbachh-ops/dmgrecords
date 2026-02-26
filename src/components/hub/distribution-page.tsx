
"use client";

import { Globe, Music, CheckCircle2, ArrowRight, Cloud, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DistributionPage({ user }: any) {
  const platforms = [
    { n: "SoundCloud for Artists", d: "Habilite monetização Next Pro e Content ID", c: "#ff5500", ic: <Cloud className="h-5 w-5 text-[#ff5500]" /> },
    { n: "Spotify for Artists", d: "Reivindique seu perfil verificado", c: "#1DB954", ic: <Music className="h-5 w-5 text-[#1DB954]" /> },
    { n: "Apple Music for Artists", d: "Gerencie sua presença na Apple", c: "#fc3c44", ic: "🍎" },
    { n: "YouTube Music", d: "Canais Oficiais de Artista (OAC)", c: "#FF0000", ic: "🎥" },
    { n: "Tidal Rising", d: "Oportunidades de destaque editorial", c: "#000000", ic: <Star className="h-5 w-5 text-white" /> },
    { n: "Deezer for Creators", d: "Insights profundos da base europeia", c: "#A238FF", ic: "💿" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black italic uppercase tracking-tighter text-white leading-none">Canais de Distribuição</h1>
          <p className="text-zinc-500 text-sm font-medium mt-2">Conecte sua música com o mundo através dos nossos parceiros oficiais.</p>
        </div>
        <div className="flex gap-2">
           <Button variant="outline" className="h-10 border-white/5 text-[10px] font-black uppercase tracking-widest text-zinc-500">
             Relatório de Entrega
           </Button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {platforms.map((p, i) => (
          <div key={i} className="bg-zinc-950 border border-white/5 p-6 rounded-2xl space-y-4 hover:border-primary/40 transition-all group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg bg-black border border-white/5 group-hover:scale-110 transition-transform">
                {p.ic}
              </div>
              <h4 className="text-sm font-black uppercase italic tracking-tighter text-white leading-none">{p.n}</h4>
            </div>
            <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest leading-relaxed">
              {p.d}
            </p>
            <Button variant="outline" className="w-full h-10 border-white/5 text-[10px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-primary group-hover:border-primary/40 rounded-xl transition-all">
              Sincronizar Canal <ArrowRight className="ml-2 h-3.5 w-3.5" />
            </Button>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#ff5500]/5 border border-[#ff5500]/20 rounded-3xl p-8 space-y-6">
          <div className="flex items-center gap-3">
            <Cloud className="h-6 w-6 text-[#ff5500]" />
            <h3 className="text-lg font-black italic uppercase tracking-tighter text-white">SoundCloud Monetization</h3>
          </div>
          <p className="text-sm text-zinc-400 leading-relaxed font-medium">
            Como parceiro DMG, você tem acesso ao **SoundCloud Next Pro**. Receba por cada play orgânico através do modelo Fan-Powered Royalties e proteja seu catálogo com Content ID.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-black/40 border border-white/5 rounded-xl">
               <p className="text-[9px] font-black uppercase text-zinc-600">Status de Monetização</p>
               <p className="text-xs font-bold text-accent uppercase mt-1">Habilitado</p>
            </div>
            <div className="p-4 bg-black/40 border border-white/5 rounded-xl">
               <p className="text-[9px] font-black uppercase text-zinc-600">ID de Conteúdo</p>
               <p className="text-xs font-bold text-white uppercase mt-1">Ativo em 14 Faixas</p>
            </div>
          </div>
          <Button className="w-full bg-[#ff5500] text-white font-black uppercase h-14 rounded-2xl hover:bg-[#ff5500]/90 transition-all shadow-xl shadow-[#ff5500]/20">
            Gerenciar Monetização SoundCloud
          </Button>
        </div>

        <div className="bg-zinc-950 border border-white/5 rounded-3xl p-8 space-y-6">
          <div className="flex items-center gap-3">
            <Globe className="h-6 w-6 text-primary" />
            <h3 className="text-lg font-black italic uppercase tracking-tighter text-white">Smart Link Generator</h3>
          </div>
          <p className="text-sm text-zinc-400 leading-relaxed font-medium">
            Crie links inteligentes que direcionam seus fãs para a plataforma preferida deles, otimizando sua conversão.
          </p>
          <div className="space-y-4">
            <input 
              placeholder="Cole o link da faixa principal..." 
              className="w-full bg-black/40 border border-white/10 h-14 px-6 rounded-2xl text-sm focus:border-primary outline-none transition-all"
            />
            <Button className="w-full bg-white text-black font-black uppercase h-14 rounded-2xl hover:bg-primary hover:text-white transition-all">
              Gerar EPK Link
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
