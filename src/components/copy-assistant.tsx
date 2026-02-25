
"use client";

import { useState } from "react";
import { generateReleaseCopy, type ReleaseCopyAssistantOutput } from "@/ai/flows/ai-release-copy-assistant-flow";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Loader2, Copy, CheckCircle2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export function CopyAssistant() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ReleaseCopyAssistantOutput | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    
    try {
      const output = await generateReleaseCopy({
        trackName: formData.get("trackName") as string,
        artistName: formData.get("artistName") as string,
        genre: formData.get("genre") as string,
        mood: formData.get("mood") as string,
        keyDetails: formData.get("keyDetails") as string,
      });
      setResult(output);
    } catch (error) {
      toast({
        title: "Erro ao gerar cópia",
        description: "Ocorreu um problema ao processar seu pedido.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copiado!",
      description: "O texto foi copiado para sua área de transferência.",
    });
  };

  return (
    <section className="py-24 bg-zinc-950 border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest border border-primary/30">
              <Sparkles className="h-3 w-3" /> Staff Only
            </div>
            <h2 className="text-4xl font-black text-white italic tracking-tighter">
              AI RELEASE <span className="text-primary">ASSISTANT</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Ferramenta interna para geração rápida de material de marketing e legendas para redes sociais de novos lançamentos da DMG Records.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 pt-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-white/60 text-xs uppercase tracking-widest font-bold">Track Name</Label>
                  <Input name="trackName" placeholder="Ex: Noites de Neon" required className="bg-white/5 border-white/10 rounded-none focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <Label className="text-white/60 text-xs uppercase tracking-widest font-bold">Artist</Label>
                  <Input name="artistName" defaultValue="Vini Amaral" className="bg-white/5 border-white/10 rounded-none focus:border-primary" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-white/60 text-xs uppercase tracking-widest font-bold">Gênero</Label>
                  <Input name="genre" placeholder="Ex: R&B / Trap" required className="bg-white/5 border-white/10 rounded-none focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <Label className="text-white/60 text-xs uppercase tracking-widest font-bold">Mood / Vibe</Label>
                  <Input name="mood" placeholder="Ex: Introspectivo, Melancólico" required className="bg-white/5 border-white/10 rounded-none focus:border-primary" />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-white/60 text-xs uppercase tracking-widest font-bold">Detalhes Extras</Label>
                <Textarea name="keyDetails" placeholder="Ex: Primeiro single do álbum, focado em virais do TikTok" className="bg-white/5 border-white/10 rounded-none min-h-[100px] focus:border-primary" />
              </div>
              <Button type="submit" disabled={loading} className="w-full rounded-none bg-primary py-6 text-lg font-bold">
                {loading ? <Loader2 className="h-5 w-5 animate-spin mr-2" /> : <Sparkles className="h-5 w-5 mr-2" />}
                GERAR MATERIAL DE MARKETING
              </Button>
            </form>
          </div>

          <div className="relative">
            {result ? (
              <div className="space-y-6 animate-in fade-in zoom-in-95 duration-500">
                <Card className="bg-white/5 border-white/10 rounded-none">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-primary font-black uppercase text-sm tracking-widest">Marketing Blurb</CardTitle>
                    <Button variant="ghost" size="icon" onClick={() => copyToClipboard(result.marketingBlurb)}>
                      <Copy className="h-4 w-4" />
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white leading-relaxed">{result.marketingBlurb}</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/10 rounded-none">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-accent font-black uppercase text-sm tracking-widest">Social Media Caption</CardTitle>
                    <Button variant="ghost" size="icon" onClick={() => copyToClipboard(result.socialMediaCaption)}>
                      <Copy className="h-4 w-4" />
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white leading-relaxed">{result.socialMediaCaption}</p>
                  </CardContent>
                </Card>

                <div className="flex flex-wrap gap-2">
                  {result.hashtags.map((tag, i) => (
                    <span key={i} className="text-xs font-mono text-white/40">#{tag}</span>
                  ))}
                </div>
              </div>
            ) : (
              <div className="h-full border-2 border-dashed border-white/5 flex flex-col items-center justify-center p-12 text-center text-white/20">
                <Sparkles className="h-16 w-16 mb-4 opacity-20" />
                <p className="text-xl font-bold uppercase tracking-tighter">Aguardando entrada de dados</p>
                <p className="text-sm">Preencha os campos ao lado para gerar o material automático.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
