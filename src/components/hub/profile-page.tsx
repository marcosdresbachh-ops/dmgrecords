
"use client";

import { useState } from "react";
import { User, Shield, Bell, Lock, Download, Trash2, Camera, ExternalLink, AlertTriangle, Mail } from "lucide-react";
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

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="relative h-48 bg-gradient-to-r from-primary/20 to-zinc-900 rounded-3xl overflow-hidden border border-white/5">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        <div className="absolute -bottom-12 left-10 flex items-end gap-6">
          <div className="w-32 h-32 rounded-3xl bg-primary border-4 border-black flex items-center justify-center text-5xl font-black text-white shadow-2xl relative group">
            {(user.artistName || user.firstName)?.[0]?.toUpperCase()}
            <button className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all rounded-3xl">
              <Camera className="h-8 w-8 text-white" />
            </button>
          </div>
          <div className="pb-14">
            <h1 className="text-3xl font-black italic uppercase tracking-tighter text-white leading-none mb-2">
              {user.artistName || `${user.firstName} ${user.lastName}`}
            </h1>
            <div className="flex gap-3">
              <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">{user.role}</span>
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 bg-white/5 border border-white/10 px-3 py-1 rounded-full">{user.country}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-zinc-950 border border-white/5 rounded-2xl p-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-lg font-black italic uppercase tracking-tighter text-white flex items-center gap-2">
                <User className="h-5 w-5 text-primary" /> Informações Pessoais
              </h2>
              <Button 
                onClick={() => setEdit(!edit)} 
                variant="outline" 
                className="text-[10px] font-black uppercase tracking-widest border-white/10 text-zinc-400 h-8 rounded-lg"
              >
                {edit ? "Cancelar" : "Editar Perfil"}
              </Button>
            </div>

            {edit ? (
              <form onSubmit={handleSave} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Primeiro Nome</Label>
                  <Input name="firstName" defaultValue={user.firstName} className="bg-white/5 border-white/10 h-12 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Sobrenome</Label>
                  <Input name="lastName" defaultValue={user.lastName} className="bg-white/5 border-white/10 h-12 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Nome Artístico</Label>
                  <Input name="artistName" defaultValue={user.artistName} className="bg-white/5 border-white/10 h-12 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Telefone</Label>
                  <Input name="phone" defaultValue={user.phone} className="bg-white/5 border-white/10 h-12 rounded-xl" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Bio / Release</Label>
                  <Textarea name="bio" defaultValue={user.bio} className="bg-white/5 border-white/10 min-h-[120px] rounded-xl" />
                </div>
                <div className="md:col-span-2">
                  <Button type="submit" disabled={loading} className="w-full bg-primary font-black uppercase h-14 rounded-xl">
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
                  ["PRO / Sociedade", user.pro || "Nenhuma"],
                  ["IPI / CAE", user.ipi || "—"],
                  ["ID Único", user.id],
                  ["Data de Cadastro", user.joined],
                ].map(([k, v]) => (
                  <div key={k}>
                    <p className="text-[10px] font-black uppercase tracking-widest text-zinc-600 mb-1">{k}</p>
                    <p className="text-sm font-bold text-zinc-200">{v}</p>
                  </div>
                ))}
                {user.bio && (
                  <div className="md:col-span-2 pt-6 border-t border-white/5">
                    <p className="text-[10px] font-black uppercase tracking-widest text-zinc-600 mb-3">Bio</p>
                    <p className="text-sm text-zinc-400 leading-relaxed font-medium">{user.bio}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-zinc-950 border border-white/5 rounded-2xl p-6 space-y-6">
            <h3 className="text-sm font-black italic uppercase tracking-tighter text-white flex items-center gap-2">
              <Lock className="h-4 w-4 text-primary" /> Segurança
            </h3>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start text-[10px] font-black uppercase tracking-widest border-white/5 h-12 rounded-xl hover:bg-primary hover:text-white transition-all">
                <Shield className="mr-2 h-4 w-4" /> Alterar Senha
              </Button>
              <Button variant="outline" className="w-full justify-start text-[10px] font-black uppercase tracking-widest border-white/5 h-12 rounded-xl hover:bg-primary hover:text-white transition-all">
                <Bell className="mr-2 h-4 w-4" /> Notificações
              </Button>
            </div>
          </div>

          <div className="bg-zinc-950 border border-white/5 rounded-2xl p-6 space-y-6">
            <h3 className="text-sm font-black italic uppercase tracking-tighter text-white flex items-center gap-2">
              <ExternalLink className="h-4 w-4 text-primary" /> Privacidade (LGPD)
            </h3>
            <p className="text-[10px] text-zinc-500 font-medium leading-relaxed">
              Seus dados estão protegidos sob as leis brasileiras. Você tem controle total sobre suas informações.
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
                <AlertDialogContent className="bg-zinc-950 border-white/10 text-white max-w-xl">
                  <AlertDialogHeader className="space-y-4">
                    <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center text-destructive mb-2">
                      <AlertTriangle className="h-6 w-6" />
                    </div>
                    <AlertDialogTitle className="text-2xl font-black italic uppercase tracking-tighter text-primary">Ação Crítica e Irreversível</AlertDialogTitle>
                    <AlertDialogDescription className="text-zinc-400 space-y-4 text-sm leading-relaxed">
                      <p>Você está prestes a iniciar o processo de exclusão da sua conta no <strong>DMG ARTIST HUB</strong>. Por favor, leia atentamente os termos abaixo antes de prosseguir:</p>
                      
                      <div className="bg-black/50 border border-white/5 p-4 rounded-xl space-y-3 font-medium">
                        <p className="text-white"><span className="text-primary">●</span> <strong>Royalties em Processamento:</strong> Quaisquer valores de streaming ou execução pública que estejam em período de apuração ou trânsito serão retidos para auditoria. A exclusão da conta pode acarretar na perda definitiva de créditos não resgatados.</p>
                        <p className="text-white"><span className="text-primary">●</span> <strong>Remoção de Conteúdo:</strong> Seu EPK Público, Catálogo de Obras e acesso às ferramentas de IA serão imediatamente desativados.</p>
                        <p className="text-white"><span className="text-primary">●</span> <strong>Contratos Ativos:</strong> Licenças já emitidas continuarão válidas conforme os termos originais, mas você perderá o canal direto de gestão via HUB.</p>
                      </div>

                      <p className="font-bold text-zinc-300 italic">Para sua segurança financeira e jurídica, a exclusão definitiva deve ser validada pela nossa curadoria.</p>
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter className="gap-3 mt-6">
                    <AlertDialogCancel className="border-white/10 text-zinc-500 hover:text-white rounded-none">CANCELAR OPERAÇÃO</AlertDialogCancel>
                    <AlertDialogAction asChild>
                      <Button className="bg-destructive text-white font-black uppercase rounded-none px-6" onClick={() => window.location.href = "mailto:suporte@dmgrecords.com.br?subject=Solicitação de Exclusão de Conta - " + user.id}>
                        SOLICITAR EXCLUSÃO À DMG <Mail className="ml-2 h-4 w-4" />
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
