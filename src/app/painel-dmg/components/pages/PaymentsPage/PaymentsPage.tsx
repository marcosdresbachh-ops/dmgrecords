
"use client";
import { CreditCard, Plus, Download, Search, CheckCircle2, Clock } from "lucide-react";
import "./PaymentsPage.css";

export function PaymentsPage() {
  const payments = [
    { id: 'PAY001', a: 'Luna Verona', p: 'Q4 2024', m: 'PIX', v: 'R$ 2.394', d: '15 Mar, 2025', s: 'pago' },
    { id: 'PAY002', a: 'Ayla Santos', p: 'Q4 2024', m: 'Wire', v: 'R$ 6.440', d: '15 Mar, 2025', s: 'pago' },
    { id: 'PAY003', a: 'Sofia Andrade', p: 'Q4 2024', m: 'PIX', v: 'R$ 3.948', d: '15 Mar, 2025', s: 'pago' },
    { id: 'PAY004', a: 'Marco Esteves', p: 'Q4 2024', m: 'PIX', v: 'R$ 1.526', d: '15 Mar, 2025', s: 'pago' },
    { id: 'PAY005', a: 'Isabela Cruz', p: 'Q4 2024', m: 'PIX', v: 'R$ 3.374', d: '15 Mar, 2025', s: 'pago' },
    { id: 'PAY006', a: 'Lucas Moraes', p: 'Q1 2025', m: 'PIX', v: 'R$ 697', d: '—', s: 'pendente' },
    { id: 'PAY007', a: 'Diego Ferreira', p: 'Q1 2025', m: 'PIX', v: 'R$ 289', d: '—', s: 'pendente' },
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <div className="ph">
        <div>
          <h1>Gestão de Pagamentos</h1>
          <p>Liquidação de repasses aos artistas via Stripe & DMG Connect</p>
        </div>
        <button className="admin-btn btn-primary"><Plus size={16} /> Registrar Pagamento</button>
      </div>

      <div className="admin-card">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-xl font-black italic uppercase tracking-tighter flex items-center gap-3">
            <CreditCard className="text-admin-primary h-5 w-5" /> Histórico de Repasses
          </h3>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-admin-muted" />
            <input placeholder="Filtrar por artista..." className="bg-admin-surface2 border-none rounded-full h-10 pl-10 pr-4 text-[10px] font-black uppercase outline-none focus:ring-1 focus:ring-admin-primary" />
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
                  <td><span className="font-mono text-[10px] text-admin-primary font-bold">{p.id}</span></td>
                  <td className="font-black italic uppercase tracking-tighter">{p.a}</td>
                  <td className="text-admin-muted font-bold text-[11px] uppercase">{p.p}</td>
                  <td><span className="admin-badge badge-blue">{p.m}</span></td>
                  <td className="font-black text-admin-green italic text-sm">{p.v}</td>
                  <td className="text-admin-muted font-bold text-[11px]">{p.d}</td>
                  <td>
                    <span className={`admin-badge ${p.s === 'pago' ? 'badge-green' : 'badge-red'}`}>
                      {p.s === 'pago' ? <CheckCircle2 size={10} className="inline mr-1" /> : <Clock size={10} className="inline mr-1" />}
                      {p.s.toUpperCase()}
                    </span>
                  </td>
                  <td>
                    <button className="p-3 bg-admin-surface2 rounded-lg hover:text-admin-primary transition-colors border border-admin-surface3"><Download size={14} /></button>
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
