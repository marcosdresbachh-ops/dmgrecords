
"use client";
import { Users, Plus, Shield, ShieldCheck } from "lucide-react";
import "./UsersPage.css";

export function UsersPage() {
  const users = [
    ['Administrador DR','admin@dresbachrecords.com','Super Admin','Tudo','Agora','Ativo'],
    ['Carlos Dresbach','carlos@dresbachrecords.com','CEO / Fundador','Tudo','Ontem','Ativo'],
    ['Ana Financeiro','ana@dresbachrecords.com','Financeiro','Royalties, Pagamentos','2 dias atrás','Ativo'],
    ['Pedro A&R','pedro@dresbachrecords.com','A&R Manager','Artistas, Catálogo','1 semana atrás','Ativo'],
    ['Lucia Marketing','lucia@dresbachrecords.com','Marketing','Marketing, Site','3 dias atrás','Ativo'],
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <div className="ph">
        <div>
          <h1>Usuários Admin</h1>
          <p>Equipe executiva com acesso restrito ao motor industrial DMG</p>
        </div>
        <button className="admin-btn btn-gold"><Plus size={16} /> Adicionar Usuário</button>
      </div>

      <div className="admin-card">
        <h3 className="text-xl font-black italic uppercase tracking-tighter mb-10 flex items-center gap-3">
          <Shield className="text-admin-gold h-5 w-5" /> Controle de Acessos e Permissões
        </h3>
        <div className="overflow-x-auto">
          <table className="admin-table">
            <thead>
              <tr><th>Nome / Usuário</th><th>Email Executivo</th><th>Cargo / Função</th><th>Permissões</th><th>Acesso</th><th>Status</th><th>Ação</th></tr>
            </thead>
            <tbody>
              {users.map((u, i) => (
                <tr key={i}>
                  <td className="font-black italic uppercase tracking-tighter text-sm">{u[0]}</td>
                  <td className="text-admin-muted font-bold text-[11px]">{u[1]}</td>
                  <td><span className={`admin-badge ${u[2]==='Super Admin'?'badge-red':'badge-blue'}`}>{u[2]}</span></td>
                  <td className="text-[10px] font-black text-admin-muted uppercase tracking-widest">{u[3]}</td>
                  <td className="text-[10px] font-black uppercase text-admin-text">{u[4]}</td>
                  <td><span className="admin-badge badge-green">Ativo</span></td>
                  <td><button className="text-[9px] font-black uppercase text-admin-gold hover:underline">Editar</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="p-8 border border-admin-goldborder bg-admin-goldbg rounded-[32px] flex items-center gap-6">
        <ShieldCheck size={40} className="text-admin-gold" />
        <div>
          <h4 className="font-black italic uppercase text-lg leading-none mb-1">Log de Auditoria Ativo</h4>
          <p className="text-[10px] font-black uppercase tracking-widest opacity-70 leading-relaxed">Toda atividade administrativa é monitorada e criptografada via DMG Cloud Engine.</p>
        </div>
      </div>
    </div>
  );
}
