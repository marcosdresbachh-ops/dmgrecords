"use client";

import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SectionHeading } from "@/components/section-heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, Image as ImageIcon, Sparkles, Loader2, Copy, Download, ScrollText } from "lucide-react";
import { generateContract, type ContractGeneratorOutput } from "@/ai/flows/ai-contract-generator-flow";
import { generateCoverPrompt, type CoverPromptOutput } from "@/ai/flows/ai-cover-prompt-generator-flow";
import { CopyAssistant } from "@/components/copy-assistant";
import { toast } from "@/hooks/use-toast";

export default function FerramentasPage() {
  const [loading, setLoading] = useState(false);
  const [contractResult, setContractResult] = useState<ContractGeneratorOutput | null>(null);
  const [coverResult, setCoverResult] = useState<CoverPromptOutput | null>(null);

  async function handleContractSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    try {
      const output = await generateContract({
        artistName: formData.get("artistName") as string,
        clientName: formData.get("clientName") as string,
        contractType: formData.get("contractType") as any,
        paymentDetails: formData.get("paymentDetails") as string,
        validity: formData.get("validity") as string,
      });
      setContractResult(output);
    } catch (error) {
      toast({ title: "Erro", description: "Falha ao gerar contrato.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  }

  async function handleCoverSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    try {
      const output = await generateCoverPrompt({
        musicTitle: formData.get("musicTitle") as string,
        genre: formData.get("genre") as string,
        mood: formData.get("mood") as string,
        visualElements: formData.get("visualElements") as string,
      });
      setCoverResult(output);
    } catch (error) {
      toast({ title: "Erro", description: "Falha ao gerar prompt.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({ title: "Copiado!", description: "Texto copiado para a área de transferência." });
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      
      <section className="pt-40 pb-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            badge="Portal do Artista"
            title={<>FERRAMENTAS <span className="text-primary italic">INTELIGENTES.</span></>}
            description="Recursos exclusivos para artistas da DMG Records acelerarem sua carreira e produção."
            align="center"
            className="mb-16"
          />

          <Tabs defaultValue="contratos" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 bg-zinc-900 h-16 rounded-none p-1 border border-white/5">
              <TabsTrigger value="contratos" className="rounded-none data-[state=active]:bg-primary data-[state=active]:text-white font-black uppercase text-xs tracking-widest">
                <FileText className="mr-2 h-4 w-4" /> Contratos
              </TabsTrigger>
              <TabsTrigger value="artes" className="rounded-none data-[state=active]:bg-primary data-[state=active]:text-white font-black uppercase text-xs tracking-widest">
                <ImageIcon className="mr-2 h-4 w-4" /> Prompts de Capa
              </TabsTrigger>
              <TabsTrigger value="marketing" className="rounded-none data-[state=active]:bg-primary data-[state=active]:text-white font-black uppercase text-xs tracking-widest">
                <Sparkles className="mr-2 h-4 w-4" /> Marketing
              </TabsTrigger>
            </TabsList>

            <TabsContent value="contratos" className="mt-8 space-y-8 animate-in fade-in slide-in-from-bottom-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <form onSubmit={handleContractSubmit} className="space-y-6 bg-zinc-950 p-8 border border-white/5">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-white/60 text-[10px] uppercase font-bold">Nome do Artista</Label>
                      <Input name="artistName" required className="bg-white/5 border-white/10 rounded-none h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-white/60 text-[10px] uppercase font-bold">Contratante</Label>
                      <Input name="clientName" required className="bg-white/5 border-white/10 rounded-none h-12" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-white/60 text-[10px] uppercase font-bold">Tipo de Contrato</Label>
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
                    <Label className="text-white/60 text-[10px] uppercase font-bold">Pagamento e Condições</Label>
                    <Input name="paymentDetails" placeholder="Ex: R$ 1.500,00 - 50% entrada" required className="bg-white/5 border-white/10 rounded-none h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-white/60 text-[10px] uppercase font-bold">Validade</Label>
                    <Input name="validity" placeholder="Ex: 12 meses" required className="bg-white/5 border-white/10 rounded-none h-12" />
                  </div>
                  <Button type="submit" disabled={loading} className="w-full h-14 bg-primary rounded-none font-black italic tracking-tighter text-lg uppercase">
                    {loading ? <Loader2 className="animate-spin h-5 w-5 mr-2" /> : <ScrollText className="h-5 w-5 mr-2" />}
                    GERAR MINUTA DE CONTRATO
                  </Button>
                </form>

                <div className="relative">
                  {contractResult ? (
                    <Card className="bg-white/5 border-white/10 rounded-none min-h-full">
                      <CardHeader className="border-b border-white/5 flex flex-row items-center justify-between">
                        <CardTitle className="text-sm font-black text-primary uppercase tracking-widest">Minuta Gerada</CardTitle>
                        <Button variant="ghost" size="icon" onClick={() => copyToClipboard(contractResult.contractText)}>
                          <Copy className="h-4 w-4" />
                        </Button>
                      </CardHeader>
                      <CardContent className="p-8">
                        <pre className="text-sm text-zinc-300 whitespace-pre-wrap font-sans leading-relaxed">
                          {contractResult.contractText}
                        </pre>
                      </CardContent>
                    </Card>
                  ) : (
                    <div className="h-full min-h-[400px] border-2 border-dashed border-white/5 flex flex-col items-center justify-center p-12 text-center text-white/20">
                      <FileText className="h-16 w-16 mb-4 opacity-20" />
                      <p className="font-bold uppercase tracking-tighter">Aguardando dados</p>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="artes" className="mt-8 space-y-8 animate-in fade-in slide-in-from-bottom-4">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <form onSubmit={handleCoverSubmit} className="space-y-6 bg-zinc-950 p-8 border border-white/5">
                  <div className="space-y-2">
                    <Label className="text-white/60 text-[10px] uppercase font-bold">Título da Música/Álbum</Label>
                    <Input name="musicTitle" required className="bg-white/5 border-white/10 rounded-none h-12" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-white/60 text-[10px] uppercase font-bold">Gênero</Label>
                      <Input name="genre" placeholder="Ex: R&B / Soul" required className="bg-white/5 border-white/10 rounded-none h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-white/60 text-[10px] uppercase font-bold">Clima / Vibe</Label>
                      <Input name="mood" placeholder="Ex: Noite chuvosa" required className="bg-white/5 border-white/10 rounded-none h-12" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-white/60 text-[10px] uppercase font-bold">Elementos Visuais</Label>
                    <Textarea name="visualElements" placeholder="Ex: Carro clássico, luzes de neon azul, reflexo no asfalto" className="bg-white/5 border-white/10 rounded-none min-h-[100px]" />
                  </div>
                  <Button type="submit" disabled={loading} className="w-full h-14 bg-accent text-black rounded-none font-black italic tracking-tighter text-lg uppercase">
                    {loading ? <Loader2 className="animate-spin h-5 w-5 mr-2" /> : <ImageIcon className="h-5 w-5 mr-2" />}
                    GERAR PROMPTS DE ARTE
                  </Button>
                </form>

                <div className="relative">
                  {coverResult ? (
                    <div className="space-y-4">
                      <Card className="bg-white/5 border-white/10 rounded-none">
                        <CardHeader className="pb-2 flex flex-row items-center justify-between">
                          <CardTitle className="text-xs font-black text-accent uppercase tracking-widest">Midjourney Prompt</CardTitle>
                          <Button variant="ghost" size="icon" onClick={() => copyToClipboard(coverResult.midjourneyPrompt)}>
                            <Copy className="h-4 w-4" />
                          </Button>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm italic text-zinc-400">{coverResult.midjourneyPrompt}</p>
                        </CardContent>
                      </Card>
                      <Card className="bg-white/5 border-white/10 rounded-none">
                        <CardHeader className="pb-2 flex flex-row items-center justify-between">
                          <CardTitle className="text-xs font-black text-accent uppercase tracking-widest">DALL-E Prompt</CardTitle>
                          <Button variant="ghost" size="icon" onClick={() => copyToClipboard(coverResult.dallePrompt)}>
                            <Copy className="h-4 w-4" />
                          </Button>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm italic text-zinc-400">{coverResult.dallePrompt}</p>
                        </CardContent>
                      </Card>
                      <div className="p-4 bg-accent/10 border border-accent/20">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-2 text-accent">Descrição do Conceito</h4>
                        <p className="text-xs text-white/80 leading-relaxed">{coverResult.visualDescription}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="h-full min-h-[400px] border-2 border-dashed border-white/5 flex flex-col items-center justify-center p-12 text-center text-white/20">
                      <ImageIcon className="h-16 w-16 mb-4 opacity-20" />
                      <p className="font-bold uppercase tracking-tighter">Aguardando conceitos</p>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="marketing" className="mt-8 animate-in fade-in slide-in-from-bottom-4">
              <CopyAssistant />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </main>
  );
}
