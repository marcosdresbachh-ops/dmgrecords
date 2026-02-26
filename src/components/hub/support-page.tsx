
"use client";

import { useState } from "react";
import { MessageSquare, Ticket, HelpCircle, Shield, Plus, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SupportPage({ user }: any) {
  const [tab, setTab] = useState(0);

  const faqs = [
    { q: "O que é ISRC?", a: "ISRC é um código único de 12 caracteres que identifica uma gravação fonográfica mundialmente." },
    { q: "Como os royalties são pagos?", a: "Coletamos royalties de performance, mecânicos e streaming, distribuindo trimestralmente." },
    { q: "O que é uma Split Sheet?", a: "Um documento que define a porcentagem de propriedade de cada autor em uma música." },
    { q: "Como funciona o Termo Voluntário DMG?", a: "Ao assinar, você autoriza a DMG a tocar sua música gratuitamente para gerar insights." },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header>
        <h1 className="text-4xl font-black italic uppercase tracking-tighter text-white leading-none">Ajuda & Suporte</h1>
        <p className="text-zinc-500 text-sm font-medium mt-2">Estamos aqui para apoiar sua jornada na música.</p>
      </header>

      <div className="flex gap-2 p-1 bg-zinc-900/50 border border-white/5 rounded-2xl w-fit">
        {["FAQ", "Meus Tickets", "Fale Conosco", "Privacidade"].map((t, i) => (
          <button
            key={i}
            onClick={() => setTab(i)}
            className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
              tab === i ? "bg-primary text-white" : "text-zinc-500 hover:text-white"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === 0 && (
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details key={i} className="group bg-zinc-950 border border-white/5 rounded-2xl overflow-hidden transition-all">
              <summary className="p-6 cursor-pointer flex justify-between items-center text-xs font-black uppercase tracking-widest text-zinc-300 group-hover:text-white list-none">
                {f.q}
                <Plus className="h-4 w-4 text-primary group-open:rotate-45 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-xs text-zinc-500 font-medium leading-relaxed">
                {f.a}
              </div>
            </details>
          ))}
        </div>
      )}

      {tab === 1 && (
        <div className="bg-zinc-950 border border-white/5 rounded-3xl p-8 space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-black italic uppercase tracking-tighter text-white flex items-center gap-2">
              <Ticket className="h-5 w-5 text-primary" /> Meus Chamados
            </h3>
            <Button className="bg-primary text-[10px] font-black uppercase tracking-widest h-10 rounded-xl">
              + Novo Ticket
            </Button>
          </div>
          <div className="space-y-4">
            {[
              { id: "TKT-001", t: "Pagamento não recebido Q3 2024", d: "01 Dez, 2024", s: "Resolvido" },
              { id: "TKT-002", t: "Como atualizar ISRC?", d: "10 Fev, 2025", s: "Aberto" },
            ].map((t, i) => (
              <div key={i} className="flex items-start gap-4 p-5 bg-black/40 border border-white/5 rounded-2xl">
                <div className={`w-2.5 h-2.5 rounded-full mt-1 ${t.s === "Resolvido" ? "bg-accent" : "bg-primary"}`} />
                <div className="flex-1">
                  <h4 className="text-xs font-bold text-white mb-1">{t.t}</h4>
                  <p className="text-[10px] text-zinc-600 font-bold uppercase">#{t.id} · {t.d} · <span className={t.s === "Resolvido" ? "text-accent" : "text-primary"}>{t.s}</span></p>
                </div>
                <Button variant="ghost" size="sm" className="text-[10px] font-black uppercase text-zinc-500 hover:text-white">Ver</Button>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === 2 && (
        <div className="bg-zinc-950 border border-white/5 rounded-3xl p-8 space-y-8">
          <h3 className="text-lg font-black italic uppercase tracking-tighter text-white mb-8 flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-primary" /> Enviar Mensagem
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Assunto</Label>
              <Input className="bg-white/5 border-white/10 h-12 rounded-xl" placeholder="Em que podemos ajudar?" />
            </div>
            <div className="space-y-2">
              <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Prioridade</Label>
              <Select defaultValue="normal">
                <SelectTrigger className="bg-white/5 border-white/10 h-12 rounded-xl">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-zinc-950 border-white/10 text-white">
                  <SelectItem value="normal">Normal</SelectItem>
                  <SelectItem value="high">Alta</SelectItem>
                  <SelectItem value="urgent">Urgente</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="md:col-span-2 space-y-2">
              <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Mensagem</Label>
              <Textarea className="bg-white/5 border-white/10 min-h-[150px] rounded-xl" placeholder="Descreva seu problema ou dúvida em detalhes..." />
            </div>
            <div className="md:col-span-2">
              <Button className="w-full bg-primary font-black uppercase h-14 rounded-xl">Enviar Mensagem</Button>
            </div>
          </div>
        </div>
      )}

      {tab === 3 && (
        <div className="bg-zinc-950 border border-white/5 rounded-3xl p-8 space-y-6">
          <h3 className="text-lg font-black italic uppercase tracking-tighter text-white flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" /> Privacidade & Dados
          </h3>
          <p className="text-sm text-zinc-400 font-medium leading-relaxed">
            Seus dados são armazenados de forma segura e utilizados apenas para fornecer os serviços do DMG Hub. 
            Cumprimos com a LGPD (Brasil) e o GDPR (UE). Você tem o direito de acessar, corrigir e excluir 
            seus dados pessoais a qualquer momento.
          </p>
          <div className="pt-6 border-t border-white/5 space-y-3">
            <Button variant="outline" className="w-full justify-between border-white/5 h-12 rounded-xl group hover:border-primary/40">
              <span className="text-[10px] font-black uppercase tracking-widest">Solicitar Cópia dos Meus Dados</span>
              <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="w-full justify-between border-white/5 h-12 rounded-xl group hover:border-destructive/40 text-destructive">
              <span className="text-[10px] font-black uppercase tracking-widest">Solicitar Exclusão Permanente</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
