
"use client";
import { Scale, Plus, Download, Tv, Disc, Mic2, Radio } from "lucide-react";
import "./LicensesPage.css";

export function LicensesPage() {
  const licenses = [
    ['LIC-001','Blue Horizon','Luna Verona','Sync','FilmCo Productions','Worldwide','$2,500','active'],
    ['LIC-002','Miami Nights','Ayla Santos','Mecânica','StreamMax Corp','N. America','$800','active'],
    ['LIC-003','Midnight Rain','Luna Verona','DMG Vol.','DMG Radio','Global','$0','active'],
    ['LIC-004','Neon Galaxy','Sofia Andrade','Performance','Rádio Nacional','Brasil','$450','active'],
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <div className="ph flex justify-between items-start mb-10">
        <div>
          <h1>Licenciamento & Sincronização</h1>
          <p>Gerenciar concessão de uso de obras do catálogo</p>
        </div>
        <button className="admin-btn btn-gold"><Plus size={16} /> Nova Licença</button>
      </div>

      <div className="admin-card">
        <table className="admin-table">
          <thead>
            <tr><th>ID</th><th>Obra</th><th>Artista</th><th>Tipo</th><th>Licenciado</th><th>Valor</th><th>Status</th><th>Ação</th></tr>
          </thead>
          <tbody>
            {licenses.map((l, i) => (
              <tr key={i}>
                <td><span className="font-mono text-[10px] text-admin-gold">{l[0]}</span></td>
                <td className="font-bold italic uppercase tracking-tighter">{l[1]}</td>
                <td className="text-admin-muted font-bold text-[11px] uppercase">{l[2]}</td>
                <td><span className="admin-badge badge-blue">{l[3]}</span></td>
                <td className="font-bold text-admin-text">{l[4]}</td>
                <td className="font-bold text-admin-green">{l[6]}</td>
                <td><span className="admin-badge badge-green">Ativa</span></td>
                <td><button className="p-2 hover:text-admin-gold transition-colors"><Download size={16} /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
