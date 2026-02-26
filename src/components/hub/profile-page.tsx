
"use client";

import { useState } from "react";
import { 
  User, Shield, Bell, Lock, Download, Trash2, Camera, 
  ExternalLink, AlertTriangle, Mail, CreditCard, Upload, 
  CheckCircle2, FileText, Globe, Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "@/hooks/use-toast";

export function ProfilePage({ user, onUpdate }: any) {
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSave(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const updates = Object.fromEntries(formData.entries());
    
    const users = JSON.parse(localStorage.getItem('dmg_hub_users') || '{}');
    const updatedUser = { ...user, ...updates };
    users[user.email] = { ...users[user.email], ...updates };
    localStorage.setItem('dmg_hub_users', JSON.stringify(users));
    localStorage.setItem('dmg_hub_session', JSON.stringify(updatedUser));
    
    onUpdate(updatedUser);
    setEdit(false);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Perfil Atualizado", description: "Suas alterações foram salvas com sucesso." });
    }, 500);
  }

  const handleFileUpload = (type: 'id' | 'address') => {
    toast({
      title: "Documento Enviado",
      description: `Seu ${type === 'id' ? 'Documento de Identidade' : 'Comprovante'} está em análise.`,
    });
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="relative h-48 bg-gradient-to-r from-primary/10 to-zinc-200 rounded-3xl overflow-hidden border border-zinc-200">
        <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />
        <div className="absolute -bottom-12 left-10 flex items-end gap-6">
          <div className="w-32 h-32 rounded-3xl bg-primary border-4 border-white flex items-center justify-center text-5xl font-black text-white shadow-2xl relative group">
            {(user.artistName || user.firstName)?.[0]?.toUpperCase()}
            <button className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all rounded-3xl">
              <Camera className="h-8 w-8 text-white" />
            </button>
          </div>
          <div className="pb-14">
            <h1 className="text-3xl font-black italic uppercase tracking-tighter text-zinc-900 leading-none mb-2">
              {user.artistName || `${user.firstName} ${user.lastName}`}
            </h1>
            <div className="flex gap-3">
              <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">{user.role}</span>
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 bg-zinc-100 border border-zinc-200 px-3 py-1 rounded-full">{user.country}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          
          {/* ASCAP Partnership Section Light */}
          <div className="bg-white border border-zinc-200 rounded-3xl p-8 space-y-6 relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow">
            <div className="absolute top-0 right-0 p-10 opacity-10 grayscale group-hover:grayscale-0 transition-all">
              <Star className="h-24 w-24 text-primary" />
            </div>
            <div className="flex items-center justify-between border-b border-zinc-100 pb-6">
              <div className="space-y-1">
                <h2 className="text-lg font-black italic uppercase tracking-tighter text-zinc-900 flex items-center gap-2">
                  <Star className="h-5 w-5 text-primary" /> Filiação Global ASCAP
                </h2>
                <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">Identidade de Criador Internacional (DMG Partner)</p>
              </div>
              <div className="text-right">
                <p className="text-[9px] font-black uppercase text-zinc-400 mb-1">Status IPI / CAE</p>
                <span className="bg-accent/10 text-accent border border-accent/20 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest">
                  {user.ipi ? 'Vinculado' : 'Em Geração'}
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className="space-y-4">
                <div className="p-4 bg-zinc-50 border border-zinc-100 rounded-2xl">
                   <p className="text-[10px] font-black uppercase text-zinc-400 mb-2">Seu Código IPI / CAE</p>
                   <p className="text-xl font-black text-zinc-900 font-mono tracking-wider">{user.ipi || "SOLICITADO"}</p>
                   <p className="text-[9px] text-zinc-500 mt-2 font-medium">Este número identifica você unicamente em todas as sociedades de direitos autorais do mundo.</p>
                </div>
                <div className="p-4 bg-primary/5 border border-primary/10 rounded-2xl">
                   <p className="text-[10px] font-black uppercase text-primary mb-1">Sociedade Vinculada</p>
                   <p className="text-sm font-black text-zinc-900 italic uppercase tracking-tighter">ASCAP (USA)</p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-[10px] font-black uppercase text-zinc-400 mb-2">O que a ASCAP libera para você?</p>
                <div className="space-y-3">
                   {[
                     "Coleta de performance em rádios de 150+ países.",
                     "Monetização em Redes de TV e Streaming de Vídeo.",
                     "Rastreamento de uso de obras em locais públicos nos EUA.",
                     "Proteção contra infrações de copyright internacional."
                   ].map((item, i) => (
                     <div key={i} className="flex gap-2 items-start">
                       <CheckCircle2 className="h-3 w-3 text-accent shrink-0 mt-0.5" />
                       <p className="text-[11px] text-zinc-600 font-medium">{item}</p>
                     </div>
                   ))}
                </div>
              </div>
            </div>
          </div>

          {/* KYC Section Light */}
          <div className="bg-white border border-zinc-200 rounded-3xl p-8 space-y-8 relative overflow-hidden shadow-sm">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h2 className="text-lg font-black italic uppercase tracking-tighter text-zinc-900 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" /> Verificação de Identidade (KYC)
                </h2>
                <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">Obrigatório para liquidação de royalties via Stripe</p>
              </div>
              <span className="text-[9px] font-black uppercase bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full">Pendente</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-zinc-50 border border-zinc-100 rounded-2xl space-y-4 group hover:border-primary/40 transition-all">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-white border border-zinc-200 rounded-xl text-primary shadow-sm"><FileText className="h-5 w-5" /></div>
                  <input type="file" id="id-upload" className="hidden" onChange={() => handleFileUpload('id')} />
                  <Button variant="ghost" size="sm" asChild className="text-[9px] font-black uppercase tracking-widest text-zinc-400 hover:text-primary">
                    <label htmlFor="id-upload" className="cursor-pointer">Enviar Arquivo</label>
                  </Button>
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-black uppercase text-zinc-900">Documento Oficial</h4>
                  <p className="text-[10px] text-zinc-500 leading-relaxed font-medium">RG, CNH ou Passaporte válido.</p>
                </div>
              </div>

              <div className="p-6 bg-zinc-50 border border-zinc-100 rounded-2xl space-y-4 group hover:border-primary/40 transition-all">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-white border border-zinc-200 rounded-xl text-primary shadow-sm"><Globe className="h-5 w-5" /></div>
                  <input type="file" id="address-upload" className="hidden" onChange={() => handleFileUpload('address')} />
                  <Button variant="ghost" size="sm" asChild className="text-[9px] font-black uppercase tracking-widest text-zinc-400 hover:text-primary">
                    <label htmlFor="address-upload" className="cursor-pointer">Enviar Arquivo</label>
                  </Button>
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-black uppercase text-zinc-900">Comprovante de Residência</h4>
                  <p className="text-[10px] text-zinc-500 leading-relaxed font-medium">Conta de utilidade dos últimos 90 dias.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-zinc-200 rounded-3xl p-8 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-lg font-black italic uppercase tracking-tighter text-zinc-900 flex items-center gap-2">
                <User className="h-5 w-5 text-primary" /> Informações Pessoais
              </h2>
              <Button 
                onClick={() => setEdit(!edit)} 
                variant="outline" 
                className="text-[10px] font-black uppercase tracking-widest border-zinc-200 text-zinc-400 h-8 rounded-lg"
              >
                {edit ? "Cancelar" : "Editar Perfil"}
              </Button>
            </div>

            {edit ? (
              <form onSubmit={handleSave} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Primeiro Nome</Label>
                  <Input name="firstName" defaultValue={user.firstName} className="bg-zinc-50 border-zinc-200 h-12 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Sobrenome</Label>
                  <Input name="lastName" defaultValue={user.lastName} className="bg-zinc-50 border-zinc-200 h-12 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Nome Artístico</Label>
                  <Input name="artistName" defaultValue={user.artistName} className="bg-zinc-50 border-zinc-200 h-12 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">IPI / CAE Number</Label>
                  <Input name="ipi" defaultValue={user.ipi} className="bg-zinc-50 border-zinc-200 h-12 rounded-xl" placeholder="Opcional" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Bio / Release</Label>
                  <Textarea name="bio" defaultValue={user.bio} className="bg-zinc-50 border-zinc-200 min-h-[120px] rounded-xl" />
                </div>
                <div className="md:col-span-2">
                  <Button type="submit" disabled={loading} className="w-full bg-primary font-black uppercase h-14 rounded-xl shadow-lg shadow-primary/20 text-white">
                    Salvar Alterações
                  </Button>
                </div>
              </form>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
                {[
                  ["Nome Completo", `${user.firstName} ${user.lastName}`],
                  ["E-mail", user.email],
                  ["Telefone", user.phone || "—"],
                  ["País", user.country || "—"],
                  ["IPI / CAE (Global)", user.ipi || "EM GERAÇÃO"],
                  ["PRO Principal", "ASCAP (DMG Partner)"],
                  ["ID Único HUB", user.id],
                  ["Data de Cadastro", user.joined],
                ].map(([k, v]) => (
                  <div key={k}>
                    <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-1">{k}</p>
                    <p className="text-sm font-bold text-zinc-900">{v}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="space-y-6">
          {/* Stripe Account Status Light */}
          <div className="bg-white border border-zinc-200 rounded-3xl p-6 space-y-6 relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <CreditCard className="h-20 w-20" />
            </div>
            <h3 className="text-sm font-black italic uppercase tracking-tighter text-zinc-900 flex items-center gap-2">
              <CreditCard className="h-4 w-4 text-primary" /> Conta Stripe Connect
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                <span className="text-[10px] font-black uppercase text-zinc-400">ID da Conta</span>
                <span className="text-[10px] font-mono text-zinc-600">{user.stripeAccountId || 'acct_pend...'}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                <span className="text-[10px] font-black uppercase text-zinc-400">Status KYC</span>
                <span className="text-[9px] font-black uppercase text-primary">Incompleto</span>
              </div>
              <Button variant="outline" className="w-full text-[10px] font-black uppercase tracking-widest border-primary/20 text-primary h-10 rounded-xl hover:bg-primary hover:text-white transition-all">
                Configurar Recebimento
              </Button>
            </div>
          </div>

          <div className="bg-white border border-zinc-200 rounded-3xl p-6 space-y-6 shadow-sm">
            <h3 className="text-sm font-black italic uppercase tracking-tighter text-zinc-900 flex items-center gap-2">
              <Lock className="h-4 w-4 text-primary" /> Segurança
            </h3>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start text-[10px] font-black uppercase tracking-widest border-zinc-200 h-12 rounded-xl hover:bg-primary hover:text-white transition-all text-zinc-600">
                <Shield className="mr-2 h-4 w-4" /> Alterar Senha
              </Button>
              <Button variant="outline" className="w-full justify-start text-[10px] font-black uppercase tracking-widest border-zinc-200 h-12 rounded-xl hover:bg-primary hover:text-white transition-all text-zinc-600">
                <Bell className="mr-2 h-4 w-4" /> Notificações
              </Button>
            </div>
          </div>

          <div className="bg-white border border-zinc-200 rounded-3xl p-6 space-y-6 shadow-sm">
            <h3 className="text-sm font-black italic uppercase tracking-tighter text-zinc-900 flex items-center gap-2">
              <ExternalLink className="h-4 w-4 text-primary" /> Privacidade (LGPD)
            </h3>
            <p className="text-[10px] text-zinc-400 font-medium leading-relaxed">
              Seus dados estão protegidos sob as leis brasileiras e integrados com as sociedades globais via API.
            </p>
            <div className="space-y-3">
              <Button variant="ghost" className="w-full justify-start text-[10px] font-black uppercase tracking-widest text-zinc-400 h-10 rounded-xl hover:text-primary">
                <Download className="mr-2 h-4 w-4" /> Exportar meus dados
              </Button>
              
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="ghost" className="w-full justify-start text-[10px] font-black uppercase tracking-widest text-destructive h-10 rounded-xl hover:bg-destructive/10">
                    <Trash2 className="mr-2 h-4 w-4" /> Excluir Conta
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-white border-zinc-200 text-zinc-900 max-w-xl rounded-3xl shadow-2xl">
                  <AlertDialogHeader className="space-y-4">
                    <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center text-destructive mb-2">
                      <AlertTriangle className="h-6 w-6" />
                    </div>
                    <AlertDialogTitle className="text-2xl font-black italic uppercase tracking-tighter text-primary leading-none">Ação Crítica e Irreversível</AlertDialogTitle>
                    <AlertDialogDescription className="text-zinc-500 space-y-4 text-sm leading-relaxed">
                      <p>Você está prestes a iniciar o processo de exclusão da sua conta. Lembre-se que isso afetará seus registros ativos na ASCAP via DMG.</p>
                      <div className="bg-zinc-50 border border-zinc-100 p-4 rounded-xl space-y-3 font-medium">
                        <p className="text-zinc-900">● <strong>Royalties:</strong> Valores em período de apuração ASCAP/Stripe serão retidos.</p>
                        <p className="text-zinc-900">● <strong>IPI / CAE:</strong> A vinculação da DMG com seu IPI será encerrada.</p>
                      </div>
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter className="gap-3 mt-6">
                    <AlertDialogCancel className="border-zinc-200 text-zinc-400 hover:text-zinc-900 rounded-xl">CANCELAR</AlertDialogCancel>
                    <AlertDialogAction asChild>
                      <Button className="bg-destructive text-white font-black uppercase rounded-xl px-6" onClick={() => window.location.href = "mailto:suporte@dmgrecords.com.br?subject=Exclusão de Conta - " + user.id}>
                        SOLICITAR EXCLUSÃO <Mail className="ml-2 h-4 w-4" />
                      </Button>
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
