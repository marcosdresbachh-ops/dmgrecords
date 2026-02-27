
"use client";
import { FileText, Plus, Download } from "lucide-react";

export function ContractsPage() {
  const contracts = [
    ['CNT001','Luna Verona','Gravação Exclusiva','Sim','70/30','Jan 2024','Jan 2026','Ativo'],
    ['CNT002','Marco Esteves','Co-publicação','Não','60/40','Mar 2024','Mar 2026','Ativo'],
    ['CNT003','Sofia Andrade','Distribuição','Sim','80/20','Jun 2024','Jun 2025','Pendente'],
    ['CNT004','Ayla Santos','Gravação Exclusiva','Sim','75/25','Feb 2024','Feb 2026','Ativo'],
    ['CNT005','Diego Ferreira','Distribuição','Não','85/15','Nov 2024','Nov 2025','Ativo'],
    ['CNT006','Rafael Lima','Publishing','Não','50/50','Aug 2023','Aug 2025','Expirado'],
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <div className="ph">
        <div>
          <h1>Gestão de Contratos</h1>
          <p>Controle de exclusividade e royalties contratuais</p>
        </div>
        <button className="admin-btn btn-gold"><Plus size={16} /> Novo Contrato</button>
      </div>

      <div className="admin-card">
        <div className="overflow-x-auto">
          <table className="admin-table">
            <thead>
              <tr>
                <th>ID</th><th>Artista</th><th>Tipo</th><th>Excl.</th><th>Split</th><th>Início</th><th>Vencimento</th><th>Status</th><th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {contracts.map((c, i) => (
                <tr key={i}>
                  <td><span className="font-mono text-[10px] text-admin-gold">{c[0]}</span></td>
                  <td className="font-bold italic uppercase">{c[1]}</td>
                  <td className="text-[11px] font-bold uppercase">{c[2]}</td>
                  <td><span className={`admin-badge ${c[3]==='Sim'?'badge-green':'badge-gold'}`}>{c[3]}</span></td>
                  <td className="font-mono text-[11px]">{c[4]}</td>
                  <td className="text-admin-muted font-bold">{c[5]}</td>
                  <td className="text-admin-muted font-bold">{c[6]}</td>
                  <td><span className={`admin-badge ${c[7]==='Ativo'?'badge-green':c[7]==='Pendente'?'badge-gold':'badge-red'}`}>{c[7]}</span></td>
                  <td><button className="p-2 hover:text-admin-gold transition-colors"><Download size={16} /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
