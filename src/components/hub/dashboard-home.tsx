
"use client";

import { Music, DollarSign, FileCheck, Play, ArrowUpRight, TrendingUp, Calendar, Info, Globe, ShieldCheck, Star, Cloud, Zap } from "lucide-react";
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
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="flex justify-between items-start">
        <div className="space-y-3">
          <h1 className="text-5xl font-black italic uppercase tracking-tighter text-white leading-none">Bem-vindo, {user.artistName || user.firstName} ♪</h1>
          <p className="text-zinc-500 text-lg font-medium">Sua central de controle de carreira — SoundCloud & DMG Network Integradas.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex flex-col items-end">
             <span className="text-[10px] font-black uppercase text-zinc-600 tracking-widest">SoundCloud Status</span>
             <span className="text-xs font-black text-accent uppercase italic">Linked & Verified</span>
          </div>
          <div className="w-14 h-14 bg-[#ff5500] rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-[#ff5500]/30 rotate-3 hover:rotate-0 transition-transform cursor-pointer">
             <Cloud className="h-8 w-8" />
          </div>
        </div>
      </header>

      {/* Grid de Estatísticas - Estilo Dashboard de Performance */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div key={i} className="bg-zinc-950 border border-white/5 p-8 rounded-[32px] relative overflow-hidden group hover:border-primary/40 transition-all">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary to-transparent opacity-40" />
            <div className="flex justify-between items-start mb-6">
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl group-hover:scale-110 transition-transform text-primary">
                {s.icon}
              </div>
              <span className="text-[11px] font-black uppercase text-accent tracking-[0.2em] bg-accent/10 px-3 py-1 rounded-full">{s.trend}</span>
            </div>
            <p className="text-[11px] font-black uppercase tracking-[0.3em] text-zinc-600 mb-2">{s.label}</p>
            <p className="text-4xl font-black italic uppercase tracking-tighter text-white">{s.value}</p>
            <p className="text-[10px] text-zinc-700 mt-4 font-black uppercase tracking-widest">{s.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          
          {/* Sincronização em Tempo Real */}
          <div className="bg-zinc-950 border border-white/5 rounded-[40px] p-10">
            <div className="flex items-center justify-between mb-10">
              <div className="space-y-1">
                <h3 className="text-2xl font-black italic uppercase tracking-tighter text-white flex items-center gap-3">
                  <Music className="h-6 w-6 text-primary" /> SoundCloud Track Sync
                </h3>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Sincronização automática com a API SoundCloud for Artists</p>
              </div>
              <Button variant="ghost" className="h-10 text-[11px] font-black uppercase tracking-[0.2em] text-primary hover:text-primary hover:bg-primary/5 border border-primary/20 rounded-full px-6">
                Sync Now <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            {works.length === 0 ? (
              <div className="py-20 text-center border-2 border-dashed border-white/5 rounded-[32px] space-y-6">
                <Zap className="h-12 w-12 text-zinc-800 mx-auto" />
                <p className="text-zinc-600 text-sm font-black uppercase tracking-widest">Nenhuma obra sincronizada via SoundCloud.</p>
                <Button className="bg-primary/10 text-primary border border-primary/20 text-[10px] font-black uppercase tracking-widest rounded-full px-8 h-12">Conectar SoundCloud Account →</Button>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/5 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-700">
                      <th className="pb-6">Título da Faixa</th>
                      <th className="pb-6">Monetização</th>
                      <th className="pb-6">Plays Cloud</th>
                      <th className="pb-6 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...works].reverse().slice(0, 5).map((w, i) => (
                      <tr key={i} className="group hover:bg-white/5 transition-all">
                        <td className="py-6 font-black text-lg text-white italic tracking-tighter uppercase">{w.title}</td>
                        <td className="py-6">
                           <span className="text-[10px] font-black text-accent border border-accent/20 bg-accent/5 px-3 py-1 rounded-full uppercase tracking-widest">Active</span>
                        </td>
                        <td className="py-6 text-sm font-mono font-bold text-zinc-500">{(Math.random() * 2000 + 100).toFixed(0)}</td>
                        <td className="py-6 text-right">
                          <span className="text-[10px] font-black uppercase tracking-[0.2em] bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full italic">Sincronizado</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Receita Detalhada */}
          <div className="bg-zinc-950 border border-white/5 rounded-[40px] p-10 relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 opacity-5 grayscale">
               <TrendingUp className="h-64 w-64 text-primary" />
            </div>
            <h3 className="text-2xl font-black italic uppercase tracking-tighter text-white mb-10 flex items-center gap-3">
              <TrendingUp className="h-6 w-6 text-primary" /> Receita SoundCloud for Artists
            </h3>
            <div className="space-y-8">
              {[
                { l: "Plays Monetizados", p: 75, v: "R$ 412,20", c: "bg-[#ff5500]" },
                { l: "Fan-Powered Royalties", p: 25, v: "R$ 136,80", c: "bg-primary" },
              ].map((item, i) => (
                <div key={i} className="space-y-4">
                  <div className="flex justify-between text-xs font-black uppercase tracking-[0.3em]">
                    <span className="text-zinc-500">{item.l}</span>
                    <span className="text-white italic">{item.v}</span>
                  </div>
                  <div className="h-3 bg-white/5 rounded-full overflow-hidden p-0.5 border border-white/5">
                    <div className={`h-full ${item.c} rounded-full transition-all duration-1000`} style={{ width: `${item.p}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Profile Card Sidebar */}
          <div className="bg-zinc-950 border border-white/5 rounded-[32px] p-8 space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
               <Cloud className="h-20 w-20 text-[#ff5500]" />
            </div>
            <h3 className="text-lg font-black italic uppercase tracking-tighter text-white flex items-center gap-3">
              <Cloud className="h-5 w-5 text-[#ff5500]" /> SoundCloud Profile
            </h3>
            <div className="space-y-5">
              {[
                ["Handle", "@" + (user.artistSlug || "artist")],
                ["Plan", "Next Pro (DMG Partner)"],
                ["Followers", "2,841"],
                ["Track Count", works.length || "0"],
                ["Monetization", "Enabled"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between items-center py-3 border-b border-white/5 last:border-0">
                  <span className="text-[11px] font-black uppercase tracking-widest text-zinc-600">{k}</span>
                  <span className="text-xs font-bold text-zinc-300 italic">{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Vantagens Card */}
          <div className="bg-primary/5 border border-primary/20 rounded-[32px] p-8 space-y-6">
            <h3 className="text-sm font-black uppercase tracking-[0.3em] text-primary flex items-center gap-3">
              <Star className="h-5 w-5" /> Vantagens DMG Next Pro
            </h3>
            <div className="p-6 bg-black/40 border border-white/5 rounded-2xl space-y-3 hover:border-accent/40 transition-all group">
              <p className="text-[11px] font-black uppercase text-accent tracking-widest flex items-center gap-2">
                <Zap className="h-3.5 w-3.5" /> ⚡ UPLOAD ILIMITADO
              </p>
              <p className="text-xs text-zinc-400 font-medium leading-relaxed">
                Como parceiro DMG, você tem upload infinito e ferramentas avançadas de substituição de áudio sem perda de plays.
              </p>
            </div>
            <div className="p-6 bg-black/40 border border-white/5 rounded-2xl space-y-3 hover:border-[#ff5500]/40 transition-all group">
              <p className="text-[11px] font-black uppercase text-[#ff5500] tracking-widest flex items-center gap-2">
                <ShieldCheck className="h-3.5 w-3.5" /> 🛡️ CONTENT ID CLOUD
              </p>
              <p className="text-xs text-zinc-400 font-medium leading-relaxed">
                Proteção automática contra re-uploads não autorizados dentro da rede global SoundCloud.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
