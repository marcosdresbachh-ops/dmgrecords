
"use client";
import { CreditCard, Download, Plus } from "lucide-react";
import "./PaymentsPage.css";

export function PaymentsPage() {
  const payments = [
    ['PAY001','Luna Verona','Q4 2024','PIX','$2,394','Mar 15, 2025','paid'],
    ['PAY002','Ayla Santos','Q4 2024','Wire Transfer','$6,440','Mar 15, 2025','paid'],
    ['PAY003','Sofia Andrade','Q4 2024','PIX','$3,948','Mar 15, 2025','paid'],
    ['PAY004','Marco Esteves','Q4 2024','PIX','$1,526','Mar 15, 2025','paid'],
    ['PAY005','Isabela Cruz','Q4 2024','PIX','$3,374','Mar 15, 2025','paid'],
    ['PAY006','Lucas Moraes','Q1 2025','PIX','$697','—','pending'],
    ['PAY007','Diego Ferreira','Q1 2025','PIX','$289','—','pending'],
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <div className="ph flex justify-between items-start mb-10">
        <div>
          <h1>Gestão de Pagamentos</h1>
          <p>Histórico de liquidação e repasse aos artistas</p>
        </div>
        <button className="admin-btn btn-gold"><Plus size={16} /> Registrar Pagamento</button>
      </div>

      <div className="admin-card">
        <table className="admin-table">
          <thead>
            <tr><th>ID</th><th>Artista</th><th>Período</th><th>Método</th><th>Valor</th><th>Data</th><th>Status</th><th>Ações</th></tr>
          </thead>
          <tbody>
            {payments.map((p, i) => (
              <tr key={i}>
                <td><span className="font-mono text-[10px] text-admin-gold">{p[0]}</span></td>
                <td className="font-bold italic uppercase tracking-tighter">{p[1]}</td>
                <td className="text-admin-muted font-bold text-[11px] uppercase">{p[2]}</td>
                <td><span className="admin-badge badge-blue">{p[3]}</span></td>
                <td className="font-bold text-admin-green">{p[4]}</td>
                <td className="text-admin-muted font-bold">{p[5]}</td>
                <td><span className={`admin-badge ${p[6]==='paid'?'badge-green':'badge-gold'}`}>{p[6].toUpperCase()}</span></td>
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
