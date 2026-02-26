
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
    
    // Simulação de upload
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
        <h1 className="text-4xl font-black italic uppercase tracking-tighter text-white leading-none">Web Rádio DMG</h1>
        <p className="text-zinc-500 text-sm font-medium mt-2">Envie sua música para a nossa programação global 24h.</p>
      </header>

      {/* Aviso de Responsabilidade Crítico */}
      <div className="bg-primary/10 border border-primary/20 p-6 rounded-2xl space-y-4">
        <div className="flex items-center gap-3 text-primary">
          <AlertCircle className="h-6 w-6" />
          <h3 className="font-black uppercase tracking-widest text-sm">Aviso de Responsabilidade Jurídica</h3>
        </div>
        <p className="text-sm text-zinc-300 leading-relaxed font-bold">
          VOCÊ DEVE TER O REGISTRO OU A DECLARAÇÃO QUE COMPROVE A AUTORIA DA OBRA. 
          VOCÊ SERÁ RESPONSÁVEL JUDICIALMENTE SE MENTIR OU OMITIR INFORMAÇÕES SOBRE OS DIREITOS DA MÚSICA ENVIADA.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-zinc-950 border border-white/5 p-8 rounded-3xl space-y-6">
          <h3 className="text-lg font-black italic uppercase tracking-tighter text-white flex items-center gap-2">
            <Upload className="h-5 w-5 text-primary" /> Formulário de Envio
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Título da Faixa *</Label>
              <Input required placeholder="Ex: Noites de Neon" className="bg-white/5 border-white/10 h-12 rounded-xl" />
            </div>
            
            <div className="space-y-2">
              <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Artista / Banda *</Label>
              <Input required placeholder="Seu nome artístico" className="bg-white/5 border-white/10 h-12 rounded-xl" />
            </div>

            <div className="space-y-2">
              <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">ISRC (Se houver)</Label>
              <Input placeholder="BR-XXX-24-00001" className="bg-white/5 border-white/10 h-12 rounded-xl" />
            </div>

            <div className="space-y-2">
              <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Arquivo de Áudio (Apenas .MP3)</Label>
              <div className="relative group">
                <input 
                  type="file" 
                  accept=".mp3" 
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
                />
                <div className="bg-white/5 border-2 border-dashed border-white/10 rounded-2xl p-10 text-center group-hover:border-primary/40 transition-all">
                  <Upload className="h-10 w-10 text-zinc-600 mx-auto mb-3 group-hover:text-primary transition-colors" />
                  <p className="text-sm text-zinc-400 font-bold uppercase tracking-tighter">
                    {file ? file.name : "Selecione o arquivo MP3"}
                  </p>
                  <p className="text-[10px] text-zinc-600 uppercase font-black mt-2">Arraste ou clique para selecionar</p>
                </div>
              </div>
            </div>

            <Button 
              type="submit" 
              disabled={loading}
              className="w-full bg-primary font-black uppercase h-16 rounded-xl shadow-lg shadow-primary/20 text-lg italic tracking-tighter"
            >
              {loading ? "PROCESSANDO ENVIO..." : "CONFIRMAR E ENVIAR MÚSICA"}
            </Button>
          </form>
        </div>

        <div className="space-y-6">
          <div className="bg-zinc-950 border border-white/5 p-8 rounded-3xl space-y-6">
            <h3 className="text-lg font-black italic uppercase tracking-tighter text-white flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" /> Termos Necessários
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed font-medium">
              Para que sua música seja veiculada, você precisa ter ciência dos termos de concessão voluntária. Baixe os modelos abaixo:
            </p>
            
            <div className="grid gap-3">
              <Button asChild variant="outline" className="justify-between border-white/5 h-14 rounded-xl group hover:border-primary/40 bg-white/5">
                <a href="https://drive.google.com/file/d/1HUoawJqCR5KeP9Bw9gvSs0_Cu2sLc6L4/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <span className="text-[10px] font-black uppercase tracking-widest text-white">Termo de Concessão (BR)</span>
                  <ExternalLink className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="outline" className="justify-between border-white/5 h-14 rounded-xl group hover:border-primary/40 bg-white/5">
                <a href="https://drive.google.com/file/d/1Gpkd9CnZjgIxXBIhA6zkUcRP9jInBdAo/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <span className="text-[10px] font-black uppercase tracking-widest text-white">Terms of Concession (INT)</span>
                  <ExternalLink className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>

          <div className="bg-zinc-900 border border-white/5 p-8 rounded-3xl space-y-4">
            <h3 className="text-xs font-black uppercase tracking-widest text-primary flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" /> Diretrizes de Programação
            </h3>
            <ul className="space-y-4">
              {[
                "Arquivos aceitos estritamente em formato MP3.",
                "Qualidade recomendada: 320kbps para fidelidade total.",
                "Prazo médio de inserção: 5 dias úteis após análise.",
                "A veiculação ajuda no engajamento algorítmico das plataformas.",
                "A rádio não possui fins lucrativos; reprodução voluntária."
              ].map((rule, i) => (
                <li key={i} className="text-xs text-zinc-400 flex items-start gap-3">
                  <div className="w-1 h-1 bg-primary rounded-full mt-1.5 shrink-0 shadow-glow shadow-primary" />
                  <span className="font-medium">{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
