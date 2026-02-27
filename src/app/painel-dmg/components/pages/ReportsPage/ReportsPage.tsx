
"use client";
import { PieChart, Download, FileText, BarChart3, Wallet, Globe, Music, FileSpreadsheet } from "lucide-react";
import "./ReportsPage.css";

export function ReportsPage() {
  const reports = [
    { ic: <Wallet />, t: "Royalties", d: "Receitas por artista, período e fonte" },
    { ic: <Music />, t: "Catálogo", d: "Todas as obras registradas e distribuídas" },
    { ic: <BarChart3 />, t: "Streams", d: "Performance em todas as plataformas" },
    { ic: <FileText />, t: "Contratos", d: "Status de todos os contratos e vigências" },
    { ic: <Globe />, t: "Distribuição", d: "Presença por plataforma e território" },
    { ic: <FileSpreadsheet />, t: "Financeiro", d: "Pagamentos, notas fiscais e balanço" },
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <div className="ph mb-10">
        <h1>Centro de Relatórios</h1>
        <p>Exportar dados e gerar sumários detalhados</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {reports.map((r, i) => (
          <div key={i} className="admin-card text-center group">
            <div className="w-16 h-16 bg-admin-surface2 rounded-2xl flex items-center justify-center mx-auto mb-6 text-admin-gold group-hover:scale-110 transition-transform">
              {r.ic}
            </div>
            <h3 className="font-bold uppercase italic text-lg mb-2">{r.t}</h3>
            <p className="text-[10px] font-bold text-admin-muted uppercase tracking-widest leading-relaxed mb-8">{r.d}</p>
            <div className="flex gap-2 justify-center">
              <button className="admin-btn btn-outline py-2 px-6 text-[9px]"><Download size={12} className="mr-2" /> CSV</button>
              <button className="admin-btn btn-gold py-2 px-6 text-[9px]"><FileText size={12} className="mr-2" /> PDF</button>
            </div>
          </div>
        ))}
      </div>

      <div className="admin-card">
        <h3 className="text-xl font-black italic uppercase tracking-tighter mb-8 flex items-center gap-3">
          <PieChart className="text-admin-gold h-5 w-5" /> Sumário Anual 2025
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            ['Artistas Ativos','6'],['Músicas Distribuídas','247'],
            ['Streams Totais','1.2M'],['Royalties Gerados','$27,180']
          ].map(([l,v], i) => (
            <div key={i} className="text-center p-8 bg-admin-surface2 rounded-[32px] border border-admin-surface3">
              <p className="text-3xl font-black text-admin-gold italic tracking-tighter mb-2">{v}</p>
              <p className="text-[9px] font-black text-admin-muted uppercase tracking-widest">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
