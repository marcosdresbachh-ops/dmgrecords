
"use client";

import { FileText, Plus, ShieldCheck, Download, Clock, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DocumentsPage({ user }: any) {
  const docs = [
    { id: "DOC-DMG01", n: "Termo de Transmissão Voluntária DMG", d: "26 Fev, 2025", s: "Assinado" },
    { id: "DOC-SPL02", n: "Split Sheet — Midnight Rain", d: "14 Jan, 2025", s: "Assinado" },
    { id: "DOC-SYN03", n: "Sync License Agreement — Blue Horizon", d: "10 Jan, 2025", s: "Assinado" },
    { id: "DOC-NDA04", n: "NDA — FilmCo Productions", d: "08 Dez, 2024", s: "Pendente" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-4xl font-black italic uppercase tracking-tighter text-white leading-none">Documentos & Jurídico</h1>
          <p className="text-zinc-500 text-sm font-medium mt-2">Contratos, acordos e termos de concessão arquivados.</p>
        </div>
        <Button className="bg-primary text-[10px] font-black uppercase tracking-widest rounded-xl h-12 px-6">
          <Plus className="mr-2 h-4 w-4" /> Novo Documento
        </Button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { ic: <ShieldCheck />, t: "Assinar Termo DMG", d: "Necessário para rádio" },
          { ic: <Plus />, t: "Gerar Split Sheet", d: "Acordo de co-autoria" },
          { ic: <FileText />, t: "Gerar Contrato", d: "NDA, Licensing, Gestão" },
        ].map((item, i) => (
          <div key={i} className="bg-zinc-950 border border-white/5 p-6 rounded-2xl text-center group hover:border-primary/40 transition-all cursor-pointer">
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mx-auto mb-4 text-zinc-500 group-hover:text-primary group-hover:bg-primary/10 transition-all">
              {item.ic}
            </div>
            <h4 className="text-xs font-black uppercase tracking-widest text-white mb-1">{item.t}</h4>
            <p className="text-[10px] text-zinc-600 font-bold uppercase">{item.d}</p>
          </div>
        ))}
      </div>

      <div className="bg-zinc-950 border border-white/5 rounded-3xl overflow-hidden">
        <div className="p-8 border-b border-white/5">
          <h3 className="text-lg font-black italic uppercase tracking-tighter text-white flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" /> Arquivo de Documentos
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-black/40 text-[10px] font-black uppercase tracking-widest text-zinc-600">
                <th className="p-6">ID DOC</th>
                <th className="p-6">Nome do Documento</th>
                <th className="p-6">Data</th>
                <th className="p-6">Status</th>
                <th className="p-6 text-right">Ação</th>
              </tr>
            </thead>
            <tbody>
              {docs.map((d, i) => (
                <tr key={i} className="hover:bg-white/5 transition-colors border-b border-white/5 last:border-0">
                  <td className="p-6"><span className="text-xs font-mono font-bold text-primary">{d.id}</span></td>
                  <td className="p-6 font-bold text-sm text-zinc-200">{d.n}</td>
                  <td className="p-6 text-xs text-zinc-500 font-medium">{d.d}</td>
                  <td className="p-6">
                    <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded border ${
                      d.s === "Assinado" ? "bg-accent/10 text-accent border-accent/20" : "bg-primary/10 text-primary border-primary/20"
                    }`}>
                      {d.s}
                    </span>
                  </td>
                  <td className="p-6 text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="sm" className="h-8 px-3 rounded-lg border border-white/5 text-[10px] font-black uppercase text-zinc-500 hover:text-white">
                        <Download className="h-3.5 w-3.5 mr-1" /> PDF
                      </Button>
                      {d.s === "Pendente" && (
                        <Button className="h-8 px-3 bg-primary rounded-lg text-[10px] font-black uppercase">Assinar</Button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-zinc-950 border border-white/5 rounded-3xl p-8">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-lg font-black italic uppercase tracking-tighter text-white flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-primary" /> Disputas de Copyright
          </h3>
          <Button variant="outline" className="h-8 border-white/5 text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-white rounded-lg">
            Abrir Caso
          </Button>
        </div>
        <div className="py-12 text-center">
          <AlertTriangle className="h-12 w-12 text-zinc-800 mx-auto mb-4" />
          <p className="text-xs text-zinc-600 font-black uppercase tracking-widest">Nenhuma disputa ativa encontrada.</p>
        </div>
      </div>
    </div>
  );
}
