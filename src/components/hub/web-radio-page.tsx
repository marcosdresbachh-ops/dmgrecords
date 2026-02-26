"use client";

import { Radio, Upload, FileText, AlertCircle, CheckCircle2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export function WebRadioPage({ user }: any) {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      toast({ title: "Erro", description: "Selecione um arquivo MP3.", variant: "destructive" });
      return;
    }
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      setFile(null);
      (e.target as HTMLFormElement).reset();
      toast({
        title: "Música Enviada!",
        description: "Seu arquivo foi recebido e entrará em análise para a programação em até 5 dias úteis.",
      });
    }, 2000);
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header>
        <h1 className="text-4xl font-black italic uppercase tracking-tighter text-zinc-900 leading-none">Web Rádio DMG</h1>
        <p className="text-zinc-500 text-sm font-medium mt-2">Envie sua música para a nossa programação global 24h.</p>
      </header>

      <div className="bg-primary/5 border border-primary/10 p-10 rounded-[32px] space-y-4 shadow-sm">
        <div className="flex items-center gap-3 text-primary">
          <AlertCircle className="h-6 w-6" />
          <h3 className="font-black uppercase tracking-widest text-sm italic">Aviso de Responsabilidade Jurídica</h3>
        </div>
        <p className="text-sm text-zinc-600 leading-relaxed font-black uppercase">
          VOCÊ DEVE TER O REGISTRO OU A DECLARAÇÃO QUE COMPROVE A AUTORIA DA OBRA. 
          SISTEMA PROTEGIDO POR API DE CONTENT ID.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white border border-zinc-200 p-10 rounded-[40px] space-y-10 shadow-sm">
          <h3 className="text-xl font-black italic uppercase tracking-tighter text-zinc-900 flex items-center gap-3">
            <Upload className="h-6 w-6 text-primary" /> Formulário de Envio
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-2">
              <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Título da Faixa *</Label>
              <Input required placeholder="Ex: Noites de Neon" className="bg-zinc-50 border-zinc-200 h-16 rounded-2xl font-black italic uppercase tracking-tighter text-lg" />
            </div>
            
            <div className="space-y-2">
              <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Artista / Banda *</Label>
              <Input required placeholder="Seu nome artístico" className="bg-zinc-50 border-zinc-200 h-14 rounded-xl font-bold uppercase" />
            </div>

            <div className="space-y-2">
              <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">ISRC (Se houver)</Label>
              <Input placeholder="BR-XXX-24-00001" className="bg-zinc-50 border-zinc-200 h-14 rounded-xl font-mono font-bold" />
            </div>

            <div className="space-y-2">
              <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Arquivo de Áudio (Apenas .MP3)</Label>
              <div className="relative group">
                <input 
                  type="file" 
                  accept=".mp3" 
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
                />
                <div className="bg-zinc-50 border-2 border-dashed border-zinc-200 rounded-[32px] p-12 text-center group-hover:border-primary/40 transition-all shadow-inner">
                  <Upload className="h-12 w-12 text-zinc-200 mx-auto mb-4 group-hover:text-primary transition-colors" />
                  <p className="text-sm text-zinc-900 font-black uppercase italic tracking-tighter">
                    {file ? file.name : "Selecione o arquivo MP3"}
                  </p>
                  <p className="text-[10px] text-zinc-400 uppercase font-black mt-2">Arraste ou clique para selecionar</p>
                </div>
              </div>
            </div>

            <Button 
              type="submit" 
              disabled={loading}
              className="w-full bg-primary font-black uppercase h-20 rounded-2xl shadow-xl shadow-primary/20 text-xl italic tracking-tighter text-white transition-all hover:translate-y-[-2px]"
            >
              {loading ? "PROCESSANDO ENVIO..." : "CONFIRMAR E ENVIAR MÚSICA"}
            </Button>
          </form>
        </div>

        <div className="space-y-6">
          <div className="bg-white border border-zinc-200 p-10 rounded-[40px] space-y-8 shadow-sm">
            <h3 className="text-xl font-black italic uppercase tracking-tighter text-zinc-900 flex items-center gap-3">
              <FileText className="h-6 w-6 text-primary" /> Termos Necessários
            </h3>
            <p className="text-sm text-zinc-500 font-bold uppercase leading-relaxed">
              Para que sua música seja veiculada, você precisa ter ciência dos termos de concessão voluntária.
            </p>
            
            <div className="grid gap-4">
              <Button asChild variant="outline" className="justify-between border-zinc-200 h-16 rounded-[24px] group hover:border-primary/40 bg-zinc-50 px-8 transition-all">
                <a href="https://drive.google.com/file/d/1HUoawJqCR5KeP9Bw9gvSs0_Cu2sLc6L4/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-900">Termo de Concessão (BR)</span>
                  <ExternalLink className="h-5 w-5 text-primary group-hover:translate-x-2 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="outline" className="justify-between border-zinc-200 h-16 rounded-[24px] group hover:border-primary/40 bg-zinc-50 px-8 transition-all">
                <a href="https://drive.google.com/file/d/1Gpkd9CnZjgIxXBIhA6zkUcRP9jInBdAo/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-900">Terms of Concession (INT)</span>
                  <ExternalLink className="h-5 w-5 text-primary group-hover:translate-x-2 transition-transform" />
                </a>
              </Button>
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 p-10 rounded-[40px] space-y-6 shadow-2xl">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-primary flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5" /> Diretrizes de Programação
            </h3>
            <ul className="space-y-6">
              {[
                "Arquivos aceitos estritamente em formato MP3.",
                "Qualidade recomendada: 320kbps para fidelidade total.",
                "Prazo médio de inserção: 5 dias úteis após análise.",
                "A veiculação ajuda no engajamento algorítmico das plataformas.",
                "A rádio não possui fins lucrativos; reprodução voluntária."
              ].map((rule, i) => (
                <li key={i} className="text-[10px] text-zinc-400 flex items-start gap-4 uppercase font-black tracking-widest leading-relaxed">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0 shadow-[0_0_10px_red]" />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
