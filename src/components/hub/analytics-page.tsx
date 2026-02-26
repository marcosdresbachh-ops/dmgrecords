
"use client";

import { BarChart3, TrendingUp, Globe, Music, ArrowUpRight, Play, Heart, Share2 } from "lucide-react";

export function AnalyticsPage({ user }: any) {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header>
        <h1 className="text-4xl font-black italic uppercase tracking-tighter text-white leading-none">Analytics & Relatórios</h1>
        <p className="text-zinc-500 text-sm font-medium mt-2">Insights de performance da sua música em todas as plataformas.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { l: "Streams Totais", v: "14,820", sub: "Global", trend: "↑ +8.2%", icon: <Play /> },
          { l: "Países", v: "28", sub: "Alcance", trend: "↑ +3", icon: <Globe /> },
          { l: "Playlist Adds", v: "43", sub: "Curadoria", trend: "↑ +12", icon: <Heart /> },
          { l: "Radio Spins", v: "186", sub: "Web Rádio", trend: "↑ +24", icon: <Share2 /> },
        ].map((s, i) => (
          <div key={i} className="bg-zinc-950 border border-white/5 p-6 rounded-2xl">
            <div className="p-2 w-fit bg-primary/10 rounded-lg text-primary mb-4">{s.icon}</div>
            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-600 mb-1">{s.l}</p>
            <p className="text-2xl font-black text-white italic tracking-tighter">{s.v}</p>
            <p className="text-[9px] text-accent font-bold uppercase mt-2">{s.trend}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-zinc-950 border border-white/5 rounded-3xl p-8 space-y-8">
          <h3 className="text-lg font-black italic uppercase tracking-tighter text-white flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" /> Crescimento Mensal (2025)
          </h3>
          <div className="space-y-6">
            {[
              { m: "Janeiro", p: 72, v: "2,840" },
              { m: "Fevereiro", p: 85, v: "3,380" },
              { m: "Março", p: 100, v: "3,960" },
              { m: "Abril (est.)", p: 65, v: "2,580" },
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                  <span className="text-zinc-500">{item.m}</span>
                  <span className="text-white">{item.v}</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: `${item.p}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-zinc-950 border border-white/5 rounded-3xl p-8">
          <h3 className="text-lg font-black italic uppercase tracking-tighter text-white mb-8 flex items-center gap-2">
            <Globe className="h-5 w-5 text-primary" /> Top Países
          </h3>
          <div className="space-y-4">
            {[
              { c: "🇺🇸 USA", p: "38%" },
              { c: "🇧🇷 Brasil", p: "24%" },
              { c: "🇬🇧 Reino Unido", p: "14%" },
              { c: "🇩🇪 Alemanha", p: "10%" },
              { c: "🇯🇵 Japão", p: "7%" },
              { c: "Outros", p: "7%" },
            ].map((t, i) => (
              <div key={i} className="flex justify-between items-center py-3 border-b border-white/5 last:border-0">
                <span className="text-xs font-bold text-zinc-300">{t.c}</span>
                <span className="text-xs font-black text-primary italic uppercase tracking-tighter">{t.p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
