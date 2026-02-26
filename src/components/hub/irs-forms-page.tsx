"use client";

import { FileDown, Upload, ShieldAlert, CheckCircle2, ExternalLink, Info, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export function IRSFormsPage({ user }: any) {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      toast({ title: "Erro", description: "Selecione o arquivo PDF preenchido.", variant: "destructive" });
      return;
    }
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      setFile(null);
      (e.target as HTMLFormElement).reset();
      toast({
        title: "Documento Enviado!",
        description: "Seu formulário fiscal foi recebido e será processado pelo nosso departamento financeiro.",
      });
    }, 2000);
  };

  const forms = [
    {
      name: "Formulário W-7 (ITIN)",
      desc: "Necessário para solicitar o Individual Taxpayer Identification Number para artistas sem SSN.",
      url: "https://www.irs.gov/pub/irs-pdf/fw7.pdf"
    },
    {
      name: "Formulário W-8BEN",
      desc: "Certificado de Status Estrangeiro para retenção de impostos nos EUA (essencial para royalties).",
      url: "https://www.irs.gov/pub/irs-pdf/fw8ben.pdf"
    },
    {
      name: "Instruções W-7",
      desc: "Guia oficial do IRS para preenchimento correto do formulário W-7.",
      url: "https://www.irs.gov/pub/irs-pdf/iw7.pdf"
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header>
        <h1 className="text-4xl font-black italic uppercase tracking-tighter text-zinc-900 leading-none">Tax & IRS Forms</h1>
        <p className="text-zinc-500 text-sm font-medium mt-2">Gerencie sua conformidade fiscal para recebimento de royalties globais.</p>
      </header>

      <div className="bg-primary/5 border border-primary/10 p-8 rounded-[32px] space-y-4 shadow-sm">
        <div className="flex items-center gap-3 text-primary">
          <ShieldAlert className="h-6 w-6" />
          <h3 className="font-black uppercase tracking-widest text-sm italic">Importância Tributária Internacional</h3>
        </div>
        <p className="text-sm text-zinc-600 leading-relaxed font-bold uppercase">
          Para receber royalties provenientes dos EUA e outros territórios sem a retenção máxima de impostos (30%), 
          você deve manter seus formulários fiscais atualizados.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white border border-zinc-200 p-10 rounded-[32px] space-y-8 shadow-sm">
            <h3 className="text-lg font-black italic uppercase tracking-tighter text-zinc-900 flex items-center gap-2">
              <FileDown className="h-5 w-5 text-primary" /> Formulários para Download
            </h3>
            
            <div className="grid gap-4">
              {forms.map((form, i) => (
                <div key={i} className="p-6 bg-zinc-50 border border-zinc-100 rounded-2xl hover:border-primary/20 transition-all group">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-black text-zinc-900 text-sm uppercase italic tracking-tighter">{form.name}</h4>
                    <Button asChild variant="ghost" size="sm" className="h-8 w-8 p-0 text-primary">
                      <a href={form.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                  <p className="text-[11px] text-zinc-500 font-bold leading-relaxed uppercase">{form.desc}</p>
                  <Button asChild className="w-full mt-6 bg-white border border-zinc-200 hover:bg-primary hover:text-white hover:border-primary rounded-xl h-12 text-[10px] font-black uppercase tracking-widest transition-all shadow-sm">
                    <a href={form.url} target="_blank" rel="noopener noreferrer">
                      Download PDF Oficial
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white border border-zinc-200 p-10 rounded-[32px] space-y-8 shadow-sm">
            <h3 className="text-lg font-black italic uppercase tracking-tighter text-zinc-900 flex items-center gap-2">
              <Upload className="h-5 w-5 text-primary" /> Enviar Documento Assinado
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Tipo de Formulário</Label>
                <select className="w-full bg-zinc-50 border border-zinc-200 h-14 rounded-2xl px-6 text-sm text-zinc-900 font-black uppercase italic outline-none focus:border-primary transition-all">
                  <option value="w7">W-7 (ITIN Application)</option>
                  <option value="w8ben">W-8BEN (Foreign Status)</option>
                  <option value="other">Outros Documentos Fiscais</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Arquivo (PDF Digitalizado)</Label>
                <div className="relative group">
                  <input 
                    type="file" 
                    accept=".pdf" 
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
                  />
                  <div className="bg-zinc-50 border-2 border-dashed border-zinc-200 rounded-[32px] p-12 text-center group-hover:border-primary/40 transition-all shadow-inner">
                    <Upload className="h-12 w-12 text-zinc-300 mx-auto mb-4 group-hover:text-primary transition-colors" />
                    <p className="text-sm text-zinc-900 font-black uppercase italic tracking-tighter">
                      {file ? file.name : "Selecione o PDF preenchido"}
                    </p>
                    <p className="text-[10px] text-zinc-400 uppercase font-black mt-2">Clique para selecionar o arquivo</p>
                  </div>
                </div>
              </div>

              <Button 
                type="submit" 
                disabled={loading}
                className="w-full bg-primary font-black uppercase h-20 rounded-2xl shadow-xl shadow-primary/20 text-lg italic tracking-tighter text-white"
              >
                {loading ? "ENVIANDO..." : "CONFIRMAR E ENVIAR AO FISCAL"}
              </Button>
            </form>
          </div>

          <div className="bg-white border border-zinc-200 p-8 rounded-[32px] space-y-4 shadow-sm">
            <h3 className="text-xs font-black uppercase tracking-widest text-zinc-400 flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" /> Status de Processamento
            </h3>
            <div className="flex items-center justify-between py-3 border-b border-zinc-100">
              <span className="text-[10px] font-black uppercase text-zinc-400">Último Envio</span>
              <span className="text-[10px] font-black text-zinc-900">Nenhum pendente</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="text-[10px] font-black uppercase text-zinc-400">Validade W-8BEN</span>
              <span className="text-[10px] font-black text-accent uppercase italic">Regular</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
