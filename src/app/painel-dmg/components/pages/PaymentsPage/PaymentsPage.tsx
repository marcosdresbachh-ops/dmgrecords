
"use client";
import { CreditCard, Plus, Download, Search } from "lucide-react";
import "./PaymentsPage.css";

export function PaymentsPage() {
  const payments = [
    ['PAY001','Luna Verona','Q4 2024','PIX','$2,394','Mar 15, 2025','pago'],
    ['PAY002','Ayla Santos','Q4 2024','Wire Transfer','$6,440','Mar 15, 2025','pago'],
    ['PAY003','Sofia Andrade','Q4 2024','PIX','$3,948','Mar 15, 2025','pago'],
    ['PAY004','Marco Esteves','Q4 2024','PIX','$1,526','Mar 15, 2025','pago'],
    ['PAY005','Isabela Cruz','Q4 2024','PIX','$3,374','Mar 15, 2025','pago'],
    ['PAY006','Lucas Moraes','Q1 2025','PIX','$697','—','pendente'],
    ['PAY007','Diego Ferreira','Q1 2025','PIX','$289','—','pendente'],
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <div className="ph">
        <div>
          <h1>Gestão de Pagamentos</h1>
          <p>Fluxo de caixa e liquidação de repasses aos artistas</p>
        </div>
        <button className="admin-btn btn-gold"><Plus size={16} /> Registrar Pagamento</button>
      </div>

      <div className="admin-card">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-xl font-black italic uppercase tracking-tighter flex items-center gap-3">
            <CreditCard className="text-admin-gold h-5 w-5" /> Histórico de Repasses
          </h3>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-admin-muted" />
            <input placeholder="ID ou Artista..." className="bg-admin-bg border-none rounded-full h-10 pl-10 pr-4 text-[10px] font-black uppercase outline-none focus:ring-1 focus:ring-admin-gold" />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="admin-table">
            <thead>
              <tr><th>ID Transação</th><th>Beneficiário</th><th>Período</th><th>Método</th><th>Valor Líquido</th><th>Data</th><th>Status</th><th>Comprovante</th></tr>
            </thead>
            <tbody>
              {payments.map((p, i) => (
                <tr key={i}>
                  <td><span className="font-mono text-[10px] text-admin-gold">{p[0]}</span></td>
                  <td className="font-black italic uppercase tracking-tighter">{p[1]}</td>
                  <td className="text-admin-muted font-bold text-[11px] uppercase tracking-widest">{p[2]}</td>
                  <td><span className="admin-badge badge-blue">{p[3]}</span></td>
                  <td className="font-black text-admin-green italic text-sm">{p[4]}</td>
                  <td className="text-admin-muted font-bold text-[11px]">{p[5]}</td>
                  <td><span className={`admin-badge ${p[6]==='pago'?'badge-green':'badge-gold'}`}>{p[6].toUpperCase()}</span></td>
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
