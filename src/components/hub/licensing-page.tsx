
"use client";

import { useState } from "react";
import { FileCheck, Shield, Disc, Mic2, Tv, Radio, Plus, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LicensingPage({ user }: any) {
  const [selected, setSelected] = useState(0);

  const types = [
    { ic: <Tv />, n: "Sync License", d: "TV, Filmes, Ads" },
    { ic: <Disc />, n: "Mecânica", d: "CDs, Downloads" },
    { ic: <Mic2 />, n: "Performance", d: "Shows, Rádio, TV" },
    { ic: <Radio />, n: "DMG Voluntária", d: "Web Rádio DMG" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-4xl font-black italic uppercase tracking-tighter text-white leading-none">Licenciamento</h1>
          <p className="text-zinc-500 text-sm font-medium mt-2">Emita e gerencie licenças de uso para suas obras registradas.</p>
        </div>
        <Button className="bg-primary text-[10px] font-black uppercase tracking-widest rounded-xl h-12 px-6">
          <Plus className="mr-2 h-4 w-4" /> Nova Licença
        </Button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {types.map((t, i) => (
          <button 
            key={i} 
            onClick={() => setSelected(i)}
            className={`p-6 rounded-2xl border transition-all text-left group ${
              selected === i 
                ? "bg-primary/10 border-primary shadow-lg shadow-primary/10" 
                : "bg-zinc-950 border-white/5 hover:border-white/20"
            }`}
          >
            <div className={`p-3 w-fit rounded-xl mb-4 transition-colors ${selected === i ? "bg-primary text-white" : "bg-white/5 text-zinc-500 group-hover:text-white"}`}>
              {t.ic}
            </div>
            <h3 className="text-sm font-black italic uppercase tracking-tighter text-white">{t.n}</h3>
            <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mt-1">{t.d}</p>
          </button>
        ))}
      </div>

      <div className="bg-zinc-950 border border-white/5 rounded-3xl p-8">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-lg font-black italic uppercase tracking-tighter text-white flex items-center gap-2">
            <FileCheck className="h-5 w-5 text-primary" /> Licenças Ativas — {types[selected].n}
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/5">
                <th className="pb-4 text-[10px] font-black uppercase tracking-widest text-zinc-600">ID Licença</th>
                <th className="pb-4 text-[10px] font-black uppercase tracking-widest text-zinc-600">Obra</th>
                <th className="pb-4 text-[10px] font-black uppercase tracking-widest text-zinc-600">Licenciado</th>
                <th className="pb-4 text-[10px] font-black uppercase tracking-widest text-zinc-600">Território</th>
                <th className="pb-4 text-[10px] font-black uppercase tracking-widest text-zinc-600">Status</th>
                <th className="pb-4 text-[10px] font-black uppercase tracking-widest text-zinc-600 text-right">Ação</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="py-6"><span className="text-xs font-mono font-bold text-primary">LIC-A3X9K</span></td>
                <td className="py-6 font-bold text-sm text-white italic uppercase tracking-tighter">Blue Horizon</td>
                <td className="py-6 text-xs text-zinc-400 font-medium">FilmCo Productions</td>
                <td className="py-6 text-xs text-zinc-500 uppercase tracking-widest">Mundial</td>
                <td className="py-6">
                  <span className="text-[9px] font-black uppercase text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded">Ativa</span>
                </td>
                <td className="py-6 text-right">
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-lg border border-white/5">
                    <Download className="h-3.5 w-3.5 text-zinc-500" />
                  </Button>
                </td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="py-6"><span className="text-xs font-mono font-bold text-primary">LIC-B7M2P</span></td>
                <td className="py-6 font-bold text-sm text-white italic uppercase tracking-tighter">Midnight Rain</td>
                <td className="py-6 text-xs text-zinc-400 font-medium">DMG Digital Radio</td>
                <td className="py-6 text-xs text-zinc-500 uppercase tracking-widest">Global</td>
                <td className="py-6">
                  <span className="text-[9px] font-black uppercase text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded">Voluntária</span>
                </td>
                <td className="py-6 text-right">
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-lg border border-white/5">
                    <Download className="h-3.5 w-3.5 text-zinc-500" />
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
