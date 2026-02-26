"use client";

import { Star, ShieldCheck, Globe, Clock, CheckCircle2, AlertCircle, ExternalLink, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AscapPage({ user }: any) {
  const isPending = user.ascapStatus !== "active";

  const benefits = [
    { t: "Coleta de Performance TV/Rádio", d: "Rastreamento automático em emissoras de 150+ países.", ic: <Globe /> },
    { t: "Monetização de Live Streams", d: "Receba por shows virtuais e apresentações em plataformas digitais.", ic: <Star /> },
    { t: "Identidade Única IPI/CAE", d: "Número global que garante sua autoria em qualquer sociedade do mundo.", ic: <ShieldCheck /> },
    { t: "Acesso ao Portal ASCAP Mobile", d: "Gerencie suas obras diretamente na plataforma americana.", ic: <ExternalLink /> },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-4xl font-black italic uppercase tracking-tighter text-zinc-900 leading-none">Minha Filiação ASCAP</h1>
          <p className="text-zinc-500 text-sm font-medium mt-2">Gestão de direitos autorais internacionais via DMG Partner.</p>
        </div>
        <div className={`px-4 py-2 rounded-full border text-[10px] font-black uppercase tracking-widest flex items-center gap-2 ${
          isPending ? "bg-primary/5 border-primary/20 text-primary" : "bg-accent/5 border-accent/20 text-accent"
        }`}>
          <div className={`w-2 h-2 rounded-full animate-pulse ${isPending ? "bg-primary" : "bg-accent"}`} />
          {isPending ? "Processando Filiação" : "Filiação Ativa"}
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-zinc-200 rounded-[32px] p-8 space-y-8 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-primary/5 border border-primary/10 rounded-xl text-primary"><ShieldCheck className="h-6 w-6" /></div>
              <h3 className="text-lg font-black italic uppercase tracking-tighter text-zinc-900">Status da Identidade de Criador</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-zinc-50 border border-zinc-100 rounded-2xl space-y-4">
                 <p className="text-[10px] font-black uppercase text-zinc-400">Seu Código IPI / CAE</p>
                 <p className="text-3xl font-black text-zinc-900 font-mono tracking-tighter">
                   {user.ipi || "GERANDO..."}
                 </p>
                 <div className="flex items-center gap-2 text-[9px] text-zinc-500 font-bold uppercase">
                   <Clock className="h-3 w-3" /> Prazo estimado: 3-4 semanas
                 </div>
              </div>

              <div className="p-6 bg-zinc-50 border border-zinc-100 rounded-2xl space-y-4">
                 <p className="text-[10px] font-black uppercase text-zinc-400">Papel na ASCAP</p>
                 <p className="text-3xl font-black text-primary italic uppercase tracking-tighter">
                   {user.role || "Criador"}
                 </p>
                 <div className="flex items-center gap-2 text-[9px] text-zinc-500 font-bold uppercase">
                   <CheckCircle2 className="h-3 w-3 text-accent" /> Sincronizado via DMG
                 </div>
              </div>
            </div>

            <div className="p-6 bg-primary/5 border border-primary/10 rounded-2xl space-y-4">
              <h4 className="text-xs font-black uppercase text-primary flex items-center gap-2">
                <AlertCircle className="h-4 w-4" /> Importante sobre sua filiação
              </h4>
              <p className="text-sm text-zinc-600 leading-relaxed font-medium">
                Sua filiação ASCAP através da DMG Records é automática. Nós enviamos seus dados para a sede em Nova York no momento do seu cadastro. Embora seu acesso ao HUB DMG seja imediato, a ASCAP leva algumas semanas para processar sua entrada no banco de dados global de direitos autorais.
              </p>
            </div>
          </div>

          <div className="bg-white border border-zinc-200 rounded-[32px] p-8 shadow-sm">
            <h3 className="text-lg font-black italic uppercase tracking-tighter text-zinc-900 mb-8">Vantagens da Filiação Global</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((b, i) => (
                <div key={i} className="p-6 bg-zinc-50 border border-zinc-100 rounded-2xl group hover:border-primary/40 transition-all">
                  <div className="p-3 w-fit bg-white border border-zinc-200 rounded-xl text-primary mb-4 group-hover:scale-110 transition-transform shadow-sm">
                    {b.ic}
                  </div>
                  <h4 className="text-sm font-black uppercase text-zinc-900 mb-2">{b.t}</h4>
                  <p className="text-[11px] text-zinc-500 leading-relaxed font-medium uppercase font-bold">{b.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white border border-zinc-200 rounded-[32px] p-8 space-y-6 shadow-sm">
            <h3 className="text-xs font-black uppercase tracking-widest text-zinc-400 flex items-center gap-2">
              <Info className="h-4 w-4 text-primary" /> Perguntas Frequentes
            </h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-[10px] font-black uppercase text-zinc-900">Por que 4 semanas?</p>
                <p className="text-[11px] text-zinc-500 leading-relaxed font-medium">A ASCAP realiza uma verificação de identidade e duplicidade de IPI em bases de dados mundiais (CISAC) antes de emitir seu número oficial.</p>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] font-black uppercase text-zinc-900">Já tenho IPI, o que faço?</p>
                <p className="text-[11px] text-zinc-500 leading-relaxed font-medium">Nossa equipe irá detectar automaticamente e vincular sua conta existente à gestão DMG para coleta otimizada.</p>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] font-black uppercase text-zinc-900">Onde vejo minhas obras?</p>
                <p className="text-[11px] text-zinc-500 leading-relaxed font-medium">No menu "Meu Catálogo". Cada obra aprovada pela DMG é submetida em tempo real para o registro ISWC global da ASCAP.</p>
              </div>
            </div>
          </div>

          <Button asChild className="w-full h-16 bg-zinc-900 text-white font-black uppercase rounded-2xl hover:bg-primary transition-all shadow-xl shadow-zinc-200">
            <a href="https://www.ascap.com" target="_blank" rel="noopener noreferrer">
              Acessar Portal ASCAP <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
