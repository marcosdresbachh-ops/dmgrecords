
"use client";
import { PieChart, Download, FileText, BarChart3, Wallet, Globe, Music, FileSpreadsheet, Star } from "lucide-react";
import "./ReportsPage.css";

export function ReportsPage() {
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
          <h1>Centro de Relatórios</h1>
          <p>Geração de documentos executivos e exportação de dados analíticos</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {reports.map((r, i) => (
          <div key={i} className="admin-card text-center group hover:border-admin-primary transition-all relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-admin-surface2 group-hover:bg-admin-primary transition-colors"></div>
            <div className="w-20 h-20 bg-admin-surface2 rounded-3xl flex items-center justify-center mx-auto mb-8 text-admin-primary group-hover:scale-110 transition-transform shadow-sm">
              {r.ic}
            </div>
            <h3 className="font-black uppercase italic text-xl mb-3 tracking-tighter leading-none">{r.t}</h3>
            <p className="text-[10px] font-black text-admin-muted uppercase tracking-widest leading-loose mb-10 px-6">{r.d}</p>
            <div className="flex gap-3 justify-center">
              <button className="admin-btn btn-outline py-3 px-8 text-[9px] flex-1"><Download size={12} /> CSV</button>
              <button className="admin-btn btn-primary py-3 px-8 text-[9px] flex-1"><FileText size={12} /> PDF</button>
            </div>
          </div>
        ))}
      </div>

      <div className="admin-card">
        <h3 className="text-xl font-black italic uppercase tracking-tighter mb-10 flex items-center gap-3">
          <PieChart className="text-admin-primary h-5 w-5" /> Sumário Geral Anual 2025 (Estimado)
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            ['Artistas Ativos','6','roster total'],
            ['Catálogo Live','247','obras distribuídas'],
            ['Plays Globais','1.2M','streams totais'],
            ['Net Royalties','R$ 27.180','gerado Q1']
          ].map(([l,v,s], i) => (
            <div key={i} className="text-center p-10 bg-admin-surface2 rounded-[40px] border border-admin-surface3 group hover:border-admin-primary transition-all">
              <p className="text-4xl font-black text-admin-primary italic tracking-tighter mb-2 group-hover:scale-110 transition-transform">{v}</p>
              <p className="text-[10px] font-black text-admin-text uppercase tracking-[0.2em]">{l}</p>
              <p className="text-[8px] font-black text-admin-muted uppercase mt-2 tracking-widest">{s}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
