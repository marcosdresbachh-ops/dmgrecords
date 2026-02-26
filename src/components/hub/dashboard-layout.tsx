
"use client";

import { useState } from "react";
import { 
  LayoutDashboard, PlusCircle, Library, Sparkles, LogOut, 
  User, DollarSign, FileText, BarChart3, Globe, GraduationCap, 
  MessageSquare, Search, Bell, HelpCircle, ChevronDown, ChevronRight,
  Music, ShieldCheck, CreditCard, BookOpen, Radio, PenTool, Layout, FileSearch,
  Star, Send
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
  const [openSections, setOpenSections] = useState<string[]>(["Obras", "Principal"]);

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
        { id: "public-profile", label: "Página Pública", icon: <Layout className="h-3.5 w-3.5" /> },
        { id: "profile", label: "Dados da Conta", icon: <User className="h-3.5 w-3.5" /> },
        { id: "bio", label: "Minha Bio", icon: <PenTool className="h-3.5 w-3.5" /> },
      ]
    },
    { 
      sec: "Obras", 
      icon: <Music className="h-4 w-4" />,
      items: [
        { id: "distribution", label: "Distribuir Música", icon: <Send className="h-3.5 w-3.5" />, badge: "NEW" },
        { id: "register", label: "Registrar Obra", icon: <PlusCircle className="h-3.5 w-3.5" /> },
        { id: "catalog", label: "Meu Catálogo", icon: <Library className="h-3.5 w-3.5" /> },
      ]
    },
    { 
      sec: "ASCAP Global", 
      icon: <Star className="h-4 w-4" />,
      items: [
        { id: "ascap", label: "Minha Filiação", icon: <ShieldCheck className="h-3.5 w-3.5" /> },
        { id: "ascap-benefits", label: "Vantagens", icon: <Star className="h-3.5 w-3.5" /> },
      ]
    },
    { 
      sec: "Mídia", 
      icon: <Radio className="h-4 w-4" />,
      items: [
        { id: "webradio", label: "Web Rádio", icon: <Radio className="h-3.5 w-3.5" /> },
      ]
    },
    { 
      sec: "Financeiro", 
      icon: <DollarSign className="h-4 w-4" />,
      items: [
        { id: "royalties", label: "Royalties", icon: <CreditCard className="h-3.5 w-3.5" /> },
        { id: "licensing", label: "Licenciamento", icon: <ShieldCheck className="h-3.5 w-3.5" /> },
        { id: "tax", label: "Tax & IRS Forms", icon: <FileSearch className="h-3.5 w-3.5" /> },
      ]
    },
    { 
      sec: "Ferramentas", 
      icon: <Sparkles className="h-4 w-4" />,
      items: [
        { id: "ai", label: "AI Assistant", icon: <Sparkles className="h-3.5 w-3.5" /> },
        { id: "documents", label: "Docs & Legal", icon: <FileText className="h-3.5 w-3.5" /> },
        { id: "analytics", label: "Analytics", icon: <BarChart3 className="h-3.5 w-3.5" /> },
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

  const isAscapActive = user.ascapStatus === "active";

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-zinc-50 text-zinc-900">
      {/* Header Industrial */}
      <header className="h-14 border-b flex items-center justify-between px-6 z-50 flex-shrink-0 bg-white border-zinc-200">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center font-black text-primary text-lg italic">
            ♪
          </div>
          <h2 className="text-sm font-black uppercase tracking-tighter italic text-zinc-900">DMG ARTIST HUB</h2>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 border rounded-full bg-zinc-50 border-zinc-200">
              <div className="w-5 h-5 bg-primary rounded-md flex items-center justify-center font-black text-white text-[10px]">
                {(user.artistName || user.firstName)?.[0]?.toUpperCase()}
              </div>
              <span className="text-[10px] font-black italic uppercase truncate max-w-[100px] text-zinc-900">
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
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar Industrial */}
        <aside className="w-56 border-r flex flex-col z-30 flex-shrink-0 bg-white border-zinc-200 shadow-xl shadow-zinc-200/50">
          <div className="h-12 border-b flex items-center px-4 border-zinc-100">
             <div className="relative w-full">
                <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-3 w-3 text-zinc-400" />
                <Input 
                  className="border-none pl-7 h-8 text-[10px] uppercase font-bold tracking-widest focus-visible:ring-0 bg-zinc-100 text-zinc-900 placeholder:text-zinc-400" 
                  placeholder="Buscar..." 
                />
             </div>
          </div>
          <nav className="flex-1 overflow-y-auto no-scrollbar p-3 space-y-2">
            {menu.map(section => (
              <div key={section.sec} className="space-y-1">
                <button
                  onClick={() => toggleSection(section.sec)}
                  className="w-full flex items-center justify-between px-3 py-2 text-[10px] font-black uppercase tracking-[0.2em] transition-colors group text-zinc-400 hover:text-zinc-600"
                >
                  <div className="flex items-center gap-2">
                    {section.icon}
                    <span>{section.sec}</span>
                  </div>
                  {openSections.includes(section.sec) ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
                </button>
                
                {openSections.includes(section.sec) && (
                  <div className="space-y-0.5 ml-2 border-l pl-2 animate-in slide-in-from-top-1 duration-200 border-zinc-100">
                    {section.items.map(item => (
                      <button
                        key={item.id}
                        onClick={() => onPageChange(item.id)}
                        className={cn(
                          "w-full flex items-center gap-2.5 px-3 py-2 text-[11px] font-bold uppercase tracking-wider transition-all rounded-lg",
                          activePage === item.id 
                            ? "bg-primary/5 text-primary border border-primary/10 shadow-sm" 
                            : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900"
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

          <div className="p-4 border-t border-zinc-100 bg-white">
            <div className="flex items-center justify-between p-3 rounded-xl border border-zinc-200 bg-zinc-50 transition-all">
              <div className="flex items-center gap-2">
                <div className={cn("w-1.5 h-1.5 rounded-full animate-pulse", isAscapActive ? "bg-accent" : "bg-primary")} />
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">ASCAP</span>
              </div>
              <span className="text-[10px] font-mono font-bold text-zinc-600">
                {user.ipi || "PROCESSANDO"}
              </span>
            </div>
          </div>
        </aside>

        <main className="flex-1 overflow-y-auto no-scrollbar relative bg-zinc-50">
          <div className={cn(
            "p-8 pb-20 max-w-6xl mx-auto",
            (activePage === "distribution" || activePage === "distribute") && "max-w-none p-0"
          )}>
            {children}
          </div>
        </main>
      </div>

      <footer className="h-10 border-t flex items-center justify-between px-6 z-50 flex-shrink-0 text-[9px] font-black uppercase tracking-widest bg-white border-zinc-200 text-zinc-400 shadow-inner">
        <div className="flex items-center gap-4">
          <p>© 2025 DMG RECORDS — ÁREA RESTRITA</p>
          <span className="w-1 h-1 bg-zinc-200 rounded-full" />
          <p className="text-zinc-300">DRESBACH RECORDS LTDA</p>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-zinc-600 transition-colors">TERMOS DE USO</a>
          <a href="#" className="hover:text-zinc-600 transition-colors">PRIVACIDADE</a>
          <a href="#" className="hover:text-zinc-600 transition-colors text-primary">SUPORTE TÉCNICO</a>
        </div>
      </footer>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
