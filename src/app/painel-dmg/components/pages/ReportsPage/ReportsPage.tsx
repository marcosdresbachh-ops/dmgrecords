
"use client";
import { PieChart, Download, FileText, BarChart3, Wallet, Globe, Music, Star } from "lucide-react";
import { AdminDB } from "../../../lib/admin-db";
import { toast } from "@/hooks/use-toast";
import "./ReportsPage.css";

export function ReportsPage() {
  const artists = AdminDB.getArtists();
  const tracks = AdminDB.getTracks();

  const handleExport = (name: string) => {
    const content = `DMG RECORDS - RELATÓRIO EXECUTIVO\n\nTipo: ${name}\nData: ${new Date().toLocaleString()}\n\nResumo:\n- Artistas Ativos: ${artists.length}\n- Obras em Catálogo: ${tracks.length}\n- Streams Mensais: 1.2M\n- Status do Sistema: Online`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `report_${name.toLowerCase().replace(/\s+/g, '_')}.txt`;
    a.click();
    toast({ title: "Relatório Gerado", description: `O arquivo de ${name} foi baixado.` });
  };

  const reports = [
    { ic: <Wallet />, t: "Royalties Trimestrais", d: "Receitas por artista, período e fonte de exploração comercial." },
    { ic: <Music />, t: "Sumário de Catálogo", d: "Relatório completo de ISRCs, registros e obras ativas." },
    { ic: <BarChart3 />, t: "Performance Global", d: "Insights detalhados de streaming em todas as plataformas." },
    { ic: <FileText />, t: "Auditoria de Contratos", d: "Status de vigência e conformidade jurídica do roster." },
    { ic: <Globe />, t: "Mapeamento Geográfico", d: "Distribuição de audiência e receita por território." },
    { ic: <Star />, t: "Coleta ASCAP / INT", d: "Relatório de performance internacional e direitos conexos." },
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <div className="ph">
        <div>
          <h1 className="text-4xl font-black italic uppercase tracking-tighter">Centro de Relatórios</h1>
          <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mt-2">
            Geração de Documentos Executivos e Exportação de Dados Analíticos
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {reports.map((r, i) => (
          <div key={i} className="admin-card text-center group hover:border-primary transition-all relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-zinc-50 group-hover:bg-primary transition-colors"></div>
            <div className="w-20 h-20 bg-zinc-50 rounded-[2rem] flex items-center justify-center mx-auto mb-8 text-zinc-400 group-hover:text-primary group-hover:bg-primary/5 transition-all shadow-sm">
              {r.ic}
            </div>
            <h3 className="font-black uppercase italic text-xl mb-3 tracking-tighter text-zinc-900 leading-none">{r.t}</h3>
            <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest leading-relaxed mb-10 px-6">{r.d}</p>
            <div className="flex gap-3 justify-center">
              <button onClick={() => handleExport(r.t)} className="admin-btn btn-outline py-3 px-8 text-[9px] flex-1">
                <Download size={12} className="mr-2" /> EXPORTAR CSV
              </button>
              <button onClick={() => handleExport(r.t + " PDF")} className="admin-btn btn-primary py-3 px-8 text-[9px] flex-1">
                <FileText size={12} className="mr-2" /> GERAR PDF
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="admin-card">
        <h3 className="text-xl font-black italic uppercase tracking-tighter mb-10 flex items-center gap-3">
          <PieChart className="text-primary h-5 w-5" /> Sumário Geral Anual 2025
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            ['Artistas Ativos', artists.length, 'roster total'],
            ['Catálogo Live', tracks.length, 'obras ativas'],
            ['Plays Globais', '1.2M', 'streams totais'],
            ['Net Royalties', 'R$ 27.180', 'gerado Q1']
          ].map(([l,v,s], i) => (
            <div key={i} className="text-center p-10 bg-zinc-50 rounded-[40px] border border-zinc-100 group hover:border-primary transition-all">
              <p className="text-4xl font-black text-primary italic tracking-tighter mb-2 group-hover:scale-110 transition-transform">{v}</p>
              <p className="text-[10px] font-black text-zinc-900 uppercase tracking-[0.2em]">{l}</p>
              <p className="text-[8px] font-black text-zinc-400 uppercase mt-2 tracking-widest">{s as string}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
