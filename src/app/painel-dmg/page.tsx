
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { toast } from "@/hooks/use-toast";
import "./base.css";
import "./login.css";

// Layout
import { AdminHeader } from "./components/layout/AdminHeader";
import { AdminSidebar } from "./components/layout/AdminSidebar";

// Modais UI
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
import { AdminDB } from "./lib/admin-db";

export default function PainelDmgPage() {
  const [hydrated, setHydrated] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ user: "", pass: "" });
  const [activePage, setActivePage] = useState('dashboard');
  const [modal, setModal] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    setHydrated(true);
    const auth = localStorage.getItem('dr_admin_auth');
    if (auth === 'true') setIsLoggedIn(true);
  }, []);

  if (!hydrated) return null;

  const triggerRefresh = () => setRefresh(prev => prev + 1);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (loginForm.user.toLowerCase() === "marcos dresbach" && loginForm.pass === "Ma596220@") {
      setIsLoggedIn(true);
      localStorage.setItem('dr_admin_auth', 'true');
      toast({ title: "Acesso Concedido", description: "Bem-vindo ao motor industrial DMG." });
    } else {
      toast({ title: "Erro de Acesso", description: "Identidade ou chave incorreta.", variant: "destructive" });
    }
  }

  function handleLogout() {
    setIsLoggedIn(false);
    localStorage.removeItem('dr_admin_auth');
    toast({ title: "Sessão Encerrada", description: "Você saiu do painel administrativo." });
  }

  const openModal = (type: string, data: any = null) => {
    setSelectedItem(data);
    setModal(type);
  };

  const handleSaveArtist = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const name = formData.get("name") as string;
    if (!name) return;

    const artists = AdminDB.getArtists();
    const newArtist = {
      id: 'A' + Math.random().toString(36).substr(2, 4).toUpperCase(),
      name,
      role: formData.get("role") || 'Artista',
      genre: formData.get("genre") || 'Pop',
      email: formData.get("email"),
      country: formData.get("country") || 'Brasil',
      status: 'active',
      tracks: 0,
      streams: '0',
      royalties: '$0',
      joined: new Date().toLocaleDateString(),
      pro: 'ECAD'
    };

    AdminDB.saveArtists([...artists, newArtist]);
    setModal(null);
    triggerRefresh();
    toast({ title: "Sucesso", description: `${name} foi adicionado ao roster.` });
  };

  const handleSaveTrack = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const title = formData.get("title") as string;
    if (!title) return;

    const tracks = AdminDB.getTracks();
    const newTrack = {
      id: 'T' + Math.random().toString(36).substr(2, 4).toUpperCase(),
      title,
      artist: formData.get("artist") || "Vini Amaral",
      genre: formData.get("genre") || "Pop",
      isrc: formData.get("isrc") || "BRA123...",
      status: 'pending',
      streams: '0',
      royalties: '$0',
      type: 'Single'
    };

    AdminDB.saveTracks([...tracks, newTrack]);
    setModal(null);
    triggerRefresh();
    toast({ title: "Obra Registrada", description: `"${title}" entrou no catálogo.` });
  };

  const renderActivePage = () => {
    const props = { openModal, refresh };
    switch (activePage) {
      case 'dashboard': return <DashboardPage {...props} />;
      case 'activity': return <ActivityPage />;
      case 'artists': return <ArtistsPage {...props} />;
      case 'catalog': return <CatalogPage {...props} />;
      case 'albums': return <AlbumsPage {...props} />;
      case 'contracts': return <ContractsPage />;
      case 'distribution': return <DistributionPage />;
      case 'platforms': return <PlatformsPage />;
      case 'releases': return <ReleasesPage />;
      case 'royalties': return <RoyaltiesPage />;
      case 'payments': return <PaymentsPage />;
      case 'invoices': return <InvoicesPage />;
      case 'analytics': return <AnalyticsPage />;
      case 'marketing': return <MarketingPage />;
      case 'licenses': return <LicensesPage />;
      case 'site': return <SitePage />;
      case 'hub': return <HubPage />;
      case 'reports': return <ReportsPage />;
      case 'users': return <UsersPage />;
      case 'settings': return <SettingsPage />;
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
          {renderActivePage()}
        </div>
      </main>

      {/* Gerenciador de Modais Reais */}
      <Dialog open={!!modal} onOpenChange={() => setModal(null)}>
        <DialogContent className="bg-white text-zinc-900 max-w-2xl rounded-[32px] border-zinc-200">
          {modal === 'addArtist' && (
            <form onSubmit={handleSaveArtist}>
              <DialogHeader>
                <DialogTitle className="text-2xl font-black italic uppercase tracking-tighter">Novo Artista DMG</DialogTitle>
                <DialogDescription className="text-[10px] font-black uppercase">Cadastro oficial no roster da gravadora.</DialogDescription>
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
                <Button type="submit" className="bg-primary text-white rounded-xl text-[10px] font-black uppercase px-8">Salvar Registro</Button>
              </DialogFooter>
            </form>
          )}

          {modal === 'addTrack' && (
            <form onSubmit={handleSaveTrack}>
              <DialogHeader>
                <DialogTitle className="text-2xl font-black italic uppercase tracking-tighter">Registrar Obra</DialogTitle>
                <DialogDescription className="text-[10px] font-black uppercase">Inserção de fonograma no catálogo oficial.</DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-6 py-6">
                <div className="col-span-2 space-y-2">
                  <Label className="text-[10px] font-black uppercase">Título da Faixa</Label>
                  <Input name="title" required className="rounded-xl bg-zinc-50 border-zinc-200" />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase">Artista Principal</Label>
                  <Select name="artist" defaultValue="Vini Amaral">
                    <SelectTrigger className="rounded-xl bg-zinc-50 border-zinc-200">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white text-zinc-900">
                      {AdminDB.getArtists().map((a: any) => (
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
                <Button type="submit" className="bg-primary text-white rounded-xl text-[10px] font-black uppercase px-8">Confirmar Obra</Button>
              </DialogFooter>
            </form>
          )}

          {modal === 'artistDetail' && selectedItem && (
            <div className="space-y-8 py-4">
              <DialogHeader>
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-primary rounded-3xl flex items-center justify-center text-white text-3xl font-black italic">
                    {selectedItem.name[0]}
                  </div>
                  <div>
                    <DialogTitle className="text-3xl font-black italic uppercase tracking-tighter">{selectedItem.name}</DialogTitle>
                    <p className="text-[10px] font-black uppercase text-zinc-400 tracking-widest">{selectedItem.role} · {selectedItem.genre}</p>
                  </div>
                </div>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-4">
                {[
                  ["ID Único", selectedItem.id],
                  ["Email", selectedItem.email],
                  ["Streams Totais", selectedItem.streams],
                  ["Royalties", selectedItem.royalties],
                  ["Membro desde", selectedItem.joined],
                  ["Status", selectedItem.status.toUpperCase()],
                ].map(([k, v]) => (
                  <div key={k} className="p-4 bg-zinc-50 border border-zinc-100 rounded-2xl">
                    <p className="text-[8px] font-black text-zinc-400 uppercase mb-1">{k}</p>
                    <p className="text-xs font-bold text-zinc-900">{v}</p>
                  </div>
                ))}
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setModal(null)} className="rounded-xl w-full text-[10px] font-black uppercase">Fechar Detalhes</Button>
              </DialogFooter>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
