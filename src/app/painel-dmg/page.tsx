
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { toast } from "@/hooks/use-toast";
import "./base.css";
import "./login.css";

// Layout
import { AdminHeader } from "./components/layout/AdminHeader";
import { AdminSidebar } from "./components/layout/AdminSidebar";

// API Bridge
import { 
  getAdminStats, 
  getAdminArtists, 
  getAdminTracks, 
  createAdminArtist, 
  createAdminTrack,
  getAdminActivity,
  getAdminRoyalties,
  getAdminSettings
} from "@/app/actions/admin";

// Modais UI
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Páginas
import { DashboardPage } from "./components/pages/DashboardPage/DashboardPage";
import { ActivityPage } from "./components/pages/ActivityPage/ActivityPage";
import { ArtistsPage } from "./components/pages/ArtistsPage/ArtistsPage";
import { CatalogPage } from "./components/pages/CatalogPage/CatalogPage";
import { AlbumsPage } from "./components/pages/AlbumsPage/AlbumsPage";
import { ContractsPage } from "./components/pages/ContractsPage/ContractsPage";
import { DistributionPage } from "./components/pages/DistributionPage/DistributionPage";
import { PlatformsPage } from "./components/pages/PlatformsPage/PlatformsPage";
import { ReleasesPage } from "./components/pages/ReleasesPage/ReleasesPage";
import { RoyaltiesPage } from "./components/pages/RoyaltiesPage/RoyaltiesPage";
import { PaymentsPage } from "./components/pages/PaymentsPage/PaymentsPage";
import { InvoicesPage } from "./components/pages/InvoicesPage/InvoicesPage";
import { AnalyticsPage } from "./components/pages/AnalyticsPage/AnalyticsPage";
import { MarketingPage } from "./components/pages/MarketingPage/MarketingPage";
import { LicensesPage } from "./components/pages/LicensesPage/LicensesPage";
import { SitePage } from "./components/pages/SitePage/SitePage";
import { HubPage } from "./components/pages/HubPage/HubPage";
import { ReportsPage } from "./components/pages/ReportsPage/ReportsPage";
import { UsersPage } from "./components/pages/UsersPage/UsersPage";
import { SettingsPage } from "./components/pages/SettingsPage/SettingsPage";

