
"use client";
import { Scale, Plus, Download, FileCheck, ShieldCheck } from "lucide-react";
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
      <div className="ph">
        <div>
          <h1>Licenciamento & Sincronização</h1>
          <p>Gerenciar cessão de uso e exploração comercial do catálogo</p>
        </div>
        <button className="admin-btn btn-gold"><Plus size={16} /> Nova Licença</button>
      </div>

      <div className="admin-card">
        <h3 className="text-xl font-black italic uppercase tracking-tighter mb-10 flex items-center gap-3">
          <Scale className="text-admin-gold h-5 w-5" /> Registro de Licenças Ativas
        </h3>
        <div className="overflow-x-auto">
          <table className="admin-table">
            <thead>
              <tr><th>ID</th><th>Obra Licenciada</th><th>Artista</th><th>Tipo</th><th>Licenciado</th><th>Território</th><th>Valor FEE</th><th>Status</th><th>Ação</th></tr>
            </thead>
            <tbody>
              {licenses.map((l, i) => (
                <tr key={i}>
                  <td><span className="font-mono text-[10px] text-admin-gold font-bold">{l[0]}</span></td>
                  <td className="font-black italic uppercase tracking-tighter">{l[1]}</td>
                  <td className="text-admin-muted font-bold text-[11px] uppercase tracking-widest">{l[2]}</td>
                  <td><span className="admin-badge badge-blue">{l[3]}</span></td>
                  <td className="font-black text-admin-text text-[11px] uppercase">{l[4]}</td>
                  <td className="text-admin-muted font-bold text-[10px] uppercase tracking-widest">{l[5]}</td>
                  <td className="font-black text-admin-green italic text-sm">{l[6]}</td>
                  <td><span className="admin-badge badge-green">Ativa</span></td>
                  <td><button className="p-3 bg-admin-bg rounded-lg hover:text-admin-gold transition-colors border border-admin-surface2"><Download size={14} /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="admin-card bg-admin-goldbg border-admin-goldborder">
        <div className="flex items-center gap-4 text-admin-gold">
          <ShieldCheck size={32} />
          <div>
            <h4 className="font-black uppercase italic text-lg leading-none mb-1">Proteção de Ativos</h4>
            <p className="text-[10px] font-black uppercase tracking-widest opacity-70">Todas as licenças geradas possuem selo de autenticidade jurídica DMG Records.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
