
"use client";

import { useState } from "react";
import { 
  LayoutDashboard, PlusCircle, Library, Sparkles, LogOut, 
  User, DollarSign, FileText, BarChart3, Globe, GraduationCap, 
  MessageSquare, Search, Bell, HelpCircle, ChevronDown, ChevronRight,
  Music, ShieldCheck, CreditCard, BookOpen
} from "lucide-react";
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
  // Inicializa o estado vazio para que todos os dropdowns comecem fechados
  const [openSections, setOpenSections] = useState<string[]>([]);
  const [notifOpen, setNotifOpen] = useState(false);

  const toggleSection = (section: string) => {
    setOpenSections(prev => 
      prev.includes(section) ? prev.filter(s => s !== section) : [...prev, section]
    );
  };

  const menu = [
    { 
      sec: "Principal", 
      icon: <LayoutDashboard className="h-4 w-4" />,
      items: [
        { id: "dashboard", label: "Dashboard", icon: <LayoutDashboard className="h-3.5 w-3.5" /> },
        { id: "profile", label: "Meu Perfil", icon: <User className="h-3.5 w-3.5" /> },
      ]
    },
    { 
      sec: "Obras", 
      icon: <Music className="h-4 w-4" />,
      items: [
        { id: "register", label: "Registrar Obra", icon: <PlusCircle className="h-3.5 w-3.5" /> },
        { id: "catalog", label: "Meu Catálogo", icon: <Library className="h-3.5 w-3.5" /> },
      ]
    },
    { 
      sec: "Financeiro", 
      icon: <DollarSign className="h-4 w-4" />,
      items: [
        { id: "royalties", label: "Royalties", icon: <CreditCard className="h-3.5 w-3.5" /> },
        { id: "licensing", label: "Licenciamento", icon: <ShieldCheck className="h-3.5 w-3.5" /> },
      ]
    },
    { 
      sec: "Ferramentas", 
      icon: <Sparkles className="h-4 w-4" />,
      items: [
        { id: "ai", label: "AI Assistant", icon: <Sparkles className="h-3.5 w-3.5" /> },
        { id: "documents", label: "Docs & Legal", icon: <FileText className="h-3.5 w-3.5" /> },
        { id: "analytics", label: "Analytics", icon: <BarChart3 className="h-3.5 w-3.5" /> },
        { id: "distribution", label: "Distribuição", icon: <Globe className="h-3.5 w-3.5" /> },
      ]
    },
    { 
      sec: "Educação & Suporte", 
      icon: <GraduationCap className="h-4 w-4" />,
      items: [
        { id: "education", label: "Academia DMG", icon: <BookOpen className="h-3.5 w-3.5" /> },
        { id: "support", label: "Suporte", icon: <MessageSquare className="h-3.5 w-3.5" />, badge: 2 },
      ]
    },
  ];

  return (
    <div className="flex flex-col h-screen bg-black overflow-hidden">
      {/* Header Fixo 1: Branding */}
      <header className="h-14 bg-zinc-950 border-b border-white/5 flex items-center justify-between px-6 z-50 flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center font-black text-primary text-lg italic">
            ♪
          </div>
          <h2 className="text-sm font-black uppercase tracking-tighter italic text-white">DMG ARTIST HUB</h2>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/5 border border-primary/20 rounded-full">
            <div className="w-5 h-5 bg-primary rounded-md flex items-center justify-center font-black text-white text-[10px]">
              {(user.artistName || user.firstName)?.[0]?.toUpperCase()}
            </div>
            <span className="text-[10px] font-black italic uppercase text-white truncate max-w-[100px]">
              {user.artistName || user.firstName}
            </span>
          </div>
          <button 
            onClick={onLogout}
            className="text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-primary transition-colors flex items-center gap-2"
          >
            Sair <LogOut className="h-3 w-3" />
          </button>
        </div>
      </header>

      {/* Header Fixo 2: Sub-header com Busca Centralizada */}
      <div className="h-12 bg-black border-b border-white/5 flex items-center px-6 z-40 flex-shrink-0">
        <div className="hidden md:block flex-1" />

        <div className="relative w-full max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-600" />
          <Input 
            className="bg-zinc-900/50 border-white/5 pl-10 h-8 text-[11px] rounded-full focus:border-primary/50 transition-all placeholder:text-zinc-700 w-full" 
            placeholder="BUSCAR OBRAS, LICENÇAS, DOCUMENTOS..." 
          />
        </div>

        <div className="flex-1 flex justify-end items-center gap-2">
          <div className="relative">
            <button 
              onClick={() => setNotifOpen(!notifOpen)}
              className="w-8 h-8 rounded-lg border border-white/5 flex items-center justify-center text-zinc-500 hover:text-white transition-all relative"
            >
              <Bell className="h-3.5 w-3.5" />
              <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-primary rounded-full" />
            </button>
            {notifOpen && (
              <div className="absolute top-full right-0 mt-2 w-72 bg-zinc-950 border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50">
                <div className="p-3 border-b border-white/5 bg-white/5 flex items-center justify-between">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-white">Notificações</h4>
                  <button className="text-[9px] text-primary font-bold">Limpar</button>
                </div>
                <div className="max-h-64 overflow-y-auto no-scrollbar">
                  {[
                    { t: "Pagamento Recebido", b: "Royalties de Março creditados.", time: "2h", u: true },
                    { t: "Nova Licença", b: "Pedido para 'Blue Horizon'.", time: "Ontem", u: true },
                  ].map((n, i) => (
                    <div key={i} className={cn("p-3 border-b border-white/5 hover:bg-white/5 transition-all", n.u && "border-l-2 border-l-primary bg-primary/5")}>
                      <p className="text-[11px] font-bold text-white mb-0.5">{n.t}</p>
                      <p className="text-[9px] text-zinc-500">{n.b}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <button onClick={() => onPageChange("support")} className="w-8 h-8 rounded-lg border border-white/5 flex items-center justify-center text-zinc-500 hover:text-white transition-all">
            <HelpCircle className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar posicionada entre Cabeçalho e Rodapé */}
        <aside className="w-56 bg-zinc-950 border-r border-white/5 flex flex-col z-30 flex-shrink-0">
          <nav className="flex-1 overflow-y-auto no-scrollbar p-3 space-y-2">
            {menu.map(section => (
              <div key={section.sec} className="space-y-1">
                <button
                  onClick={() => toggleSection(section.sec)}
                  className="w-full flex items-center justify-between px-3 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600 hover:text-zinc-400 transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    {section.icon}
                    <span>{section.sec}</span>
                  </div>
                  {openSections.includes(section.sec) ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
                </button>
                
                {openSections.includes(section.sec) && (
                  <div className="space-y-0.5 ml-2 border-l border-white/5 pl-2 animate-in slide-in-from-top-1 duration-200">
                    {section.items.map(item => (
                      <button
                        key={item.id}
                        onClick={() => onPageChange(item.id)}
                        className={cn(
                          "w-full flex items-center gap-2.5 px-3 py-2 text-[11px] font-bold uppercase tracking-wider transition-all rounded-lg",
                          activePage === item.id 
                            ? "bg-primary/10 text-primary border border-primary/20" 
                            : "text-zinc-500 hover:bg-white/5 hover:text-zinc-300"
                        )}
                      >
                        {item.icon}
                        {item.label}
                        {item.badge && <span className="ml-auto bg-primary text-[8px] text-white px-1.5 py-0.5 rounded-full">{item.badge}</span>}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="p-3 border-t border-white/5 bg-zinc-950">
            <div className="p-3 bg-zinc-900/50 rounded-xl space-y-2">
              <p className="text-[9px] font-black uppercase text-zinc-600 tracking-widest">Plano Atual</p>
              <p className="text-[10px] font-black text-primary italic">DMG PREMIUM ARTIST</p>
              <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-3/4" />
              </div>
            </div>
          </div>
        </aside>

        {/* Área de Conteúdo principal */}
        <main className="flex-1 overflow-y-auto no-scrollbar bg-black relative">
          <div className="p-8 pb-20 max-w-6xl mx-auto">
            {children}
          </div>
        </main>
      </div>

      {/* Rodapé Fixo na base de todo o app */}
      <footer className="h-10 bg-zinc-950 border-t border-white/5 flex items-center justify-between px-6 z-50 flex-shrink-0 text-[9px] font-black uppercase tracking-widest text-zinc-700">
        <div className="flex items-center gap-4">
          <p>© 2025 DMG RECORDS — ÁREA RESTRITA</p>
          <span className="w-1 h-1 bg-zinc-800 rounded-full" />
          <p className="text-zinc-800">DRESBACH RECORDS LTDA</p>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-zinc-400 transition-colors">TERMOS DE USO</a>
          <a href="#" className="hover:text-zinc-400 transition-colors">PRIVACIDADE</a>
          <a href="#" className="hover:text-zinc-400 transition-colors text-primary">SUPORTE TÉCNICO</a>
        </div>
      </footer>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
