
"use client";

import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

export function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem Enviada!",
      description: "Nossa equipe entrará em contato em breve pelo WhatsApp ou E-mail.",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-3">
        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Nome Completo</label>
        <Input 
          placeholder="Seu nome artístico ou comercial" 
          className="bg-zinc-50 border-zinc-200 rounded-2xl h-16 focus:border-zinc-900 transition-all font-bold uppercase text-xs tracking-widest px-6" 
          required 
        />
      </div>
      <div className="space-y-3">
        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Endereço de E-mail</label>
        <Input 
          type="email" 
          placeholder="seuemail@exemplo.com" 
          className="bg-zinc-50 border-zinc-200 rounded-2xl h-16 focus:border-zinc-900 transition-all font-bold uppercase text-xs tracking-widest px-6" 
          required 
        />
      </div>
      <div className="space-y-3">
        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Sua Mensagem</label>
        <Textarea 
          placeholder="Como podemos ajudar na sua carreira?" 
          className="bg-zinc-50 border-zinc-200 rounded-3xl min-h-[180px] focus:border-zinc-900 transition-all font-bold uppercase text-xs tracking-widest p-6 leading-loose" 
          required 
        />
      </div>
      <Button 
        type="submit" 
        className="w-full h-20 bg-zinc-900 text-lg font-black tracking-tighter hover:bg-primary transition-all shadow-xl text-white uppercase italic"
      >
        ENVIAR AGORA <Send className="ml-3 h-6 w-6" />
      </Button>
    </form>
  );
}
