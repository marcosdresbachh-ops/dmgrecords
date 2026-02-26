
"use client";

import { useState } from "react";
import { 
  LayoutDashboard, PlusCircle, Library, Sparkles, LogOut, 
  User, DollarSign, FileText, BarChart3, Globe, GraduationCap, 
  MessageSquare, Search, Bell, HelpCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  user: any;
  activePage: string;
  onPageChange: (p: string) => void;
  onLogout: () => void;
  children: React.ReactNode;
}

export function DashboardLayout({ user, activePage, onPageChange, onLogout, children }: DashboardLayoutProps) {
  const [notifOpen, setNotifOpen] = useState(false);

  const menu = [
    { sec: "Principal", items: [
      { id: "dashboard", label: "Dashboard", icon: <LayoutDashboard className="h-4 w-4" /> },
      { id: "profile", label: "Meu Perfil", icon: <User className="h-4 w-4" /> },
    ]},
    { sec: "Obras", items: [
      { id: "register", label: "Registrar Obra", icon: <PlusCircle className="h-4 w-4" /> },
      { id: "catalog", label: "Meu Catálogo", icon: <Library className="h-4 w-4" /> },
    ]},
    { sec: "Financeiro", items: [
      { id: "royalties", label: "Royalties", icon: <DollarSign className="h-4 w-4" /> },
      { id: "licensing", label: "Licenciamento", icon: <FileText className="h-4 w-4" /> },
    ]},
    { sec: "Ferramentas", items: [
      { id: "ai", label: "Hub AI Assistant", icon: <Sparkles className="h-4 w-4" /> },
      { id: "documents", label: "Docs & Legal", icon: <FileText className="h-4 w-4" /> },
      { id: "analytics", label: "Analytics", icon: <BarChart3 className="h-4 w-4" /> },
      { id: "distribution", label: "Distribuição", icon: <Globe className="h-4 w-4" /> },
    ]},
    { sec: "Educação & Suporte", items: [
      { id: "education", label: "Academia DMG", icon: <GraduationCap className="h-4 w-4" /> },
      { id: "support", label: "Suporte", icon: <MessageSquare className="h-4 w-4" />, badge: 2 },
    ]},
  ];

  return (
    <div className="flex min-h-screen bg-black">
      {/* Sidebar */}
      <aside className="w-64 fixed top-0 left-0 h-full bg-zinc-950 border-r border-white/5 z-50 overflow-y-auto">
        <div className="p-6 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center font-black text-primary text-xl italic">
              ♪
            </div>
            <div>
              <h2 className="text-sm font-black uppercase tracking-tighter italic text-white">DMG Hub</h2>
              <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Artist Area</p>
            </div>
          </div>
        </div>

        <div className="p-4 border-b border-white/5">
          <div className="flex items-center gap-3 p-3 bg-primary/5 border border-primary/20 rounded-xl">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center font-black text-white text-lg">
              {(user.artistName || user.firstName)?.[0]?.toUpperCase()}
            </div>
            <div className="overflow-hidden">
              <p className="text-xs font-black italic uppercase tracking-tighter text-white truncate">{user.artistName || user.firstName}</p>
              <p className="text-[9px] font-bold text-primary uppercase tracking-widest">{user.role}</p>
            </div>
          </div>
        </div>

        <nav className="p-4 space-y-6">
          {menu.map(section => (
            <div key={section.sec} className="space-y-1">
              <p className="px-4 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-600 mb-2">{section.sec}</p>
              {section.items.map(item => (
                <button
                  key={item.id}
                  onClick={() => onPageChange(item.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider transition-all rounded-lg",
                    activePage === item.id 
                      ? "bg-primary text-white shadow-lg shadow-primary/20" 
                      : "text-zinc-500 hover:bg-white/5 hover:text-white"
                  )}
                >
                  {item.icon}
                  {item.label}
                  {item.badge && <span className="ml-auto bg-primary text-[9px] text-white px-1.5 py-0.5 rounded-full">{item.badge}</span>}
                </button>
              ))}
            </div>
          ))}
        </nav>

        <div className="p-4 mt-auto">
          <button 
            onClick={onLogout}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 text-[10px] font-black uppercase tracking-widest text-zinc-600 border border-white/5 hover:border-primary/40 hover:text-primary transition-all rounded-xl"
          >
            <LogOut className="h-4 w-4" /> Sair do Hub
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 ml-64 flex flex-col">
        {/* Topbar */}
        <header className="h-16 bg-black/80 backdrop-blur-xl border-b border-white/5 sticky top-0 z-40 flex items-center justify-between px-8">
          <div className="relative w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-500" />
            <Input 
              className="bg-zinc-900/50 border-white/5 pl-10 h-10 text-xs rounded-xl focus:border-primary transition-all" 
              placeholder="Buscar obras, licenças, faturas..." 
            />
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <button 
                onClick={() => setNotifOpen(!notifOpen)}
                className="w-10 h-10 rounded-xl border border-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:border-primary/40 transition-all relative"
              >
                <Bell className="h-4 w-4" />
                <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-primary rounded-full border-2 border-black" />
              </button>
              {notifOpen && (
                <div className="absolute top-full right-0 mt-3 w-80 bg-zinc-950 border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="p-4 border-b border-white/5 flex items-center justify-between">
                    <h4 className="text-xs font-black uppercase tracking-widest text-white">Notificações</h4>
                    <button className="text-[10px] text-primary font-bold hover:underline">Limpar tudo</button>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {[
                      { t: "Pagamento Recebido", b: "Royalties de Março/2025 foram creditados.", time: "2h atrás", u: true },
                      { t: "Nova Licença Solicitada", b: "A FilmCo deseja licenciar 'Blue Horizon'.", time: "Ontem", u: true },
                    ].map((n, i) => (
                      <div key={i} className={cn("p-4 border-b border-white/5 cursor-pointer hover:bg-white/5 transition-all", n.u && "bg-primary/5 border-l-2 border-l-primary")}>
                        <p className="text-xs font-bold text-white mb-1">{n.t}</p>
                        <p className="text-[10px] text-zinc-500 mb-2">{n.b}</p>
                        <p className="text-[9px] text-zinc-600 font-bold uppercase">{n.time}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <button 
              onClick={() => onPageChange("support")}
              className="w-10 h-10 rounded-xl border border-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:border-primary/40 transition-all"
            >
              <HelpCircle className="h-4 w-4" />
            </button>
            <button 
              onClick={() => onPageChange("profile")}
              className="w-10 h-10 rounded-xl border border-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:border-primary/40 transition-all"
            >
              <User className="h-4 w-4" />
            </button>
          </div>
        </header>

        <main className="p-8 pb-20 max-w-7xl">
          {children}
        </main>
      </div>
    </div>
  );
}
