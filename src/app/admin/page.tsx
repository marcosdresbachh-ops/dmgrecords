'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  LayoutDashboard,
  Radio,
  Music,
  Calendar,
  Newspaper,
  MessageCircle,
  Megaphone,
  Users,
  BarChart2,
  Settings,
  FileText,
  Menu,
  Search,
  RefreshCw,
  Bell,
  Headphones,
  Music2,
  Server,
  HardDrive,
  Activity,
  ListPlus,
  Play,
  Pause,
  SkipBack,
  Square,
  Volume2,
  VolumeX,
  Volume1,
  CalendarClock,
  ListMusic,
  Link as LinkIcon,
  Copy,
  Eye,
  Download,
  ExternalLink,
  Globe,
  Upload,
  UploadCloud,
  Edit2,
  Trash2,
  Plus,
  Check,
  ShieldOff,
  UserPlus,
  Star,
  Clock,
  Share2,
  AlertCircle,
  Briefcase,
  DollarSign,
  Mic,
  Save,
  Send,
  Shield,
  Smartphone,
  Monitor,
  Tablet
} from 'lucide-react';
import { Sidebar } from '@/components/admin/Sidebar';
import { Topbar } from '@/components/admin/Topbar';
import { useToast } from "@/hooks/use-toast"
import { DashboardView } from '@/components/admin/views/Dashboard';
import { TransmissaoView } from '@/components/admin/views/Transmissao';
import { MusicasView } from '@/components/admin/views/Musicas';
import { ProgramacaoView } from '@/components/admin/views/Programacao';
import { NoticiasView } from '@/components/admin/views/Noticias';
import { ChatView } from '@/components/admin/views/Chat';
import { AnunciantesView } from '@/components/admin/views/Anunciantes';
import { EquipeView } from '@/components/admin/views/Equipe';
import { EstatisticasView } from '@/components/admin/views/Estatisticas';
import { ConfiguracoesView } from '@/components/admin/views/Configuracoes';
import { LogsView } from '@/components/admin/views/Logs';

// Helper function to create a toast
const showToast = (toast, description, variant = "default") => {
  toast({
    description,
    variant: variant === "destructive" ? "destructive" : "default",
  });
};


export default function AdminPage() {
  const [page, setPage] = useState('dashboard');
  const [apiData, setApiData] = useState(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { toast } = useToast();

  const handleNav = (pageId) => {
    setPage(pageId);
    if (window.innerWidth < 960) {
      setSidebarOpen(false);
    }
  };
  
  const showToastWrapper = (description, variant) => {
    showToast(toast, description, variant)
  }

  const fetchAPI = useCallback(async (showToastOnSuccess = false) => {
    try {
      const res = await fetch('/api/now-playing');
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const data = await res.json();
      setApiData(data);
      if (showToastOnSuccess) {
         showToastWrapper('Dados da API atualizados com sucesso!', 'default');
      }
    } catch (e) {
      console.error('Erro ao buscar API:', e);
      showToastWrapper('Não foi possível conectar à API de streaming.', 'destructive');
    }
  }, [showToastWrapper]);

  useEffect(() => {
    fetchAPI();
    const interval = setInterval(() => fetchAPI(), 30000);
    return () => clearInterval(interval);
  }, [fetchAPI]);
  
  const renderPage = () => {
    switch (page) {
      case 'dashboard':
        return <DashboardView apiData={apiData} fetchAPI={fetchAPI} handleNav={handleNav} showToast={showToastWrapper}/>;
      case 'transmissao':
        return <TransmissaoView apiData={apiData} fetchAPI={fetchAPI} showToast={showToastWrapper} />;
      case 'musicas':
        return <MusicasView showToast={showToastWrapper}/>;
      case 'programacao':
        return <ProgramacaoView showToast={showToastWrapper}/>;
      case 'noticias':
        return <NoticiasView showToast={showToastWrapper}/>;
      case 'chat':
        return <ChatView showToast={showToastWrapper}/>;
      case 'anunciantes':
        return <AnunciantesView showToast={showToastWrapper}/>;
      case 'equipe':
        return <EquipeView showToast={showToastWrapper}/>;
      case 'estatisticas':
        return <EstatisticasView apiData={apiData} />;
      case 'configuracoes':
        return <ConfiguracoesView showToast={showToastWrapper}/>;
      case 'logs':
        return <LogsView />;
      default:
        return <DashboardView apiData={apiData} fetchAPI={fetchAPI} handleNav={handleNav} showToast={showToastWrapper}/>;
    }
  }

  return (
    <>
        <button className="sb-toggle" onClick={() => setSidebarOpen(!isSidebarOpen)}>
            <Menu style={{width:'17px', height:'17px'}}/>
        </button>
        <Sidebar currentPage={page} handleNav={handleNav} apiData={apiData} isOpen={isSidebarOpen} />
        <div className="topbar">
            <Topbar currentPage={page} fetchAPI={fetchAPI} handleNav={handleNav}/>
        </div>
        <main className="main">
            {renderPage()}
        </main>
    </>
  );
}
