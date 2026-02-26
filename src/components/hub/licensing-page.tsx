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
          <h1 className="text-4xl font-black italic uppercase tracking-tighter text-zinc-900 leading-none">Licenciamento</h1>
          <p className="text-zinc-500 text-sm font-medium mt-2">Emita e gerencie licenças de uso para suas obras registradas.</p>
        </div>
        <Button className="bg-primary text-[10px] font-black uppercase tracking-widest rounded-2xl h-12 px-8 text-white shadow-lg shadow-primary/20">
          <Plus className="mr-2 h-4 w-4" /> Nova Licença
        </Button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {types.map((t, i) => (
          <button 
            key={i} 
            onClick={() => setSelected(i)}
            className={`p-8 rounded-[32px] border transition-all text-left group shadow-sm ${
              selected === i 
                ? "bg-primary/5 border-primary shadow-lg shadow-primary/5" 
                : "bg-white border-zinc-200 hover:border-zinc-300"
            }`}
          >
            <div className={`p-4 w-fit rounded-2xl mb-6 transition-all border ${selected === i ? "bg-primary text-white border-primary shadow-lg shadow-primary/20" : "bg-zinc-50 text-zinc-400 border-zinc-100 group-hover:text-zinc-900 group-hover:bg-white"}`}>
              {t.ic}
            </div>
            <h3 className="text-base font-black italic uppercase tracking-tighter text-zinc-900">{t.n}</h3>
            <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest mt-1">{t.d}</p>
          </button>
        ))}
      </div>

      <div className="bg-white border border-zinc-200 rounded-[40px] p-10 shadow-sm">
        <div className="flex items-center justify-between mb-10">
          <h3 className="text-xl font-black italic uppercase tracking-tighter text-zinc-900 flex items-center gap-3">
            <FileCheck className="h-6 w-6 text-primary" /> Licenças Ativas — {types[selected].n}
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-zinc-100 bg-zinc-50 text-[10px] font-black uppercase tracking-widest text-zinc-400">
                <th className="p-6">ID Licença</th>
                <th className="p-6">Obra</th>
                <th className="p-6">Licenciado</th>
                <th className="p-6">Território</th>
                <th className="p-6">Status</th>
                <th className="p-6 text-right">Ação</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-zinc-50/50 transition-colors border-b border-zinc-100 last:border-0">
                <td className="p-6"><span className="text-xs font-mono font-bold text-primary">LIC-A3X9K</span></td>
                <td className="p-6 font-black text-sm text-zinc-900 italic uppercase tracking-tighter leading-none">Blue Horizon</td>
                <td className="p-6 text-xs text-zinc-500 font-bold uppercase">FilmCo Productions</td>
                <td className="p-6 text-xs text-zinc-400 uppercase font-black tracking-widest">Mundial</td>
                <td className="p-6">
                  <span className="text-[9px] font-black uppercase text-accent bg-accent/5 border border-accent/20 px-3 py-1 rounded-full">Ativa</span>
                </td>
                <td className="p-6 text-right">
                  <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl border border-zinc-200 bg-white shadow-sm hover:bg-zinc-50 hover:text-zinc-900 text-zinc-400">
                    <Download className="h-4 w-4" />
                  </Button>
                </td>
              </tr>
              <tr className="hover:bg-zinc-50/50 transition-colors border-b border-zinc-100 last:border-0">
                <td className="p-6"><span className="text-xs font-mono font-bold text-primary">LIC-B7M2P</span></td>
                <td className="p-6 font-black text-sm text-zinc-900 italic uppercase tracking-tighter leading-none">Midnight Rain</td>
                <td className="p-6 text-xs text-zinc-500 font-bold uppercase">DMG Digital Radio</td>
                <td className="p-6 text-xs text-zinc-400 uppercase font-black tracking-widest">Global</td>
                <td className="p-6">
                  <span className="text-[9px] font-black uppercase text-primary bg-primary/5 border border-primary/20 px-3 py-1 rounded-full">Voluntária</span>
                </td>
                <td className="p-6 text-right">
                  <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl border border-zinc-200 bg-white shadow-sm hover:bg-zinc-50 hover:text-zinc-900 text-zinc-400">
                    <Download className="h-4 w-4" />
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
