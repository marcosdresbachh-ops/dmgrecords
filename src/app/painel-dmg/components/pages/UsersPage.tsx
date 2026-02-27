
"use client";
import { Users, Plus, Shield } from "lucide-react";

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
          <p>Equipe com acesso restrito ao painel executivo</p>
        </div>
        <button className="admin-btn btn-gold"><Plus size={16} /> Adicionar Usuário</button>
      </div>

      <div className="admin-card">
        <div className="overflow-x-auto">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Nome</th><th>Email</th><th>Papel</th><th>Permissões</th><th>Acesso</th><th>Status</th><th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u, i) => (
                <tr key={i}>
                  <td className="font-bold italic uppercase">{u[0]}</td>
                  <td className="text-admin-muted font-bold">{u[1]}</td>
                  <td><span className={`admin-badge ${u[2]==='Super Admin'?'badge-red':'badge-blue'}`}>{u[2]}</span></td>
                  <td className="text-[10px] font-bold text-admin-muted uppercase">{u[3]}</td>
                  <td className="text-[10px] font-bold uppercase">{u[4]}</td>
                  <td><span className="admin-badge badge-green">{u[5]}</span></td>
                  <td><button className="text-admin-muted hover:text-admin-gold font-bold text-[10px] uppercase">Editar</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
