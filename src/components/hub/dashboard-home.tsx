"use client";

import { Music, Calendar, Award, Star } from "lucide-react";

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
        <p className="text-zinc-500 text-lg font-medium">Seu centro de comando na DMG Records.</p>
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
        <div className="bg-black/40 border border-white/5 p-8 space-y-6">
          <h3 className="text-xl font-black italic uppercase tracking-tighter text-primary">Informações da Conta</h3>
          <div className="grid grid-cols-2 gap-y-6">
            <div>
              <p className="text-[10px] uppercase font-black tracking-widest text-zinc-600">ID Único</p>
              <p className="text-sm font-bold text-zinc-300">{user.id}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase font-black tracking-widest text-zinc-600">E-mail</p>
              <p className="text-sm font-bold text-zinc-300">{user.email}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase font-black tracking-widest text-zinc-600">País</p>
              <p className="text-sm font-bold text-zinc-300">{user.country || "Não informado"}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase font-black tracking-widest text-zinc-600">PRO Affiliation</p>
              <p className="text-sm font-bold text-zinc-300">{user.pro || "Não filiado"}</p>
            </div>
          </div>
        </div>

        <div className="bg-black/40 border border-white/5 p-8 space-y-6">
          <h3 className="text-xl font-black italic uppercase tracking-tighter text-accent">Anúncios DMG</h3>
          <div className="space-y-4">
            <div className="p-4 bg-white/5 border-l-4 border-accent text-xs">
              <p className="font-black uppercase tracking-widest text-accent mb-1">Novo Lançamento</p>
              <p className="text-zinc-400">Vini Amaral - "Nobody Knows" está dominando as paradas.</p>
            </div>
            <div className="p-4 bg-white/5 border-l-4 border-primary text-xs">
              <p className="font-black uppercase tracking-widest text-primary mb-1">Web Rádio</p>
              <p className="text-zinc-400">O prazo para inserção na grade foi reduzido para 3 dias.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
