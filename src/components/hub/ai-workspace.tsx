"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { hubAIAssistant } from "@/ai/flows/hub-ai-assistant-flow";
import { Loader2, Sparkles, Copy, Download, Music2, FileText, Scale, Megaphone } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export function AIWorkspace({ user }: any) {
  const [selected, setSelected] = useState<"Lyrics" | "Document" | "Contract" | "Pitch">("Lyrics");
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const tools = [
    { id: "Lyrics", icon: <Music2 />, label: "Letrista", desc: "Co-criação de versos, hooks e pontes." },
    { id: "Document", icon: <FileText />, label: "Documentos", desc: "Biografias, EPKs e comunicados." },
    { id: "Contract", icon: <Scale />, label: "Contratos", desc: "Split sheets e acordos rápidos." },
    { id: "Pitch", icon: <Megaphone />, label: "Marketing", desc: "Pitch para Spotify e redes sociais." },
  ];

  async function handleGenerate() {
    if (!input.trim()) return;
    setLoading(true);
    setResult("");
    try {
      const res = await hubAIAssistant({
        toolType: selected,
        userInput: input,
        artistContext: `Artista: ${user.artistName || user.firstName}, Gênero Sugerido: ${user.role}, Local: ${user.country}`
      });
      setResult(res.content);
    } catch (error) {
      toast({ title: "Erro", description: "Falha ao processar IA.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  }

  function download() {
    const blob = new Blob([result], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `DMG_AI_${selected}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="space-y-12">
      <header className="space-y-2">
        <h1 className="text-5xl font-black italic uppercase tracking-tighter text-white">Hub AI Assistant</h1>
        <p className="text-zinc-500 text-lg font-medium">Potencializado por Claude — seu assistente inteligente na indústria.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {tools.map((t: any) => (
          <button
            key={t.id}
            onClick={() => { setSelected(t.id); setResult(""); setInput(""); }}
            className={`p-6 border text-left transition-all ${
              selected === t.id 
                ? "border-primary bg-primary/10" 
                : "border-white/5 bg-white/5 hover:border-white/20"
            }`}
          >
            <div className={`p-3 bg-black border border-white/5 w-fit mb-4 ${selected === t.id ? "text-primary" : "text-zinc-600"}`}>
              {t.icon}
            </div>
            <h3 className="text-sm font-black uppercase tracking-widest text-white mb-1">{t.label}</h3>
            <p className="text-[10px] text-zinc-500 font-medium leading-tight">{t.desc}</p>
          </button>
        ))}
      </div>

      <div className="bg-black/40 border border-white/5 p-10 space-y-6">
        <div className="flex items-center gap-3 text-primary">
          <Sparkles className="h-5 w-5" />
          <h3 className="text-xl font-black italic uppercase tracking-tighter">Área de Trabalho: {selected}</h3>
        </div>

        <Textarea 
          className="bg-white/5 border-white/10 rounded-none min-h-[150px] focus:border-primary text-sm p-6" 
          placeholder="Descreva seu tema, ideia ou contexto para a IA trabalhar..."
          value={input}
          onChange={e => setInput(e.target.value)}
        />

        <Button 
          onClick={handleGenerate}
          disabled={loading || !input.trim()}
          className="w-full h-16 bg-primary hover:bg-primary/90 rounded-none text-lg font-black italic tracking-tighter uppercase"
        >
          {loading ? <Loader2 className="h-6 w-6 animate-spin mr-3" /> : <Sparkles className="h-6 w-6 mr-3" />}
          {loading ? "PROCESSANDO PELA IA..." : "GERAR CONTEÚDO INTELIGENTE"}
        </Button>

        {result && (
          <div className="mt-12 space-y-6 animate-in zoom-in-95 duration-300">
            <div className="flex items-center justify-between p-4 bg-white/5 border border-white/5">
              <span className="text-[10px] font-black uppercase tracking-widest text-primary">Resultado da IA</span>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" onClick={() => navigator.clipboard.writeText(result)} className="text-[10px] uppercase font-bold text-primary h-8">
                  <Copy className="h-3 w-3 mr-1" /> COPIAR
                </Button>
                <Button variant="ghost" size="sm" onClick={download} className="text-[10px] uppercase font-bold text-zinc-400 h-8">
                  <Download className="h-3 w-3 mr-1" /> .TXT
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
    </div>
  );
}
