
"use client";
import { Receipt, Download, Plus } from "lucide-react";
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
      <div className="ph flex justify-between items-start mb-10">
        <div>
          <h1>Notas Fiscais & Recibos</h1>
          <p>Controle tributário e fiscal da gravadora</p>
        </div>
        <button className="admin-btn btn-gold"><Plus size={16} /> Gerar Nova NF</button>
      </div>

      <div className="admin-card">
        <table className="admin-table">
          <thead>
            <tr><th>NF Nº</th><th>Destinatário</th><th>Descrição</th><th>Valor</th><th>Data</th><th>Status</th><th>Ações</th></tr>
          </thead>
          <tbody>
            {invoices.map((n, i) => (
              <tr key={i}>
                <td><span className="font-mono text-[10px] text-admin-gold">{n[0]}</span></td>
                <td className="font-bold italic uppercase tracking-tighter">{n[1]}</td>
                <td className="text-admin-muted font-bold text-[11px] uppercase">{n[2]}</td>
                <td className="font-bold text-admin-green">{n[3]}</td>
                <td className="text-admin-muted font-bold">{n[4]}</td>
                <td><span className={`admin-badge ${n[5]==='emitida'?'badge-green':'badge-gold'}`}>{n[5].toUpperCase()}</span></td>
                <td>
                  <button className="p-2 hover:text-admin-gold transition-colors"><Download size={16} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
