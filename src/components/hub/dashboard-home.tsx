
"use client";

import { Music, Calendar, Award, Star, User, Mail, Globe, Hash } from "lucide-react";

export function DashboardHome({ user }: any) {
  const stats = [
    { label: "Obras Registradas", value: user.works?.length || 0, icon: <Music className="text-primary" /> },
    { label: "Membro Desde", value: user.joined, icon: <Calendar className="text-primary" /> },
    { label: "Status de Conta", value: "Ativa", icon: <Award className="text-primary" /> },
    { label: "Nível Artista", value: "Verified", icon: <Star className="text-primary" /> },
  ];

  return (
    <div className="space-y-12">
      <header className="space-y-2">
        <h1 className="text-5xl font-black italic uppercase tracking-tighter text-white">Bem-vindo, {user.artistName || user.firstName} ♪</h1>
        <p className="text-zinc-500 text-lg font-medium">Seu centro de comando na DMG Records — Gerencie seu legado musical.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div key={i} className="bg-white/5 border border-white/10 p-6 flex flex-col gap-4">
            <div className="p-3 bg-black border border-white/5 w-fit">{s.icon}</div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">{s.label}</p>
              <p className="text-3xl font-black italic uppercase tracking-tighter text-white mt-1">{s.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-black/40 border border-white/5 p-8 space-y-8">
          <h3 className="text-xl font-black italic uppercase tracking-tighter text-primary flex items-center gap-2">
             <User className="h-5 w-5" /> Informações da Conta
          </h3>
          <div className="grid grid-cols-2 gap-x-8 gap-y-8">
            <div>
              <p className="text-[10px] uppercase font-black tracking-widest text-zinc-600 mb-1">Nome Completo</p>
              <p className="text-sm font-bold text-zinc-200">{user.firstName} {user.lastName}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase font-black tracking-widest text-zinc-600 mb-1">Papel / Role</p>
              <p className="text-sm font-bold text-primary uppercase">{user.role}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase font-black tracking-widest text-zinc-600 mb-1">E-mail</p>
              <p className="text-sm font-bold text-zinc-200">{user.email}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase font-black tracking-widest text-zinc-600 mb-1">ID Único</p>
              <p className="text-sm font-bold text-primary font-mono">{user.id}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase font-black tracking-widest text-zinc-600 mb-1">País</p>
              <p className="text-sm font-bold text-zinc-200">{user.country || "—"}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase font-black tracking-widest text-zinc-600 mb-1">Afiliação PRO</p>
              <p className="text-sm font-bold text-zinc-200">{user.pro || "Não filiado"}</p>
            </div>
          </div>
        </div>

        <div className="bg-black/40 border border-white/5 p-8 space-y-6">
          <h3 className="text-xl font-black italic uppercase tracking-tighter text-accent flex items-center gap-2">
            <Star className="h-5 w-5" /> Anúncios DMG Records
          </h3>
          <div className="space-y-4">
            <div className="p-5 bg-white/5 border-l-4 border-accent text-xs">
              <p className="font-black uppercase tracking-widest text-accent mb-2">🔥 NOVO LANÇAMENTO</p>
              <p className="text-zinc-400 leading-relaxed font-medium">Vini Amaral - "Nobody Knows" está dominando as paradas globais. Confira seu kit de marketing no Hub AI.</p>
            </div>
            <div className="p-5 bg-white/5 border-l-4 border-primary text-xs">
              <p className="font-black uppercase tracking-widest text-primary mb-2">📻 WEB RÁDIO</p>
              <p className="text-zinc-400 leading-relaxed font-medium">O prazo para inserção na rádio rádio oficial foi reduzido para 3 dias úteis. Envie seus termos assinados.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
