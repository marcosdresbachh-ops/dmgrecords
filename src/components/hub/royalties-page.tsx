
"use client";

import { DollarSign, ArrowDownToLine, TrendingUp, CreditCard, Clock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export function RoyaltiesPage({ user }: any) {
  const platforms = [
    { n: "Spotify", v: "R$ 324,80", s: "8,420", c: "#1DB954" },
    { n: "Apple Music", v: "R$ 198,40", s: "3,210", c: "#fc3c44" },
    { n: "YouTube Music", v: "R$ 86,20", s: "2,180", c: "#FF0000" },
    { n: "Amazon Music", v: "R$ 42,10", s: "890", c: "#00A8E1" },
    { n: "Web Rádio", v: "R$ 236,10", s: "—", c: "#ff0000" },
  ];

  const history = [
    { d: "15 Mar, 2025", p: "Q4 2024", a: "R$ 763,90", s: "Pago" },
    { d: "15 Dez, 2024", p: "Q3 2024", a: "R$ 641,20", s: "Pago" },
    { d: "15 Set, 2024", p: "Q2 2024", a: "R$ 589,80", s: "Pago" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-4xl font-black italic uppercase tracking-tighter text-white leading-none">Royalties & Financeiro</h1>
          <p className="text-zinc-500 text-sm font-medium mt-2">Visão geral detalhada de todos os seus ganhos e fontes de receita.</p>
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { l: "Total Q1 2025", v: "R$ 906,20", trend: "↑ +18.4%", icon: <TrendingUp /> },
          { l: "Streaming", v: "R$ 669,00", trend: "5 Plataformas", icon: <Globe /> },
          { l: "Execução Pública", v: "R$ 236,10", trend: "Rádio + TV", icon: <DollarSign /> },
          { l: "Pendente", v: "R$ 142,50", trend: "Próximo Mês", icon: <Clock /> },
        ].map((s, i) => (
          <div key={i} className="bg-zinc-950 border border-white/5 p-6 rounded-2xl">
            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-600 mb-1">{s.l}</p>
            <p className="text-2xl font-black text-white italic tracking-tighter">{s.v}</p>
            <p className="text-[10px] text-primary font-bold uppercase mt-2">{s.trend}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-zinc-950 border border-white/5 rounded-3xl p-8">
            <h3 className="text-lg font-black italic uppercase tracking-tighter text-white mb-8">Ganhos por Plataforma</h3>
            <div className="space-y-4">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/5">
                    <th className="pb-4 text-[10px] font-black uppercase tracking-widest text-zinc-600">Plataforma</th>
                    <th className="pb-4 text-[10px] font-black uppercase tracking-widest text-zinc-600">Streams</th>
                    <th className="pb-4 text-[10px] font-black uppercase tracking-widest text-zinc-600 text-right">Valor</th>
                  </tr>
                </thead>
                <tbody>
                  {platforms.map((p, i) => (
                    <tr key={i} className="group hover:bg-white/5 transition-colors">
                      <td className="py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: p.c }} />
                          <span className="text-sm font-bold text-zinc-200 uppercase">{p.n}</span>
                        </div>
                      </td>
                      <td className="py-4 text-xs font-medium text-zinc-500 uppercase">{p.s}</td>
                      <td className="py-4 text-right font-black italic text-primary">{p.v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-zinc-950 border border-white/5 rounded-3xl p-8">
            <h3 className="text-lg font-black italic uppercase tracking-tighter text-white mb-8">Histórico de Pagamentos</h3>
            <div className="space-y-4">
              {history.map((h, i) => (
                <div key={i} className="flex items-center justify-between py-4 border-b border-white/5 last:border-0">
                  <div>
                    <p className="text-sm font-bold text-white uppercase tracking-tighter italic">{h.p}</p>
                    <p className="text-[10px] text-zinc-600 font-bold uppercase">{h.d}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-black text-accent italic">{h.a}</p>
                    <span className="text-[9px] font-black uppercase text-accent bg-accent/5 px-2 py-0.5 rounded border border-accent/10">{h.s}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-zinc-950 border border-white/5 rounded-3xl p-8 space-y-6">
            <h3 className="text-sm font-black italic uppercase tracking-tighter text-white flex items-center gap-2">
              <CreditCard className="h-4 w-4 text-primary" /> Método de Recebimento
            </h3>
            <div className="p-6 border-2 border-dashed border-white/5 rounded-2xl text-center space-y-4">
              <p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest">Nenhum banco configurado.</p>
              <Button variant="outline" className="w-full border-primary/20 text-primary text-[10px] font-black uppercase rounded-xl h-12">
                Configurar PIX ou Conta
              </Button>
            </div>
          </div>

          <div className="bg-zinc-950 border border-white/5 rounded-3xl p-8 space-y-6">
            <h3 className="text-sm font-black italic uppercase tracking-tighter text-white flex items-center gap-2">
              <Globe className="h-4 w-4 text-primary" /> Top Territórios
            </h3>
            <div className="space-y-4">
              {[
                { c: "🇺🇸 EUA", p: "42%", v: "R$ 380,20" },
                { c: "🇧🇷 Brasil", p: "23%", v: "R$ 210,40" },
                { c: "🇬🇧 Reino Unido", p: "15%", v: "R$ 136,00" },
                { c: "🇩🇪 Alemanha", p: "9%", v: "R$ 82,10" },
              ].map((t, i) => (
                <div key={i} className="flex justify-between items-center py-2">
                  <span className="text-xs font-bold text-zinc-300">{t.c}</span>
                  <div className="text-right">
                    <p className="text-xs font-black text-primary italic leading-none">{t.v}</p>
                    <p className="text-[9px] text-zinc-600 font-bold uppercase">{t.p}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
