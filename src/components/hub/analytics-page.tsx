
"use client";

import { BarChart3, TrendingUp, Globe, Music, ArrowUpRight, Play, Heart, Share2, MessageSquare, Repeat } from "lucide-react";

export function AnalyticsPage({ user }: any) {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black italic uppercase tracking-tighter text-white leading-none">Analytics & SoundCloud Insights</h1>
          <p className="text-zinc-500 text-sm font-medium mt-2">Dados em tempo real via SoundCloud API & DMG Global Distribution.</p>
        </div>
        <div className="flex gap-2">
          <div className="px-3 py-1 bg-[#ff5500]/10 border border-[#ff5500]/20 rounded-full text-[9px] font-black text-[#ff5500] uppercase tracking-widest flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#ff5500] rounded-full animate-pulse" />
            SoundCloud Sync On
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { l: "Plays Totais", v: "24,510", sub: "Cloud + Global", trend: "↑ +12.4%", icon: <Play /> },
          { l: "Likes", v: "1,204", sub: "Engajamento", trend: "↑ +5.2%", icon: <Heart /> },
          { l: "Reposts", v: "438", sub: "Viralidade", trend: "↑ +15.8%", icon: <Repeat className="h-4 w-4" /> },
          { l: "Comentários", v: "82", sub: "Feedback", trend: "↑ +2", icon: <MessageSquare /> },
        ].map((s, i) => (
          <div key={i} className="bg-zinc-950 border border-white/5 p-6 rounded-2xl group hover:border-primary/20 transition-all">
            <div className="p-2 w-fit bg-primary/10 rounded-lg text-primary mb-4 group-hover:scale-110 transition-transform">{s.icon}</div>
            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-600 mb-1">{s.l}</p>
            <p className="text-2xl font-black text-white italic tracking-tighter">{s.v}</p>
            <p className="text-[9px] text-accent font-bold uppercase mt-2">{s.trend}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-zinc-950 border border-white/5 rounded-3xl p-8 space-y-8">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-black italic uppercase tracking-tighter text-white flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" /> Performance de Lançamento (SoundCloud vs Spotify)
            </h3>
          </div>
          <div className="h-[300px] flex items-end gap-4 px-4">
            {[40, 65, 45, 90, 55, 75, 100, 85].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col gap-2 items-center group">
                <div className="w-full bg-[#ff5500]/20 rounded-t-lg group-hover:bg-[#ff5500]/40 transition-all" style={{ height: `${h}%` }} />
                <div className="w-full bg-primary/20 rounded-t-lg group-hover:bg-primary/40 transition-all" style={{ height: `${h * 0.7}%` }} />
                <span className="text-[8px] font-black text-zinc-700 uppercase">W{i+1}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-6 justify-center pt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#ff5500] rounded-sm" />
              <span className="text-[10px] font-black uppercase text-zinc-500">SoundCloud</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary" />
              <span className="text-[10px] font-black uppercase text-zinc-500">Spotify / Outros</span>
            </div>
          </div>
        </div>

        <div className="bg-zinc-950 border border-white/5 rounded-3xl p-8">
          <h3 className="text-lg font-black italic uppercase tracking-tighter text-white mb-8 flex items-center gap-2">
            <Globe className="h-5 w-5 text-primary" /> Origem do Tráfego
          </h3>
          <div className="space-y-6">
            {[
              { c: "SoundCloud Search", p: "42%" },
              { c: "Playlists Editoriais", p: "28%" },
              { c: "Direct / Social", p: "18%" },
              { c: "DMG Web Radio", p: "12%" },
            ].map((t, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-zinc-300">{t.c}</span>
                  <span className="text-xs font-black text-primary italic">{t.p}</span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: t.p }} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 p-4 bg-primary/5 border border-primary/20 rounded-2xl">
            <p className="text-[10px] font-bold text-zinc-400 leading-relaxed">
              Dica: Mantenha suas tags no SoundCloud atualizadas para melhorar a descoberta via algoritmo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
