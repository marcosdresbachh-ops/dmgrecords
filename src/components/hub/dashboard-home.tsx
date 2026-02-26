
"use client";

import { Music, DollarSign, FileCheck, Play, ArrowUpRight, TrendingUp, Calendar, Info, Globe, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DashboardHome({ user }: any) {
  const works = user.works || [];
  
  const stats = [
    { label: "Obras Registradas", value: works.length, sub: "No catálogo ativo", trend: "↑ Ativo", icon: <Music className="text-primary" /> },
    { label: "Ganhos Estimados", value: "R$ 1.312,20", sub: "Royalties vitalícios", trend: "↑ +18.4% Q1", icon: <DollarSign className="text-primary" /> },
    { label: "Licenças Ativas", value: "3", sub: "Territórios globais", trend: "1 Pendente", icon: <FileCheck className="text-primary" /> },
    { label: "Plays Totais", value: "14.8K", sub: "Todas plataformas", trend: "↑ +8.2%", icon: <Play className="text-primary" /> },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="space-y-2">
        <h1 className="text-4xl font-black italic uppercase tracking-tighter text-white">Bem-vindo, {user.artistName || user.firstName} ♪</h1>
        <p className="text-zinc-500 text-sm font-medium">Dashboard de carreira — Gerencie seu legado musical e ganhos globais.</p>
      </header>

      {/* ASCAP Global Partner Banner */}
      <div className="bg-zinc-950 border border-primary/20 p-8 rounded-[32px] relative overflow-hidden group">
        <div className="absolute -right-20 -top-20 opacity-10 group-hover:scale-110 transition-transform duration-1000">
          <Star className="h-64 w-64 text-primary" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative z-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="px-3 py-1 bg-primary text-white font-black text-[10px] uppercase tracking-widest italic">ASCAP PARTNER</div>
              <span className="text-[10px] font-black text-accent uppercase tracking-widest flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" /> FILIAÇÃO ATIVA
              </span>
            </div>
            <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white leading-none">
              COLETA GLOBAL <br /><span className="text-primary">ATUALIZADA.</span>
            </h2>
            <p className="text-xs text-zinc-500 font-medium max-w-xs leading-relaxed">
              Suas obras estão sendo monitoradas em mais de 150 territórios. A ASCAP garante sua remuneração em TV, Cinema e Rádios internacionais.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl space-y-1">
              <p className="text-[9px] font-black uppercase text-zinc-600">Seu IPI / CAE</p>
              <p className="text-sm font-black text-white font-mono">{user.ipi || "GERANDO..."}</p>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl space-y-1">
              <p className="text-[9px] font-black uppercase text-zinc-600">Status ASCAP</p>
              <p className="text-sm font-black text-accent uppercase italic">Processado</p>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl space-y-1">
              <p className="text-[9px] font-black uppercase text-zinc-600">Obras na Base</p>
              <p className="text-sm font-black text-white">{works.length} Verificadas</p>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl space-y-1">
              <p className="text-[9px] font-black uppercase text-zinc-600">Próximo Repasse</p>
              <p className="text-sm font-black text-primary uppercase italic">15 de Abr</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-5 bg-primary/10 border border-primary/20 rounded-2xl">
              <p className="text-[10px] font-black uppercase text-primary mb-2 flex items-center gap-2">
                <Globe className="h-3 w-3" /> Cobertura Territorial
              </p>
              <div className="flex gap-1">
                {["🇺🇸", "🇬🇧", "🇧🇷", "🇩🇪", "🇯🇵", "🇫🇷", "🇨🇦"].map(flag => (
                  <span key={flag} className="text-lg opacity-60 hover:opacity-100 cursor-default grayscale hover:grayscale-0 transition-all">{flag}</span>
                ))}
                <span className="text-[10px] font-bold text-zinc-600 ml-2">+140</span>
              </div>
            </div>
            <Button variant="outline" className="w-full border-white/10 text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-white rounded-xl h-12">
              Relatório Completo ASCAP <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div key={i} className="bg-zinc-950 border border-white/5 p-6 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent" />
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-primary/10 border border-primary/20 rounded-xl group-hover:scale-110 transition-transform">
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
                <Music className="h-5 w-5 text-primary" /> Obras Recentes (Base Global)
              </h3>
              <Button variant="ghost" className="text-[10px] font-black uppercase tracking-widest text-primary hover:text-primary hover:bg-primary/5">
                Ver Todas <ArrowUpRight className="ml-1 h-3 w-3" />
              </Button>
            </div>
            
            {works.length === 0 ? (
              <div className="py-12 text-center border-2 border-dashed border-white/5 rounded-2xl">
                <p className="text-zinc-600 text-xs font-black uppercase tracking-widest">Nenhuma obra registrada.</p>
                <Button variant="link" className="text-primary text-[10px] font-black uppercase mt-2">Registrar primeira obra →</Button>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/5">
                      <th className="pb-4 text-[10px] font-black uppercase tracking-widest text-zinc-600">Título</th>
                      <th className="pb-4 text-[10px] font-black uppercase tracking-widest text-zinc-600">ISWC (Global)</th>
                      <th className="pb-4 text-[10px] font-black uppercase tracking-widest text-zinc-600">Data</th>
                      <th className="pb-4 text-[10px] font-black uppercase tracking-widest text-zinc-600 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...works].reverse().slice(0, 5).map((w, i) => (
                      <tr key={i} className="group hover:bg-white/5 transition-colors">
                        <td className="py-4 font-bold text-sm text-zinc-200">{w.title}</td>
                        <td className="py-4 text-xs font-mono text-zinc-500 uppercase">{w.iswc || "PENDENTE ASCAP"}</td>
                        <td className="py-4 text-xs text-zinc-600 font-medium">{w.date}</td>
                        <td className="py-4 text-right">
                          <span className="text-[9px] font-black uppercase tracking-widest bg-accent/10 text-accent border border-accent/20 px-2 py-0.5 rounded">Verificado</span>
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
              <TrendingUp className="h-5 w-5 text-primary" /> Fontes de Ganhos (Q1 2025)
            </h3>
            <div className="space-y-6">
              {[
                { l: "Streaming Digital (Global)", p: 68, v: "R$ 892,40" },
                { l: "Performance ASCAP (USA/INT)", p: 18, v: "R$ 236,10" },
                { l: "Sync (TV/Publicidade)", p: 8, v: "R$ 104,90" },
                { l: "Mecânico & Outros", p: 6, v: "R$ 78,80" },
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                    <span className="text-zinc-500">{item.l}</span>
                    <span className="text-white">{item.v}</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: `${item.p}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-zinc-950 border border-white/5 rounded-2xl p-6">
            <h3 className="text-sm font-black italic uppercase tracking-tighter text-white mb-4 flex items-center gap-2">
              <Info className="h-4 w-4 text-primary" /> Credenciais da Indústria
            </h3>
            <div className="space-y-4">
              {[
                ["Membro ID", user.id || "—"],
                ["Papel Principal", user.role || "Artista"],
                ["IPI / CAE", user.ipi || "Gerando..."],
                ["PRO Vinculada", "ASCAP (DMG Partner)"],
                ["Data de Cadastro", user.joined || "—"],
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
              <Star className="h-4 w-4" /> Vantagens ASCAP
            </h3>
            <div className="p-4 bg-black/40 border border-white/5 rounded-xl space-y-2">
              <p className="text-[10px] font-black uppercase text-accent">🌎 COLETA GLOBAL</p>
              <p className="text-[11px] text-zinc-400 font-medium leading-relaxed">
                Suas músicas são rastreadas em redes de TV americanas e rádios internacionais automaticamente.
              </p>
            </div>
            <div className="p-4 bg-black/40 border border-white/5 rounded-xl space-y-2">
              <p className="text-[10px] font-black uppercase text-primary">🛡️ PROTEÇÃO TOTAL</p>
              <p className="text-[11px] text-zinc-400 font-medium leading-relaxed">
                Cada registro no HUB DMG gera uma submissão na base de dados global de direitos autorais.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
