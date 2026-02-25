
"use client";

import { Mail, Phone, Instagram, Youtube, Twitter, Send, Music2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

export function ContactSection() {
  const soundcloudUrl = "https://soundcloud.com/vini-amaral-748220502";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem Enviada!",
      description: "Entraremos em contato o mais breve possível.",
    });
  };

  return (
    <section id="contato" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2">
                <div className="h-1 w-12 bg-primary" />
                <span className="text-primary font-black uppercase tracking-widest">Fale Conosco</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase italic">
                Vamos Criar o Próximo <span className="text-primary">Hit.</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
                Interessado em produção, agenciamento ou colaborações? Deixe sua mensagem e nossa equipe entrará em contato.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-white group cursor-pointer">
                <div className="p-4 bg-zinc-900 group-hover:bg-primary transition-colors">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold">E-mail Profissional</p>
                  <p className="text-lg font-bold">contato@dmgrecords.com.br</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-white group cursor-pointer">
                <div className="p-4 bg-zinc-900 group-hover:bg-accent transition-colors">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold">WhatsApp Business</p>
                  <p className="text-lg font-bold">+55 51 93380-6899</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="h-12 w-12 bg-zinc-900 hover:bg-primary flex items-center justify-center text-white transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="h-12 w-12 bg-zinc-900 hover:bg-red-600 flex items-center justify-center text-white transition-all">
                <Youtube className="h-5 w-5" />
              </a>
              <a href={soundcloudUrl} target="_blank" rel="noopener noreferrer" className="h-12 w-12 bg-zinc-900 hover:bg-[#ff5500] flex items-center justify-center text-white transition-all">
                <Music2 className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="h-12 w-12 bg-zinc-900 hover:bg-blue-400 flex items-center justify-center text-white transition-all">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="bg-card p-10 border border-white/5 relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full" />
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/60">Nome Completo</label>
                <Input placeholder="Seu nome artístico ou comercial" className="bg-black/50 border-white/10 rounded-none h-14 focus:border-primary" required />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/60">Endereço de E-mail</label>
                <Input type="email" placeholder="seuemail@exemplo.com" className="bg-black/50 border-white/10 rounded-none h-14 focus:border-primary" required />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/60">Sua Mensagem</label>
                <Textarea placeholder="Como podemos te ajudar hoje?" className="bg-black/50 border-white/10 rounded-none min-h-[150px] focus:border-primary" required />
              </div>
              <Button type="submit" className="w-full h-16 bg-primary text-lg font-black tracking-tighter hover:bg-primary/90 rounded-none">
                ENVIAR AGORA <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
