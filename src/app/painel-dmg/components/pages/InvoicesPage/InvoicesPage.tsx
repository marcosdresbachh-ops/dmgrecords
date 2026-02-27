
"use client";
import { Receipt, Plus, Download, Search } from "lucide-react";
import "./InvoicesPage.css";

export function InvoicesPage() {
  const invoices = [
    ['NF-2025-001','FilmCo Productions','Licença Sync — Blue Horizon','$2,500','Jan 15, 2025','emitida'],
    ['NF-2025-002','StreamMax Corp','Licença Mecânica — Golden Hour','$800','Mar 5, 2025','emitida'],
    ['NF-2025-003','Luna Verona','Adiantamento Royalties Q1','$3,420','Mar 10, 2025','emitida'],
    ['NF-2025-004','Ayla Santos','Adiantamento Royalties Q1','$9,200','Mar 10, 2025','pendente'],
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <div className="ph">
        <div>
          <h1>Notas Fiscais & Recibos</h1>
          <p>Conformidade fiscal e documentos tributários da gravadora</p>
        </div>
        <button className="admin-btn btn-gold"><Plus size={16} /> Gerar Nova NF</button>
      </div>

      <div className="admin-card">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-xl font-black italic uppercase tracking-tighter flex items-center gap-3">
            <Receipt className="text-admin-gold h-5 w-5" /> Arquivo Fiscal
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="admin-table">
            <thead>
              <tr><th>NF Nº</th><th>Destinatário</th><th>Descrição do Serviço</th><th>Valor Total</th><th>Data Emissão</th><th>Status</th><th>PDF</th></tr>
            </thead>
            <tbody>
              {invoices.map((n, i) => (
                <tr key={i}>
                  <td><span className="font-mono text-[10px] text-admin-gold font-bold">{n[0]}</span></td>
                  <td className="font-black italic uppercase tracking-tighter">{n[1]}</td>
                  <td className="text-admin-muted font-bold text-[11px] uppercase tracking-widest">{n[2]}</td>
                  <td className="font-black text-admin-green italic text-sm">{n[3]}</td>
                  <td className="text-admin-muted font-bold text-[11px]">{n[4]}</td>
                  <td><span className={`admin-badge ${n[5]==='emitida'?'badge-green':'badge-gold'}`}>{n[5].toUpperCase()}</span></td>
                  <td>
                    <button className="p-3 bg-admin-bg rounded-lg hover:text-admin-gold transition-colors border border-admin-surface2"><Download size={14} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
