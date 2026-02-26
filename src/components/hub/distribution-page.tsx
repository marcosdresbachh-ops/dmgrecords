
"use client";

import { Globe, Music, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DistributionPage({ user }: any) {
  const platforms = [
    { n: "DistroKid", d: "Distribuição para 150+ plataformas", c: "#1DB954", ic: "🎵" },
    { n: "TuneCore", d: "Mantenha 100% dos seus royalties", c: "#fc3c44", ic: "💿" },
    { n: "CD Baby", d: "Distribua e colete royalties mundiais", c: "#00A8E1", ic: "🎤" },
    { n: "Spotify for Artists", d: "Reivindique seu perfil verificado", c: "#1DB954", ic: "🎧" },
    { n: "Apple Music", d: "Gerencie sua presença na Apple", c: "#fc3c44", ic: "🍎" },
    { n: "YouTube Studio", d: "Content ID e monetização de vídeos", c: "#FF0000", ic: "🎥" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header>
        <h1 className="text-4xl font-black italic uppercase tracking-tighter text-white leading-none">Distribuição</h1>
        <p className="text-zinc-500 text-sm font-medium mt-2">Conecte sua música com o mundo através dos nossos parceiros.</p>
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
            <Button variant="outline" className="w-full h-10 border-white/5 text-[10px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-primary group-hover:border-primary/40 rounded-xl">
              Conectar <ArrowRight className="ml-2 h-3.5 w-3.5" />
            </Button>
          </div>
        ))}
      </div>

      <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8">
        <h3 className="text-lg font-black italic uppercase tracking-tighter text-white mb-6 flex items-center gap-2">
          <Music className="h-5 w-5 text-primary" /> Gerador de Smart Links
        </h3>
        <div className="flex flex-col md:flex-row gap-4">
          <input 
            placeholder="Cole o link do Spotify ou Apple Music aqui..." 
            className="flex-1 bg-black/40 border border-white/10 h-14 px-6 rounded-2xl text-sm focus:border-primary outline-none transition-all"
          />
          <Button className="bg-primary text-xs font-black uppercase tracking-widest h-14 px-10 rounded-2xl">
            Gerar Link Inteligente
          </Button>
        </div>
        <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.2em] mt-4 flex items-center gap-2">
          <CheckCircle2 className="h-3 w-3 text-accent" /> Crie um link único para todas as plataformas.
        </p>
      </div>
    </div>
  );
}
