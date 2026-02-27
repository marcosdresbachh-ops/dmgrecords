
"use client";
import { GraduationCap, Plus, Mail, User, ShieldCheck } from "lucide-react";
import { AdminDB } from "../../../lib/admin-db";
import "./HubPage.css";

export function HubPage() {
  const artists = AdminDB.getArtists();

  return (
    <div className="animate-in fade-in duration-500">
      <div className="ph">
        <div>
          <h1>Gestão do Artist Hub</h1>
          <p>Administrar credenciais, acessos e suporte aos artistas</p>
        </div>
        <div className="flex gap-3">
          <button className="admin-btn btn-outline"><Mail size={16} /> Comunicado Geral</button>
          <button className="admin-btn btn-gold"><Plus size={16} /> Convidar Membro</button>
        </div>
      </div>

      <div className="admin-card">
        <h3 className="text-xl font-black italic uppercase tracking-tighter mb-10 flex items-center gap-3">
          <User className="text-admin-gold h-5 w-5" /> Membros Ativos no Hub
        </h3>
        <div className="overflow-x-auto">
          <table className="admin-table">
            <thead>
              <tr><th>Artista / Usuário</th><th>Email de Acesso</th><th>Papel</th><th>Obras</th><th>Último Login</th><th>Status Hub</th><th>Ações</th></tr>
            </thead>
            <tbody>
              {artists.map((a: any, i: number) => (
                <tr key={i}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-admin-text rounded-lg flex items-center justify-center text-admin-gold font-black text-[10px]">{a.name[0]}</div>
                      <span className="font-black italic uppercase tracking-tighter text-sm">{a.name}</span>
                    </div>
                  </td>
                  <td className="text-admin-muted font-bold text-[11px]">{a.email}</td>
                  <td><span className="admin-badge badge-blue">{a.role}</span></td>
                  <td className="font-black text-center">{a.tracks}</td>
                  <td className="text-admin-muted font-black text-[10px] uppercase tracking-widest">há 2 horas</td>
                  <td><span className="admin-badge badge-green">Ativo</span></td>
                  <td>
                    <div className="flex gap-2">
                      <button className="admin-btn btn-outline py-2 px-4 text-[9px]">Acessar</button>
                      <button className="admin-btn btn-outline py-2 px-4 text-[9px] text-admin-red border-admin-red hover:bg-admin-red/10">Suspender</button>
                    </div>
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
