"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { hubAIAssistant } from "@/ai/flows/hub-ai-assistant-flow";
import { Loader2, Sparkles, Copy, Save, User, Megaphone, Wand2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export function BioPage({ user, onUpdate }: any) {
  const [bio, setBio] = useState(user.bio || "");
  const [loading, setLoading] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);

  async function handleSave() {
    setLoading(true);
    const users = JSON.parse(localStorage.getItem('dmg_hub_users') || '{}');
    const updatedUser = { ...user, bio };
    users[user.email] = { ...users[user.email], bio };
    localStorage.setItem('dmg_hub_users', JSON.stringify(users));
    localStorage.setItem('dmg_hub_session', JSON.stringify(updatedUser));
    
    onUpdate(updatedUser);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Bio Salva", description: "Sua biografia foi atualizada com sucesso." });
    }, 500);
  }

  async function improveWithAI() {
    if (!bio.trim() && !user.artistName) {
      toast({ title: "Aviso", description: "Escreva algo básico ou preencha seu nome artístico para a IA começar.", variant: "destructive" });
      return;
    }
    
    setAiLoading(true);
    try {
      const res = await hubAIAssistant({
        toolType: "Document",
        userInput: `Reescreva e melhore esta bio de artista de forma épica e profissional: ${bio}`,
        artistContext: `Artista: ${user.artistName || user.firstName}, Gênero: ${user.role}, Local: ${user.country}`
      });
      setBio(res.content);
      toast({ title: "Bio Gerada!", description: "A IA refinou seu texto. Não esqueça de salvar!" });
    } catch (error) {
      toast({ title: "Erro", description: "Falha ao processar IA.", variant: "destructive" });
    } finally {
      setAiLoading(false);
    }
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="space-y-2">
        <h1 className="text-4xl font-black italic uppercase tracking-tighter text-zinc-900 leading-none">Minha Bio</h1>
        <p className="text-zinc-500 text-sm font-medium mt-2">Gerencie sua biografia oficial para plataformas, assessoria e EPKs.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-zinc-200 rounded-[32px] p-8 space-y-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-black italic uppercase tracking-tighter text-zinc-900 flex items-center gap-2">
                <User className="h-5 w-5 text-primary" /> Texto da Biografia
              </h3>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={improveWithAI}
                  disabled={aiLoading}
                  className="text-[10px] font-black uppercase tracking-widest border-primary/20 text-primary hover:bg-primary/5 h-8 rounded-lg"
                >
                  {aiLoading ? <Loader2 className="h-3 w-3 animate-spin mr-1" /> : <Wand2 className="h-3 w-3 mr-1" />}
                  Melhorar com IA
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => navigator.clipboard.writeText(bio)}
                  className="text-[10px] font-black uppercase tracking-widest text-zinc-400 h-8 hover:text-zinc-900"
                >
                  <Copy className="h-3 w-3 mr-1" /> Copiar
                </Button>
              </div>
            </div>

            <Textarea 
              className="bg-zinc-50 border-zinc-200 rounded-2xl min-h-[400px] focus:border-primary text-base p-8 leading-relaxed text-zinc-700 font-medium" 
              placeholder="Escreva sua trajetória, conquistas e estilo musical..."
              value={bio}
              onChange={e => setBio(e.target.value)}
            />

            <Button 
              onClick={handleSave}
              disabled={loading}
              className="w-full h-16 bg-primary hover:bg-primary/90 rounded-2xl text-sm font-black uppercase tracking-widest text-white shadow-lg shadow-primary/20"
            >
              {loading ? <Loader2 className="h-5 w-5 animate-spin mr-2" /> : <Save className="h-5 w-5 mr-2" />}
              SALVAR BIOGRAFIA OFICIAL
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-primary/5 border border-primary/10 rounded-[32px] p-8 space-y-6 shadow-sm">
            <h3 className="text-xs font-black uppercase tracking-widest text-primary flex items-center gap-2">
              <Megaphone className="h-4 w-4" /> Dicas da Curadoria
            </h3>
            <div className="space-y-4">
              <div className="p-5 bg-white border border-zinc-100 rounded-2xl space-y-2 shadow-sm">
                <p className="text-[10px] font-black uppercase text-accent">⚡ SEJA DIRETO</p>
                <p className="text-[11px] text-zinc-500 font-bold leading-relaxed uppercase">
                  Os primeiros parágrafos devem conter quem você é e seu gênero principal.
                </p>
              </div>
              <div className="p-5 bg-white border border-zinc-100 rounded-2xl space-y-2 shadow-sm">
                <p className="text-[10px] font-black uppercase text-zinc-900">🏆 DESTAQUE CONQUISTAS</p>
                <p className="text-[11px] text-zinc-500 font-bold leading-relaxed uppercase">
                  Mencione números de streams, parcerias e palcos importantes que já pisou.
                </p>
              </div>
              <div className="p-5 bg-white border border-zinc-100 rounded-2xl space-y-2 shadow-sm">
                <p className="text-[10px] font-black uppercase text-primary">🤖 USE O ASSISTENTE</p>
                <p className="text-[11px] text-zinc-500 font-bold leading-relaxed uppercase">
                  Nossa IA é treinada para o mercado fonográfico. Deixe ela refinar seu tom de voz.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-zinc-200 rounded-[32px] p-8 shadow-sm">
            <h3 className="text-xs font-black uppercase tracking-widest text-zinc-400 mb-4">Status da Bio</h3>
            <div className="flex items-center justify-between py-3 border-b border-zinc-100">
              <span className="text-[10px] font-black uppercase text-zinc-400">Comprimento</span>
              <span className={`text-[10px] font-black ${bio.length > 300 ? 'text-accent' : 'text-zinc-400'}`}>
                {bio.length} caracteres
              </span>
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="text-[10px] font-black uppercase text-zinc-400">Recomendado</span>
              <span className="text-[10px] font-black text-zinc-900">800 - 1500</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
