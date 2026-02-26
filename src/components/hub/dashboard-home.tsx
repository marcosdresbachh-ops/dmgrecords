
"use client";

import { Music, DollarSign, FileCheck, Play, ArrowUpRight, TrendingUp, Calendar, Info, Globe, ShieldCheck, Star, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DashboardHome({ user }: any) {
  const works = user.works || [];
  
  const stats = [
    { label: "Obras Registradas", value: works.length, sub: "No catálogo ativo", trend: "↑ Ativo", icon: <Music className="text-primary" /> },
    { label: "Ganhos Estimados", value: "R$ 1.312,20", sub: "Royalties vitalícios", trend: "↑ +18.4% Q1", icon: <DollarSign className="text-primary" /> },
    { label: "Licenças Ativas", value: "3", sub: "Territórios globais", trend: "1 Pendente", icon: <FileCheck className="text-primary" /> },
    { label: "Plays SoundCloud", value: "9.2K", sub: "Engajamento Orgânico", trend: "↑ +12.4%", icon: <Cloud className="text-[#ff5500]" /> },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="flex justify-between items-start">
        <div className="space-y-2">
          <h1 className="text-4xl font-black italic uppercase tracking-tighter text-white leading-none">Bem-vindo, {user.artistName || user.firstName} ♪</h1>
          <p className="text-zinc-500 text-sm font-medium">Dashboard de carreira — SoundCloud & DMG Network Integradas.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden md:flex flex-col items-end">
             <span className="text-[9px] font-black uppercase text-zinc-600">SoundCloud Account</span>
             <span className="text-[10px] font-bold text-accent">Linked & Verified</span>
          </div>
          <div className="w-10 h-10 bg-[#ff5500] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#ff5500]/20">
             <Cloud className="h-6 w-6" />
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div key={i} className="bg-zinc-950 border border-white/5 p-6 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent" />
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-white/5 border border-white/10 rounded-xl group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <span className="text-[10px] font-black uppercase text-accent tracking-widest">{s.trend}</span>
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-1">{s.label}</p>
            <p className="text-3xl font-black italic uppercase tracking-tighter text-white">{s.value}</p>
            <p className="text-[10px] text-zinc-600 mt-2 font-bold uppercase">{s.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-zinc-950 border border-white/5 rounded-2xl p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg font-black italic uppercase tracking-tighter text-white flex items-center gap-2">
                <Music className="h-5 w-5 text-primary" /> SoundCloud Track Sync
              </h3>
              <Button variant="ghost" className="text-[10px] font-black uppercase tracking-widest text-primary hover:text-primary hover:bg-primary/5">
                Sync Now <ArrowUpRight className="ml-1 h-3 w-3" />
              </Button>
            </div>
            
            {works.length === 0 ? (
              <div className="py-12 text-center border-2 border-dashed border-white/5 rounded-2xl">
                <p className="text-zinc-600 text-xs font-black uppercase tracking-widest">Nenhuma obra sincronizada.</p>
                <Button variant="link" className="text-primary text-[10px] font-black uppercase mt-2">Conectar SoundCloud →</Button>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/5">
                      <th className="pb-4 text-[10px] font-black uppercase tracking-widest text-zinc-600">Título</th>
                      <th className="pb-4 text-[10px] font-black uppercase tracking-widest text-zinc-600">Monetização</th>
                      <th className="pb-4 text-[10px] font-black uppercase tracking-widest text-zinc-600">Plays Cloud</th>
                      <th className="pb-4 text-[10px] font-black uppercase tracking-widest text-zinc-600 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...works].reverse().slice(0, 5).map((w, i) => (
                      <tr key={i} className="group hover:bg-white/5 transition-colors">
                        <td className="py-4 font-bold text-sm text-zinc-200">{w.title}</td>
                        <td className="py-4">
                           <span className="text-[10px] font-black text-accent border border-accent/20 px-2 py-0.5 rounded uppercase">On</span>
                        </td>
                        <td className="py-4 text-xs font-mono text-zinc-500 uppercase">{(Math.random() * 2000).toFixed(0)}</td>
                        <td className="py-4 text-right">
                          <span className="text-[9px] font-black uppercase tracking-widest bg-primary/10 text-primary border border-primary/20 px-2 py-0.5 rounded">Sincronizado</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <div className="bg-zinc-950 border border-white/5 rounded-2xl p-8">
            <h3 className="text-lg font-black italic uppercase tracking-tighter text-white mb-8 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" /> Receita SoundCloud for Artists
            </h3>
            <div className="space-y-6">
              {[
                { l: "Plays Monetizados", p: 75, v: "R$ 412,20" },
                { l: "Fan-Powered Royalties", p: 25, v: "R$ 136,80" },
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                    <span className="text-zinc-500">{item.l}</span>
                    <span className="text-white">{item.v}</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-[#ff5500]" style={{ width: `${item.p}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-zinc-950 border border-white/5 rounded-2xl p-6">
            <h3 className="text-sm font-black italic uppercase tracking-tighter text-white mb-4 flex items-center gap-2">
              <Cloud className="h-4 w-4 text-[#ff5500]" /> SoundCloud Profile
            </h3>
            <div className="space-y-4">
              {[
                ["Handle", "@" + (user.artistSlug || "artist")],
                ["Plan", "Next Pro (DMG Partner)"],
                ["Followers", "2,841"],
                ["Track Count", works.length || "0"],
                ["Monetization", "Enabled"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between py-2 border-b border-white/5 last:border-0">
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600">{k}</span>
                  <span className="text-[11px] font-bold text-zinc-300">{v}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 space-y-4">
            <h3 className="text-xs font-black uppercase tracking-widest text-primary flex items-center gap-2">
              <Star className="h-4 w-4" /> Vantagens DMG Next Pro
            </h3>
            <div className="p-4 bg-black/40 border border-white/5 rounded-xl space-y-2">
              <p className="text-[10px] font-black uppercase text-accent">⚡ UPLOAD ILIMITADO</p>
              <p className="text-[11px] text-zinc-400 font-medium leading-relaxed">
                Como parceiro DMG, você tem upload infinito e ferramentas avançadas de substituição de áudio.
              </p>
            </div>
            <div className="p-4 bg-black/40 border border-white/5 rounded-xl space-y-2">
              <p className="text-[10px] font-black uppercase text-[#ff5500]">🛡️ CONTENT ID CLOUD</p>
              <p className="text-[11px] text-zinc-400 font-medium leading-relaxed">
                Proteção automática contra re-uploads não autorizados dentro da rede SoundCloud.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
