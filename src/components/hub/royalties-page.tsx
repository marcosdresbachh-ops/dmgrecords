
"use client";

import { DollarSign, ArrowDownToLine, TrendingUp, CreditCard, Clock, Globe, ArrowUpRight, ShieldCheck, Star, Radio, Tv, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

export function RoyaltiesPage({ user }: any) {
  const platforms = [
    { n: "Performance ASCAP (Global)", v: "R$ 412,50", s: "TV/Radio", c: "#ff0000", ic: <Star className="h-4 w-4" /> },
    { n: "Streaming Digital", v: "R$ 564,80", s: "Spotify/Apple", c: "#1DB954", ic: <Music className="h-4 w-4" /> },
    { n: "Web Rádio DMG", v: "R$ 186,10", s: "Exposição", c: "#fc3c44", ic: <Radio className="h-4 w-4" /> },
    { n: "Sync & Licenciamento", v: "R$ 148,80", s: "Comerciais", c: "#fc3c44", ic: <Tv className="h-4 w-4" /> },
  ];

  const history = [
    { d: "15 Mar, 2025", p: "Q4 2024 (ASCAP Included)", a: "R$ 763,90", s: "Pago" },
    { d: "15 Dez, 2024", p: "Q3 2024", a: "R$ 641,20", s: "Pago" },
    { d: "15 Set, 2024", p: "Q2 2024", a: "R$ 589,80", s: "Pago" },
  ];

  const handleWithdraw = () => {
    toast({
      title: "Solicitação Recebida",
      description: "Sua transferência está sendo processada pela Stripe Connect.",
    });
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-4xl font-black italic uppercase tracking-tighter text-white leading-none">Royalties & Financeiro</h1>
          <p className="text-zinc-500 text-sm font-medium mt-2">Visão detalhada de ganhos domésticos e internacionais via ASCAP Partner.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="bg-zinc-950 border-white/5 text-[10px] font-black uppercase tracking-widest rounded-xl h-12 px-6">
            Q1 2025 <Clock className="ml-2 h-4 w-4" />
          </Button>
          <Button className="bg-primary text-[10px] font-black uppercase tracking-widest rounded-xl h-12 px-6">
            Relatório PDF <ArrowDownToLine className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </header>

      {/* Stripe Wallet Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-gradient-to-br from-primary to-zinc-900 border border-primary/20 rounded-[32px] p-10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:scale-110 transition-transform duration-1000">
            <CreditCard className="h-40 w-40" />
          </div>
          <div className="relative z-10 space-y-8">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <div className="flex items-center gap-2 mb-2">
                   <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60">Saldo Global Disponível</span>
                   <div className="px-2 py-0.5 bg-accent text-[8px] font-black text-white rounded uppercase">Stripe Connect</div>
                </div>
                <h2 className="text-7xl font-black italic tracking-tighter text-white">R$ 1.312,20</h2>
                <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest pt-2 flex items-center gap-2">
                  <Star className="h-3 w-3 text-primary" /> Inclui Coleta Internacional ASCAP
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button onClick={handleWithdraw} className="bg-white text-black font-black uppercase tracking-tighter h-16 px-10 rounded-2xl hover:bg-primary hover:text-white transition-all text-lg shadow-2xl">
                SACAR PARA CONTA BANCÁRIA <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-white/20 text-white font-black uppercase tracking-tighter h-16 px-8 rounded-2xl hover:bg-white/10 backdrop-blur-sm text-sm">
                DETALHAMENTO POR TERRITÓRIO
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-zinc-950 border border-white/5 rounded-[32px] p-8 space-y-8">
          <div className="space-y-2">
            <h3 className="text-lg font-black italic uppercase tracking-tighter text-white flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-primary" /> Auditoria DMG
            </h3>
            <p className="text-[11px] text-zinc-500 font-medium leading-relaxed">
              Sua conta financeira é protegida e processada pela DMG Records em parceria direta com a Stripe e ASCAP.
            </p>
          </div>
          <div className="space-y-6 pt-4">
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
               <p className="text-[10px] font-black uppercase text-zinc-600 mb-1">Status de Coleta ASCAP</p>
               <div className="flex items-center gap-2">
                 <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                 <span className="text-xs font-black text-white uppercase italic">Sincronizado</span>
               </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-[10px] font-black uppercase">
                <span className="text-zinc-600">Próximo Ciclo</span>
                <span className="text-white">15 ABR, 2025</span>
              </div>
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-2/3" />
              </div>
              <p className="text-[9px] text-zinc-600 font-bold uppercase tracking-widest text-center">Apuração em andamento</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { l: "Total Q1 2025", v: "R$ 906,20", trend: "↑ +18.4%", icon: <TrendingUp className="text-primary" /> },
          { l: "Coleta ASCAP", v: "R$ 412,50", trend: "USA/INT", icon: <Star className="text-primary" /> },
          { l: "Streaming (Distro)", v: "R$ 351,20", trend: "Spotify/Apple", icon: <Globe className="text-primary" /> },
          { l: "Pendentes", v: "R$ 142,50", trend: "A Processar", icon: <Clock className="text-primary" /> },
        ].map((s, i) => (
          <div key={i} className="bg-zinc-950 border border-white/5 p-6 rounded-2xl group hover:border-primary/40 transition-all">
            <div className="mb-4">{s.icon}</div>
            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-600 mb-1">{s.l}</p>
            <p className="text-2xl font-black text-white italic tracking-tighter group-hover:text-primary transition-colors">{s.v}</p>
            <p className="text-[10px] text-primary font-bold uppercase mt-2">{s.trend}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-zinc-950 border border-white/5 rounded-[32px] p-8">
            <h3 className="text-xl font-black italic uppercase tracking-tighter text-white mb-8">Receita por Fonte de Performance</h3>
            <div className="space-y-4">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/5">
                    <th className="pb-4 text-[10px] font-black uppercase tracking-widest text-zinc-600">Fonte / Sociedade</th>
                    <th className="pb-4 text-[10px] font-black uppercase tracking-widest text-zinc-600">Tipo de Uso</th>
                    <th className="pb-4 text-[10px] font-black uppercase tracking-widest text-zinc-600 text-right">Valor</th>
                  </tr>
                </thead>
                <tbody>
                  {platforms.map((p, i) => (
                    <tr key={i} className="group hover:bg-white/5 transition-colors">
                      <td className="py-5">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-black rounded-lg text-primary">{p.ic}</div>
                          <span className="text-sm font-bold text-zinc-200 uppercase">{p.n}</span>
                        </div>
                      </td>
                      <td className="py-5 text-xs font-medium text-zinc-500 uppercase">{p.s}</td>
                      <td className="py-5 text-right font-black italic text-primary text-lg">{p.v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-zinc-950 border border-white/5 rounded-[32px] p-8">
            <h3 className="text-xl font-black italic uppercase tracking-tighter text-white mb-8">Histórico de Liquidação</h3>
            <div className="space-y-4">
              {history.map((h, i) => (
                <div key={i} className="flex items-center justify-between py-5 border-b border-white/5 last:border-0">
                  <div>
                    <p className="text-sm font-bold text-white uppercase tracking-tighter italic">{h.p}</p>
                    <p className="text-[10px] text-zinc-600 font-bold uppercase">{h.d}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-black text-accent italic">{h.a}</p>
                    <span className="text-[9px] font-black uppercase text-accent bg-accent/5 px-2 py-0.5 rounded border border-accent/10">{h.s}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-zinc-950 border border-white/5 rounded-[32px] p-8 space-y-6">
            <h3 className="text-lg font-black italic uppercase tracking-tighter text-white flex items-center gap-2">
              <Globe className="h-4 w-4 text-primary" /> Performance por Região
            </h3>
            <div className="space-y-6">
              {[
                { c: "🇺🇸 USA (ASCAP Direct)", p: "45%", v: "R$ 590,20" },
                { c: "🇧🇷 Brasil (ECAD/DMG)", p: "22%", v: "R$ 288,40" },
                { c: "🇬🇧 Reino Unido (PRS)", p: "12%", v: "R$ 157,00" },
                { c: "🇩🇪 Alemanha (GEMA)", p: "8%", v: "R$ 104,10" },
              ].map((t, i) => (
                <div key={i} className="p-4 bg-white/5 rounded-2xl hover:border-primary/20 transition-all border border-transparent">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-zinc-300">{t.c}</span>
                    <p className="text-sm font-black text-primary italic leading-none">{t.v}</p>
                  </div>
                  <div className="mt-3 h-1 w-full bg-black rounded-full overflow-hidden">
                     <div className="h-full bg-primary/40" style={{ width: t.p }} />
                  </div>
                  <p className="text-[9px] text-zinc-600 font-bold uppercase mt-2">{t.p} da Receita Global</p>
                </div>
              ))}
            </div>
            <Button className="w-full bg-primary/10 text-primary border border-primary/20 font-black uppercase text-[10px] h-12 rounded-xl">
              SOLICITAR MAPA DE AUDIÊNCIA
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
