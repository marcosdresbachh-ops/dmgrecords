"use client";

import { LayoutDashboard, PlusCircle, Library, Sparkles, LogOut, User } from "lucide-react";

interface DashboardLayoutProps {
  user: any;
  activePage: string;
  onPageChange: (p: string) => void;
  onLogout: () => void;
  children: React.ReactNode;
}

export function DashboardLayout({ user, activePage, onPageChange, onLogout, children }: DashboardLayoutProps) {
  const menu = [
    { id: "dashboard", label: "Visão Geral", icon: <LayoutDashboard className="h-4 w-4" /> },
    { id: "register", label: "Registrar Obra", icon: <PlusCircle className="h-4 w-4" /> },
    { id: "catalog", label: "Meu Catálogo", icon: <Library className="h-4 w-4" /> },
    { id: "ai", label: "Hub AI Assistant", icon: <Sparkles className="h-4 w-4" /> },
  ];

  return (
    <div className="container mx-auto px-4 pb-20">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full lg:w-72 shrink-0">
          <div className="bg-zinc-950 border border-white/10 p-6 space-y-8 sticky top-36">
            <div className="flex items-center gap-4 p-4 bg-primary/5 border border-primary/20">
              <div className="w-12 h-12 bg-primary flex items-center justify-center font-black text-white text-xl">
                {(user.artistName || user.firstName)?.[0]?.toUpperCase()}
              </div>
              <div className="overflow-hidden">
                <p className="text-sm font-black italic uppercase tracking-tighter text-white truncate">{user.artistName || user.firstName}</p>
                <p className="text-[10px] font-bold text-primary uppercase tracking-widest">{user.role}</p>
              </div>
            </div>

            <nav className="space-y-2">
              {menu.map(item => (
                <button
                  key={item.id}
                  onClick={() => onPageChange(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-[10px] font-black uppercase tracking-widest transition-all ${
                    activePage === item.id 
                      ? "bg-primary text-white" 
                      : "text-zinc-500 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.icon} {item.label}
                </button>
              ))}
            </nav>

            <div className="pt-8 border-t border-white/10">
              <button 
                onClick={onLogout}
                className="w-full flex items-center gap-3 px-4 py-3 text-[10px] font-black uppercase tracking-widest text-zinc-600 hover:text-primary transition-all"
              >
                <LogOut className="h-4 w-4" /> Sair do Hub
              </button>
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <section className="flex-1 bg-zinc-950 border border-white/10 p-8 min-h-[600px]">
          {children}
        </section>
      </div>
    </div>
  );
}
