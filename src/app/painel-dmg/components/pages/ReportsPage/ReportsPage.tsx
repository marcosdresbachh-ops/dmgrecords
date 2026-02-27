
"use client";
import { PieChart, Download, FileText, BarChart3, Wallet, Globe, Music, FileSpreadsheet } from "lucide-react";
import "./ReportsPage.css";

export function ReportsPage() {
  const reports = [
    { ic: <Wallet />, t: "Royalties", d: "Receitas por artista, período e fonte de exploração comercial" },
    { ic: <Music />, t: "Catálogo", d: "Sumário de todas as obras, ISRCs e registros fonográficos" },
    { ic: <BarChart3 />, t: "Streams", d: "Performance detalhada em todas as plataformas de streaming" },
    { ic: <FileText />, t: "Contratos", d: "Status de vigência, exclusividade e obrigações contratuais" },
    { ic: <Globe />, t: "Distribuição", d: "Mapeamento de presença por território e plataforma parceira" },
    { ic: <FileSpreadsheet />, t: "Financeiro", d: "Balanço patrimonial, pagamentos e notas fiscais emitidas" },
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
          <div key={i} className="admin-card text-center group hover:border-admin-gold transition-all relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-admin-surface2 group-hover:bg-admin-gold transition-colors"></div>
            <div className="w-20 h-20 bg-admin-surface2 rounded-3xl flex items-center justify-center mx-auto mb-8 text-admin-gold group-hover:scale-110 transition-transform">
              {r.ic}
            </div>
            <h3 className="font-black uppercase italic text-xl mb-3 tracking-tighter">{r.t}</h3>
            <p className="text-[10px] font-black text-admin-muted uppercase tracking-widest leading-loose mb-10 px-6">{r.d}</p>
            <div className="flex gap-3 justify-center">
              <button className="admin-btn btn-outline py-3 px-8 text-[9px] flex-1"><Download size={12} /> CSV</button>
              <button className="admin-btn btn-gold py-3 px-8 text-[9px] flex-1"><FileText size={12} /> PDF</button>
            </div>
          </div>
        ))}
      </div>

      <div className="admin-card">
        <h3 className="text-xl font-black italic uppercase tracking-tighter mb-10 flex items-center gap-3">
          <PieChart className="text-admin-gold h-5 w-5" /> Sumário Geral Anual 2025
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            ['Artistas Ativos','6','roster atual'],
            ['Faixas Distribuídas','247','catálogo live'],
            ['Consumo Global','1.2M','streams totais'],
            ['Volume Royalties','$27,180','gerado Q1']
          ].map(([l,v,s], i) => (
            <div key={i} className="text-center p-10 bg-admin-surface2 rounded-[40px] border border-admin-surface3 group hover:border-admin-gold transition-all">
              <p className="text-4xl font-black text-admin-gold italic tracking-tighter mb-2 group-hover:scale-110 transition-transform">{v}</p>
              <p className="text-[10px] font-black text-admin-text uppercase tracking-[0.2em]">{l}</p>
              <p className="text-[8px] font-black text-admin-muted uppercase mt-2 tracking-widest">{s}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