export default function PainelDmgPage() {
  const [hydrated, setHydrated] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ user: "", pass: "" });
  const [activePage, setActivePage] = useState('dashboard');
  const [modal, setModal] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  
  // Estados de Dados do Backend
  const [data, setData] = useState({
    artists: [] as any[],
    tracks: [] as any[],
    stats: {} as any,
    activity: [] as any[],
    royalties: {} as any,
    settings: {} as any
  });

  const loadData = async () => {
    setLoading(true);
    try {
      const [artists, tracks, stats, activity, royalties, settings] = await Promise.all([
        getAdminArtists(),
        getAdminTracks(),
        getAdminStats(),
        getAdminActivity(),
        getAdminRoyalties(),
        getAdminSettings()
      ]);
      
      setData({ 
        artists: artists || [], 
        tracks: tracks || [], 
        stats: stats || {},
        activity: activity || [],
        royalties: royalties || {},
        settings: settings || {}
      });
    } catch (e) {
      toast({ title: "Erro de Conexão", description: "O motor backend DMG não responde.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setHydrated(true);
    const auth = localStorage.getItem('dr_admin_auth');
    if (auth === 'true') {
      setIsLoggedIn(true);
      loadData();
    }
  }, []);

  if (!hydrated) return null;

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (loginForm.user.toLowerCase() === "marcos dresbach" && loginForm.pass === "Ma596220@") {
      setIsLoggedIn(true);
      localStorage.setItem('dr_admin_auth', 'true');
      loadData();
      toast({ title: "Acesso Concedido", description: "Backend sincronizado com sucesso." });
    } else {
      toast({ title: "Erro de Acesso", description: "Identidade ou chave incorreta.", variant: "destructive" });
    }
  }

  function handleLogout() {
    setIsLoggedIn(false);
    localStorage.removeItem('dr_admin_auth');
    toast({ title: "Sessão Encerrada", description: "Você saiu do sistema." });
  }

  const openModal = (type: string, item: any = null) => {
    setSelectedItem(item);
    setModal(type);
  };

  const handleSaveArtist = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const payload = {
      name: formData.get("name"),
      genre: formData.get("genre"),
      email: formData.get("email"),
      country: formData.get("country"),
      role: formData.get("role") || 'Artista',
      status: 'active'
    };

    const result = await createAdminArtist(payload);
    if (result) {
      toast({ title: "Sucesso", description: "Artista salvo no backend." });
      setModal(null);
      loadData();
    }
  };

  const handleSaveTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const payload = {
      title: formData.get("title"),
      artist: formData.get("artist"),
      genre: formData.get("genre"),
      isrc: formData.get("isrc"),
      status: 'pending'
    };

    const result = await createAdminTrack(payload);
    if (result) {
      toast({ title: "Obra Registrada", description: "Track enviada ao backend." });
      setModal(null);
      loadData();
    }
  };

  const renderActivePage = () => {
    const props = { openModal, data, loadData, loading };
    switch (activePage) {
      case 'dashboard': return <DashboardPage {...props} />;
      case 'activity': return <ActivityPage {...props} />;
      case 'artists': return <ArtistsPage {...props} />;
      case 'catalog': return <CatalogPage {...props} />;
      case 'albums': return <AlbumsPage {...props} />;
      case 'contracts': return <ContractsPage {...props} />;
      case 'distribution': return <DistributionPage {...props} />;
      case 'platforms': return <PlatformsPage {...props} />;
      case 'releases': return <ReleasesPage {...props} />;
      case 'royalties': return <RoyaltiesPage {...props} />;
      case 'payments': return <PaymentsPage {...props} />;
      case 'invoices': return <InvoicesPage {...props} />;
      case 'analytics': return <AnalyticsPage {...props} />;
      case 'marketing': return <MarketingPage {...props} />;
      case 'licenses': return <LicensesPage {...props} />;
      case 'site': return <SitePage {...props} />;
      case 'hub': return <HubPage {...props} />;
      case 'reports': return <ReportsPage {...props} />;
      case 'users': return <UsersPage {...props} />;
      case 'settings': return <SettingsPage {...props} />;
      default: return <DashboardPage {...props} />;
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="login-screen admin-body">
        <div className="login-card">
          <div className="text-center mb-10">
            <Image src="/logodmg.png" alt="DMG Logo" width={180} height={60} className="mx-auto mb-8 object-contain" priority />
            <h1 className="text-3xl font-black italic uppercase tracking-tighter text-zinc-900">Comando Admin</h1>
            <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mt-2">Dresbach Records Ecosystem</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label className="text-[10px] font-black uppercase ml-4">Identidade</Label>
              <Input value={loginForm.user} onChange={e => setLoginForm({...loginForm, user: e.target.value})} placeholder="nome de usuário" className="login-input" required />
            </div>
            <div className="space-y-2">
              <Label className="text-[10px] font-black uppercase ml-4">Chave</Label>
              <Input type="password" value={loginForm.pass} onChange={e => setLoginForm({...loginForm, pass: e.target.value})} placeholder="••••••••" className="login-input" required />
            </div>
            <Button type="submit" className="w-full h-16 bg-primary text-white font-black uppercase italic shadow-xl">INGRESSAR NO SISTEMA</Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-body min-h-screen bg-white">
      <AdminHeader onLogout={handleLogout} />
      <AdminSidebar activePage={activePage} onPageChange={setActivePage} />
      <main className="admin-main" style={{ marginLeft: 'var(--admin-sidebar-w)', paddingTop: 'var(--admin-topbar-h)' }}>
        <div className="p-10 pb-32 max-w-[1600px] mx-auto">
          {loading && (
            <div className="fixed top-20 right-10 z-50">
              <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
          )}
          {renderActivePage()}
        </div>
      </main>

      <Dialog open={!!modal} onOpenChange={() => setModal(null)}>
        <DialogContent className="bg-white text-zinc-900 max-w-2xl rounded-[32px] border-zinc-200">
          {modal === 'addArtist' && (
            <form onSubmit={handleSaveArtist}>
              <DialogHeader>
                <DialogTitle className="text-2xl font-black italic uppercase tracking-tighter text-primary">Novo Artista DMG</DialogTitle>
                <DialogDescription className="text-[10px] font-black uppercase">Processamento real via API Engine.</DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-6 py-6">
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase">Nome Completo</Label>
                  <Input name="name" required className="rounded-xl bg-zinc-50 border-zinc-200" />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase">Gênero</Label>
                  <Input name="genre" placeholder="Ex: Trap, R&B" className="rounded-xl bg-zinc-50 border-zinc-200" />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase">E-mail Profissional</Label>
                  <Input name="email" type="email" className="rounded-xl bg-zinc-50 border-zinc-200" />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase">País</Label>
                  <Input name="country" defaultValue="Brasil" className="rounded-xl bg-zinc-50 border-zinc-200" />
                </div>
              </div>
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setModal(null)} className="rounded-xl text-[10px] font-black uppercase">Cancelar</Button>
                <Button type="submit" className="bg-primary text-white rounded-xl text-[10px] font-black uppercase px-8">Salvar no Banco</Button>
              </DialogFooter>
            </form>
          )}

          {modal === 'addTrack' && (
            <form onSubmit={handleSaveTrack}>
              <DialogHeader>
                <DialogTitle className="text-2xl font-black italic uppercase tracking-tighter text-primary">Registrar Obra</DialogTitle>
                <DialogDescription className="text-[10px] font-black uppercase">Persistência direta no catálogo oficial.</DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-6 py-6">
                <div className="col-span-2 space-y-2">
                  <Label className="text-[10px] font-black uppercase">Título da Faixa</Label>
                  <Input name="title" required className="rounded-xl bg-zinc-50 border-zinc-200" />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase">Artista Principal</Label>
                  <Select name="artist" defaultValue={data.artists[0]?.name || "Vini Amaral"}>
                    <SelectTrigger className="rounded-xl bg-zinc-50 border-zinc-200">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white text-zinc-900">
                      {data.artists.map((a: any) => (
                        <SelectItem key={a.id} value={a.name}>{a.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase">ISRC</Label>
                  <Input name="isrc" placeholder="BR-XXX-25-00001" className="rounded-xl bg-zinc-50 border-zinc-200 font-mono" />
                </div>
              </div>
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setModal(null)} className="rounded-xl text-[10px] font-black uppercase">Cancelar</Button>
                <Button type="submit" className="bg-primary text-white rounded-xl text-[10px] font-black uppercase px-8">Confirmar API</Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
