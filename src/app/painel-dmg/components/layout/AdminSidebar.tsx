
"use client";
import { useState } from "react";
import { 
  LayoutDashboard, Users, Music, Disc, FileText, 
  Globe, Radio, BarChart3, Megaphone, Settings, 
  ChevronDown, ChevronRight, Activity, Wallet, CreditCard, Receipt,
  Rocket, Scale, Layout, GraduationCap, FileSearch, PieChart
} from "lucide-react";

export function AdminSidebar({ activePage, onPageChange }: { activePage: string, onPageChange: (p: string) => void }) {
  const [openCats, setOpenCats] = useState<string[]>(['Principal', 'Artistas & Música']);

  const toggleCat = (cat: string) => {
    setOpenCats(prev => prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]);
  };

  const menu = [
    {
      title: 'Principal',
      items: [
        { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard /> },
        { id: 'activity', label: 'Atividade', icon: <Activity />, badge: '3' },
      ]
    },
    {
      title: 'Artistas & Música',
      items: [
        { id: 'artists', label: 'Artistas', icon: <Users /> },
        { id: 'catalog', label: 'Catálogo de Músicas', icon: <Music /> },
        { id: 'albums', label: 'Álbuns & EPs', icon: <Disc /> },
        { id: 'contracts', label: 'Contratos', icon: <FileText /> },
      ]
    },
    {
      title: 'Distribuição',
      items: [
        { id: 'distribution', label: 'Distribuição', icon: <Globe /> },
        { id: 'platforms', label: 'Plataformas', icon: <Radio /> },
        { id: 'releases', label: 'Lançamentos', icon: <Rocket /> },
      ]
    },
    {
      title: 'Financeiro',
      items: [
        { id: 'royalties', label: 'Royalties', icon: <Wallet /> },
        { id: 'payments', label: 'Pagamentos', icon: <CreditCard /> },
        { id: 'invoices', label: 'Notas Fiscais', icon: <Receipt /> },
      ]
    },
    {
      title: 'Ferramentas',
      items: [
        { id: 'analytics', label: 'Analytics', icon: <BarChart3 /> },
        { id: 'marketing', label: 'Marketing', icon: <Megaphone /> },
        { id: 'licenses', label: 'Licenciamento', icon: <Scale /> },
      ]
    },
    {
      title: 'Plataforma',
      items: [
        { id: 'site', label: 'Gerenciar Site', icon: <Layout /> },
        { id: 'hub', icon: <GraduationCap />, label: 'Artist Hub' },
        { id: 'reports', label: 'Relatórios', icon: <PieChart /> },
      ]
    },
    {
      title: 'Admin',
      items: [
        { id: 'users', label: 'Usuários Admin', icon: <Users /> },
        { id: 'settings', label: 'Configurações', icon: <Settings /> },
      ]
    }
  ];

  return (
    <aside className="admin-sidebar no-scrollbar">
      <nav className="py-6">
        {menu.map(cat => (
          <div key={cat.title} className="mb-2">
            <button 
              onClick={() => toggleCat(cat.title)}
              className="w-full flex items-center justify-between px-6 py-3 text-[9px] font-black uppercase text-white/20 tracking-[0.2em] hover:text-white/40 transition-colors"
            >
              {cat.title}
              {openCats.includes(cat.title) ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
            </button>
            {openCats.includes(cat.title) && (
              <div className="space-y-0.5">
                {cat.items.map(item => (
                  <button
                    key={item.id}
                    onClick={() => onPageChange(item.id)}
                    className={`w-full flex items-center gap-4 px-8 py-3 text-xs font-bold transition-all border-l-4 ${
                      activePage === item.id 
                        ? 'text-admin-gold border-admin-gold bg-admin-gold/10' 
                        : 'text-white/40 border-transparent hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="opacity-70 scale-90">{item.icon}</span>
                    {item.label}
                    {item.badge && <span className="ml-auto bg-admin-red text-white text-[8px] font-black px-2 py-0.5 rounded-full">{item.badge}</span>}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
      <div className="p-8 border-t border-white/5 bg-admin-text mt-10">
        <div className="text-[10px] text-white/20 leading-relaxed uppercase font-black tracking-widest">
          <strong className="text-white/40">Dresbach Records LTDA</strong><br />
          CNPJ 63.187.175/0001-70<br />
          Taquara, Rs Brasil
        </div>
      </div>
    </aside>
  );
}
