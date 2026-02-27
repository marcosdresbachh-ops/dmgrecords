
"use client";
import { useState } from "react";
import Image from "next/image";
import { Search, LogOut, Bell } from "lucide-react";
import "./AdminHeader.css";

export function AdminHeader({ onLogout }: { onLogout: () => void }) {
  const [notifOpen, setNotifOpen] = useState(false);

  const notifications = [
    { t: 'Nova faixa enviada', b: 'Diego Ferreira enviou "Raiz do Norte" para revisão.', tm: 'há 2 horas', u: true },
    { t: 'Distribuição concluída', b: '"Miami Nights" de Ayla Santos está disponível em todas as plataformas.', tm: 'Ontem', u: true },
    { t: 'Contrato pendente', b: 'Contrato de Marco Esteves vence em 30 dias.', tm: '2 dias atrás', u: true },
    { t: 'Royalties processados', b: 'Distribuição de Q1 2025 concluída — $27,180 total.', tm: '1 semana atrás', u: false },
    { t: 'Novo artista cadastrado', b: 'Lucas Moraes completou o cadastro no Artist Hub.', tm: '2 semanas atrás', u: false },
  ];

  return (
    <header className="admin-header">
      <div className="flex items-center px-8 w-[260px] border-r border-zinc-100 h-full">
        <Image src="/logodmg.png" alt="DMG Logo" width={140} height={40} className="object-contain" priority />
      </div>
      <div className="flex-1 px-10">
        <div className="relative max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
          <input 
            placeholder="Buscar artistas, músicas, contratos..." 
            className="header-search-input outline-none"
          />
        </div>
      </div>
      <div className="px-8 flex items-center gap-8">
        <span className="text-[10px] font-black text-admin-primary uppercase tracking-[0.2em] bg-admin-primary-bg px-4 py-2 rounded-full border border-admin-primary-border">Central Admin</span>
        
        <div className="relative">
          <button 
            onClick={() => setNotifOpen(!notifOpen)}
            className="text-zinc-400 hover:text-admin-primary relative transition-colors p-2"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-admin-primary rounded-full border-2 border-white" />
          </button>

          {notifOpen && (
            <>
              <div className="fixed inset-0 z-[299]" onClick={() => setNotifOpen(false)} />
              <div className="notif-panel animate-in fade-in zoom-in-95 duration-200">
                <div className="notif-head">
                  <span className="font-black uppercase text-[10px] tracking-widest text-zinc-900">Notificações</span>
                  <button 
                    onClick={() => setNotifOpen(false)}
                    className="text-[10px] font-black uppercase text-admin-primary hover:underline"
                  >
                    Fechar
                  </button>
                </div>
                <div className="max-h-[400px] overflow-y-auto no-scrollbar">
                  {notifications.map((n, i) => (
                    <div key={i} className={`notif-item ${n.u ? 'unread' : ''}`}>
                      <div className="notif-t">{n.t}</div>
                      <div className="notif-b">{n.b}</div>
                      <div className="notif-tm">{n.tm}</div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        <button onClick={onLogout} className="text-zinc-400 hover:text-zinc-900 transition-colors p-2">
          <LogOut className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
