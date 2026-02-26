
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
    <form onSubmit={handleSubmit} className="space-y-6 relative z-10 bg-card p-10 border border-white/5">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full" />
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-widest text-white/60">Nome Completo</label>
        <Input 
          placeholder="Seu nome artístico ou comercial" 
          className="bg-black/50 border-white/10 rounded-none h-14 focus:border-primary transition-all" 
          required 
        />
      </div>
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-widest text-white/60">Endereço de E-mail</label>
        <Input 
          type="email" 
          placeholder="seuemail@exemplo.com" 
          className="bg-black/50 border-white/10 rounded-none h-14 focus:border-primary transition-all" 
          required 
        />
      </div>
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-widest text-white/60">Sua Mensagem</label>
        <Textarea 
          placeholder="Como podemos ajudar na sua carreira?" 
          className="bg-black/50 border-white/10 rounded-none min-h-[150px] focus:border-primary transition-all" 
          required 
        />
      </div>
      <Button 
        type="submit" 
        className="w-full h-16 bg-primary text-lg font-black tracking-tighter hover:bg-primary/90 rounded-none transition-all shadow-lg shadow-primary/20"
      >
        ENVIAR AGORA <Send className="ml-2 h-5 w-5" />
      </Button>
    </form>
  );
}
