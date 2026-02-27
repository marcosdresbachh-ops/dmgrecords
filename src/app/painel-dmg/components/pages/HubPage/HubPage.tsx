
"use client";
import { GraduationCap, Plus, Mail, ShieldCheck, User } from "lucide-react";
import { AdminDB } from "../../../lib/admin-db";
import "./HubPage.css";

export function HubPage() {
  const artists = AdminDB.getArtists();

  return (
    <div className="animate-in fade-in duration-500">
      <div className="ph flex justify-between items-start mb-10">
        <div>
          <h1>Gestão do Artist Hub</h1>
          <p>Administrar acesso e dados da área do artista</p>
        </div>
        <div className="flex gap-3">
          <button className="admin-btn btn-outline"><Mail size={16} /> Enviar Comunicado</button>
          <button className="admin-btn btn-gold"><Plus size={16} /> Convidar Artista</button>
        </div>
      </div>

      <div className="admin-card">
        <h3 className="text-xl font-black italic uppercase tracking-tighter mb-8 flex items-center gap-3">
          <User className="text-admin-gold h-5 w-5" /> Artistas no Hub
        </h3>
        <table className="admin-table">
          <thead>
            <tr><th>Artista</th><th>Email</th><th>Papel</th><th>Obras</th><th>Acesso</th><th>Status</th><th>Ações</th></tr>
          </thead>
          <tbody>
            {artists.map((a: any, i: number) => (
              <tr key={i}>
                <td className="font-bold text-admin-gold italic uppercase tracking-tighter">{a.name}</td>
                <td className="text-admin-muted font-bold">{a.email}</td>
                <td><span className="admin-badge badge-blue">{a.role}</span></td>
                <td className="font-bold">{a.tracks}</td>
                <td className="text-admin-muted text-[10px] font-bold">há 2 horas</td>
                <td><span className="admin-badge badge-green">Ativo</span></td>
                <td>
                  <div className="flex gap-2">
                    <button className="admin-btn btn-outline py-1 px-3 text-[9px]">Ver Perfil</button>
                    <button className="admin-btn btn-outline py-1 px-3 text-[9px] text-admin-red border-admin-red hover:bg-admin-red/10">Suspender</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
