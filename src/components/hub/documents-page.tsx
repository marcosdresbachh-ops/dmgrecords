"use client";

import { useState } from "react";
import { FileText, Plus, ShieldCheck, Download, Clock, AlertTriangle, CheckCircle2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";

export function DocumentsPage({ user }: any) {
  const [signingDoc, setSigningDoc] = useState<any>(null);
  const [isSigning, setIsLoading] = useState(false);

  const initialDocs = [
    { id: "DOC-DMG01", n: "Termo de Transmissão Voluntária DMG", d: "26 Fev, 2025", s: "Assinado" },
    { id: "DOC-SPL02", n: "Split Sheet — Midnight Rain", d: "14 Jan, 2025", s: "Assinado" },
    { id: "DOC-SYN03", n: "Sync License Agreement — Blue Horizon", d: "10 Jan, 2025", s: "Assinado" },
    { id: "DOC-NDA04", n: "NDA — FilmCo Productions", d: "08 Dez, 2024", s: "Pendente" },
  ];

  const [docs, setDocs] = useState(initialDocs);

  const handleSign = (doc: any) => {
    setIsLoading(true);
    setTimeout(() => {
      setDocs(docs.map(d => d.id === doc.id ? { ...d, s: "Assinado" } : d));
      setIsLoading(false);
      setSigningDoc(null);
      toast({
        title: "Documento Assinado!",
        description: "A assinatura digital foi registrada com validade jurídica na plataforma.",
      });
    }, 1500);
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-4xl font-black italic uppercase tracking-tighter text-zinc-900 leading-none">Documentos & Jurídico</h1>
          <p className="text-zinc-500 text-sm font-medium mt-2">Contratos, acordos e termos de concessão arquivados.</p>
        </div>
        <Button className="bg-primary text-[10px] font-black uppercase tracking-widest rounded-2xl h-12 px-8 text-white shadow-lg shadow-primary/20">
          <Plus className="mr-2 h-4 w-4" /> Novo Documento
        </Button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { 
            ic: <ShieldCheck />, 
            t: "Assinar Termo DMG", 
            d: "Necessário para rádio",
            onClick: () => setSigningDoc(docs.find(d => d.id === "DOC-DMG01") || docs[0])
          },
          { ic: <Plus />, t: "Gerar Split Sheet", d: "Acordo de co-autoria" },
          { ic: <FileText />, t: "Gerar Contrato", d: "NDA, Licensing, Gestão" },
        ].map((item, i) => (
          <div 
            key={i} 
            onClick={item.onClick}
            className="bg-white border border-zinc-200 p-8 rounded-[32px] text-center group hover:border-primary/40 transition-all cursor-pointer shadow-sm"
          >
            <div className="w-14 h-14 bg-zinc-50 border border-zinc-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-zinc-400 group-hover:text-primary group-hover:bg-primary/5 transition-all">
              {item.ic}
            </div>
            <h4 className="text-xs font-black uppercase tracking-widest text-zinc-900 mb-1">{item.t}</h4>
            <p className="text-[10px] text-zinc-400 font-bold uppercase">{item.d}</p>
          </div>
        ))}
      </div>

      <div className="bg-white border border-zinc-200 rounded-[32px] overflow-hidden shadow-sm">
        <div className="p-8 border-b border-zinc-100">
          <h3 className="text-lg font-black italic uppercase tracking-tighter text-zinc-900 flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" /> Arquivo de Documentos
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-zinc-50 text-[10px] font-black uppercase tracking-widest text-zinc-400">
                <th className="p-6">ID DOC</th>
                <th className="p-6">Nome do Documento</th>
                <th className="p-6">Data</th>
                <th className="p-6">Status</th>
                <th className="p-6 text-right">Ação</th>
              </tr>
            </thead>
            <tbody>
              {docs.map((d, i) => (
                <tr key={i} className="hover:bg-zinc-50/50 transition-colors border-b border-zinc-100 last:border-0">
                  <td className="p-6"><span className="text-xs font-mono font-bold text-primary">{d.id}</span></td>
                  <td className="p-6 font-bold text-sm text-zinc-900 uppercase tracking-tighter italic">{d.n}</td>
                  <td className="p-6 text-xs text-zinc-500 font-bold uppercase">{d.d}</td>
                  <td className="p-6">
                    <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded border ${
                      d.s === "Assinado" ? "bg-accent/5 text-accent border-accent/20" : "bg-primary/5 text-primary border-primary/20"
                    }`}>
                      {d.s}
                    </span>
                  </td>
                  <td className="p-6 text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="sm" className="h-8 px-3 rounded-lg border border-zinc-200 text-[10px] font-black uppercase text-zinc-400 hover:text-zinc-900 bg-white shadow-sm">
                        <Download className="h-3.5 w-3.5 mr-1" /> PDF
                      </Button>
                      {d.s === "Pendente" && (
                        <Button 
                          onClick={() => setSigningDoc(d)}
                          className="h-8 px-3 bg-primary rounded-lg text-[10px] font-black uppercase text-white shadow-sm"
                        >
                          Assinar
                        </Button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white border border-zinc-200 rounded-[32px] p-8 shadow-sm">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-lg font-black italic uppercase tracking-tighter text-zinc-900 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-primary" /> Disputas de Copyright
          </h3>
          <Button variant="outline" className="h-8 border-zinc-200 text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-zinc-900 rounded-lg">
            Abrir Caso
          </Button>
        </div>
        <div className="py-12 text-center">
          <AlertTriangle className="h-12 w-12 text-zinc-100 mx-auto mb-4" />
          <p className="text-xs text-zinc-400 font-black uppercase tracking-widest">Nenhuma disputa ativa encontrada.</p>
        </div>
      </div>

      {/* Signature Dialog */}
      <Dialog open={!!signingDoc} onOpenChange={() => !isSigning && setSigningDoc(null)}>
        <DialogContent className="bg-white border-zinc-200 text-zinc-900 max-w-2xl rounded-[32px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-black italic uppercase tracking-tighter text-primary">Assinatura Digital DMG</DialogTitle>
            <DialogDescription className="text-zinc-500 font-bold uppercase text-[10px]">
              Revise o documento abaixo e confirme sua assinatura.
            </DialogDescription>
          </DialogHeader>

          <div className="bg-zinc-50 border border-zinc-200 p-8 h-64 overflow-y-auto rounded-2xl text-xs text-zinc-600 leading-relaxed font-mono shadow-inner">
            <h4 className="text-zinc-900 font-bold mb-4 uppercase">CONTRATO DE {signingDoc?.n}</h4>
            <p>Pelo presente instrumento, as partes concordam com os termos de licença e distribuição operados pela DMG Records...</p>
            <p className="mt-4">1. OBJETO: O presente contrato tem por objeto a formalização legal de uso da obra intelectual do artista...</p>
            <p className="mt-4">2. VALIDADE: Esta assinatura digital possui validade jurídica conforme a MP 2.200-2/2001 e normas de certificação digital...</p>
            <p className="mt-4">3. CERTIFICAÇÃO: O token de assinatura será vinculado ao ID de membro {user.id} e IP de acesso.</p>
            <p className="mt-8 text-center border-t border-zinc-200 pt-4 text-[10px] font-black">DOCUMENTO GERADO VIA DMG ARTIST HUB SYSTEM</p>
          </div>

          <div className="p-4 bg-primary/5 border border-primary/10 rounded-2xl space-y-2">
            <p className="text-[10px] font-black uppercase text-primary flex items-center gap-2">
              <ShieldCheck className="h-3 w-3" /> Integridade Protegida
            </p>
            <p className="text-[11px] text-zinc-500 font-bold leading-relaxed uppercase">
              Ao clicar em confirmar, você declara estar ciente de que esta assinatura tem plena validade jurídica na plataforma DMG.
            </p>
          </div>

          <DialogFooter className="gap-3">
            <Button 
              variant="outline" 
              onClick={() => setSigningDoc(null)}
              disabled={isSigning}
              className="border-zinc-200 text-zinc-400 hover:text-zinc-900 rounded-xl font-bold uppercase text-[10px]"
            >
              Cancelar
            </Button>
            <Button 
              onClick={() => handleSign(signingDoc)}
              disabled={isSigning}
              className="bg-primary font-black uppercase flex-1 h-12 text-white rounded-xl shadow-lg shadow-primary/20"
            >
              {isSigning ? "PROCESSANDO ASSINATURA..." : "CONFIRMAR ASSINATURA AGORA"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
