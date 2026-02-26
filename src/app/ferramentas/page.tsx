"use client";

import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, Sparkles, Loader2, Copy, Download, Scale, Zap, CheckCircle2 } from "lucide-react";
import { generateContract } from "@/ai/flows/ai-contract-generator-flow";
import { generateCoverPrompt } from "@/ai/flows/ai-cover-prompt-generator-flow";
import { generateMusicDoc } from "@/ai/flows/ai-doc-generator-flow";
import { toast } from "@/hooks/use-toast";

// Helper Functions
function downloadTxt(content: string, filename: string) {
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function downloadHtml(content: string, filename: string) {
  const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<style>
  body { font-family: 'Inter', sans-serif; max-width: 800px; margin: 60px auto; padding: 0 40px; line-height: 1.8; color: #1a1a1a; background: #fff; }
  h1, h2 { border-bottom: 2px solid #ff0000; padding-bottom: 8px; }
  pre { white-space: pre-wrap; word-wrap: break-word; font-family: inherit; }
</style>
</head>
<body><pre>${content.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</pre></body>
</html>`;
  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export default function FerramentasPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const tools = [
    { label: "📄 Documentos", icon: <FileText className="h-4 w-4" /> },
    { label: "✦ Prompts IA", icon: <Sparkles className="h-4 w-4" /> },
    { label: "⚖ Contratos", icon: <Scale className="h-4 w-4" /> },
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({ title: "Copiado!", description: "Conteúdo copiado para a área de transferência." });
  };

  async function handleAction(type: 'doc' | 'prompt' | 'contract', data: any) {
    setLoading(true);
    setResult(null);
    try {
      if (type === 'doc') {
        const res = await generateMusicDoc(data);
        setResult(res.content);
      } else if (type === 'prompt') {
        const res = await generateCoverPrompt(data);
        setResult(`MIDJOURNEY PROMPT:\n${res.midjourneyPrompt}\n\nDALL-E PROMPT:\n${res.dallePrompt}\n\nCONCEITO:\n${res.visualDescription}`);
      } else if (type === 'contract') {
        const res = await generateContract(data);
        setResult(res.contractText);
      }
    } catch (error) {
      toast({ title: "Erro", description: "Falha ao gerar conteúdo pela IA.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary">
      <Navigation />
      
      <div className="pt-40 pb-20">
        <div className="container mx-auto px-4">
          <header className="text-center mb-16 space-y-6">
            <div className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/10 text-[10px] font-black uppercase tracking-[0.3em] text-primary">
              DMG RECORDS × ARTIST AI TOOLKIT
            </div>
            <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-none">
              ARTIST <span className="text-primary not-italic">AI TOOLKIT.</span>
            </h1>
            <p className="text-zinc-500 font-medium text-lg max-w-2xl mx-auto italic">
              Documentos, prompts e contratos profissionais — potencializados por IA para sua carreira musical.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
          </header>

          <div className="flex justify-center gap-3 mb-12">
            {tools.map((t, i) => (
              <button
                key={i}
                onClick={() => { setActiveTab(i); setResult(null); }}
                className={`flex items-center gap-2 px-8 py-4 text-xs font-black uppercase tracking-widest transition-all ${
                  activeTab === i 
                    ? "bg-primary text-white scale-105 shadow-xl shadow-primary/20" 
                    : "bg-white/5 text-white/40 hover:bg-white/10"
                }`}
              >
                {t.icon} {t.label}
              </button>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            {activeTab === 0 && (
              <ToolPanel 
                icon={<FileText className="h-8 w-8" />}
                title="Gerador de Documentos"
                desc="Crie materiais profissionais para sua carreira instantaneamente."
                onSubmit={(data) => handleAction('doc', data)}
                loading={loading}
                result={result}
                onCopy={copyToClipboard}
                onDownloadTxt={(c) => downloadTxt(c, `documento_dmg.txt`)}
                onDownloadHtml={(c) => downloadHtml(c, `documento_dmg.html`)}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Tipo de Documento</Label>
                    <Select name="docType" defaultValue="Artist Bio">
                      <SelectTrigger className="bg-white/5 border-white/10 rounded-none h-12">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-zinc-900 border-white/10 text-white">
                        <SelectItem value="Press Release">Press Release</SelectItem>
                        <SelectItem value="Artist Bio">Bio do Artista</SelectItem>
                        <SelectItem value="EPK (Press Kit)">EPK (Kit de Imprensa)</SelectItem>
                        <SelectItem value="Social Media Pack">Legendas para Redes</SelectItem>
                        <SelectItem value="Booking Letter">Carta para Contratação</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Idioma</Label>
                    <Select name="language" defaultValue="Português">
                      <SelectTrigger className="bg-white/5 border-white/10 rounded-none h-12">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-zinc-900 border-white/10 text-white">
                        <SelectItem value="Português">Português</SelectItem>
                        <SelectItem value="Inglês">Inglês</SelectItem>
                        <SelectItem value="Espanhol">Espanhol</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Nome Artístico *</Label>
                    <Input name="artistName" required className="bg-white/5 border-white/10 rounded-none h-12 focus:border-primary" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Detalhes Adicionais</Label>
                    <Textarea name="details" placeholder="Gênero, conquistas, data de lançamento, colaboradores..." className="bg-white/5 border-white/10 rounded-none min-h-[100px] focus:border-primary" />
                  </div>
                </div>
              </ToolPanel>
            )}

            {activeTab === 1 && (
              <ToolPanel 
                icon={<Sparkles className="h-8 w-8" />}
                title="Criador de Prompts IA"
                desc="Gere prompts otimizados para capas de álbuns e artes visuais."
                onSubmit={(data) => handleAction('prompt', data)}
                loading={loading}
                result={result}
                onCopy={copyToClipboard}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Título da Obra</Label>
                    <Input name="musicTitle" required className="bg-white/5 border-white/10 rounded-none h-12 focus:border-accent" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Gênero / Estilo</Label>
                    <Input name="genre" placeholder="Ex: R&B / Trap" required className="bg-white/5 border-white/10 rounded-none h-12 focus:border-accent" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Clima e Elementos Visuais</Label>
                    <Textarea name="visualElements" placeholder="Ex: Noite chuvosa em Tóquio, luzes de neon azul, reflexos, estética retro..." className="bg-white/5 border-white/10 rounded-none min-h-[120px] focus:border-accent" />
                  </div>
                </div>
              </ToolPanel>
            )}

            {activeTab === 2 && (
              <ToolPanel 
                icon={<Scale className="h-8 w-8" />}
                title="Legal Doc Builder"
                desc="Contratos e acordos profissionais, prontos para assinatura."
                onSubmit={(data) => handleAction('contract', data)}
                loading={loading}
                result={result}
                onCopy={copyToClipboard}
                onDownloadTxt={(c) => downloadTxt(c, `contrato_dmg.txt`)}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Template do Contrato</Label>
                    <Select name="contractType" defaultValue="Produção Musical">
                      <SelectTrigger className="bg-white/5 border-white/10 rounded-none h-12">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-zinc-900 border-white/10 text-white">
                        <SelectItem value="Produção Musical">Produção Musical</SelectItem>
                        <SelectItem value="Distribuição Digital">Distribuição Digital</SelectItem>
                        <SelectItem value="Licenciamento de Obra">Licenciamento de Obra</SelectItem>
                        <SelectItem value="Sessão de Estúdio">Sessão de Estúdio</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Validade</Label>
                    <Input name="validity" placeholder="Ex: 12 meses" required className="bg-white/5 border-white/10 rounded-none h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Parte 1 (Contratado) *</Label>
                    <Input name="artistName" placeholder="Seu nome / Empresa" required className="bg-white/5 border-white/10 rounded-none h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Parte 2 (Contratante) *</Label>
                    <Input name="clientName" placeholder="Nome do Cliente / Parceiro" required className="bg-white/5 border-white/10 rounded-none h-12" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Termos e Condições de Pagamento</Label>
                    <Textarea name="paymentDetails" placeholder="Ex: R$ 2.000,00 - 50% entrada, 50% na entrega. Royalties de 5% sobre a obra." className="bg-white/5 border-white/10 rounded-none min-h-[100px]" />
                  </div>
                </div>
                <div className="p-3 bg-primary/5 border border-primary/20 text-[10px] text-zinc-500 uppercase tracking-widest text-center mt-6">
                   ⚠️ Apenas para referência. Consulte um advogado antes de assinar.
                </div>
              </ToolPanel>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

// Sub-Component: ToolPanel
interface ToolPanelProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  children: React.ReactNode;
  onSubmit: (data: any) => void;
  loading: boolean;
  result: string | null;
  onCopy: (t: string) => void;
  onDownloadTxt?: (t: string) => void;
  onDownloadHtml?: (t: string) => void;
}

function ToolPanel({ icon, title, desc, children, onSubmit, loading, result, onCopy, onDownloadTxt, onDownloadHtml }: ToolPanelProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    onSubmit(data);
  };

  return (
    <div className="bg-zinc-950 border border-white/5 p-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center gap-6 mb-10 pb-8 border-b border-white/5">
        <div className="p-5 bg-primary/10 border border-primary/20 text-primary">
          {icon}
        </div>
        <div>
          <h2 className="text-3xl font-black italic uppercase tracking-tighter leading-none mb-2">{title}</h2>
          <p className="text-zinc-500 text-sm font-medium">{desc}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {children}
        
        <Button 
          type="submit" 
          disabled={loading}
          className="w-full h-16 bg-primary hover:bg-primary/90 rounded-none text-lg font-black italic tracking-tighter uppercase"
        >
          {loading ? <Loader2 className="h-6 w-6 animate-spin mr-3" /> : <Zap className="h-6 w-6 mr-3" />}
          {loading ? "PROCESSANDO PELA IA..." : "GERAR CONTEÚDO INTELIGENTE"}
        </Button>
      </form>

      {result && (
        <div className="mt-12 space-y-6 animate-in zoom-in-95 duration-300">
          <div className="flex items-center justify-between p-4 bg-white/5 border border-white/5">
            <span className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" /> Conteúdo Gerado
            </span>
            <div className="flex gap-2">
              {onDownloadTxt && (
                <Button variant="ghost" size="sm" onClick={() => onDownloadTxt(result)} className="text-[10px] uppercase font-bold text-zinc-400 hover:text-white h-8">
                  <Download className="h-3 w-3 mr-1" /> .TXT
                </Button>
              )}
              {onDownloadHtml && (
                <Button variant="ghost" size="sm" onClick={() => onDownloadHtml(result)} className="text-[10px] uppercase font-bold text-zinc-400 hover:text-white h-8">
                  <Download className="h-3 w-3 mr-1" /> .HTML
                </Button>
              )}
              <Button variant="ghost" size="sm" onClick={() => onCopy(result)} className="text-[10px] uppercase font-bold text-primary h-8">
                <Copy className="h-3 w-3 mr-1" /> COPIAR
              </Button>
            </div>
          </div>
          <div className="p-8 bg-black border border-white/5 max-h-[500px] overflow-y-auto">
            <pre className="text-sm text-zinc-300 whitespace-pre-wrap font-sans leading-relaxed">
              {result}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
