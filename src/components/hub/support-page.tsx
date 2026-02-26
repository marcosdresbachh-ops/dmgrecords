"use client";

import { useState } from "react";
import { MessageSquare, Ticket, HelpCircle, Shield, Plus, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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
        <h1 className="text-4xl font-black italic uppercase tracking-tighter text-zinc-900 leading-none">Ajuda & Suporte</h1>
        <p className="text-zinc-500 text-sm font-medium mt-2">Estamos aqui para apoiar sua jornada na música.</p>
      </header>

      <div className="flex gap-2 p-1.5 bg-zinc-100 border border-zinc-200 rounded-2xl w-fit">
        {["FAQ", "Meus Tickets", "Fale Conosco", "Privacidade"].map((t, i) => (
          <button
            key={i}
            onClick={() => setTab(i)}
            className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
              tab === i ? "bg-white text-primary shadow-sm border border-zinc-200" : "text-zinc-400 hover:text-zinc-900"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === 0 && (
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <details key={i} className="group bg-white border border-zinc-200 rounded-[24px] overflow-hidden transition-all shadow-sm">
              <summary className="p-8 cursor-pointer flex justify-between items-center text-xs font-black uppercase tracking-[0.2em] text-zinc-900 group-hover:bg-zinc-50 list-none">
                {f.q}
                <Plus className="h-5 w-5 text-primary group-open:rotate-45 transition-transform" />
              </summary>
              <div className="px-8 pb-8 text-sm text-zinc-500 font-bold uppercase leading-relaxed">
                {f.a}
              </div>
            </details>
          ))}
        </div>
      )}

      {tab === 1 && (
        <div className="bg-white border border-zinc-200 rounded-[32px] p-10 space-y-10 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-black italic uppercase tracking-tighter text-zinc-900 flex items-center gap-3">
              <Ticket className="h-6 w-6 text-primary" /> Meus Chamados
            </h3>
            <Button className="bg-primary text-[10px] font-black uppercase tracking-widest h-12 rounded-2xl px-8 text-white shadow-lg shadow-primary/20">
              + Novo Ticket
            </Button>
          </div>
          <div className="space-y-4">
            {[
              { id: "TKT-001", t: "Pagamento não recebido Q3 2024", d: "01 Dez, 2024", s: "Resolvido" },
              { id: "TKT-002", t: "Como atualizar ISRC?", d: "10 Fev, 2025", s: "Aberto" },
            ].map((t, i) => (
              <div key={i} className="flex items-start gap-6 p-8 bg-zinc-50 border border-zinc-100 rounded-[24px] shadow-inner">
                <div className={`w-3 h-3 rounded-full mt-1.5 ${t.s === "Resolvido" ? "bg-accent shadow-[0_0_10px_rgba(34,197,94,0.5)]" : "bg-primary shadow-[0_0_10px_rgba(255,0,0,0.5)]"}`} />
                <div className="flex-1">
                  <h4 className="text-sm font-black uppercase tracking-tighter italic text-zinc-900 mb-1">{t.t}</h4>
                  <p className="text-[10px] text-zinc-400 font-bold uppercase">#{t.id} · {t.d} · <span className={t.s === "Resolvido" ? "text-accent" : "text-primary"}>{t.s}</span></p>
                </div>
                <Button variant="ghost" size="sm" className="text-[10px] font-black uppercase text-zinc-400 hover:text-zinc-900 border border-zinc-200 bg-white h-10 px-6 rounded-xl">Ver Detalhes</Button>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === 2 && (
        <div className="bg-white border border-zinc-200 rounded-[40px] p-12 space-y-10 shadow-sm">
          <h3 className="text-2xl font-black italic uppercase tracking-tighter text-zinc-900 mb-8 flex items-center gap-4">
            <MessageSquare className="h-8 w-8 text-primary" /> Enviar Mensagem
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-2">
              <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Assunto</Label>
              <Input className="bg-zinc-50 border-zinc-200 h-14 rounded-2xl font-bold" placeholder="Em que podemos ajudar?" />
            </div>
            <div className="space-y-2">
              <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Prioridade</Label>
              <Select defaultValue="normal">
                <SelectTrigger className="bg-zinc-50 border-zinc-200 h-14 rounded-2xl font-black uppercase">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white border-zinc-200 text-zinc-900">
                  <SelectItem value="normal">Normal</SelectItem>
                  <SelectItem value="high">Alta</SelectItem>
                  <SelectItem value="urgent">Urgente</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="md:col-span-2 space-y-2">
              <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Sua Mensagem</Label>
              <Textarea className="bg-zinc-50 border-zinc-200 min-h-[200px] rounded-[32px] p-8 font-medium" placeholder="Descreva seu problema ou dúvida em detalhes..." />
            </div>
            <div className="md:col-span-2">
              <Button className="w-full bg-primary font-black uppercase h-20 rounded-[24px] text-xl italic tracking-tighter text-white shadow-xl shadow-primary/20">
                ENVIAR MENSAGEM AGORA
              </Button>
            </div>
          </div>
        </div>
      )}

      {tab === 3 && (
        <div className="bg-white border border-zinc-200 rounded-[40px] p-12 space-y-10 shadow-sm">
          <h3 className="text-2xl font-black italic uppercase tracking-tighter text-zinc-900 flex items-center gap-4">
            <Shield className="h-8 w-8 text-primary" /> Privacidade & Dados
          </h3>
          <p className="text-lg text-zinc-500 font-bold uppercase leading-relaxed max-w-3xl">
            Seus dados são armazenados de forma segura e utilizados apenas para fornecer os serviços do DMG Hub. 
            Cumprimos com a LGPD (Brasil) e o GDPR (UE).
          </p>
          <div className="pt-10 border-t border-zinc-100 space-y-4">
            <Button variant="outline" className="w-full justify-between border-zinc-200 h-16 rounded-[24px] group hover:border-primary/40 bg-white px-10">
              <span className="text-xs font-black uppercase tracking-widest text-zinc-900">Solicitar Cópia dos Meus Dados</span>
              <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-2 transition-transform" />
            </Button>
            <Button variant="outline" className="w-full justify-between border-zinc-200 h-16 rounded-[24px] group hover:border-destructive/40 text-destructive bg-white px-10">
              <span className="text-xs font-black uppercase tracking-widest">Solicitar Exclusão Permanente</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
