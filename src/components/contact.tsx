
import { Mail, Phone, Instagram, Youtube, Twitter, Music2 } from "lucide-react";
import { ContactForm } from "./contact-form";
import { SectionHeading } from "./section-heading";
import { cn } from "@/lib/utils";

export function ContactSection() {
  const soundcloudUrl = "https://soundcloud.com/vini-amaral-748220502";

  const SOCIALS = [
    { icon: <Instagram className="h-6 w-6" />, href: "https://instagram.com", color: "hover:bg-zinc-900 hover:text-white" },
    { icon: <Youtube className="h-6 w-6" />, href: "https://youtube.com", color: "hover:bg-zinc-900 hover:text-white" },
    { icon: <Music2 className="h-6 w-6" />, href: soundcloudUrl, color: "hover:bg-zinc-900 hover:text-white" },
    { icon: <Twitter className="h-6 w-6" />, href: "https://twitter.com", color: "hover:bg-zinc-900 hover:text-white" },
  ];

  return (
    <section id="contato" className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="space-y-12">
            <SectionHeading 
              badge="Fale Conosco"
              title={<>Vamos Criar o Próximo <span className="text-primary italic">Hit.</span></>}
              description="Interessado em produção, agenciamento ou colaborações? Deixe sua mensagem e nossa equipe entrará em contato."
            />

            <div className="space-y-8">
              <div className="flex items-center gap-8 text-zinc-900 group cursor-pointer">
                <div className="p-6 bg-zinc-50 group-hover:bg-primary group-hover:text-white transition-all shadow-sm border border-zinc-100">
                  <Mail className="h-8 w-8" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 font-black mb-2">E-mail Profissional</p>
                  <p className="text-3xl font-black italic tracking-tighter uppercase">contato@dmgrecords.com.br</p>
                </div>
              </div>

              <div className="flex items-center gap-8 text-zinc-900 group cursor-pointer">
                <div className="p-6 bg-zinc-50 group-hover:bg-zinc-900 group-hover:text-white transition-all shadow-sm border border-zinc-100">
                  <Phone className="h-8 w-8" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 font-black mb-2">WhatsApp Business</p>
                  <p className="text-3xl font-black italic tracking-tighter uppercase">+55 51 93380-6899</p>
                </div>
              </div>
            </div>

            <div className="flex gap-6 pt-10">
              {SOCIALS.map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={cn(
                    "h-16 w-16 bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-400 transition-all hover:scale-110 shadow-sm",
                    social.color
                  )}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 bg-primary/5 blur-[100px] rounded-full" />
            <div className="relative z-10 bg-white border border-zinc-100 p-12 shadow-2xl">
               <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
